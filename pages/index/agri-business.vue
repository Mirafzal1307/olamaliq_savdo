<template>
  <div class="max-w-6xl sm:px-6 lg:px-8 xl:px-0 px-4 mx-auto lg:mt-12 mt-4">
    <div class="lg:flex block items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-business</span>
      </div>
      <div class="mt-1 flex rounded-md shadow-sm">
        <div
          class="
            relative
            py-0.5
            bg-green-700
            rounded-md rounded-r-none
            flex
            items-stretch
            flex-grow
            focus-within:z-10
            lg:my-0
            mt-4
          "
        >
          <input
            id="search"
            type="search"
            name="search"
            class="
              block
              w-full
              p-2
              ml-0.5
              focus:outline-none
              sm:text-sm
              border-gray-300 border
              rounded-md
            "
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          class="
            -ml-px
            relative
            inline-flex
            items-center
            space-x-2
            px-4
            py-2
            lg:my-0
            mt-4
            bg-green-700
            text-sm
            font-medium
            rounded-r-md
            focus:outline-none
          "
        >
          <i class="bx bx-search text-lg text-white"></i>
        </button>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 lg:gap-5 gap-0 mt-5">
      <div class="rounded-md shadow-md p-5">
        <div class="flex items-center justify-between">
          <div class="text-gray-700 text-xl font-semibold">Locations</div>
          <div class="border rounded-md border-green-700 text-green-700 font-semibold py-1.5 px-4">
            Banks
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4 cursor-pointer" @click="openInfo()">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center py space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <transition
          enter-active-class="transition sm:duration-400"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0 translate-y-0"
          leave-active-class="transition sm:duration-400"
          leave-class="translate-x-0"
          leave-to-class="translate-x-0"
          @after-leave="close"
        >
          <div v-show="infoOpened" class="border rounded-md p-5 bg-white h-full rotate-180">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque autem ex quae vel,
            ratione omnis perferendis at laborum esse sint vero quod, possimus, deserunt maxime aut
            qui voluptatem consectetur. Velit.
          </div>
        </transition>
        <yandex-map v-show="!infoOpened" />
      </div>
    </div>
  </div>
</template>

<script>
import YandexMap from '~/components/core/yandex-map.vue'
export default {
  name: 'AgriBusiness',
  components: {
    YandexMap,
  },
  data() {
    return {
      infoOpened: false,
    }
  },
  methods: {
    openInfo() {
      this.infoOpened = !this.infoOpened
    },
  },
}
</script>
