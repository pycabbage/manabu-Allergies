<template>
  <NuxtLink :to="PagePath">
    <v-card :width="CardWidth"
            :height="CardWidth"
      :img="ZukanContent.Img">
      <v-card-title class="ListTitle">
        <div>
          {{ ZukanContent.Title }}
        </div>
      </v-card-title>
    </v-card>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    ZukanContent: {
      type:Object,
      require:true,
    },
  },
  data(){
    return {
      CardWidth: 150,
    };
  },
  computed: {
    PagePath() {
      return "zukan-contents/" + this.ZukanContent.PageFileName;
    },
  },
}
</script>

<!--
説明文のZukanContent想定フォーマット
ZukanContent = {
  Title: "図鑑のタイトル",
  Img: "図鑑に表示される画像のパス",
  PageFileName: "説明等が書かれたvueのファイル名",
  Description:{
    タイトル１:"説明文...",
    タイトル２:"説明文...",
              .
              .
              .
    タイトルn :"説明文..."
  },
}
-->

<style>
.ListTitle {
  padding-top:50%;
}
</style>
