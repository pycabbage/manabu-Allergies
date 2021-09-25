<template>
  <v-container>
    <PageTitle class="MyPageTitle">マイページ</PageTitle>
    <v-row>
      <v-container class="Section">
        <h3>ユーザー情報</h3>
        <hr>
        <div class="SectionContent">
          <MyPageUserName :currentValue="getName"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
          <p>ユーザーID： {{ getId }}</p>
          <MyPageEmail :currentValue="getEmail"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
          <MyPagePassword currentValue="*************"
                          :inputValidation="[inputRequire]"
                          :ThemeColor="ThemeColor"/>
        </div>
      </v-container>
      <v-container class="Section">
        <h3>トロフィー情報</h3>
        <hr>
        <div class="SectionContent">
          あとで実装予定。トロフィーの進捗とかをグラフとしてだしたい。
        </div>
      </v-container>
      <v-container>
        <div class="LogoutBtnWrapper">
          <LogoutBtn />
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
    deleteAccount() {
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

.LogoutBtnWrapper {
  float: right;
}
</style>
