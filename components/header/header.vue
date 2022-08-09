<template>
  <Container>
    <CategoriesComponent/>
  </Container>
</template>

<script>
import Container from '../container/Container.vue'
import CategoriesComponent from '../category-components/CategoriesComponent.vue'
export default {
  components: { Container, CategoriesComponent },

}
</script>

<style scoped>
</style>