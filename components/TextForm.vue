<template>
  <v-text-field
      v-model="value"
      :label="title+(required ? ' *' : '')"
      :type="form_type"
      :append-icon="passwdShow ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="passwdShow = !passwdShow"
      :disabled="disabled"
      :rules="[check_require]"
      ref="form"
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
    required: {
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
        value:this.defaultValue,
        disabled:false,
      };
  },
  methods:{
    check_require: function() {
      if (this.required && this.value == "") {
        return "このフォームへの入力は必須です。"
      } else {
        return true
      }
    }
  }
})
</script>
