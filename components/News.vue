<template>
  <div class="group w-full hover:shadow-md shadow-sm border rounded-md relative">
    <div class="flex items-center w-full rounded-md">
      <nuxt-link
        :to="{ path: localePath(`/agri-finance/${data.id}`) }"
        style="
          background-image: url(https://caep.org/blog/wp-content/uploads/2020/04/TractorFarm_Lead.jpg);
        "
        class="relative group cursor-pointer h-96 w-full rounded-md bg-cover"
      >
        <div class="absolute inset-0 z-10 group-hover:opacity-100 opacity-0">
          <img src="~/assets/images/news.jpg" alt="" class="h-96 w-full" />
        </div>
        <div class="absolute inset-0 bg-gray-700 opacity-70 w-full rounded-md h-full"></div>
        <div class="absolute top-10 left-5 z-20">
          <div class="text-xs rounded-md text-green-800 w-20 bg-green-50 py-1.5 px-7 font-medium">
            {{ data.category }}
          </div>
          <div class="text-white group-hover:text-green-700 font-medium text-lg my-6 z-20">
            {{ data.title }}
          </div>
          <div class="text-white group-hover:text-gray-500 text-sm my-6 z-20">
            {{ data.subtitle }}
          </div>
        </div>
        <div
          class="border border-white group-hover:border-gray-100 absolute inset-x-0 bottom-16 z-20"
        ></div>
        <div class="absolute left-5 text-sm bottom-5 group-hover:text-gray-500 text-white z-20">
          {{ data.date }}
        </div>
        <div class="absolute right-5 text-sm bottom-5 group-hover:text-gray-500 text-white z-20">
          Read
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsComponent',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
  },
}
</script>
