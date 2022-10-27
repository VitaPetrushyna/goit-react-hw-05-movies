"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{1:function(n,t,e){e.d(t,{p:function(){return s}});var i,r=e(168),a=e(444).ZP.button(i||(i=(0,r.Z)(["\n  margin-top: 15px;\n  margin-left: 600px;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background: linear-gradient(90deg, #070927, #3876fc);\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #2b5d2e;\n  }\n"]))),o=e(184),s=function(n){var t=n.btnLoadMore;return(0,o.jsx)(a,{onClick:t,children:"Load more"})}},580:function(n,t,e){e.d(t,{a:function(){return E}});var i,r,a,o,s,c=e(206),p=e(741),l=e(731),d=e(168),x=e(444),u=x.ZP.img(i||(i=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  object-fit: fill;\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),f=x.ZP.div(r||(r=(0,d.Z)(["\n  position: relative;\n  z-index: 3;\n  color: white;\n  text-decoration: none;\n  opacity: 0;\n  transform: translate(30px);\n  transition: 0.5s;\n  h3 {\n    margin: 0;\n    font-size: 20px;\n  }\n  p {\n    letter-spacing: 1px;\n    font-size: 15px;\n    margin-top: 8px;\n  }\n"]))),g=x.ZP.li(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: flex-end;\n  min-height: 300px;\n  border-radius: 15px;\n  padding: 15px;\n  background: white;\n  position: relative;\n  transition: 0.4s ease-out;\n  box-shadow: #090909;\n  &:hover {\n    transform: translateY(10px);\n    &:before {\n      opacity: 1;\n    }\n    "," {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    background-color: rgba(22, 22, 22, 0.8);\n    z-index: 2;\n    transition: 0.5s;\n    opacity: 0;\n  }\n"])),f),h=e(184),m=function(n,t){var e=n.movie,i=e.id,r=e.poster_path,a=e.title,o=e.overview;return(0,h.jsx)(l.rU,{to:"/movies/".concat(i),state:{from:t},children:(0,h.jsxs)(g,{"data-id":i,children:[(0,h.jsx)(u,{src:r?"".concat(c.L2,"/").concat(r):p,alt:a,overview:o}),(0,h.jsxs)(f,{children:[(0,h.jsx)("h3",{children:a}),(0,h.jsx)("p",{children:"".concat(o.slice(0,50),"...")})]})]})})},b=x.ZP.ul(o||(o=(0,d.Z)(["\n  display: grid;\n  max-width: calc(100% - 30px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px;\n  margin: 20px auto;\n  padding: 0;\n\n  /* display: grid;\n  max-width: calc(100vw - 30px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 15px;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto; */\n"]))),v=x.ZP.h2(s||(s=(0,d.Z)(["\n  color: white;\n  text-align: center;\n  padding: 20px;\n  background: linear-gradient(90deg, #070927, #3876fc);\n  margin: 20px auto;\n  height: 25px;\n"]))),E=function(n){var t=n.movies,e=n.titleHeader,i=n.locationState;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(v,{children:e}),(0,h.jsx)(b,{children:t.map((function(n){return(0,h.jsx)(m,{title:n.title,movie:n,locationState:i},n.id)}))})]})}},680:function(n,t,e){e.r(t);var i=e(982),r=e(861),a=e(885),o=e(757),s=e.n(o),c=e(791),p=e(689),l=e(206),d=e(580),x=e(798),u=e(521),f=e(1),g=e(184);t.default=function(){var n=(0,c.useState)(1),t=(0,a.Z)(n,2),e=t[0],o=t[1],h=(0,c.useState)(0),m=(0,a.Z)(h,2),b=m[0],v=m[1],E=(0,c.useState)([]),w=(0,a.Z)(E,2),Z=w[0],j=w[1],y=(0,c.useState)(x.q.IDLE),k=(0,a.Z)(y,2),D=k[0],S=k[1],L=(0,c.useState)(null),_=(0,a.Z)(L,2),q=_[0],P=_[1],z=(0,p.TH)();(0,c.useEffect)((function(){function n(){return(n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.JN)(e);case 3:t=n.sent,j((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(t.results))})),v(t.total_pages),S(x.q.RESOLVED),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),P(n.t0),S(x.q.REJECTED);case 13:return n.prev=13,n.finish(13);case 15:case"end":return n.stop()}}),n,null,[[0,9,13,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}(e)}),[e]);return(0,g.jsxs)(g.Fragment,{children:[D===x.q.IDLE&&(0,g.jsx)(g.Fragment,{}),D===x.q.PENDING&&(0,g.jsx)(u.a,{}),D===x.q.REJECTED&&(0,g.jsx)("div",{style:{color:"red"},children:q}),D===x.q.RESOLVED&&Z&&(0,g.jsx)(d.a,{movies:Z,titleHeader:"Trending today:",locationState:z}),0!==Z.length&&b!==e&&(0,g.jsx)(f.p,{btnLoadMore:function(){o((function(n){return e+1}))}})]})}},798:function(n,t,e){e.d(t,{q:function(){return i}});var i={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=680.b01f7f0c.chunk.js.map