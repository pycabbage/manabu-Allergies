<template>
  <v-list-item>
    <v-list-item-avatar width="5vw"><v-img :src="IconPath"/></v-list-item-avatar>
    <v-list-item-title>{{userData.name}}</v-list-item-title>
    <v-list-item-subtitle>{{userData.id}}</v-list-item-subtitle>
    <v-list-item-action>
      <slot />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import { toIcon } from "../../plugins/data";
export default {
  props: {
    userData: {
      type: Object,
      require: true,
    },
  },
  data: function () {
    return {
      img: "",
    };
  },
  computed:{
    IconPath: function() {
      if (this.img == "default") {
        return "./defaultAvater.png";
      } else {
        return this.img;
      }
    }
  },
  async fetch() {
    const imageURL = await toIcon(this.userData.id);
    this.img = imageURL;
  },
};
</script>

<style>
.FriendAvatarDatas {
  margin-top: 1vw;
  margin-right: 0;
}

.AvatarDataText {
  font-size: max(1.5vw, 12px);
  font-weight: bold;
  margin-right: 0;
}

.FriendAvatarControlBtn {
  display: inline-block;
  margin-left: 0;
  float: right;
}
</style>
