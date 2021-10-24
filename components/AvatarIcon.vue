<template>
  <v-avatar :size="avatarIconSize">
    <v-img :src="IconPath" />
  </v-avatar>
</template>

<script>
export default {
  computed: {
    IconPath: function() {
      if (this.userIconPath == "default") {
        return "./defaultAvater.png";
      } else {
        return this.userIconPath;
      }
    }
  },
  props: {
    userIconPath: {
      require: true
    },
    avatarIconSize: {
      type: String,
      require: false,
      default: "96",
    },
  }
}
</script>
