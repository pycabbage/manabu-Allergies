<template>
  <Dialog DialogTitle="User icon setting"
          :ToolBarColor="ThemeColor"
          :isUseImg="true">
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
                        @change="updateProfilePhoto"
                        accept="image/*"
                        label="新しいアイコンの画像を選択"
                        filled
                        prepend-icon="mdi-camera">
          </v-file-input>
          <!-- <v-btn class="UpdateConfigBtn" -->
          <!--        @click="updateProfilePhoto" -->
          <!--        :color="ThemeColor" -->
          <!--        :disabled="!formValid"> -->
          <!--   UPDATE -->
          <!-- </v-btn> -->
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
      default: "96",
    },
  },
  data() {
    return {
      formValid: false,
      isUseImg: true,
      NewIcon: null,
    };
  },
  methods: {
    updateProfilePhoto(e) {
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          photo: e.target.files[0],
        })
        .then(() => {})
        .catch((error) => {
          alert(error);
        });
    },
  },
}
</script>

<style>
.FileSelectorWrapper {
  margin: 2vh 1vw 0 1vw;
}
</style>
