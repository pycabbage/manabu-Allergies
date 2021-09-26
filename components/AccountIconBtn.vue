<template>
  <div>
   <input
        style="display: none"
        ref="input"
        type="file"
        accept="image/jpeg, image/jpg, image/png"
        @change="updateProfilePhoto()"
      />
      <v-row justify="center" class="my-5">
        <v-btn
          x-large
          icon
          @click="updateProfilePhotoBtn"
          :loading="loading"
          :disabled="loading"
        >
          <v-avatar size="100">
            <img
              :src="this.$store.getters['auth/photo']"
              alt="user photo"
              width="200"
              height="200"
              v-if="!loading"
            />
          </v-avatar>
        </v-btn>
      </v-row>
  </div>
 
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
      loading: false,
    };
  },
  methods: {
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
    }
    },
}
</script>

<style>
.FileSelectorWrapper {
  margin: 2vh 1vw 0 1vw;
}
</style>
