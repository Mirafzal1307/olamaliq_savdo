<template>
  <div class="p-5">
    <button
      class="text-white focus:outline-none text-sm rounded-md bg-green-700 p-3"
      @click="signIn()"
    >
      Login / Register
    </button>
  </div>
</template>

<script>
import signInModal from '../main/signin.vue'
export default {
  name: 'MobileMenu',
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
  },
}
</script>
