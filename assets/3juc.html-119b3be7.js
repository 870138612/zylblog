const l=JSON.parse('{"key":"v-02befb44","path":"/java/3juc/3juc.html","title":"并发编程三","lang":"zh-CN","frontmatter":{"title":"并发编程三","icon":"page","category":["Java"],"tag":["并发编程","八股"]},"headers":[{"level":2,"title":"ThreadLocal","slug":"threadlocal","link":"#threadlocal","children":[{"level":3,"title":"ThreadLocal 有什么用？","slug":"threadlocal-有什么用","link":"#threadlocal-有什么用","children":[]},{"level":3,"title":"ThreadLocal原理","slug":"threadlocal原理","link":"#threadlocal原理","children":[]},{"level":3,"title":"ThreadLocal内存泄露","slug":"threadlocal内存泄露","link":"#threadlocal内存泄露","children":[]}]},{"level":2,"title":"线程池","slug":"线程池","link":"#线程池","children":[{"level":3,"title":"什么是线程池?","slug":"什么是线程池","link":"#什么是线程池","children":[]},{"level":3,"title":"为什么要用线程池？","slug":"为什么要用线程池","link":"#为什么要用线程池","children":[]},{"level":3,"title":"如何创建线程池？","slug":"如何创建线程池","link":"#如何创建线程池","children":[]},{"level":3,"title":"线程池的主要参数","slug":"线程池的主要参数","link":"#线程池的主要参数","children":[]},{"level":3,"title":"线程池的饱和策略有哪些？","slug":"线程池的饱和策略有哪些","link":"#线程池的饱和策略有哪些","children":[]},{"level":3,"title":"线程池中常用的阻塞队列有哪些？","slug":"线程池中常用的阻塞队列有哪些","link":"#线程池中常用的阻塞队列有哪些","children":[]},{"level":3,"title":"线程池处理任务的流程了解吗？","slug":"线程池处理任务的流程了解吗","link":"#线程池处理任务的流程了解吗","children":[]},{"level":3,"title":"如何设定线程池的大小？","slug":"如何设定线程池的大小","link":"#如何设定线程池的大小","children":[]}]},{"level":2,"title":"Future","slug":"future","link":"#future","children":[{"level":3,"title":"Future类有什么用？","slug":"future类有什么用","link":"#future类有什么用","children":[]},{"level":3,"title":"Callable 和 Future 有什么关系？","slug":"callable-和-future-有什么关系","link":"#callable-和-future-有什么关系","children":[]},{"level":3,"title":"CompletableFuture 类有什么用？","slug":"completablefuture-类有什么用","link":"#completablefuture-类有什么用","children":[]}]}],"git":{"createdTime":1684315795000,"updatedTime":1684413186000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":5}]},"readingTime":{"minutes":9.51,"words":2853},"filePathRelative":"java/3juc/3juc.md","localizedDate":"2023年5月17日","excerpt":"<h2> ThreadLocal</h2>\\n<h3> ThreadLocal 有什么用？</h3>\\n<p><code>ThreadLocal</code>类主要解决的就是让每个线程绑定自己的值，可以将<code>ThreadLocal</code>类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。</p>\\n<p>如果创建了一个<code>ThreadLocal</code>变量，那么访问这个变量的每一个线程都有这个变量的副本。可以使用 <code>get()</code> 和 <code>set()</code> 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。</p>\\n"}');export{l as data};
