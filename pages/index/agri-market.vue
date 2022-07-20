<template>
  <div class="max-w-6xl mx-auto lg:mt-12 mt-4 sm:px-6 lg:px-8 xl:px-0 px-4">
    <div class="lg:flex block items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-market - </span> weekly prices
      </div>
      <div class="lg:mt-1 mt-4 flex space-x-6 items-center">
        <div class="text-green-700 text-sm">
          <select>
            <option>
             Nukus
            </option>
           </select>
         </div>
        <div class="text-green-700 text-sm">
          <select>
            <option>
             All products
            </option>
           </select>
        </div>
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
    }
  },
  mounted() {
    this.fetchPriceLists()
  },
  computed: {
    ...mapGetters({
      ...getters(_page),
    }),
  },
  methods: {
    fetchPriceLists() {
      this.$store.dispatch(get, {
        populate: '*',
        locale: this.$i18n.locale,
      }).then( {
      })
    },
  },
}
</script>
