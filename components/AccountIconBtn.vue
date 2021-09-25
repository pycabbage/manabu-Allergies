<template>
  <Dialog DialogTitle="User icon setting"
          :ToolBarColor="ThemeColor">
    <template v-slot:BtnContent>
      <v-avatar size=96>
        <v-img :src="userIconPath" />
      </v-avatar>
    </template>
    <template v-slot:DialogContent>
      <div class="FileSelectorWrapper">
        <v-file-input class="IconFileSelector"
                      label="新しいアイコンの画像を選択"
                      filled
                      prepend-icon="mdi-camera">
        </v-file-input>
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
  },
}
</script>

<style>
.FileSelectorWrapper {
  margin: 2vh 1vw 0 1vw;
}
</style>
