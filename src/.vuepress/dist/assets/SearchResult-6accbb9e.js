import{u as N,a as x,b as O,v as V,c as W,m as _,l as z,n as B,y as G,h as K,d as T,e as X,L as Y,H as Z,f as ee,r as L}from"./app-0e7fcc2d.js";import{g as te,C as ae,t as se,r as g,k as w,w as A,l as t,N as Q,J as le,i as ue}from"./framework-dfa6aaa8.js";const re="search-pro-result-history",o=N(re,[]),ne=()=>{const{resultHistoryCount:u}=L,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},oe=u=>{const c=x(),l=g(!1),h=g([]);let i;const v=ee(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${L.worker}`,{}),i.addEventListener("message",({data:f})=>{h.value=f,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},L.delay);return A([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=X(),h=ae(),i=x(),v=O(V),{addQueryHistory:d}=Y(),{enabled:f,resultHistory:b,addResultHistory:q,removeResultHistory:E}=ne(),$=se(u,"query"),{results:y,searching:j}=oe($),r=g(0),s=g(0),C=w(()=>b.value.length>0),R=w(()=>y.value.length>0),k=w(()=>y.value[r.value]||null),U=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=k.value.contents.length-1},F=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},I=()=>{s.value<k.value.contents.length-1?s.value=s.value+1:F()},J=()=>{s.value>0?s.value=s.value-1:U()},D=e=>e.map(a=>ue(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=Z[e.index]||"$content",[p,m=""]=le(a)?a[i.value].split("$content"):a.split("$content");return D([p,...e.display,m])}return D(e.display)},H=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return W("keydown",e=>{if(R.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")I();else if(e.key==="Enter"){const a=k.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),H())}}}),A([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:$.value?!R.value:!C.value}],id:"search-pro-results"},$.value===""?C.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),b.value.map((e,a)=>t(Q,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{H()}},()=>[t(_,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),E(a)}},t(z))]))])):f?v.value.emptyHistory:v.value.emptyResult:j.value?t(B,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,M)=>{const P=m&&s.value===M;return t(Q,{to:n.path,class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{d(u.query),q(n),H()}},()=>[n.type==="content"?null:t(n.type==="title"?G:n.type==="heading"?K:T,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
