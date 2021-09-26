<template>
  <v-card class="mb-8 ml-4">
    <v-container>
      <div>
        <v-container>
          <v-card-action>
            <div class="FriendAvatarWrapper">
              <div class="FriendAvatarIcon">
                <AvatarIcon class="mb-4" avatarIconSize="5vw" />
              </div>
              <div class="FriendAvatarDatas">
                <span class="AvatarDataText">ID: 1</span> <br>
                <span class="AvatarDataText">Name: hoge</span>
              </div>
              <div class="FriendAvatarControlBtn">
                  <v-btn>

                  </v-btn>
              </div>
            </div>
          </v-card-action>
        </v-container>
      </div>
    </v-container>
  </v-card>
</template>

<script>

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
