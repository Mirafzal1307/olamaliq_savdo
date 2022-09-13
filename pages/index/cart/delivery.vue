<template>
    <div>
        <Header/>
        <Navbar :categories="categories"/>
        <Container>
            <h3 class=" font-semibold text-green text-2xl mt-5 mb-1">Harid savatchasi</h3>
            <BuyNow/>
            <Services/>
        </Container>
        <Footer/>  
    </div>
</template>

<script>
import Navbar from '~/components/navbar/Navbar.vue';
import Container from '~/components/Container.vue';
import Services from '~/components/services/Services.vue';
import Footer from '~/components/footer/Footer.vue';
import Header from '~/components/header/header.vue';
import BuyNow from '~/components/cart/buynow/BuyNow.vue';
    export default {
    components: { Navbar, Container, Services, Footer, Header, BuyNow },
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
                product_name: 'Mikroto\'lqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudbo\'ronlar',
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
                product_name: 'Mikroto\'lqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudbo\'ronlar',
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
                product_name: 'Mikroto\'lqinli pechlar',
                id: '2',
              },
              {
                product_name: 'Dudbo\'ronlar',
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