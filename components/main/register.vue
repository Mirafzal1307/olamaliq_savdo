<template>
  <div>
    <div class="py-8 px-3 relative sm:px-8">
      <div
        class="absolute right-4 top-4 text-center p-1 rounded-md hover:bg-gray-100 cursor-pointer"
        @click="onClose('canceled')"
      >
        <i class="bx bx-x text-2xl text-gray-700"></i>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-between items-center mb-3">
          <div id="signin">
            <button
              :class="[
                status === 'sign-in'
                  ? 'border-b border-green-600 text-green-600'
                  : 'hover:text-green-600 text-gray-600',
              ]"
              class="text-xl font-medium text-gray-500 focus:outline-none"
              @click="openSignIn()"
            >
              Login
            </button>
          </div>

          <div id="register">
            <button
              :class="[
                status === 'register'
                  ? 'border-b border-green-600 text-green-600'
                  : 'hover:text-green-600  text-gray-600',
              ]"
              class="text-xl font-medium text-gray-500 ml-6 focus:outline-none"
            >
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signInModal from '../main/signin.vue'
export default {
  name: 'Register',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    status: String,
  },
  methods: {
    openSignIn() {
      this.$emit('close')
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
    },
    onClose(e) {
      this.$emit('close')
      this.$root.$emit('sign-in', e)
    },
  },
}
</script>
