<template>
  <div>
    <Header/>
    <Container>
      <categories-component-vue :categoryItems="categoryItems"/>
      <BrandSlider/>
      <CategoriesSwiper/>
      <Services/>
    </Container>
  </div>
</template>

<script>
import CategoriesComponentVue from '~/components/category-components/CategoriesComponent.vue'
import Services from '~/components/services/Services.vue'
import BrandSlider from '~/components/services/BrandSlider.vue'
import CategoriesSwiper from '~/components/categories-swiper/categories-swiper.vue'
export default {
  components: { CategoriesComponentVue, Services, BrandSlider, BrandSlider, Services, CategoriesSwiper },
  data () {
    return {
       categoryItems: [
        { img: 'category1.svg', name: 'Telefon  va Smartfonlar' },
        { img: 'category2.svg', name: 'Orgtexnika va Kompyuterlar' },
        { img: 'category3.svg', name: 'Televizor va Videotexnikalar' },
        { img: 'category4.svg', name: "Chiroy va go'zallik" },
        { img: 'category5.svg', name: 'Maishiy texnikalar' },
        { img: 'category6.svg', name: 'Avto jihozlar' },
      ],
    }
  }
}
</script>

<style  scoped>
</style>