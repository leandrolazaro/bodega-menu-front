import { AjaxAdmin } from './ajax-admin'
import { apiCategory } from '../const'

export default {
  getCategories(success, failure) {
    AjaxAdmin.get(apiCategory.getCategories, {}, success, failure)
  },
  setCategory(data, success, failure) {
    AjaxAdmin.post(apiCategory.setCategory, data, success, failure)
  },
  delCategory(data, success, failure) {
    AjaxAdmin.post(apiCategory.delCategory, data, success, failure)
  },
  editCategory(data, success, failure) {
    AjaxAdmin.post(apiCategory.editCategory, data, success, failure)
  }
}