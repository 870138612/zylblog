const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/intro.html\":{\"title\":\"关于我\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"杭州某电专计算机专业研二学生\",\"科研狗混子，摸鱼王者，摄影爱好者\",\"基于开源项目vuepress-theme-hope\\n使用腾讯CDN和对象存储加快加载速度\"]}]},\"/home/\":{\"title\":\"欢迎来到我的空间\",\"contents\":[{\"header\":\"快速导航\",\"slug\":\"快速导航\",\"contents\":[\"Java\",\"数据库\",\"中间件\",\"框架\",\"笔记\",\"面经\",\"拍拍\",\"关于我\"]}]},\"/java/\":{\"title\":\"Java\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Java基础\",\"JVM\",\"JUC\"]}]},\"/photo/99%E5%B9%B3%E6%BD%AD.html\":{\"title\":\"平潭四月\",\"contents\":[{\"header\":\"2023年四月\",\"slug\":\"_2023年四月\",\"contents\":[\" 去年八月去平潭看海，大太阳晒的掉皮，不过风景是真滴好看 对于特别喜欢看海的人不会放过每一次机会，于是今年四月我又来平潭了。\",\" ⭐猴研岛，68海里景区，大风下的猴研岛\",\" ⭐去北线的路上，照片裁成宽幅，挺有回忆的感觉，偶遇安徽老乡\",\" ⭐仙人井景区，后面的天气稍微好了一点，不过还是很大的风\",\" ⭐环岛路旁随便一拍都很好看\",\" ⭐长江澳风车田，看着大海就很爽\",\" ⭐北部湾生态长廊落日\",\" ⭐有新人在拍婚纱照\",\" ⭐晚霞映在海面上\",\"image.png\",\"☀️下次还来！\"]}],\"customFields\":{\"0\":[\"摄影\"],\"1\":[\"平潭\",\"旅拍\"]}},\"/photo/\":{\"title\":\"拍拍\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"平潭\"]}]},\"/java/1java/\":{\"title\":\"Java基础\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Java基础\"]}]},\"/java/1java/java.html\":{\"title\":\"Java基础\",\"contents\":[],\"customFields\":{\"0\":[\"Java\"],\"1\":[\"Java\",\"八股\"]}},\"/java/2jvm/\":{\"title\":\"JVM\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Java\"]}]},\"/java/3juc/\":{\"title\":\"JUC\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"Java\"]}]},\"/middleware/\":{\"title\":\"Middleware\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
