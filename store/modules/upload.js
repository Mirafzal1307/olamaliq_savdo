/* eslint-disable no-console */
// import Vue from 'vue'
export default {
    state: {
        uploading: {
            show: false,
            percent: 0
        }
    },
    getters: {
        uploading: state => state.uploading
    },
    mutations: {
        SET_UPLOADING(state, payload) {
            state.uploading = payload
        }
    },
    actions: {
        async uploadFile({ commit }, payload) {
            const token = localStorage.getItem('local')
            console.log(token);
            const res = await this.$axios({
                method: 'post',
                url: `${process.env.VUE_APP_IMG_URL}/api/upload`,
                data: payload,
                authorization: token,
            })
            // const res = await this.$axios.$post('/upload', payload)
            return res
        },
        async deleteMedia({ commit, dispatch }, payload) {
            try {
                await this.$axios.$remove(`/media/${payload}/`)
                Vue.prototype.$snotify.error('Media Deleted Successfully')
            } catch (e) {
                console.error(e)
            }
        },
        uploadingAction({ commit }, payload) {
            commit('SET_UPLOADING', payload)
        }
    },
}
