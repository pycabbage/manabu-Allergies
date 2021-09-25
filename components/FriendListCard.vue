<template>
  <v-card class="mb-8 ml-4">
    <v-container>
      <div>
        <div class="FriendAvatarIcon">
          <v-card-action>
            <AvatarIcon avatarIconSize="5vw" />
          </v-card-action>
        </div>
        <div class="FriendAvatarDatas">
          <v-card-text>
            <span class="AvatarDataText">ID: {{ userData.id }}</span> <br>
            <span class="AvatarDataText">Name: {{ userData.name }}</span>
          </v-card-text>
        </div>
        <div class="FriendAvatarControlBtn">
          <v-card-action>
            <slot />
          </v-card-action>
        </div>
      </div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style>
.FriendAvatarIcon {
  display: inline-block;
}

.FriendAvatarDatas {
  display: inline-block;
  /*margin-right: 1vw;*/
}

.AvatarDataText {
  font-size: 1.5vw;
  font-weight: bold;
  /*margin-right: 3vw;*/
}

.FriendAvatarControlBtn {
  display: inline-block;
  float: right;
}
</style>
