export const state = () => ({
    showModal: false
})

export const actions = {
    showModalFunc({ commit }) {
        commit('SHOW_MODAL')
    },
    hideModalFunc({ commit }) {
        commit('HIDE_MODAL')
    }
}

export const mutations = {
    SHOW_MODAL(state) {
        state.showModal = true
    },
    HIDE_MODAL(state) {
        state.showModal = false
    },
}

export const getters = {
    productsInCart(state) {
        return state.showModal
    }
}