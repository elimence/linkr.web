(function(t){function e(e){for(var o,l,s=e[0],i=e[1],c=e[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},n={app:0},r=[];function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"238d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"teal darken-2",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("router-link",{attrs:{to:"home"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:a("cf05"),transition:"scale-transition",width:"40"}})],1),o("h1",[t._v("LINKr")])],1),o("v-spacer"),t.isLoggedIn()?o("button",{staticClass:"lk-btn-2",attrs:{"align-right":"",color:"lighten-1 white--text"},on:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e()],1),o("v-content",[o("router-view")],1)],1)},r=[],l=a("8c4f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"show v-card",attrs:{fluid:""}},[a("v-form",[a("v-col",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.pageData.url,expression:"pageData.url"}],staticClass:"lk-input",attrs:{type:"text",color:"teal lighten-1",name:"url",placeholder:"Shorten your link"},domProps:{value:t.pageData.url},on:{input:function(e){e.target.composing||t.$set(t.pageData,"url",e.target.value)}}}),a("button",{attrs:{id:"shorten_btn",color:"teal lighten-1 white--text"},on:{click:function(e){return t.shorten()}}},[t._v("Shorten")])])],1)],1),a("v-container",{staticClass:"show",attrs:{fluid:""}},[a("div",{attrs:{id:"shorten_actions"}},[a("ul",{staticClass:"anon_history",attrs:{id:"most_recent_links"}},t._l(t.links,(function(e){return a("li",{key:e._id,staticClass:"link"},[a("span",{staticClass:"long-link"},[t._v(t._s(e.url)+"/")]),a("span",[a("span",{staticClass:"short-link"},[a("a",{attrs:{href:e.shortUrl,target:"_blank"}},[t._v(t._s(e.shortUrl))])]),a("span",{staticClass:"copy"},[a("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.shortUrl,expression:"link.shortUrl"}],staticClass:"copy-btn"},[t._v("Copy")])])])])})),0)])])],1)},i=[],c=(a("ac1f"),a("5319"),a("9911"),a("bc3a")),u=a.n(c),p={test:"http://localhost:9000/api/v1/",live:"https://api.linkr.page/api/v1/"},f=u.a.create({baseURL:p.live,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:""}}),d=f,v={name:"Home",data:function(){return{pageData:{url:""},links:null,baseUrl:null}},created:function(){var t=this;console.log("created"),null===localStorage.getItem("token")&&G.push("login"),d.defaults.headers.Authorization=localStorage.getItem("token"),d.get("/links").then((function(e){var a=e.data,o=a.links,n=a.baseUrl;t.links=o,t.baseUrl=n,console.log("base ==>",n),console.log(JSON.stringify(e)),console.log(JSON.stringify(o))})).catch((function(t){var e=t.response,a=e.status,o=e.data.message;console.log({status:a,message:o})}))},methods:{shorten:function(){d.defaults.headers.Authorization=localStorage.getItem("token"),d.post("/links",this.pageData).then((function(t){var e=t.data.link,a=e.url,o=e.shortUrl;console.log({url:a,shortUrl:o}),G.replace({name:"home"})})).catch((function(t){var e=t.response,a=e.status,o=e.data.message;console.log({status:a,message:o})}))}}},g=v,h=(a("5f45"),a("2877")),m=a("6544"),b=a.n(m),k=a("62ad"),w=a("a523"),y=a("a75b"),_=a("4bd4"),x=Object(h["a"])(g,s,i,!1,null,"af241c2c",null),C=x.exports;b()(x,{VCol:k["a"],VContainer:w["a"],VContent:y["a"],VForm:_["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"teal lighten-1",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{color:"teal lighten-1",label:"Email",name:"login","prepend-icon":"person",type:"text"},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}}),a("v-text-field",{attrs:{id:"password",color:"teal lighten-1",label:"Password",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("button",{staticClass:"lk-btn",attrs:{color:"teal lighten-1 white--text"},on:{click:function(e){return t.login()}}},[t._v("Login")]),a("v-spacer")],1),a("v-card-actions",[a("v-spacer"),a("a",{staticStyle:{"font-size":"11px"},attrs:{href:"/register"}},[t._v("Register")]),a("v-spacer")],1)],1)],1)],1)],1)],1)},I=[],S={name:"Login",data:function(){return{userInfo:{email:"",password:""}}},methods:{login:function(){d.post("/auth/local",this.userInfo).then((function(t){var e=t.status,a=t.data,o=a.user,n=a.token,r=o.fullName,l=o.email,s=o._id;localStorage.fullName=r,localStorage.email=l,localStorage.token=n,localStorage._id=s,console.log({status:e}),G.push("home")})).catch((function(t){var e=t.response,a=e.status,o=e.data.message;console.log({status:a,message:o})}))}}},j=S,O=a("b0af"),T=a("99d9"),N=a("0fd9"),$=a("2fa4"),L=a("8654"),P=a("71d9"),U=a("2a7f"),A=Object(h["a"])(j,V,I,!1,null,null,null),E=A.exports;b()(A,{VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCol:k["a"],VContainer:w["a"],VContent:y["a"],VForm:_["a"],VRow:N["a"],VSpacer:$["a"],VTextField:L["a"],VToolbar:P["a"],VToolbarTitle:U["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"teal lighten-1",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Create your free account")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{color:"teal lighten-1",label:"Full name",name:"login","prepend-icon":"person",type:"text"},model:{value:t.userInfo.fullName,callback:function(e){t.$set(t.userInfo,"fullName",e)},expression:"userInfo.fullName"}}),a("v-text-field",{attrs:{color:"teal lighten-1",label:"Email address",name:"login","prepend-icon":"email",type:"text"},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}}),a("v-text-field",{attrs:{id:"password",color:"teal lighten-1",label:"Password",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.userInfo.password,callback:function(e){t.$set(t.userInfo,"password",e)},expression:"userInfo.password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"teal lighten-1 white--text",dark:""},on:{click:function(e){return t.register()}}},[t._v("Register")]),a("v-spacer")],1),a("v-card-actions",[a("v-spacer"),a("a",{staticStyle:{"font-size":"11px"},attrs:{href:"/login"}},[t._v("Login")]),a("v-spacer")],1)],1)],1)],1)],1)],1)},F=[],R=a("e587"),z={name:"Register",data:function(){return{userInfo:{fullName:"",email:"",password:""}}},methods:{register:function(){d.post("/users",this.userInfo).then((function(t){var e=t.status,a=t.data,o=a.token,n=a.user,r=n.fullName,l=n.email,s=n._id;localStorage.fullName=r,localStorage.email=l,localStorage.token=o,localStorage._id=s,console.log({status:e}),G.push("home")})).catch((function(t){var e=t.response.data.error,a=e.statusCode,o=Object(R["a"])(e.data,1),n=o[0];console.log("error creating account",{statusCode:a,displayableError:n})}))}}},J=z,M=a("8336"),B=Object(h["a"])(J,D,F,!1,null,null,null),H=B.exports;b()(B,{VBtn:M["a"],VCard:O["a"],VCardActions:T["a"],VCardText:T["b"],VCol:k["a"],VContainer:w["a"],VContent:y["a"],VForm:_["a"],VRow:N["a"],VSpacer:$["a"],VTextField:L["a"],VToolbar:P["a"],VToolbarTitle:U["a"]}),o["a"].use(l["a"]);var K=[{path:"/",name:"home",component:C},{path:"/login",name:"login",component:E},{path:"/register",name:"register",component:H}],q=new l["a"]({mode:"history",base:"/",routes:K}),G=q,Q={name:"App",methods:{logout:function(){localStorage.clear(),G.push("login")},isLoggedIn:function(){return null!==localStorage.getItem("token")}}},W=Q,X=(a("5c0b"),a("7496")),Y=a("40dc"),Z=a("adda"),tt=Object(h["a"])(W,n,r,!1,null,null,null),et=tt.exports;b()(tt,{VApp:X["a"],VAppBar:Y["a"],VContent:y["a"],VImg:Z["a"],VSpacer:$["a"]});var at=a("f309");o["a"].use(at["a"]);var ot=new at["a"]({}),nt=(a("d1e78"),a("af88"));o["a"].config.productionTip=!1,o["a"].use(nt["a"]),new o["a"]({router:G,vuetify:ot,render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var o=a("7694"),n=a.n(o);n.a},"5f45":function(t,e,a){"use strict";var o=a("238d"),n=a.n(o);n.a},7694:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.62990cf2.png"}});
//# sourceMappingURL=app.7daad025.js.map