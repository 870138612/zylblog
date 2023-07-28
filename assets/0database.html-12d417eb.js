import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as d,e as n,b as e,d as t,f as o}from"./app-cb4bfcf5.js";const i="/markdown/image-2nf.png",l={},c=e("h2",{id:"数据库的三大范式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#数据库的三大范式","aria-hidden":"true"},"#"),t(" 数据库的三大范式")],-1),s=e("h3",{id:"_1nf",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1nf","aria-hidden":"true"},"#"),t(" 1NF")],-1),h=e("p",null,[e("strong",null,"属性（对应于表中的字段）不能再被分割"),t("，也就是这个字段只能是一个值，不能再分为多个其他的字段了，"),e("strong",null,"1NF是所有关系型数据库的最基本要求"),t("，也就是说关系型数据库中创建的表一定满足第一范式。")],-1),g=o('<h3 id="_2nf" tabindex="-1"><a class="header-anchor" href="#_2nf" aria-hidden="true">#</a> 2NF</h3><p>2NF 在 1NF 的基础上，<strong>消除了非主属性对于码的部分函数依赖</strong>。如下图所示，展示了第一范式到第二范式的过渡。第二范式在第一范式的基础上增加了一个列，这个列称为主键，<strong>非主属性都依赖于主键</strong>。</p><p><img src="'+i+'" alt="img.png"></p><ul><li>函数依赖：若在一张表中，在属性 X（或属性组）的值确定的情况下，必定能确定属性Y的值，那么可以说Y函数依赖于 X，写作 X-&gt;Y。</li><li>部分函数依赖：如果 X-&gt;Y，并且存在X的一个真子集 X0，使得 X0-&gt;Y，则 Y 对 X 部分函数依赖。比如学生基本信息表 R 中（学号，身份证号，姓名）<strong>当然学号属性取值是唯一的</strong>，在 R 关系中，（学号，身份证号）-&gt;（姓名），（学号）-&gt;（姓名），（身份证号）-&gt;（姓名）；所以姓名部分函数依赖于（学号，身份证号），因为确定了学号或者是身份证就能确定姓名。</li><li>完全函数依赖：在一个关系中，若某个非主属性数据项依赖于全部关键字称为完全函数依赖。比如学生基本信息表 R（学号，班级，姓名）<strong>假设不同的班级学号有相同的</strong>，班级内学号不能相同，在 R 关系中，（学号，班级）-&gt;（姓名），但是（学号）-&gt;（姓名）不成立，（班级）-&gt;（姓名）不成立，所以姓名完全函数依赖与（学号，班级）；</li><li>传递函数依赖：在关系模式 R(U) 中，设 X，Y，Z 是 U 的不同的属性子集，如果 X 确定 Y、Y 确定 Z，且有 X 不包含 Y，Y 不确定 X，（X ∪ Y）∩ Z = 空集合，则称 Z 传递函数依赖于 X。传递函数依赖会导致数据冗余和异常。比如在关系 R(学号 , 姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性<strong>系主任</strong>对于<strong>学号</strong>的传递函数依赖。</li></ul><h3 id="_3nf" tabindex="-1"><a class="header-anchor" href="#_3nf" aria-hidden="true">#</a> 3NF</h3><p>3NF在2NF的基础上，<strong>消除了非主属性对于码的传递函数依赖</strong>。符合 3NF 要求的数据库设计，基本上解决了数据冗余过大，插入异常，修改异常，删除异常的问题。比如在关系 R(学号 , 姓名, 系名，系主任)中，学号 → 系名，系名 → 系主任，所以存在非主属性系主任对于学号的传递函数依赖，所以该表的设计，不符合 3NF 的要求。</p><h2 id="drop、delete-与-truncate-区别" tabindex="-1"><a class="header-anchor" href="#drop、delete-与-truncate-区别" aria-hidden="true">#</a> drop、delete 与 truncate 区别？</h2><ul><li><code>drop</code>（丢弃数据）：<code>drop table 表名</code> ，直接将表都删除掉，在删除表的时候使用。</li><li><code>truncate</code>（清空数据）：<code>truncate table 表名</code> ，只删除表中的数据，再插入数据的时候自增长 id 又从 1 开始，在清空表中数据的时候使用。</li><li><code>delete</code>（删除数据）：<code>delete from 表名 where 列名=值</code>，删除某一行的数据，如果不加 <code>where</code> 子句和 <code>truncate table 表名</code> 作用类似。</li></ul><h2 id="dml-语句和-ddl-语句区别" tabindex="-1"><a class="header-anchor" href="#dml-语句和-ddl-语句区别" aria-hidden="true">#</a> DML 语句和 DDL 语句区别</h2><ul><li><p>DML 是数据库操作语言（Data Manipulation Language）的缩写，是指对数据库中表记录的操作，主要包括表记录的插入、更新、删除和查询，是开发人员日常使用最频繁的操作。</p></li><li><p>DDL （Data Definition Language）是数据定义语言的缩写，简单来说，就是对数据库内部的对象进行创建、删除、修改的操作语言。它和 DML 语言的最大区别是 DML 只是对表内部数据的操作，而不涉及到表的定义、结构的修改，更不会涉及到其他对象。DDL 语句更多的被数据库管理员（DBA）所使用，一般的开发人员很少使用。</p></li></ul>',10);function u(_,p){return r(),d("div",null,[c,s,h,n(" more "),g])}const D=a(l,[["render",u],["__file","0database.html.vue"]]);export{D as default};
