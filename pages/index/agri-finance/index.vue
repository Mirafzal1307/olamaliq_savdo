<template>
  <div class="max-w-6xl mx-auto mt-12">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-finance</span> news
      </div>
      <div class="mt-1 flex rounded-md shadow-sm">
        <div
          class="
            relative
            py-0.5
            bg-green-700
            rounded-md rounded-r-none
            flex
            items-stretch
            flex-grow
            focus-within:z-10
          "
        >
          <input
            id="search"
            type="search"
            name="search"
            class="
              block
              w-full
              p-2
              ml-0.5
              focus:outline-none
              sm:text-sm
              border-gray-300 border
              rounded-md
            "
            placeholder="Search"
          />
        </div>
        <button
          type="button"
          class="
            -ml-px
            relative
            inline-flex
            items-center
            space-x-2
            px-4
            py-2
            bg-green-700
            text-sm
            font-medium
            rounded-r-md
            focus:outline-none
          "
        >
          <i class="bx bx-search text-lg text-white"></i>
        </button>
      </div>
    </div>
    <div class="flex items-center justify-center gap-7 my-6">
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        View all
      </button>
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        Banks
      </button>
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        Gov decrees
      </button>
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        Law
      </button>
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        Others
      </button>
    </div>
    <div class="grid md:grid-cols-3 gap-6 sm:grid-cols-2 grid-cols-1">
      <div v-for="(info, index) in news" :key="index">
        <news :data="info" />
      </div>
    </div>
  </div>
</template>

<script>
import News from '~/components/News.vue'
export default {
  name: 'AgriFinance',
  components: { News },
  data() {
    return {
      news: [
        {
          id: 1,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 2,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 3,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 4,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 5,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 6,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 7,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
        {
          id: 8,
          category: 'Law',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
          date: 'Sep 6 - 2021',
        },
      ],
    }
  },
}
</script>
