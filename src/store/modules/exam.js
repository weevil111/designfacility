import axios from 'axios';

const state = () => {
  return {
    exam: {}
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
  }
}

const actions = {
  async fetchExam({commit}) {
    try{
      const response = await axios.get("http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/abhinav");
      commit('setExam',response.data.exam);
    }catch(e){
      console.log("An error occured while fetching exam : ",e);
    }
  }
}

const mutations = {
  setExam: (state, payload) => {
    state.exam = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}