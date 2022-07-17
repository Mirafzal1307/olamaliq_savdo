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
              {{ $t('login') }}
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
              {{ $t('registration') }}
            </button>
          </div>
        </div>
      </div>
      <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
        <form @submit.prevent="passes(tryToLogIn)">
          <div class="mt-1">
            <ValidationProvider
              v-slot="{ valid, errors }"
              rules="required|phoneOrEmail"
              name="Username"
            >
              <input
                name="text"
                type="text"
                autocomplete="text"
                v-model="auth.identifier"
                placeholder="Phone number"
                :state="errors[0] ? false : valid ? true : null"
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
                :class="
                  valid || authError.length === 0
                    ? 'border-green-600 focus:ring-green-600 focus:border-green-600'
                    : 'border-red-600 focus:ring-red-600 focus:border-red-600'
                "
              />
            </ValidationProvider>
          </div>
          <div class="mt-1" v-if="isEmail">
            <ValidationProvider v-slot="{ valid, errors }" rules="required|min:6" name="password">
              <input
                name="password"
                type="password"
                v-model="auth.password"
                :placeholder="$t('password')"
                :state="errors[0] ? false : valid ? true : null"
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
                :class="
                  valid || authError.length === 0
                    ? 'border-green-600 focus:ring-green-600 focus:border-green-600'
                    : 'border-red-600 focus:ring-red-600 focus:border-red-600'
                "
              />
            </ValidationProvider>
          </div>
          <button
            :disabled="invalid"
            type="submit"
            class="
              mt-3
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
            {{ $t('sign-in') }}
            <vue-loaders v-if="loading" name="ball-beat" color="white" scale="0.5" />
          </button>
        </form>
      </ValidationObserver>
      <div class="flex items-center justify-center mt-2">
        <p class="text-gray-600 text-sm font-medium">{{ $t('do-not-have-an-account') }}</p>
        <button
          class="ml-2 text-yellow-600 text-sm font-medium focus:outline-none"
          @click="openRegister"
        >
          {{ $t('register') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import registeModal from '../modals/register.vue'
export default {
  name: 'Signin',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    status: String,
  },
  data() {
    return {
      auth: {
        identifier: '',
        password: '',
      },
      authError: '',
      tryingToLogIn: false,
      isAuthError: false,
      loading: false,
      isEmail: false,
    }
  },
  watch: {
    'auth.identifier'() {
      const EMAILREG =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (EMAILREG.test(this.auth.identifier)) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
    },
  },
  methods: {
    async tryToLogIn() {
      if (this.auth.identifier.includes('+') > 0) {
        this.auth.identifier = this.auth.identifier.substring(1)
      }
      this.authError = ''
      this.loading = true
      if (this.isEmail) {
        this.$snotify.info('Logging in...')
        await this.$auth
          .loginWith('local', {
            data: this.auth,
          })
          .then(async (res) => {
            localStorage.setItem('local', 'Bearer ' + res.data.jwt)
            await this.$auth.setToken('local', 'Bearer ' + res.data.jwt)
            // await this.$auth.setRefreshToken('local', res.data.refresh)
            await this.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
            await this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
            localStorage.setItem('user_info', JSON.stringify(res.data.user))
            await this.$auth.setUser(res.data.user)
            await this.$snotify.success('Successfully Logged In')
            this.loading = false
            this.$bridge.$emit('join_chat', {
              username: res.data.user.username,
              user_id: res.data.user.id,
            })
            this.onClose()
          })
          .catch((e) => {
            this.authError = e.response.data.error.message
            this.loading = false
          })
      } else {
        this.$axios
          .post('/users-permissions/login-verify-otp', { phone: this.auth.identifier })
          .then((res) => {
            this.loading = false
            this.confirmCode({ username: this.auth.identifier, isLogin: true, isOtpSuccess: null })
          })
          .catch((e) => {
            this.openSignUp()
            this.authError = e.response.data.error.message
            this.loading = false
          })
      }
    },
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
