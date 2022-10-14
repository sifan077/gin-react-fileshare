import{R as U,j as N,s as a,r as A,a as d,b as G,v as K,N as C,S as P,c as m,u as Z,q as V,d as X,U as ee,W as te,e as ne,_ as oe,F as re,f as ie,g as se}from"./vendor.769e8ba1.js";const ae=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};ae();const b=U.createContext({addressesRef:null}),t=N.exports.jsx,c=N.exports.jsxs,le=N.exports.Fragment,ce=a.div`
  position: fixed; z-index: 10; background: rgba(0,0,0,0.5); width: 100%;
  height: 100%; left: 0; top: 0;
`,ue=a.div`
  position: fixed; z-index: 11; min-width: 120px; min-height: 40px;
  max-width: 100%; max-height: 100%; background: white; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`,de=({container:e,onClickOverlay:o,children:r})=>A.exports.createPortal(c(le,{children:[t(ce,{onClick:o}),t(ue,{children:r})]}),e!=null?e:document.body);let k=null;const I=e=>{!e||(A.exports.unmountComponentAtNode(e),e.remove(),k=null)},L=(e,o={})=>{I(k);const{closeOnClickOverlay:r,context:s}=o,n=k=document.createElement("div");n.className="tempApp",document.body.append(n);const i=()=>{r&&I(n)};return A.exports.render(t(b.Provider,{value:s,children:t(de,{container:n,onClickOverlay:i,children:e})}),n),()=>I(n)},h=a.div`
  display: flex;
  flex-direction: ${({virtical:e})=>e?"column":"row"};
  justify-content: center;
  align-items: center;
`,pe=a(h)`
  flex-direction: column;
  padding: 8px;
  > svg {
    width: 40px;
    height: 40px;
    margin: 16px;
  }
`,O=({children:e,className:o})=>c(pe,{className:o,children:[t("svg",{className:"spin",children:t("use",{xlinkHref:"#icon-loading"})}),t("p",{children:e})]}),he=e=>new Promise((o,r)=>{const s=new Image;s.onload=()=>{o(s)},s.onerror=n=>{r(n)},s.src=e}),ge=a(O)`
  width: 256px;
  height: 256px;
`,me=({content:e})=>{const[o,r]=d.exports.useState(null);e=encodeURIComponent(e);const[s,n]=d.exports.useState(!1),[i,l]=d.exports.useState(null);return d.exports.useEffect(()=>{if(!e)return;const u=`/api/v1/qrcodes?content=${e}`;n(!0),he(u).then(()=>r(t("img",{width:"256",height:"256",src:u})),p=>l(p)).finally(()=>n(!1))},[e]),s?t(ge,{children:"\u52A0\u8F7D\u4E2D"}):i?c("div",{children:["\u52A0\u8F7D\u4E8C\u7EF4\u7801\u51FA\u9519\uFF1A",JSON.stringify(i)]}):o},w=G.create({timeout:5e3}),xe=`ws://${window.location.hostname}:27149/ws`,j=new WebSocket(xe);class fe{constructor(o){this.client=o}send(o){this.client.send(JSON.stringify(o))}onMessage(o){this.client.onmessage=({data:r})=>{o(JSON.parse(r))}}}const Fe=new Promise((e,o)=>{j.onopen=()=>{e(new fe(j))},setTimeout(()=>{o(new Error("get ws connection timeout"))},1e4)}),T=()=>Fe;let x=localStorage.getItem("clientId");(x==null?void 0:x.length)!==36&&(x=K(),localStorage.setItem("clientId",x));const E=a.div`
  height: ${({x2:e,x3:o})=>e?16*2:o?16*3:16}px;
`,M=a.div`
  min-height: 100vh; display: flex; align-items: stretch; flex-direction: column;
  padding: 0 16px; margin: 0 auto;
  @media (min-width: 414px) {
    max-width: 600px; 
  }
`,W=a.h1`
  margin-top: 48px;
  margin-bottom: 32px;
  text-align: center;
`,q=a.textarea`
  width: 100%;
  min-height: 160px;
  line-height: 20px;
  &.draging {
    border-color: red;
  }
`,f=a.button`
  min-height: 40px;
  padding: 0 60px;
  border: 2px solid #666;
  background: #f5b70d;
  border-radius: 8px;
  cursor: pointer;
`,R=a.form`
  &> .row {
    margin: 16px 0;
  }
`,be=a.span`
  margin-right: 8px;
`,ve=a.label`
  display: flex; padding: 4px 0; 
  justify-content: flex-start; align-items: center;
  min-height: 40px; white-space: nowrap;
`,ye=a.h2`
  font-weight: bold; font-size: 24px;
  margin-bottom: 16px;
`,z=a.p`
  a {text-decoration: underline;}
`,J=({content:e,onClose:o})=>{var u,p;const[r,s]=d.exports.useState(localStorage.getItem("address")||""),n=d.exports.useContext(b),i=(u=n==null?void 0:n.addressesRef)!=null?u:null,l=g=>{s(g.target.value),localStorage.setItem("address",g.target.value)};return e=typeof e=="string"?e:e(r),c(we,{children:[t(ye,{children:"\u4E0A\u4F20\u6210\u529F"}),i.current?c("div",{children:[c(z,{children:["\u8BF7 Windows \u7528\u6237\u5728\u9632\u706B\u5899\u5165\u7AD9\u89C4\u5219\u4E2D\u5F00\u901A 27149 \u7AEF\u53E3\uFF08",t("a",{href:"https://jingyan.baidu.com/article/09ea3ede7311dec0afde3977.html",target:"_blank",rel:"noreferrer",children:"\u6559\u7A0B"}),"\uFF09"]}),t(z,{children:c(ve,{children:[t(be,{children:"\u8BF7\u9009\u62E9\u624B\u673A\u53EF\u4EE5\u8BBF\u95EE\u7684\u5C40\u57DF\u7F51IP"}),c("select",{value:r,onChange:l,children:[t("option",{value:"",disabled:!0,children:"- \u8BF7\u9009\u62E9 -"}),(p=i.current)==null?void 0:p.map(g=>t("option",{children:g},g))]})]})})]}):null,t(h,{children:e?t(me,{content:e}):null}),t(h,{children:e?t("a",{href:e,children:"\u8BF7 \u624B\u673A\u626B\u7801 \u6216 \u70B9\u51FB\u4E0B\u8F7D"}):null}),t(E,{}),t(h,{children:t(f,{onClick:o,children:"\u5173\u95ED"})})]})},Q=({context:e,content:o})=>{const r=L(t(J,{content:o,onClose:()=>r()}),{context:e})},S=({context:e,content:o})=>{const r=L(t(J,{content:o,onClose:()=>r()}),{context:e})},$=()=>L(t(O,{children:"\u4E0A\u4F20\u4E2D"})),we=a.div`
  padding: 16px;
`,_=(e,o)=>(T().then(r=>{r.send({clientId:x,type:o,url:e.data.url})}),e),Ce=e=>w.post("/api/v1/texts",{raw:e}).then(o=>_(o,"text")),H=e=>{const o=new FormData;return o.append("raw",e),w({method:"post",url:"/api/v1/files",data:o,headers:{"Content-Type":"multipart/form-data"}}).then(r=>_(r,"file"))},Ee=()=>{const e=d.exports.useContext(b),[o,r]=d.exports.useState("");return c(R,{className:"uploadForm",onSubmit:async n=>{n.preventDefault(),$();const{data:{url:i}}=await Ce(o);Q({context:e,content:l=>l&&`http://${l}:27149/static/downloads?type=text&url=http://${l+":27149"+encodeURIComponent(i)}`})},children:[t("div",{className:"row",children:t(q,{value:o,onChange:n=>r(n.target.value)})}),t(h,{className:"row",children:t(f,{type:"submit",children:"\u4E0A\u4F20"})})]})},Se=()=>{const e=d.exports.useContext(b),[o,r]=d.exports.useState("default");return t(R,{className:"uploadForm",children:t("div",{className:"row",children:c($e,{onDrop:async u=>{var v,y,F;u.preventDefault();const p=(F=(y=(v=u.dataTransfer)==null?void 0:v.items)==null?void 0:y[0])==null?void 0:F.getAsFile();if(!p)return;const g=p.type||"unknown";$();const{data:{url:B}}=await H(p);S({context:e,content:D=>D&&`http://${D}:27149/static/downloads?type=${g}&url=${encodeURIComponent(`http://${D}:27149${B}`)}`})},onDragOver:u=>{u.preventDefault(),r("dragging")},onDragLeave:u=>{r("default")},className:o,children:[t(Be,{type:"file",value:"",onChange:async u=>{var v,y;const p=(y=(v=u.target)==null?void 0:v.files)==null?void 0:y[0];if(!p)return;const g=p.type||"unknown";$();const{data:{url:B}}=await H(p);S({context:e,content:F=>F&&`http://${F}:27149/static/downloads?type=${g}&url=${encodeURIComponent(`http://${F}:27149${B}`)}`})}}),t("p",{children:"\u70B9\u51FB\u6253\u5F00\u6587\u4EF6 \u6216 \u62D6\u62FD\u6587\u4EF6\u81F3\u6B64"})]})})})},$e=a.div`
  &.dragging {
    border-color: ${({theme:e})=>e.highlightColor};
    color: ${({theme:e})=>e.highlightColor};
  }
  min-height: 160px; border: 2px dashed ${({theme:e})=>e.borderColor}; 
  position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 8px;
`,Be=a.input`
  position: absolute; right: 0; top: 0; width: 100%; height: 100%;
  opacity: 0; cursor: pointer;
`,De=a.nav`
  text-align: center;
  > ul {
    display: flex; border-top: 1px solid ${({theme:e})=>e.borderColor}; 
    border-left: 1px solid ${({theme:e})=>e.borderColor};
    > li { flex-grow: 1; border-bottom: 1px solid #333;
      border-right: 1px solid ${({theme:e})=>e.borderColor};
      > a { display: block; padding: 8px 0; 
        &.selected{ background: ${({theme:e})=>e.highlightColor} }
      }
    }
  } 
`,Ne=t(De,{children:c("ul",{children:[t("li",{children:t(C,{to:"/message",activeClassName:"selected",children:"\u4F20\u6D88\u606F"})}),t("li",{children:t(C,{to:"/file",activeClassName:"selected",children:"\u4F20\u6587\u4EF6"})}),t("li",{children:t(C,{to:"/screenshot",activeClassName:"selected",children:"\u4F20\u622A\u56FE"})}),t("li",{children:t(C,{to:"/clear",activeClassName:"selected",children:"\u6E05\u9664\u7F13\u5B58"})})]})}),Ae=()=>{const e=d.exports.useContext(b),o=async n=>{if(!n)return;const i=n.type||"unknown";$();const{data:{url:l}}=await H(n);S({context:e,content:u=>u&&`http://${u}:27149/static/downloads?type=${i}&url=${encodeURIComponent(`http://${u}:27149${l}`)}`})},r=n=>{const{items:[i]}=n.clipboardData;o(i==null?void 0:i.getAsFile())};return d.exports.useEffect(()=>(window.addEventListener("paste",r),()=>{window.removeEventListener("paste",r)}),[]),t(R,{className:"uploadForm",children:t("div",{className:"row",children:c(ke,{children:[t(Ie,{type:"file",value:"",onChange:async n=>{var i,l;o((l=(i=n.target)==null?void 0:i.files)==null?void 0:l[0])},accept:"image/*;capture=camera"}),t("p",{children:"\u70B9\u51FB\u9009\u62E9\u56FE\u7247 \u6216 \u76F4\u63A5\u7C98\u8D34\u56FE\u7247"})]})})})},ke=a.div`
  &.dragging {
    border-color: ${({theme:e})=>e.highlightColor};
    color: ${({theme:e})=>e.highlightColor};
  }
  min-height: 160px; border: 2px dashed ${({theme:e})=>e.borderColor}; 
  position: relative; overflow: hidden; display: flex; justify-content: center; align-items: center; border-radius: 8px;
`,Ie=a.input`
  position: absolute; right: 0; top: 0; width: 100%; height: 100%;
  opacity: 0; cursor: pointer;
`;function Le(e){const[o,r]=d.exports.useState(!1),s=()=>{w.get("/clear").then(n=>{console.log(n.data),n.data==="\u6E05\u9664\u7F13\u5B58\u6210\u529F"&&r(!0)}).catch(n=>Promise.reject(n))};return c("div",{children:[t("br",{}),t("br",{}),t("br",{}),c(h,{className:"row",children:[o&&t("h3",{children:"\u6210\u529F\u6E05\u9664\u7F13\u5B58"}),t(f,{onClick:()=>s(),children:"\u6E05\u9664\u7F13\u5B58"})]})]})}function Re(){return c(M,{children:[t(W,{children:"\u540C\u6B65\u4F20"}),Ne,c(P,{children:[t(m,{exact:!0,path:"/message",children:t(Ee,{})}),t(m,{exact:!0,path:"/file",children:t(Se,{})}),t(m,{exact:!0,path:"/screenshot",children:t(Ae,{})}),t(m,{exact:!0,path:"/clear",children:t(Le,{})})]})]})}const He=()=>{const e=Z();return V.parse(e.search)},Y=X({basename:"/static/"}),Ue=()=>{const e=He(),o=Oe(e.type),[r,s]=d.exports.useState("");d.exports.useEffect(()=>{o==="text"&&w.get(e.url).then(({data:l})=>{s(l)})},[o]);let n=null;switch(o){case"text":n=c("div",{children:[t(q,{readOnly:!0,value:r}),t(E,{}),t(h,{virtical:!0,children:t(f,{children:"\u8BF7\u624B\u52A8\u590D\u5236\u4E0A\u9762\u6587\u672C"})})]});break;case"file":n=t(h,{virtical:!0,children:c("a",{href:e.url,children:[t("svg",{children:t("use",{xlinkHref:"#icon-file"})}),t(E,{}),t(h,{children:t(f,{children:"\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6"})})]})});break;case"image":n=t(h,{children:c("a",{href:e.url,children:[t(Pe,{src:e.url}),t(h,{children:t(f,{children:"\u957F\u6309\u6216\u70B9\u51FB\uFF0C\u5373\u53EF\u4E0B\u8F7D\u56FE\u7247"})})]})});break}return c(M,{children:[t(W,{children:"\u540C\u6B65\u4F20"}),n,t(E,{x3:!0}),t(h,{children:t(f,{onClick:()=>{Y.push("/")},children:"\u6211\u4E5F\u8981\u4E0A\u4F20"})})]})},Pe=a.img`
  border: 2px solid ${({theme:e})=>e.borderColor};
  margin: 16px;
`;a.p`
  margin: 8px 0;
`;const Oe=e=>/^image\/.*$/.test(e)?"image":/^text(\/.*)?$/.test(e)?"text":"file",je=ee`
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`,Te=te`
  * { box-sizing: border-box; padding: 0; margin: 0; }
  *::before, *::after {box-sizing: border-box;}
  body {
    font-size: 16px;
    font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
  }
  a {text-decoration: none; color: inherit;}
  img {max-width: 100%; max-height: 100%; }
  input, button {font: inherit;}
  ul, ol {list-style: none; }
  img{vertical-align: middle;}
  :focus{ outline: none; }

  // helpers
  .spin {
    animation: ${je} 2s linear infinite;
  }
`,Me={borderColor:"#333",highlightColor:"#f5b70d"},We=()=>{const e=d.exports.useRef(null),o={addressesRef:e};return d.exports.useEffect(async()=>{const{data:{addresses:r}}=await w.get("/api/v1/addresses").catch(s=>Promise.reject(s));e.current=oe.uniq(r.concat("127.0.0.1"))},[]),d.exports.useEffect(()=>{T().then(r=>{r.onMessage(s=>{const{url:n,type:i}=s;if(s.clientId!==x){const l=u=>u&&`http://${u}:27149/static/downloads?type=${i}&url=${encodeURIComponent(`http://${u}:27149${n}`)}`;i==="text"?Q({context:o,content:l}):S({context:o,content:l})}})})},[]),c(re,{theme:Me,children:[t(Te,{}),t(b.Provider,{value:o,children:t(ie,{history:Y,children:c(P,{children:[t(se,{exact:!0,from:"/",to:"/message"}),t(m,{exact:!0,path:"/downloads",children:t(Ue,{})}),t(m,{path:"/",children:t(Re,{})}),t(m,{path:"*",children:t("div",{children:"404"})})]})})})]})};ne.render(t(U.StrictMode,{children:t(We,{})}),document.getElementById("root"));
