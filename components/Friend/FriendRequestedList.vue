<template>
  <div>
    <v-list width="80%">
      <div v-for="userData in getRequestFriendList" :key="userData.id">
        <FriendListCard :userData="userData"><v-btn @click="deleteRequestFriend(userData.id)" color="#ff4956">
        <StyledText color="white">DELETE</StyledText>
      </v-btn></FriendListCard>
      </div>
    </v-list>
    <h2 v-if="getRequestFriendList.length == 0">あなたからお友達におくったフレンドリクエストは今のところないようです...<br />"ADD Friend"ボタンを使ってリクエストしてみましょう!!</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testUser: [
        {
          id: "0",
          name: "bob",
        },
        {
          id: "1",
          name: "john",
        },
        {
          id: "2",
          name: "mike",
        },
      ],
    };
  },
  computed: {
    getRequestFriendList: function () {
      return this.$store.getters["friend/requestFriendList"];
    },
  },
  methods: {
    deleteRequestFriend(id) {
      this.$store
        .dispatch({
          type: "friend/deleteRequestFriend",
          id: id,
        })
        .then(() => {})
        .catch((error) => {});
    },
  },
};
</script>
