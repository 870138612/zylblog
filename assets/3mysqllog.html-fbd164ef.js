import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as n,c as i,e as a,b as o,d as e,a as l,f as d}from"./app-88446bd7.js";const t="/markdown/image-20230529154219243.png",g="/markdown/image-20230529162226606.png",s="/markdown/image-20230529162523262.png",m="/markdown/image-20230529162900611.png",h="/markdown/image-redologfile.png",_="/markdown/image-20230529165800826.png",b="/markdown/image-20230529170202703.png",u="/markdown/image-20230529170702610.png",f="/markdown/image-20230529172120404.png",w="/markdown/image-20230529173603129.png",k="/markdown/image-20230529173719124.png",y="/markdown/image-20230529173846546.png",B="/markdown/image-20230529173959416.png",L="/markdown/image-20230529174101634.png",S={},x=o("h2",{id:"redo-log-重做日志",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#redo-log-重做日志","aria-hidden":"true"},"#"),e(" redo log 重做日志")],-1),Q=o("p",null,[o("code",null,"redo log"),e(" 是重做日志，是 InnoDB 引擎独有的，让 "),o("code",null,"MySQL"),e(" 拥有了崩溃恢复的能力。")],-1),M=o("p",null,[o("img",{src:t,alt:"image-20230529154219243"})],-1),I=d('<p><code>MySQL</code> 中以页为单位，查询记录的时候会从硬盘中将一页的数据加载，放入 <code>Buffer Pool</code> 中。</p><p>后续的查找都是从 <code>Buffer Pool</code> 中查找。</p><p>更新表数据的时候，发现 <code>Buffer Pool</code> 里存在要更新的数据，就直接在 <code>Buffer Pool</code> 中更新。</p><p>然后会把在<strong>某个数据页上做了什么修改</strong>记录到重做日志缓存（<code>redo log buffer</code>）里，刷盘到 <code>redo log</code> 文件里。</p><p><img src="'+g+'" alt="image-20230529162226606"></p><p>理想情况下，事务一提交就会进行刷盘操作，实际上刷盘的实际是根据策略来进行的。</p><h3 id="刷盘时机" tabindex="-1"><a class="header-anchor" href="#刷盘时机" aria-hidden="true">#</a> 刷盘时机</h3><p>InnoDB 存储引擎为 <code>redo log</code> 的刷盘策略提供了 <code>innodb_flush_log_at_trx_commit</code> 参数，它支持三种策略：</p><ul><li><p><code>0</code>：设置为 <code>0</code> 的时候，表示每次事务提交时不进行刷盘操作。</p></li><li><p><code>1</code>：设置为 <code>1</code> 的时候，表示每次事务提交时都将进行刷盘操作（默认值）。</p></li><li><p><code>2</code>：设置为 <code>2</code> 的时候，表示每次事务提交时都只把 <code>redo log buffer</code> 内容写入 <code>page cache</code>。</p><p><code>innodb_flush_log_at_trx_commit</code> 参数默认为 <code>1</code> ，也就是说当事务提交时会调用 <code>fsync</code> 对 <code>redo log</code> 进行刷盘。</p></li></ul><p>另外，InnoDB 存储引擎有一个后台线程，每隔 <code>1</code> 秒，就会把 <code>redo log buffer</code> 中的内容写到文件系统缓存（<code>page cache</code>），然后调用 <code>fsync</code> 刷盘。</p><p><img src="'+s+'" alt="image-20230529162523262"></p><p>也就是说，一个没有提交事务的 <code>redo log</code> 记录，也可能会刷盘。</p><blockquote><p>数据修改 -&gt; redo log buffer -&gt; redo.file</p></blockquote><h3 id="日志文件组" tabindex="-1"><a class="header-anchor" href="#日志文件组" aria-hidden="true">#</a> 日志文件组</h3><p>硬盘上存储的 <code>redo log</code> 日志文件不只一个，而是以一个日志文件组的形式出现的，每个的 <code>redo</code> 日志文件大小都是一样的。</p><p>比如可以配置为一组 <code>4</code> 个文件，每个文件的大小是 <code>1GB</code>，整个 <code>redo log</code> 日志文件组可以记录 <code>4G</code> 的内容。</p><p>它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。</p><p><img src="'+m+'" alt="image-20230529162900611"></p><p>在个日志文件组中还有两个重要的属性，分别是 <code>write pos、checkpoint</code>。</p><ul><li><code>write pos</code> 是当前记录的位置，一边写一边后移。</li><li><code>checkpoint</code> 是当前要擦除的位置，也是往后推移。</li></ul><p>每次刷盘 <code>redo log</code> 记录到日志文件组中，<code>write pos</code> 位置就会后移更新。</p><p>每次 <code>MySQL</code> 加载日志文件组恢复数据时，会清空加载过的 <code>redo log</code> 记录，并把 <code>checkpoint</code> 后移更新。</p><p><code>write pos</code> 和 <code>checkpoint</code> 之间的还空着的部分可以用来写入新的 <code>redo log</code> 记录。</p><p>如果 <code>write pos</code> 追上 <code>checkpoint</code> ，表示日志文件组满了，这时候不能再写入新的 <code>redo log</code> 记录，<code>MySQL</code> 得停下来，清空一些记录，把 <code>checkpoint</code> 推进一下。（循环链表）</p><p><img src="'+h+'" alt="redo log"></p><h3 id="redo-log-小结" tabindex="-1"><a class="header-anchor" href="#redo-log-小结" aria-hidden="true">#</a> redo log 小结</h3><p><code>redo log</code> 刷盘和从 <code>Buffer Pool</code> 刷盘的区别。</p><p>数据页的大小是 <code>16KB</code>，刷盘比较耗时，可能就修改了几 <code>Byte</code> 数据，没有必要将整个页面刷盘。</p><p>而且数据页刷盘是随机写，因为一个数据也对应的位置可能在磁盘文件的随机位置，性能很差。</p><p>如果是写 <code>redo log</code>，一行记录就占用很少的空间，而且是顺序写，刷盘速度很快。</p><p>所以用 <code>redo log</code> 形式记录修改内容，性能会远远超过刷数据页面的方式，这也让数据库的并发能力增强。</p><blockquote><p>每次变更都需要先修改 <code>Buffer Pool</code>，然后 master 线程（同步、阻塞）以一定频率刷入磁盘。</p></blockquote><h2 id="binlog-归档日志" tabindex="-1"><a class="header-anchor" href="#binlog-归档日志" aria-hidden="true">#</a> binlog 归档日志</h2><p><code>redo log</code> 是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 InnoDB 存储引擎。</p><p>而 <code>binlog</code> 是逻辑日志，记录内容是语句的原始逻辑，属于 <code>MySQL Server</code> 层。</p><p>不管用什么存储引擎，只要发生了表数据更新，都会产生 <code>binlog</code> 日志。</p><p>数据库的数据备份、主备、主主、主从都离不开 <code>binlog</code>，需要依靠 <code>binlog</code> 来同步数据，保证数据的一致性。</p><p><img src="'+_+'" alt="image-20230529165800826"></p><p><code>binlog</code> 会记录所有涉及更新数据的逻辑操作，并且是顺序写。</p><h3 id="记录格式" tabindex="-1"><a class="header-anchor" href="#记录格式" aria-hidden="true">#</a> 记录格式</h3><p><code>binlog</code> 日志有三种格式，可以通过 <code>binlog_format</code> 参数指定。</p><ul><li><code>statement</code></li><li><code>row</code></li><li><code>mixed</code></li></ul><p>指定 <code>statement</code>，记录的内容是 <code>SQL</code> 语句原文，比如执行一条 <code>update T set update_time = now() where id = 1</code>，记录的内容如下。</p><p><img src="'+b+'" alt="image-20230529170202703"></p><p>同步数据时，会执行记录的 <code>SQL</code> 语句，但是有个问题，<code>update_time = now()</code> 这里会获取当前系统时间，直接执行会导致与原库的数据不一致。</p><p>为了解决这种问题，需要指定为 <code>row</code>，记录的内容不再是简单的 <code>SQL</code> 语句了，还包含操作的具体数据，记录内容如下。</p><p><img src="'+u+'" alt="image-20230529170702610"></p><p><code>MySQL</code> 会判断这条 <code>SQL</code> 语句是否可能引起数据不一致，如果是，就用 <code>row</code> 格式，否则就用 <code>statement</code> 格式。</p><h3 id="写入时机" tabindex="-1"><a class="header-anchor" href="#写入时机" aria-hidden="true">#</a> 写入时机</h3><p><code>binlog</code> 的写入时机也非常简单，事务执行过程中，先把日志写到 <code>binlog cache</code>，事务提交的时候，再把 <code>binlog cache</code> 写到 <code>binlog</code> 文件中。</p><p>因为一个事务的 <code>binlog</code> 不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为 <code>binlog cache</code>。</p><p>可以通过 <code>binlog_cache_size</code> 参数控制单个线程 <code>binlog cache</code> 大小，如果存储内容超过了这个参数，就要暂存到磁盘（<code>Swap</code>）。</p><p><code>binlog</code> 日志刷盘流程如下。</p><p><img src="'+f+'" alt="image-20230529172120404"></p><ul><li><code>write</code> 是把日志写入 <code>page cache</code>，不是数据持久化到磁盘，所以速度比较快。</li><li><code>fsync</code> 超时将数据持久化到磁盘的操作。</li></ul><p><code>write</code> 和 <code>fsync</code> 的时机，可以由参数 <code>sync_binlog</code> 控制，默认是 <code>0</code>。</p><p>为 <code>0</code> 的时候，表示每次提交事务都只 <code>write</code>，由系统自行判断什么时候执行<code>fsync</code>。</p><p>虽然性能得到提升，但是机器宕机，<code>page cache</code> 里面的 <code>binlog</code> 会丢失。</p><p>为了安全起见，可以设置为<code>1</code>，表示每次提交事务都会执行 <code>fsync</code>，就如同 <strong><code>redo log</code> 日志刷盘流程</strong> 一样。</p><p>最后还有一种折中方式，可以设置为 <code>N(N &gt; 1)</code>，表示每次提交事务都 <code>write</code>，但累积 <code>N</code> 个事务后才 <code>fsync</code>。</p><p>在出现 IO 瓶颈的场景里，将 <code>sync_binlog</code> 设置成一个比较大的值，可以提升性能。</p><p>同样的，如果机器宕机，会丢失最近 <code>N</code> 个事务的 <code>binlog</code> 日志。</p><h2 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h2><p><code>redo log</code>（重做日志）让 InnoDB 存储引擎拥有了崩溃恢复能力。</p><p><code>binlog</code>（归档日志）保证了 <code>MySQL</code> 集群架构的数据一致性。</p><p>虽然它们都属于持久化的保证，但是侧重点不同。</p><p>在执行更新语句过程，会记录 <code>redo log</code> 与 <code>binlog</code> 两块日志，以基本的事务为单位，<code>redo log</code> 在事务执行过程中可以不断写入，而 <code>binlog</code> 只有在提交事务时才写入，所以 <code>redo log</code> 与 <code>binlog</code> 的写入时机不一样。</p><p>以 <code>update</code> 语句为例，假设 <code>id = 2</code> 的记录，字段 <code>c</code> 值是 <code>0</code>，把字段 <code>c</code> 值更新成 <code>1</code>，<code>SQL</code> 语句为 <code>update T set c = 1 where id = 2</code>。</p><p>假设执行过程中写完 <code>redo log</code> 日志后，<code>binlog</code> 日志写期间发生了异常，会出现什么情况呢？</p><p><img src="'+w+'" alt="image-20230529173603129"></p><p>由于 <code>binlog</code> 没写完就异常，这时候 <code>binlog</code> 里面没有对应的修改记录。因此，之后用 <code>binlog</code> 日志恢复数据时，就会少这一次更新，恢复出来的这一行 <code>c</code> 值是 <code>0</code>，而原库因为 <code>redo log </code>日志恢复，这一行 <code>c</code> 值是 <code>1</code>，最终数据不一致。</p><p>从数据库和备份数据库通过 <code>binlog</code> 同步数据。</p><p><img src="'+k+'" alt="image-20230529173719124"></p><p>为了解决两份日志之间的逻辑一致问题，InnoDB 存储引擎使用两阶段提交方案。</p><p>原理很简单，将 <code>redo log</code> 的写入拆成了两个步骤 <code>prepare</code> 和 <code>commit</code>，这就是两阶段提交。</p><p><img src="'+y+'" alt="image-20230529173846546"></p><p>使用两阶段提交后，写入 <code>binlog</code> 时发生异常也不会有影响，因为 <code>MySQL</code> 根据 <code>redo log</code> 日志恢复数据时，发现 <code>redo log</code> 还处于 <code>prepare</code> 阶段，并且没有对应 <code>binlog</code> 日志，就会回滚该事务。</p><p><img src="'+B+'" alt="image-20230529173959416"></p><p>再看一个场景，<code>redo log</code> 设置 <code>commit</code> 阶段发生异常，那会不会回滚事务呢？</p><p><img src="'+L+'" alt="image-20230529174101634"></p><p>并不会回滚事务，它会执行上图框住的逻辑，虽然 <code>redo log</code> 是处于 <code>prepare</code> 阶段，但是能通过事务 <code>id</code> 找到对应的 <code>binlog</code> 日志，所以 <code>MySQL</code> 认为是完整的，就会提交事务恢复数据。</p><h2 id="undo-log-回滚日志" tabindex="-1"><a class="header-anchor" href="#undo-log-回滚日志" aria-hidden="true">#</a> undo log 回滚日志</h2><p>在 MySQL 中，恢复机制是通过 <strong>回滚日志（<code>undo log</code>）</strong> 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 <strong>回滚日志</strong> 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。</p><p><code>MVCC</code> 的实现依赖于：<strong>隐藏字段、<code>Read View</code>、<code>undo log</code></strong>。在内部实现中，InnoDB 通过数据行的 <code>DB_TRX_ID</code> 和 <code>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code>Read View</code> 之前已经提交的修改和该事务本身做的修改。</p>',84),D={href:"https://ylzhong.top/database/1mysql/4mysqlmvcc.html",target:"_blank",rel:"noopener noreferrer"},V=d('<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>MySQL InnoDB 引擎使用 <strong><code>redo log</code>(重做日志)</strong> 保证事务的<strong>持久性</strong>，使用 <strong><code>undo log</code>(回滚日志)</strong> 来保证事务的<strong>原子性</strong>。</p><p><code>MySQL</code> 数据库的<strong>数据备份、主备、主主、主从</strong>都离不开 <code>binlog</code>，需要依靠 <code>binlog</code> 来同步数据，保证数据一致性。</p>',3);function N(q,P){const c=r("ExternalLinkIcon");return n(),i("div",null,[x,Q,M,a(" more "),I,o("p",null,[e("☀️详见"),o("a",D,[e("事务隔离级别和MVCC"),l(c)]),e("。")]),V])}const v=p(S,[["render",N],["__file","3mysqllog.html.vue"]]);export{v as default};
