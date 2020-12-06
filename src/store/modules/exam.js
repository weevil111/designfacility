import axios from 'axios';

const state = () => {
  return {
    exam: {},
    currentSection: {},
    currentQuestion: {},
    unansweredQuestions: 0,
    unvisitedQuestions: 0,
    answeredQuestions: 0,
    markedQuestions: 0,
    answeredAndMarkedQuestions: 0
  }
};

const getters = {
  exam : state => state.exam,
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
  unansweredQuestions: state => state.unansweredQuestions,
  unvisitedQuestions: state => state.unvisitedQuestions,
  answeredQuestions: state => state.answeredQuestions,
  markedQuestions: state => state.markedQuestions,
  answeredAndMarkedQuestions: state => state.answeredAndMarkedQuestions,
}

const actions = {
  async fetchExam({commit}) {
    try{
      const response = await axios.get("http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/abhinav");
      const exam = response.data.exam;
      exam.sections.forEach( (section) => {
        let questionArray = Object.values(section)[0];
        questionArray.forEach((question,index) => {
          question.selectedOption = "none";
          question.questionNumber = index + 1;
          question.marked = true;
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
  }
}

const mutations = {
  setExam: (state, payload) => {
    state.exam = payload
  },
  setCurrentSection: (state, index) => {
    const section = state.exam.sections[index];
    const sectionName = Object.keys(section)[0];
    state.currentSection.name = sectionName;
    state.currentSection.questions = section[sectionName];
  },
  setCurrentQuestion: (state, index) => {
    state.currentQuestion = state.currentSection.questions[index];
  },
  selectOption: (state, optionText) => state.currentQuestion.selectedOption = optionText
}

export default {
  state,
  getters,
  actions,
  mutations
}