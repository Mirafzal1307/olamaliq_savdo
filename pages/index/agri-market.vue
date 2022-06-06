<template>
  <div class="max-w-6xl mx-auto mt-12">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-market - </span> weekly prices
      </div>
      <div class="mt-1 flex space-x-6 items-center">
        <div class="text-green-700 text-sm">Nukus</div>
        <div class="text-green-700 text-sm">All products</div>
        <div class="text-green-700 text-sm">Last week</div>
        <button class="text-green-700 text-sm border border-green-700 rounded-md px-3 py-1.5">
          Compare
        </button>
      </div>
    </div>
    <div class="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 mt-8">
      <div v-for="(price, index) in prices" :key="index">
        <prices :data="price" />
      </div>
    </div>
  </div>
</template>

<script>
import Prices from '~/components/Prices.vue'
export default {
  name: 'AgriMarket',
  components: { Prices },
  data() {
    return {
      prices: [
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
        {
          name: 'Apple',
          district: 'Nukus',
          min: '15 000',
          max: '25 000',
          img: 'https://www.collinsdictionary.com/images/full/apple_158989157.jpg',
        },
      ],
    }
  },
}
</script>
