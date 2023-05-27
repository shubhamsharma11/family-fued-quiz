import { createRouter, createWebHistory } from 'vue-router'
import QuizPage from '../views/QuizPage.vue'
import DashBoard from "../views/DashBoard.vue";

const routes = [
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizPage
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashBoard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
