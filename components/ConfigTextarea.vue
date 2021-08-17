<template>
  <v-text-field v-model="HandledValue"
                :label="TextareaLabel">
  </v-text-field>
</template>

<script>
export default {
  props: {
    TextareaLabel: {
      type:String,
      require: true,
    },
  },
  data(){
    return {
      HandledValue: null,
    };
  },
  computed: {
  },
}
</script>
