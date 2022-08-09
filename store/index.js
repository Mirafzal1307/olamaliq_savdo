import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import dynamic from './crud/dynamic'
import upload from './modules/upload'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      upload,
      products: crud('products'),
      user: crud('user'),
      category: dynamic('category'),
      brand: dynamic('brand'),
    },
  })
}
export default createStore
