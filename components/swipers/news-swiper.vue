<template>
  <div class="news relative">
    <swiper
      ref="swiper"
      class="swiper"
      :options="newsOption"
      :autoplay="{ delay: 2000, disableOnIteraction: false }"
      :pagination="{ clickable: true, dynamicBullets: true }"
    >
      <swiper-slide
        v-for="(info, index) in data"
        :key="index"
        class="flex bg-white rounded-md space-x-3 z-0 pb-2 transition duration-500"
        data-swiper-autoplay="2000"
      >
        <news :data="info" />
      </swiper-slide>
    </swiper>
    <div class="absolute group top-1/2 lg:flex hidden justify-between -inset-x-9">
      <div
        slot="button-prev"
        class="swiper-button-prev btn shadow-md opacity-0 left-9"
        @click="prev()"
      />
      <div
        slot="button-next"
        class="swiper-button-next btn shadow-md opacity-0 -right-9"
        @click="next()"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import News from '../News.vue'
import { actions, getters } from '~/utils/store_schema'
const _page = 'serviceposts'
const { get } = actions(_page)
export default {
  name: 'NewsSwiper',
  components: { News },
  data() {
    return {
      newsOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        loop: false,
        autoplay: {
          delay: 2000,
        },
        pagination: {
          clickable: true,
        },
        breakpoints: {
          1280: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 6,
          },
          410: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    ...mapGetters(getters(_page)),
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store
        .dispatch(get, {
          populate: '*',
          locale: this.$i18n.locale,
        })
        .then(() => {})
    },
    prev() {
      this.$refs.swiper.$swiper.slidePrev()
    },
    next() {
      this.$refs.swiper.$swiper.slideNext()
    },
  },
}
</script>

<style scoped>
.swiper-button-prev,
.swiper-button-next {
  --swiper-theme-color: #059669;
  background-color: white;
  padding: 22px;
  color: #059669 !important;
  fill: #059669 !important;
  stroke: #059669 !important;
  border-radius: 100%;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 13px;
}
.news:hover .btn {
  opacity: 1;
}
</style>
