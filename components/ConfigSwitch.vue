<template>
    <v-switch v-model="HandleValue" 
              :label="ConfName"></v-switch>
</template>

<script>
export default {
  props: {
    HandledValue:{
      type: Boolean,
      require: true,
    },
    ConfName: {
      type: String,
      require: true,
    },
  },
  computed: {
    HandleValue: {
      get(){
        return this.HandledValue;
      },
      set(newVal){
        this.$emit("pushedSwitch",newVal);
      }
    }
  }
}
</script>

<style>
</style>
