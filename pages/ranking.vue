<template>
  <v-app id="ranking">
    <v-container>
      <PageTitle>ランキング</PageTitle>
        <v-row class="RankingContent">
          <div v-for="(data, index) of datas" :key="index">
            <RankingCard :rankingNumber="index + 1"
              :userName="data.name"
              :userScore="data.score"
              :themeColor="ThemeColor" />
          </div>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          name: 'bob',
          score: 80,
        },
        {
          name: 'john',
          score: 90,
        },
        {
          name: 'mary',
          score: 70,
        },
        {
          name: 'tarou',
          score: 100,
        },
        {
          name: 'hanako',
          score: 50,
        },
      ],
      ThemeColor: "light-blue darken-1",
    };
  },
  computed:{
    sort_data : function(){
      var obj=this.datas
      var array = Object.keys(obj).map((k)=>({ key: k, value: obj[k] }));
      array.sort((a, b) =>  - b.value-a.value);
      obj = Object.assign({}, ...array.map((item) => ({
        [item.key]: item.value,
      })));
      return obj
    }
  }
}
</script>

<style>
.RankingContent {
  margin-top: 2rem;
  margin-left: 4rem;
}
</style>
