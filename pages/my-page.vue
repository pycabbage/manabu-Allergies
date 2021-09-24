<template>
  <v-container>
    <PageTitle class="MyPageTitle">マイページ</PageTitle>
    <v-row>
      <v-container class="Section">
        <h3>ユーザー情報</h3>
        <hr>
        <div class="SectionContent">
          <MyPageContent :currentValue="getName"
                         valueName="ユーザー名"
                         :updateFunc="updateProfileName"
                         :inputValidation="[inputRequire]"
                         :ThemeColor="ThemeColor"/>
          <v-btn @click="updateNameValue">
            test update
          </v-btn>
        </div>
      </v-container>
      <v-container class="Section">
        <h3>トロフィー情報</h3>
        <hr>
        <div class="SectionContent">
          あとで実装予定。トロフィーの進捗とかをグラフとしてだしたい。
        </div>
      </v-container>
      <div class="AppConfig">
        <SettingDialog DialogTitle="Configs"
                       :ToolBarColor="ThemeColor">
        <div class="ConfigSwitches"
             v-for="(conf, index) of AppConfigs" :key="index">
          <ConfigSwitch :HandledValue="conf.isValid" 
                        :ConfName="conf.name">
          </ConfigSwitch>
        </div>
        </SettingDialog>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import DataFunc from '/components/DataFuncs.vue'

export default {
  data(){
    return {
      AppConfigs: [
        {
          name: 'test option',
          isValid: true,
        },
      ],
      ThemeColor: "light-blue darken-1",
      inputRequire: value => !!value || "必ず入力してください",
    };
  },
  computed: {
    getName: DataFunc.computed.getName,
    getEmail: DataFunc.computed.getEmail,
    getId: DataFunc.computed.getId,
  },
  methods: {
    /*updateProfileName: DataFunc.methods.updateProfileName,
    updateEmail: DataFunc.methods.updateEmail,
    updatePassword: DataFunc.methods.updatePassword,*/
    updateNameValue() {
      this.updateProfileName('test');
    },
    logout() {
      return function () {
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
      };
    },
    updateProfilePhoto(e) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updateProfile",
            photo: e.target.files[0],
          })
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
      };
    },
    updateProfileName(name) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updateProfile",
            name: name,
          })
          .then(() => {
            //this.name = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    updateEmail() {
      return function (email, confirmationPassword) {
        this.$store
          .dispatch({
            type: "auth/updateEmailWithAuth",
            email: email,
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            // this.email = "";
            // this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    updatePassword(password, confirmationPassword) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updatePasswordWithAuth",
            password: password,
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            // this.password = "";
            // this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    deleteAccount() {
      return function (confirmationPassword) {
        this.$store
          .dispatch({
            type: "auth/deleteAccountWithAuth",
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            //this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
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
  margin-left: 4rem;
}

.AppConfig {
  margin-left: auto;
}

.ConfigSwitches {
  margin-top: 10px;
}
</style>
