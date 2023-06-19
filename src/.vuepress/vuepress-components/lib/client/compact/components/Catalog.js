import{usePageData as L,useSiteData as F}from"@vuepress/client";import{defineComponent as R,computed as A,h as l}from"vue";import{useRouter as S,RouterLink as m}from"vue-router";import{useLocaleConfig as U,startsWith as v,keys as D,endsWith as p}from"vuepress-shared/client";import f from"../../components/FontIcon.js";import"../styles/catalog.scss";import"../../styles/font-icon.scss";var E=R({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},titleGetter:{type:Function,default:a=>a.title},iconGetter:{type:Function,default:a=>a.icon},orderGetter:{type:Function,default:a=>a.order||0},shouldIndex:{type:Function,default:a=>a.index!==!1}},setup(a){const $=U(CATALOG_LOCALES),b=L(),y=S(),C=F(),k=()=>{const c=a.base||b.value.path.replace(/\/[^/]+$/,"/"),d=y.getRoutes(),h=[];return d.filter(({meta:t,path:e})=>{if(!v(e,c)||e===c)return!1;if(c==="/"){const r=D(C.value.locales).filter(n=>n!=="/");if(e==="/404.html"||r.some(n=>v(e,n)))return!1}return(p(e,".html")&&!p(e,"/index.html")||p(e,"/"))&&a.shouldIndex(t)}).map(({path:t,meta:e})=>{const r=t.substring(c.length).split("/").length;return{title:a.titleGetter(e),icon:a.iconGetter(e),base:t.replace(/\/[^/]+\/?$/,"/"),order:a.orderGetter(e),level:p(t,"/")?r-1:r,path:t}}).filter(({title:t,level:e})=>e<=a.level||!t).sort(({title:t,level:e,path:r,order:n},{title:i,level:o,path:u,order:s})=>e-o||(p(r,"/index.html")?-1:p(u,"/index.html")?1:n===null?s===null?t.localeCompare(i):s:s===null?n:n>0?s>0?n-s:-1:s<0?n-s:1)).forEach(t=>{var e;const{base:r,level:n}=t;switch(n){case 1:h.push(t);break;case 2:{const i=h.find(o=>o.path===r);i&&(i.children??(i.children=[])).push(t);break}default:{const i=h.find(o=>o.path===r.replace(/\/[^/]+\/$/,"/"));if(i){const o=(e=i.children)==null?void 0:e.find(u=>u.path===r);o&&(o.children??(o.children=[])).push(t)}}}}),h},w=A(()=>k());return()=>l("div",{class:"catalog-wrapper"},[l("h2",{class:"main-title"},$.value.title),w.value.map(({children:c=[],icon:d,path:h,title:t},e)=>[l("h3",{id:t,class:["child-title",{"has-children":c.length}]},[l("a",{href:`#${t}`,class:"header-anchor"},"#"),l(m,{class:"catalog-title",to:h},()=>[d?l(f,{icon:d}):null,`${e+1}. ${t||"Unknown"}`])]),c.length?l("ul",{class:"child-catalog-wrapper"},c.map(({children:r=[],icon:n,path:i,title:o},u)=>l("li",{class:"child-catalog-item"},[l("div",{class:["sub-title",{"has-children":r.length}]},[l("a",{href:`#${o}`,class:"header-anchor"},"#"),l(m,{class:"catalog-title",to:i},()=>[n?l(f,{icon:n}):null,`${e+1}.${u+1} ${o||"Unknown"}`])]),r.length?l("div",{class:"sub-catalog-wrapper"},r.map(({icon:s,path:g,title:x},G)=>l(m,{class:"sub-catalog-item",to:g},()=>[s?l(f,{icon:s}):null,`${e+1}.${u+1}.${G+1} ${x||"Unknown"}`]))):null]))):null])])}});export{E as default};
//# sourceMappingURL=Catalog.js.map
