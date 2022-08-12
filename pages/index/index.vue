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
      <popular-products-vue :productItems="productItems" />
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
import PopularProductsVue from '~/components/popular-products/PopularProductsComponent.vue'
export default {
  components: {
    CategoriesComponentVue,
    Services,
    BrandSlider,
    BrandSlider,
    Services,
    MyComponent,
    BrandsVue,
    PopularProductsVue,
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
      productItems: [
        {
          img: 'product1.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: false,
          available: true,
        },
        {
          img: 'product2.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          img: 'product3.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          img: 'product4.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
        {
          img: 'product5.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: false,
        },
        {
          img: 'product6.jpg',
          name: 'Samsung Galaxy S10',
          price: 1000000,
          oldPrice: 1500000,
          discount: '-30%',
          description: 'Samsung Galaxy S10',
          category: 'Telefon va Smartfonlar',
          brand: 'Samsung',
          rating: '4.5',
          reviews: '100',
          inStock: true,
          available: true,
        },
      ],
    }
  },
}
</script>

<style  scoped>
</style>



