<template>
  <v-text-field
      v-model="value"
      :label="title+(required ? ' *' : '')"
      :type="form_type"
      :append-icon="password ? (passwdShow ? 'mdi-eye' : 'mdi-eye-off'): ''"
      @click:append="passwdShow = !passwdShow"
      :disabled="disabled"
      :rules="[checker]"
      ref="form"
      :prepend-icon="form_type_icon"
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
    mail: {
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
      } else if (this.mail) {
        return "email"
      } else {
        return "text"
      }
    },
    form_type_icon: function(){
      if (this.password){
        return "mdi-lock"
      } else if (this.email) {
        return "mdi-email"
      } else {
        return ""
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
    checker: function() {
      if (this.required && this.value == "") {
        return "このフォームへの入力は必須です。"
      } else if (this.mail && ! /.+@.+\..+/.test(this.value)) {
        return "メールアドレスを正しく入力してください。"
      } else {
        return true
      }
    }
  }
})
</script>
