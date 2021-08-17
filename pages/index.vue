<template>
  <v-app id="inspire">
    <!-- ここにページを書く -->
    <ContentCollections CollectionName="リンク集">
    <template v-slot:CollectionContent>
      <v-list-item v-for="(item, index) in items" :key="index" :to="item" nuxt>
        <v-list-item-content>
          <v-list-item-title v-text="index"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    </ContentCollections>
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
