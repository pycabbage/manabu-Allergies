(window.webpackJsonp=window.webpackJsonp||[]).push([[32,11,12,14,19,22],{360:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(363),o=r(2),l=Object(o.g)("v-card__actions"),c=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");n.a},364:function(t,e,r){"use strict";r.r(e);var n={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},o=r(46),l=r(89),c=r.n(l),d=r(163),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{style:t.textStyle},[r("v-icon",{attrs:{size:t.size,color:t.color}},[t._v(t._s(t.icon))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a})},387:function(t,e,r){var content=r(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("1bbdf444",content,!0,{sourceMap:!1})},389:function(t,e,r){"use strict";r.r(e);var n={props:{title:{type:String,require:!1,default:"Input"},icon:{type:String,require:!1,default:""},password:{type:Boolean,require:!1,default:!1},mail:{type:Boolean,require:!1,default:!1},required:{type:Boolean,require:!1,default:!1},defaultValue:{type:String,require:!1,default:""},editSwitch:{type:Boolean,require:!1,default:!1}},computed:{form_type:function(){return this.password?this.passwdShow?"text":"password":this.mail?"email":"text"},form_type_icon:function(){return""!=this.icon?this.icon:this.password?"mdi-lock":this.mail?"mdi-email":""},value:{get:function(){return null!=this.value_?this.value_:this.defaultValue},set:function(t){""!=t&&(this.value_=t)}}},emits:["callback:changed","callback:pencil","callback:close"],data:function(){return{passwdShow:!1,disabled:!1,editable:!this.editSwitch,value_:void 0}},methods:{checker:function(){return this.required&&""==this.value?"このフォームへの入力は必須です。":!(this.mail&&!/.+@.+\..+/.test(this.value))||"メールアドレスを正しく入力してください。"},pencilClick:function(){this.editable?this.defaultValue!=this.value?this.$emit("callback:changed",this.value):(this.$emit("callback:close"),this.editable=!1):(this.password&&(this.value=""),this.editable=!0,this.$emit("callback:pencil"))}}},o=r(46),l=r(89),c=r.n(l),d=r(449),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{ref:"form",attrs:{label:t.title+(t.required?" *":""),type:t.form_type,"append-icon":t.password&&t.editable?t.passwdShow?"mdi-eye":"mdi-eye-off":"","append-outer-icon":t.editSwitch?t.editable?"mdi-check":"mdi-pencil":"",disabled:t.disabled,rules:[t.checker],"prepend-icon":t.form_type_icon,readonly:!t.editable},on:{"click:append":function(e){t.passwdShow=!t.passwdShow},"click:append-outer":t.pencilClick},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})}),[],!1,null,null,null);e.default=component.exports;c()(component,{VTextField:d.a})},394:function(t,e,r){"use strict";r(39),r(51),r(77),r(69),r(22),r(47),r(369),r(13),r(28),r(370),r(371),r(372),r(373),r(374),r(375),r(376),r(377),r(378),r(379),r(380),r(381),r(382),r(29),r(62),r(362);var n=r(1),o=r(90),l=r(2),c=["sm","md","lg","xl"],d=["start","end","center"];function f(t,e){return c.reduce((function(r,n){return r[t+Object(l.v)(n)]=e(),r}),{})}var h=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},v=f("align",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},w=f("justify",(function(){return{type:String,default:null,validator:m}})),_=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},y=f("alignContent",(function(){return{type:String,default:null,validator:_}})),x={align:Object.keys(v),justify:Object.keys(w),alignContent:Object.keys(y)},P={align:"align",justify:"justify",alignContent:"align-content"};function $(t,e,r){var n=P[t];if(null!=r){if(e)n+="-"+e.replace(t,"");return(n+="-"+r).toLowerCase()}}var S=new Map;e.a=n.a.extend({name:"v-row",functional:!0,props:Object.assign({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},v,{justify:{type:String,default:null,validator:m}},w,{alignContent:{type:String,default:null,validator:_}},y),render:function(t,e){var r=e.props,data=e.data,n=e.children,l="";for(var c in r)l+=String(r[c]);var d=S.get(l);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var n=r[t],o=$(e,t,n);o&&d.push(o)}));d.push(((t={"no-gutters":r.noGutters,"row--dense":r.dense})["align-"+r.align]=r.align,t["justify-"+r.justify]=r.justify,t["align-content-"+r.alignContent]=r.alignContent,t)),S.set(l,d)}(),t(r.tag,Object(o.a)(data,{staticClass:"row",class:d}),n)}})},395:function(t,e,r){"use strict";r(387)},396:function(t,e,r){var n=r(15)(!1);n.push([t.i,".PageTitle{margin-top:4vh;margin-bottom:6vh;font-weight:700;font-size:max(4vw,50px)}",""]),t.exports=n},400:function(t,e,r){"use strict";r.r(e);r(395);var n=r(46),component=Object(n.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"PageTitle"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,r){"use strict";r(71),r(69),r(70),r(77),r(240),r(362),r(63),r(79);var n=r(1);var o,l=r(90);e.a=(o="container",n.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass=(o+" "+(data.staticClass||"")).trim();var l=data.attrs;if(l){data.attrs={};var c=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));c.length&&(data.staticClass+=" "+c.join(" "))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,c=data.attrs;return c&&(data.attrs={},r=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(l.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},404:function(t,e,r){"use strict";r(39),r(51),r(177),r(71),r(62),r(53),r(107);var n=r(10),o=r(80),l=r(110);e.a=Object(n.a)(o.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object.assign({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},406:function(t,e,r){var content=r(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7132a15d",content,!0,{sourceMap:!1})},407:function(t,e,r){var n=r(15)(!1);n.push([t.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=n},409:function(t,e,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2aa425b4",content,!0,{sourceMap:!1})},416:function(t,e,r){"use strict";r.r(e);r(17);var n={computed:{getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{logout:function(){var t=this;this.$store.dispatch({type:"auth/signOut"}).then((function(){t.$router.push("/login")})).catch((function(t){alert(t)}))},updateProfilePhoto:function(t){this.$store.dispatch({type:"auth/updateProfile",photo:t.target.files[0]}).then((function(){})).catch((function(t){alert(t)}))},updateProfileName:function(){var t=this;this.$store.dispatch({type:"auth/updateProfile",name:this.name}).then((function(){t.name=""})).catch((function(t){alert(t)}))},updateEmail:function(){var t=this;this.$store.dispatch({type:"auth/updateEmailWithAuth",email:this.email,confirmationPassword:this.confirmationPassword}).then((function(){t.email="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},updatePassword:function(){var t=this;this.$store.dispatch({type:"auth/updatePasswordWithAuth",password:this.password,confirmationPassword:this.confirmationPassword}).then((function(){t.password="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},deleteAccount:function(){var t=this;this.$store.dispatch({type:"auth/deleteAccountWithAuth",confirmationPassword:this.confirmationPassword}).then((function(){t.confirmationPassword=""})).catch((function(t){alert(t)}))}}},o=r(46),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},428:function(t,e,r){"use strict";r(409)},429:function(t,e,r){var n=r(15)(!1);n.push([t.i,".FileSelectorWrapper{margin:2vh 1vw 0}",""]),t.exports=n},442:function(t,e,r){"use strict";r(406);var n=r(26);e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object.assign({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object.assign({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},444:function(t,e,r){var content=r(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7e782c4c",content,!0,{sourceMap:!1})},455:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{BtnTextColor:"#000000"}},methods:{logout:function(){var t=this;this.$store.dispatch({type:"auth/signOut"}).then((function(){t.$router.push("/login")})).catch((function(t){alert(t)}))}}},o=r(46),l=r(89),c=r.n(l),d=r(180),f=r(163),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{attrs:{color:"#ff4956",large:""},on:{click:t.logout}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-logout")]),t._v(" "),r("StyledText",{attrs:{color:"white"}},[t._v("LOGOUT")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{StyledText:r(364).default}),c()(component,{VBtn:d.a,VIcon:f.a})},456:function(t,e,r){"use strict";r.r(e);var n={components:{StyledText:r(364).default},data:function(){return{passwdDialog:!1,errorMsg:"",loading:!1}},methods:{delAccount:function(){var t=this;this.loading=!0,this.$refs.form.validate()?this.$store.dispatch({type:"auth/deleteAccountWithAuth",confirmationPassword:this.$refs.passwd.value}).then((function(){t.loading=!1,t.passwdDialog=!1,t.$router.push("/login")})).catch((function(e){t.errorMsg="Error: The password is invalid or the user does not have a password."==e?"パスワードに誤りがあるようです。":e,t.loading=!1})):this.loading=!1}}},o=r(46),l=r(89),c=r.n(l),d=r(180),f=r(363),h=r(360),v=r(531),m=r(404),w=r(163),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-btn",{attrs:{color:"#ff4956",large:""},on:{click:function(e){t.passwdDialog=!0}}},[r("v-icon",{attrs:{color:"white"}},[t._v("mdi-delete")]),t._v(" "),r("StyledText",{attrs:{color:"white"}},[t._v("DELETE ACCOUNT")])],1),t._v(" "),r("v-dialog",{attrs:{width:"400px"},model:{value:t.passwdDialog,callback:function(e){t.passwdDialog=e},expression:"passwdDialog"}},[r("v-card",[r("v-card-title",[t._v("本当によろしいですか...?")]),t._v(" "),r("v-card-subtitle",[t._v("\n        この操作を行うとあなたのアカウントが削除されます。二度と元に戻すことはできません。"),r("br"),t._v("それでも続行する場合は、パスワードを入力して削除ボタンを押してください。\n      ")]),t._v(" "),r("v-card-text",[r("StyledText",{attrs:{color:"red"}},[t._v(t._s(t.errorMsg))]),t._v(" "),r("v-form",{ref:"form",attrs:{disabled:t.loading}},[r("TextForm",{ref:"passwd",attrs:{title:"Password",password:"",required:""}})],1)],1),t._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{disabled:t.loading},on:{click:function(e){t.passwdDialog=!1}}},[t._v("キャンセル")]),t._v(" "),r("v-btn",{attrs:{color:"red",loading:t.loading},on:{click:t.delAccount}},[t._v("削除")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{StyledText:r(364).default,TextForm:r(389).default}),c()(component,{VBtn:d.a,VCard:f.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VDialog:v.a,VForm:m.a,VIcon:w.a})},457:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(52),{props:{userIconPath:{require:!1,default:"this.$store.getters['auth/photo']"},ThemeColor:{type:String,require:!0},avatarIconSize:{type:String,require:!1,default:"96"}},data:function(){return{formValid:!1,isUseImg:!0,NewIcon:null,loading:!1,mouseHover:!1,showMenu:!1}},methods:{aaa:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$store.dispatch({type:"auth/updateProfile",aaa:"default"}).then((function(){t.loading=!1})).catch((function(e){alert(e),t.loading=!1}));case 1:case"end":return e.stop()}}),e)})))()},updateProfilePhotoBtn:function(){this.$refs.input.click()},updateProfilePhoto:function(){var t=this;this.loading=!0,this.$store.dispatch({type:"auth/updateProfile",photo:this.$refs.input.files[0]}).then((function(){t.loading=!1})).catch((function(e){alert(e),t.loading=!1}))}}}),l=(r(428),r(46)),c=r(89),d=r.n(c),f=r(550),h=r(180),v=r(165),m=r(103),w=r(551),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-badge",{attrs:{icon:"mdi-pencil",value:t.mouseHover,"offset-y":"-10",left:""}},[r("input",{ref:"input",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:function(e){return t.updateProfilePhoto()}}}),t._v(" "),r("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{"x-large":"",icon:"",loading:t.loading,disabled:t.loading},on:{mouseenter:function(e){t.mouseHover=!0},mouseleave:function(e){t.mouseHover=!1}}},"v-btn",o,!1),n),[r("AvatarIcon",{attrs:{userIconPath:t.userIconPath,avatarIconSize:"128"}})],1)]}}])},[t._v(" "),r("v-list",[r("v-list-item",[r("v-btn",{attrs:{tile:"",text:""},on:{click:t.updateProfilePhotoBtn}},[t._v("ファイルから選択")])],1),t._v(" "),r("v-list-item",[r("v-btn",{attrs:{tile:"",text:""},on:{click:t.aaa}},[t._v("リセット")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{AvatarIcon:r(239).default}),d()(component,{VBadge:f.a,VBtn:h.a,VList:v.a,VListItem:m.a,VMenu:w.a})},510:function(t,e,r){"use strict";r(444)},511:function(t,e,r){var n=r(15)(!1);n.push([t.i,".TextareaWrapper{margin-top:2.5rem}.Section{margin-bottom:2.5rem}.SectionContent{margin-top:2rem}.AppConfig{margin-left:auto}.ConfigSwitches{margin-top:10px}.ActionBtnWrapper{float:none}.TitleWrapper{margin-top:2rem;margin-bottom:2.8rem}.MyPageTitle{display:inline}.AccountIconBtn{display:inline;margin-right:10vw;margin-top:1vw;float:right}",""]),t.exports=n},542:function(t,e,r){"use strict";r.r(e);r(17);var n=r(455),o=r(456),l=r(416),c=r(457),d={components:{LogoutBtn:n.default,DelAccountBtn:o.default,AccountIconBtn:c.default},data:function(){return{show_vpasswd1:!1,show_vpasswd2:!1}},computed:{getName:l.default.computed.getName,getEmail:l.default.computed.getEmail,getId:l.default.computed.getId},methods:{updateProfilePhoto:function(t){this.$store.dispatch({type:"auth/updateProfile",photo:t.target.files[0]}).then((function(){})).catch((function(t){alert(t)}))},updateProfileName:function(t){var e=this;this.$refs.nameform.validate()&&this.$store.dispatch({type:"auth/updateProfile",name:t}).then((function(){e.$refs.name.editable=!1})).catch((function(t){alert(t)}))},updateEmail:function(t){var e=this;this.$refs.mailform.validate()&&this.$store.dispatch({type:"auth/updateEmailWithAuth",email:t,confirmationPassword:this.$refs.verifyPassword1.value}).then((function(){e.$refs.mail.editable=!1,e.show_vpasswd1=!1})).catch((function(t){alert(t)}))},updatePassword:function(t){var e=this;this.$refs.passwdform.validate()&&(this.$refs.verifyPassword2.value==this.$refs.verifyPassword3.value?this.$store.dispatch({type:"auth/updatePasswordWithAuth",password:t,confirmationPassword:this.$refs.verifyPassword2.value}).then((function(){e.$refs.password.editable=!1,e.show_vpasswd2=!1})).catch((function(t){alert(t)})):this.loading=!1)}}},f=(r(510),r(46)),h=r(89),v=r.n(h),m=r(401),w=r(442),_=r(404),y=r(394),x=r(358),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("div",{staticClass:"TitleWrapper"},[r("PageTitle",{staticClass:"MyPageTitle"},[t._v("マイページ")]),t._v(" "),r("div",{staticClass:"AccountIconBtn"},[r("AccountIconBtn",{attrs:{userIconPath:this.$store.getters["auth/photo"]}})],1)],1),t._v(" "),r("v-row",[r("v-container",[r("h3",[t._v("ユーザー情報")]),t._v(" "),r("v-divider",{staticStyle:{"border-color":"black"}}),t._v(" "),r("div",{staticClass:"SectionContent"},[r("v-form",{ref:"nameform"},[r("TextForm",{ref:"name",attrs:{title:"アカウント名",icon:"mdi-account",editSwitch:"",required:"",defaultValue:this.$store.getters["auth/name"]},on:{"callback:changed":t.updateProfileName}})],1),t._v(" "),r("v-divider"),t._v(" "),r("v-form",{ref:"mailform"},[r("TextForm",{ref:"mail",attrs:{title:"メールアドレス",editSwitch:"",required:"",mail:"",defaultValue:t.$store.getters["auth/email"]},on:{"callback:changed":t.updateEmail,"callback:pencil":function(e){t.show_vpasswd1=!0},"callback:close":function(e){t.show_vpasswd1=!1}}}),t._v(" "),r("TextForm",{directives:[{name:"show",rawName:"v-show",value:t.show_vpasswd1,expression:"show_vpasswd1"}],ref:"verifyPassword1",attrs:{title:"パスワード(確認のため入力してください)",required:"",password:""}})],1),t._v(" "),r("v-divider"),t._v(" "),r("v-form",{ref:"passwdform"},[r("TextForm",{ref:"password",attrs:{title:"現在のパスワード",editSwitch:"",required:"",password:"",defaultValue:"**********"},on:{"callback:changed":t.updatePassword,"callback:pencil":function(e){t.show_vpasswd2=!0},"callback:close":function(e){t.show_vpasswd2=!1}}}),t._v(" "),r("TextForm",{directives:[{name:"show",rawName:"v-show",value:t.show_vpasswd2,expression:"show_vpasswd2"}],ref:"verifyPassword2",attrs:{title:"新しいパスワード",required:"",password:""}}),t._v(" "),r("TextForm",{directives:[{name:"show",rawName:"v-show",value:t.show_vpasswd2,expression:"show_vpasswd2"}],ref:"verifyPassword3",attrs:{title:"新しいパスワード(確認用)",required:"",password:""}})],1),t._v(" "),r("v-divider"),t._v(" "),r("p",[t._v("ユーザーID： "+t._s(t.getId))])],1)],1),t._v(" "),r("v-container",[r("h3",[t._v("各種操作")]),t._v(" "),r("v-divider",{staticStyle:{"border-color":"black"}}),t._v(" "),r("div",[r("LogoutBtn",{staticStyle:{float:"left"}}),r("v-spacer"),r("DelAccountBtn",{staticStyle:{float:"right"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{PageTitle:r(400).default,TextForm:r(389).default}),v()(component,{VContainer:m.a,VDivider:w.a,VForm:_.a,VRow:y.a,VSpacer:x.a})}}]);