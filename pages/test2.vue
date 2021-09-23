<template>
  <v-container>
    <p>{{ getName }}</p>
  </v-container>
</template>

<script>
import DataFunc from '/components/DataFuncs.vue'

export default {
  data() {
    return {
    };
  },
  computed: DataFunc.computed,
}
</script>
