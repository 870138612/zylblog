---
title: MySQL日志
icon: page
star: true
category:
  - 数据库
tags:
  - MySQL日志
  - MySQL
  - 八股
---

## redo log 重做日志

`redo log` 是重做日志，是 `InnoDB` 引擎独有的，让 `MySQL` 拥有了崩溃恢复的能力。

![image-20230529154219243](/markdown/image-20230529154219243.png)

<!-- more -->

`MySQL` 中以页为单位，查询记录的时候会从硬盘中将一页的数据加载，放入 `Buffer Pool` 中。

后续的查找都是从 `Buffer Pool` 中查找。

更新表数据的时候，发现 `Buffer Pool` 里存在要更新的数据，就直接在 `Buffer Pool` 中更新。

然后会把在**某个数据页上做了什么修改**记录到重做日志缓存（`redo log buffer`）里，刷盘到 `redo log` 文件里。

![image-20230529162226606](/markdown/image-20230529162226606.png)

理想情况下，事务一提交就会进行刷盘操作，实际上刷盘的实际是根据策略来进行的。

### 刷盘时机

`InnoDB` 存储引擎为 `redo log` 的刷盘策略提供了 `innodb_flush_log_at_trx_commit` 参数，它支持三种策略：

- **0**：设置为 0 的时候，表示每次事务提交时不进行刷盘操作。
- **1**：设置为 1 的时候，表示每次事务提交时都将进行刷盘操作（默认值）。
- **2**：设置为 2 的时候，表示每次事务提交时都只把 `redo log buffer` 内容写入 `page cache`。

`innodb_flush_log_at_trx_commit` 参数默认为 1 ，也就是说当事务提交时会调用 `fsync` 对 redo log 进行刷盘。

另外，`InnoDB` 存储引擎有一个后台线程，每隔 `1` 秒，就会把 `redo log buffer` 中的内容写到文件系统缓存（`page cache`），然后调用 `fsync` 刷盘。

![image-20230529162523262](/markdown/image-20230529162523262.png)

也就是说，一个没有提交事务的 `redo log` 记录，也可能会刷盘。

> 数据修改 -> redo log buffer -> redo.file

### 日志文件组

硬盘上存储的 `redo log` 日志文件不只一个，而是以一个日志文件组的形式出现的，每个的 `redo` 日志文件大小都是一样的。

比如可以配置为一组 `4` 个文件，每个文件的大小是 `1GB`，整个 `redo log` 日志文件组可以记录 `4G` 的内容。

它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。

![image-20230529162900611](/markdown/image-20230529162900611.png)

在个日志文件组中还有两个重要的属性，分别是 `write pos、checkpoint`。

- `write pos` 是当前记录的位置，一边写一边后移。
- `checkpoint` 是当前要擦除的位置，也是往后推移。

每次刷盘 `redo log` 记录到日志文件组中，`write pos` 位置就会后移更新。

每次 `MySQL` 加载日志文件组恢复数据时，会清空加载过的 `redo log` 记录，并把 `checkpoint` 后移更新。

`write pos` 和 `checkpoint` 之间的还空着的部分可以用来写入新的 `redo log` 记录。

如果 `write pos` 追上 `checkpoint` ，表示日志文件组满了，这时候不能再写入新的 `redo log` 记录，`MySQL` 得停下来，清空一些记录，把 `checkpoint` 推进一下。（循环链表）

![redo log](/markdown/image-redologfile.png)

### redo log 小结

`redo log` 刷盘和从 `Buffer Pool` 刷盘的区别。

数据页的大小是 `16KB`，刷盘比较耗时，可能就修改了几 `Byte` 数据，没有必要将整个页面刷盘。

而且数据页刷盘是随机写，因为一个数据也对应的位置可能在磁盘文件的随机位置，性能很差。

如果是写 `redo log`，一行记录就占用很少的空间，而且是顺序写，刷盘速度很快。

所以用 `redo log` 形式记录修改内容，性能会远远超过刷数据页面的方式，这也让数据库的并发能力增强。

> 每次变更都需要先修改 Buffer Pool，然后 master 线程（同步、阻塞）以一定频率刷入磁盘。

## binlog 归档日志

`redo log` 是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 `InnoDB` 存储引擎。

而 `binlog` 是逻辑日志，记录内容是语句的原始逻辑，属于 `MySQL Server` 层。

不管用什么存储引擎，只要发生了表数据更新，都会产生 `binlog` 日志。

数据库的数据备份、主备、主主、主从都离不开 `binlog`，需要依靠 `binlog` 来同步数据，保证数据的一致性。

![image-20230529165800826](/markdown/image-20230529165800826.png)

`binlog`会记录所有涉及更新数据的逻辑操作，并且是顺序写。

### 记录格式

`binlog` 日志有三种格式，可以通过 `binlog_format` 参数指定。

- **statement**
- **row**
- **mixed**

指定 `statement`，记录的内容是 `SQL` 语句原文，比如执行一条 `update T set update_time = now() where id = 1`，记录的内容如下。

![image-20230529170202703](/markdown/image-20230529170202703.png)

同步数据时，会执行记录的 `SQL` 语句，但是有个问题，`update_time = now()` 这里会获取当前系统时间，直接执行会导致与原库的数据不一致。

为了解决这种问题，需要指定为 `row`，记录的内容不再是简单的 `SQL` 语句了，还包含操作的具体数据，记录内容如下。

![image-20230529170702610](/markdown/image-20230529170702610.png)

`MySQL` 会判断这条 `SQL` 语句是否可能引起数据不一致，如果是，就用 `row` 格式，否则就用 `statement` 格式。

### 写入时机

`binlog` 的写入时机也非常简单，事务执行过程中，先把日志写到 `binlog cache`，事务提交的时候，再把 `binlog cache` 写到 `binlog` 文件中。

因为一个事务的 `binlog` 不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为 `binlog cache`。

可以通过 `binlog_cache_size` 参数控制单个线程 binlog cache 大小，如果存储内容超过了这个参数，就要暂存到磁盘（`Swap`）。

`binlog` 日志刷盘流程如下。

![image-20230529172120404](/markdown/image-20230529172120404.png)

- `write` 是把日志写入 page cache，不是数据持久化到磁盘，所以速度比较快。
- `fsync` 超时将数据持久化到磁盘的操作。

`write` 和 `fsync` 的时机，可以由参数 `sync_binlog` 控制，默认是 `0`。

为 `0` 的时候，表示每次提交事务都只 `write`，由系统自行判断什么时候执行`fsync`。

虽然性能得到提升，但是机器宕机，`page cache` 里面的 binlog 会丢失。

为了安全起见，可以设置为`1`，表示每次提交事务都会执行 `fsync`，就如同 **redo log 日志刷盘流程** 一样。

最后还有一种折中方式，可以设置为 `N(N > 1)`，表示每次提交事务都 `write`，但累积 `N` 个事务后才 `fsync`。

在出现IO瓶颈的场景里，将 `sync_binlog` 设置成一个比较大的值，可以提升性能。

同样的，如果机器宕机，会丢失最近 `N` 个事务的 `binlog` 日志。

## 两阶段提交

`redo log`（重做日志）让 `InnoDB` 存储引擎拥有了崩溃恢复能力。

`binlog`（归档日志）保证了 `MySQL` 集群架构的数据一致性。

虽然它们都属于持久化的保证，但是侧重点不同。

在执行更新语句过程，会记录 `redo log` 与 `binlog` 两块日志，以基本的事务为单位，`redo log` 在事务执行过程中可以不断写入，而`binlog`只有在提交事务时才写入，所以 `redo log` 与 `binlog` 的写入时机不一样。

以 `update` 语句为例，假设 `id = 2` 的记录，字段 `c` 值是 `0`，把字段 `c` 值更新成 `1`，`SQL` 语句为 `update T set c = 1 where id = 2`。

假设执行过程中写完`redo log`日志后，`binlog`日志写期间发生了异常，会出现什么情况呢？

![image-20230529173603129](/markdown/image-20230529173603129.png)

由于 `binlog` 没写完就异常，这时候 `binlog` 里面没有对应的修改记录。因此，之后用 `binlog` 日志恢复数据时，就会少这一次更新，恢复出来的这一行 `c` 值是 `0`，而原库因为 `redo log `日志恢复，这一行 `c` 值是 `1`，最终数据不一致。

从数据库和备份数据库通过 `binlog` 同步数据。

![image-20230529173719124](/markdown/image-20230529173719124.png)

为了解决两份日志之间的逻辑一致问题，`InnoDB` 存储引擎使用两阶段提交方案。

原理很简单，将 `redo log` 的写入拆成了两个步骤 `prepare` 和 `commit`，这就是两阶段提交。

![image-20230529173846546](/markdown/image-20230529173846546.png)

使用两阶段提交后，写入 `binlog` 时发生异常也不会有影响，因为 `MySQL` 根据 `redo log` 日志恢复数据时，发现 `redo log` 还处于 `prepare` 阶段，并且没有对应 `binlog` 日志，就会回滚该事务。

![image-20230529173959416](/markdown/image-20230529173959416.png)

再看一个场景，`redo log`设置`commit`阶段发生异常，那会不会回滚事务呢？

![image-20230529174101634](/markdown/image-20230529174101634.png)

并不会回滚事务，它会执行上图框住的逻辑，虽然`redo log`是处于`prepare`阶段，但是能通过事务`id`找到对应的`binlog`日志，所以`MySQL`认为是完整的，就会提交事务恢复数据。

## undo log 回滚日志

在 MySQL 中，恢复机制是通过 **回滚日志（undo log）** 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 **回滚日志** 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。

`MVCC` 的实现依赖于：**隐藏字段、Read View、undo log**。在内部实现中，`InnoDB` 通过数据行的 `DB_TRX_ID` 和 `Read View` 来判断数据的可见性，如不可见，则通过数据行的 `DB_ROLL_PTR` 找到 `undo log` 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 `Read View` 之前已经提交的修改和该事务本身做的修改。

☀️详见[事务隔离级别和MVCC](https://ylzhong.top/database/1mysql/4mysqlmvcc.html)。

## 总结

MySQL InnoDB 引擎使用 **redo log(重做日志)** 保证事务的**持久性**，使用 **undo log(回滚日志)** 来保证事务的**原子性**。

`MySQL`数据库的**数据备份、主备、主主、主从**都离不开`binlog`，需要依靠`binlog`来同步数据，保证数据一致性。


