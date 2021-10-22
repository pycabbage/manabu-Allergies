<template>
  <Configs :User="User" />
</template>

<script>
export default {
  data() {
    return {
      confirmationPassword: "",
      name: "",
      email: "",
      password: "",
      User: {
        id: "tarou123",
        name: "太郎",
        age: 20,
        email: "tarou@yamada",
        tel: "xxx-xxxx",
        icon: "default",
      },
    };
  },
  computed: {
    getEmailVerified: function () {
      return this.$store.getters["auth/emailVerified"];
    },
    getId: function () {
      return this.$store.getters["auth/id"];
    },
    getEmail: function () {
      return this.$store.getters["auth/email"];
    },
    getName: function () {
      return this.$store.getters["auth/name"];
    },
    getPhoto: function () {
      return this.$store.getters["auth/photo"];
    },
  },
  methods: {
    logout() {
      this.$store
        .dispatch({
          type: "auth/signOut",
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          alert(error);
        });
    },
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
    updateProfileName() {
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          name: this.name,
        })
        .then(() => {
          this.name = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
    updateEmail() {
      this.$store
        .dispatch({
          type: "auth/updateEmailWithAuth",
          email: this.email,
          confirmationPassword: this.confirmationPassword,
        })
        .then(() => {
          this.email = "";
          this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
    updatePassword() {
      this.$store
        .dispatch({
          type: "auth/updatePasswordWithAuth",
          password: this.password,
          confirmationPassword: this.confirmationPassword,
        })
        .then(() => {
          this.password = "";
          this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
    deleteAccount() {
      this.$store
        .dispatch({
          type: "auth/deleteAccountWithAuth",
          confirmationPassword: this.confirmationPassword,
        })
        .then(() => {
          this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
