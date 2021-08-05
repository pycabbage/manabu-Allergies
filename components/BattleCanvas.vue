<template>
  <canvas />
</template>

<script>
import * as PIXI from "pixi.js";
export default {
  mounted() {
    this.app = new PIXI.Application({
      width: 800,
      height: 600,
      antialiasing: true,
      view: this.$el
    });
  },
  components: { BattleCanvas }
};
</script>
