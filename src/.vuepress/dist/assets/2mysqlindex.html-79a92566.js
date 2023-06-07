import{_ as e,Z as i,$ as r,a2 as n,a0 as a,a1 as l,a3 as d}from"./framework-dfa6aaa8.js";const s="/markdown/image-20230525201956470.png",t={},h=a("h2",{id:"索引",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#索引","aria-hidden":"true"},"#"),l(" 索引")],-1),o=a("p",null,"索引是一种用于快速查询和检索数据的数据结构，其本质可以看成是一种排序好的数据结构。",-1),p=d('<p><strong>优点</strong>：</p><ul><li>使用索引可以大大加快数据的检索速度，这也是创建索引的主要原因。</li><li>通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。</li></ul><p><strong>缺点</strong>：</p><ul><li>创建索引和维护索引需要耗费许多时间，当堆表中的数据进行增删改的时候，如果数据有索引，那么索引也需要改动，降低SQL执行效率。</li><li>索引需要占用一定的物理空间。</li></ul><h2 id="索引底层数据结构" tabindex="-1"><a class="header-anchor" href="#索引底层数据结构" aria-hidden="true">#</a> 索引底层数据结构</h2><h3 id="hash表" tabindex="-1"><a class="header-anchor" href="#hash表" aria-hidden="true">#</a> Hash表</h3><p>哈希表示键值对的集合，通过键可以快速取出对应的值，因此哈希表可以快速检索数据。</p><p>但是哈希算法有Hash冲突问题，不同的key最后会得到相同的index。</p><p>因为Hash索引不支持顺序和范围查询，所以MySQL没有使用其作为索引的数据结构。</p><h3 id="二叉查找树-bst" tabindex="-1"><a class="header-anchor" href="#二叉查找树-bst" aria-hidden="true">#</a> 二叉查找树（BST）</h3><p>二叉查找树是一种基于二叉树的数据结构，具有以下特点：</p><ol><li>左子树的所有节点值均小于根节点。</li><li>右子树所有节点的值均大于根节点的值。</li><li>左右子树也符合上述规则。</li></ol><p>当二叉查找树是平衡的时候，任何节点的左右子树高度差的绝对值不超过1即为平衡，查询的时间复杂度是O(log2(N))。当二叉查找树不平衡时，最坏情况下退化为线性链表，查找的时间复杂度是O(N)。</p><p>因为不会自动平衡，不适合作为MySQL底层索引的数据结构。</p><h3 id="avl树" tabindex="-1"><a class="header-anchor" href="#avl树" aria-hidden="true">#</a> AVL树</h3><p>AVL树是自平衡的二叉查找树。保证任何节点的左右子树高度差的绝对值不超过1，因此被称为平衡二叉树，它的查找、插入和删除在平均和最坏情况下的时间复杂度都是 O(logn)。</p><p>AVL树需要频繁的进行旋转来保持平衡，因此会有较大的计算开销。并且使用AVL树，每个树节点仅存储一个数据，每次磁盘IO只能读取一个节点的数据。</p><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h3><p>红黑树是一种自平衡的二叉查找树，通过在插入和删除节点时进行颜色变换和旋转操作，使得树始终平衡，具有以下特点：</p><ol><li>每个节点不是红色就是黑色。</li><li>根节点总是黑色。</li><li>每个叶子节点都是黑色的空节点。</li><li>如果节点是红色的，则它的子节点必须是黑色（反之不一定）。</li><li>从根节点到叶节点或空子节点的每一条路径，必须包含相同数目的黑色节点（即相同的黑色高度）。</li></ol><blockquote><p>和 AVL 树不同的是，红黑树并不追求严格的平衡，而是大致的平衡。正因如此，红黑树的查询效率稍有下降，因为红黑树的平衡性相对较弱，可能会导致树的高度较高，这可能会导致一些数据需要进行多次磁盘 IO 操作才能查询到，这也是 MySQL 没有选择红黑树的主要原因。也正因如此，红黑树的插入和删除操作效率大大提高了，因为红黑树在插入和删除节点时只需进行 O(1) 次数的旋转和变色操作，即可保持基本平衡状态，而不需要像 AVL 树一样进行 O(logn) 次数的旋转操作。</p></blockquote><h3 id="b-树-b-树" tabindex="-1"><a class="header-anchor" href="#b-树-b-树" aria-hidden="true">#</a> B 树&amp; B+树</h3><p>B树也称为B-树，全称<strong>多路平衡查找树</strong>，B+树是B树的变体，B树和B+树中的B是<code>Balanced</code>的意思。</p><p><strong>有何不同？</strong></p><ul><li>B树的所有节点既存放键（key）也存放数据（data），而B+树只有叶子节点存放key和data，其他节点只存放key，起到索引作用。</li><li>B树的叶子节点都是独立的，<strong>B+树的叶子节点有一条引用链指向与他相邻的叶子节点。</strong></li><li>B树的检索过程相当于对范围内的每个结点的关键字做二分查找，可能还没有到达叶子节点，索引就结束了。而B+树任何查找都是根节点到叶子节点的过程，只有叶子节点存储data。</li><li>在B树中进行范围查询时，首先要找到查找的下限，然后对B树进行中序遍历，直到找到查找的上限；而B+树的范围查询，只需要拍对链表进行遍历即可。</li></ul><div class="hint-container info"><p class="hint-container-title">实现方式</p><p>MyISAM引擎和InnoDB引擎都是使用B+树作为索引结构，但是两者实现方式有所不同：</p><p>MyISAM引擎中，B+树叶节点的data域存放的是数据记录的地址，搜索的时候如果找道对应的节点，则会将节点的data值拿出，再通过data值作为地址读取相应的数据，这被称为<strong>非聚簇索引（非聚集索引）</strong>。</p><p>InnoDB中，数据文件本身就是索引文件，树的叶节点data域保存了完整的数据记录。这个索引的key是数据表的主键，因此InnoDB表数据文件本身就是索引，这被称为<strong>聚簇索引（聚集索引）</strong>，而其余的索引都成为<strong>辅助索引</strong>，辅助索引的data域存储响应记录主键的值而不是地址。根据主索引搜索时，直接找到key所在的节点即可取出数据；在根据辅助索引查找时，则需要先取出主键的值，再走一遍主索引。</p></div><h2 id="主键索引-primary-key" tabindex="-1"><a class="header-anchor" href="#主键索引-primary-key" aria-hidden="true">#</a> 主键索引（Primary Key）</h2><p>数据表的主键列使用的就是主键索引。</p><p>一张表只能有一个主键，并且不能为null，不能重复。</p><p>在 MySQL 的 InnoDB 的表中，当没有显示的指定表的主键时，InnoDB 会自动先检查表中是否有唯一索引且不允许存在 null 值的字段，如果有，则选择该字段为默认的主键，否则 InnoDB 将会自动创建一个 6Byte 的自增主键。</p><p><img src="'+s+`" alt="image-20230525201956470"></p><h2 id="二级索引" tabindex="-1"><a class="header-anchor" href="#二级索引" aria-hidden="true">#</a> 二级索引</h2><p>二级索引又称为辅助索引，是因为二级索引的叶子节点存储的数据是主键，也就是通过辅助索引能定位主键的位置。</p><ol><li><strong>唯一索引</strong>：唯一索引是一种约束。唯一索引的属性页不能出现重复的数据，但是允许数据为NULL，一张表允许创建多个唯一索引。建立唯一索引的目的大部分都是为了属性列的数据唯一性，而不是为了查询效率。</li><li><strong>普通索引</strong>：普通索引的唯一作用就是为了快速查询数据，一张表允许创建多个普通索引，并允许数据重复和NULL。</li><li><strong>前缀索引</strong>：前缀索引只适用于字符串类型的数据。前缀索引是对文本的前几个字符创建索引，相比普通索引建立的数据更小。</li><li><strong>全文索引</strong>：全文索引主要为了检索大文本数据中的关键字信息，是目前搜索引擎数据库使用的一种技术。</li></ol><h2 id="聚簇索引与非聚簇索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引与非聚簇索引" aria-hidden="true">#</a> 聚簇索引与非聚簇索引</h2><h3 id="聚簇索引-聚集索引" tabindex="-1"><a class="header-anchor" href="#聚簇索引-聚集索引" aria-hidden="true">#</a> 聚簇索引（聚集索引）</h3><p>聚簇索引即索引结构和数据一起存放的索引，并不是一种单独的索引类型。InnoDB中的主键索引就属于聚簇索引。</p><p><strong>优点</strong>：</p><ul><li>查询速度非常快：库粗索引的查询速度很快，因为B+树本身就是一棵多叉平衡树，叶子节点也都是有序的，定位到索引的节点，相当于定位到了数据。相比于非聚簇索引，聚簇索引少了一次读取数据的IO操作。</li><li>对排序查找和范围查找优化：聚簇索引对于主键的排序查找和范围查找速度很快。</li></ul><p><strong>缺点</strong>：</p><ul><li>依赖于有序的数据：因为B+树是多路平衡树，如果索引的数据不是有序的，那么就需要在插入时排序。</li><li>更新代价大：如果对索引列的数据被修改时，那么对应的索引也将会被修改，而且聚簇索引的叶子节点还存放着数据，修改的代价很大。</li></ul><h3 id="非聚簇索引-非聚集索引" tabindex="-1"><a class="header-anchor" href="#非聚簇索引-非聚集索引" aria-hidden="true">#</a> 非聚簇索引（非聚集索引）</h3><p>非聚簇索引即索引结构和数据分开存放的索引，并不是一种单独的索引类型，二级索引（辅助索引）就属于非聚簇索引。MySQL的MyISAM引擎不管是主键还是非主键，使用的都是非聚簇索引。（B+树的叶子节点不是数据本身，而是数据对应的地址）</p><p>非聚簇索引的叶子节点并不一定存放数据的指针，因为二级索引的叶子节点存放的是主键，根据主键再<strong>回表</strong>查询数据。</p><p><strong>优点</strong>：</p><ul><li>更新代价比聚簇索引小。非聚簇索引的叶子节点不是存放数据，更新代价比聚簇索引小。</li></ul><p><strong>缺点</strong>：</p><ul><li>依赖于有序的数据：跟聚簇索引一样，非聚簇索引也依赖于有序的数据。</li><li>可能会二次查询（回表）：由于非聚簇索引的叶子节点存放的是主键，还需要根据主键去聚簇索引中去查找对应行的数据。</li></ul><h2 id="覆盖索引和联合索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引和联合索引" aria-hidden="true">#</a> 覆盖索引和联合索引</h2><h3 id="覆盖索引" tabindex="-1"><a class="header-anchor" href="#覆盖索引" aria-hidden="true">#</a> 覆盖索引</h3><p>如果一个索引包含所有需要查询字段的值，则称为覆盖索引。在InnoDB引擎中，如果不是主键索引，叶子节点存储的是主键+列值，最终需要会表查询。而覆盖搜因就是要查询出的列和索引是对应的，不会回表。</p><h3 id="联合索引" tabindex="-1"><a class="header-anchor" href="#联合索引" aria-hidden="true">#</a> 联合索引</h3><p>使用表中的多个字段创建索引，就是联合索引，也叫作组合索引或复合索引。</p><p>使用表中的多个字段创建搜因，就是联合索引，也叫作组合索引或者复合索引。</p><h3 id="最左匹配原则" tabindex="-1"><a class="header-anchor" href="#最左匹配原则" aria-hidden="true">#</a> 最左匹配原则</h3><p>使用联合索引时存在最左匹配原则，也就是按照最左优先的方式进行索引的匹配。</p><p>在使用联合索引进行查询的时候，如果不遵循最左匹配原则，联合索引会失效。</p><p>例如如果创建了一个（a，b，c）联合索引，以下几种查询条件就能利用联合索引：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>where a=1;
where a=1 and b=2 and c=3;
where a=1 and b=2;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为有查询优化器，所以a字段在where中的顺序并不重要，但是如果查询条件是以下几种，就不符合最左匹配原则，联合索引就会失效：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>where b=2;
where c=2;
where b=2 and c=3;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联合索引的最左匹配原则会一直向右匹配知道遇到范围查询就会停止匹配。也就是范围查询的字段可以用到联合索引，但是范围查询字段的后面的字段无法使用到联合索引。</p><p><strong>例子一</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select *from t_table where a&gt;1 and b=2,联合索引（a，b）哪一个字段用到了联合索引？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于联合索引是先按照a字段的值排序的，所以符合a&gt;1条件的二级索引记录是肯定相邻的，于是在进行索引扫描的时候，可以定位到符合a&gt;1条件的第一条记录，然后沿着记录所在的链表向后扫描，直到某条记录不符合a&gt;1条件位置。索引a字段可以在联合索引的B+树中进行索引查询。</p><p>但是在符合a&gt;1条件的二级索引记录的范围里，b字段的值是无序的。</p><p>因此不能通过b=2来进一步减少需要扫描的记录数量</p><p>所以在执行查询的时候，对应的扫描区间是[2,+ ∞)，形成这个扫描区间的条件是a&gt;1，与b=2无关。</p><p><strong>例子二</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code> select * from t_table where a &gt;= 1 and b = 2，联合索引（a, b）哪一个字段用到了联合索引？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>跟例子1很像，不过条件变成了a&gt;=1；</p><p>符合a&gt;=1条件的二级索引记录的范围里，b字段的值是无序的，但是在a=1的二级索引记录的范围里，b字段是有序的（因为对于联合索引，先是按照a字段的值排序，然后在a字段相同的情况下，再按照b字段值进行排序）。所以对于这个查询ab都用到了联合索引进行查询。</p><h3 id="索引下推" tabindex="-1"><a class="header-anchor" href="#索引下推" aria-hidden="true">#</a> 索引下推</h3><p>索引下推是MySQL 5.6版本中提供的索引优化功能，可以在非聚簇索引遍历过程中，对索引中包含的字段做判断，过滤掉不符合条件的记录，减少回表次数。</p><h2 id="使用索引的建议" tabindex="-1"><a class="header-anchor" href="#使用索引的建议" aria-hidden="true">#</a> 使用索引的建议</h2><h3 id="选择合适的字段创建索引" tabindex="-1"><a class="header-anchor" href="#选择合适的字段创建索引" aria-hidden="true">#</a> 选择合适的字段创建索引</h3><p>以下字段适合创建索引：</p><ul><li>不为NULL的字段；</li><li>被频繁查询的字段；</li><li>被作为条件查询的字段；</li><li>频繁需要排序的字段；</li><li>被经常频繁用于连接的字段。</li></ul><h3 id="被频繁更新的字段应该慎重建立索引" tabindex="-1"><a class="header-anchor" href="#被频繁更新的字段应该慎重建立索引" aria-hidden="true">#</a> 被频繁更新的字段应该慎重建立索引</h3><p>虽然索引能带来查询上的效率，但是维护索引的成本也是不小的。 如果一个字段不被经常查询，反而被经常修改，那么就更不应该在这种字段上建立索引了。</p><h3 id="限制每张表上的索引数量" tabindex="-1"><a class="header-anchor" href="#限制每张表上的索引数量" aria-hidden="true">#</a> 限制每张表上的索引数量</h3><p>索引并不是越多越好，建议单张表索引不超过 5 个！索引可以提高效率同样可以降低效率。</p><h3 id="尽可能的考虑建立联合索引而不是单列索引" tabindex="-1"><a class="header-anchor" href="#尽可能的考虑建立联合索引而不是单列索引" aria-hidden="true">#</a> 尽可能的考虑建立联合索引而不是单列索引</h3><p>因为索引是需要占用磁盘空间的，可以简单理解为每个索引都对应着一颗 B+树。如果一个表的字段过多，索引过多，那么当这个表的数据达到一个体量后，索引占用的空间也是很多的，且修改索引时，耗费的时间也是较多的。</p><h3 id="避免索引失效" tabindex="-1"><a class="header-anchor" href="#避免索引失效" aria-hidden="true">#</a> 避免索引失效</h3><p>索引失效是慢查询的主要原因之一，常见的导致索引失效的情况：</p><ul><li>创建了组合索引，但查询条件未遵守最左匹配原则；</li><li>在索引列上进行计算、函数、类型转换等操作；</li><li>以 <code>%</code> 开头的 LIKE 查询比如 <code>like &#39;%abc&#39;</code>；</li><li>查询条件中使用 or，且 or 的前后条件中有一个列没有索引，涉及的索引都不会被使用到；</li><li>发生隐式转换</li></ul><div class="hint-container info"><p class="hint-container-title">隐式转换</p><ol><li>当操作符<strong>左右两边的数据类型不一致</strong>时，会发生<strong>隐式转换</strong>。</li><li>当 where 查询操作符<strong>左边为数值类型</strong>时发生了隐式转换，那么对效率影响不大，但还是不推荐这么做。</li><li>当 where 查询操作符<strong>左边为字符类型</strong>时发生了隐式转换，那么会导致索引失效，造成全表扫描效率极低。</li><li>字符串转换为数值类型时，非数字开头的字符串会转化为<code>0</code>，以数字开头的字符串会截取从第一个字符到第一个非数字内容为止的值为转化结果。</li></ol><p>我们在写 SQL 时一定要养成良好的习惯，查询的字段是什么类型，等号右边的条件就写成对应的类型。特别当查询的字段是字符串时，等号右边的条件一定要用引号引起来标明这是一个字符串，否则会造成索引失效触发全表扫描。</p></div>`,88);function c(u,g){return i(),r("div",null,[h,o,n(" more "),p])}const m=e(t,[["render",c],["__file","2mysqlindex.html.vue"]]);export{m as default};
