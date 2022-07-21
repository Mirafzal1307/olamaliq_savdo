<template>
  <div class="max-w-7xl mx-auto py-6 px-4 lg:px-8">
    <div class="pb-6 flex justify-between">
      <!-- <breadcrumbs :items="items" /> -->
      <div class="font-semibold text-gray-700 text-2xl pl-3">
        <span class="text-green-800">
          {{ $t('price-comparision')}}
        </span>
      </div>
      <nuxt-link
        :to="{ path: localePath('/agri-market') }"
        class="hover:bg-green-600 rounded-md hover:text-white text-green-600 border border-green-600 font-medium px-4 py-2"
      >
        {{ $t('table-view') }}
      </nuxt-link>
    </div>
    <div class="grid md:grid-cols-4 grid-cols-1 md:gap-3 gap-0 md:space-y-0 space-y-3">
      <div class="col-span-1">
        <div class="border-transparent rounded-md bg-white p-3">
          <div class="text-gray-600 text-lg font-medium">
            {{ $t('filter') }}
          </div>
          <ValidationObserver ref="observer" v-slot="{ passes, invalid }">
            <form class="" @submit.prevent="passes(onSubmit)">
              <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Disctrict">
                <select
                  v-model="query.district"
                  :state="errors[0] ? false : valid ? true : null"
                  class="
                    form-select
                    text-sm
                    w-full
                    border
                    text-gray-900
                    py-2
                    mt-3
                    border-gray-300
                    rounded-md
                    focus:outline-none focus:border-gray-300
                    transition-colors
                    cursor-pointer
                  "
                >
                  <option v-for="(district, index) in districts" :key="index" :value="district.id">
                    {{ district.attributes.name }}
                  </option>
                </select>
              </ValidationProvider>
              <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Category">
                <select
                  v-model="query.category"
                  :state="errors[0] ? false : valid ? true : null"
                  class="
                    form-select
                    text-sm
                    w-full
                    border
                    text-gray-900
                    py-2
                    mt-4
                    border-gray-300
                    rounded-md
                    focus:outline-none focus:border-gray-300
                    transition-colors
                    cursor-pointer
                  "
                >
                  <option v-for="(category, index) in categories" :key="index" :value="category.id">
                    {{ category.attributes.name }}
                  </option>
                </select>
              </ValidationProvider>
              <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Product">
                <select
                  v-model="query.product"
                  :state="errors[0] ? false : valid ? true : null"
                  class="
                    form-select
                    text-sm
                    w-full
                    border
                    text-gray-900
                    py-2
                    mt-4
                    border-gray-300
                    rounded-md
                    focus:outline-none focus:border-gray-300
                    transition-colors
                    cursor-pointer
                  "
                >
                  <option v-for="(price, index) in priceList" :key="index" :value="price.attributes.product.data.id">
                    {{ price.attributes.product.data.attributes.name }}
                  </option>
                </select>
              </ValidationProvider>
              <div class="text-gray-600 font-medium mt-4 mb-3">
                {{ $t('time-interval') }}
              </div>
              <div class="grid grid-cols-2">
                <div class="col-span">
                  <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Date Gte">
                    <date-picker
                      v-model="query.date_gte"
                      :state="errors[0] ? false : valid ? true : null"
                      :disabled-date="setGteDisable"
                      style="width: 128px"
                      format="DD-MM-YYYY"
                      input-class="flex items-center rounded-md border p-2 border-gray-300 w-32"
                    />
                  </ValidationProvider>
                </div>
                <div class="col-span">
                  <ValidationProvider v-slot="{ valid, errors }" rules="required" name="Date Lte">
                    <date-picker
                      v-model="query.date_lte"
                      :state="errors[0] ? false : valid ? true : null"
                      :disabled-date="setLteDisable"
                      style="width: 128px"
                      format="DD-MM-YYYY"
                      input-class="flex items-center rounded-md border p-2 border-gray-300 w-auto w-32"
                    />
                  </ValidationProvider>
                </div>
              </div>
              <button
                type="submit"
                :disabled="invalid"
                :class="
                  invalid
                    ? 'bg-gray-100 text-gray-500 w-full rounded-md py-2 mt-2'
                    : 'bg-green-600 w-full rounded-md text-white py-2 mt-2'
                "
              >
                {{ $t('see-results') }}
              </button>
            </form>
          </ValidationObserver>
        </div>
        <div v-if="false" class="border-transparent rounded-md bg-white p-3 mt-4">
          <div class="text-gray-600 text-lg font-medium">
            {{ $t('comparision') }}
          </div>

          <div class="grid grid-cols-2 gap-3 my-3">
            <button class="text-gray-700 text-sm border rounded-md text-center py-2">
              {{ $t('districts') }}
            </button>
            <button class="text-gray-700 text-sm border rounded-md text-center py-2">
              {{ $t('price-list') }}
            </button>
          </div>

          <div class="text-gray-700 text-sm mb-2">
            {{ $t('price-parameters') }}
          </div>
          <div class="grid grid-cols-3 gap-2">
            <button class="text-gray-700 text-xs border rounded-md text-center py-2">
              {{ $t('max') }}
            </button>
            <button class="text-gray-700 text-xs border rounded-md text-center py-2">
              {{ $t('average') }}
            </button>
            <button class="text-gray-700 text-xs border rounded-md text-center py-2">
              {{ $t('min') }}
            </button>
          </div>
          <select
            class="
              form-select
              text-sm
              w-full
              border
              text-gray-500
              py-2
              my-3
              border-gray-300
              rounded-md
              focus:outline-none focus:border-gray-300
              transition-colors
              cursor-pointer
            "
          >
            <option value="">
              {{ $t('select-district') }}
            </option>
          </select>
          <button class="bg-gray-100 text-gray-500 font-medium w-full rounded-md text-sm py-2 mt-2">
            {{ $t('comparision') }}
          </button>
        </div>
      </div>
      <div class="col-span-3">
        <line-chart
          :chart-data="chartData"
          :options="chartOptions"
          :on-change="`change${lineChartChangeCount}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Graph',
  auth: false,
  data() {
    return {
      lineChartChangeCount: 1,
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Average',
            borderColor: '#4bcc96',
            borderWidth: 4,
            pointBackgroundColor: '#4bcc96',
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#000',
            fill: false,
            data: [],
          },
          {
            label: 'Maximum',
            borderColor: '#FF3333',
            borderWidth: 4,
            pointBackgroundColor: '#FF3333',
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#000',
            fill: false,
            data: [],
          },
          {
            label: 'Minimum',
            borderColor: '#66B2FF',
            borderWidth: 4,
            pointBackgroundColor: '#66B2FF',
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBackgroundColor: '#000',
            fill: false,
            data: [],
          },
        ],
      },
      chartOptions: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: '#00055e',
          titleFontColor: '#ffffff',
          bodyFontColor: '#ffffff',
          position: 'nearest',
          intersect: 0,
          bodySpacing: 4,
          xPadding: 20,
        },
      },
      query: {
        district: null,
        category: null,
        product: null,
        date_gte: null,
        date_lte: new Date(),
      },
      districts: [],
      categories: [],
      priceList: [],
    }
  },
  computed: {
    chart() {
      return {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            pointBackgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            pointBorderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            pointHoverBackgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            pointHoverBorderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            pointRadius: 6,
            pointBorderWidth: 2,
            pointHoverRadius: 8,
            fill: false,
          },
        ],
      }
    },
  },
  watch: {
    'query.category'() {
      if (this.query.category && this.query.district) {
        this.fetchPriceLists()
      }
    },
  },
  mounted() {
    this.query.date_gte = new Date(this.query.date_lte.getTime() - 30 * 24 * 60 * 60000)
    this.fetchDirectories()
  },
  methods: {
    setGteDisable(date) {
      return date > new Date(this.query.date_gte)
    },
    setLteDisable(date) {
      return date < new Date(this.query.date_gte.getTime())
    },
    async onSubmit() {
      console.log('submit', this.query)
      await this.$store
        .dispatch('getPriceanalitics', {
          link: '/pricelist/analytics',
          query: {
            populate: '*',
            district: this.query.district,
            product: this.query.product,
            from: this.query.date_gte,
            to: this.query.date_lte,
          },
        })
        .then((res) => {
          if (res.data.results.length > 0) {
            this.lineChartChangeCount++
            this.chartData.labels = []
            this.chartData.datasets[0].data = []
            this.chartData.datasets[1].data = []
            this.chartData.datasets[2].data = []
            res.data.results.forEach((product) => {
              this.chartData.labels.push(product.date)
              this.chartData.datasets[0].data.push(product.data.avg)
              this.chartData.datasets[1].data.push(product.data.max)
              this.chartData.datasets[2].data.push(product.data.min)
            })
          }
        })
    },
    // '_where[0][avg_gt]': 0,
    fetchPriceLists() {
      const _ = {
        populate:
          this.query.category !== 'all' ? 'priceData, district, product, product.productcategory' : '*',
        locale: this.$i18n.locale,
        'filters[$and][0][district][id]': this.query.district,
        'filters[$and][0][pricedate][id]': this.query.priceDate,
        'filters[product][productcategory]': this.query.category !== 'all' ? this.query.category : null,
      }
      this.$store.dispatch('getPricelists', _).then((res) => {
        this.priceList = res
        this.query.product = res.length > 0 ? res[0].id : null
      })
    },
    async fetchDirectories() {
      await this.$store
        .dispatch('getDistricts', {
          populate: '*',
          locale: this.$i18n.locale,
        })
        .then((res) => {
          this.districts = res
        })
      await this.$store
        .dispatch('getProductcategories', {
          populate: '*',
          locale: this.$i18n.locale,
        })
        .then((res) => {
          this.categories = res
          this.categories.push({
            id: 'all',
            attributes: {
              name: this.$t('all-categories'),
            },
          })
        })
      if (this.query.district && this.query.category) {
        this.fetchPriceLists(this.query)
      }
      await this.onSubmit()
    },
  },
}
</script>
