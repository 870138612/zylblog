import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as r,e as i,b as e,d,a as l,f as o}from"./app-ad23c698.js";const s="/markdown/image-20230529200011975.png",p={},h=o('<h2 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h2><p>SQL 定义了四个隔离级别：</p><p><code>READ-UNCOMMITTED</code>（读取未提交）：最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。</p><p><code>READ-COMMITTED</code>（读取已提交）：允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。</p><p><code>REPEATABLE-READ</code>（可重复读）：对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。</p><p><code>SERIALIZABLE</code>（可串行化）：最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。</p>',6),R=o('<table><thead><tr><th style="text-align:center;">隔离级别</th><th style="text-align:center;">脏读</th><th style="text-align:center;">不可重复读</th><th style="text-align:center;">幻读</th></tr></thead><tbody><tr><td style="text-align:center;">READ-UNCOMMITTED</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">READ-COMMITTED</td><td style="text-align:center;">×</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">REPEATABLE-READ</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">√</td></tr><tr><td style="text-align:center;">SERIALIZABLE</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td><td style="text-align:center;">×</td></tr></tbody></table><p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <code>REPEATABLE-READ</code>。</p><p>标准的 SQL 隔离级别定义里，<code>REPEATABLE-READ</code> 是不可以防止幻读的，但是 InnoDB 实现的 <code>REPEATABLE-READ</code> 隔离级别其实是可以解决幻读问题发生的，主要有下面两种情况：</p><ul><li><p><strong>快照读</strong>：由 <code>MVCC</code> 机制来保证不出现幻读。</p></li><li><p><strong>当前读</strong>：使用 Next-Key Lock 进行加锁来保证不出现幻读，Next-Key Lock 是行锁（Record Lock）和间隙锁（Gap Lock）的结合，行锁只能锁住已经存在的行，为了避免插入新行，需要依赖间隙锁</p></li></ul><h2 id="一致性非锁定读和锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读和锁定读" aria-hidden="true">#</a> 一致性非锁定读和锁定读</h2><h3 id="一致性非锁定读" tabindex="-1"><a class="header-anchor" href="#一致性非锁定读" aria-hidden="true">#</a> 一致性非锁定读</h3><p>对于<strong>一致性非锁定读</strong>的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见。</p><p>在 InnoDB 存储引擎中，多版本并发控制就是对非锁定读的实现。如果读取的行正在执行 <code>DELETE</code> 或 <code>UPDATE</code> 操作，这时读取操作不会去等待行上锁的释放。相反地，InnoDB 存储引擎会去读取行的一个快照数据，对于这种读取历史数据的方式，叫它快照读（snapshot read）。</p><p>在 <code>Repeatable Read</code> 和 <code>Read Committed</code> 两个隔离级别下，如果是执行普通的 <code>select</code> 语句（不包括 <code>select ... lock in share mode</code> ,<code>select ... for update</code>）则会使用<strong>一致性非锁定读</strong>。并且在 <code>Repeatable Read</code> 下 <code>MVCC</code> 实现了可重复读和防止部分幻读。</p><h3 id="锁定读" tabindex="-1"><a class="header-anchor" href="#锁定读" aria-hidden="true">#</a> 锁定读</h3><p>如果执行的是下列语句，就是<strong>锁定读</strong>。</p><ul><li><code>select ... lock in share mode</code></li><li><code>select ... for update</code></li><li><code>insert</code>、<code>update</code>、<code>delete</code> 操作</li></ul><p>在锁定读下，读取的是数据的最新版本，这种读也被称为<strong>当前读（current read）</strong>。锁定读会对读取到的记录加锁：</p><ul><li><code>select ... lock in share mode</code>：对记录加 <code>S</code> 锁，其它事务也可以加<code>S</code>（共享锁）锁，如果加 <code>x</code> 锁则会被阻塞。</li><li><code>select ... for update</code>、<code>insert</code>、<code>update</code>、<code>delete</code>：对记录加 <code>X</code>（排它锁） 锁，且其它事务不能加任何锁。</li></ul><p>在一致性非锁定读下，即使读取的记录已被其它事务加上 <code>X</code> 锁，这时记录也是可以被读取的，即读取的快照数据。上面说了，在 <code>Repeatable Read</code> 下 <code>MVCC</code> 防止了部分幻读，这边的 “部分” 是指在<strong>一致性非锁定读</strong>情况下，只能读取到第一次查询之前所插入的数据（根据 <code>Read View</code> 判断数据可见性，<code>Read View</code> 在第一次查询时生成）。但是如果是<strong>当前读</strong>，每次读取的都是最新数据，这时如果两次查询中间有其它事务插入数据，就会产生幻读。所以， <strong>InnoDB 在实现 <code>Repeatable Read</code> 时，如果执行的是当前读，则会对读取的记录使用 <code>Next-key Lock</code> ，来防止其它事务在间隙间插入数据</strong>。</p><h2 id="innodb-对-mvcc-的实现" tabindex="-1"><a class="header-anchor" href="#innodb-对-mvcc-的实现" aria-hidden="true">#</a> InnoDB 对 MVCC 的实现</h2><p><code>MVCC</code> 的实现依赖于：<strong>隐藏字段、<code>Read View</code>、<code>undo log</code></strong>。</p><p>在内部实现中，InnoDB 通过数据行的 <code>DB_TRX_ID</code> 和 <code>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code>Read View</code> 之前已经提交的修改和该事务本身做的修改。</p><h3 id="隐藏字段" tabindex="-1"><a class="header-anchor" href="#隐藏字段" aria-hidden="true">#</a> 隐藏字段</h3><p>在内部，InnoDB 存储引擎为每行数据添加了三个隐藏字段：</p><ul><li><p><code>DB_TRX_ID（6字节）</code>：表示最后一次插入或更新该行的事务 id。此外，<code>delete</code> 操作在内部被视为更新，只不过会在记录头 <code>Record header</code> 中的 <code>deleted_flag</code> 字段将其标记为已删除；</p></li><li><p><code>DB_ROLL_PTR（7字节）</code> 回滚指针，指向该行的 <code>undo log</code> 。如果该行未被更新，则为空；</p></li><li><p><code>DB_ROW_ID（6字节）</code>：如果没有设置主键且该表没有唯一非空索引时，InnoDB 会使用该 id 来生成聚簇索引。</p></li></ul><h3 id="read-view" tabindex="-1"><a class="header-anchor" href="#read-view" aria-hidden="true">#</a> Read View</h3><p>主要有以下字段：</p><ul><li><code>m_low_limit_id</code>：目前出现过的最大的事务 id+1，即下一个将被分配的事务 id。大于等于这个 id 的数据版本均不可见。</li><li><code>m_up_limit_id</code>：活跃事务列表 <code>m_ids</code> 中最小的事务 id，如果 <code>m_ids</code> 为空，则 <code>m_up_limit_id</code> 为 <code>m_low_limit_id</code>。小于这个 id 的数据版本均可见。</li><li><code>m_ids</code>：<code>Read View</code> 创建时其他未提交的活跃事务 id 列表。创建 <code>Read View</code>时，将当前未提交事务 id 记录下来，后续即使它们修改了记录行的值，对于当前事务也是不可见的。<code>m_ids</code> 不包括当前事务自己和已提交的事务（正在内存中）。</li><li><code>m_creator_trx_id</code>：创建该 <code>Read View</code> 的事务 id。</li></ul><p><img src="'+s+'" alt="image-20230529200011975"></p><h3 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h3><p><code>undo log</code> 主要有两个作用：</p><ul><li>当事务回滚时用于将数据恢复到修改前的样子；</li><li>另一个作用是 <code>MVCC</code> ，当读取记录时，若该记录被其他事务占用或当前版本对该事务不可见，则可以通过 <code>undo log</code> 读取之前的版本数据，以此实现非锁定读。</li></ul><h2 id="rc-和-rr-隔离级别下-mvcc-的差异" tabindex="-1"><a class="header-anchor" href="#rc-和-rr-隔离级别下-mvcc-的差异" aria-hidden="true">#</a> RC 和 RR 隔离级别下 MVCC 的差异</h2><p>在事务隔离级别 RC 和 RR （InnoDB 存储引擎的默认事务隔离级别）下，InnoDB 存储引擎使用 <strong>MVCC（非锁定一致性读）</strong>，但它们生成 <code>Read View</code> 的时机却不同。</p><ul><li>在 RC 隔离级别下的<strong>每次</strong> <code>select</code> 查询前都生成一个 <code>Read View</code>（m_ids 列表）；</li><li>在 RR 隔离级别下只在事务开始后<strong>第一次</strong> <code>select</code> 数据前生成一个 <code>Read View</code>（m_ids 列表）。</li></ul><h2 id="mvcc下解决不可重复读问题" tabindex="-1"><a class="header-anchor" href="#mvcc下解决不可重复读问题" aria-hidden="true">#</a> MVCC下解决不可重复读问题</h2><p>虽然 RC 和 RR 都通过 <code>MVCC</code> 来读取快照数据，但由于 <strong>生成 Read View 时机不同</strong>，从而在 RR 级别下实现可重复读。</p><p>在 RC 隔离级别下，事务在每次查询开始时都会生成并设置新的 <code>Read View</code>，所以导致不可重复读。</p><p>在 RR 隔离级别下，事务在第一次查询开始的时候会生成一个 <code>Read View</code> 后续复用这个 <code>Read View</code>。</p><h2 id="mvcc-next-key-lock-防止幻读" tabindex="-1"><a class="header-anchor" href="#mvcc-next-key-lock-防止幻读" aria-hidden="true">#</a> MVCC + Next-key Lock 防止幻读</h2><p>InnoDB 存储引擎在 RR 隔离级别下通过 <code>MVCC</code> 和 <code>Next-key Lock</code> 来解决幻读问题。</p><p><strong>1、执行普通 <code>select</code>，此时会以 <code>MVCC</code> 快照读的方式读取数据</strong></p><p>在快照读的情况下，RR 隔离级别只会在事务开启后的第一次查询生成 <code>Read View</code> ，并使用至事务提交。所以在生成 <code>Read View</code> 之后其它事务所做的更新、插入记录版本对当前事务并不可见，<strong>实现了可重复读和防止快照读下的 “幻读”</strong>。</p><p><strong>2、执行 <code>select...for update/lock in share mode、insert、update、delete</code> 等当前读</strong></p><p>在当前读下，读取的都是最新的数据，如果其它事务有插入新的记录，并且刚好在当前事务查询范围内，就会产生幻读。InnoDB 使用 <strong>Next-key Lock</strong> 来防止这种情况。当执行当前读时，会锁定读取到的记录的同时，锁定它们的间隙，防止其它事务在查询范围内插入数据。</p>',41),g={href:"https://ylzhong.top/database/1mysql/1mysql.html#mysql-%E9%94%81",target:"_blank",rel:"noopener noreferrer"},_=e("blockquote",null,[e("p",null,[e("strong",null,"临键锁（Next-key Lock）"),d("：Record Lock + Gap Lock，锁定一个范围，包含记录本身，主要目的是为了解决幻读问题。记录锁只能锁住已经存在的记录，为了避免插入新记录，需要依赖间隙锁。")])],-1);function m(u,x){const c=a("ExternalLinkIcon");return n(),r("div",null,[h,i(" more "),R,e("p",null,[d("☀️详见"),e("a",g,[d("MySQL 锁"),l(c)])]),_])}const C=t(p,[["render",m],["__file","4mysqlmvcc.html.vue"]]);export{C as default};
