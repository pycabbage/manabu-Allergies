(window.webpackJsonp=window.webpackJsonp||[]).push([[30,16,17,18,19,20,23],{364:function(e,t,r){"use strict";r.r(t);var n={props:{color:{type:String,require:!1,default:"#fff"},size:{type:String,require:!1,default:void 0},icon:{type:String,require:!1,default:""}},computed:{textStyle:function(){var e="";return e+="color:"+this.color+";",void 0!==this.size&&(e+="font-size:"+this.size+";"),e}}},o=r(46),c=r(89),d=r.n(c),l=r(164),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{style:e.textStyle},[r("v-icon",{attrs:{size:e.size,color:e.color}},[e._v(e._s(e.icon))]),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VIcon:l.a})},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(8),o=(r(51),r(13),r(17),r(62),r(3)),c=function(){function e(e,t){switch(e){case"public":this.access="public";break;case"friend":this.access="friend";break;default:this.access="private"}this.id=t.uid,this.name=t.displayName,this.email=t.email}e.init=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(e,t){o.a.onAuthStateChanged((function(r){r?e(r):t("Not Login")}))}));case 2:return n=t.sent,data=new e(r,n),t.abrupt("return",data);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();var t=e.prototype;return t.set=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.b.collection(this.access).doc(this.id).update(((n={})[t]=r,n));case 3:e.next=11;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,o.b.collection(this.access).doc(this.id).set({id:this.id});case 9:return e.next=11,o.b.collection(this.access).doc(this.id).update(((c={})[t]=r,c));case 11:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(t,r){return e.apply(this,arguments)}}(),t.get=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.collection(this.access).doc(this.id).get();case 2:if(data=e.sent.data(),null!=t){e.next=7;break}return e.abrupt("return",data);case 7:return e.abrupt("return",data[t]);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.getPoint=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.collection("public").doc(this.id).get();case 2:return data=e.sent.data().point,e.abrupt("return",data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.setPoint=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(p){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.collection("public").doc(this.id).update({point:p});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.setZukan=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(p){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.get("zukanID");case 2:if(e.t0=t=e.sent,null==e.t0){e.next=7;break}e.t1=t,e.next=8;break;case 7:e.t1=[];case 8:return r=e.t1,console.log(r),console.log(p),r.push(p),e.next=14,o.b.collection("public").doc(this.id).update({zukanID:r});case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.getAll=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("public"!=this.access&&"friend"!=this.access){e.next=9;break}return data=[],e.next=4,o.b.collection(this.access).limit(20).orderBy("point","desc").get();case 4:return e.next=6,e.sent.forEach((function(e){null==t?data.push({id:e.id,value:e.data()}):data.push({id:e.id,value:e.data()[t]})}));case 6:return e.abrupt("return",data);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.setFile=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.ref().child(this.id+"/"+t).put(r);case 2:return n=e.sent,e.abrupt("return",n.ref.getDownloadURL());case 4:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}(),t.getFile=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.ref().child(this.id+"/"+t).getDownloadURL();case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),t.deleteFile=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.ref().child(this.id+"/"+t).delete();case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),e}();function d(e){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.d.ref().child(t+"/userPhoto").getDownloadURL();case 3:return a=e.sent,e.abrupt("return",a);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return","default");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}},371:function(e,t,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("795d9298",content,!0,{sourceMap:!1})},372:function(e,t,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("1bbdf444",content,!0,{sourceMap:!1})},375:function(e,t,r){"use strict";r.r(t);var n={props:{title:{type:String,require:!1,default:"Input"},icon:{type:String,require:!1,default:""},password:{type:Boolean,require:!1,default:!1},mail:{type:Boolean,require:!1,default:!1},required:{type:Boolean,require:!1,default:!1},defaultValue:{type:String,require:!1,default:""},editSwitch:{type:Boolean,require:!1,default:!1}},computed:{form_type:function(){return this.password?this.passwdShow?"text":"password":this.mail?"email":"text"},form_type_icon:function(){return""!=this.icon?this.icon:this.password?"mdi-lock":this.mail?"mdi-email":""},value:{get:function(){return null!=this.value_?this.value_:this.defaultValue},set:function(e){""!=e&&(this.value_=e)}}},emits:["callback:changed","callback:pencil","callback:close"],data:function(){return{passwdShow:!1,disabled:!1,editable:!this.editSwitch,value_:void 0}},methods:{checker:function(){return this.required&&""==this.value?"このフォームへの入力は必須です。":!(this.mail&&!/.+@.+\..+/.test(this.value))||"メールアドレスを正しく入力してください。"},pencilClick:function(){this.editable?this.defaultValue!=this.value?this.$emit("callback:changed",this.value):(this.$emit("callback:close"),this.editable=!1):(this.editable=!0,this.password&&(this.$refs.form.value=""),this.$emit("callback:pencil"))}}},o=r(46),c=r(89),d=r.n(c),l=r(470),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{ref:"form",attrs:{label:e.title+(e.required?" *":""),type:e.form_type,"append-icon":e.password&&e.editable?e.passwdShow?"mdi-eye":"mdi-eye-off":"","append-outer-icon":e.editSwitch?e.editable?"mdi-check":"mdi-pencil":"",disabled:e.disabled,rules:[e.checker],"prepend-icon":e.form_type_icon,readonly:!e.editable},on:{"click:append":function(t){e.passwdShow=!e.passwdShow},"click:append-outer":e.pencilClick},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})}),[],!1,null,null,null);t.default=component.exports;d()(component,{VTextField:l.a})},376:function(e,t,r){"use strict";r.r(t);var n=r(8),data=(r(51),r(369)),o={props:{userData:{type:Object,require:!0}},data:function(){return{img:""}},computed:{IconPath:function(){return"default"==this.img?"./defaultAvater.png":this.img}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(data.b)(e.userData.id);case 2:r=t.sent,e.img=r;case 4:case"end":return t.stop()}}),t)})))()}},c=(r(396),r(46)),d=r(89),l=r.n(d),f=r(137),v=r(103),h=r(167),m=r(168),_=r(69),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list-item",[r("v-list-item-avatar",{attrs:{width:"5vw"}},[r("v-img",{attrs:{src:e.IconPath}})],1),e._v(" "),r("v-list-item-title",[e._v(e._s(e.userData.name))]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(e.userData.id))]),e._v(" "),r("v-list-item-action",[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VImg:f.a,VListItem:v.a,VListItemAction:h.a,VListItemAvatar:m.a,VListItemSubtitle:_.b,VListItemTitle:_.c})},396:function(e,t,r){"use strict";r(371)},397:function(e,t,r){var n=r(15)(!1);n.push([e.i,".FriendAvatarDatas{margin-top:1vw;margin-right:0}.AvatarDataText{font-size:max(1.5vw,12px);font-weight:700;margin-right:0}.FriendAvatarControlBtn{display:inline-block;margin-left:0;float:right}",""]),e.exports=n},398:function(e,t,r){"use strict";r(372)},399:function(e,t,r){var n=r(15)(!1);n.push([e.i,".PageTitle{margin-top:4vh;margin-bottom:6vh;font-weight:700;font-size:max(4vw,50px)}",""]),e.exports=n},401:function(e,t,r){"use strict";r.r(t);r(398);var n=r(46),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"PageTitle"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},407:function(e,t,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("8609e458",content,!0,{sourceMap:!1})},410:function(e,t,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("40f9ba6c",content,!0,{sourceMap:!1})},432:function(e,t,r){"use strict";r(407)},433:function(e,t,r){var n=r(15)(!1);n.push([e.i,".DialogTexts{color:#fff}",""]),e.exports=n},434:function(e,t,r){"use strict";r(410)},435:function(e,t,r){var n=r(15)(!1);n.push([e.i,".FriendAvatarIcon{display:inline-block;margin:2vh 2vw}.FriendListCards{margin-bottom:1vh;margin-left:1vw}.FriendAvatarDatas{display:inline-block;margin:3vh 2vw}.AvatarDataText{font-size:2rem;font-weight:700;margin-right:12vw}.FriendAvatarControlBtn{display:inline-block;margin:4vh 2vw;float:right}",""]),e.exports=n},442:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{testUser:[{id:"0",name:"bob"},{id:"1",name:"john"},{id:"2",name:"mike"}]}},computed:{getRequestFriendList:function(){return this.$store.getters["friend/requestFriendList"]}},methods:{deleteRequestFriend:function(e){this.$store.dispatch({type:"friend/deleteRequestFriend",id:e}).then((function(){})).catch((function(e){}))}}},o=r(46),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{width:"80%"}},e._l(e.getRequestFriendList,(function(t){return r("div",{key:t.id},[r("FriendListCard",{attrs:{userData:t}},[r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return e.deleteRequestFriend(t.id)}}},[r("StyledText",{attrs:{color:"white"}},[e._v("DELETE")])],1)],1)],1)})),0),e._v(" "),0==e.getRequestFriendList.length?r("h2",[e._v("あなたからお友達におくったフレンドリクエストは今のところないようです..."),r("br"),e._v('"ADD Friend"ボタンを使ってリクエストしてみましょう!!')]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},443:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{testUser:[{id:"0",name:"bob"},{id:"1",name:"john"},{id:"2",name:"mike"}]}},computed:{getReceiveRequestFriendList:function(){return this.$store.getters["friend/receiveFriendList"]}},methods:{addReceiveFriend:function(e){this.$store.dispatch({type:"friend/addReceiveFriend",id:e}).then((function(){})).catch((function(e){alert(e)}))},deleteReceiveFriend:function(e){this.$store.dispatch({type:"friend/deleteReceiveFriend",id:e}).then((function(){})).catch((function(e){alert(e)}))}}},o=r(46),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{width:"80%"}},e._l(e.getReceiveRequestFriendList,(function(t){return r("div",{key:t.id},[r("FriendListCard",{attrs:{userData:t}},[r("v-btn",{attrs:{color:"#8ccb00"},on:{click:function(r){return e.addReceiveFriend(t.id)}}},[r("StyledText",{attrs:{color:"white"}},[e._v("承認")])],1),e._v(" "),r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return e.deleteReceiveFriend(t.id)}}},[r("StyledText",{attrs:{color:"white"}},[e._v("棄却")])],1)],1)],1)})),0),e._v(" "),0==e.getReceiveRequestFriendList.length?r("h2",[e._v("今のところ、あなたはお友達からフレンドリクエストを受け取っていないようです...")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},454:function(e,t,r){var content=r(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("24ca8690",content,!0,{sourceMap:!1})},463:function(e,t,r){"use strict";r.r(t);var n={props:{ThemeColor:{type:String,require:!0},userId:{type:String,require:!1,default:""}},data:function(){return{addfrienddialog:!1,errorMsg:"",loading:!1}},methods:{requestFriend:function(){var e=this;this.loading=!0,this.$refs.form.validate()?this.$store.dispatch({type:"friend/requestFriend",id:this.$refs.requestFriendId.value}).then((function(){e.loading=!1,e.dialog=!1})).catch((function(t){e.errorMsg="Error: same"==t?"自分自身を追加することはできません...!":t,e.loading=!1})):this.loading=!1},showDialog:function(){this.addfrienddialog=!0}},mounted:function(){""!=this.userId&&this.showDialog()}},o=(r(432),r(46)),c=r(89),d=r.n(c),l=r(194),f=r(366),v=r(363),h=r(544),m=r(452),_=r(406),x=r(164),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-btn",{attrs:{color:"#8ccb00",large:""},on:{click:function(t){e.addfrienddialog=!0}}},[r("v-icon",{attrs:{color:"white"}},[e._v("mdi-account-plus")]),e._v(" "),r("StyledText",{attrs:{color:"white"}},[e._v("Add Friend")])],1),e._v(" "),r("v-dialog",{attrs:{width:"400px"},model:{value:e.addfrienddialog,callback:function(t){e.addfrienddialog=t},expression:"addfrienddialog"}},[r("v-card",[r("v-card-title",[e._v("フレンドリクエスト送信")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-subtitle",[e._v("\n        フォームにお友達のユーザーIDを入力するとお友達にフレンドリクエストが送信されます。"),r("br"),e._v("お友達がフレンドリクエストを承認すると、フレンドとして登録されます。\n      ")]),e._v(" "),r("v-card-text",[r("StyledText",{attrs:{color:"red"}},[e._v(e._s(e.errorMsg))]),e._v(" "),r("v-form",{ref:"form",attrs:{disabled:e.loading}},[r("TextForm",{ref:"requestFriendId",attrs:{title:"Friend's User ID",icon:"mdi-account-outline",required:"",defaultValue:e.userId}})],1)],1),e._v(" "),r("v-card-actions",{staticClass:"justify-end"},[r("v-btn",{attrs:{disabled:e.loading},on:{click:function(t){e.addfrienddialog=!1}}},[e._v("キャンセル")]),e._v(" "),r("v-btn",{attrs:{color:"green",loading:e.loading},on:{click:e.requestFriend}},[e._v("送信")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{StyledText:r(364).default,TextForm:r(375).default}),d()(component,{VBtn:l.a,VCard:f.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VDialog:h.a,VDivider:m.a,VForm:_.a,VIcon:x.a})},464:function(e,t,r){"use strict";r.r(t);var n={components:{FriendListCard:r(376).default},computed:{getFriendListGet:function(){return this.$store.getters["friend/friendList"]}},methods:{deleteFriend:function(e){this.$store.dispatch({type:"friend/deleteFriend",id:e}).then((function(){})).catch((function(e){}))}}},o=(r(434),r(46)),c=r(89),d=r.n(c),l=r(194),f=r(166),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-list",{attrs:{width:"80%"}},e._l(e.getFriendListGet,(function(t){return r("div",{key:t.id},[r("FriendListCard",{attrs:{userData:t}},[r("v-btn",{attrs:{color:"#ff4956"},on:{click:function(r){return e.deleteFriend(t.id)}}},[r("StyledText",{attrs:{color:"white"}},[e._v("DELETE")])],1)],1)],1)})),0),e._v(" "),0==e.getFriendListGet.length?r("h2",[e._v("まだお友達はいないようです...お友達を追加しましょう!!")]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{StyledText:r(364).default,FriendListCard:r(376).default}),d()(component,{VBtn:l.a,VList:f.a})},506:function(e,t,r){"use strict";r(454)},507:function(e,t,r){var n=r(15)(!1);n.push([e.i,".AddFriendBtn{float:left;bottom:10vh}.TabTexts{font-size:max(.9vw,10px)}.FriendTabs{width:100%}",""]),e.exports=n},553:function(e,t,r){"use strict";r.r(t);r(42),r(40),r(41),r(49);var n=r(8),o=(r(51),r(13),r(28),r(29),r(247),r(30),r(17),r(463)),c=r(453),d=r(505),l=r(464),f=r(442),v=r(443);function h(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var _={components:{AddFriendBtn:o.default,QrcodeVue:c.a,CurrentFriendList:l.default,FriendRequestedList:f.default,FriendRequestList:v.default,QrcodeStream:d.QrcodeStream},data:function(){return{ThemeColor:"light-blue darken-1",dialog:!1,loading:!1,requestFriendId:"",QRdialog:!1,uid:this.$route.query.id,error:""}},computed:{isTabVertical:function(){return!(window.innerWidth>500)},getEmailVerified:function(){return this.$store.getters["auth/emailVerified"]},getId:function(){return this.$store.getters["auth/id"]},getEmail:function(){return this.$store.getters["auth/email"]},getName:function(){return this.$store.getters["auth/name"]},getPhoto:function(){return this.$store.getters["auth/photo"]}},methods:{onDecode:function(text){var e=new URL(text);e.searchParams.has("id")&&(this.uid=e.searchParams.get("id"),this.$refs.addBtn.showDialog())},tracking:function(e,t){for(var r,n=h(e);!(r=n()).done;){var o=r.value.cornerPoints,c=o[0],d=o.slice(1);t.strokeStyle="red",t.beginPath(),t.moveTo(c.x,c.y);for(var l,f=h(d);!(l=f()).done;){var v=l.value,m=v.x,_=v.y;t.lineTo(m,_)}t.lineTo(c.x,c.y),t.closePath(),t.stroke()}},onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=8;break;case 5:r.prev=5,r.t0=r.catch(0),"NotAllowedError"===r.t0.name?t.error="ERROR: you need to grant camera access permission":"NotFoundError"===r.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name?t.error="ERROR: Stream API is not supported in this browser":"InsecureContextError"===r.t0.name?t.error="ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.":t.error="ERROR: Camera error ("+r.t0.name+")";case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},x=(r(506),r(46)),w=r(89),y=r.n(w),R=r(194),F=r(366),k=r(363),T=r(404),S=r(544),L=r(545),V=r(546),C=r(562),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.getEmailVerified?r("v-container",[r("PageTitle",[e._v("フレンド")]),e._v(" "),r("div",{staticClass:"FriendTabs"},[r("v-tabs",[r("v-tab",[r("span",{staticClass:"TabTexts"},[e._v("Friend List")])]),e._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[e._v("Friend Request List")])]),e._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[e._v("You Requested List")])]),e._v(" "),r("v-tab-item",[r("CurrentFriendList")],1),e._v(" "),r("v-tab-item",[r("FriendRequestList")],1),e._v(" "),r("v-tab-item",[r("FriendRequestedList")],1)],1)],1),e._v(" "),r("v-dialog",{model:{value:e.QRdialog,callback:function(t){e.QRdialog=t},expression:"QRdialog"}},[r("v-tabs",[r("v-tab",[r("span",{staticClass:"TabTexts"},[e._v("表示")])]),e._v(" "),r("v-tab",[r("span",{staticClass:"TabTexts"},[e._v("読み取り")])]),e._v(" "),r("v-tab-item",[r("v-card",[r("v-card-subtitle",[e._v("このQRコードを使用してお友達からリクエストを送信してもらってください。"),r("br"),e._v("(あらかじめログインしたブラウザで開く必要があります。)")]),e._v(" "),r("v-card-text",[r("qrcodeVue",{attrs:{value:"https://www.cabbageqq.tk/manabu-Allergies/friend?id="+e.getId}})],1)],1)],1),e._v(" "),r("v-tab-item",[r("v-card",[r("v-card-subtitle",[e._v("QRコードを読み取ります。枠の中に入るように調整してください。")]),e._v(" "),""!=e.error?r("StyledText",{attrs:{color:"red"}},[e._v(e._s(e.error))]):e._e(),e._v(" "),r("v-card-text",[r("QrcodeStream",{attrs:{track:e.tracking},on:{decode:e.onDecode,init:e.onInit}})],1)],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"AddFriendBtn"},[r("AddFriendBtn",{ref:"addBtn",attrs:{ThemeColor:e.ThemeColor,userId:e.uid}}),r("v-btn",{attrs:{color:"green",large:""},on:{click:function(t){e.QRdialog=!0}}},[r("StyledText",{attrs:{icon:"mdi-qrcode"}},[e._v("QRコード")])],1),e._v(" "),r("h3",[e._v("あなたのユーザーID:"+e._s(e.getId))])],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;y()(component,{PageTitle:r(401).default,FriendRequestList:r(443).default,FriendRequestedList:r(442).default,StyledText:r(364).default}),y()(component,{VBtn:R.a,VCard:F.a,VCardSubtitle:k.b,VCardText:k.c,VContainer:T.a,VDialog:S.a,VTab:L.a,VTabItem:V.a,VTabs:C.a})}}]);