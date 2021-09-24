<template>
  <!-- <v-app id="ranking"> -->
    <v-container class="RankingWrapper">
      <PageTitle>ランキング</PageTitle>
        <v-row class="RankingContentsWrapper">
          <div class="RankinguContent"
               v-for="(data, index) of sortedDatas" :key="index">
            <RankingCard :rankingNumber="index + 1"
                         :userName="data.name"
                         :userScore="data.score"
                         :themeColor="ThemeColor" />
          </div>
        </v-row>
    </v-container>
  <!-- </v-app> -->
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
    sortedDatas() {
      var sortedDatasArray = this.datas;
      sortedDatasArray.sort((a, b)=> {            //降順にソートするコード。
        var aValue = a.score, bValue = b.score;
        if (aValue < bValue) return 1;
        else if (aValue > bValue) return -1;
        else return 0;
      });
      return sortedDatasArray;
    },
  }
}
</script>

<style>
.RankingContentsWrapper {
  margin-top: 2rem;
  margin-right: 2vw;
  margin-left: 2vw;
}

/*.RankingContent {
  width: 80vw;
}*/
</style>
