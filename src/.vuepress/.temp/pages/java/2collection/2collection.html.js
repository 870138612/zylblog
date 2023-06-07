export const data = JSON.parse("{\"key\":\"v-1485935c\",\"path\":\"/java/2collection/2collection.html\",\"title\":\"Java集合二\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java集合二\",\"icon\":\"page\",\"star\":true,\"category\":[\"Java\"],\"tag\":[\"Java集合\",\"八股\"]},\"headers\":[{\"level\":2,\"title\":\"Map\",\"slug\":\"map\",\"link\":\"#map\",\"children\":[{\"level\":3,\"title\":\"HashMap 和 Hashtable 的区别\",\"slug\":\"hashmap-和-hashtable-的区别\",\"link\":\"#hashmap-和-hashtable-的区别\",\"children\":[]},{\"level\":3,\"title\":\"HashMap 和 TreeMap 区别\",\"slug\":\"hashmap-和-treemap-区别\",\"link\":\"#hashmap-和-treemap-区别\",\"children\":[]},{\"level\":3,\"title\":\"HashMap 的底层实现\",\"slug\":\"hashmap-的底层实现\",\"link\":\"#hashmap-的底层实现\",\"children\":[]},{\"level\":3,\"title\":\"HashMap 的长度为什么是 2 的幂次方?\",\"slug\":\"hashmap-的长度为什么是-2-的幂次方\",\"link\":\"#hashmap-的长度为什么是-2-的幂次方\",\"children\":[]},{\"level\":3,\"title\":\"HashMap 多线程操作导致死链问题\",\"slug\":\"hashmap-多线程操作导致死链问题\",\"link\":\"#hashmap-多线程操作导致死链问题\",\"children\":[]},{\"level\":3,\"title\":\"ConcurrentHashMap 和 Hashtable 的区别\",\"slug\":\"concurrenthashmap-和-hashtable-的区别\",\"link\":\"#concurrenthashmap-和-hashtable-的区别\",\"children\":[]},{\"level\":3,\"title\":\"JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？\",\"slug\":\"jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同\",\"link\":\"#jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同\",\"children\":[]}]}],\"git\":{\"createdTime\":1684222203000,\"updatedTime\":1684232385000,\"contributors\":[{\"name\":\"ZYL1210\",\"email\":\"870138612@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":4.05,\"words\":1215},\"filePathRelative\":\"java/2collection/2collection.md\",\"localizedDate\":\"2023年5月16日\",\"excerpt\":\"<h2> Map</h2>\\n<h3> HashMap 和 Hashtable 的区别</h3>\\n<ul>\\n<li><strong>线程是否安全</strong>：<code>HashMap</code>是非线程安全的，<code>Hashtable</code>是线程安全的，内部方法使用<code>synchronized</code>修饰。</li>\\n<li><strong>效率</strong>：因为锁的问题，<code>HashMap</code>的效率要稍微好点。</li>\\n<li><strong>是否能存储Null Key和Value</strong>：<code>HashMap</code>能存储<code>null</code>的key和value，但是作为<code>null</code>的key只能有一个，<code>Hashtable</code>不能有<code>null</code>key和value。</li>\\n<li><strong>扩容</strong>：<code>Hashtable</code>默认初始大小是11，扩容之后变为2n+1。<code>HashMap</code>默认大小是16，当元素个数超过负载因子*表长时扩容，每次扩容变为原来的两倍。</li>\\n<li><strong>底层</strong>：JDK1.8之后<code>HashMap</code>底层使用数组+链表/红黑树，特定条件链表转化为红黑树，<code>Hashtable</code>则没有转化为红黑树的机制。</li>\\n</ul>\\n\"}")
