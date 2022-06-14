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
      <div class="space-y-3">
        <div class="mt-1">
          <input
            name="text"
            type="text"
            autocomplete="text"
            placeholder="Name"
            required
            class="
              focus:outline-none
              appearance-none
              block
              w-full
              px-3
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              sm:text-sm
            "
          />
        </div>
        <div class="mt-1">
          <input
            name="text"
            type="text"
            autocomplete="text"
            placeholder="Surname"
            required
            class="
              focus:outline-none
              appearance-none
              block
              w-full
              px-3
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              sm:text-sm
            "
          />
        </div>
        <div class="mt-1">
          <input
            name="text"
            type="text"
            autocomplete="text"
            placeholder="E-mail or phone"
            required
            class="
              focus:outline-none
              appearance-none
              block
              w-full
              px-3
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              sm:text-sm
            "
          />
        </div>
        <div>
          <button
            type="submit"
            class="
              w-full
              py-2
              px-4
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-white
              bg-green-600
              hover:bg-green-700
              focus:outline-none
            "
          >
            Register
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center mt-2">
        <p class="text-gray-600 text-sm font-medium">Do you have an account?</p>
        <button
          class="ml-2 text-yellow-600 text-sm font-medium focus:outline-none"
          @click="openSignIn()"
        >
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import signInModal from '../modals/signin.vue'
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
