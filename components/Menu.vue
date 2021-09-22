<template>
  <v-list nav>
    <v-list-item v-for="item in items" :key="item.title" link :to="item.to" nuxt>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "Menu",
  components: true,
  data: () => {
    return {
      items: [
        { title: "トップ", to: "/" },
        { title: "ランキング", to: "/ranking" },
        { title: "戦闘", to: "/battle" },
        //{ title: "アカウント設定", to: "/account-setting" },
        { title: "マイページ", to: "/my-page" },
        { title: "ダイアログのテスト", to: "/dialog-test" },
        { title: "図鑑", to: "/zukan-index"}
      ]
    };
  }
};
</script>
