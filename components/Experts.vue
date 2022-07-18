<template>
  <div class="group w-full hover:shadow-md rounded-md shadow-sm relative">
    <div class="flex justify-center w-full">
      <img
        :src="
          data && data.avatar
            ? $tools.getFileUrl(data.avatar)
            : require('/assets/images/person/avatar.jpg')
        "
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
        <div class="font-semibold text-gray-700 text-sm flex justify-center">
          {{ data.middlename ? data.middlename : `${data.name} ${data.surname}` }}
        </div>
        <div v-if="data.consultantcategory" class="text-gray-500 text-xs text-center">
          {{ data.consultantcategory.name }}
        </div>
        <button
          v-if="!isConsultant"
          @click="toGetConsultation()"
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
          {{ $t('get-consultation') }}
        </button>
        <!-- <button
          v-else
          @click="toGetConsultation()"
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
          {{ $t('get-consultation') }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'Experts',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      isConsultant: false,
    }
  },
  created() {
    if (!process.client) {
      return
    }
  },
  mounted() {
    if (
      this.currentUser &&
      this.currentUser.role.id === 4
    ) {
      this.isConsultant = true
    }
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.user,
      isLoggedIn: (state) => state.auth.loggedIn,
    }),
  },
  watch: {
    currentUser() {
      let currentUser = JSON.parse(localStorage.getItem('user_info'))
      if (
        currentUser &&
        currentUser.role.id === 4
      ) {
        this.isConsultant = true
      } else {
        this.isConsultant = false
      }
    },
  },
  methods: {
    toGetConsultation() {
      if (this.isLoggedIn) {
        this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$and][0][consultant][id]': this.data.id,
            'filters[$and][1][user][id]': this.currentUser.id,
            'filters[$and][2][isCompleted]': false,
          })
          .then((res) => {
            if (res.length > 0) {
              this.$router.push({
                path: this.localePath('/chats'),
                query: { room_id: res[0].id, consultant_id: this.data.id },
              })
            } else {
              this.$router.push({
                path: this.localePath('/chats'),
                query: { room_id: 'new', consultant_id: this.data.id },
              })
            }
          })
      } else {
        // this.$store
        //   .dispatch('postChatrooms', {
        //     data: {
        //       consultant: this.data.id,
        //       user: this.currentUser.id,
        //       isCompleted: false,
        //     },
        //   }).then(res => {
        //     console.log('Chat room created: ', res)
        //   })
        // this.$router.push({
        //   path: this.localePath('/login'),
        //   query: {
        //     consultantID: this.data.id,
        //     from: 'consultant',
        //   },
        // })
      }
    },
  },
}
</script>
