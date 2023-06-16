---
title: Java集合二
icon: page
star: true
date: 2023-5-25
category:
  - Java
tags:
  - Java集合
  - 八股
---
## Map

### HashMap 和 Hashtable 的区别

- **线程是否安全**：`HashMap`是非线程安全的，`Hashtable`是线程安全的，内部方法使用`synchronized`修饰。
- **效率**：因为锁的问题，`HashMap`的效率要稍微好点。
- **是否能存储Null Key和Value**：`HashMap`能存储`null`的key和value，但是作为`null`的key只能有一个，`Hashtable`不能有`null`key和value。
- **扩容**：`Hashtable`默认初始大小是11，扩容之后变为2n+1。`HashMap`默认大小是16，当元素个数超过负载因子*表长时扩容，每次扩容变为原来的两倍。
- **底层**：JDK1.8之后`HashMap`底层使用数组+链表/红黑树，特定条件链表转化为红黑树，`Hashtable`则没有转化为红黑树的机制。

<!-- more -->

### HashMap 和 TreeMap 区别

`TreeMap` 和`HashMap` 都继承自`AbstractMap` ，`TreeMap`还实现了`NavigableMap`接口和`SortedMap` 接口。实现 `NavigableMap` 接口让 `TreeMap` 有了对集合内元素的搜索的能力。实现`SortedMap`接口让 `TreeMap` 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序。

### HashMap 的底层实现

#### JDK1.8 之前

JDK1.8之前`HashMap`底层是数组和链表集合一起，通过key的`hashcode`经过扰动函数之后获得hash值，通过`(n-1)&hash`计算元素存放的位置。

找到存放位置之后判断当前位置元素和要存入的元素hash值和key是否相同，相同则直接覆盖，否则通过链表法解决冲突。

JDK1.8中的扰动函数源码：

```java
static final int hash(Object key) {
	int h;
	// key.hashCode()：返回散列值也就是hashcode
	// ^：按位异或
	// >>>:无符号右移，忽略符号位，空位都以0补齐
	return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

#### JDK1.8 之后

JDK1.8之后`HashMap`使用数组+链表/红黑树作为底层，当单个链表的长度**大于8**（默认8），数组长度**大于等于64**的时候就会触发树化，将链表转化为红黑树，以此减少查找时间。

### HashMap 的长度为什么是 2 的幂次方?

Hash值的取值为32位补码的取值范围，一般情况很难出现碰撞。但是范围过大不可能直接放入内存中进行计算，因此需要先通过取模运算（数据结构散列表中除留余数法），通过位运算实现取模。

假设数组长度n为16；Hash值为`0111 0000 1001 0000 000 1001 1110 1101 `

| **Hash** | **0111 0000 1001 0000 0000 1001 1110 1101** |
| ------------ | ------------- |
| **n-1** |**0000 0000 0000 0000 0000 0000 0000 1111** |
| **Hash&(n-1)** |**0000 0000 0000 0000 0000 0000 0000 1101** |

### HashMap 多线程操作导致死链问题

JDK1.7 及之前版本的 `HashMap` 在多线程环境下扩容操作可能存在死循环问题，这是由于当一个桶位中有多个元素需要进行扩容时，多个线程同时对链表进行操作，**头插法**可能会导致链表中的节点指向错误的位置，从而形成一个环形链表，进而使得查询元素的操作陷入死循环无法结束。

JDK1.8之后通过尾插法解决上述问题。但是在多线程下还是会出现数据覆盖问题，推荐使用线程安全的`CucurrentHashMap`。

### ConcurrentHashMap 和 Hashtable 的区别

`ConcurrentHashMap` 和 `Hashtable` 的区别主要体现在实现线程安全的方式上不同。

- **底层数据结构**： JDK1.7 的 `ConcurrentHashMap` 底层采用 **分段的Segment、HashEntry数组+链表** 实现，JDK1.8 时采用**`Node`+链表/红黑二叉树**。`Hashtable` 和 JDK1.8 之前的 `HashMap` 的底层数据结构类似都是采用 **数组+链表** 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的。
- **实现线程安全的方式（重要）**：
  - JDK1.7的时候，`ConcurrentHashMap` 底层采用 **分段的Segment、HashEntry数组+链表** 实现，每一把锁锁住一个Segment，Segment的个数固定默认16，也就是并发度固定为16。
  - 到了 JDK1.8 的时候，`ConcurrentHashMap` 已经摒弃了 `Segment` 的概念，改用**`Node`数组+链表/红黑树**，采用 `Node + CAS + synchronized` 来保证并发安全。
  - `Hashtable`使用同一个锁进行并发控制，效率低下。

### JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？

- **线程安全实现方式**：
- **线程安全实现方式**：JDK 1.7 采用 `Segment` 分段锁来保证安全， `Segment` 是继承自 `ReentrantLock`。JDK1.8 放弃了 `Segment` 分段锁的设计，采用 `Node + CAS + synchronized` 保证线程安全，锁粒度更细，`synchronized` 只锁定当前链表或红黑二叉树的首节点。
- **Hash解决碰撞办法**：JDK1.7采用拉链法，JDK1.8采用拉链法+红黑树。
- **并发度**：JDK1.7中最大的并发度是Segment的个数，默认是16。JDK1.8最大并发度是Node的个数，并发度更大。

































































