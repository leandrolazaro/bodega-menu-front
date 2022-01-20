

const state = {
    loginStatus: JSON.parse(localStorage.getItem('loginStatus')) || false,
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {}
}

const actions = {
    changeToken({commit}, token){
        return new Promise((resolve) => {
            commit('setToken', token);
            resolve({});
        })
    },
    login({commit}, data){
        return new Promise((resolve) => {
            commit('setLoginData', data);
            resolve({});
        })
    },
    logout({commit}){
        return new Promise((resolve) => {
            commit('delLoginData');
            resolve({});
        })
    }
}

const mutations = {
    setLoginData(state, data){
        localStorage.clear();

        localStorage.setItem('loginStatus', true);
        localStorage.setItem('token', data.token); 
        localStorage.setItem('user', JSON.stringify(data)); 
        
        state.loginStatus=true;
        state.token=data.token;
        state.user=data;
    },
    delLoginData(state){
        localStorage.clear();
        
        state.loginStatus=false;
        state.token='';
        state.user={};
    },
    setToken(state, token){
        localStorage.setItem('token', token); 

        state.token=token;
    }
}

const getters = {
    getUser(state){
        return state.user;
    },
    getLoginStatus(state){
        return state.loginStatus;
    },
    getToken(state){
        return state.token;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
};