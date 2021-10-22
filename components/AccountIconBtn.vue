<template>
  <div>
    <input @change="updateProfilePhoto()"
           style="display: none"
           ref="input"
           type="file"
           accept="image/jpeg, image/jpg, image/png" />
    <v-btn @click="updateProfilePhotoBtn"
           x-large
           icon
           :loading="loading"
           :disabled="loading" >
      <AvatarIcon :userIconPath="userIconPath"
                  avatarIconSize="128" />
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    IconPath: function() {
      if (this.$store.getters['auth/photo'] == "default") {
        return "@/defaultAvater.png";
      } else {
        return this.$store.getters['auth/photo'];
      }
    }
  },
  props: {
    userIconPath: {
      require: false,
      default: "",
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
