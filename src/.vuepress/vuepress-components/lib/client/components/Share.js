import{usePageData as S,usePageFrontmatter as E}from"@vuepress/client";import{defineComponent as h,ref as C,onMounted as F,h as o,computed as b}from"vue";import{Popup as H,isAbsoluteUrl as L,startsWith as M,endsWith as P,openPopupWindow as R,isString as T,isPlainObject as $,isFunction as O}from"vuepress-shared/client";import{isLinkHttp as _,isArray as j,isString as w}from"@vuepress/shared";import"balloon-css/balloon.css";import"vuepress-shared/client/styles/popup.scss";import"../styles/share-service.scss";const f=t=>{var r;return((r=document.querySelector(`meta[name="${t}"]`))==null?void 0:r.getAttribute("content"))??null},q=(t,r="")=>{const a=["share-icon",r];return _(t)||L(t)?o("img",{class:a,src:t,"no-view":""}):M(t,"<")&&P(t,">")?o("div",{class:a,innerHTML:t}):o("div",{class:[...a,t]})};var B=h({name:"ShareService",props:{config:{type:Object,default:()=>({})},plain:Boolean,title:{type:String,required:!1},description:{type:String,required:!1},url:{type:String,required:!1},summary:{type:String,required:!1},cover:{type:String,required:!1},tag:{type:[Array,String],required:!1}},setup(t){let r;const a=S(),c=E(),e=C(!1),s=()=>{var n;const i=t.title??a.value.title,u=t.description??c.value.description??f("description")??f("og:description")??f("twitter:description"),m=t.url??typeof window>"u"?null:window.location.href,p=t.cover??f("og:image"),v=(n=document.querySelector(`${SHARE_CONTENT_SELECTOR} :not(a) > img`))==null?void 0:n.getAttribute("src"),g=t.tag??c.value.tag??c.value.tags,y=j(g)?g.filter(w).join(","):w(g)?g:null;return t.config.link.replace(/\[([^\]]+)\]/g,(D,k)=>{const A=k.split("|");for(const l of A){if(l==="url"&&m)return m;if(l==="title"&&i)return i;if(l==="description"&&u)return u;if(l==="summary"&&t.summary)return t.summary;if(l==="cover"&&p)return p;if(l==="image"&&v)return v;if(l==="tags"&&y)return y}return""})},d=()=>{const n=s();switch(t.config.action){case"navigate":window.open(n);break;case"open":window.open(n,"_blank");break;case"qrcode":import("qrcode").then(({toDataURL:i})=>i(n,{errorCorrectionLevel:"H",width:250,scale:1,margin:1.5})).then(i=>{r.emit(`<img src="${i}" alt="qrcode" class="share-qrcode" />`)});break;default:R(n,"share")}};return F(()=>{r=new H}),()=>{const{config:{name:n,icon:i,shape:u,color:m},plain:p}=t;return[o("button",{type:"button",class:["share-button",{plain:p}],"aria-label":n,"data-balloon-pos":"up",onClick:()=>d()},p?q(u,"plain"):i?q(i):o("div",{class:"share-icon color-wrapper",style:{background:m},innerHTML:u})),e.value?o("div",{class:"share-popup"}):null]}}});const G=SHARE_SERVICES;var W=h({name:"Share",props:{services:{type:[String,Array],default:()=>G.map(({name:t})=>t)},titleGetter:{type:Function,default:t=>t.title},descriptionGetter:{type:Function,default:t=>t.frontmatter.description},summaryGetter:{type:Function,default:t=>t.summary},coverGetter:{type:Function,default:t=>t.cover},tagGetter:{type:Function,default:({frontmatter:t})=>t.tag||t.tags},inline:Boolean,colorful:Boolean},setup(t){const r=S(),a=b(()=>(T(t.services)?t.services.split(","):t.services).map(e=>$(e)?e.name&&e.link?e:null:G.find(({name:s})=>s===e)).filter(e=>e!=null)),c=b(()=>{const e={};return["titleGetter","descriptionGetter","summaryGetter","coverGetter","tagGetter"].forEach(s=>{if(O(t[s])){const d=t[s](r.value);d&&(e[s.replace("Getter","")]=d)}}),e});return()=>o("div",{class:"share-wrapper",style:t.inline?{display:"inline-block"}:{}},a.value.map(e=>o(B,{config:e,...c.value,plain:!t.colorful})))}});export{W as default};
//# sourceMappingURL=Share.js.map
