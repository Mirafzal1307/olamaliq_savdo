<template>
<div  class="foo w-full top-0" >
    <div class = "w-full shadow shadow-black-500/50 bg-white" >
        <Container>
            <div class="flex justify-between items-center py-4 gap-0.75 bg-white w-full">
                <h1 class="font-semibold text-lg cursor-pointer "> <span class="border-b-2 border-green">Olmaliq</span>
                    Savdo</h1>
                <div
                    class="katalog flex justify-center items-center py-1 px-5 cursor-pointer  gap-2 bg-green  text-white font-semibold rounded-md">
                    <img src="../../assets/icons_svg/Menu.svg" alt="menu">
                    <h4>{{$t('cat')}}</h4>
                    <img src="../../assets/icons_svg/ArrowRight.svg" alt="arrow" />
                </div>
                <div class="search relative  w-7/12">
                    <input type="text"
                        class=" border-2 text-black-900 outline-none border-green pl-1 py-1 rounded-md w-full text-sm"
                        placeholder="Mahsulot izlash...">
                    <div
                        class="search-btn absolute top-0 right-0 flex justify-center items-center p-2 bg-green rounded-r-md cursor-pointer">
                        <img src="~/assets/icons_svg/Search.svg" alt="search">
                    </div>
                </div>
                <div class="action-wraper ml-5 flex justify-center items-center gap-4">
                    <div class="actions flex-col cursor-pointer hover:text-green transition-all relative">
                        <img src="~/assets/icons_svg/Heart.svg" class="m-auto " alt="liked">
                        <div class="text-sm">{{$t('sevimli')}}</div>
                        <div class="indicator absolute flex items-center justify-center w-3 h-3 font-semibold text-xs rounded-full bg-red text-white -top-0.4 -right-0.35">3</div>
                    </div>
                    <div class="actions flex-col   cursor-pointer hover:text-green transition-all relative">
                        <img src="~/assets/icons_svg/Compare.svg" class="m-auto " alt="compare">
                        <div class="text-sm">{{$t('taqqos')}}</div>
                        <div class="indicator absolute flex items-center justify-center w-3 h-3 font-semibold text-xs rounded-full bg-red text-white -top-0.4 -right-0.35">8</div>
                    </div>
                    <div class="actions flex-col  cursor-pointer hover:text-green transition-all relative">
                        <img src="~/assets/icons_svg/Cart.svg" class="m-auto " alt="cart">
                        <div class="text-sm">{{$t('savat')}}</div>
                        <div class="indicator absolute flex items-center justify-center w-3 h-3 font-semibold text-xs rounded-full bg-red text-white -top-0.4 -right-0.35">2</div>
                    </div>
                    <div class="actions flex-col w-7 h-7  flex items-center justify-center rounded-md cursor-pointer items-cent bg-green text-white">
                        <img src="~/assets/icons_svg/Person.svg" class="m-auto " alt="person">
                    </div>
                </div>
            </div>
        </Container>
    </div>
</div>
    
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return{
        }
    },
//     methods: {
//             handleFoo() {
//                 const fooHeader = this.$refs.fooHeader;
//                 const sticky = fooHeader.offsetTop;
//                 // console.log(fooHeader);
//                 window.pageYOffset > sticky ? fooHeader.classList.add('sti') : fooHeader.classList.remove('fixed');
//             },
//         },
// mounted() {
//             this.$nextTick(() => {
//                 window.addEventListener('scroll', this.handleFoo);
//             });
//         },
}
</script>

<style scoped>

</style>