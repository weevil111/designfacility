<template>
  <v-sheet>
    <v-row no-gutters class="d-flex align-center">
      <span>Design Facility</span>
      <v-icon color="secondary">mdi-circle-medium</v-icon>
      <span class="secondary--text text-uppercase">{{examTitle}}</span>
      <v-spacer></v-spacer>
      <span class="text-center px-5 py-1 primary white--text rounded-lg" >Time Left</span>
    </v-row>
    <v-row no-gutters>
      <div class="d-flex mt-2">
        <div class="pr-10 pl-4 primary white--text section-title text-center">Selected Section</div>
        <div class="pr-10 pl-4 primary--text section-title ml-n9 text-center white-background"
          v-for="i in 5" :key="i"
        > non selected section</div>
      </div>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TopSection",
  computed: mapGetters(["examTitle"])
}
</script>

<style scoped>
  .dot{
    width: 8px;
    height: 8px;
    background: #5FA8D3 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 5px;
  }

  .section-title{
    border: 1px solid #2F6690;
    border-radius: 21px;
    opacity: 1;
    cursor: pointer;
  }

  .white-background{
    background: white;
  }
</style>