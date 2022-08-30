<template>
    <div class="flex contact flex-col gap-3 w-1/6 ml-auto z-50 absolute right-0">
        <div class="telegram flex gap-1 bg-blue text-white font-semibold px-1 items-center max-w-max ml-auto py-0.5 cursor-pointer rounded-l-full">
            <div class="border-2 flex items-center justify-center rounded-full w-6 h-6 ">
                <img src="~/assets/icons_svg/Telegram.svg" alt="telegram">
            </div>
            <div class="hidden">{{$t("contact.telegram")}}</div>
        </div>
        <div class="telegram hover:last:visible flex gap-1 bg-red text-white font-semibold items-center max-w-max ml-auto px-1 py-0.5 cursor-pointer rounded-l-full">
            <div class=" border-2 flex items-center justify-center rounded-full w-6 h-6">
                <img src="~/assets/icons_svg/RedPhone.svg" alt="phone">
            </div>
            <div class="hidden">{{$t("contact.phone")}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Contact",
        data() {
            return {
                isShowTelegram:false,
                isShowPhone:false
            }
        },
    }
</script>

<style scoped>
    .contact{
        bottom:350px;
    }
   .telegram:hover :nth-child(2){
        display: block;
        
   }
</style>