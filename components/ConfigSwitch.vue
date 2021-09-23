<template>
    <v-switch @click="HandleFunc(HandleFuncArg)" 
              :label="ConfName"></v-switch>
</template>

<script>
export default {
  props: {
    HandleFunc: {
      type: Function,
      require: true,
    },
    HandleFuncArg: {
      type: String,
      require: true,
    },
  },
}
</script>

<style>
</style>
