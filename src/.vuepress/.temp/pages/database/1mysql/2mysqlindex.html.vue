<template><div><h2 id="mysql索引" tabindex="-1"><a class="header-anchor" href="#mysql索引" aria-hidden="true">#</a> MySQL索引</h2>
<p>索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。</p>
<!-- more -->
<p><strong>优点</strong>：</p>
<ul>
<li>使用索引可以大大加快数据的检索速度，这也是创建索引的主要原因。</li>
<li>通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。</li>
</ul>
<p><strong>缺点</strong>：</p>
<ul>
<li>创建索引和维护索引需要耗费许多时间，当堆表中的数据进行增删改的时候，如果数据有索引，那么索引也需要改动，降低SQL执行效率。</li>
<li>索引需要占用一定的物理空间。</li>
</ul>
<h3 id="索引底层数据结构" tabindex="-1"><a class="header-anchor" href="#索引底层数据结构" aria-hidden="true">#</a> 索引底层数据结构</h3>
<ul>
<li><strong>Hash表</strong></li>
</ul>
<p>哈希表示键值对的集合，通过键可以快速取出对应的值，因此哈希表可以快速检索数据。</p>
<p>但是哈希算法有Hash冲突问题，不同的key最后会得到相同的index。</p>
<p>因为Hash索引不支持顺序和范围查询，所以MySQL没有使用其作为索引的数据结构。</p>
<ul>
<li><strong>二叉查找树（BST）</strong></li>
</ul>
</div></template>


