const e=JSON.parse('{"key":"v-6cd0e214","path":"/java/4jvm/6jvmparameters.html","title":"JVM重要参数","lang":"zh-CN","frontmatter":{"title":"JVM重要参数","icon":"page","category":["Java"],"tag":["JVM重要参数","八股"]},"headers":[{"level":2,"title":"堆内存相关","slug":"堆内存相关","link":"#堆内存相关","children":[{"level":3,"title":"指定堆内存-Xms和-Xmx","slug":"指定堆内存-xms和-xmx","link":"#指定堆内存-xms和-xmx","children":[]},{"level":3,"title":"指定新生代内存（Young Generation）","slug":"指定新生代内存-young-generation","link":"#指定新生代内存-young-generation","children":[]},{"level":3,"title":"指定永久代/元空间大小","slug":"指定永久代-元空间大小","link":"#指定永久代-元空间大小","children":[]}]},{"level":2,"title":"垃圾收集器相关","slug":"垃圾收集器相关","link":"#垃圾收集器相关","children":[{"level":3,"title":"垃圾回收器","slug":"垃圾回收器","link":"#垃圾回收器","children":[]},{"level":3,"title":"GC 日志记录","slug":"gc-日志记录","link":"#gc-日志记录","children":[]}]},{"level":2,"title":"处理 OOM","slug":"处理-oom","link":"#处理-oom","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1684762909000,"updatedTime":1686917885000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":8}]},"readingTime":{"minutes":4.38,"words":1314},"filePathRelative":"java/4jvm/6jvmparameters.md","localizedDate":"2023年5月22日","excerpt":"<h2> 堆内存相关</h2>\\n<h3> 指定堆内存<code>-Xms</code>和<code>-Xmx</code></h3>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Xms</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>heap size<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">[</span>unit<span class=\\"token punctuation\\">]</span>\\n<span class=\\"token operator\\">-</span><span class=\\"token class-name\\">Xmx</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span>heap size<span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">[</span>unit<span class=\\"token punctuation\\">]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>为JVM堆内存分配最大5GB，最小2GB内存：</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>-Xms2G -Xmx5G\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
