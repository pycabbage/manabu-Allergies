<template>
  <v-avatar :size="avatarIconSize">
    <v-img :src="userIconPath" />
  </v-avatar>
</template>

<script>
export default {
  props: {
    userIconPath: {
      type: String,
      require: false,
      default: "/anonymousIcon.png",
    },
    avatarIconSize: {
      type: String,
      require: false,
      default: 96,
    },
  }
}
</script>
