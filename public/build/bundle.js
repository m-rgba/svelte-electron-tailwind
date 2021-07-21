var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l,i=!1;function a(t,n,e,r){for(;t<n;){const o=t+(n-t>>1);e(o)<=r?t=o+1:n=o}return t}function u(t,n){i?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let o=0;for(let t=0;t<n.length;t++){const c=a(1,o+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;r[t]=e[c]+1;const l=c+1;e[l]=t,o=Math.max(l,o)}const c=[],l=[];let i=n.length-1;for(let t=e[o]+1;0!=t;t=r[t-1]){for(c.push(n[t-1]);i>=t;i--)l.push(n[i]);i--}for(;i>=0;i--)l.push(n[i]);c.reverse(),l.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<l.length;n++){for(;e<c.length&&l[n].claim_order>=c[e].claim_order;)e++;const r=e<c.length?c[e]:null;t.insertBefore(l[n],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function s(t,n,e){i&&!e?u(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function f(){return t=" ",document.createTextNode(t);var t}function h(t){l=t}const p=[],m=[],g=[],$=[],_=Promise.resolve();let b=!1;function x(t){g.push(t)}let y=!1;const v=new Set;function w(){if(!y){y=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];h(n),k(n.$$)}for(h(null),p.length=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];v.has(n)||(v.add(n),n())}g.length=0}while(p.length);for(;$.length;)$.pop()();b=!1,y=!1,v.clear()}}function k(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const E=new Set;function N(t,n){t&&t.i&&(E.delete(t),t.i(n))}function S(t,e,c,l){const{fragment:i,on_mount:a,on_destroy:u,after_update:s}=t.$$;i&&i.m(e,c),l||x((()=>{const e=a.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]})),s.forEach(x)}function T(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function j(t,n){-1===t.$$.dirty[0]&&(p.push(t),b||(b=!0,_.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function O(n,o,c,a,u,s,f=[-1]){const p=l;h(n);const m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:o.context||[]),callbacks:e(),dirty:f,skip_bound:!1};let g=!1;if(m.ctx=c?c(n,o.props||{},((t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),g&&j(n,t)),e})):[],m.update(),g=!0,r(m.before_update),m.fragment=!!a&&a(m.ctx),o.target){if(o.hydrate){i=!0;const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(d)}else m.fragment&&m.fragment.c();o.intro&&N(n.$$.fragment),S(n,o.target,o.anchor,o.customElement),i=!1,w()}h(p)}class A{$destroy(){T(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}class B extends A{constructor(t){super(),O(this,t,null,null,c,{})}}function C(n){let e,r,o,c;return e=new B({}),{c(){var t,n;(t=e.$$.fragment)&&t.c(),r=f(),n="main",o=document.createElement(n),o.innerHTML='<div class="w-100 text-left  p-40"><h1 class="text-4xl text-red-700 mb-2">Svelte / Tailwind / Electron</h1> \n\t\t<p><strong>npm run start</strong> - Testing environment</p> \n\t\t<p><strong>npm run build</strong> - Optimized build (prune extra Tailwind jams)</p> \n\t\t<p><strong>npm run make</strong> - Electron bundle</p></div>'},m(t,n){S(e,t,n),s(t,r,n),s(t,o,n),c=!0},p:t,i(t){c||(N(e.$$.fragment,t),c=!0)},o(t){!function(t,n,e,r){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),r&&(e&&t.d(1),r())})),t.o(n)}}(e.$$.fragment,t),c=!1},d(t){T(e,t),t&&d(r),t&&d(o)}}}return new class extends A{constructor(t){super(),O(this,t,null,C,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
