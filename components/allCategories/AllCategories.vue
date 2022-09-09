<template>
  <div>
    <Header />
    <div>
      <Navbar :categories="categories" />
    </div>
    <Container>
      <nuxt-link :to="localePath(`/`)">
        <p>Bosh sahifa  </p>
         <img src="~/assets/images/ArrowLeft.jpg" />
      </nuxt-link>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from '../Container.vue'
export default {
  name: 'AllCategories',
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
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
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
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
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
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
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
  components: { Container },
}
</script>

<style scoped>
</style>

  