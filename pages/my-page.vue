<template>
  <v-container>
    <div class="TitleWrapper">
      <PageTitle class="MyPageTitle">マイページ</PageTitle>
    </div>
    <v-row>
      <v-container>
        <h3>ユーザー情報</h3>
        <v-divider style="border-color:black"/>
        <div class="SectionContent">
          <v-form ref="nameform">
          <AccountIconBtn :userIconPath="this.$store.getters['auth/photo']"/>
          <TextForm title="アカウント名" editSwitch required :defaultValue="this.$store.getters['auth/name']" @callback:changed="updateProfileName" ref="name" />
          </v-form>
          <v-divider />
          <v-form ref="mailform">
          <TextForm title="メールアドレス" editSwitch required mail :defaultValue="$store.getters['auth/email']" @callback:changed="updateEmail" @callback:pencil="show_vpasswd1=true" @callback:close="show_vpasswd1=false" ref="mail" />
          <TextForm title="パスワード(確認のため入力してください)" required password ref="verifyPassword1" v-show="show_vpasswd1" />
          </v-form>
          <v-divider />
          <v-form ref="passwdform">
          <TextForm title="現在のパスワード" editSwitch required password defaultValue="**********" @callback:changed="updatePassword" @callback:pencil="show_vpasswd2=true" @callback:close="show_vpasswd2=false" ref="password" />
          <TextForm title="新しいパスワード" required password ref="verifyPassword2" v-show="show_vpasswd2" />
          <TextForm title="新しいパスワード(確認用)" required password ref="verifyPassword3" v-show="show_vpasswd2" />
          </v-form>
          <v-divider />
          <p>ユーザーID： {{ getId }}</p>
        </div>
      </v-container>
      <v-container>
        <h3>各種操作</h3>
        <v-divider style="border-color:black" />
        <div>
          <LogoutBtn style="float: left" /><v-spacer /><DelAccountBtn style="float: right" />
        </div>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import LogoutBtn from '../components/Btn/LogoutBtn.vue';
import DelAccountBtn from '../components/Btn/DelAccountBtn.vue';
import DataFunc from '/components/DataFuncs.vue'
import AccountIconBtn from '../components/Btn/AccountIconBtn.vue';

export default {
  components: { LogoutBtn, DelAccountBtn, AccountIconBtn },
  data(){
    return {
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
  margin-bottom: 2.5rem;
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
  float: none;
}

.TitleWrapper {
  margin-top: 2rem;
  margin-bottom: 2.8rem;
}
.MyPageTitle {
  display: inline;
}
.AccountIconBtn {
  margin-right: 10vw;
  margin-top: 1vw;
  float: right;
}
</style>
