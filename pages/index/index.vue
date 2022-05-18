<template>
  <div>
    <div class="bg-gradient-to-r from-green-100 to-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-2">
          <div class="grid content-center">
            <div class="flex items-center mb-2">
              <svg
                width="20"
                height="18"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.8137 18.9957C11.8013 19.5344 11.3011 19.925 10.8009 19.8346C11.4874 19.9594 13.0851 20.1341 13.9839 19.8346C13.463 19.9127 12.9877 19.518 12.9753 18.9916C12.9753 19.0204 12.6239 16.2284 14.0294 13.646C15.2323 11.4379 15.902 11.6682 17.3116 11.1336C19.118 10.4469 20.9741 9.73963 22.2473 8.19763C24.3265 5.67698 23.7767 2.2229 23.599 1.28948C21.3668 4.47628 19.1056 3.57164 16.8279 5.02317C14.513 6.49938 13.4796 8.82677 13.7028 11.3186C15.997 7.33 18.8948 9.08582 21.8876 5.09719C21.1601 6.29789 20.1638 7.34234 18.9237 8.08661C17.1421 9.17218 16.2823 8.85555 13.5829 12.7537C13.0869 13.4692 12.6859 14.2505 12.3965 15.0688C12.0617 14.123 11.578 13.2143 10.9663 12.4165C9.73853 10.8252 9.19701 9.92467 8.12223 9.15573C6.65062 8.09483 4.14556 7.68774 2.12416 4.34058C5.4973 8.84321 8.65962 6.78722 11.2308 11.2652C11.4871 8.4279 10.2801 5.87435 7.75433 4.26245C5.22034 2.64644 2.70701 3.65388 0.22263 0.105225C0.02421 1.14556 -0.587584 4.99027 1.72732 7.79466C3.1404 9.50766 5.19401 10.2895 7.19658 11.0518L7.21694 11.0596C8.18011 11.4255 10.6562 11.5366 11.6235 15.9241C11.8881 17.1412 11.8426 17.8444 11.8137 18.9957Z"
                  fill="#00730C"
                />
              </svg>

              <div class="text-gray-800 text-sm font-semibold ml-1">
                Business Development Platform
              </div>
            </div>
            <div class="text-5xl font-semibold">
              Agriculture business<br />
              <div class="text-green-800 my-4">in Karakalpakstan.</div>
            </div>
            <div class="text-gray-500 mr-4">
              The platform aims to provide the needed information for conducting business in the
              agriculture and environmental sectors in the Aral Sea region, as well as to support
              day-to-day operations by learning and accessing advisory services, networking, and
              insightful ideas.
            </div>
            <div class="my-5">
              <button class="text-white text-sm bg-green-700 rounded-md py-3 px-5">Register</button>
            </div>
          </div>
          <div class="pt-11">
            <img src="~/assets/images/home.png" class="rounded-md" alt="home" />
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto">
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-gray-700 text-2xl">
          <span class="text-green-800">Experts</span> consultancy
        </div>
        <div class="">
          <experts-swiper />
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-green-800 text-2xl">Price</div>
        <div class="">
          <price-swiper />
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-gray-700 text-2xl">
          <span class="text-green-800">Video</span> tutorials
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <video-card class="col-span-3" />
        </div>
      </div>
      <div class="grid grid-cols-2 mt-12 space-x-10">
        <img src="~/assets/images/map.png" alt="" />
        <div class="relative">
          <div class="text-xl text-gray-800 font-semibold">
            <span class="text-green-800">Karakalpakstan</span> - didactive map
          </div>
          <div class="text-gray-500 text-sm leading-6 mt-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it make a type specimen book.
          </div>
          <div class="grid grid-cols-2 mt-10 gap-10">
            <div v-for="(item, index) in items" :key="index">
              <div class="flex items-center">
                <img
                  :src="require(`~/assets/images/${item.image}.png`)"
                  class="w-6 object-contain"
                />
                <p class="text-base font-semibold text-gray-800 ml-4">{{ item.title }}</p>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0">
            <button class="text-white py-3 px-7 font-medium bg-green-700 rounded-md text-sm">
              Discover more
            </button>
          </div>
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-gray-700 text-2xl">
          Agri-finance <span class="text-green-800">News</span>
        </div>
        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          <news-swiper class="col-span-3" />
        </div>
      </div>
      <div class="mt-12 space-y-4">
        <div class="font-semibold text-gray-700 text-2xl">
          Frequently <span class="text-green-800">Asked Questions</span>
        </div>
        <div class="grid grid-cols-2 gap-6">
          <div>
            <div class="text-gray-500 leading-7 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown of
              type and scrambled it to make a type specimen book.
            </div>
            <button
              :class="answerOpened ? 'bg-green-700 text-white' : 'bg-yellow-50'"
              class="
                w-full
                focus:outline-none
                rounded-md
                py-3
                px-5
                flex
                items-center
                justify-between
                mt-6
              "
              @click="openAnswer()"
            >
              <div>1. Which Plan Is Right For Me?</div>
              <i :class="answerOpened ? 'bx-x' : 'bx-plus'" class="bx text-xl"></i>
            </button>
            <div v-show="answerOpened" class="bg-white p-5 text-gray-500 text-xs">
              Lorem ipsum dolor sit.
            </div>
          </div>
          <img src="~/assets/images/home.png" class="rounded-md" alt="home" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoCard from '~/components/main/videoCard.vue'
import expertsSwiper from '~/components/swipers/experts-swiper.vue'
import NewsSwiper from '~/components/swipers/news-swiper.vue'
import PriceSwiper from '~/components/swipers/price-swiper.vue'
export default {
  components: { expertsSwiper, PriceSwiper, VideoCard, NewsSwiper },
  data() {
    return {
      items: [
        {
          image: 'district',
          title: 'District Hokimiyat',
        },
        {
          image: 'bank',
          title: 'Banks',
        },
        {
          image: 'terminal',
          title: 'Terminal stations',
        },
        {
          image: 'railway',
          title: 'Railway stations',
        },
        {
          image: 'farmers',
          title: 'Farmers unions',
        },
        {
          image: 'supply',
          title: 'Supply points',
        },
      ],
      answerOpened: false,
    }
  },
  methods: {
    openAnswer() {
      this.answerOpened = !this.answerOpened
    },
  },
}
</script>
