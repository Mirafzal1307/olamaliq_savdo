<template>
  <div class="lang-switcher">
    <select
      v-model="locale"
      class="text-sm p-2 text-white bg-transparent rounded-md focus:outline-none"
      @change="onChange(locale)"
    >
      <option
        v-for="(lang, index) in $i18n.locales"
        :key="index"
        :value="lang.code"
        class="text-gray-700 rounded-md border shadow-md mt-3"
      >
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<script>
// import BaseDropdown from '../ui/BaseDropdown.vue'
export default {
  name: 'LangSwitcher',
  components: {
    // BaseDropdown,
  },
  data() {
    return {
      locale: this.$i18n.locale,
    }
  },
  watch: {},
  created() {},
  methods: {
    onChange(event) {
      this.$router.push(this.switchLocalePath(event))
    },
  },
}
</script>
