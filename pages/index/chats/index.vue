<template>
  <div class="max-w-6xl mx-auto sm:px-6 lg:px-8 xl:px-0 px-4">
    <div class="bg-white border rounded-l-md rounded-r-none">
      <nav
        :class="$route.query && $route.query.chat_id ? 'block md:hidden' : 'hidden'"
        class="items-start px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Breadcrumb"
        @click="toChatsList()"
      >
        <a href="#" class="inline-flex items-center space-x-3 text-sm font-medium text-gray-900">
          <!-- Heroicon name: solid/chevron-left -->
          <svg
            class="-ml-2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ $t('back') }}</span>
        </a>
      </nav>
      <div class="grid md:grid-cols-12 grid-cols-1">
        <div :class="$route.query.chat_id !== 'new' ? 'lg:col-span-4' : ''">
          <div
            style="height: calc(72vh - 0px)"
            class="
              md:m-0
              bg-white
              responsive
              overflow-y-auto
              scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-w-2
              scrolling-touch
              md:col-span-1
              xl:col-span-1
              col-span-1
              border
              rounded-md
            "
          >
            <div class="m-3 relative rounded-md">
              <div class="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  style="fill: rgba(156, 163, 175, 1)"
                >
                  <path
                    d="M19.023,16.977c-0.513-0.488-1.004-0.997-1.367-1.384c-0.372-0.378-0.596-0.653-0.596-0.653l-2.8-1.337 C15.34,12.37,16,10.763,16,9c0-3.859-3.14-7-7-7S2,5.141,2,9s3.14,7,7,7c1.763,0,3.37-0.66,4.603-1.739l1.337,2.8 c0,0,0.275,0.224,0.653,0.596c0.387,0.363,0.896,0.854,1.384,1.367c0.494,0.506,0.988,1.012,1.358,1.392 c0.362,0.388,0.604,0.646,0.604,0.646l2.121-2.121c0,0-0.258-0.242-0.646-0.604C20.035,17.965,19.529,17.471,19.023,16.977z M9,14 c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5S11.757,14,9,14z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                :autocomplete="false"
                class="
                  text-gray-400 text-sm
                  bg-gray-100
                  block
                  border-transparent
                  w-full
                  pl-10
                  py-2
                  sm:text-sm
                  rounded-md
                "
                :placeholder="$t('search')"
              />
            </div>
            <div>
              <div v-if="chats.length > 0 && $route.query.chat_id !== 'new'">
                <div
                  v-for="(room, index) in chats"
                  :key="index"
                  class="hover:bg-gray-100 cursor-pointer"
                  :class="$route.query.room_id === `${room.id}` ? 'bg-green-50' : 'bg-white'"
                  @click="toChatting(room)"
                >
                  <div class="p-4 flex items-center">
                    <div class="flex-shrink-0">
                      <span class="inline-block relative">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="
                            room.attributes.consultant &&
                            room.attributes.consultant.data.attributes.avatar
                              ? $tools.getFileUrl(room.attributes.consultant.avatar)
                              : require('/assets/images/person/avatar.jpg')
                          "
                          alt=""
                        />
                      </span>
                    </div>
                    <div
                      class="
                        flex
                        items-center
                        overflow-y-auto
                        scrollbar-track-blue-lighter scrollbar-thumb-blue scrollbar-w-2
                        scrolling-touch
                      "
                    >
                      <div class="grid grid-cols-3 ml-3">
                        <div class="col-span-2 block mb-1">
                          <p
                            v-if="
                              room.attributes.consultant !== null ||
                              room.attributes.consultant.data !== null
                            "
                            class="text-sm text-gray-600"
                          >
                            {{
                              `${
                                room.attributes.consultant.data.attributes.name
                                  ? room.attributes.consultant.data.attributes.name
                                  : ''
                              } ${
                                room.attributes.consultant.data.attributes.surname
                                  ? room.attributes.consultant.data.attributes.surname
                                  : ''
                              }`
                            }}
                          </p>
                          <div class="flex pt-2 space-x-1 w-full text-xs text-gray-500">
                            {{ room.attributes.title }}
                          </div>
                        </div>
                        <div class="flex justify-end">
                          <p class="text-xs text-gray-400">
                            {{ $tools.getDateTime(room.attributes.updatedAt) }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="align-middle text-center">
                  <span class="rounded-md py-1 px-2 bg-green-200 text-gray-600">
                    {{ $t('you-do-not-have-chats') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:col-span-8 md:block">
          <chat-body :current-user="currentUser" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { socket } from '~/plugins/socket.client.js'
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css'
import ChatBody from '~/components/ChatBody.vue'
export default {
  name: 'Lands',
  components: {
    ChatBody,
  },
  data() {
    return {
      chats: [],
      currentUser: {},
    }
  },
  watch: {
    '$route.query.room_id'() {
      // if (this.$route.query && this.$route.query.room_id) this.getMessages()
    },
  },
  created() {
    if (!process.client) {
      return
    }
    this.currentUser = JSON.parse(localStorage.getItem('user_info'))
  },
  mounted() {
    this.fetchChats()
    this.$bridge.$emit('join_chat', {
      username: this.currentUser.username,
      user_id: this.currentUser.id,
    })
    // if (this.$route.query.room_id) {
    //   this.connectSocket()
    // }
    // if (this.$route.query && this.$route.query.room_id) {
    //   this.fetchCurrentRoom().then(() => {
    //     this.message = {
    //       chatroom: this.currentRoom.id,
    //       sender: this.currentUser.id,
    //       receiver: this.state === 'consultant' ? this.consultant.id : this.product.userid.id,
    //       text: '',
    //       filePath: null,
    //       seen: false,
    //     }
    //   })
    // }
  },
  computed: {
    ...mapState({
      finishedChatId: (state) => state.socket.finishedChatId,
    }),
    ...mapGetters({
      messages: 'getMessages',
    }),
  },
  beforeDestroy() {
    this.socketDisconnector()
  },
  methods: {
    socketDisconnector() {
      socket.emit('leave', {
        username: this.currentUser.username,
        user_id: this.currentUser.id,
      })
    },
    toChatsList() {
      this.$router.push({
        query: {},
      })
    },
    toChatting(data) {
      if (data.id !== parseInt(this.$route.query.room_id)) {
        this.$bridge.$emit('selected_room', { room_id: data.id })
        this.$router.push({ query: { room_id: data.id } })
      }
    },
    async fetchChats() {
      await this.$store
        .dispatch('getChatrooms', {
          populate: '*',
          'filters[$or][0][user][id]': this.currentUser.id,
          'filters[$or][1][consultant][id]': this.currentUser.id,
        })
        .then((res) => {
          this.chats = res
        })
    },
  },
}
</script>
<style>
.overflow-y {
  max-height: 315px;
  overflow-y: hidden;
}
</style>
