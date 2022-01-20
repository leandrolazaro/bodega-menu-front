import { apiMenu } from '../const'
import { AjaxMenu } from './ajax-menu'

export default {
  getItens(data, success, failure) {
    AjaxMenu.get(apiMenu.getItens, data, success, failure)
  },
  getCategories(success, failure) {
    AjaxMenu.get(apiMenu.getCategories, {}, success, failure)
  },
}