<template>
  <v-container v-if="getEmailVerified">
    <PageTitle>フレンド</PageTitle>
    <div class="FriendTabs">
      <v-tabs>
        <v-tab>
          <span class="TabTexts">Friend List</span>
        </v-tab>
        <v-tab>
          <span class="TabTexts">Friend Request List</span>
        </v-tab>
        <v-tab>
          <span class="TabTexts">You Requested List</span>
        </v-tab>
        <v-tab-item>
          <CurrentFriendList />
        </v-tab-item>
        <v-tab-item>
          <FriendRequestList />
        </v-tab-item>
        <v-tab-item>
          <FriendRequestedList />
        </v-tab-item>
      </v-tabs>
    </div>
    <v-dialog v-model="QRdialog">
      <v-tabs>
        <v-tab>
          <span class="TabTexts">表示</span>
        </v-tab>
        <v-tab>
          <span class="TabTexts">読み取り</span>
        </v-tab>
        <v-tab-item>
          <v-card>
            <v-card-subtitle>このQRコードを使用してお友達からリクエストを送信してもらってください。<br />(あらかじめログインしたブラウザで開く必要があります。)</v-card-subtitle>
            <v-card-text><qrcodeVue :value="'https://www.cabbageqq.tk/manabu-Allergies/friend?id='+getId"></qrcodeVue></v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-subtitle>QRコードを読み取ります。枠の中に入るように調整してください。</v-card-subtitle>
            <StyledText color="red" v-if="error != ''">{{error}}</StyledText>
            <v-card-text><QrcodeStream @decode="onDecode" :track="tracking" @init="onInit"></QrcodeStream></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
    <div class="AddFriendBtn">
      <AddFriendBtn :ThemeColor="ThemeColor" :userId="uid" ref="addBtn"/><v-btn @click="QRdialog=true" color="green" large><StyledText icon="mdi-qrcode">QRコード</StyledText></v-btn>
      <h3>あなたのユーザーID:{{getId}}</h3>
    </div>
  </v-container>
</template>
<script>
import AddFriendBtn from '../components/Btn/AddFriendBtn.vue';
import QrcodeVue from 'qrcode.vue';
import { QrcodeStream } from 'vue-qrcode-reader';
import CurrentFriendList from '../components/Friend/CurrentFriendList.vue';
import FriendRequestedList from '../components/Friend/FriendRequestedList.vue';
import FriendRequestList from '../components/Friend/FriendRequestList.vue';
export default {
  components: { AddFriendBtn, QrcodeVue, CurrentFriendList, FriendRequestedList, FriendRequestList, QrcodeStream },
  data: function () {
    return {
      ThemeColor: "light-blue darken-1",
      dialog: false,
      loading: false,
      requestFriendId: "",
      QRdialog:false,
      uid:this.$route.query.id,
      error:""
    };
  },
  computed: {
    isTabVertical() {
      if(window.innerWidth > 500){
        return false;
      }
      else {
        return true;
      }
    },
    getEmailVerified: function () {
      return this.$store.getters["auth/emailVerified"];
    },
    getId: function () {
      return this.$store.getters["auth/id"];
    },
    getEmail: function () {
      return this.$store.getters["auth/email"];
    },
    getName: function () {
      return this.$store.getters["auth/name"];
    },
    getPhoto: function () {
      return this.$store.getters["auth/photo"];
    },
  },
  methods:{
    onDecode(text){
      var parser = new URL(text);
      if (parser.searchParams.has("id")){
        this.uid=parser.searchParams.get("id")
        this.$refs.addBtn.showDialog()
      }
    },
    tracking(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [ firstPoint, ...otherPoints ] = detectedCode.cornerPoints

        ctx.strokeStyle = "red";

        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    }
  }
};
</script>

<style>
.AddFriendBtn {
  float: left;
  bottom: 10vh;
}

.TabTexts {
  font-size: max(0.9vw, 10px);
}

.FriendTabs {
  width: 100%;
}
</style>
