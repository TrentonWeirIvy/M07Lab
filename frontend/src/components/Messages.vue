<template>
  <div>
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title class="headline" style="background-color: black; color:white;">
              Messages {{ msg }}
            </v-card-title>
            <v-list>
              <v-list-item v-for="(message, index) in msgs" :key="index" :to="'messageitem/' + index">
                <v-list-item-content>
                  <v-list-item-title class="display-1" v-text="message?.text" />
                  <v-list-item-title class="display-1" v-text="message?.user" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MessagesMsg',
  props: {
    msg: String
  },
  computed: {
    msgs() {
      return this.$store.state.msgs;
    },
  },
  async created() {
    this.$store.dispatch('getMessages');
  },
};
</script>
