import axios from 'axios';

const state = () => {
  return {
    exam: {},
    currentSection: {},
    currentQuestion: {},
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
    if (state.exam){
      state.exam.sections.forEach( section => {
        Object.keys(section).forEach(sectionName => sectionlist.push(sectionName))
      })
      return sectionlist;
    }
  }
}

const actions = {
  async fetchExam({commit}) {
    try{
      const response = await axios.get("http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/abhinav");
      const exam = response.data.exam;
      exam.sections.forEach( section => {
        let questionArray = Object.values(section)[0];
        questionArray.forEach(question => {
          question.selectedOption = "none";
        })
      });
      commit('setExam',exam);
      commit('setCurrentSection',0);
      commit('setCurrentQuestion',0);
    }catch(e){
      console.log("An error occured while fetching exam : ",e);
    }
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}