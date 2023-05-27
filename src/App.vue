<template>
  <v-theme-provider>
    <!-- <splash-screen v-if="loading && settings.isSplash" /> -->
    <v-app app theme="dark">
      <!-- <app-bar :isTheme="settings.isTheme"/> -->
      <v-main>
        <router-view />
        <v-fab-transition>
          <v-btn
            v-if="settings.isGoTop"
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="primary"
            @click="toTop"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-main>
      <!-- <app-footer /> -->
    </v-app>
  </v-theme-provider>
</template>

<script>
import { settings } from "../settings";

export default {
  name: 'App',

  data: () => ({
    loading: true,
    fab: false,
    settings: settings,
  }),
  created(){
  },
  mounted() {
    setTimeout(() => {
        this.loading = false
    }, 4000)
    
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  },
  methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
};
</script>

<style>
  html { overflow-y: auto }
</style>