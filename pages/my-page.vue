<template>
  <v-container>
    <div class="TitleWrapper">
      <PageTitle class="MyPageTitle">マイページ</PageTitle>
      <div class="AccountIconBtn">
        <AccountIconBtn :ThemeColor="ThemeColor" 
                        :userIconPath="this.$store.getters['auth/photo']"/>
      </div>
    </div>
    <v-row>
      <v-container class="Section">
        <h3>ユーザー情報</h3>
        <v-divider />
        <div class="SectionContent">
          <v-form ref="nameform">
          <TextForm title="アカウント名" icon="mdi-account" editSwitch required :defaultValue="this.$store.getters['auth/name']" @callback:changed="updateProfileName" ref="name" />
          </v-form>
          <v-form ref="mailform">
          <TextForm title="メールアドレス" editSwitch required mail :defaultValue="$store.getters['auth/email']" @callback:changed="updateEmail" @callback:pencil="show_vpasswd1=true" ref="mail" />
          <TextForm title="パスワード" required password ref="verifyPassword1" v-show="show_vpasswd1" />
          </v-form>
          <v-form ref="passwdform">
          <TextForm title="現在のパスワード" editSwitch required password defaultValue="**********" @callback:changed="updatePassword" @callback:pencil="show_vpasswd2=true" ref="password" />
          <TextForm title="新しいパスワード" required password ref="verifyPassword2" v-show="show_vpasswd2" />
          <TextForm title="新しいパスワード(確認用)" required password ref="verifyPassword3" v-show="show_vpasswd2" />
          </v-form>
          <p>ユーザーID： {{ getId }}</p>
        </div>
      </v-container>
      <v-divider />
      <v-container>
        <div class="ActionBtnWrapper">
          <LogoutBtn />
        </div>
        <div class="ActionBtnWrapper">
          <DelAccountBtn />
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import DataFunc from '/components/DataFuncs.vue'

export default {
  data(){
    return {
      ThemeColor: "light-blue darken-1",
      inputRequire: value => !!value || "必ず入力してください",
      NewValue: "test",
      show_vpasswd1: false,
      show_vpasswd2: false
    };
  },
  computed: {
    getName: DataFunc.computed.getName,
    getEmail: DataFunc.computed.getEmail,
    getId: DataFunc.computed.getId,
  },
  methods: {
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
    updateProfileName(value) {
      if (!this.$refs.nameform.validate()){
        return
      }
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          name: value,
        })
        .then(() => {
          this.$refs.name.editable=false
        })
        .catch((error) => {
          alert(error);
        });
    },
    updateEmail(value) {
      if (!this.$refs.mailform.validate()){
        return
      }
      this.$store
        .dispatch({
          type: "auth/updateEmailWithAuth",
          email: value,
          confirmationPassword: this.$refs.verifyPassword1.value,
        })
        .then(() => {
          this.$refs.mail.editable=false
          this.show_vpasswd1=false
          // this.email = "";
          // this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
    updatePassword(value) {
      if (!this.$refs.passwdform.validate()){
        return
      }
      if (this.$refs.verifyPassword2.value != this.$refs.verifyPassword3.value){
        this.loading=false
        return
      }
      this.$store
        .dispatch({
          type: "auth/updatePasswordWithAuth",
          password: value,
          confirmationPassword: this.$refs.verifyPassword2.value,
        })
        .then(() => {
          this.$refs.password.editable=false
          this.show_vpasswd2=false
          // this.password = "";
          // this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
  
}
</script>

<style>
.TextareaWrapper {
  margin-top: 2.5rem;
}

.Section {
  margin-bottom: 5rem;
}

.SectionContent {
  margin-top: 2rem;
}

.AppConfig {
  margin-left: auto;
}

.ConfigSwitches {
  margin-top: 10px;
}

.ActionBtnWrapper {
  float: right;
}

.TitleWrapper {
  margin-top: 2rem;
  margin-bottom: 2.8rem;
}
.MyPageTitle {
  display: inline;
}
.AccountIconBtn {
  display: inline;
  margin-right: 10vw;
  margin-top: 1vw;
  float: right;
}
</style>
