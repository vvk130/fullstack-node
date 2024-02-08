import{g as f,a as b,s as m,P as B,r as u,u as v,_ as y,b as c,j as a,c as g,d as M,B as q,e as J,M as Q,f as x,h as Z,i as oo,F as eo,T as C}from"./index-J9J2FavB.js";function to(o){return f("MuiCard",o)}b("MuiCard",["root"]);const so=["className","raised"],ao=o=>{const{classes:e}=o;return M({root:["root"]},to,e)},ro=m(B,{name:"MuiCard",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({overflow:"hidden"})),io=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCard"}),{className:l,raised:r=!1}=s,i=y(s,so),n=c({},s,{raised:r}),d=ao(n);return a.jsx(ro,c({className:g(d.root,l),elevation:r?8:void 0,ref:t,ownerState:n},i))}),no=io;function lo(o){return f("MuiCardContent",o)}b("MuiCardContent",["root"]);const co=["className","component"],po=o=>{const{classes:e}=o;return M({root:["root"]},lo,e)},uo=m("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,e)=>e.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),mo=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardContent"}),{className:l,component:r="div"}=s,i=y(s,co),n=c({},s,{component:r}),d=po(n);return a.jsx(uo,c({as:r,className:g(d.root,l),ownerState:n,ref:t},i))}),go=mo;function Co(o){return f("MuiCardMedia",o)}b("MuiCardMedia",["root","media","img"]);const ho=["children","className","component","image","src","style"],xo=o=>{const{classes:e,isMediaComponent:t,isImageComponent:s}=o;return M({root:["root",t&&"media",s&&"img"]},Co,e)},fo=m("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:t}=o,{isMediaComponent:s,isImageComponent:l}=t;return[e.root,s&&e.media,l&&e.img]}})(({ownerState:o})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},o.isMediaComponent&&{width:"100%"},o.isImageComponent&&{objectFit:"cover"})),bo=["video","audio","picture","iframe","img"],vo=["picture","img"],yo=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardMedia"}),{children:l,className:r,component:i="div",image:n,src:d,style:p}=s,R=y(s,ho),h=bo.indexOf(i)!==-1,A=!h&&n?c({backgroundImage:`url("${n}")`},p):p,D=c({},s,{component:i,isMediaComponent:h,isImageComponent:vo.indexOf(i)!==-1}),W=xo(D);return a.jsx(fo,c({className:g(W.root,r),as:i,role:!h&&n?"img":void 0,ref:t,style:A,ownerState:D,src:h?n||d:void 0},R,{children:l}))}),Mo=yo;function ko(o){return f("MuiCardActionArea",o)}const Ao=b("MuiCardActionArea",["root","focusVisible","focusHighlight"]),S=Ao,Do=["children","className","focusVisibleClassName"],$o=o=>{const{classes:e}=o;return M({root:["root"],focusHighlight:["focusHighlight"]},ko,e)},Ro=m(q,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(o,e)=>e.root})(({theme:o})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${S.focusVisible} .${S.focusHighlight}`]:{opacity:(o.vars||o).palette.action.focusOpacity}})),Wo=m("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(o,e)=>e.focusHighlight})(({theme:o})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:o.transitions.create("opacity",{duration:o.transitions.duration.short})})),No=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiCardActionArea"}),{children:l,className:r,focusVisibleClassName:i}=s,n=y(s,Do),d=s,p=$o(d);return a.jsxs(Ro,c({className:g(p.root,r),focusVisibleClassName:g(i,p.focusVisible),ref:t,ownerState:d},n,{children:[l,a.jsx(Wo,{className:p.focusHighlight,ownerState:d})]}))}),jo=No;function Po(o){return f("MuiDialog",o)}const To=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),w=To,So=u.createContext({}),H=So,wo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],Bo=m(J,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),Uo=o=>{const{classes:e,scroll:t,maxWidth:s,fullWidth:l,fullScreen:r}=o,i={root:["root"],container:["container",`scroll${x(t)}`],paper:["paper",`paperScroll${x(t)}`,`paperWidth${x(String(s))}`,l&&"paperFullWidth",r&&"paperFullScreen"]};return M(i,Po,e)},Fo=m(Q,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),Io=m("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.container,e[`scroll${x(t.scroll)}`]]}})(({ownerState:o})=>c({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),Oo=m(B,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:t}=o;return[e.paper,e[`scrollPaper${x(t.scroll)}`],e[`paperWidth${x(String(t.maxWidth))}`],t.fullWidth&&e.paperFullWidth,t.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>c({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${w.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${w.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Ho=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiDialog"}),l=Z(),r={enter:l.transitions.duration.enteringScreen,exit:l.transitions.duration.leavingScreen},{"aria-describedby":i,"aria-labelledby":n,BackdropComponent:d,BackdropProps:p,children:R,className:h,disableEscapeKeyDown:A=!1,fullScreen:D=!1,fullWidth:W=!1,maxWidth:_="sm",onBackdropClick:U,onClose:N,open:F,PaperComponent:E=B,PaperProps:I={},scroll:V="paper",TransitionComponent:L=eo,transitionDuration:O=r,TransitionProps:z}=s,X=y(s,wo),$=c({},s,{disableEscapeKeyDown:A,fullScreen:D,fullWidth:W,maxWidth:_,scroll:V}),j=Uo($),P=u.useRef(),Y=k=>{P.current=k.target===k.currentTarget},K=k=>{P.current&&(P.current=null,U&&U(k),N&&N(k,"backdropClick"))},T=oo(n),G=u.useMemo(()=>({titleId:T}),[T]);return a.jsx(Fo,c({className:g(j.root,h),closeAfterTransition:!0,components:{Backdrop:Bo},componentsProps:{backdrop:c({transitionDuration:O,as:d},p)},disableEscapeKeyDown:A,onClose:N,open:F,ref:t,onClick:K,ownerState:$},X,{children:a.jsx(L,c({appear:!0,in:F,timeout:O,role:"presentation"},z,{children:a.jsx(Io,{className:g(j.container),onMouseDown:Y,ownerState:$,children:a.jsx(Oo,c({as:E,elevation:24,role:"dialog","aria-describedby":i,"aria-labelledby":T},I,{className:g(j.paper,I.className),ownerState:$,children:a.jsx(H.Provider,{value:G,children:R})}))})}))}))}),_o=Ho;function Eo(o){return f("MuiDialogTitle",o)}b("MuiDialogTitle",["root"]);const Vo=["className","id"],Lo=o=>{const{classes:e}=o;return M({root:["root"]},Eo,e)},zo=m(C,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(o,e)=>e.root})({padding:"16px 24px",flex:"0 0 auto"}),Xo=u.forwardRef(function(e,t){const s=v({props:e,name:"MuiDialogTitle"}),{className:l,id:r}=s,i=y(s,Vo),n=s,d=Lo(n),{titleId:p=r}=u.useContext(H);return a.jsx(zo,c({component:"h2",className:g(d.root,l),ownerState:n,ref:t,variant:"h6",id:r??p},i))}),Yo=Xo,Ko=({open:o,onClose:e,message:t})=>a.jsx(_o,{open:o,onClose:e,children:a.jsx(Yo,{children:t})}),Go=Ko;function Jo({productName:o,price:e,imageUrl:t,stock:s,discount:l}){const[r,i]=u.useState(!1),n=o.replace(/\s/g,""),d=()=>{i(!0)},p=()=>{i(!1)};return a.jsx(no,{className:"cardmedia",children:a.jsxs(jo,{children:[a.jsx(Mo,{loading:"lazy",component:"img",src:`assets/${t}`,alt:o}),a.jsxs(go,{className:"cardcontent",children:[a.jsx(C,{gutterBottom:!0,variant:"h8",component:"div",color:"red",children:s>0&&s<7?"Only few in stock!":s===0?"Out of stock":""}),a.jsx(C,{gutterBottom:!0,variant:"h5",component:"div",children:o}),a.jsx(C,{variant:"body2",color:"text.secondary"}),a.jsx(C,{onClick:d,className:"linkreadmore",variant:"outlined",style:{marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to cart"}),a.jsx(C,{component:"a",href:`/${n}`,className:"linkreadmore",variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Read more"}),a.jsx(C,{className:"linkfav",onClick:d,variant:"outlined",style:{marginLeft:"1rem",marginTop:"2rem",borderColor:"#2274A5",color:"#2274A5"},children:"Add to favorites"}),a.jsx(Go,{open:r,onClose:p,message:"Added to cart"})]})]})})}export{Jo as default};
