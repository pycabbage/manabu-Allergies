(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{231:function(e,t,r){var content=r(315);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("56b15182",content,!0,{sourceMap:!1})},238:function(e,t,r){"use strict";var n={components:{Menu:r(239).default},data:function(e){return{drawer:!1,items:[{title:"トップ",to:"/"},{title:"スキャン",to:"/scan"},{title:"戦闘",to:"/battle"},{title:"マイページ",to:"/my-page"},{title:"図鑑",to:"/zukan"},{title:"フレンドリスト",to:"/friend"}]}},methods:{}},o=(r(314),r(40)),c=r(70),d=r.n(c),l=r(356),m=r(361),f=r(357),h=r(163),v=r(103),x=r(37),w=r(167),R=r(358),y=r(359),V=r(360),F=r(179),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{fixed:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:"",to:t.to,nuxt:""}},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1),e._v(" "),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!e.drawer}}}),e._v(" "),r("v-toolbar-title",[e._v(" マナブアレルギー ")]),e._v(" "),r("v-spacer"),e._v(" "),r("JumpMyPageIcon",{attrs:{avatarIconSize:"45",userIconPath:this.$store.getters["auth/photo"]}})],1),e._v(" "),r("v-main",[r("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{JumpMyPageIcon:r(344).default}),d()(component,{VApp:l.a,VAppBar:m.a,VAppBarNavIcon:f.a,VList:h.a,VListItem:v.a,VListItemContent:x.a,VListItemGroup:w.a,VListItemTitle:x.b,VMain:R.a,VNavigationDrawer:y.a,VSpacer:V.a,VToolbarTitle:F.a})},239:function(e,t,r){"use strict";r.r(t);var n={name:"Menu",components:!0,data:function(){return{items:[{title:"トップ",to:"/"},{title:"戦闘",to:"/battle"},{title:"マイページ",to:"/my-page"},{title:"ダイアログのテスト",to:"/dialog-test"},{title:"図鑑",to:"/zukan-index"}]}}},o=r(40),c=r(70),d=r.n(c),l=r(163),m=r(103),f=r(37),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",{attrs:{nav:""}},e._l(e.items,(function(t){return r("v-list-item",{key:t.title,attrs:{link:"",to:t.to,nuxt:""}},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VList:l.a,VListItem:m.a,VListItemContent:f.a,VListItemTitle:f.b})},242:function(e,t,r){"use strict";r.r(t);var n={props:{userIconPath:{require:!1,default:"this.$store.getters['auth/photo']"},avatarIconSize:{type:String,require:!1,default:"96"}}},o=r(40),c=r(70),d=r.n(c),l=r(166),m=r(136),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-avatar",{attrs:{size:e.avatarIconSize}},[r("v-img",{attrs:{src:e.userIconPath}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAvatar:l.a,VImg:m.a})},249:function(e,t,r){r(250),e.exports=r(251)},268:function(e,t,r){"use strict";r.r(t),t.default=function(e){"/"===e.route.path||e.query.authdetour||e.store.dispatch({type:"auth/authStateWithVerification"}).then((function(t){return"/friend"==e.route.path&&(e.store.dispatch({type:"friend/getRequestFriend"}),e.store.dispatch({type:"friend/getReceiveFriend"})),e.store.dispatch({type:"friend/getFriendList"}),"/login"!=e.route.path&&"/create"!=e.route.path||!t.emailVerified?"/login"==e.route.path||"/create"==e.route.path||t.emailVerified?void 0:e.redirect("/login"):e.redirect("/")})).catch((function(){if("/login"!==e.route.path&&"/create"!==e.route.path)return e.redirect("/login")}))}},314:function(e,t,r){"use strict";r(231)},315:function(e,t,r){var n=r(15)(!1);n.push([e.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),e.exports=n},337:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return d})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(8),o=(r(54),r(17),r(13),r(4)),c=function(){return{emailVerified:!1,id:"",email:"",name:"",photo:""}},d={emailVerified:function(e){return e.emailVerified},id:function(e){return e.id},email:function(e){return e.email},name:function(e){return e.name},photo:function(e){return e.photo}},l={set:function(e,t){var r,n,o,c,d;e.emailVerified=null!=(r=t.emailVerified)?r:e.emailVerified,e.id=null!=(n=t.id)?n:e.id,e.email=null!=(o=t.email)?o:e.email,e.name=null!=(c=t.name)?c:e.name,e.photo=null!=(d=t.photo)?d:e.photo}},m={authStateWithVerification:function(e){var t=this;return new Promise((function(r,n){t.getters["auth/emailVerified"]?r({emailVerified:t.getters["auth/emailVerified"],id:t.getters["auth/id"],email:t.getters["auth/email"],name:t.getters["auth/name"],photo:t.getters["auth/photo"]}):o.a.onAuthStateChanged((function(t){if(t){var o={emailVerified:t.emailVerified,id:t.uid,email:t.email,name:t.displayName,photo:t.photoURL};e.commit(Object.assign({type:"set"},o)),r(Object.assign({},o))}else e.commit({type:"set",emailVerified:!1}),n()}))}))},createUserWithProfileVerification:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.createUserWithEmailAndPassword(t.email,t.password);case 2:return n=r.sent,r.next=5,n.user.updateProfile({displayName:t.name,photoURL:t.photo});case 5:return r.next=7,n.user.sendEmailVerification();case 7:return c=o.b.batch(),d=o.b.collection("public").doc(n.user.uid),l=o.b.collection("private").doc(n.user.uid),m=o.b.collection("request").doc(n.user.uid),c.set(d,{id:n.user.uid,name:n.user.displayName,photo:n.user.photoURL}),c.set(l,{requestFriend:[]}),c.set(m,{receiveFriend:[]}),r.next=16,c.commit();case 16:return e.commit({type:"set",emailVerified:n.user.emailVerified,id:n.user.uid,email:n.user.email,name:n.user.displayName,photo:n.user.photoURL}),r.abrupt("return",n);case 18:case"end":return r.stop()}}),r)})))()},signInWithVerification:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=o.a.currentUser,r.getters["auth/emailVerified"]||!c){n.next=7;break}return n.next=4,c.sendEmailVerification();case 4:return n.abrupt("return",c);case 7:return n.next=9,o.a.signInWithEmailAndPassword(t.email,t.password);case 9:return d=n.sent,e.commit({type:"set",emailVerified:d.user.emailVerified,id:d.user.uid,email:d.user.email,name:d.user.displayName,photo:d.user.photoURL}),n.abrupt("return",d.user);case 12:case"end":return n.stop()}}),n)})))()},signOut:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.signOut();case 2:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""});case 3:case"end":return t.stop()}}),t)})))()},updateProfile:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.d.ref().child(r.getters["auth/id"]+"/userPhoto").put(t.photo);case 2:if(d=n.sent,l=null!=(c=t.name)?c:r.getters["auth/name"],!t.photo){n.next=10;break}return n.next=7,d.ref.getDownloadURL();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=r.getters["auth/photo"];case 11:return m=n.t0,n.next=14,o.a.currentUser.updateProfile({displayName:l,photoURL:m});case 14:return n.next=16,o.b.collection("public").doc(r.getters["auth/id"]).update({name:l,photo:m});case 16:e.commit({type:"set",name:l,photo:m});case 17:case"end":return n.stop()}}),n)})))()},updateEmailWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.a.currentUser,r.next=3,o.c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 3:return c=r.sent,r.next=6,n.reauthenticateWithCredential(c);case 6:return r.next=8,n.updateEmail(t.email);case 8:e.commit({type:"set",email:t.email});case 9:case"end":return r.stop()}}),r)})))()},updatePasswordWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.c.auth().currentUser,e.next=3,o.c.auth.EmailAuthProvider.credential(r.email,t.confirmationPassword);case 3:return n=e.sent,e.next=6,r.reauthenticateWithCredential(n);case 6:return e.next=8,r.updatePassword(t.password);case 8:case"end":return e.stop()}}),e)})))()},resetPassword:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.auth().sendPasswordResetEmail(t.email);case 2:case"end":return e.stop()}}),e)})))()},deleteAccountWithAuth:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d,l,m,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=o.c.auth().currentUser,r.next=3,o.c.auth.EmailAuthProvider.credential(n.email,t.confirmationPassword);case 3:return c=r.sent,r.next=6,n.reauthenticateWithCredential(c);case 6:return r.next=8,n.delete();case 8:return d=o.b.batch(),l=o.b.collection("public").doc(n.uid),m=o.b.collection("private").doc(n.uid),f=o.b.collection("request").doc(n.uid),d.delete(l),d.set(m),d.set(f),r.next=17,d.commit();case 17:e.commit({type:"set",emailVerified:!1,id:"",email:"",name:"",photo:""});case 18:case"end":return r.stop()}}),r)})))()}}},340:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o}));var n=function(){return{file:""}},o={set:function(e,t){e.file=t}}},341:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return c})),r.d(t,"getters",(function(){return d})),r.d(t,"mutations",(function(){return l})),r.d(t,"actions",(function(){return m}));var n=r(8),o=(r(49),r(63),r(17),r(54),r(4)),c=function(){return{requestFriendList:[],receiveFriendList:[],friendList:[]}},d={requestFriendList:function(e){return e.requestFriendList},receiveFriendList:function(e){return e.receiveFriendList},friendList:function(e){return e.friendList}},l={set:function(e,t){var r,n,o;e.requestFriendList=null!=(r=t.requestFriendList)?r:e.requestFriendList,e.receiveFriendList=null!=(n=t.receiveFriendList)?n:e.receiveFriendList,e.friendList=null!=(o=t.friendList)?o:e.friendList}},m={requestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c=r.getters["auth/id"],t.id===c){n.next=12;break}return d=o.b.batch(),l=o.b.collection("request").doc(t.id),m=o.b.collection("private").doc(c),d.update(l,{user:o.c.firestore.FieldValue.arrayUnion({id:c})}),d.update(m,{requestFriend:o.c.firestore.FieldValue.arrayUnion({id:t.id})}),n.next=9,d.commit();case 9:e.dispatch({type:"getRequestFriend"}),n.next=13;break;case 12:throw Error("same");case 13:case"end":return n.stop()}}),n)})))()},deleteRequestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("request").doc(t.id),m=o.b.collection("private").doc(c),d.update(l,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(m,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),n.next=8,d.commit();case 8:e.dispatch({type:"getRequestFriend"});case 9:case"end":return n.stop()}}),n)})))()},getRequestFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("private").doc(n).get();case 3:return c=t.sent,d=c.data().requestFriend.map((function(e){return e.id})),t.next=7,o.b.collection("public").where("id","in",d).get();case 7:return l=t.sent,m=[],t.next=11,l.forEach((function(e){m.push({id:e.id,name:e.data().name})}));case 11:e.commit({type:"set",requestFriendList:m});case 12:case"end":return t.stop()}}),t)})))()},addReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m,f,h,v;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("friend").doc(c).collection("friend").doc(t.id),m=o.b.collection("friend").doc(t.id).collection("friend").doc(c),f=o.b.collection("private").doc(c),h=o.b.collection("request").doc(t.id),v=o.b.collection("request").doc(c),d.set(l,{id:t.id}),d.set(m,{id:c}),d.update(f,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(h,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(v,{user:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),n.next=14,d.commit();case 14:e.dispatch({type:"getReceiveFriend"});case 15:case"end":return n.stop()}}),n)})))()},deleteReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("private").doc(c),m=o.b.collection("request").doc(t.id),f=o.b.collection("request").doc(c),d.update(l,{requestFriend:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),d.update(m,{user:o.c.firestore.FieldValue.arrayRemove({id:c})}),d.update(f,{user:o.c.firestore.FieldValue.arrayRemove({id:t.id})}),n.next=10,d.commit();case 10:e.dispatch({type:"getReceiveFriend"});case 11:case"end":return n.stop()}}),n)})))()},getReceiveFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("request").doc(n).get();case 3:return c=t.sent,d=c.data().user.map((function(e){return e.id})),t.next=7,o.b.collection("public").where("id","in",d).get();case 7:return l=t.sent,m=[],t.next=11,l.forEach((function(e){return m.push({id:e.id,name:e.data().name})}));case 11:e.commit({type:"set",receiveFriendList:m});case 12:case"end":return t.stop()}}),t)})))()},deleteFriend:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,d,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=r.getters["auth/id"],d=o.b.batch(),l=o.b.collection("friend").doc(c).collection("friend").doc(t.id),m=o.b.collection("friend").doc(t.id).collection("friend").doc(c),d.delete(l),d.delete(m),n.next=8,d.commit();case 8:e.dispatch({type:"getFriendList"});case 9:case"end":return n.stop()}}),n)})))()},getFriendList:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,c,d,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.getters["auth/id"],t.next=3,o.b.collection("friend").doc(n).collection("friend").get();case 3:return c=t.sent,d=[],c.forEach((function(e){return d.push(e.id)})),t.next=8,o.b.collection("public").where("id","in",d).get();case 8:return l=t.sent,m=[],t.next=12,l.forEach((function(e){return m.push({id:e.id,name:e.data().name})}));case 12:e.commit({type:"set",friendList:m});case 13:case"end":return t.stop()}}),t)})))()}}},342:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o}));var n=function(){return{image:""}},o={set:function(e,image){e.image=image}}},344:function(e,t,r){"use strict";r.r(t);var n={props:{userIconPath:{require:!1,default:"this.$store.getters['auth/photo']"},avatarIconSize:{type:String,require:!1,default:96}}},o=r(40),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("NuxtLink",{attrs:{to:"/my-page"}},[r("AvatarIcon",{attrs:{userIconPath:e.userIconPath,avatarIconSize:e.avatarIconSize}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AvatarIcon:r(242).default})},4:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return d}));var n=r(77);r(338),r(345),r(346);0===n.a.apps.length&&n.a.initializeApp({apiKey:"AIzaSyBPBI1X80qznbcXFX5IM4JraiRPOLeb2MA",authDomain:"manabu-allergies.firebaseapp.com",projectId:"manabu-allergies",storageBucket:"manabu-allergies.appspot.com",messagingSenderId:"653982808749",appId:"1:653982808749:web:8c52b4786ce2acd5bce424",measurementId:"G-CHCRY1DZVK"});var o=n.a.auth(),c=n.a.firestore(),d=n.a.storage();t.c=n.a}},[[249,53,7,54]]]);