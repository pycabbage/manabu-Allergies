<template>
  <v-btn @click="logout"
         color="#ff4956"
         height="4.5vh">
    <v-icon color="white">mdi-logout</v-icon>
    <span class="LogoutBtnText">LOGOUT</span>
  </v-btn> 
</template>

<script>
export default {
  data() {
    return {
      BtnTextColor: "#000000",
    } 
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
  },
}
</script>

<style>
.LogoutBtnWrapper {
  color: white;
}

.LogoutBtnText {
  color: white;
}
</style>
