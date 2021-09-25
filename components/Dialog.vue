<template>
  <v-dialog v-model="dialog"
            width="500">
    <template v-slot:activator="{ on,attrs }">
      <v-btn icon
             v-bind="attrs"
             v-on="on">
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
  },
  data() {
    return {
      dialog: false,
    };
  },
}
</script>
