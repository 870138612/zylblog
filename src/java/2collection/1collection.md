---
title: Java集合一
icon: page
category:
  - Java
tag:
  - Java集合
  - 八股
---

Java集合由两大接口派生而来，分别是用来存放单一元素的 `Collection` 和用来存放键值对的 `Map` 接口。对于 `Collection` 接口有三个子接口，分别是 `List`、`Set`、`Queue`。

<!-- more -->

### 说说 List，Set，Queue，Map 四者的区别？

- `List` （顺序存储）存储的元素是有序的，可以重复；
- `Set` （独一无二）存储的元素无序，不可重复；
- `Queue` （排队）按特定的排队规则确定元素先后顺序，元素是有序的，可重复的；
- `Map` （用 key 搜索）使用键值对存储，key 是无序的，不可重复的，value 是无序的，可重复的。

### 集合框架底层数据结构

**List**

- `ArrayList`：`Object[]` 数组；
- `Vector`：`Object[]` 数组；
- `LinkedList`：双向链表（JDK 1.6 之前为循环链表，JDK 1.7 取消）。

**Set**

- `HashSet`（无序，唯一）：基于 `HashMap` 实现，底层使用 `HashMap` 保存数据；
- `LinkedHashMap` ：`LinkedHashSet` 是 `HashSet` 子类，内部都是通过 `LinkedHashMap` 实现；
- `TreeSet`（有序，唯一）：红黑树（自平衡的排序二叉树）。

**Queue**

- `PriorityQueue`：`Object[]` 数组来实现二叉堆；
- `ArrayQueue`：`Object[]` 数组 + 双指针。

**Map**

- `HashMap` ：JDK 1.8 之前 `HashMap` 由数组 + 链表组成的，数组是 `HashMap` 的主体，链表则是主要为了解决哈希冲突而存在。JDK 1.8 以后由数组 + 链表/红黑树组成，当链表长度大于阈值（默认为 8），数组长度大于等于 64 的时候会进行树化，转化为红黑树加快查找。
- `LinkedHashMap` ：`LinkedHashMap` 继承自 `HashMap` ，底层是数组 + 链表/红黑树。`LinkedHashMap` 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。
- `Hashtable` ：数组 + 链表组成的，数组是 `Hashtable` 的主体，链表则是主要为了解决哈希冲突而存在。

## List

### 说说 ArrayList

- `ArrayList` 存储元素的特点是顺序，可重复；
- `ArrayList` 会根据实际存储的元素动态扩容或者缩容；
- `ArrayList` 只能存储对象，不能存储基本类型，需要使用包装类；
- `ArrayList` 支持插入、删除、遍历等操作；
- `ArrayList` 能插入 `null` ；
- 超过容量之后触发扩容；
- 扩容后大小为 `int newCapacity = oldCapacity + (oldCapacity >> 1);` ;
- JDK 1.8 以无参数构造方法创建 `ArrayList` 时，实际上初始化赋值的是一个空数组。当真正对数组进行添加元素操作时，才真正分配容量。即向数组中添加第一个元素时，数组容量扩为 10。
- 在多线程下插入元素会出现数组越界的情况，插入操作是 `elementData[size++] = e`，如果两个线程都在数组的最后一个位置插入，则当中一个操作就会出现数组越界，因为检查数组是否已经满了和插入操作不是原子操作。
### ArryList 和 Vector 区别？

- `ArrayList` 是 `List` 的主要实现类，底层用 `Object[]` 存储，适用于频繁查找的场景，线程不安全；
- `Vector` 是 `List` 的古老实现类，底层用 `Object[]` 存储，线程安全。

### ArrayList 与 LinkedList 区别？

- 首先两者都不是线程安全的实现；
- `ArrayList` 底层使用 `Object[]` 存储元素，`LinkedList` 底层使用双向链表存储数据（JDK 1.6 之前为循环链表，1.7 取消循环）；
- `ArrayList` 实现了 `RandomAccess` 接口，可以随机访问，`LinkedList` 不支持随机访问；
- 由于 `LinkedList` 内部包含前驱和后继，占用内存比 `ArrayList` 大。

## Set

### 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同

- `HashSet` 、`LinkedHashSet` 和 `TreeSet` 都是 `Set` 接口的实现类，都能保证元素唯一，并且都不是线程安全的。
- `HashSet` 底层是哈希表， `LinkedHashSet` 底层是链表和哈希表，元素的插入满足队列特性，`TreeSet` 底层是红黑树，元素是有序的。
- 根据应用场景不同，对元素顺序无要求则用 `HashSet` ，有要求使用 `TreeSet` ，需要满足 FIFO 使用 `LinkedHashSet` 。

## Queue

队列满足 FIFO 性质，`Queue` 因为容量问题导致操作失败后的处理方式不同分为两类方法；

|   `Queue`    | 抛出异常  | 返回特殊值 |
|:------------:|:---------:|:----------:|
|   插入队尾   | add(E e)  | offer(E e) |
|   删除队首   | remove()  |   poll()   |
| 查询队首元素 | element() |   peek()   |

 `Deque` 是双端队列，在队列两端都能插入和删除元素，同样根据返回值不同分为两类方法；

|   `Deque`    |   抛出异常    |   返回特殊值    |
|:------------:|:-------------:|:---------------:|
|   插入队尾   | addFirst(E e) | offerFirst(E e) |
|   插入队首   | addLast(E e)  | offerLast(E e)  |
|   删除队首   | removeFirst() |   pollFirst()   |
|   删除队尾   | removeLast()  |   pollLast()    |
| 查询队首元素 |  getFirst()   |   peekFirst()   |
| 查询队尾元素 |   getLast()   |   peekLast()    |

### ArrayDeque 与 LinkedList 的区别

- `ArrayDeque` 是基于可变长的数组和双指针来实现，而 `LinkedList` 则通过链表来实现；

- `ArrayDeque` 不支持存储 `null` 数据，但 `LinkedList` 支持；

- `ArrayDeque` 是在 JDK 1.6 才被引入的，而`LinkedList` 早在 JDK 1.2 时就已经存在；

- `ArrayDeque` 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 `LinkedList` 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。

### PriorityQueue

`PriorityQueue` 是在JDK1.5中被引入的, 其与 `Queue` 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。

- `PriorityQueue` 使用变长数组存储元素，使用二叉堆实现结构；
- `PriorityQueue` 使用堆实现了在 `O(logn)` 的时间复杂度内插入和删除元素；
- `PriorityQueue` 是线程不安全的，不支持存储 `null` 和 `non-comparable` 对象；
- `PriorityQueue` 默认是小顶堆。

**堆排序的伪代码（重要）**。

```java
//调整函数 建立大顶堆
void Sift(int R[], int low, int high) {
    int i = low;
    int j = 2*i;
    int temp = R[i];
    while(j <= high) {
        if(j < high && R[j] < R[i+1])
            ++j;//j指向左右孩子中大的那个
        if(temp < R[j]){
            R[i] = R[j];
            i = j;
            j = 2*i;
        }else {
            break;
        }
    }
    R[i] = temp;
}
//堆排序
void headSort(int R[], int n) {
    int i;
    int temp;
    for(int j = n/2; j >= 1; j--) {
        Sift(R,i,n);
    }
    for(i = n; i >= 2; --i) {
        temp = R[1];
        R[1] = R[i];
        R[i] = temp;
        Sift(R, 1, i-1);
    }
}
```

### BlockingQueue

`BlockingQueue` （阻塞队列）是一个接口，继承自 `Queue` 。`BlockingQueue` 阻塞的原因是其支持当队列没有元素时一直阻塞，直到有有元素；如果队列已满，一直等到队列可以放入新元素时再放入。

`BlockingQueue` 常用于生产者-消费者模型中，生产者线程会向队列中添加数据，而消费者线程会从队列中取出数据进行处理。

### ArrayBlockingQueue 和 LinkedBlockingQueue 有什么区别？

`ArrayBlockingQueue` 和 `LinkedBlockingQueue` 是 Java 并发包中常用的两种阻塞队列实现，它们都是线程安全的。不过，不过它们之间也存在下面这些区别：
- 底层实现：`ArrayBlockingQueue` 基于数组实现，而 `LinkedBlockingQueue` 基于链表实现。
- 是否有界：`ArrayBlockingQueue` 是有界队列，必须在创建时指定容量大小。`LinkedBlockingQueue` 创建时可以不指定容量大小，默认是 `Integer.MAX_VALUE`，也就是无界的。但也可以指定队列大小，从而成为有界的。
- 锁是否分离：`ArrayBlockingQueue` 中的锁是没有分离的，即生产和消费用的是同一个锁；`LinkedBlockingQueue` 中的锁是分离的，即生产用的是 `putLock`，消费是 `takeLock`，这样可以防止生产者和消费者线程之间的锁争夺。
- 内存占用：`ArrayBlockingQueue` 需要提前分配数组内存，而 `LinkedBlockingQueue` 则是动态分配链表节点内存。这意味着 `ArrayBlockingQueue` 在创建时就会占用一定的内存空间，且往往申请的内存比实际所用的内存更大，而 `LinkedBlockingQueue` 则是根据元素的增加而逐渐占用内存空间。
