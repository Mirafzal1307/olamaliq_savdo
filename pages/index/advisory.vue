<template>
  <div class="max-w-6xl mx-auto lg:my-12 my-4 sm:px-6 lg:px-8 xl:px-0 px-4">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-green-800 text-2xl">{{ $t('advisory')}}</div>
      <div>{{ $t('all-categories') }}</div>
    </div>
    <div class="grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
      <div v-for="(expert, index) in consultants" :key="index" class="my-4">
        <experts :data="expert" />
      </div>
    </div>
  </div>
</template>

<script>
import Experts from '~/components/Experts.vue'
import { mapGetters } from 'vuex'
import { actions, getters } from '~/utils/store_schema'
const _page = 'users'
const { get } = actions(_page)
export default {
  name: 'Advisory',
  auth: false,
  components: { Experts },
  data() {
    return {
      consultants: []
    }
  },
  mounted() {
    this.fetchData()
  },
  computed: {
    ...mapGetters({
      ...getters(_page),
    }),
  },
  methods: {
    fetchData() {
      this.$store
        .dispatch(get, {
          link: '/users',
          query: {
            populate: '*',
            locale: this.$i18n.locale,
          }
        }).then((res) => {
          this.consultants = res.data
        })
    }
  }
}
</script>
