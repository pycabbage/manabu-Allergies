<template>
  <div>
    <div v-for="ranks in rank" :key="ranks.id">
      <v-card>
        <img src="ranks.value.photo" />
        <div>{{ ranks.value.name }}</div>
        <div>{{ ranks.value.point }}</div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Data from "../plugins/data";
export default {
  data: function () {
    return {
      rank: [],
    };
  },
  // mounted: async function () {
  //   const db = await Data.init("public");
  //   this.rank = await db.getAll();
  //   console.log(await db.getPoint());
  //   await db.setPoint(1);
  //   console.log(await db.getPoint());
  // },
};
</script>

<style>
</style>