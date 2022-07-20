<template>
  <div class="max-w-6xl mx-auto lg:mt-12 mt-4 sm:px-6 lg:px-8 xl:px-0 px-4">
    <div class="lg:flex block items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-market - </span> weekly prices
      </div>
      <div class="lg:mt-1 mt-4 flex space-x-6 items-center">
        <div class="text-green-700 text-sm">
          <select v-model="filter.district">
            <option v-for="(district, index) in districts" :key="index" :value="district.id">
             {{ district.attributes.name }}
            </option>
           </select>
         </div>
        <div class="text-green-700 text-sm">
          <select v-model="filter.category">
            <option v-for="(category, index) in categories" :key="index" :value="category.id">
             {{ category.attributes.name }}
            </option>
           </select>
        </div>
        <!-- <div class="text-green-700 text-sm">
          <select v-model="filter.priceDate">
            <option v-for="(category, index) in categories" :key="index" :value="category.id">
             {{ category.attributes.name }}
            </option>
           </select>
        </div> -->
        <div class="text-green-700 text-sm">
          <select>
            <option>
             Last week
            </option>
           </select>
        </div>
        <button
          class="
            text-green-700 text-sm
            border border-green-700
            rounded-md
            px-3
            py-1.5
            focus:outline-none
          "
        >
          Compare
        </button>
      </div>
    </div>
    <div class="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 mt-8">
      <div v-for="(price, index) in data" :key="index">
        <prices :data="price" />
      </div>
    </div>
  </div>
</template>

<script>
import Prices from '~/components/Prices.vue'
import { mapGetters } from 'vuex'
import { actions, getters } from '~/utils/store_schema'
const _page = 'pricelists'
const { get } = actions(_page)
export default {
  name: 'AgriMarket',
  auth: false,
  components: { Prices },
  data() {
    return {
      filter: {
        district: 2,
        category: 'all',
        priceDate: ''
      },
      districts: [],
      categories: []
    }
  },
  mounted() {
    this.fetchDirectories().then(() => {
      this.setQuery()
    })
  },
  computed: {
    ...mapGetters({
      ...getters(_page),
    }),
  },
  watch: {
    filter: {
      handler() {
        this.setQuery()
      },
      deep: true,
    },
    '$route.query': {
      handler() {
        this.fetchPriceLists(this.$route.query)
      },
      deep: true,
    },
  },
  methods: {
    async setQuery () {
      this.$router.push({
        path: this.$route.path,
        query: {
          district: this.filter.district,
          category: this.filter.category,
          priceDate: this.filter.priceDate
        }
      })
    },
    fetchPriceLists(query) {
      const _ = {
        populate: query.category !== 'all' ? 'priceData, district, product, product.productcategory' : '*',
        locale: this.$i18n.locale,
        "filters[$and][0][district][id]": query.district,
        "filters[product][productcategory]": query.category !== 'all' ? query.category : null,
      }
      this.$store.dispatch(get, _)
    },
    async fetchDirectories() {
      await this.$store.dispatch('getDistricts', {
        populate: '*',
        locale: this.$i18n.locale,
      }).then(res => {
        this.districts = res
      })
      await this.$store.dispatch('getProductcategories', {
        populate: '*',
        locale: this.$i18n.locale,
      }).then(res => {
        this.categories = res
        this.categories.push({
          id: 'all',
          attributes: {
            name: this.$t('all-products'),
          },
        })
      })
    }
  },
}
</script>
