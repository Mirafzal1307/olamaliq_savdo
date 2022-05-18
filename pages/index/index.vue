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
    <div class="mt-12 space-y-4 max-w-6xl mx-auto">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Experts</span> consultancy
      </div>
      <div class="">
        <experts-swiper />
      </div>
    </div>
    <div class="mt-12 space-y-4 max-w-6xl mx-auto">
      <div class="font-semibold text-green-800 text-2xl">Price</div>
      <div class="">
        <price-swiper />
      </div>
    </div>
  </div>
</template>

<script>
import expertsSwiper from '~/components/swipers/experts-swiper.vue'
import PriceSwiper from '~/components/swipers/price-swiper.vue'
export default {
  components: { expertsSwiper, PriceSwiper },
}
</script>
