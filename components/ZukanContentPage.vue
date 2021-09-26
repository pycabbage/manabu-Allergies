<template>
  <v-container>
    <v-col>
      <v-container class="ZukanImg">
        <v-img  :height="ImgHeight"
                :src="ZukanContent.Img"></v-img>
      </v-container>
      <v-container class="ZukanContent">
        <div class="font-weight-bold display-3">{{ ZukanContent.Title }}</div>
        <v-subheader>{{ ZukanContent.Subtitle }}</v-subheader>
        <div  class="Descriptions" 
              v-for="(desc, key) in ZukanContent.Descriptions" :key="key">
          <h2>{{ key }}</h2>
          <hr>
          <p>{{ desc }}</p>
        </div>
      </v-container>
    </v-col>
  </v-container>
</template>

<script>
export default {
  props: {
    ZukanContent: {
      type:Object,
      require: true,
    },
  },
  data() {
    return {
      ImgHeight: 300,
    };
  },
}
</script>
