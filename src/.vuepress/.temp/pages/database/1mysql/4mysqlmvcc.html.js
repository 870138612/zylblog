export const data = JSON.parse("{\"key\":\"v-3754f902\",\"path\":\"/database/1mysql/4mysqlmvcc.html\",\"title\":\"事务隔离级别和MVCC\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"事务隔离级别和MVCC\",\"icon\":\"page\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\",\"八股\"]},\"headers\":[{\"level\":2,\"title\":\"事务隔离级别\",\"slug\":\"事务隔离级别\",\"link\":\"#事务隔离级别\",\"children\":[]},{\"level\":2,\"title\":\"一致性非锁定读和锁定读\",\"slug\":\"一致性非锁定读和锁定读\",\"link\":\"#一致性非锁定读和锁定读\",\"children\":[{\"level\":3,\"title\":\"一致性非锁定读\",\"slug\":\"一致性非锁定读\",\"link\":\"#一致性非锁定读\",\"children\":[]}]}],\"git\":{\"createdTime\":1685010347000,\"updatedTime\":1685105657000,\"contributors\":[{\"name\":\"ZYL1210\",\"email\":\"870138612@qq.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":1.53,\"words\":458},\"filePathRelative\":\"database/1mysql/4mysqlmvcc.md\",\"localizedDate\":\"2023年5月25日\",\"excerpt\":\"<h2> 事务隔离级别</h2>\\n<p>SQL定义了四个隔离级别：</p>\\n<p><strong>READ-UNCOMMITTED(读取未提交)</strong>：最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。</p>\\n<p><strong>READ-COMMITTED(读取已提交)</strong>：允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。</p>\\n<p><strong>REPEATABLE-READ(可重复读)</strong>：对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。</p>\\n<p><strong>SERIALIZABLE(可串行化)</strong>：最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。</p>\\n\"}")
