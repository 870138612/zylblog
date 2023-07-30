import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as l,c as o,e as n,b as e,d as i,a as r,f as c}from"./app-c8cd77a6.js";const h="/markdown/image-20230612161757013.png",t={},p=e("h2",{id:"redis性能优化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#redis性能优化","aria-hidden":"true"},"#"),i(" Redis性能优化")],-1),u=e("h3",{id:"使用批量操作减少网络传输",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用批量操作减少网络传输","aria-hidden":"true"},"#"),i(" 使用批量操作减少网络传输")],-1),R=e("p",null,"一个Redis命令的执行可以简化为以下4步：",-1),g=e("ol",null,[e("li",null,"发送命令"),e("li",null,"命令排队"),e("li",null,"命令执行"),e("li",null,"返回结果")],-1),k=c(`<p>其中，1 和 4 耗费时间称为 RTT，也就是数据在网络上传输的时间。</p><p>使用批量操作可以减少网络传输次数，从而有效减少网络开销，大幅减少 RTT。</p><h4 id="原生批量操作" tabindex="-1"><a class="header-anchor" href="#原生批量操作" aria-hidden="true">#</a> 原生批量操作</h4><ul><li><p><code>MGET</code>（获取一个或多个指定 key 的值）、<code>MSET</code>（设置一个或多个指定 key 的值）、</p></li><li><p><code>HMGET</code>（获取指定哈希表中一个或者多个指定字段的值）、<code>HMSET</code>（同时将一个或多个 field-value 对设置到指定哈希表中）、</p></li><li><p><code>SADD</code>（向指定集合添加一个或多个元素）</p></li></ul><h4 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> pipeline</h4><p>对于不支持批量操作的命令，可以利用 pipeline（流水线）将一批 Redis 命令封装成一组，这些 Redis 命令会被一次性提交到服务器，只需要一次网络传输。集群模式下不能保证所有的 key 都在同一个 hash slot（哈希槽）上。</p><p>原生批量操作和 pipeline 的区别：</p><ul><li>原生批量操作是原子操作，pipeline 是非原子操作。</li><li>pipeline 可以打包不同的命令，原生批量操作不可以。</li><li>原生批量操作命令是 Redis 服务器支持实现的，而 pipeline 需要服务端和客户端共同实现。</li></ul><h4 id="lua脚本" tabindex="-1"><a class="header-anchor" href="#lua脚本" aria-hidden="true">#</a> Lua脚本</h4><p>Lua 脚本同样支持批量操作多条命令。一段 Lua 脚本可以视作一条命令执行，可以看作是<strong>原子操作</strong>。也就是说，一段 Lua 脚本执行过程中不会有其他脚本或 Redis 命令同时执行，保证了操作不会被其他指令插入或打扰，这是 pipeline 所不具备的。</p><p>并且，Lua 脚本中支持一些简单的逻辑处理比如使用命令读取值并在 Lua 脚本中进行处理，这同样是 pipeline 所不具备的。</p><p>不过， Lua 脚本依然存在下面这些缺陷：</p><ul><li>如果 Lua 脚本运行时出错并中途结束，之后的操作不会进行，但是之前已经发生的写操作不会撤销，所以即使使用了 Lua 脚本，<strong>也不能实现类似数据库回滚的原子性</strong>。</li><li>Redis Cluster 下 Lua 脚本的原子操作也无法保证了，原因同样是无法保证所有的 key 都在同一个 hash slot（哈希槽）上。</li></ul><h3 id="大量key集中过期问题" tabindex="-1"><a class="header-anchor" href="#大量key集中过期问题" aria-hidden="true">#</a> 大量key集中过期问题</h3><p>对于过期 key，Redis 采用的是定期删除 + 惰性删除策略。</p><p>对于遇到大量 key 过期（缓存雪崩），解决办法：</p><ol><li>给 key 设置随机过期时间。</li><li>开启 lazy-free（惰性删除/延时释放）。lazy-free 特性是 Redis 4.0 引入的，让 Redis 采用异步方式延时释放 key 使用的内存，将该操作交给单独的子线程处理，避免阻塞主线程。</li></ol><h3 id="redis-bigkey" tabindex="-1"><a class="header-anchor" href="#redis-bigkey" aria-hidden="true">#</a> Redis bigkey</h3><p>如果一个 key 对应的 value 所占用的内存比较大，这个 key 就能看做是 bigkey。</p><p>大致标准：<code>String</code> 类型的 value 超过 10kb，复合类型的 value 包含的元素超过 5000 个。</p><h4 id="有什么危害" tabindex="-1"><a class="header-anchor" href="#有什么危害" aria-hidden="true">#</a> 有什么危害？</h4><p>除了会消耗很多的内存和带宽，还会对性能造成很大的影响。</p><h4 id="如何发现" tabindex="-1"><a class="header-anchor" href="#如何发现" aria-hidden="true">#</a> 如何发现？</h4><p>使用Redis自带的 <code>--bigkeys</code> 查找，为了降低对 Redis 的影响，需要指定 <code>-i</code> 参数控制扫描的频率，<code>redis-cli -p 6379 --bigkeys -i 3</code> 表示扫描过程中每次扫描后休息的时间间隔为 3 秒。</p><p>这个命令会扫描 Redis 中的所有 key，对 Redis 的性能有一点影响，这种方式只能找到每种数据结构的最大 key。</p><h4 id="如何处理" tabindex="-1"><a class="header-anchor" href="#如何处理" aria-hidden="true">#</a> 如何处理？</h4><ul><li><strong>分割 bigkey</strong>：将一个 bigkey 分割为多个小 key，这种方式需要修改业务层代码，不推荐；</li><li><strong>手动清理</strong>：Redis 4.0+ 可以使用 <code>UNLINK</code> 命令来异步删除一个或者多个指定的 key，Redis 4.0 以下可以考虑使用 <code>SCAN</code> 命令结合 <code>DEL</code> 命令来分批次删除。</li><li><strong>采用合适的数据结构</strong>：比如使用 <code>HyperLogLog</code> 统计页面的 UV。</li><li><strong>开启 lazy-free（惰性删除/延时释放）</strong>：lazy-free 特性是 Redis 4.0 开始引入的，让 Redis 采用异步方式延时释放 key 使用的内存，将该操作交给单独的子线程处理，避免阻塞主线程。</li></ul><h3 id="redis-hotkey-热-key" tabindex="-1"><a class="header-anchor" href="#redis-hotkey-热-key" aria-hidden="true">#</a> Redis hotkey（热 Key）</h3><p>如果一个 key 的访问次数明显多余其他 key，则这个 key 就可以看做是 hotkey。</p><p>hotkey 出现的原因是某个热点数据的访问量保证，如参与秒杀的商品。</p><h4 id="有什么危害-1" tabindex="-1"><a class="header-anchor" href="#有什么危害-1" aria-hidden="true">#</a> 有什么危害？</h4><p>处理 hotkey 会占用大量的 CPU 和带宽，可能会影响 Redis 处理其他请求。如果暴增的请求超出了 Redis 的处理能力，可能会导致 Redis 宕机，或者产生缓存击穿，大量请求落入数据库，从而导致数据库崩溃。</p><h4 id="如何发现-1" tabindex="-1"><a class="header-anchor" href="#如何发现-1" aria-hidden="true">#</a> 如何发现？</h4><ol><li>使用 Redis 自带的 <code>--hotkeys</code> 参数来查找。</li></ol><p>Redis 4.0.3 新增了 <code>hotkeys</code> 参数，能返回所有 key 被访问的次数。</p><p>使用前提是 Redis Server 的 <code>maxmemory-policy</code> 参数设置为 LFU 算法（最近最少使用）。</p><p>Redis 中有两种LFU 算法：</p><ul><li>volatile-lfu：从已设置过期时间的数据集中挑选最不经常使用的数据淘汰。</li><li>allkeys-flu：当内存不足以容纳新写入的数据时，在键空间中，淘汰最不经常使用的 key。</li></ul><ol start="2"><li>使用 <code>MONITOR</code> 命令。</li></ol><p><code>MONITOR</code> 命令是 Redis 提供的一种实时查看 Redis 的所有操作的方式，可以用于临时监控 Redis 实例的操作情况，包括读写、删除操作。</p><h4 id="如何解决" tabindex="-1"><a class="header-anchor" href="#如何解决" aria-hidden="true">#</a> 如何解决？</h4><ul><li><strong>读写分离</strong>：主节点处理写请求，从节点处理读请求。</li><li><strong>使用Redis Cluster</strong>：将热点数据分散存储在多个 Redis 节点上。</li><li><strong>二级缓存</strong>：hotkey 采用二级缓存的方式进行处理，将 hotkey 存放一份到 JVM 本地内存中（可以使用 Caffeine）。</li></ul><h3 id="慢查询命令" tabindex="-1"><a class="header-anchor" href="#慢查询命令" aria-hidden="true">#</a> 慢查询命令</h3><p>Redis 命令的执行简化为以下四步：</p><ol><li>发送命令；</li><li>命令排队；</li><li>命令执行；</li><li>返回结果。</li></ol><p>Redis 慢查询统计的是命令执行这一步的耗时，慢查询命令也就是执行时间长的命令。</p><h4 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h4><p>Redis 中的大部分命令都是 <strong>O(1)</strong> 时间复杂度，但是有少部分 <strong>O(n)</strong> 时间复杂度的命令，如：</p><ul><li><p><code>KEYS *</code>：会返回所有符合规则的 key。</p></li><li><p><code>HGETALL</code>：会返回一个 <code>Hash</code> 中所有的键值对。</p></li><li><p><code>LRANGE</code>：会返回 <code>List</code> 中指定范围内的元素。</p></li><li><p><code>SMEMBERS</code>：返回 <code>Set</code> 中的所有元素。</p></li><li><p><code>SINTER</code>/<code>SUNION</code>/<code>SDIFF</code>：计算多个 <code>Set</code> 的交集/并集/差集。</p></li></ul><p>除了这些时间复杂度为 <strong>O(n)</strong> 的命令，还有部分在 <strong>O(n)</strong> 以上的命令，例如：</p><ul><li><code>ZRANGE</code>/<code>ZREVRANGE</code>：返回指定 <code>Sorted Set</code> 中指定排名范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量，m 为返回的元素数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li><li><code>ZREMRANGEBYRANK</code>/<code>ZREMRANGEBYSCORE</code>：移除 <code>Sorted Set</code> 中指定排名范围/指定 <code>score</code> 范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量， m 被删除元素的数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li></ul><h4 id="如何找到慢查询命令" tabindex="-1"><a class="header-anchor" href="#如何找到慢查询命令" aria-hidden="true">#</a> 如何找到慢查询命令？</h4><p>在 <code>redis.conf</code> 文件中，可以使用 <code>slowlog-log-slower-than</code> 参数设置耗时命令的阈值，并使用 <code>slowlog-max-len</code> 参数设置耗时命令的最大记录条数。</p><p>当 Redis 服务器检测到执行时间超过 <code>slowlog-log-slower-than</code> 阈值的命令时，就会将该命令记录在慢查询日志 （slow log） 中，这点和 MySQL 记录慢查询语句类似。当慢查询日志超过设定的最大记录条数之后，Redis 会把最早的执行命令依次舍弃。</p><h3 id="redis-内存碎片" tabindex="-1"><a class="header-anchor" href="#redis-内存碎片" aria-hidden="true">#</a> Redis 内存碎片</h3><p>和操作系统的内部碎片外部碎片相同意思。</p><h4 id="为何会出现" tabindex="-1"><a class="header-anchor" href="#为何会出现" aria-hidden="true">#</a> 为何会出现？</h4><ol><li>Redis 存储数据的时候向操作系统申请的内存空间可能会大于数据实际需要的存储空间。</li><li>频繁修改 Redis 中的数据也会产生内存碎片。</li></ol><h4 id="如何查看-redis-内存碎片的信息" tabindex="-1"><a class="header-anchor" href="#如何查看-redis-内存碎片的信息" aria-hidden="true">#</a> 如何查看 Redis 内存碎片的信息？</h4><p>使用 <code>info memory</code> 命令可查看 Redis 内存相关的信息。</p><h4 id="如何清理-redis-内存碎片" tabindex="-1"><a class="header-anchor" href="#如何清理-redis-内存碎片" aria-hidden="true">#</a> 如何清理 Redis 内存碎片？</h4><p>Redis 4.0-RC3 版本之后自带了内存整理，可以避免内存碎片率过大的问题。</p><p>通过 <code>config set</code> 命令将 <code>activedefrag</code> 设置为 <code>yes</code> 即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config <span class="token builtin class-name">set</span> activedefrag <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体什么时候清理需要通过下面两个参数控制：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内存碎片占用空间达到 500mb 的时候开始清理</span>
config <span class="token builtin class-name">set</span> active-defrag-ignore-bytes 500mb
<span class="token comment"># 内存碎片率大于 1.5 的时候开始清理，内存碎片率=操作系统分配的内存/数据结构实际使用的内存</span>
config <span class="token builtin class-name">set</span> active-defrag-threshold-lower <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 Redis 自动内存碎片清理机制可能会对 Redis 的性能产生影响，可以通过下面两个参数来减少对 Redis 性能的影响：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内存碎片清理所占用 CPU 时间的比例不低于 20%</span>
config <span class="token builtin class-name">set</span> active-defrag-cycle-min <span class="token number">20</span>
<span class="token comment"># 内存碎片清理所占用 CPU 时间的比例不高于 50%</span>
config <span class="token builtin class-name">set</span> active-defrag-cycle-max <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，重启节点可以做到内存碎片重新整理。</p><h2 id="缓存穿透-雪崩-击穿" tabindex="-1"><a class="header-anchor" href="#缓存穿透-雪崩-击穿" aria-hidden="true">#</a> 缓存穿透，雪崩，击穿</h2><h3 id="缓存穿透-请求数据不存在" tabindex="-1"><a class="header-anchor" href="#缓存穿透-请求数据不存在" aria-hidden="true">#</a> 缓存穿透（请求数据不存在）</h3><p><strong>大量请求的 key 是不合法的，并不存在于 Redis 和数据库中，就会导致每次的请求都会请求数据库，没有经过缓存层，对数据库造成很大的压力。</strong></p><h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h4><ol><li><strong>缓存无效key（缓存空对象）</strong></li></ol><p>如果缓存和数据库都差不到某个 key 的数据就写一个到 Redis 中并设置过期时间，如果遇到构建不同请求的 key 就会导致 Redis 缓存大量的无效 key。</p><ol start="2"><li><strong>布隆过滤器</strong></li></ol><p>布隆过滤器可以判断一个数据在 Redis 中是否存在。</p><p>布隆过滤器判断不存在的数据则一定不存在。反之则不行，布隆过滤器判断一个数据存在，则有可能不存在于 Redis 中。</p><p>将过滤器添加到查询缓存之前，就能过滤掉部分恶意请求。</p><div class="hint-container info"><p class="hint-container-title">布隆过滤器</p><p>将一个元素放入布隆过滤器中：</p><ul><li>使用布隆过滤器中的哈希函数对元素值进行计算，得到哈希值；</li><li>根据得到的 hash 值，在位数组中把对应下标的值置为 1。</li></ul><p>判断一个元素是否存在于布隆过滤器中：</p><ul><li>对给定的元素进行相同的哈希计算；</li><li>得到的哈希值判断位数组中的每一个元素是否都为 1，如果都为 1 则表示这个值在布隆过滤器中（可能误判），如果有一个值不为 1，则元素肯定不在布隆过滤器中。</li></ul><p>造成误判的原因：不同的字符串可能哈希出的位置相同（地址冲突）。</p></div><h3 id="缓存雪崩-大量-key-同时失效" tabindex="-1"><a class="header-anchor" href="#缓存雪崩-大量-key-同时失效" aria-hidden="true">#</a> 缓存雪崩（大量 key 同时失效）</h3><p><strong>同一个时间段内大量的 key 同时失效或者 Redis 服务器宕机，导致大量的请求到达数据库。</strong></p><h4 id="解决办法-1" tabindex="-1"><a class="header-anchor" href="#解决办法-1" aria-hidden="true">#</a> 解决办法</h4><p><strong>针对 Redis 服务不可用的情况</strong>：</p><ol><li>采用 Redis 集群，避免单击出现问题导致的整个服务都没办法使用。</li><li>限流，避免同时处理大量的请求。</li></ol><p><strong>针对热点缓存失效的情况</strong>：</p><ol><li><p>对不同的 key 设置不同的随机失效时间避免同时失效。</p></li><li><p>缓存永远不会失效（不推荐）。</p></li><li><p>设置二级缓存。</p></li></ol><h3 id="缓存击穿-热点-key-失效" tabindex="-1"><a class="header-anchor" href="#缓存击穿-热点-key-失效" aria-hidden="true">#</a> 缓存击穿（热点 key 失效）</h3><p>请求的 key 是热点数据，如果热点 key 失效，就会导致大量的请求落入数据库，造成数据库宕机。</p><blockquote><p>秒杀商品就属于热点 key，在秒杀项目中采用提前预热，并且在秒杀结束之前 key 不会过期来防止缓存击穿。</p></blockquote><h4 id="解决办法-2" tabindex="-1"><a class="header-anchor" href="#解决办法-2" aria-hidden="true">#</a> 解决办法</h4><ol><li>设置热点数据永远不过期或者过期时间比较长。</li><li>针对热点数据提前预热，将其存入缓存中并设置合理的过期时间，例如在秒杀场景下，秒杀没有结束前 key 不会过期。</li><li>请求数据库写数据到缓存之前，先获取互斥锁，保证只有一个请求落到数据库上，减轻数据库的压力。</li></ol><h3 id="缓存穿透和缓存击穿的区别" tabindex="-1"><a class="header-anchor" href="#缓存穿透和缓存击穿的区别" aria-hidden="true">#</a> 缓存穿透和缓存击穿的区别？</h3><p>缓存穿透中，请求的 key 不存在于 Redis 也不存在于数据库中。</p><p>缓存击穿中，请求的 key 对应的是热点数据，该数据存在于数据库中，但不存在于缓存中（通常是因为缓存的数据已经过期）。</p><h3 id="缓存雪崩和缓存击穿有什么区别" tabindex="-1"><a class="header-anchor" href="#缓存雪崩和缓存击穿有什么区别" aria-hidden="true">#</a> 缓存雪崩和缓存击穿有什么区别？</h3><p>缓存雪崩导致的原因是缓存中的大量数据失效，缓存击穿导致的原因是某个热点数据不存在于缓存中。</p><h3 id="如何保证缓存和数据库数据的一致性" tabindex="-1"><a class="header-anchor" href="#如何保证缓存和数据库数据的一致性" aria-hidden="true">#</a> 如何保证缓存和数据库数据的一致性？</h3><p>Cache Aside Pattern（旁路缓存模式）是最常用的一致性方案，读数据时先查找缓存，命中直接返回，如果没有命中则去查找数据库并将数据写入缓存，返回数据。</p><p>Cache Aside Pattern遇到数据更新时，先更新DB，然后直接删除cache。</p><p>如果数据更新成功，而删除缓存失败的话，有以下解决办法：</p><ol><li><strong>缓存失效时间变短</strong>（不推荐），让缓存数据的过期时间变短，则就算删除缓存失败，也会很快失效，会造成短时间的不一致性。这种解决办法对于先操作缓存后操作数据库的场景不适用。</li><li><strong>增加cache更新重试机制</strong>（常用），如果 cache 服务当前不可用导致缓存删除失败，则隔一段时间进行重试，如果重试还是失败则可以把当前更新失败的 key 存储队列中，等缓存服务可用之后，再将缓存中对应的key删除。</li></ol><div class="hint-container info"><p class="hint-container-title">消息队列删除缓存</p><ul><li><p>消息队列保证可靠性：写到队列中的消息，成功消费之前不会丢失。</p></li><li><p>消息队列保证消息的成功投递：下游从队列拉去消息，成功消费后才会删除消息，否则还会继续投递消息给消费者（符合重试场景）</p></li></ul><p><img src="`+h+'" alt="image-20230612161757013"></p></div><h3 id="redis阻塞的常见原因" tabindex="-1"><a class="header-anchor" href="#redis阻塞的常见原因" aria-hidden="true">#</a> Redis阻塞的常见原因</h3><h4 id="o-n-命令" tabindex="-1"><a class="header-anchor" href="#o-n-命令" aria-hidden="true">#</a> O(n) 命令</h4><p>Redis 中的大部分命令都是 O(1) 时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如：</p><ul><li><code>KEYS *</code>：会返回所有符合规则的 key。</li><li><code>HGETALL</code>：会返回一个 <code>Hash</code> 中所有的键值对。</li><li><code>LRANGE</code>：会返回 <code>List</code> 中指定范围内的元素。</li><li><code>SMEMBERS</code>：返回 <code>Set</code> 中的所有元素。</li><li><code>SINTER</code>/<code>SUNION</code>/<code>SDIFF</code>：计算多个 <code>Set</code> 的交集/并集/差集。</li></ul><p>由于这些命令时间复杂度是 O(n)，有时候也会全表扫描，随着 n 的增大，执行耗时也会越长，从而导致客户端阻塞。不过， 这些命令并不是一定不能使用，但是需要明确 N 的值。另外，有遍历的需求可以使用 <code>HSCAN</code>、<code>SSCAN</code>、<code>ZSCAN</code> 代替。</p><p>除了这些 O(n) 时间复杂度的命令可能会导致阻塞之外， 还有一些时间复杂度可能在 O(n) 以上的命令，例如：</p><ul><li><code>ZRANGE</code>/<code>ZREVRANGE</code>：返回指定 <code>Sorted Set</code> 中指定排名范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量， m 为返回的元素数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li><li><code>ZREMRANGEBYRANK</code>/<code>ZREMRANGEBYSCORE</code>：移除 <code>Sorted Set</code> 中指定排名范围/指定 <code>score</code> 范围内的所有元素。时间复杂度为 O(log(n)+m)，n 为所有元素的数量， m 被删除元素的数量，当 m 和 n 相当大时，O(n) 的时间复杂度更小。</li></ul><h4 id="save-创建-rdb-快照" tabindex="-1"><a class="header-anchor" href="#save-创建-rdb-快照" aria-hidden="true">#</a> SAVE 创建 RDB 快照</h4><p>Redis 提供了两个命令来生成 RDB 快照文件：</p><ul><li><code>save</code> : 同步保存操作，会阻塞 Redis 主线程；</li><li><code>bgsave</code> : fork 出一个子进程，子进程执行，不会阻塞 Redis 主线程，默认选项。</li></ul><p>默认情况下，Redis 默认配置会使用 <code>bgsave</code> 命令。如果手动使用 <code>save</code> 命令生成 RDB 快照文件的话，就会阻塞主线程。</p><h4 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h4><ul><li>AOF 日志记录阻塞。</li><li>AOF 刷盘阻塞。</li><li>AOF 重写阻塞。</li></ul><h4 id="大-key" tabindex="-1"><a class="header-anchor" href="#大-key" aria-hidden="true">#</a> 大 Key</h4><ul><li>查找大 key。</li><li>删除大 Key</li></ul><h4 id="清空数据库" tabindex="-1"><a class="header-anchor" href="#清空数据库" aria-hidden="true">#</a> 清空数据库</h4><p>清空数据库和上面 bigkey 删除也是同样道理，<code>flushdb</code>、<code>flushall</code> 也涉及到删除和释放所有的键值对，也是 Redis 的阻塞点。</p><h4 id="集群扩容" tabindex="-1"><a class="header-anchor" href="#集群扩容" aria-hidden="true">#</a> 集群扩容</h4><p>扩容时候需要进行数据迁移，会导致阻塞，对于小 key 时间基本可以忽略不计，对于大 key 严重的时候会触发集群内的故障转移。</p><h4 id="swap-内存交换" tabindex="-1"><a class="header-anchor" href="#swap-内存交换" aria-hidden="true">#</a> Swap（内存交换）</h4><p>内存不够的时候会将部分数据写入外存，类似虚拟内存（中级调度）。</p><h4 id="cpu-竞争" tabindex="-1"><a class="header-anchor" href="#cpu-竞争" aria-hidden="true">#</a> CPU 竞争</h4><p>Redis 是典型的 CPU 密集型应用，不建议和其他多核 CPU 密集型服务部署在一起。当其他进程过度消耗 CPU 时，将严重影响 Redis 的吞吐量。</p><h4 id="网络问题" tabindex="-1"><a class="header-anchor" href="#网络问题" aria-hidden="true">#</a> 网络问题</h4><p>连接拒绝、网络延迟，网卡软中断等网络问题也可能会导致 Redis 阻塞。</p><h2 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群" aria-hidden="true">#</a> Redis集群</h2>',129),b={href:"https://ylzhong.top/database/2redis/5rediscluster.html",target:"_blank",rel:"noopener noreferrer"};function y(f,m){const a=s("ExternalLinkIcon");return l(),o("div",null,[p,u,R,g,n(" more "),k,e("p",null,[i("☀️详见"),e("a",b,[i("Redis集群"),r(a)])])])}const S=d(t,[["render",y],["__file","1redis.html.vue"]]);export{S as default};
