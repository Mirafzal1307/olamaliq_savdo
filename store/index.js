import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      products: crud('products'),
      regions: crud('regions'),
      districts: crud('districts'),
      servicecategories: crud('servicecategories'),
      courses: crud('courses'),
      about: crud('about'),
      serviceposts: crud('serviceposts'),
      chatrooms: crud('chatrooms'),
    },
  })
}
export default createStore
