const e=JSON.parse('{"key":"v-e49dc7a6","path":"/framework/1mybatis.html","title":"MyBatis","lang":"zh-CN","frontmatter":{"title":"MyBatis","icon":"shujuku","category":["框架"],"tag":["MyBatis","八股"]},"headers":[{"level":3,"title":"#{} 和 ${} 的区别是什么？","slug":"和-的区别是什么","link":"#和-的区别是什么","children":[]},{"level":3,"title":"Dao 接口的工作原理是什么？Dao 接口里的方法，参数不同时，方法能重载吗？","slug":"dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗","link":"#dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗","children":[]},{"level":3,"title":"MyBatis 的 xml 映射文件中，不同的 xml 映射文件，id 是否可以重复？","slug":"mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复","link":"#mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复","children":[]},{"level":3,"title":"MyBatis 的 xml 映射文件和 MyBatis 内部数据结构的映射关系？","slug":"mybatis-的-xml-映射文件和-mybatis-内部数据结构的映射关系","link":"#mybatis-的-xml-映射文件和-mybatis-内部数据结构的映射关系","children":[]},{"level":3,"title":"属性名和字段名不一致如何解决？","slug":"属性名和字段名不一致如何解决","link":"#属性名和字段名不一致如何解决","children":[]},{"level":3,"title":"MyBatis 中的分页","slug":"mybatis-中的分页","link":"#mybatis-中的分页","children":[]},{"level":3,"title":"MyBatis 中的执行器有哪些？","slug":"mybatis-中的执行器有哪些","link":"#mybatis-中的执行器有哪些","children":[]}],"git":{"createdTime":1690615316000,"updatedTime":1691053044000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":2}]},"readingTime":{"minutes":3.82,"words":1147},"filePathRelative":"framework/1mybatis.md","localizedDate":"2023年7月29日","excerpt":"<h3> #{} 和 ${} 的区别是什么？</h3>\\n<ul>\\n<li>\\n<p><code>${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 SQL 内部，<strong>属于静态文本替换</strong>，比如 <code>${driver}</code> 会被静态替换为 <code>com.mySQL.jdbc. Driver</code>。</p>\\n</li>\\n<li>\\n<p><code>#{}</code>是 <strong>SQL 的参数占位符</strong>，MyBatis 会将 SQL 中的 <code>#{}</code> 替换为 <code>?</code>，在 SQL 执行前会使用 PreparedStatement 的参数设置方法，按序给 SQL 的? 号占位符设置参数值，比如 <code>ps.setInt(0, parameterValue)</code>，<code>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name\\n属性值，相当于 <code>param.getItem().getName()</code>。可以有效防止 SQL 注入问题。</p>\\n</li>\\n</ul>"}');export{e as data};
