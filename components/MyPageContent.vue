<template>
  <div>
    {{ valueName }}:  {{ currentValue }}
    <div class="OpenSetting">
      <SettingDialog DialogTitle="User Setting"
                     :ToolBarColor="ThemeColor">
      <v-card-text class="TextareaWrapper">
        <v-form v-model="formValid"
                ref="form">
          <v-text-field v-model="NewValue"
                        :label="'新しい ' + valueName"
                        :rules="inputValidation"/>
        </v-form>
      </v-card-text>
      <v-btn  class="UpdateConfigBtn"
              @click="updateFunc(NewValue)"
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
      if(NewVal.length < 1) {
        this.updateFunc('default');
      }else {
        this.updateFunc(NewVal);
      }
    },
  },
}
</script>

<style>
.OpenSetting {
  float: right;
}
</style>
