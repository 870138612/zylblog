---
title: MyBatis
icon: shujuku
category:
  - 框架
tag:
  - MyBatis
  
---

### #{} 和 ${} 的区别是什么？

- `${}`是 Properties 文件中的变量占位符，它可以用于标签属性值和 SQL 内部，**属于静态文本替换**，比如 `${driver}` 会被静态替换为 `com.mySQL.jdbc. Driver`。

- `#{}`是 **SQL 的参数占位符**，MyBatis 会将 SQL 中的 `#{}` 替换为 `?`，在 SQL 执行前会使用 `PreparedStatement` 的参数设置方法，按序给 SQL 的 `?` 号占位符设置参数值，比如 `ps.setInt(0, parameterValue)`，`#{item.name}` 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 `param.getItem().getName()`。可以有效防止 SQL 注入问题。

### Dao 接口的工作原理是什么？Dao 接口里的方法，参数不同时，方法能重载吗？

通常一个 xml 映射文件，都会写一个 Dao 接口与之对应。Dao 接口就是常说的 `Mapper` 接口，接口的全限名，就是映射文件中的 namespace 的值，接口的方法名，就是映射文件中 `MappedStatement` 的 id 值，接口方法内的参数，就是传递给 SQL 的参数。

在 MyBatis 中，每一个 `<select>`、 `<insert>`、 `<update>`、 `<delete>` 标签，都会被解析为一个 `MappedStatement` 对象。

Dao 接口里的方法可以重载（多个同名方法，但是参数不同），但是 MyBatis 的 xml 里面的 id 不允许重复。

```xml
<select id="getAllStu" resultType="com.pojo.Student">
    select * from student
    <where>
        <if test="id != null">
        id = #{id}
        </if>
    </where>
</select>
```

- Dao 接口方法名对应 `MappedStatement` 的 `id`；
- Dao 接口参数对应 `#{id}`；
- Dao 接口返回值类型对应 `MappedStatement` 的 `resultType`。
- Dao 接口的全路径名对应 xml 文件中的 `namespace`。

**MyBatis 的 Dao 接口可以有多个重载方法，但是多个接口对应的映射必须只有一个，否则启动会报错。**

Dao 接口的工作原理是 JDK 动态代理，MyBatis 运行时会使用 JDK 动态代理为 Dao 接口生成代理 proxy 对象，代理对象 proxy 会拦截接口方法，转而执行 `MappedStatement` 所代表的 SQL，然后将 SQL 执行结果返回。如果有多个 SQL 则不知道执行哪个了。

### MyBatis 的 xml 映射文件中，不同的 xml 映射文件，id 是否可以重复？

不同的 xml 映射文件，如果配置了 namespace，id 可以重复；如果没有配置 namespace，id 不能重复。

namespace + id 是作为 `Map<String,MappedStatement>` 的 key使用的，如果没有 namespace，就剩下 id，id 重复就会导致数据覆盖，有了 namespace，并且不同，则可以使用相同的 id，因为 key 不再重复。

### MyBatis 的 xml 映射文件和 MyBatis 内部数据结构的映射关系？

MyBatis 将所有 xml 配置信息都封装到 All-In-One 重量级对象 Configuration 内部。在 xml 映射文件中， `<parameterMap>` 标签会被解析为 `ParameterMap` 对象，其每个子元素会被解析为 `ParameterMapping` 对象。 `<resultMap>` 标签会被解析为 `ResultMap` 对象，其每个子元素会被解析为 `ResultMapping` 对象。每一个 `<select>、<insert>、<update>、<delete>` 标签均会被解析为 `MappedStatement` 对象，标签内的 SQL 会被解析为 `BoundSQL` 对象。

### 属性名和字段名不一致如何解决？

1. 查询的 SQL 语句使用别名处理。
2. 通过 resultMap 来设置字段和属性的映射关系。以下列举将表中 `level_id` 字段映射为属性名 `levelId`。

```xml
<resultMap type="com.member.entity.MemberEntity" id="memberMap">
    <result property="id" column="id"/>
    <result property="levelId" column="level_id"/>  
</resultMap>
```

### MyBatis 中的分页

分页分为逻辑分页和物理分页两种。

逻辑分页：在服务器返回给客户端的时候进行分页，实际查询的仍然是所有的数据。

物理分页：从数据查询的时候就进行分页，查询的数据不是全部。

* MyBatis 使用 **RowBounds** 对象进行分页，它是针对 ResultSet 结果集执行的内存分页，而非物理分页；
* 可以在 SQL 内直接书写带有物理分页的参数来完成物理分页功能，也可以使用分页插件来完成物理分页。

物理分页就是对 SQL 进行改造：

```SQL
select * from xxx --> select *from (select *from sys_role) t limit 0,10
```

通过添加插件的方式进行分页：

```java
@Bean
public MybatisPlusInterceptor mybatisPlusInterceptor() {
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
    return interceptor;
}
```

### MyBatis 中的执行器有哪些？

- **SimpleExecutor**：简单的执行器，每次执行操作都会开启一个新的 Statement 对象，用完就会立即关闭。
- **ReuseExecutor**：复用的执行器，实现了对 Statement 对象的复用。
- **BatchExecutor**：可执行批处理任务的执行器。

每一个执行器都是在 SQLSession 执行的生命周期内拿到的。
