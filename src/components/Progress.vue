<template>
  <v-container fluid class="ma-0 pa-0">
    <div class="text-center">
      <v-avatar tile width="40px" height="40px">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar icon">
      </v-avatar>
      Best of Luck !
    </div>  
    <div class="mt-2 pl-1 d-flex align-center">
      <v-avatar color="#4d5358" size="25" class="black-border">
        <span class="white--text">2</span>
      </v-avatar>
      <span class="ma-1 ">Question not visited</span>
    </div>
    <div class="mt-2 pl-1 d-flex align-center">
      <v-avatar color="#d12626" size="25" class="black-border">
        <span class="white--text">2</span>
      </v-avatar>
      <span class="ma-1 ">Question not Answered</span>
    </div>
    <div class="mt-2 pl-1 d-flex align-center">
      <v-avatar color="#2cb927" size="25" class="black-border">
        <span class="white--text">2</span>
      </v-avatar>
      <span class="ma-1 ">Question Answered</span>
    </div>
    <div class="mt-2 pl-1 d-flex align-center">
      <v-avatar color="#00bcd4" size="25" class="black-border">
        <span class="white--text">4</span>
      </v-avatar>
      <span class="ma-1 ">Question Marked</span>
    </div>
    <div class="mt-2 pl-1 d-flex align-center">
      <v-avatar color="#a4a82c" size="25" class="black-border">
        <span class="white--text">5</span>
      </v-avatar>
      <span class="ma-1 ">Question Answered & Marked for Review</span>
    </div>
    <div class="text-center my-1 py-2 section-heading font-weight-bold" >{{section.name}}</div>
    <div class="pl-1">
      Choose a question
      <div class="d-flex flex-wrap legend">
        <v-avatar :color="legendColor(ques)" size="35" class="ma-2 black-border"
          :class="{'elevation-10':question._id===ques._id}"
          v-for="ques in section.questions" :key="ques.questionNumber"
          @click="changeQuestion(ques.questionNumber)"
          >
          <span class="white--text">{{ques.questionNumber}}</span>
        </v-avatar>
      </div>
    </div>
    <div class="btn-container d-flex mb-3">
      <v-btn outlined text class="submit-btn">
        Submit Exam
      </v-btn>
    </div>
  </v-container>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';

export default {
  computed:mapGetters(["section","question"]),
  methods: {
    ...mapActions(["setNewQuestion"]),
    legendColor(question) {
      if(!question.visited || question._id === this.question._id){
        return "#4d5358";
      }
      if(question.selectedOption === ""){
        if(question.marked){
          return "#00bcd4";
        }else{
          return "#d12626";
        }
      }else{
        if(question.marked){
          return "#a4a82c";
        }else{
          return "#2cb927";
        }
      }
    },
    changeQuestion(questionNumber) {
      this.setNewQuestion(questionNumber-1);
    }
  },
  created(){
    setTimeout(() => {
      this.$forceUpdate();
    },1000);
  }
}
</script>

<style scoped>
  .section-heading{
    background: #62B6CB 0% 0% no-repeat padding-box;
  }

  .legend{
    cursor: pointer;
  }

  .black-border{
    border: 1px solid black !important;
  }

  .btn-container{
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;
  }

  .submit-btn{
    border: 2px solid #62B6CB !important;
    border-radius: 23px;
    margin: 0 auto;
    color : #5FA8D3 !important;
    opacity: 0.5;
  }

</style>