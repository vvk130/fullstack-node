import{g as f,a as v,s as m,P as B,r as u,u as b,_ as y,b as c,j as a,c as g,d as M,B as q,e as J,M as Q,f as x,h as Z,i as oo,F as eo,T as h}from"./index-Utm8Mqc9.js";function to(o){return f("MuiCard",o)}v("MuiCard",["root"]);const so=["className","raised"],ao=o=>{const{classes:e}=o;return M({root:["root"]},to,e)},ro=m(B,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({overflow:"hidden"})),io=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiCard"}),{className:i,raised:r=!1}=s,l=y(s,so),n=c({},s,{raised:r}),d=ao(n);return a.jsx(ro,c({className:g(d.root,i),elevation:r?8:void 0,ref:t,ownerState:n},l))}),no=io;function lo(o){return f("MuiCardActionArea",o)}const co=v("MuiCardActionArea",["root","focusVisible","focusHighlight"]),S=co,po=["children","className","focusVisibleClassName"],uo=o=>{const{classes:e}=o;return M({root:["root"],focusHighlight:["focusHighlight"]},lo,e)},mo=m(q,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${S.focusVisible} .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),go=m("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,e)=>e.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),ho=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiCardActionArea"}),{children:i,className:r,focusVisibleClassName:l}=s,n=y(s,po),d=s,p=uo(d);return a.jsxs(mo,c({className:g(p.root,r),focusVisibleClassName:g(l,p.focusVisible),ref:t,ownerState:d},n,{children:[i,a.jsx(go,{className:p.focusHighlight,ownerState:d})]}))}),Co=ho;function xo(o){return f("MuiCardContent",o)}v("MuiCardContent",["root"]);const fo=["className","component"],vo=o=>{const{classes:e}=o;return M({root:["root"]},xo,e)},bo=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),yo=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiCardContent"}),{className:i,component:r="div"}=s,l=y(s,fo),n=c({},s,{component:r}),d=vo(n);return a.jsx(bo,c({as:r,className:g(d.root,i),ownerState:n,ref:t},l))}),Mo=yo;function Ao(o){return f("MuiCardMedia",o)}v("MuiCardMedia",["root","media","img"]);const ko=["children","className","component","image","src","style"],$o=o=>{const{classes:e,isMediaComponent:t,isImageComponent:s}=o;return M({root:["root",t&&"media",s&&"img"]},Ao,e)},Do=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:s,isImageComponent:i}=t;return[e.root,s&&e.media,i&&e.img]}})(({ownerState:o})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),Ro=["video","audio","picture","iframe","img"],Wo=["picture","img"],No=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiCardMedia"}),{children:i,className:r,component:l="div",image:n,src:d,style:p}=s,R=y(s,ko),C=Ro.indexOf(l)!==-1,k=!C&&n?c({backgroundImage:`url("${n}")`},p):p,$=c({},s,{component:l,isMediaComponent:C,isImageComponent:Wo.indexOf(l)!==-1}),W=$o($);return a.jsx(Do,c({className:g(W.root,r),as:l,role:!C&&n?"img":void 0,ref:t,style:k,ownerState:$,src:C?n||d:void 0},R,{children:i}))}),jo=No;function Po(o){return f("MuiDialog",o)}const To=v("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),w=To,So=u.createContext({}),H=So,wo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Bo=m(J,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Fo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:i,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(s))}`,i&&"paperFullWidth",r&&"paperFullScreen"]};return M(l,Po,e)},Uo=m(Q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Io=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>c({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Oo=m(B,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>c({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${w.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ho=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiDialog"}),i=Z(),r={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:d,BackdropProps:p,children:R,className:C,disableEscapeKeyDown:k=!1,fullScreen:$=!1,fullWidth:W=!1,maxWidth:_="sm",onBackdropClick:F,onClose:N,open:U,PaperComponent:E=B,PaperProps:I={},scroll:V="paper",TransitionComponent:L=eo,transitionDuration:O=r,TransitionProps:z}=s,X=y(s,wo),D=c({},s,{disableEscapeKeyDown:k,fullScreen:$,fullWidth:W,maxWidth:_,scroll:V}),j=Fo(D),P=u.useRef(),Y=A=>{P.current=A.target===A.currentTarget},K=A=>{P.current&&(P.current=null,F&&F(A),N&&N(A,"backdropClick"))},T=oo(n),G=u.useMemo(()=>({titleId:T}),[T]);return a.jsx(Uo,c({className:g(j.root,C),closeAfterTransition:!0,components:{Backdrop:Bo},componentsProps:{backdrop:c({transitionDuration:O,as:d},p)},disableEscapeKeyDown:k,onClose:N,open:U,ref:t,onClick:K,ownerState:D},X,{children:a.jsx(L,c({appear:!0,in:U,timeout:O,role:"presentation"},z,{children:a.jsx(Io,{className:g(j.container),onMouseDown:Y,ownerState:D,children:a.jsx(Oo,c({as:E,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":T},I,{className:g(j.paper,I.className),ownerState:D,children:a.jsx(H.Provider,{value:G,children:R})}))})}))}))}),_o=Ho;function Eo(o){return f("MuiDialogTitle",o)}v("MuiDialogTitle",["root"]);const Vo=["className","id"],Lo=o=>{const{classes:e}=o;return M({root:["root"]},Eo,e)},zo=m(h,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Xo=u.forwardRef(function(e,t){const s=b({props:e,name:"MuiDialogTitle"}),{className:i,id:r}=s,l=y(s,Vo),n=s,d=Lo(n),{titleId:p=r}=u.useContext(H);return a.jsx(zo,c({component:"h2",className:g(d.root,i),ownerState:n,ref:t,variant:"h6",id:r??p},l))}),Yo=Xo,Ko=({open:o,onClose:e,message:t})=>a.jsx(_o,{open:o,onClose:e,children:a.jsx(Yo,{children:t})}),Go=Ko;function Jo({productName:o,id:e,price:t,imageUrl:s,stock:i,discount:r}){const[l,n]=u.useState(!1);o.replace(/\s/g,"");const d=()=>{n(!0)},p=()=>{n(!1)};return a.jsx(no,{className:"cardmedia",children:a.jsxs(Co,{children:[a.jsx(jo,{loading:"lazy",component:"img",src:`https://trend-flare.onrender.com/assets/${s}`,alt:o}),a.jsxs(Mo,{className:"cardcontent",children:[a.jsx(h,{gutterBottom:!0,variant:"h8",component:"div",color:"red",children:i>0&&i<7?"Only few in stock!":i===0?"Out of stock":""}),a.jsx(h,{gutterBottom:!0,variant:"h5",component:"div",children:o}),a.jsx(h,{gutterBottom:!0,variant:"h5",component:"div",color:r?"red":"inherit",children:r?`${(parseFloat(t)*(1-parseFloat(r))).toFixed(2)}€ -${r} off!`:`${t}€`}),a.jsx(h,{variant:"body2",color:"text.secondary"}),a.jsx(h,{onClick:d,className:"linkreadmore",variant:"outlined",style:{marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to cart"}),a.jsx(h,{component:"a",href:`/products/${e}`,className:"linkreadmore",variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Read more"}),a.jsx(h,{className:"linkfav",onClick:d,variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to favorites"}),a.jsx(Go,{open:l,onClose:p,message:"Added to cart"})]})]})})}export{Jo as default};
