(window.webpackJsonp=window.webpackJsonp||[]).push([[27,22],{360:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(363),o=r(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");n.a},364:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},o=r(46),l=r(89),c=r.n(l),d=r(163),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{style:t.textStyle},[r("v-icon",{attrs:{size:t.size,color:t.color}},[t._v(t._s(t.icon))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},389:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,require:!1,default:"Input"},icon:{type:String,require:!1,default:""},password:{type:Boolean,require:!1,default:!1},mail:{type:Boolean,require:!1,default:!1},required:{type:Boolean,require:!1,default:!1},defaultValue:{type:String,require:!1,default:""},editSwitch:{type:Boolean,require:!1,default:!1}},computed:{form_type:function(){return this.password?this.passwdShow?"text":"password":this.mail?"email":"text"},form_type_icon:function(){return""!=this.icon?this.icon:this.password?"mdi-lock":this.mail?"mdi-email":""},value:{get:function(){return null!=this.value_?this.value_:this.defaultValue},set:function(t){""!=t&&(this.value_=t)}}},emits:["callback:changed","callback:pencil","callback:close"],data:function(){return{passwdShow:!1,disabled:!1,editable:!this.editSwitch,value_:void 0}},methods:{checker:function(){return this.required&&""==this.value?"このフォームへの入力は必須です。":!(this.mail&&!/.+@.+\..+/.test(this.value))||"メールアドレスを正しく入力してください。"},pencilClick:function(){this.editable?this.defaultValue!=this.value?this.$emit("callback:changed",this.value):(this.$emit("callback:close"),this.editable=!1):(this.editable=!0,this.password&&(this.$refs.form.value=""),this.$emit("callback:pencil"))}}},o=r(46),l=r(89),c=r.n(l),d=r(449),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{ref:"form",attrs:{label:t.title+(t.required?" *":""),type:t.form_type,"append-icon":t.password&&t.editable?t.passwdShow?"mdi-eye":"mdi-eye-off":"","append-outer-icon":t.editSwitch?t.editable?"mdi-check":"mdi-pencil":"",disabled:t.disabled,rules:[t.checker],"prepend-icon":t.form_type_icon,readonly:!t.editable},on:{"click:append":function(e){t.passwdShow=!t.passwdShow},"click:append-outer":t.pencilClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VTextField:d.a})},390:function(t,e,r){"use strict";r(19),r(69),r(22),r(47),r(369),r(13),r(28),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382),r(29),r(39),r(62),r(70),r(362);var n=r(1),o=r(90),l=r(2),c=["sm","md","lg","xl"],d=c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=c.reduce((function(t,e){return t["offset"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),h=c.reduce((function(t,e){return t["order"+Object(l.v)(e)]={type:[String,Number],default:null},t}),{}),v={col:Object.keys(d),offset:Object.keys(f),order:Object.keys(h)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e)n+="-"+e.replace(t,"");return"col"!==t||""!==r&&!0!==r?(n+="-"+r).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:Object.assign({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var c in r)l+=String(r[c]);var d=y.get(l);return d||function(){var t,e;for(e in d=[],v)v[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var n=d.some((function(t){return t.startsWith("col-")}));d.push(((t={col:!n||!r.cols})["col-"+r.cols]=r.cols,t["offset-"+r.offset]=r.offset,t["order-"+r.order]=r.order,t["align-self-"+r.alignSelf]=r.alignSelf,t)),y.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),n)}})},394:function(t,e,r){"use strict";r(39),r(51),r(77),r(69),r(22),r(47),r(369),r(13),r(28),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382),r(29),r(62),r(362);var n=r(1),o=r(90),l=r(2),c=["sm","md","lg","xl"],d=["start","end","center"];function f(t,e){return c.reduce((function(r,n){return r[t+Object(l.v)(n)]=e(),r}),{})}var h=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},v=f("align",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},y=f("justify",(function(){return{type:String,default:null,validator:m}})),_=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},w=f("alignContent",(function(){return{type:String,default:null,validator:_}})),S={align:Object.keys(v),justify:Object.keys(y),alignContent:Object.keys(w)},j={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,r){var n=j[t];if(null!=r){if(e)n+="-"+e.replace(t,"");return(n+="-"+r).toLowerCase()}}var k=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:Object.assign({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},v,{justify:{type:String,default:null,validator:m}},y,{alignContent:{type:String,default:null,validator:_}},w),render:function(t,e){var r=e.props,data=e.data,n=e.children,l="";for(var c in r)l+=String(r[c]);var d=k.get(l);return d||function(){var t,e;for(e in d=[],S)S[e].forEach((function(t){var n=r[t],o=x(e,t,n);o&&d.push(o)}));d.push(((t={"no-gutters":r.noGutters,"row--dense":r.dense})["align-"+r.align]=r.align,t["justify-"+r.justify]=r.justify,t["align-content-"+r.alignContent]=r.alignContent,t)),k.set(l,d)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),n)}})},404:function(t,e,r){"use strict";r(39),r(51),r(177),r(71),r(62),r(53),r(107);var n=r(10),o=r(80),l=r(110);e.a=Object(n.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},538:function(t,e,r){"use strict";r.r(e);r(17);var n={data:function(){return{loading:!1,dialog:!1,name:"",email:"",password:"",errorMsg:""}},methods:{verifyPasswd:function(){this.loading=!0,this.$refs.signupform.validate()?(this.errorMsg="",this.password=this.$refs.password.value,this.name=this.$refs.name.value,this.email=this.$refs.email.value,this.dialog=!0,this.loading=!1):this.loading=!1},create:function(){var t=this;if(this.loading=!0,this.$refs.verifyform.validate())return this.$refs.verifyPasswd.value!=this.password?(this.errorMsg="パスワードが合致しません。",void(this.loading=!1)):void this.$store.dispatch({type:"auth/createUserWithProfileVerification",email:this.email,password:this.password,name:this.name,photo:"default"}).then((function(){t.loading=!1,t.$router.push("/")})).catch((function(e){t.dialog=!1,t.errorMsg=e,t.loading=!1}));this.loading=!1}},computed:{getemailVerified:function(){var t;return null==(t=this.$store.getters["auth/emailVerified"])||t},Message:function(){return this.dialog?"先ほど入力したパスワードを念のためもう一度入力してください。"+this.errorMsg:this.errorMsg}}},o=r(46),l=r(89),c=r.n(l),d=r(354),f=r(180),h=r(363),v=r(360),m=r(390),y=r(531),_=r(404),w=r(394),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-form",{ref:"signupform",staticClass:"text-center",attrs:{disabled:t.loading}},[r("h2",[t._v("アカウント作成"),r("br"),t._v("(アカウントをお持ちの方は"),r("NuxtLink",{attrs:{to:"/login"}},[t._v("ログイン")]),t._v(")")],1),t._v(" "),t.dialog||""==t.Message?t._e():r("StyledText",{attrs:{color:"red"}},[t._v(t._s(t.Message))]),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[r("TextForm",{ref:"name",attrs:{title:"アカウント名",required:"",icon:"mdi-account"}})],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[r("TextForm",{ref:"email",attrs:{title:"メールアドレス",required:"",mail:""}})],1)],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"8",sm:"6",md:"4"}},[r("TextForm",{ref:"password",attrs:{title:"パスワード",required:"",password:""}})],1)],1),t._v(" "),r("v-btn",{attrs:{loading:t.loading},on:{click:t.verifyPasswd}},[t._v("アカウント作成")]),t._v(" "),r("div",[t._v("#新規作成時に確認メールが送られます")])],1),t._v(" "),r("v-dialog",{attrs:{width:"400px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[t._v("パスワードを確認")]),t._v(" "),r("v-card-subtitle",[r("StyledText",{attrs:{color:""!=t.errorMsg?"red":"black"}},[t._v(t._s(t.Message))])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"verifyform",attrs:{disabled:t.loading}},[r("TextForm",{ref:"verifyPasswd",attrs:{title:"パスワード",required:"",password:""}})],1)],1),t._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{on:{click:function(e){t.dialog=!1}}},[t._v("キャンセル")]),t._v(" "),r("v-btn",{attrs:{loading:t.loading,color:"red"},on:{click:t.create}},[t._v("送信")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{StyledText:r(364).default,TextForm:r(389).default}),c()(component,{VApp:d.a,VBtn:f.a,VCard:h.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VDialog:y.a,VForm:_.a,VRow:w.a})}}]);