<template>
  <v-container>
    <div class="primary--text text-decoration-underline mt-4">{{`Question no. ${question.questionNumber}`}}</div>
    <div class="text-center question-text py-12">{{question.quesText}}</div>
    <div class="d-flex my-4" @click="setSelectedOption(question.option1)">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">A</div>
      <div class="option-text ml-4 pt-1" :class="{'option-selected':question.selectedOption === question.option1}">
        {{question.option1}}</div>
    </div>
    <div class="d-flex my-4" @click="setSelectedOption(question.option2)">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">B</div>
      <div class="option-text ml-4 pt-1" :class="{'option-selected':question.selectedOption === question.option2}">
        {{question.option2}}</div>
    </div>
    <div class="d-flex my-4" @click="setSelectedOption(question.option3)">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">C</div>
      <div class="option-text ml-4 pt-1" :class="{'option-selected':question.selectedOption === question.option3}">
        {{question.option3}}</div>
    </div>
    <div class="d-flex my-4" @click="setSelectedOption(question.option4)">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">D</div>
      <div class="option-text ml-4 pt-1" :class="{'option-selected':question.selectedOption === question.option4}">
        {{question.option4}}</div>
    </div>
  </v-container>
</template>

<script>

import { mapGetters, mapActions} from 'vuex';

export default {
  computed: mapGetters(["question"]),
  methods: mapActions(["setSelectedOption"])
}
</script>

<style scoped>

.question-text{
  min-height: 120px;
}

.option-selected{
  background: #CAE9FFE6 !important;
}

.option-text{
  background: #ffffff 0% 0% no-repeat padding-box;
  cursor: pointer;
  border: 1px solid #62B6CB;
  display: inline-block;
  width: 100%;
}

.option-legend{
  cursor: pointer;
  width: 34px;
  height: 34px;
  min-width: 34px;
}

</style>