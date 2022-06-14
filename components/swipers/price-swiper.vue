<template>
  <div class="price relative">
    <swiper
      ref="swiper"
      class="swiper"
      :options="priceOption"
      :autoplay="{ delay: 2000, disableOnIteraction: false }"
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="(price, index) in prices"
        :key="index"
        class="flex bg-white rounded-md space-x-3 z-0 pb-2 transition duration-500"
        data-swiper-autoplay="2000"
      >
        <prices :data="price" />
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
import Prices from '../Prices.vue'
export default {
  name: 'ConsultantsSwiper',
  components: { Prices },
  data() {
    return {
      priceOption: {
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
            slidesPerView: 3.8,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 4.3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.3,
            spaceBetween: 6,
          },
          410: {
            slidesPerView: 1.3,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 1.3,
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
      prices: [
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
      ],
    }
  },

  methods: {
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
.price:hover .btn {
  opacity: 1;
}
</style>
