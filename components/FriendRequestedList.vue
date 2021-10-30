<template>
  <div>
    <div class="mb-6" 
         v-for="userData in getRequestFriendList" :key="userData.id">
      <FriendListCard :userData="userData">
        <v-btn
          @click="deleteRequestFriend(userData.id)"
          color="#ff4956"
               width="6vw"
               min-width="60px"
               height="3vw"
               min-height="30px">
          <BtnText color="white" size="0.7vw">DELETE</BtnText>
        </v-btn>
      </FriendListCard>
    </div>
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
