<template>
    <div>
        <Header />
        <div class="sticky top-0 shadow-sm">
            <Navbar/>
        </div>
        <Container>
            <div class="flex flex-col items-center justify-center mt-7 font-sans">
                <img src="~/assets/images/LoginImage.svg" alt="login">
                <p>Xaridni davom ettirish uchun akkauntingizga kiring yoki <span class="text-green font-semibold cursor-pointer">Olmaliq savdo</span> saytidan <span class="text-green font-semibold cursor-pointer">roʻyxatdan</span> oʻting !!! </p>
                <h1 class="font-semibold text-4xl my-4 text-green ">{{$t("registration.welcome")}}</h1>
                <LogupPage/>
            </div>
        </Container>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import Container from '~/components/Container.vue';
import Footer from '~/components/footer/Footer.vue';
import Header from '~/components/header/header.vue';
import LogupPage from '~/components/regstration/LogupPage.vue';
export default {
    name: "Registration",
    components: { Header, Navbar, Container, Footer, LogupPage }
}
</script>

<style lang="scss" scoped>
</style>