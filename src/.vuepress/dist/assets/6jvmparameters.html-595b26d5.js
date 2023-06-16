import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,d as o,e as a}from"./app-7193d35c.js";const p={},t=a(`<h2 id="堆内存相关" tabindex="-1"><a class="header-anchor" href="#堆内存相关" aria-hidden="true">#</a> 堆内存相关</h2><h3 id="指定堆内存-xms和-xmx" tabindex="-1"><a class="header-anchor" href="#指定堆内存-xms和-xmx" aria-hidden="true">#</a> 指定堆内存<code>-Xms</code>和<code>-Xmx</code></h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xms</span><span class="token generics"><span class="token punctuation">&lt;</span>heap size<span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
<span class="token operator">-</span><span class="token class-name">Xmx</span><span class="token generics"><span class="token punctuation">&lt;</span>heap size<span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为JVM堆内存分配最大5GB，最小2GB内存：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-Xms2G -Xmx5G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),c=a(`<h3 id="指定新生代内存-young-generation" tabindex="-1"><a class="header-anchor" href="#指定新生代内存-young-generation" aria-hidden="true">#</a> 指定新生代内存（Young Generation）</h3><p>一共有两种指定新生代内存大小的办法：</p><p><strong>1. 通过<code>-XX:NewSize</code>和<code>-XX:MaxNewSize</code>指定</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:NewSize=256m
-XX:MaxNewSize=1024m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.通过<code>-Xmn&lt;young size&gt;[unit]</code>指定</strong></p><p>为新生代分配256MB内存：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token class-name">Xmn256m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以通过 <strong><code>-XX:NewRatio=&lt;int&gt;</code></strong> 来设置老年代与新生代内存的比值：</p><p>老年代与新生代比值为1:1，说明新生代占整个内存的1/2；</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:NewRatio=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定永久代-元空间大小" tabindex="-1"><a class="header-anchor" href="#指定永久代-元空间大小" aria-hidden="true">#</a> 指定永久代/元空间大小</h3><p>从 Java 8 开始，如果我们没有指定 Metaspace 的大小，随着更多类的创建，虚拟机会耗尽所有可用的<strong>系统内存</strong>（永久代并不会出现这种情况）。</p><p>JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">PermSize</span><span class="token operator">=</span><span class="token class-name">N</span> #方法区 <span class="token punctuation">(</span>永久代<span class="token punctuation">)</span> 初始大小
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxPermSize</span><span class="token operator">=</span><span class="token class-name">N</span> #方法区 <span class="token punctuation">(</span>永久代<span class="token punctuation">)</span> 最大大小<span class="token punctuation">,</span>超过这个值将会抛出 <span class="token class-name">OutOfMemoryError</span> 异常<span class="token operator">:</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>OutOfMemoryError</span><span class="token operator">:</span> <span class="token class-name">PermGen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK1.7 就已经开始了），取而代之是元空间，<strong>元空间使用的是本地内存</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> #设置 <span class="token class-name">Metaspace</span> 的<span class="token constant">FGC</span>阈值
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> #设置 <span class="token class-name">Metaspace</span> 的最大大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Metaspace 由于使用不断扩容到<code>-XX:MetaspaceSize</code>参数指定的量，就会发生 Full GC，且之后每次 Metaspace 扩容都会发生 Full GC。</p><h2 id="垃圾收集器相关" tabindex="-1"><a class="header-anchor" href="#垃圾收集器相关" aria-hidden="true">#</a> 垃圾收集器相关</h2><h3 id="垃圾回收器" tabindex="-1"><a class="header-anchor" href="#垃圾回收器" aria-hidden="true">#</a> 垃圾回收器</h3><p>JVM 具有四种类型的 GC 实现：</p><ul><li>串行垃圾收集器</li><li>并行垃圾收集器</li><li>CMS 垃圾收集器</li><li>G1 垃圾收集器</li></ul><p>可以使用以下参数声明这些实现：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseSerialGC</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseParallelGC</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseParNewGC</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseG1GC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gc-日志记录" tabindex="-1"><a class="header-anchor" href="#gc-日志记录" aria-hidden="true">#</a> GC 日志记录</h3><p>生产环境上，或者其他要测试 GC 问题的环境上，一定会配置上打印 GC 日志的参数，便于分析 GC 相关的问题。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 必选
# 打印基本 <span class="token constant">GC</span> 信息
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintGCDetails</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintGCDateStamps</span>
# 打印对象分布
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintTenuringDistribution</span>
# 打印堆数据
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintHeapAtGC</span>
# 打印<span class="token class-name">Reference</span>处理信息
# 强引用<span class="token operator">/</span>弱引用<span class="token operator">/</span>软引用<span class="token operator">/</span>虚引用<span class="token operator">/</span>finalize 相关的方法
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintReferenceGC</span>
# 打印<span class="token constant">STW</span>时间
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintGCApplicationStoppedTime</span>

# 可选
# 打印safepoint信息，进入 <span class="token constant">STW</span> 阶段之前，需要要找到一个合适的 safepoint
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">PrintSafepointStatistics</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">PrintSafepointStatisticsCount</span><span class="token operator">=</span><span class="token number">1</span>

# <span class="token constant">GC</span>日志输出的文件路径
<span class="token operator">-</span><span class="token class-name">Xloggc</span><span class="token operator">:</span><span class="token operator">/</span>path<span class="token operator">/</span><span class="token keyword">to</span><span class="token operator">/</span>gc<span class="token operator">-</span><span class="token operator">%</span>t<span class="token punctuation">.</span>log
# 开启日志文件分割
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseGCLogFileRotation</span>
# 最多分割几个文件，超过之后从头文件开始写
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">NumberOfGCLogFiles</span><span class="token operator">=</span><span class="token number">14</span>
# 每个文件上限大小，超过就触发分割
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">GCLogFileSize</span><span class="token operator">=</span><span class="token number">50</span>M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="处理-oom" tabindex="-1"><a class="header-anchor" href="#处理-oom" aria-hidden="true">#</a> 处理 OOM</h2><p>对于大型应用程序来说，面对内存不足错误是非常常见的，这反过来会导致应用程序崩溃。这是一个非常关键的场景，很难通过复制来解决这个问题。</p><p>这就是为什么 JVM 提供了一些参数，这些参数将堆内存转储到一个物理文件中，以后可以用来查找泄漏:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">HeapDumpOnOutOfMemoryError</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">HeapDumpPath</span><span class="token operator">=</span><span class="token punctuation">.</span>/java_pid<span class="token generics"><span class="token punctuation">&lt;</span>pid<span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span>hprof
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token class-name">OnOutOfMemoryError</span><span class="token operator">=</span><span class="token string">&quot;&lt; cmd args &gt;;&lt; cmd args &gt;&quot;</span>
<span class="token operator">-</span><span class="token constant">XX</span><span class="token operator">:</span><span class="token operator">+</span><span class="token class-name">UseGCOverheadLimit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>HeapDumpOnOutOfMemoryError</strong> 指示 JVM 在遇到 <strong>OutOfMemoryError</strong> 错误时将 heap 转储到物理文件中。</p></li><li><p><strong>HeapDumpPath</strong> 表示要写入文件的路径; 可以给出任何文件名; 但是，如果 JVM 在名称中找到一个 <code>&lt;pid&gt;</code> 标记，则当前进程的进程 id 将附加到文件名中，并使用<code>.hprof</code>格式</p></li><li><p><strong>OnOutOfMemoryError</strong> 用于发出紧急命令，以便在内存不足的情况下执行; 应该在 <code>cmd args</code> 空间中使用适当的命令。例如，如果我们想在内存不足时重启服务器，我们可以设置参数: <code>-XX:OnOutOfMemoryError=&quot;shutdown -r&quot;</code> 。</p></li><li><p><strong>UseGCOverheadLimit</strong> 是一种策略，它限制在抛出 OutOfMemory 错误之前在 GC 中花费的 VM 时间的比例</p></li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><p><code>-server</code> : 启用“ Server Hotspot VM”; 此参数默认用于 64 位 JVM</p><p><code>-XX:+UseStringDeduplication</code> : <em>Java 8u20</em> 引入了这个 JVM 参数，通过创建太多相同 String 的实例来减少不必要的内存使用; 这通过将重复 String 值减少为单个全局 <code>char []</code> 数组来优化堆内存。</p><p><code>-XX:+UseLWPSynchronization</code>: 设置基于 LWP (轻量级进程)的同步策略，而不是基于线程的同步。</p><p>\`\`-XX:LargePageSizeInBytes \`: 设置用于 Java 堆的较大页面大小; 它采用 GB/MB/KB 的参数; 页面大小越大，我们可以更好地利用虚拟内存硬件资源; 然而，这可能会导致 PermGen 的空间大小更大，这反过来又会迫使 Java 堆空间的大小减小。</p><p><code>-XX:MaxHeapFreeRatio</code> : 设置 GC 后, 堆空闲的最大百分比，以避免收缩。</p><p><code>-XX:SurvivorRatio</code> : eden/survivor 空间的比例, 例如<code>-XX:SurvivorRatio=6</code> 设置每个 survivor 和 eden 之间的比例为 1:6。</p><p><code>-XX:+UseLargePages</code> : 如果系统支持，则使用大页面内存; 请注意，如果使用这个 JVM 参数，OpenJDK 7 可能会崩溃。</p><p><code>-XX:+UseStringCache</code> : 启用 String 池中可用的常用分配字符串的缓存。</p><p><code>-XX:+UseCompressedStrings</code> : 对 String 对象使用 <code>byte []</code> 类型，该类型可以用纯 ASCII 格式表示。</p><p><code>-XX:+OptimizeStringConcat</code> : 它尽可能优化字符串串联操作。</p>`,42);function r(l,i){return n(),e("div",null,[t,o(" more "),c])}const k=s(p,[["render",r],["__file","6jvmparameters.html.vue"]]);export{k as default};
