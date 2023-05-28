<template>
  <v-dialog
    transition="dialog-top-transition"
    width="auto"
    v-model="dialog"
    persistent
  >
    <!-- <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >From the top</v-btn>
    </template> -->
    <v-card>
      <v-toolbar
        align="center"
        title="Lets Start"
      ></v-toolbar>
      <v-card-title align="center">Flip the Coin to select who play first</v-card-title>
      <v-card-text>
        <div class="pa-12">
          <div id="coin" @click="flipCoin" :class="coinClass">
            <div
              class="side-a pt-10"
              style="text-align: center"
            >
              Team Red
            </div>
            <div
              class="side-b pt-10"
              style="text-align: center"
            >
              Team Blue
            </div>
          </div>
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions>
        <p>
          {{ resultDisplay }}
        </p>
        <v-spacer />
        <v-btn
          :disabled="!resultDisplay"
          @click="startGame"
        >
          Let's Go
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  name: 'CoinFlip',
  data() {
    return {
      flipResult: 0,
      dialog: true,
      coinClass: '',
      result: '',
      resultDisplay: '',
    };
  },
  methods: {
    flipCoin() {
      if(!this.resultDisplay)
      {
        this.flipResult = Math.random();
        this.coinClass = '';
        this.resultDisplay = ''

        setTimeout(() => {
          if (this.flipResult <= 0.5) {
            this.coinClass = 'heads';
            this.result = 'Team Red';
          } else {
            this.coinClass = 'tails';
            this.result = 'Team Blue';
          }
        }, 100);
        
        setTimeout(() => {
          this.resultDisplay = this.result + ' wins the toss'
          console.log(this.result + ' wins the toss')
        }, 3000);        
      }
    },
    startGame() {
      var quizData = this.$store.state.quizData;
      quizData.forEach(element => {
        element.Answers.forEach(answer => {
          answer.isHidden = true;
        });
      });
      this.$store.commit('SET_QUIZ_DATA', quizData)

      var teams = this.$store.state.teams;
      teams.forEach(element => {
        element.Score = 0
        element.Retry = 5
      });
      this.$store.commit('SET_TEAMS', teams)
      this.$store.commit('SET_CURRENT_TEAM', this.result)
      
      this.dialog = false
    }
  },
};
</script>

<style>
  #coin {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  #coin div {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
            border-radius: 50%;
    -webkit-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
      -moz-box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
            box-shadow: inset 0 0 45px rgba(255,255,255,.3), 0 12px 20px -10px rgba(0,0,0,.4);
  }
  .side-a {
    background-color: #CF6679;
    color: white;
  }
  .side-b {
    background-color: #2196F3;
    color: white;
  }

  #coin {
    transition: -webkit-transform 1s ease-in;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }
  #coin div {
    position: absolute;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .side-a {
    z-index: 100;
  }
  .side-b {
    -webkit-transform: rotateY(-180deg);
    transform: rotateY(-180deg);

  }

  #coin.heads {
    animation: flipHeads 3s ease-out forwards;
  }

  #coin.tails {
    animation: flipTails 3s ease-out forwards;
  }

  @keyframes flipHeads {
    from { transform: rotateY(0); }
    to { transform: rotateY(1800deg); }
  }

  @keyframes flipTails {
    from { transform: rotateY(0); }
    to { transform: rotateY(1980deg); }
  }
</style>