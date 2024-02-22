import{g as f,a as x,s as m,P as T,r as u,u as v,_ as b,b as c,j as s,c as h,d as M,B as Z,e as oo,M as eo,f as C,h as to,i as ao,F as so,T as R,k as ro,l as io,m as O}from"./index-D115R7UQ.js";function no(o){return f("MuiCard",o)}x("MuiCard",["root"]);const lo=["className","raised"],co=o=>{const{classes:e}=o;return M({root:["root"]},no,e)},po=m(T,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({overflow:"hidden"})),uo=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiCard"}),{className:r,raised:i=!1}=a,l=b(a,lo),n=c({},a,{raised:i}),d=co(n);return s.jsx(po,c({className:h(d.root,r),elevation:i?8:void 0,ref:t,ownerState:n},l))}),mo=uo;function ho(o){return f("MuiCardActionArea",o)}const go=x("MuiCardActionArea",["root","focusVisible","focusHighlight"]),P=go,Co=["children","className","focusVisibleClassName"],fo=o=>{const{classes:e}=o;return M({root:["root"],focusHighlight:["focusHighlight"]},ho,e)},xo=m(Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${P.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${P.focusVisible} .${P.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),vo=m("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,e)=>e.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),bo=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiCardActionArea"}),{children:r,className:i,focusVisibleClassName:l}=a,n=b(a,Co),d=a,p=fo(d);return s.jsxs(xo,c({className:h(p.root,i),focusVisibleClassName:h(l,p.focusVisible),ref:t,ownerState:d},n,{children:[r,s.jsx(vo,{className:p.focusHighlight,ownerState:d})]}))}),Mo=bo;function yo(o){return f("MuiCardContent",o)}x("MuiCardContent",["root"]);const Ao=["className","component"],Do=o=>{const{classes:e}=o;return M({root:["root"]},yo,e)},$o=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),ko=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiCardContent"}),{className:r,component:i="div"}=a,l=b(a,Ao),n=c({},a,{component:i}),d=Do(n);return s.jsx($o,c({as:i,className:h(d.root,r),ownerState:n,ref:t},l))}),Ro=ko;function jo(o){return f("MuiCardMedia",o)}x("MuiCardMedia",["root","media","img"]);const Wo=["children","className","component","image","src","style"],No=o=>{const{classes:e,isMediaComponent:t,isImageComponent:a}=o;return M({root:["root",t&&"media",a&&"img"]},jo,e)},So=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:a,isImageComponent:r}=t;return[e.root,a&&e.media,r&&e.img]}})(({ownerState:o})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),wo=["video","audio","picture","iframe","img"],Po=["picture","img"],Bo=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiCardMedia"}),{children:r,className:i,component:l="div",image:n,src:d,style:p}=a,y=b(a,Wo),g=wo.indexOf(l)!==-1,D=!g&&n?c({backgroundImage:`url("${n}")`},p):p,$=c({},a,{component:l,isMediaComponent:g,isImageComponent:Po.indexOf(l)!==-1}),j=No($);return s.jsx(So,c({className:h(j.root,i),as:l,role:!g&&n?"img":void 0,ref:t,style:D,ownerState:$,src:g?n||d:void 0},y,{children:r}))}),To=Bo;function _o(o){return f("MuiDialog",o)}const Fo=x("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),B=Fo,Ho=u.createContext({}),E=Ho,Io=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Uo=m(oo,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Oo=o=>{const{classes:e,scroll:t,maxWidth:a,fullWidth:r,fullScreen:i}=o,l={root:["root"],container:["container",`scroll${C(t)}`],paper:["paper",`paperScroll${C(t)}`,`paperWidth${C(String(a))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return M(l,_o,e)},Eo=m(eo,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Vo=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${C(t.scroll)}`]]}})(({ownerState:o})=>c({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Lo=m(T,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${C(t.scroll)}`],e[`paperWidth${C(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>c({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${B.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${B.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${B.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),zo=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiDialog"}),r=to(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:d,BackdropProps:p,children:y,className:g,disableEscapeKeyDown:D=!1,fullScreen:$=!1,fullWidth:j=!1,maxWidth:L="sm",onBackdropClick:F,onClose:W,open:H,PaperComponent:z=T,PaperProps:I={},scroll:q="paper",TransitionComponent:X=so,transitionDuration:U=i,TransitionProps:Y}=a,K=b(a,Io),k=c({},a,{disableEscapeKeyDown:D,fullScreen:$,fullWidth:j,maxWidth:L,scroll:q}),N=Oo(k),S=u.useRef(),G=A=>{S.current=A.target===A.currentTarget},J=A=>{S.current&&(S.current=null,F&&F(A),W&&W(A,"backdropClick"))},w=ao(n),Q=u.useMemo(()=>({titleId:w}),[w]);return s.jsx(Eo,c({className:h(N.root,g),closeAfterTransition:!0,components:{Backdrop:Uo},componentsProps:{backdrop:c({transitionDuration:U,as:d},p)},disableEscapeKeyDown:D,onClose:W,open:H,ref:t,onClick:J,ownerState:k},K,{children:s.jsx(X,c({appear:!0,in:H,timeout:U,role:"presentation"},Y,{children:s.jsx(Vo,{className:h(N.container),onMouseDown:G,ownerState:k,children:s.jsx(Lo,c({as:z,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":w},I,{className:h(N.paper,I.className),ownerState:k,children:s.jsx(E.Provider,{value:Q,children:y})}))})}))}))}),qo=zo;function Xo(o){return f("MuiDialogTitle",o)}x("MuiDialogTitle",["root"]);const Yo=["className","id"],Ko=o=>{const{classes:e}=o;return M({root:["root"]},Xo,e)},Go=m(R,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Jo=u.forwardRef(function(e,t){const a=v({props:e,name:"MuiDialogTitle"}),{className:r,id:i}=a,l=b(a,Yo),n=a,d=Ko(n),{titleId:p=i}=u.useContext(E);return s.jsx(Go,c({component:"h2",className:h(d.root,r),ownerState:n,ref:t,variant:"h6",id:i??p},l))}),Qo=Jo,Zo=({open:o,onClose:e,message:t})=>s.jsx(qo,{open:o,onClose:e,children:s.jsx(Qo,{children:t})}),oe=Zo;var _={},ee=io;Object.defineProperty(_,"__esModule",{value:!0});var V=_.default=void 0,te=ee(ro()),ae=s;V=_.default=(0,te.default)((0,ae.jsx)("path",{d:"M11 9h2V6h3V4h-3V1h-2v3H8v2h3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2m-9.83-3.25.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25"}),"AddShoppingCart");function re({productName:o,id:e,price:t,imageUrl:a,stock:r,discount:i,brand:l}){const[n,d]=u.useState(!1),p=()=>{d(!0)},y=()=>{d(!1)};return s.jsx(mo,{className:"cardmedia",children:s.jsxs(Mo,{children:[s.jsx(To,{loading:"lazy",component:"img",src:`https://trend-flare.onrender.com/assets/${a}`,alt:o}),s.jsxs(Ro,{className:"cardcontent",children:[s.jsx(R,{gutterBottom:!0,variant:"h8",component:"div",color:r>0&&r<7?"red":"inherit",children:r>0&&r<7?"Only few in stock!":r===0?"Out of stock":`${l}`}),s.jsx(R,{gutterBottom:!0,variant:"h6",component:"div",children:o}),s.jsx(R,{gutterBottom:!0,variant:"h6",component:"div",color:i?"red":"inherit",children:i?`${(parseFloat(t)*(1-parseFloat(i))).toFixed(2)}€ | -${i*100}% off!`:`${t}€`}),s.jsxs("div",{className:"button-container",style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"auto"},children:[s.jsx(O,{onClick:p,className:"linkreadmore",variant:"outlined",style:{borderColor:"#2274A5",color:"#2274A5",width:"50%"},children:s.jsx(V,{})}),s.jsx(O,{component:"a",href:`/products/${e}`,className:"linkreadmore",variant:"outlined",style:{borderColor:"#2274A5",color:"#2274A5",width:"50%"},children:"Explore"})]}),s.jsx(oe,{open:n,onClose:y,message:"Added to cart"})]})]})})}export{re as default};
