<template>
  <div class="max-w-6xl mx-auto mt-12">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">E-learning</span>
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
        Credits
      </button>
      <button
        class="rounded-md border focus:outline-none border-green-700 text-green-700 py-1.5 px-4"
      >
        Agriculture
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
      <div v-for="(video, index) in videos" :key="index">
        <video-card :data="video" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ELearning',
  data() {
    return {
      videos: [
        {
          id: 1,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          id: 2,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          id: 3,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          id: 4,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          id: 5,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          id: 6,
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
      ],
    }
  },
}
</script>
