(window.webpackJsonp=window.webpackJsonp||[]).push([[33,12,25],{391:function(t,e,n){"use strict";n.r(e);var r={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var t="";return t+="color:"+this.color+";",void 0!==this.size&&(t+="font-size:"+this.size+";"),t}}},o=n(46),c=n(89),l=n.n(c),d=n(143),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{style:t.textStyle},[n("v-icon",{attrs:{size:t.size,color:t.color}},[t._v(t._s(t.icon))]),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:d.a})},398:function(t,e,n){"use strict";n(39),n(51),n(77),n(69),n(22),n(47),n(368),n(13),n(28),n(369),n(370),n(371),n(372),n(373),n(374),n(375),n(376),n(377),n(378),n(379),n(380),n(381),n(29),n(62),n(363);var r=n(1),o=n(90),c=n(2),l=["sm","md","lg","xl"],d=["start","end","center"];function f(t,e){return l.reduce((function(n,r){return n[t+Object(c.v)(r)]=e(),n}),{})}var h=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},v=f("align",(function(){return{type:String,default:null,validator:h}})),m=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},w=f("justify",(function(){return{type:String,default:null,validator:m}})),y=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},S=f("alignContent",(function(){return{type:String,default:null,validator:y}})),x={align:Object.keys(v),justify:Object.keys(w),alignContent:Object.keys(S)},j={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,n){var r=j[t];if(null!=n){if(e)r+="-"+e.replace(t,"");return(r+="-"+n).toLowerCase()}}var P=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:Object.assign({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},v,{justify:{type:String,default:null,validator:m}},w,{alignContent:{type:String,default:null,validator:y}},S),render:function(t,e){var n=e.props,data=e.data,r=e.children,c="";for(var l in n)c+=String(n[l]);var d=P.get(c);return d||function(){var t,e;for(e in d=[],x)x[e].forEach((function(t){var r=n[t],o=_(e,t,r);o&&d.push(o)}));d.push(((t={"no-gutters":n.noGutters,"row--dense":n.dense})["align-"+n.align]=n.align,t["justify-"+n.justify]=n.justify,t["align-content-"+n.alignContent]=n.alignContent,t)),P.set(c,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),r)}})},403:function(t,e,n){"use strict";n(70),n(69),n(71),n(77),n(239),n(363),n(63),n(78);var r=n(1);var o,c=n(90);e.a=(o="container",r.a.extend({name:"v-"+o,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var n=e.props,data=e.data,r=e.children;data.staticClass=(o+" "+(data.staticClass||"")).trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" "+l.join(" "))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,r)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,r=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},n=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":r.fluid}).concat(n||[])}),o)}})},419:function(t,e,n){"use strict";n.r(e);n(17);var r={computed:{getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{logout:function(){var t=this;this.$store.dispatch({type:"auth/signOut"}).then((function(){t.$router.push("/login")})).catch((function(t){alert(t)}))},updateProfilePhoto:function(t){this.$store.dispatch({type:"auth/updateProfile",photo:t.target.files[0]}).then((function(){})).catch((function(t){alert(t)}))},updateProfileName:function(){var t=this;this.$store.dispatch({type:"auth/updateProfile",name:this.name}).then((function(){t.name=""})).catch((function(t){alert(t)}))},updateEmail:function(){var t=this;this.$store.dispatch({type:"auth/updateEmailWithAuth",email:this.email,confirmationPassword:this.confirmationPassword}).then((function(){t.email="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},updatePassword:function(){var t=this;this.$store.dispatch({type:"auth/updatePasswordWithAuth",password:this.password,confirmationPassword:this.confirmationPassword}).then((function(){t.password="",t.confirmationPassword=""})).catch((function(t){alert(t)}))},deleteAccount:function(){var t=this;this.$store.dispatch({type:"auth/deleteAccountWithAuth",confirmationPassword:this.confirmationPassword}).then((function(){t.confirmationPassword=""})).catch((function(t){alert(t)}))}}},o=n(46),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},453:function(t,e,n){var content=n(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1b7833da",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n(453)},520:function(t,e,n){var r=n(15)(!1);r.push([t.i,".TopImg{margin-left:auto;margin-right:auto}.TopTitle{font-size:1vw;font-weight:700}.BattleBtn,.ScanBtn{width:100%;text-align:center}.BtnTexts{padding-top:1.5vw}.BattleBtnText,.ScanBtnText{font-size:2vw;font-weight:700}",""]),t.exports=r},541:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{height:10,width:20}},computed:{Name:n(419).default.computed.getName}},o=(n(519),n(46)),c=n(89),l=n.n(c),d=n(189),f=n(403),h=n(137),v=n(398),m=n(358),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"mt-16"},[n("v-row",{attrs:{"align-content":"center",justify:"center"}},[n("v-img",{attrs:{src:"icon.png",width:"50%","aspect-ratio":1,contain:""}}),t._v(" "),n("StyledText",{attrs:{size:"2vw",color:"#000"}},[t._v("マナブアレルギーへようこそ！")])],1),t._v(" "),""!=t.Name?n("v-row",{attrs:{justify:"center"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{link:"",nuxt:"",to:"battle",color:"red",height:"10vw",width:"30vw"}},[n("StyledText",{attrs:{size:"2.5vw",icon:"mdi-sword",color:"#151311"}},[t._v("クイズでバトル！")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{link:"",nuxt:"",to:"scan",color:"green",height:"10vw",width:"30vw"}},[n("StyledText",{attrs:{size:"2.5vw",icon:"mdi-magnify",color:"#151311"}},[t._v("スキャンして探す！")])],1),t._v(" "),n("v-spacer")],1):n("v-row",{attrs:{justify:"center"}},[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{link:"",nuxt:"",to:"login",color:"red",height:"10vw",width:"30vw"}},[n("StyledText",{attrs:{size:"2.5vw",icon:"mdi-login",color:"#151311"}},[t._v("ログイン")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{link:"",nuxt:"",to:"create",color:"green",height:"10vw",width:"30vw"}},[n("StyledText",{attrs:{size:"2.5vw",icon:"mdi-account-plus",color:"#151311"}},[t._v("アカウント作成")])],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{StyledText:n(391).default}),l()(component,{VBtn:d.a,VContainer:f.a,VImg:h.a,VRow:v.a,VSpacer:m.a})}}]);