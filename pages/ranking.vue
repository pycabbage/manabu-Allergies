<template>
  <div>
    <PageTitle>ランキング</PageTitle>
    <v-card v-for="(rank, index) in ranks" :key="index">
      <v-card-text>{{index+1}}位<v-spacer /><AvatarIcon :userIconPath="rank.value.photo" avatarIconSize="5vw" /></v-card-text>
      <v-card-subtitle>{{ rank.value.name }}</v-card-subtitle>
      <v-progress-linear
      color="blue"
      height="3vw"
      :value="(100*rank.value.point)/ranks[0].value.point"
      striped
      >{{ rank.value.point }}Point</v-progress-linear>
    </v-card>
  </div>
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