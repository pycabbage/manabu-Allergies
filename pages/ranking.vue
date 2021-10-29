<template>
  <ol>
    <li v-for="(rank, index) in ranks" :key="rank.id">
      <v-card>
        <div>{{index+1}}位</div>
        <AvatarIcon :userIconPath="rank.value.photo" avatarIconSize="5vw" />
        <div>{{ rank.value.name }}</div>
        <v-progress-linear
        color="light-blue"
        height="3vw"
        :value="rank.value.point"
        striped
        >{{ rank.value.point }}ぽいんちょ</v-progress-linear>
        
      </v-card>
    </li>
  </ol>
</template>

<script>
import Data from "../plugins/data";
export default {
  data: function () {
    return {
      ranks: [],
    };
  },
  mounted: async function () {
    const db = await Data.init("public");
    this.ranks = await db.getAll();
    //console.log(await db.getPoint());
    //await db.setPoint(1);
    //console.log(await db.getPoint());
  },
};
</script>

<style>
</style>