<template>
  <div class="main">
    <Header />
    <div class="sticky top-0">
      <Navbar />
    </div>
    <div class="content"></div>
    <Container>
      <CategoriesSwiper />
      <categories-component-vue :categoryItems="categoryItems" />
      <brands-vue :brandItems="brandItems" />
      <BrandSlider />
      <Services />
    </Container>
  </div>
</template>
<script>
import CategoriesComponentVue from '~/components/category-components/CategoriesComponent.vue'
import Services from '~/components/services/Services.vue'
import BrandSlider from '~/components/services/BrandSlider.vue'
import MyComponent from '~/components/categoriesSwiper/CategoriesSwiper.vue'
import BrandsVue from '~/components/brands/Brands.vue'
export default {
  components: {
    CategoriesComponentVue,
    Services,
    BrandSlider,
    BrandSlider,
    Services,
    MyComponent,
    BrandsVue,
  },
  data() {
    return {
      categoryItems: [
        { img: 'category1.svg', name: 'Telefon  va Smartfonlar' },
        { img: 'category2.svg', name: 'Orgtexnika va Kompyuterlar' },
        { img: 'category3.svg', name: 'Televizor va Videotexnikalar' },
        { img: 'category4.svg', name: "Chiroy va go'zallik" },
        { img: 'category5.svg', name: 'Maishiy texnikalar' },
        { img: 'category6.svg', name: 'Avto jihozlar' },
      ],
      brandItems: [
        {
          img: 'brand1.jpg',
        },
        {
          img: 'brand2.jpg',
        },
        {
          img: 'brand3.jpg',
        },
        {
          img: 'brand4.png',
        },
        {
          img: 'brand5.jpg',
        },
        {
          img: 'brand6.jpg',
        },
      ],
    }
  },
}
</script>

<style  scoped>
</style>



