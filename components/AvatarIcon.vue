<template>
  <v-avatar :size="avatarIconSize">
    <v-img :src="userIconPath"/>
  </v-avatar>
</template>

<script>
export default {
  props: {
    userIconPath: {
      require: false,
      default: "this.$store.getters['auth/photo']",
    },
    avatarIconSize: {
      type: String,
      require: false,
      default: "96",
    },
  }
}
</script>
