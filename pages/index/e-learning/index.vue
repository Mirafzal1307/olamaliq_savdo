<template>
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 xl:px-0 px-4 lg:my-12 my-4">
    <div class="lg:flex block items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">{{ $t('e-learning') }}</span>
      </div>
      <div class="mt-1 flex rounded-md shadow-sm">
        <div
          class="
            relative
            py-0.5
            bg-green-700
            rounded-md rounded-r-none
            flex
            items-stretch
            flex-grow
            focus-within:z-10
            lg:my-0
            mt-4
          "
        >
          <input
            id="search"
            type="search"
            name="search"
            class="
              block
              w-full
              p-2
              ml-0.5
              focus:outline-none
              sm:text-sm
              border-gray-300 border
              rounded-md
            "
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          class="
            -ml-px
            relative
            inline-flex
            items-center
            space-x-2
            px-4
            py-2
            lg:my-0
            mt-4
            bg-green-700
            text-sm
            font-medium
            rounded-r-md
            focus:outline-none
          "
        >
          <i class="bx bx-search text-lg text-white"></i>
        </button>
      </div>
    </div>
    <categories :data="categories" @onChange="onChangeCategory" />
    <div class="grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
      <div v-for="(video, index) in data" :key="index">
        <video-card :data="video" />
      </div>
    </div>
  </div>
</template>

<script>
import { thisTypeAnnotation } from '@babel/types'
import { mapGetters } from 'vuex'
import { actions, getters } from '~/utils/store_schema'
const _page = 'courses'
const { get } = actions(_page)
export default {
  name: 'ELearning',
  auth: false,
  data() {
    return {
      categories: [],
      selectedCategory: null,
    }
  },
  computed: {
    ...mapGetters(getters(_page)),
    ...mapGetters(['dataCoursecategories']),
  },
  mounted() {
    this.fetchDirectories().then(() => {
      this.fetchData()
    })
  },
  watch: {
    '$route.query': {
      handler() {
        this.fetchData()
      },
      deep: true,
    },
  },
  methods: {
    onChangeCategory(category) {
      this.$router.push({
        path: this.$route.path,
        query: {
          category: category.id
        },
      })
    },
    async fetchData() {
      await this.$store
        .dispatch(get, {
          'sort[0][createdAt]': 'DESC',
          populate: '*',
          locale: this.$i18n.locale,
          'filters[$and][0][coursecategory][id]':
            this.$route.query.category && parseInt(this.$route.query.category) === 0
              ? null
              : this.$route.query.category,
        })
        .then(() => {})
    },
    async fetchDirectories() {
      await this.$store.dispatch('getCoursecategories').then((res) => {
        this.categories = res
        this.categories.unshift({
          id: 0,
          attributes: {
            name: this.$t('all'),
          },
        })
      })
    },
  },
}
</script>
