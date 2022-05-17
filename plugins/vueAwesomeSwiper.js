import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Autoplay,
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Navigation, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))
