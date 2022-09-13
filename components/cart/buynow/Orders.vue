<template>
    <div class="px-3 mt-3">
        <div v-for="product in cart" :key="product.id">
            <div class="cart flex gap-2">
                <div class="shadow-sm flex justify-center w-10  pic-box rounded-md px-2 py-0.35">
                    <img :src="require(`~/assets/images/${product.product.img}`)" alt="product">
                </div>
                <div class="flex flex-col gap-1">
                    <h3 class=" font-semibold text-green">{{product.product.price}} so'm</h3>
                    <p class=" text-sm">{{product.product.name }}</p>
                    <h3 class=" text-sm font-semibold"> {{product.quantity}} x {{product.product.price}} so'm</h3>
                </div>
            </div>
            <hr class="text-gray my-2" />
        </div>
        <div class="mt-4">
            <h3 class=" text-md my-1 font-semibold">To'lov</h3>
            <p class=" text-sm">Qiymat: 26 000 000 so'm</p>
            <p class=" text-sm my-0.5">Yetkazib berish: Bepul</p>
            <h3 class=" font-semibold text-green"> Umumiy qiymat: 10 033 200 so'm</h3>
        </div>
        <button class="bg-green mt-2 mb-4
         text-white py-0.5 w-full font-semibold font-sans rounded-md outline-none border-green">Buyurtma
            qilish</button>
    </div>
</template>

<script>
import Wraper from './Wraper.vue';
export default {
    name: "orderComp",
    components: { Wraper },
    computed: {
        cart() {
            return this.$store.state.cart?.cart
        }
    },
}
</script>

<style scoped>

</style>