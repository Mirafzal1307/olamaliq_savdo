<template>
  <div class="">
    <div class="w-full h-full">
      <div class="map-container">
        <div id="map" class="w-full h-full"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
import { loadYmap } from 'vue-yandex-maps'
import debounce from 'lodash.debounce'
import axios from 'axios'
// import locationError from '@/modals/location-error.vue'
// import debounce from 'debounce'
export default {
  props: {
    currentAddress: {
      type: String,
      default: '',
    },
  },
  data() {
    this.yandexSearchInput = debounce(this.yandexSearchInput, 2000)
    return {
      ymaps: null,
      map: null,
      myPlacemark: null,
      choosenPlacemark: null,
      zoom: 12,
      settings: {
        apiKey: '1abe9aa1-66ec-4c7f-8b93-a4e0bc25319e',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1',
      },
      sendingAddress: {
        address: '',
        latitude: null,
        longitude: null,
      },
      isOption: 'disable',
      addresses: [],
      address: '',
      searchedAddresses: [],
    }
  },
  computed: {},
  watch: {},
  async mounted() {
    await loadYmap(this.settings)
    this.ymaps = ymaps
    ymaps.ready(this.initMap)
  },
  methods: {
    yandexSearchInput(val) {
      this.getSuggestionPlaces(val.target.value)
    },
    optionsActive(status) {
      this.isOption = status
    },
    async getSuggestionPlaces(address) {
      this.searchedAddresses = []
      const { data } = await axios({
        method: 'get',
        url: 'https://search-maps.yandex.ru/v1/',
        params: {
          type: 'biz',
          apikey: '5dc6f955-f361-4201-933e-74abe41f8294',
          text: address,
          lang: 'ru-RU',
          results: 5,
          ll: '69.241320,41.292906',
          spn: '1.5,1.5',
          rspn: 1,
        },
      })
      if (data.features.length > 0) {
        for (let index = 0; index < data.features.length; index++) {
          this.searchedAddresses.push({
            coordinates: data.features[index].geometry.coordinates,
            address: data.features[index].properties.description,
          })
        }
      }
    },
    addressChange: debounce(async function () {
      const searchControl = this.map.controls.get('searchControl')
      await searchControl.search(this.address)

      const result = searchControl.getResultsArray()
      if (result.length) {
        this.addresses = result.map((item) => item.properties.get('name'))
      }
    }, 400),
    onClose() {
      this.$emit('close')
      this.$root.$emit('yandex-map', this.sendingAddress)
    },
    initMap() {
      this.map = new ymaps.Map(
        'map',
        {
          center: [41.311151, 69.279737],
          zoom: 13,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )

      this.createSearchControl()

      // Listening for a click on the map
      this.map.events.add('click', (e) => {
        this.map.geoObjects.remove(this.choosenPlacemark)
        const coords = e.get('coords')
        this.map.panTo(coords, { checkZoomRange: true })
        // Moving the placemark if it was already created
        if (this.myPlacemark) {
          this.myPlacemark.geometry.setCoordinates(coords)
        }
        // Otherwise, creating it.
        else {
          this.myPlacemark = this.createPlacemark(coords)
          this.map.geoObjects.add(this.myPlacemark)
          // Listening for the dragging end event on the placemark.
          this.myPlacemark.events.add('dragend', () => {
            this.getAddress(this.myPlacemark.geometry.getCoordinates())
          })
        }
        this.getAddress(coords)
      })
    },
    createPlacemark(coords) {
      return new this.ymaps.Placemark(
        coords,
        {
          iconCaption: 'searching...',
        },
        {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true,
        }
      )
    },
    createSearchControl() {
      const searchControl = new this.ymaps.control.SearchControl({
        options: {
          float: 'right',
          floatIndex: 100,
          noPlacemark: true,
        },
      })
      this.map.controls.add(searchControl)

      searchControl.options.set('provider', 'yandex#search')
    },
    async getCurrentLocationIdentifier() {
      try {
        const geolocation = this.ymaps.geolocation
        const result = await geolocation.get({
          provider: 'browser',
          mapStateAutoApply: true,
        })
        const firstGeoObject = result.geoObjects.get(0)
        this.address = firstGeoObject.getAddressLine().split(', ').slice(1).join(', ')
        this.map.geoObjects.add(result.geoObjects)
        this.sendingAddress.latitude = result.geoObjects.position[0]
        this.sendingAddress.longitude = result.geoObjects.position[1]
        this.sendingAddress.address = this.address
      } catch (error) {
        this.$modal.show(
          locationError,
          { text: 'Пожалуйста включите геолокацию' },
          {
            height: 'auto',
            maxWidth: 400,
            width: window.innerWidth <= 400 ? window.innerWidth - 30 : 400,

            scrollable: true,
          }
        )
      }
    },
    choosenAddress(pointer) {
      this.map
        .panTo([pointer.coordinates[1], pointer.coordinates[0]], { checkZoomRange: true })
        .then(() => {
          this.map.setZoom(16)
          this.map.geoObjects.remove(this.choosenPlacemark)
          this.choosenPlacemark = this.createChoosenPlacemark(pointer)
          this.map.geoObjects.add(this.choosenPlacemark)
        })
      this.sendingAddress.latitude = pointer.coordinates[1]
      this.sendingAddress.longitude = pointer.coordinates[0]
      this.sendingAddress.address = pointer.address
      this.address = pointer.address
      this.isOption = 'disable'
    },
    createChoosenPlacemark(point) {
      return new this.ymaps.Placemark(
        [point.coordinates[1], point.coordinates[0]],
        {
          iconCaption: point.address,
        },
        {
          preset: 'islands#violetDotIconWithCaption',
          draggable: true,
        }
      )
    },
    getAddress(coords) {
      this.myPlacemark.properties.set('iconCaption', 'searching...')
      this.ymaps.geocode(coords).then((res) => {
        const firstGeoObject = res.geoObjects.get(0)

        this.address = firstGeoObject.getAddressLine().split(', ').slice(1).join(', ')
        this.sendingAddress.latitude = coords[0]
        this.sendingAddress.longitude = coords[1]
        this.sendingAddress.address = this.address
        this.myPlacemark.properties.set({
          // Forming a string with the object's data.
          iconCaption: [
            firstGeoObject.getLocalities().length
              ? firstGeoObject.getLocalities()
              : firstGeoObject.getAdministrativeAreas(),

            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ]
            .filter(Boolean)
            .join(', '),
          // Specifying a string with the address of the object as the balloon content.
          balloonContent: firstGeoObject.getAddressLine(),
        })
      })
    },
  },
}
</script>

<style>
.modal {
  @apply static;
  @apply relative;
  @apply mx-auto;
  @apply max-h-full;
  @apply overflow-scroll;
  @apply bg-white;
  @apply rounded;

  width: 70rem;
  height: 40rem;
}

.map-container {
  height: 32rem;
}
</style>
