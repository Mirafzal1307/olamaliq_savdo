<template>

  <div
    :class='[scrollWatch]'
    class='sticky w-full flex justify-end bottom-0 pb-3 pr-8.5 lg:pr-16 transition'
  >
    <div class='text-gray-400 hover:text-blue-400 transition'>
      <button @click='scrollTop' class='rounded-full border-2 border-green bg-white py-3 px-1'><img
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
