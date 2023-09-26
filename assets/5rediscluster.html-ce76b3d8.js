import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as i,f as l,b as e,d as r,e as t}from"./app-4ef30b87.js";const o="/markdown/image-20230612170144401-1686563235858-1.png",d="/markdown/image-20230612171754994-1686563235859-2.png",n="/markdown/image-20230612172041553-1686563235859-5.png",c="/markdown/image-20230612174320037-1686563235859-3.png",p="/markdown/image-20230612174507826-1686563235859-4.png",h="/markdown/20230703001.png",m="/markdown/image-20230612182613067.png",g={},u=e("h2",{id:"主从集群",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#主从集群","aria-hidden":"true"},"#"),r(" 主从集群")],-1),v=e("p",null,"多个 Redis 节点实现主从集群，主节点 master 用来写，从节点用来读。",-1),f=e("p",null,[e("img",{src:o,alt:"image-20230612170144401"})],-1),_=t(`<p><strong>开启主从</strong>：通过在 <code>redis.conf</code> 中添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>slaveof <span class="token operator">&lt;</span>master ip<span class="token operator">&gt;</span><span class="token operator">&lt;</span>masterport<span class="token operator">&gt;</span>  //关联从节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="数据同步原理" tabindex="-1"><a class="header-anchor" href="#数据同步原理" aria-hidden="true">#</a> 数据同步原理</h2><h3 id="全量同步" tabindex="-1"><a class="header-anchor" href="#全量同步" aria-hidden="true">#</a> 全量同步</h3><p>由于第一次同步需要生成 RDB 文件，之后将 RDB 文件发送给从节点，因此叫做全量同步，较为消耗性能。</p><p>记录 RDB 期间生成的新命令都会写入内存缓冲区 <code>repl_baklog</code> 中，最后再发送给从节点。</p><p><img src="`+d+'" alt="image-20230612171754994"></p><div class="hint-container info"><p class="hint-container-title">如何判断是不是第一次主从同步？</p><ul><li><code>Replication Id</code>：简称 <strong>replid</strong>，是数据集的标记，id 一致表示是同一个数据集。每一个 master 都有唯一的 <strong>replid</strong>，slave 则会继承 master 节点的 <strong>replid</strong>。</li><li><code>offset</code>：偏移量，随着记录在 <code>repl_baklog</code> 中的数据增多而逐渐增大，slave 完成同步时也会记录当前同步的 <code>offset</code>。如果 slave 的 <code>offset</code> 小于 master 的 <code>offset</code>，说明 slave 数据落后于 master，需要更新，类似于版本号。</li></ul><p>因此 slave 做数据同步，必须向 master 声明自己的 <code>Replication Id</code> 和 <code>offset</code>，master 才能判断需要更新哪些数据。</p><p><code>Replication Id</code> 不同则表示是第一次主从同步，<code>offset</code> 落后于 master 则表示需要更新。</p></div><h3 id="增量同步" tabindex="-1"><a class="header-anchor" href="#增量同步" aria-hidden="true">#</a> 增量同步</h3><p><img src="'+n+'" alt="image-20230612172041553"></p><p>增量同步用的命令来自 <code>repl_baklog</code>，存储有上限，如果没有空间记录命令，则会覆盖之前的数据，因此 slave 断开太久就会导致没有备份的数据被覆盖，则无法基于 <code>repl_baklog</code> 做增量同步，只能再次全量同步。</p><h3 id="优化主从集群" tabindex="-1"><a class="header-anchor" href="#优化主从集群" aria-hidden="true">#</a> 优化主从集群</h3><ul><li>在 master 中配置 <code>repl-diskless-sync yes</code> 启用无磁盘复制，避免全量更新时的磁盘 IO。（直接将数据发送给 slave，不再写入磁盘）</li><li>Redis 单节点的内存占用不要太大，可以减少 RDB 导致的过多 IO。</li><li>适当提高 <code>repl_baklog</code> 大小，发现 slave 宕机之后尽快实现故障恢复，尽可能避免全量同步。</li><li>限制一个 master 节点上的 slave 节点，如果实在太多，可以采用主-从-从链式结构，减少 master 压力。</li></ul><div class="hint-container info"><p class="hint-container-title">总结</p><p><strong>全量同步和增量同步的区别？</strong></p><ul><li>全量同步：master 将完整的内存数据生成 RDB，发送给 slave。后续命令保存至 <code>repl_baklog</code>，逐个发送给 slave。</li><li>增量同步：slave 提交自己的 <code>offset</code> 到 master，master 获取 <code>repl_baklog</code> 中从 <code>offset</code> 之后的命令给 slave。</li></ul><p><strong>什么时候执行全量同步？</strong></p><ul><li>slave 节点第一次连接时。</li><li>slave 节点断开太久，导致 <code>repl_baklog</code> 中的 <code>offset</code> 已经被覆盖。</li></ul><p><strong>什么时候执行增量同步？</strong></p><ul><li>slave 节点断开又恢复，并且在 <code>repl_baklog</code> 中能找到 <code>offset</code> 时。</li></ul></div><h2 id="redis-哨兵-sentinel" tabindex="-1"><a class="header-anchor" href="#redis-哨兵-sentinel" aria-hidden="true">#</a> Redis 哨兵 Sentinel</h2><h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h3><ul><li><strong>监控</strong>：不断监控 slave 和 master 是否正常工作。</li><li><strong>自动故障恢复</strong>：如果 master 故障，sentinel 会将一个 slaver 提升为 master，当故障实例恢复之后也是以新的 master 为主节点。</li><li><strong>通知</strong>：充当 Redis 客户端的服务发现来源，当集群发生故障转移时，会将最新的消息发送给 Redis 客户端。</li></ul><p><img src="'+c+'" alt="image-20230612174320037"></p><h3 id="心跳机制" tabindex="-1"><a class="header-anchor" href="#心跳机制" aria-hidden="true">#</a> 心跳机制</h3><ul><li>每秒向集群内的每一个实例发送 <code>ping</code> 命令。</li><li>如果未在规定时间内响应，则认为实例下线。</li><li>超过一半的 sentinel 都认为这个实例<strong>主观下线</strong>，则该实例<strong>客观下线</strong>。<code>quorum</code> 值最好超过 sentinel 实例数量的一半。</li></ul><p><img src="'+p+`" alt="image-20230612174507826"></p><h3 id="选举新的-master" tabindex="-1"><a class="header-anchor" href="#选举新的-master" aria-hidden="true">#</a> 选举新的 master</h3><p>一旦发现 master 故障，就需要选举新的 slave 作为 master，依据：</p><ul><li>首先判断 slave 节点与 master 断开的时间长短，如果超过指定值（<code>down-after-milliseconds</code> * 10)则会排除该 slave 节点。</li><li>然后判断 slave 节点的 <code>slave-priority</code> 值，越小优先级越高，0 表示永远不会参加选举。</li><li>如果 <code>slave-priority</code> 相同，则判断 slave 节点的 <code>offset</code>，越大说明数据越新，优先级越高。</li><li>最后判断 slave 节点运行 id 的大小，越小则优先级越高（id 越小说明越先被创建，存活时间越长）。</li></ul><h3 id="如何实现故障转移" tabindex="-1"><a class="header-anchor" href="#如何实现故障转移" aria-hidden="true">#</a> 如何实现故障转移？</h3><p>选举了新的 slave 节点之后，故障转移步骤如下：</p><ul><li>sentinel 给备选 slave1 节点发送 <code>slaveof no one</code> 命令，表示不再做从节点，成为 master 节点。</li><li>sentinel 给所有其他 slave 发送配置从节点命令 <code>slaveof &lt;master ip&gt;&lt;masterport&gt;</code>，让其余节点变成这个节点的从节点，开始从新的 master 节点上同步数据。</li><li>最后 sentinel 将故障节点标记为 slave，故障恢复之后此节点成为 slave1 的从节点。</li></ul><h2 id="redis-分片集群" tabindex="-1"><a class="header-anchor" href="#redis-分片集群" aria-hidden="true">#</a> Redis 分片集群</h2><p>主从解决了高并发读，高可用的问题，但是存在：海量数据存储问题，高并发写问题。</p><h3 id="使用分片集群" tabindex="-1"><a class="header-anchor" href="#使用分片集群" aria-hidden="true">#</a> 使用分片集群</h3><p>使用分片集群解决海量存储问题和高并发写问题：</p><ul><li>集群中有多个 master，每一个 master 保存不同的数据。</li><li>每一个 master 都可以有多个 slave 节点。</li><li>master 之间通过 <code>ping</code> 检测彼此健康状况。</li><li>客户端请求可以访问集群任意节点，最终都会被转发到正确的节点上。</li><li>从节点提供 slot 数据备份以及故障转移，保证可用性，主节点宕机可以从从节点中产生新的主节点。</li></ul><p>创建命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>redis-cli <span class="token parameter variable">--cluster</span> create --cluster-replicas <span class="token number">1</span> <span class="token operator">&lt;</span>ip：端口<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ip：端口<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ip：端口<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ip：端口<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>--cluster-replicas 1</code> 表示集群中每个 master 的副本个数为 1，例如写 1 则表示一个 master 对应一个 slave，则 4 个实例中有 2 个是 master，2 个是 slave。其中写在前面的 2 个实例是 master。主节点做数据处理，从节点做数据备份。</p><p><img src="`+h+'" alt="img.png"></p><h3 id="散列插槽" tabindex="-1"><a class="header-anchor" href="#散列插槽" aria-hidden="true">#</a> 散列插槽</h3><ul><li>Redis 会把每一个 master 节点映射到 <code>0~16383</code> 的插槽上。</li><li><strong>数据 key 不是与节点绑定而是与插槽绑定</strong>，Redis 会根据 key 的有效部分计算插槽。</li><li>固定数据保存在同一个节点。 <ul><li>将商品类型 key 加上大括号，就是标识有效部分，这个部分会计算 hash 值转化为插槽，同类的商品就能对应到同一个节点上。</li></ul></li></ul><div class="hint-container info"><p class="hint-container-title">为什么是 16384 个插槽？</p><p>2^14^=16384、2^16^=65536。</p><p>如果槽位是 65536 个，发送心跳信息的消息头是 65536/8/1024 = 8k。</p><p>如果槽位是 16384 个，发送心跳信息的消息头是 16384/8/1024 = 2k。</p><p>因为 Redis 每秒都会发送一定数量的心跳包，如果消息头是 8k，未免有些太大了，浪费网络资源。</p><p>Redis 的集群主节点数量一般不会超过 1000 个。集群中节点越多，心跳包的消息体内的数据就越多，如果节点过多，也会造成网络拥堵。对于节点数在 1000 个以内的 Redis Cluster，16384 个槽位完全够用。</p><p>Redis 主节点的哈希槽信息是通过 <strong>bitmap</strong> 存储的，在传输过程中，会对 <strong>bitmap</strong> 进行压缩，<strong>bitmap 的填充率越低，压缩率越高。</strong></p><p><strong>bitmap 填充率 = slots/N (N表示节点数)。</strong></p><p>也就是说 slots 越小，填充率就会越小，压缩率就会越高，传输效率就会越高。</p></div><h3 id="故障转移" tabindex="-1"><a class="header-anchor" href="#故障转移" aria-hidden="true">#</a> 故障转移</h3><p>Redis 分片集群具备自动的主从切换，不需要使用哨兵。</p><p><strong>手动故障转移，数据迁移</strong></p><p>利用 <code>cluster failover</code> 命令让集群中的某个 master 宕机，切换到执行 <code>cluster failover</code> 的 slave 节点，实现无感知的数据迁移。</p><ul><li>支持三种模式： <ul><li><strong>缺省</strong>：默认流程，slave 节点拒绝任何客户端请求，再进行主从同步，标记自己为 master，广播转移结果。</li><li><strong>force</strong>：省略了对 <code>offset</code> 一致性校验，省略步骤 2、3。</li><li><strong>takeover</strong>：忽略数据一致性，忽略其余 master 意见，直接标记自己为 master 并广播结果，直接从 5 开始执行。</li></ul></li></ul><p><img src="'+m+'" alt="image-20230612182613067"></p><ul><li>操作步骤： <ul><li>利用 redis-cli 连接需要变成 master 的节点；</li><li>执行 <code>cluster failover</code> 命令。</li></ul></li></ul><h2 id="哨兵机制和-cluster-区别" tabindex="-1"><a class="header-anchor" href="#哨兵机制和-cluster-区别" aria-hidden="true">#</a> 哨兵机制和 Cluster 区别</h2><p>Redis 集群有两种实现方式，分别是主从集群和 Redis Cluster。</p><ol><li>Redis 哨兵集群基于主从复制来实现的，可以实现读写分离，分担 Redis 读操作的压力，而 Redis Cluster 中的 slave 节点只是实现冷备份机制，只有在 master 宕机之后才会工作。</li><li>Redis 哨兵集群无法在线扩容，所以并发压力受限于单个服务器资源的配置，Redis Cluster 提供了基于 slot 的数据分片机制，可以实现在线扩容，提升读写性能。</li><li>Redis 哨兵集群是一主多从，而 Redis Cluster 是一个多主多从的机制。</li></ol>',49);function b(k,R){return a(),i("div",null,[u,v,f,l(" more "),_])}const B=s(g,[["render",b],["__file","5rediscluster.html.vue"]]);export{B as default};
