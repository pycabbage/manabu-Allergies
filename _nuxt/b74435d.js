(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8],{346:function(e,n,t){"use strict";t.r(n);var r={props:{PanelHeader:String}},l=t(52),o=t(82),c=t.n(o),f=t(380),v=t(381),d=t(382),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-expansion-panel",[t("v-expansion-panel-header",[e._v("\n    "+e._s(e.PanelHeader)+"\n  ")]),e._v(" "),t("v-expansion-panel-content",[e._t("PanelContent")],2)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VExpansionPanel:f.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:d.a})},354:function(e,n,t){"use strict";t.r(n);var r={props:{User:Object},data:function(){return{PanelHeader:"Profile"}}},l=t(52),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ConfigPanel",{attrs:{PanelHeader:e.PanelHeader},scopedSlots:e._u([{key:"PanelContent",fn:function(){return[t("p",[e._v("名前:"+e._s(e.User.name))]),t("br"),e._v(" "),t("p",[e._v("年齢:"+e._s(e.User.age))]),t("br"),e._v(" "),t("p",[e._v("ID:"+e._s(e.User.id))]),t("br"),e._v(" "),t("p",[e._v("Email:"+e._s(e.User.email))])]},proxy:!0}])})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{ConfigPanel:t(346).default})},361:function(e,n,t){"use strict";t.r(n);var r={props:{User:Object},data:function(){return{AvatarSize:150,width:1e3}}},l=t(52),o=t(82),c=t.n(o),f=t(157),v=t(398),d=t(453),_=t(128),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("div",[t("v-avatar",{attrs:{height:e.AvatarSize,width:e.AvatarSize}},[t("v-img",{attrs:{src:e.User.icon,"aspect-ratio":16/9,alt:"user icon"}})],1)],1),e._v(" "),t("v-expansion-panels",[t("ProfileConfig",{attrs:{User:e.User}})],1)],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{ProfileConfig:t(354).default}),c()(component,{VAvatar:f.a,VContainer:v.a,VExpansionPanels:d.a,VImg:_.a})},462:function(e,n,t){"use strict";t.r(n);var r={data:function(){return{User:{id:"tarou123",name:"太郎",age:20,email:"tarou@yamada",tel:"xxx-xxxx",icon:"AnonymousIcon.png"}}}},l=t(52),component=Object(l.a)(r,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("Configs",{attrs:{User:e.User}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Configs:t(361).default})}}]);