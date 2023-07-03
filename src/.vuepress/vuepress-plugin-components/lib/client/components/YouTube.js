import{usePageLang as p}from"@vuepress/client";import{defineComponent as y,computed as a,h as o}from"vue";import{startsWith as f}from"vuepress-shared/client";import"../styles/youtube.scss";import{u as m}from"../size-daba93c1.js";import{v as g}from"../iframeAllow-c79e5aae.js";import"@vuepress/shared";import"@vueuse/core";var c=y({name:"YouTube",props:{id:{type:String,default:""},title:{type:String,default:"A YouTube video"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},autoplay:Boolean,loop:Boolean,showCc:Boolean,showAnnotations:Boolean,start:{type:[String,Number],default:void 0},end:{type:[String,Number],default:void 0},defaultCcLang:{type:String,default:""},uiLang:{type:String,default:""},listType:{type:String,default:""},list:{type:String,default:""},playlist:{type:String,default:""},disableControls:Boolean,disableFullscreen:Boolean,disableKeyboard:Boolean},setup(t){const i=p(),{el:r,width:u,height:n}=m(t),s=a(()=>t.id?`${t.id}?`:t.listType==="playlist"&&t.list?`?listType=playlist&list=${f(t.list,"PL")?t.list:`PL${t.list}`}&`:null),d=a(()=>{const l=new URLSearchParams;return t.autoplay&&l.set("autoplay","1"),t.loop&&l.set("loop","1"),t.showCc&&l.set("cc_load_policy","1"),t.showAnnotations&&l.set("iv_load_policy","3"),t.start&&l.set("start",t.start.toString()),t.end&&l.set("end",t.end.toString()),l.set("hl",t.uiLang||i.value),l.set("cc_lang_pref",t.defaultCcLang||i.value),l.set("color","white"),t.disableControls&&l.set("controls","0"),t.disableFullscreen&&l.set("fs","0"),t.disableKeyboard&&l.set("disablekb","1"),t.playlist&&l.set("playlist",t.playlist),l.toString()}),e=a(()=>s.value?`https://www.youtube.com/embed/${s.value}${d.value}`:null);return()=>e.value?[o("div",{class:"youtube-desc"},o("a",{class:"sr-only",href:e.value},t.title)),o("iframe",{ref:r,src:e.value,title:t.title,class:"youtube-iframe",allow:g,style:{width:u.value,height:n.value}})]:null}});export{c as default};
//# sourceMappingURL=YouTube.js.map