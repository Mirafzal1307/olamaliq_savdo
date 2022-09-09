<!-- <template>

  <div>
    <Header />
    <div class="flex justify-between gap-2">
      <Navbar :categories="categories" />
    </div>
    <nuxt-link :to="localePath(`/`)">
      <p>Bosh sahifa</p>
    </nuxt-link>
    <Footer />
  </div>
</template>

<script>
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
}
</script>

<style scoped>
</style> -->
<template>
  <container class="xl" >
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4 bg-green">01</div>
      <div class="col-start-1 col-end-3 bg-green">02</div>
      <div class="col-end-7 col-span-2 bg-green">03</div>
      <div class="col-start-1 col-end-7 bg-green">04</div>
    </div>
  </container>
</template>
  <script>
import Container from '../Container.vue'
export default {
  components: { Container },
  name: 'AllCategories',
}
</script>
  