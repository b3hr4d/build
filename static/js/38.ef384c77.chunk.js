(this["webpackJsonpmelodition-typescript"]=this["webpackJsonpmelodition-typescript"]||[]).push([[38],{363:function(t,a,e){"use strict";var n=e(1),i=e(3),o=e(17),r=e(0),s=(e(6),e(4)),c=e(7),d=e(9),p=r.forwardRef((function(t,a){var e=t.classes,o=t.className,c=t.component,p=void 0===c?"div":c,u=t.disableGutters,l=void 0!==u&&u,m=t.fixed,b=void 0!==m&&m,g=t.maxWidth,h=void 0===g?"lg":g,f=Object(i.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return r.createElement(p,Object(n.a)({className:Object(s.a)(e.root,o,b&&e.fixed,l&&e.disableGutters,!1!==h&&e["maxWidth".concat(Object(d.a)(String(h)))]),ref:a},f))}));a.a=Object(c.a)((function(t){return{root:Object(o.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2),display:"block"},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(a,e){var n=t.breakpoints.values[e];return 0!==n&&(a[t.breakpoints.up(e)]={maxWidth:n}),a}),{}),maxWidthXs:Object(o.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(o.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(o.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(o.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(o.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(p)},490:function(t,a,e){"use strict";e.r(a);var n=e(2),i=e(73),o=e(74),r=e(76),s=e(75),c=e(12),d=e(0),p=e.n(d),u=e(35),l=e(22),m=e(182),b=e(363),g=e(72),h=e(7),f=e(59),x=e(58),v=e(30),j=e(25),k=function(t){return function(a,e){var n=e().bank.posts.data,i=null===n||void 0===n?void 0:n.find((function(a){return a.id===t}));i?a({type:x.e,data:i}):(a({type:x.c}),v.a.get("/post/v2?id=".concat(t)).then((function(t){return a({type:x.e,data:t.data[0]})})).catch((function(t){return Object(j.a)(t,x.a)})))}},O=e(77),W=function(t){Object(r.a)(e,t);var a=Object(s.a)(e);function e(){return Object(i.a)(this,e),a.apply(this,arguments)}return Object(o.a)(e,[{key:"componentDidMount",value:function(){var t=Object(f.e)(this.props.pathname);t.post&&this.props.requestPost(t.post)}},{key:"render",value:function(){var t=this.props,a=t.classes,e=t.data,n=t.loading,i=t.error;return p.a.createElement(b.a,{className:a.root},n?p.a.createElement(O.a,null):e?p.a.createElement("div",{className:a.bank,dangerouslySetInnerHTML:{__html:e.content}}):p.a.createElement(g.a,{component:"div",className:a.autoMargin},i))}}]),e}(d.Component);a.default=Object(u.c)((function(t,a){return Object(n.a)({pathname:t.router.location.pathname,classes:a.classes},t.single.post)}),(function(t){return{requestPost:Object(l.b)(k,t)}}))(Object(h.a)((function(t){var a;return Object(m.a)({root:(a={width:"99vw",minHeight:"calc(100vh - 128px)"},Object(c.a)(a,t.breakpoints.down("xs"),{minHeight:"calc(100vh - 112px)",padding:t.spacing(1)}),Object(c.a)(a,"padding",t.spacing(2)),Object(c.a)(a,"display","flex"),Object(c.a)(a,"flexDirection","column"),a),autoMargin:{margin:"auto"},bank:{textAlign:"center",width:"100%",padding:10,backgroundColor:t.palette.background.paper,border:"1px solid ".concat(t.palette.secondary.main),"& > h1":{padding:10,margin:10,fontWeight:900,backgroundColor:t.palette.secondary.main},"& > h2":{padding:10,margin:10,fontWeight:800},"& > h3":{padding:7,margin:7,fontWeight:800},"& > img":{maxWidth:"100%"},"& > * > img":{maxWidth:"100%"},"& > h4":{padding:5,margin:5,fontWeight:800},"& > figure":{margin:"auto",padding:10,"& > figcaption":{display:"none"}},"& > * > strong":{fontWeight:800}}})}))(W))}}]);
//# sourceMappingURL=38.ef384c77.chunk.js.map