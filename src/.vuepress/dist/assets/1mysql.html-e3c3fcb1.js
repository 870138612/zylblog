import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as e,d as l,e as n}from"./app-44102031.js";const o="/markdown/image-20230525171149797.png",s="/markdown/image-20230526202917798.png",t={},a=n('<h3 id="什么是关系型数据库" tabindex="-1"><a class="header-anchor" href="#什么是关系型数据库" aria-hidden="true">#</a> 什么是关系型数据库？</h3><p>一种建立在关系模型基础上的数据库，关系模型表明了数据库中所存储的数据之间的联系（一对一，一对多，多对多）。</p><h3 id="mysql有什么优点" tabindex="-1"><a class="header-anchor" href="#mysql有什么优点" aria-hidden="true">#</a> MySQL有什么优点？</h3><ol><li>成熟稳定，功能完善。</li><li>开源免费。</li><li>文档丰富。</li><li>兼容性好。</li><li>社区活跃，生态完善。</li><li>事务支持优秀。</li><li>支持分库分表、读写分离、高可用。</li></ol>',4),d=n(`<h2 id="mysql基础架构" tabindex="-1"><a class="header-anchor" href="#mysql基础架构" aria-hidden="true">#</a> MySQL基础架构</h2><p>MySQL主要由下面几个部分构成：</p><ul><li><strong>连接器</strong>：身份认证和权限相关。</li><li><strong>查询缓存</strong>：执行查询语句的时候，会先查询缓存（MySQL 8.0版本后移除）。</li><li><strong>分析器</strong>：没有命中缓存的话，SQL语句会经过分析器，分析SQL语句操作，检查语法是否正确。</li><li><strong>优化器</strong>：按照MySQL认为最优的方案去执行。</li><li><strong>执行器</strong>：执行语句，然后从存储引擎返回数据。</li><li><strong>插件式存储引擎</strong>：主要负责数据的存储和读取，采用的是插件式架构，支持InnoDB，MyISAM，Memory等多种存储引擎。</li></ul><p>MySQL 主要分为 Server 层和引擎层，Server 层主要包括连接器、查询缓存、分析器、优化器、执行器，同时还有一个日志模块（binlog），这个日志模块所有执行引擎都可以共用，redolog 只有 InnoDB 有。</p><p>引擎层是插件式的，目前主要包括，MyISAM，InnoDB，Memory 等。</p><p>查询语句的执行流程如下：权限校验（如果命中缓存）---&gt;查询缓存---&gt;分析器---&gt;优化器---&gt;权限校验---&gt;执行器---&gt;引擎</p><p>更新语句执行流程如下：分析器---&gt;权限校验---&gt;执行器---&gt;引擎---redo log(prepare 状态)---&gt;binlog---&gt;redo log(commit 状态)</p><h2 id="mysql存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql存储引擎" aria-hidden="true">#</a> MySQL存储引擎</h2><p>MySQL 5.5.5之前，MyISAM是MySQL的默认存储引擎。之后，InnoDB是MySQL的默认存储引擎。</p><h3 id="myisam-和-innodb-有什么区别" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb-有什么区别" aria-hidden="true">#</a> MyISAM 和 InnoDB 有什么区别？</h3><ul><li><strong>是否支持行级锁</strong></li></ul><p>MyISAM只有表级锁，而InnoDB支持行级锁和表级锁，默认为行级锁。MyISAM一锁就是整张表，并发度不及InnoDB。</p><ul><li>是否支持事务</li></ul><p>MyISAM不提供事务。</p><p>InnoDB提供事务支持，实现了SQL标准定义的四个隔离级别，具有提交和回滚事务的能力，并且InnoDB默认使用REPEAETABLE-READ（可重复读）隔离级别是可以解决幻读问题的（基于MVCC和Next-Key Lock）。</p><ul><li><strong>是否支持外键</strong></li></ul><p>MyISAM不支持，而InnoDB支持。外键对于维护数据的一致性非常有帮助，但是在日常开发中不建议使用外键，请通过关系表实现。</p><ul><li><strong>是否支持数据库异常崩溃后的安全恢复</strong></li></ul><p>MyISAM不支持，而InnoDB支持。</p><p>使用InnoDB的数据库在异常崩溃之后，数据库重新启动的时候会保证数据库恢复到崩溃前的状态，这个恢复过程依赖于<code>redo log</code>。</p><ul><li><strong>是否支持MVCC</strong></li></ul><p>MyISAM不支持，InnoDB支持。</p><ul><li><strong>索引实现不同</strong></li></ul><p>MyISAM引擎InnoDB引擎都是使用B+Tree作为索引结构，但是两者实现方式不同。</p><p>InnoDB引擎中，其数据文件本身就是索引文件。相比MyISAM，索引文件和数据文件是分离的，其表数据文件本身就是按B+Tree阻止的一个索引结构，树的叶节点data域保存了完整的数据记录。</p><ul><li><strong>性能</strong></li></ul><p>InnoDB的性能比MyISAM性能更好，InnoDB读写支持并发，MyISAM不支持并发。</p><h2 id="mysql查询缓存" tabindex="-1"><a class="header-anchor" href="#mysql查询缓存" aria-hidden="true">#</a> MySQL查询缓存</h2><p>执行查询语句的时候，会先查询缓存，不过在8.0版本之后缓存被移除。</p><p><strong>查询不命中的情况：</strong></p><ul><li>任何两个查询在任何字符上的不同都会导致缓存不命中。</li><li>如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、MySQL库中的系统表，其查询结果也不会被缓存。</li><li>缓存建立之后，MySQL的查询缓存系统会跟踪查询中涉及的没一张表，如果这些表发生变化，那么和这张表的所有缓存数据都失效。</li></ul><p>缓存虽然能提升数据库的查询能力，但是缓存同时也带来了额外的开销，每次查询后都要做一次缓存操作，失效后还要销毁。</p><h2 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务" aria-hidden="true">#</a> MySQL 事务</h2><p>事务是逻辑上的一组操作，要么都执行，要么都不执行。</p><p>MySQL中开启事务：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 开启一个事务
START TRANSACTION;
# 多条 SQL 语句
SQL1,SQL2...
## 提交事务
COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="acid特性" tabindex="-1"><a class="header-anchor" href="#acid特性" aria-hidden="true">#</a> ACID特性</h3><p>关系型数据库都有<strong>ACID</strong>特性。</p><p><img src="`+o+`" alt="image-20230525171149797"></p><ol><li>原子性<code>Atomicity</code>：事务是最小的执行单位，不允许分割。事务的原子性确保动作要么都完成，要么都不完成。</li><li>一致性<code>Consistency</code>：执行事物的前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的。</li><li>隔离性<code>Isolation</code>：并发访问数据库时，一个用户的事物不被其他事务所干扰，各并发事务之间的数据库是独立的。</li><li>持久性<code>Durability</code>：一个事务被提交之后。它对数据库中的数据改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li></ol><div class="hint-container info"><p class="hint-container-title">ACID</p><p>只有保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障。也就是AID是手段，C是目的。</p></div><h3 id="并发事务带来了哪些问题" tabindex="-1"><a class="header-anchor" href="#并发事务带来了哪些问题" aria-hidden="true">#</a> 并发事务带来了哪些问题?</h3><p><strong>脏读</strong>：读到了没有提交的数据。</p><blockquote><p><strong>READ-UNCOMMITTED</strong></p></blockquote><p><strong>不可重复读</strong>：在一个事务内开启多次读，读取条件相同的情况下得到的结果却是不一样的。</p><blockquote><p><strong>READ-UNCOMMITTED、READ-COMMITTED</strong></p></blockquote><p><strong>幻读</strong>：读取到了一个原本没有的数据（新插入的数据）。</p><blockquote><p>READ-UNCOMMITTED、READ-COMMITTED、REPEATABLE-READ（通过MVCC和Next-Key Lock可解决幻读）</p></blockquote><h3 id="并发事务的控制方式有哪些" tabindex="-1"><a class="header-anchor" href="#并发事务的控制方式有哪些" aria-hidden="true">#</a> 并发事务的控制方式有哪些？</h3><p>MySQL中并发事务的控制方式有两种：<strong>锁和MVCC</strong>。锁可以看做是悲观控制的模式，多版本并发控制是乐观控制的模式。</p><h3 id="mysql的隔离级别是基于锁实现的吗" tabindex="-1"><a class="header-anchor" href="#mysql的隔离级别是基于锁实现的吗" aria-hidden="true">#</a> MySQL的隔离级别是基于锁实现的吗？</h3><p>MySQL的隔离级别基于锁和MVCC机制共同实现的。</p><p><strong>SERIALIZABLE</strong>隔离级别是通过锁来实现的，<strong>READ-COMMITTED</strong> 和 <strong>REPEATABLE-READ</strong> 隔离级别是基于 MVCC 实现的。</p><h3 id="mysql的默认隔离级别是什么" tabindex="-1"><a class="header-anchor" href="#mysql的默认隔离级别是什么" aria-hidden="true">#</a> MySQL的默认隔离级别是什么？</h3><p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。</p><h2 id="mysql-锁" tabindex="-1"><a class="header-anchor" href="#mysql-锁" aria-hidden="true">#</a> MySQL 锁</h2><h3 id="表级锁和行级锁了解吗-有什么区别" tabindex="-1"><a class="header-anchor" href="#表级锁和行级锁了解吗-有什么区别" aria-hidden="true">#</a> 表级锁和行级锁了解吗？有什么区别？</h3><p>MyISAM 仅仅支持表级锁(table-level locking)，一锁就锁整张表，这在并发写的情况下性非常差。InnoDB 不光支持表级锁(table-level locking)，还支持行级锁(row-level locking)，默认为行级锁。</p><p>行级锁的粒度更小，仅对相关的记录上锁即可（对一行或者多行记录加锁），所以对于并发写入操作来说， InnoDB 的性能更高。</p><p><strong>表级锁和行级锁对比</strong>：</p><ul><li><strong>表级锁</strong>：MySQL中锁定粒度最大的锁，对当前操作的整张表加锁，实现简单，资源消耗快，不会出现死锁。并发度低，与存储引擎无关，MyISAM和InnoDB都支持表级锁。</li><li><strong>行级锁</strong>：MySQL中锁定粒度最小的一种锁，是针对索引字段加锁，只针对当前操作的行记录进行加锁。行级锁能大大减少数据库操作的冲突。加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。行级锁和存储引擎有关，InnoDB支持MyISAM不支持。</li></ul><h3 id="innodb-有哪几类行锁" tabindex="-1"><a class="header-anchor" href="#innodb-有哪几类行锁" aria-hidden="true">#</a> InnoDB 有哪几类行锁？</h3><p>InnoDB支持三种行锁定方式：</p><ul><li><strong>记录锁（Record Lock）</strong>：也被称为记录锁，属于单个行记录上的锁。</li><li><strong>间隙锁（Gap Lock）</strong>：锁定一个范围，不包括记录本身。</li><li><strong>临键锁（Next-Key Lock）</strong>：Record Lock+Gap Lock，锁定一个范围，包含记录本身，主要目的是为了解决幻读问题。记录锁只能锁住已经存在的记录，为了避免插入新记录，需要依赖间隙锁。</li></ul><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>在 InnoDB 默认的隔离级别 REPEATABLE-READ 下，行锁默认使用的是 Next-Key Lock。但是，如果操作的索引是唯一索引或主键，InnoDB 会对 Next-Key Lock 进行优化，将其降级为 Record Lock，即仅锁住索引本身，而不是范围。</p></div><h3 id="共享锁和排他锁区别" tabindex="-1"><a class="header-anchor" href="#共享锁和排他锁区别" aria-hidden="true">#</a> 共享锁和排他锁区别</h3><p><strong>两者都是行级锁</strong>。</p><p><strong>共享锁（S 锁）</strong>：又称读锁，事务在读取记录的时候获取共享锁，允许多个事务同时获取（锁兼容）。读写互斥，写写互斥，其他不互斥。</p><p><strong>排他锁（X 锁）</strong>：又称写锁/独占锁，事务在修改记录的时候获取排他锁，不允许多个事务同时获取。如果一个记录已经被加了排他锁，那其他事务不能再对这条事务加任何类型的锁（锁不兼容）。</p><p>由于 MVCC 的存在，对于一般的 <code>SELECT</code> 语句，InnoDB 不会加任何锁。</p><h3 id="意向锁有什么作用" tabindex="-1"><a class="header-anchor" href="#意向锁有什么作用" aria-hidden="true">#</a> 意向锁有什么作用？</h3><p>如果需要用到表锁的话，如何判断表中的记录没有行锁呢，一行一行遍历肯定是不行，性能太差，所以需要意向锁来快速判断是否可以对某个表使用表锁。</p><p><strong>意向锁是表级锁</strong>，共有两种：</p><ul><li><p><strong>意向共享锁（Intention Shared Lock，IS 锁）</strong>：事务有意向对表中的某些记录加共享锁（S 锁），加共享锁前必须先取得该表的 IS 锁。</p></li><li><p><strong>意向排他锁（Intention Exclusive Lock，IX 锁）</strong>：事务有意向对表中的某些记录加排他锁（X 锁），加排他锁之前必须先取得该表的 IX 锁。</p></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>意向锁是由数据引擎自己维护的，用户无法手动操作意向锁，在为数据行加共享/排他锁之前，InnoDB会先获取该行数据所在数据表对应的意向锁。</strong></p><p><strong>意向锁之间是相互兼容的。</strong></p><p><strong>除了意向共享锁（IS）和共享锁兼容（S），其余的意向锁和共享或者排他锁都互斥。</strong></p></div><h3 id="快照读和当前读的区别" tabindex="-1"><a class="header-anchor" href="#快照读和当前读的区别" aria-hidden="true">#</a> 快照读和当前读的区别</h3><p><strong>快照读</strong>（一致性非锁定读）就是单纯的 <code>SELECT</code> 语句，不对数据加锁的读。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT ... WHERE ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>快照即记录的历史版本，每行记录可能存在多个历史版本。</p><p>快照读的情况下，如果读取的记录正在执行UPDATE/DELETE操作，读取操作不会因此去等待记录上X锁的释放，而是会去读取行的一个快照。</p><p>只有在事务隔离级别RC和RR下，InnoDB才会使用快照读。</p><ul><li>在RC级别下，对于快照数据，快照读总是读取被锁定行的最新一份快照数据。</li><li>在RR级别下，对于快照数据，快照读总是读取本事务开始时的行数据版本。</li></ul><p><strong>当前读</strong>（一致性锁定读）就是给行记录加S锁（共享锁）或者X锁（排它锁）。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 对读的记录加一个X锁
SELECT...FOR UPDATE
# 对读的记录加一个S锁
SELECT...LOCK IN SHARE MODE
# 对修改的记录加一个X锁
INSERT...
UPDATE...
DELETE...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql如何存储ip地址" tabindex="-1"><a class="header-anchor" href="#mysql如何存储ip地址" aria-hidden="true">#</a> MySQL如何存储IP地址？</h2><p>可以将IP地址转换成整形数据存储，性能更好，占用空间更小。</p><p>MySQL提供了两个方法来处理ip地址：</p><ul><li><code>INET_ATON()</code>：把ip转化为无符号整数。</li><li><code>INET_NTOA()</code>：把整型的 ip 转为地址。</li></ul><p>插入数据前，先用 <code>INET_ATON()</code> 把 ip 地址转为整型，显示数据时，使用 <code>INET_NTOA()</code> 把整型的 ip 地址转为地址显示即可。</p><h2 id="执行计划" tabindex="-1"><a class="header-anchor" href="#执行计划" aria-hidden="true">#</a> 执行计划</h2><p>可以使用 <code>EXPLAIN</code> 命令来分析 SQL 的 <strong>执行计划</strong> 。执行计划是指一条 SQL 语句在经过 MySQL 查询优化器的优化会后，具体的执行方式。</p><p><code>EXPLAIN</code> 并不会真的去执行相关的语句，而是通过 <strong>查询优化器</strong> 对语句进行分析，找出最优的查询方案，并显示对应的信息。</p><div class="hint-container info"><p class="hint-container-title">分析EXPLAIN结果</p><ul><li><p><strong>id</strong>：SELECT标识符，是查询中SELECT的序号，用来标识整个查询中SELECT语句的顺序。id如果相同，从上往下一次执行。</p></li><li><p><strong>select_type</strong>：查询的类型，主要用于区分普通查询、联合查询、子查询等复杂查询。</p><ul><li><strong>SIMPLE</strong>：简单查询，不包含 UNION 或者子查询。</li><li><strong>PRIMARY</strong>：查询中如果包含子查询或其他部分，外层的 SELECT 将被标记为 PRIMARY。</li><li><strong>SUBQUERY</strong>：子查询中的第一个 SELECT。</li><li><strong>UNION</strong>：在 UNION 语句中，UNION 之后出现的 SELECT。</li><li><strong>DERIVED</strong>：在 FROM 中出现的子查询将被标记为 DERIVED。</li><li><strong>UNION RESULT</strong>：UNION 查询的结果</li></ul></li><li><p><strong>table</strong>：表名。</p></li><li><p><strong>type（重要）</strong>：查询执行的类型，所有值的顺序从最优到最差排序为system &gt; const &gt; eq_ref &gt; ref &gt; fulltext &gt; ref_or_null &gt; index_merge &gt; unique_subquery &gt; index_subquery &gt; range &gt; index &gt; ALL。</p><ul><li><strong>system</strong>：如果表使用的引擎对于表行数统计是精确的（如：MyISAM），且表中只有一行记录的情况下，访问方法是 system ，是 const 的一种特例。</li><li><strong>const</strong>：表中最多只有一行匹配的记录，一次查询就可以找到，常用于使用主键或唯一索引的所有字段作为查询条件。</li><li><strong>eq_ref</strong>：当连表查询时，前一张表的行在当前这张表中只有一行与之对应。是除了 system 与 const 之外最好的 join 方式，常用于使用主键或唯一索引的所有字段作为连表条件。</li><li><strong>ref</strong>：使用普通索引作为查询条件，查询结果可能找到多个符合条件的行。</li><li><strong>index_merge</strong>：当查询条件使用了多个索引时，表示开启了 Index Merge 优化，此时执行计划中的 key 列列出了使用到的索引。</li><li><strong>range</strong>：对索引列进行范围查询，执行计划中的 key 列表示哪个索引被使用了。</li><li><strong>index</strong>：查询遍历了整棵索引树，与 ALL 类似，只不过扫描的是索引，而索引一般在内存中，速度更快。</li><li><strong>ALL</strong>：全表扫描。</li></ul></li><li><p><strong>key（重要）</strong>：key 列表示 MySQL 实际使用到的索引。如果为 NULL，则表示未用到索引。</p></li><li><p><strong>key_len</strong>：key_len 列表示 MySQL 实际使用的索引的最大长度；当使用到联合索引时，有可能是多个列的长度和。在满足需求的前提下越短越好。如果 key 列显示 NULL ，则 key_len 列也显示 NULL 。</p></li><li><p><strong>rows</strong>：rows 列表示根据表统计信息及选用情况，大致估算出找到所需的记录或所需读取的行数，数值越小越好。</p></li><li><p><strong>Extra（重要）</strong>：这列包含了 MySQL 解析查询的额外信息，通过这些信息，可以更准确的理解 MySQL 到底是如何执行查询的。常见的值如下：</p><ul><li><strong>Using filesort</strong>：在排序时使用了外部的索引排序，没有用到表内索引进行排序。</li><li><strong>Using temporary</strong>：MySQL 需要创建临时表来存储查询的结果，常见于 ORDER BY 和 GROUP BY。</li><li><strong>Using index</strong>：表明查询使用了覆盖索引，不用回表，查询效率非常高。</li><li><strong>Using index condition</strong>：表示查询优化器选择使用了索引条件下推这个特性。</li><li><strong>Using where</strong>：表明查询使用了 WHERE 子句进行条件过滤。一般在没有使用到索引的时候会出现。</li><li><strong>Using join buffer (Block Nested Loop)</strong>：连表查询的方式，表示当被驱动表的没有使用索引的时候，MySQL 会先将驱动表读出来放到 join buffer 中，再遍历被驱动表与驱动表进行查询。</li></ul></li></ul></div><h2 id="读写分离和分库分表" tabindex="-1"><a class="header-anchor" href="#读写分离和分库分表" aria-hidden="true">#</a> 读写分离和分库分表</h2><h3 id="读写分离" tabindex="-1"><a class="header-anchor" href="#读写分离" aria-hidden="true">#</a> 读写分离</h3><p>读写分离主要是为了将对数据库的读写操作分散到不同的数据库节点（主节点写，从节点读）上，这样能小幅度提升写性能，大幅度提升读性能。</p><h3 id="读写分离会带来什么问题" tabindex="-1"><a class="header-anchor" href="#读写分离会带来什么问题" aria-hidden="true">#</a> 读写分离会带来什么问题？</h3><p>读写分离对提升数据库的并发非常有效，但是主库和从库的数据存在延时（<strong>主从同步延迟</strong> ）。</p><h3 id="如何实现读写分离" tabindex="-1"><a class="header-anchor" href="#如何实现读写分离" aria-hidden="true">#</a> 如何实现读写分离？</h3><ol><li>部署多台数据库，选择其中一台作为主数据库，其他的一台或者多台作为从数据库。</li><li>保证主数据库和从数据库之间的数据是实时同步的，这个过程称为<strong>主从复制</strong>。</li><li>系统将写请求交给主数据库处理，读请求交给从数据库处理。</li></ol><h3 id="主从复制的原理是什么" tabindex="-1"><a class="header-anchor" href="#主从复制的原理是什么" aria-hidden="true">#</a> 主从复制的原理是什么？</h3><ol><li><p>主库将数据库中数据的变化写入到 binlog；</p></li><li><p>从库连接主库；</p></li><li><p>从库会创建一个 I/O 线程向主库请求更新的 binlog；</p></li><li><p>主库会创建一个 binlog dump 线程来发送 binlog ，从库中的 I/O 线程负责接收；</p></li><li><p>从库的 I/O 线程将接收的 binlog 写入到 relay log 中；</p></li><li><p>从库的 SQL 线程读取 relay log 同步数据本地（也就是再执行一遍 SQL ）。</p></li></ol><h2 id="分库分表" tabindex="-1"><a class="header-anchor" href="#分库分表" aria-hidden="true">#</a> 分库分表</h2><h3 id="什么是分库" tabindex="-1"><a class="header-anchor" href="#什么是分库" aria-hidden="true">#</a> 什么是分库</h3><p>分库就是将数据库中的数据分散到不同的数据库上，可以垂直分库，也可以水平分库。</p><p><strong>垂直分库</strong>就是把单一数据库按照业务进行划分，不同的业务使用不同的数据库，进而将一个数据库的压力分担到多个数据库。</p><p><img src="`+s+'" alt="image-20230526202917798"></p><p><strong>水平分库</strong>是把同一个表按一定规则拆分到不同的数据库中，每个库可以位于不同的数据库上，实现了水平扩展，解决了单表的存储和性能瓶颈的问题。例如将10万条数据分成两个5万条数据。</p><h3 id="什么是分表" tabindex="-1"><a class="header-anchor" href="#什么是分表" aria-hidden="true">#</a> 什么是分表</h3><p><strong>分表</strong>：就是对单表的数据进行拆分，可以是垂直拆分，也可以是水平拆分。</p><p><strong>垂直分表</strong>：是对数据表列的拆分，<strong>把一张列比较多的表拆分成多张表</strong>。</p><p><strong>水平分表</strong>：是对数据表行的拆分，吧一张行比较多的表拆分为多张表，可以解决单一表数据量过大的问题。</p><h3 id="什么情况下需要分库分表" tabindex="-1"><a class="header-anchor" href="#什么情况下需要分库分表" aria-hidden="true">#</a> 什么情况下需要分库分表？</h3><ul><li>单表的数据达到千万级别以上，数据库读写速度比较缓慢。</li><li>数据库的数据占用的空间越来越大，备份时间越来越长。</li><li>应用的并发量太大。</li></ul><h3 id="常见的分片算法有哪些" tabindex="-1"><a class="header-anchor" href="#常见的分片算法有哪些" aria-hidden="true">#</a> 常见的分片算法有哪些？</h3><p>分片算法主要解决了数据被水平分片之后，数据应该放在哪个表的问题。</p><ul><li><strong>哈希分片</strong>：求指定key的哈希，然后根据哈希值确定数据应被放置在哪个表中。哈希分片比较适合随机读写的场景，不太适合经常使用范围查询的场景。</li><li><strong>范围分片</strong>：按照特性的范围区间来分配数据。</li><li><strong>地理位置分片</strong>：很多NewSQL数据库都支持地理位置分片算法。</li><li><strong>融合算法</strong>：灵活组合多种分片算法。</li></ul><h3 id="分库分表会带来什么问题呢" tabindex="-1"><a class="header-anchor" href="#分库分表会带来什么问题呢" aria-hidden="true">#</a> 分库分表会带来什么问题呢？</h3><ul><li><strong>join操作</strong>：同一个数据库中的表分布在不同的数据库中，导致无法使用join操作。</li><li><strong>事务问题</strong>：同一个数据库中的表分布在不同的数据库中，如果单个操作涉及到多个数据库，那么数据库自带的事物就无法满足要求。</li><li><strong>分布式id</strong>：分库之后，数据遍布在不同服务器上的数据库，数据库的自增主键已经没办法满足生成唯一主键。</li></ul>',119);function g(p,h){return r(),e("div",null,[a,l(" more "),d])}const y=i(t,[["render",g],["__file","1mysql.html.vue"]]);export{y as default};
