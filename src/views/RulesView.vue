<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ props }">
      <p class="text-caption font-weight-light font-italic pa-2"> 
        * Please click <a class="v-link" v-bind="props">here</a> to view game rules
      </p>
    </template>
    <v-card>
      <v-toolbar
        dark
      >
        <v-toolbar-title>Game Rules</v-toolbar-title>
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
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>User Controls</v-list-subheader>
        <v-list-item title="Content filtering" subtitle="Set the content filtering level to restrict apps that can be downloaded"></v-list-item>
        <v-list-item title="Password" subtitle="Require password for purchase or use password to restrict purchase"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        lines="two"
        subheader
      >
        <v-list-subheader>General</v-list-subheader>
        <v-list-item title="Notifications" subtitle="Notify me about updates to apps or games that I downloaded">
          <template v-slot:prepend>
            <v-checkbox v-model="notifications"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Sound" subtitle="Auto-update apps at any time. Data charges may apply">
          <template v-slot:prepend>
            <v-checkbox v-model="sound"></v-checkbox>
          </template>
        </v-list-item>
        <v-list-item title="Auto-add widgets" subtitle="Automatically add home screen widgets">
          <template v-slot:prepend>
            <v-checkbox v-model="widgets"></v-checkbox>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'RulesView',
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
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