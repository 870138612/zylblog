export const pagesRoutes = [
  ["v-184f4da6","/intro.html",{"y":"p","t":"关于我","i":"aboutme"},["/intro","/intro.md"]],
  ["v-8daa1a0e","/",{"y":"h","t":"主页","i":"discovery"},["/index.html","/README.md"]],
  ["v-287418c4","/computer/2os.html",{"d":1684935861000,"c":["计算机基础"],"g":["操作系统","八股"],"e":"<h3> 操作系统的功能</h3>\n<p><strong>进程和线程的管理</strong>：进程的创建、撤销、阻塞、唤醒，进程间的通信等。</p>\n<p><strong>存储管理</strong>：内存的分配和管理、外存（磁盘等）的分配和管理等。</p>\n<p><strong>文件管理</strong>：文件的读、写、创建及删除等。</p>\n<p><strong>设备管理</strong>：完成设备（输入输出设备和外部存储设备等）的请求或释放，以及设备启动等功能。</p>\n<p><strong>网络管理</strong>：操作系统负责管理计算机网络的使用。网络是计算机系统中连接不同计算机的方式，操作系统需要管理计算机网络的配置、连接、通信和安全等，以提供高效可靠的网络服务。</p>\n<p><strong>安全管理</strong>：用户的身份认证、访问控制、文件加密等，以防止非法用户对系统资源的访问和操作。</p>\n","r":{"minutes":12.35,"words":3706},"y":"a","t":"操作系统","i":"os"},["/computer/2os","/computer/2os.md"]],
  ["v-0f6e5a7b","/computer/3io.html",{"d":1684935861000,"c":["计算机基础"],"g":["IO","八股"],"e":"<h3> 何为IO？</h3>\n<p>I/O（<strong>I</strong>nput/<strong>O</strong>utpu） 即<strong>输入／输出</strong> 。</p>\n<p>从应用程序的视角来看的话，我们的应用程序对操作系统的内核发起 IO 调用（系统调用），操作系统负责的内核执行具体的 IO 操作。也就是说，我们的应用程序实际上只是发起了 IO 操作的调用而已，具体 IO 的执行是由操作系统的内核来完成的。</p>\n<p>当应用程序发起 I/O 调用后，会经历两个步骤：</p>\n<ol>\n<li>内核等待 I/O 设备准备好数据</li>\n<li>内核将数据从内核空间拷贝到用户空间。</li>\n</ol>\n","r":{"minutes":2.82,"words":847},"y":"a","t":"I/O","i":"io"},["/computer/3io","/computer/3io.md"]],
  ["v-a94a8cca","/computer/",{"y":"p","t":"计算机基础","i":"computer","I":0},["/computer/index.html","/computer/README.md"]],
  ["v-2e25198a","/database/",{"y":"p","t":"数据库","i":"database","I":0},["/database/index.html","/database/README.md"]],
  ["v-14b0a7d7","/home/",{"y":"p","t":"欢迎","i":"daohang","I":0},["/home/index.html","/home/README.md"]],
  ["v-71b3ae87","/interview/",{"y":"p","t":"面经","i":"interview","I":0},["/interview/index.html","/interview/README.md"]],
  ["v-7d72c4ac","/framework/",{"y":"p","t":"框架","i":"framework","I":0},["/framework/index.html","/framework/README.md"]],
  ["v-14c69af4","/java/",{"y":"p","t":"Java","i":"java","I":0},["/java/index.html","/java/README.md"]],
  ["v-7273d1ac","/middleware/1nginx.html",{"d":1684043545000,"c":["中间件"],"g":["Nginx","八股"],"r":{"minutes":0.04,"words":12},"y":"a","t":"Nginx","i":"nginx"},["/middleware/1nginx","/middleware/1nginx.md"]],
  ["v-d8f9caa6","/middleware/2rabbitmq.html",{"d":1684043545000,"c":["中间件"],"g":["RabbitMq","八股"],"r":{"minutes":0.04,"words":12},"y":"a","t":"RabbitMq","i":"rabbitmq"},["/middleware/2rabbitmq","/middleware/2rabbitmq.md"]],
  ["v-4d194044","/middleware/",{"y":"p","t":"中间件","i":"middleware","I":0},["/middleware/index.html","/middleware/README.md"]],
  ["v-15054f24","/note/",{"y":"p","t":"笔记","i":"note","I":0},["/note/index.html","/note/README.md"]],
  ["v-7ce4aeb6","/photo/992023.4%E5%B9%B3%E6%BD%AD.html",{"d":1685274951000,"c":["摄影"],"g":["平潭","旅拍"],"e":"<h3> 2023.4平潭-世间浪漫海占一半</h3>\n<p><img src=\"/markdown/20230528193150.jpg\" alt=\"image.png\">\n今年四月又来看海了</p>\n","r":{"minutes":0.33,"words":98},"y":"a","t":"平潭四月","i":"picture"},["/photo/992023.4平潭.html","/photo/992023.4%E5%B9%B3%E6%BD%AD","/photo/992023.4平潭.md","/photo/992023.4%E5%B9%B3%E6%BD%AD.md"]],
  ["v-e2acc714","/photo/",{"y":"p","t":"拍拍","i":"photo","I":0},["/photo/index.html","/photo/README.md"]],
  ["v-7acb0465","/computer/1net/1net.html",{"d":1684415224000,"c":["计算机基础"],"g":["计算机网络","八股"],"e":"<h2> 常见的网络协议</h2>\n<h3> 应用层</h3>\n<ul>\n<li><strong>HTTP（Hypertext Transfer Protocol，超文本传输协议）</strong>：基于 TCP 协议，是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li>\n<li><strong>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</strong>：基于 TCP 协议，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li>\n<li><strong>POP3/IMAP（邮件接收协议）</strong>：基于 TCP 协议，两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li>\n<li><strong>FTP（File Transfer Protocol，文件传输协议）</strong> : 基于 TCP 协议，是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li>\n</ul>\n","r":{"minutes":12.54,"words":3761},"y":"a","t":"计算机网络一","i":"page"},["/computer/1net/1net","/computer/1net/1net.md"]],
  ["v-0f0f7366","/computer/1net/2net.html",{"d":1684848543000,"c":["计算机基础"],"g":["计算机网络","八股"],"e":"<h2> TCP 与 UDP</h2>\n<h3> TCP 与 UDP 的区别</h3>\n<ul>\n<li>\n<p><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</p>\n</li>\n<li>\n<p><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</p>\n</li>\n<li>\n<p><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了。</p>\n</li>\n</ul>\n","r":{"minutes":11.66,"words":3498},"y":"a","t":"计算机网络二","i":"page"},["/computer/1net/2net","/computer/1net/2net.md"]],
  ["v-b9583b32","/computer/1net/3net.html",{"d":1684853481000,"c":["计算机基础"],"g":["计算机网络","八股"],"e":"<h2> IP（网络层）</h2>\n<h3> IP协议的作用是什么？</h3>\n<p>IP（网际协议）是TCP/IP协议中最重要的协议之一，属于网络层的协议，主作用是定义数据包的格式，对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。</p>\n","r":{"minutes":4.14,"words":1243},"y":"a","t":"计算机网络三","i":"page"},["/computer/1net/3net","/computer/1net/3net.md"]],
  ["v-18d61928","/computer/1net/",{"y":"p","t":"计算机网络","i":"net","I":0},["/computer/1net/index.html","/computer/1net/README.md"]],
  ["v-6f176f1e","/database/1mysql/0database.html",{"d":1685010347000,"c":["数据库"],"g":["MySQL","八股"],"e":"<h2> 数据库的三大范式</h2>\n<h3> 1NF</h3>\n<p><strong>属性（对应于表中的字段）不能再被分割</strong>，也就是这个字段只能是一个值，不能再分为多个其他的字段了，<strong>1NF是所有关系型数据库的最基本要求</strong>，也就是说关系型数据库中创建的表一定满足第一范式。</p>\n","r":{"minutes":3.5,"words":1049},"y":"a","t":"数据库基础","i":"page"},["/database/1mysql/0database","/database/1mysql/0database.md"]],
  ["v-5d9788e5","/database/1mysql/1mysql.html",{"d":1684988999000,"c":["数据库"],"g":["MySQL","八股"],"e":"<h3> 什么是关系型数据库？</h3>\n<p>一种建立在关系模型基础上的数据库，关系模型表明了数据库中所存储的数据之间的联系（一对一，一对多，多对多）。</p>\n<h3> MySQL有什么优点？</h3>\n<ol>\n<li>成熟稳定，功能完善。</li>\n<li>开源免费。</li>\n<li>文档丰富。</li>\n<li>兼容性好。</li>\n<li>社区活跃，生态完善。</li>\n<li>事务支持优秀。</li>\n<li>支持分库分表、读写分离、高可用。</li>\n</ol>\n","r":{"minutes":16.41,"words":4924},"y":"a","t":"MySQL基础","i":"page"},["/database/1mysql/1mysql","/database/1mysql/1mysql.md"]],
  ["v-86a8eecc","/database/1mysql/2mysqlindex.html",{"d":1685010347000,"c":["数据库"],"g":["MySQL","八股"],"e":"<h2> 索引</h2>\n<p>索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</p>\n","r":{"minutes":13.45,"words":4034},"y":"a","t":"MySQL索引","i":"page"},["/database/1mysql/2mysqlindex","/database/1mysql/2mysqlindex.md"]],
  ["v-aba67072","/database/1mysql/3mysqllog.html",{"d":1685010347000,"c":["数据库"],"g":["MySQL","八股"],"e":"<h2> redo log 重做日志</h2>\n<p><code>redo log</code>是重做日志，是<code>InnoDB</code>引擎独有的，让<code>MySQL</code>拥有了崩溃恢复的能力。</p>\n<p><img src=\"/markdown/image-20230529154219243.png\" alt=\"image-20230529154219243\"></p>\n","r":{"minutes":8.65,"words":2595},"y":"a","t":"MySQL日志","i":"page"},["/database/1mysql/3mysqllog","/database/1mysql/3mysqllog.md"]],
  ["v-3754f902","/database/1mysql/4mysqlmvcc.html",{"d":1685010347000,"c":["数据库"],"g":["MySQL","八股"],"e":"<h2> 事务隔离级别</h2>\n<p>SQL定义了四个隔离级别：</p>\n<p><strong>READ-UNCOMMITTED(读取未提交)</strong>：最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。</p>\n<p><strong>READ-COMMITTED(读取已提交)</strong>：允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。</p>\n<p><strong>REPEATABLE-READ(可重复读)</strong>：对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。</p>\n<p><strong>SERIALIZABLE(可串行化)</strong>：最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。</p>\n","r":{"minutes":7.37,"words":2210},"y":"a","t":"事务隔离级别和MVCC","i":"page"},["/database/1mysql/4mysqlmvcc","/database/1mysql/4mysqlmvcc.md"]],
  ["v-c91da0ba","/database/1mysql/",{"y":"p","t":"Mysql","i":"mysql","I":0},["/database/1mysql/index.html","/database/1mysql/README.md"]],
  ["v-32a15a63","/database/2redis/0redis.html",{"d":1686133436000,"c":["数据库"],"g":["Redis","八股"],"e":"<h2> 基础</h2>\n<h3> 什么是 Redis？</h3>\n<p>Redis 是一个基于 C 语言开发的开源数据库（BSD 许可），与传统数据库不同的是 Redis 的数据是存在内存中的（内存数据库），读写速度非常快，被广泛应用于缓存方向。并且，Redis 存储的是 KV 键值对数据。</p>\n<p>为了满足不同的业务场景，Redis 内置了多种数据类型实现（比如 String、Hash、Sorted Set、Bitmap、HyperLogLog、GEO）。并且，Redis 还支持事务、持久化、Lua 脚本、多种开箱即用的集群方案（Redis Sentinel、Redis Cluster）。</p>","r":{"minutes":8.01,"words":2404},"y":"a","t":"Redis基础一","i":"page"},["/database/2redis/0redis","/database/2redis/0redis.md"]],
  ["v-41f5be07","/database/2redis/2lock.html",{"d":1686140114000,"c":["数据库"],"g":["Redis","八股"],"e":"<p>一个最基本的分布式锁需要满足：</p>\n<ul>\n<li><strong>互斥</strong>：任意一个时刻，锁只能被一个线程持有；</li>\n<li><strong>高可用</strong>：锁服务是高可用的。并且，即使客户端的释放锁的代码逻辑出现问题，锁最终一定还是会被释放，不会影响其他线程对共享资源的访问。</li>\n<li><strong>可重入</strong>：一个节点获取了锁之后，还可以再次获取锁。</li>\n</ul>\n","r":{"minutes":9.02,"words":2705},"y":"a","t":"分布式锁","i":"page"},["/database/2redis/2lock","/database/2redis/2lock.md"]],
  ["v-50823daa","/database/2redis/",{"y":"p","t":"Redis","i":"redis","I":0},["/database/2redis/index.html","/database/2redis/README.md"]],
  ["v-182fabca","/framework/1spring/",{"y":"p","t":"Spring","i":"spring","I":0},["/framework/1spring/index.html","/framework/1spring/README.md"]],
  ["v-e26068d4","/java/1java/1java.html",{"d":1684043545000,"c":["Java"],"g":["Java基础","八股"],"e":"<div class=\"hint-container tip\">\n<p class=\"hint-container-title\">一切就从这里开始吧</p>\n<p>笔记来源网络，仅做个人学习。</p>\n</div>\n<h2> JVM  JRE  JDK</h2>\n<p>JVM是java虚拟机，针对不同系统有不同的实现，常用的为HotSpot VM。</p>\n<p>JDK是功能齐全的SDK，包含JRE和一些其他的工具，例如javac，java等。</p>\n<p>JRE是Java运行时环境，仅包含Java应用程序运行时的必要环境。</p>\n","r":{"minutes":5.32,"words":1597},"y":"a","t":"Java基础一","i":"page"},["/java/1java/1java","/java/1java/1java.md"]],
  ["v-f9cd8696","/java/1java/2java.html",{"d":1684077684000,"c":["Java"],"g":["Java基础","八股"],"e":"<h2> 面向对象</h2>\n<h3> 面向对象和面向过程的区别</h3>\n<ul>\n<li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li>\n<li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li>\n</ul>\n<p>一个注重过程，一个注重内部属性。</p>\n","r":{"minutes":9.36,"words":2807},"y":"a","t":"Java基础二","i":"page"},["/java/1java/2java","/java/1java/2java.md"]],
  ["v-49079e4a","/java/1java/3reflex.html",{"d":1684147588000,"c":["Java"],"g":["Java反射","八股"],"e":"<p>反射可以获取任意一个类的所有属性和方法，还能调用这些方法和属性。</p>\n","r":{"minutes":1.28,"words":383},"y":"a","t":"Java反射","i":"page"},["/java/1java/3reflex","/java/1java/3reflex.md"]],
  ["v-63b48971","/java/1java/4javaProxy.html",{"d":1684147588000,"c":["Java"],"g":["代理模式","八股"],"e":"<p>使用代理对象来代替真实对象的访问，这样能在不改变目标对象的前提下，提供额外的功能，扩展目标对象。</p>\n<p>代理模式有静态代理和动态代理两种实现方式。</p>\n","r":{"minutes":4.39,"words":1318},"y":"a","t":"代理模式","i":"page"},["/java/1java/4javaProxy","/java/1java/4javaProxy.md"]],
  ["v-a94b071a","/java/1java/5singleton.html",{"d":1684159018000,"c":["Java"],"g":["单例模式","八股"],"e":"<p>保证在整个系统中，对某一个类只会存在一个对象实例，并且类只提供一个取得对象实例的方法。</p>\n","r":{"minutes":1.76,"words":528},"y":"a","t":"单例模式","i":"page"},["/java/1java/5singleton","/java/1java/5singleton.md"]],
  ["v-2cfca4b0","/java/1java/",{"y":"p","t":"Java基础","i":"javabasic","I":0},["/java/1java/index.html","/java/1java/README.md"]],
  ["v-32f3b57d","/java/2collection/1collection.html",{"d":1684217915000,"c":["Java"],"g":["Java集合","八股"],"e":"<h2> 集合</h2>\n<p>Java集合由两大接口派生而来，分别是用来存放单一元素的<code>Collection</code>和用来存放键值对的<code>Map</code>接口。对于<code>Collection</code>接口有三个子接口，分别是<code>List</code>、<code>Set</code>、<code>Queue</code>。</p>\n","r":{"minutes":5.24,"words":1571},"y":"a","t":"Java集合一","i":"page"},["/java/2collection/1collection","/java/2collection/1collection.md"]],
  ["v-1485935c","/java/2collection/2collection.html",{"d":1684222203000,"c":["Java"],"g":["Java集合","八股"],"e":"<h2> Map</h2>\n<h3> HashMap 和 Hashtable 的区别</h3>\n<ul>\n<li><strong>线程是否安全</strong>：<code>HashMap</code>是非线程安全的，<code>Hashtable</code>是线程安全的，内部方法使用<code>synchronized</code>修饰。</li>\n<li><strong>效率</strong>：因为锁的问题，<code>HashMap</code>的效率要稍微好点。</li>\n<li><strong>是否能存储Null Key和Value</strong>：<code>HashMap</code>能存储<code>null</code>的key和value，但是作为<code>null</code>的key只能有一个，<code>Hashtable</code>不能有<code>null</code>key和value。</li>\n<li><strong>扩容</strong>：<code>Hashtable</code>默认初始大小是11，扩容之后变为2n+1。<code>HashMap</code>默认大小是16，当元素个数超过负载因子*表长时扩容，每次扩容变为原来的两倍。</li>\n<li><strong>底层</strong>：JDK1.8之后<code>HashMap</code>底层使用数组+链表/红黑树，特定条件链表转化为红黑树，<code>Hashtable</code>则没有转化为红黑树的机制。</li>\n</ul>\n","r":{"minutes":4.05,"words":1215},"y":"a","t":"Java集合二","i":"page"},["/java/2collection/2collection","/java/2collection/2collection.md"]],
  ["v-31c43ed3","/java/2collection/",{"y":"p","t":"集合","i":"jihe","I":0},["/java/2collection/index.html","/java/2collection/README.md"]],
  ["v-53d0b748","/java/3juc/1juc.html",{"d":1684232734000,"c":["Java"],"g":["并发编程","八股"],"e":"<h2> 进程和线程</h2>\n<h3> 进程</h3>\n<p>进程是程序的一次执行过程，启动main函数就相当于启动了一个JVM进程，而main函数所在的线程称为主线程。</p>\n<h3> 线程</h3>\n<p>引入线程之后，调度的最小单位从进程变成了线程，一个进程能在运行的时候产生多个线程，每一个线程共享进程的<strong>堆</strong>和<strong>方法区</strong>（线程共有），每一个线程有自己的程序计数器，虚拟机栈，本地方法栈，所以线程之间的切换开销远远小于进程，线程又称为轻量级进程。</p>\n","r":{"minutes":4.36,"words":1308},"y":"a","t":"并发编程一","i":"page"},["/java/3juc/1juc","/java/3juc/1juc.md"]],
  ["v-6a5c135d","/java/3juc/2juc.html",{"d":1684306897000,"c":["Java"],"g":["并发编程","八股"],"e":"<h2> Java内存模型</h2>\n<h3> 指令重排序</h3>\n<ul>\n<li>编译器优化重排：编译器在不改变单线程程序语义的前提下，重新安排语句执行顺序。</li>\n<li>指令并行重排：如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li>\n</ul>\n<p>指令重排序可以保证串行语义的一致，但是没义务保证多线程之间语义的一致，在多线程下，指令重排可能会导致问题。</p>\n","r":{"minutes":11.1,"words":3331},"y":"a","t":"并发编程二","i":"page"},["/java/3juc/2juc","/java/3juc/2juc.md"]],
  ["v-02befb44","/java/3juc/3juc.html",{"d":1684315795000,"c":["Java"],"g":["并发编程","八股"],"e":"<h2> ThreadLocal</h2>\n<h3> ThreadLocal 有什么用？</h3>\n<p><code>ThreadLocal</code>类主要解决的就是让每个线程绑定自己的值，可以将<code>ThreadLocal</code>类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。</p>\n<p>如果创建了一个<code>ThreadLocal</code>变量，那么访问这个变量的每一个线程都有这个变量的副本。可以使用 <code>get()</code> 和 <code>set()</code> 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。</p>\n","r":{"minutes":9.51,"words":2852},"y":"a","t":"并发编程三","i":"page"},["/java/3juc/3juc","/java/3juc/3juc.md"]],
  ["v-d0bf4a88","/java/3juc/4synchronizedlock.html",{"d":1684317269000,"c":["Java"],"g":["synchronized锁优化","八股"],"e":"<p>锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。</p>\n","r":{"minutes":3.44,"words":1031},"y":"a","t":"synchronized锁优化","i":"page"},["/java/3juc/4synchronizedlock","/java/3juc/4synchronizedlock.md"]],
  ["v-70192d16","/java/3juc/5aqs.html",{"d":1684317269000,"c":["Java"],"g":["AQS抽象队列同步器","八股"],"e":"<p>AQS 的全称为 <code>AbstractQueuedSynchronizer</code> ，翻译过来的意思就是抽象队列同步器。这个类在 <code>java.util.concurrent.locks</code> 包下面。</p>\n","r":{"minutes":5.16,"words":1549},"y":"a","t":"AQS抽象队列同步器","i":"page"},["/java/3juc/5aqs","/java/3juc/5aqs.md"]],
  ["v-169e4648","/java/3juc/6juccollections.html",{"d":1684414851000,"c":["Java"],"g":["JUC常见并发容器","八股"],"e":"<p>JDK 提供的这些容器大部分在 <code>java.util.concurrent</code> 包中。</p>\n<ul>\n<li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code></li>\n<li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li>\n<li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li>\n<li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>\n<li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>\n</ul>\n","r":{"minutes":4,"words":1199},"y":"a","t":"JUC常见并发容器","i":"page"},["/java/3juc/6juccollections","/java/3juc/6juccollections.md"]],
  ["v-64a8bef6","/java/3juc/",{"y":"p","t":"并发编程","i":"juc","I":0},["/java/3juc/index.html","/java/3juc/README.md"]],
  ["v-616d4a15","/java/4jvm/1memory.html",{"d":1684479049000,"c":["Java"],"g":["JVM内存结构","八股"],"e":"<h2> 运行时数据区域</h2>\n<h4> <strong>线程私有的：</strong></h4>\n<ul>\n<li>\n<h5> 程序计数器</h5>\n<ul>\n<li>一块很小的内存区域，保存了将要执行指令的地址。为了线程切换之后能恢复到正确的执行位置，每一个线程都需要一个程序计数器，各线程之间计数器互不影响，称为“线程私有”的内存。</li>\n<li>程序计数器是唯一一个不会出现OOM的内存区域，随着线程的创建而创建，线程的消亡而消亡。</li>\n</ul>\n</li>\n</ul>\n","r":{"minutes":7.62,"words":2285},"y":"a","t":"JVM内存结构","i":"page"},["/java/4jvm/1memory","/java/4jvm/1memory.md"]],
  ["v-654da30e","/java/4jvm/2gc.html",{"d":1684483146000,"c":["Java"],"g":["JVM垃圾回收","八股"],"e":"<p><img src=\"/markdown/130.jpg\" alt=\"130\"></p>\n","r":{"minutes":18.24,"words":5471},"y":"a","t":"JVM垃圾回收","i":"page"},["/java/4jvm/2gc","/java/4jvm/2gc.md"]],
  ["v-f43459d6","/java/4jvm/3classfilestructure.html",{"d":1684667376000,"c":["Java"],"g":["类文件结构","八股"],"e":"<h2> 字节码</h2>\n<p>在 Java 中，JVM 可以理解的代码就叫做<code>字节码</code>（即扩展名为 <code>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>\n","r":{"minutes":4.56,"words":1369},"y":"a","t":"类文件结构","i":"page"},["/java/4jvm/3classfilestructure","/java/4jvm/3classfilestructure.md"]],
  ["v-5d9b8262","/java/4jvm/4classloadprocess.html",{"d":1684667376000,"c":["Java"],"g":["类加载过程","八股"],"e":"<h2> 类的生命周期</h2>\n<p>类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。</p>\n<p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。</p>\n<p>其中连接过程分为：<strong>验证-&gt;准备-&gt;解析</strong>。</p>\n<p>整体流程为：<strong>加载-&gt;验证-&gt;准备-&gt;解析-&gt;初始化</strong>。</p>\n","r":{"minutes":6.2,"words":1859},"y":"a","t":"类加载过程","i":"page"},["/java/4jvm/4classloadprocess","/java/4jvm/4classloadprocess.md"]],
  ["v-494f04b5","/java/4jvm/5classloader.html",{"d":1684748069000,"c":["Java"],"g":["类加载器","八股"],"e":"<h2> 类加载器</h2>\n<ul>\n<li>类加载器是一个负责加载类的对象，用于实现类加载过程中的第一步。</li>\n<li>每一个Java类都有一个引用指向加载它的<code>ClassLoader</code>。</li>\n<li>数组类不是通过<code>ClassLoader</code>创建的，是由JVM自动产生的</li>\n</ul>\n<p>类加载器的作用就是加载Java类的字节码（<code>.class</code>文件）到JVM中，字节码可以使源程序（<code>.java</code>文件）经过编译而来，也可以是通过工具动态生成或者是从网络上下载而来。</p>\n","r":{"minutes":6.75,"words":2024},"y":"a","t":"类加载器","i":"page"},["/java/4jvm/5classloader","/java/4jvm/5classloader.md"]],
  ["v-6cd0e214","/java/4jvm/6jvmparameters.html",{"d":1684762909000,"c":["Java"],"g":["JVM重要参数","八股"],"e":"<h2> 堆内存相关</h2>\n<h3> 指定堆内存<code>-Xms</code>和<code>-Xmx</code></h3>\n<div class=\"language-java line-numbers-mode\" data-ext=\"java\"><pre class=\"language-java\"><code><span class=\"token operator\">-</span><span class=\"token class-name\">Xms</span><span class=\"token generics\"><span class=\"token punctuation\">&lt;</span>heap size<span class=\"token punctuation\">&gt;</span></span><span class=\"token punctuation\">[</span>unit<span class=\"token punctuation\">]</span>\n<span class=\"token operator\">-</span><span class=\"token class-name\">Xmx</span><span class=\"token generics\"><span class=\"token punctuation\">&lt;</span>heap size<span class=\"token punctuation\">&gt;</span></span><span class=\"token punctuation\">[</span>unit<span class=\"token punctuation\">]</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div><p>为JVM堆内存分配最大5GB，最小2GB内存：</p>\n<div class=\"language-text line-numbers-mode\" data-ext=\"text\"><pre class=\"language-text\"><code>-Xms2G -Xmx5G\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div></div></div>","r":{"minutes":4.39,"words":1316},"y":"a","t":"JVM重要参数","i":"page"},["/java/4jvm/6jvmparameters","/java/4jvm/6jvmparameters.md"]],
  ["v-3c93d317","/java/4jvm/7gcoptimize.html",{"d":1684848543000,"c":["Java"],"g":["GC调优","八股"],"e":"<h3> 确定目标</h3>\n<p>需要低延时使用：</p>\n<ul>\n<li>CMS</li>\n<li>G1</li>\n<li>ZGC</li>\n</ul>\n<p>需要吞吐量使用：</p>\n<ul>\n<li>ParallelGC</li>\n</ul>\n","r":{"minutes":2.67,"words":800},"y":"a","t":"GC调优","i":"page"},["/java/4jvm/7gcoptimize","/java/4jvm/7gcoptimize.md"]],
  ["v-64b6db6e","/java/4jvm/",{"y":"p","t":"JVM","i":"jvm","I":0},["/java/4jvm/index.html","/java/4jvm/README.md"]],
  ["v-3706649a","/404.html",{"y":"p","t":""},["/404"]],
  ["v-5bc93818","/category/",{"y":"p","t":"分类","I":0},["/category/index.html"]],
  ["v-744d024e","/tag/",{"y":"p","t":"标签","I":0},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"y":"p","t":"文章","I":0},["/article/index.html"]],
  ["v-154dc4c4","/star/",{"y":"p","t":"收藏","I":0},["/star/index.html"]],
  ["v-01560935","/timeline/",{"y":"p","t":"时间轴","I":0},["/timeline/index.html"]],
  ["v-79574331","/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/",{"y":"p","t":"计算机基础 分类","I":0},["/category/计算机基础/","/category/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-10a04a2f","/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/",{"y":"p","t":"操作系统 标签","I":0},["/tag/操作系统/","/tag/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F/index.html"]],
  ["v-9d681cea","/category/%E4%B8%AD%E9%97%B4%E4%BB%B6/",{"y":"p","t":"中间件 分类","I":0},["/category/中间件/","/category/%E4%B8%AD%E9%97%B4%E4%BB%B6/index.html"]],
  ["v-beb4d5e8","/tag/%E5%85%AB%E8%82%A1/",{"y":"p","t":"八股 标签","I":0},["/tag/八股/","/tag/%E5%85%AB%E8%82%A1/index.html"]],
  ["v-0a768c4f","/category/%E6%91%84%E5%BD%B1/",{"y":"p","t":"摄影 分类","I":0},["/category/摄影/","/category/%E6%91%84%E5%BD%B1/index.html"]],
  ["v-0da0cabb","/tag/io/",{"y":"p","t":"IO 标签","I":0},["/tag/io/index.html"]],
  ["v-5e0b61bd","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{"y":"p","t":"数据库 分类","I":0},["/category/数据库/","/category/%E6%95%B0%E6%8D%AE%E5%BA%93/index.html"]],
  ["v-1a8900ba","/tag/nginx/",{"y":"p","t":"Nginx 标签","I":0},["/tag/nginx/index.html"]],
  ["v-5831b135","/category/java/",{"y":"p","t":"Java 分类","I":0},["/category/java/index.html"]],
  ["v-63bcc623","/tag/rabbitmq/",{"y":"p","t":"RabbitMq 标签","I":0},["/tag/rabbitmq/index.html"]],
  ["v-3b45d3f9","/tag/%E5%B9%B3%E6%BD%AD/",{"y":"p","t":"平潭 标签","I":0},["/tag/平潭/","/tag/%E5%B9%B3%E6%BD%AD/index.html"]],
  ["v-6b298b3e","/tag/%E6%97%85%E6%8B%8D/",{"y":"p","t":"旅拍 标签","I":0},["/tag/旅拍/","/tag/%E6%97%85%E6%8B%8D/index.html"]],
  ["v-7812146a","/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/",{"y":"p","t":"计算机网络 标签","I":0},["/tag/计算机网络/","/tag/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/index.html"]],
  ["v-1bee38ca","/tag/mysql/",{"y":"p","t":"MySQL 标签","I":0},["/tag/mysql/index.html"]],
  ["v-0d1f4c3c","/tag/redis/",{"y":"p","t":"Redis 标签","I":0},["/tag/redis/index.html"]],
  ["v-68cf5b32","/tag/java%E5%9F%BA%E7%A1%80/",{"y":"p","t":"Java基础 标签","I":0},["/tag/java基础/","/tag/java%E5%9F%BA%E7%A1%80/index.html"]],
  ["v-155ef28f","/tag/java%E5%8F%8D%E5%B0%84/",{"y":"p","t":"Java反射 标签","I":0},["/tag/java反射/","/tag/java%E5%8F%8D%E5%B0%84/index.html"]],
  ["v-f7b9fed4","/tag/%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/",{"y":"p","t":"代理模式 标签","I":0},["/tag/代理模式/","/tag/%E4%BB%A3%E7%90%86%E6%A8%A1%E5%BC%8F/index.html"]],
  ["v-2652ff58","/tag/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F/",{"y":"p","t":"单例模式 标签","I":0},["/tag/单例模式/","/tag/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F/index.html"]],
  ["v-12e56aa2","/tag/java%E9%9B%86%E5%90%88/",{"y":"p","t":"Java集合 标签","I":0},["/tag/java集合/","/tag/java%E9%9B%86%E5%90%88/index.html"]],
  ["v-5c4e59bd","/tag/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/",{"y":"p","t":"并发编程 标签","I":0},["/tag/并发编程/","/tag/%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B/index.html"]],
  ["v-33f11876","/tag/synchronized%E9%94%81%E4%BC%98%E5%8C%96/",{"y":"p","t":"synchronized锁优化 标签","I":0},["/tag/synchronized锁优化/","/tag/synchronized%E9%94%81%E4%BC%98%E5%8C%96/index.html"]],
  ["v-85a23e68","/tag/aqs%E6%8A%BD%E8%B1%A1%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8/",{"y":"p","t":"AQS抽象队列同步器 标签","I":0},["/tag/aqs抽象队列同步器/","/tag/aqs%E6%8A%BD%E8%B1%A1%E9%98%9F%E5%88%97%E5%90%8C%E6%AD%A5%E5%99%A8/index.html"]],
  ["v-c99639e4","/tag/juc%E5%B8%B8%E8%A7%81%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8/",{"y":"p","t":"JUC常见并发容器 标签","I":0},["/tag/juc常见并发容器/","/tag/juc%E5%B8%B8%E8%A7%81%E5%B9%B6%E5%8F%91%E5%AE%B9%E5%99%A8/index.html"]],
  ["v-62393f4a","/tag/jvm%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84/",{"y":"p","t":"JVM内存结构 标签","I":0},["/tag/jvm内存结构/","/tag/jvm%E5%86%85%E5%AD%98%E7%BB%93%E6%9E%84/index.html"]],
  ["v-3fba13fb","/tag/jvm%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/",{"y":"p","t":"JVM垃圾回收 标签","I":0},["/tag/jvm垃圾回收/","/tag/jvm%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6/index.html"]],
  ["v-f8f8da60","/tag/%E7%B1%BB%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84/",{"y":"p","t":"类文件结构 标签","I":0},["/tag/类文件结构/","/tag/%E7%B1%BB%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84/index.html"]],
  ["v-3d3dc301","/tag/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B/",{"y":"p","t":"类加载过程 标签","I":0},["/tag/类加载过程/","/tag/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E8%BF%87%E7%A8%8B/index.html"]],
  ["v-bd5080cc","/tag/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8/",{"y":"p","t":"类加载器 标签","I":0},["/tag/类加载器/","/tag/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E5%99%A8/index.html"]],
  ["v-4c64403f","/tag/jvm%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0/",{"y":"p","t":"JVM重要参数 标签","I":0},["/tag/jvm重要参数/","/tag/jvm%E9%87%8D%E8%A6%81%E5%8F%82%E6%95%B0/index.html"]],
  ["v-c561ebd0","/tag/gc%E8%B0%83%E4%BC%98/",{"y":"p","t":"GC调优 标签","I":0},["/tag/gc调优/","/tag/gc%E8%B0%83%E4%BC%98/index.html"]],
]
