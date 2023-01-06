"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[565],{148:function(n,t,r){r.d(t,{Hg:function(){return d},IQ:function(){return f},Jh:function(){return x},NV:function(){return s},yK:function(){return l}});var e=r(861),o=r(687),a=r.n(o),i="https://api.themoviedb.org/3",c="6f3a72a470b06bab99f8d69f54b4e2d3";function u(){return p.apply(this,arguments)}function p(){return p=(0,e.Z)(a().mark((function n(){var t,r,e,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",r=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(t,r);case 4:if(!(e=n.sent).ok){n.next=11;break}return n.next=8,e.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function d(){return u("".concat(i,"/trending/movie/day?api_key=").concat(c))}function s(n){return u("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"))}function l(n){return u("".concat(i,"/movie/").concat(n,"?api_key=").concat(c))}function f(n){return u("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c))}function x(n){return u("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&page=1"))}},565:function(n,t,r){r.r(t),r.d(t,{default:function(){return Z}});var e,o,a,i,c,u=r(439),p=r(791),d=r(689),s=r(148),l=r(168),f=r(934),x=f.Z.ul(e||(e=(0,l.Z)(["\ndisplay: grid;\nmax-width: calc(100vw - 48px);\ngrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\ngrid-gap: 16px;\nmargin-top: 0;\nmargin-bottom: 0;\npadding: 0;\nlist-style: none;\nmargin-left: auto;\nmargin-right: auto;\n"]))),g=f.Z.li(o||(o=(0,l.Z)(["\n  border-radius: 10px;\n  padding: 35px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px #7bd4eb;\n"]))),h=f.Z.h3(a||(a=(0,l.Z)(["\nfont-weight: bold;\ncolor: orange;\n"]))),m=f.Z.p(i||(i=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight: bold;\ncolor: gray;\n"]))),b=f.Z.span(c||(c=(0,l.Z)(["\n  font-weight: bold;\n  color: gray;\n"]))),v=r(640),w=r(184);function Z(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),r=t[0],e=t[1],o=(0,d.UO)().movieId;(0,p.useEffect)((function(){s.IQ(o).then((function(n){return e(n.cast)}))}),[o]);var a=function(n){return"https://image.tmdb.org/t/p/w300".concat(n)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(v.iR,{}),r&&(0,w.jsx)(x,{children:r.map((function(n){var t=n.id,r=n.profile_path,e=n.name,o=n.character;return(0,w.jsxs)(g,{children:[(0,w.jsx)("img",{src:"".concat(a(r)),alt:e,width:"300"}),(0,w.jsx)(h,{children:e}),(0,w.jsxs)(m,{children:[" ","Character : ",(0,w.jsxs)(b,{children:[" ",o," "]})," "]})]},t)}))})]})}},640:function(n,t,r){r.d(t,{Cj:function(){return h},DD:function(){return l},M6:function(){return m},Zx:function(){return f},iR:function(){return x},up:function(){return g}});var e,o,a,i,c,u,p=r(168),d=r(934),s=r(87),l=d.Z.div(e||(e=(0,p.Z)(["\n  display: flex;\n  margin-bottom: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px orange;\n"]))),f=d.Z.div(o||(o=(0,p.Z)(["\n  display: block;\n  padding: 15px;\n  margin-left: 20px;\n  color: gray;\n"]))),x=d.Z.div(a||(a=(0,p.Z)(["\n  width: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  margin-top: 0;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 10px;\n  text-align: center;\n  box-shadow: 0 0 10px 1px orange;\n  background-color: transperant;\n  );\n"]))),g=(0,d.Z)(s.OL)(i||(i=(0,p.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  color: greenyellow;\n  font-size: 25px;\n  font-weight: 500;\n  margin: 10px;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px greenyellow;\n  &.active {\n    color: orange;\n    box-shadow: 0 0 13px 3px orange;\n  }\n  : hover{\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    color: orange;\n    transform: scale(1.1);\n    box-shadow: 0 0 10px 1px orange;\n  }\n"]))),h=d.Z.h2(c||(c=(0,p.Z)(["\n  color: orange;\n"]))),m=d.Z.h2(u||(u=(0,p.Z)(["\n  color: orange;\n"])))},861:function(n,t,r){function e(n,t,r,e,o,a,i){try{var c=n[a](i),u=c.value}catch(p){return void r(p)}c.done?t(u):Promise.resolve(u).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=n.apply(t,r);function c(n){e(i,o,a,c,u,"next",n)}function u(n){e(i,o,a,c,u,"throw",n)}c(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=565.746d5138.chunk.js.map