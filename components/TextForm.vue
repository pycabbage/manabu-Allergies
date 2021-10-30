<template>
  <v-text-field
      v-model="value"
      :label="title+(required ? ' *' : '')"
      :type="form_type"
      :append-icon="password && editable ? (passwdShow ? 'mdi-eye' : 'mdi-eye-off'): ''"
      :append-outer-icon="editSwitch ? (editable?'mdi-check':'mdi-pencil'):''"
      @click:append="passwdShow = !passwdShow"
      @click:append-outer="pencilClick"
      :disabled="disabled"
      :rules="[checker]"
      ref="form"
      :prepend-icon="form_type_icon"
      :readonly="!editable"
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
    icon: {
      type: String,
      require: false,
      default: "",
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
    },
    editSwitch:{
      type:Boolean,
      require:false,
      default:false
    },
/*    callback:{
      type:Function,
      require:false,
      default:Function()
    }*/
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
      if (this.icon != "") {
        return this.icon
      } else if (this.password) {
        return "mdi-lock"
      } else if (this.mail) {
        return "mdi-email"
      } else {
        return ""
      }
    },
    value: {
      get: function() {
        if (this.value_ != undefined) {
          return this.value_
        } else {
          return this.defaultValue
        }
      },
      set: function(value) {
        if (value != ""){
          this.value_=value
        }
      }
    }
  },
  emits: ['callback:changed','callback:pencil','callback:close'],
  data() {
      return {
        passwdShow: false,
        disabled:false,
        editable:this.editSwitch ? false : true,
        value_:undefined
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
    },
    pencilClick: function() {
      if (this.editable){
        if (this.defaultValue!=this.value){
          this.$emit("callback:changed", this.value)
        } else {
          this.$emit("callback:close")
          this.editable=false
        }
      } else {
        if(this.password){
          this.value=""
        }
        this.editable = true
        this.$emit("callback:pencil")
      }
    }
  }
})
</script>
