<template>
  <div>
    {{ valueName }}: {{ currentValue }}
    <div class="OpenSetting">
      <SettingDialog DialogTitle="User Setting" :ToolBarColor="ThemeColor">
        <v-card-text class="TextareaWrapper">
          <v-form v-model="formValid" ref="form">
            <v-text-field
              v-model="NewValue"
              :label="'新しい ' + valueName"
              :rules="inputValidation"
            />
          </v-form>
        </v-card-text>
        <v-btn
          class="UpdateConfigBtn"
          @click="updateFunc(NewValue)"
          :color="ThemeColor"
          :disabled="!formValid"
        >
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
    valueName: {
      type: String,
      require: true,
    },
    updateFunc: {
      type: Function,
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
      formValid: true,
    };
  },
  methods: {
    updateValue(NewVal) {
      if (NewVal.length < 1) {
        this.updateFunc("default");
      } else {
        this.updateFunc(NewVal);
      }
    },
    logout() {
      return function () {
        this.$store
          .dispatch({
            type: "auth/signOut",
          })
          .then(() => {
            this.$router.push("/login");
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    updateProfilePhoto(e) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updateProfile",
            photo: e.target.files[0],
          })
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
      };
    },
    updateProfileName(name) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updateProfile",
            name: name,
          })
          .then(() => {
            //this.name = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    updateEmail() {
      return function (email, confirmationPassword) {
        this.$store
          .dispatch({
            type: "auth/updateEmailWithAuth",
            email: email,
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            // this.email = "";
            // this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    updatePassword(password, confirmationPassword) {
      return function () {
        this.$store
          .dispatch({
            type: "auth/updatePasswordWithAuth",
            password: password,
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            // this.password = "";
            // this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
    deleteAccount() {
      return function (confirmationPassword) {
        this.$store
          .dispatch({
            type: "auth/deleteAccountWithAuth",
            confirmationPassword: confirmationPassword,
          })
          .then(() => {
            //this.confirmationPassword = "";
          })
          .catch((error) => {
            alert(error);
          });
      };
    },
  },
};
</script>

<style>
.OpenSetting {
  float: right;
}
</style>
