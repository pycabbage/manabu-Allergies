<template>
  <v-card class="RankingCardRoot">
    <i class="RankingTexts"
       :style="rankingNumberColor">
      {{ rankingNumber }} .
    </i>
    <v-progress-linear class="ScoreBar"
                       :color="themeColor"
                       :height="scoreBarHeight"
                       :value="userScore"
                       striped>
      {{ userScore }}</v-progress-linear>
    <v-card-text class="RankingTexts">{{ userName }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    rankingNumber: {
      type: Number,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    userScore: {
      type: Number,
      require: true,
    },
    themeColor: {
      type: String,
      require: true,
    },
    scoreBarHeight: {
      type: Number,
      require: false,
      default: 50,
    },
  },
  computed: {
    rankingNumberColor() {
      if(this.rankingNumber === 1) return "color: #ffd700;"
      else if(this.rankingNumber === 2) return "color: #c0c0c0;"
      else if(this.rankingNumber === 3) return "color: #ff8c00;"
      return "color: #000000";
    },
  },
}
</script>

<style>
.RankingCardRoot {
  margin-bottom: 2rem;
}

.RankingTexts {
  text-align: right;
  font-size: 2rem;
  font-family: 'Impact';
  padding-right: 3rem;
}

i.RankingTexts {
  margin-left: 0.5rem;
}

.ScoreBar {
  width: 100rem;
  margin-right: 3rem;
  margin-left: 3rem;
}
</style>
