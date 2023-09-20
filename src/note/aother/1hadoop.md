---
title: Hadoop知识点总结
icon: biji1
date: 2023-09-19
star: 1
category:
  - 笔记
tag:
  - 大数据
  - Hadoop
---

### MapReduce 是什么？

- MapReduce 是一个并行程序设计模型与方法（Programming Model & Methodology）。它提供了一种简便的并行程序设计方法，用 Map 和 Reduce 两个函数编程实现基本的并行计算任务，提供了抽象的操作和并行编程接口，以简单方便地完成大规模数据的编程和计算处理。

### MapReduce 详细的工作流程

1. 在客户端执行 submit() 方法之前，先会获取待读取文件的信息。
2. 将 job 提交给 yarn，这时候会带上三个信息过去。（文件的切片信息，jar，job.xml)
3. yarn 会通过切片信息去计算需要启动的 maptask 数量，然后启动 maptask。
4. maptask 会调用 InPutFormat() 方法去 HDFS 上面读取文件，InputFormat() 会再去调用 RecordRead() 方法将数据以行首字母的偏移量作为 key，一行数据作为 value 传给 mapper() 方法。
5. mapper 方法做完处理之后，将数据转移到分区方法中，对数据进行标注之后，发送到环形缓冲区。
6. 环形缓冲区的大小默认是 100M，达到 80% 将会发生溢写。
7. 在溢写之前会做一个排序动作，排序的规则是按照 key 进行字典排序，排序的手段是快速排序。
8. 溢写会产生出大量的溢写文件，会再次调用 merge() 方法，使用归并排序，默认十个溢写文件构成一个大文件。
9. 也可以对溢写文件进行一个 localReduce，也就是 combiner 的操作，但前提是 combiner 的结果不能对最终结果产生影响。
10. 等待所有的 maptask 执行完毕之后，会启动一定数量的 reducetask。
11. reducetask 会在 map 端拉取数据，数据会先加载到内存中，内存不够会写入磁盘，等待所有的数据拉去完毕之后，将这些数据再次进行一次归并操作。
12. 归并之后的文件会再进行一次分组操作，然后将数据以组为单位发送给 reduce() 方法。
13. reduce() 方法会做一些逻辑判断，最终调用 OutputFormat() 方法，OutputFormat() 会调用 RecordWrite() 方法将数据以 KV 的形式写出到 HDFS 上。

### HDFS 分布式存储工作机制

- HDFS 是一个文件存储系统，他的 meta 信息以及目录结构是存储在 NameNode 中，文件是以 block 的形式存储在 DataNode 中，通过与 NameNode 交互，可以实现读写操作。
- 读操作
  - 客户端先带着读取路径向 NameNode 发送读取请求。
  - NameNode 接收到读取请求之后，判断是否有权限，读取文件是否存在等，如果都通过，则发送给客户端部分或者全部的 DataNode 节点位置。
  - 客户端得到文件位置之后，调用 read() 方法，去读取数据。
  - 在读取之后先进行一个 checksum 的操作，去判断以下校验和是否正确，正确则读取，否则则去下一个存放 block 块的 DataNode 节点上读取。
  - 读取完成 DataNode 这次发送过来的所有 block 块之后，再去询问是否有 block 块，如果有则直接读取，没有则调用 close() 方法，将读取的所有文件合并成一个大文件。
- 写操作
  - 客户端带着路径向 NameNode 发送写请求。
  - NameNode 会判断是否有权限，写入路径的父路径是否存在，如果都通过则将请求返回给客户端。
  - 客户端会将文件进行切分，然后上传 block。
  - NameNode 会根据 DataNode 的存储空间还有机架感知原理等返回该 block 块要存储的 DataNode 的位置 ABC。
  - 客户端会去 ABC 三个 DataNode 节点上建立 pipeline A-B B-C 然后 C 建立完成之后会将结果返回给 B ，B 返回给 A，A 返回给客户端。
  - 开始往 A 写入，一次进行流水线复制。
  - 写入完成之后再去依次写入其他 block 块。
  - 都写入完成之后则将写入完成的信息返回给 NameNode。
  - NameNode 存储该文件的各个 block 块的原数据信息。

### yarn 资源调度工作机制

1. 客户端向 ResourceManager 提交作业。
2. ResourceManager 会去 NodeManager 中开启一个 container 来运行 ApplicationMaster。
3. ApplicationMaster 向 ResourceManager 注册自己。
4. 申请相应数量的 container 来运行 task 任务。
5. container 会先进行初始化操作，初始化完成 ApplicationMaster 会通知对应的 NodeManager 开启 container。
6. NodeManager 开启 container。
7. container 在运行期间会向 ApplicationMaster 汇报自己的进度，状态信息，并与其保持心跳。
8. 等待应用执行完毕，ApplicationMaster 向 ResourceManager 注销自己，并允许回收自己的资源。

### Hadoop 的组成

1. HDFS
   - 管理者 NameNode 文件元数据存储
   - 工作者 DataNode 存储具体数据
   - 辅助管理者 SecondaryNameNode 辅助 NameNode 合并文件
2. MapReduce 海量数据分析计算框架
3. Yarn
   - 管理者 ResourceManager 整个集群的资源管理者 
   - 工作者 NodeManager 单个节点的管理者

### MapperReduce 的 Shuffle 过程

- Shuffle 过程就是 mapper 之后，reduce 之前做的事情。
- mapper() 方法之后将数据发送到分区中，给数据标记好分区，将数据发送到环形缓冲区。
- 环形缓冲区的大小默认是 100M，达到 80% 会进行溢写。
- 溢写之前会进行排序，排序的规则是字典排序，使用快速排序。
- 溢写产生很多溢写文件，默认达到 10 个会进行合并，合并时采用归并排序。
- 也可以进行 container 局部聚合的操作，前提是局部聚合的结果不会对最终的结果产生影响。
- 等到所有 maptask 运行完毕，启动一定数量的 reducetask，告知 reducetask 读取数据的范围（也就是分区）。
- reducetask 发送拉去线程，去 map 端拉去数据，数据线存储到内存中，内存放不下就放入磁盘中，数据拉去完毕之后进行归并排序。
- 最后对数据进行分组，以组为单位发送到 reduce() 方法中。

### Hadoop 的垃圾回收机制

- HDFS 的回收站必须是开启的，一般设置生存时间为 7 天，超过之后就会真正删除。
- Hadoop NameNode 配置的垃圾回收器是 G1。

### mapreduce 为什么分成两个部分，而不是直接 map 或者 reduce？

- 两个不是是为了实现分布式计算，提高计算效率。
- 很多情况下是需要对整个数据进行计算，单独分成小文件虽然能提高计算效率，但是无法完成实际需求，没有实际意义。
- 添加 reduce 阶段之后，负责将多个部分计算的结果进行汇总处理，使得满足实际需求。

### map 任务和 reduce 任务在哪里运行？

- 将 MR 程序送入到 Yarn 上。
- 通过 container 运行。

### Hadoop 切片原则

- 按照块大小进行切分，默认是 128M。

### Yarn 的核心组件和调度器
- 三个核心组件
  - ResourceManager：负责整个集群的资源分配。
  - NodeManager：每个节点上的资源管理器。
  - ApplicationMaster：单个应用程序的管理者。
- 三种调度器
  - FIFO：先提交的任务就先分配资源。
  - CapcityScheduler：以队列为单位划分资源。会给每个队列配置最小保证资源和最大可用资源。最小配置资源保证队列一定能拿到这么多资源，有空闲可共享给其他队列使用；最大可用资源限制队列最多能使用的资源，防止过度消耗。
  - FairScheduler：Fair Scheduler 也是一个多用户调度器，它同样添加了多层级别的资源限制条件以更好地让多用户共享一个 Hadoop 集群，比如队列资源限制、用户应用程序数目限制等。在 Fair 调度器中，我们不需要预先占用一定的系统资源，Fair 调度器会为所有运行的 job 动态的调整系统资源。

### fsimage 和 editlog
- fsimage 保存了最新的元数据检查点，在 HDFS 启动时加载 fsimage 的信息，包含了整个 HDFS 文件系统的所有目录和文件的信息。
对于文件来说包括了数据块描述信息、修改时间、访问时间等；对于目录来说包括修改时间、访问权限控制信息（目录所属用户，所在组）等。
- editlog 主要是在 NameNode 已经启动情况下对 HDFS 进行的各种更新操作进行记录，HDFS 客户端执行所有的写操作都会被记录到 editlog 中。

