(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{360:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return l})),r.d(e,"d",(function(){return v}));var n=r(362),o=r(2),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),v=Object(o.g)("v-card__title");n.a},362:function(t,e,r){"use strict";r(19),r(174),r(385);var n=r(177),o=r(382),c=r(72),d=r(10);e.a=Object(d.a)(o.a,c.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object.assign({"v-card":!0},c.a.options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=Object.assign({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'+this.img+'") center center / cover no-repeat'),style}},methods:{genProgress:function(){var t=o.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},381:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d}));var n=r(8),o=(r(52),r(13),r(17),r(62),r(3)),c=function(){function t(t,e){switch(t){case"public":this.access="public";break;case"friend":this.access="friend";break;default:this.access="private"}this.id=e.uid,this.name=e.displayName,this.email=e.email}t.init=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(r){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(t,e){o.a.onAuthStateChanged((function(r){r?t(r):e("Not Login")}))}));case 2:return n=e.sent,data=new t(r,n),e.abrupt("return",data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var e=t.prototype;return e.set=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.collection(this.access).doc(this.id).update(((n={})[e]=r,n));case 3:t.next=11;break;case 5:return t.prev=5,t.t0=t.catch(0),t.next=9,o.b.collection(this.access).doc(this.id).set({id:this.id});case 9:return t.next=11,o.b.collection(this.access).doc(this.id).update(((c={})[e]=r,c));case 11:case"end":return t.stop()}}),t,this,[[0,5]])})));return function(e,r){return t.apply(this,arguments)}}(),e.get=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection(this.access).doc(this.id).get();case 2:if(data=t.sent.data(),null!=e){t.next=7;break}return t.abrupt("return",data);case 7:return t.abrupt("return",data[e]);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection("public").doc(this.id).get();case 2:return data=t.sent.data().point,t.abrupt("return",data);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.setPoint=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.collection("public").doc(this.id).update({point:p});case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setZukan=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(p){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.get("zukanID");case 2:if(t.t0=e=t.sent,null==t.t0){t.next=7;break}t.t1=e,t.next=8;break;case 7:t.t1=[];case 8:return r=t.t1,console.log(r),console.log(p),r.push(p),t.next=14,o.b.collection("public").doc(this.id).set({zukanID:r});case 14:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.getAll=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("public"!=this.access&&"friend"!=this.access){t.next=9;break}return data=[],t.next=4,o.b.collection(this.access).limit(20).orderBy("point","desc").get();case 4:return t.next=6,t.sent.forEach((function(t){null==e?data.push({id:t.id,value:t.data()}):data.push({id:t.id,value:t.data()[e]})}));case 6:return t.abrupt("return",data);case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.setFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e,r){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).put(r);case 2:return n=t.sent,t.abrupt("return",n.ref.getDownloadURL());case 4:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),e.getFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).getDownloadURL();case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e.deleteFile=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.ref().child(this.id+"/"+e).delete();case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),t}();function d(t){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.d.ref().child(e+"/userPhoto").getDownloadURL();case 3:return a=t.sent,t.abrupt("return",a);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return","default");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},385:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},386:function(t,e,r){var n=r(15)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},538:function(t,e,r){"use strict";r.r(e);r(22),r(55),r(13),r(48),r(39),r(51),r(112),r(17),r(70);var n=r(442),o=r.n(n),data=(r(443),r(381)),c={components:{VueCropper:o.a},mounted:function(){this.imgSrc=this.$store.state.image.image,this.file=this.$store.state.file.file,console.log(this.file),this.imgSrc||this.$router.push({path:"scan"})},data:function(){return{imgSrc:"",cropImg:"",visionResult:void 0,includeList:[],AllerPatterns:[{name:"卵",patterns:["卵","たまご","タマゴ"]},{name:"乳",patterns:["牛乳","脱脂粉乳","練乳","はっ酵乳","全粉乳"]},{name:"小麦",patterns:["小麦"]},{name:"そば",patterns:["そば","蕎麦"]},{name:"落花生（ピーナッツ）",patterns:["ピーナッツ","落花生"]},{name:"えび",patterns:["えび","エビ","海老"]},{name:"かに",patterns:["かに","カニ","蟹"]}]}},methods:{cropImage:function(){this.cropImg=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.sendVisionAPI()},sendVisionAPI:function(){var t=this,data={requests:[{image:{content:this.cropImg.split("base64,")[1]},features:[{maxResults:50,type:"DOCUMENT_TEXT_DETECTION"},{maxResults:50,type:"CROP_HINTS"},{maxResults:50,type:"LABEL_DETECTION"}]}]};fetch("https://vision.googleapis.com/v1/images:annotate?key=AIzaSyB8-ldByAwinojKoMBHNkvO-0ciC_ZrvXo",{method:"POST",headers:{"Content-Type":"application/json"},redirect:"follow",body:JSON.stringify(data),cache:"no-cache",mode:"cors"}).then((function(body){return body.json()})).then((function(e){t.visionResult=e.responses[0].fullTextAnnotation.text,t.matchPattern()}))},matchPattern:function(){var t=this;this.AllerPatterns.map((function(e){e.patterns.map((function(a){return!!t.visionResult.match(a)})).includes(!0)&&t.includeList.push(e.name)})),console.log("this includes "+this.includeList)},selectElement:function(t){var e=this,r=function(e){var data=[{name:"卵",id:"egg"},{name:"えび",id:"shrimp"},{name:"かに",id:"crab"},{name:"そば",id:"soba"},{name:"小麦",id:"wheat"},{name:"乳",id:"milk"},{name:"落花生（ピーナッツ）",id:"peanut"}],i=data.map((function(e){return t===e.name})).indexOf(!0);return data[i].id}();console.log(r);var n=[{name:"卵",id:"egg"},{name:"えび",id:"shrimp"},{name:"かに",id:"crab"},{name:"そば",id:"soba"},{name:"小麦",id:"wheat"},{name:"乳",id:"milk"},{name:"落花生（ピーナッツ）",id:"peanut"}].map((function(t,e){return Object.assign({},t,{index:e})})).filter((function(t,e){return t.id==r}));console.log(n[0].index),console.log("id : ",r),console.log("uploading ... "),data.a.init("public").then((function(t){t.setZukan(n[0].index)})),data.a.init("private").then((function(data){return data.setFile(r,e.file)})).then((function(){console.log("Uploaded.")})),this.$router.push({path:"battle",query:{id:r}})}}},d=r(46),l=r(89),v=r.n(l),h=r(354),f=r(189),m=r(362),x=r(360),_=r(406),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[t.imgSrc&&!t.visionResult?r("v-container",[r("v-btn",{attrs:{elevation:"2",block:"",color:"primary"},on:{click:t.cropImage}},[t._v("Crop & Scan")]),t._v(" "),r("vue-cropper",{ref:"cropper",staticClass:"cropper",attrs:{src:t.imgSrc,guides:!0,"view-mode":2,"auto-crop-area":1,background:!0,"drag-mode":"crop"}})],1):""!==t.visionResult?r("v-container",t._l(t.includeList,(function(e){return r("v-container",{key:e},[r("v-card",{attrs:{elevation:"2"}},[r("v-card-title",{domProps:{textContent:t._s(e)}}),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{text:""},on:{click:function(r){return t.selectElement(e)}}},[t._v(" この品目で進む ")])],1)],1)],1)})),1):t._e(),t._v(" "),r("v-container",[r("v-btn",{attrs:{to:"/scan",nuxt:""}},[t._v("Back to scan page")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VApp:h.a,VBtn:f.a,VCard:m.a,VCardActions:x.a,VCardTitle:x.d,VContainer:_.a})}}]);