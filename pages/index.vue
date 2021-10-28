<template>
  <v-container class="mt-16">
    <v-row align-content="center" justify="center">
      <v-img src="icon.png" width="50%" :aspect-ratio="1/1" contain />
      <StyledText size="2vw" color="#000">マナブアレルギーへようこそ！</StyledText>
    </v-row>
    <v-row justify="center">
      <v-spacer />
      <v-btn link nuxt to="battle" color="red" height="10vw" width="30vw"><StyledText size="2.5vw" icon="mdi-sword" color="#151311">クイズでバトル！</StyledText></v-btn>
      <v-spacer />
      <v-btn link nuxt to="scan" color="green" height="10vw" width="30vw"><StyledText size="2.5vw" icon="mdi-magnify" color="#151311">スキャンして探す！</StyledText></v-btn>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      height:10,
      width:20
    }
  }
}
</script>

<style>
.TopImg {
  margin-left: auto;
  margin-right: auto;
}

.TopTitle {
  font-size:1vw;
  font-weight: bold;
}

.BattleBtn {
  width: 100%;
  text-align: center;
}

.ScanBtn {
  width: 100%;
  text-align: center;
}

.BtnTexts {
  padding-top: 1.5vw;
}

.BattleBtnText {
  font-size: 2vw;
  font-weight: bold;
}

.ScanBtnText {
  font-size: 2vw;
  font-weight: bold;
}
</style>
