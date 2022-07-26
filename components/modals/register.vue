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
            >
              {{ $t('registration') }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-4 text-gray-600 font-semibold">
        {{ $t('choose-your-type-of-activity') }}
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div @click="toRegisterType()" class="border rounded-md border-gray-200 p-4 cursor-pointer">
          <img :src="require('/assets/images/user.png')" alt="">
          <div class="flex justify-center text-gray-600 text-sm font-semibold">{{ $t('user') }}</div>
        </div>
        <div class="border rounded-md border-gray-200 p-4">
          <img :src="require('/assets/images/consultant.png')" alt="">
          <div class="flex justify-center text-gray-600 text-sm font-semibold">{{ $t('consultant') }}</div>
        </div>
        <div class="border rounded-md border-gray-200 p-4">
          <img :src="require('/assets/images/content.png')" alt="">
          <div class="flex justify-center text-gray-600 text-sm font-semibold">{{ $t('content-provider') }}</div>
        </div>
      </div>
      <!-- <div class="space-y-3">
        <ValidationObserver v-slot="{ handleSubmit, invalid }" slim>
          <form class="" novalidate @submit.prevent="handleSubmit(onSubmit)">
            <div class="mt-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="firstname"
                rules="required"
                mode="eager"
              >
                <input
                  name="firstname"
                  autocomplete="text"
                  :placeholder="$t('firstname')"
                  v-model="account.name"
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
                  :class="errors.length > 0 ? 'border-red-600' : 'border-green-300'"
                />
              </ValidationProvider>
            </div>
            <div class="mt-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="lastname"
                rules="required"
                mode="eager"
              >
                <input
                  name="lastname"
                  autocomplete="text"
                  :placeholder="$t('lastname')"
                  v-model="account.surname"
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
                  :class="errors.length > 0 ? 'border-red-600' : 'border-green-300'"
                />
              </ValidationProvider>
            </div>
            <div class="mt-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="phoneOrEmail"
                rules="required|phoneOrEmail"
                mode="eager"
              >
                <input
                  name="phoneOrEmail"
                  type="text"
                  autocomplete="text"
                  v-model="phoneOrEmail"
                  :placeholder="$t('email-or-phone')"
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
                  :class="errors.length > 0 ? 'border-red-600' : 'border-green-300'"
                />
              </ValidationProvider>
            </div>
            <div class="mt-1">
              <ValidationProvider
                v-slot="{ errors }"
                name="password"
                rules="required|min:6"
                mode="eager"
              >
                <input
                  name="password"
                  :type="hidden.password ? 'password' : 'text'"
                  autocomplete="text"
                  v-model="account.password"
                  :placeholder="$t('password')"
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
                  :class="errors.length > 0 ? 'border-red-600' : 'border-green-300'"
                />
              </ValidationProvider>
            </div>
            <div class="mt-1" v-if="isEmail">
              <ValidationProvider
                v-slot="{ errors }"
                name="confirmPassword"
                :rules="{ required: true, samePassword: account.password }"
                mode="eager"
              >
                <input
                  v-model="confirm_password"
                  name="confirm_password"
                  :type="hidden.confirm_password ? 'password' : 'text'"
                  :placeholder="$t('confirm-password')"
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
                  :class="errors.length > 0 ? 'border-red-600' : 'border-green-300'"
                />
              </ValidationProvider>
            </div>
            <div class="mt-1">
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
                  focus:outline-none
                "
                :class="
                  invalid ? 'bg-gray-600 hover:bg-gray-700' : 'bg-green-600 hover:bg-green-700'
                "
              >
                {{ $t('register') }}
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div> -->
      <!-- <div class="flex items-center justify-center mt-2">
        <p class="text-gray-600 text-sm font-medium">Do you have an account?</p>
        <button
          class="ml-2 text-yellow-600 text-sm font-medium focus:outline-none"
          @click="openSignIn()"
        >
          Sign in
        </button>
      </div> -->
    </div>
  </div>
</template>

<script>
import signInModal from './signin.vue'
import registerType from './register-type.vue'
export default {
  name: 'Register',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    status: String,
  },
  data() {
    return {
      phoneOrEmail: '',
      isEmail: false,
      account: {
        name: '',
        surname: '',
        email: '',
        phone: ''
      },
      confirm_password: '',
      hidden: {
        password: true,
        confirm_password: true
      },
      loading: false
    }
  },
  watch: {
    phoneOrEmail () {
      const EMAILREG = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (EMAILREG.test(this.phoneOrEmail)) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
    }
  },
  methods: {
    toRegisterType() {
      this.$emit('close')
      this.$modal.show(
        registerType,
        { status: 'register' },
        {
          height: 'auto',
          maxWidth: 500,
          width: window.innerWidth <= 450 ? window.innerWidth - 10 : 450,
          acrollable: true,
        }
      )
    },
    onSubmit() {
      const _user = { ...this.account }
      if (this.phoneOrEmail.includes('@') > 0) {
        _user.email = this.phoneOrEmail
        _user.username = this.phoneOrEmail
        delete _user.phone
      } else if (this.phoneOrEmail.includes('+') > 0) {
        _user.phone = this.phoneOrEmail.substring(1)
        _user.username = this.phoneOrEmail.substring(1)
        delete _user.email
        delete _user.password
      } else {
        _user.phone = this.phoneOrEmail.substring(1)
        _user.username = this.phoneOrEmail.substring(1)
        delete _user.email
        delete _user.password
      }
      this.$axios.post('/auth/local/register', _user).then(async (data) => {
        if (this.isEmail) {
          this.$snotify.info('Logging in...')
          console.log(this.account, _user)
          await this.$auth.loginWith('local', {
            data: { identifier: _user.email, password: _user.password }
          }).then(async (res) => {
            await this.$auth.setToken('local', 'Bearer ' + res.data.jwt)
            // await this.$auth.setRefreshToken('local', res.data.refresh)
            await this.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
            await this.$auth.ctx.app.$axios.setHeader('Authorization', 'Bearer ' + res.data.jwt)
            localStorage.setItem('user_info', JSON.stringify(res.data.user))
            await this.$auth.setUser(res.data.user)
            this.$bridge.$emit('join_chat', {
              username: res.data.user.username,
              user_id: res.data.user.id,
            })
            await this.$snotify.success('Successfully Logged In')
            this.loading = false
            this.onClose()
          }).catch((e) => {
            this.loading = false
            this.$snotify.error(e.response.data.detail)
          })
          return
        }
        if (data.data === false) {
          this.confirmCode({ username: this.user.phone, isOtpSuccess: false, isLogin: null })
          return
        }
        this.confirmCode({ username: data.data.user.phone, isOtpSuccess: null, isLogin: null })
      // eslint-disable-next-line no-console
      }).catch((e) => { console.error(e) })
    },
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
