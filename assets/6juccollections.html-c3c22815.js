import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as c,c as r,e as d,f as e}from"./app-5fd1b6fe.js";const n="/markdown/202517.jpg",i="/markdown/20230725162004.png",a={},t=e("<p>JDK 提供的这些容器大部分在 <code>java.util.concurrent</code> 包中。</p><ul><li><strong><code>ConcurrentHashMap</code></strong>：线程安全的 <code>HashMap</code>。</li><li><strong><code>CopyOnWriteArrayList</code></strong>：线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li><li><strong><code>ConcurrentLinkedQueue</code></strong>：高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li><li><strong><code>BlockingQueue</code></strong>：这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li><li><strong><code>ConcurrentSkipListMap</code></strong>：跳表的实现，是一个Map，使用跳表的数据结构进行快速查找。</li></ul>",2),u=e('<h2 id="copyonwritearraylist" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist" aria-hidden="true">#</a> CopyOnWriteArrayList</h2><p>为了将读取的性能发挥到极致，<code>CopyOnWriteArrayList</code> 读取是完全不用加锁的，并且写入也不会阻塞读取操作。<strong>只有写入和写入之间需要进行同步等待</strong>。</p><h3 id="copyonwritearraylist-原理" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-原理" aria-hidden="true">#</a> CopyOnWriteArrayList 原理</h3><p><code>CopyOnWriteArrayList</code> 类的所有可变操作（<code>add</code>，<code>set</code> 等等）都是通过创建底层数组的新副本来实现的。当 List 需要被修改的时候，并不修改原有内容，而是对原有数据进行一次复制，将修改的内容写入副本。写完之后，再将修改完的副本替换原来的数据，这样就可以保证写操作不会影响读操作。</p><h2 id="concurrentlinkedqueue" tabindex="-1"><a class="header-anchor" href="#concurrentlinkedqueue" aria-hidden="true">#</a> ConcurrentLinkedQueue</h2><p>Java 提供的线程安全的 <code>Queue</code> 可以分为<strong>阻塞队列</strong>和<strong>非阻塞队列</strong>，其中阻塞队列的典型例子是 <code>BlockingQueue</code>，非阻塞队列的典型例子是 <code>ConcurrentLinkedQueue</code>，使用链表作为其数据结构。<strong>阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现线程安全</strong>。</p><p><code>ConcurrentLinkedQueue</code> 使用 CAS 非阻塞算法来实现线程安全。</p><p><code>ConcurrentLinkedQueue</code> 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的 <code>ConcurrentLinkedQueue</code> 来替代。</p><h2 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h2><p><code>BlockingQueue</code>（阻塞队列）是一个接口，继承自 <code>Queue</code>。<code>BlockingQueue</code> 阻塞的原因是当队列没有元素时一直阻塞，直到有有元素；如果队列已满，一直等到队列可以放入新元素时再放入。</p><p><code>BlockingQueue</code> 常用于生产者-消费者模型中，生产者线程会向队列中添加数据，而消费者线程会从队列中取出数据进行处理。</p><h3 id="arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#arrayblockingqueue" aria-hidden="true">#</a> ArrayBlockingQueue</h3><p><code>ArrayBlockingQueue</code> 是 <code>BlockingQueue</code> 接口的有界队列实现类，底层采用数组来实现。<code>ArrayBlockingQueue</code> 一旦创建，容量不能改变。其并发控制采用可重入锁 <code>ReentrantLock</code>，不管是插入操作还是读取操作，都需要获取到锁才能进行操作，获取元素和放入元素使用同一把锁。当队列容量满时，尝试将元素放入队列将导致操作阻塞；尝试从一个空队列中取一个元素也会同样阻塞。默认是不公平实现的。</p><h3 id="linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#linkedblockingqueue" aria-hidden="true">#</a> LinkedBlockingQueue</h3><p><code>LinkedBlockingQueue</code> 底层基于<strong>单向链表</strong>实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 <code>ArrayBlockingQueue</code> 相比起来具有更高的吞吐量，为了防止 <code>LinkedBlockingQueue</code> 容量迅速增，损耗大量内存。通常在创建 <code>LinkedBlockingQueue</code> 对象时指定其大小，如果未指定，容量等于 <code>Integer.MAX_VALUE</code>。锁是分离的，即生产用的是 <code>putLock</code>，消费是 <code>takeLock</code>，这样可以防止生产者和消费者线程之间的锁争夺。</p><h3 id="priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#priorityblockingqueue" aria-hidden="true">#</a> PriorityBlockingQueue</h3><p><code>PriorityBlockingQueue</code> 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 <code>compareTo()</code> 方法来指定元素排序规则，或者初始化时通过构造器参数 <code>Comparator</code> 来指定排序规则。</p><p>简单地说，它就是 <code>PriorityQueue</code> 的线程安全版本。不可以插入 <code>null</code> 值，同时，插入队列的对象必须是可比较大小的（<code>comparable</code>），否则报 <code>ClassCastException</code> 异常。它的插入操作 <code>put</code> 方法不会阻塞，因为它是无界队列（<code>take</code> 方法在队列为空的时候会阻塞）。</p><h2 id="concurrentskiplistmap" tabindex="-1"><a class="header-anchor" href="#concurrentskiplistmap" aria-hidden="true">#</a> ConcurrentSkipListMap</h2><p>跳表的本质是同时维护了多个链表，并且链表是分层的，最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。</p><p><img src="'+n+'" alt="202517"></p><p>跳表内的所有链表的元素都是<strong>排序</strong>的。</p><p>查找时，如果发现目标值大于当前节点值，则会回退到前一个节点位置并下到下一层进行寻找，查找过程是跳跃式的。</p><p><img src="'+i+'" alt="202517"></p><p>查找 18 原本要遍历 18次，现在只需要 7 次。</p>',25);function s(l,p){return c(),r("div",null,[t,d(" more "),u])}const g=o(a,[["render",s],["__file","6juccollections.html.vue"]]);export{g as default};
