<template>
  <v-card>
    <i class="RankingTexts">{{ rankingNumber }}</i>
    <v-progress-linear :color="themeColor"
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
  }
}
</script>

<style>
.RankingTexts {
  font-size: 2rem;
  font-family: 'Impact';
}
</style>
