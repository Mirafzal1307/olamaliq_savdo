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
      console.log("Page: ", res);
    });
    socket.on("leaving", (res) => {
      console.log("PAGE LEAVED SOCKET ROOM:", res);
    });
    socket.on("message", (res) => {
      this.$store.dispatch("sendMessage", res);
      console.log("Page Received Message Front: ", res);
    });
    socket.on("finishedChat", (res) => {
      this.$store.dispatch("finishedChatId", res);
      console.log("Finished chat id: ", res);
    });
    this.$bridge.$on("selected_room", (message) => {
      this.joinToRoom(message);
    });
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.loggedIn,
      currentUser: (state) => state.auth.user
    }),
  },
  methods: {
    joinToRoom(message) {
      console.log("Join in room: ", {
        username: this.currentUser.username,
        room: message.room_id,
      });
      socket.emit(
        "join",
        {
          username: this.currentUser.username,
          room: typeof message.room_id === "string" ? parseInt(message.room_id) : message.room_id,
        },
        ({ res, rej }) => {
          if (res) {
            if (this.$route.query.room_id !== "new") {
              this.$store
                .dispatch("getChatmessages", {
                  "filters[$and][0][consultant][id]": this.data.id,
                  "filters[$and][0][chatroom][id]": this.$route.query.room_id,
                })
                .then((res) => {
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
