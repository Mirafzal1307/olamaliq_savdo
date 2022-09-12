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
              cursor-pointer
            "
          >
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
          All
        </p>
      </div>
      <BrandSlider />
      <AdvertisementProductsComponent :advertisementItems="advertisementItems" />
      <FavoriteProducts :productItems="productItems" />
    </Container>

    <Footer />
  </div>
</template>

<script>
import Header from '../header/header.vue'
import Navbar from '~/components/navbar/Navbar.vue'
import Footer from '~/components/footer/Footer.vue'
import Container from '../Container.vue'
import BrandSlider from '../services/BrandSlider.vue'
import AdvertisementProductsComponent from '../advertisement-products/AdvertisementProductsComponent.vue'
import FavoriteProducts from '../favorite-products/FavoriteProducts.vue'
export default {
  name: 'AllProducts',
  props: {
    categories: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  components: {
    Header,
    Navbar,
    Footer,
    Container,
    BrandSlider,
    AdvertisementProductsComponent,
    FavoriteProducts,

  },
  data() {
    return {
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
      productItems: [
        {
          id: 1,
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
          id: 2,
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
          id: 6,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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

<style scoped>
</style>