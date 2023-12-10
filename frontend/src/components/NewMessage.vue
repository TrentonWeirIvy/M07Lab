<template>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-form @submit.prevent="submitForm">
              <v-card-title class="headline" style="background-color: black; color:white;">
                Message Form
              </v-card-title>
  
              <v-container>
                <v-row>
                  <v-col>
                    <v-text-field v-model="messageBody" label="Message" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
  
              <v-card-actions>
                <v-btn type="submit">Submit</v-btn>
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
      messageBody: '',
    };
  },
  methods: {
    async submitForm() {
      try {
        this.$store.dispatch('newMessage',this.messageBody); // Corrected: use store.state.msgs
        this.messageBody = '';

      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  },
};
</script>
