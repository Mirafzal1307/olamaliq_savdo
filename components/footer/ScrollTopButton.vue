<template>
  <div ref="scrollTopButton" :exact-active-class="invisible">
    <div class="sticky w-full flex justify-end bottom-0 pb-3 pr-8.5 lg:pr-16 transition">
      <div class="text-gray-400 hover:text-blue-400 transition">
        <button @click="scrollToTop" class="rounded-full border-2 border-green bg-white py-3 px-1">
          <img src="~/assets/images/backtoTop.jpg" alt="Back to top" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScrollTopButton',
  data() {
    return {
      isPast100Px: false,
    }
  },
  computed: {
    invisible() {
      return this.isPast100Px ? 'invisible' : ''
    },
  },

  methods: {
    handleScroll(event) {
     this.isPast100Px = window.scrollY > 100
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
})
</script>
