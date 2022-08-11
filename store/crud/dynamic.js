import tools from '~/utils/tools'
import constants from '~/utils/constants'
export default function (param) {
  // param = 'crops'
  const toUpper = param.toUpperCase()
  // const _param = param.split('-').length > 1 ? param.split('/').slice(-1)[0] : param
  const _param = param
  const _mutations = {
    // toUpper = 'CROPS'
    error: `ERROR_${toUpper}`,
    load: `LOAD_${toUpper}`,
    oneLoad: `ONE_LOAD_${toUpper}`,
    pending: `PENDING_${toUpper}`,
    deleting: `DELETING_${toUpper}`,
    data: `GET_${toUpper}`,
    pagination: `PAGINATION_${toUpper}`,
    removeOne: `REMOVE_ONE_${toUpper}`,
  }
  return {
    state: {
      loading: false,
      oneLoading: false,
      pending: false,
      deleting: false,
      error: null,
      data: [],
      pagination: constants.pagination,
    },
    getters: {
      [tools.camelize(`load ${_param}`)](state) {
        return state.loading
      },
      [tools.camelize(`one load ${_param}`)](state) {
        return state.oneLoading
      },
      [tools.camelize(`pending ${_param}`)](state) {
        return state.pending
      },
      [tools.camelize(`deleting ${_param}`)](state) {
        return state.deleting
      },
      [tools.camelize(`data ${_param}`)](state) {
        return state.data
      },
      [tools.camelize(`error ${_param}`)](state) {
        return state.error
      },
      [tools.camelize(`pagination ${_param}`)](state) {
        return state.pagination
      },
    },
    mutations: {
      [_mutations.error](state, payload) {
        state.error = payload
      },
      [_mutations.data](state, payload) {
        state.data = payload
      },
      [_mutations.load](state, payload) {
        state.loading = payload
      },
      [_mutations.oneLoad](state, payload) {
        state.oneLoading = payload
      },
      [_mutations.pending](state, payload) {
        state.pending = payload
      },
      [_mutations.deleting](state, payload) {
        state.deleting = payload
      },
      [_mutations.pagination](state, payload) {
        state.pagination = payload
      },
      [_mutations.removeOne](state, payload) {
        state.data.splice(payload, 1)
      },
    },
    actions: {
      // get    getSomething
      [tools.camelize(`get ${_param}`)]({ commit, state }, data) {
        commit(_mutations.load, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .get(`${data.link}`, { payload: '*', district: 2, product: 1 })
            .then((res) => {
              if (data.isCount)
                this.$axios.get(`/${param}/count`).then((count) => {
                  commit(_mutations.pagination, {
                    page: (data.query && parseInt(data.query._start)) || state.pagination.page,
                    total: count,
                    limit: (data.query && parseInt(data.query._limit)) || state.pagination.limit,
                  })
                })
              const _res = res.results || res
              commit(_mutations.data, _res)
              resolve(_res)
            })
            .catch((error) => {
              commit(_mutations.error, error)
              reject(error)
            })
            .finally(() => {
              commit(_mutations.load, false)
            })
        })
      },

      // get id   getByIdSomething
      [tools.camelize(`get by id ${_param}`)]({ commit }, payload) {
        commit(_mutations.oneLoad, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .get(`${param}/${payload.id}`)
            .then((res) => {
              resolve(res)
            })
            .catch((error) => {
              commit(_mutations.error, error)
              reject(error)
            })
            .finally(() => {
              commit(_mutations.oneLoad, false)
            })
        })
      },

      // post   postSomething
      [tools.camelize(`post ${_param}`)]({ commit, dispatch }, payload) {
        commit(_mutations.pending, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .post(`${param}`, payload.data)
            .then((res) => {
              resolve(res)
            })
            .catch((error) => {
              // commit(_mutations.error, error)
              reject(error)
            })
            .finally(() => {
              commit(_mutations.pending, false)
            })
        })
      },

      // update  putSomething
      [tools.camelize(`put ${_param}`)]({ commit, dispatch }, payload) {
        // payload = {
        //   id: this.form.id,
        //   data: _form
        // }
        commit(_mutations.pending, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .put(`${param}/${payload.id}`, payload.data)
            .then((res) => {
              resolve(res)
            })
            .catch((error) => {
              // commit(_mutations.error, error)
              reject(error)
            })
            .finally(() => {
              commit(_mutations.pending, false)
            })
        })
      },

      // delete   deleteSomething
      [tools.camelize(`delete ${_param}`)]({ commit, dispatch }, payload) {
        commit(_mutations.deleting, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .remove(`${param}/${payload}`)
            .then((res) => {
              resolve(res)
            })
            .catch((error) => {
              // commit(_mutations.error, error)
              reject(error)
            })
            .finally(() => {
              commit(_mutations.deleting, false)
            })
        })
      },
    },
  }
}
