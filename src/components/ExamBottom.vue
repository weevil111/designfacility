<template>
  <v-container fluid class="d-flex flex-wrap primary">
    <v-btn color="white" class="text-capitalize secondary--text mr-4 rounded-lg"
      @click="markOrSave"
      >Mark for Review & Next</v-btn>
    <v-btn color="white" class="text-capitalize secondary--text mr-4 rounded-lg"
      @click="clearResponse"
    >Clear Response</v-btn>
    <v-spacer></v-spacer>
    <v-btn color="secondary" class="text-capitalize white--text mr-4 rounded-lg"
      @click="markOrSave(false)"
    >Save and Next</v-btn>
  </v-container>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  methods: {
    ...mapActions(['markOrSave','clearResponse']),
  }
}
</script>