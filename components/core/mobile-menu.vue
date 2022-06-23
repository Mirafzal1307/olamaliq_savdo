<template>
  <div class="p-5">
    <button
      class="text-white focus:outline-none text-sm rounded-md bg-green-700 p-3"
      @click="
        signIn()
        closePanel()
      "
    >
      Login / Register
    </button>
    <div
      v-for="(menu, index) in navbar"
      :key="index"
      class="block my-5"
      :class="
        $route.path.search(menu.route) > 0
          ? 'text-base text-green-700 font-semibold'
          : 'text-gray-800 hover:text-green-700 font-medium text-base '
      "
      @click="closePanel()"
    >
      <router-link :to="{ path: localePath(menu.route) }">
        {{ menu.name }}
      </router-link>
    </div>
    <div class="block space-y-5 text-gray-700">
      <div class="flex items-center gap-2">
        <i class="bx bx-envelope text-lg"></i>
        <p class="text-sm">Email: info@gggi.com</p>
      </div>
      <div class="flex items-center gap-2">
        <i class="bx bx-phone text-lg"></i>
        <p class="text-sm">+998971 123 45 67</p>
      </div>
      <div class="flex gap-2">
        <i class="bx bx-map text-lg"></i>
        <p class="text-sm">
          31, Islam Karimov st, Nukus, Autonom Republic of Karakalpakstan, Uzbekistan,
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import signInModal from '../modals/signin.vue'
export default {
  name: 'MobileMenu',
  data() {
    return {
      navbar: [
        { name: 'About', route: '/about' },
        { name: 'E-learning', route: '/e-learning' },
        { name: 'Agri-business', route: '/agri-business' },
        { name: 'Agri-finance', route: '/agri-finance' },
        { name: 'Agri-market', route: '/agri-market' },
        { name: 'Advisory', route: '/advisory' },
      ],
    }
  },
  methods: {
    signIn() {
      this.$modal.show(
        signInModal,
        { status: 'sign-in' },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          acrollable: true,
        }
      )
      // this.$root.$once('user-change-modal', (item) => {
      //   console.log(item)
      // })
    },
    closePanel() {
      this.$emit('closePanel', {})
    },
  },
}
</script>
