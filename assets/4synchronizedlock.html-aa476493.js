const e=JSON.parse('{"key":"v-d0bf4a88","path":"/java/3juc/4synchronizedlock.html","title":"synchronized 锁优化","lang":"zh-CN","frontmatter":{"title":"synchronized 锁优化","icon":"page","category":["Java"],"tag":["synchronized 锁优化","八股","并发编程"]},"headers":[{"level":2,"title":"自旋锁与自适应自旋","slug":"自旋锁与自适应自旋","link":"#自旋锁与自适应自旋","children":[]},{"level":2,"title":"锁消除","slug":"锁消除","link":"#锁消除","children":[]},{"level":2,"title":"锁粗化","slug":"锁粗化","link":"#锁粗化","children":[]},{"level":2,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":2,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]}],"git":{"createdTime":1684317269000,"updatedTime":1690530429000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":15}]},"readingTime":{"minutes":3.39,"words":1016},"filePathRelative":"java/3juc/4synchronizedlock.md","localizedDate":"2023年5月17日","excerpt":"<p>锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。</p>\\n"}');export{e as data};
