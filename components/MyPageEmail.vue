<template>
  <div class="MyPageContentWrapper">
    {{ valueName }}： {{ currentValue }}
    <div class="OpenSetting">
      <SettingDialog DialogTitle="User Setting" 
                     :ToolBarColor="ThemeColor">
        <v-card-text class="TextareaWrapper">
          <v-form v-model="formValid" 
                  ref="form"
                  @submit.prevent>
            <v-text-field v-model="NewValue"
                          :label="'新しい' + valueName"
                          :rules="inputValidation"
                          @keyup.enter="updatePassword"/>
            <v-text-field v-model="currentPassword"
                          label="現在のパスワード"
                          :rules="inputValidation"
                          :append-icon="showInputPass.icon"
                          :type="showInputPass.type"
                          autocomplete="on"
                          @click:append="showInput = !showInput"
                          @keyup.enter="updatePassword"/>
          </v-form>
        </v-card-text>
        <v-btn class="UpdateConfigBtn"
               @click="updateEmail"
               :color="ThemeColor"
               :disabled="!formValid">
          UPDATE
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
      currentPassword: "",
      valueName: "メールアドレス",
      formValid: true,
      passwordHideIcon: "mdi-eye",
      passwordNotHideIcon: "mdi-eye-off",
      showInput: false,
    };
  },
  computed: {
    showInputPass() {
      var icon = this.showInput ? this.passwordHideIcon : this.passwordNotHideIcon;
      var type = this.showInput ? "text" : "password";
      return { icon, type }
    },
  },
  methods: {
    updateEmail() {
      this.$store
        .dispatch({
          type: "auth/updateEmailWithAuth",
          email: this.NewValue,
          confirmationPassword: this.currentPassword,
        })
        .then(() => {
          // this.email = "";
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
