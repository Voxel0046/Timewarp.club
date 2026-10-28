const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/css/icons.css"])))=>i.map(i=>d[i]);
import{a as Pe,c as Ie,t as De,b as Le,r as n,j as e,u as ue,N as le,L as T,X as pe,M as Se,g as z,d as xe,Q as _e,C as ge,e as be,f as Ce,H as Ee,h as Me,m as oe,A as we,i as $e}from"./vendor.js";const Fe=function(){const s=typeof document<"u"&&document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),He=function(t){return"/"+t},ye={},Oe=function(s,a,i){let r=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");r=Promise.allSettled(a.map(c=>{if(c=He(c),c in ye)return;ye[c]=!0;const m=c.endsWith(".css"),f=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":Fe,m||(x.as="script"),x.crossOrigin="",x.href=c,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((w,j)=>{x.addEventListener("load",w),x.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return r.then(l=>{for(const d of l||[])d.status==="rejected"&&o(d.reason);return s().catch(o)})},X=Pe.create({baseURL:"/api",withCredentials:!0,timeout:15e3});X.interceptors.response.use(t=>t,t=>{if(t?.response?.status===401&&typeof window<"u"){const s=window.location.pathname;(s.startsWith("/dashboard")||s.startsWith("/admin"))&&window.dispatchEvent(new CustomEvent("tw:auth:expired"))}return Promise.reject(t)});const Q=Ie((t,s)=>({user:null,loading:!0,error:null,async init(){try{const{data:a}=await X.get("/auth/me");if(a?.authenticated){const{authenticated:i,...r}=a;t({user:r,loading:!1,error:null})}else t({user:null,loading:!1,error:null})}catch{t({user:null,loading:!1})}},async login(a,i){t({error:null});try{const{data:r}=await X.post("/auth/login",{username:a,password:i});return t({user:r}),await s().init(),{ok:!0}}catch(r){const o=r?.response?.data?.error||"login_failed";return t({error:o}),{ok:!1,error:o}}},async register(a,i,r,o){t({error:null});try{const l={username:a,password:i,license_key:r,email:o},{data:d}=await X.post("/auth/register",l);return t({user:d}),await s().init(),{ok:!0}}catch(l){const d=l?.response?.data?.error||"register_failed";return t({error:d}),{ok:!1,error:d}}},async logout(){try{await X.post("/auth/logout")}catch{}t({user:null})},clear(){t({user:null})}}));function A(...t){return De(Le(t))}const Ae=n.createContext({push:()=>{}}),ve={success:"bg-success",error:"bg-danger",info:"bg-accent-pink",warning:"bg-warning"};function Be({toast:t,onDismiss:s}){const[a,i]=n.useState(!1),r=n.useRef(null),o=n.useCallback(()=>{a||(i(!0),clearTimeout(r.current),setTimeout(()=>s(t.id),320))},[a,s,t.id]);return n.useEffect(()=>(r.current=setTimeout(o,t.duration||3500),()=>clearTimeout(r.current)),[o,t.duration]),ve[t.variant]||ve.info,e.jsx("div",{style:{animation:a?"tw-toast-out 0.4s cubic-bezier(0.5, 0, 0.75, 0) forwards":"tw-toast-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards"},className:A("group flex items-start gap-3 px-4 py-3.5 rounded-2xl select-none cursor-pointer","bg-[#111]/90 backdrop-blur-2xl","shadow-[0_10px_32px_-20px_rgb(0_0_0/0.55)]","min-w-[250px] max-w-sm"),onClick:o,role:"status",children:e.jsxs("div",{className:"flex-1 min-w-0 lowercase",children:[t.title&&e.jsx("p",{className:"text-[0.95rem] font-medium text-white leading-tight tracking-[-0.01em]",children:t.title}),t.message&&e.jsx("p",{className:"text-[0.82rem] text-text-muted mt-0.5 leading-snug line-clamp-2",children:t.message})]})})}function mt({children:t}){const[s,a]=n.useState([]),i=n.useCallback(o=>{a(l=>l.filter(d=>d.id!==o))},[]),r=n.useCallback(o=>{const l=Math.random().toString(36).slice(2);a(d=>[...d,{id:l,variant:"info",...o}])},[]);return n.useEffect(()=>{const o=()=>r({variant:"error",title:"Session expired",message:"Please log in again."});return window.addEventListener("tw:auth:expired",o),()=>window.removeEventListener("tw:auth:expired",o)},[r]),e.jsxs(Ae.Provider,{value:{push:r},children:[t,e.jsx("style",{children:`
        @keyframes tw-toast-in {
          from { opacity: 0; transform: translateY(16px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes tw-toast-out {
          from { opacity: 1; transform: translateY(0)    scale(1);    }
          to   { opacity: 0; transform: translateY(8px)  scale(0.99); }
        }
      `}),e.jsx("div",{className:"fixed bottom-5 right-5 z-[60] flex flex-col-reverse gap-2.5 pointer-events-none",children:s.map(o=>e.jsx("div",{className:"pointer-events-auto",children:e.jsx(Be,{toast:o,onDismiss:i})},o.id))})]})}function We(){return n.useContext(Ae)}function ft({children:t,adminOnly:s=!1}){const{user:a,loading:i}=Q(),r=ue();return i?e.jsx("div",{className:"min-h-screen grid place-items-center"}):a?s&&a.role!=="admin"?e.jsx(le,{to:"/dashboard",replace:!0}):!s&&a.role==="admin"?e.jsx(le,{to:"/admin",replace:!0}):t:e.jsx(le,{to:"/login",state:{from:r.pathname},replace:!0})}const Ue="https://discord.com/invite/shW3eNaEMz";function ht(){const{user:t}=Q(),s=ue(),a=s.pathname==="/",[i,r]=n.useState(!1),o=n.useCallback(async()=>{r(!1);try{await X.post("/auth/logout")}catch{}window.location.href="/login"},[]),l=n.useCallback(d=>{const c=d.replace(/^#/,""),m=document.getElementById(c);if(!m)return!1;let f=m;if(c==="features"){const b=m.querySelector(".feature-row");b&&(f=b)}const x=f.getBoundingClientRect(),w=window.scrollY+x.top+x.height/2-window.innerHeight/2,j=document.documentElement.scrollHeight-window.innerHeight,u=Math.max(0,Math.min(w,j));return window.scrollTo({top:u,behavior:"smooth"}),window.history?.replaceState&&window.history.replaceState(null,"",`#${c}`),!0},[]);return n.useEffect(()=>{if(!a)return;const d=s.hash;if(!d)return;const c=window.setTimeout(()=>l(d),50);return()=>window.clearTimeout(c)},[a,s.hash,l]),n.useEffect(()=>{if(!i)return;const d=c=>c.key==="Escape"&&r(!1);return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[i]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"fixed inset-x-0 top-0 z-[1000]",children:[e.jsx("nav",{className:"relative bg-bg-primary/60 backdrop-blur-xl border-b border-accent-pink/50",children:e.jsxs("div",{className:"relative flex h-16 items-center gap-4 sm:gap-6 lg:gap-8 w-full px-4 sm:px-6 lg:px-8",children:[e.jsx(T,{to:"/",className:"text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"home"}),e.jsx(T,{to:"/modules",className:"text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"modules"}),e.jsx("a",{href:Ue,target:"_blank",rel:"noopener noreferrer",className:"text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"support"}),e.jsx(T,{to:"/legal",className:"text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"legal"}),e.jsx(T,{to:"/faq",className:"text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"faq"}),e.jsxs("div",{className:"ml-auto flex items-center gap-4 sm:gap-6 lg:gap-8",children:[t?e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/dashboard",className:"hidden sm:inline-flex items-center text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"dashboard"}),e.jsx("button",{type:"button",onClick:o,className:"hidden sm:inline-flex items-center text-[1.05rem] font-medium text-accent-pink hover:text-accent-pink-glow transition-colors duration-150",children:"sign out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/login",className:"hidden sm:inline-flex items-center text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"sign in"}),e.jsx(T,{to:"/purchase",className:"hidden sm:inline-flex items-center text-[1.05rem] font-medium text-accent-pink hover:text-accent-pink-glow transition-colors duration-150",children:"get timewarp"})]}),e.jsx("button",{type:"button",onClick:()=>r(d=>!d),className:"md:hidden grid place-items-center w-10 h-10 text-text-primary hover:bg-white/[0.06] transition-colors duration-150","aria-label":"Toggle menu",children:i?e.jsx(pe,{size:18}):e.jsx(Se,{size:18})})]})]})}),i&&e.jsx("div",{className:"md:hidden mt-0 bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle p-3 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)]",children:e.jsx("div",{className:"flex flex-col gap-1",children:t?e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/dashboard",onClick:()=>r(!1),className:"px-3 py-2.5 text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"dashboard"}),e.jsx("button",{type:"button",onClick:o,className:"text-left px-3 py-2.5 text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"sign out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{to:"/login",onClick:()=>r(!1),className:"px-3 py-2.5 text-[1.05rem] font-medium text-text-primary/85 hover:text-white transition-colors duration-150",children:"sign in"}),e.jsx(T,{to:"/purchase",onClick:()=>r(!1),className:"px-3 py-2.5 text-[1.05rem] font-medium text-accent-pink hover:text-accent-pink-glow transition-colors duration-150",children:"get timewarp"})]})})})]}),!a&&e.jsx("div",{"aria-hidden":!0,className:"h-20"})]})}function je({className:t="",style:s}){return e.jsx("img",{src:"/hourglass-bg.svg",alt:"","aria-hidden":"true",draggable:"false",className:`tw-hw-mark ${t}`,style:s})}let ce={route:null,ts:0};const qe=5e3;function gt(t){if(typeof window>"u"||navigator.doNotTrack==="1"||window.doNotTrack==="1"||!t||typeof t!="string")return;const s=Date.now();ce.route===t&&s-ce.ts<qe||(ce={route:t,ts:s},X.post("/analytics/view",{route:t},{timeout:3e3}).catch(()=>{}))}const Y={month:{accent:"pink",label:"30 days",features:["All modules included","Bound to 1 device","Community support"]},quarter:{accent:"blue",label:"90 days",features:["All modules included","1 HWID reset / month","Priority support"]},lifetime:{accent:"purple",label:"Lifetime",features:["All modules included","2 HWID resets / month","Priority support","Early feature access","Lifetime updates"]}};function bt(t){if(!t)return Y.month;if(Y[t.id])return Y[t.id];const s=t.duration_days;return s===-1?Y.lifetime:s>=90?Y.quarter:Y.month}const Ge=new Set(["huf","jpy","krw","vnd","clp","bif","djf","gnf","kmf","mga","pyg","rwf","ugx","vuv","xaf","xof","xpf"]);function wt(t,s="usd"){if(t==null)return"-";const a=String(s||"usd").toLowerCase(),i=Ge.has(a),r=i?t:t/100;try{return new Intl.NumberFormat("en-US",{style:"currency",currency:a.toUpperCase(),maximumFractionDigits:i||r%1===0?0:2}).format(r)}catch{return`$${r.toFixed(2)}`}}z.registerPlugin(xe);function yt({title:t,subtitle:s,children:a,footer:i}){const r=n.useRef(null);return xe(()=>{const o=r.current?.querySelectorAll("[data-reveal]");o.length&&(z.set(o,{opacity:0,y:18}),z.to(o,{opacity:1,y:0,duration:.8,ease:"power3.out",stagger:.09,delay:.1}))},{scope:r}),e.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-bg-primary text-text-primary",children:[e.jsxs("div",{className:"fixed inset-0 z-0 pointer-events-none overflow-hidden","aria-hidden":!0,children:[e.jsx(je,{style:{top:"6%",right:"min(-10rem, -12vw)",width:"min(30rem, 38vw)",transform:"rotate(7deg)"}}),e.jsx(je,{style:{bottom:"8%",left:"min(-10rem, -12vw)",width:"min(22rem, 28vw)",transform:"rotate(-8deg)"}})]}),e.jsxs("div",{ref:r,className:"relative z-10 min-h-screen flex flex-col w-full max-w-md mx-auto px-6 py-10 justify-center",children:[e.jsxs("div",{className:"flex-1 flex flex-col justify-center",children:[e.jsx("h1",{"data-reveal":!0,className:"tracking-tight leading-[1.1] text-center",children:e.jsx("span",{className:"block text-3xl sm:text-4xl font-semibold text-white",children:t})}),s&&e.jsx("p",{"data-reveal":!0,className:"mt-4 text-[1rem] text-text-muted leading-relaxed text-center",children:s}),e.jsx("div",{"data-reveal":!0,className:"mt-10",children:a}),i&&e.jsx("div",{"data-reveal":!0,className:"mt-9 text-center text-[0.95rem] text-text-muted space-y-1.5",children:i})]}),e.jsx("div",{"data-reveal":!0,className:"pt-4 text-center",children:e.jsx(T,{to:"/",className:"text-[0.95rem] text-text-muted hover:text-white transition-colors duration-150",children:"back to home"})})]})]})}const vt=n.forwardRef(function({id:s,label:a,icon:i,hint:r,hintLink:o,className:l,...d},c){const m=n.useMemo(()=>`tw_${Math.random().toString(36).slice(2,12)}`,[]),[f,x]=n.useState(!0);return e.jsxs("label",{htmlFor:s,className:"auth-field",children:[e.jsxs("div",{className:"auth-field-row",children:[i&&e.jsx("span",{className:"auth-field-icon","aria-hidden":!0,children:e.jsx(i,{size:16})}),e.jsx("input",{...d,name:m,autoComplete:"off","data-tw-nofill":"1",onFocus:w=>{f&&x(!1),d.onFocus?.(w)},readOnly:f,id:s,ref:c,placeholder:" ",className:A("auth-field-input",l)}),e.jsx("span",{className:"auth-field-label",children:a})]}),(r||o)&&e.jsxs("div",{className:"auth-field-hint",children:[r&&e.jsx("span",{children:r}),o]})]})}),Ke="01234567890123456789".split("");function jt({text:t,className:s=""}){const a=n.useRef(null),i=n.useRef(""),r=i.current,o=[];for(let l=0;l<t.length;l++){const d=t[l];if(!/\d/.test(d)){o.push(e.jsx("span",{className:"inline-block",children:d},`s${l}`));continue}const c=/\d/.test(r?.[l])?Number(r[l]):0,f=((Number(d)-c)%10+10)%10;o.push(e.jsx("span",{className:"price-digit relative inline-block overflow-hidden",style:{height:"1em"},children:e.jsx("span",{className:"price-digit-track inline-block will-change-transform","data-prev":c,"data-delta":f,ref:x=>{x&&!x.style.transform&&(x.style.transform=`translateY(-${c}em)`)},children:Ke.map((x,w)=>e.jsx("span",{className:"block",children:x},`${w}${x}`))})},`d${l}`))}return n.useEffect(()=>{const l=a.current;if(!l)return;l.querySelectorAll(".price-digit-track").forEach((c,m)=>{const f=Number(c.dataset.prev||0),x=Number(c.dataset.delta||0);x!==0&&z.to(c,{y:`${-(f+x)}em`,duration:.45+x*.055,ease:"power3.inOut",delay:.05+m*.05,overwrite:"auto"})}),i.current=t},[t]),e.jsx("span",{ref:a,className:`price-roll inline-flex ${s}`,children:o})}const ze="tw:payment-sessions",V=2,Ve=5,Xe=30*24*60*60*1e3;function Te(){try{return typeof window>"u"||!window.localStorage?null:window.localStorage}catch{return null}}function me(){const t=Te();if(!t)return{v:V,sessions:[]};try{const s=t.getItem(ze);if(!s)return{v:V,sessions:[]};const a=JSON.parse(s);return!a||!Array.isArray(a.sessions)?{v:V,sessions:[]}:Number(a.v)!==V?{v:V,sessions:[]}:a}catch{return{v:V,sessions:[]}}}function Re(t){const s=Te();if(s)try{s.setItem(ze,JSON.stringify({v:V,sessions:t.sessions||[]}))}catch{}}function fe(t){const s=Date.now()-Xe;return t.filter(a=>Number(a.createdAt)>s&&a.publicToken)}function kt(t){if(!t||!t.publicToken)return;const s=me(),a=fe(s.sessions).filter(o=>String(o.publicToken)!==String(t.publicToken)),r=[{publicToken:String(t.publicToken),orderId:t.orderId??null,provider:t.provider||"unknown",lookup:t.lookup||null,plan:t.plan||null,amountCents:t.amountCents??null,currency:t.currency||null,email:t.email||null,payCurrency:t.payCurrency||null,confirmNonce:t.confirmNonce||null,createdAt:Date.now(),completed:!1,licenseKey:null},...a].slice(0,Ve);Re({sessions:r})}function Nt(t,s){if(!t)return;const a=me(),i=fe(a.sessions).map(r=>String(r.publicToken)===String(t)?{...r,completed:!0,licenseKey:s||r.licenseKey||null}:r);Re({sessions:i})}function St(t){if(!t)return null;const s=me();return fe(s.sessions).find(a=>String(a.publicToken)===String(t))||null}const Ye={btc:{name:"Bitcoin",symbol:"BTC"},ltc:{name:"Litecoin",symbol:"LTC"},eth:{name:"Ethereum",symbol:"ETH"},usdttrc20:{name:"USDT (TRC-20)",symbol:"USDT"},usdt:{name:"USDT",symbol:"USDT"},sol:{name:"Solana",symbol:"SOL"},xmr:{name:"Monero",symbol:"XMR"},usdc:{name:"USDC",symbol:"USDC"},doge:{name:"Dogecoin",symbol:"DOGE"}};function Je(t){const s=String(t||"").toLowerCase();return Ye[s]||{name:s.toUpperCase(),symbol:s.toUpperCase()}}function Ct({order:t,className:s=""}){const{push:a}=We(),i=String(t.pay_currency||"").toLowerCase(),r=Je(i),o=t.pay_address?String(t.pay_address).trim():"",l=t.pay_amount!=null?String(t.pay_amount).trim():"",d=Number(l.replace(/,/g,"")),c=typeof t.actually_paid=="number"&&Number.isFinite(t.actually_paid)?t.actually_paid:null,m=c!=null&&Number.isFinite(d)&&d>0?Math.min(100,c/d*100):0,[f,x]=n.useState(!1),[w,j]=n.useState(!1);async function u(){if(o)try{await navigator.clipboard.writeText(o),x(!0),a({variant:"success",title:"address copied"}),setTimeout(()=>x(!1),1800)}catch{a({variant:"error",title:"copy failed"})}}async function b(){if(l)try{await navigator.clipboard.writeText(l),j(!0),a({variant:"success",title:"amount copied"}),setTimeout(()=>j(!1),1800)}catch{a({variant:"error",title:"copy failed"})}}return!o&&!l?null:e.jsxs("div",{className:A("flex flex-col items-center",s),children:[o&&e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"p-3 rounded-3xl bg-white shadow-[0_22px_60px_-30px_rgb(0_0_0/0.55)]",children:e.jsx(_e,{value:o,size:188,level:"M",includeMargin:!1})})}),e.jsxs("div",{className:"flex flex-col items-center text-center gap-5 mt-6 w-full",children:[l&&e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("p",{className:"text-[0.9rem] text-text-dim",children:"amount"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:"text-[1.05rem] font-medium tracking-tight",children:[l," ",e.jsx("span",{className:"text-text-muted",children:r.symbol.toLowerCase()})]}),e.jsx("button",{type:"button",onClick:b,title:w?"copied":"copy amount",className:"inline-flex cursor-pointer select-none",children:w?e.jsx("span",{className:"text-success inline-flex",children:e.jsx(ge,{size:14})}):e.jsx("span",{className:"text-text-dim hover:text-text-primary transition-colors inline-flex",children:e.jsx(be,{size:14})})})]})]}),o&&e.jsxs("div",{className:"w-full flex flex-col items-center gap-1",children:[e.jsx("p",{className:"text-[0.9rem] text-text-dim",children:"address"}),e.jsxs("div",{className:"flex items-start gap-2 max-w-full px-2",children:[e.jsx("p",{className:"text-[13px] font-mono text-text-primary/95 break-all leading-relaxed",children:o}),e.jsx("button",{type:"button",onClick:u,title:f?"copied":"copy address",className:"shrink-0 inline-flex cursor-pointer select-none mt-0.5",children:f?e.jsx("span",{className:"text-success inline-flex",children:e.jsx(ge,{size:14})}):e.jsx("span",{className:"text-text-dim hover:text-text-primary transition-colors inline-flex",children:e.jsx(be,{size:14})})})]})]}),c!=null&&Number.isFinite(d)&&d>0&&c>0&&e.jsxs("div",{className:"w-full px-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-text-muted mb-2",children:[e.jsx("span",{children:"received"}),e.jsxs("span",{className:"tabular-nums",children:[c," / ",l," ",r.symbol.toLowerCase()]})]}),e.jsx("div",{className:"h-[3px] rounded-full bg-white/[0.06] overflow-hidden",children:e.jsx("div",{className:"h-full bg-accent-pink/80 transition-[width] duration-500",style:{width:`${m}%`}})})]})]})]})}const Ze=18;function Et(){const t=n.useRef(null);return xe(()=>{const s=z.matchMedia();return s.add("(prefers-reduced-motion: no-preference)",()=>{const a=z.utils.toArray(".tw-burst-dot");if(!a.length)return;const i=z.timeline();i.set(a,{x:0,y:0,scale:0,opacity:1,rotation:0}),a.forEach((r,o)=>{const l=o*.015,d=o/a.length*Math.PI*2+z.utils.random(-.18,.18),c=z.utils.random(70,130);i.to(r,{x:Math.cos(d)*c,y:Math.sin(d)*c*.7,scale:z.utils.random(.7,1.15),duration:.4,ease:"power3.out"},l);const m=z.utils.random(130,220),f=z.utils.random(-26,26),x=z.utils.random(.95,1.35);i.to(r,{y:`+=${m}`,x:`+=${f}`,rotation:z.utils.random(-140,140),duration:x,ease:"power2.in"},l+.38),i.to(r,{opacity:0,duration:.55,ease:"power1.in"},l+.38+x-.55)})}),s.add("(prefers-reduced-motion: reduce)",()=>{const a=z.utils.toArray(".tw-burst-dot");a.forEach((i,r)=>{const o=r/a.length*Math.PI*2,l=85;z.set(i,{x:Math.cos(o)*l,y:Math.sin(o)*l,scale:.85,opacity:1})})}),()=>s.revert()},{scope:t}),e.jsx("div",{ref:t,"aria-hidden":!0,className:"pointer-events-none absolute inset-0 grid place-items-center z-0",children:Array.from({length:Ze}).map((s,a)=>e.jsx("span",{className:`tw-burst-dot absolute w-2 h-2 rounded-full will-change-transform ${a%3===0?"bg-accent-pink":a%3===1?"bg-[rgb(var(--accent-mint))]":"bg-[rgb(var(--accent-purple))]"}`,style:{opacity:0}},a))})}const Qe=n.lazy(()=>Oe(()=>import("../pages/admin.js").then(t=>t.D),__vite__mapDeps([0])));function Mt({items:t,activeId:s,onSelect:a}){const{user:i,logout:r}=Q(),o=Ce();async function l(){await r(),o("/login",{replace:!0})}const d=i?.role==="admin",c=i?.username?.[0]?.toUpperCase()||"U";return e.jsxs("aside",{className:"hidden lg:flex w-[260px] flex-col shrink-0 sticky top-0 h-screen select-none z-10",style:{background:"#0e0e0e",borderRight:"1px solid rgba(255,255,255,0.05)"},children:[e.jsxs("div",{className:"px-5 pt-7 pb-6",children:[e.jsx("p",{className:"text-[19px] font-medium tracking-tight text-white/95 leading-none",children:"timewarp"}),e.jsx("p",{className:"text-[11px] uppercase tracking-[0.18em] text-text-dim mt-2 font-medium",children:"Dashboard"})]}),e.jsx("nav",{className:"flex-1 px-2.5 pt-1 pb-4 space-y-0.5",children:t.map(m=>{const f=m.icon,x=m.id===s;return e.jsxs("button",{type:"button",onClick:()=>a?.(m.id),className:A("w-full h-[44px] flex items-center gap-3 px-3 rounded-lg text-[15px] transition-colors",x?"bg-white/[0.07] text-white":"text-text-muted hover:text-text-primary hover:bg-white/[0.025]"),children:[e.jsx(f,{size:18,strokeWidth:x?2.2:1.85,className:A("shrink-0 transition-colors",x?"text-white":"text-text-dim")}),e.jsx("span",{className:"flex-1 text-left",children:m.label}),m.badge?e.jsx("span",{className:"inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-[11px] font-medium bg-accent-pink/15 text-accent-pink",children:m.badge}):null]},m.id)})}),e.jsxs("div",{className:"border-t border-white/[0.05] p-2.5 pt-3 space-y-0.5",children:[e.jsxs("div",{className:"flex items-center gap-3 px-2 py-2 mb-1",children:[e.jsx("div",{className:"w-10 h-10 rounded-full grid place-items-center shrink-0 text-[14px] font-medium bg-white/[0.06] text-white/85",children:c}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-[15px] text-white/90 truncate leading-tight font-medium",children:i?.username}),e.jsx("p",{className:"text-[11px] font-medium uppercase tracking-[0.16em] text-text-dim mt-1 leading-none",children:d?"Administrator":"User"})]})]}),e.jsxs(T,{to:"/",className:"w-full h-[40px] flex items-center gap-3 px-3 rounded-lg text-[14px] text-text-muted hover:text-text-primary hover:bg-white/[0.025] transition-colors",children:[e.jsx(Ee,{size:16,className:"text-text-dim"}),"Home"]}),d&&e.jsx(n.Suspense,{fallback:null,children:e.jsx(Qe,{})}),e.jsxs("button",{type:"button",onClick:l,className:"w-full h-[40px] flex items-center gap-3 px-3 rounded-lg text-[14px] text-text-muted hover:text-danger hover:bg-danger/[0.06] transition-colors",children:[e.jsx(Me,{size:16}),"Sign out"]})]})]})}function At({title:t,subtitle:s,variant:a="user"}){const{user:i}=Q();return e.jsx("header",{className:"lg:hidden sticky top-0 z-30 bg-[#0e0e0e]/90 backdrop-blur-xl border-b border-white/[0.05]",style:{paddingTop:"env(safe-area-inset-top, 0px)"},children:e.jsx("div",{className:"flex items-center justify-between gap-2 px-4 py-3",children:e.jsx(T,{to:"/",className:"flex items-center min-w-0",children:e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-[14px] font-medium tracking-tight text-white leading-tight truncate",children:t||"timewarp"}),(s||i)&&e.jsx("p",{className:A("text-[10px] uppercase tracking-[0.16em] truncate mt-0.5",a==="admin"?"text-accent-pink":"text-text-dim"),children:s||(a==="admin"?`admin · ${i?.username}`:i?.username)})]})})})})}function zt({items:t,active:s,onSelect:a}){return e.jsx("nav",{className:"lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-white/[0.05]",style:{paddingBottom:"env(safe-area-inset-bottom, 0px)"},children:e.jsx("ul",{className:"flex items-stretch justify-around max-w-xl mx-auto",children:t.map(i=>{const r=i.icon,o=i.id===s;return e.jsx("li",{className:"flex-1",children:e.jsxs("button",{type:"button",onClick:()=>a(i.id),className:A("w-full flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium tracking-wide transition relative",o?"text-white":"text-text-muted hover:text-text-primary"),children:[o&&e.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-b-full bg-white/85"}),e.jsx(r,{size:19,strokeWidth:o?2.1:1.75}),e.jsx("span",{className:"leading-none",children:i.label})]})},i.id)})})})}function et({tabs:t,activeTab:s,onTabChange:a}){const[i,r]=n.useState(null),[o,l]=n.useState({top:0,width:0}),[d,c]=n.useState(!1),m=n.useRef([]),x=n.useCallback(u=>{const b=m.current[u];if(!b)return;const p=b.querySelector(".tab-icon"),y=b.querySelector(".tab-label");if(!p||!y)return;const g=p.offsetWidth,N=y.offsetWidth,R=g+10+N;l({top:b.offsetTop,width:Math.round(R+22)})},[]);n.useLayoutEffect(()=>{x(s)},[s,x]),n.useEffect(()=>{const u=setTimeout(()=>{x(s),c(!0)},30);return()=>clearTimeout(u)},[]);return e.jsxs("div",{className:"sidebar",children:[e.jsx("div",{className:"sidebar-hourglass","aria-hidden":!0,children:e.jsx("i",{className:"fa-solid fa-hourglass-half"})}),e.jsxs("div",{className:"sidebar-tabs",children:[e.jsx("div",{className:"tab-pill",style:{top:o.top+3,width:o.width,height:41,left:10,transition:d?"top 0.2s cubic-bezier(0.22, 1, 0.36, 1), width 0.2s cubic-bezier(0.22, 1, 0.36, 1)":"none",willChange:"top, width"}}),t.map((u,b)=>{const p=s===b,g=p?30:i===b?220:120;return e.jsx("div",{ref:N=>{m.current[b]=N},className:"sidebar-tab",onClick:()=>a(b),onMouseEnter:()=>r(b),onMouseLeave:()=>r(null),children:e.jsxs("div",{className:"tab-content",children:[e.jsx("i",{className:`tab-icon fa-solid ${u.icon}`,style:{color:`rgb(${g},${g},${g})`,transition:"color 0.12s ease"}}),e.jsx("span",{className:"tab-label",style:{color:`rgb(${g},${g},${g})`,fontWeight:600,transition:"color 0.12s ease"},children:u.name})]})},b)})]}),e.jsxs("div",{className:"sidebar-search",children:[e.jsx("i",{className:"fa-solid fa-magnifying-glass sidebar-search-icon"}),e.jsx("input",{className:"sidebar-search-input",placeholder:"Search",readOnly:!0,tabIndex:-1,onFocus:u=>u.target.blur()})]}),e.jsxs("div",{className:"sidebar-profile",children:[e.jsx("img",{src:"/steve.png",alt:"",draggable:!1,className:"sidebar-profile-avatar"}),e.jsxs("div",{className:"sidebar-profile-info",children:[e.jsx("span",{className:"sidebar-profile-name",children:"You"}),e.jsx("span",{className:"sidebar-profile-sub",children:"Lifetime"})]})]}),e.jsx("style",{children:`
        .sidebar {
          width: var(--sidebar-width);
          background: var(--bg-sidebar);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          user-select: none;
          padding-top: 14px;
          position: relative;
          overflow: hidden;
        }
        .sidebar-hourglass {
          position: absolute;
          top: 40px;
          right: -235px;
          font-size: 320px;
          line-height: 1;
          color: rgb(170, 170, 170);
          opacity: 0.176;
          pointer-events: none;
          z-index: 0;
        }
        .sidebar-tabs {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .sidebar-search {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 12px 4px;
          height: 34px;
          padding: 0 6px;
          background: #181818;
          border: 1px solid #2d2d2d;
          border-radius: 6px;
          flex-shrink: 0;
          cursor: default;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .sidebar-search:hover {
          background: #202020;
          border-color: #5a5a60;
        }
        .sidebar-search-icon {
          font-size: 13px;
          color: rgb(120, 120, 120);
        }
        .sidebar-search-input {
          flex: 1;
          min-width: 0;
          border: none;
          background: transparent;
          font-size: 12px;
          color: var(--text);
          cursor: default;
        }
        .sidebar-search-input::placeholder {
          color: var(--text-dim);
        }
        .sidebar-profile {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 8px 12px 14px;
          flex-shrink: 0;
        }
        .sidebar-profile-avatar {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          image-rendering: pixelated;
          flex-shrink: 0;
        }
        .sidebar-profile-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .sidebar-profile-name {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-bright);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .sidebar-profile-sub {
          font-size: 10px;
          color: var(--text-dim);
        }
        .tab-pill {
          position: absolute;
          background: var(--accent);
          border-radius: 20px;
          z-index: 0;
          pointer-events: none;
        }
        .sidebar-tab {
          position: relative;
          height: var(--tab-height);
          display: flex;
          align-items: center;
          cursor: pointer;
          z-index: 1;
        }
        .tab-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 20px;
        }
        .tab-icon {
          font-size: 19px;
          width: 20px;
          text-align: center;
          flex-shrink: 0;
          text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
        }
        .tab-label {
          font-size: 15px;
          white-space: nowrap;
          text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
        }
      `})]})}function G(t){return{t:t?1:0,squish:0,triggerSquish:()=>{}}}function tt({tab:t,tabIdx:s,moduleStates:a,onToggle:i,onOpenSettings:r}){return e.jsxs("div",{className:"card-list",children:[t.modules.map((o,l)=>e.jsx(st,{name:o.name,description:o.description,enabled:a[o.name]??!1,index:l,gearOnly:!!o.gearOnly,noGear:!!o.noGear,onToggle:()=>i(o.name),onGear:()=>r(s,l)},o.name)),e.jsx("style",{children:`
        .card-list {
          display: flex;
          flex-direction: column;
          gap: var(--card-spacing);
          padding-bottom: 8px;
        }
      `})]})}const st=n.memo(function st({name:t,description:s,enabled:a,index:i,onToggle:r,onGear:o,gearOnly:l=!1,noGear:d=!1}){const[c,m]=n.useState(!1),[f,x]=n.useState(!1),j=S=>{S.stopPropagation(),r()};return e.jsxs("div",{className:"module-card",onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),style:{background:c?"#222222":"#1c1c1c"},children:[e.jsxs("div",{className:"card-text",children:[e.jsx("div",{className:"card-name",style:{color:a?"var(--accent)":"#ebebeb",transition:"color 0.2s ease"},children:t}),e.jsx("div",{className:"card-desc",style:{color:a?"rgb(135,135,135)":"rgb(105,105,105)",transition:"color 0.2s ease"},children:s})]}),e.jsxs("div",{className:"card-right",children:[!d&&e.jsx("div",{className:"card-gear",onClick:S=>{S.stopPropagation(),o()},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),style:{color:f?"#dcdcdc":"#555"},children:e.jsx("i",{className:"fa-solid fa-gear"})}),!l&&e.jsx("div",{className:"card-toggle",onClick:j,children:e.jsx("div",{className:"card-toggle-track",style:{background:a?"var(--accent)":"#1a1a1a",transition:"background 0.2s cubic-bezier(0.22, 1, 0.36, 1)"},children:e.jsx("div",{style:{width:17,height:17,borderRadius:8.5,background:a?"#181818":"#3a3a3a",position:"absolute",top:"50%",left:a?31.9:11.5,transform:"translate(-50%, -50%)",boxShadow:"0 1px 2px rgba(0,0,0,0.3)",transition:"left 0.22s cubic-bezier(0.34, 1.35, 0.64, 1), background-color 0.2s ease",willChange:"left"}})})})]}),e.jsx("style",{children:`
        .module-card {
          height: var(--card-height);
          border-radius: var(--card-rounding);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px 0 22px;
          transition: background 0.12s ease;
          border: 0.8px solid rgba(42, 42, 42, 0.24);
          position: relative;
          cursor: default;
          box-shadow:
            0 1px 4px rgba(0,0,0,0.18),
            0 3px 8px rgba(0,0,0,0.12),
            0 5px 14px rgba(0,0,0,0.06);
        }
        .card-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
          flex: 1;
        }
        .card-name {
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .card-desc {
          font-size: 11.5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-right {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          margin-left: 16px;
        }
        .card-gear {
          font-size: 16px;
          transition: color 0.15s ease;
          padding: 8px;
          cursor: pointer;
        }
        .card-toggle {
          cursor: pointer;
          padding: 4px 0;
        }
        .card-toggle-track {
          width: 45px;
          height: 25px;
          border-radius: 12.5px;
          border: 0.8px solid #2a2a2a;
          position: relative;
        }
      `})]})} );const ke=["this is a web preview, not a game cheat lol","CSS was not designed for this kind of abuse","have you tried turning it off and on again?","ToDo: implement settings","bro im not rewriting imgui in javascript","gave up this","if you stare long enough, the settings will appear","we put all our budget into the toggle animation sorry","buy the client to actually see the settings lmao","settings are a premium feature :( sorry","you get what you pay for","pls buy the client and support us :3","this is awesome","its 3 am bro im not doing ts","even ai refused to make this","yeah bro im developing rn","a lot of settings","this module is crazy","where did they go?","please show up :pray:","son","sonion"];function nt(){return ke[Math.floor(Math.random()*ke.length)]}function Ne({module:t,onClose:s}){const[a,i]=n.useState(!1),[r]=n.useState(nt);return e.jsxs(oe.div,{className:"sp-root",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.12},children:[e.jsx("div",{className:"sp-overlay",onClick:s}),e.jsx("div",{className:"sp-position-wrap",children:e.jsxs(oe.div,{className:"sp-popup",initial:{scale:.88},animate:{scale:1},exit:{scale:.88},transition:{duration:.18,ease:[.4,0,.2,1]},onClick:o=>o.stopPropagation(),children:[e.jsxs("div",{className:"sp-title-bar",children:[e.jsx("span",{className:"sp-title",children:t.name}),e.jsx("div",{className:"sp-close-btn",onClick:s,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{background:a?"rgb(55,55,55)":"rgb(38,38,38)"},children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 10 10",children:[e.jsx("line",{x1:"1",y1:"1",x2:"9",y2:"9",stroke:a?"#fff":"#8c8c8c",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"9",y1:"1",x2:"1",y2:"9",stroke:a?"#fff":"#8c8c8c",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),e.jsx("div",{className:"sp-separator"}),e.jsxs("div",{className:"sp-empty-body",children:[e.jsx("span",{className:"sp-empty-icon",children:e.jsx("i",{className:"fa-solid fa-screwdriver-wrench"})}),e.jsx("span",{className:"sp-empty-text",children:r})]})]})}),e.jsx("style",{children:`
        .sp-root {
          position: absolute;
          inset: 0;
          z-index: 100;
          border-radius: var(--menu-rounding);
          overflow: hidden;
        }
        .sp-overlay {
          position: absolute;
          inset: 0;
          background: transparent;
        }
        .sp-position-wrap {
          position: absolute;
          top: var(--header-height);
          left: var(--sidebar-width);
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          pointer-events: none;
        }
        .sp-popup {
          width: 544px;
          height: 550px;
          background: #121212;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
          pointer-events: auto;
          box-shadow:
            0 2px 6px rgba(0,0,0,0.12),
            0 6px 18px rgba(0,0,0,0.12),
            0 12px 36px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .sp-title-bar {
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;
          flex-shrink: 0;
        }
        .sp-title {
          font-size: 22px;
          font-weight: 700;
          color: #ebebeb;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          letter-spacing: -0.2px;
        }
        .sp-close-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.12s ease;
          flex-shrink: 0;
        }
        .sp-separator {
          height: 1px;
          margin: 0 25px;
          background: rgba(42, 42, 42, 0.7);
          flex-shrink: 0;
        }
        .sp-empty-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 20px;
          opacity: 0.55;
        }
        .sp-empty-icon {
          font-size: 32px;
          color: #696969;
        }
        .sp-empty-text {
          font-size: 14px;
          color: #696969;
          text-align: center;
          font-style: italic;
          line-height: 1.5;
          max-width: 320px;
        }
      `})]})}let U=null;const de=new Map;function re({label:t,value:s,options:a,onChange:i}){const[r,o]=n.useState(!1),[l,d]=n.useState(0),[c,m]=n.useState(0),[f,x]=n.useState(0),[w,j]=n.useState(a.map(()=>0)),u=n.useRef(null),b=n.useRef({target:-1,anim:0,presence:0});n.useRef(null);const p=n.useRef(null),y=n.useRef(null),g=n.useRef(),N=n.useRef(`combo-${Math.random()}`).current;n.useEffect(()=>(de.set(N,()=>o(!1)),()=>{de.delete(N),U===N&&(U=null)}),[N]),n.useEffect(()=>{let h=Date.now();const v=()=>{const S=Date.now(),C=Math.min((S-h)/1e3,.1);h=S;const M=1-Math.exp(-14*C),P=1-Math.exp(-25*C),H=r?a.length*26+6:0;d(D=>{const W=D+(H-D)*M;return Math.abs(W-H)<.05?H:W});const $=r?1:0;m(D=>{const W=D+($-D)*P;return Math.abs(W-$)<.05?$:W}),x(r?180:0);const I=26,k=3,E=b.current,B=E.target;B>=0&&(E.anim+=(B-E.anim)*(1-Math.exp(-25*C)),Math.abs(E.anim-B)<.005&&(E.anim=B));const ee=B>=0?1:0;E.presence+=(ee-E.presence)*(1-Math.exp(-22*C)),Math.abs(E.presence-ee)<.005&&(E.presence=ee);const F=u.current;if(F&&E.presence>.01){const D=E.anim,W=a.length-1,Z=k-1;let te=D<1?Math.min(Z,Z*(1-D)):0,he=D>W-1?Math.min(Z,Z*(D-(W-1))):0;const K=1,se=k+D*I-te,ne=I+te+he,ie=18+6*E.presence;F.style.opacity=String(E.presence),F.style.top=`${se-K}px`,F.style.height=`${ne+K*2}px`,F.style.left=`${K}px`,F.style.right=`${K}px`,F.style.borderRadius="5px",F.style.background=`rgb(${ie}, ${ie}, ${ie})`}else F&&(F.style.opacity="0");g.current=requestAnimationFrame(v)};return g.current=requestAnimationFrame(v),()=>{g.current&&cancelAnimationFrame(g.current)}},[r,a.length]),n.useEffect(()=>{if(!r)return;const h=v=>{p.current&&!p.current.contains(v.target)&&(o(!1),U=null)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[r]);const L=()=>{if(r)o(!1),U=null;else{if(U&&U!==N){const h=de.get(U);h&&h()}o(!0),U=N}},R=(h,v)=>{i(h),o(!1),U=null},_=(h,v)=>{b.current.target=v?h:-1,j(S=>{const C=[...S],M=v?1:0,P=C[h],q=(M-P)*.3;return C[h]=Math.abs(M-P)<.001?M:P+q,C})};return e.jsxs("div",{className:"widget-combobox-wrap",ref:p,children:[e.jsxs("div",{className:"widget-combobox",onClick:L,style:{borderColor:`rgba(38, 38, 38, ${1+c*.3})`},children:[e.jsx("span",{className:"cb-label",children:t}),e.jsxs("div",{className:"cb-right",children:[e.jsx("span",{className:"cb-value",children:s}),e.jsx("div",{className:"cb-sep"}),e.jsx("svg",{className:"cb-arrow",width:"9",height:"6",viewBox:"0 0 9 6",style:{transform:`rotate(${f}deg)`,color:`rgb(${120+c*80}, ${120+c*80}, ${120+c*80})`},children:e.jsx("polyline",{points:"1,1 4.5,5 8,1",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]}),l>.1&&e.jsxs("div",{ref:y,className:"cb-dropdown",style:{height:l,opacity:Math.min(l/(a.length*26+6)*6.5,1)},children:[e.jsx("div",{ref:u,className:"cb-indicator",style:{opacity:0}}),a.map((h,v)=>{const S=h===s,C=w[v]||0,M=S?"var(--accent)":`rgb(${105+C*95}, ${105+C*95}, ${105+C*95})`;return e.jsx("div",{className:"cb-item",onClick:()=>R(h),onMouseEnter:()=>_(v,!0),onMouseLeave:()=>_(v,!1),style:{color:M,position:"relative"},children:h},h)})]}),e.jsx("style",{children:`
        .widget-combobox-wrap {
          position: relative;
          user-select: none;
        }
        .widget-combobox {
          height: 38px;
          background: #181818;
          border: 1px solid #2d2d2d;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0 0 10px;
          cursor: pointer;
          transition: background 0.15s ease, border-color 0.15s ease;
        }
        .widget-combobox:hover {
          background: #202020;
          border-color: #3a3a3a;
        }
        .cb-label {
          font-size: 12px;
          font-weight: 600;
          color: #dcdcdc;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .cb-right {
          display: flex;
          align-items: center;
          height: 100%;
        }
        .cb-value {
          font-size: 14px;
          color: #b4b4b4;
          font-weight: 600;
          padding: 0 10px;
          font-family: var(--font-main);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .cb-sep {
          width: 1px;
          height: 60%;
          background: #323232;
        }
        .cb-arrow {
          margin: 0 10px;
          transition: transform 0.2s ease-out;
        }
        .cb-dropdown {
          position: absolute;
          top: calc(100% + 2px);
          left: 0;
          right: 0;
          background: #121212;
          border: 1px solid #2d2d2d;
          border-radius: 6px;
          overflow: hidden;
          z-index: 50;
          transition: opacity 0.08s ease;
          font-family: var(--font-main);
        }
        .cb-indicator {
          position: absolute;
          opacity: 0;
          z-index: 0;
          pointer-events: none;
        }
        .cb-item {
          height: 26px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-main);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
          transition: color 0.12s ease;
        }
      `})]})}const at=[];function rt({onOpenFriendSettings:t}){const[s,a]=n.useState(at),[i,r]=n.useState(""),[o,l]=n.useState(!1),[d,c]=n.useState("Name");n.useEffect(()=>{l(i.trim().length>0)},[i]);const[m,f]=n.useState(!0),[x,w]=n.useState(!1),[j,u]=n.useState(!0),[b,p]=n.useState(!0),[y,g]=n.useState(!1),[N,L]=n.useState(!1),R=G(m),_=G(x),h=G(j),v=G(b),S=G(y),C=G(N),[M,P]=n.useState("#87CEEB"),[q,J]=n.useState("#87CEEB"),H=()=>{const k=i.trim();!k||s.includes(k)||(a(E=>[...E,k]),r(""))},$=k=>{a(E=>E.filter(B=>B!==k))},I=(k,E,B)=>{const te=12.5+18.4*k.t,K=4*k.t*(1-k.t)*4.5,se=18+K*2,ne=18-K;return e.jsx("div",{className:"ft-toggle",onClick:()=>{B()},children:e.jsx("div",{className:"ft-toggle-track",style:{background:E?"var(--accent)":"#1a1a1a"},children:e.jsx("div",{className:"ft-toggle-knob",style:{width:se,height:ne,borderRadius:Math.min(se,ne)/2,left:te,background:E?"#181818":"#3a3a3a",transform:"translate(-50%, -50%)"}})})})};return e.jsxs("div",{className:"ft",children:[e.jsx("span",{className:"ft-heading",children:"Settings"}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Add friends with keybind"}),I(R,m,()=>f(!m))]}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Add friends by radius"}),I(_,x,()=>w(!x))]}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Ignore visuals"}),I(h,j,()=>u(!j))]}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Ignore combat"}),I(v,b,()=>p(!b))]}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Override Player ESP"}),e.jsxs("div",{className:"ft-toggle-right",children:[e.jsxs("div",{className:"ft-color-picker-wrap",children:[e.jsx("input",{type:"color",value:M,onChange:k=>P(k.target.value),className:"ft-color-input"}),e.jsx("div",{className:"ft-color-swatch",style:{background:M}})]}),I(S,y,()=>g(!y))]})]}),e.jsxs("div",{className:"ft-toggle-row",children:[e.jsx("span",{className:"ft-toggle-label",children:"Override Indicators"}),e.jsxs("div",{className:"ft-toggle-right",children:[e.jsxs("div",{className:"ft-color-picker-wrap",children:[e.jsx("input",{type:"color",value:q,onChange:k=>J(k.target.value),className:"ft-color-input"}),e.jsx("div",{className:"ft-color-swatch",style:{background:q}})]}),I(C,N,()=>L(!N))]})]}),e.jsx("div",{className:"ft-spacer"}),e.jsx(re,{label:"Mode",value:d,options:["Name","Entity ID"],onChange:c}),e.jsx("div",{className:"ft-spacer"}),d==="Name"&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ft-section",children:"Add friend"}),e.jsxs("div",{className:"ft-input-wrap",children:[e.jsx("input",{className:"ft-input",placeholder:"Enter player name...",maxLength:16,value:i,onChange:k=>r(k.target.value.replace(/[^a-zA-Z0-9_]/g,"")),onKeyDown:k=>{k.key==="Enter"&&H()}}),o&&e.jsx("div",{className:"ft-input-arrow",onClick:H,children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]})]}),e.jsx("span",{className:"ft-section",children:"Friend list"}),s.length===0?e.jsxs("div",{className:"ft-empty",children:[e.jsx("i",{className:"fa-regular fa-face-frown ft-empty-icon"}),e.jsx("span",{className:"ft-empty-text",children:"No friends added yet"})]}):e.jsx("div",{className:"ft-list",children:s.map(k=>e.jsxs("div",{className:"ft-card",children:[e.jsx("span",{className:"ft-card-name",children:k}),e.jsxs("div",{className:"ft-card-right",children:[e.jsx("div",{className:"ft-card-btn ft-card-dots",onClick:()=>t(k),children:e.jsx("i",{className:"fa-solid fa-ellipsis"})}),e.jsx("div",{className:"ft-card-btn ft-card-x",onClick:()=>$(k),children:e.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 10 10",children:[e.jsx("line",{x1:"1",y1:"1",x2:"9",y2:"9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("line",{x1:"9",y1:"1",x2:"1",y2:"9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]})]},k))}),e.jsx("style",{children:`
        .ft {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ft-heading {
          font-size: 22px;
          font-weight: 700;
          color: #ebebeb;
          margin-bottom: 10px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .ft-section {
          font-size: 11px;
          font-weight: 500;
          color: #505050;
          margin-bottom: 6px;
          margin-top: 4px;
        }
        .ft-spacer { height: 8px; }
        
        .ft-toggle-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 28px;
          margin-bottom: 4px;
        }
        .ft-toggle-label {
          font-size: 12px;
          font-weight: 600;
          color: #7d7d7d;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .ft-toggle-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .ft-toggle {
          cursor: pointer;
          padding: 4px 0;
        }
        .ft-toggle-track {
          width: 45px;
          height: 25px;
          border-radius: 12.5px;
          border: 0.8px solid #2a2a2a;
          position: relative;
          transition: background 0.18s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ft-toggle-knob {
          width: 18px;
          height: 18px;
          border-radius: 9px;
          position: absolute;
          top: 50%;
          box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }
        
        .ft-color-picker-wrap {
          position: relative;
        }
        .ft-color-input {
          position: absolute;
          width: 24px;
          height: 24px;
          opacity: 0;
          cursor: pointer;
        }
        .ft-color-swatch {
          width: 24px;
          height: 24px;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.1);
          cursor: pointer;
        }
        
        .ft-input-wrap {
          height: 40px;
          background: #181818;
          border: 0.8px solid #2d2d2d;
          border-radius: 6px;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          position: relative;
          transition: border-color 0.15s ease;
        }
        .ft-input-wrap:focus-within {
          border-color: rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.45);
        }
        .ft-input {
          flex: 1;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          padding: 0 10px;
          font-size: 14px;
          font-weight: 600;
          color: #d7d7d7;
          font-family: inherit;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .ft-input::placeholder { 
          color: #555;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .ft-input-arrow {
          width: 28px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #646464;
          cursor: pointer;
          font-size: 12px;
          transition: color 0.12s ease, opacity 0.15s ease;
          opacity: 0;
          animation: fadeInArrow 0.15s ease forwards;
        }
        .ft-input-arrow:hover { color: var(--accent); }
        @keyframes fadeInArrow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ft-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 120px;
        }
        .ft-empty-icon {
          font-size: 28px;
          color: #373737;
        }
        .ft-empty-text {
          font-size: 15px;
          color: #373737;
        }
        .ft-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ft-card {
          height: 42px;
          background: #1a1a1a;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10px 0 12px;
          transition: background 0.1s ease;
        }
        .ft-card:hover { background: #202020; }
        .ft-card-name {
          font-size: 12px;
          font-weight: 600;
          color: #d7d7d7;
        }
        .ft-card-right {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ft-card-btn {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.12s ease;
        }
        .ft-card-dots {
          color: #464646;
          font-size: 13px;
        }
        .ft-card-dots:hover { color: #b4b4b4; }
        .ft-card-x {
          color: #464646;
        }
        .ft-card-x:hover { color: #c84646; }
      `})]})}const ot=["mmc","practice"],it=1500;function lt(){const[t,s]=n.useState(ot),[a,i]=n.useState("mmc"),[r,o]=n.useState(""),[l,d]=n.useState(!1),[c,m]=n.useState({}),f=n.useRef({}),x=n.useRef({});n.useEffect(()=>{d(r.trim().length>0)},[r]);const w=()=>{const p=r.trim();!p||t.includes(p)||(s(y=>[...y,p]),i(p),o(""))},j=p=>{x.current[p]=Date.now();const y=()=>{const g=Date.now()-x.current[p],N=Math.min(g/it,1);m(L=>({...L,[p]:N})),N>=1?(b(p),delete f.current[p],delete x.current[p]):f.current[p]=requestAnimationFrame(y)};f.current[p]=requestAnimationFrame(y)},u=p=>{f.current[p]&&(cancelAnimationFrame(f.current[p]),delete f.current[p],delete x.current[p]);const y=setInterval(()=>{m(g=>{const N=g[p]||0;return N<=.01?(clearInterval(y),{...g,[p]:0}):{...g,[p]:N*.85}})},16)},b=p=>{s(y=>y.filter(g=>g!==p)),a===p&&t.length>1&&i(t.find(y=>y!==p)||""),m(y=>{const g={...y};return delete g[p],g})};return n.useEffect(()=>()=>{Object.values(f.current).forEach(p=>cancelAnimationFrame(p))},[]),e.jsxs("div",{className:"ct",children:[e.jsx("span",{className:"ct-heading",children:"Configs"}),e.jsx("span",{className:"ct-section",children:"New config"}),e.jsxs("div",{className:"ct-input-wrap",children:[e.jsx("input",{className:"ct-input",placeholder:"Enter config name...",maxLength:32,value:r,onChange:p=>o(p.target.value.replace(/[^a-zA-Z0-9_ -]/g,"")),onKeyDown:p=>{p.key==="Enter"&&w()}}),l&&e.jsx("div",{className:"ct-input-arrow",onClick:w,children:e.jsx("i",{className:"fa-solid fa-arrow-right"})})]}),e.jsxs("div",{className:"ct-section-row",children:[e.jsx("span",{className:"ct-section",children:"Saved configs"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("span",{className:"ct-slots",children:"0 / 10"}),e.jsx("i",{className:"fa-solid fa-arrows-rotate ct-folder-icon"})]})]}),t.length===0?e.jsxs("div",{className:"ct-empty",children:[e.jsx("i",{className:"fa-regular fa-face-frown ct-empty-icon"}),e.jsx("span",{className:"ct-empty-text",children:"No configs saved yet"})]}):e.jsx("div",{className:"ct-list",children:t.map(p=>{const y=p===a,g=c[p]||0;return e.jsxs("div",{className:"ct-row",children:[e.jsx("span",{className:"ct-row-name",style:{color:y?"var(--accent)":"#ebebeb"},children:p}),e.jsxs("div",{className:"ct-row-actions",children:[e.jsx("div",{className:"ct-action-btn",title:"Load",onClick:()=>i(p),children:e.jsx("i",{className:"fa-solid fa-arrow-down"})}),e.jsx("div",{className:"ct-action-btn",title:"Save",children:e.jsx("i",{className:"fa-solid fa-floppy-disk"})}),e.jsxs("div",{className:"ct-action-btn ct-action-del",title:"Hold to delete",onMouseDown:()=>j(p),onMouseUp:()=>u(p),onMouseLeave:()=>u(p),style:{position:"relative"},children:[e.jsx("i",{className:"fa-solid fa-trash-can"}),g>.01&&e.jsx("svg",{className:"ct-delete-progress",viewBox:"0 0 32 32",style:{position:"absolute",width:"28px",height:"28px",top:"50%",left:"50%",transform:"translate(-50%, -50%)",pointerEvents:"none"},children:e.jsx("circle",{cx:"16",cy:"16",r:"14",fill:"none",stroke:"#dc4646",strokeWidth:"2",strokeDasharray:`${g*87.96} 87.96`,strokeDashoffset:"0",transform:"rotate(-90 16 16)",style:{opacity:.2+g*.6,transition:"none"}})})]})]})]},p)})}),e.jsx("style",{children:`
        .ct {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .ct-heading {
          font-size: 22px;
          font-weight: 700;
          color: #ebebeb;
          margin-bottom: 10px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .ct-section {
          font-size: 11px;
          font-weight: 500;
          color: #505050;
          margin-bottom: 6px;
          margin-top: 4px;
        }
        .ct-section-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .ct-folder-icon {
          font-size: 11px;
          color: #505050;
          cursor: pointer;
          transition: color 0.12s ease;
        }
        .ct-slots {
          font-size: 12px;
          color: #505050;
        }
        .ct-input-wrap {
          height: 40px;
          background: #181818;
          border: 1.2px solid #2d2d2d;
          border-radius: 6px;
          display: flex;
          align-items: center;
          margin-bottom: 12px;
          position: relative;
          transition: border-color 0.15s ease;
        }
        .ct-input-wrap:focus-within {
          border-color: rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.7);
        }
        .ct-input {
          flex: 1;
          height: 100%;
          background: transparent;
          border: none;
          outline: none;
          padding: 0 10px;
          font-size: 14px;
          font-weight: 600;
          color: #d7d7d7;
          font-family: inherit;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .ct-input::placeholder { 
          color: #555;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .ct-input-arrow {
          width: 28px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #646464;
          cursor: pointer;
          font-size: 12px;
          transition: color 0.12s ease, opacity 0.15s ease;
          opacity: 0;
          animation: fadeInArrow 0.15s ease forwards;
        }
        .ct-input-arrow:hover { color: var(--accent); }
        @keyframes fadeInArrow {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ct-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 120px;
        }
        .ct-empty-icon {
          font-size: 42px;
          color: #373737;
        }
        .ct-empty-text {
          font-size: 17px;
          color: #373737;
        }
        .ct-list {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .ct-row {
          height: 40px;
          background: #161616;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8px 0 12px;
          transition: background 0.12s ease;
        }
        .ct-row:hover { background: #1e1e1e; }
        .ct-row-name {
          font-size: 12px;
          font-weight: 600;
        }
        .ct-row-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ct-action-btn {
          width: 26px;
          height: 24px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #464646;
          font-size: 13px;
          background: transparent;
          transition: all 0.12s ease;
        }
        .ct-action-btn:hover {
          color: #b4b4b4;
        }
        .ct-action-btn:nth-child(1):hover {
          color: var(--accent);
        }
        .ct-action-del:hover {
          color: #dc4c4c;
        }
        .ct-delete-progress {
          filter: drop-shadow(0 0 2px rgba(220, 70, 70, 0.4));
        }
      `})]})}function O({label:t,value:s,onChange:a}){const{t:i}=G(s),r=()=>{a(!s)},o=16,l=42,d=.8,c=3,m=l-d*2,f=c+o/2+(m-c*2-o)*i,w=4*i*(1-i)*4.5,j=o+w*2,u=o-w;return e.jsxs("div",{className:"widget-toggle",onClick:r,children:[e.jsx("span",{className:"toggle-label",style:{color:s?"var(--text-bright)":"var(--text)"},children:t}),e.jsx("div",{className:"tw-toggle-track",style:{background:s?"var(--accent)":"#1a1a1a",transition:"background 0.2s ease"},children:e.jsx("div",{style:{width:j,height:u,borderRadius:Math.min(j,u)/2,background:`rgb(${Math.round(58-34*i)},${Math.round(58-34*i)},${Math.round(58-34*i)})`,position:"absolute",top:"50%",left:f,transform:"translate(-50%, -50%)",boxShadow:"0 1px 3px rgba(0,0,0,0.3)"}})}),e.jsx("style",{children:`
        .widget-toggle {
          display: flex; align-items: center; justify-content: space-between;
          height: 30px; cursor: pointer; user-select: none;
        }
        .toggle-label {
          font-size: 12px; font-weight: 600;
          transition: color 0.15s ease;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .tw-toggle-track {
          width: 42px; height: 24px; border-radius: 12px;
          border: 0.8px solid #2a2a2a; position: relative; flex-shrink: 0;
        }
      `})]})}function ct({label:t,color:s,onColorChange:a}){const i=n.useRef(null),r=o=>{const l=o.target.value;i.current||(i.current=requestAnimationFrame(()=>{a(l),i.current=null}))};return e.jsxs("div",{className:"widget-color-picker",children:[e.jsx("span",{className:"cp-label",children:t}),e.jsxs("div",{className:"cp-right",children:[e.jsx("input",{type:"color",value:s,onChange:r,className:"cp-input"}),e.jsx("div",{className:"cp-swatch",style:{background:s}})]}),e.jsx("style",{children:`
        .widget-color-picker {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 26px;
          user-select: none;
        }
        .cp-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .cp-right {
          position: relative;
        }
        .cp-input {
          position: absolute;
          width: 24px;
          height: 24px;
          opacity: 0;
          cursor: pointer;
        }
        .cp-swatch {
          width: 24px;
          height: 24px;
          border-radius: 5px;
          border: 1px solid rgba(255,255,255,0.1);
          pointer-events: none;
        }
      `})]})}function dt({label:t,value:s}){return e.jsxs("div",{className:"widget-keybind",children:[e.jsx("span",{className:"kb-label",children:t}),e.jsx("div",{className:"kb-badge",children:s}),e.jsx("style",{children:`
        .widget-keybind {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 30px;
          user-select: none;
        }
        .kb-label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text);
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .kb-badge {
          height: 24px;
          padding: 0 12px;
          background: #1a1a1a;
          border: 0.8px solid #2a2a2a;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #b4b4b4;
          letter-spacing: 0.5px;
        }
      `})]})}function ut({accentColor:t,onAccentChange:s,showScrollbar:a,onShowScrollbar:i}){const[r,o]=n.useState("Default"),[l,d]=n.useState(!0),[c,m]=n.useState("Default"),[f,x]=n.useState("Bottom right"),[w,j]=n.useState(!1),[u,b]=n.useState(!0),[p,y]=n.useState(!0),[g,N]=n.useState(!0),[L,R]=n.useState(!0),[_,h]=n.useState(!0),[v,S]=n.useState(!1),[C,M]=n.useState(!1),[P,q]=n.useState(0),[J,H]=n.useState(!1);return n.useEffect(()=>{if(J){const $=setInterval(()=>{q(I=>{const k=I+.02;return k>=1?(clearInterval($),1):k})},16);return()=>clearInterval($)}else{const $=setInterval(()=>{q(I=>{const k=I-.05;return k<=0?(clearInterval($),0):k})},16);return()=>clearInterval($)}},[J]),e.jsxs("div",{className:"settings-tab",children:[e.jsx("div",{className:"settings-header-row",children:e.jsx("span",{className:"settings-title",children:"Settings"})}),e.jsx("div",{className:"st-cat",children:"General"}),e.jsx(dt,{label:"Menu key",value:"Ins"}),e.jsx(O,{label:"Allow input while open",value:w,onChange:j}),e.jsx(O,{label:"Auto save configs",value:u,onChange:b}),e.jsx(O,{label:"Show tooltips",value:p,onChange:y}),e.jsx("div",{className:"st-cat",children:"Appearance"}),e.jsx(O,{label:"Background dim",value:g,onChange:N}),e.jsx(O,{label:"Background blur",value:L,onChange:R}),e.jsx(O,{label:"Menu scrollbar",value:a,onChange:i}),e.jsx(O,{label:"Sticky widgets",value:_,onChange:h}),e.jsx(ct,{label:"Accent color",color:t,onColorChange:s}),e.jsx(re,{label:"GUI Scale",value:r,options:["Default","150%","175%","200%"],onChange:o}),e.jsx("div",{className:"st-cat",children:"Notifications"}),e.jsx(O,{label:"Show notifications",value:l,onChange:d}),l&&e.jsxs(e.Fragment,{children:[e.jsx(re,{label:"Scale",value:c,options:["Default","125%","150%","200%"],onChange:m}),e.jsx(re,{label:"Position",value:f,options:["Bottom right","Bottom left","Top right","Top left"],onChange:x}),e.jsx(O,{label:"Hide for visuals",value:v,onChange:S}),e.jsx(O,{label:"Hide for keybinds",value:C,onChange:M})]}),e.jsx("div",{className:"settings-unload",children:e.jsxs("button",{className:`unload-btn${P>.05?" unload-btn--holding":""}`,onMouseDown:()=>H(!0),onMouseUp:()=>H(!1),onMouseLeave:()=>H(!1),children:[e.jsx("div",{className:"unload-progress",style:{width:`${P*100}%`}}),e.jsxs("div",{className:"unload-content",children:[e.jsx("i",{className:"fa-solid fa-right-from-bracket",style:{marginRight:8}}),P>.05?"Hold to unload...":"Unload client"]})]})}),e.jsx("style",{children:`
        .settings-tab {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .settings-header-row {
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }
        .settings-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-bright);
        }
        .st-cat {
          font-size: 12px;
          color: #505050;
          margin-top: 6px;
        }
        .settings-unload {
          padding-top: 4px;
        }
        .unload-btn {
          width: 100%;
          height: 38px;
          border-radius: 8px;
          background: #2d1616;
          border: 1.5px solid #963838;
          color: #c45a5e;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
          position: relative;
          overflow: hidden;
        }
        .unload-btn:hover {
          background: #371a1a;
          border-color: #b54848;
          color: #d56b70;
        }
        .unload-btn--holding,
        .unload-btn--holding:hover {
          color: #ffffff;
        }
        .unload-progress {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: #4a1e1e;
          transition: width 0.016s linear;
          border-radius: 6px;
        }
        .unload-content {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
        }
      `})]})}const ae=[{name:"Combat",icon:"fa-bullseye",modules:[{name:"Aim Assist",description:"Aims at players for you",icon:"fa-crosshairs",enabled:!0},{name:"Auto Clicker",description:"Clicks while holding LMB",icon:"fa-computer-mouse",enabled:!0},{name:"Auto Block",description:"Blocks your sword before taking damage to reduce it",icon:"fa-shield-halved",enabled:!1},{name:"Auto Weapon",description:"Selects your weapon when aiming at a player",icon:"fa-sword",enabled:!1},{name:"Back Track",description:"Hit players at their past position",icon:"fa-clock-rotate-left",enabled:!1},{name:"Reach",description:"Increases attack range",icon:"fa-arrows-left-right-to-line",enabled:!1},{name:"Hitboxes",description:"Expands player hitboxes",icon:"fa-expand",enabled:!1},{name:"Velocity",description:"Reduces knockback taken from hits",icon:"fa-wind",enabled:!1},{name:"Jump Reset",description:"Reduces knockback taken by jumping when hit",icon:"fa-arrow-up",enabled:!1},{name:"Criticals",description:"Forces critical hits during PvP",icon:"fa-bolt",enabled:!1},{name:"Piercing",description:"Hit through allies, blocks, and mobs",icon:"fa-location-arrow",enabled:!1},{name:"KB Delay",description:"Delays your knockback when hit",icon:"fa-hourglass-half",enabled:!1},{name:"Weapons",description:"Filter combat modules by held item type",icon:"fa-filter",enabled:!1,gearOnly:!0}]},{name:"Player",icon:"fa-street-view",modules:[{name:"Auto Bard",description:"Cycles your bard effect items",icon:"fa-music",enabled:!1},{name:"Auto Tool",description:"Picks the best tool when mining",icon:"fa-pickaxe",enabled:!1},{name:"Auto Armor",description:"Equips your best armor",icon:"fa-shield-halved",enabled:!1},{name:"Armor Switch",description:"Swaps between two armor sets on keybind",icon:"fa-shirt",enabled:!1},{name:"Bridge Assist",description:"Sneaks at block edges",icon:"fa-bridge",enabled:!1},{name:"Fast Place",description:"Reduces block placement delay",icon:"fa-cubes-stacked",enabled:!1},{name:"Chest Stealer",description:"Loots chests",icon:"fa-box-open",enabled:!1},{name:"Auto Pot",description:"Throws healing potions on keybind",icon:"fa-flask",enabled:!1},{name:"Auto Soup",description:"Eats soups on keybind",icon:"fa-bowl-food",enabled:!1},{name:"Refill",description:"Moves healing items to your hotbar",icon:"fa-rotate",enabled:!1},{name:"Inv Manager",description:"Throws unnecessary items away",icon:"fa-boxes-stacked",enabled:!1}]},{name:"Move",icon:"fa-person-running",modules:[{name:"WTap",description:"Resets sprint to increase knockback",icon:"fa-forward",enabled:!1},{name:"STap",description:"Steps back after a hit to increase knockback",icon:"fa-backward",enabled:!1},{name:"Keep Sprint",description:"Keep your momentum after attacking a player",icon:"fa-person-running",enabled:!1},{name:"Auto Sprint",description:"Always sprint while moving",icon:"fa-gauge-high",enabled:!1},{name:"No Slow",description:"No slowdown while using items",icon:"fa-ban",enabled:!1},{name:"Fast Stop",description:"Stop instantly by counter-strafing",icon:"fa-stop",enabled:!1},{name:"No Jump Delay",description:"Jump without any cooldown",icon:"fa-angles-up",enabled:!1,noGear:!0},{name:"Null Move",description:"Switch directions when pressing multiple keys at once",icon:"fa-arrows-left-right",enabled:!1},{name:"Inv Walk",description:"Move while your inventory is open",icon:"fa-suitcase",enabled:!1}]},{name:"Visuals",icon:"fa-eye",modules:[{name:"Player ESP",description:"See players through walls",icon:"fa-binoculars",enabled:!1},{name:"Name Tags",description:"See names through walls",icon:"fa-tag",enabled:!1},{name:"Chams",description:"See player models through walls",icon:"fa-ghost",enabled:!1},{name:"Outlines",description:"Glow outlines around players through walls",icon:"fa-border-all",enabled:!1},{name:"Indicators",description:"Directional arrows for nearby players",icon:"fa-diamond-turn-right",enabled:!1},{name:"Chest ESP",description:"See chests through walls",icon:"fa-box",enabled:!1},{name:"Trajectories",description:"Predicted path for bows, pearls and other throwables",icon:"fa-bezier-curve",enabled:!1},{name:"Hit Markers",description:"Visual feedback on hits",icon:"fa-plus",enabled:!1},{name:"Anti Debuff",description:"Hides Blindness and Nausea overlays",icon:"fa-eye-slash",enabled:!1},{name:"Free Look",description:"Pan the camera without rotating your player",icon:"fa-camera",enabled:!1},{name:"Widgets",description:"Settings for draggable HUD widgets",icon:"fa-table-layout",enabled:!1,gearOnly:!0}]},{name:"Misc",icon:"fa-code",modules:[{name:"Timer",description:"Speed up or slow down the game",icon:"fa-stopwatch",enabled:!1},{name:"Ping Fix",description:"Hides your high ping caused by lag modules",icon:"fa-wifi",enabled:!1,noGear:!0},{name:"No Hit Delay",description:"Removes the 1.8.9 hit delay",icon:"fa-clock",enabled:!1,noGear:!0},{name:"No Item Release",description:"Prevents items from being released",icon:"fa-hand",enabled:!1},{name:"Mouse Delay Fix",description:"Fixes a 1.8.9 bug that causes inaccurate aiming",icon:"fa-bullseye",enabled:!1,noGear:!0},{name:"Item Use Fix",description:"Use items while digging",icon:"fa-screwdriver-wrench",enabled:!1,noGear:!0},{name:"Right Clicker",description:"Right clicks when holding RMB",icon:"fa-computer-mouse",enabled:!1},{name:"Fast Mine",description:"Mine blocks faster than vanilla",icon:"fa-pickaxe",enabled:!1},{name:"Teams",description:"Don't attack players on your team",icon:"fa-users",enabled:!1},{name:"Lunar Cosmetics",description:"Unlocks all cosmetics on Lunar Client",icon:"fa-wand-magic-sparkles",enabled:!1,noGear:!0}]},{name:"Friends",icon:"fa-user-plus",modules:[]},{name:"Configs",icon:"fa-cloud",modules:[]},{name:"Settings",icon:"fa-sliders",modules:[]}];function pt({rootRef:t}){const[s,a]=n.useState(0),[i,r]=n.useState(null),[o,l]=n.useState(null),[d,c]=n.useState({top:!1,bottom:!1}),[m,f]=n.useState("#e84c73"),[x,w]=n.useState(!1),[j,u]=n.useState({visible:!1,top:0,height:0});n.useEffect(()=>{const h=t?.current||document.documentElement,v=m.replace("#",""),S=parseInt(v.substring(0,2),16),C=parseInt(v.substring(2,4),16),M=parseInt(v.substring(4,6),16);h.style.setProperty("--accent-r",S.toString()),h.style.setProperty("--accent-g",C.toString()),h.style.setProperty("--accent-b",M.toString()),h.style.setProperty("--accent",`rgb(${S}, ${C}, ${M})`)},[m,t]);const[b,p]=n.useState(()=>{const h={};return ae.forEach(v=>{v.modules.forEach(S=>{h[S.name]=S.enabled})}),h}),y=n.useRef(null),g=n.useCallback(()=>{const h=y.current;if(!h)return;const v=h.scrollHeight-h.clientHeight;if(v<=2){c({top:!1,bottom:!1}),u({visible:!1,top:0,height:0});return}const S=h.scrollTop;c({top:S>3,bottom:S<v-3});const C=h.clientHeight/h.scrollHeight,M=Math.max(C,.15),P=S/v*(1-M);u({visible:!0,top:P,height:M})},[]);n.useLayoutEffect(()=>{y.current&&(y.current.scrollTop=0),g()},[s,g]),n.useEffect(()=>{const h=requestAnimationFrame(g),v=setTimeout(g,90),S=setTimeout(g,260);return()=>{cancelAnimationFrame(h),clearTimeout(v),clearTimeout(S)}},[s,g]),n.useEffect(()=>{const h=y.current;if(!h)return;const v=new ResizeObserver(()=>g());return v.observe(h),()=>v.disconnect()},[s,g]);const N=n.useCallback(h=>{p(v=>({...v,[h]:!v[h]}))},[]),L=n.useCallback((h,v)=>{r({tabIdx:h,modIdx:v})},[]),R=n.useCallback(()=>{r(null),l(null)},[]),_=ae[s];return e.jsxs("div",{className:"menu-container",children:[e.jsx("div",{className:"menu-shadow"}),e.jsxs("div",{className:"menu-main",children:[e.jsxs("div",{className:"menu-header",children:[e.jsx("div",{style:{flex:1}}),e.jsx("span",{className:"menu-watermark",children:"timewarp"})]}),e.jsxs("div",{className:"menu-body",children:[e.jsx(et,{tabs:ae,activeTab:s,onTabChange:h=>{a(h),r(null)}}),e.jsxs("div",{className:"menu-content-wrap",children:[e.jsx("div",{className:`menu-scroll-fade menu-scroll-fade--top ${d.top?"menu-scroll-fade--visible":""}`,"aria-hidden":!0}),e.jsx("div",{className:`menu-scroll-fade menu-scroll-fade--bottom ${d.bottom?"menu-scroll-fade--visible":""}`,"aria-hidden":!0}),e.jsx("div",{className:"menu-content",ref:y,onScroll:g,children:e.jsx(oe.div,{key:s,initial:{opacity:0,y:4},animate:{opacity:1,y:0},transition:{duration:.1,ease:[.25,.85,.35,1]},style:{width:"100%"},children:s<=4?e.jsx(tt,{tab:_,tabIdx:s,moduleStates:b,onToggle:N,onOpenSettings:L}):s===5?e.jsx(rt,{onOpenFriendSettings:l}):s===6?e.jsx(lt,{}):e.jsx(ut,{accentColor:m,onAccentChange:f,showScrollbar:x,onShowScrollbar:w})})}),x&&j.visible&&e.jsx("div",{className:"menu-scrollbar","aria-hidden":!0,children:e.jsx("div",{className:"menu-scrollbar-thumb",style:{top:`${j.top*100}%`,height:`${j.height*100}%`}})})]})]}),e.jsxs(we,{children:[i&&e.jsx(Ne,{module:ae[i.tabIdx].modules[i.modIdx],onClose:R}),o&&e.jsx(Ne,{module:{name:o},onClose:R})]})]}),e.jsx("style",{children:`
        .menu-container {
          position: relative;
          width: var(--menu-width);
          height: var(--menu-height);
        }
        .menu-shadow {
          position: absolute;
          inset: -20px;
          border-radius: calc(var(--menu-rounding) + 10px);
          background: radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .menu-main {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: var(--menu-rounding);
          overflow: hidden;
          z-index: 1;
          border: 1px solid #080808;
          display: flex;
          flex-direction: column;
        }
        .menu-header {
          height: var(--header-height);
          background: var(--bg-sidebar);
          display: flex;
          align-items: center;
          padding: 0 12px;
          flex-shrink: 0;
          margin-bottom: -1px;
          position: relative;
          z-index: 1;
        }
        .menu-watermark {
          font-size: 15px;
          font-weight: 500;
          color: rgba(180, 180, 180, 0.47);
          letter-spacing: 0.5px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .menu-scrollbar {
          position: absolute;
          top: 18px;
          bottom: 18px;
          right: 8px;
          width: 3px;
          border-radius: 2px;
          background: rgba(30, 30, 30, 0.55);
          pointer-events: none;
          z-index: 5;
        }
        .menu-scrollbar-thumb {
          position: absolute;
          width: 100%;
          min-height: 14px;
          border-radius: 2px;
          background: rgb(var(--accent-r), var(--accent-g), var(--accent-b));
          opacity: 0.86;
        }
        .menu-search {
          display: flex;
          align-items: center;
          gap: 6px;
          height: 19px;
          padding: 0 8px;
          border-radius: 10px;
          background: var(--bg-popup);
          border: 1px solid var(--border);
          margin-right: 14px;
          flex-shrink: 0;
          width: 190px;
          cursor: default;
        }
        .menu-search i {
          font-size: 8px;
          color: var(--text-dim);
        }
        .menu-search input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 10px;
          color: var(--text);
          padding: 0;
          cursor: default;
        }
        .menu-search input::placeholder {
          color: var(--text-dim);
        }
        .menu-body {
          display: flex;
          flex: 1;
          min-height: 0;
          overflow: hidden;
          background: var(--bg-sidebar);
        }
        .menu-content-wrap {
          flex: 1;
          min-width: 0;
          min-height: 0;
          position: relative;
          border-radius: var(--menu-rounding);
          overflow: hidden;
          background: var(--bg-main);
          contain: paint;
        }
        .menu-content {
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: var(--content-padding);
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .menu-content::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }
        .menu-scroll-fade {
          position: absolute;
          left: 0;
          right: 0;
          height: 38px;
          pointer-events: none;
          z-index: 3;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .menu-scroll-fade--visible {
          opacity: 1;
        }
        .menu-scroll-fade--top {
          top: 0;
          border-radius: var(--menu-rounding) var(--menu-rounding) 0 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 15, 15, 0.92) 0%,
            rgba(15, 15, 15, 0.45) 45%,
            transparent 100%
          );
        }
        .menu-scroll-fade--bottom {
          bottom: 0;
          border-radius: 0 0 var(--menu-rounding) var(--menu-rounding);
          background: linear-gradient(
            to top,
            rgba(15, 15, 15, 0.92) 0%,
            rgba(15, 15, 15, 0.45) 45%,
            transparent 100%
          );
        }
      `})]})}function Tt({className:t,maxHeightFn:s}){const a=n.useRef(null),i=n.useRef(null),[r,o]=n.useState(1),l=n.useRef(s);l.current=s;const d=()=>{const c=l.current;return c?c():null};return n.useEffect(()=>{const c=i.current;if(!c)return;const m=()=>{const{width:x}=c.getBoundingClientRect();if(x===0)return;const w=d();let j=Math.min(1.2,x/750);w&&(j=Math.min(j,w/600)),o(j)};m();const f=new ResizeObserver(m);return f.observe(c),()=>f.disconnect()},[]),e.jsx("div",{ref:i,className:A("tw-menu-preview",t),style:{"--tw-menu-scale":r},children:e.jsx("div",{ref:a,className:"tw-menu-preview-wrap",style:{height:600*r,width:750*r},children:e.jsx("div",{className:"tw-menu-preview-stage",children:e.jsx(pt,{rootRef:i})})})})}function Rt({items:t,groups:s}){const a=ue(),i=Ce(),{logout:r}=Q(),o=n.useRef(null),l=n.useRef(null),[d,c]=n.useState(!1);function m(u){return u.exact?a.pathname===u.to:a.pathname===u.to||a.pathname.startsWith(u.to+"/")}const f=t.length>5;n.useEffect(()=>{if(!f)return;const u=l.current,b=o.current;if(u&&b){const p=u.getBoundingClientRect(),y=b.getBoundingClientRect(),g=p.left-y.left-y.width/2+p.width/2;b.scrollBy({left:g,behavior:"smooth"})}},[a.pathname,f]),n.useEffect(()=>{if(!d)return;const u=b=>b.key==="Escape"&&c(!1);return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[d]),n.useEffect(()=>{c(!1)},[a.pathname]);async function x(){c(!1);try{await r()}catch{}i("/login",{replace:!0})}const w=u=>A("flex flex-col items-center justify-center gap-1 py-2.5 text-[10px] font-medium uppercase tracking-wider transition relative",u?"text-accent-pink":"text-text-muted hover:text-text-primary"),j=u=>A("w-full grid place-items-center py-2.5 transition","text-text-muted hover:text-text-primary");return e.jsxs("nav",{className:"lg:hidden fixed bottom-0 inset-x-0 z-40 bg-bg-surface/95 backdrop-blur-xl border-t border-border-subtle",style:{paddingBottom:"env(safe-area-inset-bottom, 0px)"},children:[e.jsxs("ul",{ref:o,className:A("flex items-stretch",f?"overflow-x-auto no-scrollbar snap-x snap-mandatory":"justify-around max-w-xl mx-auto"),style:{WebkitOverflowScrolling:"touch"},children:[t.map(u=>{const b=u.icon,p=m(u);return e.jsx("li",{className:A(f?"shrink-0 basis-[72px] snap-center":"flex-1"),children:e.jsxs(T,{ref:p?l:null,to:u.to,className:w(p),children:[p&&e.jsx("span",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-b-full bg-accent-pink"}),e.jsxs("div",{className:"relative",children:[e.jsx(b,{size:20,strokeWidth:p?2.25:1.75}),u.badge?e.jsx("span",{className:"absolute -top-1.5 -right-2 inline-flex items-center justify-center min-w-[16px] h-[16px] px-1 rounded-full text-[10px] font-semibold bg-accent-pink text-bg-primary leading-none",children:u.badge}):null]}),e.jsx("span",{className:"leading-none truncate max-w-[64px]",children:u.label})]})},u.to)}),e.jsx("li",{className:f?"shrink-0 basis-[72px]":"flex-1",children:e.jsx(T,{to:"/",className:j(),"aria-label":"home",title:"home",children:e.jsx(Ee,{size:20,strokeWidth:1.75})})}),s&&e.jsx("li",{className:f?"shrink-0 basis-[72px]":"flex-1",children:e.jsx("button",{type:"button",onClick:()=>c(u=>!u),className:A(j(),"relative"),"aria-label":"menu",title:"menu",children:d?e.jsx(pe,{size:20,strokeWidth:1.75}):e.jsx(Se,{size:20,strokeWidth:1.75})})}),e.jsx("li",{className:f?"shrink-0 basis-[72px]":"flex-1",children:e.jsx("button",{type:"button",onClick:x,className:A(j(),"hover:text-danger"),"aria-label":"sign out",title:"sign out",children:e.jsx(Me,{size:20,strokeWidth:1.75})})})]}),s&&d&&e.jsxs("div",{className:"fixed inset-0 z-50 lg:hidden",onClick:()=>c(!1),children:[e.jsx("div",{className:"absolute inset-0 bg-black/60"}),e.jsx("div",{className:"absolute inset-x-3 bottom-[52px] rounded-2xl bg-[#0c0c0c] border border-white/[0.08] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)] p-2 pb-4",style:{marginBottom:"env(safe-area-inset-bottom, 0px)"},onClick:u=>u.stopPropagation(),children:s.map(u=>e.jsxs("div",{children:[e.jsx("p",{className:"px-4 pt-3 pb-1.5 text-[0.75rem] font-medium text-white/90",children:u.label}),u.items.map(b=>{const p=b.icon,y=m(b),g=y?"text-accent-pink":"text-text-muted hover:text-text-primary";return e.jsxs(T,{to:b.to,onClick:()=>c(!1),className:A("flex items-center h-[38px] px-4 rounded-lg transition-colors",g),children:[e.jsx(p,{size:17,strokeWidth:y?2.2:1.85,className:"shrink-0"}),e.jsx("span",{className:A("ml-2.5 text-[0.9rem] whitespace-nowrap",y?"font-semibold":"font-medium"),children:b.label}),b.badge?e.jsx("span",{className:"ml-auto inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-semibold tabular-nums bg-accent-pink/25 text-accent-pink",children:b.badge}):null]},b.to)})]},u.label))})]})]})}function Pt({open:t,onClose:s,title:a,children:i,className:r}){if(n.useEffect(()=>{if(!t)return;const l=d=>d.key==="Escape"&&s?.();return window.addEventListener("keydown",l),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",l),document.body.style.overflow=""}},[t,s]),!t||typeof document>"u")return null;const o=e.jsxs("div",{className:"tw-modal-root fixed inset-0 z-[200] flex items-center justify-center p-4",children:[e.jsx("div",{className:"absolute inset-0 bg-black/75 backdrop-blur-md tw-modal-backdrop",onClick:s}),e.jsxs("div",{className:A("relative z-10 w-full max-w-lg p-7 rounded-2xl tw-modal-card",r),onClick:l=>l.stopPropagation(),children:[e.jsx("button",{type:"button",onClick:s,className:"absolute top-4 right-4 w-8 h-8 grid place-items-center rounded-full text-text-muted hover:text-text-primary hover:bg-white/[0.06] transition-colors","aria-label":"Close",children:e.jsx(pe,{size:16,strokeWidth:2})}),a&&e.jsx("h3",{className:"text-[22px] font-light tracking-tight text-text-primary mb-6 pr-10",children:a}),i]})]});return $e.createPortal(o,document.body)}export{yt as A,Rt as B,Ct as C,Mt as D,je as H,ht as L,Pt as M,ft as P,jt as R,mt as T,Oe as _,X as a,We as b,A as c,vt as d,Y as e,kt as f,St as g,Et as h,At as i,bt as j,wt as k,zt as l,Nt as m,Tt as n,gt as t,Q as u};
