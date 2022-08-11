<template>
  <div class="consultants">
    <swiper ref="swiper" class="swiper" :options="Option">
      <swiper-slide
        class="flex items-center bg-white rounded-md  shadow-sm hover:shadow-md space-x-3 transition duration-500"
      >
        <div class="group w-full p-2 shadow-sm">
          <img src="~/assets/images/1-200x100.jpg" alt="sss">
        </div>
      </swiper-slide>
      <swiper-slide
        class="flex items-center bg-white rounded-md  shadow-sm hover:shadow-md space-x-3 transition duration-500"
      >
        <div class="group w-full p-2 shadow-sm">
          <img src="~/assets/images/1-200x100.jpg" alt="sss">
        </div>
      </swiper-slide>
    </swiper>
    <!-- <router-link :to="{path: localePath('/prices')}">
      <button class="text-white bg-green-600 text-base md:hidden flex justify-center rounded-md w-full mt-3 py-2">
        {{ $t('text.seePrices') }}
      </button>
    </router-link> -->
    <div class="absolute group top-1/2 lg:flex hidden justify-between inset-x-0">
      <div
        slot="button-prev"
        class="swiper-button-prev btn shadow-md opacity-0 -left-9"
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
export default {
  name: 'CategorySwiper',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    prices: Array
  },
  data () {
    return {
      Option: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1440: {
            slidesPerView: 5.7,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 4.7,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2.5,
            spaceBetween: 10
          },
          410: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          350: {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {},

  methods: {
    prev () {
      this.$refs.swiper.$swiper.slidePrev()
    },
    next () {
      this.$refs.swiper.$swiper.slideNext()
    }
  }
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
.consultants:hover .btn {
  opacity: 1;
}
</style>
