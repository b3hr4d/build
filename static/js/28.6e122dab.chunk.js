(this["webpackJsonpmelodition-typescript"]=this["webpackJsonpmelodition-typescript"]||[]).push([[28],{284:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(108),c=a(51),i=a(30),r=a(285),o=a(289),s=a(45),u=a(48),l=a(25),d=function(e){return function(t,a){e.guide;var d=Object(n.a)(e,["guide"]),f=a().bank.guides.data.find((function(t){return t.id===e.guide}));f?(t({type:c.f,data:f}),t({type:u.e,data:m(f.guide_select)}),t({type:s.e,data:p(f.guide_select)}),e.course&&t(Object(r.a)(d)),e.exercise&&t(Object(o.a)(d))):(t({type:c.c}),i.a.get("/lesson/v2/guide?id=".concat(e.guide)).then((function(a){t({type:c.f,data:a.data[0]}),t({type:c.e,data:a.data}),t({type:u.e,data:m(a.data[0].guide_select)}),t({type:s.e,data:p(a.data[0].guide_select)}),e.course&&t(Object(r.a)(d)),e.exercise&&t(Object(o.a)(d))})).catch((function(e){return Object(l.a)(e,c.a)})))}},m=function(e){var t=[];return e.map((function(e){var a;return null===(a=e.course)||void 0===a?void 0:a.map((function(e){return t.push(e)}))})),t},p=function(e){var t=[];return e.map((function(e){var a;return null===(a=e.exercise)||void 0===a?void 0:a.map((function(e){return t.push(e)}))})),t}},285:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(108),c=a(48),i=a(30),r=a(284),o=a(295),s=a(289),u=a(45),l=a(47),d=a(25),m=function(e){return function(t,a){var m=a().bank.courses.data.find((function(t){return t.id===e.course})),f=(e.course,Object(n.a)(e,["course"]));if(m){var b=p(m.course_select),g=b.lessons,h=b.exercises;t({type:c.f,data:m}),t({type:l.e,data:g}),t({type:u.e,data:h}),e.lesson&&t(Object(o.a)(f)),e.exercise&&t(Object(s.a)(f))}else e.guide?t(Object(r.a)(e)):m||(t({type:c.c}),i.a.get("/lesson/v2/course?id=".concat(e.course)).then((function(a){var n=p(a.data[0].course_select),i=n.lessons,r=n.exercises;t({type:c.f,data:a.data[0]}),t({type:c.e,data:a.data}),t({type:l.e,data:i}),t({type:u.e,data:r}),e.lesson&&t(Object(o.a)(f)),e.exercise&&t(Object(s.a)(f))})).catch((function(e){return Object(d.a)(e,c.a)})))}},p=function(e){var t=[],a=[];return e.map((function(e){return"Exercise"===e.info.genre.name?a.push(e):t.push(e)})),{lessons:t,exercises:a}}},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(45),c=a(30),i=a(284),r=a(285),o=a(38),s=a(25),u=function(e){return function(t,a){var u=a().bank.exercises.data.find((function(t){return t.id===e.exercise}));u?(t({type:o.g}),t({type:n.f,data:u})):e.guide?t(Object(i.a)(e)):e.course?t(Object(r.a)(e)):u||(t({type:n.c}),c.a.get("/lesson/v2?id=".concat(e.exercise)).then((function(e){t({type:o.g}),t({type:n.f,data:e.data[0]}),t({type:n.e,data:e.data})})).catch((function(e){return Object(s.a)(e,n.a)})))}}},295:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(47),c=a(30),i=a(284),r=a(285),o=a(25),s=function(e){return function(t,a){var s=a().bank.lessons.data.find((function(t){return t.id===e.lesson}));s?t({type:n.f,data:s}):e.guide?t(Object(i.a)(e)):e.course?t(Object(r.a)(e)):s||(t({type:n.c}),c.a.get("/lesson/v2?id=".concat(e.lesson)).then((function(e){t({type:n.f,data:e.data[0]}),t({type:n.e,data:e.data})})).catch((function(e){return Object(o.a)(e,n.a)})))}}},311:function(e,t,a){"use strict";var n=a(1),c=a(3),i=a(0),r=(a(6),a(4)),o=a(7),s=i.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,u=void 0===s?"div":s,l=Object(c.a)(e,["classes","className","component"]);return i.createElement(u,Object(n.a)({className:Object(r.a)(a.root,o),ref:t},l))}));t.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},321:function(e,t,a){"use strict";var n=a(1),c=a(3),i=a(0),r=(a(6),a(4)),o=a(7),s=a(105),u=i.forwardRef((function(e,t){var a=e.children,o=e.classes,u=e.className,l=e.focusVisibleClassName,d=Object(c.a)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(s.a,Object(n.a)({className:Object(r.a)(o.root,u),focusVisibleClassName:Object(r.a)(l,o.focusVisible),ref:t},d),a,i.createElement("span",{className:o.focusHighlight}))}));t.a=Object(o.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(u)},322:function(e,t,a){"use strict";var n=a(1),c=a(3),i=a(0),r=(a(6),a(4)),o=a(7),s=["video","audio","picture","iframe","img"],u=i.forwardRef((function(e,t){var a=e.children,o=e.classes,u=e.className,l=e.component,d=void 0===l?"div":l,m=e.image,p=e.src,f=e.style,b=Object(c.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==s.indexOf(d),h=!g&&m?Object(n.a)({backgroundImage:'url("'.concat(m,'")')},f):f;return i.createElement(d,Object(n.a)({className:Object(r.a)(o.root,u,g&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:h,src:g?m||p:void 0},b),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(u)},491:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(73),i=a(74),r=a(76),o=a(75),s=a(12),u=a(0),l=a.n(u),d=a(35),m=a(22),p=a(182),f=a(310),b=a(322),g=a(72),h=a(7),j=a(59),v=a(285),O=a(21),y=a(395),x=a(321),E=a(493),N=a(311),k=a(189),C=a(26),w=Object(k.a)((function(e){return Object(p.a)({root:{maxHeight:280,width:"100%",margin:e.spacing(1)},content:{minHeight:130},rightChip:{position:"absolute",cursor:"pointer",margin:e.spacing(1),backgroundColor:"green"}})})),H=function(e){var t=e.type,a=e.courseItem,n=e.path,c=w(),i=a.title,r=a.id,o=a.featured_img,s=a.info;return l.a.createElement(y.a,{className:c.root},l.a.createElement(x.a,{onClick:function(e){var a="Exercise"===t?"exercise":"lesson";C.b.dispatch(Object(O.e)(n+"/"+a+"="+r))}},l.a.createElement(f.a,{container:!0},l.a.createElement(f.a,{item:!0,lg:4,xs:4,sm:4,xl:4},l.a.createElement(E.a,{label:s.grade.name,className:c.rightChip}),l.a.createElement(b.a,{component:"img",alt:i,height:"200",image:Object(j.g)(o),title:i})),l.a.createElement(f.a,{item:!0,lg:8,xs:8,sm:8,xl:8},l.a.createElement(N.a,{className:c.content},l.a.createElement(g.a,{gutterBottom:!0,variant:"body1",component:"h6"},i))))))},_=a(77),M=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.e)(this.props.pathname);this.props.requestCourse(e)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data,n=e.loading,c=e.error,i=e.pathname;return l.a.createElement(f.a,{container:!0,justify:"center",className:t.root},n?l.a.createElement(_.a,null):a?l.a.createElement(f.a,{container:!0,spacing:2},l.a.createElement(f.a,{item:!0,lg:6,md:6,xl:6,xs:12},l.a.createElement("div",{className:t.content},l.a.createElement(b.a,{image:Object(j.g)(a.thumbnails),className:t.image}),l.a.createElement(g.a,{gutterBottom:!0,variant:"body1",component:"h6",className:t.text},a.description))),l.a.createElement(f.a,{item:!0,lg:6,md:6,xl:6,xs:12},l.a.createElement(f.a,{container:!0,justify:"flex-end"},null===a||void 0===a?void 0:a.course_select.map((function(e,t){return l.a.createElement(H,{key:t,type:e.info.genre.name,path:i,courseItem:e})}))))):l.a.createElement(g.a,{component:"div",className:t.autoMargin},c))}}]),a}(u.Component);t.default=Object(d.c)((function(e,t){return Object(n.a)({classes:t.classes,pathname:e.router.location.pathname},e.single.course)}),(function(e){return{requestCourse:Object(m.b)(v.a,e)}}))(Object(h.a)((function(e){var t,a;return Object(p.a)({root:(t={width:"99vw",minHeight:"calc(100vh - 128px)"},Object(s.a)(t,e.breakpoints.down("xs"),{minHeight:"calc(100vh - 112px)",padding:e.spacing(1)}),Object(s.a)(t,"padding",e.spacing(2)),Object(s.a)(t,"display","flex"),Object(s.a)(t,"flexDirection","column"),Object(s.a)(t,"justifyContent","flex-start"),t),autoMargin:{margin:"auto"},content:(a={position:"relative",minHeight:"calc(100vh - 160px)"},Object(s.a)(a,e.breakpoints.down("sm"),{minHeight:"100%"}),Object(s.a)(a,"border","1px solid ".concat(e.palette.secondary.main)),Object(s.a)(a,"height","100%"),Object(s.a)(a,"width","100%"),a),text:{padding:20},image:{width:"100%",height:"100%",opacity:"0.3",position:"absolute"}})}))(M))}}]);
//# sourceMappingURL=28.6e122dab.chunk.js.map