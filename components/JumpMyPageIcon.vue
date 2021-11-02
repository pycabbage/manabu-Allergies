<template>
  <NuxtLink to="/my-page">
    <AvatarIcon :userIconPath="userIconPath"
                :avatarIconSize="avatarIconSize" 
                v-if="getName!=''"/>
    <v-icon :size="avatarIconSize" v-else>mdi-login</v-icon>
  </NuxtLink>
</template>

<script>
import DataFunc from "/components/DataFuncs.vue"
export default {
  components:{ DataFunc },
  computed:{
    getName:DataFunc.computed.getName
  },
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
