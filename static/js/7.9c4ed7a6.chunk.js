(this["webpackJsonpYH-Clothing"]=this["webpackJsonpYH-Clothing"]||[]).push([[7],{194:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),o=a(32),r=a(76),i=a(0),c=a.n(i),l=a(75),s=a.n(l),d=a(173),p={parallax:{height:"100vh",maxHeight:"1000px",overflow:"hidden",position:"relative",backgroundPosition:"center center",backgroundSize:"cover",margin:"0",padding:"0",border:"0",display:"flex",alignItems:"center",zIndex:"-1"},filter:{"&:before":{background:"rgba(0, 0, 0, 0.66)"},"&:after,&:before":{position:"absolute",zIndex:"1",width:"100%",height:"100%",display:"block",left:"0",top:"0",content:"''"}},small:{height:"380px"}},m=Object(d.a)(p),u={home:"https://vistapointe.net/images/shop-wallpaper-20.jpg",category:"https://r.lvmh-static.com/uploads/2016/01/cover3-1584x872.jpg",shop:"https://c0.wallpaperflare.com/preview/506/226/547/store-shop-interor-retail.jpg",signIn:"https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BmI6UBJLWj5dnkc7q/videoblocks-happy-smiling-sporty-girls-in-training-clothes-standing-on-outdoor-stadium-and-giving-five-with-bottles-after-sport-workout_sfgmvsuqb_thumbnail-1080_01.png",checkOut:"https://1.bp.blogspot.com/-A_PuMdWHoCk/UXEb-HsS89I/AAAAAAAAHhY/IRN7PscZ7Zo/s1600/IMG_3905.JPG"};function b(e){var t,a;a=window.innerWidth>=768?window.pageYOffset/3:0;var i=c.a.useState("translate3d(0,"+a+"px,0)"),l=Object(r.a)(i,2),d=l[0],p=l[1];c.a.useEffect((function(){return window.innerWidth>=768&&window.addEventListener("scroll",b),function(){window.innerWidth>=768&&window.removeEventListener("scroll",b)}}));var b=function(){var e=window.pageYOffset/3;p("translate3d(0,"+e+"px,0)")},h=e.filter,g=e.className,f=e.children,x=e.style,y=e.image,v=e.small,w=m(),j=s()((t={},Object(o.a)(t,w.parallax,!0),Object(o.a)(t,w.filter,h),Object(o.a)(t,w.small,v),Object(o.a)(t,g,void 0!==g),t));return c.a.createElement("div",{className:j,style:Object(n.a)(Object(n.a)({},x),{},{backgroundImage:"url("+u[y]+")",transform:d})},f)}},197:function(e,t,a){e.exports=a.p+"static/media/wave_1.8b134bd9.gif"},210:function(e,t,a){e.exports=a.p+"static/media/wave_2.bf19e90f.png"},211:function(e,t,a){var n={"./team1.jpg":212,"./team2.jpg":213,"./team3.jpg":214};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=211},212:function(e,t,a){e.exports=a.p+"static/media/team1.2c0663c1.jpg"},213:function(e,t,a){e.exports=a.p+"static/media/team2.1e679932.jpg"},214:function(e,t,a){e.exports=a.p+"static/media/team3.c50c7746.jpg"},248:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(194),i=a(77),c=a(8),l=a(9);function s(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  background-color: white;\n  flex-wrap: wrap;\n  z-index: 123;\n  // border: black solid 5px;\n  border-radius: 25px;\n  padding: 33px;\n  margin-top: -33vh;\n  margin-left: 33px;\n  margin-right: 33px;\n  margin-bottom: 66px;\n"]);return s=function(){return e},e}var d=l.b.div(s()),p=a(22),m=a(19),u=Object(m.a)([function(e){return e.directory}],(function(e){return e.sections})),b=a(186);function h(){var e=Object(c.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n  font-family: lobster;\n"]);return h=function(){return e},e}function g(){var e=Object(c.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: black;\n  font-style: italic;\n"]);return g=function(){return e},e}function f(){var e=Object(c.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: #fff;\n  opacity: 0.6;\n  text-transform: uppercase;\n  position: absolute;\n"]);return f=function(){return e},e}function x(){var e=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background-position: center;\n  background-size: cover;\n  background-image: ",";\n"]);return x=function(){return e},e}function y(){var e=Object(c.a)(["\n  min-width: 30%;\n  height: 240px;\n  flex: 1 1 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  margin: 0 7.5px 15px;\n  background-position: center;\n  background-size: cover;\n  overflow: hidden;\n  height: ",";\n\n  &:first-child {\n    margin-right: 7.5px;\n  }\n\n  &:last-child {\n    margin-left: 7.5px;\n  }\n\n  &:hover {\n    cursor: pointer;\n\n    & .background-image {\n      transform: scale(1.5);\n      transition: transform 3s linear;\n    }\n\n    & .content {\n      opacity: 0.9;\n    }\n  }\n"]);return y=function(){return e},e}var v=l.b.div(y(),(function(e){return e.size?"380px":"240px"})),w=l.b.div(x(),(function(e){var t=e.imageUrl;return"url(".concat(t,")")})),j=l.b.div(f()),k=l.b.h1(g()),O=l.b.span(h()),E=a(13),z=Object(E.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,r=e.history,i=(e.match,e.linkUrl);return o.a.createElement(b.a,{item:!0,md:n?6:4,xs:12,"data-aos":"fade-down"},o.a.createElement(v,{size:n,onClick:function(){return r.replace("/YH-Clothing/".concat(i))}},o.a.createElement(w,{imageUrl:a,className:"background-image"}),o.a.createElement(j,{className:"content"},o.a.createElement(k,null,t.toUpperCase()),o.a.createElement(O,null,"SHOP NOW"))))})),S=Object(m.b)({sections:u}),C=Object(p.b)(S)((function(e){var t=e.sections;return o.a.createElement(d,null,o.a.createElement(b.a,{container:!0,justify:"space-around"},t.map((function(e){var t=e.id,a=Object(i.a)(e,["id"]);return o.a.createElement(z,Object.assign({key:t},a))}))))})),T=a(31),I=Object(T.a)(o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M3 15h.78c.55-.61 1.34-1 2.22-1s1.67.39 2.22 1H15V6H3v9z",opacity:".3"}),o.a.createElement("path",{d:"M17 8V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4h-3zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm9-3H8.22c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-6V9.5h2.5l1.96 2.5H17z"})),"LocalShippingTwoTone"),R=Object(T.a)(o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M4 18l2-2h14V4H4z",opacity:".3"}),o.a.createElement("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"})),"ChatBubbleTwoTone"),H=Object(T.a)(o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z",opacity:".3"}),o.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"})),"MonetizationOnTwoTone"),N=a(187),W=a(197),V=a.n(W);function A(){var e=Object(c.a)(["\n  color: GrayText;\n  font-style: italic;\n  font-family: Grenze Gotisch;\n  font-size: 22px;\n"]);return A=function(){return e},e}function L(){var e=Object(c.a)(['\n  font-family: "lobster";\n  background-image: url("','");\n  background-size: 50%;\n  background-repeat: no-repeat;\n  margin-bottom: 44px;\n  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;\n']);return L=function(){return e},e}var M=Object(l.b)(N.a)(L(),V.a),B=Object(l.b)(N.a)(A()),F=a(32),U=a(75),Y=a.n(U),$=a(173),P=a(20),G={infoArea:{maxWidth:"360px",margin:"0 auto",padding:"0px",textAlign:"center"},iconWrapper:{float:"left",marginTop:"24px",marginRight:"10px"},primary:{color:P.h},warning:{color:P.l},danger:{color:P.c},success:{color:P.j},info:{color:P.g},rose:{color:P.i},gray:{color:P.f},icon:{width:"36px",height:"36px"},descriptionWrapper:{color:P.f,overflow:"hidden"},InfoTitle:{fontFamily:"lobster",fontSize:"27px",color:"black",margin:"10px"},description:{color:P.f,overflow:"hidden",fontSize:"16px",fontStyle:"italic"},iconWrapperVertical:{float:"none"},iconVertical:{width:"61px",height:"61px"}},_=Object($.a)(G);function D(e){var t,a,n=_(),r=e.title,i=e.description,c=e.iconColor,l=e.vertical,s=e.shadow,d=Y()((t={},Object(F.a)(t,n.iconWrapper,!0),Object(F.a)(t,n[c],!0),Object(F.a)(t,n.iconWrapperVertical,l),t)),p=Y()((a={},Object(F.a)(a,n.icon,!0),Object(F.a)(a,n.iconVertical,l),a));return o.a.createElement("div",{className:n.infoArea},o.a.createElement("div",{className:d},o.a.createElement(e.icon,{className:p})),o.a.createElement("div",{className:n.descriptionWrapper},o.a.createElement("h4",{className:n.InfoTitle,style:{textShadow:"2px 1px 10px ".concat(s)}},r),o.a.createElement("p",{className:n.description},i)))}D.defaultProps={iconColor:"gray"};var J=function(){return o.a.createElement(b.a,{container:!0,justify:"space-around",style:{background:"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0.33) 50%, rgba(255,255,255,1) 100%)"}},o.a.createElement(b.a,{Item:!0,xs:10,md:6},o.a.createElement(M,{variant:"h2",align:"center","data-aos":"fade-down"},"Let's talk Clothes"),o.a.createElement(B,{"data-aos":"fade-down",align:"center"},"It's in this paragraph were we can write more details about Our Yousfitness Brand's products. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. We're alse thinking about adding a CTA ( call to action ) button !")),o.a.createElement(b.a,{container:!0,xs:11,justify:"space-around",style:{marginBottom:"55px"}},o.a.createElement(b.a,{item:!0,xs:12,md:4,"data-aos":"fade-right"},o.a.createElement(D,{title:"The Fastest Shipping",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:I,iconColor:"danger",shadow:"red",vertical:!0})),o.a.createElement(b.a,{item:!0,xs:12,md:4,"data-aos":"fade-up"},o.a.createElement(D,{title:"The Best Customer Service",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:R,iconColor:"info",shadow:"cyan",vertical:!0})),o.a.createElement(b.a,{item:!0,xs:12,md:4,"data-aos":"fade-left"},o.a.createElement(D,{title:"The Lowest Prices",description:"Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",icon:H,iconColor:"success",shadow:"green",vertical:!0}))))},q=[{id:1,avatar:"team2.jpg",name:"Mizo Ysf",profession:"Model",title:"Head of the Marketing Team",desc:"Regardless of what an employee\u2019s role is, at some point they will have to work with other people at the company \u2013 whether that\u2019s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It\u2019s about camaraderie, cooperation and collaboration between different members of the organization."},{id:2,avatar:"team1.jpg",name:"Yousfi Hamza",profession:"Coach",title:"CEO, Co-Founder",desc:"Regardless of what an employee\u2019s role is, at some point they will have to work with other people at the company \u2013 whether that\u2019s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It\u2019s about camaraderie, cooperation and collaboration between different members of the organization."},{id:3,avatar:"team3.jpg",name:"Hamzaoui Youssef",profession:"Athlete",title:"Head of the Sales Team",desc:"Regardless of what an employee\u2019s role is, at some point they will have to work with other people at the company \u2013 whether that\u2019s a colleague, customer or other stakeholder. Team spirit is an attitude that enables people to work well together. It\u2019s about camaraderie, cooperation and collaboration between different members of the organization."}],Z=a(210),K=a.n(Z);function X(){var e=Object(c.a)(["\n  color: gray;\n  font-style: italic;\n"]);return X=function(){return e},e}function Q(){var e=Object(c.a)(["\n  font-family: lobster;\n  margin-bottom: 44px;\n  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;\n"]);return Q=function(){return e},e}function ee(){var e=Object(c.a)(['\n  background-image: url("','");\n  background-size: 100% 100px;\n  background-repeat: no-repeat;\n  padding-top: 56px;\n']);return ee=function(){return e},e}var te=Object(l.b)(b.a)(ee(),K.a),ae=Object(l.b)(N.a)(Q()),ne=Object(l.b)(N.a)(X()),oe={imgFluid:{maxWidth:"100%",height:"auto"},imgRounded:{borderRadius:"6px !important"},imgRoundedCircle:{borderRadius:"50% !important"},imgRaised:{boxShadow:"0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"},imgGallery:{width:"100%",marginBottom:"2.142rem"},imgCardTop:{width:"100%",borderTopLeftRadius:"calc(.25rem - 1px)",borderTopRightRadius:"calc(.25rem - 1px)"},imgCardBottom:{width:"100%",borderBottomLeftRadius:"calc(.25rem - 1px)",borderBottomRightRadius:"calc(.25rem - 1px)"},imgCard:{width:"100%",borderRadius:"calc(.25rem - 1px)"},imgCardOverlay:{position:"absolute",top:"0",right:"0",bottom:"0",left:"0",padding:"1.25rem"}};function re(){var e=Object(c.a)(["\n  font-style: italic;\n  font-family: Grenze Gotisch;\n  padding-bottom: 22px;\n"]);return re=function(){return e},e}function ie(){var e=Object(c.a)(["\n  font-family: Arial;\n  font-size: 18px;\n  color: gray;\n"]);return ie=function(){return e},e}function ce(){var e=Object(c.a)(["\n  font-family: lobster;\n  font-size: 26px;\n  font-weight: bold;\n  color: darkblue;\n"]);return ce=function(){return e},e}function le(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 22px;\n  margin-top: 44px;\n  border-radius: 55px;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0.33) 33%,\n    rgba(0, 212, 255, 0.66) 66%,\n    rgba(0, 9, 121, 1) 100%\n  );\n"]);return le=function(){return e},e}var se=Object(l.b)(b.a)(le()),de=Object(l.b)(N.a)(ce()),pe=Object(l.b)(N.a)(ie()),me=Object(l.b)(N.a)(re()),ue=a(78),be=(a(112),Object($.a)(oe)),he=function(e){var t=e.membre,n=be(),r=Y()(n.imgRaised,n.imgRoundedCircle,n.imgFluid);return o.a.createElement(se,{key:t.id,item:!0,xs:10,md:3,"data-aos":"zoom-in"},o.a.createElement(b.a,{item:!0,xs:8,style:{marginTop:"-33px"}},o.a.createElement(ue.LazyLoadImage,{effect:"blur",alt:"...",src:a(211)("./".concat(t.avatar)),className:r})),o.a.createElement(b.a,null,o.a.createElement(b.a,{item:!0,xs:10},o.a.createElement(de,{variant:"h4",align:"center"},t.name,o.a.createElement("br",null),o.a.createElement("span",{style:{color:"Graytext"}},"- ",t.profession.toUpperCase()," -"))),o.a.createElement(b.a,{item:!0,xs:10},o.a.createElement(pe,{variant:"h6",align:"center"},t.title)),o.a.createElement(b.a,{item:!0,xs:12},o.a.createElement(me,{align:"center"},t.desc))))},ge=function(){return o.a.createElement(te,{container:!0,justify:"space-around"},o.a.createElement(b.a,{Item:!0,xs:10,md:8},o.a.createElement(ae,{variant:"h2",align:"center","data-aos":"fade-up"},"The T.E.A.M"),o.a.createElement(ne,{align:"center","data-aos":"fade-up"},"Regardless of what an employee\u2019s role is, at some point they will have to work with other people at the company \u2013 whether that\u2019s a colleague, customer or other stakeholder.",o.a.createElement("br",null),"Team spirit is an attitude that enables people to work well together. It\u2019s about camaraderie, cooperation and collaboration between different members of the organization.")),o.a.createElement(b.a,{container:!0,xs:12,justify:"space-around",alignContent:"space-around",style:{margin:"44px "}},q.map((function(e){return o.a.createElement(he,{key:e.id,membre:e})}))))},fe=a(2),xe=a(1),ye=(a(3),a(5)),ve=a(6),we=a(28),je=a(147),ke=a(14),Oe=n.forwardRef((function(e,t){var a=e.children,o=e.classes,r=e.className,i=e.color,c=void 0===i?"default":i,l=e.component,s=void 0===l?"button":l,d=e.disabled,p=void 0!==d&&d,m=e.disableElevation,u=void 0!==m&&m,b=e.disableFocusRipple,h=void 0!==b&&b,g=e.endIcon,f=e.focusVisibleClassName,x=e.fullWidth,y=void 0!==x&&x,v=e.size,w=void 0===v?"medium":v,j=e.startIcon,k=e.type,O=void 0===k?"button":k,E=e.variant,z=void 0===E?"text":E,S=Object(fe.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),C=j&&n.createElement("span",{className:Object(ye.a)(o.startIcon,o["iconSize".concat(Object(ke.a)(w))])},j),T=g&&n.createElement("span",{className:Object(ye.a)(o.endIcon,o["iconSize".concat(Object(ke.a)(w))])},g);return n.createElement(je.a,Object(xe.a)({className:Object(ye.a)(o.root,o[z],r,"inherit"===c?o.colorInherit:"default"!==c&&o["".concat(z).concat(Object(ke.a)(c))],"medium"!==w&&[o["".concat(z,"Size").concat(Object(ke.a)(w))],o["size".concat(Object(ke.a)(w))]],u&&o.disableElevation,p&&o.disabled,y&&o.fullWidth),component:s,disabled:p,focusRipple:!h,focusVisibleClassName:Object(ye.a)(o.focusVisible,f),ref:t,type:O},S),n.createElement("span",{className:o.label},C,a,T))})),Ee=Object(ve.a)((function(e){return{root:Object(xe.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(we.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(we.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(we.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(we.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(we.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(we.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(we.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(Oe),ze=a(16),Se=function(e){var t=e.content,a=e.startIcon,n=e.endIcon,r=e.color,i=e.to;return o.a.createElement(b.a,{container:!0,justify:"center",style:{margin:"22px"}},o.a.createElement(ze.b,{to:i},o.a.createElement(Ee,{variant:"contained",color:r,startIcon:a,endIcon:n},t)))},Ce=a(86),Te=a.n(Ce);function Ie(){var e=Object(c.a)(["\n  color: white;\n  font-style: italic;\n"]);return Ie=function(){return e},e}function Re(){var e=Object(c.a)(["\n  font-family: lobster;\n  margin-bottom: 44px;\n  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;\n"]);return Re=function(){return e},e}function He(){var e=Object(c.a)(['\n  background-image: url("','");\n  background-size: 100% 17%;\n  background-repeat: no-repeat;\n  background-color: #00539c;\n  padding: "55px";\n']);return He=function(){return e},e}var Ne=Object(l.b)(b.a)(He(),Te.a),We=Object(l.b)(N.a)(Re()),Ve=Object(l.b)(N.a)(Ie()),Ae=Object(T.a)(o.a.createElement(o.a.Fragment,null,o.a.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 11l-4-4h8l-4 4z",opacity:".3"}),o.a.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-5l4-4H8z"})),"ArrowDropDownCircleTwoTone"),Le=function(){return o.a.createElement(Ne,{container:!0,justify:"space-around"},o.a.createElement(b.a,{Item:!0,xs:10,md:8,style:{marginBottom:"0"}},o.a.createElement(We,{variant:"h2",align:"center","data-aos":"slide-right"},"Sponsored By YousFitness"),o.a.createElement(Ve,{align:"center","data-aos":"slide-left"},"Regardless of what an employee\u2019s role is, at some point they will have to work with other people at the company \u2013 whether that\u2019s a colleague, customer or other stakeholder.",o.a.createElement("br",null),"Team spirit is an attitude that enables people to work well together. It\u2019s about camaraderie, cooperation and collaboration between different members of the organization.")),o.a.createElement(b.a,{item:!0,xs:11,justify:"space-around","data-aos":"slide-right"},o.a.createElement(Se,{startIcon:o.a.createElement(Ae,null),endIcon:o.a.createElement(Ae,null),content:"Join Us Now",color:"primary",to:"/contact"})))};t.default=function(){return o.a.createElement(n.Fragment,null,o.a.createElement(r.a,{filter:!0,image:"home"}),o.a.createElement(C,null),o.a.createElement(J,null),o.a.createElement(Le,null),o.a.createElement(ge,null))}}}]);
//# sourceMappingURL=7.9c4ed7a6.chunk.js.map