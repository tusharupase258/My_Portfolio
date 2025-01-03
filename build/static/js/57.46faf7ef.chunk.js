"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[57,449,660],{7660:(e,a,s)=>{s.r(a),s.d(a,{default:()=>r});s(5043),s(4050);var t=s(579);const r=function(e){const{title:a}=e;return(0,t.jsx)("div",{className:"header",children:a})}},8057:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var t=s(5043),r=s(3519),c=s(1072),o=s(4282),l=s(4574),n=s(8885),d=s.n(n),i=s(7660),f=s(5724),m=s(4449),x=s(4331),b=s(579);const u={containerStyle:{marginBottom:25},showMoreStyle:{margin:25}},N=e=>{var a;const s=(0,t.useContext)(l.Dx),{header:n}=e,[N,y]=(0,t.useState)(null),[p,A]=(0,t.useState)(!1);(0,t.useEffect)((()=>{fetch(f.A.projects,{method:"GET"}).then((e=>e.json())).then((e=>y(e))).catch((e=>e))}),[]);const h=p&&N?N.length:6;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.default,{title:n}),N?(0,b.jsx)("div",{className:"section-content-container",children:(0,b.jsxs)(r.A,{style:u.containerStyle,children:[(0,b.jsx)(c.A,{xs:1,sm:1,md:2,lg:3,className:"g-4",children:null===(a=N.projects)||void 0===a?void 0:a.slice(0,h).map((e=>(0,b.jsx)(d(),{children:(0,b.jsx)(m.default,{project:e})},e.title)))}),!p&&(0,b.jsx)(o.A,{style:u.showMoreStyle,variant:s.bsSecondaryVariant,onClick:()=>A(!0),children:"show more"})]})}):(0,b.jsx)(x.default,{})]})}},4449:(e,a,s)=>{s.r(a),s.d(a,{default:()=>Y});var t=s(2555),r=s(5043),c=s(6221),o=s(45),l=s(8139),n=s.n(l),d=s(7852),i=s(579);const f=["className","bsPrefix","as"],m=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c="div"}=e,l=(0,o.A)(e,f);return r=(0,d.oU)(r,"card-body"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));m.displayName="CardBody";const x=m,b=["className","bsPrefix","as"],u=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c="div"}=e,l=(0,o.A)(e,b);return r=(0,d.oU)(r,"card-footer"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));u.displayName="CardFooter";const N=u;var y=s(1778);const p=["bsPrefix","className","as"],A=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:c,as:l="div"}=e,f=(0,o.A)(e,p);const m=(0,d.oU)(s,"card-header"),x=(0,r.useMemo)((()=>({cardHeaderBsPrefix:m})),[m]);return(0,i.jsx)(y.A.Provider,{value:x,children:(0,i.jsx)(l,(0,t.A)((0,t.A)({ref:a},f),{},{className:n()(c,m)}))})}));A.displayName="CardHeader";const h=A,g=["bsPrefix","className","variant","as"],j=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:c,as:l="img"}=e,f=(0,o.A)(e,g);const m=(0,d.oU)(s,"card-img");return(0,i.jsx)(l,(0,t.A)({ref:a,className:n()(c?"".concat(m,"-").concat(c):m,r)},f))}));j.displayName="CardImg";const v=j,P=["className","bsPrefix","as"],S=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c="div"}=e,l=(0,o.A)(e,P);return r=(0,d.oU)(r,"card-img-overlay"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));S.displayName="CardImgOverlay";const w=S,C=["className","bsPrefix","as"],R=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c="a"}=e,l=(0,o.A)(e,C);return r=(0,d.oU)(r,"card-link"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));R.displayName="CardLink";const k=R;var U=s(4488);const T=["className","bsPrefix","as"],B=(0,U.A)("h6"),F=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c=B}=e,l=(0,o.A)(e,T);return r=(0,d.oU)(r,"card-subtitle"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));F.displayName="CardSubtitle";const I=F,V=["className","bsPrefix","as"],E=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c="p"}=e,l=(0,o.A)(e,V);return r=(0,d.oU)(r,"card-text"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));E.displayName="CardText";const z=E,D=["className","bsPrefix","as"],H=(0,U.A)("h5"),L=r.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:c=H}=e,l=(0,o.A)(e,D);return r=(0,d.oU)(r,"card-title"),(0,i.jsx)(c,(0,t.A)({ref:a,className:n()(s,r)},l))}));L.displayName="CardTitle";const M=L,O=["bsPrefix","className","bg","text","border","body","children","as"],_=r.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:c,text:l,border:f,body:m=!1,children:b,as:u="div"}=e,N=(0,o.A)(e,O);const y=(0,d.oU)(s,"card");return(0,i.jsx)(u,(0,t.A)((0,t.A)({ref:a},N),{},{className:n()(r,y,c&&"bg-".concat(c),l&&"text-".concat(l),f&&"border-".concat(f)),children:m?(0,i.jsx)(x,{children:b}):b}))}));_.displayName="Card";const J=Object.assign(_,{Img:v,Title:M,Subtitle:I,Body:x,Link:k,Text:z,Header:h,Footer:N,ImgOverlay:w});var G=s(4282);const W=["bsPrefix","bg","pill","text","className","as"],$=r.forwardRef(((e,a)=>{let{bsPrefix:s,bg:r="primary",pill:c=!1,text:l,className:f,as:m="span"}=e,x=(0,o.A)(e,W);const b=(0,d.oU)(s,"badge");return(0,i.jsx)(m,(0,t.A)((0,t.A)({ref:a},x),{},{className:n()(f,b,c&&"rounded-pill",l&&"text-".concat(l),r&&"bg-".concat(r))}))}));$.displayName="Badge";const q=$;var K=s(4574),Q=s(2193);const X={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}},Y=e=>{var a;const s=(0,r.useContext)(K.Dx),{project:o}=e;return(0,i.jsx)(c.A,{children:(0,i.jsxs)(J,{style:(0,t.A)((0,t.A)({},X.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[(0,i.jsx)(J.Img,{variant:"top",src:null===o||void 0===o?void 0:o.image}),(0,i.jsxs)(J.Body,{children:[(0,i.jsx)(J.Title,{style:X.cardTitleStyle,children:o.title}),(0,i.jsx)(J.Text,{style:X.cardTextStyle,children:(l=o.bodyText,(0,i.jsx)(Q.$,{children:l}))})]}),(0,i.jsx)(J.Body,{children:null===o||void 0===o||null===(a=o.links)||void 0===a?void 0:a.map((e=>(0,i.jsx)(G.A,{style:X.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),o.tags&&(0,i.jsx)(J.Footer,{style:{backgroundColor:s.cardFooterBackground},children:o.tags.map((e=>(0,i.jsx)(q,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:X.badgeStyle,children:e},e)))})]})});var l}},4282:(e,a,s)=>{s.d(a,{A:()=>x});var t=s(2555),r=s(45),c=s(8139),o=s.n(c),l=s(5043),n=s(4140),d=s(7852),i=s(579);const f=["as","bsPrefix","variant","size","active","disabled","className"],m=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:c,variant:l="primary",size:m,active:x=!1,disabled:b=!1,className:u}=e,N=(0,r.A)(e,f);const y=(0,d.oU)(c,"btn"),[p,{tagName:A}]=(0,n.Am)((0,t.A)({tagName:s,disabled:b},N)),h=A;return(0,i.jsx)(h,(0,t.A)((0,t.A)((0,t.A)({},p),N),{},{ref:a,disabled:b,className:o()(u,y,x&&"active",l&&"".concat(y,"-").concat(l),m&&"".concat(y,"-").concat(m),N.href&&b&&"disabled")}))}));m.displayName="Button";const x=m},6221:(e,a,s)=>{s.d(a,{A:()=>x});var t=s(2555),r=s(45),c=s(8139),o=s.n(c),l=s(5043),n=s(7852),d=s(579);const i=["as","bsPrefix","className"],f=["className"];const m=l.forwardRef(((e,a)=>{const[s,{as:c="div",bsPrefix:l,spans:m}]=function(e){let{as:a,bsPrefix:s,className:c}=e,l=(0,r.A)(e,i);s=(0,n.oU)(s,"col");const d=(0,n.gy)(),f=(0,n.Jm)(),m=[],x=[];return d.forEach((e=>{const a=l[e];let t,r,c;delete l[e],"object"===typeof a&&null!=a?({span:t,offset:r,order:c}=a):t=a;const o=e!==f?"-".concat(e):"";t&&m.push(!0===t?"".concat(s).concat(o):"".concat(s).concat(o,"-").concat(t)),null!=c&&x.push("order".concat(o,"-").concat(c)),null!=r&&x.push("offset".concat(o,"-").concat(r))})),[(0,t.A)((0,t.A)({},l),{},{className:o()(c,...m,...x)}),{as:a,bsPrefix:s,spans:m}]}(e),{className:x}=s,b=(0,r.A)(s,f);return(0,d.jsx)(c,(0,t.A)((0,t.A)({},b),{},{ref:a,className:o()(x,!m.length&&l)}))}));m.displayName="Col";const x=m},1072:(e,a,s)=>{s.d(a,{A:()=>m});var t=s(2555),r=s(45),c=s(8139),o=s.n(c),l=s(5043),n=s(7852),d=s(579);const i=["bsPrefix","className","as"],f=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:c,as:l="div"}=e,f=(0,r.A)(e,i);const m=(0,n.oU)(s,"row"),x=(0,n.gy)(),b=(0,n.Jm)(),u="".concat(m,"-cols"),N=[];return x.forEach((e=>{const a=f[e];let s;delete f[e],null!=a&&"object"===typeof a?({cols:s}=a):s=a;const t=e!==b?"-".concat(e):"";null!=s&&N.push("".concat(u).concat(t,"-").concat(s))})),(0,d.jsx)(l,(0,t.A)((0,t.A)({ref:a},f),{},{className:o()(c,m,...N)}))}));f.displayName="Row";const m=f}}]);
//# sourceMappingURL=57.46faf7ef.chunk.js.map