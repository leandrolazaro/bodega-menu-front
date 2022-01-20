import axios from 'axios'
import store from '@/store/index.js'

axios.defaults.withCredentials = false

// axios.defaults.baseURL = process.env.VUE_APP_API_ROOT

axios.interceptors.request.use(function (config) {
  // alert(store.getters.getToken);
  config.headers.Authorization = `Bearer ${store.getters.getToken}`;
  return config;
}, function (err) {
  return Promise.reject(err);
});

axios.interceptors.response.use(function (response) {
  // alert(JSON.stringify(store.getters.getToken));
  alert(JSON.stringify(response.data.token));
  if(response.data.token){
    
    store.dispatch('changeToken', response.data.token);
  }
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default class Ajaxaxios{

  static get(url, data = {}, success, failure) {
    const params = this.createParameter(data)
    axios
      .get(url, { params: params })
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static post(url, data = {}, success, failure) {
    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          // "Authorization" : `Bearer ${store.getters.getToken}`
        }
      })
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static put(url, data = {}, success, failure) {
    axios
      .put(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static delete(url, data = {}, success, failure) {
    axios
      .delete(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }

  static createParameter(data = {}) {
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => {
      if (data[key]) {
        params.append(key, data[key]);
      }
    });
    return params
  }
}