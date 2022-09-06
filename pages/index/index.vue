<template>
  <div class="main relative">
    <Header />
    <div class="sticky z-50 top-0 shadow-sm">
      <Navbar :categories="categories" />
    </div>
    <div class="content"></div>
    <Container>
      <CategoriesSwiper />
      <categories-component-vue :categoryItems="categoryItems" />
      <brands-vue :brandItems="brandItems" />
      <popular-products-vue :productItems="productItems" />
      <product-in-discount-vue :productItems="productItems" />
      <advertisement-products-component-vue :advertisementItems="advertisementItems" />
      <favorite-products-vue :productItems="productItems" />
      <BrandSlider />
      <Services />
      <LastSeenProducts :productItems="productItems.slice(0,6)"/>
    </Container>
    <Contact/>
    <ScrollTopButton />
    <FooterVue />
  </div>
</template>
<script>
import CategoriesComponentVue from '~/components/category-components/CategoriesComponent.vue'
import Services from '~/components/services/Services.vue'
import BrandSlider from '~/components/services/BrandSlider.vue'
import MyComponent from '~/components/categoriesSwiper/CategoriesSwiper.vue'
import BrandsVue from '~/components/brands/Brands.vue'
import PopularProductsVue from '~/components/popular-products/PopularProductsComponent.vue'
import ProductInDiscountVue from '~/components/products-in-discount/ProductInDiscount.vue'
import FooterVue from '~/components/footer/Footer.vue'
import ScrollTopButton from '~/components/footer/ScrollTopButton.vue'
import AdvertisementProductsComponentVue from '~/components/advertisement-products/AdvertisementProductsComponent.vue'
import FavoriteProductsVue from '~/components/favorite-products/FavoriteProducts.vue'
import Contact from '~/components/contact/Contact.vue'
import LastSeenProducts from '~/components/lastSeenProducts/LastSeenProducts.vue'
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
    ProductInDiscountVue,
    FooterVue,
    ScrollTopButton,
    AdvertisementProductsComponentVue,
    FavoriteProductsVue,
    Contact,
    LastSeenProducts
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
          id:1,
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
          id:2,
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
          id:6,
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
          id:3,
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
          id:4,
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
          id:5,
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
      advertisementItems: [
        {
          img: 'advertisement3.jpg',
        },
        {
          img: 'advertisement2.jpg',
        },
        {
          img: 'advertisement1.jpg',
        },
      ],
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

<style  scoped>
</style>



