<template>
  <div class="experts relative">
    <swiper ref="swiper" class="swiper" :options="expertOption">
      <swiper-slide
        v-for="(expert, index) in experts"
        :key="index"
        class="flex bg-white rounded-md space-x-3 z-0 pb-12 transition duration-500"
      >
        <experts :data="expert" />
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
import Experts from '../Experts.vue'
import { mapGetters } from 'vuex'
import { actions, getters } from '~/utils/store_schema'
const _page = 'users'
const { get } = actions(_page)
export default {
  name: 'ConsultantsSwiper',
  auth: false,
  components: { Experts },
  data() {
    return {
      experts: [],
      expertOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1280: {
            slidesPerView: 3.5,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 6,
          },
          410: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.3,
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
mounted() {
    this.fetchData()
  },
  computed: {
    ...mapGetters({
      ...getters(_page),
    }),
  },
  methods: {
    fetchData() {
      this.$store
        .dispatch(get, {
          link: '/users',
          locale: this.$i18n.locale,
          query: {
            populate: '*',
            _limit: 5,
          }
        }).then((res) => {
          this.experts = res.data
        })
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
.experts:hover .btn {
  opacity: 1;
}
</style>
