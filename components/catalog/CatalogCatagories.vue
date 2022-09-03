<template>
  <div>
    <button @click="catalog = !catalog">Catalog</button>

    <div v-if="catalog"></div>

    <div v-else class="relative">
      <!-- <div class="h-screen bg-black z-10 absolute "></div> -->
      <div class="top-0 right-0 bg-black opacity-100 z-10">
        <div class="z-20 absolute container w-full">
        <div v-for="item in categories" :key="item.id">
          <div class="flex w-full">
            <div class="parentCat">
              <ul class="h-auto">
                <li class="pt-0.5 pl-0.5 pb-0.5 min-w-[300px]">
                  {{ item.name }}
                </li>
              </ul>

              <div class="flex-col">
                <div class="SubCaregory">
                  <p class="text-green">{{ item.sub_category.title_name }}</p>
                  <ul v-for="cat in item.sub_category.products" :key="cat.id">
                    <li class="text-red">
                      {{ cat.product_name }}
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
      catalog: true,
      log: console.log,
      isActive: true,
      //   cat: item.sub_category.products,
    }
  },
}
</script>

<style scoped>
.parentCat {
  background: white;
  display: flex;
}
.parentCat:hover {
  background: #2da55f;
  height: 45px;
  color: white;
}
.SubCaregory {
  display: none;
  padding-top: 30px;
  padding-left: 30px;
}
.parentCat:hover .SubCaregory {
  display: block !important;
  height: 500px !important;
  width: 100%;
  background: white;
  position: absolute;
  top: 0;

  /* left:  30; */
}
</style>