<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
            nuxt
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> マナブアレルギー </v-toolbar-title>
      <v-spacer></v-spacer>
      <JumpMyPageIcon avatarIconSize="45"
                      :userIconPath="this.$store.getters['auth/photo']"/>
      <!-- <v-btn icon nuxt v-on:click="login">
        <v-icon>mdi-login-variant</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main v-touch="{right:() => {drawer=true}}">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: (e) => ({
    drawer: false,
    items: [
      { title: "トップ", to: "/" },
      { title: "ランキング", to: "/ranking" },
      { title: "スキャン", to:"/scan"},
      { title: "戦闘", to: "/battle" },
      { title: "マイページ", to: "/my-page" },
      { title: "図鑑", to: "/zukan" },
      { title: "フレンドリスト", to:"/friend"},
    ],
  }),
  methods: {
    /* login() {
      this.$router.push("/login")
    },*/
  },
};
</script>

<style>
/* ここから下は元々あったCSS */
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
