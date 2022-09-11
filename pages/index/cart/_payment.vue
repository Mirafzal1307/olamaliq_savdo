<template>
    <div>
        <Header />
        <div class="sticky z-50 top-0 shadow-sm">
            <Navbar :categories="categories" />
        </div>
        <Container>
            <h1 class="my-4 text-3xl font-semibold text-center font-sans"> <span class="text-green"> “Paymart”</span>
                mudatli to'lov xizmati</h1>
            <div class=" gap-3 lg:flex justify-between">
                <div class="flex flex-wrap gap-3 justify-center  self-start mt-3">
                    <div v-for="product in cart" :key="product.id"
                        class="shadow-sm xsm:w-2/5 sm:1/3 md:w-1/5  px-1 py-1 text-center rounded-md flex flex-col align-middle">
                        <div class="flex items-center justify-center">
                            <img :src="require(`~/assets/images/${product.product.img}`)" alt="">
                        </div>
                        <div class=" mt-auto">
                            <h3 class="font-semibold mt-auto">{{product.product.name}}</h3>
                            <h3 class="font-semibold mt-auto text-green">{{product.product.price}} so'm</h3>
                        </div>

                    </div>
                </div>
                <div class="shadow-sm xsm:mt-4 md:mt-2 rounded-md px-3 pt-3 self-start  lg:w-3/12">
                    <h3 class="text-green font-sans font-semibold">To'lov rejasi:</h3>
                    <h5 class="text-sm mt-1">Mahsulotlar: 2</h5>
                    <h5 class="text-sm mt-0.35">Tarif: 12oy</h5>
                    <h5 class="text-sm mt-0.35">Bo'lib to'lash narxi: 10 000 000 so'm</h5>
                    <h5 class="text-sm mt-0.35">Oylik to'lov(so'm): 9 000 000 so'm</h5>
                    <h5 class="text-sm mt-0.35">Bosh to'lov(so'm): 0</h5>
                    <h3 class="text-green font-sans font-semibold mt-2">Anketa:</h3>
                    <div>
                        <div class="relative my-4">
                            <input class=" border-2 py-0.35 px-1  outline-none border-black rounded-md w-full"
                                type="phone" maxlength="13">
                            <span
                                class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-4">{{$t("registration.inputName")}}</span>

                        </div>
                        <div class="relative my-4">
                            <input class=" border-2 py-0.35 px-1  outline-none border-black rounded-md w-full"
                                type="phone" maxlength="13">
                            <span
                                class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-4">{{$t("registration.inputPhone")}}</span>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox" checked>
                                <span class="ml-2 font-sans"> <span
                                        class="text-green underline cursor-pointer">"{{$t("registration.agreement")}}"
                                    </span> </span>
                            </label>
                        </div>
                        <button type="submit" class="bg-green mt-2 mb-4
         text-white py-0.5 w-full font-semibold font-sans rounded-md outline-none border-green">{{$t("registration.logIn")}}</button>
                    </div>
                </div>
            </div>
            <div class="mt-5 italic">Siz avvalo kerakli mahsulotlarni <span class="text-green">"Savat"</span> ga qo'yish orqali mahsulotlar sonini  o'zgartirishingiz va boshqalarni  qo'shishingiz mumkin!</div>
        </Container>

        <Footer />
    </div>
</template>

<script>
import Header from '~/components/header/header.vue';
import Navbar from '~/components/navbar/Navbar.vue';
import Footer from '~/components/footer/Footer.vue';
import Container from '~/components/Container.vue';
import PaymentPlan from '~/components/cart/PaymentPlan.vue';
export default {
    components: { Header, Navbar, Footer, Container, PaymentPlan },
    computed: {
        cart() {
            return this.$store.state.cart?.cart
        },
    },
}
</script>

<style scoped>

</style>