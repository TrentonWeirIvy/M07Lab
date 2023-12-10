<template>
    <v-container>
        <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-toolbar>
                <v-toolbar-title>Message</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                {{ messageBody }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
      

  </template>
  

<script>

export default {
  name: 'MessageItem',
  data() {
    return {
      messageBody: '',
    };
  },
  async created(){
    console.log(this.$route.params.id);
    this.messageBody = await this.$store.dispatch('getMessage',this.$route.params.id)
  }
};
</script>
