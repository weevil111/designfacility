<template>
  <v-sheet>
    <v-row no-gutters class="d-flex align-center">
      <span>Design Facility</span>
      <v-icon color="secondary">mdi-circle-medium</v-icon>
      <span class="primary--text text-uppercase">{{examTitle}}</span>
      <v-spacer></v-spacer>
      <span class="text-center px-5 py-1 primary white--text rounded-lg" v-if="showSections"
      >{{`${minutes}m : ${seconds}s`}}</span>
    </v-row>
    <v-row no-gutters v-if="showSections">
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
  props: {
    showSections: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      remainingTime:0,
      timer: null
    }
  },
  computed: {
    ...mapGetters(["time","examTitle","section","sectionNames"]),
    minutes(){
      return Math.floor(this.remainingTime / 60);
    },
    seconds(){
      return this.remainingTime - this.minutes*60;
    }
  },
  methods: {
    ...mapActions(["setNewSection","setNewQuestion","endExam"]),
    changeSection(index){
      this.setNewSection(index);
      this.setNewQuestion(0);
      // forceUpdate because vue cannot detect deep values in Object or Array
      this.$forceUpdate(); 
    },
    startTimer(){
      this.remainingTime = this.time*60;
      this.timer = setInterval(() => {
        this.remainingTime = this.remainingTime - 1;
        if(this.remainingTime <= 0 ){
          clearInterval(this.timer);
          this.endExam();
        }
      },1000)
    }
  },
  mounted() {
    setTimeout(this.startTimer,1000)
  },
  beforeDestroy(){

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