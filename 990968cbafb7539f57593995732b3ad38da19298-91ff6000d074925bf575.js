(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"61uB":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),c=(r=i)&&r.__esModule?r:{default:r};var s={breakpointCols:void 0,className:void 0,columnClassName:void 0,children:void 0,columnAttrs:void 0,column:void 0},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.reCalculateColumnCount=n.reCalculateColumnCount.bind(n),n.reCalculateColumnCountDebounce=n.reCalculateColumnCountDebounce.bind(n);var r=void 0;return r=n.props.breakpointCols&&n.props.breakpointCols.default?n.props.breakpointCols.default:parseInt(n.props.breakpointCols)||2,n.state={columnCount:r},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.reCalculateColumnCount(),window&&window.addEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"componentDidUpdate",value:function(){this.reCalculateColumnCount()}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.reCalculateColumnCountDebounce)}},{key:"reCalculateColumnCountDebounce",value:function(){var e=this;window&&window.requestAnimationFrame?(window.cancelAnimationFrame&&window.cancelAnimationFrame(this._lastRecalculateAnimationFrame),this._lastRecalculateAnimationFrame=window.requestAnimationFrame((function(){e.reCalculateColumnCount()}))):this.reCalculateColumnCount()}},{key:"reCalculateColumnCount",value:function(){var e=window&&window.innerWidth||1/0,t=this.props.breakpointCols;"object"!==(void 0===t?"undefined":l(t))&&(t={default:parseInt(t)||2});var n=1/0,r=t.default||2;for(var o in t){var a=parseInt(o);a>0&&e<=a&&a<n&&(n=a,r=t[o])}r=Math.max(1,parseInt(r)||1),this.state.columnCount!==r&&this.setState({columnCount:r})}},{key:"itemsInColumns",value:function(){for(var e=this.state.columnCount,t=new Array(e),n=[].concat(this.props.children||[]),r=0;r<n.length;r++){var o=r%e;t[o]||(t[o]=[]),t[o].push(n[r])}return t}},{key:"renderColumns",value:function(){var e=this.props,t=e.column,n=e.columnAttrs,r=void 0===n?{}:n,l=e.columnClassName,a=this.itemsInColumns(),i=100/a.length+"%",s=l;"string"!=typeof s&&(this.logDeprecated('The property "columnClassName" requires a string'),void 0===s&&(s="my-masonry-grid_column"));var u=o({},t,r,{style:o({},r.style,{width:i}),className:s});return a.map((function(e,t){return c.default.createElement("div",o({},u,{key:t}),e)}))}},{key:"logDeprecated",value:function(e){console.error("[Masonry]",e)}},{key:"render",value:function(){var e=this.props,t=(e.children,e.breakpointCols,e.columnClassName,e.columnAttrs,e.column,e.className),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","breakpointCols","columnClassName","columnAttrs","column","className"]),r=t;return"string"!=typeof t&&(this.logDeprecated('The property "className" requires a string'),void 0===t&&(r="my-masonry-grid")),c.default.createElement("div",o({},n,{className:r}),this.renderColumns())}}]),t}(c.default.Component);u.defaultProps=s,t.default=u},n7YR:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var r=n("0jh0"),o=n.n(r),l=n("tGry"),a=n.n(l),i=n("q1tI"),c=n("R/WZ"),s=n("61uB"),u=n.n(s),d=n("WlC/"),p=n("hlFM"),m=n("ofer");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){return i.createElement(p.a,{style:f({padding:"15px",display:"flex",flexDirection:"column",height:"calc( 100% - 0px )",width:"calc (100% - 60px)",justifyContent:"space-between",background:"rgba(0, 0, 0, 0.35)"},e.style)},i.createElement(m.a,{noWrap:!0,style:{fontSize:"12px",color:"#FFF",fontFamily:"GSThree",textTransform:"uppercase"}},e.date," | ",e.postType),i.createElement("div",null,i.createElement(m.a,{style:{fontSize:"FULL"===e.type?"30px":"16px",color:"#FFF",lineHeight:"1.3em",fontFamily:"GSThree",paddingBottom:16}},e.title),i.createElement(m.a,{noWrap:!0,style:{fontSize:"16px",color:"#FFF",lineHeight:"1.3em",fontFamily:"Montserrat, sans-serif",fontWeight:500,paddingBottom:16}},e.description),i.createElement(p.a,{style:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},i.createElement(m.a,{style:{fontFamily:"GSThree",fontSize:12,color:"#FFF",paddingRight:8}},"LEIA MAIS"),i.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i.createElement("circle",{cx:"17.5",cy:"17.5",r:"16.5",stroke:"white",strokeWidth:"2"}),i.createElement("path",{d:"M15.0711 11.0002L21.7886 17.7177L14.7175 24.7888",stroke:"white",strokeWidth:"2"})))))},h=function(e){var t=e.force,n=void 0!==t&&t,r=e.current,o=r.date,l=r.description,a=r.image,c=r.slug,s=r.title,u=r.type,p=r.postType,m=a||"";return"FULL"===u||n?i.createElement("div",{className:"global-news-full",style:{width:"100%",height:0,paddingBottom:"100%",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(m,")")}},i.createElement(d.Link,{style:{textDecoration:"none",position:"absolute",top:0,right:0,bottom:0,left:0},to:c||""},i.createElement(g,{type:u||"",postType:p||"",date:o||"",title:s||"",description:l||""}))):null},v=Object(c.a)((function(e){return{border:{border:"1px solid",borderColor:e.palette.primary.contrastText},style:{width:"48%"},style2:{width:"48%"},lag:{display:"flex",justifyContent:"space-between",height:0,paddingBottom:"100%"}}})),b=function(e){var t,n,r,o,l,a,c,s=v(),u=""+((null===(t=e.current)||void 0===t?void 0:t.image)||""),y=e.current.date||"";return"HALF"===(null===(n=e.current)||void 0===n?void 0:n.type)?i.createElement("div",null,i.createElement(d.Link,{className:"global-news-half",style:{height:"100%",textDecoration:"none",minHeight:300},to:(null===(r=e.current)||void 0===r?void 0:r.slug)||""},i.createElement(p.a,{className:s.lag},i.createElement("div",{className:s.style},i.createElement("div",{style:{paddingTop:"35%"}}),i.createElement("div",{style:{height:"32vw",backgroundImage:"url(".concat(u,")"),backgroundSize:"cover",backgroundPosition:"center"}},i.createElement(g,{postType:(null===(o=e.current)||void 0===o?void 0:o.postType)||"",date:y,title:(null===(l=e.current)||void 0===l?void 0:l.title)||"",description:(null===(a=e.current)||void 0===a?void 0:a.description)||""}))),i.createElement("div",{className:s.style2},i.createElement("div",{className:s.border,style:{height:"32vw",display:"flex",alignItems:"center"}},i.createElement("div",{style:{padding:15,width:"calc(100% - 30px)"}},i.createElement("div",{style:{height:40}}),i.createElement(m.a,{style:{fontFamily:"GSThree",fontSize:28}},(null===(c=e.current)||void 0===c?void 0:c.quote)||""))),i.createElement("div",{style:{height:"20%"}}))))):null},w=Object(c.a)((function(){return{style:{width:"48%"},lag:{display:"flex",justifyContent:"space-between",height:"30vw"}}})),E=function(e){var t=e.current,n=t.description,r=t.date,o=t.image,l=t.slug,a=t.title,c=t.type,s=t.postType,u=w(),p=o||"";return"LEFT"===c?i.createElement("div",null,i.createElement(d.Link,{className:"global-news-left",style:{height:"100%",textDecoration:"none",minHeight:300},to:l||""},i.createElement("div",{className:u.lag},i.createElement("div",{style:{backgroundImage:"url(".concat(p,")"),backgroundSize:"cover",backgroundPosition:"center"},className:u.style},i.createElement(g,{postType:s||"",date:r||"",title:a||"",description:n||""})),i.createElement("div",{className:u.style})))):null},C=Object(c.a)((function(e){return{style:{border:"1px solid",borderColor:e.palette.primary.contrastText,width:"48%"},lag:{display:"flex",justifyContent:"space-between",height:"30vw"}}})),k=function(e){var t=e.current,n=C(),r=e.current.image||"";return"MIRROR"===t.type?i.createElement("div",null,i.createElement(d.Link,{className:"global-news-mirror",style:{height:"100%",textDecoration:"none",minHeight:300},to:t.slug||""},i.createElement("div",{className:n.lag},i.createElement("div",{style:{display:"flex",alignItems:"center"},className:n.style},i.createElement("div",{style:{padding:15,width:"calc(100% - 30px)"}},i.createElement("div",{style:{height:40}}),i.createElement(m.a,{style:{fontFamily:"GSThree",fontSize:28}},t.quote||""))),i.createElement("div",{style:{backgroundImage:"url(".concat(r,")"),backgroundSize:"cover",backgroundPosition:"center",width:"48%"}},i.createElement(g,{postType:t.postType||"",date:t.date||"",title:t.title||"",description:t.description||""}))))):null},O=Object(c.a)((function(e){return{style:{border:"1px solid",borderColor:e.palette.primary.contrastText,width:"48%"},lag:{display:"flex",justifyContent:"space-between",height:"30vw"}}})),x=function(e){var t=e.current,n=t.quote,r=t.type,o=O();return"QUOTE"===r?i.createElement("div",null,i.createElement("div",{className:o.lag},i.createElement("div",{style:{display:"flex",alignItems:"center"},className:o.style},i.createElement("div",{style:{padding:15,width:"calc(100% - 30px)"}},i.createElement("div",{style:{height:40}}),i.createElement(m.a,{style:{fontFamily:"GSThree",fontSize:28}},n||""))))):null},j=function(e){var t=e.current,n=t.description,r=t.date,o=t.image,l=t.slug,a=t.title,c=t.type,s=t.postType,u=o||"";return"RIGHT"===c?i.createElement("div",null,i.createElement(d.Link,{className:"global-news-right",style:{height:"100%",textDecoration:"none",minHeight:300},to:l||""},i.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},i.createElement("div",{style:{width:"48%"}}),i.createElement("div",{style:{width:"48%",backgroundImage:"url(".concat(u,")"),backgroundSize:"cover",backgroundPosition:"center",height:"30vw"}},i.createElement(g,{postType:s||"",date:r||"",title:a||"",description:n||""}))))):null},S=function(e,t){return"HALF"===e.type?i.createElement(b,{key:t,current:e}):"MIRROR"===e.type?i.createElement(k,{key:t,current:e}):"FULL"===e.type?i.createElement(h,{key:t,current:e}):"QUOTE"===e.type?i.createElement(x,{key:t,current:e}):"LEFT"===e.type?i.createElement(E,{key:t,current:e}):i.createElement(j,{key:t,current:e})},F=n("GGlz"),T=n("Z3vd");function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=Object(c.a)((function(e){return{button:{borderRadius:0,boxShadow:"none",height:44,padding:"0px 50px",fontFamily:"GSThree",fontSize:18,color:"#000",backgroundColor:e.palette.secondary.main,"&:hover":{boxShadow:"0px 0px 0px 1px ".concat(e.palette.primary.contrastText," inset"),backgroundColor:e.palette.secondary.main},"&:active":{backgroundColor:e.palette.primary.contrastText,color:e.palette.secondary.main},"@media (max-width:600px)":{width:"100%"}}}})),I=Object(F.a)()((function(e){var t=e.news,n=e.width,r=D(),o=Object(i.useState)(6),l=a()(o,2),c=l[0],s=l[1],d=Object(F.b)("xs",n||"xs"),m=(t||[]).filter((function(e,t){return t+1<=c})).map((function(e){var t,n,r;return P(P({},null==e||null===(t=e.node)||void 0===t?void 0:t.frontmatter),{},{slug:null==e||null===(n=e.node)||void 0===n||null===(r=n.fields)||void 0===r?void 0:r.slug})}));return console.log(m),console.log("isXS"),console.log(d),i.createElement(i.Fragment,null,i.createElement(u.a,{breakpointCols:{default:3,700:1,1500:2},className:"global-news-grid",columnClassName:"global-news-grid-column",style:{paddingTop:30}},d?m.map((function(e,t){return i.createElement(h,{force:!0,key:t,current:e})})):m.map(S)),c!==((null==t?void 0:t.length)||0)&&i.createElement(p.a,{style:{padding:"32px 0px 56px",display:"flex",justifyContent:"center"}},i.createElement(T.a,{className:r.button,onClick:function(){var e=c+6<((null==t?void 0:t.length)||0)?c+6:(null==t?void 0:t.length)||0;console.log(e),s(e)}},"Ver Mais Notícias")))}))}}]);
//# sourceMappingURL=990968cbafb7539f57593995732b3ad38da19298-91ff6000d074925bf575.js.map