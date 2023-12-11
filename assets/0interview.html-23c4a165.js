import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as l}from"./app-3809097b.js";const r={},h=l('<p>⁉️ 个人回答不保证正确</p><h1 id="得物" tabindex="-1"><a class="header-anchor" href="#得物" aria-hidden="true">#</a> 得物</h1><h2 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h2><h3 id="说一说-cms-和-g1-垃圾收集器" tabindex="-1"><a class="header-anchor" href="#说一说-cms-和-g1-垃圾收集器" aria-hidden="true">#</a> 说一说 CMS 和 G1 垃圾收集器</h3><ul><li>CMS 是标记清除算法的垃圾回收器，运行流程分为初始标记、并发标记、重新标记、并发清除，其中初始标记和重新标记会产生 STW，对在并发标记阶段修改的引用采用增量更新方法，G1 将堆内存分为多个 Region 区域，可以作为年轻代或者老年代，运行流程分为初始标记、并发标记、最终标记、筛选回收，其中除了并发标记阶段都会产生 STW，对并发标记阶段产生的引用链修改采用原始快照的方法。</li></ul><h3 id="reentrantlock-中的公平锁和非公平锁是怎么实现的" tabindex="-1"><a class="header-anchor" href="#reentrantlock-中的公平锁和非公平锁是怎么实现的" aria-hidden="true">#</a> ReentrantLock 中的公平锁和非公平锁是怎么实现的？</h3><ul><li>ReentrantLock 基于 AQS 实现，其中有公平锁实现和非公平锁实现，对对象的加锁过程就是修改对象的 state 过程，采用 CAS 进行修改，修改失败表示有竞争，则会创建为一个 CLH 节点放入到 CLH队列的尾部，CLH 队列是一个虚拟的双向队列，其中存储了线程关系，存放在这个队列中的节点都是为竞争锁失败的节点。</li><li>公平锁实现：如果锁被释放，则会唤醒 CLH 队列中头节点的后一个节点，来竞争加锁，此时如果有一个新的线程也想进行加锁，则会检查 CLH 队列中头节点之后是否有节点，有节点则表示之前已经有线程等待了，则将自己放入 CLH 队列尾部。</li><li>非公平锁实现：在有新线程想加锁时，不管 CLH 队列中头节点之后是否有节点在等待，直接使用 CAS 尝试加锁。</li></ul><h3 id="redo-log-和-undo-log-的作用" tabindex="-1"><a class="header-anchor" href="#redo-log-和-undo-log-的作用" aria-hidden="true">#</a> redo log 和 undo log 的作用？</h3><ul><li>redo log 用来记录数据库的修改，主要用来做崩溃恢复的，undo log 配合隐藏字段、Read View 实现 MVCC。</li><li><strong>redo log 文件是啥样的？</strong>（没太懂啥意思）</li><li>redo log 在磁盘中以日志文件组的形式出现，可以看成一个循环队列，包含 checkpoint 和 write pos，如果 write pos 追上 checkpoint ，表示日志文件组满了，这时候不能再写入新的 redo log 记录。</li><li><strong>redo log 是顺序写吗？</strong></li><li>是顺序写，如果对每次修改之后将一个页写回，可能只修改了很少的数据，没有必要这样做，并且页还不是顺序写效率较差，如果是 redo log 写，又是顺序写，整体效率较高。</li></ul><h3 id="两阶段提交了解吗" tabindex="-1"><a class="header-anchor" href="#两阶段提交了解吗" aria-hidden="true">#</a> 两阶段提交了解吗？</h3><ul><li>两阶段提交指的是 redo log 的提交分为两个阶段，分别是 prepare 和 commit，在 prepare 之后 binlog 写入，然后再 commit。</li><li>如果在 prepare 之后，出现问题，导致 binlog 写入失败，则发现没有对应的 binlog，事务将会回滚，如果是在写 binlog 之后发生错误，即使 redo log 没有 commit，但是有 binlog 则表明事务提交成功了，事务不会回滚。</li></ul><h3 id="spring-事务说说" tabindex="-1"><a class="header-anchor" href="#spring-事务说说" aria-hidden="true">#</a> Spring 事务说说</h3><ul><li>Spring 中事务通过 @Transactional 注解对方法提供事务支持，原理是创建一个动态代理对象，由动态代理对象执行这个方法，并对前后进行增强，也就是在执行数据库操作前将事务的提交模式改为手动，再进行数据库操作，发生异常则进行回滚。</li></ul><h3 id="什么情况下会产生事务失效" tabindex="-1"><a class="header-anchor" href="#什么情况下会产生事务失效" aria-hidden="true">#</a> 什么情况下会产生事务失效？</h3><ul><li>方法没有被 public 修饰，因为 CGLIB 动态代理是生成一个子类进行调用，如果父类方法不是 public 则调用不了。</li><li>this 调用，需要使用动态代理对象调用方法才能让事务失效，this 调用是普通对象的调用。</li><li>异常没有正确抛出，如果内部将异常捕获了，外部 Spring 感知不到则会导致事务失效。</li><li>事务的传播机制设置错误，例如设置为 NEVER 则表示不使用事务。</li><li>数据库本身不支持事务。</li></ul><h3 id="什么情况下使用编程式事务什么情况下使用注解式事务" tabindex="-1"><a class="header-anchor" href="#什么情况下使用编程式事务什么情况下使用注解式事务" aria-hidden="true">#</a> 什么情况下使用编程式事务什么情况下使用注解式事务？</h3><ul><li>（不太明白，我直接说没有用过编程式事务）</li><li>编程式事务能在任何的代码片段中添加事物，而注解式事务的要求条件比较多，灵活性不如编程式事务。</li><li>注解式事务会导致方法开始的时候就申请连接，可能导致连接的利用率不高，不如编程式事务。</li></ul><h3 id="ssl-tsl-了解吗" tabindex="-1"><a class="header-anchor" href="#ssl-tsl-了解吗" aria-hidden="true">#</a> SSL/TSL 了解吗？</h3><ul><li>（不了解）不太了解，只知道 HTTPS 是基于 SSL/TSL 实现的，这两个都是建立在 TCP 链接基础上的协议。</li><li>HTTPS 为了防止中间人篡改信息，引入了证书机制，证书就是身份信息 + 公钥，将公钥发送给客户端，客户端通过上层证书提供商检查证书合法性，通过之后则会产生一个秘钥，秘钥通过公钥进行加密，到了服务器端通过私钥进行解密。服务器得到秘钥，之后的数据传输用这个秘钥进行对称加密。</li><li>总结就是发送的数据通过对称加密，加密使用的秘钥通过非对称加密。</li></ul><h3 id="国内输入谷歌网站但是访问不到-发生了什么" tabindex="-1"><a class="header-anchor" href="#国内输入谷歌网站但是访问不到-发生了什么" aria-hidden="true">#</a> 国内输入谷歌网站但是访问不到，发生了什么？</h3><ul><li>正常访问网页首先是通过域名 DNS 解析得到 IP 地址，查询方式有迭代查询和递归查询。之后与服务器建立 TCP 连接，然后发送请求到服务器，服务器返回数据，浏览器渲染。</li><li><strong>访问不到 Google 的原因是在哪个环节？</strong></li><li>我先说是 DNS，后来想了下回答是 TCP 连接环节。</li><li><strong>防火墙在哪一个环节生效？</strong></li><li>TCP 连接环节，因为 TCP 是端到端的协议，需要提供端口，配置防火墙的时候需要添加入站和出站的端口。</li></ul><h3 id="反问" tabindex="-1"><a class="header-anchor" href="#反问" aria-hidden="true">#</a> 反问</h3><h2 id="二面" tabindex="-1"><a class="header-anchor" href="#二面" aria-hidden="true">#</a> 二面</h2><h3 id="学习中遇到困难如何解决的-请举例。" tabindex="-1"><a class="header-anchor" href="#学习中遇到困难如何解决的-请举例。" aria-hidden="true">#</a> 学习中遇到困难如何解决的？请举例。</h3><ul><li>举了 float 浮点数的精度丢失问题，如何解决。线程安全问题，例如对 int 变量的并发修改问题，如何解决，volatile 关键字的实现原理，再延伸到 JVM 内存模型。</li><li>几乎没有太多技术性的问题。</li></ul><h1 id="富途" tabindex="-1"><a class="header-anchor" href="#富途" aria-hidden="true">#</a> 富途</h1><h2 id="一面-1" tabindex="-1"><a class="header-anchor" href="#一面-1" aria-hidden="true">#</a> 一面</h2><h3 id="自我介绍" tabindex="-1"><a class="header-anchor" href="#自我介绍" aria-hidden="true">#</a> 自我介绍</h3><h3 id="谈谈你对测试流程的理解" tabindex="-1"><a class="header-anchor" href="#谈谈你对测试流程的理解" aria-hidden="true">#</a> 谈谈你对测试流程的理解</h3><ul><li>最近才开始学测试，整体流程不是太了解，我认为是编写好文档，然后设计好输入的样例，查看输出结果是否能对应上。</li></ul><h3 id="为什么想投递测试" tabindex="-1"><a class="header-anchor" href="#为什么想投递测试" aria-hidden="true">#</a> 为什么想投递测试？</h3><ul><li>因为 Java 开发竞争太大了，而且会后端代码，能更好的做白盒测试。</li><li><strong>其实竞争都挺大，哈哈。</strong></li></ul><h3 id="对数据库的查询-数据进行排序获取前十个用什么关键字" tabindex="-1"><a class="header-anchor" href="#对数据库的查询-数据进行排序获取前十个用什么关键字" aria-hidden="true">#</a> 对数据库的查询，数据进行排序获取前十个用什么关键字？</h3><ul><li>使用 order by 和 limit。</li><li><strong>如果进行分组呢？</strong></li><li>group by。</li></ul><h3 id="发现数据库查询的速度变慢-会想到什么优化措施" tabindex="-1"><a class="header-anchor" href="#发现数据库查询的速度变慢-会想到什么优化措施" aria-hidden="true">#</a> 发现数据库查询的速度变慢，会想到什么优化措施？</h3><ul><li>尽量减少 select * 的查询，如果数据库的数据太多，可以使用分库分表，经常查询的字段可以添加索引。</li></ul><h3 id="数据库死锁了解吗" tabindex="-1"><a class="header-anchor" href="#数据库死锁了解吗" aria-hidden="true">#</a> 数据库死锁了解吗？</h3><ul><li>操作系统中定义的死锁为有两个或者多个进程因为竞争资源导致阻塞，如果没有外力作用，两者都无法向前推进。</li><li>数据库中的死锁发生在两个事务对数据加锁并且请求修改对方加锁的数据。</li><li></li></ul><h3 id="常见的-http-状态码说下" tabindex="-1"><a class="header-anchor" href="#常见的-http-状态码说下" aria-hidden="true">#</a> 常见的 HTTP 状态码说下</h3><ul><li>200 请求成功，301 永久重定向，302 临时重定向，400 客户端错误，401 未授权，403 访问拒绝，404 页面没有找到，500 服务器错误，502 网关错误，504 网关超时。</li></ul><h3 id="get-和-post-区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-区别" aria-hidden="true">#</a> GET 和 POST 区别</h3><ul><li>GET 用来请求数据，POST 用来插入数据。</li><li>GET 幂等，POST 不幂等。</li><li>GET 的参数放在 URL 中，POST 放在 Body 中。</li><li>这些都是规范，也可以不遵守，将后端的处理做好即可。</li></ul><h3 id="tcp-和-udp-的区别" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的区别" aria-hidden="true">#</a> TCP 和 UDP 的区别</h3><ul><li>TCP 面向连接，字节流，可靠的传输层协议。</li><li>UDP 不面向连接，不可靠的传输层协议。</li><li>TCP 是端到端的协议，双方需要通过三次握手建立连接。</li><li>UDP 可以产生广播消息，TCP 不可以。</li><li><strong>UDP 适用于哪些场景？</strong></li><li>视频对话，语音对话，对正确性要求不高的场景。</li><li>TCP 适用于对要求高的场景，例如 FTP、POP3、SMTP、SSH 协议等都是基于 TCP 的。</li><li><strong>那么我在腾讯视频看视频的时候应该用的是哪种传输协议？</strong></li><li>应该是 TCP 吧，看视频其实就是文件传输的过程，使用 FTP 将文件传输到本地，然后通过播放器播放，对文件的完整性要求高。</li></ul><h3 id="如果有八个球-其中七个球的重量是相同的-另外一个球稍微重一点-给你一个天平-需要多少次比较能得到最重的球" tabindex="-1"><a class="header-anchor" href="#如果有八个球-其中七个球的重量是相同的-另外一个球稍微重一点-给你一个天平-需要多少次比较能得到最重的球" aria-hidden="true">#</a> 如果有八个球，其中七个球的重量是相同的，另外一个球稍微重一点，给你一个天平，需要多少次比较能得到最重的球？</h3><ul><li>刚开始想到的是二分查找，首先 4V4，然后 2V2，再 1V1。</li><li><strong>不对，还可以做优化。</strong></li><li>能给点提示吗？</li><li><strong>例如三个球，当中有一个重一点，则需要几次比较？</strong></li><li>一次，选择两个球，如果当中有一个重，则就是目标球，如果两个重量相等剩下的就是目标球。</li><li>所以八个球的场景下，应该先 3V3，如果有一边重，则退化为三个球的场景，如果同样重，则最重的球在剩余两个球中，需要一次比较。</li></ul><h3 id="有一根绳子-从一边开始烧-烧完需要一个小时-则如何通过烧绳子计时-1-小时-15-分钟" tabindex="-1"><a class="header-anchor" href="#有一根绳子-从一边开始烧-烧完需要一个小时-则如何通过烧绳子计时-1-小时-15-分钟" aria-hidden="true">#</a> 有一根绳子，从一边开始烧，烧完需要一个小时，则如何通过烧绳子计时 1 小时 15 分钟？</h3><ul><li>首先用两根绳子，当中一个从两边开始烧，需要半个小时烧完，另外一个先从一边开始烧，到了半个小时之后将另外一边点燃，则再过 15 分钟烧完。</li><li>剩余一个小时再烧一根绳子即可。</li></ul><h3 id="代码题爬楼梯" tabindex="-1"><a class="header-anchor" href="#代码题爬楼梯" aria-hidden="true">#</a> 代码题爬楼梯</h3><ul><li>动态规划</li></ul><h3 id="有-n-个人-他们各自有一个礼物-送给其他人-并且不能拿到自己的礼物-打印所有情况" tabindex="-1"><a class="header-anchor" href="#有-n-个人-他们各自有一个礼物-送给其他人-并且不能拿到自己的礼物-打印所有情况" aria-hidden="true">#</a> 有 n 个人，他们各自有一个礼物，送给其他人，并且不能拿到自己的礼物，打印所有情况</h3><ul><li>（回溯光速写完，以为秒了）。</li><li><strong>有个 BUG 你发现了吗？例如有五个人，前四个只拿到了前四个人的礼物，则最后一个人只剩下自己的礼物怎么办？</strong></li><li>跟前面任意一个人交换礼物即可。</li></ul><h3 id="代码题-找出无序数组中的最大值和最小值" tabindex="-1"><a class="header-anchor" href="#代码题-找出无序数组中的最大值和最小值" aria-hidden="true">#</a> 代码题，找出无序数组中的最大值和最小值</h3><ul><li>线性查找</li></ul><h3 id="反问-1" tabindex="-1"><a class="header-anchor" href="#反问-1" aria-hidden="true">#</a> 反问</h3><h2 id="二面-1" tabindex="-1"><a class="header-anchor" href="#二面-1" aria-hidden="true">#</a> 二面</h2><h3 id="hashmap底层结构" tabindex="-1"><a class="header-anchor" href="#hashmap底层结构" aria-hidden="true">#</a> HashMap底层结构</h3><h3 id="从-1-n-的数字中随机取出-m-个-数字-时间复杂度要求为-m" tabindex="-1"><a class="header-anchor" href="#从-1-n-的数字中随机取出-m-个-数字-时间复杂度要求为-m" aria-hidden="true">#</a> 从 1 ~ N 的数字中随机取出 M 个 数字，时间复杂度要求为 M</h3><h3 id="_52-张扑克牌中-取出炸弹的概率大还是顺子的概率大" tabindex="-1"><a class="header-anchor" href="#_52-张扑克牌中-取出炸弹的概率大还是顺子的概率大" aria-hidden="true">#</a> 52 张扑克牌中，取出炸弹的概率大还是顺子的概率大？</h3><h3 id="有-10-个袋子-每个袋子里面都有-100-个硬币-其中-9-个袋子中的硬币重量是相同的-都是-10-克-另外一个袋子里的硬币是-9-克-如果只用一次带刻度的电子秤-找到-9-克硬币的袋子的方法" tabindex="-1"><a class="header-anchor" href="#有-10-个袋子-每个袋子里面都有-100-个硬币-其中-9-个袋子中的硬币重量是相同的-都是-10-克-另外一个袋子里的硬币是-9-克-如果只用一次带刻度的电子秤-找到-9-克硬币的袋子的方法" aria-hidden="true">#</a> 有 10 个袋子，每个袋子里面都有 100 个硬币，其中 9 个袋子中的硬币重量是相同的，都是 10 克，另外一个袋子里的硬币是 9 克，如果只用一次带刻度的电子秤，找到 9 克硬币的袋子的方法</h3><h1 id="快手" tabindex="-1"><a class="header-anchor" href="#快手" aria-hidden="true">#</a> 快手</h1><h2 id="一面-2" tabindex="-1"><a class="header-anchor" href="#一面-2" aria-hidden="true">#</a> 一面</h2><h3 id="自我介绍-1" tabindex="-1"><a class="header-anchor" href="#自我介绍-1" aria-hidden="true">#</a> 自我介绍</h3><h3 id="对电商项目的优化" tabindex="-1"><a class="header-anchor" href="#对电商项目的优化" aria-hidden="true">#</a> 对电商项目的优化</h3><ul><li>更改了 JVM 中的老年代和新生代的内存分布，将秒杀的并发量提高。</li><li>使用 CompletableFuture 对 SKU 数据进行异步查询，提高了查询速度。</li><li>登录部分由原来的手动查询用户数据密码比对，改为了使用 SpringSecurity 进行登录认证，简化了开发步骤，另外使用 Redis 解决分布式下的用户数据共享。</li><li>使用 Sentinel 限制后端并发数，熔断降级保证服务安全可用。</li></ul><h3 id="虚拟内存的概念" tabindex="-1"><a class="header-anchor" href="#虚拟内存的概念" aria-hidden="true">#</a> 虚拟内存的概念</h3><ul><li>虚拟内存是解决内存紧张的问题，对应于操作系统调度中的中级调度，在程序运行时并不要把所有的数据都放入内存，并且在内存紧张时将部分暂时不会执行的进程放入到磁盘中，等到内存够用时再将其调回内存。</li></ul><h3 id="操作系统中文件的实现" tabindex="-1"><a class="header-anchor" href="#操作系统中文件的实现" aria-hidden="true">#</a> 操作系统中文件的实现</h3><ul><li>单级目录结构和多级目录结构以及图形目录结构的优缺点。</li></ul><blockquote><p>现在想起来面试官问的应该是文件的逻辑结构和物理结构。</p><p>逻辑结构分为顺序，索引和顺序索引结构。</p><p>物理结构的实现分为</p><ul><li><p>连续分配，在目录中设置对应文件的开始块号和结束块号。</p></li><li><p>链接分配分为隐式链接和显式链接，隐式链接可靠性差，显示连接的指针占用空间，并且可靠性也不好。</p></li><li><p>索引分配，为每个文件分配一个索引分配表，表中记录了属于这个文件的磁盘块，不仅支持随机访问，而且不会产生外部碎片。</p></li><li><p>混合索引分配，既有直接地址分配，又有多级索引分配。</p></li></ul></blockquote><h3 id="多级缓存的作用" tabindex="-1"><a class="header-anchor" href="#多级缓存的作用" aria-hidden="true">#</a> 多级缓存的作用</h3><ul><li>（这玩意书上怎么没看到），我说我对硬件有所了解，CPU 中的缓存就是多级缓存，现在的 CPU 一般包含三级缓存，分别是 l1，l2，l3，速度逐渐降低，容量逐渐扩大，使用多级缓存能很好的解决 CPU 速度和主存速度不匹配的问题，就像主存用来解决 CPU 和 磁盘之间的速度差异一样。</li></ul><h3 id="访问一个网址的过程" tabindex="-1"><a class="header-anchor" href="#访问一个网址的过程" aria-hidden="true">#</a> 访问一个网址的过程</h3><ul><li>首先通过 DNS 解析为 IP 地址，再和 IP 地址进行 TCP 三次握手，将请求发送给服务器，服务器处理之后返回解析的数据，浏览器展示。</li></ul><h3 id="tcp-三次握手说说" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手说说" aria-hidden="true">#</a> TCP 三次握手说说</h3><ul><li>首先客户端发送数据到客户端，当中有 <code>SYN=1,seq=x</code>，服务器收到数据之后返回确认 <code>SYN=1,ack=x+1,seq=y</code>，客户端收到确认之后返回确认<code>ack=y+1,seq=x+1</code>。</li></ul><h3 id="http-和-https-的区别" tabindex="-1"><a class="header-anchor" href="#http-和-https-的区别" aria-hidden="true">#</a> HTTP 和 HTTPS 的区别</h3><ul><li><p><strong>端口号</strong>：HTTP 默认是 <code>80</code>，HTTPS 默认是 <code>443</code>。</p></li><li><p><strong>URL 前缀</strong>：HTTP 的 URL 前缀是 <code>http://</code>，HTTPS 的 URL 前缀是 <code>https://</code>。</p></li><li><p><strong>安全性和资源消耗</strong>：HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。HTTPS 是运行在 SSL/TLS 之上的 HTTP 协议，SSL/TLS 运行在 TCP 之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。所以说，HTTP 安全性没有 HTTPS 高，但是 HTTPS 比 HTTP 耗费更多服务器资源。</p></li></ul><h3 id="常见的-request-header" tabindex="-1"><a class="header-anchor" href="#常见的-request-header" aria-hidden="true">#</a> 常见的 Request Header</h3><ul><li><code>Accept</code>：请求报头域，用于指定客户端能接受哪些类型的信息。</li><li><code>Host</code>：用于指定请求资源的主机 IP 和端口号，其内容为请求 URL 的原始服务器或网关的地址。</li><li><code>Referer</code>：表示当前的请求是从哪个 URL 过来的，一般可以用来做反爬虫，不是本站发送的请求就不会响应。</li><li><code>Connection</code>：分为 <code>close</code> 和 <code>keep-alive</code> 用来表示发送完请求的对象之后是关闭连接还是持续的连接。</li><li><code>Access-Control-Allow-Origin</code>：允许跨域时添加的参数，用来表示哪个源地址发来的请求允许跨域。</li><li><code>Cache-Control</code>：控制是否能缓存数据。</li><li><code>Accept-Language</code>：浏览器支持的语言。</li><li><code>Accept-Encoding</code>：浏览器支持的编码方案。</li></ul><h3 id="数据库为什么比-redis-慢" tabindex="-1"><a class="header-anchor" href="#数据库为什么比-redis-慢" aria-hidden="true">#</a> 数据库为什么比 Redis 慢？</h3><ul><li>数据库需要从磁盘中读取页来进行查询，而 Redis 是在内存中操作，所以速度更快，另外 Redis 使用多路复用技术使得并发量进一步提高。</li></ul><h3 id="如果一张表中有太多的列和太多的行-怎么进行优化" tabindex="-1"><a class="header-anchor" href="#如果一张表中有太多的列和太多的行-怎么进行优化" aria-hidden="true">#</a> 如果一张表中有太多的列和太多的行，怎么进行优化？</h3><ul><li>水平分表和垂直分表，将数据分散到多张表中以解决单表的并发度问题。</li></ul><h3 id="算法题" tabindex="-1"><a class="header-anchor" href="#算法题" aria-hidden="true">#</a> 算法题</h3><ul><li>链表右移，右移的元素放入到头部</li><li>例如 1-&gt;2-&gt;3-&gt;4，右移 1 次之后变成 4-&gt;1-&gt;2-&gt;3，求出右移 k 次之后的链表，秒了。</li></ul><h3 id="反问技术栈" tabindex="-1"><a class="header-anchor" href="#反问技术栈" aria-hidden="true">#</a> 反问技术栈</h3><h2 id="二面-挂" tabindex="-1"><a class="header-anchor" href="#二面-挂" aria-hidden="true">#</a> 二面 挂</h2><blockquote><p>面出阴影了。</p></blockquote><h3 id="介绍一下线程池" tabindex="-1"><a class="header-anchor" href="#介绍一下线程池" aria-hidden="true">#</a> 介绍一下线程池</h3><ul><li>介绍了线程池参数，拒绝策略，常见的线程池实现，任务队列的类型等。</li></ul><h3 id="线程池的好处" tabindex="-1"><a class="header-anchor" href="#线程池的好处" aria-hidden="true">#</a> 线程池的好处</h3><ul><li>减少了线程频繁创建销毁的开销。</li><li>提高响应速度。</li><li>提高线程的可管理性。</li></ul><h3 id="线程切换为什么比进程切换开销小" tabindex="-1"><a class="header-anchor" href="#线程切换为什么比进程切换开销小" aria-hidden="true">#</a> 线程切换为什么比进程切换开销小？</h3><blockquote><p>傻逼了，背了不知道多少遍线程切换开销小，怎么就没想过这个问题的答案呢。</p></blockquote><p>进程是资源管理的基本单位，线程只拥有小部分提供自身运行的资源。进程在切换时会导致快表 TLB 失效（快表中存储了最近进程访问的页面映射，可以加快虚实地址转换速度），进程切换时要切页表，而且往往伴随着页调度，因为进程的数据段代码段要换出去，以便把将要执行的进程的内容换进来。而线程只需要保存上下文信息（状态寄存器和栈信息）。</p><h3 id="在项目中如何通过场景的不同给定线程数目" tabindex="-1"><a class="header-anchor" href="#在项目中如何通过场景的不同给定线程数目" aria-hidden="true">#</a> 在项目中如何通过场景的不同给定线程数目？</h3><ul><li>在 CPU 繁忙的项目中，将核心线程数设置为 N + 1，N 为 CPU 核心数，多出来的 1 用来处理偶然发生的缺页中断。</li><li>IO 密集型设置核心线程数为 2N，系统大部分时间用来处理 IO 交互，处理 IO 的时候就不会占用 CPU 资源，这时可以将 CPU 交给其他任务。</li></ul><blockquote><p>面试管说在 IO 繁忙型的项目中，不应该设置这么多的核心线程，因为在 IO 的时候线程是会阻塞的，设置多个线程没有作用。</p></blockquote><h3 id="假如我是个小白-如何向我解释并发编程" tabindex="-1"><a class="header-anchor" href="#假如我是个小白-如何向我解释并发编程" aria-hidden="true">#</a> 假如我是个小白，如何向我解释并发编程？</h3><ul><li>我觉得 Java 的主要优势就是多线程的并发执行，在并发执行的过程中，如果不加以限制就会导致结果出现错误（并行语义之间不保证顺序性），因此并发编程就是学习在各种业务场景下保证线程安全，并学习 JDK 中的各种并发安全的类。</li></ul><h3 id="说说-java-当中的锁" tabindex="-1"><a class="header-anchor" href="#说说-java-当中的锁" aria-hidden="true">#</a> 说说 Java 当中的锁</h3><ul><li>互斥锁和共享锁算分类吗？</li><li><strong>算的，举个例子。</strong></li><li>例如同步锁 synchronized 关键字就是互斥锁，另外还有基于 AQS 实现的 ReentrantLock、CountDownLatch、CyclicBarrier。</li><li><strong>如果对实例方法加锁，锁住的是什么？</strong></li><li>（这里不知道为啥就突然想不起来了）回答了是对方法加锁（错误），实际上是对实例对象进行加锁。如果是对静态方法加锁，则锁住的是类 .class。</li></ul><h3 id="如果现在要一个线程安全的-list-你会如何实现" tabindex="-1"><a class="header-anchor" href="#如果现在要一个线程安全的-list-你会如何实现" aria-hidden="true">#</a> 如果现在要一个线程安全的 List，你会如何实现？</h3><ul><li>（想到了 CopyOnWriteArrayList）使用写时复制技术，也就是在读取的时候不会加锁，并且在读时写的时候也不会加锁，而是通过对原有数据复制一份进行修改，最后再覆盖原来的数据。</li></ul><blockquote><p>感觉面试官不太理解我说的话，头面向一边开始思考，然后说我记得 CopyOnWriteArrayList 写的时候会加锁的吧。（CopyOnWriteArrayList 在写和写之间会添加锁）</p></blockquote><h3 id="谈一下你对内部类的理解" tabindex="-1"><a class="header-anchor" href="#谈一下你对内部类的理解" aria-hidden="true">#</a> 谈一下你对内部类的理解？</h3><ul><li>（只想到了单例模式的静态内部类实现方法）单例模式的一种实现方式就是静态内部类，在静态内部类里面对单例类实例化，则在单例类被装载的时候并不会实例化静态内部类，只有在外部调用的时候才会进行实例化。</li><li>普通的内部类我觉得是体现了封装关系吧。（开始胡扯）</li></ul><h3 id="项目当中遇到的困难" tabindex="-1"><a class="header-anchor" href="#项目当中遇到的困难" aria-hidden="true">#</a> 项目当中遇到的困难？</h3><ul><li>在秒杀的整体流程中考虑如何保证不会出现超卖和保证服务器正常运作，因此通过视频学习，实现了通过 Redis 给用户占位，Semaphore 模拟库存扣减，消息队列进行削峰减少服务器压力。通过 CompletableFuture 实现了 SKU 的异步查询，提高了接口的访问速度。</li><li>另外在后期的优化中，通过对 JVM 的学习，调整了堆内存的分布，提高了 QPS。</li></ul><h3 id="算法题-归并两个有序的数组-nums1-nums2-假设-nums1-有足够的空间" tabindex="-1"><a class="header-anchor" href="#算法题-归并两个有序的数组-nums1-nums2-假设-nums1-有足够的空间" aria-hidden="true">#</a> 算法题：归并两个有序的数组 nums1，nums2，假设 nums1 有足够的空间</h3><ul><li>如果创建新的链表将另外两个链表归并能直接秒。在不创建额外的数组的条件下，代码写了一会，发现得不到想要的结果。面试完之后在本地 IDE 上调试了一下，发现有个点没考虑到。（真他妈蠢啊）</li><li><strong>你的解题思路是什么？</strong></li><li>将 nums2 中的元素归并到 nums1 中，如果要插入 nums1 的 idx1 位置，则需要将这个位置以及后面的元素都向后移动移动一个位置。</li><li><strong>时间复杂度为多少？</strong></li><li>如果两个数组的长度都看成 n，则时间复杂度为 n 平方，因为外层是对数组遍历，内层是移动元素。</li><li><strong>时间复杂度的定义是啥？</strong></li><li>找到程序中平均运行次数最多的语句，计算他的运行次数，并得到相应的数量级就是时间复杂度。</li></ul><h1 id="税友集团" tabindex="-1"><a class="header-anchor" href="#税友集团" aria-hidden="true">#</a> 税友集团</h1><h2 id="一面-3" tabindex="-1"><a class="header-anchor" href="#一面-3" aria-hidden="true">#</a> 一面</h2><p>全程八股，只记得一部分了。</p><ul><li>介绍下电商项目</li><li>秒杀部分的线程安全问题</li><li>Redis 在项目中的作用</li><li>编写代码应该遵循的规范</li><li>介绍一下Collection接口</li><li>HashMap线程安全吗？ConcurrentHashMap实现原理是什么？</li><li>CAS是什么？</li><li>单例模式的实现方式</li><li>静态内部类实现单例的原理</li><li>volatile关键字的作用，如何实现可见性的？</li><li>synchronized关键字的作用，修饰类，类对象，静态方法的区别？</li><li>ReentrantLock的实现原理，与synchronized的异同，公平和非公平如何实现的？</li><li>什么是Java内存模型？什么是原子性，可见性，有序性？</li><li>happens-before是什么？</li><li>ThreadLocal内部实现原理</li><li>线程池的主要参数，任务队列有哪些？</li></ul><h1 id="同程旅行" tabindex="-1"><a class="header-anchor" href="#同程旅行" aria-hidden="true">#</a> 同程旅行</h1><h2 id="一面-4" tabindex="-1"><a class="header-anchor" href="#一面-4" aria-hidden="true">#</a> 一面</h2><p>面试官迟到了一分钟还说抱歉，我真的哭死。</p><h3 id="介绍一下简历上的项目" tabindex="-1"><a class="header-anchor" href="#介绍一下简历上的项目" aria-hidden="true">#</a> 介绍一下简历上的项目</h3><ul><li>第一个项目为一个电商的项目，通过 Nginx 动静分离，分为多个微服务。。。。。。</li></ul><h3 id="介绍一下-ioc-和-aop" tabindex="-1"><a class="header-anchor" href="#介绍一下-ioc-和-aop" aria-hidden="true">#</a> 介绍一下 IOC 和 AOP</h3><ul><li>IOC 又叫做控制翻转，在没有使用 Spring 之前，写后端的接口需要通过编写 Servlet 类来完成，有了控制反转之后，就能将这些对象的创建过程交给 Spring 来做，这样程序员就能注重于代码开发而不是对象创建。</li><li>AOP 是 SpringBoot 中的很重要的特性，面向切面编程，设计模式中讲到开闭原则，应该不修改原有的代码下扩展业务逻辑，Spring 可以在不修改原有代码的情况下实现对方法的前后的增强。主要使用到生成动态代理来进行增强，以 Spring 事务举例，通过生成一个 CGLIB 对象来获取数据库连接，将提交模式改为手动，之后执行数据库操作，发生异常则进行回滚，否则提交。</li><li>了解的就这些了，可能还有一部分没有讲到。</li><li><strong>没关系已经答得很好了</strong>。</li></ul><h3 id="springboot-约定优于配置是什么意思" tabindex="-1"><a class="header-anchor" href="#springboot-约定优于配置是什么意思" aria-hidden="true">#</a> SpringBoot 约定优于配置是什么意思？</h3><ul><li>就是 SpringBoot 中有默认的配置，程序员不去配置就会使用这些默认的配置，用意在于帮程序员聚焦于业务逻辑上。</li><li>例如不对 SpringBoot 的后端服务器进行配置，则会默认使用 Tomcat 作为后端服务器。</li></ul><h3 id="spring-中的事务传播行为有哪些" tabindex="-1"><a class="header-anchor" href="#spring-中的事务传播行为有哪些" aria-hidden="true">#</a> Spring 中的事务传播行为有哪些？</h3><ul><li>传播行为的配置为事务注解里的 propagation 属性。</li><li>REQUIRED（默认）：如果当前没有事务则开启一个新的事务，如果存在事务则加入。</li><li>SUPPORTS：如果存在事务则加入，否则以非事务模式运行。</li><li>MANDATORY：如果存在事务则加入，如果不存在事务则抛出异常。</li><li>NEVER：从来不使用事务。</li><li>NESTED：如果存在事务则将当前事务嵌套进去，否则开启一个新的事务。</li></ul><h3 id="java-中有哪些类型的锁" tabindex="-1"><a class="header-anchor" href="#java-中有哪些类型的锁" aria-hidden="true">#</a> Java 中有哪些类型的锁？</h3><ul><li>是锁的分类还是具体的锁？</li><li><strong>锁的分类。</strong></li><li>读锁，写锁，互斥锁，同步锁。（重入锁，读写锁，公平锁，互斥锁，信号量，偏向锁）</li></ul><h3 id="死锁发生的原因-怎么防止" tabindex="-1"><a class="header-anchor" href="#死锁发生的原因-怎么防止" aria-hidden="true">#</a> 死锁发生的原因？怎么防止？</h3><ul><li>操作系统中讲到死锁是因为两个或者以上的进程因为竞争资源导致停顿，如果没有外力作用则都无法向前推进。</li><li>死锁产生有四个必要条件：互斥、不剥夺、请求并保持、环路等待。</li><li>预防采取破坏第三个条件或者第四个，分别采取资源静态分配和资源有序分配方法。</li><li>避免死锁采用银行家算法，死锁检测和解除用到死锁定理，资源分配图，发生死锁之后进行进程回退，进程撤销等。</li></ul><h3 id="内存泄漏的理解" tabindex="-1"><a class="header-anchor" href="#内存泄漏的理解" aria-hidden="true">#</a> 内存泄漏的理解</h3><ul><li>JVM 中有四种引用类型，分别是强软弱虚，其中强引用不会被 GC，而软引用和弱引用会被 GC。</li><li>例如 ThreadLocal 中包含一个内部类 ThreadLocalMap，是一个 Map，放入元素的 key 是弱引用而 value 是强引用，所以 key 可能会被 GC，则会导致 value 也取不到，内存泄漏。</li><li><strong>生产中如何排查？比如我提一点，及时释放动态分配的内存</strong></li><li>还是不知道怎么回答。</li></ul><h3 id="sql-语句中关键字的优先级顺序" tabindex="-1"><a class="header-anchor" href="#sql-语句中关键字的优先级顺序" aria-hidden="true">#</a> SQL 语句中关键字的优先级顺序</h3><ul><li>我尝试回答一下不一定对，from-》where-》group by-》having-》order by-》limit。（应该没错）</li></ul><h3 id="如何排查-sql-是不是一个慢查询" tabindex="-1"><a class="header-anchor" href="#如何排查-sql-是不是一个慢查询" aria-hidden="true">#</a> 如何排查 SQL 是不是一个慢查询？</h3><ul><li>生产阶段通过在 SQL 前添加 EXPLAIN 关键字，查看 SQL 的运行日志。</li><li>例如字段 type 就能看出这个是哪种类型的操作，其中最好的是 system 类型，然后到 const，最差的是 all 表示全盘扫描。</li><li>通过 key 可以查看 SQL 是不是走了索引。</li></ul><h3 id="索引失效问题" tabindex="-1"><a class="header-anchor" href="#索引失效问题" aria-hidden="true">#</a> 索引失效问题？</h3><ul><li>最左匹配原则。</li><li>查询中使用了函数计算。</li><li>or 关键字两端有一个没有走索引。</li><li>隐式转换。</li></ul><h3 id="如何对-mysql-的性能进行调优" tabindex="-1"><a class="header-anchor" href="#如何对-mysql-的性能进行调优" aria-hidden="true">#</a> 如何对 MySQL 的性能进行调优？</h3><ul><li>将经常查询或者不怎么变化的数据放入到 Redis 中。</li><li>建立索引加快查询速度。</li><li>分库分表。</li><li><strong>分库分表应该怎么做？</strong></li><li>我在项目中的表数据并不是很多所以没有做分表，但是做了分库，由于整个项目是微服务构建的，所以每一个微服务有各自的职责，根据数据自治原则，例如订单的微服务就应该管理其对应的订单库，产品微服务应该管理对应的产品库。</li></ul><h3 id="redis-能用在什么场景上" tabindex="-1"><a class="header-anchor" href="#redis-能用在什么场景上" aria-hidden="true">#</a> Redis 能用在什么场景上？</h3><ul><li>Redis 运行在内存上，所以对并发或者响应要求较高的场景都能用到。</li><li>例如在本项目中，将不怎么变化的 SKU 商品数据放入 Redis 中，另外用户登录之后将用户数据放入到 Redis 中以实现多模块的用户数据共享。</li><li>此外 Redis 还可以用作分布式锁解决缓存击穿问题。</li></ul><h3 id="redis-的持久化方式" tabindex="-1"><a class="header-anchor" href="#redis-的持久化方式" aria-hidden="true">#</a> Redis 的持久化方式</h3><ul><li>RDB 是对内存做快照，有两种创建快照的方法，save 使用主线程进行持久化，bgsave 是创建一个新的线程进行持久化，创建 RDB 占用 CPU 和 IO 资源，数据实时性不是很好，但是 Redis 宕机之后恢复的速度很快。</li><li>AOF 是追加文件的方式，类似于 InnoDB 的 binlog，将数据的操作采用追加的方式记录，整体过程很快，但是当 AOF 文件较大的时候会产生重写，也会占用较多的资源，这种方式的实时性好，但是 Redis 宕机之后恢复的速度较慢。</li></ul><h3 id="热-key-问题的解决方案" tabindex="-1"><a class="header-anchor" href="#热-key-问题的解决方案" aria-hidden="true">#</a> 热 key 问题的解决方案</h3><ul><li>Redis 中存在缓存穿透，缓存雪崩，缓存击穿，其中热 key 问题就是缓存击穿。</li><li>以项目中的秒杀场景举例，每一个秒杀场次都有对应的时间段，在时间段内才能进行秒杀请求，所以保证热 key 在该秒杀场景下不要过期就能解决热 key 问题，另外如果热 key 意外过期，可以在对数据库请求前添加互斥锁来解决缓存击穿问题。</li></ul><h3 id="bio-和-nio" tabindex="-1"><a class="header-anchor" href="#bio-和-nio" aria-hidden="true">#</a> BIO 和 NIO</h3><ul><li>按照分类来说 BIO 是阻塞 IO，CPU 在发送请求之后会一直等待 IO 数据准备好。不能做其他的事情。</li><li>NIO 是非阻塞 IO，请求发送之后就能立即返回，等到数据准备好了，通知 CPU 来做后续的事情。</li><li>Java 中的 NIO 可以看成一种多路复用的模型，IO 请求发送之后就能做其他事情，等到数据准备好了再进行后续。</li><li><strong>使用 BIO 的中间件有哪些？</strong></li><li>Redis 中通过单线程处理多个请求，属于 IO 多路复用，Redis 中通过建立在 TCP 链接上的信道传输数据，另外 Tomcat 监听一个端口同事处理多个请求所以也是 NIO。</li></ul><h3 id="用户的越权如何解决" tabindex="-1"><a class="header-anchor" href="#用户的越权如何解决" aria-hidden="true">#</a> 用户的越权如何解决？</h3><ul><li>越权指的是？</li><li><strong>例如没登录的用户来请求需要登录的接口。</strong></li><li>商城项目中对用户的账号密码验证之后会将用户的数据放入 Redis 中，并返回 token 给前端，前端的请求会被过滤器拦截，如果携带了正确的 token 则能直接取出用户数据得到用户的权限。</li></ul><h3 id="如果有个接口性能比较差如何做优化" tabindex="-1"><a class="header-anchor" href="#如果有个接口性能比较差如何做优化" aria-hidden="true">#</a> 如果有个接口性能比较差如何做优化？</h3><ul><li>接口优化在本项目中的体现：通过 zipkin 链路追踪发现 SKU 商品信息的查询花费时间较长，因为商品包含很多数据，需要去多个表中查询，因此采用异步编排将多个请求交给线程池执行，通过并发提交接口响应速度。</li><li>另外在秒杀场景中做压力测试，通过 Jconsole 发现老年代的 GC 频率较高，通过 JVM 参数 NewRatio 提高了老年代的比率，使得秒杀的吞吐量提高了。</li></ul><h3 id="反问-2" tabindex="-1"><a class="header-anchor" href="#反问-2" aria-hidden="true">#</a> 反问</h3><h2 id="二面-2" tabindex="-1"><a class="header-anchor" href="#二面-2" aria-hidden="true">#</a> 二面</h2><p>面试官看起来像个大佬。没有太多八股问题，20 分钟结束。</p><h3 id="登录部分怎么做的" tabindex="-1"><a class="header-anchor" href="#登录部分怎么做的" aria-hidden="true">#</a> 登录部分怎么做的？</h3><h3 id="redis-提高并发指的是" tabindex="-1"><a class="header-anchor" href="#redis-提高并发指的是" aria-hidden="true">#</a> Redis 提高并发指的是？</h3><h3 id="分布式锁怎么做的-有了解原理吗" tabindex="-1"><a class="header-anchor" href="#分布式锁怎么做的-有了解原理吗" aria-hidden="true">#</a> 分布式锁怎么做的，有了解原理吗？</h3><h3 id="每个用户查询自己的订单数据如何做数据隔离的" tabindex="-1"><a class="header-anchor" href="#每个用户查询自己的订单数据如何做数据隔离的" aria-hidden="true">#</a> 每个用户查询自己的订单数据如何做数据隔离的？</h3><h3 id="rabbitmq-削峰填谷说一下" tabindex="-1"><a class="header-anchor" href="#rabbitmq-削峰填谷说一下" aria-hidden="true">#</a> RabbitMQ 削峰填谷说一下</h3><h3 id="如果后端并发量承受不了如何做优化" tabindex="-1"><a class="header-anchor" href="#如果后端并发量承受不了如何做优化" aria-hidden="true">#</a> 如果后端并发量承受不了如何做优化？</h3><h3 id="反问-3" tabindex="-1"><a class="header-anchor" href="#反问-3" aria-hidden="true">#</a> 反问</h3>',163),d=[h];function n(t,s){return a(),e("div",null,d)}const u=i(r,[["render",n],["__file","0interview.html.vue"]]);export{u as default};