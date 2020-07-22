<template>
  <v-container>
    <v-card>
      <v-card-title>Commands</v-card-title>

      <v-card-text>
        <section v-if="errored">
          <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
          <div v-if="loading">Loading...</div>

          <div v-else>{{info}}</div>
        </section>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Commands",

  data: () => ({
    info: null,
    loading: true,
    errored: false
  }),
  methods: {
    loadData: function () {
      this.info = null
      this.loading = true
      this.errored = false
      axios
        // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .get("http://httpstat.us/200?sleep=1000")
        .then(response => {
          this.info = response.data;
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  activated() {
    setInterval(() => {this.loadData()}, 5000); 
  }
};
</script>
