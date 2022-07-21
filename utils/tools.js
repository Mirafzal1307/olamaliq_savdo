/* eslint-disable no-unused-expressions */
import Vue from 'vue'
import VueRouter from 'vue-router'
const { isNavigationFailure, NavigationFailureType } = VueRouter
const tools = {
  fixDoubleRouting(err) {
    if (isNavigationFailure(err, NavigationFailureType.redirected)) {
      err.to.path
      err.from.path
    }
  },
  camelize(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase()
      })
      .replace(/\s+/g, '')
  },
  getFileUrl(name) {
    if (name) {
      if (name.includes('https://')) {
        return name
      }
      if (name.includes('/uploads')) {
        return `${process.env.VUE_APP_IMG_URL}${name}`
      }
      return `${process.env.VUE_APP_IMG_URL}/uploads${name}`
    }
  },
  getDateTime(stringdate) {
    const date = new Date(stringdate)
    const year = date.getFullYear()
    const month = this.getNol((1 + date.getMonth()).toString())
    const day = this.getNol(date.getDate().toString())
    const hours = this.getNol(date.getHours().toString())
    const minutes = this.getNol(date.getMinutes().toString())
    return `${day}.${month}.${year} ${hours}:${minutes}`
  },
  getDate(stringdate) {
    const date = new Date(stringdate)
    const year = date.getFullYear()
    const month = this.getNol((1 + date.getMonth()).toString())
    const day = this.getNol(date.getDate().toString())
    return `${day}.${month}.${year}`
  },
  getNol(e) {
    return e.length > 1 ? e : '0' + e
  },
  focusI(a) {
    document.getElementById(a).focus()
  },
  setPageNumber(count, limit) {
    return count % limit > 0 ? Math.trunc(count / limit) + 1 : count / limit
  },
  currency(n, currency) {
    return new Intl.NumberFormat({
      style: 'currency',
      currency: 'currency',
    }).format(n)
  },
  checkToNone(data) {
    if (data === 'None') {
      return ''
    }
    return data
  },
  checkToEmpty(data) {
    if (data === '') {
      return 'None'
    }
    return data
  },
}
export default tools
Vue.prototype.$tools = tools
