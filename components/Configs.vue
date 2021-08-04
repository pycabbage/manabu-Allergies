<template>
  <v-container>
    <div>
      <v-avatar :height="AvatarSize"
                :width="AvatarSize">
        <v-img  :src="User.icon" 
                :aspect-ratio="16/9"></v-img>
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
    User:Object,
  },
  data(){
    return {
      AvatarSize:150,
      width:1000,
    };
  },
}
</script>
