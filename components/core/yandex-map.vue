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
import { throwStatement } from '@babel/types'
// import locationError from '@/modals/location-error.vue'
// import debounce from 'debounce'
export default {
  props: {
    currentAddress: {
      type: String,
      default: '',
    },
    coords: Array,
    location: Object,
  },
  data() {
    return {
      ymaps: null,
      map: null,
      myPlacemark: null,
      choosenPlacemark: null,
      zoom: 12,
      settings: {
        apiKey: this.$const.yandexKey,
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
  watch: {
    location: {
      async handler() {
        this.showLocations()
      },
      immediate: true,
    },
  },
  async mounted() {
    await loadYmap(this.settings)
    this.ymaps = ymaps
    ymaps.ready(this.initMap)
  },
  methods: {
    showLocations() {
      if (this.coords && this.map) {
        if (this.location && this.location.coords) this.map.panTo(this.location.coords, { checkZoomRange: true })
        for (let index = 0; index < this.coords.length; index++) {
          let placemark = new ymaps.Placemark(
            [this.coords[index].position.lng, this.coords[index].position.lat],
            {
              balloonContent: 'Small icon',
            },
            {
              preset: 'islands#icon',
              iconColor: '#0095b6'
            }
          )
          this.map.geoObjects.add(placemark)
        }
      }
    },
    initMap() {
      this.map = new ymaps.Map(
        'map',
        {
          center: [42.460341, 59.617996],
            // this.location && this.location.coords ? this.location.coords : [42.460341, 59.617996],
          zoom: 13,
        },
        {
          searchControlProvider: 'yandex#search',
        }
      )
      if (this.map) {
        this.showLocations()
      }

      // Listening for a click on the map
      // this.map.events.add('click', (e) => {
      //   this.map.geoObjects.remove(this.choosenPlacemark)
      //   const coords = e.get('coords')
      //   this.map.panTo(coords, { checkZoomRange: true })
      //   // Moving the placemark if it was already created
      //   if (this.myPlacemark) {
      //     this.myPlacemark.geometry.setCoordinates(coords)
      //   }
      //   // Otherwise, creating it.
      //   else {
      //     this.myPlacemark = this.createPlacemark(coords)
      //     this.map.geoObjects.add(this.myPlacemark)
      //     // Listening for the dragging end event on the placemark.
      //     this.myPlacemark.events.add('dragend', () => {
      //       this.getAddress(this.myPlacemark.geometry.getCoordinates())
      //     })
      //   }
      //   this.getAddress(coords)
      // })
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
