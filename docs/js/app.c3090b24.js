(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"3422f8a6","chunk-2d0f0e03":"870ef389","chunk-2d2308c0":"25b843be"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/Inpen-Dansim-OSAM2020/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("Navigation"):e._e(),n("router-view")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navigation"},[n("router-link",{attrs:{to:"/"}},[e._v("인편단심")]),e.loggedIn?n("button",{on:{click:e.handleLogOut}},[e._v("Log-Out")]):n("router-link",{attrs:{to:"/login"}},[e._v("Log-In")])],1)},u=[],s=(n("b64b"),n("5530")),c=n("2f62"),l={computed:Object(s["a"])(Object(s["a"])({},Object(c["b"])(["userProfile"])),{},{loggedIn:function(){return Object.keys(this.userProfile).length>0}}),methods:{handleLogOut:function(){this.$store.dispatch("logout")}}},d=l,f=n("2877"),p=Object(f["a"])(d,i,u,!1,null,null,null),h=p.exports,m={components:{Navigation:h},computed:{showNav:function(){return!0}}},v=m,b=Object(f["a"])(v,o,a,!1,null,null,null),g=b.exports,w=(n("45fc"),n("d3b7"),n("8c4f")),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("button",{on:{click:e.handleDashboard}},[e._v("Dashboard")]),n("div",{staticClass:"search-soldier"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.searchKeyword,expression:"searchKeyword",modifiers:{trim:!0}}],domProps:{value:e.searchKeyword},on:{input:function(t){t.target.composing||(e.searchKeyword=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{attrs:{disabled:""===e.searchKeyword,placeholder:"훈련병 이름 검색"},on:{click:e.handleSearch}},[e._v(" Let's write! ")])])])},O=[],P={data:function(){return{searchKeyword:""}},methods:{handleDashboard:function(){this.$router.push("/dashboard")},handleSearch:function(){this.$router.push({name:"Write",params:{soldier:this.searchKeyword}})}}},j=P,k=Object(f["a"])(j,y,O,!1,null,null,null),x=k.exports,_=n("59ca"),S=(n("ea7b"),n("e71f"),{apiKey:"AIzaSyD3FRUN06mMD-L73bs94oy7st67EhJSxaw",authDomain:"inpen-dansim.firebaseapp.com",databaseURL:"https://inpen-dansim.firebaseio.com",projectId:"inpen-dansim",storageBucket:"inpen-dansim.appspot.com",messagingSenderId:"568175520459",appId:"1:568175520459:web:ef8e5c399a9707720f094e",measurementId:"G-EKB4MK33PW"});_["initializeApp"](S);var R=_["firestore"](),I=_["auth"](),U=R.collection("users");r["a"].use(w["a"]);var E=[{path:"/",name:"Home",component:x},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-2d0d63f1").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login",name:"LogIn",component:function(){return n.e("chunk-2d0f0e03").then(n.bind(null,"9ddf"))}},{path:"/write/:soldier",name:"Write",component:function(){return n.e("chunk-2d2308c0").then(n.bind(null,"ed6a"))}}],A=new w["a"]({mode:"history",base:"/Inpen-Dansim-OSAM2020/",routes:E});A.beforeEach((function(e,t,n){var r=e.matched.some((function(e){return e.meta.requiresAuth}));r&&!I.currentUser?n("/login"):n()}));var K=A,L=(n("b0c0"),n("96cf"),n("1da1"));r["a"].use(c["a"]);var D,M=new c["a"].Store({state:{userProfile:{}},mutations:{setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t}},actions:{login:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,I.signInWithEmailAndPassword(t.email,t.password);case 3:o=n.sent,a=o.user,r("fetchUserProfile",a);case 6:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,n.next=3,I.createUserWithEmailAndPassword(t.email,t.password);case 3:return o=n.sent,a=o.user,n.next=7,U.doc(a.uid).set({name:t.name});case 7:r("fetchUserProfile",a);case 8:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(L["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,U.doc(t.uid).get();case 3:o=n.sent,r("setUserProfile",o.data()),"/login"===K.currentRoute.path&&K.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(L["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,I.signOut();case 3:n("setUserProfile",{}),K.push("/login");case 5:case"end":return t.stop()}}),t)})))()}}}),$=M;r["a"].config.productionTip=!1,I.onAuthStateChanged((function(e){D||(D=new r["a"]({router:K,store:$,render:function(e){return e(g)}}).$mount("#app")),e&&$.dispatch("fetchUserProfile",e)}))}});
//# sourceMappingURL=app.c3090b24.js.map