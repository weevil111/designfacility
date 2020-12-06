<template>
  <v-container>
    <div class="primary--text text-uppercase text-decoration-underline mt-4">Question Number</div>
    <div class="text-center question-text py-12">{{question.quesText}}</div>
    <div class="d-flex my-4">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">A</div>
      <div class="option-text ml-4 pt-1">{{question.option1}}</div>
    </div>
    <div class="d-flex my-4">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">B</div>
      <div class="option-text ml-4 pt-1">{{question.option2}}</div>
    </div>
    <div class="d-flex my-4">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">C</div>
      <div class="option-text ml-4 pt-1">{{question.option3}}</div>
    </div>
    <div class="d-flex my-4">
      <div class="rounded-circle primary text-center white--text option-legend pt-1 d-inline-block">D</div>
      <div class="option-text ml-4 pt-1">{{question.option4}}</div>
    </div>
  </v-container>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  computed: mapGetters(["question"])
}
</script>

<style scoped>

.question-text{
  min-height: 120px;
}

.option-text{
  background: #CAE9FFE6 0% 0% no-repeat padding-box;
  border: 1px solid #62B6CB;
  display: inline-block;
  width: 100%;
}

.option-legend{
  width: 34px;
  height: 34px;
  min-width: 34px;
}

</style>