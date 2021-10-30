<template>
  <v-container>
    <PageTitle>図鑑</PageTitle>
    <v-row class="ZukanLists">
      <div
        class="ZukanContent"
        v-for="(zukan, index) in ZukanContent"
        :key="index"
      >
        <v-col>
          <ZukanList :ZukanContent="zukan" />
        </v-col>
      </div>
      <h3 v-if="ZukanContent.length == 0">まだ図鑑にはなにもないようです。</h3>
    </v-row>
  </v-container>
</template>

<script>
import Data from "/plugins/data";
/*export default {
  async asyncData() {
    const db = await Data.init("public");
    const tempdb = await db.get("zukanID");
    if(tempdb.isArray !== true) {
      await db.set("zukanID", []);
    }
    const zukans = require("~/assets/ZukanDatas.json");
    return { 
      zukans: zukans.ZukanDatas, 
      db: db ,
      dbList: await db.get("zukanID")
    };
  },
  async ZukanIDSet(value) {
    var newVal = dbList;
    await newVal.push(value);
    await this.db.set("zukanID", newVal);
  },
}*/

export default {
  async asyncData() {
    const db = await Data.init("public");
    const tempdb = await db.get("zukanID");
    if (Array.isArray(tempdb) !== true) {
      await db.set("zukanID", []);
    }
    const zukans = require("~/assets/ZukanDatas.json");
    return {
      zukans: zukans.ZukanDatas,
      db: db,
      dbList: await db.get("zukanID"),
    };
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    async ZukanIDSet(value) {
      var newVal = this.dbList;
      await newVal.push(value);
      await this.db.set("zukanID", newVal);
    },
    isHasTheZukan(index) {
      const currentIDs = this.dbList;
      console.log(currentIDs);
      const result = currentIDs.includes(index);
      return result;
    },
  },
  computed: {
    ZukanContent() {
      var zukanTemp = [];

      for (var i = 0, len = this.zukans.length; i < len; i++) {
        if (this.isHasTheZukan(i) == true) {
          zukanTemp.push(this.zukans[i]);
        }
      }
      return zukanTemp;
    },
  },
};
</script>
<style>
.ZukanLists {
  margin-top: 10vh;
  margin-left: 8vw;
}

.ZukanContent {
  margin-bottom: max(8vw, 80px);
  margin-right: max(8vw, 80px);
}
</style>
