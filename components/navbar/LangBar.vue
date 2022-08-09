<template>
  <div class="bg-green p-0.35 w-full text-white">
    <Container>
      <div class="flex justify-end" >
        <select name="" id="" class="bg-transparent self-end outline-none">
          <option value="uzb" class="text-black">O`zbekcha</option>
          <option value="rus" class="text-black">Ruscha</option>
          <option value="eng" class="text-black">Inglizcha</option>
        </select>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '../container/Container.vue'
export default {
  name: 'LangBar',
  components: { Container },
}
</script>

<style  scoped>
</style>