import { createApp } from 'vue'
import App from './App.vue'

// Import dependencies
import vuetify from './plugins/vuetify'
import router from './router'
import store from "./store";


createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
