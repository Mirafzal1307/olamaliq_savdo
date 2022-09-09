<template>
    <div class="w-full mt-5 ">
        <h1 class=" text-2xl text-green font-semibold font-sans">Harid savatchasi</h1>
        <div class=" md:flex xsm:w-full flex-initial justify-between">
            <div class="shadow-sm xsm:w-full md:w-3/5 lg:w-2/3 xl:w-3/4 mt-1 py-3 px-2 self-start rounded-md">
                <div class="header xsm:w-full flex justify-between xsm:hidden sm:flex">
                    <h4 class=" font-semibold text-black">Mahsulot</h4>
                    <div class="subHeader flex justify-evenly w-3/5">
                        <h4 class=" font-semibold text-black">Narx</h4>
                        <h4 class=" font-semibold text-black">Son</h4>
                        <h4 class=" font-semibold text-black">Jami</h4>
                    </div>
                </div>

                <CartItem v-for="product in cart" :key="product.id" :product="product.product"
                    :quantity="product.quantity" />
                <div class="mt-7 text-2xl text-center" v-show="!cart.length">Savatcha Bo'mbo'sh 🥲🥲🥲</div>
            </div>
            <PaymentPlan />
        </div>

    </div>
</template>

<script>
import PaymentPlan from "./PaymentPlan.vue";
import CartItem from "./CartItem.vue";
export default {
    name: "CartItems",
    components: { PaymentPlan, CartItem },
    computed: {
        cart() {
            return this.$store.state.cart?.cart
        }
    }
}
</script>

<style scoped>
</style>