<template>
  <v-container class="mt-16">
    <v-carousel cycle show-arrows-on-hover>
      <v-carousel-item style="background: green;" contain reverse-transition="fade-transition" transition="fade-transition">
        <h1>マナブアレルギーへようこそ！</h1>
        <v-img src="./icon.png" contain height="100%"/>
      </v-carousel-item>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-sheet color="blue" height="100%" tile>
          <v-row >
            <v-col justify="start" align-self="start" cols="12">
              <h1 >ここから始めよう!</h1>
            </v-col>
            <v-col justify="end" align-self="center" cols="12">
              <div>
                <v-btn link nuxt to="battle" color="red" height="10vw" width="30vw" v-if="Name != ''" ><StyledText size="2.5vw" icon="mdi-sword" color="#151311" >クイズでバトル！</StyledText></v-btn>
                <v-btn link nuxt to="login" color="red" height="10vw" width="30vw" v-else><StyledText size="2.5vw" icon="mdi-login" color="#151311">ログイン</StyledText></v-btn>
              </div>
              <div>
                <v-btn link nuxt to="scan" color="green" height="10vw" width="30vw" v-if="Name != ''" ><StyledText size="2.5vw" icon="mdi-magnify" color="#151311">スキャンして探す！</StyledText></v-btn>
                <v-btn link nuxt to="create" color="green" height="10vw" width="30vw" v-else ><StyledText size="2.5vw" icon="mdi-account-plus" color="#151311">アカウント作成</StyledText></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item reverse-transition="fade-transition" transition="fade-transition">
        <v-sheet color="blue" height="100%" style="text-align: center;" tile>
          <h1>もっと多くの人に!</h1>
          <v-spacer />
          <QrcodeVue size="400" value="https://www.cabbageqq.tk/manabu-Allergies/"></QrcodeVue>
        </v-sheet>
     </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
import DataFunc from '/components/DataFuncs.vue'
import QrcodeVue from 'qrcode.vue'
export default {
  data(){
    return {
      height:10,
      width:20,
    }
  },
  computed :{
    Name: DataFunc.computed.getName,
  },
  components:{QrcodeVue}
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
