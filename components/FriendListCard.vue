<template>
  <v-card width="95%"
          height="8vw"
          min-height="80px"
          min-width="150px">
    <v-row no-gutters>
      <v-col cols="2">
        <div class="FriendAvatarIcon">
          <AvatarIcon class="mt-1" avatarIconSize="5vw" />
        </div>
      </v-col>
      <v-col>
        <div class="mt-6">
          <span class="AvatarDataText">ID: {{ userData.id }}</span> <br>
          <span class="AvatarDataText">Name: {{ userData.name }}</span>
        </div>
      </v-col>
      <v-col cols="1">
        <div class="FriendAvatarControlBtn">
          <slot />
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { toIcon } from '../plugins/data.js'
export default {
  props: {
    userData: {
      type: Object,
      require: true,
    },
  },
  data: function() {
    return {
      imageURL: "",
    }
  },
  beforeUpdate() {
    console.log(this.userData.id)
    console.log(toIcon(this.userData.id))
    ///(async() => {
      // this.imageURL = await toIcon(this.userData.id)
    //})()
  }
}
</script>

<style>
.FriendAvatarIcon {
  /*display: inline-block;*/
  /*margin-top: 1.5vw;*/
}

.FriendAvatarDatas {
  /*display: inline-block;*/
  margin-top: 1vw;
  margin-right: 0;
  /*margin-right: 1vw;*/
}

.AvatarDataText {
  font-size: 1.5vw;
  font-weight: bold;
  margin-right: 0;
  /*margin-right: 3vw;*/
}

.FriendAvatarControlBtn {
  display: inline-block;
  margin-left: 0;
  float: right;
}
</style>
