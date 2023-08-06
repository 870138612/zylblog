const e=JSON.parse('{"key":"v-fcad2272","path":"/interview/kuaishouone.html","title":"快手","lang":"zh-CN","frontmatter":{"title":"快手","icon":"duihua","category":["面经"],"tag":["快手","面经"]},"headers":[{"level":2,"title":"一面","slug":"一面","link":"#一面","children":[{"level":3,"title":"虚拟内存的概念","slug":"虚拟内存的概念","link":"#虚拟内存的概念","children":[]},{"level":3,"title":"操作系统中文件的实现","slug":"操作系统中文件的实现","link":"#操作系统中文件的实现","children":[]},{"level":3,"title":"多级缓存的作用","slug":"多级缓存的作用","link":"#多级缓存的作用","children":[]},{"level":3,"title":"访问一个网址的过程","slug":"访问一个网址的过程","link":"#访问一个网址的过程","children":[]},{"level":3,"title":"TCP 三次握手说说","slug":"tcp-三次握手说说","link":"#tcp-三次握手说说","children":[]},{"level":3,"title":"HTTP 和 HTTPS 的区别","slug":"http-和-https-的区别","link":"#http-和-https-的区别","children":[]},{"level":3,"title":"数据库为什么比 Redis 慢？","slug":"数据库为什么比-redis-慢","link":"#数据库为什么比-redis-慢","children":[]},{"level":3,"title":"如果一张表中有太多的列和太多的行，怎么进行优化？","slug":"如果一张表中有太多的列和太多的行-怎么进行优化","link":"#如果一张表中有太多的列和太多的行-怎么进行优化","children":[]},{"level":3,"title":"算法题：链表翻转","slug":"算法题-链表翻转","link":"#算法题-链表翻转","children":[]}]}],"git":{"createdTime":1691122962000,"updatedTime":1691305962000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":2}]},"readingTime":{"minutes":3.39,"words":1017},"filePathRelative":"interview/kuaishouone.md","localizedDate":"2023年8月4日","excerpt":"<p>⁉️ 个人回答不保证正确</p>\\n<h2> 一面</h2>\\n<h4> 自我介绍</h4>\\n<h4> 对电商项目的优化</h4>\\n<ul>\\n<li>更改了 JVM 中的老年代和新生代的内存分布，将秒杀的并发量提高。</li>\\n<li>使用 <code>CompletableFuture</code> 对 SKU 数据进行异步查询，提高了查询速度。</li>\\n<li>登录部分由原来的手动查询用户数据密码比对，改为了使用 <code>SpringSecurity</code> 进行登录认证，简化了开发步骤，另外使用 Redis 解决分布式下的用户数据共享。</li>\\n<li>使用 Sentinel 限制后端并发数，熔断降级保证服务安全可用。</li>\\n</ul>"}');export{e as data};
