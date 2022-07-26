/* eslint-disable no-console */
// import Vue from 'vue'
export default {
    state: {
        companies: [],
        locations: []
    },
    getters: {
        getCompanies(state) { return state.companies },
        getLocations(state) { return state.locations },
    },
    mutations: {
        SET_COMPANIES(state, payload) {
            state.companies = payload
        },
        SET_LOCATIONS(state, payload) {
            state.locations = payload
        },
        ADD_LOCATIONS(state, payload) {
            state.locations = [...state.locations, ...payload]
        }
    },
    actions: {
        setCompanies({ commit }, payload) {
            commit('SET_COMPANIES', payload)
            for (let ind = 0; ind < payload.length; ind++) {
                if (payload[ind].attributes.location) {
                    commit('ADD_LOCATIONS', payload[ind].attributes.location.markers)
                }
            }
        }
    },
}
