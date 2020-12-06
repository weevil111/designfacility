<template>
  <v-sheet>
    <v-row no-gutters class="d-flex align-center">
      <span>Design Facility</span>
      <v-icon color="secondary">mdi-circle-medium</v-icon>
      <span class="primary--text text-uppercase">{{examTitle}}</span>
      <v-spacer></v-spacer>
      <span class="text-center px-5 py-1 primary white--text rounded-lg" >Time Left</span>
    </v-row>
    <v-row no-gutters>
      <div class="d-flex mt-2">
        <div class="pr-10 pl-4 section-title text-center"
          :class="[{'primary white--text':section.name === sectionName},
                   {'white-background primary--text':section.name !== sectionName},
                   {'ml-n9':index>0}]"
          v-for="(sectionName,index) in sectionNames" :key="index"
          @click="changeSection(index)"
        > {{sectionName}} </div>
      </div>
    </v-row>
  </v-sheet>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TopSection",
  computed: mapGetters(["examTitle","section","sectionNames"]),
  methods: {
    ...mapActions(["setNewSection","setNewQuestion"]),
    changeSection(index){
      this.setNewSection(index);
      this.setNewQuestion(0);
      // forceUpdate because vue cannot detect deep values in Object or Array
      this.$forceUpdate(); 
    }
  }
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