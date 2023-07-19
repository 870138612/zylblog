import d from"@stackblitz/sdk";import{defineComponent as n,computed as p,onMounted as u,h as e}from"vue";import"../styles/stack-blitz.scss";import{u as h}from"../size-daba93c1.js";import"@vuepress/shared";import"@vueuse/core";const a=d;var m=n({name:"StackBlitz",props:{id:{type:String,required:!0},type:{type:String,default:"project"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},file:{type:[String,Array],default:""},initialPath:{type:String,default:""},embed:Boolean,load:Boolean,view:{type:String,default:"preview"},hideExplorer:Boolean,hideNavigation:Boolean,hideDevtools:Boolean,terminalHeight:{type:[String,Number],default:30},devToolsHeight:{type:[String,Number],default:30},text:{type:String,default:"Open in StackBlitz"},theme:{type:String,default:"dark"}},setup(t){const{el:i,width:r,height:l}=h(t),o=p(()=>({openFile:t.file,view:t.view,theme:t.theme,clickToLoad:t.load,hideExplorer:t.hideExplorer,hideNavigation:t.hideNavigation,hideDevTools:t.hideDevtools,initialPath:t.initialPath}));return u(()=>{t.embed&&a[t.type==="github"?"embedGithubProject":"embedProjectId"](i.value,t.id,o.value)}),()=>t.embed?e("div",{ref:i,class:"stackblitz-container",style:{width:r.value,height:l.value}}):e("div",{class:"stackblitz-container"},e("button",{type:"button",class:"stackblitz-button",onClick:()=>{a[t.type==="github"?"openGithubProject":"openProjectId"](t.id,o.value)}},t.text))}});export{m as default};
//# sourceMappingURL=StackBlitz.js.map