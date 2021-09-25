<template>
  <div>
    Friend request list
    <!-- <div v-for="i in getReceiveRequestFriendList" :key="i.id"> -->
    <div v-for="userData in testUser" :key="userData.id">
      <FriendListCard :userData="userData">
          <v-btn @click="addReceiveFriend(userData.id)"
                 color="#8ccb00"
                 width="5vw"
                 height="2.5vw">
            Add
          </v-btn>
          <v-btn @click="deleteReceiveFriend(userData.id)"
                 color="#ff4956"
                 width="5vw"
                 height="2.5vw">
            Delete
        </v-btn>
      </FriendListCard>
    </div>
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
}
</script>
