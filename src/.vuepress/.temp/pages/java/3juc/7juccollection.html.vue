<template><div><p>JDK 提供的这些容器大部分在 <code v-pre>java.util.concurrent</code> 包中。</p>
<ul>
<li><strong><code v-pre>ConcurrentHashMap</code></strong> : 线程安全的 <code v-pre>HashMap</code></li>
<li><strong><code v-pre>CopyOnWriteArrayList</code></strong> : 线程安全的 <code v-pre>List</code>，在读多写少的场合性能非常好，远远好于 <code v-pre>Vector</code>。</li>
<li><strong><code v-pre>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code v-pre>LinkedList</code>，这是一个非阻塞队列。</li>
<li><strong><code v-pre>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>
<li><strong><code v-pre>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>
</ul>
<!-- more -->
<h2 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h2>
<p><code v-pre>BlockingQueue</code> （阻塞队列）是一个接口，继承自 <code v-pre>Queue</code>。<code v-pre>BlockingQueue</code>阻塞的原因是其支持当队列没有元素时一直阻塞，直到有有元素；还支持如果队列已满，一直等到队列可以放入新元素时再放入。</p>
<p><code v-pre>BlockingQueue</code> 常用于生产者-消费者模型中，生产者线程会向队列中添加数据，而消费者线程会从队列中取出数据进行处理。</p>
<h3 id="arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#arrayblockingqueue" aria-hidden="true">#</a> ArrayBlockingQueue</h3>
<p><code v-pre>ArrayBlockingQueue</code> 是 <code v-pre>BlockingQueue</code> 接口的有界队列实现类，底层采用数组来实现。<code v-pre>ArrayBlockingQueue</code> 一旦创建，容量不能改变。其并发控制采用可重入锁 <code v-pre>ReentrantLock</code> ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。默认是不公平实现的。.</p>
<h3 id="linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#linkedblockingqueue" aria-hidden="true">#</a> LinkedBlockingQueue</h3>
<p><code v-pre>LinkedBlockingQueue</code> 底层基于<strong>单向链表</strong>实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 <code v-pre>ArrayBlockingQueue</code> 相比起来具有更高的吞吐量，为了防止 <code v-pre>LinkedBlockingQueue</code> 容量迅速增，损耗大量内存。通常在创建 <code v-pre>LinkedBlockingQueue</code> 对象时，会指定其大小，如果未指定，容量等于 <code v-pre>Integer.MAX_VALUE</code>。</p>
<h3 id="priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#priorityblockingqueue" aria-hidden="true">#</a> PriorityBlockingQueue</h3>
<p><code v-pre>PriorityBlockingQueue</code> 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 <code v-pre>compareTo()</code> 方法来指定元素排序规则，或者初始化时通过构造器参数 <code v-pre>Comparator</code> 来指定排序规则。</p>
<p>简单地说，它就是 <code v-pre>PriorityQueue</code> 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 <code v-pre>ClassCastException</code> 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。</p>
<h2 id="concurrentskiplistmap" tabindex="-1"><a class="header-anchor" href="#concurrentskiplistmap" aria-hidden="true">#</a> ConcurrentSkipListMap</h2>
</div></template>


