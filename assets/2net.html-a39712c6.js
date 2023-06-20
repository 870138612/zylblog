const l=JSON.parse('{"key":"v-0f0f7366","path":"/computer/1net/2net.html","title":"计算机网络二","lang":"zh-CN","frontmatter":{"title":"计算机网络二","icon":"page","star":true,"category":["计算机基础"],"tag":["计算机网络","八股"]},"headers":[{"level":2,"title":"TCP 与 UDP","slug":"tcp-与-udp","link":"#tcp-与-udp","children":[{"level":3,"title":"TCP 与 UDP 的区别","slug":"tcp-与-udp-的区别","link":"#tcp-与-udp-的区别","children":[]},{"level":3,"title":"什么时候选择 TCP，什么时候选 UDP?","slug":"什么时候选择-tcp-什么时候选-udp","link":"#什么时候选择-tcp-什么时候选-udp","children":[]},{"level":3,"title":"HTTP 基于 TCP 还是 UDP？","slug":"http-基于-tcp-还是-udp","link":"#http-基于-tcp-还是-udp","children":[]},{"level":3,"title":"使用 TCP 的协议有哪些?使用 UDP 的协议有哪些?","slug":"使用-tcp-的协议有哪些-使用-udp-的协议有哪些","link":"#使用-tcp-的协议有哪些-使用-udp-的协议有哪些","children":[]}]},{"level":2,"title":"TCP 三次握手和四次挥手（传输层）","slug":"tcp-三次握手和四次挥手-传输层","link":"#tcp-三次握手和四次挥手-传输层","children":[{"level":3,"title":"建立连接-TCP三次握手","slug":"建立连接-tcp三次握手","link":"#建立连接-tcp三次握手","children":[]},{"level":3,"title":"为什么要三次握手？","slug":"为什么要三次握手","link":"#为什么要三次握手","children":[]},{"level":3,"title":"断开连接-TCP 四次挥手","slug":"断开连接-tcp-四次挥手","link":"#断开连接-tcp-四次挥手","children":[]},{"level":3,"title":"为什么不能把服务器发送的 ACK 和 FIN 合并起来，变成三次挥手？","slug":"为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手","link":"#为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手","children":[]},{"level":3,"title":"为什么第四次挥手客户端需要等待 2*MSL（报文段最长寿命）时间后才进入 CLOSED 状态？","slug":"为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态","link":"#为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态","children":[]}]},{"level":2,"title":"TCP 传输可靠性保障（传输层）","slug":"tcp-传输可靠性保障-传输层","link":"#tcp-传输可靠性保障-传输层","children":[{"level":3,"title":"TCP 如何保证传输的可靠性？","slug":"tcp-如何保证传输的可靠性","link":"#tcp-如何保证传输的可靠性","children":[]},{"level":3,"title":"TCP 如何实现流量控制？","slug":"tcp-如何实现流量控制","link":"#tcp-如何实现流量控制","children":[]},{"level":3,"title":"TCP 的拥塞控制是怎么实现的？","slug":"tcp-的拥塞控制是怎么实现的","link":"#tcp-的拥塞控制是怎么实现的","children":[]}]},{"level":2,"title":"ARQ协议","slug":"arq协议","link":"#arq协议","children":[{"level":3,"title":"停止等待协议","slug":"停止等待协议","link":"#停止等待协议","children":[]},{"level":3,"title":"后退N帧协议（GBN）","slug":"后退n帧协议-gbn","link":"#后退n帧协议-gbn","children":[]},{"level":3,"title":"选择重传协议（SR）","slug":"选择重传协议-sr","link":"#选择重传协议-sr","children":[]}]}],"git":{"createdTime":1684848543000,"updatedTime":1687273140000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":9}]},"readingTime":{"minutes":11.69,"words":3508},"filePathRelative":"computer/1net/2net.md","localizedDate":"2023年5月23日","excerpt":"<h2> TCP 与 UDP</h2>\\n<h3> TCP 与 UDP 的区别</h3>\\n<ul>\\n<li>\\n<p><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</p>\\n</li>\\n<li>\\n<p><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</p>\\n</li>\\n<li>\\n<p><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了。</p>\\n</li>\\n</ul>\\n"}');export{l as data};
