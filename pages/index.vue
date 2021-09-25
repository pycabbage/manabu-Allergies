<template>
  <v-app id="inspire">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
          :complete="e1 > 1"
          step="1"
        >
          Introduction
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="e1 > 2"
          step="2"
        >
          How to...
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          More Features
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="100px"
          >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">マナブアレルギーへようこそ。</v-list-item-title>
              <v-list-item-subtitle>これは、マナブアレルギーのゲテ...素晴らしいアイコンです。</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-card>
          <SvgIcon />
          <v-btn
            color="primary"
            @click="e1 = 2"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="100px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="100px"
          ></v-card>

          <v-btn
            color="primary"
            @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
/*      items : {
        ランキング : "/ranking",
        アカウント設定 : "/account-setting",
        マイページ : "/my-page",
        ダイアログのテスト : "/dialog-test",
        図鑑目次: "/zukan-index",
      },*/
    };
  },
}
</script>
