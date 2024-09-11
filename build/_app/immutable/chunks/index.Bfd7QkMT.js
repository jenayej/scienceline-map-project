var B=Object.defineProperty;var I=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>I(e,typeof t!="symbol"?t+"":t,n);import{r as p,n as x,f as v,h as W,i as E,j as L,k as N,l as M,m as P,p as A,q as T,v as q,w as H}from"./scheduler.D2CNYxju.js";let $=!1;function O(){$=!0}function D(){$=!1}function R(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function U(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const u=t[l];u.claim_order!==void 0&&r.push(u)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,u=(s>0&&t[n[s]].claim_order<=l?s+1:R(1,s,_=>t[n[_]].claim_order,l))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,s=Math.max(f,s)}const o=[],a=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(o.push(t[r-1]);c>=r;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);o.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<o.length&&a[r].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;e.insertBefore(a[r],u)}}function V(e,t){e.appendChild(t)}function k(e,t){if($){for(U(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function re(e,t,n){$&&!n?k(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function j(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function ae(){return w(" ")}function le(){return w("")}function S(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function oe(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ce(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function z(e,t,n,i,s=!1){G(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function J(e,t,n,i){return z(e,s=>s.nodeName===t,s=>{const o=[];for(let a=0;a<s.attributes.length;a++){const c=s.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>s.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return J(e,t,n,j)}function K(e,t){return z(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function ue(e){return K(e," ")}function de(e,t){t=""+t,e.data!==t&&(e.data=t)}function _e(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let m;function Q(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function me(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=j("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=Q();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=S(window,"message",a=>{a.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=S(i.contentWindow,"resize",t),t()}),V(e,i),()=>{(s||o&&i.contentWindow)&&o(),C(i)}}function he(e,t){return new e(t)}const h=new Set;let d;function pe(){d={r:0,c:[],p:d}}function $e(){d.r||p(d.c),d=d.p}function X(e,t){e&&e.i&&(h.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function xe(e){e&&e.c()}function we(e,t){e&&e.l(t)}function Y(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),N(()=>{const o=e.$$.on_mount.map(T).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...o):p(o),e.$$.on_mount=[]}),s.forEach(N)}function Z(e,t){const n=e.$$;n.fragment!==null&&(M(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(q.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,i,s,o,a=null,c=[-1]){const r=P;A(e);const l=e.$$={fragment:null,ctx:[],props:o,update:x,not_equal:s,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:v(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(f,_,...g)=>{const b=g.length?g[0]:_;return l.ctx&&s(l.ctx[f],l.ctx[f]=b)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](b),u&&ee(e,f)),_}):[],l.update(),u=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){O();const f=F(t.target);l.fragment&&l.fragment.l(f),f.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),D(),W()}A(r)}class be{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){Z(this,1),this.$destroy=x}$on(t,n){if(!E(n))return x;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!L(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const te="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(te);export{se as A,S as B,be as S,ye as a,w as b,fe as c,F as d,j as e,K as f,C as g,ue as h,ge as i,re as j,k,de as l,le as m,$e as n,oe as o,_e as p,pe as q,he as r,ae as s,X as t,xe as u,we as v,Y as w,Z as x,me as y,ce as z};
