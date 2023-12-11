const l=JSON.parse('{"key":"v-aba67072","path":"/database/1mysql/3mysqllog.html","title":"MySQL日志","lang":"zh-CN","frontmatter":{"title":"MySQL日志","icon":"page","category":["数据库"],"tag":["MySQL日志","MySQL"]},"headers":[{"level":2,"title":"redo log 重做日志","slug":"redo-log-重做日志","link":"#redo-log-重做日志","children":[{"level":3,"title":"刷盘时机","slug":"刷盘时机","link":"#刷盘时机","children":[]},{"level":3,"title":"日志文件组","slug":"日志文件组","link":"#日志文件组","children":[]},{"level":3,"title":"redo log 小结","slug":"redo-log-小结","link":"#redo-log-小结","children":[]}]},{"level":2,"title":"binlog 归档日志","slug":"binlog-归档日志","link":"#binlog-归档日志","children":[{"level":3,"title":"记录格式","slug":"记录格式","link":"#记录格式","children":[]},{"level":3,"title":"写入时机","slug":"写入时机","link":"#写入时机","children":[]}]},{"level":2,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]},{"level":2,"title":"undo log 回滚日志","slug":"undo-log-回滚日志","link":"#undo-log-回滚日志","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1685010347000,"updatedTime":1697548200000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":39}]},"readingTime":{"minutes":9.05,"words":2716},"filePathRelative":"database/1mysql/3mysqllog.md","localizedDate":"2023年5月25日","excerpt":"<h2> redo log 重做日志</h2>\\n<p><code>redo log</code> 是重做日志，是 InnoDB 引擎独有的，让 MySQL 拥有了崩溃恢复的能力。</p>\\n<p><img src=\\"/markdown/image-20230529154219243.png\\" alt=\\"image-20230529154219243\\"></p>\\n<p><code>redo log</code> 通用格式：</p>\\n<p><img src=\\"/markdown/redolog.jpg\\" alt=\\"img.png\\"></p>\\n<ul>\\n<li><strong>type</strong> ：该条 redo 日志的类型。</li>\\n<li><strong>space ID</strong> ：表空间 ID。</li>\\n<li><strong>page number</strong> ：页号。</li>\\n<li><strong>data</strong> ：该条 <code>redo log</code> 的具体内容</li>\\n</ul>\\n<p><code>redo log</code> 里本质上记录的就是在对某个表空间的某个数据页的某个偏移量的地方修改了几个字节的值，具体修改的值是什么，里面需要记录的就是<strong>表空间号 + 数据页号 + 偏移量 + 修改几个字节的值 + 具体的值</strong>（MLOG_8BYTE 类型）。</p>\\n"}');export{l as data};