---
title: Redis集群
icon: page
category:
  - 数据库
tag:
  - Redis
  - 八股
  - Redis
---

## 主从集群

多个Redis节点实现主从集群，主节点master用来写，从节点用来读。

![image-20230612170144401](/markdown/image-20230612170144401-1686563235858-1.png)

<!-- more -->

**开启主从**：通过在redis.conf中添加

```sh
slaveof <master ip><masterport>  //关联从节点
```

## 数据同步原理

### 全量同步

由于第一次同步需要生成RDB文件，之后将RDB文件发送给从节点，因此叫做全量同步，较为消耗性能。

记录RDB期间生成的新命令都会写入内存缓冲区`repl_baklog`中，最后再发送给从节点。

![image-20230612171754994](/markdown/image-20230612171754994-1686563235859-2.png)

::: info 如何判断是不是第一次主从同步？

- `Replication Id`：简称**replid**，是数据集的标记，id一致表示是同一个数据集。每一个master都有唯一的**replid**，slave则会继承master节点的**replid**。
- `offset`：偏移量，随着记录在`repl_baklog`中的数据增多而逐渐增大，slave完成同步时也会记录当前同步的`offset`。如果slave的`offset`小于master的`offset`，说明slave数据落后于master，需要更新。类似于版本号。

因此slave做数据同步，必须向master声明自己的`Replication Id`和`offset`，master才能判断需要更新哪些数据。

`Replication Id`不同则表示是第一次主从同步，`offset`落后于master则表示需要更新。

:::

### 增量同步

![image-20230612172041553](/markdown/image-20230612172041553-1686563235859-5.png)

增量同步用的命令来自`repl_baklog`，存储有上限，如果没有空间记录命令，则会覆盖之前的数据，因此slave断开太久就会导致没有备份的数据被覆盖，则无法基于`repl_baklog`做增量同步，只能再次全量同步。

### 优化主从集群

- 在master中配置`repl-diskless-sync yes `启用无磁盘复制，避免全量更新时的磁盘IO。（直接将数据发送给slave，不再写入磁盘）
- Redis单节点的内存占用不要太大，可以减少RDB导致的过多IO。
- 适当提高`repl_baklog`大小，发现slave宕机之后尽快实现故障恢复，尽可能避免全量同步。
- 限制一个master节点上的slave节点，如果实在太多，可以采用主-从-从链式结构，减少master压力。

::: info 总结

**全量同步和增量同步的区别？**

- 全量同步：master将完整的内存数据生成RDB，发送给slave。后续命令保存至`repl_baklog`，逐个发送给slave。
- 增量同步：slave提交自己的`offset`到master，master获取`repl_baklog`中从`offset`之后的命令给slave。

**什么时候执行全量同步？**

- slave节点第一次连接时。
- slave节点断开太久，导致`repl_baklog`中的`offset`已经被覆盖。

**什么时候执行增量同步？**

- slave节点断开又恢复，并且在`repl_baklog`中能找到`offset`时。

:::

## Redis哨兵Sentinel

### 作用

- **监控**：不断监控slave和master是否正常工作。
- **自动故障恢复**：如果master故障，sentinel会将一个slaver提升为master，当故障实例恢复之后也是以新的master为主节点。
- **通知**：充当Redis客户端的服务发现来源，当集群发生故障转移时，会将最新的消息发送给Redis客户端。

![image-20230612174320037](/markdown/image-20230612174320037-1686563235859-3.png)

### 心跳机制

- 每秒向集群内的每一个实例发送ping命令。
- 如果未在规定时间内响应，则认为实例下线。
- 超过一半的sentinel都认为这个实例**主观下线**，则该实例**客观下线**。`quorum`值最好超过sentinel实例数量的一半。

![image-20230612174507826](/markdown/image-20230612174507826-1686563235859-4.png)

### 选举新的master

一旦发现master故障，就需要选举新的slave作为master，依据：

- 首先判断slave节点与master断开的时间长短，如果超过指定值（`down-after-milliseconds`*10)则会排除该slave节点。
- 然后判断slave节点的`slave-priority`值，越小优先级越高，0表示永远不会参加选举。
- 如果`slave-priority`相同，则判断slave节点的`offset`，越大说明数据越新，优先级越高。
- 最后判断slave节点运行id的大小，越小则优先级越高（id越小说明越先被创建，存活时间越长）。

### 如何实现故障转移？

选举了新的slave节点之后，故障转移步骤如下：

- sentinel给备选slave1节点发送`slaveof no one`命令，表示不再做从节点，成为master节点。
- sentinel给所有其他slave发送配置从节点命令`slaveof <master ip><masterport>`，让其余节点变成这个节点的从节点，开始从新的master节点上同步数据。
- 最后sentinel将故障节点标记为slave，故障恢复之后此节点成为slave1的从节点。

## Redis分片集群

主从解决了高并发读，高可用的问题，但是存在：海量数据存储问题，高并发写问题。

### 使用分片集群

使用分片集群解决海量存储问题和高并发写问题：

- 集群中有多个master，每一个master保存不同的数据。
- 每一个master都可以有多个slave节点。
- master之间通过ping检测彼此健康状况。
- 客户端请求可以访问集群任意节点，最终都会被转发到正确的节点上。
- 从节点提供slot数据备份以及故障转移，保证可用性，主节点宕机可以从从节点中产生新的主节点。

创建命令

```sh
redis-cli --cluster create --cluster-replicas 1 <ip：端口> <ip：端口> <ip：端口> <ip：端口>
```

`--cluster-replicas 1`表示集群中每个master的副本个数为1，例如写1，则表示一个master对应一个slave，则4个实例中有2个是master，2个是slave。其中写在前面的2个实例是master。

![img.png](/markdown/20230703001.png)

### 散列插槽

- redis会把每一个master节点映射到0~16383 的插槽上。
- **数据key不是与节点绑定而是与插槽绑定**，redis会根据key的有效部分计算插槽。

- 固定数据保存在同一个节点。
  - 将商品类型key 加上大括号，就是标识有效部分，这个部分会计算hash值转化为插槽，同类的商品就能对应到同一个节点上。

::: info 为什么是 16384 个插槽?

2^14^=16384、2^16^=65536。

如果槽位是65536个，发送心跳信息的消息头是65536/8/1024 = 8k。

如果槽位是16384个，发送心跳信息的消息头是16384/8/1024 = 2k。

因为Redis每秒都会发送一定数量的心跳包，如果消息头是8k，未免有些太大了，浪费网络资源。

Redis的集群主节点数量一般不会超过1000个。集群中节点越多，心跳包的消息体内的数据就越多，如果节点过多，也会造成网络拥堵。对于节点数在1000个以内的Redis Cluster，16384个槽位完全够用。

Redis主节点的哈希槽信息是通过**bitmap**存储的，在传输过程中，会对**bitmap**进行压缩，**bitmap的填充率越低，压缩率越高。**

**bitmap 填充率 = slots/N (N表示节点数)。**

也就是说slots越小，填充率就会越小，压缩率就会越高，传输效率就会越高。

:::

### 故障转移

Redis分片集群具备自动的主从切换，不需要使用哨兵。

**手动故障转移，数据迁移**

利用`cluster failover`命令让集群中的某个master宕机，切换到执行`cluster failover`的slave节点，实现无感知的数据迁移。

- 支持三种模式：

  - **缺省**：默认流程，slave节点拒绝任何客户端请求，再进行主从同步，标记自己为master，广播转移结果。

  - **force**：省略了对offset一致性校验，省略步骤2、3。

  - **takeover**：忽略数据一致性，忽略其余master意见，直接标记自己为master并广播结果，直接从5开始执行。

![image-20230612182613067](/markdown/image-20230612182613067.png)

- 操作步骤：

  - 利用redis-cli连接需要变成master的节点；

  - 执行`cluster failover`命令。

