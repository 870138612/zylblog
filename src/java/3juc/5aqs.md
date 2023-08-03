---
title: AQS抽象队列同步器
icon: page
category:
  - Java
tag:
  - AQS抽象队列同步器
  - 八股
  - 并发编程
---

AQS的全称为 `AbstractQueuedSynchronizer` ，翻译过来的意思就是抽象队列同步器。这个类在 `java.util.concurrent.locks` 包下面。

<!-- more -->

AQS就是一个抽象类，主要用来构建锁和同步器。

比如 `ReentrantLock`，`Semaphore`，其他的诸如 `ReentrantReadWriteLock`，`SynchronousQueue`等等皆是基于AQS实现的。

## AQS 原理

### AQS 核心思想

AQS的核心思想是如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并将共享资源的状态设置为锁定状态。如果资源被占用，则需要一套线程阻塞等待以及被唤醒分配的机制，这个机制AQS是基于**CLH**锁实现的。

CLH锁是对自旋锁的一种改进，是一个虚拟的双向队列（虚拟的双向队列即不存在队列实例，仅存在结点之间的关联关系），暂时获取不到锁的线程将被加入到该队列中。AQS将每条请求共享资源的线程封装成一个CLH队列锁的一个节点（Node）来实现锁的分配。在CLH队列锁中，一个节点表示一个线程，它保存着线程的引用（thread）、 
当前节点在队列中的状态（waitStatus）、前驱节点（prev）、后继节点（next）。

CLH锁的结构如下：

![0518153127](/markdown/0518153127.jpg)

AQS的核心原理图如下：

![518153216](/markdown/518153216.jpg)

**AQS使用 `int` 成员变量 `state` 表示同步状态，通过内置的线程等待队列来完成获取资源线程的排队工作。**

`state` 变量由 `volatile` 修饰，用于展示当前临界资源的获锁情况，保证可见性和有序性。

### AQS 资源共享方式

AQS定义两种资源共享方式：`Exclusive`（独占，只有一个线程能执行，如`ReentrantLock`）和`Share`（共享，多个线程可同时执行，如 `Semaphore` / `CountDownLatch`）。

## Semaphore（信号量）

`synchronized` 和 `ReentrantLock` 都是一次只允许一个线程访问某个资源，而 `Semaphore`（信号量）可以用来控制同时访问特定资源的线程数量。

Semaphore的使用简单，假设有N(N>5)个线程来获取 `Semaphore` 中的共享资源，下面的代码表示同一时刻N个线程中只有5个线程能获取到共享资源，其他线程都会阻塞，只有获取到共享资源的线程才能执行。等到有线程释放了共享资源，其他阻塞的线程才能获取到。

```java
final Semaphore semaphore = new Semaphore(5);
// 获取1个许可，相当于P操作
semaphore.acquire();
// 释放1个许可，相当于V操作
semaphore.release();
```

`Semaphore` 有两种模式：

- **公平模式**：调用 `acquire()` 方法的顺序就是获取许可证的顺序，遵循FIFO；
- **非公平模式**：抢占式的，默认模式。

**原理：**

`Semaphore` 是共享锁的一种实现，它默认构造AQS的 `state` 值为 `permits`，可以将 `permits` 的值理解为许可证的数量，只有拿到许可证的线程才能执行。

- **P操作**：调用 `semaphore.acquire()`，线程尝试获取许可证，如果 `state > 0` 的话，则表示可以获取成功。如果获取成功的话，使用CAS操作去修改`state`的值 `state=state-1`。如果 `state <= 0` 的话，则表示许可证数量不足。此时会创建一个Node节点加入阻塞队列，挂起当前线程。

- **V操作**：调用`semaphore.release()` ，线程尝试释放许可证，并使用CAS操作去修改 `state` 的值 `state = state + 1`。释放许可证成功之后，同时会唤醒同步队列中的一个线程。被唤醒的线程会重新尝试去修改 `state` 的值 `state = state - 1`，如果 `state > 0` 则获取令牌成功，否则重新进入阻塞队列，挂起线程。

除了 `acquire()` 方法之外，另一个比较常用的与之对应的方法是 `tryAcquire()` 方法，该方法如果获取不到许可就立即返回false。

## CountDownLatch（倒计时器）

`CountDownLatch` 允许 `count` 个线程阻塞在一个地方，直至所有线程的任务都执行完毕。

`CountDownLatch` 是一次性的，计数器的值只能在构造方法中初始化一次，之后没有任何机制再次对其设置值，当 `CountDownLatch` 使用完毕后，它不能再次被使用。

`CountDownLatch` 是共享锁的一种实现，它默认构造AQS的 `state` 值为 `count`。当线程使用 `countDown()` 方法时，其实使用了 `tryReleaseShared` 方法以CAS的操作来减少 `state`,直至 `state` 为0。当调用 `await()` 方法的时候，如果 `state` 不为 
0，那就证明任务还没有执行完毕，`await()` 方法就会一直阻塞。然后 `CountDownLatch` 会自旋CAS判断 `state == 0`，如果 `state == 0` 就会释放所有等待的线程，`await()` 方法之后的语句得到执行。

**两种典型用法**

1. 等待n个线程完成任务之后，主线程继续工作。

```java
CountDownLatch countDownLatch = new CountDownLatch(2);
子线程1：
    //业务代码
    countDownLatch.countDown();//将state值-1
子线程2：
    //业务代码
    countDownLatch.countDown();//将state值-1
----
主线程：countDownLatch.await();//等到state值为0的时候才不会被阻塞，等待两个线程执行完成
```

2. 等待n个线程准备，在执行任务前先`countDownLatch.awit()`，然后主线程调用`countDown()`计数值变0，n个线程同时被唤醒。

```java
子线程1：countDownLatch.await();//等待state值变为0
//业务代码
子线程2：countDownLatch.await();
//业务代码
----
主线程：countDownLatch.countDown();//将state值变为0，类似信号枪响
```

## CyclicBarrier（循环栅栏）

`CyclicBarrier` 内部通过一个 `count` 变量作为计数器，`count` 的初始值为 `parties` 属性的初始化值，每当一个线程到了栅栏，就将计数器减1，并将自身阻塞。如果count值为0了，表示最后一个线程到达栅栏，此时才会将栅栏放开，让所有线程继续执行下去。

使用 `await()` 方法告诉 `CyclicBarrier` 已经到达了屏障，然后当前线程被阻塞。当 `count` 值为0则会将被阻塞的线程唤醒。





























