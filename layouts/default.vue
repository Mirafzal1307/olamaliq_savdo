<template>
  <div class="h-screen flex flex-col overflow-hidden bg-white">
    <main class="min-h-0 flex-1 overflow-hidden h-full w-full flex flex-col">
      <navbar />
      <div class="mt-16 ml-64 p-6">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '~/components/core/navbar.vue'
export default {
  name: 'Default',
  components: {
    Navbar,
  },
}
</script>
