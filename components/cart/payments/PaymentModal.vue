<template>
    <div class="absolute  top-10 z-50 xsm:left-1 xsm:right-1 lg:left-15 lg:right-15  bg-white rounded-md  pb-5">
        <div class="flex px-5 py-3 relative">
            <h2 class=" font-semibold">Muddatli to'lov uchun hamkor tanlang</h2>
            <div @click="hideModalFunc"
                class="delete absolute right-1 top-2  ml-auto w-4  h-4 rounded-full cursor-pointer flex items-center justify-center border-2 border-black text-black font-semibold text-sm">
                X</div>
        </div>
        <hr class="text-green">
        <div class=" xsm:px-3 sm:px-5">
            <div class="flex xsm:flex-wrap lg:flex-nowrap xsm: justify-center xsm:gap-3  sm:gap-4 my-5 ">
                <div v-for="payment in payments" :key="payment.name"
                    class="xsm:w-2/5 xl:w-1/4 px-3 py-3 flex items-center justify-center rounded-md active:shadow-md cursor-pointer bg-gray">
                <nuxt-link :to="localePath(`/cart/${payment.name}`)">
                    <img :src="require(`~/assets/svg/${payment.img}.svg`)" class=" bg-transparent" alt="Paymart">
                </nuxt-link>
                </div>
            </div>
            <h3 class="font-semibold mb-3">Mahsulot (lar)</h3>
            <div class="flex xsm:justify-center flex-wrap gap-3">
                <div v-for="product in cart" :key="product.id"
                    class="shadow-sm  px-1 py-1 text-center rounded-md flex flex-col align-middle">
                    <div class="flex items-center justify-center">
                        <img :src="require(`~/assets/images/${product.product.img}`)" alt="">
                    </div>
                    <div class=" mt-auto">
                        <h3 class="font-semibold mt-auto">{{product.product.name}}</h3>
                        <h3 class="font-semibold mt-auto text-green">{{product.product.price}} so'm</h3>
                    </div>

                </div>
            </div>
            <h3 class="font-semibold my-4">To'lov davrini tanlang</h3>
            <div class="flex   xsm:flex-wrap sm:flex-nowrap xsm:gap-3 sm:gap-7">
                <div class="left flex flex-col gap-1">
                    <div class=" ">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                </div>
                <div class="rigth flex flex-col gap-1">
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                    <div class="">
                        <input type="radio">
                        <label class="ml-1" for="">3 oy / 120 000 so'm = 12 320 000 so'm</label>
                    </div>
                </div>
            </div>
            <button class="bg-green mt-4 mb-4
         text-white py-0.5 w-full font-semibold font-sans rounded-md outline-none border-green">Haridni rasmiylashtirish</button>
            <div class="text-center">To'lovlar bo'yicha savollaringiz bo'lsa, iltimos, bizga qo'ng'iroq qiling
              <br/> <span class="text-green">+998 71 202 06 06</span> </div>
              <div class="text-center flex justify-center mt-3  text-red">
                <p class=" w-9/12 ">Oylik to'lov miqdori indikativ hisoblanadi va yakuniy to'lov jadvalidan farq qilishi mumkin. Muddatli to’lov uchun javobgarlik 
tanlagan hamkorimiz zimmasiga yuklanadi</p>
              </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "PaymentModal",
    props: {
        cart: {
            type: Object | Array,
            required: true,
            default: [],
        },
    },
    methods: {
            hideModalFunc(){
                this.$store.dispatch("modal/hideModalFunc") 
            },
        },
        data() {
            return {
                payments:[
                    {
                        name:"paymart",
                        img:"Paymart"
                    },
                    {
                        name:"Davrmobile",
                        img:"Davr"
                    },
                    {
                        name:"intend",
                        img:"Intent"
                    },
                    {
                        name:"alifnasiya",
                        img:"Alif"
                    }
                ]
            }
        }, 

}
</script>

<style scoped>

</style>