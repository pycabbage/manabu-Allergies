<template>
  <v-dialog width="1000">
    <template v-slot:activator="{ on,attrs }">
      <v-btn class="ZukanContentIcon"
             icon
             v-bind="attrs"
             v-on="on">
        <v-card :width="CardWidth"
                :height="CardWidth"
          :img="ZukanContent.Img">
          <v-card-title class="ListTitle">
            <div>
              {{ ZukanContent.Title }}
            </div>
          </v-card-title>
        </v-card>
      </v-btn>
    </template>
    <v-card>
      <ZukanContentPage :ZukanContent="ZukanContent" />
    </v-card>
  </v-dialog>
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
.ZukanContentIcon {
  margin-top: 3rem;
  margin-left: 5rem;
}

.ListTitle {
  padding-top:50%;
}
</style>
