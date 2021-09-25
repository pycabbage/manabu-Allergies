<template>
  <Dialog :DialogTitle="DialogTitle"
          :ToolBarColor="ToolBarColor"
          isUseImg="true">
    <template v-slot:BtnContent>
      <v-icon>mdi-cog-outline</v-icon>
    </template>
    <template v-slot:DialogContent>
      <slot />
    </template>
  </Dialog>
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
