<template>
  <v-container class="mt-16">
    <v-row class="mb-16"
           justify="center">
      <v-img src="icon.png" 
             height="42vw"
             contain/>
    </v-row>
    <v-row class="mt-16"
           justify="center">
      <p class="TopTitle">マナブアレルギーへようこそ！</p>
    </v-row>
    <div class="PageBtns">
      <v-row justify="center">
        <v-col cols="6">
          <div class="BattleBtn">
            <NuxtLink style="text-decoration:none;"
                      to="battle">
            <v-card width="100%"
                    height="10vw"
                    color="#ff3f49">
              <v-icon class="mt-2"
                      color="#151311"
                      size="5vw">mdi-sword</v-icon>
              <p class="BattleBtnText">クイズでバトル！</p>
            </v-card>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="6">
          <div class="ScanBtn">
            <NuxtLink style="text-decoration:none;"
                      to="scan">
              <v-card width="100%"
                      height="10vw"
                      color="#00ff6b">
                <v-icon class="mt-2"
                        color="#151311"
                        size="5vw">mdi-magnify</v-icon>
                <p class="ScanBtnText">スキャンして探す！</p>
              </v-card>
            </NuxtLink>
          </div>
        </v-col>
      </v-row>
    </div>
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
  font-size: 5vw;
  font-weight: bold;
}

.PageBtns {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}

.BattleBtn {
  width: 100%;
  text-align: center;
}

.ScanBtn {
  width: 100%;
  text-align: center;
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
