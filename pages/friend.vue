<template>
  <v-container v-if="getEmailVerified">
    <PageTitle>フレンドリスト</PageTitle>
    <div class="FriendTabs">
      <v-tabs height="5vh">
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
      <v-card>
        <v-card-subtitle>このQRコードを使用してお友達からリクエストを送信してもらってください。<br />(あらかじめログインしたブラウザで開く必要があります。)</v-card-subtitle>
        <v-card-text><qrcodeVue :value="'https://www.cabbageqq.tk/manabu-Allergies/friend?id='+getId"></qrcodeVue></v-card-text>
      </v-card>
    </v-dialog>
    <div class="AddFriendBtn">
      <AddFriendBtn :ThemeColor="ThemeColor" :userId="$route.query.id" /><v-btn @click="QRdialog=true" color="green" large>QRコード</v-btn>
      <h3>あなたのユーザーID:{{getId}}</h3>
      
    </div>
  </v-container>
</template>

<script>
import AddFriendBtn from '../components/Btn/AddFriendBtn.vue';
import QrcodeVue from 'qrcode.vue'
export default {
  components: { AddFriendBtn, QrcodeVue },
  data: function () {
    return {
      ThemeColor: "light-blue darken-1",
      dialog: false,
      loading: false,
      requestFriendId: "",
      QRdialog:false
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
  }
};
</script>

<style>
.AddFriendBtn {
  float: left;
  position: fixed;
  bottom: 10vh;
}

.TabTexts {
  font-size: max(0.9vw, 10px);
}

.FriendTabs {
  width: 100%;
}
</style>
