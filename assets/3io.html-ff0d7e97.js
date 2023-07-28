import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as l,e as n,f as o}from"./app-ccdda028.js";const a="/markdown/image-ioduolu.png",r="/markdown/image-sigio.png",d="/markdown/image-aio.png",t={},c=o('<h3 id="何为io" tabindex="-1"><a class="header-anchor" href="#何为io" aria-hidden="true">#</a> 何为IO？</h3><p>I/O（<strong>I</strong>nput/<strong>O</strong>utpu） 即<strong>输入／输出</strong> 。</p><p>从应用程序的视角来看的话，应用程序对操作系统的内核发起 IO 调用（系统调用），操作系统负责的内核执行具体的 IO 操作。应用程序实际上只是发起了 IO 操作的调用而已，具体 IO 的执行是由操作系统的内核来完成的。</p><p>当应用程序发起 I/O 调用后，会经历两个步骤：</p><ol><li>内核等待 I/O 设备准备好数据</li><li>内核将数据从内核空间拷贝到用户空间。</li></ol>',5),s=o('<h3 id="有哪些常见的-io-模型" tabindex="-1"><a class="header-anchor" href="#有哪些常见的-io-模型" aria-hidden="true">#</a> 有哪些常见的 IO 模型?</h3><p>UNIX 系统下， IO 模型一共有 5 种：<strong>同步阻塞 I/O</strong>、<strong>同步非阻塞 I/O</strong>、<strong>I/O 多路复用</strong>、<strong>信号驱动 I/O</strong>和<strong>异步 I/O</strong>。</p><h3 id="同步阻塞-io-bio-blocking-i-o" tabindex="-1"><a class="header-anchor" href="#同步阻塞-io-bio-blocking-i-o" aria-hidden="true">#</a> 同步阻塞 IO，BIO（Blocking I/O）</h3><p>同步阻塞 IO 模型中，应用程序发起 <code>read</code> 调用后，会一直阻塞，直到内核把数据拷贝到用户空间。</p><p>在客户端连接数量不高的情况下是没有问题的，但是当并发数量增大的时候，传统的 BIO 模型是无能为力的，会导致多线程阻塞，响应不了其他请求。</p><h3 id="同步非阻塞-io-nio-non-blocking-new-i-o" tabindex="-1"><a class="header-anchor" href="#同步非阻塞-io-nio-non-blocking-new-i-o" aria-hidden="true">#</a> 同步非阻塞 IO，NIO（Non-blocking/New I/O）</h3><p>同步非阻塞 IO 在应用程序进行 <code>read</code> 调用之后会立即返回，并在后续的过程中轮询判断数据是否准备好。</p><p>Java 中的 NIO 于 Java 1.4 中引入，对应 <code>Java.nio</code> 包，提供了 <code>Channel</code>,<code>Selector</code>,<code>Buffer</code> 等抽象。NIO 中的 N 可以理解为 Non-blocking，不单纯是 New。支持面向缓冲，基于通道的I/O 操作方法。对于高负载、高并发的应用，应使用 NIO。</p><blockquote><p>在同步非阻塞 IO 模型中，应用程序会一直发起 <code>read</code> 调用，等待数据从内核空间拷贝到用户空间的这段时间，线程依然是阻塞的，直到在内核把数据拷贝到用户空间。 相比于同步阻塞 IO 模型，同步非阻塞 IO 模型确实有很大的改进，通过轮训操作避免了一直阻塞。但是这种 IO 模型仍然存在问题：应用程序不断进行 I/O 系统调用轮询数据是否已经准备好的过程是很消耗 CPU 资源的。</p></blockquote><h3 id="io-多路复用-io-multiplexing" tabindex="-1"><a class="header-anchor" href="#io-多路复用-io-multiplexing" aria-hidden="true">#</a> IO 多路复用，IO Multiplexing</h3><p>IO 多路复用是建立在内核提供的多路分离函数 <code>select</code> 基础上的，可以避免同步非阻塞 IO 中的轮询等待问题。</p><p>IO 多路复用模型中，线程首先发起 <code>select</code> 调用，查询内核数据是否准备就绪，等内核把数据准备好则会发出通知用户，线程再发起 <code>read</code> 调用。<code>read</code> 调用的过程（数据从内核空间 -&gt; 用户空间）还是阻塞的。</p><p><img src="'+a+'" alt="IO多路复用"></p><h4 id="多路复用包括" tabindex="-1"><a class="header-anchor" href="#多路复用包括" aria-hidden="true">#</a> 多路复用包括</h4><p><strong>select</strong></p><ul><li><strong>过程</strong><ul><li>将当前进程的所有文件描述符一次性拷贝到内核态。</li><li>内核态无差别线性扫描文件是否有数据到达，将所有文件描述符 fd 拷贝到用户态，并返回已经就绪的文件描述符 fd 数量。</li><li>用户态判断哪些 fd 就绪并执行事件处理。</li></ul></li><li><strong>缺点</strong><ul><li>文件描述符为 <code>bitmap</code> 结构，长度为 1024 限制。</li><li>fdset 不能做到重用，每次循环需要重新创建。</li><li>频繁切换用户态和核心态，性能开销大。</li><li>线性扫描，性能差，事件复杂度为 O(n)。</li></ul></li></ul><p><strong>poll</strong></p><ul><li><strong>过程</strong><ul><li>将当前进程的所有文件描述符一次性拷贝到内核态。</li><li>在内核态中无差别遍历每个 fd，判断是否有数据到达。</li><li>将所有 fd 状态从内核态拷贝到用户态，并返回已经就绪的 fd 个数。</li><li>用户态判断哪些 fd 就绪并执行事件处理。</li></ul></li><li><strong>缺点</strong><ul><li>poll 采用了 pollfd 结构数组解决了 select 下的文件描述符个数限制。但是仍然存在频繁的内核态和用户态拷贝。</li><li>线性扫描，性能差，事件复杂度为 O(n)。</li></ul></li></ul><p><strong>epoll</strong></p><ul><li>在 <code>epoll_ctl()</code> 函数中，为每个文件描述符都指定了回调函数，基于回调函数把就绪事件放入到就绪队列中，因此把时间复杂度从 O(n) 降到了 O(1);</li><li>只需要在 <code>epoll_ctl()</code> 时传递一次文件描述符，<code>epoll_wait()</code> 不需要再次传递文件描述符。</li><li>epoll 基于红黑树+双向链表存储事件，没有最大连接数限制。</li><li>epoll 没有使用零拷贝技术。</li></ul><h3 id="信号驱动-io-signal-driven-i-o" tabindex="-1"><a class="header-anchor" href="#信号驱动-io-signal-driven-i-o" aria-hidden="true">#</a> 信号驱动 IO，Signal-Driven I/O</h3><p>为一个目标文件描述符指定宿主进程，当文件描述符上有事件发生时，SIGIO 的信号处理函数将被触发，然后便可对目标文件描述符执行 I/O 操作。</p><p><img src="'+r+'" alt="SIGIO"></p><h3 id="异步-io-aio-asynchronous-i-o" tabindex="-1"><a class="header-anchor" href="#异步-io-aio-asynchronous-i-o" aria-hidden="true">#</a> 异步 IO，AIO (Asynchronous I/O)</h3><p>AIO 也就是 NIO 2。Java 7 中引入了 NIO 的改进版 NIO 2，它是<strong>异步 IO 模型</strong>。</p><p>异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会阻塞，当后台处理完成读写，操作系统会通知相应的线程进行后续的操作，读写操作由内核管理。</p><p><img src="'+d+'" alt="AIO"></p>',27);function p(O,I){return e(),l("div",null,[c,n(" more "),s])}const u=i(t,[["render",p],["__file","3io.html.vue"]]);export{u as default};
