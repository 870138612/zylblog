import{_ as r}from"./image-20230616180622721-856ebc36.js";import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as n,e as t,f as a}from"./app-2a953381.js";const s="/markdown/image-20230725163829029.png",o="/markdown/image-20230725164807737.png",d="/markdown/image-20230725170840800.png",h="/markdown/image-20230725170812915.png",l={},c=a('<h2 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域" aria-hidden="true">#</a> 运行时数据区域</h2><h4 id="线程私有的" tabindex="-1"><a class="header-anchor" href="#线程私有的" aria-hidden="true">#</a> <strong>线程私有的：</strong></h4><ul><li><h5 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器" aria-hidden="true">#</a> 程序计数器</h5><ul><li>一块很小的内存区域，保存了将要执行指令的地址。为了线程切换之后能恢复到正确的执行位置，每一个线程都需要一个程序计数器，各线程之间计数器互不影响，称为“线程私有”的内存。</li><li>程序计数器是唯一一个不会出现 OOM 的内存区域，随着线程的创建而创建，线程的消亡而消亡。</li></ul></li></ul>',3),p=a('<ul><li><h5 id="虚拟机栈" tabindex="-1"><a class="header-anchor" href="#虚拟机栈" aria-hidden="true">#</a> 虚拟机栈</h5><ul><li><p>虚拟机栈也是线程私有的，方法调用的数据需要通过栈进行传递，每一次方法调用都会有一个对应的栈帧被压入栈中，每一个方法调用结束后，都会有一个栈帧被弹出。</p></li><li><p>栈由一个个栈帧组成，而每个栈帧中都拥有：<strong>局部变量表、操作数栈、动态链接、方法返回地址</strong>。和数据结构上的栈类似，两者都是先进后出的数据结构，只支持出栈和入栈两种操作。</p><ul><li><p><strong>局部变量表</strong>：主要存放了编译期可知的各种数据类型、对象引用。</p></li><li><p><strong>操作数栈</strong>：主要作为方法调用的中转站使用，用于存放方法执行过程中产生的中间计算结果。</p></li><li><p><strong>动态链接</strong> ：主要服务一个方法需要调用其他方法的场景。Class 文件的常量池里保存有大量的符号引用比如方法引用的符号引用。当一个方法要调用其他方法，需要将常量池中指向方法的符号引用转化为直接引用 。动态链接就是<strong>将符号引用转换为调用方法的直接引用</strong>。</p><p><img src="'+s+'" alt="image-20230725163829029"></p></li></ul></li></ul></li><li><h5 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h5><ul><li>和虚拟机栈所发挥的作用非常相似，区别是：<strong>虚拟机栈为虚拟机执行 Java 方法（也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务</strong>。</li></ul></li></ul><h4 id="线程共有的" tabindex="-1"><a class="header-anchor" href="#线程共有的" aria-hidden="true">#</a> <strong>线程共有的：</strong></h4><ul><li><h5 id="堆" tabindex="-1"><a class="header-anchor" href="#堆" aria-hidden="true">#</a> 堆</h5><ul><li>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></li></ul></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>在JDK1.7开启了逃逸分析，如果一个对象引用不会逃出本方法的作用范围，则认为没有逃逸，直接进行栈上分配。</p></div><ul><li><h5 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区" aria-hidden="true">#</a> 方法区</h5><ul><li>方法区属于是 JVM 运行时数据区域的一块逻辑区域，是各个线程共享的内存区域。从内存分布图中可以看出<strong>永久代是JDK 1.8之前的方法区实现（运行时数据区），JDK1.8及以后方法区的实现变成了元空间（本地内存）</strong>。</li><li>转到本地内存的原因：元空间使用本地内存，可能会受到本机内存的限制，但是出现溢出的概率比原来的永久代小很多。</li></ul></li></ul><p><img src="'+r+'" alt="519132906"></p><h2 id="运行时常量池-方法区内部" tabindex="-1"><a class="header-anchor" href="#运行时常量池-方法区内部" aria-hidden="true">#</a> 运行时常量池（方法区内部）</h2><p>Class文件中除了有类的版本号、字段、方法、接口等描述信息，还有用于存放各种<strong>字面量和符号引用</strong>的常量池表。</p><p>字面量是源代码中的固定值的表示法，即通过字面我们就能知道其值的含义。字面量包括整数、浮点数和字符串字面量。常见的符号引用包括类符号引用、字段符号引用、方法符号引用、接口方法符号。</p><p>常量池表会在类加载后存放到方法区的运行时常量池中。既然<strong>运行时常量池是方法区</strong>的一部分，自然受到方法区内存的限制，当常量池无法再申请到内存时会抛出 <code>OutOfMemoryError</code> 错误。</p><h2 id="字符串常量池" tabindex="-1"><a class="header-anchor" href="#字符串常量池" aria-hidden="true">#</a> 字符串常量池</h2><p><strong>JDK1.7 之前，字符串常量池存放在永久代。JDK1.7 字符串常量池和静态变量从永久代移动了 Java 堆中。</strong></p><p>因为方法区的GC效率很低，堆的GC效率很高，Java 程序中通常有大量的字符串等待回收，放入堆中能加快回收频率。</p><p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p><p>HotSpot虚拟机中字符串常量池的实现是 <code>stringTable.cpp</code> ，<code>StringTable</code> 可以简单理解为一个固定大小的 <code>HashTable</code> ，容量为 <code>StringTableSize</code>（可以通过 <code>-XX:StringTableSize</code> 参数来设置），保存的是字符串（key）和 字符串对象的引用（value）的映射关系，字符串对象的引用指向堆中的字符串对象。</p><h2 id="jvm-中对象的创建" tabindex="-1"><a class="header-anchor" href="#jvm-中对象的创建" aria-hidden="true">#</a> JVM 中对象的创建</h2><h3 id="_1-类加载检查" tabindex="-1"><a class="header-anchor" href="#_1-类加载检查" aria-hidden="true">#</a> 1. 类加载检查</h3><p>虚拟机遇到 new 指令时，先会检查指令的参数能否在<strong>常量池</strong>中找到这个参数对应类的符号引用，并检查这个符号引用代表的类是否已经加载，解析和初始化。如果没有需要先执行响应的类加载过程。</p><h3 id="_2-分配内存" tabindex="-1"><a class="header-anchor" href="#_2-分配内存" aria-hidden="true">#</a> 2. 分配内存</h3><p>类加载完成之后开始分配内存，所需要的内存大小在类加载完成之后就能确定。内存的分配方式有“<strong>指针碰撞</strong>”和“<strong>空闲列表</strong>”两种。</p><p><strong>指针碰撞</strong></p><ul><li>适合内存规整的情况。</li><li>将用过的内存整理到一边，没用过的放在另外一边，通过移动中间的指针，和另外一边的边界划定一个对象内存大小的区域。</li><li><strong>使用指针碰撞分配方式的 GC 收集器：Serial，ParNew</strong>。</li></ul><p><strong>空闲列表</strong></p><ul><li>适合内存不规整的情况。</li><li>虚拟机维护一个列表，用来表示哪部分的内存是空闲的，在分配的时候找到一块能满足分配大小的空闲内存进行分配。</li><li><strong>使用空闲列表的 GC 收集器：CMS</strong>。</li></ul><p><strong>保证内存分配时的线程安全</strong></p><ul><li>CAS+重试：虚拟机采用CAS和失败重试的方式保证更新操作的原子性。</li><li>TLAB：每一个线程都有一个TLAB（线程本地分配缓冲区），在线程中对象分配内存的时候先会在TLAB中分配，当对象大于TLAB剩余空内存或者TLAB内存耗尽的时候，才会使用CAS+重试的分配方式。</li></ul><h3 id="_3-初始化零值" tabindex="-1"><a class="header-anchor" href="#_3-初始化零值" aria-hidden="true">#</a> 3. 初始化零值</h3><p>内存分配完成后，虚拟机需要将分配到的内存空间都初始化为零值（<strong>不包括对象头</strong>），这一步操作保证了对象的实例字段在 Java 代码中可以不赋初始值就直接使用，程序能访问到这些字段的数据类型所对应的零值。</p><h3 id="_4-设置对象头" tabindex="-1"><a class="header-anchor" href="#_4-设置对象头" aria-hidden="true">#</a> 4. 设置对象头</h3><p>初始化零值完成之后，虚拟机要对对象进行必要的设置，例如这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码、对象的 GC 分代年龄等信息。 这些信息存放在对象头中。另外，根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。</p><p><img src="'+o+'" alt="image-20230725164807737"></p><h3 id="_5-执行-init-方法" tabindex="-1"><a class="header-anchor" href="#_5-执行-init-方法" aria-hidden="true">#</a> 5. 执行 init 方法</h3><p>执行new指令之后会接着执行 <code>&lt;init&gt;</code> 方法，把对象按照程序员的意愿进行初始化，这样一个真正可用的对象才算完全产生出来。</p><h2 id="对象的内存布局" tabindex="-1"><a class="header-anchor" href="#对象的内存布局" aria-hidden="true">#</a> 对象的内存布局</h2><p>在Hotspot虚拟机中，对象在内存中的布局可以分为 3 块区域：<strong>对象头</strong>、<strong>实例数据</strong>和<strong>对齐填充</strong>。</p><p>对象头包含两部分信息：一部分用于存储对象自身的运行时数据（哈希码，GC 分代年龄，锁状态标志），另外一部分是类型指针，即对象指向他的类数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。</p><p><strong>实例数据部分是对象真正存储的有效信息，对齐填充部分不是必然存在的，也没有什么特别的含义，仅仅起占位作用。</strong>（内存对齐存放）</p><h2 id="对象的访问定位" tabindex="-1"><a class="header-anchor" href="#对象的访问定位" aria-hidden="true">#</a> 对象的访问定位</h2><p>对象的访问定位就是如何找到创建的对象信息，包括实例和类数据。</p><h3 id="直接指针" tabindex="-1"><a class="header-anchor" href="#直接指针" aria-hidden="true">#</a> 直接指针</h3><p>如果使用直接指针访问，reference 中存储的直接就是对象的地址。</p><p><img src="'+d+'" alt="image-20230725170840800"></p><h3 id="句柄" tabindex="-1"><a class="header-anchor" href="#句柄" aria-hidden="true">#</a> 句柄</h3><p>如果使用句柄的话，那么 Java 堆中将会划分出一块内存来作为句柄池，reference 中存储的就是对象的句柄地址，而句柄中包含了对象实例数据与对象类型数据各自的具体地址信息。</p><p><img src="'+h+'" alt="image-20230725170812915"></p>',45);function g(u,m){return i(),n("div",null,[c,t(" more "),p])}const x=e(l,[["render",g],["__file","1memory.html.vue"]]);export{x as default};
