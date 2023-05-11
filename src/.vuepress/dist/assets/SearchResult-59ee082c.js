import{u as V,a as P,b as W,c as z,m as B,l as G,n as J,y as K,h as N,d as T,e as X,r as w,g as Y,v as Z,L as _,H as ee}from"./app-6f7760cd.js";import{c as te,C as ae,t as se,r as L,h as k,x as Q,j as t,R as A,A as le,F as ue,i as re}from"./framework-4f91def0.js";const ne="search-pro-result-history",o=V(ne,[]),oe=()=>{const{resultHistoryCount:u}=w,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},ce=u=>{const c=P(),l=L(!1),h=le([]);let i;const v=X(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${w.worker}`,{}),i.addEventListener("message",({data:g})=>{h.value=g,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},w.delay);return Q([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var pe=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=Y(),h=ae(),i=P(),v=W(Z),{addQueryHistory:d}=_(),{enabled:g,resultHistory:b,addResultHistory:q,removeResultHistory:j}=oe(),f=se(u,"query"),{results:y,searching:E}=ce(f),r=L(0),s=L(0),C=k(()=>b.value.length>0),R=k(()=>y.value.length>0),$=k(()=>y.value[r.value]||null),F=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=$.value.contents.length-1},U=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},I=()=>{s.value<$.value.contents.length-1?s.value=s.value+1:U()},M=()=>{s.value>0?s.value=s.value-1:F()},D=e=>e.map(a=>re(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=ee[e.index]||"$content",[p,m=""]=ue(a)?a[i.value].split("$content"):a.split("$content");return D([p,...e.display,m])}return D(e.display)},H=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return z("keydown",e=>{if(R.value){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")I();else if(e.key==="Enter"){const a=$.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),H())}}}),Q([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:f.value?!R.value:!C.value}],id:"search-pro-results"},f.value===""?C.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),b.value.map((e,a)=>t(A,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{H()}},()=>[t(B,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),j(a)}},t(G))]))])):g?v.value.emptyHistory:v.value.emptyResult:E.value?t(J,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,O)=>{const x=m&&s.value===O;return t(A,{to:n.path,class:["search-pro-result-item",{active:x,"aria-selected":x}],onClick:()=>{d(u.query),q(n),H()}},()=>[n.type==="content"?null:t(n.type==="title"?K:n.type==="heading"?N:T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{pe as default};
