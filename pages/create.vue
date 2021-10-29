<template>
  <v-app>
    <v-form class="text-center" :disabled="loading" ref="signupform">
      <h2>アカウント作成<br />(アカウントをお持ちの方は<NuxtLink to="/login">ログイン</NuxtLink>)</h2>
      <StyledText color="red" v-if="!dialog && Message != ''">{{Message}}</StyledText>
      <v-row justify="center">
        <v-col cols="8" sm="6" md="4">
          <TextForm title="アカウント名" required ref="name" />
        </v-col>
      </v-row>
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
      <v-btn @click="verifyPasswd" :loading="loading">アカウント作成</v-btn>
      <div>#新規作成時に確認メールが送られます</div>
    </v-form>
    <v-dialog v-model="dialog" width="400px">
      <v-card>
        <v-card-title>パスワードを確認</v-card-title>
        <v-card-subtitle><StyledText :color="errorMsg != '' ? 'red' : 'black'">{{Message}}</StyledText></v-card-subtitle>
        <v-card-text>
        <v-form :disabled="loading" ref="verifyform">
          <TextForm title="パスワード" required password ref="verifyPasswd" />
        </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn @click="dialog = false">キャンセル</v-btn>
          <v-btn @click="create" :loading="loading" color="red">送信</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: function () {
    return {
      loading: false,
      dialog: false,
      name: "",
      email: "",
      password: "",
      errorMsg:""
    };
  },
  methods: {
    verifyPasswd() {
      this.loading = true;
      if (!this.$refs.signupform.validate()){
        this.loading=false
        return
      }
      this.errorMsg=""
      this.password=this.$refs.password.value
      this.name=this.$refs.name.value
      this.email=this.$refs.email.value
      this.dialog=true
      this.loading=false
    },
    create() {
      this.loading = true;
      if (!this.$refs.verifyform.validate()){
        this.loading=false
        return
      }
      if (this.$refs.verifyPasswd.value!=this.password){
        this.errorMsg="パスワードが合致しません。"
        this.loading=false
        return
      }
      this.$store
        .dispatch({
          type: "auth/createUserWithProfileVerification",
          email: this.email,
          password: this.password,
          name: this.name,
          photo: "default",
        })
        .then(() => {
          this.loading = false;
          this.$router.push("/");
        })
        .catch((error) => {
          this.dialog=false
          this.errorMsg=error
          this.loading = false;
        });
    },
  },
  computed: {
    getemailVerified: function () {
      return this.$store.getters["auth/emailVerified"] ?? true;
    },
    Message: function() {
      if (this.dialog){
        return "先ほど入力したパスワードを念のためもう一度入力してください。"+this.errorMsg
      } else {
        return this.errorMsg
      }
    }
  },
};
</script>

<style>
</style>