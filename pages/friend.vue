<template>
  <v-container v-if="getEmailVerified">
    <PageTitle>フレンドリスト</PageTitle>
    <div class="FriendTabs">
      <v-tabs height="15vh">
        <v-tab>
          <span class="TabTexts">Friend List</span>
        </v-tab>
        <v-tab>
          <span class="TabTexts">Friend Request List</span>
        </v-tab>
        <v-tab>
          <span class="TabTexts">You Requested List</span>
        </v-tab>
        <v-tab-item>
          <CurrentFriendList />
        </v-tab-item>
        <v-tab-item>
          <FriendRequestList />
        </v-tab-item>
        <v-tab-item>
          <FriendRequestedList />
        </v-tab-item>
      </v-tabs>
    </div>
    <div class="AddFriendBtn">
      <AddFriend :ThemeColor="ThemeColor" />
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
    isTabVertical() {
      if(window.innerWidth > 500){
        return false;
      }
      else {
        return true;
      }
    },
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
  },
};
</script>

<style>
.AddFriendBtn {
  float: left;
  position: fixed;
  bottom: 10vh;
}

.TabTexts {
  font-size: 0.9vw;
}

.FriendTabs {
  width: 80vw;
}
</style>
