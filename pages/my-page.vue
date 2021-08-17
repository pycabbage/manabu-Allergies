<template>
  <v-container>
    <v-col>
      <v-container class="Section">
        <h3>ユーザー情報</h3>
        <hr>
        <div class="SectionContent">
          <div class="OpenSetting">
            <SettingDialog DialogTitle="User Setting"
                           :ToolBarColor="ThemeColor">
              <v-card-text class="TextareaWrapper">
                <div v-for="p of HandledUserProperty">
                  <ConfigTextarea :TextareaLabel="'New user ' + p"/>
                  <!-- 実際にユーザー名変更する処理はまだ。今は見た目だけ。 -->
                </div>
              </v-card-text>
              <v-btn  class="UpdateConfigBtn"
                      :color="ThemeColor">
                UPDATE
              </v-btn>
            </SettingDialog>
          </div>
          <p>ユーザー名:{{ User.name }}</p>
          <p>ユーザーID:{{ User.id }}</p>
          <p>メールアドレス:{{ User.email }}</p>
          <p>電話番号:{{ User.tel }}</p>
        </div>
      </v-container>
      <v-container class="Section">
        <h3>トロフィー情報</h3>
        <hr>
        <div class="SectionContent">
          あとで実装予定。トロフィーの進捗とかをグラフとしてだしたい。
        </div>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      User: {
        id: 'tarou123',
        name:'太郎',
        age: 20,
        email: 'tarou@yamada',
        tel: 'xxx-xxxx',
        icon: 'AnonymousIcon.png',
      },
      HandledUserProperty: ["id","name","email"],
      ThemeColor: "light-blue darken-1",
    };
  },
  methods: {
    UpdateConfigValue() {
      //あとで実装予定。ユーザー名とか変更できるようにしたい。
    },
  }
}
</script>

<style>
.OpenSetting {
  float:right;
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
</style>
