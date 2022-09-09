<template>
<!--  pb-3 
     xsm:pb-8.7  -->
  <div
    :class='[scrollWatch]'
    class='sticky w-full flex justify-end bottom-0 transition lg:pr-16 z-75 -mt-8 pb-0.37 pr-8.5 xsm:pr-0.5  sm:pr-7 md:pr-6 md:pb-2 bg-transparent'
  >
    <div class='text-gray-400 hover:text-blue-400 transition'>
      <button @click='scrollTop' class='rounded-full border-2 border-green bg-white lg:py-3 lg:px-1 xsm:py-0.5 xsm:px-0.35 '><img
        src='~/assets/images/backtoTop.jpg' alt='Back to top'></button>
    </div>
  </div>

</template>
<script>
export default {
  name: 'ScrollTopButton',
  data() {
    return {
      showScroll: false
    }
  },
  computed: {
    scrollWatch () {
      return this.showScroll ? 'visible' : 'invisible'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkScrollTop)
    console.log()
  },

  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    checkScrollTop() {
      if (!this.showScroll && window.pageYOffset > 390) {
        this.showScroll = true
      } else if (this.showScroll && window.pageYOffset <= 390) {
        this.showScroll = false
      }
    }
  }
}
</script>
