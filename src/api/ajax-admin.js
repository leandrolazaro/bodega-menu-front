import axios from 'axios'
import store from '@/store/index.js'
import router from '../router';

let axiosAdmin = axios.create();

axiosAdmin.defaults.withCredentials = false

axiosAdmin.interceptors.request.use(function (config) {
  // alert(store.getters.getToken);
  config.headers.Authorization = `Bearer ${store.getters.getToken}`;
  return config;
}, function (err) {
  return Promise.reject(err);
});

axiosAdmin.interceptors.response.use(function (response) {
  if(!response.data.token){
    store.dispatch("logout").then(() => router.push('/login'));
  }
  store.dispatch('changeToken', response.data.token);
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const AjaxAdmin = {

  get(url, data = {}, success, failure) {
    const params = this.createParameter(data)
    axiosAdmin
      .get(url, { params: params })
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  },post(url, data = {}, success, failure) {
    axiosAdmin
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
  },put(url, data = {}, success, failure) {
    axiosAdmin
      .put(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  },delete(url, data = {}, success, failure) {
    axiosAdmin
      .delete(url, data)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  },createParameter(data = {}) {
    const params = new URLSearchParams();
    Object.keys(data).forEach(key => {
      if (data[key]) {
        params.append(key, data[key]);
      }
    });
    return params
  }
}