<template>
  <v-app>
    <v-container
      v-if="imgSrc !== ''"
    >
      <vue-cropper
        ref="cropper"
        :src="imgSrc"
        :guides="true"
        :view-mode="2"
        :auto-crop-area="1"
        :background="true"
        drag-mode="crop"
      />
    </v-container>
  </v-app>
</template>

<script>
  import VueCropper from "vue-cropperjs";
  import "cropperjs/dist/cropper.css";
  export default {
    components: { VueCropper },
    mounted() {
      this.imgSrc = this.$store.state.image.image
      if (!this.imgSrc) {
        this.$router.push({path: 'scan'});
      }
    },
    data() {
      return {
        targetWidth: 1,
        targetHeight: 1,
        imgSrc: "",
        cropImg: "",
        filename: "",
      };
    },
    methods: {
      cropImage() {
        this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
      }
    }
  };
</script>

<style>

</style>