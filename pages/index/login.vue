<template>
  <div>
    <Header />
    <div class="sticky z-50 top-0 shadow-sm">
      <Navbar :categories="categories" />
    </div>
    <Container>
      <div class="flex flex-col items-center justify-center mt-7 font-sans">
        <img src="~/assets/images/LoginImage.svg" alt="login" />
        <p class="xsm:text-center">
          Xaridni davom ettirish uchun akkauntingizga kiring yoki
          <span class="text-green font-semibold cursor-pointer">Olmaliq savdo</span> saytidan
          <span class="text-green font-semibold cursor-pointer">
            <nuxt-link :to="localePath('/logup')"> ro'yxatdan</nuxt-link></span
          >
          oʻting !!!
        </p>
        <h1 class="font-semibold text-4xl my-4 text-green xsm:text-center">{{ $t('registration.welcome') }}</h1>
        <LoginPage />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import LoginPage from '~/components/regstration/LoginPage.vue'
import Navbar from '~/components/navbar/Navbar.vue'
import Container from '~/components/Container.vue'
import Footer from '~/components/footer/Footer.vue'
import Header from '~/components/header/header.vue'
export default {
  name: 'Registration',
  components: { LoginPage, Header, Navbar, Container, Footer },
  data() {
    return {
      categories: [
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: 'Mikrotoʻlqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudboʻronlar',
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun  texnikalar',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: 'Mikrotoʻlqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudboʻronlar',
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlfdfdfari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'uchun katta texnikalar',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: 'Mikrotoʻlqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudboʻronlar',
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>