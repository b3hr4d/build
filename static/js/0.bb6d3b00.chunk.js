(this["webpackJsonpmelodition-typescript"]=this["webpackJsonpmelodition-typescript"]||[]).push([[0],{457:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(207),r=a(93),i=a(41),l=a(458),o=a(459),c=a(88),s=a(90),d=a(32),p=function(e){return function(t,a){e.guide;var p=Object(n.a)(e,["guide"]),f=a().bank.guides.data.find((function(t){return t.id===e.guide}));f?(t({type:r.f,data:f}),t({type:s.e,data:u(f.guide_select)}),t({type:c.e,data:m(f.guide_select)}),e.course&&t(Object(l.a)(p)),e.exercise&&t(Object(o.a)(p))):(t({type:r.c}),i.a.get("/lesson/v2/guide?id=".concat(e.guide)).then((function(a){t({type:r.f,data:a.data[0]}),t({type:r.e,data:a.data}),t({type:s.e,data:u(a.data[0].guide_select)}),t({type:c.e,data:m(a.data[0].guide_select)}),e.course&&t(Object(l.a)(p)),e.exercise&&t(Object(o.a)(p))})).catch((function(e){return Object(d.a)(e,r.a)})))}},u=function(e){var t=[];return e.map((function(e){var a;return null===(a=e.course)||void 0===a?void 0:a.map((function(e){return t.push(e)}))})),t},m=function(e){var t=[];return e.map((function(e){var a;return null===(a=e.exercise)||void 0===a?void 0:a.map((function(e){return t.push(e)}))})),t}},458:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(207),r=a(90),i=a(41),l=a(457),o=a(460),c=a(459),s=a(88),d=a(89),p=a(32),u=function(e){return function(t,a){var u=a().bank.courses.data.find((function(t){return t.id===e.course})),f=(e.course,Object(n.a)(e,["course"]));if(u){var C=m(u.course_select);t({type:r.f,data:u}),t({type:d.e,data:C.lessons}),t({type:s.e,data:C.exercises}),e.lesson&&t(Object(o.a)(f)),e.exercise&&t(Object(c.a)(f))}else e.guide?t(Object(l.a)(e)):u||(t({type:r.c}),i.a.get("/lesson/v2/course?id=".concat(e.course)).then((function(a){var n=m(a.data[0].course_select);t({type:r.f,data:a.data[0]}),t({type:r.e,data:a.data}),t({type:d.e,data:n.lessons}),t({type:s.e,data:n.exercises}),e.lesson&&t(Object(o.a)(f)),e.exercise&&t(Object(c.a)(f))})).catch((function(e){return Object(p.a)(e,r.a)})))}},m=function(e){var t=[],a=[];return e.map((function(e){return"Exercise"===e.info.genre.name?a.push(e):t.push(e)})),{lessons:t,exercises:a}}},459:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(88),r=a(41),i=a(457),l=a(458),o=a(31),c=a(32),s=function(e){return function(t,a){var s=a().bank.exercises.data.find((function(t){return t.id===e.exercise}));s?(t({type:o.g}),t({type:n.f,data:s})):e.guide?t(Object(i.a)(e)):e.course?t(Object(l.a)(e)):s||(t({type:n.c}),r.a.get("/lesson/v2?id=".concat(e.exercise)).then((function(e){t({type:o.g}),t({type:n.f,data:e.data[0]}),t({type:n.e,data:e.data})})).catch((function(e){return Object(c.a)(e,n.a)})))}}},460:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(89),r=a(41),i=a(457),l=a(458),o=a(32),c=function(e){return function(t,a){var c=a().bank.lessons.data.find((function(t){return t.id===e.lesson}));c?t({type:n.f,data:c}):e.guide?t(Object(i.a)(e)):e.course?t(Object(l.a)(e)):c||(t({type:n.c}),r.a.get("/lesson/v2?id=".concat(e.lesson)).then((function(e){t({type:n.f,data:e.data[0]}),t({type:n.e,data:e.data})})).catch((function(e){return Object(o.a)(e,n.a)})))}}},461:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(15),l=a(11),o=a(25),c=Object(i.c)((function(e){return{theme:e.auth.theme,Melo:e.melodition}}),(function(e){return{drawFinger:Object(l.b)(o.c,e)}}))((function(e){var t=e.Melo,a=(e.theme,e.drawFinger),n="rgba(180, 180, 180, 0.5)";return r.a.createElement("svg",{id:"svgElem",xmlns:"http://www.w3.org/2000/svg",width:"100%",style:{minWidth:"150px",maxWidth:"250px"},viewBox:"0 0 974 512",fill:"none"},r.a.createElement("g",{id:"fingers",ref:function(e){e&&t.fingerLoading&&a({handRefs:e.children})}},r.a.createElement("path",{className:"right",id:"r1",d:"M533.5 215.5C550.258 204.846 566.5 213 575.5 222.5L614.5 266C578.491 292.941 577.487 324.434 563 361C546.255 318.826 536.187 300.612 521.5 254.5C518.156 244 516.12 225.853 533.5 215.5Z",fill:n}),r.a.createElement("path",{className:"right",id:"r2",d:"M655 56C662.494 62.9264 664.442 68.5999 667 77.5L681.615 217C656.341 219.409 644.33 222.492 629.615 243L608.5 90.5C606.606 79.4297 607.333 73.3286 612.5 64C617.947 55.7181 620.737 53.8317 631 51L631.175 50.9816C641.995 49.8491 645.411 49.4915 655 56Z",fill:n}),r.a.createElement("path",{className:"right",id:"r3",d:"M752.385 215.5L755.746 115.11L758 43.2689C757.382 33.8715 755.814 28.8652 750.11 20.5606C742.291 12.2544 737.072 9.82141 726.439 9C716.124 9.99562 711.124 11.9864 704.272 19.322C697.472 27.759 695.707 33.4633 695.254 44.9205L693 107.678L693.385 215.5C713.764 210.309 726.853 211.322 752.385 215.5Z",fill:n}),r.a.createElement("path",{className:"right",id:"r4",d:"M821.697 232.5L836.289 140.481L846.106 83.1651C846.82 75.5659 846.018 71.312 841.728 63.7408C835.419 55.8176 830.776 53.0107 820.745 50.5915C810.765 49.6744 805.717 50.4329 798.162 55.148C790.504 60.7505 788.028 65.0081 786.007 74.0728L777.101 114.389L757.5 216C786.421 216.011 799.981 223.042 821.697 232.5Z",fill:n}),r.a.createElement("path",{className:"right",id:"r5",d:"M849.5 168.5L827 239.5C862.617 249.985 869.511 281.09 879.5 296.5C887.342 250.949 899.398 220.668 901.5 174C897.793 161.727 895.916 153.463 879.5 149C863.891 147.757 857.224 154.157 849.5 168.5Z",fill:n}),r.a.createElement("path",{className:"left",id:"l1",d:"M440.5 215.5C423.742 204.846 407.5 213 398.5 222.5L359.5 266C395.509 292.941 396.513 324.434 411 361C427.745 318.826 437.813 300.612 452.5 254.5C455.844 244 457.88 225.853 440.5 215.5Z",fill:n}),r.a.createElement("path",{className:"left",id:"l2",d:"M319 56C311.506 62.9264 309.558 68.5999 307 77.5L292.385 217C317.659 219.409 329.67 222.492 344.385 243L365.5 90.5C367.394 79.4297 366.667 73.3286 361.5 64C356.053 55.7181 353.263 53.8317 343 51L342.825 50.9816C332.005 49.8491 328.589 49.4915 319 56Z",fill:n}),r.a.createElement("path",{className:"left",id:"l3",d:"M221.615 215.5L218.254 115.11L216 43.2689C216.618 33.8715 218.186 28.8652 223.89 20.5606C231.709 12.2544 236.928 9.82141 247.561 9C257.876 9.99562 262.876 11.9864 269.728 19.322C276.528 27.759 278.293 33.4633 278.746 44.9205L281 107.678L280.615 215.5C260.236 210.309 247.147 211.322 221.615 215.5Z",fill:n}),r.a.createElement("path",{className:"left",id:"l4",d:"M152.303 232.5L137.711 140.481L127.894 83.1651C127.18 75.5659 127.982 71.312 132.272 63.7408C138.581 55.8176 143.224 53.0107 153.255 50.5915C163.235 49.6744 168.283 50.4329 175.838 55.148C183.496 60.7505 185.972 65.0081 187.993 74.0728L196.899 114.389L216.5 216C187.579 216.011 174.019 223.042 152.303 232.5Z",fill:n}),r.a.createElement("path",{className:"left",id:"l5",d:"M124.5 168.5L147 239.5C111.383 249.985 104.489 281.09 94.5 296.5C86.658 250.949 74.602 220.668 72.5 174C76.207 161.727 78.084 153.463 94.5 149C110.109 147.757 116.776 154.157 124.5 168.5Z",fill:n})),r.a.createElement("g",{id:"hands"},r.a.createElement("path",{id:"hand_right",d:"M803.611 510.08C801.712 510.08 799.792 509.589 798.064 508.544C793.051 505.472 791.429 498.923 794.48 493.867C795.355 492.459 880.752 349.717 888.368 174.763C888.56 170.816 887.152 167.104 884.464 164.267C881.861 161.557 879.045 160.619 874.608 160.064C868.293 160.064 863.152 163.712 861.232 169.195L825.84 269.611C823.984 274.795 818.565 277.717 813.168 276.416C807.835 275.072 804.379 269.867 805.232 264.427L832.773 87.3173C834.181 81.0667 832.923 75.3707 829.424 70.9547C825.925 66.5387 820.656 64 815.024 64C806.789 64 799.493 69.5467 797.296 77.4827L760.731 256.235C759.6 261.632 754.651 265.493 749.019 264.683C743.515 264.043 739.44 259.285 739.611 253.739L746.373 44.5013C746.971 37.0347 744.176 30.6347 738.736 26.3253C733.275 22.0587 726.405 20.8427 719.792 23.0613C712.048 25.6427 706.629 32.576 705.989 40.7253L696.944 254.528C696.688 260.075 692.229 264.533 686.683 264.747C681.371 264.235 676.336 260.821 675.675 255.317L654.768 76.5653C653.957 71.808 650.8 67.2853 646.149 64.6613C641.477 62.0373 635.973 61.7387 631.045 63.6587C623.451 66.7307 618.992 74.5173 620.208 82.6453L643.269 286.805C643.781 291.413 641.243 295.851 637.019 297.749C632.709 299.648 627.781 298.56 624.688 295.083L565.787 228.843C561.883 224.448 556.485 222.016 550.64 221.952C544.923 222.485 539.355 224.256 535.365 228.608C530.416 234.048 528.709 241.728 530.928 248.661C540.848 279.36 566.32 355.648 588.869 400.555C621.872 466.347 641.307 492.8 641.499 493.077C644.997 497.813 644.016 504.469 639.28 507.989C634.565 511.509 627.931 510.528 624.368 505.792C623.557 504.683 603.824 477.909 569.776 410.133C547.419 365.547 523.099 293.931 510.64 255.189C506.053 240.981 509.488 225.28 519.643 214.165C527.557 205.547 538.8 200.597 550.469 200.597C550.576 200.597 550.683 200.597 550.811 200.619C562.629 200.704 573.893 205.824 581.744 214.656L618.288 255.765L599.067 85.44C596.379 67.8827 606.256 50.624 623.131 43.8827C634.053 39.488 646.277 40.2773 656.603 46.08C666.885 51.8613 673.925 61.888 675.867 73.5573L681.285 119.808L684.677 39.4453C686 22.3573 697.115 8.10667 713.029 2.79467C726.363 -1.64267 740.869 0.874667 751.877 9.51467C762.928 18.176 768.816 31.7227 767.643 45.696L764.955 129.045L776.539 72.448C781.509 54.6347 797.253 42.6667 815.024 42.6667C827.205 42.6667 838.555 48.1493 846.128 57.6853C853.701 67.2213 856.475 79.488 853.723 91.3707L843.568 156.651C849.669 145.685 862.107 138.667 874.267 138.731C884.379 138.773 893.296 142.635 899.888 149.568C906.544 156.523 910.107 166.037 909.68 175.701C901.787 356.331 816.325 498.965 812.699 504.981C810.715 508.245 807.216 510.08 803.611 510.08V510.08Z",fill:"black"}),r.a.createElement("path",{id:"hand_Left",d:"M170.389 510.08C172.288 510.08 174.208 509.589 175.936 508.544C180.949 505.472 182.571 498.923 179.52 493.867C178.645 492.459 93.248 349.717 85.632 174.763C85.44 170.816 86.848 167.104 89.536 164.267C92.139 161.557 94.955 160.619 99.392 160.064C105.707 160.064 110.848 163.712 112.768 169.195L148.16 269.611C150.016 274.795 155.435 277.717 160.832 276.416C166.165 275.072 169.621 269.867 168.768 264.427L141.227 87.3173C139.819 81.0667 141.077 75.3707 144.576 70.9547C148.075 66.5387 153.344 64 158.976 64C167.211 64 174.507 69.5467 176.704 77.4827L213.269 256.235C214.4 261.632 219.349 265.493 224.981 264.683C230.485 264.043 234.56 259.285 234.389 253.739L227.627 44.5013C227.029 37.0347 229.824 30.6347 235.264 26.3253C240.725 22.0587 247.595 20.8427 254.208 23.0613C261.952 25.6427 267.371 32.576 268.011 40.7253L277.056 254.528C277.312 260.075 281.771 264.533 287.317 264.747C292.629 264.235 297.664 260.821 298.325 255.317L319.232 76.5653C320.043 71.808 323.2 67.2853 327.851 64.6613C332.523 62.0373 338.027 61.7387 342.955 63.6587C350.549 66.7307 355.008 74.5173 353.792 82.6453L330.731 286.805C330.219 291.413 332.757 295.851 336.981 297.749C341.291 299.648 346.219 298.56 349.312 295.083L408.213 228.843C412.117 224.448 417.515 222.016 423.36 221.952C429.077 222.485 434.645 224.256 438.635 228.608C443.584 234.048 445.291 241.728 443.072 248.661C433.152 279.36 407.68 355.648 385.131 400.555C352.128 466.347 332.693 492.8 332.501 493.077C329.003 497.813 329.984 504.469 334.72 507.989C339.435 511.509 346.069 510.528 349.632 505.792C350.443 504.683 370.176 477.909 404.224 410.133C426.581 365.547 450.901 293.931 463.36 255.189C467.947 240.981 464.512 225.28 454.357 214.165C446.443 205.547 435.2 200.597 423.531 200.597C423.424 200.597 423.317 200.597 423.189 200.619C411.371 200.704 400.107 205.824 392.256 214.656L355.712 255.765L374.933 85.44C377.621 67.8827 367.744 50.624 350.869 43.8827C339.947 39.488 327.723 40.2773 317.397 46.08C307.115 51.8613 300.075 61.888 298.133 73.5573L292.715 119.808L289.323 39.4453C288 22.3573 276.885 8.10667 260.971 2.79467C247.637 -1.64267 233.131 0.874667 222.123 9.51467C211.072 18.176 205.184 31.7227 206.357 45.696L209.045 129.045L197.461 72.448C192.491 54.6347 176.747 42.6667 158.976 42.6667C146.795 42.6667 135.445 48.1493 127.872 57.6853C120.299 67.2213 117.525 79.488 120.277 91.3707L130.432 156.651C124.331 145.685 111.893 138.667 99.733 138.731C89.621 138.773 80.704 142.635 74.112 149.568C67.456 156.523 63.893 166.037 64.32 175.701C72.213 356.331 157.675 498.965 161.301 504.981C163.285 508.245 166.784 510.08 170.389 510.08Z",fill:"black"})))}));t.a=c},462:function(e,t,a){"use strict";a.d(t,"b",(function(){return X})),a.d(t,"a",(function(){return Y}));var n=a(207),r=a(37),i=a(13),l=a(0),o=a.n(l),c=a(341),s=a(336),d=a(391),p=a(204),u=a(450),m=a(427),f=a(9),C=Object(f.a)(o.a.createElement("path",{d:"M18 17h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm1-9h1V4h-2v1h1zm-1 3h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zM2 5h14v2H2zm0 12h14v2H2zm0-6h14v2H2z"}),"FormatListNumberedRtl"),v=a(12),b=a(18),h=a(24),L=a(23),g=a(34),y=a(1),x=a(4),j=(a(6),a(3)),O=a(5),E=a(249),N=l.forwardRef((function(e,t){var a=e.active,n=e.alternativeLabel,r=void 0!==n&&n,i=e.classes,o=e.className,c=e.completed,s=e.disabled,d=(e.index,e.orientation),p=void 0===d?"horizontal":d,u=Object(x.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(y.a)({className:Object(j.a)(i.root,i[p],o,r&&i.alternativeLabel,a&&i.active,c&&i.completed,s&&i.disabled),ref:t},u),l.createElement("span",{className:Object(j.a)(i.line,{horizontal:i.lineHorizontal,vertical:i.lineVertical}[p])}))})),w=Object(O.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(N),M=l.createElement(w,null),S=l.forwardRef((function(e,t){var a=e.activeStep,n=void 0===a?0:a,r=e.alternativeLabel,i=void 0!==r&&r,o=e.children,c=e.classes,s=e.className,d=e.connector,p=void 0===d?M:d,u=e.nonLinear,m=void 0!==u&&u,f=e.orientation,C=void 0===f?"horizontal":f,v=Object(x.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),b=l.isValidElement(p)?l.cloneElement(p,{orientation:C}):null,h=l.Children.toArray(o),L=h.map((function(e,t){var a={index:t,active:!1,completed:!1,disabled:!1};return n===t?a.active=!0:!m&&n>t?a.completed=!0:!m&&n<t&&(a.disabled=!0),l.cloneElement(e,Object(y.a)({alternativeLabel:i,connector:b,last:t+1===h.length,orientation:C},a,e.props))}));return l.createElement(E.a,Object(y.a)({square:!0,elevation:0,className:Object(j.a)(c.root,c[C],s,i&&c.alternativeLabel),ref:t},v),L)})),k=Object(O.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(S),z=(a(67),l.forwardRef((function(e,t){var a=e.active,n=void 0!==a&&a,r=e.alternativeLabel,i=e.children,o=e.classes,c=e.className,s=e.completed,d=void 0!==s&&s,p=e.connector,u=e.disabled,m=void 0!==u&&u,f=e.expanded,C=void 0!==f&&f,v=e.index,b=e.last,h=e.orientation,L=Object(x.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]),g=p?l.cloneElement(p,{orientation:h,alternativeLabel:r,index:v,active:n,completed:d,disabled:m}):null,O=l.createElement("div",Object(y.a)({className:Object(j.a)(o.root,o[h],c,r&&o.alternativeLabel,d&&o.completed),ref:t},L),g&&r&&0!==v?g:null,l.Children.map(i,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(y.a)({active:n,alternativeLabel:r,completed:d,disabled:m,expanded:C,last:b,icon:v+1,orientation:h},e.props)):null})));return g&&!r&&0!==v?l.createElement(l.Fragment,null,g,O):O}))),I=Object(O.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(z),R=a(87),T=a(49),Z=Object(T.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),W=Object(T.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),$=a(129),_=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),H=l.forwardRef((function(e,t){var a=e.completed,n=void 0!==a&&a,r=e.icon,i=e.active,o=void 0!==i&&i,c=e.error,s=void 0!==c&&c,d=e.classes;if("number"===typeof r||"string"===typeof r){var p=Object(j.a)(d.root,o&&d.active,s&&d.error,n&&d.completed);return s?l.createElement(W,{className:p,ref:t}):n?l.createElement(Z,{className:p,ref:t}):l.createElement($.a,{className:p,ref:t},_,l.createElement("text",{className:d.text,x:"12",y:"16",textAnchor:"middle"},r))}return r})),D=Object(O.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(H),F=l.forwardRef((function(e,t){var a=e.active,n=void 0!==a&&a,r=e.alternativeLabel,i=void 0!==r&&r,o=e.children,c=e.classes,s=e.className,d=e.completed,p=void 0!==d&&d,u=e.disabled,m=void 0!==u&&u,f=e.error,C=void 0!==f&&f,v=(e.expanded,e.icon),b=(e.last,e.optional),h=e.orientation,L=void 0===h?"horizontal":h,g=e.StepIconComponent,O=e.StepIconProps,E=Object(x.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),N=g;return v&&!N&&(N=D),l.createElement("span",Object(y.a)({className:Object(j.a)(c.root,c[L],s,m&&c.disabled,i&&c.alternativeLabel,C&&c.error),ref:t},E),v||N?l.createElement("span",{className:Object(j.a)(c.iconContainer,i&&c.alternativeLabel)},l.createElement(N,Object(y.a)({completed:p,active:n,error:C,icon:v},O))):null,l.createElement("span",{className:c.labelContainer},o?l.createElement(R.a,{variant:"body2",component:"span",display:"block",className:Object(j.a)(c.label,i&&c.alternativeLabel,p&&c.completed,n&&c.active,C&&c.error)},o):null,b))}));F.muiName="StepLabel";var V=Object(O.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(F),P=a(384),A=l.forwardRef((function(e,t){var a=e.active,n=(e.alternativeLabel,e.children),r=e.classes,i=e.className,o=(e.completed,e.expanded),c=e.last,s=(e.optional,e.orientation,e.TransitionComponent),d=void 0===s?P.a:s,p=e.transitionDuration,u=void 0===p?"auto":p,m=e.TransitionProps,f=Object(x.a)(e,["active","alternativeLabel","children","classes","className","completed","expanded","last","optional","orientation","TransitionComponent","transitionDuration","TransitionProps"]);var C=u;return"auto"!==u||d.muiSupportAuto||(C=void 0),l.createElement("div",Object(y.a)({className:Object(j.a)(r.root,i,c&&r.last),ref:t},f),l.createElement(d,Object(y.a)({in:a||o,className:r.transition,timeout:C,unmountOnExit:!0},m),n))})),G=Object(O.a)((function(e){return{root:{marginTop:8,marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:"1px solid ".concat("light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600])},last:{borderLeft:"none"},transition:{}}}),{name:"MuiStepContent"})(A),q=a(344),J=a(39),B=function(e){Object(h.a)(a,e);var t=Object(L.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).linkGenerator=function(e,t){var a=n.props.pathname.split("/").slice(0,-1);return"".concat(a.join("/"),"/").concat(e,"=").concat(t)},n.handleNext=function(e){var t=e.currentTarget.tabIndex;n.setState({lessonIndex:t})},n.selectedLesson=function(e){var t=Object(J.d)(e.currentTarget.pathname);n.props.resetPlayer(),n.props.requestLesson(t)},n.state={lessonIndex:0,loading:!0,steps:[],selected:0},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;if(Object(J.d)(this.props.pathname).course===(null===(e=this.props.course)||void 0===e?void 0:e.id)){var a,n=null===(a=this.props.course)||void 0===a?void 0:a.course_select;if(n){var r,i=[];n.forEach((function(e){var t=128===e.info.genre.id?"exercise":"lesson",a=e.excerpt;a||(a="No Detail Provided"),i.push({id:e.id,name:e.title,excerpt:a,type:t})})),r=i.findIndex((function(e){return e.id===t.props.lessonId})),this.setState({steps:i,loading:!1,lessonIndex:r})}}}},{key:"render",value:function(){var e=this,t=this.state,a=t.lessonIndex,n=t.loading,r=t.steps,i=this.props.classes;return n?o.a.createElement("div",null,"..."):o.a.createElement("div",{className:i.root},o.a.createElement(k,{activeStep:a,orientation:"vertical"},r.map((function(t,a){return o.a.createElement(I,{key:t.id},o.a.createElement(V,{tabIndex:a,onClick:e.handleNext},t.name),o.a.createElement(G,null,o.a.createElement(R.a,null,t.excerpt),o.a.createElement(q.a,{component:g.a,variant:"contained",color:"secondary",to:e.linkGenerator(t.type,t.id),className:i.button,onClick:e.selectedLesson},"Learn")))}))))}}]),a}(l.Component),K=Object(O.a)((function(e){return{root:{width:"250px"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)}}}))(B),Q=a(231),U=Object(c.a)((function(e){return Object(s.a)({playMain:Object(i.a)({minHeight:"calc(100vh - 64px)"},e.breakpoints.down("xs"),{minHeight:"calc(100vh - 56px)"}),content:{height:"100%",width:"100%",flexWrap:"nowrap"},doubleGrid:{flexWrap:"nowrap",width:"100%",maxWidth:"100%","& > div":{margin:"auto",padding:0,height:"100%"}},centerText:{textAlign:"center"},sideStyle:{height:"100%",width:"100%",flexWrap:"nowrap"}})})),X=function(e){var t=e.playModeChanger,a=U();return o.a.createElement(d.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:a.sideStyle},o.a.createElement(p.a,{color:"secondary","aria-label":"play mode",onClick:t},o.a.createElement(m.a,null)))},Y=function(e){var t=Object(l.useState)(!1),a=Object(r.a)(t,2),i=a[0],c=a[1],s=e.data,m=Object(n.a)(e,["data"]),f=!e.course,v=U();return o.a.createElement(d.a,{container:!0,direction:"column",justify:"space-around",alignItems:"center",className:v.sideStyle},o.a.createElement(Q.a,null),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{color:"secondary","aria-label":"play mode",onClick:function(e){"keydown"!==e.type&&c(!i)},disabled:f},o.a.createElement(C,null)),o.a.createElement(u.a,{anchor:"left",open:i,onClose:function(){return c(!1)}},o.a.createElement(K,Object.assign({},m,{lessonId:s.id})))))}}}]);
//# sourceMappingURL=0.bb6d3b00.chunk.js.map