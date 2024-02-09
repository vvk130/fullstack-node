import{g as f,a as b,s as m,P as B,r as u,u as v,_ as y,b as c,j as a,c as g,d as M,B as q,e as J,M as Q,f as x,h as Z,i as oo,F as eo,T as h}from"./index-Ivijg6VX.js";function to(o){return f("MuiCard",o)}b("MuiCard",["root"]);const so=["className","raised"],ao=o=>{const{classes:e}=o;return M({root:["root"]},to,e)},ro=m(B,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({overflow:"hidden"})),io=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCard"}),{className:r,raised:n=!1}=s,l=y(s,so),i=c({},s,{raised:n}),d=ao(i);return a.jsx(ro,c({className:g(d.root,r),elevation:n?8:void 0,ref:t,ownerState:i},l))}),no=io;function lo(o){return f("MuiCardActionArea",o)}const co=b("MuiCardActionArea",["root","focusVisible","focusHighlight"]),S=co,po=["children","className","focusVisibleClassName"],uo=o=>{const{classes:e}=o;return M({root:["root"],focusHighlight:["focusHighlight"]},lo,e)},mo=m(q,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${S.focusVisible} .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),go=m("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,e)=>e.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),ho=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardActionArea"}),{children:r,className:n,focusVisibleClassName:l}=s,i=y(s,po),d=s,p=uo(d);return a.jsxs(mo,c({className:g(p.root,n),focusVisibleClassName:g(l,p.focusVisible),ref:t,ownerState:d},i,{children:[r,a.jsx(go,{className:p.focusHighlight,ownerState:d})]}))}),Co=ho;function xo(o){return f("MuiCardContent",o)}b("MuiCardContent",["root"]);const fo=["className","component"],bo=o=>{const{classes:e}=o;return M({root:["root"]},xo,e)},vo=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),yo=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardContent"}),{className:r,component:n="div"}=s,l=y(s,fo),i=c({},s,{component:n}),d=bo(i);return a.jsx(vo,c({as:n,className:g(d.root,r),ownerState:i,ref:t},l))}),Mo=yo;function Ao(o){return f("MuiCardMedia",o)}b("MuiCardMedia",["root","media","img"]);const ko=["children","className","component","image","src","style"],Do=o=>{const{classes:e,isMediaComponent:t,isImageComponent:s}=o;return M({root:["root",t&&"media",s&&"img"]},Ao,e)},$o=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:s,isImageComponent:r}=t;return[e.root,s&&e.media,r&&e.img]}})(({ownerState:o})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),Ro=["video","audio","picture","iframe","img"],Wo=["picture","img"],No=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardMedia"}),{children:r,className:n,component:l="div",image:i,src:d,style:p}=s,R=y(s,ko),C=Ro.indexOf(l)!==-1,k=!C&&i?c({backgroundImage:`url("${i}")`},p):p,D=c({},s,{component:l,isMediaComponent:C,isImageComponent:Wo.indexOf(l)!==-1}),W=Do(D);return a.jsx($o,c({className:g(W.root,n),as:l,role:!C&&i?"img":void 0,ref:t,style:k,ownerState:D,src:C?i||d:void 0},R,{children:r}))}),jo=No;function Po(o){return f("MuiDialog",o)}const To=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),w=To,So=u.createContext({}),H=So,wo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Bo=m(J,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Uo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:r,fullScreen:n}=o,l={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(s))}`,r&&"paperFullWidth",n&&"paperFullScreen"]};return M(l,Po,e)},Fo=m(Q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Io=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>c({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Oo=m(B,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>c({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${w.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ho=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiDialog"}),r=Z(),n={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":i,BackdropComponent:d,BackdropProps:p,children:R,className:C,disableEscapeKeyDown:k=!1,fullScreen:D=!1,fullWidth:W=!1,maxWidth:_="sm",onBackdropClick:U,onClose:N,open:F,PaperComponent:E=B,PaperProps:I={},scroll:V="paper",TransitionComponent:L=eo,transitionDuration:O=n,TransitionProps:z}=s,X=y(s,wo),$=c({},s,{disableEscapeKeyDown:k,fullScreen:D,fullWidth:W,maxWidth:_,scroll:V}),j=Uo($),P=u.useRef(),Y=A=>{P.current=A.target===A.currentTarget},K=A=>{P.current&&(P.current=null,U&&U(A),N&&N(A,"backdropClick"))},T=oo(i),G=u.useMemo(()=>({titleId:T}),[T]);return a.jsx(Fo,c({className:g(j.root,C),closeAfterTransition:!0,components:{Backdrop:Bo},componentsProps:{backdrop:c({transitionDuration:O,as:d},p)},disableEscapeKeyDown:k,onClose:N,open:F,ref:t,onClick:K,ownerState:$},X,{children:a.jsx(L,c({appear:!0,in:F,timeout:O,role:"presentation"},z,{children:a.jsx(Io,{className:g(j.container),onMouseDown:Y,ownerState:$,children:a.jsx(Oo,c({as:E,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":T},I,{className:g(j.paper,I.className),ownerState:$,children:a.jsx(H.Provider,{value:G,children:R})}))})}))}))}),_o=Ho;function Eo(o){return f("MuiDialogTitle",o)}b("MuiDialogTitle",["root"]);const Vo=["className","id"],Lo=o=>{const{classes:e}=o;return M({root:["root"]},Eo,e)},zo=m(h,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Xo=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiDialogTitle"}),{className:r,id:n}=s,l=y(s,Vo),i=s,d=Lo(i),{titleId:p=n}=u.useContext(H);return a.jsx(zo,c({component:"h2",className:g(d.root,r),ownerState:i,ref:t,variant:"h6",id:n??p},l))}),Yo=Xo,Ko=({open:o,onClose:e,message:t})=>a.jsx(_o,{open:o,onClose:e,children:a.jsx(Yo,{children:t})}),Go=Ko;function Jo({productName:o,id:e,price:t,imageUrl:s,stock:r,discount:n}){const[l,i]=u.useState(!1);o.replace(/\s/g,"");const d=()=>{i(!0)},p=()=>{i(!1)};return a.jsx(no,{className:"cardmedia",children:a.jsxs(Co,{children:[a.jsx(jo,{loading:"lazy",component:"img",src:`https://trend-flare.onrender.com/assets/${s}`,alt:o}),a.jsxs(Mo,{className:"cardcontent",children:[a.jsx(h,{gutterBottom:!0,variant:"h8",component:"div",color:"red",children:r>0&&r<7?"Only few in stock!":r===0?"Out of stock":""}),a.jsx(h,{gutterBottom:!0,variant:"h5",component:"div",children:o}),a.jsx(h,{variant:"body2",color:"text.secondary"}),a.jsx(h,{onClick:d,className:"linkreadmore",variant:"outlined",style:{marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to cart"}),a.jsx(h,{component:"a",href:`/products/${e}`,className:"linkreadmore",variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Read more"}),a.jsx(h,{className:"linkfav",onClick:d,variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to favorites"}),a.jsx(Go,{open:l,onClose:p,message:"Added to cart"})]})]})})}export{Jo as default};
