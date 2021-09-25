<template>
  <div>
    <!-- <div v-for="i in getRequestFriendList" :key="i.id"> -->
    <div v-for="userData in testUser" :key="userData.id">
      <FriendListCard :userData="userData">
      <v-btn @click="deleteRequestFriend(userData.id)"
        color="#ff4956"
        width="5vw"
        height="2.5vw">
        <BtnText color="white"
                 size="0.7vw">DELETE</BtnText>
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
}
</script>
