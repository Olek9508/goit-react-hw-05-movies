"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[499],{148:function(n,t,e){e.d(t,{Hg:function(){return s},IQ:function(){return h},Jh:function(){return l},NV:function(){return f},yK:function(){return p}});var r=e(861),o=e(687),a=e.n(o),i="https://api.themoviedb.org/3",c="6f3a72a470b06bab99f8d69f54b4e2d3";function u(){return d.apply(this,arguments)}function d(){return d=(0,r.Z)(a().mark((function n(){var t,e,r,o=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",e=o.length>1&&void 0!==o[1]?o[1]:{},n.next=4,fetch(t,e);case 4:if(!(r=n.sent).ok){n.next=11;break}return n.next=8,r.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not Found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),d.apply(this,arguments)}function s(){return u("".concat(i,"/trending/movie/day?api_key=").concat(c))}function f(n){return u("".concat(i,"/search/movie?query=").concat(n,"&api_key=").concat(c,"&language=en-US&page=1&include_adult=false"))}function p(n){return u("".concat(i,"/movie/").concat(n,"?api_key=").concat(c))}function h(n){return u("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(c))}function l(n){return u("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&page=1"))}},652:function(n,t,e){e.d(t,{Z:function(){return c}});var r,o=e(168),a=e(934).Z.h1(r||(r=(0,o.Z)(["\nwidth: auto;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 5px;\nmargin-top: 0;\nmargin-bottom: 20px;\nmargin-left: auto;\nmargin-right: auto;\nborder-radius: 10px;\ntext-align: center;\ncolor: orange;\nbox-shadow: 0 0 10px 1px orange;\nbackground-color: transperant;\n"]))),i=e(184);function c(n){var t=n.text;return(0,i.jsx)(a,{children:t})}},499:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,o,a,i,c,u=e(439),d=e(791),s=e(689),f=e(148),p=e(168),h=e(934),l=h.Z.div(r||(r=(0,p.Z)(["\n  border-radius: 10px;\n  padding: 25px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px orange;\n"]))),x=h.Z.div(o||(o=(0,p.Z)(["\n  border-radius: 10px;\n  padding: 35px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px 1px orange;\n"]))),g=h.Z.h3(a||(a=(0,p.Z)(["\nfont-weight: bold;\ncolor: orange;\n"]))),v=h.Z.p(i||(i=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  color: gray;\n"]))),m=h.Z.span(c||(c=(0,p.Z)(["\n  font-weight: bold;\n  color: gray;\n"]))),b=e(652),w=e(184);function y(){var n=(0,d.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],o=(0,s.UO)().movieId;return(0,d.useEffect)((function(){f.Jh(o).then((function(n){return r(n.results)}))}),[o]),(0,w.jsx)(w.Fragment,{children:e.length>0?(0,w.jsx)(l,{children:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,w.jsxs)(x,{children:[(0,w.jsxs)(g,{children:["Author : ",(0,w.jsx)(m,{children:e})]}),(0,w.jsx)(v,{children:r})]},t)}))}):(0,w.jsx)(g,{children:(0,w.jsx)(b.Z,{text:"We don\u2019t have any reviews for this movie"})})})}},861:function(n,t,e){function r(n,t,e,r,o,a,i){try{var c=n[a](i),u=c.value}catch(d){return void e(d)}c.done?t(u):Promise.resolve(u).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,a){var i=n.apply(t,e);function c(n){r(i,o,a,c,u,"next",n)}function u(n){r(i,o,a,c,u,"throw",n)}c(void 0)}))}}e.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=499.1f9d2df1.chunk.js.map