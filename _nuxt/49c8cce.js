(window.webpackJsonp=window.webpackJsonp||[]).push([[48,31],{389:function(e,t,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("1bbdf444",content,!0,{sourceMap:!1})},405:function(e,t,r){"use strict";r(389)},406:function(e,t,r){var n=r(15)(!1);n.push([e.i,".PageTitle{margin-top:4vh;margin-bottom:6vh;font-weight:700;font-size:max(4vw,50px)}",""]),e.exports=n},409:function(e,t,r){"use strict";r.r(t);r(405);var n=r(40),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"PageTitle"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},421:function(e,t,r){var content=r(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("b5885484",content,!0,{sourceMap:!1})},452:function(e,t,r){"use strict";r(421)},453:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.RankingCardRoot{margin-bottom:1vw}.RankingTexts{text-align:right;font-size:2rem;font-family:"Impact";margin-right:3rem}i.RankingTexts{margin-left:.5rem}.ScoreBar{width:95%;margin-left:3%}',""]),e.exports=n},470:function(e,t,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("85498ecc",content,!0,{sourceMap:!1})},490:function(e,t,r){"use strict";r.r(t);r(19);var n={props:{rankingNumber:{type:Number,require:!0},userName:{type:String,require:!0},userScore:{type:Number,require:!0},themeColor:{type:String,require:!0}},computed:{rankingNumberColor:function(){return 1===this.rankingNumber?"color: #ffd700;":2===this.rankingNumber?"color: #c0c0c0;":3===this.rankingNumber?"color: #ff8c00;":"color: #000000"}}},o=(r(452),r(40)),l=r(70),c=r.n(l),f=r(366),m=r(364),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"RankingCardRoot",attrs:{width:"90vw"}},[r("i",{staticClass:"RankingTexts",style:e.rankingNumberColor},[e._v("\n    "+e._s(e.rankingNumber)+" .\n  ")]),e._v(" "),r("div",{staticClass:"ScoreBar"},[r("v-progress-linear",{attrs:{color:e.themeColor,height:"5.5vh",value:e.userScore,striped:""}},[e._v("\n      "+e._s(e.userScore))])],1),e._v(" "),r("p",{staticClass:"RankingTexts"},[e._v(e._s(e.userName))])])}),[],!1,null,null,null);t.default=component.exports;c()(component,{VCard:f.a,VProgressLinear:m.a})},541:function(e,t,r){"use strict";r(470)},542:function(e,t,r){var n=r(15)(!1);n.push([e.i,".RankingWrapper{width:95vw;margin-left:2vw}.RankingContentsWrapper{margin-top:2rem;margin-right:2%;margin-left:2%}.RankingContent{width:100%}",""]),e.exports=n},583:function(e,t,r){"use strict";r.r(t);r(247);var n={data:function(){return{datas:[{name:"bob",score:80},{name:"john",score:90},{name:"mary",score:70},{name:"tarou",score:100},{name:"hanako",score:50}],ThemeColor:"light-blue darken-1"}},computed:{sortedDatas:function(){var e=this.datas;return e.sort((function(a,b){var e=a.score,t=b.score;return e<t?1:e>t?-1:0})),e}}},o=(r(541),r(40)),l=r(70),c=r.n(l),f=r(356),m=r(396),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"ranking"}},[r("div",{staticClass:"RankingWrapper"},[r("v-container",[r("PageTitle",[e._v("ランキング")]),e._v(" "),r("div",{staticClass:"RankingContent"},e._l(e.sortedDatas,(function(data,t){return r("div",{key:t},[r("RankingCard",{attrs:{rankingNumber:t+1,userName:data.name,userScore:data.score,themeColor:e.ThemeColor}})],1)})),0)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;c()(component,{PageTitle:r(409).default,RankingCard:r(490).default}),c()(component,{VApp:f.a,VContainer:m.a})}}]);