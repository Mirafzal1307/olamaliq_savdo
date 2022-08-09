<template>
  <div>
    <div>
      <div class="flex justify-between mt-3" >
        <CategoryComponent class="bg-light-gray rounded"  v-for="(item, idx) in categoryItem" :key="idx" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CategoryComponent from './CategoryComponent.vue'

export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent,
  },

  data() {
    return {
      categoryItem: [
        { img: 'category1.svg', name: 'Telefon  va Smartfonlar' },
        { img: 'category2.svg', name: 'Orgtexnika va Kompyuterlar' },
        { img: 'category3.svg', name: 'Televizor va Videotexnikalar' },
        { img: 'category4.svg', name: "Chiroy va go'zallik" },
        { img: 'category5.svg', name: 'Maishiy texnikalar' },
        { img: 'category6.svg', name: 'Avto jihozlar' },
      ],
    }
  },
}
</script>

<style scoped>
</style>
