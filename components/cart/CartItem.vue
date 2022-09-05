<template>
    <div>
        <div class="card">
            <hr class="text-gray" />
            <div class="flex justify-between p-1">
                <div class=" flex gap-3 text-black">
                    <div class="shadow-sm flex justify-center w-10 pic-box rounded-md px-2 py-0.35">
                        <img :src="require(`~/assets/images/${product.img}`)" alt="product">
                    </div>
                    <span class=" w-2/3 font-sans text-sm">{{ product.name }}</span>
                </div>
                <div class="relative  flex justify-evenly w-3/5">
                    <h4 class=" font-semibold text-black text-sm">{{ product.price }} so’m</h4>
                    <div class=" font-semibold text-black">
                        <input class=" w-8 py-0.5 rounded-md bg-light-gray outline-none pl-2 border-gray"
                            :value=quantity disabled min="1" max="10" type="number">
                    </div>
                    <h4 class=" font-semibold text-black text-sm">{{ totalPrice }} so’m</h4>
                    <div @click="removeFromCart(product)"
                        class="delete w-5 h-5 rounded-full cursor-pointer flex items-center justify-center border-2 border-gray text-gray font-semibold text-sm absolute right-0.35 top-0.35">
                        X</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CartItem",
    data() {
        return {
            totalPrice: (this.product.price * this.quantity).toFixed(0),
        }
    },
    props: {
        product: {
            type: Object | Array,
            required: true,
            default: [],
        },
        quantity: {
            type: Object | Array,
            required: true,
            default: 1,
        }


    },
    methods: {
        removeFromCart(product) {
            this.$store.dispatch("cart/removeItem", product
            )
        }
    },
}
</script>

<style scoped>
.pic-box {
    min-height: 80px;
}
</style>