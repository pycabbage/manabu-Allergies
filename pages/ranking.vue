<template>
  <v-app id="ranking">
    <div class="RankingWrapper">
      <v-container>
        <PageTitle>ランキング</PageTitle>
        <div class="RankingContent">
          <div v-for="(data, index) of sortedDatas" :key="index">
            <RankingCard :rankingNumber="index + 1"
                         :userName="data.name"
                         :userScore="data.score"
                         :themeColor="ThemeColor" />
          </div>
        </div>
      </v-container>
    </div>
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
.RankingWrapper {
  width: 95vw;
  margin-left: 2vw;
}

.RankingContentsWrapper {
  margin-top: 2rem;
  margin-right: 2%;
  margin-left: 2%;
}

.RankingContent {
  width: 100%;
}
</style>
