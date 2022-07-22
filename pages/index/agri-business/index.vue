<template>
  <div>
    <!-- <transition
      enter-active-class="transition sm:duration-400"
      enter-class="translate-x-0"
      enter-to-class="translate-x-0 translate-y-0"
      leave-active-class="transition sm:duration-400"
      leave-class="translate-x-0"
      leave-to-class="translate-x-0"
    >
      <div v-show="infoOpened" class="border rounded-md p-5 bg-white h-full">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, nam? Unde
        voluptatum dignissimos saepe similique dolore cum porro consequatur repudiandae obcaecati
        dolorem nisi est sapiente, veritatis perspiciatis, sed expedita aspernatur.
      </div>
    </transition> -->
    <yandex-map :location="company.attributes.location"/>
  </div>
</template>
<script>
import YandexMap from '~/components/core/yandex-map.vue'
export default {
  name: 'AgriBusiness',
  auth: false,
  components: {
    YandexMap,
  },
  data() {
    return {
      infoOpened: false,
      company: {
        attributes: {}
      }
    }
  },
  mounted() {
    if (this.$route.query.company) {
      this.fetchCompanyDetail(this.$route.query.company)
    }
  },
  computed: {},
  watch: {
    '$route.query.company'(val) {
      this.fetchCompanyDetail(val)
    },
  },
  methods: {
    fetchCompanyDetail(id) {
      this.$store
        .dispatch('getByIdCompanies', {
            id: id,
            query: {
                populate: "*"
            }
        })
        .then((res) => {
          this.company = { ...res.data.data}
        })
    },
  },
}
</script>