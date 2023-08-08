---
title: Java集合二
icon: page
category:
  - Java
tag:
  - Java集合
  - 八股
---
## Map

### HashMap 和 Hashtable 的区别

- **线程是否安全**：`HashMap` 是非线程安全的，`Hashtable` 是线程安全的，内部方法使用 `synchronized` 修饰。
- **效率**：由于不需要加锁，`HashMap` 的效率要稍微好点。
- **是否能存储 Null Key 和 Value**：`HashMap` 能存储 `null` 的 key 和 value，但是作为 `null` 的 key 只能有一个，`Hashtable` 不能有 `null` key 和 value。
- **扩容**：`Hashtable` 默认初始大小是 11，扩容之后变为 2n+1。`HashMap` 默认大小是 16，当元素个数超过**负载因子*表长**时扩容，每次扩容变为原来的两倍。
- **底层**：JDK 1.8 之后 `HashMap` 底层使用数组 + 链表/红黑树，特定条件链表转化为红黑树，`Hashtable` 则没有转化为红黑树的机制。

<!-- more -->

### HashMap 和 TreeMap 区别

`TreeMap` 和 `HashMap` 都继承自 `AbstractMap`，`TreeMap` 还实现了 `NavigableMap` 接口和 `SortedMap` 接口。实现 `NavigableMap` 接口让 `TreeMap` 有了对集合内元素的搜索的能力。实现 `SortedMap` 接口让 `TreeMap` 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序。

### HashMap 的底层实现

#### JDK 1.8 之前

JDK 1.8之前 `HashMap` 底层是数组和链表集合一起，通过 key 的 `hashcode` 经过扰动函数之后获得 hash 值，通过 `(n-1)&hash` 计算元素存放的位置。

找到存放位置之后判断当前位置元素和要存入的元素 hash 值和 key 是否相同，相同则直接覆盖，否则通过链表法解决冲突。

JDK 1.8 中的扰动函数源码：

```java
static final int hash(Object key) {
    int h;
    // key.hashCode()：返回散列值也就是hashcode
    // ^：按位异或
    // >>>：无符号右移，忽略符号位，空位都以0补齐
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
```

#### JDK 1.8 之后

JDK 1.8 之后 `HashMap` 使用数组 + 链表/红黑树作为底层，当单个链表的长度**大于 8**（默认 8），数组长度**大于等于 64** 的时候就会触发树化，将链表转化为红黑树，以此减少查找时间。

### HashMap 的长度为什么是 2 的幂次方？

Hash值的取值为 32 位补码的取值范围，一般情况很难出现碰撞。但是范围过大不可能直接放入内存中进行计算，因此需要先通过取模运算（数据结构散列表中除留余数法），通过位运算实现取模。

假设数组长度 n 为 16；Hash 值为 `0111 0000 1001 0000 000 1001 1110 1101`

| **Hash** | **0111 0000 1001 0000 0000 1001 1110 1101** |
|:------------:|:-------------:|
| **n-1** |**0000 0000 0000 0000 0000 0000 0000 1111** |
| **Hash&(n-1)** |**0000 0000 0000 0000 0000 0000 0000 1101** |

### HashMap 多线程操作导致死链问题

JDK 1.7 及之前版本的 `HashMap` 在多线程环境下扩容操作可能存在死循环问题，这是由于当一个桶位中有多个元素需要进行扩容时，多个线程同时对链表进行操作，**头插法**可能会导致链表中的节点指向错误的位置，从而形成一个环形链表，进而使得查询元素的操作陷入死循环无法结束。

JDK 1.8 之后通过尾插法解决上述问题。但是在多线程下还是会出现数据覆盖问题，推荐使用线程安全的`CucurrentHashMap`。

### ConcurrentHashMap 和 Hashtable 的区别

`ConcurrentHashMap` 和 `Hashtable` 的区别主要体现在实现线程安全的方式上不同。

- **底层数据结构**：JDK 1.7 的 `ConcurrentHashMap` 底层采用分段的 `Segment`、`HashEntry` 数组 + 链表实现，JDK 1.8 时采用 `Node` + 链表/红黑二叉树。`Hashtable` 和 JDK 1.8 之前的 `HashMap` 的底层数据结构类似都是采用**数组+链表**的形式，数组是 `HashMap` 
  的主体，链表则是主要为了解决哈希冲突而存在的。
- **实现线程安全的方式（重要）**：
  - JDK 1.7 的时候，`ConcurrentHashMap` 底层采用分段的 `Segment`、`HashEntry` 数组 + 链表实现，每一把锁锁住一个 `Segment`，`Segment` 的个数固定默认 16，也就是并发度固定为 16。
  - 到了 JDK 1.8 的时候，`ConcurrentHashMap` 已经摒弃了 `Segment` 的概念，改用 `Node` 数组 + 链表/红黑树，采用 `Node + CAS + synchronized` 来保证并发安全。
  - `Hashtable` 使用同一个锁进行并发控制，效率低下。

### JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？

- **线程安全实现方式**：JDK 1.7 采用 `Segment` 分段锁来保证安全，`Segment` 是继承自 `ReentrantLock`。JDK 1.8 放弃了 `Segment` 分段锁的设计，采用 `Node + CAS + synchronized` 保证线程安全，锁粒度更细，`synchronized` 只锁定当前链表或红黑二叉树的首节点。
- **Hash 解决碰撞办法**：JDK 1.7 采用拉链法，JDK 1.8 采用拉链法+红黑树。
- **并发度**：JDK 1.7 中最大的并发度是 `Segment` 的个数，默认是 16。JDK 1.8 最大并发度是 `Node` 的个数，并发度更大。

### JDK 8 中的 ConcurrentHashMap 是怎么保证并发安全的？

主要利用 `Unsafe` 操作 + `synchronized` 关键字。

`synchronized` 主要负责在需要操作某个位置时进行加锁（该位置不为空），比如向某个位置的链表插入结点，向某个位置的红黑树插入结点。

JDK 8 中其实仍然有分段锁的思想，只不过 JDK 7 中段数是可以控制的，而 JDK 8 中是 `Node` 数组的每一个位置都有一把锁。

当向 `ConcurrentHashMap` 中 `put` 一个 `key,value` 时，
1. 首先根据 `key` 计算对应的 `Node` 数组下表，如果该位置没有元素，则通过自旋的方式去向该位置赋值。
2. 如果该位置有元素，则会通过 `synchronized` 进行加锁。
3. 加锁成功之后，再判断元素类型，并添加相应的类型。
4. 添加成功之后判断是否需要树化（节点个数**大于** 8，元素总个数**大于等于** 64）。
5. `addCount`，此方法将总元素的计数值 + 1，之后判断是否需要扩容。
6. 同时在一个线程 `put` 时发现当前 `ConcurrentHashMap` 正在扩容则会去帮助扩容。
