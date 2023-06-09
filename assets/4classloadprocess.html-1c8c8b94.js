const e=JSON.parse('{"key":"v-5d9b8262","path":"/java/4jvm/4classloadprocess.html","title":"类加载过程","lang":"zh-CN","frontmatter":{"title":"类加载过程","icon":"page","star":true,"category":["Java"],"tag":["类加载过程","八股"]},"headers":[{"level":2,"title":"类的生命周期","slug":"类的生命周期","link":"#类的生命周期","children":[]},{"level":2,"title":"类加载过程","slug":"类加载过程","link":"#类加载过程","children":[{"level":3,"title":"加载","slug":"加载","link":"#加载","children":[]},{"level":3,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":3,"title":"准备","slug":"准备","link":"#准备","children":[]},{"level":3,"title":"解析","slug":"解析","link":"#解析","children":[]},{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]}]},{"level":2,"title":"类卸载","slug":"类卸载","link":"#类卸载","children":[]}],"git":{"createdTime":1684667376000,"updatedTime":1686141745000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":4}]},"readingTime":{"minutes":6.2,"words":1859},"filePathRelative":"java/4jvm/4classloadprocess.md","localizedDate":"2023年5月21日","excerpt":"<h2> 类的生命周期</h2>\\n<p>类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。</p>\\n<p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。</p>\\n<p>其中连接过程分为：<strong>验证-&gt;准备-&gt;解析</strong>。</p>\\n<p>整体流程为：<strong>加载-&gt;验证-&gt;准备-&gt;解析-&gt;初始化</strong>。</p>\\n"}');export{e as data};
