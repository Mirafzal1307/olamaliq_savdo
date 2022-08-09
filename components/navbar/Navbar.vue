<template>
<div @scroll="handleFoo" class="foo w-full top-0" ref="fooHeader" >
    <div class = "w-full shadow shadow-black-500/50" >
        <Container>
            <div class="flex justify-center items-center py-3 gap-4 bg-white w-full">
                <h1 class="font-semibold text-xl cursor-pointer "> <span class="border-b-2 border-green">Olmaliq</span>
                    Savdo</h1>
                <div
                    class="katalog flex justify-center items-center py-1 px-5 cursor-pointer  gap-2 bg-green  text-white font-semibold rounded-md">
                    <img src="../../assets/icons_svg/Menu.svg" alt="menu">
                    <h4>Katalog</h4>
                    <img src="../../assets/icons_svg/ArrowRight.svg" alt="arrow" />
                </div>
                <div class="search relative  w-2/5">
                    <input type="text"
                        class=" border-2 text-black-900 outline-none border-green pl-1 py-1 rounded-md w-full text-sm"
                        placeholder="Mahsulot izlash...">
                    <div
                        class="search-btn absolute top-0 right-0 flex justify-center items-center p-2 bg-green rounded-r-md cursor-pointer">
                        <img src="~/assets/icons_svg/Search.svg" alt="search">
                    </div>
                </div>
                <div class="action-wraper ml-5 flex justify-center items-center gap-4">
                    <div class="actions flex-col  items-cent cursor-pointer hover:text-green transition-all">
                        <img src="~/assets/icons_svg/Heart.svg" class="m-auto " alt="liked">
                        <div class="text-xs">Sevimli</div>
                    </div>
                    <div class="actions flex-col  items-cent cursor-pointer hover:text-green transition-all">
                        <img src="~/assets/icons_svg/Compare.svg" class="m-auto " alt="compare">
                        <div class="text-xs">Taqqos</div>
                    </div>
                    <div class="actions flex-col  items-cent cursor-pointer hover:text-green transition-all">
                        <img src="~/assets/icons_svg/Cart.svg" class="m-auto " alt="cart">
                        <div class="text-xs">Savatcha</div>
                    </div>
                    <div class="actions flex-col p-1 rounded-md cursor-pointer items-cent bg-green text-white">
                        <img src="~/assets/icons_svg/Person.svg" class="m-auto " alt="liked">
                    </div>
                </div>
            </div>
        </Container>
    </div>
</div>
    
</template>

<script>
import Container from '../container/Container.vue';
export default {
    name: "Navbar",
    components: { Container },
    data(){
        return{
        }
    },
    methods: {
            handleFoo() {
                const fooHeader = this.$refs.fooHeader;
                const sticky = fooHeader.offsetTop;
                // console.log(fooHeader);
                window.pageYOffset > sticky? fooHeader.classList.add('fixed') : fooHeader.classList.remove('fixed');
            },
        },
mounted() {
            this.$nextTick(() => {
                window.addEventListener('scroll', this.handleFoo);
            });
        },
}
</script>

<style scoped>
</style>