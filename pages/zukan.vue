<template>
  <v-container>
    <PageTitle>図鑑</PageTitle>
    <v-row class="ZukanLists" >
      <div class="ZukanContent"
           v-for="(zukan, index) in ZukanContent.ZukanDatas" :key="index">
        <div v-show="isHasTheZukan(index)">
          <v-col>
            <ZukanList :ZukanContent="zukan" />
          </v-col>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Data from "../plugins/data";

export default {
  async asyncData() {
    const db = await Data.init("private");
    await db.set("zukanID", [0,1]);
    const ZukanContent = require("~/static/ZukanDatas.json");
    return { 
      ZukanContent: ZukanContent, 
      db: db 
    };
  },
  methods: {
    async ZukanIDSet(value) {
      var newVal = await this.db.get("zukanID");
      await newVal.push(value);
      await this.db.set("zukanID", newVal);
    },
    async isHasTheZukan(index) {
      const currentIDs = await this.db.get("zukanID");
      return await currentIDs.includes(index);
    },
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
