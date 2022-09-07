<template>
    <form @submit = "onSubmit" class=" xsm:w-full sm:w-4/5 md:w-2/5">
        <div class="relative">
            <input v-model="inputData.phone" class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                maxlength="13">
            <span v-show = '!inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputPhone")}}</span>
                <span v-show = 'inputValidate.phoneValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">*{{$t("registration.validatePhone")}}
            </span>
        </div>
        <div class="relative my-4">
            <input v-model="inputData.password"  class=" border-2 py-0.5 px-1  outline-none border-black rounded-md w-full" type="phone"
                maxlength="13">
            <span v-show = '!inputValidate.passwordValidate' class="absolute font-sans bg-white px-0.4 text-sm text-black -top-0.5 left-6">{{$t("registration.inputPassword")}}</span>
            <span v-show = 'inputValidate.passwordValidate' class="absolute font-sans bg-white px-0.4 text-sm text-red -top-0.5 left-6">*{{$t("registration.validateParol")}}</span>
        </div>
        <div class="flex justify-between">
            <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" checked>
                <span class="ml-2 font-sans">{{$t("registration.checkBox")}}</span>
            </label>
            <nuxt-link class=" text-green underline" :to="localePath('/logup')">{{$t("registration.register")}}</nuxt-link>
        </div>
        <button type="submit" class="bg-green mt-2 mb-4
         text-white py-0.5 w-full font-semibold font-sans rounded-md outline-none border-green">{{$t("registration.logIn")}}</button>
    </form>

</template>

<script>
export default {
    name: "LoginPage",
    data() {
        return {
            inputData:{
                phone:'',
                password:'',
            },
            inputValidate:{
                phoneValidate:false,
                passwordValidate:false
            }
           
        }
    },
    methods : {
            onSubmit(e){
                e.preventDefault();
                if(this.inputData.phone == ''){
                    this.inputValidate.phoneValidate = true
                }
                if(this.inputData.password == ''){
                    this.inputValidate.passwordValidate = true
                }

            }
        }
}
</script>

<style scoped>
    .form-checkbox{
        accent-color:green;
    }
</style>