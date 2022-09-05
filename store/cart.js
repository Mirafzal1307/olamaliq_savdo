

export const state = () => ({
    products: [],
    product: null,
    cart: []
})

export const actions = {
    async addProductToCart({ commit }, { product, quantity }) {
        commit('ADD_TO_CART', { product, quantity })
    },
    removeItem({ commit }, product) {
        commit('REMOVE_FROM_CART', product)
    }
}


export const mutations = {
    ADD_TO_CART(state, { product, quantity }) {
        let productInCart = state.cart?.find((item) => item.product.id === product.id)
        if (productInCart) {
            productInCart.quantity += quantity
            return;
        }
        state.cart.push({
            product,
            quantity
        })

    },
    REMOVE_FROM_CART(state, product) {
        const leftProduct = state.cart?.find((item) => item.product.id === product.id);
        if (leftProduct.quantity > 1) {
            leftProduct.quantity--;
            return;
        }
        state.cart = state.cart.filter((item) => item.product.id !== product.id)
    }
}

export const getters = {
    productsInCart(state) {
        return state.cart
    }
}
