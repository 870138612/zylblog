const d=(o,a)=>{const i=o.toLowerCase(),e=a.toLowerCase(),s=[];let n=0,l=0;const c=(t,p=!1)=>{let r="";l===0?r=t.length>20?`… ${t.slice(-20)}`:t:p?r=t.length+l>100?`${t.slice(0,100-l)}… `:t:r=t.length>20?`${t.slice(0,20)} … ${t.slice(-20)}`:t,r&&s.push(r),l+=r.length,p||(s.push(["strong",a]),l+=a.length,l>=100&&s.push(" …"))};let h=i.indexOf(e,n);if(h===-1)return null;for(;h>=0;){const t=h+e.length;if(c(o.slice(n,h)),n=t,l>100)break;h=i.indexOf(e,n)}return l<100&&c(o.slice(n),!0),s},g=Object.entries,y=Object.keys,f=o=>o.reduce((a,{type:i})=>a+(i==="title"?50:i==="heading"?20:i==="custom"?10:1),0),$=(o,a)=>{var i;const e={};for(const[s,n]of g(a)){const l=((i=a[s.replace(/\/[^\\]*$/,"")])==null?void 0:i.title)||"",c=`${l?`${l} > `:""}${n.title}`,h=d(n.title,o);h&&(e[c]=[...e[c]||[],{type:"title",path:s,display:h}]),n.customFields&&g(n.customFields).forEach(([t,p])=>{p.forEach(r=>{const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"custom",path:s,index:t,display:u}])})});for(const t of n.contents){const p=d(t.header,o);p&&(e[c]=[...e[c]||[],{type:"heading",path:s+(t.slug?`#${t.slug}`:""),display:p}]);for(const r of t.contents){const u=d(r,o);u&&(e[c]=[...e[c]||[],{type:"content",header:t.header,path:s+(t.slug?`#${t.slug}`:""),display:u}])}}}return y(e).sort((s,n)=>f(e[s])-f(e[n])).map(s=>({title:s,contents:e[s]}))},m=JSON.parse("{\"/\":{\"/intro.html\":{\"title\":\"介绍页\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"将你的个人介绍和档案放置在此处。\"]}]},\"/slides.html\":{\"title\":\"幻灯片页\",\"contents\":[]},\"/demo/disable.html\":{\"title\":\"布局与功能禁用\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\",\"本页面就是一个示例，禁用了如下功能:\",\"导航栏\",\"侧边栏\",\"路径导航\",\"页面信息\",\"贡献者\",\"编辑此页链接\",\"更新时间\",\"上一篇/下一篇 链接\",\"评论\",\"页脚\",\"返回顶部按钮\"]}],\"customFields\":{\"0\":[\"使用指南\"],\"1\":[\"禁用\"]}},\"/demo/encrypt.html\":{\"title\":\"密码加密的文章\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"实际的文章内容。\",\"段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。\",\"段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。\"]}],\"customFields\":{\"0\":[\"使用指南\"],\"1\":[\"文章加密\"]}},\"/demo/markdown.html\":{\"title\":\"Markdown 展示\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\",\"你应该创建和编写 Markdown 文件，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\"]},{\"header\":\"Markdown 介绍\",\"slug\":\"markdown-介绍\",\"contents\":[\"如果你是一个新手，还不会编写 Markdown，请先阅读 Markdown 介绍 和 Markdown 演示。\"]},{\"header\":\"Markdown 配置\",\"slug\":\"markdown-配置\",\"contents\":[\"VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\",\"相关信息\",\"Frontmatter 是 VuePress 中很重要的一个概念，如果你不了解它，你需要阅读 Frontmatter 介绍。\"]},{\"header\":\"Markdown 扩展\",\"slug\":\"markdown-扩展\",\"contents\":[\"VuePress 会使用 markdown-it 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 语法扩展 。\"]},{\"header\":\"VuePress 扩展\",\"slug\":\"vuepress-扩展\",\"contents\":[\"为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\",\"关于这些扩展，请阅读 VuePress 中的 Markdown 扩展。\"]},{\"header\":\"主题扩展\",\"slug\":\"主题扩展\",\"contents\":[\"通过 vuepress-plugin-md-enhance，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\"]},{\"header\":\"自定义容器\",\"slug\":\"自定义容器\",\"contents\":[\"安全的在 Markdown 中使用 {{ variable }}。\",\"自定义标题\",\"信息容器，包含 代码 与 链接。\",\"自定义标题\",\"提示容器\",\"自定义标题\",\"警告容器\",\"自定义标题\",\"危险容器\",\"自定义标题\",\"详情容器\",\"查看详情\"]},{\"header\":\"代码块\",\"slug\":\"代码块\",\"contents\":[\"查看详情\"]},{\"header\":\"上下角标\",\"slug\":\"上下角标\",\"contents\":[\"19th H2O\",\"查看详情\"]},{\"header\":\"自定义对齐\",\"slug\":\"自定义对齐\",\"contents\":[\"我是居中的\",\"我在右对齐\",\"查看详情\"]},{\"header\":\"Attrs\",\"slug\":\"attrs\",\"contents\":[\"一个拥有 ID 的 单词。\",\"查看详情\"]},{\"header\":\"脚注\",\"slug\":\"脚注\",\"contents\":[\"此文字有脚注[1].\",\"查看详情\"]},{\"header\":\"标记\",\"slug\":\"标记\",\"contents\":[\"你可以标记 重要的内容 。\",\"查看详情\"]},{\"header\":\"任务列表\",\"slug\":\"任务列表\",\"contents\":[\" 计划 1\",\" 计划 2\",\"查看详情\"]},{\"header\":\"图片增强\",\"slug\":\"图片增强\",\"contents\":[\"支持为图片设置颜色模式和大小\",\"查看详情\"]},{\"header\":\"卡片\",\"slug\":\"卡片\",\"contents\":[\"查看详情\"]},{\"header\":\"图表\",\"slug\":\"图表\",\"contents\":[\"查看详情\"]},{\"header\":\"Echarts\",\"slug\":\"echarts\",\"contents\":[\"查看详情\"]},{\"header\":\"流程图\",\"slug\":\"流程图\",\"contents\":[\"查看详情\"]},{\"header\":\"Mermaid\",\"slug\":\"mermaid\",\"contents\":[\"查看详情\"]},{\"header\":\"Tex 语法\",\"slug\":\"tex-语法\",\"contents\":[\"∂ωr∂r​(ωyω​)=(ωyω​){(logy)r+i=1∑r​ωi(−1)ir⋯(r−i+1)(logy)r−i​}\",\"查看详情\"]},{\"header\":\"导入文件\",\"slug\":\"导入文件\",\"contents\":[\"Markdown 展示\",\"页面展示\",\"禁用展示\",\"加密展示\",\"查看详情\"]},{\"header\":\"代码演示\",\"slug\":\"代码演示\",\"contents\":[\"查看详情\"]},{\"header\":\"样式化\",\"slug\":\"样式化\",\"contents\":[\"向 Mr.Hope 捐赠一杯咖啡。 \",\"查看详情\"]},{\"header\":\"交互演示\",\"slug\":\"交互演示\",\"contents\":[\"查看详情\"]},{\"header\":\"Vue 交互演示\",\"slug\":\"vue-交互演示\",\"contents\":[\"查看详情\"]},{\"header\":\"幻灯片\",\"slug\":\"幻灯片\",\"contents\":[\"查看详情\",\"这是脚注内容 ↩︎\"]}],\"customFields\":{\"0\":[\"使用指南\"],\"1\":[\"Markdown\"]}},\"/demo/page.html\":{\"title\":\"页面配置\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"more 注释之前的内容被视为文章摘要。\"]},{\"header\":\"页面信息\",\"slug\":\"页面信息\",\"contents\":[\"你可以在 Markdown 的 Frontmatter 中设置页面信息。\",\"作者设置为 Ms.Hope。\",\"写作日期为 2020 年 1 月 1 日\",\"分类为 “使用指南”\",\"标签为 “页面配置” 和 “使用指南”\"]},{\"header\":\"页面内容\",\"slug\":\"页面内容\",\"contents\":[\"你可以自由在这里书写你的 Markdown。\",\"提示\",\"你可以将图片和 Markdown 文件放置在一起，但是你需要使用相对链接./ 进行引用。\",\"对于 .vuepress/public 文件夹的图片，请使用绝对链接 / 进行引用。\",\"主题包含了一个自定义徽章可以使用:\",\"文字结尾应该有深蓝色的 徽章文字 徽章。 \"]},{\"header\":\"页面结构\",\"slug\":\"页面结构\",\"contents\":[\"此页面应当包含:\",\"路径导航\",\"标题和页面信息\",\"TOC (文章标题列表)\",\"贡献者、更新时间等页面元信息\",\"评论\",\"导航栏\",\"侧边栏\",\"页脚\",\"返回顶部按钮\",\"你可以通过主题选项和页面 Frontmatter 自定义它们。\"]}],\"customFields\":{\"0\":[\"使用指南\"],\"1\":[\"页面配置\",\"使用指南\"]}},\"/demo/\":{\"title\":\"主要功能与配置演示\",\"contents\":[{\"header\":\"目录\",\"slug\":\"目录\",\"contents\":[\"Markdown 展示\",\"页面展示\",\"禁用展示\",\"加密展示\"]}],\"customFields\":{\"0\":[\"使用指南\"]}},\"/posts/cherry.html\":{\"title\":\"樱桃\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"樱桃\"],\"1\":[\"红\",\"小\",\"圆\"]}},\"/posts/dragonfruit.html\":{\"title\":\"火龙果\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"火龙果\",\"水果\"],\"1\":[\"红\",\"大\"]}},\"/posts/strawberry.html\":{\"title\":\"草莓\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"水果\",\"草莓\"],\"1\":[\"红\",\"小\"]}},\"/posts/tomato.html\":{\"title\":\"番茄\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"蔬菜\"],\"1\":[\"红\",\"圆\"]}},\"/posts/banana/1.html\":{\"title\":\"香蕉 1\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"香蕉\",\"水果\"],\"1\":[\"黄\",\"弯曲的\",\"长\"]}},\"/posts/banana/2.html\":{\"title\":\"香蕉 2\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"一个被数字 10 星标了的香蕉文章。\"]},{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"香蕉\",\"水果\"],\"1\":[\"黄\",\"弯曲的\",\"长\"]}},\"/posts/banana/3.html\":{\"title\":\"香蕉 3\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"香蕉\"],\"1\":[\"黄\",\"弯曲的\",\"长\"]}},\"/posts/banana/4.html\":{\"title\":\"香蕉 4\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"香蕉\"],\"1\":[\"黄\",\"弯曲的\",\"长\"]}},\"/posts/apple/1.html\":{\"title\":\"苹果 1\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"苹果\"],\"1\":[\"红\",\"大\",\"圆\"]}},\"/posts/apple/2.html\":{\"title\":\"苹果 2\",\"contents\":[{\"header\":\"\",\"slug\":\"\",\"contents\":[\"一个被星标了的苹果文章。\"]},{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"苹果\"],\"1\":[\"红\",\"大\",\"圆\"]}},\"/posts/apple/3.html\":{\"title\":\"苹果 3\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"苹果\",\"水果\"],\"1\":[\"红\",\"大\",\"圆\"]}},\"/posts/apple/4.html\":{\"title\":\"苹果 4\",\"contents\":[{\"header\":\"标题 2\",\"slug\":\"标题-2\",\"contents\":[\"这里是内容。\"]},{\"header\":\"标题 3\",\"slug\":\"标题-3\",\"contents\":[\"这里是内容。\"]}],\"customFields\":{\"0\":[\"苹果\",\"水果\"],\"1\":[\"红\",\"大\",\"圆\"]}},\"/posts/\":{\"title\":\"Posts\",\"contents\":[]},\"/posts/banana/\":{\"title\":\"Banana\",\"contents\":[]},\"/posts/apple/\":{\"title\":\"Apple\",\"contents\":[]}}}");self.onmessage=({data:o})=>{self.postMessage($(o.query,m[o.routeLocale]))};
//# sourceMappingURL=original.js.map
