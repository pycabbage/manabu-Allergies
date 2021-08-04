<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ PanelHeader }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <slot name="PanelContent"/>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  props: {
    PanelHeader: String,
  },
}
</script>
