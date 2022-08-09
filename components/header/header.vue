<template>
<div>
  <LangBar/>
    <Navbar/>
    <CategoriesComponent/>
</div>
    
</template>

<script>
import Container from '../container/Container.vue'
import CategoriesComponent from '../category-components/CategoriesComponent.vue'
import Navbar from '../navbar/Navbar.vue'
import LangBar from '../navbar/LangBar.vue'
export default {
  components: { Container, CategoriesComponent, Navbar, LangBar },



}
</script>




<style scoped>


</style>

