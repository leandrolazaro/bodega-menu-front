import { apiAuth } from '@/const.js'
import { AjaxAdmin } from './ajax-admin'

export default {
  loginStatus(success, failure) {
    AjaxAdmin.get(apiAuth.LoginStatus, {}, success, failure)
  },
  login(data, success, failure) {
    AjaxAdmin.post(apiAuth.Login, data, success, failure)
  },
  logout(success) {
    AjaxAdmin.post(apiAuth.Logout, {}, success, () => false)
  }
}