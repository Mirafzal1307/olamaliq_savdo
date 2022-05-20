<template>
  <div>
    <navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/core/footer.vue'
import Navbar from '~/components/core/navbar.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>
