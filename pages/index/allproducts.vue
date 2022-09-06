<template>
  <div>
    <AllProducts :categories="categories" />
  </div>
</template>

<script>
import AllProducts from '~/components/allProducts/AllProducts.vue'
export default {
  name: 'AllProductsRoute',
  components: { AllProducts },
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