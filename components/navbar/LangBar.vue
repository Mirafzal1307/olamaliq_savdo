<template>
  <div class="bg-green p-0.35 xsm:px-2 w-full text-white">
    <Container>
      <div class="flex justify-end grid-cols-12 gap-4 xsm:gap-0 ">
        <img class="w-5 h-3" :src="images[locale]" alt="imgaes have" />
        <select v-model="locale"  @change="langChanges(locale)" name="" id="" class="bg-transparent self-end outline-none ">
          <option
            v-for="(item, index) in $i18n.locales"
            :key="index"
            :value="item.code"
            class="text-black "
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </Container>
  </div>
</template>

<script>
import imgUz from '@/assets/images/uz.jpg'
import imgRu from '@/assets/images/ru.jpg'
import imgEn from '@/assets/images/en.webp'
export default {
  name: 'LangBar',
  data() {
    return {
      locale: this.$i18n.locale,
      images: {
        uz: imgUz,
        ru: imgRu,
        en: imgEn,
      }
    }
  },
  methods: {
    langChanges(event) {
      this.$router.push(this.switchLocalePath(event));
      console.log(this.$i18n);
    },
  },
}
</script>

<style  scoped>
</style>