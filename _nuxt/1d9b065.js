(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{362:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f}));var r=n(366),o=n(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},393:function(t,e,n){"use strict";n(19),n(71),n(22),n(48),n(368),n(13),n(28),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(29),n(41),n(63),n(73),n(363);var r=n(1),o=n(90),l=n(2),c=["sm","md","lg","xl"],d=c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=c.reduce((function(t,e){return t["offset"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),v=c.reduce((function(t,e){return t["order"+Object(l.x)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(d),offset:Object.keys(f),order:Object.keys(v)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e)r+="-"+e.replace(t,"");return"col"!==t||""!==n&&!0!==n?(r+="-"+n).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:Object.assign({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},v,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,l=(e.parent,"");for(var c in n)l+=String(n[c]);var d=y.get(l);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&d.push(o)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push(((t={col:!r||!n.cols})["col-"+n.cols]=n.cols,t["offset-"+n.offset]=n.offset,t["order-"+n.order]=n.order,t["align-self-"+n.alignSelf]=n.alignSelf,t)),y.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),r)}})},396:function(t,e,n){"use strict";n(41),n(52),n(78),n(71),n(22),n(48),n(368),n(13),n(28),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(29),n(63),n(363);var r=n(1),o=n(90),l=n(2),c=["sm","md","lg","xl"],d=["start","end","center"];function f(t,e){return c.reduce((function(n,r){return n[t+Object(l.x)(r)]=e(),n}),{})}var v=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},h=f("align",(function(){return{type:String,default:null,validator:v}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},y=f("justify",(function(){return{type:String,default:null,validator:m}})),w=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},_=f("alignContent",(function(){return{type:String,default:null,validator:w}})),j={align:Object.keys(h),justify:Object.keys(y),alignContent:Object.keys(_)},O={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,n){var r=O[t];if(null!=n){if(e)r+="-"+e.replace(t,"");return(r+="-"+n).toLowerCase()}}var V=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:Object.assign({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},h,{justify:{type:String,default:null,validator:m}},y,{alignContent:{type:String,default:null,validator:w}},_),render:function(t,e){var n=e.props,data=e.data,r=e.children,l="";for(var c in n)l+=String(n[c]);var d=V.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var r=n[t],o=S(e,t,r);o&&d.push(o)}));d.push(((t={"no-gutters":n.noGutters,"row--dense":n.dense})["align-"+n.align]=n.align,t["justify-"+n.justify]=n.justify,t["align-content-"+n.alignContent]=n.alignContent,t)),V.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),r)}})},404:function(t,e,n){"use strict";n(41),n(52),n(178),n(72),n(63),n(54),n(107);var r=n(10),o=n(81),l=n(110);e.a=Object(r.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},567:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{dialog:!1,loading:!1,email:"",password:"",resetEmail:""}},methods:{login:function(){var t=this;this.loading=!0,this.$store.dispatch({type:"auth/signInWithVerification",email:this.email,password:this.password}).then((function(){t.loading=!1,t.$router.push("/")})).catch((function(e){alert(e),t.loading=!1}))},reset:function(){var t=this;this.loading=!0,this.$store.dispatch({type:"auth/resetPassword",email:this.resetEmail}).then((function(){alert("success"),t.resetEmail="",t.dialog=!1,t.loading=!1})).catch((function(e){alert(e),t.loading=!1}))}},computed:{getemailVerified:function(){return this.$store.getters["auth/emailVerified"]}}},o=n(40),l=n(70),c=n.n(l),d=n(356),f=n(192),v=n(366),h=n(362),m=n(393),y=n(557),w=n(404),_=n(396),j=n(423),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-form",{staticClass:"text-center"},[n("h2",[t._v("Login")]),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[n("v-text-field",{ref:"email",attrs:{label:"email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[n("v-text-field",{ref:"password",attrs:{label:"password",type:"password",autocomplete:"off",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),n("div",[n("v-dialog",{attrs:{width:"400px"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("a",t._g({},r),[n("u",[t._v("Forgot password?")])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-form",[n("v-card-title",[t._v("Password reset")]),t._v(" "),n("v-col",[n("v-text-field",{ref:"resetEmail",attrs:{type:"email",label:"email",required:""},model:{value:t.resetEmail,callback:function(e){t.resetEmail=e},expression:"resetEmail"}})],1),t._v(" "),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),t._v(" "),n("v-btn",{attrs:{type:"submit",loading:t.loading,disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.reset.apply(null,arguments)}}},[t._v("\n                Send\n              ")])],1)],1)],1)],1)],1),t._v(" "),n("div",[n("router-link",{attrs:{to:"/create"}},[t._v("Don’t have an account?")])],1),t._v(" "),n("v-btn",{attrs:{type:"submit",loading:t.loading,disabled:t.loading},on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t._v("Login")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VApp:d.a,VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardTitle:h.d,VCol:m.a,VDialog:y.a,VForm:w.a,VRow:_.a,VTextField:j.a})}}]);