<template>
  <v-app id="inspire">
    <!-- ここにページを書く -->
    <v-row justify="left">
      <v-card tile>
        <v-list shaped>
          <v-subheader>リンク集</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index" :to="item" nuxt="true">
              <v-list-item-content>
                <v-list-item-title v-text="index"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        items : {
          ランキング : "/ranking",
          アカウント設定 : "/account-setting",
          マイページ : "/my-page",
          ダイアログのテスト : "/dialog-test"
        }
      }
    }
  }
</script>
