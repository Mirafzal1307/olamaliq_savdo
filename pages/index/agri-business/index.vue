<template>
  <div>
    <div v-if="company.id && detailOpened" class="border rounded-md p-5 bg-white" style="min-height: calc(72vh - 0px)">
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
          {{ company.attributes.name }}
        </h3>
        <button
          type="button"
          class="
            text-gray-400
            bg-transparent
            hover:bg-gray-100 hover:text-gray-900
            rounded-lg
            text-sm
            p-1.5
            ml-auto
            inline-flex
            items-center
          "
          data-modal-toggle="defaultModal"
          @click="onClose()"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div v-html="company.attributes.fullinfo"></div>
      <div class="flex justify-between items-center mb-2">
        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
        </h3>
        <button
          class="
            items-center
            text-white
            focus:outline-none
            text-sm
            rounded-md
            bg-green-700
            p-3
          "
        >
          {{ $tools.phoneFormatter(company.attributes.phone) }}
        </button>
      </div>
    </div>
    <yandex-map
      v-if="!detailOpened"
      :coords="getLocations"
      :location="company.attributes.location"
    />
  </div>
</template>
<script>
import YandexMap from '~/components/core/yandex-map.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'AgriBusiness',
  auth: false,
  components: {
    YandexMap,
  },
  data() {
    return {
      detailOpened: false,
      company: {
        attributes: {},
      },
    }
  },
  mounted() {
    if (this.$route.query.company) {
      this.fetchCompanyDetail(this.$route.query.company)
    }
  },
  computed: {
    ...mapGetters(['getLocations']),
  },
  watch: {
    '$route.query.company'(val) {
      this.fetchCompanyDetail(val)
    },
  },
  methods: {
    onClose() {
      this.detailOpened = false
    },
    fetchCompanyDetail(id) {
      this.$store
        .dispatch('getByIdCompanies', {
          id: id,
          query: {
            populate: '*',
          },
        })
        .then((res) => {
          this.company = { ...res.data.data }
          this.detailOpened = true
        })
    },
  },
}
</script>