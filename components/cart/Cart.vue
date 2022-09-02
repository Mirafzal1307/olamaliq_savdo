<template>
    <div>
        <Header />
        <div class="sticky z-50 top-0 shadow-sm">
            <Navbar />
        </div>
        <Container>
            <CartItems />
            <Services />
        </Container>
        <Footer />
    </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import Footer from '~/components/footer/Footer.vue';
import Services from '~/components/services/Services.vue';
import LangBar from '~/components/navbar/LangBar.vue';
import Container from '~/components/Container.vue';
import CartItems from './CartItems.vue';
export default {
    name: "Cart",
    components: { Navbar, Footer, Services, LangBar, Container, CartItems },


}
</script>

<style scoped>
</style>