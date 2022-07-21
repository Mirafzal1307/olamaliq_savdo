<template>
  <div>
    <button
      :class="isAnswerOpened ? 'bg-green-700 text-white' : 'bg-yellow-50'"
      class="w-full focus:outline-none rounded-md py-3 px-5 flex items-center justify-between mt-6"
      @click="openAnswer()"
    >
      <div>{{data.attributes.question}}</div>
      <i :class="isAnswerOpened ? 'bx-x' : 'bx-plus'" class="bx text-xl"></i>
    </button>
    <transition
      enter-active-class="ease-out duration-300"
      enter-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enter-to-class="opacity-100 translate-y-0 sm:scale-100"
      leave-active-class="ease-in duration-200"
      leave-class="opacity-100 translate-y-0 sm:scale-100"
      leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
    >
      <div v-show="isAnswerOpened" class="bg-white p-5 text-gray-500 text-xs">
        {{data.attributes.answer}}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  props: {
      data: Object
  },
  data() {
    return {
      isAnswerOpened: false,
    }
  },
  methods: {
    openAnswer() {
      this.isAnswerOpened = !this.isAnswerOpened
    },
  },
}
</script>
