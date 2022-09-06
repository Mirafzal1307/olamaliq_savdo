<template>
  <div>
    <Header />
    <div class="sticky z-50 top-0 shadow-sm">
      <Navbar :categories="categories" />
    </div>
    <Container>
      <CartItems />
      <Services />
    </Container>
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue'
import Footer from '~/components/footer/Footer.vue'
import Services from '~/components/services/Services.vue'
import LangBar from '~/components/navbar/LangBar.vue'
import Container from '~/components/Container.vue'
import CartItems from './CartItems.vue'
export default {
  name: 'Cart',
  components: { Navbar, Footer, Services, LangBar, Container, CartItems },
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
</script>

<style scoped>
</style>