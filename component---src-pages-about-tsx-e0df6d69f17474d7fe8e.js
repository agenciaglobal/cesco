(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2l/u":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n("tRbT"),o=n("0jh0"),r=n.n(o),s=n("e45s"),c=n.n(s),d=n("ygUq"),l=n.n(d),m=c()((function(e){return{grid:r()({display:"flex",justifyContent:"flex-start",padding:0},e.breakpoints.up("md"),{justifyContent:"flex-end"}),image:r()({maxWidth:"100%",objectFit:"cover",padding:0},e.breakpoints.down("xs"),{width:"100%",height:400,objectFit:"fill"})}})),u=function(){var e=m();return a.createElement(i.a,{item:!0,xs:12,sm:5,className:e.grid},a.createElement("img",{className:e.image,src:l.a,alt:"about"}))},p=n("tGry"),g=n.n(p),f=n("tr08"),x=n("ofer"),h=n("hlFM"),b=n("k1TG"),v=n("YjCJ"),E=n("+nib"),y=n("sXA6"),w=n("SCGU");var j=n("8j0Q"),S=n("aXB2"),C=(n("TOwV"),n("iuhU")),O=n("kfZ5"),N=n("H2TA"),T=n("wpWl"),A=n("4Hym"),k=n("bfFb"),R=a.forwardRef((function(e,t){var n=e.children,i=e.classes,o=e.className,r=e.collapsedHeight,s=void 0===r?"0px":r,c=e.component,d=void 0===c?"div":c,l=e.disableStrictModeCompat,m=void 0!==l&&l,u=e.in,p=e.onEnter,g=e.onEntered,x=e.onEntering,h=e.onExit,v=e.onExited,E=e.onExiting,y=e.style,w=e.timeout,N=void 0===w?T.b.standard:w,R=e.TransitionComponent,H=void 0===R?O.a:R,I=Object(S.a)(e,["children","classes","className","collapsedHeight","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),D=Object(f.a)(),M=a.useRef(),B=a.useRef(null),P=a.useRef(),z="number"==typeof s?"".concat(s,"px"):s;a.useEffect((function(){return function(){clearTimeout(M.current)}}),[]);var G=D.unstable_strictMode&&!m,F=a.useRef(null),W=Object(k.a)(t,G?F:void 0),q=function(e){return function(t,n){if(e){var a=G?[F.current,t]:[t,n],i=Object(j.a)(a,2),o=i[0],r=i[1];void 0===r?e(o):e(o,r)}}},L=q((function(e,t){e.style.height=z,p&&p(e,t)})),$=q((function(e,t){var n=B.current?B.current.clientHeight:0,a=Object(A.a)({style:y,timeout:N},{mode:"enter"}).duration;if("auto"===N){var i=D.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),P.current=i}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),x&&x(e,t)})),V=q((function(e,t){e.style.height="auto",g&&g(e,t)})),K=q((function(e){var t=B.current?B.current.clientHeight:0;e.style.height="".concat(t,"px"),h&&h(e)})),U=q(v),X=q((function(e){var t=B.current?B.current.clientHeight:0,n=Object(A.a)({style:y,timeout:N},{mode:"exit"}).duration;if("auto"===N){var a=D.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),P.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=z,E&&E(e)}));return a.createElement(H,Object(b.a)({in:u,onEnter:L,onEntered:V,onEntering:$,onExit:K,onExited:U,onExiting:X,addEndListener:function(e,t){var n=G?e:t;"auto"===N&&(M.current=setTimeout(n,P.current||0))},nodeRef:G?F:void 0,timeout:"auto"===N?null:N},I),(function(e,t){return a.createElement(d,Object(b.a)({className:Object(C.a)(i.container,o,{entered:i.entered,exited:!u&&"0px"===z&&i.hidden}[e]),style:Object(b.a)({minHeight:z},y),ref:W},t),a.createElement("div",{className:i.wrapper,ref:B},a.createElement("div",{className:i.wrapperInner},n)))}))}));R.muiSupportAuto=!0;var H=Object(N.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(R),I=n("kKAo");var D=a.createContext({}),M=n("yCxk"),B=a.forwardRef((function(e,t){var n,i=e.children,o=e.classes,r=e.className,s=e.defaultExpanded,c=void 0!==s&&s,d=e.disabled,l=void 0!==d&&d,m=e.expanded,u=e.onChange,p=e.square,g=void 0!==p&&p,f=e.TransitionComponent,x=void 0===f?H:f,h=e.TransitionProps,O=Object(S.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),N=Object(M.a)({controlled:m,default:c,name:"Accordion",state:"expanded"}),T=Object(j.a)(N,2),A=T[0],k=T[1],R=a.useCallback((function(e){k(!A),u&&u(e,!A)}),[A,u,k]),B=a.Children.toArray(i),P=(n=B,Object(v.a)(n)||Object(E.a)(n)||Object(y.a)(n)||Object(w.a)()),z=P[0],G=P.slice(1),F=a.useMemo((function(){return{expanded:A,disabled:l,toggle:R}}),[A,l,R]);return a.createElement(I.a,Object(b.a)({className:Object(C.a)(o.root,r,A&&o.expanded,l&&o.disabled,!g&&o.rounded),ref:t,square:g},O),a.createElement(D.Provider,{value:F},z),a.createElement(x,Object(b.a)({in:A,timeout:"auto"},h),a.createElement("div",{"aria-labelledby":z.props.id,id:z.props["aria-controls"],role:"region"},G)))})),P=Object(N.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(B),z=a.forwardRef((function(e,t){var n=e.classes,i=e.className,o=Object(S.a)(e,["classes","className"]);return a.createElement("div",Object(b.a)({className:Object(C.a)(n.root,i),ref:t},o))})),G=Object(N.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(z),F=n("VD++"),W=n("PsDL"),q=a.forwardRef((function(e,t){var n=e.children,i=e.classes,o=e.className,r=e.expandIcon,s=e.IconButtonProps,c=e.onBlur,d=e.onClick,l=e.onFocusVisible,m=Object(S.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),u=a.useState(!1),p=u[0],g=u[1],f=a.useContext(D),x=f.disabled,h=void 0!==x&&x,v=f.expanded,E=f.toggle;return a.createElement(F.a,Object(b.a)({focusRipple:!1,disableRipple:!0,disabled:h,component:"div","aria-expanded":v,className:Object(C.a)(i.root,o,h&&i.disabled,v&&i.expanded,p&&i.focused),onFocusVisible:function(e){g(!0),l&&l(e)},onBlur:function(e){g(!1),c&&c(e)},onClick:function(e){E&&E(e),d&&d(e)},ref:t},m),a.createElement("div",{className:Object(C.a)(i.content,v&&i.expanded)},n),r&&a.createElement(W.a,Object(b.a)({className:Object(C.a)(i.expandIcon,v&&i.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},s),r))})),L=Object(N.a)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(q),$=n("R/WZ"),V=[{title:"ESTRATÉGIA",text:["Estratégia de marca e posicionamento","Dna de marca","Business design","Estratégia de experiência do consumidor","Mapeamento da jornada do consumidor","Estratégia de conteúdo","Pesquisa com usuário","Pesquisa de mercado"]},{title:"DATA INTELLIGENCE & ANALYTICS",text:["Estratégia e mapeamento Dados","LGPD compliance","Dashboards Real-time","Social Listening","Brand Health","Insights de Consumidor - 1st and 3rd party data","Segmentação de Audiência - 1st party data","Desenvolvimento de KPI","Report de marketing digital"]},{title:"COMUNICAÇÃO",text:["Planejamento de comunicação","Desenvolvimento de campanha integrada - on e off","Desenvolvimento de campanha integrada - narrativa e interativa","Desenvolvimento e produção de conteúdo digital display","Print & outdoor","Vídeo & tv","Crm - canais diretos da marca"]},{title:"DESIGN",text:["Identidade de marca","Naming","Embalagem","Estratégia e design de ux/ui","Design Interface de experiência","Design de hotsite/landing page","Prototipação","Design web responsivo","Native apps"]},{title:"MÍDIAS E PLATAFORMAS",text:["Planejamento de mídia","Compra de mídia","Planejamento de canais","Connections Planning","Mensuração e otimização"]},{title:"PERFORMANCE",text:["Search Engine Marketing (SEM)","Search Engine Optimization (SEO)","Compra Programática de Display e Vídeo (RTB - Real Time Buying)","Social media pago (Facebook, Instagram, Messenger, Twitter, and Linkedin)","Otimização de resposta direta (Lead, Website Purchase, App Installs, App Purchase)","Taggemento e otimização de landing page","E-mail marketing e otimização","Campanhas de remarketing em Mobile, APP, and Desktop campaigns"]}],K=Object($.a)((function(e){return{heading:{fontSize:"16px","@media (min-width:600px)":{fontSize:"22px"},fontWeight:e.typography.fontWeightRegular},style:{fontFamily:"GSThree",textAlign:"center",fontSize:"24px",lineHeight:"30px",paddingTop:100,"@media (min-width:600px)":{fontSize:"50px",textAlign:"left",lineHeight:"50px"}},div:{width:"100%",paddingBottom:40,paddingTop:30},details:{"@media (min-width:600px)":{padding:"0px 56px",display:"flex",justifyContent:"flex-end"}},ul:{margin:0,padding:0,"@media (min-width:600px)":{transform:"translateY(-54px)",textAlign:"right"}},li:{fontFamily:"GSTwo",fontWeight:600,lineHeight:"2.2em",fontSize:"14px",listStyle:"none","@media (min-width:600px)":{fontSize:"16px"}}}}));function U(e){return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{x:"0.5",y:"0.5",width:"15",height:"15",stroke:e.theme.palette.primary.contrastText}),a.createElement("rect",{x:"7",y:"3",width:"2",height:"10",fill:e.theme.palette.primary.contrastText}),a.createElement("rect",{x:"3",y:"7",width:"10",height:"2",fill:e.theme.palette.primary.contrastText}))}function X(e){return a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("rect",{x:"0.5",y:"0.5",width:"15",height:"15",fill:"#FFCC00",stroke:e.theme.palette.primary.contrastText}),a.createElement("rect",{x:"3",y:"7",width:"10",height:"2",fill:e.theme.palette.primary.contrastText}))}function J(e){var t=Object(f.a)(),n=K(),i=e.current===e.index;return a.createElement(P,{expanded:i,onClick:function(){return e.setCurrent(i?-1:e.index)}},a.createElement(L,{expandIcon:i?a.createElement(X,{theme:t}):a.createElement(U,{theme:t})},a.createElement(x.a,{className:n.heading},e.accordion.title)),a.createElement(G,{className:n.details},a.createElement("ul",{className:n.ul},e.accordion.text.map((function(e,t){return a.createElement("li",{key:t,className:n.li},e)})))))}var Y=function(){var e=K(),t=a.useState(-1),n=g()(t,2),i=n[0],o=n[1];return a.createElement(a.Fragment,null,a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.style},"NOSSAS CAPACIDADES")),a.createElement("div",{className:e.div},V.map((function(e,t){return a.createElement(J,{index:t,current:i,setCurrent:o,key:t,accordion:e})}))))},Z=c()((function(e){return{div:{textAlign:"justify",fontFamily:"GSTwo",fontSize:"14px",lineHeight:"28px",paddingBottom:28,"@media (min-width:600px)":{fontSize:"16px",lineHeight:"36px",paddingBottom:36}},div2:{fontFamily:"GSThree",fontSize:"20px",lineHeight:"25px","@media (min-width:600px)":{fontSize:"24px"}},grid:{padding:0},box:r()({padding:0},e.breakpoints.down("xs"),{padding:0,paddingTop:0,paddingBottom:24})}})),_=function(){var e=Z();return a.createElement(i.a,{className:e.grid,item:!0,xs:12,sm:7},a.createElement(h.a,{className:e.box},a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.div},"A Global é o reflexo de um mundo em constante transformação.")),a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.div},"O comportamento mutante e volátil da sociedade nos provoca a reinventar nossa entrega a cada novo briefing.")),a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.div},"Nós acreditamos nas pessoas e tiramos partido da complexidade de suas mentes. Combinações únicas de habilidades, conhecimentos e experiências. Chamamos de Crowdtalent a soma desses talentos em torno de uma ideia.")),a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.div},"Integramos estratégia, comunicação, dados e design em projetos que ajudam nossos clientes a serem protagonistas da mudança. Acreditamos no resultado da equação entre dados e criatividade para propor novos caminhos, onde a propaganda e o entretenimento estão mais próximos do que nunca e onde tudo deve ser mensurado.")),a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.div},"Acreditamos, sobretudo, que, em meio a tanta mudança, ser criativo é a melhor estratégia.")),a.createElement(h.a,{lineHeight:1.5},a.createElement(x.a,{className:e.div2},"A mudança requer criatividade."))))},Q=Object($.a)((function(){return{container:{marginTop:24,paddingTop:60},style:{fontFamily:"GSThree",fontSize:"24px",lineHeight:"50px",textAlign:"center","@media (min-width:600px)":{fontSize:"50px",lineHeight:"50px",textAlign:"left"}},another:{fontFamily:"GSTwo",fontSize:"14px",lineHeight:"20px",textAlign:"center","@media (min-width:600px)":{fontSize:"16px",lineHeight:"50px",textAlign:"left"}},box:{position:"relative",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"30px"}}})),ee=n("gVXc"),te=n.n(ee),ne=n("4HKm"),ae=n.n(ne),ie=function(){var e=Q(),t=Object(f.a)();return a.createElement(h.a,{className:e.container},a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.style},"COMO NÓS TRABALHAMOS")),a.createElement(h.a,{lineHeight:3},a.createElement(x.a,{className:e.another},"Módulos integrados de trabalho para atender marcas contemporâneas")),a.createElement(h.a,{className:e.box},a.createElement("video",{src:"light"==t.themeName?te.a:ae.a,muted:!0,playsInline:!0,autoPlay:!0,loop:!0,style:{maxWidth:900,width:"100%",height:"auto"}})))},oe=c()((function(){return{div:{flexGrow:1,paddingTop:30},grid:{padding:0,alignItems:"space-between"}}})),re=function(){var e=oe();return a.createElement("div",{className:e.div},a.createElement(i.a,{className:e.grid,spacing:4,alignItems:"center",container:!0},a.createElement(_,null),a.createElement(u,null)),a.createElement(ie,null),a.createElement(Y,null))};t.default=function(){return a.createElement(re,null)}},"4HKm":function(e,t,n){e.exports=n.p+"static/mov-dark-7e01b84f37d607f691a9f43937f15b03.mp4"},e45s:function(e,t,n){"use strict";var a=n("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("j8BX")),o=n("04ZO"),r=a(n("HWkK"));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.makeStyles)(e,(0,i.default)({defaultTheme:r.default},t))};t.default=s},gVXc:function(e,t,n){e.exports=n.p+"static/mov-white-b6a7a7aa959cd029a03810d22689d55a.mp4"},tRbT:function(e,t,n){"use strict";var a=n("aXB2"),i=n("k1TG"),o=n("q1tI"),r=n("iuhU"),s=n("H2TA"),c=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=o.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,c=e.alignItems,d=void 0===c?"stretch":c,l=e.classes,m=e.className,u=e.component,p=void 0===u?"div":u,g=e.container,f=void 0!==g&&g,x=e.direction,h=void 0===x?"row":x,b=e.item,v=void 0!==b&&b,E=e.justify,y=void 0===E?"flex-start":E,w=e.lg,j=void 0!==w&&w,S=e.md,C=void 0!==S&&S,O=e.sm,N=void 0!==O&&O,T=e.spacing,A=void 0===T?0:T,k=e.wrap,R=void 0===k?"wrap":k,H=e.xl,I=void 0!==H&&H,D=e.xs,M=void 0!==D&&D,B=e.zeroMinWidth,P=void 0!==B&&B,z=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(r.a)(l.root,m,f&&[l.container,0!==A&&l["spacing-xs-".concat(String(A))]],v&&l.item,P&&l.zeroMinWidth,"row"!==h&&l["direction-xs-".concat(String(h))],"wrap"!==R&&l["wrap-xs-".concat(String(R))],"stretch"!==d&&l["align-items-xs-".concat(String(d))],"stretch"!==s&&l["align-content-xs-".concat(String(s))],"flex-start"!==y&&l["justify-xs-".concat(String(y))],!1!==M&&l["grid-xs-".concat(String(M))],!1!==N&&l["grid-sm-".concat(String(N))],!1!==C&&l["grid-md-".concat(String(C))],!1!==j&&l["grid-lg-".concat(String(j))],!1!==I&&l["grid-xl-".concat(String(I))]);return o.createElement(p,Object(i.a)({className:G,ref:t},z))})),u=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return c.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(l(i,2)),width:"calc(100% + ".concat(l(i),")"),"& > $item":{padding:l(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m);t.a=u},ygUq:function(e,t,n){e.exports=n.p+"static/about-1ee21cb2f2b0f924a0c882bf9030b7fb.png"}}]);
//# sourceMappingURL=component---src-pages-about-tsx-e0df6d69f17474d7fe8e.js.map