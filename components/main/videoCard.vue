<template>
  <div>
    <div class="flex space-x-4">
      <div v-for="(video, index) in videos" :key="index">
        <div class="border rounded-md border-gray-200 shadow-sm hover:shadow-md">
          <img src="~/assets/images/video.png" class="h-64 object-cover rounded-md" />
          <div class="p-4">
            <div class="flex items-center justify-between">
              <div
                class="
                  text-xs
                  border border-green-700
                  text-green-700
                  font-medium
                  rounded-md
                  py-1.5
                  px-3
                "
              >
                Planting
              </div>
              <div class="text-green-700 underline text-sm font-semibold">{{ video.date }}</div>
            </div>
            <div class="my-4 text-gray-700 font-semibold text-lg">
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
      <button class="text-green-800 text-sm flex items-center">
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
      ],
    }
  },
}
</script>
