<template>
  <div class="MyPageContentWrapper">
    {{ valueName }}： {{ currentValue }}
    <div class="OpenSetting">
      <SettingDialog DialogTitle="User Setting" 
                     :ToolBarColor="ThemeColor" >
        <v-card-text class="TextareaWrapper">
          <v-form v-model="formValid" 
                  ref="form"
                  @submit.prevent>
            <v-text-field v-model="NewValue"
                          :label="'新しい' + valueName"
                          :rules="inputValidation"
                          :append-icon="showInput1Pass.icon"
                          :type="showInput1Pass.type"
                          autocomplete="on"
                          @click:append="showInput1 = !showInput1"
                          @keyup.enter="updatePassword"/>
            <v-text-field v-model="CheckNewValue"
                          label="確認のため再度入力してください"
                          :rules="inputValidation"
                          :append-icon="showInput2Pass.icon"
                          :type="showInput2Pass.type"
                          autocomplete="on"
                          @click:append="showInput2 = !showInput2"
                          @keyup.enter="updatePassword"/>
            <v-text-field v-model="currentPassword"
                          label="現在のパスワード"
                          :rules="inputValidation"
                          :append-icon="showInput3Pass.icon"
                          :type="showInput3Pass.type"
                          autocomplete="on"
                          @click:append="showInput3 = !showInput3"
                          @keyup.enter="updatePassword"/>
          </v-form>
        </v-card-text>
        <v-btn class="UpdateConfigBtn"
               @click="updatePassword"
               :color="ThemeColor"
               :disabled="!formValid">
          <BtnText>UPDATE</BtnText>
        </v-btn>
      </SettingDialog>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentValue: {
      type: String,
      require: true,
    },
    inputValidation: {
      type: Array,
      require: true,
    },
    ThemeColor: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      NewValue: "",
      CheckNewValue: "",
      currentPassword: "",
      valueName: "パスワード",
      formValid: true,
      passwordHideIcon: "mdi-eye",
      passwordNotHideIcon: "mdi-eye-off",
      showInput1: false,
      showInput2: false,
      showInput3: false,
    };
  },
  computed: {
    showInput1Pass() {
      var icon = this.showInput1 ? this.passwordHideIcon : this.passwordNotHideIcon;
      var type = this.showInput1 ? "text" : "password";
      return { icon, type }
    },
    showInput2Pass() {
      var icon = this.showInput2 ? this.passwordHideIcon : this.passwordNotHideIcon;
      var type = this.showInput2 ? "text" : "password";
      return { icon, type }
    },
    showInput3Pass() {
      var icon = this.showInput3 ? this.passwordHideIcon : this.passwordNotHideIcon;
      var type = this.showInput3 ? "text" : "password";
      return { icon, type }
    },
  },
  methods: {
    updatePassword(password, confirmationPassword) {
      this.$store
        .dispatch({
          type: "auth/updatePasswordWithAuth",
          password: this.NewValue,
          confirmationPassword: confirmationPassword,
        })
        .then(() => {
          // this.password = "";
          // this.confirmationPassword = "";
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>

<style>
.OpenSetting {
  float: right;
}

.UpdateConfigBtn {
  margin-left: 78%;
  margin-bottom: 3%;
}

.MyPageContentWrapper {
  margin-bottom: 2vh;
}
</style>
