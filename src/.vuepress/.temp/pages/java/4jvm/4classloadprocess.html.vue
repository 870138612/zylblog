<template><div><h2 id="类的生命周期" tabindex="-1"><a class="header-anchor" href="#类的生命周期" aria-hidden="true">#</a> 类的生命周期</h2>
<p>类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，前三个阶段可以统称为连接（Linking）。</p>
<p>类加载过程：<strong>加载-&gt;连接-&gt;初始化</strong>。</p>
<p>其中连接过程分为：<strong>验证-&gt;准备-&gt;解析</strong>。</p>
<p>整体流程为：<strong>加载-&gt;验证-&gt;准备-&gt;解析-&gt;初始化</strong>。</p>
<!-- more -->
<h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3>
<p>类加载过程的第一步，完成以下三件事情：</p>
<ol>
<li>通过全类名获取定义此类的二进制字节流。</li>
<li>将字节流所代表的<strong>静态存储结构</strong>转化为方法区的<strong>运行时数据结构</strong>。</li>
<li>在内存中生成一个类的<code v-pre>.class</code>文件，作为方法区这些数据的入口。</li>
</ol>
<p>加载这一步通过<strong>类加载</strong>器完成的。</p>
<h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3>
<p>验证是连接中的第一步。这一步的作用是确保Class文件的字节流中包含的信息符合《Java虚拟机规范》的全部要求，保证这些信息被当做代码运行后不会危害虚拟机自身的安全。</p>
<p>验证阶段这一步在整个类加载过程中耗费的资源还是相对较多的，但很有必要，可以有效防止恶意代码的执行。任何时候，程序安全都是第一位。</p>
<p><strong>验证阶段主要由四个检验阶段组成：</strong></p>
<ul>
<li>
<p>文件格式验证（Class文件格式检查）</p>
<p><strong>验证字节流是否符合Class文件格式的规范</strong>。例如是否以魔数开头，主版本号是否在当前虚拟机的处理范围内，详<strong>见类文件结构</strong>。</p>
</li>
<li>
<p>元数据验证（字节码语义检查）</p>
<p><strong>对字节码描述的信息进行语义分析，以保证其描述的信息符合《Java语言规范》要求</strong>。例如这个类是否有父类，这个类是否继承了不允许继承的类。</p>
</li>
<li>
<p>字节码验证（程序语义检查）</p>
<p><strong>通过数据流分析和控制流分析，确定程序语义是合法的，符合逻辑的</strong>。例如函数的参数类型是否正确，对象的类型转换是否合理。</p>
</li>
<li>
<p>符号引用验证（类的正确性检查）</p>
<p><strong>验证类的正确性</strong>。例如该类要使用的其他类、方法、字段是否存在，是否有正确的访问权限。</p>
</li>
</ul>
</div></template>


