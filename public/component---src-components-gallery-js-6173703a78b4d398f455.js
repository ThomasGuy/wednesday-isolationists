(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{unmI:function(e,t,n){"use strict";n.r(t),n.d(t,"artistQuery",(function(){return x}));var a=n("q1tI"),r=n.n(a),i=n("9eSz"),l=n.n(i),c=n("vOnD"),o=n("XFmb"),s=c.b.div.withConfig({displayName:"PictureBox__PictureStyles",componentId:"sc-1t7tw1f-0"})(["text-align:center;p{margin-top:0.2rem;font-size:0.8rem;opacity:0.8;}"]),u=function(e){var t=e.fluid,n=e.alt,a=e.meta,i=e.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,null,r.a.createElement(l.a,{fluid:t,alt:n,title:o.a[a.artist]+" - "+a.subject+" \n"+a.dimensions}),i.includes("artists")?r.a.createElement("p",null,a.subject):r.a.createElement("p",null,""+o.a[a.artist])))},m=n("wEEd"),d=Object(c.b)(m.a.div).withConfig({displayName:"ModalBox__ImageWrapper",componentId:"p03fkg-0"})(["position:absolute;top:0;left:0;width:100%;text-align:center;p{margin-top:0.4rem;font-size:0.8rem;opacity:0.8;}"]),f=function(e){var t=e.fluid,n=e.alt,a=e.meta;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,r.a.createElement(l.a,{fluid:t,alt:n}),r.a.createElement("p",null,o.a[a.artist]+" - "+a.subject+"  \n"+a.dimensions)))},p=n("7oih"),g=n("Tgqd"),v=n("NKAe"),y=function(e){var t=e.closeModal,n=e.animation,i=e.pointerEvents,l=e.gallery,c=e.index,o=Object(a.useState)(c),s=o[0],u=o[1],d=l.map((function(e){return function(t){var n=t.style;return r.a.createElement(m.a.div,{style:Object.assign({},n)},e)}})),f=Object(m.c)(s,(function(e){return e}),{from:{opacity:0,transform:"translate3d(-200%,0,0) scale(0.3)"},enter:{opacity:1,transform:"translate3d(0%,0,0) scale(1)"},leave:{opacity:0,transform:"translate3d(50%,0,0) scale(0.5)"}});return r.a.createElement(v.h,{style:{pointerEvents:i}},r.a.createElement(v.i,{style:n,onClick:function(){return u((function(e){return(e+1)%l.length}))}},r.a.createElement("div",null,f.map((function(e){var t=e.item,n=e.props,a=e.key,i=d[t];return r.a.createElement(i,{key:a,style:Object.assign({},n)})}))),r.a.createElement("button",{onClick:function(){return t(!1)}},r.a.createElement(g.a,null))))},E=function(e){var t=e.on,n=e.toggle,a=e.gallery,i=e.index,l=Object(m.c)(t,null,{from:{opacity:0,transform:"translate3d(0,-120px,0)"},enter:{opacity:1,transform:"translate3d(0,0,0)"},leave:{opacity:0,transform:"translate3d(0,120px,0)"}}),c=t?"all":"none";return r.a.createElement("div",null,l.map((function(e){var t=e.item,l=e.key,o=e.props;return t&&r.a.createElement(y,{gallery:a,pointerEvents:c,animation:o,closeModal:n,key:l,index:i})})))},h=n("Wbzz"),b=c.b.div.withConfig({displayName:"StickyTitle__Title",componentId:"sc-1uk78hb-0"})(["display:flex;justify-content:center;align-items:baseline;background:#282c34;width:100%;padding-top:1rem;& > div{text-align:center;font-size:",";@media screen and (min-width:368px){font-size:",";font-weight:600;}@media screen and (min-width:568px){font-size:",";}@media screen and (min-width:768px){font-size:",";font-weight:900;}@media screen and (min-width:968px){font-size:",";}}& > a{align-self:bottom;padding-left:2rem;font-size:0.7rem;text-decoration:none;color:lightgrey;@media screen and (min-width:368px){font-size:0.8rem;}@media screen and (min-width:768px){padding-left:4rem;}}"],(function(e){return e.isArtist?"1.3rem":"1.1rem"}),(function(e){return e.isArtist?"1.6rem":"1.3rem"}),(function(e){return e.isArtist?"2rem":"1.7rem"}),(function(e){return e.isArtist?"2.5rem":"2.2rem"}),(function(e){return e.isArtist?"3rem":"2.8rem"})),w=function(e){var t=e.title,n=e.isArtist;return r.a.createElement(b,{className:"sticky-inner",isArtist:n},r.a.createElement("div",null,t),n&&r.a.createElement(h.Link,{to:"/biography/"+t.split(" ")[0]},"biography"))},k=function(e){var t=e.data,n=e.location,i=Object(a.useState)(!1),l=i[0],c=i[1],s=Object(a.useState)(0),m=s[0],d=s[1],g=Object(a.useState)(n.pathname.includes("artists"))[0],y=Object(a.useState)(!1),h=y[0],b=y[1],k=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=function(){k.current&&b(g&&k.current.getBoundingClientRect().top<=0)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",(function(){return e}))}}),[g]);var x=t.allMarkdownRemark.edges.reduce((function(e,t){return e[t.node.frontmatter.slug]=t.node.frontmatter,e}),{}),j=t.allFile.edges.map((function(e){var t=e.node;return r.a.createElement(u,{key:t.id,fluid:t.childImageSharp.fluid,alt:t.relativePath.split(".")[0],pathname:n.pathname,meta:x[t.relativePath]})})),O=t.allFile.edges.map((function(e){var t=e.node;return r.a.createElement(f,{key:t.id,fluid:t.childImageSharp.fluid,alt:t.relativePath.split(".")[0],meta:x[t.relativePath]})})),z=function(){var e=Object.values(x)[0];return g?o.a[e.artist]:e.subject};return r.a.createElement(p.a,{title:z()},r.a.createElement("div",{className:"sticky-wrapper"+(h?" sticky":""),ref:k},r.a.createElement(w,{title:z(),isArtist:g})),!l&&r.a.createElement(v.d,null,j.map((function(e,t){return r.a.createElement("div",{key:e.key,onClick:function(){return function(e){d(e),c(!0)}(t)}},e)}))),r.a.createElement(E,{on:l,toggle:c,gallery:O,index:m}))};k.defaultProps={location:{}};t.default=k;var x="604113784"}}]);
//# sourceMappingURL=component---src-components-gallery-js-6173703a78b4d398f455.js.map