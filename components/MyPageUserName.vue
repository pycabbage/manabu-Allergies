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
                          @keyup.enter="updateProfileName"/>
          </v-form>
        </v-card-text>
        <v-btn class="UpdateConfigBtn"
               @click="updateProfileName"
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
      valueName: "ユーザー名",
      formValid: true,
    };
  },
  methods: {
    updateProfileName() {
      this.$store
        .dispatch({
          type: "auth/updateProfile",
          name: this.NewValue,
        })
        .then(() => {
          //this.name = "";
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
