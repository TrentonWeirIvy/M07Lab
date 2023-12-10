<template>
  <v-app>
    <v-toolbar app>
      <v-btn flat to="/">Messages</v-btn>
      <v-btn flat to="/newMessage">New Messages</v-btn>
      <v-spacer/>
      <v-btn flat v-if="!$store.state.token" to="/Register">Register</v-btn>
      <v-btn flat v-if="!$store.state.token" to="/Login">Login</v-btn>
      <v-btn flat v-if="$store.state.token" @click="$store.commit('logout')">Logout</v-btn>
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
  },
  data(){
    return {
    };
  }
}
</script>

<style>
</style>
