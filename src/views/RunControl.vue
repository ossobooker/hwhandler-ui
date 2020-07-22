<template>
  <v-container fluid>
    <v-row no-gu4ters>


      <v-col sm="3">
        <v-switch v-model="enable_links" :label="`Enable links:`"></v-switch>

        <v-switch v-model="auto_config" :label="`Auto Config:`"></v-switch>
        
        <v-switch v-model="self_recover" :label="`Self Recover:`"></v-switch>

        <p><v-text-field
        v-model="run_number"
        :rules="run_number_rules"
        label="Run Number"
      ></v-text-field></p>
         
         <p><v-text-field
        v-model="run_key"
        label="Run Key"
      ></v-text-field></p>

      <p><v-text-field
        v-model="configuration_key"
        label="Configuration Key"
      ></v-text-field></p>

      </v-col>
      <v-col sm="8">
        <v-btn  class="ma-2" large>Start</v-btn>

        <v-btn  class="ma-2" large disabled >Pause</v-btn>
        
        <v-btn  class="ma-2" large disabled >Stop</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'RunControl',

    data: () => ({
      enable_links: true,
      auto_config: true,
      self_recover: false,
      run_number: '',
      run_number_rules: [
        v => (!isNaN(parseFloat(v)) && v >= 0 && v <= 9999999999999999999999999) || 'Run number must be a number',
      ],
      run_key: '',
      configuration_key: '',
    }),
  }
</script>
