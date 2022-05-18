<template>
  <div class="relative">
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
        class="flex bg-white rounded-md space-x-3 z-0 pb-14 transition duration-500"
        data-swiper-autoplay="2000"
      >
        <div
          class="group w-full hover:shadow-md shadow-sm border border-gray-50 rounded-md relative"
        >
          <div class="flex items-center w-full bg-white rounded-md p-2 gap-2">
            <img :src="price.img" class="w-14 rounded-md" />
            <div class="grid content-between space-y-2">
              <div class="text-gray-700 text-sm font-semibold">{{ price.name }}</div>
              <div class="text-green-700 font-medium text-xs">{{ price.district }}</div>
              <div class="flex items-center text-gray-700 font-semibold text-sm space-x-3">
                <div>Min: {{ price.min }}</div>
                <div>Max: {{ price.max }}</div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="absolute group -top-10 flex justify-end right-14">
      <div slot="button-prev" class="swiper-button-prev btn shadow-md rotate-90" @click="prev()" />
      <div slot="button-next" class="swiper-button-next btn shadow-md rotate-45" @click="next()" />
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ConsultantsSwiper',
  data() {
    return {
      priceOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        loop: true,
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
            slidesPerView: 4,
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
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          350: {
            slidesPerView: 2.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 2.3,
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
  --swiper-theme-color: #165340;
  background-color: white;
  padding: 22px;
  font-weight: 600;
  color: #165340 !important;
  fill: #165340 !important;
  stroke: #165340 !important;
  border-radius: 5px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 13px;
}
</style>
