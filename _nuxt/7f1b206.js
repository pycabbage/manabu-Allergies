(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{227:function(e,t,r){var content=r(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("56b15182",content,!0,{sourceMap:!1})},238:function(e,t,r){"use strict";var n={data:function(e){return{drawer:!1,items:[{title:"トップ",to:"/",icon:"mdi-home"},{title:"ランキング",to:"/ranking",icon:"mdi-crown"},{title:"スキャン",to:"/scan",icon:"mdi-magnify-scan"},{title:"戦闘",to:"/battle",icon:"mdi-sword-cross"},{title:"マイページ",to:"/my-page",icon:"mdi-account"},{title:"図鑑",to:"/zukan",icon:"mdi-book"},{title:"フレンド",to:"/friend",icon:"mdi-account-group"}]}},methods:{}},o=(r(278),r(46)),c=r(89),d=r.n(c),l=r(355),m=r(360),f=r(356),h=r(164),v=r(166),x=r(103),w=r(73),R=r(167),y=r(357),V=r(358),F=r(359),k=r(191),L=r(235),I=r.n(L),P=r(111),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:"",to:t.to,nuxt:""}},[r("v-list-item-content",[r("v-list-item-title",[r("v-icon",[e._v(e._s(t.icon))]),e._v(e._s(t.title))],1)],1)],1)})),1)],1)],1),e._v(" "),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),r("v-toolbar-title",[e._v(" マナブアレルギー ")]),e._v(" "),r("v-spacer"),e._v(" "),r("JumpMyPageIcon",{attrs:{avatarIconSize:"45",userIconPath:this.$store.getters["auth/photo"]}})],1),e._v(" "),r("v-main",{directives:[{name:"touch",rawName:"v-touch",value:{right:function(){e.drawer=!0}},expression:"{right:() => {drawer=true}}"}]},[r("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{JumpMyPageIcon:r(343).default}),d()(component,{VApp:l.a,VAppBar:m.a,VAppBarNavIcon:f.a,VIcon:h.a,VList:v.a,VListItem:x.a,VListItemContent:w.a,VListItemGroup:R.a,VListItemTitle:w.b,VMain:y.a,VNavigationDrawer:V.a,VSpacer:F.a,VToolbarTitle:k.a}),I()(component,{Touch:P.a})},240:function(e,t,r){"use strict";r.r(t);var n={computed:{IconPath:function(){return"default"==this.userIconPath?"./defaultAvater.png":this.userIconPath}},props:{userIconPath:{require:!0},avatarIconSize:{type:String,require:!1,default:"96"}}},o=r(46),c=r(89),d=r.n(c),l=r(165),m=r(137),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-avatar",{attrs:{size:e.avatarIconSize}},[r("v-img",{attrs:{src:e.IconPath}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAvatar:l.a,VImg:m.a})},247:function(e,t,r){r(248),e.exports=r(249)},266:function(e,t,r){"use strict";r.r(t),t.default=function(e){"/"===e.route.path||e.query.authdetour||e.store.dispatch({type:"auth/authStateWithVerification"}).then((function(t){return"/friend"==e.route.path&&(e.store.dispatch({type:"friend/getRequestFriend"}),e.store.dispatch({type:"friend/getReceiveFriend"})),e.store.dispatch({type:"friend/getFriendList"}),"/login"!=e.route.path&&"/create"!=e.route.path||!t.emailVerified?"/login"==e.route.path||"/create"==e.route.path||t.emailVerified?void 0:e.redirect("/login"):e.redirect("/")})).catch((function(){if("/login"!==e.route.path&&"/create"!==e.route.path)return e.redirect("/login")}))}},278:function(e,t,r){"use strict";r(227)},279:function(e,t,r){var n=r(15)(!1);n.push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),e.exports=n},3:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return d}));var n=r(76);r(337),r(344),r(345);0===n.a.apps.length&&n.a.initializeApp({apiKey:"AIzaSyASesJoMw-hIpCvyrwZorB-8g1W0OWATTU",authDomain:"manabu-allergies-a9031.firebaseapp.com",projectId:"manabu-allergies-a9031",storageBucket:"manabu-allergies-a9031.appspot.com",messagingSenderId:"894469061687",appId:"1:894469061687:web:e4017d14e2a055287913b2",measurementId:"G-EHLK3N0HCB"});var o=n.a.auth(),c=n.a.firestore(),d=n.a.storage();t.c=n.a},336:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return d})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(8),o=(r(51),r(17),r(13),r(3)),c=function(){return{emailVerified:!1,id:"",email:"",name:"",photo:""}},d={emailVerified:function(e){return e.emailVerified},id:function(e){return e.id},email:function(e){return e.email},name:function(e){return e.name},photo:function(e){return e.photo}},l={set:function(e,t){var r,n,o,c,d;e.emailVerified=null!=(r=t.emailVerified)?r:e.emailVerified,e.id=null!=(n=t.id)?n:e.id,e.email=null!=(o=t.email)?o:e.email,e.name=null!=(c=t.name)?c:e.name,e.photo=null!=(d=t.photo)?d:e.photo}},m={authStateWithVerification:function(e){var t=this;return new Promise((function(r,n){t.getters["auth/emailVerified"]?r({emailVerified:t.getters["auth/emailVerified"],id:t.getters["auth/id"],email:t.getters["auth/email"],name:t.getters["auth/name"],photo:t.getters["auth/photo"]}):o.a.onAuthStateChanged((function(t){if(t){var o={emailVerified:t.emailVerified,id:t.uid,email:t.email,name:t.displayName,photo:t.photoURL};e.commit(Object.assign({type:"set"},o)),r(Object.assign({},o))}else e.commit({type:"set",emailVerified:!1}),n()}))}))},createUserWithProfileVerification:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.createUserWithEmailAndPassword(t.email,t.password);case 2:return n=r.sent,r.next=5,n.user.updateProfile({displayName:t.name,photoURL:t.photo});case 5:return r.next=7,n.user.sendEmailVerification();case 7:return c=o.b.batch(),d=o.b.collection("public").doc(n.user.uid),l=o.b.collection("private").doc(n.user.uid),m=o.b.collection("request").doc(n.user.uid),c.set(d,{id:n.user.uid,name:n.user.displayName,photo:n.user.photoURL,point:0}),c.set(l,{requestFriend:[]}),c.set(m,{receiveFriend:[]}),r.next=16,c.commit();case 16:return e.commit({type:"set",emailVerified:n.user.emailVerified,id:n.user.uid,email:n.user.email,name:n.user.displayName,photo:n.user.photoURL}),r.abrupt("return",n);case 18:case"end":return r.stop()}}),r)})))()},signInWithVerification:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=o.a.currentUser,r.getters["auth/emailVerified"]||!c){n.next=7;break}return n.next=4,c.sendEmailVerification();case 4:return n.abrupt("return",c);case 7:return n.next=9,o.a.signInWithEmailAndPassword(t.email,t.password);case 9:return d=n.sent,e.commit({type:"set",emailVerified:d.user.emailVerified,id:d.user.uid,email:d.user.email,name:d.user.displayName,photo:d.user.photoURL}),n.abrupt("return",d.user);case 12:case"end":return n.stop()}}),n)})))()},signOut:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.signOut();case 2:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""});case 3:case"end":return t.stop()}}),t)})))()},updateProfile:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.aaa){n.next=8;break}return n.next=3,o.a.currentUser.updateProfile({photoURL:t.aaa});case 3:return n.next=5,o.b.collection("public").doc(r.getters["auth/id"]).update({photo:t.aaa});case 5:e.commit({type:"set",photo:t.aaa}),n.next=25;break;case 8:return n.next=10,o.d.ref().child(r.getters["auth/id"]+"/userPhoto").put(t.photo);case 10:if(d=n.sent,l=null!=(c=t.name)?c:r.getters["auth/name"],!t.photo){n.next=18;break}return n.next=15,d.ref.getDownloadURL();case 15:n.t0=n.sent,n.next=19;break;case 18:n.t0=r.getters["auth/photo"];case 19:return m=n.t0,n.next=22,o.a.currentUser.updateProfile({displayName:l,photoURL:m});case 22:return n.next=24,o.b.collection("public").doc(r.getters["auth/id"]).update({name:l,photo:m});case 24:e.commit({type:"set",name:l,photo:m});case 25:case"end":return n.stop()}}),n)})))()},updateEmailWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.a.currentUser,r.next=3,o.c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 3:return c=r.sent,r.next=6,n.reauthenticateWithCredential(c);case 6:return r.next=8,n.updateEmail(t.email);case 8:e.commit({type:"set",email:t.email});case 9:case"end":return r.stop()}}),r)})))()},updatePasswordWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.c.auth().currentUser,e.next=3,o.c.auth.EmailAuthProvider.credential(r.email,t.confirmationPassword);case 3:return n=e.sent,e.next=6,r.reauthenticateWithCredential(n);case 6:return e.next=8,r.updatePassword(t.password);case 8:case"end":return e.stop()}}),e)})))()},resetPassword:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.auth().sendPasswordResetEmail(t.email);case 2:case"end":return e.stop()}}),e)})))()},deleteAccountWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l,m,f,h,v;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.c.auth().currentUser,c=n.uid,d=o.b.batch(),l=o.b.collection("public").doc(c),m=o.b.collection("private").doc(c),f=o.b.collection("request").doc(c),h=o.b.collection("friend").doc(c),d.delete(l),d.delete(m),d.delete(f),d.delete(h),r.next=13,d.commit();case 13:return r.next=15,o.c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 15:return v=r.sent,r.next=18,n.reauthenticateWithCredential(v);case 18:return r.next=20,n.delete();case 20:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""});case 21:case"end":return r.stop()}}),r)})))()}}},339:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o}));var n=function(){return{file:""}},o={set:function(e,t){e.file=t}}},340:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return d})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(8),o=(r(48),r(62),r(17),r(51),r(3)),c=function(){return{requestFriendList:[],receiveFriendList:[],friendList:[]}},d={requestFriendList:function(e){return e.requestFriendList},receiveFriendList:function(e){return e.receiveFriendList},friendList:function(e){return e.friendList}},l={set:function(e,t){var r,n,o;e.requestFriendList=null!=(r=t.requestFriendList)?r:e.requestFriendList,e.receiveFriendList=null!=(n=t.receiveFriendList)?n:e.receiveFriendList,e.friendList=null!=(o=t.friendList)?o:e.friendList}},m={requestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=r.getters["auth/id"],t.id===c){n.next=12;break}return d=o.b.batch(),l=o.b.collection("request").doc(t.id),m=o.b.collection("private").doc(c),d.update(l,{user:o.c.firestore.FieldValue.arrayUnion({id:c})}),d.update(m,{requestFriend:o.c.firestore.FieldValue.arrayUnion({id:t.id})}),n.next=9,d.commit();case 9:e.dispatch({type:"getRequestFriend"}),n.next=13;break;case 12:throw Error("same");case 13:case"end":return n.stop()}}),n)})))()},deleteRequestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("request").doc(t.id),m=o.b.collection("private").doc(c),d.update(l,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(m,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),n.next=8,d.commit();case 8:e.dispatch({type:"getRequestFriend"});case 9:case"end":return n.stop()}}),n)})))()},getRequestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("private").doc(n).get();case 3:return c=t.sent,d=c.data().requestFriend.map((function(e){return e.id})),t.next=7,o.b.collection("public").where("id","in",d).get();case 7:return l=t.sent,m=[],t.next=11,l.forEach((function(e){m.push({id:e.id,name:e.data().name})}));case 11:e.commit({type:"set",requestFriendList:m});case 12:case"end":return t.stop()}}),t)})))()},addReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m,f,h,v,x;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("friend").doc(c).collection("friend").doc(t.id),m=o.b.collection("friend").doc(t.id).collection("friend").doc(c),f=o.b.collection("private").doc(c),h=o.b.collection("request").doc(t.id),v=o.b.collection("request").doc(c),x=o.b.collection("private").doc(t.id),d.set(l,{id:t.id}),d.set(m,{id:c}),d.update(f,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(h,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(v,{user:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(x,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:c})}),n.next=16,d.commit();case 16:e.dispatch({type:"getReceiveFriend"});case 17:case"end":return n.stop()}}),n)})))()},deleteReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m,f,h;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("private").doc(c),m=o.b.collection("request").doc(t.id),f=o.b.collection("request").doc(c),h=o.b.collection("private").doc(t.id),d.update(l,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(m,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(f,{user:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(h,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:c})}),n.next=12,d.commit();case 12:e.dispatch({type:"getReceiveFriend"});case 13:case"end":return n.stop()}}),n)})))()},getReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("request").doc(n).get();case 3:return c=t.sent,d=c.data().user.map((function(e){return e.id})),t.next=7,o.b.collection("public").where("id","in",d).get();case 7:return l=t.sent,m=[],t.next=11,l.forEach((function(e){return m.push({id:e.id,name:e.data().name})}));case 11:e.commit({type:"set",receiveFriendList:m});case 12:case"end":return t.stop()}}),t)})))()},deleteFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("friend").doc(c).collection("friend").doc(t.id),m=o.b.collection("friend").doc(t.id).collection("friend").doc(c),d.delete(l),d.delete(m),n.next=8,d.commit();case 8:e.dispatch({type:"getFriendList"});case 9:case"end":return n.stop()}}),n)})))()},getFriendList:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("friend").doc(n).collection("friend").get();case 3:return c=t.sent,d=[],c.forEach((function(e){return d.push(e.id)})),t.next=8,o.b.collection("public").where("id","in",d).get();case 8:return l=t.sent,m=[],t.next=12,l.forEach((function(e){return m.push({id:e.id,name:e.data().name})}));case 12:e.commit({type:"set",friendList:m});case 13:case"end":return t.stop()}}),t)})))()}}},341:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o}));var n=function(){return{image:""}},o={set:function(e,image){e.image=image}}},343:function(e,t,r){"use strict";r.r(t);var n={props:{userIconPath:{require:!1,default:"this.$store.getters['auth/photo']"},avatarIconSize:{type:String,require:!1,default:96}}},o=r(46),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{attrs:{to:"/my-page"}},[r("AvatarIcon",{attrs:{userIconPath:e.userIconPath,avatarIconSize:e.avatarIconSize}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AvatarIcon:r(240).default})}},[[247,39,9,40]]]);