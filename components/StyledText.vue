<template>
  <span :style="textStyle"><v-icon :size="size" :color="color">{{icon}}</v-icon><slot /></span>
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
    icon:{
      type:String,
      require: false,
      default: ""
    }
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
