<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="10" class="pl-8">
          <TopExamSection />
          <QuestionSection />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import TopExamSection from "./components/TopExamSection";
import QuestionSection from "./components/QuestionSection";
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "App",

  components: {
    TopExamSection,
    QuestionSection,
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

