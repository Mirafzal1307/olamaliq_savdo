<template>
  <div class="max-w-6xl mx-auto">
    <div class="flex items-center justify-between mt-12">
      <div class="font-semibold text-green-800 text-2xl">Advisory</div>
      <div>All categories</div>
    </div>
    <div class="grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
      <div v-for="(expert, index) in experts" :key="index" class="my-4">
        <experts :data="expert" />
      </div>
    </div>
  </div>
</template>

<script>
import Experts from '~/components/Experts.vue'
export default {
  name: 'Advisory',
  components: { Experts },
  data() {
    return {
      experts: [
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
        {
          name: 'Shukhrat Sobirov',
          category: 'Finance expert',
          img: 'https://silkozari.com/web/images/miscellaneous/avatar.jpg',
        },
      ],
    }
  },
}
</script>
