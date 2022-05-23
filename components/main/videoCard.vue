<template>
  <div>
    <div class="space-x-4 grid grid-cols-3">
      <div v-for="(video, index) in videos" :key="index">
        <div class="border rounded-md border-gray-200 shadow-sm hover:shadow-md group">
          <img
            src="~/assets/images/video.png"
            class="h-60 object-cover group-hover:opacity-70 rounded-md"
          />
          <div class="p-4">
            <div class="flex items-center justify-between">
              <div
                class="
                  text-xs
                  border border-green-700
                  group-hover:bg-green-700 group-hover:text-white
                  text-green-700
                  font-medium
                  rounded-md
                  py-1.5
                  px-3
                "
              >
                Planting
              </div>
              <div class="text-green-700 text-sm font-semibold">{{ video.date }}</div>
            </div>
            <div class="my-4 text-gray-700 group-hover:text-green-700 font-semibold text-lg">
              {{ video.title }}
            </div>
            <div class="text-gray-600 text-sm">
              {{ video.subtitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center my-4">
      <button class="text-green-800 focus:outline-none text-sm flex items-center">
        See all
        <i class="bx bx-right-arrow-alt text-green-800 text-xl ml-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoCard',
  data() {
    return {
      videos: [
        {
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        {
          img: '~/assets/images/video.png',
          date: 'Sep 6 - 2021',
          title: 'Ask The Agronomists: Lawncare Tips From The Experts',
          subtitle: 'Lorem ipsum',
        },
        // {
        //   img: '~/assets/images/video.png',
        //   date: 'Sep 6 - 2021',
        //   title: 'Ask The Agronomists: Lawncare Tips From The Experts',
        //   subtitle: 'Lorem ipsum',
        // },
      ],
    }
  },
}
</script>
