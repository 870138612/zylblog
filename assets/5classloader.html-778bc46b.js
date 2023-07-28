const l=JSON.parse('{"key":"v-494f04b5","path":"/java/4jvm/5classloader.html","title":"类加载器","lang":"zh-CN","frontmatter":{"title":"类加载器","icon":"page","category":["Java"],"tag":["类加载器","八股"]},"headers":[{"level":2,"title":"类加载器","slug":"类加载器","link":"#类加载器","children":[{"level":3,"title":"类加载器的加载规则","slug":"类加载器的加载规则","link":"#类加载器的加载规则","children":[]},{"level":3,"title":"类加载器总结","slug":"类加载器总结","link":"#类加载器总结","children":[]},{"level":3,"title":"自定义类加载器","slug":"自定义类加载器","link":"#自定义类加载器","children":[]}]},{"level":2,"title":"双亲委派","slug":"双亲委派","link":"#双亲委派","children":[{"level":3,"title":"双亲委派模型的执行流程","slug":"双亲委派模型的执行流程","link":"#双亲委派模型的执行流程","children":[]},{"level":3,"title":"双亲委派的好处","slug":"双亲委派的好处","link":"#双亲委派的好处","children":[]},{"level":3,"title":"打破双亲委派模型方法","slug":"打破双亲委派模型方法","link":"#打破双亲委派模型方法","children":[]}]}],"git":{"createdTime":1684748069000,"updatedTime":1690538876000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":16}]},"readingTime":{"minutes":6.73,"words":2019},"filePathRelative":"java/4jvm/5classloader.md","localizedDate":"2023年5月22日","excerpt":"<h2> 类加载器</h2>\\n<ul>\\n<li>类加载器是一个负责加载类的对象，用于实现类加载过程中的第一步。</li>\\n<li>每一个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。</li>\\n<li>数组类不是通过 <code>ClassLoader</code> 创建的，是由 JVM 自动产生的</li>\\n</ul>\\n<p>类加载器的作用就是加载 Java 类的字节码（<code>.class</code> 文件）到 JVM 中，字节码可以使源程序（<code>.java</code> 文件）经过编译而来，也可以是通过工具动态生成或者是从网络上下载而来。</p>\\n"}');export{l as data};
