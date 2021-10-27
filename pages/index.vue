<template>
  <v-container class="mt-16">
    <v-card>
    <v-card-title justify="center" align="right">
    <v-img src="icon.png" height="30vw" width="30vw" contain class="justify-left"><p>マナブアレルギーへようこそ！</p></v-img>
    </v-card-title>
    <v-divider />
    <v-card-actions justify="center">
      <v-row>
          <v-btn link nuxt to="battle" color="red" height="10vw" width="30vw"><StyledText size="2.5vw" icon="mdi-sword" color="#151311">クイズでバトル！</StyledText></v-btn>
          <v-spacer />
          <v-btn link nuxt to="scan" color="green" height="10vw" width="30vw"><StyledText size="2.5vw" icon="mdi-magnify" color="#151311">スキャンして探す！</StyledText></v-btn>
      </v-row>
    </v-card-actions>
    </v-card>
    
    
  </v-container>
</template>

<script>
export default {
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
