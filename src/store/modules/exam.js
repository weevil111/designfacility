import axios from 'axios';

const state = {
    exam: {},
    currentSection: {},
    currentQuestion: {},
    timeRemaining: true
};

const getters = {
  exam : state => state.exam,
  time: state => state.exam.examDurationInMinutes,
  examTitle: state => {
    if("examTitle" in state.exam){
      return state.exam.examTitle;
    }else{
      return "";
    }
  },
  section: state => state.currentSection,
  question: state => state.currentQuestion,
  sectionNames: state => {
    let sectionlist = []
    if ('sections' in state.exam){
      state.exam.sections.forEach( section => {
        Object.keys(section).forEach(sectionName => sectionlist.push(sectionName))
      })
    }
    return sectionlist;
  },
  examOver: state => !state.timeRemaining
}

const actions = {
  async fetchExam({commit}) {
    try{
      const response = await axios.get("http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/abhinav");
      const exam = response.data.exam;
      exam.sections.forEach( (section) => {
        let questionArray = Object.values(section)[0];
        questionArray.forEach((question,index) => {
          question.selectedOption = "";
          question.questionNumber = index + 1;
          question.marked = false;
          question.visited = false;
        })
      });
      commit('setExam',exam);
      commit('setCurrentSection',0);
      commit('setCurrentQuestion',0);
    }catch(e){
      console.log("An error occured while fetching exam : ",e);
    }
  },
  setNewSection({commit}, index){
    commit('setCurrentSection', index);
  },
  setNewQuestion({commit}, index){
    commit('setCurrentQuestion', index);
  },
  setSelectedOption({commit}, optionText){
    commit('selectOption', optionText);
  },
  markOrSave({commit, state, getters, dispatch}, mark = true){
    if(mark){
      commit('setMarked');
    }
    if (state.currentQuestion.questionNumber === state.currentSection.questions.length){
      let index = getters.sectionNames.indexOf(state.currentSection.name);
      if(index === state.exam.sections.length-1){
        return
      }else{
        dispatch('setNewSection',index+1);
        dispatch('setNewQuestion',0);
      }
    }else{
      dispatch('setNewQuestion',state.currentQuestion.questionNumber);
    }
  },
  clearResponse({commit}){
    commit('clearRes');
  },
  endExam({commit}){
    commit('end');
  }
}

const mutations = {
  setExam: (state, payload) => {
    state.exam = payload
  },
  setCurrentSection: (state, index) => {
    const section = state.exam.sections[index];
    const sectionName = Object.keys(section)[0];
    state.currentSection = {};
    state.currentSection.name = sectionName;
    state.currentSection.questions = section[sectionName];
  },
  setCurrentQuestion: (state, index) => {
    state.currentQuestion = state.currentSection.questions[index];
    state.currentQuestion.visited = true;
  },
  selectOption: (state, optionText) => state.currentQuestion.selectedOption = optionText,
  setMarked: (state) => state.currentQuestion.marked = true,
  clearRes: (state) => state.currentQuestion.selectedOption = "",
  end: (state) => state.timeRemaining = false
}

export default {
  state,
  getters,
  actions,
  mutations
}