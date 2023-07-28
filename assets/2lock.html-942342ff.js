const e=JSON.parse('{"key":"v-41f5be07","path":"/database/2redis/2lock.html","title":"分布式锁","lang":"zh-CN","frontmatter":{"title":"分布式锁","icon":"page","category":["数据库"],"tag":["Redis","八股"]},"headers":[{"level":2,"title":"基于 Redis 实现分布式锁","slug":"基于-redis-实现分布式锁","link":"#基于-redis-实现分布式锁","children":[{"level":3,"title":"如何基于-redis-实现一个最简易的分布式锁如何基于 Redis 实现一个最简易的分布式锁？","slug":"如何基于-redis-实现一个最简易的分布式锁如何基于-redis-实现一个最简易的分布式锁","link":"#如何基于-redis-实现一个最简易的分布式锁如何基于-redis-实现一个最简易的分布式锁","children":[]},{"level":3,"title":"如何防止释放锁逻辑失效导致的锁无法释放？","slug":"如何防止释放锁逻辑失效导致的锁无法释放","link":"#如何防止释放锁逻辑失效导致的锁无法释放","children":[]},{"level":3,"title":"如何实现锁的优雅续期？","slug":"如何实现锁的优雅续期","link":"#如何实现锁的优雅续期","children":[]},{"level":3,"title":"如何实现可重入锁？","slug":"如何实现可重入锁","link":"#如何实现可重入锁","children":[]},{"level":3,"title":"Redis 如何解决集群情况下分布式锁的可靠性？","slug":"redis-如何解决集群情况下分布式锁的可靠性","link":"#redis-如何解决集群情况下分布式锁的可靠性","children":[]}]},{"level":2,"title":"基于 ZooKeeper 实现分布式锁","slug":"基于-zookeeper-实现分布式锁","link":"#基于-zookeeper-实现分布式锁","children":[{"level":3,"title":"为什么要用临时顺序节点？","slug":"为什么要用临时顺序节点","link":"#为什么要用临时顺序节点","children":[]},{"level":3,"title":"为什么要设置对前一个节点的监听？","slug":"为什么要设置对前一个节点的监听","link":"#为什么要设置对前一个节点的监听","children":[]}]}],"git":{"createdTime":1686140114000,"updatedTime":1690538876000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":16}]},"readingTime":{"minutes":9.01,"words":2703},"filePathRelative":"database/2redis/2lock.md","localizedDate":"2023年6月7日","excerpt":"<p>一个最基本的分布式锁需要满足：</p>\\n<ul>\\n<li><strong>互斥</strong>：任意一个时刻，锁只能被一个线程持有；</li>\\n<li><strong>高可用</strong>：锁服务是高可用的。并且，即使客户端的释放锁的代码逻辑出现问题，锁最终一定还是会被释放，不会影响其他线程对共享资源的访问。</li>\\n<li><strong>可重入</strong>：一个节点获取了锁之后，还可以再次获取锁。</li>\\n</ul>\\n"}');export{e as data};
