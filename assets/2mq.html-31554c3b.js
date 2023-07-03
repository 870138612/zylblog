import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as o,a,b as n,d as c,f as e}from"./app-c3867e4b.js";const p="/markdown/image-20230616154303334.png",d="/markdown/image-20230616154739983.png",l="/markdown/image-20230616162759698.png",h="/markdown/image-20230616163557422.png",u="/markdown/image-20230616165505506.png",b="/markdown/image-20230616171738195.png",g="/markdown/image-20230616205428858.png",k="/markdown/image-20230616211804679.png",m="/markdown/image-20230617224404357.png",M={},Q=e('<p>消息队列是一种用于在应用程序之间传递消息的通信方式，消息队列允许应用程序异步的发送和接收消息，并且不需要直接连接到对方。</p><p>可以把消息队列看作是一个存放消息的容器，需要使用消息的时候，直接从容器中取出消息供自己使用即可。由于队列Queue是一种先进先出的数据结构，所以消费消息时也是按照顺序来消费的。</p><h2 id="消息队列有什么用" tabindex="-1"><a class="header-anchor" href="#消息队列有什么用" aria-hidden="true">#</a> 消息队列有什么用？</h2><h3 id="通过异步处理提高系统性能-减少响应所需时间" tabindex="-1"><a class="header-anchor" href="#通过异步处理提高系统性能-减少响应所需时间" aria-hidden="true">#</a> 通过异步处理提高系统性能（减少响应所需时间）</h3><p>项目中订单取消之后的解锁库存操作可以通过消息队列实现，订单取消之后发送一个库存释放任务到消息队列中，由库存模块中的监听器完成库存解锁和释放，订单模块不需要等待库存释放完成才返回。</p><h3 id="削峰-限流" tabindex="-1"><a class="header-anchor" href="#削峰-限流" aria-hidden="true">#</a> 削峰/限流</h3><p>秒杀场景中，开始秒杀时创建秒杀订单具有很大的峰值，通过消息队列减少同时创建订单的任务数，创建订单任务先放入消息队列中，再由数据库创建订单。</p><h3 id="降低系统耦合性" tabindex="-1"><a class="header-anchor" href="#降低系统耦合性" aria-hidden="true">#</a> 降低系统耦合性</h3><p>订单模块负责订单取消，库存模块负责库存解锁释放，两者通过消息队列实现通信，降低耦合度。如果有新的消费者上线，只需要将消费者关联到这个消息队列中，原有系统不会改变。</p><h3 id="实现分布式事务" tabindex="-1"><a class="header-anchor" href="#实现分布式事务" aria-hidden="true">#</a> 实现分布式事务</h3><p>分布式事务的解决办法之一就是MQ事务。</p>',11),f={href:"https://ylzhong.top/middleware/4distributedtransaction.html",target:"_blank",rel:"noopener noreferrer"},R=e('<h2 id="使用消息队列会带来哪些问题" tabindex="-1"><a class="header-anchor" href="#使用消息队列会带来哪些问题" aria-hidden="true">#</a> 使用消息队列会带来哪些问题？</h2><ul><li><strong>系统可用性降低</strong>：需要额外考虑消息队列服务出错的处理办法。</li><li><strong>系统复杂度提高</strong>：加入消息队列之后，需要考虑消息重复消费，消息丢失，保证消息传递顺序等问题。</li><li><strong>一致性问题</strong>：如果消息没有被正确的消费，就会带来一致性问题。</li></ul><h2 id="amqp是什么" tabindex="-1"><a class="header-anchor" href="#amqp是什么" aria-hidden="true">#</a> AMQP是什么？</h2><p>AMQP，即Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准 <strong>高级消息队列协议</strong>（二进制应用层协议），是应用层协议的一个开放标准，为面向消息的中间件设计，兼容JMS（JAVA Message Service，java 消息服务）。基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。AMQP天然具有跨平台、跨语言特性。</p><h2 id="rpc和消息队列的区别" tabindex="-1"><a class="header-anchor" href="#rpc和消息队列的区别" aria-hidden="true">#</a> RPC和消息队列的区别</h2><p>RPC和消息队列都是分布式系统中重要的组件之一。</p><ul><li><p><strong>从用途来看</strong>：RPC主要解决两个服务的远程通信问题，不需要了解底层网络的通信机制。通过RPC可以帮助我们调用远程计算机上某个服务的方法，这个过程就像调用本地方法一样简单。消息队列主要用来降低系统耦合性、实现任务异步、有效地进行流量削峰。</p></li><li><p><strong>从通信方式来看</strong>：RPC是双向直接网络通讯，消息队列是单向引入中间载体的网络通讯。</p></li><li><p><strong>从架构上来看</strong>：消息队列需要把消息存储起来，RPC则没有这个要求，因为前面也说了RPC是双向直接网络通讯。</p></li><li><p><strong>从请求处理的时效性来看</strong>：通过RPC发出的调用一般会立即被处理，存放在消息队列中的消息并不一定会立即被处理。</p></li></ul><h2 id="常见的消息队列" tabindex="-1"><a class="header-anchor" href="#常见的消息队列" aria-hidden="true">#</a> 常见的消息队列</h2><h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> Kafka</h3><blockquote><p>项目中使用的消息队列是 RabbitMQ，Kafka仅做介绍。</p></blockquote><p><img src="'+p+'" alt="image-20230616154303334"></p><p>Kafka是LinkedIn开源的一个分布式流式处理平台，已经成为Apache顶级项目，早期被用来用于处理海量的日志，后面才慢慢发展成了一款功能全面的高性能消息队列。</p><p>具有三个关键功能：</p><ul><li><strong>消息队列</strong>：发布和订阅消息流，功能类似消息队列。</li><li><strong>容错的持久方式存储记录消息流</strong>：Kafka会把消息持久化到磁盘，有效避免了消息丢失的风险。</li><li><strong>流式处理平台</strong>：在消息发布的时候进行处理，Kafka提供了一个完整的流式处理类库。</li></ul><h3 id="rabbitmq" tabindex="-1"><a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a> RabbitMQ</h3><p><img src="'+d+'" alt="image-20230616154739983"></p><p>RabbitMQ是采用Erlang语言实现AMQP(Advanced Message Queuing Protocol，高级消息队列协议）的消息中间件，它最初起源于金融系统，用于在分布式系统中存储转发消息。</p><ul><li><strong>可靠性</strong>：RabbitMQ使用一些机制来保证消息的可靠性，如持久化、传输确认及发布确认等。</li><li><strong>灵活的路由</strong>：在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能，RabbitMQ 己经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个交换器绑定在一起，也可以通过插件机制来实现自己的交换器。</li><li><strong>扩展性</strong>：多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展集群中节点。</li><li><strong>高可用性</strong>：队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队列仍然可用。</li><li><strong>支持多种协议</strong>：RabbitMQ除了原生支持AMQP协议，还支持 STOMP、MQTT等多种消息中间件协议。</li><li><strong>多语言客户端</strong>：RabbitMQ几乎支持所有常用语言，比如Java、Python、Ruby、PHP、C#、JavaScript 等。</li><li><strong>易用的管理界面</strong>：RabbitMQ提供了一个易用的用户界面，使得用户可以监控和管理消息、集群中的节点等。</li><li><strong>插件机制</strong>：RabbitMQ提供了许多插件，以实现从多方面进行扩展，当然也可以编写自己的插件。</li></ul><h3 id="rabbitmq和kafka区别" tabindex="-1"><a class="header-anchor" href="#rabbitmq和kafka区别" aria-hidden="true">#</a> RabbitMQ和Kafka区别</h3><ul><li><p>RabbitMQ在吞吐量方面虽然稍逊于Kafka，但是由于它基于Erlang开发，所以并发能力很强，性能极其好，延时很低，达到微秒级。</p></li><li><p>Kafka的特点其实很明显，就是仅仅提供较少的核心功能，但是提供超高的吞吐量，ms级的延迟，极高的可用性以及可靠性，而且分布式可以任意扩展。同时Kafka最好是支撑较少的topic 数量即可，保证其超高吞吐量。Kafka唯一的一点劣势是有可能消息重复消费，那么对数据准确性会造成极其轻微的影响，在大数据领域中以及日志采集中，这点轻微影响可以忽略，这个特性天然适合大数据实时计算以及日志收集。</p></li></ul><h1 id="rabbitmq-1" tabindex="-1"><a class="header-anchor" href="#rabbitmq-1" aria-hidden="true">#</a> RabbitMQ</h1><h2 id="介绍下rabbitmq" tabindex="-1"><a class="header-anchor" href="#介绍下rabbitmq" aria-hidden="true">#</a> 介绍下RabbitMQ</h2><p>RabbitMQ是一个在AMQP（Advanced Message Queuing Protocol）基础上实现的，可复用的企业消息系统。它可以用于大型软件系统各个模块之间的高效通信，支持高并发，支持可扩展。</p><p>RabbitMQ是使用Erlang编写的一个开源的消息队列，本身支持很多的协议：AMQP，XMPP, SMTP, STOMP，也正是如此，使的它变的非常重量级，更适合于企业级的开发。它同时实现了一个Broker构架，这意味着消息在发送给客户端时先在中心队列排队，对路由(Routing)、负载均衡(Load balance)或者数据持久化都有很好的支持。</p><h2 id="rabbitmq特点" tabindex="-1"><a class="header-anchor" href="#rabbitmq特点" aria-hidden="true">#</a> RabbitMQ特点</h2><ul><li><strong>可靠性</strong>：RabbitMQ使用一些机制保证可靠性，例如持久化、传输确认以及发布确认。</li><li><strong>灵活的路由</strong>：在消息进入队列之前，通过交换器来路由消息。</li><li><strong>扩展性</strong>：多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展 集群中节点。</li><li><strong>高可用性</strong>：队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队 列仍然可用。</li><li><strong>多种协议</strong>：RabbitMQ除了原生支持AMQP协议，还支持STOMP，MQTT等多种消息 中间件协议。</li><li><strong>跨语言</strong>：RabbitMQ几乎支持所有常用语言，比如Java、Python、Ruby、PHP、C#、JavaScript 等。</li><li><strong>管理界面</strong>：RabbitMQ提供了一个易用的用户界面，使得用户可以监控和管理消息、集 群中的节点等。</li><li><strong>插件机制</strong>：RabbitMQ提供了许多插件 ， 以实现从多方面进行扩展，当然也可以编写自 己的插件。</li></ul><h2 id="rabbitmq组成" tabindex="-1"><a class="header-anchor" href="#rabbitmq组成" aria-hidden="true">#</a> RabbitMQ组成</h2><p>RabbitMQ 整体上是一个生产者与消费者模型，主要负责接收、存储和转发消息。从计算机术语层面来说，RabbitMQ 模型更像是一种交换器模型。</p><p><img src="'+l+'" alt="image-20230616162759698"></p><h3 id="producer-生产者-和consumer-消费者" tabindex="-1"><a class="header-anchor" href="#producer-生产者-和consumer-消费者" aria-hidden="true">#</a> Producer（生产者）和Consumer（消费者）</h3><ul><li><strong>Producer(生产者)</strong> :生产消息的一方;</li><li><strong>Consumer(消费者)</strong> :消费消息的一方。</li></ul><p>消息一般由 2 部分组成：<strong>消息头</strong>和 <strong>消息体</strong>。消息体也可以称为 payLoad，消息体是不透明的，而消息头则由一系列的可选属性组成，这些属性包括 routing-key（路由键）、priority（相对于其他消息的优先权）、delivery-mode（指出该消息可能需要持久性存储）等。生产者把消息交由 RabbitMQ 后，RabbitMQ 会根据消息头把消息发送给感兴趣的 Consumer(消费者)。</p><h3 id="exchange-交换器" tabindex="-1"><a class="header-anchor" href="#exchange-交换器" aria-hidden="true">#</a> Exchange（交换器）</h3><p>在 RabbitMQ 中，消息并不是直接投递到<strong>Queue</strong>（消息队列）中，中间还必须经过<strong>Exchange</strong>（交换器），交换器会根据路由键和路由方式将消息发送给对应的<strong>Queue</strong>中。</p><p><strong>Exchange</strong>用来接收生产者发送的消息并将这些消息路由给服务器中的队列，如果路由不到则会返回给<strong>Producer</strong>（生产者）或者直接丢失。</p><p>RabbitMQ的<strong>Exchange</strong>有4种类型，不同的类型对应着不同的路由策略：direct（默认），fanout，topic和headers。</p><p>生产者将消息发给交换器的时候需要指定一个<strong>RoutingKey</strong>（路由键），用来指定这个消息的路由规则，而这个<strong>RoutingKey</strong>需要与交换器类型和绑定键<strong>BindingKey</strong>联合使用才能生效。</p><p>RabbitMQ 中通过<strong>Binding</strong>（绑定）将<strong>Exchange</strong>与<strong>Queue</strong>关联起来，在绑定的时候一般会指定一个<strong>BindingKey</strong>（绑定键），这样 RabbitMQ 就知道如何正确将消息路由到队列了，如下图所示。一个绑定就是基于路由键将交换器和消息队列连接起来的路由规则，所以可以将交换器理解成一个由绑定构成的路由表。<strong>Exchange</strong>和<strong>Queue</strong>的绑定可以是多对多的关系。</p><p><img src="'+h+'" alt="image-20230616163557422"></p><p><strong>Bindkey</strong>就像路由表中的一个表项，指明了响应的<strong>RoutingKey</strong>应该投递到哪个队列。</p><h3 id="queue-消息队列" tabindex="-1"><a class="header-anchor" href="#queue-消息队列" aria-hidden="true">#</a> Queue（消息队列）</h3><p>Queue（消息队列）用来保存消息直到发送给消费者。是消息的容器也是终点，一个消息可以投入一个或者多个队列中。</p><p><strong>RabbitMQ中消息只能存储在队列中，这一点和Kafka相反。Kafka将消息存储在topic(主题)这个逻辑层面，而相对应的队列逻辑只是topic实际存储文件中的位移标识。</strong></p><blockquote><p>事件被组织并持久地存储在Topic中，Topic类似于文件系统中的文件夹，事件就是该文件夹中的文件。Kafka中的Topic始终是多生产者和多订阅者：一个Topic可以有零个、一个或多个生产者向其写入事件，也可以有零个、一个或多个消费者订阅这些事件。Topic中的事件可以根据需要随时读取，与传统的消息中间件不同，事件在使用后不会被删除，相反，可以通过配置来定义Kafka中每个Topic应该保留事件的时间，超过该事件后旧事件将被丢弃。Kafka的性能在数据大小方面实际上是恒定的，因此长时间存储数据是非常好的。</p></blockquote><p>多个消费者可以订阅同一个队列，这时队列中的消息会被平均分摊给多个消费者进行处理，而不是每个消费者都收到所有的消息并处理，这样可以避免重复消费。</p><h3 id="broker-消息中间件的服务节点" tabindex="-1"><a class="header-anchor" href="#broker-消息中间件的服务节点" aria-hidden="true">#</a> Broker（消息中间件的服务节点）</h3><p>对于RabbitMQ来说，一个RabbitMQ Broker可以简单地看作一个RabbitMQ服务节点，或者RabbitMQ服务实例。大多数情况下也可以将一个RabbitMQ Broker看作一台RabbitMQ服务器。</p><p>下图展示了生产者将消息存入RabbitMQ Broker，以及消费者从Broker中消费数据的整个流程。</p><blockquote><p>由于RabbitMQ是以<code>byte[]</code>为单位进行传输的，因此消息需要序列化和反序列化。</p></blockquote><p><img src="'+u+'" alt="image-20230616165505506"></p><h3 id="exchange-types-交换器类型" tabindex="-1"><a class="header-anchor" href="#exchange-types-交换器类型" aria-hidden="true">#</a> Exchange Types（交换器类型）</h3><h4 id="_1、fanout-广播" tabindex="-1"><a class="header-anchor" href="#_1、fanout-广播" aria-hidden="true">#</a> 1、fanout（广播）</h4><p>fanout类型的Exchange路由规则非常简单，它会把所有发送到该Exchange的消息路由到所有与它绑定的Queue中，不需要做任何判断操作，所以fanout类型是所有的交换器类型里面速度最快的。fanout类型常用来广播消息。</p><h4 id="_2、direct-精确匹配" tabindex="-1"><a class="header-anchor" href="#_2、direct-精确匹配" aria-hidden="true">#</a> 2、direct（精确匹配）</h4><p>direct类型的Exchange路由规则也很简单，它会把消息路由到<strong>那些</strong>Bindingkey与RoutingKey完全匹配的Queue中。</p><blockquote><p>可能匹配的队列有多个。</p></blockquote><h4 id="_3、topic" tabindex="-1"><a class="header-anchor" href="#_3、topic" aria-hidden="true">#</a> 3、topic</h4><p>topic类型的交换器在匹配规则上进行了扩展，它与direct类型的交换器相似，也是将消息路由到BindingKey和RoutingKey相匹配的队列中，但这里的匹配规则有些不同，它约定：</p><ul><li><p>RoutingKey为一个点号<code>.</code>分隔的字符串（被点号<code>.</code>分隔开的每一段独立的字符串称为一个单词），如 <code>com.rabbitmq.client</code>、<code>java.util.concurrent</code>、<code>com.hidden.client</code>;</p></li><li><p>BindingKey和RoutingKey一样也是点号<code>.</code>分隔的字符串；</p></li><li><p>BindingKey中可以存在两种特殊字符串<code>*</code>和<code>#</code>，用于做模糊匹配，其中<code>*</code>用于匹配一个单词，<code>#</code>用于匹配零个或者多个单词。</p></li></ul><p>例如BindKey为<code>#.com</code>，则所有以<code>com</code>结尾的路由键消息都会匹配，<code>*.*.com</code>，则路由键必须有三个单词，且最后一个单词是<code>com</code>才会匹配，例如<code>yl.zhong.com</code>。</p><p><img src="'+b+'" alt="image-20230616171738195"></p><h4 id="_4、headers-不推荐" tabindex="-1"><a class="header-anchor" href="#_4、headers-不推荐" aria-hidden="true">#</a> 4、headers(不推荐)</h4><p>headers类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的headers属性进行匹配。</p><h2 id="说说broker服务节点、queue队列、exchange交换器" tabindex="-1"><a class="header-anchor" href="#说说broker服务节点、queue队列、exchange交换器" aria-hidden="true">#</a> 说说Broker服务节点、Queue队列、Exchange交换器？</h2><p><strong>Broker</strong>：可以看做RabbitMQ的服务节点。一般情况下一个Broker可以看做一个RabbitMQ服务器。</p><p><strong>Queue</strong>：RabbitMQ的内部对象，用于存储消息。多个消费者可以订阅同一队列，这时队列中的消息会被平摊（轮询）给多个消费者进行处理。</p><p><strong>Exchange</strong>：生产者将消息发送到交换器，由交换器将消息路由到一个或者多个队列中。当路由不到时，或返回给生产者或直接丢弃。</p><h2 id="什么是死信路由-如何产生的" tabindex="-1"><a class="header-anchor" href="#什么是死信路由-如何产生的" aria-hidden="true">#</a> 什么是死信路由，如何产生的？</h2><p>DLX，全称为 <code>Dead-Letter-Exchange</code>，死信交换器，死信邮箱。当消息在一个队列中变成死信 (<code>dead message</code>) 之后，它能被重新被发送到另一个交换器中，这个交换器就是DLX，绑定DLX的队列就称之为<strong>死信队列</strong>。</p><p><strong>导致的死信的几种原因</strong>：</p><ul><li>消息被拒（<code>Basic.Reject /Basic.Nack</code>）且<code>requeue = false</code>。</li><li>消息TTL过期。</li><li>队列满了，无法再添加。</li></ul><h2 id="什么是延迟队列-rabbitmq-怎么实现延迟队列" tabindex="-1"><a class="header-anchor" href="#什么是延迟队列-rabbitmq-怎么实现延迟队列" aria-hidden="true">#</a> 什么是延迟队列？RabbitMQ 怎么实现延迟队列？</h2><p>延时队列指的是存储对应的延时消息，消息被发送给队列之后，并不会立刻让消费者得到消息，而是等待一段时间之后才会消费消息。</p><p>RabbitMQ本身没有延时队列，可以通过本身的队列特性，需要使用死信交换机和消息存活的TTL。</p><h3 id="消息的ttl" tabindex="-1"><a class="header-anchor" href="#消息的ttl" aria-hidden="true">#</a> 消息的TTL</h3><p>TTL就是消息的存活时间，RabbitMQ可以对队列和消息分别设置TTL。</p><ul><li>对队列设置TTL，也可以为每一个消息单独设置TTL，如果两个都设置了会选择较小值。通过<code>expiration</code>或者<code>x-message-ttl</code>属性来设置过期时间。</li></ul><h3 id="模拟订单过期解锁库存" tabindex="-1"><a class="header-anchor" href="#模拟订单过期解锁库存" aria-hidden="true">#</a> 模拟订单过期解锁库存</h3><p><img src="'+g+'" alt="image-20230616205428858"></p><p>订单创建的时候在延时队列中添加库存解锁信息，信息过期的时候表明订单也就过期了，进入死信路由DLX，接着转发到解锁库存的队列中，在解锁前还需要检查订单是否支付（支付宝中采用最大努力交付，用户还可通过接口主动查询支付结果），没有支付则释放库存和取消订单（取消订单可以通过信息发送给相应的订单解锁队列）。</p><h2 id="rabbitmq-消息怎么传输" tabindex="-1"><a class="header-anchor" href="#rabbitmq-消息怎么传输" aria-hidden="true">#</a> RabbitMQ 消息怎么传输？</h2><p>由于TCP链接的创建和销毁开销较大，且并发数受系统资源限制，会造成性能瓶颈，所以<strong>RabbitMQ 使用信道的方式来传输数据</strong>。</p><p>信道（Channel）是生产者、消费者与RabbitMQ通信的渠道，<strong>信道是建立在 TCP 链接上的虚拟链接</strong>，且每条TCP链接上的信道数量没有限制。就是说RabbitMQ在一条TCP链接上建立成百上千个信道来达到多个线程处理，这个TCP被多个线程共享，每个信道在RabbitMQ都有唯一的 ID，保证了信道私有性，每个信道对应一个线程使用。</p><p><img src="'+k+'" alt="image-20230616211804679"></p><p><strong>Broker</strong>：中间件本身。接收和分发消息的应用，这里指的就是RabbitMQ Server。</p><p><strong>Virtual host</strong>：虚拟主机。出于多租户和安全因素设计的，把AMQP的基本组件划分到一个虚拟的分组中，类似于网络中的namespace概念。当多个不同的用户使用同一个RabbitMQ server提供的服务时，可以划分出多个vhost，每个用户在自己的vhost创建exchange／queue等。</p><p><strong>Connection</strong>：连接。publisher／consumer和Broker之间的TCP连接。断开连接的操作只会在client端进行，Broker不会断开连接，除非出现网络故障或Broker服务出现问题。</p><p><strong>Channel</strong>：渠道。如果每一次访问RabbitMQ都建立一个Connection，在消息量大的时候建立TCP 。</p><p>Connection的开销会比较大且效率也较低。Channel是在Connection内部建立的逻辑连接，如果应用程序支持多线程，通常每个thread创建单独的Channel进行通讯，AMQP method包含了Channel Id帮助客户端和Message Broker识别Channel，所以Channel之间是完全隔离的。Channel作为轻量级的Connection极大减少了操作系统建立TCP Connection的开销。</p><h2 id="如何保证消息的可靠性-防止消息丢失" tabindex="-1"><a class="header-anchor" href="#如何保证消息的可靠性-防止消息丢失" aria-hidden="true">#</a> 如何保证消息的可靠性，防止消息丢失？</h2><ul><li>生产者到RabbitMQ：事务的Confirm机制，事务和confirm机制不能同时存在。</li><li>RabbitMQ自身：持久化、集群、普通模式、镜像模式。</li><li>RabbitMQ到消费者：basicACK机制、死信队列、消息补偿机制。</li></ul><p><img src="'+m+`" alt="image-20230617224404357"></p><h4 id="confirmcallback" tabindex="-1"><a class="header-anchor" href="#confirmcallback" aria-hidden="true">#</a> confirmCallback</h4><p><strong>消息从producer——&gt;exchange，会回调confirmCallback</strong>，重写confirm方法有3个参数：</p><ul><li><p>correlationData：相关配置信息；</p></li><li><p>ack：exchange交换机是否成功收到信息，true成功，false失败；</p></li><li><p>cause：失败原因；</p></li></ul><p>producer端发送消息需要添加异常处理，防止发送途中MQ宕机。</p><h4 id="returncallback" tabindex="-1"><a class="header-anchor" href="#returncallback" aria-hidden="true">#</a> returnCallback</h4><p><strong>消息从exchange——&gt;queue，当交换机到队列路由失败时才会执行returnCallback</strong> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>rabbitTemplate<span class="token punctuation">.</span><span class="token function">setMandatory</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置交换机处理失败消息的模式，如果不设置，默认会丢失消息，设置为true，则会执行returnMessage方法，将消息返回给生产者。</span>
rabbitTemplage<span class="token punctuation">.</span><span class="token function">setReturnCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">RabbitTemplate<span class="token punctuation">.</span>ReturnCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">returnMessage</span><span class="token punctuation">(</span><span class="token class-name">Message</span> message<span class="token punctuation">,</span> <span class="token keyword">int</span> replyCode<span class="token punctuation">,</span> <span class="token class-name">String</span> replyText<span class="token punctuation">,</span> <span class="token class-name">String</span> exchange<span class="token punctuation">,</span> <span class="token class-name">String</span> routingKey<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;return 执行了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="ack" tabindex="-1"><a class="header-anchor" href="#ack" aria-hidden="true">#</a> ack</h4><p>ack指Acknowledge，确认，表示消费者收到消息后的确认方式。</p><p>有3种确认方式：</p><ul><li>自动确认：acknowledge=&quot;none&quot;；</li><li>手动确认：acknowledge=&quot;manual&quot;；</li><li>根据异常情况确认：acknowledge=&quot;auto&quot;。</li></ul><p>其中自动确认是指一旦消息被consumer收到，则自动确认收到，并将相应的message从RabbitMQ缓存中移除，但在实际业务处理中，很可能消息接收到但是业务处理出现异常，那么该消息就会丢失。</p><p>如果设置了手动确认模式，则在业务处理成功后，调用<code>channel.basicAck()</code>手动签收，如果出现异常，则调用<code>channel.basicNack()</code>方法，让其自动重新发送消息。</p><h2 id="如何保证-rabbitmq-消息的顺序性" tabindex="-1"><a class="header-anchor" href="#如何保证-rabbitmq-消息的顺序性" aria-hidden="true">#</a> 如何保证 RabbitMQ 消息的顺序性？</h2><p>一个 queue (消息队列)是对应一个 consumer(消费者)，然后这个 consumer(消费者)内部用内存队列做排队，然后分发给底层不同的 worker 来处理。</p><h2 id="rabbitmq消息积压如何处理" tabindex="-1"><a class="header-anchor" href="#rabbitmq消息积压如何处理" aria-hidden="true">#</a> RabbitMQ消息积压如何处理？</h2><p>消息生产太快，消费不过来，导致队列堆积很长，把服务器内存耗尽，这时RabbitMQ的处理能力很低下。 总结起来解决方案大体包括：</p><ul><li>增加消费者的处理能力，或减少发布频率，<strong>增加消费端实例</strong>。说白了就是增加机器。</li><li>如果申请机器行不通，毕竟公司的机器是有限的，此时可以增加消费端的消费能力。在MQ的配置中配置&quot;<strong>最大消费者数量</strong>&quot;与&quot;<strong>每次从队列中获取的消息数量</strong>&quot;。</li><li>考虑使用队列最大长度限制，RabbitMQ 3.1支持。</li><li>给消息设置年龄，超时就丢弃。</li><li>发送者发送流量太大上线更多的消费者，<strong>紧急上线专门用于记录消息的队列</strong>，将消息先批量取出来，记录数据库，离线慢慢处理。</li></ul>`,110);function x(q,_){const t=i("ExternalLinkIcon");return s(),o("div",null,[Q,a("p",null,[n("☀️详见"),a("a",f,[n("分布式事务"),c(t)])]),R])}const T=r(M,[["render",x],["__file","2mq.html.vue"]]);export{T as default};
