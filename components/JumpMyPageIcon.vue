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
