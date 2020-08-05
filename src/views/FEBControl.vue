<template>
  <v-container fluid>
    <v-card class="ma-2 pa-2" :loading="loadingChambers">
      <v-card-title> Chamber Selection </v-card-title>
      <v-card-actions>
        <v-row>
          <v-col sm="4">
            <v-autocomplete
                v-model="selectedChamber"
                :items="chambers.name"
                hide-selected
                chips
                label="Select the Chamber"
                solo
                clearable
            ></v-autocomplete>
          </v-col>
          <v-col >
            <v-btn large @click="loadChambers()"> Select </v-btn>
          </v-col>
       </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "FEBControl",

  data: () => ({
    selectedChamber: null,
    chambers: {name: [], id: []},
    loadingChambers: false,
    errors: false
  }),

  methods: {
    loadChambers () {
      this.loadingChambers = true
      let index = this.chambers.name.indexOf(this.selectedChamber)
      let id = this.chambers.id[index]
      axios
            .get("http://rpcos4ph2db.web.cern.ch/testdb/" + id)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            })
            .finally(() => {
              this.loadingChambers = false;
            })
    }
  },

  mounted: function () {
    var DBurl = "http://rpcos4ph2db.web.cern.ch/testdb/_partition/chamber/_design/chambers_name/_view/all";
    this.loadingChambers = true;
    axios
        .get(DBurl)
        .then(response => {
          var chambers = response.data.rows;
          for (var c in chambers){
            this.chambers.id.push(chambers[c].id), this.chambers.name.push(chambers[c].value.name);
          }
        })
        .catch(error => {
          console.log(error);
          this.errors = true;
        })
        .finally(() => {
          this.loadingChambers = false;
        });
    }

}
</script>
