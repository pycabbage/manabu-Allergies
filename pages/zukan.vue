<template>
  <v-container>
    <PageTitle class="ZukanIndexTitle">図鑑目次</PageTitle>
    <v-row class="ZukanLists">
      <v-col cols="2" v-for="(zukan, index) in ZukanContent.ZukanDatas" :key="index">
        <ZukanList :ZukanContent="zukan" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData() {
    const ZukanContent = require("~/static/ZukanDatas.json");
    return {
      ZukanContent
    };
  }
}
</script>

<style>
.ZukanIndexTitle {
  margin-top:50px;
  margin-bottom:50px
}

.ZukanLists {
  margin-right:60px;
  margin-left:100px;
}
</style>
      <!-- ZukanContent: [ --> 
      <!--   { -->
      <!--     Title: "テスト1用", -->
      <!--     Img: "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg", -->
      <!--     PageFileName: "test",   //ここは常に英数字。日本語等はダメ。 -->
      <!--     Description: [ -->
      <!--       { -->
      <!--         title:"test1-1", -->
      <!--         content:"これはテストです。" -->
      <!--       }, -->
      <!--       { -->
      <!--         title: "test1-2", -->
      <!--         content: "これはテスト２です。" -->
      <!--       }, -->
      <!--     ], -->
      <!--   }, -->
      <!--   { -->
      <!--     Title: "テスト2用", -->
      <!--     Img: "https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg", -->
      <!--     PageFileName: "test",   //ここは常に英数字。日本語等はダメ。 -->
      <!--     Description: [ -->
      <!--       { -->
      <!--         title:"test2-1", -->
      <!--         content:"これはテストです。" -->
      <!--       }, -->
      <!--       { -->
      <!--         title: "test2-1", -->
      <!--         content: "これはテスト２です。" -->
      <!--       }, -->
      <!--     ], -->
      <!--   }, -->
      <!-- ] -->
