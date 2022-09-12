<template>
  <div id="app">
    <button
      @click="show = !show"
      class="
        katalog
        flex
        justify-center
        items-center
        lg:py-1 lg:px-5
        xsm:px-1 xsm:py-2
        gap-2
        cursor-pointer
        bg-green
        text-white
        font-semibold
        rounded-md
      "
    >
      <img src="../../assets/icons_svg/Menu.svg" alt="menu" />
      <span class="xsm:hidden lg:block"> {{ $t('navbar.cat') }}</span>
      <img src="../../assets/icons_svg/ArrowRight.svg" alt="arrow" class="xsm:hidden lg:block" />
    </button>

    <div v-show="show" class="absolute w-full top-1 left-0">
      <div @click="show = !show" class="fixed top-0 right-0 h-screen w-screen bg-black opacity-60 zIndex">s</div>
      <div class="container">
        <div>
          <div
            class="
              z-20
              absolute
              container
              bg-white
              h-500px
              shadow-sm
              rounded-b
              lg:top-8.5
              left-0
              pt-0.5
            "
          >
            <div v-for="(item, index) in categories" :key="index">
              <div class="flex">
                <div class="parentCat">
                  <div class="h-auto">
                    <div class="pt-0.5 pl-0.5 pb-0.5 min-w-[300px] flex justify-between">
                      <div class="flex justify-around">
                        <img
                          :src="require(`~/assets/images/${item.icon_name}`)"
                          alt="icon_name"
                          class="px-2 icon_name"
                        />
                        <img
                          :src="require(`~/assets/images/${item.icon_name_w}`)"
                          alt="icon_name_w"
                          class="px-2 icon_name_w"
                        />
                        <ul>
                          <li class="font-sans text font-medium">
                            <nuxt-link :to="localePath(`/${item.name}`)">
                              {{ item.name }}
                            </nuxt-link>
                          </li>
                        </ul>
                      </div>
                      <div class="ArrayRight">
                        <img
                          src="~/assets/icons_svg/arrayRight.svg"
                          alt="arrayRight"
                          class="pr-3 pt-0.37"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex-col rounded-b">
                    <div class="SubCaregory rounded-b">
                      <p class="text-green font-sans text font-bold mb-2 hover:text-green hover:border-b hover:border-green leading-none cursor-pointer" :key="item.index">
                        <nuxt-link
                          :to="
                            localePath(`/${item.sub_category.title_name}`)
                          "
                        >
                          {{ item.sub_category.title_name }}
                        </nuxt-link>
                      </p>
                      <ul v-for="(cat, index) in item.sub_category.products" :key="index">
                        <li class="text-black text font-normal font-sans hover:text-green hover:border-b hover:border-green leading-none cursor-pointer py-0.37">
                          <nuxt-link :to="localePath(`/${cat.product_name}`)">
                            {{ cat.product_name }}
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="h-screen bg-black z-10 absolute "></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogCategories',
  props: {
    categories: {
      type: Array | Object,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      show: false,
      log: console.log,

      //   cat: item.sub_category.products,
    }
  },
}
</script>

<style scoped>
.parentCat {
  background: white;
  display: flex;
  z-index: 99 !important;
}
.parentCat:hover {
  background: #2da55f;
  height: 45px;
  color: white;
  display: flex;
  justify-content: flex-start;
}
.SubCaregory {
  display: none;
  padding-top: 30px;
  padding-left: 30px;
  z-index: 99 !important;
}
.parentCat:hover .SubCaregory {
  display: block !important;
  height: 500px !important;
  background: white;
  position: absolute;
  top: 0;

  /* left:  30; */
}
.ArrayRight {
  display: none;
}
.parentCat:hover .ArrayRight {
  display: block !important;
}
.h-500px {
  height: 500px !important;
}
.bg-black-ll {
  height: 100vh !important;
  width: 100% !important;
  background: #000 !important;
  opacity: 0.5 !important;
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  z-index: -300 !important;
  display: none !important;
}
.parentCat:hover .bg-black-ll {
  display: block !important;
}
.parentCat:hover .icon_name {
  display: none !important;
}
.icon_name {
  display: block !important;
}
.icon_name_w {
  display: none !important;
}
.parentCat:hover .icon_name_w {
  display: block !important;
}
.zIndex{
  z-index: -1 !important;
}
</style>
