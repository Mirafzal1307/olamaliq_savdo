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
              @click="openRegister()"
            >
              Registration
            </button>
          </div>
        </div>
      </div>
      <!-- <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
        <form class="" @submit.prevent="passes(tryToLogIn)"> -->
      <!-- <ValidationProvider v-slot="{ valid, errors }" rules="required|phoneOrEmail" name="Username"> -->
      <div class="mt-1">
        <input
          name="text"
          type="text"
          autocomplete="text"
          placeholder="Phone number"
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
      <!-- </ValidationProvider> -->

      <!-- <ValidationProvider
        v-if="isEmail"
        v-slot="{ valid, errors }"
        rules="required|min:6"
        name="Password"
        vid="password"
      > -->
      <!-- <div class="mt-3">
        <input
          name="password"
          type="password"
          autocomplete="current-password"
          :placeholder="$t('word.password')"
          required
          class="
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
      </div> -->
      <!-- </ValidationProvider> -->
      <!-- <div class="flex items-center justify-between mb-3">
        <div v-if="authError.length > 0" class="text-red-600 text-sm">
          {{ authError }}
        </div>
        <div v-if="isEmail" class="flex items-center mt-2">
          <input
            id="remember_me"
            name="remember_me"
            type="checkbox"
            class="h-4 w-4 text-green-600 focus:ring-green-600 border-gray-300 rounded"
          />
          <label for="remember_me" class="ml-2 block text-gray-600 text-sm">
            {{ $t('word.remember') }}
          </label>
        </div>
      </div>
      <button
        type="submit"
        :disabled="invalid"
        class="
          w-full
          flex
          justify-center
          px-4
          py-2
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
        {{ $t('text.signIn') }}
        <vue-loaders v-if="loading" name="ball-beat" color="white" scale="0.5" />
      </button> -->
      <!-- </form>
      </ValidationObserver> -->
      <div class="flex items-center justify-center mt-2">
        <p class="text-gray-600 text-sm font-medium">Don't have an account?</p>
        <button
          class="ml-2 text-yellow-600 text-sm font-medium focus:outline-none"
          @click="openRegister"
        >
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import registeModal from '../main/register.vue'
export default {
  name: 'Signin',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    status: String,
  },
  data() {
    return {}
  },
  methods: {
    openRegister() {
      this.$emit('close')
      this.$modal.show(
        registeModal,
        { status: 'register' },
        {
          height: 'auto',
          maxWidth: 400,
          width: window.innerWidth <= 350 ? window.innerWidth - 10 : 350,
          scrollable: true,
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
