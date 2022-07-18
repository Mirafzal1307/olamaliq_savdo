<template>
  <div>
    <navbar />
    <main>
      <nuxt-child />
    </main>
    <footer />
  </div>
</template>

<script>
import Footer from '~/components/core/footer.vue'
import Navbar from '~/components/core/navbar.vue'
import { socket } from '~/plugins/socket.client.js'
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      currentUser: {},
    }
  },
  created() {
    if (!process.client) {
      return
    }
    this.currentUser = JSON.parse(localStorage.getItem('user_info'))
  },
  mounted() {
    socket.on('joined', (res) => {
      console.log('Joined to chat: ', res)
    })
    socket.on('left', (res) => {
      console.log('Left from chat:', res)
    })
    socket.on('joinedRoom', (res) => {
      console.log('Joined to room: ', res)
    })
    socket.on('leftRoom', (res) => {
      console.log('Left from room:', res)
    })
    socket.on('message', (res) => {
      this.getMessages()
      // this.$store.dispatch("sendMessage", res);
      console.log('Page Received Message Front: ', res)
    })
    socket.on('finishedChat', (res) => {
      this.$store.dispatch('finishedChatId', res)
      console.log('Finished chat id: ', res)
    })
    this.$bridge.$on('join_room', (message) => {
      console.log('Join room: ', message)
      this.joinToRoom(message)
    })
    this.$bridge.$on('join_chat', (message) => {
      console.log('Join chat: ', message)
      this.joinToChat(message)
    })
    this.$bridge.$on('set_active_rooms', () => {
      this.fetchActiveRooms()
    })
    this.$bridge.$on('set_closed_rooms', () => {
      this.fetchClosedRooms()
    })
    if (this.currentUser)
      this.$bridge.$emit('join_chat', {
        username: this.currentUser.username,
        user_id: this.currentUser.id,
      })
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.loggedIn
    }),
  },
  methods: {
    joinToChat(message) {
      socket.emit(
        'join',
        {
          username: message.username,
          user_id: message.user_id,
        },
        ({ res, rej }) => {
          // if (res) {
          //   if (this.$route.query.room_id !== "new") {
          //     this.$store
          //       .dispatch("getChatmessages", {
          //         "filters[$and][0][chatroom][id]": this.$route.query.room_id,
          //       })
          //       .then((res) => {
          //         console.log("Chat messages: ", res);
          //         this.$store.dispatch("setMessage", res);
          //       });
          //   }
          // } else {
          //   console.error(rej);
          // }
        }
      )
    },
    joinToRoom(message) {
      console.log('Join to room: ', message)
      socket.emit(
        'joinRoom',
        {
          username: message.username,
          room: message.room,
        },
        ({ res, rej }) => {
          if (res) {
            if (this.$route.query.room_id !== 'new') {
              this.getMessages()
            }
          } else {
            console.error(rej)
          }
        }
      )
    },
    getMessages() {
      this.$store
        .dispatch('getChatmessages', {
          populate: '*',
          'filters[$and][0][chatroom][id]': this.$route.query.room_id,
        })
        .then((res) => {
          console.log('Chat messages: ', res)
          this.$store.dispatch('setMessage', res)
        })
    },
    async fetchActiveRooms() {
      if (this.currentUser.role.id === 4) {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$or][0][consultant][id]': this.currentUser.id,
            'filters[$and][0][isCompleted]': false,
          })
          .then((res) => {
            this.$store.dispatch('setActiveRooms', res)
          })
      } else {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$or][0][user][id]': this.currentUser.id,
            'filters[$and][0][isCompleted]': false,
          })
          .then((res) => {
            this.$store.dispatch('setActiveRooms', res)
          })
      }
    },
    async fetchClosedRooms() {
      if (this.currentUser.role.id === 4) {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$or][0][consultant][id]': this.currentUser.id,
            'filters[$and][0][isCompleted]': true,
          })
          .then((res) => {
            this.$store.dispatch('setClosedRooms', res)
          })
      } else {
        await this.$store
          .dispatch('getChatrooms', {
            populate: '*',
            'filters[$or][0][user][id]': this.currentUser.id,
            'filters[$and][0][isCompleted]': true,
          })
          .then((res) => {
            this.$store.dispatch('setClosedRooms', res)
          })
      }
    },
  },
}
</script>
