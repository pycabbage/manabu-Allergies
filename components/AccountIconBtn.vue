<template>
  <div>
    <v-badge icon="mdi-pencil" :value="mouseHover" offset-y="-10" left>
      <input
        @change="updateProfilePhoto()"
        style="display: none"
        ref="input"
        type="file"
        accept="image/jpeg, image/jpg, image/png, image/gif"
      />

      <v-btn
        @click="updateProfilePhotoBtn"
        @contextmenu="aaa"
        @mouseenter="mouseHover = true"
        @mouseleave="mouseHover = false"
        x-large
        icon
        :loading="loading"
        :disabled="loading"
      >
        <AvatarIcon :userIconPath="userIconPath" avatarIconSize="128" />
      </v-btn>
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
