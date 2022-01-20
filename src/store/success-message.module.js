const state = {
    timeSucessMessage: 0
}

const actions = {
    showSucessMessage({commit}){
        return new Promise((resolve) => {
            commit('resetTimeSucessMessage');
            commit('setTimeSucessMessage');
            resolve({});
        })
    },
    closeSuccessMessage({commit}){
        return new Promise((resolve) => {
            commit('resetTimeSucessMessage');
            resolve({});
        })
    }
}

const mutations = {
    setTimeSucessMessage(state){
        state.timeSucessMessage=5;
    },
    resetTimeSucessMessage(state){
        state.timeSucessMessage=0;
    }
}

const getters = {
    getTimeSucessMessage(state){
        return state.timeSucessMessage;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};