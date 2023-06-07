<template><div><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<h3 id="什么是-redis" tabindex="-1"><a class="header-anchor" href="#什么是-redis" aria-hidden="true">#</a> 什么是 Redis？</h3>
<p>Redis 是一个基于 C 语言开发的开源数据库（BSD 许可），与传统数据库不同的是 Redis 的数据是存在内存中的（内存数据库），读写速度非常快，被广泛应用于缓存方向。并且，Redis 存储的是 KV 键值对数据。</p>
<p>为了满足不同的业务场景，Redis 内置了多种数据类型实现（比如 String、Hash、Sorted Set、Bitmap、HyperLogLog、GEO）。并且，Redis 还支持事务、持久化、Lua 脚本、多种开箱即用的集群方案（Redis Sentinel、Redis Cluster）。</p>
<!-- more -->
<h3 id="redis-为什么这么快" tabindex="-1"><a class="header-anchor" href="#redis-为什么这么快" aria-hidden="true">#</a> Redis 为什么这么快？</h3>
<ol>
<li>
<p>Redis 基于内存，内存的访问速度是磁盘的上千倍；</p>
</li>
<li>
<p>Redis 基于 Reactor 模式设计开发了一套高效的事件处理模型，主要是单线程事件循环和 IO 多路复用（Redis 线程模式后面会详细介绍到）；</p>
</li>
<li>
<p>Redis 内置了多种优化过后的数据结构实现，性能非常高。</p>
</li>
</ol>
<h3 id="说一下-redis-和-memcached-的区别和共同点" tabindex="-1"><a class="header-anchor" href="#说一下-redis-和-memcached-的区别和共同点" aria-hidden="true">#</a> 说一下 Redis 和 Memcached 的区别和共同点？</h3>
<p><strong>共同点</strong>：</p>
<ol>
<li>都是基于内存的数据库，一般都用来当做缓存使用。</li>
<li>都有过期策略。</li>
<li>两者的性能都非常高。</li>
</ol>
<p><strong>区别</strong>：</p>
<ol>
<li><strong>支持的数据类型</strong>：Redis 支持更丰富的数据类型（支持更复杂的应用场景）。Redis 不仅仅支持简单的 k/v 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储。Memcached 只支持最简单的 k/v 数据类型。</li>
<li><strong>持久化</strong>：Redis 支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用,而 Memcached 把数据全部存在内存之中。</li>
<li><strong>容灾恢复</strong>：Redis 有灾难恢复机制。 因为可以把缓存中的数据持久化到磁盘上。</li>
<li><strong>内存不足操作</strong>：Redis 在服务器内存使用完之后，可以将不用的数据放到磁盘上。但是，Memcached 在服务器内存使用完之后，就会直接报异常。</li>
<li><strong>集群支持</strong>：Memcached 没有原生的集群模式，需要依靠客户端来实现往集群中分片写入数据；但是 Redis 目前是原生支持 cluster 模式的。</li>
<li><strong>线程数</strong>：Memcached 是多线程，非阻塞 IO 复用的网络模型；Redis 使用单线程的多路 IO 复用模型。（Redis 6.0 针对网络数据的读写引入了多线程）</li>
<li><strong>高级功能</strong>：Redis 支持发布订阅模型、Lua 脚本、事务等功能，而 Memcached 不支持。并且，Redis 支持更多的编程语言。</li>
<li><strong>过期数据删除</strong>：Memcached 过期数据的删除策略只用了惰性删除，而 Redis 同时使用了惰性删除与定期删除。</li>
</ol>
<h3 id="为什么要用-redis-为什么要用缓存" tabindex="-1"><a class="header-anchor" href="#为什么要用-redis-为什么要用缓存" aria-hidden="true">#</a> 为什么要用 Redis/为什么要用缓存？</h3>
<p><strong>1、高性能</strong></p>
<p>假如用户第一次访问数据库中的某些数据的话，这个过程是比较慢，毕竟是从硬盘中读取的。但是，如果说，用户访问的数据属于高频数据并且不会经常改变的话，那么我们就可以很放心地将该用户访问的数据存在缓存中。</p>
<p><strong>这样有什么好处呢？</strong> 那就是保证用户下一次再访问这些数据的时候就可以直接从缓存中获取了。操作缓存就是直接操作内存，所以速度相当快。</p>
<p><strong>2、高并发</strong></p>
<p>一般像 MySQL 这类的数据库的 QPS 大概都在 1w 左右（4 核 8g） ，但是使用 Redis 缓存之后很容易达到 10w+，甚至最高能达到 30w+（就单机 Redis 的情况，Redis 集群的话会更高）。</p>
<blockquote>
<p>QPS（Query Per Second）：服务器每秒可以执行的查询次数；</p>
</blockquote>
<p>由此可见，直接操作缓存能够承受的数据库请求数量是远远大于直接访问数据库的，所以我们可以考虑把数据库中的部分数据转移到缓存中去，这样用户的一部分请求会直接到缓存这里而不用经过数据库。进而，我们也就提高了系统整体的并发。</p>
<h2 id="常见的缓存读写策略" tabindex="-1"><a class="header-anchor" href="#常见的缓存读写策略" aria-hidden="true">#</a> 常见的缓存读写策略</h2>
<h3 id="cache-aside-pattern-旁路缓存模式" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern-旁路缓存模式" aria-hidden="true">#</a> Cache Aside Pattern（旁路缓存模式）</h3>
<p><strong>Cache Aside Pattern 是我们平时使用比较多的一个缓存读写模式，比较适合读请求比较多的场景。</strong></p>
<p>服务端同时维护db和cache，并且是以db的结果为准。</p>
<p><strong>写（缓存失效）</strong>：</p>
<ul>
<li>先更新db</li>
<li>然后直接删除cache</li>
</ul>
<p><img src="/markdown/image-20230607180554413.png" alt="image-20230607180554413"></p>
<p><strong>读</strong>：</p>
<ul>
<li>从cache中读取数据，读到直接返回；</li>
<li>cache中没有取到数据，就从db中读取数据返回；</li>
<li>再把数据放到cache中。</li>
</ul>
<p><img src="/markdown/image-20230607180709994.png" alt="image-20230607180709994"></p>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p><strong>在写数据的过程中，可以先删除 cache ，后更新 db 么？</strong></p>
<p>不行，因为会造成数据库和缓存的数据不一致问题。</p>
<blockquote>
<p>请求 1 先把 cache 中的 A 数据删除 -&gt; 请求 2 从 db 中读取数据-&gt;请求 1 再把 db 中的 A 数据更新</p>
</blockquote>
<p><strong>在写数据的过程中，先更新 db，后删除 cache 就没有问题了么？</strong></p>
<p>理论上来说还是可能会出现数据不一致性的问题，不过概率非常小，因为缓存的写入速度是比数据库的写入速度快很多。</p>
<blockquote>
<p>请求 1 从 db 读数据 A-&gt; 请求 2 更新 db 中的数据 A（此时缓存中无数据 A ，故不用执行删除缓存操作 ） -&gt; 请求 1 将数据 A 写入 cache（发生在请求2更新数据之前则会出现数据不一致）</p>
</blockquote>
</div>
<p><strong>优缺点</strong>：</p>
<p><strong>缺点1</strong>：首次请求的数据一定不在cache中。</p>
<p>解决办法：将热点数据提前放入cache中。</p>
<p><strong>缺点2</strong>：写操作频繁的话会导致cache中数据频繁被删除，影响命中率。</p>
<p>解决办法：</p>
<ul>
<li><strong>数据库和缓存数据强一致性场景</strong>：更新db的时候同时更新cache，不过需要添加一个锁来保证更新cache的时候不存在线程安全问题。</li>
<li><strong>可以短暂地允许数据库和缓存数据不一致的场景</strong>：更新db的时候同样更新cache，但是给缓存加一个比较短的过期时间，这样就能保证即使数据不一致影响也比较小。</li>
</ul>
<h3 id="read-write-through-pattern-读写穿透" tabindex="-1"><a class="header-anchor" href="#read-write-through-pattern-读写穿透" aria-hidden="true">#</a> Read/Write Through Pattern（读写穿透）</h3>
<p>Read/Write Through Pattern 中服务端把 cache 视为主要数据存储，从中读取数据并将数据写入其中。cache 服务负责将此数据读取和写入 db，从而减轻了应用程序的职责。</p>
<p><strong>写（Write Through）：</strong></p>
<ul>
<li>先查 cache，cache 中不存在，直接更新 db。</li>
<li>cache 中存在，则先更新 cache，然后 cache 服务自己更新 db（<strong>同步更新 cache 和 db</strong>）</li>
</ul>
<p><img src="/markdown/image-20230607181734750.png" alt="image-20230607181734750"></p>
<p><strong>读(Read Through)：</strong></p>
<ul>
<li>从 cache 中读取数据，读取到就直接返回 。</li>
<li>读取不到的话，先从 db 加载，写入到 cache 后返回响应。</li>
</ul>
<p><img src="/markdown/image-20230607181753345.png" alt="image-20230607181753345"></p>
<p>Read-Through Pattern 实际只是在 Cache-Aside Pattern 之上进行了封装。在 Cache-Aside Pattern 下，发生读请求的时候，如果 cache 中不存在对应的数据，是由客户端自己负责把数据写入 cache，而 Read Through Pattern 则是 cache 服务自己来写入缓存的，这对客户端是透明的。</p>
<p>和 Cache Aside Pattern 一样， Read-Through Pattern 也有首次请求数据一定不再 cache 的问题，对于热点数据可以提前放入缓存中。</p>
<h3 id="write-behind-pattern-异步缓存写入" tabindex="-1"><a class="header-anchor" href="#write-behind-pattern-异步缓存写入" aria-hidden="true">#</a> Write Behind Pattern（异步缓存写入）</h3>
<p>Write Behind Pattern 和 Read/Write Through Pattern 很相似，两者都是由 cache 服务来负责 cache 和 db 的读写。</p>
<p>但是，两个又有很大的不同：<strong>Read/Write Through 是同步更新 cache 和 db，而 Write Behind 则是只更新缓存，不直接更新 db，而是改为异步批量的方式来更新 db。</strong></p>
<p>很明显，这种方式对数据一致性带来了更大的挑战，比如 cache 数据可能还没异步更新 db 的话，cache 服务可能就就挂掉了。</p>
<p>这种策略在我们平时开发过程中也非常非常少见，但是不代表它的应用场景少，比如消息队列中消息的异步写入磁盘、MySQL 的 Innodb Buffer Pool 机制都用到了这种策略。</p>
<p>Write Behind Pattern 下 db 的写性能非常高，非常适合一些数据经常变化又对数据一致性要求没那么高的场景，比如浏览量、点赞量。</p>
<h2 id="redis-应用" tabindex="-1"><a class="header-anchor" href="#redis-应用" aria-hidden="true">#</a> Redis 应用</h2>
<h3 id="redis-除了做缓存" tabindex="-1"><a class="header-anchor" href="#redis-除了做缓存" aria-hidden="true">#</a> <a href="https://javaguide.cn/database/redis/redis-questions-01.html#redis-%E9%99%A4%E4%BA%86%E5%81%9A%E7%BC%93%E5%AD%98-%E8%BF%98%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88" target="_blank" rel="noopener noreferrer">#<ExternalLinkIcon/></a>Redis 除了做缓存</h3>
</div></template>


