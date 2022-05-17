<template>
  <div v-click-outside="closeMenu" class="relative flex flex-row text-left text-gray-800">
    <div>
      <span>
        <slot name="locale"></slot>
      </span>
    </div>
    <div>
      <span class="">
        <slot name="trigger" :onClick="toggleMenu"></slot>
      </span>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="absolute z-40 top-11 right-0 overflow-hidden text-sm rounded-md custom-shadow"
      >
        <div
          class="bg-white rounded-md ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <slot name="content" :closeMenu="closeMenu"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style></style>
