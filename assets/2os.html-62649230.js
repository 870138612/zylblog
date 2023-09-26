import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as o,f as a,e}from"./app-4ef30b87.js";const t="/markdown/image-softandhardlink.png",n={},d=e('<h3 id="操作系统的功能" tabindex="-1"><a class="header-anchor" href="#操作系统的功能" aria-hidden="true">#</a> 操作系统的功能</h3><p><strong>进程和线程的管理</strong>：进程的创建、撤销、阻塞、唤醒，进程间的通信等。</p><p><strong>存储管理</strong>：内存的分配和管理、外存（磁盘等）的分配和管理等。</p><p><strong>文件管理</strong>：文件的读、写、创建及删除等。</p><p><strong>设备管理</strong>：完成设备（输入输出设备和外部存储设备等）的请求或释放，以及设备启动等功能。</p><p><strong>网络管理</strong>：操作系统负责管理计算机网络的使用。网络是计算机系统中连接不同计算机的方式，操作系统需要管理计算机网络的配置、连接、通信和安全等，以提供高效可靠的网络服务。</p><p><strong>安全管理</strong>：用户的身份认证、访问控制、文件加密等，以防止非法用户对系统资源的访问和操作。</p>',7),l=e('<h3 id="什么是用户态和内核态" tabindex="-1"><a class="header-anchor" href="#什么是用户态和内核态" aria-hidden="true">#</a> 什么是用户态和内核态？</h3><ul><li>用户态：又称为目态，用户态运行的进程可以直接读取用户程序的数据，拥有较低的权限。当应用程序需要执行某些特权指令的时候就会发生系统调用，让用户态变成内核态。</li><li>内核态：又称为管态，内核态运行的进程集合可以访问计算机的任何资源，拥有非常高的权限，当操作系统接收到进程的系统调用请求时，就会从用户态切换为内核态，执行响应的系统调用，并将结果返回给进程，最后再从内核态切换为用户态。</li></ul><p>用户态切换到内核态的三种方式：</p><ol><li>系统调用：用户态进程主动要求切换到内核态的一种方式。</li><li>中断：当外围设备完成用户请求操作之后，会向 CPU 发出响应的中断信号，CPU 响应的时候切换到核心态。比如硬盘读写操作完成，系统会切换到硬盘读写的中断处理程序中执行后续操作等。</li><li>异常：当 CPU 在执行运行在用户态下的程序时，发生了某些事先不可知的异常，这时会触发由当前运行进程切换到处理此异常的内核相关程序中，也就转到了内核态，比如缺页异常。</li></ol><h3 id="什么是零拷贝" tabindex="-1"><a class="header-anchor" href="#什么是零拷贝" aria-hidden="true">#</a> 什么是零拷贝</h3><p>如果需要将磁盘中的文件内容发送到远程服务器上需要经历以下步骤：</p><ol><li>将磁盘中的文件拷贝到内核缓冲区；</li><li>内核缓冲区的数据拷贝到用户缓冲区；</li><li>应用程序调用 <code>write()</code> 方法将用户缓冲区的数据拷贝到内核下的 <code>Socket Buffer</code> 中;</li><li>最后将 <code>Socket Buffer</code> 中的数据复制到网卡缓冲区，然后发送到服务器。</li></ol><p>其实当中的第二步和第三步都是多余的，零拷贝技术通过 DMA 技术把文件复制到内核缓冲区的 <code>Read Buffer</code> 中，接着把文件描述符加载到 <code>Socket Buffer</code>，后续内核缓冲区的数据复制到网卡缓冲区的过程由 DMA 引擎完成。零拷贝通过两次拷贝就将数据发送到了网卡中，并且减少了两次用户态核心态的切换，大大提升了效率。</p><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><h3 id="什么是进程和线程" tabindex="-1"><a class="header-anchor" href="#什么是进程和线程" aria-hidden="true">#</a> 什么是进程和线程？</h3><ul><li>进程：值得是计算机中正在运行的程序实例，是操作系统中拥有资源的基本单位。</li><li>线程：引入线程之后，CPU 调度的最小单位变成线程，线程又称为轻量级进程。</li></ul><p>对于 Java 来说，一个进程能拥有很多个线程，多个线程共享进程的堆和方法区（JDK 1.8之后的元空间），但是每个线程都有自己的程序计数器，虚拟机栈和本地方法栈（线程私有）。</p><h3 id="有了进程为什么还需要线程" tabindex="-1"><a class="header-anchor" href="#有了进程为什么还需要线程" aria-hidden="true">#</a> 有了进程为什么还需要线程？</h3><ul><li>进程切换的成本大于线程切换。</li><li>线程更加轻量，一个进程能创建多个线程。</li><li>多个线程能并发处理不同的任务，有效利用 CPU 资源。而进程只能在一个时间干一件事，如果在执行过程中遇到阻塞就会挂起直到结果返回。</li><li>同一个进程的线程共享内存和文件，因此线程之间的相互通信无需调用内核。</li></ul><h3 id="为什么进程切换的开销比线程切换的开销大" tabindex="-1"><a class="header-anchor" href="#为什么进程切换的开销比线程切换的开销大" aria-hidden="true">#</a> 为什么进程切换的开销比线程切换的开销大？</h3><p>进程是资源管理的基本单位，线程只拥有小部分提供自身运行的资源。进程在切换时会导致快表 TLB 失效（快表中存储了最近进程访问的页面映射，可以加快虚实地址转换速度），进程切换时要切页表，而且往往伴随着页调度，因为进程的数据段代码段要换出去，以便把将要执行的进程的内容换进来。而线程只需要保存上下文信息（状态寄存器和栈信息）。</p><h3 id="线程间的同步方式有哪些" tabindex="-1"><a class="header-anchor" href="#线程间的同步方式有哪些" aria-hidden="true">#</a> 线程间的同步方式有哪些？</h3><ul><li><strong>互斥锁（Mutex）</strong>：采用互斥对象机制，只有拥有互斥对象的线程才有访问公共资源的权限。因为互斥对象只有一个，所以可以保证公共资源不会被多个线程同时访问。比如 Java 中的 <code>synchronized</code> 关键词和各种 <code>Lock</code> 都是这种机制。</li><li><strong>读写锁（Read-Write Lock）</strong>：允许多个线程同时读取共享资源，但只有一个线程可以对共享资源进行写操作。</li><li><strong>信号量（Semaphore）</strong>：它允许同一时刻多个线程访问同一资源，但是需要控制同一时刻访问此资源的最大线程数量。</li><li><strong>屏障（Barrier）</strong>：屏障是一种同步原语，用于等待多个线程到达某个点再一起继续执行。当一个线程到达屏障时，它会停止执行并等待其他线程到达屏障，直到所有线程都到达屏障后，它们才会一起继续执行。比如 Java 中的 <code>CyclicBarrier</code> 是这种机制。</li><li><strong>事件（Event）</strong>：<code>Wait/Notify</code>：通过通知操作的方式来保持多线程同步，还可以方便的实现多线程优先级的比较操作。</li></ul><h3 id="pcb-是什么-包含哪些信息" tabindex="-1"><a class="header-anchor" href="#pcb-是什么-包含哪些信息" aria-hidden="true">#</a> PCB 是什么？包含哪些信息？</h3><p><strong>PCB（Process Control Block）</strong> 进程控制块，是操作系统中用来管理和跟踪进程的数据结构，每个进程都对应着一个独立的 PCB，PCB 是进程存在的唯一标识。</p><p>当操作系统创建一个新进程时，会为该进程分配一个唯一的进程 ID，并且为该进程创建一个对应的进程控制块。当进程执行时，PCB 中的信息会不断变化，操作系统会根据这些信息来管理和调度进程。</p><p>PCB 主要包含下面几部分的内容：</p><ul><li>进程的描述信息，包括进程的名称、标识符等等。</li><li>进程的调度信息，包括进程阻塞原因、进程状态（就绪、运行、阻塞等）、进程优先级（标识进程的重要程度）等等。</li><li>进程对资源的需求情况，包括 CPU 时间、内存空间、I/O 设备等等。</li><li>进程打开的文件信息，包括文件描述符、文件类型、打开模式等等。</li><li>处理机的状态信息（由处理机的各种寄存器中的内容组成的），包括通用寄存器、指令计数器、程序状态字 PSW、用户栈指针。</li></ul><h3 id="进程间的通信方式有哪些" tabindex="-1"><a class="header-anchor" href="#进程间的通信方式有哪些" aria-hidden="true">#</a> 进程间的通信方式有哪些？</h3><ul><li><strong>管道/匿名管道（Pipes）</strong>：用于具有亲缘关系的父子进程间或者兄弟进程之间的通信。管道定义为用于定义读写进程的共享文件。</li><li><strong>有名管道（Named Pipes）</strong> : 匿名管道由于没有名字，只能用于亲缘关系的进程间通信。为了克服这个缺点，提出了有名管道。有名管道严格遵循 <strong>先进先出（First In First Out）</strong> 。有名管道以磁盘文件的方式存在，可以实现本机任意两个进程通信。</li><li><strong>信号（Signal）</strong>：信号是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。</li><li><strong>消息队列（Message Queue）</strong>：消息队列是消息的链表,具有特定的格式,存放在内存中并由消息队列标识符标识。管道和消息队列的通信数据都是先进先出的原则。与管道（无名管道：只存在于内存中的文件；命名管道：存在于实际的磁盘介质或者文件系统）不同的是消息队列存放在内核中，只有在内核重启(即，操作系统重启) 或者显式地删除一个消息队列时，该消息队列才会被真正的删除。消息队列可以实现消息的随机查询,消息不一定要以先进先出的次序读取，也可以按消息的类型读取。比 FIFO 更有优势。<strong>消息队列克服了信号承载信息量少，管道只能承载无格式字节流以及缓冲区大小受限等缺点。</strong></li><li><strong>信号量（Semaphores）</strong>：信号量是一个计数器，用于多进程对共享数据的访问，信号量的意图在于进程间同步。这种通信方式主要用于解决与同步相关的问题并避免竞争条件。</li><li><strong>共享内存（Shared memory）</strong>：使得多个进程可以访问同一块内存空间，不同进程可以及时看到对方进程中对共享内存中数据的更新。这种方式需要依靠某种同步操作，如互斥锁和信号量等。可以说这是最有用的进程间通信方式。</li><li><strong>套接字(Sockets)</strong> : 此方法主要用于在客户端和服务器之间通过网络进行通信。套接字是支持 TCP/IP 的网络通信的基本操作单元，可以看做是不同主机之间的进程进行双向通信的端点，简单的说就是通信的两方的一种约定，用套接字中的相关函数来完成通信过程。</li></ul><h3 id="什么是僵尸进程和孤儿进程" tabindex="-1"><a class="header-anchor" href="#什么是僵尸进程和孤儿进程" aria-hidden="true">#</a> 什么是僵尸进程和孤儿进程？</h3><ul><li><strong>僵尸进程</strong>：子进程已经终止，但是其父进程仍在运行，且父进程没有调用 <code>wait()</code> 或 <code>waitpid()</code> 等系统调用来获取子进程的状态信息，释放子进程占用的资源，导致子进程的 PCB 依然存在于系统中，但无法被进一步使用。这种情况下，子进程被称为“僵尸进程”。避免僵尸进程的产生，父进程需要及时调用 <code>wait()</code> 或 <code>waitpid()</code> 系统调用来回收子进程。</li><li><strong>孤儿进程</strong>：一个进程的父进程已经终止或者不存在，但是该进程仍在运行。这种情况下，该进程就是孤儿进程。孤儿进程通常是由于父进程意外终止或未及时调用 <code>wait()</code> 或 <code>waitpid()</code> 等系统调用来回收子进程导致的。为了避免孤儿进程占用系统资源，操作系统会将孤儿进程的父进程设置为 <code>init</code> 进程（进程号为 1），由 <code>init</code> 进程来回收孤儿进程的资源。</li></ul><h2 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h2><h3 id="什么是内存碎片" tabindex="-1"><a class="header-anchor" href="#什么是内存碎片" aria-hidden="true">#</a> 什么是内存碎片？</h3><ul><li><strong>内部内存碎片（Internal Memory Fragmentation，简称为内存碎片）</strong>：<strong>已经分配给进程使用但未被使用的内存</strong>。导致内部内存碎片的主要原因是，当采用固定比例比如 2 的幂次方进行内存分配时，进程所分配的内存可能会比其实际所需要的大。举个例子，一个进程只需要 65 字节的内存，但为其分配了 128（2^7） 大小的内存，那 63 字节的内存就成为了内部内存碎片。</li><li><strong>外部内存碎片(External Memory Fragmentation，简称为外部碎片)</strong>：由于未分配的连续内存区域太小，以至于不能满足任意进程所需要的内存分配请求，这些小片段且不连续的内存空间被称为外部碎片。也就是说，外部内存碎片指的是那些并为分配给进程但又不能使用的内存。我们后面介绍的分段机制就会导致外部内存碎片。<strong>没有分配的内存多出的碎片</strong>。</li></ul><blockquote><p>固定分区分配，事先将内存切割成固定大小，则分配了但是没用完，这部分碎片属于内部碎片。 动态分区分配，不事先切割内存，进程需要多少则分配多少，因此剩余的内存区域就是分配之外的区域，属于外部碎片。</p></blockquote><h3 id="分段分页" tabindex="-1"><a class="header-anchor" href="#分段分页" aria-hidden="true">#</a> 分段分页</h3><p>...</p><h2 id="文件系统" tabindex="-1"><a class="header-anchor" href="#文件系统" aria-hidden="true">#</a> 文件系统</h2><h3 id="硬链接和软链接有什么区别" tabindex="-1"><a class="header-anchor" href="#硬链接和软链接有什么区别" aria-hidden="true">#</a> 硬链接和软链接有什么区别？</h3><p>访问文件就是通过 <code>inode</code> 节点来访问 <code>data block</code> 数据。</p><p><strong>硬链接（Hard Link）</strong></p><p>是对原文件起了一个别名。</p><p>（1）文件有相同的 <code>inode</code> 及 <code>data block</code>；</p><p>（2）只能对已存在的文件进行创建；</p><p>（3）不能交叉文件系统进行硬链接的创建；</p><p>（4）不能对目录进行创建，只可对文件创建；</p><p>（5）删除一个硬链接文件并不影响其他有相同 <code>inode</code> 号的文件。</p><p><strong>软链接（Symbolic Link 或 Symlink）</strong></p><p>又被叫为符号链接（symbolic Link），它包含了到原文件的路径信息。</p><p>文件被删除，则相关软连接被称为死链接（即 dangling link，若被指向路径文件被重新创建，死链接可恢复为正常的软链接）。相当于快捷方式。</p><p><img src="'+t+'" alt="硬链接和软链接"></p><p><strong>本质区别</strong></p><p>硬链接：本质是同一个文件。</p><p>软链接：本质不是同一个文件。</p><h3 id="常见的磁盘调度算法有哪些" tabindex="-1"><a class="header-anchor" href="#常见的磁盘调度算法有哪些" aria-hidden="true">#</a> 常见的磁盘调度算法有哪些？</h3><ul><li><p><strong>先来先服务算法（First-Come First-Served，FCFS）</strong>：按照请求到达磁盘调度器的顺序进行处理，先到达的请求的先被服务。FCFS 算法实现起来比较简单，不存在算法开销。不过，由于没有考虑磁头移动的路径和方向，平均寻道时间较长。同时，该算法容易出现饥饿问题，即一些后到的磁盘请求可能需要等待很长时间才能得到服务。</p></li><li><p><strong>最短寻道时间优先算法（Shortest Seek Time First，SSTF）</strong>：也被称为最佳服务优先（Shortest Service Time First，SSTF）算法，优先选择距离当前磁头位置最近的请求进行服务。SSTF 算法能够最小化磁头的寻道时间，但容易出现饥饿问题，即磁头附近的请求不断被服务，远离磁头的请求长时间得不到响应。实际应用中，需要优化一下该算法的实现，避免出现饥饿问题。</p></li><li><p><strong>扫描算法（SCAN）</strong>：也被称为电梯（Elevator）算法，基本思想和电梯非常类似。磁头沿着一个方向扫描磁盘，如果经过的磁道有请求就处理，直到到达磁盘的边界，然后改变移动方向，依此往复。SCAN 算法能够保证所有的请求得到服务，解决了饥饿问题。但是，如果磁头从一个方向刚扫描完，请求才到的话。这个请求就需要等到磁头从相反方向过来之后才能得到处理。</p></li><li><p><strong>循环扫描算法（Circular Scan，C-SCAN）</strong>：SCAN 算法的变体，只在磁盘的一侧进行扫描，并且只按照一个方向扫描，直到到达磁盘边界，然后回到磁盘起点，重新开始循环。</p></li><li><p><strong>边扫描边观察算法（LOOK）</strong>：SCAN 算法中磁头到了磁盘的边界才改变移动方向，这样可能会做很多无用功，因为磁头移动方向上可能已经没有请求需要处理了。LOOK 算法对 SCAN 算法进行了改进，如果磁头移动方向上已经没有别的请求，就可以立即改变磁头移动方向，依此往复。也就是边扫描边观察指定方向上还有无请求，因此叫 LOOK。</p></li><li><p><strong>均衡循环扫描算法（C-LOOK）</strong>：C-SCAN 只有到达磁盘边界时才能改变磁头移动方向，并且磁头返回时也需要返回到磁盘起点，这样可能会做很多无用功。C-LOOK 算法对 C-SCAN 算法进行了改进，如果磁头移动的方向上已经没有磁道访问请求了，就可以立即让磁头返回，并且磁头只需要返回到有磁道访问请求的位置即可。</p></li></ul>',52);function s(c,h){return i(),o("div",null,[d,a(" more "),l])}const u=r(n,[["render",s],["__file","2os.html.vue"]]);export{u as default};
