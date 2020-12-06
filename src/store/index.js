import Vue from 'vue'
import Vuex from 'vuex'
import exam from './modules/exam';
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exam
  }
})
