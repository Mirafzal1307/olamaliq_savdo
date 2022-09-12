<template>
    <div>
        <div class="card">
            <hr class="text-gray my-2" />
            <div class="sm:flex justify-between p- relative  ">
                <div class=" flex gap-3 text-black">
                    <div class="shadow-sm flex justify-center w-10  pic-box rounded-md px-2 py-0.35">
                        <img :src="require(`~/assets/images/${product.img}`)" alt="product">
                    </div>
                    <div class=" xsm:flex-col xsm:w-full">
                        <div class=" w-2/3 font-sans text-sm">{{ product.name }}</div>
                        <div class=' xsm:flex gap-1 sm:hidden'>
                            <input class=" w-8 py-0.5 rounded-md bg-light-gray outline-none pl-2 border-gray"
                            :value=quantity disabled min="1" max="10" type="number">
                            <div>
                                <h4 class=" font-semibold text-black text-sm">{{ product.price }} so'm</h4>
                                <h4 class=" font-semibold text-black text-sm">{{quantity}} X {{ totalPrice }}</h4>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="flex justify-evenly xsm:w-full sm:w-3/5 xsm:hidden sm:flex">
                    <h4 class=" font-semibold text-black text-sm">{{ product.price }} so’m</h4>
                    <div class=" font-semibold text-black">
                        <input class=" w-8 py-0.5 rounded-md bg-light-gray outline-none pl-2 border-gray"
                            :value=quantity min="1" max="10" type="number">
                    </div>
                    <h4 class=" font-semibold text-black text-sm">{{ totalPrice }} so’m</h4>
                </div>
                <div @click="removeFromCart(product)"
                        class="delete w-5 h-5 rounded-full z-10 cursor-pointer flex items-center justify-center border-2 border-gray text-gray font-semibold text-sm absolute xsm:-right-0.35 right-0 xsm:top-2 sm:top-6 xl:top-0.35 ">
                        X</div>
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