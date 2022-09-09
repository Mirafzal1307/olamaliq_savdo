<template>
  <div class="sticky bottom-0 shadow-sm pt-1 bg-white z-75 lg:hidden" >
    <div class="foo w-full bottom-0 left-0">
      <div class="flex justify-around pb-0.5 pt-0.35">
        <div
          class="
            actions
            flex-col flex
            cursor-pointer
            items-center
            hover:text-green
            transition-all
            relative
          "
        >
          <div class="relative m-auto">
            <img src="~/assets/icons_svg/Heart.svg" class="m-auto" alt="liked" />
            <div
              class="
                indicator
                absolute
                flex
                items-center
                justify-center
                w-3
                h-3
                font-semibold
                text-xs
                rounded-full
                bg-red
                text-white
                -top-0.4
                -right-0.4
              "
            >
              0
            </div>
          </div>
          <div class="text-xs">{{ $t('navbar.sevimli') }}</div>
        </div>
        <div
          class="
            actions
            flex-col flex
            items-center
            cursor-pointer
            hover:text-green
            transition-all
            relative
          "
        >
          <div class="relative m-auto">
            <img src="~/assets/icons_svg/Compare.svg" class="m-auto" alt="compare" />
            <div
              class="
                indicator
                absolute
                flex
                items-center
                justify-center
                w-3
                h-3
                font-semibold
                text-xs
                rounded-full
                bg-red
                text-white
                -top-0.4
                -right-0.4
              "
            >
              0
            </div>
          </div>
          <div class="text-xs">{{ $t('navbar.taqqos') }}</div>
        </div>
        <div class="actions flex-col flex items-center transition-all relative">
          <img src="~/assets/images/logobrand.jpg" alt="LogoBrand" class="w-full" />
        </div>
        <nuxt-link :to="localePath('/cart')">
          <div
            class="
              actions
              flex-col flex
              items-center
              cursor-pointer
              hover:text-green
              transition-all
              relative
            "
          >
            <div class="relative m-auto py-0.37">
              <img src="~/assets/icons_svg/Cart.svg" class="m-auto" alt="cart" />
              <div
                class="
                  indicator
                  absolute
                  flex
                  items-center
                  justify-center
                  w-3
                  h-3
                  font-semibold
                  text-xs
                  rounded-full
                  bg-red
                  text-white
                  -top-0.37
                  -right-0.4
                "
              >
            {{cart.length}}
            </div>
            </div>
            <div class="text-xs">{{ $t('navbar.savat') }}</div>
          </div>
        </nuxt-link>
        <nuxt-link :to="localePath('/login')">
          <div
            class="
              actions
              flex-col flex
              items-center
              justify-center
              rounded-md
              cursor-pointer
              items-cent
              bg-green
              text-white
            "
          >
            <img src="~/assets/icons_svg/Person.svg" class="m-auto p-0.5" alt="person" />
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNavbar',
  data() {
    return {}
  },
  computed: {
    cart() {
      return this.$store.state.cart?.cart
    },
  },
}
</script>