<template>
  <v-btn @click="logout"
         color="#ff4956"
         large>
    <v-icon color="white">mdi-logout</v-icon>
    <BtnText color="white">LOGOUT</BtnText>
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
