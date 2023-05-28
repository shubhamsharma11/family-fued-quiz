<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ props }">
      <p class="text-caption font-weight-light font-italic pa-2"> 
        * Please click <a class="v-link" v-bind="props">here</a> to view Rules, Terms And Conditions of the game
      </p>
    </template>
    <v-card>
      <v-toolbar
        dark
      >
        <v-toolbar-title>Rules, Terms And Conditions</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-list lines="one">
        <v-list-subheader>Rules</v-list-subheader>
        <v-list-item 
          v-for="(rule, i) in gameRules" 
          :key="i"
        >
          <v-list-item-title>{{ i + 1 }}. {{ rule }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-subheader>Terms And Conditions</v-list-subheader>
        <v-list-item 
          v-for="(term, i) in termsConditions" 
          :key="i"
        >
          <v-list-item-title>{{ i + 1 }}. {{ term }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
  import { rules, terms } from "../../rules";
  export default {
    name: 'RulesView',
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        gameRules: rules,
        termsConditions: terms,
      }
    },
  }
</script>

<style>
  .dialog-bottom-transition-enter-active,
  .dialog-bottom-transition-leave-active {
    transition: transform .2s ease-in-out;
  }

  a {
    text-decoration: underline;
    cursor: pointer;
  }
</style>