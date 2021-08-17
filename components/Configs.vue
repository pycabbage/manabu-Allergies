<template>
  <v-container>
    <div>
      <v-avatar :height="AvatarSize"
                :width="AvatarSize">
        <v-img  :src="User.icon" 
                :aspect-ratio="16/9"
                alt="user icon"></v-img>
      </v-avatar>
    </div>
    <v-expansion-panels>
      <ProfileConfig :User="User"/>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  props: {
    User: {
      type: Object,
      require: true,
    },
    AvatarSize: {
      type: Number,
      require: false,
      default: 150,
    },
  },
}
</script>
