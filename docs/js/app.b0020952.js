(function(t){function e(e){for(var s,r,l=e[0],o=e[1],c=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},n={app:0},i=[];function r(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d7a4f23a"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=n[t]=[e,s]}));e.push(a[2]=s);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.src=r(t);var c=new Error;i=function(e){o.onerror=o.onload=null,clearTimeout(d);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",c.name="ChunkLoadError",c.type=s,c.request=i,a[1](c)}n[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/info/",l.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var d=0;d<o.length;d++)e(o[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"0f5e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var s=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(n["a"]);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("Navbar")],1),a("router-view")],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",variant:"light",fixed:"top"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("span",{staticClass:"text-dark"},[t._v("SUPAKJACK")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto "},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[a("span",{staticClass:"text-dark"},[t._v("หน้าแรก")])]),a("b-nav-item",{attrs:{to:"/about"}},[a("span",{staticClass:"text-dark"},[t._v("เกี่ยวกับ")])]),a("b-nav-item",{attrs:{to:"/about"}},[a("span",{staticClass:"text-dark"},[t._v("บริการ")])]),a("b-nav-item",{attrs:{to:"/about"}},[a("span",{staticClass:"text-dark"},[t._v("ติดตาม")])]),a("b-nav-item",{attrs:{to:"/about"}},[a("span",{staticClass:"text-dark"},[t._v("ติดต่อ")])])],1)],1)],1)],1)},o=[],c={},d=c,u=a("2877"),p=Object(u["a"])(d,l,o,!1,null,null,null),v=p.exports,b={components:{Navbar:v}},f=b,m=(a("034f"),Object(u["a"])(f,i,r,!1,null,null,null)),h=m.exports,C=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5"},[a("Carousel"),a("Profile"),a("Timeline"),a("Service")],1)},_=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:2e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"400"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":"https://picsum.photos/1024/400/?image=52"}}),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/400/?image=54"}},[a("h1",[t._v("Hello world!")])]),a("b-carousel-slide",{attrs:{"img-src":"https://picsum.photos/1024/400/?image=58"}}),a("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"1024",height:"400",src:"https://picsum.photos/1024/400/?image=55",alt:"image slot"}})]},proxy:!0}])}),a("b-carousel-slide",{attrs:{caption:"Blank Image","img-blank":"","img-alt":"Blank image"}},[a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)},y=[],w={data:function(){return{slide:0,sliding:null}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},S=w,k=Object(u["a"])(S,x,y,!1,null,null,null),O=k.exports,j=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"main-timeline"},[a("div",{staticClass:"timeline"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"date-content"},[a("div",{staticClass:"date-outer"},[a("span",{staticClass:"date"},[a("span",{staticClass:"month"},[t._v("25 กุมภาพันธ์")]),a("span",{staticClass:"year"},[t._v("2564")])])])]),a("div",{staticClass:"timeline-content"},[a("h5",{staticClass:"title"},[t._v(" ประชุมวิชาการ AUCC ครั้งที่ 9 ")]),a("p",{staticClass:"description"},[t._v(' - รางวัล "EXCELLENT PAPER AWARDS" '),a("br"),t._v(" งานวิจัย “ระบบการจัดการสิทธิ์การใชงาน Joget” ")])])]),a("div",{staticClass:"timeline"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"date-content"},[a("div",{staticClass:"date-outer"},[a("span",{staticClass:"date"},[a("span",{staticClass:"month"},[t._v("11 พฤศจิกายน")]),a("span",{staticClass:"year"},[t._v("2559")])])])]),a("div",{staticClass:"timeline-content"},[a("h5",{staticClass:"title"},[t._v(" โครงงานประเภทซอฟต์แวร์ (ศิลปหัตถกรรม) ")]),a("p",{staticClass:"description"},[t._v(" - รางวัลเหรียญทองระดับจังหวัด ")])])]),a("div",{staticClass:"timeline"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"date-content"},[a("div",{staticClass:"date-outer"},[a("span",{staticClass:"date"},[a("span",{staticClass:"month"},[t._v("20 ธันวาคม")]),a("span",{staticClass:"year"},[t._v("2558")])])])]),a("div",{staticClass:"timeline-content"},[a("h5",{staticClass:"title"},[t._v(" แข่งขันการเขียนโปรแกรม (ศิลปหัตถกรรม) ")]),a("p",{staticClass:"description"},[t._v(" - รางวัลเหรียญทองชนะเลิศระดับจังหวัด "),a("br"),t._v(" - รางวัลเหรียญทองแดงระดับภูมิภาค ")])])]),a("div",{staticClass:"timeline"},[a("div",{staticClass:"icon"}),a("div",{staticClass:"date-content"},[a("div",{staticClass:"date-outer"},[a("span",{staticClass:"date"},[a("span",{staticClass:"month"},[t._v("15 กันยายน")]),a("span",{staticClass:"year"},[t._v("2556")])])])]),a("div",{staticClass:"timeline-content"},[a("h5",{staticClass:"title"},[t._v("โครงการ KMITL INNOVATIVE AWARD 2014")]),a("p",{staticClass:"description"},[t._v(' - เข้ารอบ 10 ทีมสุดท้ายด้วยผลงาน "รถเข็นสบาย สบาย" ')])])])])])}],P={},A=P,T=(a("8c00"),Object(u["a"])(A,j,E,!1,null,"8550576c",null)),$=T.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-card",{staticClass:"overflow-hidden border-0",attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:"เกี่ยวกับ"}},[s("hr",{staticClass:"col-2 border-1 border-dark border-bottom",staticStyle:{"max-width":"5rem"}})])],1),s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-img",{staticClass:"rounde p-2 rounded-pill",attrs:{src:a("eb54"),alt:"Image"}})],1),s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:""}},[s("b-card-text",[s("span",{staticClass:"name-profile"},[t._v("นายสุภัค พุกดำ")]),s("br"),s("span",{staticClass:"edu-hilight"},[t._v("เกียรตินิยมอันดับ 1 ")]),t._v("วิศวกรรมซอฟต์แวร์ "),s("br"),t._v(" มหาวิทยาลัยบูรพา ")])],1)],1)],1)],1)],1)},L=[],N={},M=N,J=(a("d802"),Object(u["a"])(M,I,L,!1,null,"1f025dfe",null)),H=J.exports,K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-card",{staticClass:"overflow-hidden border-0",attrs:{"no-body":""}},[s("b-row",{attrs:{"no-gutters":""}},[s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:"บริการ"}},[s("hr",{staticClass:"col-2 border-1 border-dark border-bottom",staticStyle:{"max-width":"5rem"}})])],1),s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-img",{staticClass:"rounde p-2 rounded-pill",attrs:{src:a("eb54"),alt:"Image"}})],1),s("b-col",{staticClass:"text-center",attrs:{md:"12"}},[s("b-card-body",{attrs:{title:""}},[s("b-card-text",[s("p",[t._v(" นายสุภัค พุกดำ ")]),s("p",[t._v(" เกียรตินิยมอันดับ 1 วิศวกรรมซอฟต์แวร์ มหาวิทยาลัยบูรพา ")])])],1)],1)],1)],1)],1)},R=[],U={},q=U,B=Object(u["a"])(q,K,R,!1,null,null,null),D=B.exports,V={name:"Home",components:{Carousel:O,Timeline:$,Profile:H,Service:D},data:function(){return{}}},W=V,F=Object(u["a"])(W,g,_,!1,null,null,null),X=F.exports;s["default"].use(C["a"]);var z=[{path:"/",name:"Home",component:X},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],G=new C["a"]({mode:"history",base:"/info/",routes:z}),Q=G,Y=a("2f62");s["default"].use(Y["a"]);var Z=new Y["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].config.productionTip=!1,new s["default"]({router:Q,store:Z,render:function(t){return t(h)}}).$mount("#app")},"85ec":function(t,e,a){},"8c00":function(t,e,a){"use strict";a("0f5e")},d802:function(t,e,a){"use strict";a("fc01")},eb54:function(t,e,a){t.exports=a.p+"img/top-profile.ea74fa22.png"},fc01:function(t,e,a){}});
//# sourceMappingURL=app.b0020952.js.map