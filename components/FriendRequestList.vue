<template>
  <div>
    <div class="mb-6"
         v-for="userData in getReceiveRequestFriendList" :key="userData.id">
      <FriendListCard :userData="userData">
        <v-btn @click="addReceiveFriend(userData.id)"
               color="#8ccb00"
               width="6vw"
               min-width="60px"
               height="3vw"
               min-height="30px">
          <BtnText color="white" size="0.7vw">ADD</BtnText>
        </v-btn>
        <v-btn @click="deleteReceiveFriend(userData.id)"
               color="#ff4956"
               width="6vw"
               min-width="60px"
               height="3vw"
               min-height="30px">
          <BtnText color="white" size="0.7vw">DELETE</BtnText>
        </v-btn>
      </FriendListCard>
    </div>
    <h2 v-if="getReceiveRequestFriendList.length == 0">今のところ、あなたはお友達からフレンドリクエストを受け取っていないようです...</h2>
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
    getReceiveRequestFriendList: function () {
      return this.$store.getters["friend/receiveFriendList"];
    },
  },
  methods: {
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
  },
};
</script>
