<template>
  <v-card class="mb-8 ml-4">
    <div class="FriendAvatarIcon">
      <AvatarIcon avatarIconSize="5vw" />
    </div>
    <div class="FriendAvatarDatas">
      <span class="AvatarDataText FirstText">ID: {{ userData.id }}</span>
      <span class="AvatarDataText">Name: {{ userData.name }}</span>
    </div>
    <div class="FriendAvatarControlBtn">
      <slot />
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      require: true,
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
  margin-left: 5vw;
}

.FriendAvatarDatas {
  display: inline-block;
  margin: 2vh 0 2vh 1vw;
}

.AvatarDataText {
  font-size: 1.5vw;
  font-weight: bold;
}

.AvatarDataText, .FirstText {
  margin-right: 3vw;
}

.FriendAvatarControlBtn {
  display: inline-block;
  line-height: 2.5vw;
  float: right;
}
</style>
