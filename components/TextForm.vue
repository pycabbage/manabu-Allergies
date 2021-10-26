<template>
  <v-text-field
      v-model="value"
      :label="title"
      :type="form_type"
      :append-icon="passwdShow ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="passwdShow = !passwdShow"
  >
  </v-text-field>
</template>

<script>
export default ({
  props:{
    title: {
      type: String,
      require: false,
      default: "Input",
    },
    password: {
      type: Boolean,
      require: false,
      default: false,
    },
    defaultValue:{
      type:String,
      require:false,
      default:""
    }
  },
  computed:{
    form_type: function() {
      if (this.password) {
        if (this.passwdShow) {
          return "text"
        } else {
          return "password"
        }
      } else {
        return "text"
      }
    }
  },
  data() {
      return {
        passwdShow: false,
        value:this.defaultValue
      };
  }
})
</script>
