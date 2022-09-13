<template>
  <div>
    <Header />
    <div>
      <Navbar :categories="categories" />
    </div>
    <Container>
      <div class="flex justify-start items-baseline gap-0.37">
        <nuxt-link :to="localePath(`/`)">
          <p
            class="
              hover:text-green hover:border-b hover:border-green hover:leading-none
              cursor-pointer
            "
          >
            Bosh sahifa
          </p>
        </nuxt-link>
        <img src="~/assets/images/ArrowLeft.jpg" :alt="`${category}`" class="h-1" />
        <p
          class="
            hover:text-green hover:border-b hover:border-green hover:leading-none
            cursor-pointer
          "
          v-for="parentcat in categoryList"
          :key="parentcat.parent_category_id"
        >
          {{ parentcat.parent_category_name }}
        </p>
      </div>
      <BrandSlider />
      <div class="flex gap-2">
        <div class="w-1/5 font-sans font-semibold text box-border">
          <div v-for="parentcat in categoryList" :key="parentcat.parent_category_id">
            <div
              v-for="subcat in parentcat.sub_categories"
              :key="subcat.sub_category_id"
              class="rounded shadow-sm my-0.5"
            >
              <div class="bg-green text-white py-0.5 px-4 pr-7 rounded-t box-border">
                <p class="leading-none cursor-pointer hover:border-b hover:leading-none">
                  {{ subcat.sub_category_name }}
                </p>
              </div>
              <div
                v-for="childcat in subcat.child_categories"
                :key="childcat.child_category_id"
                class="
                  py-0.37
                  px-4
                  pr-7
                  cursor-pointer
                  hover:text-green
                  font-sans font-medium
                  text-sm
                "
              >
                {{ childcat.child_category_name }}
              </div>
            </div>
          </div>
        </div>
        <div class="gap-2 h-auto box-border">
          <div v-for="parentcat in categoryList" :key="parentcat.parent_category_id" class="flex">
            <div
              v-for="subcat in parentcat.sub_categories"
              :key="subcat.sub_category_id"
              class="shadow-sm rounded center p-0.5 m-0.37 cursor-pointer relative group"
            >
              <img
                :src="require(`~/assets/images/${subcat.sub_category_image}`)"
                alt="sub_category_image"
              />
              <p class="text-green text-center pt-0.35">{{ subcat.sub_category_name }}</p>
              <div
                class="
                  bg-green
                  w-full
                  h-full
                  absolute
                  top-0
                  left-0
                  rounded
                  opacity-50
                  align-baseline
                  justify-center
                  hidden
                  group-hover:flex
                "
              >
                <p
                  class="
                    text-center
                    self-center
                    justify-center justify-self-center
                    text-white
                    font-extrabold
                    text-6xl
                    opacity-100
                  "
                >
                  {{ subcat.child_categories.length }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
</template>

<script>
import Container from '../Container.vue'
import BrandSlider from '../services/BrandSlider.vue'

export default {
  name: 'AllCategories',
  data() {
    return {
      categories: [
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
        {
          id: '054654654',
          name: 'Oshxona jihozlari',
          icon_name: 'phone.png',
          icon_name_w: 'phoneW.png',
          sub_category: {
            id: '4555567676571',
            title_name: 'Oshxona uchun katta ',
            images: '',
            products: [
              {
                product_name: 'Muzlatgichlar',
                id: '2',
              },
              {
                product_name: 'Gaz plitalar',
                id: '2',
              },
              {
                product_name: "Mikroto'lqinli pechlar",
                id: '2',
              },
              {
                product_name: "Dudbo'ronlar",
                id: '2',
              },
              {
                product_name: 'Pechlar',
                id: '2',
              },
            ],
          },
        },
      ],
      categoryList: [
        {
          parent_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de38w',
          parent_category_name: 'Telefonlar',
          sub_categories: [
            {
              sub_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de38g',
              sub_category_name: 'Telefonlar 1hfgfg',
              sub_category_image: 'subCat.jpg',
              sub_category_child_count: 10,
              child_categories: [
                {
                  child_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de3fd',
                  child_category_name: 'iPhone 13 pro max',
                  child_category_image: 'subCat.jpg',
                },
                {
                  child_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de3lk',
                  child_category_name: 'iPhone 12 pro max',
                  child_category_image: 'subCat.jpg',
                },
              ],
            },
            {
              sub_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de38a',
              sub_category_name: 'Telefonlar dsfsfd',
              sub_category_image: 'subCat.jpg',
              sub_category_child_count: 10,
              child_categories: [
                {
                  child_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de385',
                  child_category_name: ' iPhone 1 pro max ',
                  child_category_image: 'subCat.jpg',
                },
                {
                  child_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de386',
                  child_category_name: 'iPhone 12 pro max',
                  child_category_image: 'subCat.jpg',
                },
                {
                  child_category_id: '57ddec66-8c28-45d6-af4f-7f63d23de386',
                  child_category_name: 'iPhone 12 pro max',
                  child_category_image: 'subCat.jpg',
                },
              ],
            },
            {
              sub_category_id: '5wd7ec66-8c28-45d6-af4f-7fr3d23de38a',
              sub_category_name: 'Telefonlar wew',
              sub_category_image: 'subCat.jpg',
              sub_category_child_count: 10,
              child_categories: [
                {
                  child_category_id: '57d7ec66-8c28-45d6-af4f-7f63d23de385',
                  child_category_name: ' iPhone 1 pro max ',
                  child_category_image: 'subCat.jpg',
                },
              ],
            },
          ],
        },
      ],
      category: this.$nuxt.$route.params.allcategories,
    }
  },

  components: { Container, BrandSlider },
}
</script>

<style scoped>
</style>

  