<template>
  <v-container fluid>
    <v-card class="ma-2 pa-2" :loading="loadingChambers">
      <v-card-title> Chamber Selection </v-card-title>
      <v-card-actions>
        <v-row>
          <v-col sm="10">
            <v-autocomplete
                v-model="selectedChambers"
                :items="chambers"
                hide-selected
                deletable-chips
                chips
                label="Select the Chambers"
                solo
                clearable
                multiple
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
export default {
  name: "FEBControl",

  data: () => ({
    selectedChambers: [],
    chambers: ["Chamber 1",
               "Chamber 2",
               "Chamber 3",
               "Chamber 4",
               "Chamber 5",
               "Chamber 6"
                ],
    loadingChambers: false

  }),

  methods: {
    loadChambers () {
      this.loadingChambers = true
      console.log(this.selectedChambers)
      setTimeout(() => (this.loadingChambers = false), 2000)
    }
  }

}
</script>
