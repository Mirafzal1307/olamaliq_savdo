<template>
  <div class="group w-full hover:shadow-md rounded-md shadow-sm relative">
    <div class="flex justify-center w-full">
      <img
        :src="data.img"
        class="w-full md:h-72 h-48 rounded-md object-cover group-hover:opacity-60"
      />
    </div>
    <div
      class="
        bg-white
        rounded-md
        inset-x-2
        p-4
        flex
        justify-center
        shadow-md
        absolute
        -bottom-7
        z-20
      "
    >
      <div class="block">
        <div class="font-semibold text-gray-700 text-sm">{{ data.name }}</div>
        <div class="text-gray-500 text-xs text-center">{{ data.category }}</div>
        <button
          class="
            bg-green-700
            rounded-md
            text-white text-xs
            py-2
            px-5
            mt-3
            hidden
            group-hover:flex
            transition
            delay-75
            focus:outline-none
            duration-500
          "
        >
          Get consultation
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experts',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Object,
  },
}
</script>
