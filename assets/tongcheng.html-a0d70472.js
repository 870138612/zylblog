import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as l}from"./app-8de5170c.js";const r={},h=l('<p>⁉️ 个人回答不保证正确</p><h2 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h2><p>面试官迟到了一分钟还说抱歉，我真的哭死。</p><h3 id="介绍一下简历上的项目" tabindex="-1"><a class="header-anchor" href="#介绍一下简历上的项目" aria-hidden="true">#</a> 介绍一下简历上的项目</h3><ul><li>第一个项目为一个电商的项目，通过 Nginx 动静分离，分为多个微服务。。。。。。</li></ul><h3 id="介绍一下-ioc-和-aop" tabindex="-1"><a class="header-anchor" href="#介绍一下-ioc-和-aop" aria-hidden="true">#</a> 介绍一下 IOC 和 AOP</h3><ul><li>IOC 又叫做控制翻转，在没有使用 Spring 之前，写后端的接口需要通过编写 Servlet 类来完成，有了控制反转之后，就能将这些对象的创建过程交给 Spring 来做，这样程序员就能注重于代码开发而不是对象创建。</li><li>AOP 是 SpringBoot 中的很重要的特性，面向切面编程，设计模式中讲到开闭原则，应该不修改原有的代码下扩展业务逻辑，Spring 可以在不修改原有代码的情况下实现对方法的前后的增强。主要使用到生成动态代理来进行增强，以 Spring 事务举例，通过生成一个 CGLIB 对象来获取数据库连接，将提交模式改为手动，之后执行数据库操作，发生异常则进行回滚，否则提交。</li><li>了解的就这些了，可能还有一部分没有讲到。</li><li><strong>没关系已经答得很好了</strong>。</li></ul><h3 id="springboot-约定优于配置是什么意思" tabindex="-1"><a class="header-anchor" href="#springboot-约定优于配置是什么意思" aria-hidden="true">#</a> SpringBoot 约定优于配置是什么意思？</h3><ul><li>就是 SpringBoot 中有默认的配置，程序员不去配置就会使用这些默认的配置，用意在于帮程序员聚焦于业务逻辑上。</li><li>例如不对 SpringBoot 的后端服务器进行配置，则会默认使用 Tomcat 作为后端服务器。</li></ul><h3 id="spring-中的事务传播行为有哪些" tabindex="-1"><a class="header-anchor" href="#spring-中的事务传播行为有哪些" aria-hidden="true">#</a> Spring 中的事务传播行为有哪些？</h3><ul><li>传播行为的配置为事务注解里的 propagation 属性。</li><li>REQUIRED（默认）：如果当前没有事务则开启一个新的事务，如果存在事务则加入。</li><li>SUPPORTS：如果存在事务则加入，否则以非事务模式运行。</li><li>MANDATORY：如果存在事务则加入，如果不存在事务则抛出异常。</li><li>NEVER：从来不使用事务。</li><li>NESTED：如果存在事务则将当前事务嵌套进去，否则开启一个新的事务。</li></ul><h3 id="java-中有哪些类型的锁" tabindex="-1"><a class="header-anchor" href="#java-中有哪些类型的锁" aria-hidden="true">#</a> Java 中有哪些类型的锁？</h3><ul><li>是锁的分类还是具体的锁？</li><li><strong>锁的分类。</strong></li><li>读锁，写锁，互斥锁，同步锁。（重入锁，读写锁，公平锁，互斥锁，信号量，偏向锁）</li></ul><h3 id="死锁发生的原因-怎么防止" tabindex="-1"><a class="header-anchor" href="#死锁发生的原因-怎么防止" aria-hidden="true">#</a> 死锁发生的原因？怎么防止？</h3><ul><li>操作系统中讲到死锁是因为两个或者以上的进程因为竞争资源导致停顿，如果没有外力作用则都无法向前推进。</li><li>死锁产生有四个必要条件：互斥、不剥夺、请求并保持、环路等待。</li><li>预防采取破坏第三个条件或者第四个，分别采取资源静态分配和资源有序分配方法。</li><li>避免死锁采用银行家算法，死锁检测和解除用到死锁定理，资源分配图，发生死锁之后进行进程回退，进程撤销等。</li></ul><h3 id="内存泄漏的理解" tabindex="-1"><a class="header-anchor" href="#内存泄漏的理解" aria-hidden="true">#</a> 内存泄漏的理解</h3><ul><li>JVM 中有四种引用类型，分别是强软弱虚，其中强引用不会被 GC，而软引用和弱引用会被 GC。</li><li>例如 ThreadLocal 中包含一个内部类 ThreadLocalMap，是一个 Map，放入元素的 key 是弱引用而 value 是强引用，所以 key 可能会被 GC，则会导致 value 也取不到，内存泄漏。</li><li><strong>生产中如何排查？比如我提一点，及时释放动态分配的内存</strong></li><li>还是不知道怎么回答。</li></ul><h3 id="sql-语句中关键字的优先级顺序" tabindex="-1"><a class="header-anchor" href="#sql-语句中关键字的优先级顺序" aria-hidden="true">#</a> SQL 语句中关键字的优先级顺序</h3><ul><li>我尝试回答一下不一定对，from-》where-》group by-》having-》order by-》limit。（应该没错）</li></ul><h3 id="如何排查-sql-是不是一个慢查询" tabindex="-1"><a class="header-anchor" href="#如何排查-sql-是不是一个慢查询" aria-hidden="true">#</a> 如何排查 SQL 是不是一个慢查询？</h3><ul><li>生产阶段通过在 SQL 前添加 EXPLAIN 关键字，查看 SQL 的运行日志。</li><li>例如字段 type 就能看出这个是哪种类型的操作，其中最好的是 system 类型，然后到 const，最差的是 all 表示全盘扫描。</li><li>通过 key 可以查看 SQL 是不是走了索引。</li></ul><h3 id="索引失效问题" tabindex="-1"><a class="header-anchor" href="#索引失效问题" aria-hidden="true">#</a> 索引失效问题？</h3><ul><li>最左匹配原则。</li><li>查询中使用了函数计算。</li><li>or 关键字两端有一个没有走索引。</li><li>隐式转换。</li></ul><h3 id="如何对-mysql-的性能进行调优" tabindex="-1"><a class="header-anchor" href="#如何对-mysql-的性能进行调优" aria-hidden="true">#</a> 如何对 MySQL 的性能进行调优？</h3><ul><li>将经常查询或者不怎么变化的数据放入到 Redis 中。</li><li>建立索引加快查询速度。</li><li>分库分表。</li><li><strong>分库分表应该怎么做？</strong></li><li>我在项目中的表数据并不是很多所以没有做分表，但是做了分库，由于整个项目是微服务构建的，所以每一个微服务有各自的职责，根据数据自治原则，例如订单的微服务就应该管理其对应的订单库，产品微服务应该管理对应的产品库。</li></ul><h3 id="redis-能用在什么场景上" tabindex="-1"><a class="header-anchor" href="#redis-能用在什么场景上" aria-hidden="true">#</a> Redis 能用在什么场景上？</h3><ul><li>Redis 运行在内存上，所以对并发或者响应要求较高的场景都能用到。</li><li>例如在本项目中，将不怎么变化的 SKU 商品数据放入 Redis 中，另外用户登录之后将用户数据放入到 Redis 中以实现多模块的用户数据共享。</li><li>此外 Redis 还可以用作分布式锁解决缓存击穿问题。</li></ul><h3 id="redis-的持久化方式" tabindex="-1"><a class="header-anchor" href="#redis-的持久化方式" aria-hidden="true">#</a> Redis 的持久化方式</h3><ul><li>RDB 是对内存做快照，有两种创建快照的方法，save 使用主线程进行持久化，bgsave 是创建一个新的线程进行持久化，创建 RDB 占用 CPU 和 IO 资源，数据实时性不是很好，但是 Redis 宕机之后恢复的速度很快。</li><li>AOF 是追加文件的方式，类似于 InnoDB 的 binlog，将数据的操作采用追加的方式记录，整体过程很快，但是当 AOF 文件较大的时候会产生重写，也会占用较多的资源，这种方式的实时性好，但是 Redis 宕机之后恢复的速度较慢。</li></ul><h3 id="热-key-问题的解决方案" tabindex="-1"><a class="header-anchor" href="#热-key-问题的解决方案" aria-hidden="true">#</a> 热 key 问题的解决方案</h3><ul><li>Redis 中存在缓存穿透，缓存雪崩，缓存击穿，其中热 key 问题就是缓存击穿。</li><li>以项目中的秒杀场景举例，每一个秒杀场次都有对应的时间段，在时间段内才能进行秒杀请求，所以保证热 key 在该秒杀场景下不要过期就能解决热 key 问题，另外如果热 key 意外过期，可以在对数据库请求前添加互斥锁来解决缓存击穿问题。</li></ul><h3 id="bio-和-nio" tabindex="-1"><a class="header-anchor" href="#bio-和-nio" aria-hidden="true">#</a> BIO 和 NIO</h3><ul><li>按照分类来说 BIO 是阻塞 IO，CPU 在发送请求之后会一直等待 IO 数据准备好。不能做其他的事情。</li><li>NIO 是非阻塞 IO，请求发送之后就能立即返回，等到数据准备好了，通知 CPU 来做后续的事情。</li><li>Java 中的 NIO 可以看成一种多路复用的模型，IO 请求发送之后就能做其他事情，等到数据准备好了再进行后续。</li><li><strong>使用 BIO 的中间件有哪些？</strong></li><li>Redis 中通过单线程处理多个请求，属于 IO 多路复用，Redis 中通过建立在 TCP 链接上的信道传输数据，另外 Tomcat 监听一个端口同事处理多个请求所以也是 NIO。</li></ul><h3 id="用户的越权如何解决" tabindex="-1"><a class="header-anchor" href="#用户的越权如何解决" aria-hidden="true">#</a> 用户的越权如何解决？</h3><ul><li>越权指的是？</li><li><strong>例如没登录的用户来请求需要登录的接口。</strong></li><li>商城项目中对用户的账号密码验证之后会将用户的数据放入 Redis 中，并返回 token 给前端，前端的请求会被过滤器拦截，如果携带了正确的 token 则能直接取出用户数据得到用户的权限。</li></ul><h3 id="如果有个接口性能比较差如何做优化" tabindex="-1"><a class="header-anchor" href="#如果有个接口性能比较差如何做优化" aria-hidden="true">#</a> 如果有个接口性能比较差如何做优化？</h3><ul><li>接口优化在本项目中的体现：通过 zipkin 链路追踪发现 SKU 商品信息的查询花费时间较长，因为商品包含很多数据，需要去多个表中查询，因此采用异步编排将多个请求交给线程池执行，通过并发提交接口响应速度。</li><li>另外在秒杀场景中做压力测试，通过 Jconsole 发现老年代的 GC 频率较高，通过 JVM 参数 NewRatio 提高了老年代的比率，使得秒杀的吞吐量提高了。</li></ul><h3 id="反问" tabindex="-1"><a class="header-anchor" href="#反问" aria-hidden="true">#</a> 反问</h3><h2 id="二面" tabindex="-1"><a class="header-anchor" href="#二面" aria-hidden="true">#</a> 二面</h2><p>面试官看起来像个大佬。没有太多八股问题，20 分钟结束。</p><h3 id="登录部分怎么做的" tabindex="-1"><a class="header-anchor" href="#登录部分怎么做的" aria-hidden="true">#</a> 登录部分怎么做的？</h3><h3 id="redis-提高并发指的是" tabindex="-1"><a class="header-anchor" href="#redis-提高并发指的是" aria-hidden="true">#</a> Redis 提高并发指的是？</h3><h3 id="分布式锁怎么做的-有了解原理吗" tabindex="-1"><a class="header-anchor" href="#分布式锁怎么做的-有了解原理吗" aria-hidden="true">#</a> 分布式锁怎么做的，有了解原理吗？</h3><h3 id="每个用户查询自己的订单数据如何做数据隔离的" tabindex="-1"><a class="header-anchor" href="#每个用户查询自己的订单数据如何做数据隔离的" aria-hidden="true">#</a> 每个用户查询自己的订单数据如何做数据隔离的？</h3><h3 id="rabbitmq-削峰填谷说一下" tabindex="-1"><a class="header-anchor" href="#rabbitmq-削峰填谷说一下" aria-hidden="true">#</a> RabbitMQ 削峰填谷说一下</h3><h3 id="如果后端并发量承受不了如何做优化" tabindex="-1"><a class="header-anchor" href="#如果后端并发量承受不了如何做优化" aria-hidden="true">#</a> 如果后端并发量承受不了如何做优化？</h3><h3 id="反问-1" tabindex="-1"><a class="header-anchor" href="#反问-1" aria-hidden="true">#</a> 反问</h3>',47),d=[h];function n(s,t){return a(),e("div",null,d)}const u=i(r,[["render",n],["__file","tongcheng.html.vue"]]);export{u as default};
