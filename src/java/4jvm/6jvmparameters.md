---
title: JVM重要参数
icon: page
category:
  - Java
tag:
  - JVM重要参数
  - 八股
---

## 堆内存相关

### 指定堆内存 `-Xms` 和 `-Xmx`

```java
-Xms<heap size>[unit]
-Xmx<heap size>[unit]
```

为 JVM 堆内存分配最大 5GB，最小 2GB 内存：

```
-Xms2G -Xmx5G
```

<!-- more -->

### 指定新生代内存（Young Generation）

一共有两种指定新生代内存大小的办法：

**1. 通过 `-XX:NewSize` 和 `-XX:MaxNewSize` 指定**

```
-XX:NewSize=256m
-XX:MaxNewSize=1024m
```

**2.通过 `-Xmn<young size>[unit]` 指定**

为新生代分配 256MB 内存：

```java
-Xmn256m
```

还可以通过 **`-XX:NewRatio=<int>`** 来设置老年代与新生代内存的比值：

老年代与新生代比值为 1:1，说明新生代占整个内存的 1/2；

```
-XX:NewRatio=1
```

### 指定永久代 / 元空间大小

从 Java 8 开始，如果我们没有指定 Metaspace 的大小，随着更多类的创建，虚拟机会耗尽所有可用的**系统内存**（永久代并不会出现这种情况）。

JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小：

```java
-XX:PermSize=N #方法区（永久代）初始大小
-XX:MaxPermSize=N #方法区（永久代）最大大小,超过这个值将会抛出 OutOfMemoryError 异常:java.lang.OutOfMemoryError: PermGen
```

JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK 1.7 就已经开始了），取而代之是元空间，**元空间使用的是本地内存**。

```java
-XX:MetaspaceSize=N #设置 Metaspace 的 FGC 阈值
-XX:MaxMetaspaceSize=N #设置 Metaspace 的最大大小
```

Metaspace 由于使用不断扩容到 `-XX:MetaspaceSize` 参数指定的量，就会发生 Full GC，且之后每次 Metaspace 扩容都会发生 Full GC。

## 垃圾收集器相关

### 垃圾回收器

JVM 具有四种类型的 GC 实现：

- 串行垃圾收集器
- 并行垃圾收集器
- CMS 垃圾收集器
- G1 垃圾收集器

可以使用以下参数声明这些实现：

```java
-XX:+UseSerialGC
-XX:+UseParallelGC
-XX:+UseParNewGC
-XX:+UseG1GC
```

### GC 日志记录

生产环境上，或者其他要测试 GC 问题的环境上，一定会配置上打印 GC 日志的参数，便于分析 GC 相关的问题。

```java
# 必选
# 打印基本 GC 信息
-XX:+PrintGCDetails
-XX:+PrintGCDateStamps
# 打印对象分布
-XX:+PrintTenuringDistribution
# 打印堆数据
-XX:+PrintHeapAtGC
# 打印Reference处理信息
# 强引用/弱引用/软引用/虚引用/finalize 相关的方法
-XX:+PrintReferenceGC
# 打印STW时间
-XX:+PrintGCApplicationStoppedTime

# 可选
# 打印safepoint信息，进入 STW 阶段之前，需要要找到一个合适的 safepoint
-XX:+PrintSafepointStatistics
-XX:PrintSafepointStatisticsCount=1

# GC日志输出的文件路径
-Xloggc:/path/to/gc-%t.log
# 开启日志文件分割
-XX:+UseGCLogFileRotation
# 最多分割几个文件，超过之后从头文件开始写
-XX:NumberOfGCLogFiles=14
# 每个文件上限大小，超过就触发分割
-XX:GCLogFileSize=50M
```

## 处理 OOM

对于大型应用程序来说，面对内存不足错误是非常常见的，这反过来会导致应用程序崩溃。这是一个非常关键的场景，很难通过复制来解决这个问题。

这就是为什么 JVM 提供了一些参数，这些参数将堆内存转储到一个物理文件中，以后可以用来查找泄漏。

```java
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=./java_pid<pid>.hprof
-XX:OnOutOfMemoryError="< cmd args >;< cmd args >"
-XX:+UseGCOverheadLimit
```

- **HeapDumpOnOutOfMemoryError** 指示 JVM 在遇到 **OutOfMemoryError** 错误时将 heap 转储到物理文件中。

- **HeapDumpPath** 表示要写入文件的路径; 可以给出任何文件名; 如果 JVM 在名称中找到一个 `<pid>` 标记，则当前进程的进程 id 将附加到文件名中，并使用 `.hprof` 格式。

- **OnOutOfMemoryError** 用于发出紧急命令，以便在内存不足的情况下执行; 应该在 `cmd args` 空间中使用适当的命令。例如，如果我们想在内存不足时重启服务器，我们可以设置参数： `-XX:OnOutOfMemoryError="shutdown -r"`。

- **UseGCOverheadLimit** 是一种策略，它限制在抛出 OutOfMemory 错误之前在 GC 中花费的 VM 时间的比例。

## 其他

`-server` ：启用“ Server Hotspot VM”; 此参数默认用于 64 位 JVM

`-XX:+UseStringDeduplication` ：*Java 8u20* 引入了这个 JVM 参数，通过创建太多相同 String 的实例来减少不必要的内存使用; 这通过将重复 String 值减少为单个全局 `char []` 数组来优化堆内存。

`-XX:+UseLWPSynchronization` ：设置基于 LWP (轻量级进程)的同步策略，而不是基于线程的同步。

``-XX:LargePageSizeInBytes ` ：设置用于 Java 堆的较大页面大小; 它采用 GB/MB/KB 的参数; 页面大小越大，我们可以更好地利用虚拟内存硬件资源; 然而，这可能会导致 PermGen 的空间大小更大，这反过来又会迫使 Java 堆空间的大小减小。

`-XX:MaxHeapFreeRatio` ：设置 GC 后, 堆空闲的最大百分比，以避免收缩。

`-XX:SurvivorRatio` ：eden / survivor 空间的比例, 例如 `-XX:SurvivorRatio=6` 设置每个 survivor 和 eden 之间的比例为 1:6。

`-XX:+UseLargePages` ：如果系统支持，则使用大页面内存; 请注意，如果使用这个 JVM 参数，OpenJDK 7 可能会崩溃。

`-XX:+UseStringCache` ：启用 String 池中可用的常用分配字符串的缓存。

`-XX:+UseCompressedStrings` ：对 String 对象使用 `byte []` 类型，该类型可以用纯 ASCII 格式表示。

`-XX:+OptimizeStringConcat` ：它尽可能优化字符串串联操作。
