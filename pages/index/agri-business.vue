<template>
  <div class="max-w-6xl mx-auto mt-12">
    <div class="flex items-center justify-between">
      <div class="font-semibold text-gray-700 text-2xl">
        <span class="text-green-800">Agri-business</span>
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
    <div class="grid grid-cols-3 gap-5">
      <div class="rounded-md shadow-md p-5">
        <div class="flex items-center justify-between">
          <div class="text-gray-700 text-xl font-semibold">Locations</div>
          <div class="border rounded-md border-green-700 text-green-700 font-semibold py-1.5 px-4">
            Banks
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center py space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div class="flex items-center space-x-3 my-4">
          <img
            src="~/assets/images/about.png"
            class="rounded-md w-28 h-20 object-cover"
            alt="about"
          />
          <div class="grid content-between text-gray-500 text-base h-14">
            <p class="text-green-700 font-medium">Aloqabank</p>
            <p class="text-sm border-b border-green-700 pb-2">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <img src="~/assets/images/map.png" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AgriBusiness',
}
</script>
