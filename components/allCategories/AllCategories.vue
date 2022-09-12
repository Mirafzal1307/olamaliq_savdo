<template>
  <div>
    <Header />
    <div>
      <Navbar :categories="categories" />
    </div>
    <Container>
      <div class="flex justify-start items-baseline gap-0.37">
        <nuxt-link :to="localePath(`/`)">
          <p
            class="
              hover:text-green hover:border-b hover:border-green hover:leading-none
              cursor-pointer">
            Bosh sahifa
          </p>
        </nuxt-link>
        <img src="~/assets/images/ArrowLeft.jpg" :alt="`${category}`" class="h-1" />
        <p
          class="
            hover:text-green hover:border-b hover:border-green hover:leading-none
            cursor-pointer
          "
        >
          {{ category }}
        </p>
      </div>  
      <BrandSlider />
      
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from '../Container.vue'
import BrandSlider from '../services/BrandSlider.vue';

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
      // zone: this.$nuxt.$route.params,
      category: this.$nuxt.$route.params.allcategories,
    }
  },

  components: { Container, BrandSlider },
}
</script>

<style scoped>
</style>

  