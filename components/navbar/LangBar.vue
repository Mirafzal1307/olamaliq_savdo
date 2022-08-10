<template>
  <div class="bg-green p-0.35 w-full text-white">
    <Container>
      <div class="flex justify-end">
        <img class="w-5 h-3" :src="images[locale]" alt="asdasdad" />
        <select @change="langChanges" v-model="locale" name="" id="" class="bg-transparent self-end outline-none">
          <option
            v-for="(item, index) in langList"
            :key="index"
            :value="item.value"
            class="text-black"
          >
            {{ item.label }}
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
      },
      langList: [
        { label: 'O`zbekcha', value: 'uz' },
        { label: ' Russian', value: 'ru' },
        { label: 'English', value: 'en' },
      ],
    }
  },
  methods: {
    langChanges(event) {
      this.$router.push(this.switchLocalePath(event.target.value))
    },
  },
}
</script>

<style  scoped>
</style>