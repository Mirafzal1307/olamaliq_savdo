import Vue from 'vue'
import Vuex from 'vuex'
import crud from './crud'
import dynamic from './crud/dynamic'
import socket from './modules/socket'
import upload from './modules/upload'
Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      socket,
      upload,
      products: crud('products'),
      productcategories: crud('productcategories'),
      pricelists: crud('pricelists'),
      regions: crud('regions'),
      districts: crud('districts'),
      servicecategories: crud('servicecategories'),
      courses: crud('courses'),
      about: crud('about'),
      serviceposts: crud('serviceposts'),
      coursecategories: crud('coursecategories'),
      chatrooms: crud('chatrooms'),
      chatmessages: crud('chatmessages'),
      users: dynamic('users'),
      partners: crud('partners'),
      companies: crud('companies'),
      companycategories: crud('companycategories'),
      faqs: crud('faqs'),
      pricedates: crud('pricedates'),
      priceanalitics: dynamic('priceanalitics'),
      lessons: crud('lessons')
    },
  })
}
export default createStore
