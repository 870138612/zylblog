<template><div><p><img src="https://blog-1312634242.cos.ap-shanghai.myqcloud.com/markdown/130.jpg" alt="130"></p>
<!-- more -->
<h2 id="内存分配和回收原则" tabindex="-1"><a class="header-anchor" href="#内存分配和回收原则" aria-hidden="true">#</a> 内存分配和回收原则</h2>
<h3 id="对象优先在eden中分配" tabindex="-1"><a class="header-anchor" href="#对象优先在eden中分配" aria-hidden="true">#</a> 对象优先在Eden中分配</h3>
<p>大多数情况下，对象在新生代中 Eden 区分配。当 Eden 区没有足够空间进行分配时，虚拟机将发起一次 Minor GC。</p>
<h3 id="大对象直接进入老年代" tabindex="-1"><a class="header-anchor" href="#大对象直接进入老年代" aria-hidden="true">#</a> 大对象直接进入老年代</h3>
<p>大对象就是需要大量连续内存空间的对象（比如：字符串、数组）。</p>
<p>大对象直接进入老年代主要是为了避免为大对象分配内存时由于分配担保机制带来的复制而降低效率。</p>
<h3 id="长期存活的对象将进入老年代" tabindex="-1"><a class="header-anchor" href="#长期存活的对象将进入老年代" aria-hidden="true">#</a> 长期存活的对象将进入老年代</h3>
<p>虚拟机给每个对象一个对象年龄（Age）计数器。</p>
<p>大部分情况，对象都会首先在 Eden 区域分配。如果对象在 Eden 出生并经过第一次 Minor GC 后仍然能够存活，并且能被 Survivor 容纳的话，将被移动到 Survivor 空间（s0 或者 s1）中，并将对象年龄设为 1(Eden 区-&gt;Survivor 区后对象的初始年龄变为 <strong>1</strong>)。</p>
<p>对象在 Survivor 中每熬过一次 MinorGC,年龄就增加 1 岁，当它的年龄增加到一定程度（默认为 15 岁），就会被晋升到老年代中。</p>
<p>对象晋升到老年代的年龄阈值，可以通过参数 <code v-pre>-XX:MaxTenuringThreshold</code> 来设置。</p>
<div class="hint-container info">
<p class="hint-container-title">额外的</p>
<p>Hotspot 遍历所有对象时，按照年龄从小到大对其所占用的大小进行累积，当累积的某个年龄大小超过了 survivor 区的 50% 时（默认值是 50%，可以通过 <code v-pre>-XX:TargetSurvivorRatio=percent</code> 来设置），取这个年龄和 MaxTenuringThreshold 中更小的一个值，作为新的晋升年龄阈值”。</p>
</div>
<h3 id="gc区域" tabindex="-1"><a class="header-anchor" href="#gc区域" aria-hidden="true">#</a> GC区域</h3>
<p>针对 HotSpot VM 的实现，它里面的 GC 其实准确分类只有两大种：</p>
<p><strong>部分收集 (Partial GC)</strong>：</p>
<ul>
<li>新生代收集（Minor GC / Young GC）：只对新生代进行垃圾收集；</li>
<li>老年代收集（Major GC / Old GC）：只对老年代进行垃圾收集。需要注意的是 Major GC 在有的语境中也用于指代整堆收集；</li>
<li>混合收集（Mixed GC）：对整个新生代和部分老年代进行垃圾收集。</li>
</ul>
<p><strong>整堆收集 (Full GC)</strong>：收集整个 Java 堆和方法区。</p>
<h3 id="空间分配担保" tabindex="-1"><a class="header-anchor" href="#空间分配担保" aria-hidden="true">#</a> 空间分配担保</h3>
<p>在发生 Minor GC 之前，虚拟机必须先检查老年代<strong>最大可用的连续空间是否大于新生代所有对象总空间</strong>，如果这个条件成立，那这一次 Minor GC 可以确保是安全的，如果不成立，则虚拟机会先查看 <code v-pre>-XX:HandlePromotionFailure</code> 参数的设置值是否允许担保失败(Handle Promotion Failure)；如果允许，那会继续检查<strong>老年代最大可用的连续空间</strong>是否大于历次晋升到老年代对象的平均大小，如果大于，将尝试进行一次 Minor GC，尽管这次 Minor GC 是有风险的；如果小于，或者 <code v-pre>-XX: HandlePromotionFailure</code> 设置不允许冒险，那这时就要改为进行一次 Full GC。</p>
<blockquote>
<p>可能存在所有的新生代对象都在这次GC之后晋升至老年代，老年代如果没有足够的内存则无法担保分配</p>
</blockquote>
<h2 id="死亡对象的判断方法" tabindex="-1"><a class="header-anchor" href="#死亡对象的判断方法" aria-hidden="true">#</a> 死亡对象的判断方法</h2>
<h3 id="引用计数法" tabindex="-1"><a class="header-anchor" href="#引用计数法" aria-hidden="true">#</a> 引用计数法</h3>
<p>给对象添加一个计数器：</p>
<ul>
<li>有地方引用的时候就将计数器+1；</li>
<li>引用失效，将计数器-1；</li>
<li>计数器为0的对象就是不会再被使用的对象。</li>
</ul>
<p>简单高效，但是对象之间存在循环引用，导致他们的计数值都不为0，无法通知GC回收器回收它们。</p>
<h3 id="可达性分析" tabindex="-1"><a class="header-anchor" href="#可达性分析" aria-hidden="true">#</a> 可达性分析</h3>
<p>这个算法的基本思想就是通过一系列的称为 <strong>“GC Roots”</strong> 的对象作为起点，从这些节点开始向下搜索，节点所走过的路径称为引用链，当一个对象到 GC Roots 没有任何引用链相连的话，则证明此对象是不可用的，需要被回收。</p>
<h4 id="可以作为gc-roots的对象" tabindex="-1"><a class="header-anchor" href="#可以作为gc-roots的对象" aria-hidden="true">#</a> 可以作为<strong>GC Roots</strong>的对象</h4>
<ul>
<li>虚拟机栈中的对象；</li>
<li>本地方法栈中的对象；</li>
<li>方法区中静态属性引用的变量；</li>
<li>方法区中常量引用的对象；</li>
<li>所有被同步锁持有的对象。</li>
</ul>
<h4 id="对象可以被回收-就代表一定会被回收吗" tabindex="-1"><a class="header-anchor" href="#对象可以被回收-就代表一定会被回收吗" aria-hidden="true">#</a> 对象可以被回收，就代表一定会被回收吗？</h4>
<p>即使被标记为不可达的对象，也并不会立即被回收，而是处于”缓刑“阶段，经过真正的宣告对象死亡，至少要经过两次标记过程；</p>
<p>可达性分析中不可达的对象被第一次标记并且进行一次筛选，筛选的条件是此对象是否有必要执行<code v-pre>finalize</code>方法。</p>
<blockquote>
<p>对象没有覆盖<code v-pre>finalize</code>方法，或者<code v-pre>finalize</code>方法已经被虚拟机调用过，虚拟机把这两种情况视为没有必要执行。</p>
</blockquote>
<p>被判断需要执行的对象将会被放在一个队列中进行第二次标记，除非这个对象的引用链上的任何一个对象建立关联，否则就会被回收。</p>
<h3 id="引用类型总结" tabindex="-1"><a class="header-anchor" href="#引用类型总结" aria-hidden="true">#</a> 引用类型总结</h3>
<ul>
<li>
<p>强引用：必不可少的，垃圾回收器绝对不会回收的对象。</p>
</li>
<li>
<p>软引用：可有可无的，内存足够不会回收，如果内存不太够则可能会回收。</p>
</li>
<li>
<p>弱引用：可有可无的，与软引用的区别在于：具有弱引用的对象具有更短的声明周期，垃圾回收器一旦发现，不管内存空间是否紧张都会回收这个对象。</p>
</li>
<li>
<p>虚引用：形同虚设，虚引用不会决定对象的声明周期，如果一个对象仅持有虚引用，则和没有任何引用一样，任何时候都有可能被回收。</p>
</li>
</ul>
<p><strong>虚引用主要用来跟踪对象被垃圾回收的活动</strong>。</p>
<p><strong>虚引用与软引用和弱引用的一个区别在于：</strong> 虚引用必须和引用队列（ReferenceQueue）联合使用。当垃圾回收器准备回收一个对象时，如果发现它还有虚引用，就会在回收对象的内存之前，把这个虚引用加入到与之关联的引用队列中。</p>
<p>程序可以通过判断引用队列中是否已经加入了虚引用，来了解被引用的对象是否将要被垃圾回收。程序如果发现某个虚引用已经被加入到引用队列，那么就可以在所引用的对象的内存被回收之前采取必要的行动。</p>
<p>特别注意，在程序设计中一般很少使用弱引用与虚引用，使用软引用的情况较多，这是因为<strong>软引用可以加速 JVM 对垃圾内存的回收速度，可以维护系统的运行安全，防止内存溢出（OutOfMemory）等问题的产生</strong>。</p>
<h3 id="如何判断一个常量是废弃常量" tabindex="-1"><a class="header-anchor" href="#如何判断一个常量是废弃常量" aria-hidden="true">#</a> 如何判断一个常量是废弃常量？</h3>
<p><strong>JDK1.7 之前运行时常量池逻辑包含字符串常量池存放在方法区</strong>, 此时 hotspot 虚拟机对方法区的实现为永久代。</p>
<p><strong>JDK1.7 字符串常量池被从方法区拿到了堆中</strong>, 这里没有提到运行时常量池,也就是说字符串常量池被单独拿到堆,运行时常量池剩下的东西还在方法区, 也就是 hotspot 中的永久代 。</p>
<p>JDK1.8 hotspot 移除了永久代用元空间(Metaspace)取而代之, 这时候<strong>字符串常量池还在堆</strong>, 运行时常量池还在方法区, 只不过方法区的实现从永久代变成了元空间(Metaspace)。</p>
<p>假如在字符串常量池中存在字符串 &quot;abc&quot;，如果当前没有任何 String 对象引用该字符串常量的话，就说明常量 &quot;abc&quot; 就是废弃常量，如果这时发生内存回收的话而且有必要的话，&quot;abc&quot; 就会被系统清理出常量池了。</p>
<h3 id="如何判断一个类是无用的类" tabindex="-1"><a class="header-anchor" href="#如何判断一个类是无用的类" aria-hidden="true">#</a> 如何判断一个类是无用的类？</h3>
<p>判定一个常量是否是“废弃常量”比较简单，而要判定一个类是否是“无用的类”的条件则相对苛刻许多。</p>
<p>类需要同时满足下面 3 个条件才能算是 <strong>“无用的类”</strong>：</p>
<ul>
<li>该类所有的实例都已经被回收，也就是 Java 堆中不存在该类的任何实例。</li>
<li>加载该类的 <code v-pre>ClassLoader</code> 已经被回收。</li>
<li>该类对应的 <code v-pre>java.lang.Class</code> 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法。</li>
</ul>
<p>虚拟机可以对满足上述 3 个条件的无用类进行回收，这里说的仅仅是“可以”，而并不是和对象一样不使用了就会必然被回收。</p>
<h2 id="垃圾收集算法" tabindex="-1"><a class="header-anchor" href="#垃圾收集算法" aria-hidden="true">#</a> 垃圾收集算法</h2>
<h3 id="标记-清除算法" tabindex="-1"><a class="header-anchor" href="#标记-清除算法" aria-hidden="true">#</a> 标记-清除算法</h3>
<p>标记-清除（Mark-and-Sweep）算法分为“标记（Mark）”和“清除（Sweep）”阶段：首先标记出所有不需要回收的对象，在标记完成后统一回收掉所有没有被标记的对象。</p>
<ol>
<li><strong>效率问题</strong>：标记和清除两个过程效率都不高。</li>
<li><strong>空间问题</strong>：标记清除后会产生大量不连续的内存碎片。</li>
</ol>
<h3 id="复制算法" tabindex="-1"><a class="header-anchor" href="#复制算法" aria-hidden="true">#</a> 复制算法</h3>
<p>为了解决标记-清除算法的效率和内存碎片问题，复制（Copying）收集算法出现了。它可以将内存分为大小相同的两块，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。</p>
<p>对应到新生代就是<code v-pre>survivor</code>中的<code v-pre>from</code>区和<code v-pre>to</code>区。</p>
<p><strong>1.可用内存变小</strong>：可用内存缩小为原来的一半，一半作为<code v-pre>from</code>区，一半作为<code v-pre>to</code>。</p>
<p><strong>2.不适合老年代</strong>：如果存活对象数量比较大，复制性能会变得很差。</p>
<h3 id="分代收集算法-hotspot为什么要分代" tabindex="-1"><a class="header-anchor" href="#分代收集算法-hotspot为什么要分代" aria-hidden="true">#</a> 分代收集算法/HotSpot为什么要分代</h3>
<p>当前虚拟机的垃圾收集都采用分代收集算法，这种算法没有什么新的思想，只是根据对象存活周期的不同将内存分为几块。一般将 Java 堆分为新生代和老年代，这样就可以根据各个年代的特点选择合适的垃圾收集算法。</p>
<p>在新生代中，每次收集都有大量对象死去，所以可以采用“标记-复制算法”，只需要付出少量对象的复制成本就能完成垃圾收集，而老年代中对象存活的久，并且没有额外的空间对它进行分配担保，所以选择“标记-清除”或“标记-整理”算法进行垃圾收集。</p>
</div></template>


