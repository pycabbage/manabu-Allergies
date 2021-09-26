<template>
  <NuxtLink to="/my-page">
    <AvatarIcon :userIconPath="userIconPath"
                :avatarIconSize="avatarIconSize" />
  </NuxtLink>
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
      default: 96,
    },
  }
}
</script>
