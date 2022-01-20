import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth.module'

import successMessage from './success-message.module'

import loading from './loading.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    successMessage,
    loading
  }
})
