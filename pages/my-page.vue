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
    updateProfileName: DataFunc.methods.updateProfileName,
    updateEmail: DataFunc.methods.updateEmail,
    updatePassword: DataFunc.methods.updatePassword,
  },
}
</script>

<style>
.MyPageTitle {
  margin-top: 50px;
  margin-bottom: 70px;
}

.TextareaWrapper {
  margin-top: 30px;
}

.Section {
  margin-bottom: 30px;
}

.SectionContent {
  margin-top: 30px;
  margin-left: 50px;
}

.UpdateConfigBtn {
  margin-left: 70%;
  margin-bottom:20px;
}

.AppConfig {
  margin-left: auto;
}

.ConfigSwitches {
  margin-top: 10px;
}
</style>
