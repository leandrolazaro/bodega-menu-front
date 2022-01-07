import Ajax from '@/api/ajax.js'
import { apiAuth } from '@/const.js'

export default {
  loginStatus(success, failure) {
    Ajax.post(apiAuth.LoginStatus, {}, success, failure)
  },
  login(data, success, failure) {
    Ajax.post(apiAuth.Login, data, success, failure)
  },
  logout(success) {
    Ajax.post(apiAuth.Logout, {}, success, () => false)
  }
}