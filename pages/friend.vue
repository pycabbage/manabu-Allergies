<template>
  <v-container class="text-center" v-if="getEmailVerified">
    <v-row justify="center" class="my-5">
      <AddFriend :ThemeColor="ThemeColor" />
    </v-row>
    <v-tabs vertical>
      <v-tab>
        Friend List
      </v-tab>
      <v-tab>
        Friend Request List
      </v-tab>
      <v-tab>
        You Friend Requested List
      </v-tab>
    </v-tabs>
    <div>
      Now Request
      <div v-for="i in getRequestFriendList" :key="i.id">
        <v-card>
          ID: {{ i.id }} <br />
          NAME: {{ i.name }}
          <v-btn @click="deleteRequestFriend(i.id)">Delete</v-btn>
        </v-card>
      </div>
    </div>
    <div>
      Now Requested
      <div v-for="i in getReceiveRequestFriendList" :key="i.id">
        <v-card>
          ID: {{ i.id }} <br />
          NAME: {{ i.name }}
          <v-btn @click="addReceiveFriend(i.id)">Add</v-btn>
          <v-btn @click="deleteReceiveFriend(i.id)">Delete</v-btn>
        </v-card>
      </div>
    </div>
    <div>
      Friend
      <div v-for="i in getFriendListGet" :key="i.id">
        <v-card>
          ID: {{ i.id }} <br />
          NAME: {{ i.name }}
          <v-btn @click="deleteFriend(i.id)">Delete</v-btn>
        </v-card>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      ThemeColor: "light-blue darken-1",
      dialog: false,
      loading: false,
      requestFriendId: "",
    };
  },
  computed: {
    getEmailVerified: function () {
      return this.$store.getters["auth/emailVerified"];
    },
    getId: function () {
      return this.$store.getters["auth/id"];
    },
    getEmail: function () {
      return this.$store.getters["auth/email"];
    },
    getName: function () {
      return this.$store.getters["auth/name"];
    },
    getPhoto: function () {
      return this.$store.getters["auth/photo"];
    },
    getRequestFriendList: function () {
      return this.$store.getters["friend/requestFriendList"];
    },
    getReceiveRequestFriendList: function () {
      return this.$store.getters["friend/receiveFriendList"];
    },
    getFriendListGet: function () {
      return this.$store.getters["friend/friendList"];
    },
  },
  methods: {
    requestFriend() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "friend/requestFriend",
          id: this.requestFriendId,
        })
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.requestFriendId = "";
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
          this.dialog = false;
          this.requestFriendId = "";
        });
    },
    deleteRequestFriend(id) {
      this.$store
        .dispatch({
          type: "friend/deleteRequestFriend",
          id: id,
        })
        .then(() => {})
        .catch((error) => {});
    },
    addReceiveFriend(id) {
      this.$store
        .dispatch({
          type: "friend/addReceiveFriend",
          id: id,
        })
        .then(() => {})
        .catch((error) => {
          alert(error);
        });
    },
    deleteReceiveFriend(id) {
      this.$store
        .dispatch({
          type: "friend/deleteReceiveFriend",
          id: id,
        })
        .then(() => {})
        .catch((error) => {
          alert(error);
        });
    },
    deleteFriend(id) {
      this.$store
        .dispatch({
          type: "friend/deleteFriend",
          id: id,
        })
        .then(() => {})
        .catch((error) => {});
    },
  },
};
</script>

<style>
</style>
