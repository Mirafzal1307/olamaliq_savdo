<template>
  <div>
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/core/navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>
