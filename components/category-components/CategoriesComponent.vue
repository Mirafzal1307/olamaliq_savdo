<template>
<Container>
  <div>
    <div>
      <div class="flex justify-between mt-3" >
        <CategoryComponent class="bg-light-gray rounded"  v-for="(item, idx) in categoryItems" :key="idx" :item="item" />
      </div>
    </div>
  </div>
</Container>
  
</template>

<script>
import CategoryComponent from './CategoryComponent.vue'

export default {
  name: 'CategoriesComponent',
  components: {
    CategoryComponent,
},
props: {
  categoryItems:Array
},
  data() {
    return {
    }
  },
}
</script>

<style scoped>
</style>
