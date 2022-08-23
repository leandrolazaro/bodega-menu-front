import { apiWine } from '../const'
import { AjaxAdmin } from './ajax-admin'

export default {
  setWine(data, success, failure) {
    AjaxAdmin.post(apiWine.setWine, data, success, failure)
  },
}