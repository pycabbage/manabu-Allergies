<template>
  <div>
    <v-btn @click="addfrienddialog = true" color="#8ccb00" large>
      <v-icon color="white">mdi-account-plus</v-icon>
      <StyledText color="white">Add Friend</StyledText>
    </v-btn>
    <v-dialog v-model="addfrienddialog" width="400px">
      <v-card>
        <v-card-title>フレンドリクエスト送信</v-card-title>
        <v-divider />
        <v-card-subtitle>
          フォームにお友達のユーザーIDを入力するとお友達にフレンドリクエストが送信されます。<br />お友達がフレンドリクエストを承認すると、フレンドとして登録されます。
        </v-card-subtitle>
        <v-card-text>
          <StyledText color="red">{{errorMsg}}</StyledText>
          <v-form ref="form" :disabled="loading">
            <TextForm ref="requestFriendId" title="Friend's User ID" icon="mdi-account-outline" required :defaultValue="userId" />
          </v-form>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn @click="addfrienddialog = false" :disabled="loading">キャンセル</v-btn>
          <v-btn @click="requestFriend" color="green" :loading="loading">送信</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    ThemeColor: {
      type: String,
      require: true,
    },
    userId:{
      type: String,
      require: false,
      default:""
    }
  },
  data() {
    return {
      addfrienddialog: false,
      errorMsg:"",
      loading:false
    };
  },
  methods: {
    requestFriend() {
      this.loading = true;
      if (!this.$refs.form.validate()){
        this.loading=false
        return
      }
      this.$store
        .dispatch({
          type: "friend/requestFriend",
          id: this.$refs.requestFriendId.value,
        })
        .then(() => {
          this.loading = false;
          this.dialog = false;
        })
        .catch((error) => {
          if (error == "Error: same"){
            this.errorMsg="自分自身を追加することはできません...!"
          } else {
            this.errorMsg=error
          }
          this.loading = false;
        });
    }
  },
  mounted: function(){
    if (this.userId != ""){
      this.addfrienddialog = true
    }
  }
}
</script>

<style>
.DialogTexts {
  color: white;
}
</style>
