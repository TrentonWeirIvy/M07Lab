<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/newMessage">New Messages</v-btn>
      <v-spacer/>
      <v-btn flat to="/Register">Register</v-btn>
      <v-btn flat>Login</v-btn>
    </v-toolbar>
      
      <v-content>
        <router-view/>
      </v-content>
    

  </v-app>
</template>

<script>
// import MessagesMsg from './components/Messages.vue'
// import NewMessage from './components/NewMessage.vue';

export default {
  name: 'App',
  components: {
    // MessagesMsg,
    // NewMessage
  }
}
</script>

<style>
</style>
