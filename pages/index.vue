<template>
  <div>
    <navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/core/footer.vue'
import Navbar from '~/components/core/navbar.vue'
import { socket } from "~/plugins/socket.client.js";
import { mapGetters, mapState } from 'vuex'
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    socket.on("joined", (res) => {
      console.log("Joined to chat: ", res);
    });
    socket.on("left", (res) => {
      console.log("Left from chat:", res);
    });
    socket.on("joinedRoom", (res) => {
      console.log("Joined to room: ", res);
    });
    socket.on("leftRoom", (res) => {
      console.log("Left from room:", res);
    });
    socket.on("message", (res) => {
      this.$store.dispatch("sendMessage", res);
      console.log("Page Received Message Front: ", res);
    });
    socket.on("finishedChat", (res) => {
      this.$store.dispatch("finishedChatId", res);
      console.log("Finished chat id: ", res);
    });
    this.$bridge.$on("join_room", (message) => {
      console.log("Join room: ", message);
      this.joinToRoom(message);
    });
    this.$bridge.$on("join_chat", (message) => {
      console.log("Join chat: ", message);
      this.joinToChat(message);
    });
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.loggedIn,
      currentUser: (state) => state.auth.user
    }),
  },
  methods: {
    joinToChat(message) {
      socket.emit(
        "join",
        {
          username: message.username,
          user_id: message.user_id,
        },
        ({ res, rej }) => {
          if (res) {
            if (this.$route.query.room_id !== "new") {
              this.$store
                .dispatch("getChatmessages", {
                  "filters[$and][0][chatroom][id]": this.$route.query.room_id,
                })
                .then((res) => {
                  console.log("Chat messages: ", res);
                  this.$store.dispatch("setMessage", res);
                });
            }
          } else {
            console.error(rej);
          }
        }
      );
    },
    joinToRoom(message) {
      socket.emit(
        "joinRoom",
        {
          username: message.username,
          room: message.room
        },
        ({ res, rej }) => {
          if (res) {
            if (this.$route.query.room_id !== "new") {
              this.$store
                .dispatch("getChatmessages", {
                  "filters[$and][0][chatroom][id]": this.$route.query.room_id,
                })
                .then((res) => {
                  console.log("Chat messages: ", res);
                  this.$store.dispatch("setMessage", res);
                });
            }
          } else {
            console.error(rej);
          }
        }
      );
    },
  }
}
</script>
