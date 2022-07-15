import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import dynamic from './crud/dynamic'
import socket from './modules/socket'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      socket,
      products: crud('products'),
      regions: crud('regions'),
      districts: crud('districts'),
      servicecategories: crud('servicecategories'),
      courses: crud('courses'),
      about: crud('about'),
      serviceposts: crud('serviceposts'),
      servicecategories: crud('servicecategories'),
      coursecategories: crud('coursecategories'),
      chatrooms: crud('chatrooms'),
      chatmessages: crud('chatmessages'),
      users: dynamic('users'),
    },
  })
}
export default createStore
