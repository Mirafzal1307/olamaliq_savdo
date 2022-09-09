<template>
  <div>
    <div class="sticky z-50 top-0 shadow-sm">
      <div class="foo w-full">
        <div class="w-full shadow shadow-black-500/50 bg-white">
          <Container class="relative">
            <div
              class="
                flex
                justify-between
                items-center
                py-4
                xsm:py-0.5 xsm:justify-start
                gap-0.75
                bg-white
                w-full
              "
            >
              <nuxt-link :to="localePath('/')" class="xsm:hidden lg:block">
                <h1 class="font-semibold text-lg cursor-pointer">
                  <span class="border-b-2 border-green">Olmaliq</span> Savdo
                </h1>
              </nuxt-link>
              <div>
                <CatalogCatagories :categories="categories" />
              </div>
              <div class="search relative lg:w-7/12 xsm:w-full">
                <input
                  type="text"
                  class="
                    border-2
                    text-black-900
                    outline-none
                    border-green
                    pl-1
                    py-1
                    xsm:px-0.4 xsm:py-0.4
                    rounded-md
                    w-full
                    text-sm
                  "
                  placeholder="Mahsulot izlash..."
                />
                <div
                  class="
                    search-btn
                    absolute
                    top-0
                    right-0
                    flex
                    justify-center
                    items-center
                    p-2
                    xsm:px-0.5 xsm:py-0.5
                    bg-green
                    rounded-r-md
                    cursor-pointer
                  "
                >
                  <img src="~/assets/icons_svg/Search.svg" alt="search" />
                </div>
              </div>
              <div class="action-wraper ml-5 flex justify-center items-center gap-4 xsm:hidden lg:flex lg:self-baseline lg:pt-0.5">
                <div
                  class="
                    actions
                    flex-col flex
                    cursor-pointer
                    items-center
                    hover:text-green
                    transition-all
                    w-9
                    relative
                  "
                >
                  <div class="relative m-auto w-1/2">
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
                  <div class="text-sm">{{ $t('navbar.sevimli') }}</div>
                </div>
                <div
                  class="
                    actions
                    flex-col flex
                    items-center
                    cursor-pointer
                    hover:text-green
                    transition-all
                    w-9
                    relative
                  "
                >
                  <div class="relative m-auto w-1/2">
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
                  <div class="text-sm">{{ $t('navbar.taqqos') }}</div>
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
                      w-9
                      relative
                    "
                  >
                    <div class="relative m-auto w-1/2">
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
                          -top-0.4
                          -right-0.4
                        "
                      >
                        {{ cart.length }}
                      </div>
                    </div>
                    <div class="text-sm">{{ $t('navbar.savat') }}</div>
                  </div>
                </nuxt-link>
                <nuxt-link :to="localePath('/login')">
                  <div
                    class="
                    lg:-mt-0.5
                      actions
                      flex-col
                      w-7
                      h-7
                      flex
                      items-center
                      justify-center
                      rounded-md
                      cursor-pointer
                      items-cent
                      bg-green
                      text-white
                    "
                  >
                    <img src="~/assets/icons_svg/Person.svg" class="m-auto" alt="person" />
                  </div>
                </nuxt-link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import CatalogCatagories from '../catalog/CatalogCatagories.vue'
import Container from '../Container.vue'

export default {
  name: 'Navbar',
  props: {
    categories: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {}
  },
  computed: {
    cart() {
      return this.$store.state.cart?.cart
    },
  },
  components: { CatalogCatagories, Container },
}
</script>

<style >
</style>  