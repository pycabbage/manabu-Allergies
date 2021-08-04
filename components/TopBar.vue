<template>
  <v-container class="TopBarBack">
    <v-row class="TopBarContents">
      <BackTopBtn class="TopBtnIcon"/>
      <p class="CurretPageName">{{ PageName }}</p>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props:{
    PageName:{
      type: String,
      default: '',
    },
  },
}
</script>

<style>
.TopBarBack {
  height: 100px;
  background-color: #00B9FF;
}
.TopBarContents {
  line-height: 100px;
}
.CurretPageName {
  margin-left: 50px;
  font-size: 40pt;
  color: #FFFFFF;
}
.TopBtnIcon {
  margin-left: 30px;
}
</style>
