<template>
    <div class="bg-green w-full relative p-1  text-white" >
        <Container>
            <select name="" id="" class=" absolute bg-transparent top-0 right-10 outline-none">
            <option value="uzb" class="text-black">O`zbekcha</option>
            <option value="rus" class="text-black">Ruscha</option>
            <option value="eng" class="text-black">Inglizcha</option>
        </select>
        </Container>
    </div>
</template>

<script>
import Container from '../container/Container.vue';
    export default {
    name: "LangBar",
    components: { Container }
}
</script>

<style  scoped>

</style>