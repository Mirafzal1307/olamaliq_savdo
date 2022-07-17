<template>
  <div>
    <div v-if="$route.query.room_id" id="map-wrap" class="relative">
      <div style="height: calc(72vh - 0px)" class="flex-1 p-2 justify-between flex flex-col">
        <div class="flex sm:items-center justify-between pb-3 pt-0 border-b-2 border-gray-200">
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
            scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2
            scrolling-touch
          "
        >
          <div v-for="(msg, index) in messages" :key="index" class="chat-message">
            <div
              v-if="msg.attributes.sender ? (msg.attributes.sender.data.id == currentUser.id ? true : false) : false"
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
                      v-if="msg.attributes.filePath"
                      class="object-cover h-48 w-96"
                      :src="`${$tools.getFileUrl(msg.attributes.filePath)}`"
                    />
                  </div>
                  <span class="">{{ msg.attributes.text }}</span>
                </div>
              </div>
              <img
                :src="
                  msg.attributes.sender && msg.attributes.sender.avatar
                    ? $tools.getFileUrl(msg.attributes.sender.avatar)
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
                      v-if="msg.attributes.filePath"
                      class="object-cover h-48 w-96"
                      :src="`${$tools.getFileUrl(msg.attributes.filePath)}`"
                    />
                  </div>
                  <span>{{ msg.attributes.text }}</span>
                </div>
              </div>
              <img
                :src="
                  msg.attributes.sender && msg.attributes.sender.avatar
                    ? $tools.getFileUrl(msg.attributes.sender.avatar)
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
</template>
<script>
import deleteModal from '~/components/modals/delete.vue'
import sendMedia from '~/components/modals/send-media.vue'
import { mapState, mapGetters } from 'vuex'
import { socket } from '~/plugins/socket.client.js'
import VueSimpleContextMenu from 'vue-simple-context-menu'
import 'vue-simple-context-menu/dist/vue-simple-context-menu.css'
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      message: {
        chatroom: null,
        sender: this.currentUser.id,
        receiver: null,
        text: '',
        filePath: null,
        seen: false,
      },
      currentRoom: {},
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
  computed: {
    ...mapState({
      finishedChatId: (state) => state.socket.finishedChatId,
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
        console.log('Sended message: ', message)
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
    async fetchCurrentRoom() {
      if (this.$route.query.room_id !== 'new') {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$and][0][id]': this.$route.query.room_id,
          })
          .then((res) => {
            console.log('fetched room', res)
            this.currentRoom = res[0]
          })
      }
    },
    async socketDisconnector() {
      await socket.emit('leaveRoom', {
        username: this.currentUser.username,
        room: this.currentRoom.id,
      })
    },
  },
  mounted() {
    if (this.$route.query.room_id) {
      this.fetchCurrentRoom().then(() => {
        this.message = {
          chatroom: this.currentRoom.id,
          sender: this.currentUser.id,
          receiver: this.currentRoom.attributes.consultant.data.id,
          text: '',
          filePath: null,
          seen: false,
        }
        this.$bridge.$emit('join_room', {
          username: this.currentUser.username,
          room: this.currentRoom.id,
        })
        console.log('Message: ', this.message)
      })
    }
  },
  created() {},
  beforeDestroy() {
    this.socketDisconnector()
  },
  watch: {
    '$route.query.room_id'(val) {
      this.socketDisconnector().then(() => {
        if (this.$route.query.room_id) {
          this.fetchCurrentRoom().then(() => {
            this.$bridge.$emit('join_room', {
              username: this.currentUser.username,
              room: this.currentRoom.id,
            })
          })
        }
        // this.fetchData().then(() => {
        //   this.fetchCurrentRoom().then(() => {
        //     // if (
        //     //   this.currentRoom.isCompleted === true &&
        //     //   this.currentRoom.rate0to5 === null
        //     // ) {
        //     //   this.showRatingModal();
        //     // }
        //     this.loading = false;
        //     this.message = {
        //       roomID: this.currentRoom.id,
        //       senderID: this.currentUser.id,
        //       receiverID:
        //         this.state === "consultant"
        //           ? this.consultant.id
        //           : this.product.userid.id,
        //       text: "",
        //       filePath: null,
        //       activityID: null,
        //       seen: false,
        //     };
        //   });
        // });
      })
    },
  },
  components: {
    VueSimpleContextMenu,
  },
  mixins: [],
  name: 'ChatRoomBody',
}
</script>