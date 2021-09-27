<template>
  <div>
    <div class="mb-6"
         v-for="userData in getFriendListGet" :key="userData.id">
      <FriendListCard :userData="userData">
        <v-btn @click="deleteFriend(userData.id)"
               color="#ff4956"
               width="6vw"
               min-width="60px"
               height="3vw"
               min-height="30px">
          <BtnText color="white" size="max(1vw, 12px)">DELETE</BtnText>
        </v-btn>
      </FriendListCard>
    </div>
  </div>
</template>

<script>
export default {
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
