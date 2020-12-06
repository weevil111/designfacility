<template>
  <v-app>
    <v-main>
      <v-row no-gutters>
        <v-col cols="10" class="pl-8 pr-4 py-4 exam-container">
          <TopExamSection />
          <QuestionSection />
          <ExamBottom class="bottom-examnav"/>
        </v-col>
        <v-col cols="2" class="py-4 exam-container">
          <Progress />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import TopExamSection from "./components/TopExamSection";
import QuestionSection from "./components/QuestionSection";
import Progress from './components/Progress';
import ExamBottom from './components/ExamBottom';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "App",

  components: {
    TopExamSection,
    QuestionSection,
    Progress,
    ExamBottom
  },

  data: () => ({
    
  }),
  computed: mapGetters(["exam"]),
  methods: {
    ...mapActions(["fetchExam"])
  },
  created() {
    this.fetchExam();
  }
};
</script>

<style scoped> 

  .exam-container{
    border-left:1px solid black;
    height:100vh;
    position: relative;
  }

  .bottom-examnav{
    position: absolute; 
    bottom:0px;
    left:0px;
  }
</style>