import { AjaxAdmin } from './ajax-admin'
import { apiWineCategories } from '../const'

export default {
  getWineTypes(success, failure) {
    AjaxAdmin.get(apiWineCategories.getWineTypes, {}, success, failure)
  },
  getWineGrapes(success, failure) {
    AjaxAdmin.get(apiWineCategories.getWineGrapes, {}, success, failure)
  },
  getWineCountries(success, failure) {
    AjaxAdmin.get(apiWineCategories.getWineCountries, {}, success, failure)
  },
}