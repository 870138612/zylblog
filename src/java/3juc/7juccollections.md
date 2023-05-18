---
title: JUC常见并发容器
icon: page
category:
  - Java
tags:
  - JUC常见并发容器
  - 八股
---

JDK 提供的这些容器大部分在 `java.util.concurrent` 包中。

- **`ConcurrentHashMap`** : 线程安全的 `HashMap`
- **`CopyOnWriteArrayList`** : 线程安全的 `List`，在读多写少的场合性能非常好，远远好于 `Vector`。
- **`ConcurrentLinkedQueue`** : 高效的并发队列，使用链表实现。可以看做一个线程安全的 `LinkedList`，这是一个非阻塞队列。
- **`BlockingQueue`** : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。
- **`ConcurrentSkipListMap`** : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。

<!-- more -->

## BlockingQueue

`BlockingQueue` （阻塞队列）是一个接口，继承自 `Queue`。`BlockingQueue`阻塞的原因是其支持当队列没有元素时一直阻塞，直到有有元素；还支持如果队列已满，一直等到队列可以放入新元素时再放入。

`BlockingQueue` 常用于生产者-消费者模型中，生产者线程会向队列中添加数据，而消费者线程会从队列中取出数据进行处理。

### ArrayBlockingQueue

`ArrayBlockingQueue` 是 `BlockingQueue` 接口的有界队列实现类，底层采用数组来实现。`ArrayBlockingQueue` 一旦创建，容量不能改变。其并发控制采用可重入锁 `ReentrantLock` ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。默认是不公平实现的。.

### LinkedBlockingQueue

`LinkedBlockingQueue` 底层基于**单向链表**实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 `ArrayBlockingQueue` 相比起来具有更高的吞吐量，为了防止 `LinkedBlockingQueue` 容量迅速增，损耗大量内存。通常在创建 `LinkedBlockingQueue` 对象时，会指定其大小，如果未指定，容量等于 `Integer.MAX_VALUE`。

### PriorityBlockingQueue

`PriorityBlockingQueue` 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 `compareTo()` 方法来指定元素排序规则，或者初始化时通过构造器参数 `Comparator` 来指定排序规则。

简单地说，它就是 `PriorityQueue` 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 `ClassCastException` 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。

## ConcurrentSkipListMap

跳表的本质是同时维护了多个链表，并且链表是分层的，最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。

![202517](https://blog-1312634242.cos.ap-shanghai.myqcloud.com/markdown/202517.jpg)

跳表内的所有链表的元素都是**排序**的。

查找时，可以从顶级链表开始找。一旦发现被查找的元素处于**两个元素值的区间**，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。

![202517](https://blog-1312634242.cos.ap-shanghai.myqcloud.com/markdown/202517.jpg)

查找18原本要遍历18次，现在只需要7次。
