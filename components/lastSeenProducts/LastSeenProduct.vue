<template>
    <div class="mt-4">
      <div class="self-center">
        <div class="shadow-sm rounded p-3 m-0.35 relative ">
          <div class="h-10 justify-self-center self-center flex">
            <img
              :src="require(`~/assets/images/${item.img}`)"
              alt="product images"
              class="text-center m-auto mb-4"
            />
          </div>
          <div>
            <span
              v-if="item.inStock === true"
              class="
                absolute
                top-0.5
                left-0.5
                bg-yellow
                rounded
                text-white
                px-0.4
                py-0.35
                font-sans font-semibold
                text-xs
              "
            >
              Yangi
            </span>
            <span
              v-if="item.available === true && item.inStock === false"
              class="
                absolute
                top-0.5
                left-0.5
                bg-blue
                rounded
                text-white
                px-0.4
                py-0.35
                font-sans font-semibold
                text-xs
              "
            >
              {{ item.discount }}
            </span>
            <span
              v-else-if="item.available === true && item.inStock === true"
              class="
                absolute
                top-0.5
                left-8.5
                bg-blue
                rounded
                text-white
                px-0.4
                py-0.35
                font-sans font-semibold
                text-xs
              "
            >
              {{ item.discount }}
            </span>
            <span
              class="
                absolute
                top-0.5
                right-0.5
                bg-gray
                shadow-inner
                rounded-full
                text-white
                px-0.4
                py-0.4
                font-sans font-semibold
                text-xs
                cursor-pointer
              "
            >
              <img src="~/assets/images/greenCompare.svg" alt="greenCompare" />
            </span>
            <span
              class="
                absolute
                top-6.5
                right-0.5
                bg-gray
                shadow-inner
                rounded-full
                text-white
                px-0.4
                py-0.4
                font-sans font-semibold
                text-xs
                cursor-pointer
              "
            >
              <img src="~/assets/images/greenHeart.svg" alt="greenHeart" />
            </span>
            <h4 class="font-sans font-semibold text-sm text-black tracking-widest">
              {{ item.name }}
            </h4>
            <p class="font-sans font-medium text-xs text-black">
              {{ item.description }}
            </p>
            <p class="font-sans font-bold text text-green pt-3 pb-0.5">{{ item.price }} so'm</p>
            <p class="bg-gray px-0.5 py-0.35 rounded font-sans font-medium xsm:text-xsm sm:text-xs ">
              {{ fixedPrice }} so'mdan / 24 oy
            </p>
            <button
            @click="addtoCart()"
              class="
                text-sm
                bg-green
                font-sans font-semibold
                text-white
                px-0.4
                py-0.5
                w-full
                rounded
                cursor-pointer
                mt-1
                xsm:text-sm
              "
            >
              <router-link to="#" class="flex justify-around">
                <span>
                  <img src="~/assets/images/basket.svg" alt="photoOfBasket" />
                </span>
                <span> Savatchaga </span>
              </router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LastSeenProduct',
    props: {
      item: {
        type: Object | Array,
        required: true,
        default: [],
      },
    },
    data() {
      return {
        fixedPrice: (this.item.price / 24).toFixed(0),
      }
    },
    methods: {
    addtoCart(){
      this.$store.dispatch("cart/addProductToCart",{
        product:this.item,
        quantity:1
      })
    }
  },
  }
  </script>