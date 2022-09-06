<template>
  <div>
    <Header />
    <div class="sticky z-50 top-0 shadow-sm">
      <Navbar :categories="categories" />
    </div>
    <Container>
      <div class="flex flex-col items-center justify-center mt-7 font-sans">
        <img src="~/assets/images/LoginImage.svg" alt="login" />
        <p>
          Xaridni davom ettirish uchun akkauntingizga kiring yoki
          <span class="text-green font-semibold cursor-pointer">Olmaliq savdo</span> saytidan
          <span class="text-green font-semibold cursor-pointer">roʻyxatdan</span> oʻting !!!
        </p>
        <h1 class="font-semibold text-4xl my-4 text-green">{{ $t('registration.welcome') }}</h1>
        <LogupPage />
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue'
import Container from '~/components/Container.vue'
import Footer from '~/components/footer/Footer.vue'
import Header from '~/components/header/header.vue'
import LogupPage from '~/components/regstration/LogupPage.vue'
export default {
  name: 'Registration',
  components: { Header, Navbar, Container, Footer, LogupPage },
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