(this.webpackJsonpsave_the_lambda=this.webpackJsonpsave_the_lambda||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),o=n(4),c=n.n(o),a=(n(9),n(10),n(0)),s=function(t){switch(t){case 0:return"grass";case 1:return"rock";case 2:return"signpost"}},u=function(t){var e=t.value;return Object(a.jsx)("div",{className:"tile ".concat(s(e)),style:{height:"28px",width:"32px"}})},d=function(t){var e=t.tiles;return Object(a.jsx)("div",{className:"row",children:e.map((function(t){return Object(a.jsx)(u,{value:t})}))})},p=function(t){var e=t.tiles;return Object(a.jsx)("div",{style:{position:"relative",width:"800px",height:"400px",margin:"20px auto",backgroundColor:"#fff59d"},children:e.map((function(t){return Object(a.jsx)(d,{tiles:t})}))})},x=function(t){var e=t.image,n=t.data,i=t.position,r=n.y,o=n.x,c=n.h,s=n.w;return Object(a.jsx)("div",{style:{position:"absolute",top:i.y,left:i.x,height:"".concat(c,"px"),width:"".concat(s,"px"),backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundPosition:"-".concat(o,"px -").concat(r,"px")}})},j=function(t){var e=t.sprite,n=t.data,i=t.position,r=void 0===i?{x:0,y:0}:i,o=t.step,c=void 0===o?0:o,s=t.dir,u=void 0===s?0:s,d=n;return Object(a.jsx)(x,{image:e,position:r,data:{y:u*d.h,x:c*d.w,h:d.h,w:d.w}})},l=n(2),f=function(){var t,e=function(t){var e=Object(i.useState)({x:0,y:0}),n=Object(l.a)(e,2),r=n[0],o=n[1],c=Object(i.useState)(0),a=Object(l.a)(c,2),s=a[0],u=a[1],d=Object(i.useState)(0),p=Object(l.a)(d,2),x=p[0],j=p[1],f={down:0,left:1,right:2,up:3},b={down:{x:0,y:16},left:{x:-16,y:0},right:{x:16,y:0},up:{x:0,y:-16}},h=function(t){o((function(e){var n={x:e.x+b[t].x,y:e.y+b[t].y};return n.x<=768&&n.x>=0&&n.y<=368&&n.y>=0?{x:n.x,y:n.y}:{x:e.x,y:e.y}}))};return{walk:function(e){console.dir(),u((function(t){return f[e]===t&&h(e),f[e]})),j((function(e){return e<t-1?e+1:0}))},dir:s,step:x,position:r}}(3),n=e.dir,r=e.step,o=e.walk,c=e.position;t=function(t){o(t.key.replace("Arrow","").toLowerCase()),t.preventDefault()},Object(i.useEffect)((function(){return window.addEventListener("keydown",t),function(){return window.removeEventListener("keydown",t)}}),[t]);return Object(a.jsx)(j,{sprite:"./images/m1.png",data:{h:32,w:32},step:r,dir:n,position:c})},b=[[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],h=function(){return Object(a.jsxs)("div",{style:{position:"relative",width:"800px",height:"400px",margin:"20px auto"},children:[Object(a.jsx)(p,{tiles:b}),Object(a.jsx)(f,{})]})},v=(n(12),function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(h,{})})}),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),o(t),c(t)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),y()}],[[13,1,2]]]);
//# sourceMappingURL=main.c217289c.chunk.js.map