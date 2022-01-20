const state = {
    loading: false
}

const actions = {
    showLoading({commit}){
        return new Promise((resolve) => {
            commit('resetLoading');
            commit('setLoading');
            resolve({});
        })
    },
    closeLoading({commit}){
        return new Promise((resolve) => {
            commit('resetLoading');
            resolve({});
        })
    }
}

const mutations = {
    setLoading(state){
        state.loading=true;
    },
    resetLoading(state){
        state.loading=false;
    }
}

const getters = {
    getLoading(state){
        return state.loading;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};