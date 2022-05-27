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
        v-for="(info, index) in news"
        :key="index"
        class="flex bg-white rounded-md space-x-3 z-0 pb-2 transition duration-500"
        data-swiper-autoplay="2000"
      >
        <div class="group w-full hover:shadow-md shadow-sm border rounded-md relative">
          <div class="flex items-center w-full rounded-md">
            <nuxt-link
              :to="{ path: localePath('/') }"
              style="
                background-image: url(https://caep.org/blog/wp-content/uploads/2020/04/TractorFarm_Lead.jpg);
              "
              class="relative group cursor-pointer h-80 w-full rounded-md bg-cover"
            >
              <div class="absolute inset-0 bg-gray-700 opacity-70 w-full rounded-md"></div>
              <div class="absolute top-10 left-5">
                <div
                  class="text-xs rounded-md text-green-800 w-20 bg-green-50 py-1.5 px-7 font-medium"
                >
                  {{ info.category }}
                </div>
                <div class="text-white font-medium text-lg my-6">{{ info.title }}</div>
                <div class="text-white text-sm my-6">{{ info.subtitle }}</div>
              </div>
              <div class="border border-white absolute inset-x-0 bottom-16"></div>
              <div class="absolute left-5 text-sm bottom-5 text-white">
                {{ info.date }}
              </div>
              <div class="absolute right-5 text-sm bottom-5 text-white">Read</div>
            </nuxt-link>
          </div>
        </div>
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
export default {
  name: 'NewsSwiper',
  data() {
    return {
      newsOption: {
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
      news: [
        {
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
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
.news:hover .btn {
  opacity: 1;
}
</style>
