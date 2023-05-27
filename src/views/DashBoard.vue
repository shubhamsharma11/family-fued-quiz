<template>
  <v-container>
    <v-card
      class="mx-auto"
    >
      <!-- <v-img
        src="../../public/assets/developerActivity.svg"
        height="200px"
        cover
      ></v-img> -->

      <h1
        class="pa-12 text-h2 text-center"
      >
        Family Vued
      </h1>

      <v-card-title>
        Create a new Quiz
      </v-card-title>

      <v-card-subtitle>
        Configure quiz settings
      </v-card-subtitle>

      <v-card-text>
        <v-text-field
          v-model="teams[0].Title"
          variant="outlined"
          label="Red Team Name" />
        <v-text-field
          v-model="teams[1].Title"
          variant="outlined"
          label="Blue Team Name" />
        <v-text-field
          v-model="question_lenght"
          name="question_lenght" 
          type="number"
          variant="outlined"
          label="Number of Questions (Min. 10)" 
          min="10"
          step="10" />
        <v-select
          v-model="question_type"
          :items="items"
          variant="outlined"
          label="Answers per question"
        />
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions> 
        <v-btn
          color="info"
          @click="StartGame"
        >
          Start Game!
        </v-btn>
        <v-spacer />
        <rules-view></rules-view>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import RulesView from "../views/RulesView.vue";

  export default {
   data () {
      return {
        question_lenght: '10',
        question_type: '3 Answers',
        items: [
          '3 Answers',
          '4 Answers',
          '5 Answers',
          '6 Answers',
          '7 Answers',
        ],
        teams:[
          {
            Name: "Team Red",
            Title: "Team A",
            Score: 0,
            Retry: 5
          },
          {
            Name: "Team Blue",
            Title: "Team B",
            Score: 0,
            Retry: 5
          }
        ],
      } 
   },
   
   components: {
    RulesView
   },

   methods: {
    StartGame() {
      if (this.question_type !== '' && this.question_lenght !== '' &&  this.question_lenght >= 10) {
        this.$store.dispatch('fetchQuizDataByParam', {limit: this.question_lenght, sheet: this.question_type})
        this.$store.commit('SET_TEAMS', this.teams)
        this.$router.push({ path: 'quiz' })
      }
      else {
        return true
      }      
    },
   },
  }
</script>
