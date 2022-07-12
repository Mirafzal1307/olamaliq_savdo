<template>
  <div>
    <nuxt />
    <vue-snotify />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data () {
    return {
      token: null,
      currentUser: {}
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.auth.loggedIn
    })
  },
  created () {
    if (!process.client) {
      return
    }
    this.token = localStorage.getItem('local')
    this.currentUser = JSON.parse(localStorage.getItem('user_info'))
  },
  mounted () {
    this.setUserToStore()
  },
  methods: {
    // eslint-disable-next-line require-await
    async setUserToStore () {
      if (this.token && Object.keys(this.currentUser).length > 0) {
        await this.$auth.setToken('local', this.token)
        await this.$axios.setHeader('Authorization', this.token)
        await this.$auth.ctx.app.$axios.setHeader('Authorization', this.token)
        await this.$auth.setUser(this.currentUser)
      }
    }
  }
}
</script>
