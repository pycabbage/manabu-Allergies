<template>
  <v-app>
    <v-form class="text-center" :disabled="loading" ref="loginform" @submit.prevent="login">
      <h2>ログイン<br />(アカウントをお持ちでない方は<NuxtLink to="/create">作成</NuxtLink>)</h2>
      <StyledText color="red" v-if="!dialog && Message != ''">{{Message}}</StyledText>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <TextForm title="メールアドレス" required mail ref="email" />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <TextForm title="パスワード" required password ref="password" />
        </v-col>
      </v-row>
      <a @click="dialog = true"><u>パスワードをお忘れですか...?</u></a><br />
      <v-btn @click="login" :loading="loading">ログイン</v-btn>
    </v-form>
    <v-dialog v-model="dialog" width="400px">
      <v-card>
        <v-card-title>パスワードをリセット</v-card-title>
        <v-card-subtitle><StyledText :color="errorMsg != '' ? 'red' : 'black'">{{Message}}</StyledText></v-card-subtitle>
        <v-card-text>
        <v-form :disabled="loading" ref="resetform" @submit.prevent="resetEmail">
          <TextForm title="メールアドレス" required mail ref="resetEmail" />
        </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn @click="dialog = false">キャンセル</v-btn>
          <v-btn @click="reset" :loading="loading" color="red">送信</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      dialog: false,
      loading: false,
      resetEmail: "",
      errorMsg:""
    };
  },
  methods: {
    login() {
      this.loading = true;
      if (!this.$refs.loginform.validate()){
        this.loading=false
        return
      }
      this.$store
        .dispatch({
          type: "auth/signInWithVerification",
          email: this.$refs.email.value,
          password: this.$refs.password.value,
        })
        .then(() => {
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          if (error="Error: There is no user record corresponding to this identifier. The user may have been deleted."){
            this.errorMsg="おっと...ユーザーが存在しないようです..."
          } else {
            this.errorMsg=error
          }
          this.loading = false;
        });
    },
    reset() {
      this.loading = true;
      if (!this.$refs.resetform.validate()){
        this.loading=false
        return
      }
      this.$store
        .dispatch({
          type: "auth/resetPassword",
          email: this.$refs.resetEmail.value,
        })
        .then(() => {
          alert("success");
          this.resetEmail = "";
          this.dialog = false;
          this.loading = false;
        })
        .catch((error) => {
          this.errorMsg=error
          this.loading = false;
        });
    },
  },
  computed: {
    getemailVerified: function () {
      return this.$store.getters["auth/emailVerified"];
    },
    Message: function() {
      if (this.dialog){
        return "リセットURLの送信先メールアドレスを入力してください。"+this.errorMsg
      } else {
        return this.errorMsg
      }
      
    }
  },
};
</script>

<style>
</style>