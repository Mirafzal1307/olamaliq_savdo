<template>
    <div class="shadow-sm rounded-md p-3 mt-2 self-start">
        <h3 class="text-green font-sans font-semibold">To'lov rejasi:</h3>
        <h5 class="text-sm mt-1">Mahsulotlar:  2</h5>
        <h5 class="text-sm mt-0.35">Tarif:  12oy</h5>
        <h5 class="text-sm mt-0.35">Bo'lib to'lash narxi:  10 000 000 so'm</h5>
        <h5 class="text-sm mt-0.35">Oylik to'lov(so'm):  9 000 000 so'm</h5>
        <h5 class="text-sm mt-0.35">Bosh to'lov(so'm):  0</h5>
        <h3 class="text-green font-sans font-semibold mt-2">To'lov usuli:</h3>
        <div class="w-full gap-1 mt-0.4 flex py-0.5 font-semibold items-center justify-center rounded-md text-sm text-green border-2 cursor-pointer border-gray">
           <img src="~/assets/icons_svg/Muddatli.svg" alt="bittada">
            <span>Muddatli to'lov</span> 
        </div>
        <div class="w-full gap-1 mt-0.4 flex py-0.5 font-semibold items-center justify-center rounded-md text-sm text-white cursor-pointer bg-green">
            <img src="~/assets/icons_svg/Bittada.svg" alt="muddatli"/>
            <span>Bittada sotib olish</span> 
        </div>
    </div>
</template>

<script>
    export default {
        name:"PaymentPlan"
    }
</script>

<style scoped>

</style>