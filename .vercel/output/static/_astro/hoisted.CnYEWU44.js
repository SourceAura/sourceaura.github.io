import"./hoisted.p0QGGH29.js";import"./_sentry-release-injection-file.DCC_nugN.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="05ab28c1-44a4-4b0d-b318-d23068e66523",e._sentryDebugIdIdentifier="sentry-dbid-05ab28c1-44a4-4b0d-b318-d23068e66523")}catch{}})();function i(){const e=document.querySelector(".petal-container"),t=document.querySelector(".petal-grid"),n=document.querySelectorAll(".petal-item");if(!e||!t)return;let r=Math.floor(e.clientHeight/100);t.style.gridTemplateRows=`repeat(${r}, minmax(100px, 1fr))`;const a=Array.from(n).reduce((d,o)=>d+(o instanceof HTMLElement?o.offsetWidth:0),0);t.style.width=`${a}px`}function l(){i();const e=document.querySelector(".petal-container");e&&e.addEventListener("scroll",()=>{requestAnimationFrame(i)},{passive:!0})}function c(){document.querySelectorAll(".petal-item").forEach(n=>{n.setAttribute("draggable","true"),n.addEventListener("dragstart",r=>{r.dataTransfer.setData("text/plain",r.target.outerHTML),r.target.classList.add("dragging")}),n.addEventListener("dragend",()=>{n.classList.remove("dragging")})});const t=document.querySelector(".petal-grid");t.addEventListener("dragover",n=>{n.preventDefault();const r=document.querySelector(".dragging"),a=u(t,n.clientY);a==null?t.appendChild(r):t.insertBefore(r,a)})}function u(e,t){return[...e.querySelectorAll(".petal-item:not(.dragging)")].reduce((r,a)=>{const d=a.getBoundingClientRect(),o=t-d.top-d.height/2;return o<0&&o>r.offset?{offset:o,element:a}:r},{offset:Number.NEGATIVE_INFINITY}).element}function s(){l(),c(),window.addEventListener("resize",i)}document.addEventListener("DOMContentLoaded",s);document.startViewTransition&&document.addEventListener("astro:after-swap",s);
//# sourceMappingURL=hoisted.CnYEWU44.js.map
