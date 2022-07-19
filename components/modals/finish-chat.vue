<template>
  <div class="p-4">
    <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
      <button
        type="button"
        class="
          bg-white
          rounded-md
          text-gray-400
          hover:text-gray-500
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
        @click="onClose('canceled')"
      >
        <span class="sr-only">{{ $t('close') }}</span>
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g data-name="Layer 2">
            <g data-name="close">
              <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
              <path
                d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
              />
            </g>
          </g>
        </svg>
      </button>
    </div>
    <div class="sm:flex sm:items-start">
      <div
        class="
          mx-auto
          flex-shrink-0 flex
          items-center
          justify-center
          h-12
          w-12
          rounded-full
          bg-gray-100
          sm:mx-0 sm:h-10 sm:w-10
        "
      >
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              fill-rule="nonzero"
              d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zm-8.66 16h15.588L12 5.5 4.206 19zM11 16h2v2h-2v-2zm0-7h2v5h-2V9z"
            />
          </g>
        </svg>
      </div>
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 id="modal-title" class="text-lg leading-6 font-medium text-gray-900">
          {{ $t('confirmation') }}
        </h3>
        <div class="mt-2">
          <p class="text-sm text-gray-500">
            {{ $t('finish-chat') }}
          </p>
        </div>
      </div>
    </div>
    <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-1">
      <button
        type="button"
        class="
          mt-3
          text-xs text-green-500
          bg-green-100
          font-medium
          flex
          items-center
          rounded-md
          p-2
        "
        @click="toFinish('canceled')"
      >
        {{ $t('finish') }}
        <i class="bx bx-trash text-green-600" />
      </button>
      <button
        type="button"
        class="mt-3 text-xs text-gray-500 bg-gray-200 font-medium flex items-center rounded-md p-2"
        @click="onClose('canceled')"
      >
        {{ $t('cancel') }}
      </button>
    </div>
  </div>
</template>
<script>
import alertSvg from '~/assets/svg/alert.svg'
export default {
  components: {},
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {},
    },
    link: {
      type: String,
      required: false,
      default: () => '',
    },
  },

  data() {
    return {
      alertSvg,
    }
  },

  watch: {},

  created() {},
  methods: {
    toFinish() {
      if (this.name === 'FinishModal') {
        this.onClose('success')
      } else {
        this.$store.dispatch(this.link, { id: this.data.id, data: this.data.data }).then(() => {
          this.onClose('success')
        })
      }
    },
    onClose(e) {
      this.$emit('close')
      this.$root.$emit('finish-chat-modal', e)
    },
  },
}
</script>
<style scoped>
</style>
