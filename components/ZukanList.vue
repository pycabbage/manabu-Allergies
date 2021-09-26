<template>
  <v-dialog width="1000">
    <template v-slot:activator="{ on,attrs }">
      <v-btn icon
             v-bind="attrs"
             v-on="on">
        <v-card :width="CardWidth"
                :height="CardWidth"
                :img="ZukanContent.Img">
          <v-card-title class="ListTitle">
            <p class="ZukanTitle">{{ ZukanContent.Title }}</p>
          </v-card-title>
        </v-card>
      </v-btn>
    </template>
    <v-card>
      <ZukanContentPage :ZukanContent="ZukanContent" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    ZukanContent: {
      type:Object,
      require:true,
    },
    CardWidth: {
      type: String,
      require: false,
      default: "150",
    }
  },
}
</script>

<style>
.ZukanTitle {
  font-size: 1vw;
}
</style>
