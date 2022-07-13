import tools from '~/utils/tools'
import constants from '~/utils/constants'
export default function (param) {
  const toUpper = param.toUpperCase()
  const _param = param
  const _mutations = {
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
      [tools.camelize(`get ${_param}`)]({ commit, state }, params) {
        commit(_mutations.load, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .get(`${param}`, { params })
            .then((res) => {
              commit(_mutations.pagination, {
                page: (params && parseInt(params._start)) || state.pagination.page,
                total: res.data.meta.pagination.total,
                limit: (params && parseInt(params._limit)) || state.pagination.limit,
                lastPage:
                  res.data.meta.pagination.total % state.pagination.limit > 0
                    ? Math.floor(res.data.meta.pagination.total / state.pagination.limit) + 1
                    : res.data.meta.pagination.total / state.pagination.limit,
              })
              const _res = res.data.data || res
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
          .get(`${param}/${payload.id}`, payload.query)
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
            .post(`${param}`, { data: payload.data })
            .then((res) => {
              dispatch('success_alert', {
                title: `${_param.slice(0, 1).toUpperCase() + _param.slice(1)} created successfully`,
              })
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
        commit(_mutations.pending, true)
        return new Promise((resolve, reject) => {
          this.$axios
            .put(`${param}/${payload.id}`, { data: payload.data })
            .then((res) => {
              dispatch('success_alert', {
                title: `${_param.slice(0, 1).toUpperCase() + _param.slice(1)} updated successfully`,
              })
              resolve(res)
            })
            .catch((error) => {
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
              dispatch('success_alert', {
                title: `${_param.slice(0, 1).toUpperCase() + _param.slice(1)} deleted successfully`,
              })
              resolve(res)
            })
            .catch((error) => {
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
