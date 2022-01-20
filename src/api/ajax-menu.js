import axios from 'axios'

let axiosMenu = axios.create();

// axiosMenu.defaults.withCredentials = false

export const AjaxMenu = {

    get(url, data = {}, success, failure) {
        axiosMenu
            .get(url, { params: data },{
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    // "Authorization" : `Bearer ${store.getters.getToken}`
                }
            })
            .then(res => {
                if (success) success(res.data)
            })
            .catch(err => {
                if (failure) failure(err)
            })
    }, post(url, data = {}, success, failure) {
        axiosMenu
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
    }, put(url, data = {}, success, failure) {
        axiosMenu
            .put(url, data)
            .then(res => {
                if (success) success(res.data)
            })
            .catch(err => {
                if (failure) failure(err)
            })
    }, delete(url, data = {}, success, failure) {
        axiosMenu
            .delete(url, data)
            .then(res => {
                if (success) success(res.data)
            })
            .catch(err => {
                if (failure) failure(err)
            })
    },
}