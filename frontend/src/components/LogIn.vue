<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-form @submit.prevent="login">
            <v-card-title class="headline" style="background-color: black; color:white;">
              Login
            </v-card-title>

            <v-container>
              <v-row>
                <v-col>
                  <v-text-field v-model="username" label="User Name" required></v-text-field>
                </v-col>
                <v-col>
                  <v-text-field v-model="password" label="Password" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>

            <v-card-actions>
              <v-btn @click="login">Login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      this.$store.dispatch('login', { username: this.username, password: this.password });
    },
  },
};
</script>
