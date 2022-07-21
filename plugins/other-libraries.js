import Vue from 'vue'
import { Swiper, SwiperSlide, Autoplay } from 'vue-awesome-swiper'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css'
import VueLoaders from 'vue-loaders'
import 'vue-loaders/dist/vue-loaders.css'
import { Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

const options = {
    toast: {
        position: SnotifyPosition.rightBottom,
        showProgressBar: false,
        timeout: 2000,
        titleMaxLength: 100
    }
}

Vue.component(Swiper)
Vue.component(SwiperSlide)
Vue.component(Pagination)
Vue.component(Autoplay)
Vue.component('DatePicker', DatePicker)

Vue.use(Snotify, options)
Vue.use(VueLoaders)
