import Ajax from '@/api/ajax.js'
import { apiCategory } from '../const'

export default {
  getCategories(success, failure) {
    Ajax.get(apiCategory.getCategories, {}, success, failure)
  },
  setCategory(data, success, failure) {
    Ajax.post(apiCategory.setCategory, data, success, failure)
  }
}