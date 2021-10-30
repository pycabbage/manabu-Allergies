<template>
  <div>
    <v-badge icon="mdi-pencil" :value="mouseHover" offset-y="30" offset-x="30" left>
      <input
        @change="updateProfilePhoto()"
        style="display: none"
        ref="input"
        type="file"
        accept="image/*"
      />

      <v-menu offset-y>
        <template v-slot:activator="{on, attrs}">
          <v-btn
            @mouseenter="mouseHover = true"
            @mouseleave="mouseHover = false"
            icon
            :loading="loading"
            :disabled="loading"
            v-bind="attrs"
            v-on="on"
            width="100%"
            height="100%"
          ><AvatarIcon :userIconPath="userIconPath" avatarIconSize="128" /></v-btn>
        </template>
        <v-list>
          <v-list-item><v-btn @click="updateProfilePhotoBtn" tile text>ファイルから選択</v-btn></v-list-item>
          <v-list-item><v-btn @click="aaa" tile text>リセット</v-btn></v-list-item>
        </v-list>
      </v-menu>
    </v-badge>
  </div>
</template>

<script>
export default {
  props: {
    userIconPath: {
      require: false,
      default: "this.$store.getters['auth/photo']",
    },
    ThemeColor: {
      type: String,
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
      loading: false,
      mouseHover: false,
      showMenu: false
    };
  },
  methods: {
    async aaa() {
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          aaa: "default"
        })
        .then(() => {
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
        });
    },
    updateProfilePhotoBtn() {
      this.$refs.input.click();
    },
    updateProfilePhoto() {
      this.loading = true;
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          photo: this.$refs.input.files[0],
        })
        .then(() => {
          this.loading = false;
        })
        .catch((error) => {
          alert(error);
          this.loading = false;
        });
    },
  },
};
</script>

<style>
.FileSelectorWrapper {
  margin: 2vh 1vw 0 1vw;
}
</style>
