<template>
  <v-container>
    <PageTitle>図鑑</PageTitle>
    <v-row class="ZukanLists" >
      <div class="ZukanContent"
           v-for="(zukan, index) in ZukanContent.ZukanDatas" :key="index"
           v-if="ZukanIDs.includes( index )">
        <v-col>
          <ZukanList :ZukanContent="zukan" />
        </v-col>
      </div>
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
  },
  data() {
    return {
      ZukanIDs: [0,2],
    };
  },
}
</script>

<style>

.ZukanLists {
  margin-top: 10vh;
  margin-left: 15vh;
}

.ZukanContent {
  margin-bottom: 150px;
  margin-right: 150px;
}
</style>
