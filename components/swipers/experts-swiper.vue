<template>
  <div class="consultation">
    <swiper ref="swiper" class="swiper" :options="expertOption">
      <swiper-slide
        v-for="(expert, index) in experts"
        :key="index"
        class="flex bg-white border rounded-md space-x-3 transition duration-500"
      >
        <div class="group w-full hover:shadow-md shadow-sm">
          <div class="flex justify-center px-2 pt-2 w-full">
            <img :src="expert.img" class="w-full md:h-52 h-20 rounded-md object-cover" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="absolute group top-1/2 lg:flex hidden justify-between inset-x-0">
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
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'ConsultantsSwiper',
  data() {
    return {
      expertOption: {
        direction: 'horizontal',
        slideToClickedSlide: false,
        breakpoints: {
          1280: {
            slidesPerView: 3,
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
      experts: [
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
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
.consultation:hover .btn {
  opacity: 1;
}
</style>
