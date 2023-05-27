import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data: '',
    results: '',
    // --------------------
    loading: false,
    currentTeam: 'Team Red',
    quizData: [
      {
        Question: "",
        Answers: []
      }
    ],
    settings: {
      QuestionNum: 10,
      QuestionType: 3,
    },
    // ----------------------
    teams:[
      {
        Name: "Team Red",
        Title: "Team A",
        Score: 0,
        Retry: 5,
        IsWinner: false
      },
      {
        Name: "Team Blue",
        Title: "Team B",
        Score: 0,
        Retry: 5,
        IsWinner: false
      }
    ]
  },

  getters: {
  },
  mutations: {
    getData(state, newData) {
      state.data = '';
      state.data += newData;
    },
    updateResults(state, score) {
      state.results = '';
      state.results += score;
    },
    //-------
    SET_QUIZ_DATA(state, data) {
      state.quizData = data
    },
    SET_SETTINGS(state, setting) {
      state.settings = setting
    },
    SET_TEAMS(state, teams) {
      state.teams = teams
    },
    SET_CURRENT_TEAM (state, teamName) {
      state.currentTeam = teamName
    }
  },
  
  actions: {
    async fetchQuizData({ commit }) {
      try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbyOoDcEIoPM0tuONattL2VgBa1Sq3A8QMKPSm2KBS_6qZrQMBGEpK4nnuRwBp55lQOdlA/exec')
        commit('SET_QUIZ_DATA', response.data)
      } catch (error) {
        console.log(error)
      }
    },
    fetchQuizDataByParam({ commit }, param) {
      try {
        this.state.loading = true
        var url = 'https://script.google.com/macros/s/AKfycbyOoDcEIoPM0tuONattL2VgBa1Sq3A8QMKPSm2KBS_6qZrQMBGEpK4nnuRwBp55lQOdlA/exec'

        if (param.limit && param.sheet) {
          commit('SET_SETTINGS', { QuestionNum: param.limit, QuestionType: param.sheet })
        }
        url += '?limit=' + this.state.settings.QuestionNum + '&sheet=' + this.state.settings.QuestionType

        axios.get(url)
          .then(response => {
            const quizData = response.data

            quizData.forEach(element => {
              element.Answers.forEach(answer => {
                answer.isHidden = true;
              });
            });

            commit('SET_QUIZ_DATA', quizData)
            this.state.loading = false
          })
          .catch(error => {
            console.error(error)
          })

      } catch (error) {
        console.log(error)
      }
    },
  },
  
  modules: {
  }
})