<template>
  <div>
    <!-- <div v-for="i in getFriendListGet" :key="i.id"> -->
    <div v-for="userData in testUsers" :key="userData.id">
      <FriendListCard :userData="userData">
        <v-btn @click="deleteFriend(userData.id)"
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
      testUsers: [
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
    getFriendListGet: function () {
      return this.$store.getters["friend/friendList"];
    },
  },
  methods: {
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
}
</script>

<style>
.FriendAvatarIcon {
  display: inline-block;
  margin: 2vh 2vw;
}

.FriendListCards {
  margin-bottom: 1vh;
  margin-left: 1vw;
}

.FriendAvatarDatas {
  display: inline-block;
  margin: 3vh 2vw;
}

.AvatarDataText {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 12vw;
}

.FriendAvatarControlBtn {
  display: inline-block;
  margin: 4vh 2vw;
  float: right;
}
</style>
