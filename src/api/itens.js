import { apiItem } from '../const'
import { AjaxAdmin } from './ajax-admin'

export default {
  setItem(data, success, failure) {
    AjaxAdmin.post(apiItem.setItem, data, success, failure)
  },
  getItens(data, success, failure) {
    AjaxAdmin.post(apiItem.getItens, data, success, failure)
  },
  delItem(data, success, failure) {
    AjaxAdmin.post(apiItem.delItem, data, success, failure)
  },
  editItem(data, success, failure) {
    AjaxAdmin.post(apiItem.editItem, data, success, failure)
  }
}