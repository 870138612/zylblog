const e=JSON.parse('{"key":"v-70f3e5b8","path":"/database/2redis/1redis.html","title":"Redis基础二","lang":"zh-CN","frontmatter":{"title":"Redis基础二","icon":"page","category":["数据库"],"tag":["Redis","八股"]},"headers":[{"level":2,"title":"Redis性能优化","slug":"redis性能优化","link":"#redis性能优化","children":[{"level":3,"title":"使用批量操作减少网络传输","slug":"使用批量操作减少网络传输","link":"#使用批量操作减少网络传输","children":[]},{"level":3,"title":"大量key集中过期问题","slug":"大量key集中过期问题","link":"#大量key集中过期问题","children":[]},{"level":3,"title":"Redis bigkey","slug":"redis-bigkey","link":"#redis-bigkey","children":[]},{"level":3,"title":"Redis hotkey（热 Key）","slug":"redis-hotkey-热-key","link":"#redis-hotkey-热-key","children":[]},{"level":3,"title":"慢查询命令","slug":"慢查询命令","link":"#慢查询命令","children":[]},{"level":3,"title":"Redis 内存碎片","slug":"redis-内存碎片","link":"#redis-内存碎片","children":[]}]},{"level":2,"title":"缓存穿透，雪崩，击穿","slug":"缓存穿透-雪崩-击穿","link":"#缓存穿透-雪崩-击穿","children":[{"level":3,"title":"缓存穿透（请求数据不存在）","slug":"缓存穿透-请求数据不存在","link":"#缓存穿透-请求数据不存在","children":[]},{"level":3,"title":"缓存雪崩（大量 key 同时失效）","slug":"缓存雪崩-大量-key-同时失效","link":"#缓存雪崩-大量-key-同时失效","children":[]},{"level":3,"title":"缓存击穿（热点 key 失效）","slug":"缓存击穿-热点-key-失效","link":"#缓存击穿-热点-key-失效","children":[]},{"level":3,"title":"缓存穿透和缓存击穿的区别？","slug":"缓存穿透和缓存击穿的区别","link":"#缓存穿透和缓存击穿的区别","children":[]},{"level":3,"title":"缓存雪崩和缓存击穿有什么区别？","slug":"缓存雪崩和缓存击穿有什么区别","link":"#缓存雪崩和缓存击穿有什么区别","children":[]},{"level":3,"title":"如何保证缓存和数据库数据的一致性？","slug":"如何保证缓存和数据库数据的一致性","link":"#如何保证缓存和数据库数据的一致性","children":[]},{"level":3,"title":"Redis 阻塞的常见原因","slug":"redis-阻塞的常见原因","link":"#redis-阻塞的常见原因","children":[]}]},{"level":2,"title":"Redis集群","slug":"redis集群","link":"#redis集群","children":[]}],"git":{"createdTime":1686303632000,"updatedTime":1691073374000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":17}]},"readingTime":{"minutes":14.82,"words":4445},"filePathRelative":"database/2redis/1redis.md","localizedDate":"2023年6月9日","excerpt":"<h2> Redis性能优化</h2>\\n<h3> 使用批量操作减少网络传输</h3>\\n<p>一个Redis命令的执行可以简化为以下4步：</p>\\n<ol>\\n<li>发送命令</li>\\n<li>命令排队</li>\\n<li>命令执行</li>\\n<li>返回结果</li>\\n</ol>\\n"}');export{e as data};
