const e=JSON.parse('{"key":"v-35959987","path":"/middleware/2mq.html","title":"RabbitMQ","lang":"zh-CN","frontmatter":{"title":"RabbitMQ","icon":"mq","category":["中间件云原生"],"tag":["消息队列","RabbitMQ","八股"]},"headers":[{"level":2,"title":"消息队列有什么用？","slug":"消息队列有什么用","link":"#消息队列有什么用","children":[{"level":3,"title":"通过异步处理提高系统性能（减少响应所需时间）","slug":"通过异步处理提高系统性能-减少响应所需时间","link":"#通过异步处理提高系统性能-减少响应所需时间","children":[]},{"level":3,"title":"削峰/限流","slug":"削峰-限流","link":"#削峰-限流","children":[]},{"level":3,"title":"降低系统耦合性","slug":"降低系统耦合性","link":"#降低系统耦合性","children":[]},{"level":3,"title":"实现分布式事务","slug":"实现分布式事务","link":"#实现分布式事务","children":[]}]},{"level":2,"title":"使用消息队列会带来哪些问题？","slug":"使用消息队列会带来哪些问题","link":"#使用消息队列会带来哪些问题","children":[]},{"level":2,"title":"AMQP是什么？","slug":"amqp是什么","link":"#amqp是什么","children":[]},{"level":2,"title":"RPC和消息队列的区别","slug":"rpc和消息队列的区别","link":"#rpc和消息队列的区别","children":[]},{"level":2,"title":"常见的消息队列","slug":"常见的消息队列","link":"#常见的消息队列","children":[{"level":3,"title":"Kafka","slug":"kafka","link":"#kafka","children":[]},{"level":3,"title":"RabbitMQ","slug":"rabbitmq","link":"#rabbitmq","children":[]},{"level":3,"title":"RabbitMQ和Kafka区别","slug":"rabbitmq和kafka区别","link":"#rabbitmq和kafka区别","children":[]}]},{"level":2,"title":"介绍下RabbitMQ","slug":"介绍下rabbitmq","link":"#介绍下rabbitmq","children":[]},{"level":2,"title":"RabbitMQ特点","slug":"rabbitmq特点","link":"#rabbitmq特点","children":[]},{"level":2,"title":"RabbitMQ组成","slug":"rabbitmq组成","link":"#rabbitmq组成","children":[{"level":3,"title":"Producer（生产者）和Consumer（消费者）","slug":"producer-生产者-和consumer-消费者","link":"#producer-生产者-和consumer-消费者","children":[]},{"level":3,"title":"Exchange（交换器）","slug":"exchange-交换器","link":"#exchange-交换器","children":[]},{"level":3,"title":"Queue（消息队列）","slug":"queue-消息队列","link":"#queue-消息队列","children":[]},{"level":3,"title":"Broker（消息中间件的服务节点）","slug":"broker-消息中间件的服务节点","link":"#broker-消息中间件的服务节点","children":[]},{"level":3,"title":"Exchange Types（交换器类型）","slug":"exchange-types-交换器类型","link":"#exchange-types-交换器类型","children":[]}]},{"level":2,"title":"说说Broker服务节点、Queue队列、Exchange交换器？","slug":"说说broker服务节点、queue队列、exchange交换器","link":"#说说broker服务节点、queue队列、exchange交换器","children":[]},{"level":2,"title":"什么是死信路由，如何产生的？","slug":"什么是死信路由-如何产生的","link":"#什么是死信路由-如何产生的","children":[]},{"level":2,"title":"什么是延迟队列？RabbitMQ 怎么实现延迟队列？","slug":"什么是延迟队列-rabbitmq-怎么实现延迟队列","link":"#什么是延迟队列-rabbitmq-怎么实现延迟队列","children":[{"level":3,"title":"消息的TTL","slug":"消息的ttl","link":"#消息的ttl","children":[]},{"level":3,"title":"模拟订单过期解锁库存","slug":"模拟订单过期解锁库存","link":"#模拟订单过期解锁库存","children":[]}]},{"level":2,"title":"RabbitMQ 消息怎么传输？","slug":"rabbitmq-消息怎么传输","link":"#rabbitmq-消息怎么传输","children":[]},{"level":2,"title":"如何保证消息的可靠性，防止消息丢失？","slug":"如何保证消息的可靠性-防止消息丢失","link":"#如何保证消息的可靠性-防止消息丢失","children":[]},{"level":2,"title":"如何保证 RabbitMQ 消息的顺序性？","slug":"如何保证-rabbitmq-消息的顺序性","link":"#如何保证-rabbitmq-消息的顺序性","children":[]},{"level":2,"title":"RabbitMQ消息积压如何处理？","slug":"rabbitmq消息积压如何处理","link":"#rabbitmq消息积压如何处理","children":[]}],"git":{"createdTime":1686923799000,"updatedTime":1687273603000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":7}]},"readingTime":{"minutes":18.15,"words":5446},"filePathRelative":"middleware/2mq.md","localizedDate":"2023年6月16日","excerpt":"<p>消息队列是一种用于在应用程序之间传递消息的通信方式，消息队列允许应用程序异步的发送和接收消息，并且不需要直接连接到对方。</p>\\n<p>可以把消息队列看作是一个存放消息的容器，需要使用消息的时候，直接从容器中取出消息供自己使用即可。由于队列Queue是一种先进先出的数据结构，所以消费消息时也是按照顺序来消费的。</p>\\n<h2> 消息队列有什么用？</h2>\\n<h3> 通过异步处理提高系统性能（减少响应所需时间）</h3>\\n<p>项目中订单取消之后的解锁库存操作可以通过消息队列实现，订单取消之后发送一个库存释放任务到消息队列中，由库存模块中的监听器完成库存解锁和释放，订单模块不需要等待库存释放完成才返回。</p>"}');export{e as data};
