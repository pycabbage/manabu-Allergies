<template>
  <div>
    <v-list width="80%">
      <div v-for="userData in getFriendListGet" :key="userData.id">
        <FriendListCard :userData="userData"><v-btn @click="deleteFriend(userData.id)" color="#ff4956">
        <StyledText color="white">DELETE</StyledText>
      </v-btn></FriendListCard>
      </div>
    </v-list>
    <h2 v-if="getFriendListGet.length == 0">まだお友達はいないようです...お友達を追加しましょう!!</h2>
  </div>
</template>

<script>
import FriendListCard from './FriendListCard.vue'
export default {
  components:{FriendListCard},
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
};
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
