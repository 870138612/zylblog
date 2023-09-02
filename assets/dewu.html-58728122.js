import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as e,f as a}from"./app-1699d902.js";const r={},o=a('<p>⁉️ 个人回答不保证正确</p><h2 id="一面" tabindex="-1"><a class="header-anchor" href="#一面" aria-hidden="true">#</a> 一面</h2><h3 id="说一说-cms-和-g1-垃圾收集器" tabindex="-1"><a class="header-anchor" href="#说一说-cms-和-g1-垃圾收集器" aria-hidden="true">#</a> 说一说 CMS 和 G1 垃圾收集器</h3><ul><li>CMS 是标记清除算法的垃圾回收器，运行流程分为初始标记、并发标记、重新标记、并发清除，其中初始标记和重新标记会产生 STW，对在并发标记阶段修改的引用采用增量更新方法，G1 将堆内存分为多个 Region 区域，可以作为年轻代或者老年代，运行流程分为初始标记、并发标记、最终标记、筛选回收，其中除了并发标记阶段都会产生 STW，对并发标记阶段产生的引用链修改采用原始快照的方法。</li></ul><h3 id="reentrantlock-中的公平锁和非公平锁是怎么实现的" tabindex="-1"><a class="header-anchor" href="#reentrantlock-中的公平锁和非公平锁是怎么实现的" aria-hidden="true">#</a> ReentrantLock 中的公平锁和非公平锁是怎么实现的？</h3><ul><li>ReentrantLock 基于 AQS 实现，其中有公平锁实现和非公平锁实现，对对象的加锁过程就是修改对象的 state 过程，采用 CAS 进行修改，修改失败表示有竞争，则会创建为一个 CLH 节点放入到 CLH队列的尾部，CLH 队列是一个虚拟的双向队列，其中存储了线程关系，存放在这个队列中的节点都是为竞争锁失败的节点。</li><li>公平锁实现：如果锁被释放，则会唤醒 CLH 队列中头节点的后一个节点，来竞争加锁，此时如果有一个新的线程也想进行加锁，则会检查 CLH 队列中头节点之后是否有节点，有节点则表示之前已经有线程等待了，则将自己放入 CLH 队列尾部。</li><li>非公平锁实现：在有新线程想加锁时，不管 CLH 队列中头节点之后是否有节点在等待，直接使用 CAS 尝试加锁。</li></ul><h3 id="redo-log-和-undo-log-的作用" tabindex="-1"><a class="header-anchor" href="#redo-log-和-undo-log-的作用" aria-hidden="true">#</a> redo log 和 undo log 的作用？</h3><ul><li>redo log 用来记录数据库的修改，主要用来做崩溃恢复的，undo log 配合隐藏字段、Read View 实现 MVCC。</li><li><strong>redo log 文件是啥样的？</strong>（没太懂啥意思）</li><li>redo log 在磁盘中以日志文件组的形式出现，可以看成一个循环队列，包含 checkpoint 和 write pos，如果 write pos 追上 checkpoint ，表示日志文件组满了，这时候不能再写入新的 redo log 记录。</li><li><strong>redo log 是顺序写吗？</strong></li><li>是顺序写，如果对每次修改之后将一个页写回，可能只修改了很少的数据，没有必要这样做，并且页还不是顺序写效率较差，如果是 redo log 写，又是顺序写，整体效率较高。</li></ul><h3 id="两阶段提交了解吗" tabindex="-1"><a class="header-anchor" href="#两阶段提交了解吗" aria-hidden="true">#</a> 两阶段提交了解吗？</h3><ul><li>两阶段提交指的是 redo log 的提交分为两个阶段，分别是 prepare 和 commit，在 prepare 之后 binlog 写入，然后再 commit。</li><li>如果在 prepare 之后，出现问题，导致 binlog 写入失败，则发现没有对应的 binlog，事务将会回滚，如果是在写 binlog 之后发生错误，即使 redo log 没有 commit，但是有 binlog 则表明事务提交成功了，事务不会回滚。</li></ul><h3 id="spring-事务说说" tabindex="-1"><a class="header-anchor" href="#spring-事务说说" aria-hidden="true">#</a> Spring 事务说说</h3><ul><li>Spring 中事务通过 @Transactional 注解对方法提供事务支持，原理是创建一个动态代理对象，由动态代理对象执行这个方法，并对前后进行增强，也就是在执行数据库操作前将事务的提交模式改为手动，再进行数据库操作，发生异常则进行回滚。</li><li></li></ul><h3 id="什么情况下会产生事务失效" tabindex="-1"><a class="header-anchor" href="#什么情况下会产生事务失效" aria-hidden="true">#</a> 什么情况下会产生事务失效？</h3><ul><li>方法没有被 public 修饰，因为 CGLIB 动态代理是生成一个子类进行调用，如果父类方法不是 public 则调用不了。</li><li>this 调用，需要使用动态代理对象调用方法才能让事务失效，this 调用是普通对象的调用。</li><li>异常没有正确抛出，如果内部将异常捕获了，外部 Spring 感知不到则会导致事务失效。</li><li>事务的传播机制设置错误，例如设置为 NEVER 则表示不使用事务。</li><li>数据库本身不支持事务。</li></ul><h3 id="什么情况下使用编程式事务什么情况下使用注解式事务" tabindex="-1"><a class="header-anchor" href="#什么情况下使用编程式事务什么情况下使用注解式事务" aria-hidden="true">#</a> 什么情况下使用编程式事务什么情况下使用注解式事务？</h3><ul><li>（不太明白，我直接说没有用过编程式事务）</li><li>编程式事务能在任何的代码片段中添加事物，而注解式事务的要求条件比较多，灵活性不如编程式事务。</li></ul><h3 id="ssl-tsl-了解吗" tabindex="-1"><a class="header-anchor" href="#ssl-tsl-了解吗" aria-hidden="true">#</a> SSL/TSL 了解吗？</h3><ul><li>（不了解）不太了解，只知道 HTTPS 是基于 SSL/TSL 实现的，这两个都是建立在 TCP 链接基础上的协议。</li><li>HTTPS 为了防止中间人篡改信息，引入了证书机制，证书就是身份信息 + 公钥，将公钥发送给客户端，客户端通过上层证书提供商检查证书合法性，通过之后则会产生一个秘钥，秘钥通过公钥进行加密，到了服务器端通过私钥进行解密。服务器得到秘钥，之后的数据传输用这个秘钥进行对称加密。</li><li>总结就是发送的数据通过对称加密，加密使用的秘钥通过非对称加密。</li></ul><h3 id="国内输入谷歌网站但是访问不到-发生了什么" tabindex="-1"><a class="header-anchor" href="#国内输入谷歌网站但是访问不到-发生了什么" aria-hidden="true">#</a> 国内输入谷歌网站但是访问不到，发生了什么？</h3><ul><li>正常访问网页首先是通过域名 DNS 解析得到 IP 地址，查询方式有迭代查询和递归查询。之后与服务器建立 TCP 连接，然后发送请求到服务器，服务器返回数据，浏览器渲染。</li><li><strong>访问不到 Google 的原因是在哪个环节？</strong></li><li>我先说是 DNS，后来想了下回答是 TCP 连接环节。</li><li><strong>防火墙在哪一个环节生效？</strong></li><li>TCP 连接环节，因为 TCP 是端到端的协议，需要提供端口，配置防火墙的时候需要添加入站和出站的端口。</li></ul><h3 id="反问" tabindex="-1"><a class="header-anchor" href="#反问" aria-hidden="true">#</a> 反问</h3>',21),n=[o];function d(h,t){return l(),e("div",null,n)}const u=i(r,[["render",d],["__file","dewu.html.vue"]]);export{u as default};
