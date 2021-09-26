<template>
  <v-container>
    <PageTitle>図鑑</PageTitle>
    <v-row class="ZukanLists" >
      <div class="ZukanContent"
           v-for="(zukan, index) in ZukanContent" :key="index">
          <v-col>
            <ZukanList :ZukanContent="zukan" />
          </v-col>
        </div>
    </v-row>
  </v-container>
</template>

<script>
import Data from "../plugins/data";

export default {
  async asyncData() {
    const db = await Data.init("private");
    await db.set("zukanID", [0,1,2]);
    const zukans = require("~/assets/ZukanDatas.json");
    return { 
      zukans: zukans.ZukanDatas, 
      db: db ,
      dbList: await db.get("zukanID")
    };
  },
  methods: {
    async ZukanIDSet(value) {
      var newVal = await this.db.get("zukanID");
      await newVal.push(value);
      await this.db.set("zukanID", newVal);
    },
    isHasTheZukan(index) {
      const currentIDs = this.dbList;
      const result = currentIDs.includes(index);
      return result;
    },
  },
  computed: {
    ZukanContent() {
      var zukanTemp = [];
      for(var i=0,len=this.zukans.length; i<len; i++){
        console.log(this.isHasTheZukan(i));
        if(this.isHasTheZukan(i) == true) {
          console.log(i);
          zukanTemp.push(this.zukans[i]);
        }
      }
      return zukanTemp;
    },
  },
}
</script>

      <style>

.ZukanLists {
  margin-top: 10vh;
  margin-left: 10vw;
}

.ZukanContent {
  margin-bottom: max(8vw, 80px);
  margin-right: max(8vw, 80px);
}
</style>
