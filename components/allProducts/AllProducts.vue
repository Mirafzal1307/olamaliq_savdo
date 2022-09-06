<template>
  <div>
    <Header />
    <div class="flex justify-between gap-2">
      <Navbar :categories="categories" />
    </div>
    <nuxt-link :to="localePath(`/`)" >
    <p>Bosh sahifa</p>
    </nuxt-link>
    <Footer />
  </div>
</template>

<script>
import Header from '../header/header.vue'
import Navbar from '~/components/navbar/Navbar.vue'
import Footer from '~/components/footer/Footer.vue'
export default {
  name: 'AllProducts',
  props: {
    categories: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  components: { Header, Navbar, Footer },
  data() {
    return {}
  },
}
</script>

<style scoped>
</style>