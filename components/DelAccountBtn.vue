<template>
  <div>
    <v-btn @click="passwdDialog = true" color="#ff4956" height="4.5vh">
      <v-icon color="white">mdi-delete</v-icon>
      <BtnText color="white">DELETE ACCOUNT</BtnText>
    </v-btn>
    <v-dialog v-model="passwdDialog" width="400px">
      <v-card>
        <v-card-title>本当によろしいですか...?</v-card-title>
        <v-card-subtitle>
          この操作を行うとあなたのアカウントが削除されます。二度と元に戻すことはできません。<br />それでも続行する場合は、パスワードを入力して削除ボタンを押してください。
        </v-card-subtitle>
        <v-col>
          <StyledText color="red">{{errorMsg}}</StyledText>
          <TextForm ref="passwd" title="Password" password />
        </v-col>
        <v-card-actions>
          <v-btn @click="passwdDialog = false">キャンセル</v-btn>
          <v-btn color="#ff4956" @click="delAccount">削除</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import StyledText from './StyledText.vue';
export default {
  components: { StyledText },
  data() {
    return {
      BtnTextColor: "#000000",
      passwdDialog: false,
      passwdShow: false,
      errorMsg:""
    };
  },
  methods: {
    delAccount() {
      alert(this.$refs.passwd.value)
      this.$store
        .dispatch({
          type: "auth/deleteAccountWithAuth",
          confirmationPassword: this.$refs.passwd.value,
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((e) => {
          if (e == "Error: The password is invalid or the user does not have a password.") {
            this.errorMsg="パスワードに誤りがあるようです。"
          } else {
            this.errorMsg=e
          }
          //this.$router.push("/login");
        });
    },
  },
};
</script>


