(window.webpackJsonp=window.webpackJsonp||[]).push([[22,26],{356:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return f}));var n=r(358),o=r(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");n.a},383:function(t,e,r){"use strict";r.r(e);var n={props:{DialogTitle:{type:String,require:!0},ToolBarColor:{type:String,require:!1,default:null},dialog:{type:Boolean,require:!1,default:!1}}},o=r(62),l=r(104),c=r.n(l),d=r(238),f=r(358),h=r(534),v=r(164),m=r(38),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),n),[r("v-icon",[t._v("mdi-cog-outline")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-toolbar",{attrs:{color:t.ToolBarColor}},[t._v("\n      "+t._s(t.DialogTitle)+"\n    ")]),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VDialog:h.a,VIcon:v.a,VToolbar:m.a})},394:function(t,e,r){"use strict";r(40),r(51),r(175),r(71),r(63),r(52),r(107);var n=r(10),o=r(80),l=r(105);e.a=Object(n.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},399:function(t,e,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5419bbe0",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r(399)},429:function(t,e,r){var n=r(15)(!1);n.push([t.i,".OpenSetting{float:right}.UpdateConfigBtn{margin-left:78%;margin-bottom:3%}.MyPageContentWrapper{margin-bottom:2vh}",""]),t.exports=n},463:function(t,e,r){"use strict";r.r(e);var n={props:{currentValue:{type:String,require:!0},inputValidation:{type:Array,require:!0},ThemeColor:{type:String,require:!0}},data:function(){return{NewValue:"",valueName:"ユーザー名",formValid:!0}},methods:{updateProfileName:function(){this.$store.dispatch({type:"auth/updateProfile",name:this.NewValue}).then((function(){})).catch((function(t){alert(t)}))}}},o=(r(428),r(62)),l=r(104),c=r.n(l),d=r(238),f=r(356),h=r(394),v=r(471),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MyPageContentWrapper"},[t._v("\n  "+t._s(t.valueName)+"： "+t._s(t.currentValue)+"\n  "),r("div",{staticClass:"OpenSetting"},[r("SettingDialog",{attrs:{DialogTitle:"User Setting",ToolBarColor:t.ThemeColor}},[r("v-card-text",{staticClass:"TextareaWrapper"},[r("v-form",{ref:"form",on:{submit:function(t){t.preventDefault()}},model:{value:t.formValid,callback:function(e){t.formValid=e},expression:"formValid"}},[r("v-text-field",{attrs:{label:"新しい"+t.valueName,rules:t.inputValidation},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateProfileName.apply(null,arguments)}},model:{value:t.NewValue,callback:function(e){t.NewValue=e},expression:"NewValue"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"UpdateConfigBtn",attrs:{color:t.ThemeColor,disabled:!t.formValid},on:{click:t.updateProfileName}},[t._v("\n        UPDATE\n      ")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{SettingDialog:r(383).default}),c()(component,{VBtn:d.a,VCardText:f.b,VForm:h.a,VTextField:v.a})}}]);