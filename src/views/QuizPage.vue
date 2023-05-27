<template>
  <v-container>
    <coin-flip />
    <v-row>
      <v-col cols="6" style="text-align: center">
        <v-card 
          :color="currentTeam === teams[0].Name ? 'error' : undefined"
          theme="dark"
        >
          <v-card-title>{{ teams[0].Name }}</v-card-title>
          <v-card-subtitle>{{ teams[0].Title }}</v-card-subtitle>
          <v-card-text class="d-flex justify-center">
            <v-card flat max-width="fit-content">
              <v-card-text>
                <v-row align="center">
                  <v-col>
                    <span class="text--primary">{{ teams[0].Score }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>           
          </v-card-text>
          <v-card-text>Retry : {{ teams[0].Retry }} </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6" style="text-align: center">
        <v-card 
          :color="currentTeam === teams[1].Name ? 'info' : undefined"
          theme="dark"
        >
          <v-card-title>{{ teams[1].Name }}</v-card-title>
          <v-card-subtitle>{{ teams[1].Title }}</v-card-subtitle>
          <v-card-text class="d-flex justify-center">
            <v-card flat max-width="fit-content">
              <v-card-text>
                <v-row align="center">
                  <v-col>
                    <span class="text--primary">{{ teams[1].Score }}</span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>           
          </v-card-text>
          <v-card-text>Retry : {{ teams[1].Retry }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row align="center" justify="center" style="text-align: center">
              <v-col cols="12">Question {{ currentCount }} of {{ totalCount }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-text>
            <v-row align="center" justify="center" style="text-align: center">
              <v-col cols="12">{{ question }}</v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="mt-5">
          <v-card-text>
            <v-row align="center" justify="center">
              <v-col
                cols="6"
                v-for="(item, index) in answers"
                :key="index"
              >
                <v-card
                  v-if="item.isHidden"
                  variant="tonal"
                  style="text-align: center"
                  class="pa-2"
                >
                  <v-row>
                    <v-col cols="12">{{ index + 1 }}</v-col>
                  </v-row>
                </v-card>
              
                <v-card
                  v-else
                  variant="tonal"
                  style="text-align: center"
                  class="pa-2"
                >
                  <v-row>
                    <v-col cols="12" md="1">{{ index + 1 }}</v-col>
                    <v-divider vertical/>
                    <v-col cols="12" md="9">{{ item.Title }}</v-col>
                    <v-divider vertical/>
                    <v-col cols="12" md="2">{{ item.Score }}</v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-row align="center" justify="center">
          <v-col md="9" cols="12">
            <v-text-field
              v-model="answer"
              variant="outlined"
              label="Provide your answer here"
              class="mt-4"
              required
            />
          </v-col>
          <v-col md="3" cols="12">
            <v-btn
              :color="currentTeam === teams[0].Name ? 'error' : 'info'"
              @click="checkAnswer"
              :disabled="!answer"
            >
             Check Your Answer
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        v-if="isGameOver"
        @onClick="showAllAnswers"
      >
        Show All Answers
      </v-btn>
      <v-spacer />
      <v-btn
        v-if="isGameOver"
        to="/"
      >
        Play Again
      </v-btn>
    </v-row>
    <!-- <v-alert
      v-model="isGameOver"
      color="success"
      icon="$success"
      title="Congratulations!!!"
      :text="`${winner.Title}, You have won the game with ${winner.Score} points`"
    ></v-alert> -->
    <v-dialog
      transition="dialog-top-transition"
      width="auto"
      v-model="gameOverDialog"
      persistent
    >
      <v-card>
        <v-toolbar
          align="center"
          title="Game Over!!!"
        ></v-toolbar>
        <v-card-title align="center">Congratulations!!!</v-card-title>
        <v-card-text>
          {{ winner.Title }}, You have won the game with {{ winner.Score }} points
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            @onClick="gameOverDialog=false"
          >
            Close
          </v-btn>
          <v-spacer />
          <v-btn
            to="/"
          >
            Play Again
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CoinFlip from "../components/CoinFlip.vue";

export default {
  data() {
    return {
      currentCount: 1,
      answer: "",
      isGameOver: false,
      gameOverDialog: false,
      winner: {},
    };
  },
  components: {
    CoinFlip
  },
  computed: {
    question() {
      return this.$store.state.quizData[this.currentCount - 1].Question;
    },
    answers() {
      return this.$store.state.quizData[this.currentCount - 1].Answers;
    },
    totalCount() {
      return this.$store.state.settings.QuestionNum;
    },
    teams() {
      return this.$store.state.teams;
    },
    currentTeam() {
      return this.$store.state.currentTeam;
    },
  },
  mounted() {
    if (
      !this.$store.state.loading &&
      this.$store.state.quizData[this.currentCount - 1].Question === ""
    ) {
      this.$router.push({ path: "/" });
    }
  },
  methods: {
    checkAnswer() {
      var result = null //this.answers.filter((x) => x["Title"] == this.answer);

      this.answers.forEach(ans => {
        if(ans["Title"] == this.answer)
        {
          ans.isHidden = false;
          result = ans
        }
      });

      if (result !== null)  {
        // then update score
        this.teams.forEach((x) => {
          if (x.Name === this.currentTeam) {
            x.Score += result.Score;
          }
        });
        this.$store.commit("SET_TEAMS", this.teams);

        // update current team name
            
        this.$store.commit('SET_CURRENT_TEAM', this.currentTeam === this.teams[0].Name
            ? this.teams[1].Name
            : this.teams[0].Name)

        var res = this.answers.filter((x) => x.isHidden === true);

        if(res.length === 0)
        {
          this.currentCount++;
        }
      } else {
        // decrese retry count
        this.teams.forEach((x) => {
          if (x.Name === this.currentTeam) {
            x.Retry--;
            if (x.Retry === 0) {
              this.isGameOver = true;
              x.IsWinner = false;

              // Set the other player as the winner
              const otherPlayer = this.teams.find((team) => team.Name !== this.currentTeam);
              otherPlayer.IsWinner = true;
              otherPlayer.Score += x.Score
              x.Score = 0
              this.winner = otherPlayer;
              this.gameOverDialog = true;
            }
          }
        });

        this.$store.commit("SET_TEAMS", this.teams);
      }
      this.answer = ''
    },
    showAllAnswers() {
      this.answers.forEach(ans => {
          ans.isHidden = false;
      });
    }
  },
};
</script>
