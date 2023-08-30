import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o,c as p,e as l,b as a,d as e,a as d,f as r}from"./app-49881e5d.js";const h="/markdown/image-20230614201247430.png",c="/markdown/image-20230614201542373.png",s="/markdown/image-20230614202838546.png",g="/markdown/image-20230615205528295.png",m="/markdown/image-20230615212644155.png",u={},C=a("p",null,"订单微服务中，下单的同时请求库存微服务减少库存，整个过程就是一个分布式事务。",-1),b=a("p",null,[a("img",{src:h,alt:"image-20230614201247430"})],-1),f=r('<h2 id="分布式基础理论" tabindex="-1"><a class="header-anchor" href="#分布式基础理论" aria-hidden="true">#</a> 分布式基础理论</h2><h3 id="cap" tabindex="-1"><a class="header-anchor" href="#cap" aria-hidden="true">#</a> CAP</h3><p>CAP是 <code>Consistency</code>、<code>Availability</code>、<code>Partition tolerance</code> 三个词语的缩写，分别表示一致性，可用性，分区容错性。</p><h3 id="商品信息管理案例" tabindex="-1"><a class="header-anchor" href="#商品信息管理案例" aria-hidden="true">#</a> 商品信息管理案例</h3><p><img src="'+c+'" alt="image-20230614201542373"></p><p>采用读写分离的数据库集群模式。</p><p>整体执行过程：</p><ol><li>商品服务请求主数据库写入商品信息。</li><li>主数据库向商品服务响应写入成功。</li><li>商品服务请求从数据库读取商品信息。</li></ol><h4 id="c-consistency-一致性" tabindex="-1"><a class="header-anchor" href="#c-consistency-一致性" aria-hidden="true">#</a> <strong>C-Consistency 一致性</strong></h4><p><strong>写操作之后读操作能获得最新的数据</strong>。</p><p><strong>商品信息要满足一致性需要：</strong></p><ul><li>写主数据库成功，则向从数据库查询新数据也成功。</li><li>写主数据库失败，则向从数据库查询新数据也失败。</li></ul><p><strong>如何实现一致性？</strong></p><ul><li>写入主数据库后要将数据同步到从数据库。</li><li>写入完成之后的数据同步时，需要将从数据库锁定，防止请求查询到旧数据。</li></ul><p><strong>分布式系统一致性的特点：</strong></p><ul><li>由于数据同步的过程，写操作的响应有一定的延时。</li><li>为了保证数据一致性会对资源进行锁定，待数据同步完成再释放资源。</li></ul><h4 id="a-availability-可用性" tabindex="-1"><a class="header-anchor" href="#a-availability-可用性" aria-hidden="true">#</a> <strong>A-Availability 可用性</strong></h4><p><strong>任何事务操作都可以得到响应结果，且不会出现响应超时或者错误</strong>。</p><p><strong>商品信息满足可用性需要：</strong></p><ul><li>从数据库接收到数据查询的请求则能立即响应数据查询结果。</li><li>从数据库不允许出现响应超时或者错误。</li></ul><p><strong>如何实现可用性？</strong></p><ul><li>写入主数据库后数据同步到从数据库。</li><li>由于要保证数据库的可用性，不能将数据库进行锁定。</li><li>即使数据库没有同步完成，从数据库也要返回结果，即使结果是旧数据，但不能响应错误或者超时。</li></ul><p><strong>分布式系统可用性特点：</strong></p><ul><li>所有请求都有响应，并且不会出现响应错误或者响应超时。</li></ul><h4 id="p-partition-tolerance-分区容错性" tabindex="-1"><a class="header-anchor" href="#p-partition-tolerance-分区容错性" aria-hidden="true">#</a> <strong>P-Partition tolerance 分区容错性</strong></h4><p><strong>分布式系统部署在不同的子网，不可避免出现由于网络问题而导致的节点之间通信失败，对此仍然可以对外提供服务，称为分区容错性</strong>。</p><p><strong>商品信息满足分区容错性需要：</strong></p><ul><li>主数据库向从数据库同步失败不影响读写操作。</li><li>其一个节点挂掉不影响另外一个节点对外服务。</li></ul><p><strong>如何实现分区容错性？</strong></p><ul><li>尽量使用异步取代同步，例如使用异步将主数据库的数据同步到从数据库。</li><li>添加数据库节点，其中一个挂掉，另外一个仍然能工作。</li></ul><p><strong>分布式系统分区容错性的特点：</strong></p><ul><li>分区容错性是分布式系统最基本的能力。</li></ul><p>在所有分布式事务场景中不会同时具备 CAP 三个特性，满足 P 的前提下 C 和 A 是不能共存的。</p><h3 id="cap-组合方式" tabindex="-1"><a class="header-anchor" href="#cap-组合方式" aria-hidden="true">#</a> CAP 组合方式</h3><h4 id="ap" tabindex="-1"><a class="header-anchor" href="#ap" aria-hidden="true">#</a> AP</h4><p>放弃一致性，追求分区容错性和可用性，这是多数分布式系统设计时的选择。</p><p>通常实现 AP 都会保证最终一致性，BASE 理论就是根据 AP 扩展来，例如订单退款，不要求立即到账，只要最终会退款即可。</p><h4 id="cp" tabindex="-1"><a class="header-anchor" href="#cp" aria-hidden="true">#</a> CP</h4><p>放弃可用性，追求分区容错性和一致性，Zookeeper 其实就是追求强一致性。例如跨行转账，需要等待双方银行系统都完成整个事务才算完成。</p><h4 id="ca" tabindex="-1"><a class="header-anchor" href="#ca" aria-hidden="true">#</a> CA</h4><p>放弃分区容错性，追求一致性和可用性，不考虑网络挂掉的情况，那么系统就不是一个分布式系统。</p><p>上述商品系统管理如果要实现 CA，则可以使用一个数据库，这样就不存在分布式系统。</p><h3 id="base-理论" tabindex="-1"><a class="header-anchor" href="#base-理论" aria-hidden="true">#</a> BASE 理论</h3><p>BASE是 <code>Basically Available</code>（基本可用）、<code>Soft State</code>（软状态）和 <code>Eventually Consistent</code>（最终一致性）三个短语的缩写。是 AP 组合模式的拓展，允许数据库在一段时间内不一致，但最终达到一致状态，称为<strong>柔性事务</strong>。</p><p>基本可用：分布式系统出现故障时，允许损失部分可用功能，保证其余功能可用。</p><p>软状态：由于不要求强一致性，BASE 理论允许系统出现中间状态（软状态），这个状态不影响系统可用性。</p><p>最终一致性：经过一段时间之后，所有节点的数据都会达到一致性。</p><h2 id="分布式事务解决方案" tabindex="-1"><a class="header-anchor" href="#分布式事务解决方案" aria-hidden="true">#</a> 分布式事务解决方案</h2><h3 id="_2pc" tabindex="-1"><a class="header-anchor" href="#_2pc" aria-hidden="true">#</a> 2PC</h3><p>两阶段提交，将事务变成两个阶段，准备阶段（prepare phase）和提交阶段（commit phase）。</p><p><strong>整个事务过程由事务管理器管理</strong>。</p><p>实现方案：XA、Seata。</p><h3 id="tcc" tabindex="-1"><a class="header-anchor" href="#tcc" aria-hidden="true">#</a> TCC</h3><p>TCC是 <code>Try</code>、<code>Confirm</code>、<code>Cancel</code>三个词语的缩写，TCC 要求每个分支事务实现三个操作：预处理 Try、确认 Confirm、撤销 Cancel。</p><p>TCC 分为三个阶段︰</p><ol><li>Try 阶段是做业务检查（一致性）及资源预留（隔离），此阶段仅是一个初步操作，它和后续的 Confirm 一起才能真正构成一个完整的业务逻辑。</li><li>Confirm 阶段是做确认提交，Try 阶段所有分支事务执行成功后开始执行 Confirm。通常情况下，采用 TCC 则认为 Confirm 阶段是不会出错的。即：只要 Try 成功，Confirm 一定成功。若 Confirm 阶段真的出错了，需引入重试机制或人工处理。</li><li>Cancel 阶段是在业务执行错误需要回滚的状态下执行分支事务的业务取消，预留资源释放。通常情况下，采用 TCC 则认为 Cancel 阶段也是一定成功的。若 Cancel 阶段真的出错了，需引入重试机制或人工处理。</li></ol><p>TM 事务管理器</p><p>TM 事务管理器可以实现为独立的服务，也可以让全局事务发起方充当 TM 的角色，TM 独立出来是为了成为公用组件，是为了考虑系统结构和软件复用。</p><h4 id="tcc-和-2pc-的区别" tabindex="-1"><a class="header-anchor" href="#tcc-和-2pc-的区别" aria-hidden="true">#</a> TCC 和 2PC 的区别</h4><p>2PC 通常都是在跨库的 DB 层面，而 TCC 则是在应用层面处理，需要通过业务逻辑实现，这种分布式事务的实现方式可以让应用自己定义数据操作的粒度、降低锁冲突、提高吞吐量。</p><p>不足在于 TCC 对应用的侵入很大，实现难度也大。</p><h3 id="可靠消息最终一致性" tabindex="-1"><a class="header-anchor" href="#可靠消息最终一致性" aria-hidden="true">#</a> 可靠消息最终一致性</h3><p>可靠消息最终一致性指的是事务发起方执行完本地事务之后发出一条消息，事务参与方一定能接受消息并处理事务成功，此方案强调的是只要消息发给事务参与放最终事务要达到一致，通过消息队列中间件完成。</p><p><img src="'+s+'" alt="image-20230614202838546"></p><p>为了实现可靠消息最终一致性需要解决以下几个问题：</p><h4 id="_1-本地事务与消息发送的原子性" tabindex="-1"><a class="header-anchor" href="#_1-本地事务与消息发送的原子性" aria-hidden="true">#</a> 1.本地事务与消息发送的原子性</h4><p>本地事务与消息发送的原子性问题即事务发起方在本地事务执行成功后消息必须发出去，否则就丢弃消息。即实现本地事务和消息发送的原子性，要么都成功，要么都失败。本地事务与消息发送的原子性问题是实现可靠消息最终—致性方案的关键问题。</p><h4 id="_2-事务参与方接收消息的可靠性" tabindex="-1"><a class="header-anchor" href="#_2-事务参与方接收消息的可靠性" aria-hidden="true">#</a> 2.事务参与方接收消息的可靠性</h4><p>消费者方（事务参与方）需要正确接收到消息，如果接收失败可以重复接收消息。</p><h4 id="_3-消息重复消费问题" tabindex="-1"><a class="header-anchor" href="#_3-消息重复消费问题" aria-hidden="true">#</a> 3.消息重复消费问题</h4><p>对于接收到重复的消息应该只能有一个执行结果，需要完成事务参与方的方法<strong>幂等性</strong>。</p><h3 id="rocketmq-事务消息方案" tabindex="-1"><a class="header-anchor" href="#rocketmq-事务消息方案" aria-hidden="true">#</a> RocketMQ 事务消息方案</h3><p>RocketMQ 是来自阿里巴巴的分布式消息中间件，事务消息设计主要是为了解决 Producer 端发送消息与本地事务执行的原子性问题，其中的 broker 与 producer 端的双向通信能力使得 broker 天生可以作为一个事务的协调者存在， RocketMQ 本身也为事务消息提供了持久化能力。</p><p><img src="'+g+'" alt="image-20230615205528295"></p><p>在 MQ 发送方将消息成功发送给 MQ Server 时，消息还是处于不能消费的状态，如果收到 MQ Server 的确认，则会去调用本地事务，本地事务成功后通知 MQ Server 将消息 Commit，此时订阅方可消费。</p><p>如果本地事务出现问题，则会向 MQ Server 发送 Rollback，将消息删除，这样就能保证本地事务和消息发送的原子性。</p><p>第5步骤的回查事务状态，如果发现发送方有事务已经提交，则 MQ Server 会主动修改消息状态，即使没有收到 MQ 发送方发送的 Commit。</p><p>从 MQ Server 到 MQ 订阅方部分采用 ACK 确认机制，只要 MQ 订阅方没有返回 ACK 则会一直给他消费。</p>',78),_={href:"https://ylzhong.top/middleware/2rabbitmq.html",target:"_blank",rel:"noopener noreferrer"},x=r('<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><p>RocketMQ 主要解决了分布式事务中的两个问题：</p><ol><li>本地事务与消息发送的原子性问题。</li><li>事务参与方接收消息的可靠性问题。</li></ol><p>可靠消息最终一致性事务适合执行周期长且实时性要求不高的场景，引入消息机制后，同步的事物变成了基于消息执行的异步事务，避免了分布式事务中的同步阻塞操作的影响，并实现了服务的解耦。</p><h3 id="最大努力通知" tabindex="-1"><a class="header-anchor" href="#最大努力通知" aria-hidden="true">#</a> 最大努力通知</h3><p>发起通知方通过一定机制最大努力将业务处理结果通知到接收方。</p><p>具体包括：</p><ol><li>有一定的消息重复通知机制。</li><li>消息的校对机制。</li></ol><blockquote><p>例如支付宝支付成功之后会向对应的接口发送异步通知，如果不对接口返回确认，则过一段时间之后支付宝会再次发送通知，称为消息重复机制。</p><p>发送次数变多仍然没有收到确认之后，支付宝就会将时间间隔变大进行异步通知，此外服务器可以通过支付宝给的接口主动去查询支付结果，称为消息的校对机制。</p></blockquote><h3 id="最大努力通知和可靠消息一致性的区别" tabindex="-1"><a class="header-anchor" href="#最大努力通知和可靠消息一致性的区别" aria-hidden="true">#</a> 最大努力通知和可靠消息一致性的区别？</h3><ol><li><p>解决思想不同</p><p>可靠消息一致性，发起通知方需要保证将消息发送出去，并且将消息发到接收通知方，<strong>消息的可靠性关键由发起通知方来保证</strong>。</p><p>最大努力通知，发起通知方尽最大努力将业务处理结果通知接收通知方，但是消息可能接收不到，此时需要通过接口查询业务处理结果，<strong>通知的可靠性关键在接收通知方</strong>。</p></li><li><p>两者的业务场景不同</p><p>可靠消息一致性关注的是交易过程的事务一致，以异步的方式完成交易。</p><p>最大努力通知关注的是交易后的通知事务，即将交易结果可靠的通知出去。</p></li><li><p>技术解决方向不同</p><p>可靠消息一致性要解决消息从发出到接收的一致性，即消息发出并且被接收到。</p><p>最大努力通知无法保证消息从发出到接收的一致性，只提供消息接收的可靠性机制。</p></li></ol><h3 id="最大努力通知解决方案" tabindex="-1"><a class="header-anchor" href="#最大努力通知解决方案" aria-hidden="true">#</a> 最大努力通知解决方案</h3><p>以支付宝支付系统为例。</p><p><img src="'+m+'" alt="image-20230615212644155"></p><p>业务执行触发可以看成支付事务，支付结果通过发起通知方发送到消息队列中，并通过单独的通知程序定期通知给调用方。发起通知方，MQ，通知程序，可以看成支付宝管理的部分，接收方则可以看成我们自己。</p><p>此方案主要用于外部应用之间的通知，例如支付宝，微信支付结果通知。</p>',16);function k(A,M){const i=t("ExternalLinkIcon");return o(),p("div",null,[C,b,l(" more "),f,a("p",null,[e("☀️详见 "),a("a",_,[e("RabbitMQ"),d(i)])]),x])}const y=n(u,[["render",k],["__file","4distributedtransaction.html.vue"]]);export{y as default};
