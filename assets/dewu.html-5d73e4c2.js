const e=JSON.parse('{"key":"v-9148a8e4","path":"/note/binterview/dewu.html","title":"得物-Java开发-一面","lang":"zh-CN","frontmatter":{"title":"得物-Java开发-一面","icon":"duihua","date":"2023-09-02T00:00:00.000Z","star":true,"category":["面经"],"tag":["得物","面经"]},"headers":[{"level":2,"title":"一面","slug":"一面","link":"#一面","children":[{"level":3,"title":"说一说 CMS 和 G1 垃圾收集器","slug":"说一说-cms-和-g1-垃圾收集器","link":"#说一说-cms-和-g1-垃圾收集器","children":[]},{"level":3,"title":"ReentrantLock 中的公平锁和非公平锁是怎么实现的？","slug":"reentrantlock-中的公平锁和非公平锁是怎么实现的","link":"#reentrantlock-中的公平锁和非公平锁是怎么实现的","children":[]},{"level":3,"title":"redo log 和 undo log 的作用？","slug":"redo-log-和-undo-log-的作用","link":"#redo-log-和-undo-log-的作用","children":[]},{"level":3,"title":"两阶段提交了解吗？","slug":"两阶段提交了解吗","link":"#两阶段提交了解吗","children":[]},{"level":3,"title":"Spring 事务说说","slug":"spring-事务说说","link":"#spring-事务说说","children":[]},{"level":3,"title":"什么情况下会产生事务失效？","slug":"什么情况下会产生事务失效","link":"#什么情况下会产生事务失效","children":[]},{"level":3,"title":"什么情况下使用编程式事务什么情况下使用注解式事务？","slug":"什么情况下使用编程式事务什么情况下使用注解式事务","link":"#什么情况下使用编程式事务什么情况下使用注解式事务","children":[]},{"level":3,"title":"SSL/TSL 了解吗？","slug":"ssl-tsl-了解吗","link":"#ssl-tsl-了解吗","children":[]},{"level":3,"title":"国内输入谷歌网站但是访问不到，发生了什么？","slug":"国内输入谷歌网站但是访问不到-发生了什么","link":"#国内输入谷歌网站但是访问不到-发生了什么","children":[]},{"level":3,"title":"反问","slug":"反问","link":"#反问","children":[]}]}],"git":{"createdTime":1693805485000,"updatedTime":1694232398000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":3}]},"readingTime":{"minutes":4.94,"words":1481},"filePathRelative":"note/binterview/dewu.md","localizedDate":"2023年9月2日","excerpt":"<p>⁉️ 个人回答不保证正确</p>\\n<h2> 一面</h2>\\n<h3> 说一说 CMS 和 G1 垃圾收集器</h3>\\n<ul>\\n<li>CMS 是标记清除算法的垃圾回收器，运行流程分为初始标记、并发标记、重新标记、并发清除，其中初始标记和重新标记会产生 STW，对在并发标记阶段修改的引用采用增量更新方法，G1 将堆内存分为多个 Region 区域，可以作为年轻代或者老年代，运行流程分为初始标记、并发标记、最终标记、筛选回收，其中除了并发标记阶段都会产生 STW，对并发标记阶段产生的引用链修改采用原始快照的方法。</li>\\n</ul>\\n<h3> ReentrantLock 中的公平锁和非公平锁是怎么实现的？</h3>"}');export{e as data};
