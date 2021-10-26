<template>
  <span :style="textStyle"><slot /></span>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      require: false,
      default: "#fff",
    },
    size: {
      type: String,
      require: false,
      default: undefined,
    },
  },
  computed: {
    textStyle() {
      var tempStyle = "";
      tempStyle += "color:" + this.color + ";";
      if(this.size !== undefined) {
        tempStyle += "font-size:" + this.size + ";";
      }
      return tempStyle;
    },
  },
}
</script>
