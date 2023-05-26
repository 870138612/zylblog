const l=JSON.parse('{"key":"v-616d4a15","path":"/java/4jvm/1memory.html","title":"JVM内存结构","lang":"zh-CN","frontmatter":{"title":"JVM内存结构","icon":"page","category":["Java"],"tag":["JVM内存结构","八股"]},"headers":[{"level":2,"title":"运行时数据区域","slug":"运行时数据区域","link":"#运行时数据区域","children":[]},{"level":2,"title":"运行时常量池（方法区内部）","slug":"运行时常量池-方法区内部","link":"#运行时常量池-方法区内部","children":[]},{"level":2,"title":"字符串常量池","slug":"字符串常量池","link":"#字符串常量池","children":[]},{"level":2,"title":"JVM中对象的创建","slug":"jvm中对象的创建","link":"#jvm中对象的创建","children":[{"level":3,"title":"1：类加载检查","slug":"_1-类加载检查","link":"#_1-类加载检查","children":[]},{"level":3,"title":"2：分配内存","slug":"_2-分配内存","link":"#_2-分配内存","children":[]},{"level":3,"title":"3：初始化零值","slug":"_3-初始化零值","link":"#_3-初始化零值","children":[]},{"level":3,"title":"4：设置对象头","slug":"_4-设置对象头","link":"#_4-设置对象头","children":[]},{"level":3,"title":"5：执行 init 方法","slug":"_5-执行-init-方法","link":"#_5-执行-init-方法","children":[]}]},{"level":2,"title":"对象的内存布局","slug":"对象的内存布局","link":"#对象的内存布局","children":[]},{"level":2,"title":"对象的访问定位","slug":"对象的访问定位","link":"#对象的访问定位","children":[{"level":3,"title":"直接指针","slug":"直接指针","link":"#直接指针","children":[]},{"level":3,"title":"句柄","slug":"句柄","link":"#句柄","children":[]}]}],"git":{"createdTime":1684479049000,"updatedTime":1684495137000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":4}]},"readingTime":{"minutes":7.66,"words":2298},"filePathRelative":"java/4jvm/1memory.md","localizedDate":"2023年5月19日","excerpt":"<h2> 运行时数据区域</h2>\\n<h4> <strong>线程私有的：</strong></h4>\\n<ul>\\n<li>\\n<h5> 程序计数器</h5>\\n<ul>\\n<li>一块很小的内存区域，保存了将要执行指令的地址。为了线程切换之后能恢复到正确的执行位置，每一个线程都需要一个程序计数器，各线程之间计数器互不影响，称为“线程私有”的内存。</li>\\n<li>程序计数器是唯一一个不会出现OOM的内存区域，随着线程的创建而创建，线程的消亡而消亡。</li>\\n</ul>\\n</li>\\n</ul>\\n"}');export{l as data};
