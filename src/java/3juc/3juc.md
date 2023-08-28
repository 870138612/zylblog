---
title: 并发编程三
icon: page
category:
  - Java
tag:
  - 并发编程
  
---

## ThreadLocal

### ThreadLocal 有什么用？

`ThreadLocal` 类主要解决的就是让每个线程绑定自己的值，可以将 `ThreadLocal` 类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。

如果创建了一个 `ThreadLocal` 变量，那么访问这个变量的每一个线程都有这个变量的副本。可以使用 `get()` 和 `set()` 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。

<!-- more -->

### ThreadLocal 原理

`Thread` 类源码：

```java
public class Thread implements Runnable {
    //与此线程有关的ThreadLocal值。由ThreadLocal类维护
    ThreadLocal.ThreadLocalMap threadLocals = null;

    //与此线程有关的InheritableThreadLocal值，由InheritableThreadLocal类维护。
    ThreadLocal.ThreadLocalMap inheritableThreadLocals = null;
    //......
}
```

变量是放在了当前线程的 `ThreadLocalMap` 中，并不是存在 `ThreadLocal` 中，`ThreadLocal` 可以理解为 `ThreadLocalMap` 的封装。

`ThreadLocal` 类的 `set()` 方法：

```java
public void set(T value) {
    //获取当前请求的线程
    Thread t = Thread.currentThread();
    //取出 Thread 类内部的 threadLocals 变量(哈希表结构)
    ThreadLocalMap map = getMap(t);
    if (map != null)
        // 将需要存储的值放入到这个哈希表中
        map.set(this, value);
    else
        createMap(t, value);
}
ThreadLocalMap getMap(Thread t) {
    return t.threadLocals;
}
```

每个 `Thread` 中都具备一个 `ThreadLocalMap`，**而 `ThreadLocalMap` 存储以 `ThreadLocal` 为 key，Object 对象为 value 的键值对**（JDK 1.8）。

`ThreadLocalMap` 是 `ThreadLocal` 的静态内部类。

![17195626](/markdown/image-20230616174109050.png)

### ThreadLocal 内存泄露

`ThreadLocalMap` 中使用的 key 为 `ThreadLocal` 的**弱引用**，而 value 是**强引用**。所以，如果 `ThreadLocal` 没有被外部强引用的情况下，在垃圾回收的时候，key 会被清理掉，而 value 不会被清理掉。

这样一来，`ThreadLocalMap` 中就会出现 key 为 null 的 Entry。假如不做任何措施的话，value 永远无法被 GC 回收，这个时候就可能会产生内存泄露。`ThreadLocalMap` 实现中已经考虑了这种情况，在调用 `set()`、`get()`、`remove()` 
方法的时候，会清理掉 key 为 null 的记录，建议在每次操作 `ThreaLocalMap` 的时候都调用一次 `remove()` 方法。

> 建议在请求第一次使用 `ThreadLocal` 的时候调用 `remove()` 方法，防止线程复用导致 `ThreadLocalMap` 中存储的旧数据被错误的使用。

## 线程池

### 什么是线程池？

线程池是管理一系列线程的资源池。当有任务要处理时，直接从线程池中获取线程来处理，处理完之后线程并不会立即被销毁，而是等待下一个任务。

### 为什么要用线程池？

池化技术是为了减少每次获取资源的消耗，提高资源利用率。

使用线程池的好处：

- 降低资源消耗；
- 提高响应速度；
- 提高线程的可管理性。

### 如何创建线程池？

- 通过 `ThreadPoolExecutor` 构造函数来创建；
- 通过 `Executor` 框架的工具类 `Executors` 来创建。

不同类型的 `ThreadPoolExecutor`:

- **`FixedThreadPool`**：该方法返回一个固定线程数量的线程池。该线程池中的线程数量始终不变。当有一个新的任务提交时，线程池中若有空闲线程，则立即执行。若没有，则新的任务会被暂存在一个任务队列中，待有线程空闲时，便处理在任务队列中的任务。**核心线程数为 n，最大线程数为 n**。

- **`SingleThreadExecutor`**： 该方法返回一个只有一个线程的线程池。若多余一个任务被提交到该线程池，任务会被保存在一个任务队列中，待线程空闲，按先入先出的顺序执行队列中的任务。**核心线程数为 1，最大线程数为 1。**

- **`CachedThreadPool`**： 该方法返回一个可根据实际情况调整线程数量的线程池。线程池的线程数量不确定，但若有空闲线程可以复用，则会优先使用可复用的线程。若所有线程均在工作，又有新的任务提交，则会创建新的线程处理任务。所有线程在当前任务执行完毕后，将返回线程池进行复用。**核心线程数为 0，最大线程数为 `Integer.MAX_VALUE`**。

- **`ScheduledThreadPool`**：该返回一个用来在给定的延迟后运行任务或者定期执行任务的线程池。**核心线程数为 n，最大线程数为`Integer.MAX_VALUE`**。


| ThreadPoolExecutor     | corePoolSize |  maximumPoolSize  |            任务队列            | 可创建的最大线程数 |
| ---------------------- | :----------: | :---------------: |:--------------------------:| :----------------: |
| `FixedThreadPool`      |      n       |         n         | `LinkedBlockingQueue`<br/>无界队列  |         n          |
| `SingleThreadExecutor` |      1       |         1         | `LinkedBlockingQueue`<br/>无界队列  |         1          |
| `CachedThreadPool`     |      0       | Integer.MAX_VALUE |   `SynchronousQueue`<br/>同步队列   | Integer.MAX_VALUE  |
| `ScheduledThreadPool`  |      n       | Integer.MAX_VALUE |  `DelayedWorkQueue`<br/>延迟阻塞队列  |         n          |

::: warning

**最大线程数**是线程池参数，与**可创建的最大线程数**不是一个意思。

:::

### 线程池的主要参数

```java
int corePoolSize;//线程池的核心线程数量
int maximumPoolSize;//线程池的最大线程数
long keepAliveTime;//当线程数大于核心线程数时，多余的空闲线程存活的最长时间
TimeUnit unit;//时间单位
BlockingQueue<Runnable> workQueue;//任务队列
ThreadFactory threadFactory;//线程工厂
RejectedExecutionHandler handler;//拒绝策略
```

**`ThreadPoolExecutor` 3 个最重要的参数：**

- **`corePoolSize`**： 任务队列未达到队列容量时，最大可以同时运行的线程数量。
- **`maximumPoolSize`**：任务队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数。
- **`workQueue`**：新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。

`ThreadPoolExecutor` 其他常见参数 :

- **`keepAliveTime`**：线程池中的线程数量大于 `corePoolSize` 的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，直到等待的时间超过了 `keepAliveTime` 才会被回收销毁；
- **`unit`**：`keepAliveTime` 参数的时间单位。
- **`threadFactory`**：executor 创建新线程的时候会用到。
- **`handler`**：饱和策略。

### 线程池的饱和策略有哪些？

如果当前同时运行的线程数量达到最大线程数量并且队列也已经被放满了任务时，新来的任务将会被：

- **`ThreadPoolExecutor.AbortPolicy`**：抛出 `RejectedExecutionException` 来拒绝新任务的处理。

- **`ThreadPoolExecutor.CallerRunsPolicy`**：调用执行自己的线程运行任务，也就是直接在调用 `execute` 方法的线程中运行（`run` 方法）被拒绝的任务，如果执行程序已关闭，则会丢弃该任务。因此这种策略会降低对于新任务提交速度，影响程序的整体性能。如果应用程序可以承受此延迟并且要求任何一个任务请求都要被执行的话，以选择这个策略。

- **`ThreadPoolExecutor.DiscardPolicy`**：不处理新任务，直接丢弃掉。

- **`ThreadPoolExecutor.DiscardOldestPolicy`**： 此策略将丢弃最早的未处理的任务请求。

### 线程池中常用的阻塞队列有哪些？

新任务到来的时候，如果核心线程已经满了，就会放入到阻塞队列中。

常见的阻塞队列：

- 容量为 `Integer.MAX_VALUE` 的 `LinkedBlockingQueue`（无界队列）：`FixedThreadPool` 和 `SingleThreadExector` 。由于队列永远不会被放满，因此 **`FixedThreadPool` 和 `SingleThreadExector` 最多只能创建核心线程数的线程**。

- `SynchronousQueue`（同步队列）：`CachedThreadPool` 。`SynchronousQueue` 没有容量，不存储元素，目的是保证对于提交的任务，如果有空闲线程，则使用空闲线程来处理；否则新建一个线程来处理任务。也就是说 **`CachedThreadPool` 的最大线程数是 `Integer.
  MAX_VALUE`**，可以理解为线程数是可以无限扩展的，可能会创建大量线程，从而导致 OOM。

- `DelayedWorkQueue`（延迟阻塞队列）：`ScheduledThreadPool` 和 `SingleThreadScheduledExecutor`。`DelayedWorkQueue` 
  的内部元素并不是按照放入的时间排序，而是会按照延迟的时间长短对任务进行排序，内部采用的是“堆”的数据结构，可以保证每次出队的任务都是当前队列中执行时间最靠前的。`DelayedWorkQueue` 添加元素满了之后会自动扩容原来容量的 1/2，即永远不会阻塞，最大扩容可达 `Integer.MAX_VALUE`，可以看做是一个放不满的队列，所以 
  **`ScheduledThreadPool` 最多只能创建核心线程数的线程**。

总结：只有 `SynchronousQueue` 任务队列不放任务，因此直接创建线程，能创建的线程数就是最大线程数，其他几种队列都可以看做不会塞满，因此最多只能创建核心线程数的线程。

### 线程池处理任务的流程了解吗？

- 如果当前运行的线程数小于核心线程数，那么就会新建一个线程来执行任务。

- 如果当前运行的线程数等于或大于核心线程数，但是小于最大线程数，那么就把该任务放入到任务队列里等待执行。

- 如果向任务队列投放任务失败（任务队列已经满了），但是当前运行的线程数是小于最大线程数的，就新建一个线程来执行任务。

- 如果当前运行的线程数已经等同于最大线程数了，新建线程将会使当前运行的线程超出最大线程数，那么当前任务会被拒绝，饱和策略会调用 `RejectedExecutionHandler.rejectedExecution()` 方法。

### 如何设定线程池的大小？

**CPU 密集型任务（N + 1）**：N 表示 CPU 核心数，比 N 多 1 是为了处理线程偶然发生的缺页中断，或者是其他原因导致任务暂停带来的影响。

**I/O 密集型任务（2N）**：系统大部分时间用来 IO 交互，而在处理 IO 的时候不会占用 CPU 资源，这时可将 CPU 资源交给其他任务，因此创建 N + N 个核心线程。

## Future

### Future 类有什么用？

`Future` 类是异步思想的典型运用，主要用在一些需要执行耗时任务的场景，避免程序一直原地等待耗时任务执行完成，执行效率太低。

**简单理解**：有一个任务，提交给了 `Future` 来处理。任务执行期间自己可以去做任何想做的事情。并且，在这期间还可以取消任务以及获取任务的执行状态。一段时间之后，可以从 `Future` 那里直接取出任务执行结果。

### Callable 和 Future 有什么关系？

`FutureTask` 提供了 `Future` 接口的基本实现，常用来封装 `Callable` 和 `Runnable`，具有取消任务、查看任务是否执行完成以及获取任务执行结果的方法。`ExecutorService.submit()` 方法返回的其实就是 `Future` 的实现类 `FutureTask`。

`FutureTask` 有两个构造函数，可传入 `Callable` 或者 `Runnable` 对象。实际上，传入 `Runnable` 对象也会在方法内部转换为 `Callable` 对象。

:::tabs 

@tab:active 传入Callable

```java
FutureTask<Object> callableTask = new FutureTask<>(new Callable<Object>() {
    @Override
    public Object call() throws Exception {
        System.out.println("Callable对象");
        return "result";
    }
});
```

@tab 传入Runnable

```java
FutureTask<String> task = new FutureTask<>(new Runnable() {
    @Override
    public void run() {
        System.out.println("Runnable对象");
    }
}, "result");
```

:::

`FutureTask` 相当于对 `Callable` 进行了封装，管理着任务执行的情况，存储了 `Callable` 的 `call` 方法的任务执行结果。

### CompletableFuture 类有什么用？

`Future` 在实际使用过程中存在一些局限性比如不支持异步任务的编排组合、获取计算结果的 `get()` 方法为阻塞调用。

Java 8 才被引入 `CompletableFuture` 类可以解决 `Future` 的这些缺陷。`CompletableFuture` 除了提供了更为好用和强大的 `Future` 特性之外，还提供了函数式编程、**异步任务编排组合**（可以将多个异步任务串联起来，组成一个完整的链式调用）等能力。该类创建任务时需要添加一个任务，和用来执行任务的线程池。

```java
CompletableFuture<SkuInfoEntity> future1 = CompletableFuture.supplyAsync(() -> {
    //sku基本信息的获取  pms_sku_info
    SkuInfoEntity info = this.getById(skuId);
    skuItemVo.setInfo(info);
    return info;
}, executor);
CompletableFuture<SkuInfoEntity> future2 = future1.thenAcceptAsync(() -> {
    //业务代码2，需要future1完成之后才能执行
}, executor);
CompletableFuture<SkuInfoEntity> future3 = CompletableFuture.supplyAsync(() -> {
    //业务代码
}, executor);
CompletableFuture<SkuInfoEntity> future4 = CompletableFuture.supplyAsync(() -> {
    //业务代码
}, executor);
//多个任务等待异步完成
CompletableFuture.allOf(future1,future2,future3,future4).get();
```

