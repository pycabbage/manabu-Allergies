<template>
  <v-app>
    <v-container v-cloak @drop.prevent="addDropFile" @dragover.prevent>
      <v-file-input
        v-model="file"
        accept="image/png, image/jpeg, image/bmp"
        prepend-icon="mdi-camera"
        placeholder="画像をドラッグ＆ドロップか選択してください。"
        @change="setImage"
      ></v-file-input>
    </v-container>
  </v-app>
</template>

<script>
import VueCropper from "vue-cropperjs";
import "cropperjs/dist/cropper.css";
import Data from "../plugins/data";
export default {
  components: { VueCropper },
  mounted() {},
  methods: {
    addDropFile(e) {
      this.file = e.dataTransfer.files[0];
      this.setImage(e);
    },
    async setImage(e) {
      /////////////////////////////////////////////////////
      // const data = await Data.init("private");
      // await data.setFile(/*"key"*/ "key", this.file);
      /////////////////////////////////////////////
      const fr = new FileReader();
      fr.onload = (ev) => {
        let imgSrc = ev.target.result;
        this.$store.commit("image/set", imgSrc);
        this.$router.push({ path: "crop" });
      };
      console.log("readAsDataURL", e)
      console.log("this.file", this.file)
      fr.readAsDataURL(e);
    },
  },
};
</script>

<style>
</style>