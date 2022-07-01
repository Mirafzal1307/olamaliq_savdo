import Vue from 'vue'
export default function ({ $axios, redirect, $auth, app }) {
  if ($auth) {
    // If the user is logged in we can now get the token, we get something like `Bearer yourTokenJ9F0JFODJ` but we only need the string without the word **Bearer**, So we split the string using the space as a separator and we access the second position of the array **[1]**
    const token = app.$auth.strategy.token.get().split(' ')[1]
    $axios.setToken(token, 'Bearer') // Here we specify the token and now it works!!
  }
  $axios.setBaseURL(process.env.VUE_APP_BASE_URL)
  $axios.onError((error) => {
    if (error.response && error.response.status === 400) {
      Vue.prototype.$snotify.error(error.response.data.data[0].messages[0].message)
      return
    }
    if (error.response && error.response.status === 401) {
      Vue.prototype.$snotify.error(
        'Not Authenticated: Sorry, you have to be logged in to access this!'
      )
      return
    }
    if (error.response && error.response.status === 403) {
      Vue.prototype.$snotify.error("Not Authorized: Sorry, you can't access this!")
      return
    }
    if (error.response && error.response.status === 404) {
      Vue.prototype.$snotify.error(
        "Not Found: We couldn't find what you're looking for. Please refresh and try again, or contact the support team."
      )
      return
    }
    if (error.response && error.response.status === 422) {
      Vue.prototype.$snotify.error('Validation Error')
      return
    }
    if (error.response && error.response.status === 500) {
      Vue.prototype.$snotify.error('Server Error: Please contact the support team.')
      return
    }
    if (error.message === 'Network Error') {
      Vue.prototype.$snotify.error('Network Error: Check your network')
    }
  })
}
