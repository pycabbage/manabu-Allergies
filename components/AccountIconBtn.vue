<template>
  <Dialog DialogTitle="User icon setting"
          :ToolBarColor="ThemeColor"
          isUseImg="true">
    <template v-slot:BtnContent>
      <AvatarIcon :userIconPath="userIconPath"
                  :avatarIconSize="avatarIconSize" />
    </template>
    <template v-slot:DialogContent>
      <div class="FileSelectorWrapper">
        <v-form v-model="formValid"
                ref="form"
                @submit.prevent>
          <v-file-input class="IconFileSelector"
                        label="新しいアイコンの画像を選択"
                        filled
                        prepend-icon="mdi-camera">
          </v-file-input>
          <v-btn class="UpdateConfigBtn"
                 @click=""
                 :color="ThemeColor"
                 :disabled="!formValid">
            UPDATE
          </v-btn>
        </v-form>
      </div>
    </template>
  </Dialog>
</template>

<script>
export default {
  props: {
    userIconPath: {
      type: String,
      require: false,
      default: "/anonymousIcon.png",
    },
    ThemeColor: {
      type:String,
      require: true,
    },
    avatarIconSize: {
      type: String,
      require: false,
      default: 96,
    },
  },
}
</script>

<style>
.FileSelectorWrapper {
  margin: 2vh 1vw 0 1vw;
}
</style>
