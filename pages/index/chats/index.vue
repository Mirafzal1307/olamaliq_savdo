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
          <div v-if="$route.query.room_id" id="map-wrap" class="relative">
            <div style="height: calc(72vh - 0px)" class="flex-1 p-2 justify-between flex flex-col">
              <div
                class="flex sm:items-center justify-between pb-3 pt-0 border-b-2 border-gray-200"
              >
                <div class="relative flex items-center space-x-4">
                  <div class="relative" v-if="currentRoom.attributes">
                    <img
                      :src="
                        currentRoom.attributes.consultant.data.attributes.avatar
                          ? currentRoom.attributes.consultant.data.attributes.avatar
                          : require('/assets/images/person/avatar.jpg')
                      "
                      alt=""
                      class="w-8 sm:w-12 h-8 sm:h-12 rounded-full"
                    />
                  </div>
                  <div class="flex flex-col leading-tight">
                    <div class="text-lg mt-1 flex items-center">
                      <span v-if="currentRoom.attributes" class="text-gray-700 mr-3">{{
                        `${
                          currentRoom.attributes.consultant.data.attributes.name
                            ? currentRoom.attributes.consultant.data.attributes.name
                            : ''
                        } ${
                          currentRoom.attributes.consultant.data.attributes.surname
                            ? currentRoom.attributes.consultant.data.attributes.surname
                            : ''
                        }`
                      }}</span>
                    </div>
                    <!-- <span v-if="consultant.consultantcategory" class="text-sm text-gray-600">{{
                      consultant.consultantcategory.title[$i18n.locale]
                    }}</span> -->
                    <span class="text-sm text-gray-600">Suvchi</span>
                  </div>
                </div>
              </div>
              <div
                id="messages"
                class="
                  flex flex-col
                  space-y-4
                  p-3
                  overflow-y-auto
                  scrollbar-thumb-blue
                  scrollbar-thumb-rounded
                  scrollbar-track-blue-lighter
                  scrollbar-w-2
                  scrolling-touch
                "
              >
                <div v-for="(msg, index) in messages" :key="index" class="chat-message">
                  <div
                    v-if="msg.sender ? (msg.sender.id == 1 ? true : false) : false"
                    class="flex items-end justify-end"
                  >
                    <div
                      class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
                      @click.prevent.stop="handleClick($event, msg)"
                    >
                      <div
                        class="
                          px-4
                          py-2
                          rounded-lg
                          inline-block
                          rounded-br-none
                          text-gray-600 text-sm
                          bg-green-100
                        "
                      >
                        <div class="bg-indigo-300 mb-1">
                          <img
                            v-if="msg.filePath"
                            class="object-cover h-48 w-96"
                            :src="`${$tools.getFileUrl(msg.filePath)}`"
                          />
                        </div>
                        <span class="">{{ msg.text }}</span>
                      </div>
                    </div>
                    <img
                      :src="
                        msg.sender && msg.sender.avatar
                          ? $tools.getFileUrl(msg.sender.avatar)
                          : require('/assets/images/person/avatar.jpg')
                      "
                      @error="require('/assets/images/person/avatar.jpg')"
                      alt="My profile"
                      class="w-6 h-6 rounded-full order-2"
                    />
                  </div>
                  <div v-else class="flex items-end">
                    <div
                      class="
                        flex flex-col
                        space-y-2
                        text-xs
                        max-w-xs
                        mx-2
                        order-2
                        items-start
                        bg-gray-300
                        rounded-t-lg rounded-r-lg
                      "
                    >
                      <div
                        class="
                          px-4
                          py-2
                          rounded-lg
                          inline-block
                          rounded-bl-none
                          text-gray-600
                          bg-orange-50
                        "
                      >
                        <div class="bg-indigo-300 mb-1">
                          <img
                            v-if="msg.filePath"
                            class="object-cover h-48 w-96"
                            :src="`${$tools.getFileUrl(msg.filePath)}`"
                          />
                        </div>
                        <span>{{ msg.text }}</span>
                      </div>
                    </div>
                    <img
                      :src="
                        msg.sender && msg.sender.avatar
                          ? $tools.getFileUrl(msg.sender.avatar)
                          : require('/assets/images/person/avatar.jpg')
                      "
                      @error="require('/assets/images/person/avatar.jpg')"
                      alt="My profile"
                      class="w-6 h-6 rounded-full order-1"
                    />
                  </div>
                </div>
                <div class="chat-message"></div>
              </div>
              <div
                v-if="!currentRoom.isCompleted || $route.query.room_id === 'new'"
                class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
              >
                <div class="relative flex">
                  <textarea
                    v-model="message.text"
                    :rows="1"
                    :placeholder="$t('write-a-message')"
                    class="
                      w-full
                      focus:outline-none focus:border-green-300
                      pr-20
                      px-2
                      focus:placeholder-gray-400
                      text-gray-600
                      placeholder-gray-600
                      bg-gray-200
                      rounded-md
                      py-3
                    "
                    @keyup.enter="sendMessage()"
                  />
                  <div class="absolute right-0 items-center inset-y-0 flex">
                    <button
                      type="button"
                      class="
                        inline-flex
                        items-center
                        justify-center
                        rounded-full
                        h-10
                        w-10
                        transition
                        duration-500
                        ease-in-out
                        text-gray-500
                        hover:bg-gray-300
                        focus:outline-none
                      "
                      @click="$refs.file.click()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-6 w-6 text-gray-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        ></path>
                      </svg>
                      <input
                        ref="file"
                        type="file"
                        class="hidden"
                        accept="image/*"
                        @change="mediaChange"
                      />
                    </button>
                    <button
                      type="button"
                      class="
                        text-blue-400
                        hover:bg-blue-300 hover:text-blue-600
                        inline-flex
                        items-center
                        mr-1
                        justify-center
                        rounded-full
                        h-10
                        w-10
                        transition
                        duration-500
                        ease-in-out
                        focus:outline-none
                      "
                      @click="sendMessage()"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="h-6 w-6 ml-2 transform rotate-90"
                      >
                        <path
                          d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-else-if="currentRoom.rate0to5 === null"
                class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0"
              >
                <div class="flex items-center justify-between">
                  <div>{{ $t('evaluate-the-advice') }}</div>
                  <div class="flex ml-4 items-center">
                    <!-- <star-rating v-model="advice.rating" /> -->
                  </div>
                  <div class="items-center flex">
                    <button
                      type="button"
                      class="
                        text-green-400
                        bg-green-100
                        hover:bg-geen-300
                        px-2
                        py-1
                        hover:text-green-600
                        inline-flex
                        items-center
                        mr-1
                        justify-center
                        rounded-md
                        transition
                        duration-500
                        ease-in-out
                        focus:outline-none
                      "
                      @click="toRating()"
                    >
                      {{ $t('rating') }}
                    </button>
                  </div>
                </div>
              </div>
              <div v-else class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
                <div class="align-middle text-center">
                  <span
                    v-if="state === 'consultant'"
                    class="rounded-md py-1 px-2 bg-green-200 text-gray-600"
                  >
                    {{ $t('chat-room-closed') }}
                  </span>
                  <span
                    v-if="state === 'trading'"
                    class="rounded-md py-1 px-2 bg-green-200 text-gray-600"
                  >
                    {{ $t('chat-room-closed') }}
                  </span>
                </div>
              </div>
            </div>
            <vue-simple-context-menu
              ref="vueSimpleContextMenu"
              element-id="myUniqueId"
              :options="options"
              @option-clicked="optionClicked"
            />
          </div>
          <div v-else>
            <div class="align-middle text-center">
              <span class="rounded-md py-1 px-2 bg-green-200 text-gray-600">
                {{ $t('select-chat-to-messaging') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import deleteModal from '~/components/modals/delete.vue'
import sendMedia from '~/components/modals/send-media.vue'
import VueSimpleContextMenu from 'vue-simple-context-menu'
import { socket } from "~/plugins/socket.client.js";
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css'
export default {
  name: 'Lands',
  components: {
    VueSimpleContextMenu,
  },
  data() {
    return {
      dropdown: false,
      openMenu: false,
      list: false,
      value1: new Date(2019, 9, 9),
      chats: [],
      selectedChat: {},
      iframeLoading: false,
      currentRoom: {},
      consultant: {},
      // messages: [
      //   {
      //     id: 1,
      //     text: 'salom',
      //     receiver: {
      //       id: 1,
      //       name: '',
      //       avatar: '',
      //     },
      //     sender: {
      //       id: 2,
      //       name: '',
      //       avatar: '',
      //     },
      //   },
      //   {
      //     id: 2,
      //     text: 'Alik',
      //     receiver: {
      //       id: 2,
      //       name: '',
      //       avatar: '',
      //     },
      //     sender: {
      //       id: 1,
      //       name: '',
      //       avatar: '',
      //     },
      //   },
      //   {
      //     id: 3,
      //     text: 'Qaleysan',
      //     receiver: {
      //       id: 1,
      //       name: '',
      //       avatar: '',
      //     },
      //     sender: {
      //       id: 2,
      //       name: '',
      //       avatar: '',
      //     },
      //   },
      //   {
      //     id: 4,
      //     text: 'Yaxshi, o`zinchi',
      //     receiver: {
      //       id: 2,
      //       name: '',
      //       avatar: '',
      //     },
      //     sender: {
      //       id: 1,
      //       name: '',
      //       avatar: '',
      //     },
      //   },
      //   {
      //     id: 5,
      //     text: 'zor',
      //     receiver: {
      //       id: 1,
      //       name: '',
      //       avatar: '',
      //     },
      //     sender: {
      //       id: 2,
      //       name: '',
      //       avatar: '',
      //     },
      //   },
      // ],
      message: {
        chatroom: null,
        sender: null,
        receiver: null,
        text: '',
        filePath: null,
        seen: false,
      },
      options: [
        {
          name: this.$t('edit'),
          slug: 'edit',
        },
        {
          name: `<em>${this.$t('delete')}</em>`,
          slug: 'delete',
        },
      ],
    }
  },
  watch: {
    '$route.query.room_id'() {
      // if (this.$route.query && this.$route.query.room_id) this.getMessages()
    },
  },
  mounted() {
    this.fetchChats()
    this.fetchData().then(() => {
      if (this.$route.query.room_id) {
        this.connectSocket()
      }
      if (this.$route.query && this.$route.query.room_id) {
        this.fetchCurrentRoom().then(() => {
          this.message = {
            chatroom: this.currentRoom.id,
            sender: this.currentUser.id,
            receiver: this.state === 'consultant' ? this.consultant.id : this.product.userid.id,
            text: '',
            filePath: null,
            seen: false,
          }
        })
      }
    })
  },
  computed: {
    ...mapState({
      finishedChatId: (state) => state.socket.finishedChatId,
      currentUser: (state) => state.auth.user
    }),
    ...mapGetters({
      messages: 'getMessages',
    }),
  },
  methods: {
    sendMessage() {
      if (this.message.text === 0 || this.message.text.trim().length === 0) {
        return
      }
      if (this.$route.query.room_id === 'new') {
        this.$store
          .dispatch('postChatrooms', {
            data: {
              consultant: this.consultant.id,
              user: this.currentUser.id,
              isCompleted: false,
            },
          })
          .then(async (res) => {
            this.currentRoom = res
            this.message.roomID = res.id
            await this.$store.dispatch('createRoom', res)
            await this.$bridge.$emit('selected_room', { room_id: res.id })
            await this.sendMessageToSocket({ ...this.message })
            await this.$router.push({
              path: this.localePath('/chats'),
              query: { room_id: res.id, consultant_id: this.consultant.id },
            })
          })
      } else {
        this.sendMessageToSocket({ ...this.message })
      }
    },
    sendMessageToSocket(message) {
      if (message.id) {
        const _id = message.id
        const data = { ...message }
        delete data.id
        const _message = {
          id: _id,
          data,
        }
        socket.emit('editMessage', _message, ({ res, rej }) => {
          this.setMessage()
        })
      } else {
        socket.emit('sendMessage', message, ({ res, rej }) => {
          this.setMessage()
        })
      }
    },
    setMessage() {
      if (this.currentRoom.unread_message && this.currentRoom.unread_message !== 0) {
        // this.$store
        //   .dispatch("crud/static/get", {
        //     url: "/seen_messages",
        //     query: {
        //       "_where[0][roomID.id]": this.$route.query.room_id,
        //       "_where[0][receiverID.id]": this.currentUser.id,
        //     },
        //   })
        //   .then(() => {
        //     this.$store.dispatch("seenMessage", this.message);
        //   });
        this.fetchCurrentRoom()
      }
      this.message = {
        room: this.currentRoom.id,
        sender: this.currentUser.id,
        receiver: this.currentRoom.attributes.consultant.data.id,
        text: '',
        filePath: null,
        seen: false,
      }
    },
    async fetchCurrentRoom() {
      if (this.$route.query.room_id !== 'new') {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$and][0][id]': this.$route.query.room_id,
          })
          .then((res) => {
            this.currentRoom = res[0]
          })
      }
    },
    handleClick(event, item) {
      this.$refs.vueSimpleContextMenu.showMenu(event, item)
    },
    optionClicked(event) {
      if (event.option.slug === 'edit') {
        const _message = event.item
        this.message = {
          chatroom: _message.chatroom.id,
          sender: _message.sender.id,
          receiver: _message.receiver.id,
          text: _message.text,
          filePath: _message.filePath,
          seen: _message.seen,
          id: _message.id,
        }
      } else if (event.option.slug === 'delete') {
        this.$modal.show(
          deleteModal,
          { name: 'DeleteMessage' },
          {
            height: 'auto',
            maxWidth: 400,
            width: window.innerWidth <= 400 ? window.innerWidth - 30 : 400,
            scrollable: true,
            clickToClose: false,
          }
        )
        this.$root.$once('delete-modal', (item) => {
          if (item !== 'canceled') {
            socket.emit(
              'deleteMessage',
              { id: event.item.id, roomID: event.item.chatroom.id },
              ({ res, rej }) => {}
            )
          }
        })
      }
    },
    mediaChange({ target }) {
      const formData = new FormData()
      formData.append('files', target.files[0])
      this.$store.dispatch('upload/uploadFile', formData).then((res) => {
        this.$modal.show(
          sendMedia,
          {
            image: res.data[0].url ? this.$tools.cropUrl(res.data[0].url) : null,
          },
          {
            height: 'auto',
            maxWidth: 600,
            width: window.innerWidth <= 600 ? window.innerWidth - 30 : 600,
            scrollable: true,
            clickToClose: false,
          }
        )
        this.$root.$once('send-media-modal', (item) => {
          if (item !== 'canceled') {
            this.message.filePath = item.image
            this.message.text = item.text
            this.sendMessage()
          }
        })
      })
    },
    toChatsList() {
      this.$router.push({
        query: {},
      })
    },
    toFieldDetail(data) {
      this.iframeLoading = true
      this.$router.push({
        path: this.localePath(`/my-profile/lands/${data.id}`),
      })
    },
    toChatting(data) {
      if (data.id !== parseInt(this.$route.query.room_id)) {
        this.$bridge.$emit('selected_room', { room_id: data.id })
        this.$router.push({ query: { room_id: data.id } })
      }
    },
    async fetchChats() {
      await this.$store.dispatch('getChatrooms', { populate: '*' }).then((res) => {
        this.chats = res
        this.currentRoom = res[0]
      })
    },
    async fetchData() {
      // await this.$store
      //   .dispatch('getByIdUsers', {
      //     id: this.$route.query.consultant_id,
      //     query: {
      //       populate: '*',
      //     },
      //   })
      //   .then((res) => {
      //     this.consultant = res
      //   })
    },
    connectSocket() {
      this.$bridge.$emit('selected_room', { room_id: this.$route.query.room_id })
    },
  },
}
</script>
<style>
.overflow-y {
  max-height: 315px;
  overflow-y: hidden;
}
svg path {
  fill: #7c7c7c !important;
}
.dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.mx-calendar {
  width: 220px !important;
}
.dropdown-item {
  border: none;
  position: absolute;
  bottom: 30px;
  left: 0;
  background: #ffffff;
  min-width: 120px;
  padding: 6px 0px;
}
.dropdown-item > div {
  padding: 5px 10px;
}
.dropdown-item > div:hover {
  background: rgba(107, 114, 128, 0.63);
}
</style>
