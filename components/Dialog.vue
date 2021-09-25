<template>
  <v-dialog v-model="dialog"
            width="500">
    <template v-slot:activator="{ on,attrs }">
      <v-btn :icon="isUseImg"
             v-bind="attrs"
             v-on="on"
             :color="openBtnColor"
             :height="btnHeight"
             :width="btnWidth">
        <slot name="BtnContent" />
      </v-btn>
    </template>
    <v-card>
      <v-toolbar :color="ToolBarColor">
        {{ DialogTitle }}
      </v-toolbar>
      <slot name="DialogContent"/>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    DialogTitle: {
      type: String,
      require: true,
    },
    ToolBarColor: {
      type: String,
      require: false,
      default: null,
    },
    isUseImg :{
      type: Boolean,
      require: false,
      default: false,
    },
    openBtnColor: {
      type: String,
      require: false,
      default: "undefined",
    },
    btnHeight: {
      type: String,
      require: false,
      default: undefined,
    },
    btnWidth: {
      type: String,
      require: false,
      default: undefined,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
}
</script>
