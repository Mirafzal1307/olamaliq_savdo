import Vue from 'vue'
import VueSlideoutPanel from 'vue2-slideout-panel'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'b8d77dd9-8477-4216-ad67-5074082c24a6',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1',
}

Vue.use(YmapPlugin, settings)
Vue.use(VueSlideoutPanel)
