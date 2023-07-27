import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as s,c as i,b as r,d as t,a as l,f as n}from"./app-c5bdf958.js";const d={},h=n('<h2 id="tcp-与-udp" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp" aria-hidden="true">#</a> TCP 与 UDP</h2><h3 id="tcp-与-udp-的区别" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp-的区别" aria-hidden="true">#</a> TCP 与 UDP 的区别</h3><ul><li><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li><li><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</li><li><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了。</li><li><strong>传输效率</strong>：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。</li><li><strong>传输形式</strong>：TCP 是面向字节流的，UDP 是面向报文的。</li><li><strong>首部开销</strong>：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。</li><li><strong>是否提供广播或多播服务</strong>：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多；</li></ul><h3 id="什么时候选择-tcp-什么时候选-udp" tabindex="-1"><a class="header-anchor" href="#什么时候选择-tcp-什么时候选-udp" aria-hidden="true">#</a> 什么时候选择 TCP，什么时候选 UDP?</h3><ul><li><strong>UDP 一般用于即时通信</strong>，语音、 视频、直播等等。这些场景对传输数据的准确性要求不是特别高，比如看视频即使少个一两帧，实际给人的感觉区别也不大。</li><li><strong>TCP 用于对传输准确性要求特别高的场景</strong>，文件传输、发送和接收邮件、远程登录等等。</li></ul><h3 id="http-基于-tcp-还是-udp" tabindex="-1"><a class="header-anchor" href="#http-基于-tcp-还是-udp" aria-hidden="true">#</a> HTTP 基于 TCP 还是 UDP？</h3><p>HTTP/3.0 之前是基于 TCP 协议的，而 HTTP/3.0 将弃用 TCP，改用 <strong>基于 UDP 的 QUIC 协议</strong> 。此变化解决了 HTTP/2 中存在的队头阻塞问题。由于 HTTP/2 在单个 TCP 连接上使用了多路复用，受到 TCP 拥塞控制的影响，少量的丢包就可能导致整个 TCP 连接上的所有流被阻塞。另外，HTTP/2.0 需要经过经典的 TCP 三次握手过程（一般是 3 个 RTT）。由于 QUIC 协议的特性，HTTP/3.0 可以避免 TCP 三次握手的延迟，允许在第一次连接时发送数据（0 个 RTT ，零往返时间）。</p><h3 id="使用-tcp-的协议有哪些-使用-udp-的协议有哪些" tabindex="-1"><a class="header-anchor" href="#使用-tcp-的协议有哪些-使用-udp-的协议有哪些" aria-hidden="true">#</a> 使用 TCP 的协议有哪些？使用 UDP 的协议有哪些?</h3><p><strong>运行于 TCP 协议之上的协议</strong>：</p><ul><li><strong>HTTP 协议</strong>：超文本传输协议（HTTP，HyperText Transfer Protocol)是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li><li><strong>HTTPS 协议</strong>：更安全的超文本传输协议(HTTPS，Hypertext Transfer Protocol Secure)，身披 SSL 外衣的 HTTP 协议</li><li><strong>FTP 协议</strong>：文件传输协议 FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>SMTP 协议</strong>：简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）的缩写，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP 协议</strong>：两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>Telnet 协议</strong>：用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH 协议</strong> : SSH（Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH 建立在可靠的传输协议 TCP 之上。</li></ul><p><strong>运行于 UDP 协议之上的协议</strong>：</p><ul><li><strong>DHCP</strong>：动态主机配置协议，动态配置 IP 地址。</li><li><strong>DNS</strong>：域名系统（DNS，Domain Name System）。</li></ul><h2 id="tcp-三次握手和四次挥手-传输层" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手和四次挥手-传输层" aria-hidden="true">#</a> TCP 三次握手和四次挥手（传输层）</h2><h3 id="建立连接-tcp三次握手" tabindex="-1"><a class="header-anchor" href="#建立连接-tcp三次握手" aria-hidden="true">#</a> 建立连接-TCP三次握手</h3><ul><li><strong>一次握手</strong>:客户端发送带有 <code>SYN(SEQ=x)</code> 标志的数据包 -&gt; 服务端，然后客户端进入 <strong>SYN_SEND</strong> 状态，等待服务器的确认；</li><li><strong>二次握手</strong>:服务端发送带有 <code>SYN+ACK(SEQ=y,ACK=x+1)</code> 标志的数据包 –&gt; 客户端,然后服务端进入 <strong>SYN_RECV</strong> 状态</li><li><strong>三次握手</strong>:客户端发送带有 <code>ACK(ACK=y+1)</code> 标志的数据包 –&gt; 服务端，然后客户端和服务器端都进入 <strong>ESTABLISHED</strong> 状态，完成 TCP 三次握手。</li></ul><p><a href="/markdown/image-202307272029.png">tcp三次握手</a></p><h3 id="为什么要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么要三次握手" aria-hidden="true">#</a> 为什么要三次握手？</h3><p>三次握手的目的是建立可靠的通信信道。</p><ol><li>第一次握手：Client 什么都不能确认，Server 确认了对方发送正常，自己接收正常。</li><li>第二次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：对方发送正常，自己接收正常。</li><li>第三次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送、接收正常。</li></ol><p>三次握手就能确认双方收发功能都正常，缺一不可。</p><h3 id="断开连接-tcp-四次挥手" tabindex="-1"><a class="header-anchor" href="#断开连接-tcp-四次挥手" aria-hidden="true">#</a> 断开连接-TCP 四次挥手</h3><ol><li><strong>第一次挥手</strong>：客户端发送一个 <code>FIN(SEQ=x)</code> 标志的数据包 -&gt; 服务端，用来关闭客户端到服务器的数据传送。然后，客户端进入 <strong>FIN-WAIT-1</strong> 状态。</li><li><strong>第二次挥手</strong>：服务器收到这个 <code>FIN(SEQ=X)</code> 标志的数据包，它发送一个 <code>ACK(ACK=x+1)</code> 标志的数据包-&gt;客户端 。然后，此时服务端进入 <strong>CLOSE-WAIT</strong> 状态，客户端进入 <strong>FIN-WAIT-2</strong> 状态。</li><li><strong>第三次挥手</strong>：服务端关闭与客户端的连接并发送一个 <code>FIN(SEQ=y)</code> 标志的数据包 -&gt; 客户端请求关闭连接，然后，服务端进入 <strong>LAST-ACK</strong> 状态。</li><li><strong>第四次挥手</strong>：客户端发送 <code>ACK(ACK=y+1)</code> 标志的数据包 -&gt; 服务端并且进入 <strong>TIME-WAIT</strong> 状态，服务端在收到 <code>ACK(ACK=y+1)</code> 标志的数据包后进入 <strong>CLOSE</strong> 状态。此时，如果客户端等待 <strong>2MSL</strong> 后依然没有收到回复，就证明服务端已正常关闭，随后，客户端也可以关闭连接了。</li></ol><p><strong>只要四次挥手没有结束，客户端和服务端就可以继续传输数据</strong></p><h3 id="为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手" tabindex="-1"><a class="header-anchor" href="#为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手" aria-hidden="true">#</a> 为什么不能把服务器发送的 ACK 和 FIN 合并起来，变成三次挥手？</h3><p>因为服务器收到客户端断开连接的请求时，可能还有一些数据没有发完，这时先回复 ACK，表示接收到了断开连接的请求。等到数据发完之后再发 FIN，断开服务器到客户端的数据传送。</p><h3 id="为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态" tabindex="-1"><a class="header-anchor" href="#为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态" aria-hidden="true">#</a> 为什么第四次挥手客户端需要等待 2*MSL（报文段最长寿命）时间后才进入 CLOSED 状态？</h3><p>第四次挥手时，客户端发送给服务器的 ACK 有可能丢失，如果服务端因为某些原因而没有收到 ACK 的话，服务端就会重发 FIN，如果客户端在 2*MSL 的时间内收到了 FIN，就会重新发送 ACK 并再次等待 2MSL，防止 Server 没有收到 ACK 而不断重发 FIN。</p><h2 id="tcp-传输可靠性保障-传输层" tabindex="-1"><a class="header-anchor" href="#tcp-传输可靠性保障-传输层" aria-hidden="true">#</a> TCP 传输可靠性保障（传输层）</h2><h3 id="tcp-如何保证传输的可靠性" tabindex="-1"><a class="header-anchor" href="#tcp-如何保证传输的可靠性" aria-hidden="true">#</a> TCP 如何保证传输的可靠性？</h3>',29),c=r("li",null,[r("strong",null,"基于数据块传输"),t("：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。")],-1),g=r("li",null,[r("strong",null,"对失序数据包重新排序以及去重"),t("：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。")],-1),T=r("li",null,[r("strong",null,"校验和"),t(" : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。")],-1),P=r("strong",null,"超时重传",-1),p={href:"https://zh.wikipedia.org/wiki/%E4%B8%A2%E5%8C%85",target:"_blank",rel:"noopener noreferrer"},C=r("li",null,[r("strong",null,"流量控制"),t(" : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。")],-1),u=r("li",null,[r("strong",null,"拥塞控制"),t(" : 当网络拥塞时，减少数据的发送。")],-1),S=n('<h3 id="tcp-如何实现流量控制" tabindex="-1"><a class="header-anchor" href="#tcp-如何实现流量控制" aria-hidden="true">#</a> TCP 如何实现流量控制？</h3><p><strong>TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。</strong></p><h3 id="tcp-的拥塞控制是怎么实现的" tabindex="-1"><a class="header-anchor" href="#tcp-的拥塞控制是怎么实现的" aria-hidden="true">#</a> TCP 的拥塞控制是怎么实现的？</h3><p>通过拥塞控制算法实现。</p><ul><li><strong>慢开始：</strong> 慢开始算法的思路是当主机开始发送数据时，如果立即把大量数据字节注入到网络，那么可能会引起网络阻塞，因为现在还不知道网络的符合情况。经验表明，较好的方法是先探测一下，即由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口数值。cwnd 初始值为 1，每经过一个传播轮次，cwnd 加倍。</li><li><strong>拥塞避免：</strong> 拥塞避免算法的思路是让拥塞窗口 cwnd 缓慢增大，即每经过一个往返时间 RTT 就把发送方的 cwnd 加 1.</li><li><strong>快重传与快恢复：</strong> 快重传：**如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。**快恢复：在网络发生拥塞之后，不会将拥塞窗口设置为1，而是直接设置为ssthresh阈值的一半。</li></ul><h2 id="arq协议" tabindex="-1"><a class="header-anchor" href="#arq协议" aria-hidden="true">#</a> ARQ协议</h2><p>ARQ称为<strong>自动重传请求</strong>（Automatic Repeat-reQuest，ARQ）；</p><h3 id="停止等待协议" tabindex="-1"><a class="header-anchor" href="#停止等待协议" aria-hidden="true">#</a> 停止等待协议</h3><p><strong>发送窗口=接收窗口=1；</strong></p><p>停止等待协议中超时重传是指只要超过一段时间仍然没有收到确认，就重传前面发送过的分组（认为刚才发送过的分组丢失了）。因此每发送完一个分组需要设置一个超时计时器，其重传时间应比数据在分组传输的平均往返时间更长一些。这种自动重传方式常称为 <strong>自动重传请求 ARQ</strong> 。另外在停止等待协议中若收到重复分组，就丢弃该分组，但同时还要发送确认。</p><h3 id="后退n帧协议-gbn" tabindex="-1"><a class="header-anchor" href="#后退n帧协议-gbn" aria-hidden="true">#</a> 后退N帧协议（GBN）</h3><p><strong>发送窗口&gt;1 ,接收窗口=1；</strong></p><p>连续 ARQ 协议可提高信道利用率。发送方维持一个发送窗口，凡位于发送窗口内的分组可以连续发送出去，而不需要等待对方确认。接收方一般采用累计确认，对按序到达的最后一个分组发送确认，表明到这个分组为止的所有分组都已经正确收到了。</p><p>发送方能将发送窗口内的所有序号发送，接收窗口每收到一个序号就会发送一个确认帧，并将接收窗口向前移动。如果发送方超时没有收到确认帧，则将此确认帧还有之后已经发送的序号全部重发。</p><p>如果收到了序号n的确认，则认为前面需要的数据在接收端都受到了，这种确认叫做<strong>累计确认机制</strong>。</p><h3 id="选择重传协议-sr" tabindex="-1"><a class="header-anchor" href="#选择重传协议-sr" aria-hidden="true">#</a> 选择重传协议（SR）</h3><p>发送窗口 &gt; 1 ,接收窗口 &gt; 1；</p><p>选择重传协议不再具有累计确认机制，凡是接收窗口中的序号都接收并返回确认帧，如果发生超时，就重传超时的帧，而不是GBN中的当前帧和后续的所有帧。</p>',18);function f(A,_){const e=a("ExternalLinkIcon");return s(),i("div",null,[h,r("ul",null,[c,g,T,r("li",null,[P,t(" : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被假设为"),r("a",p,[t("已丢失open in new window"),l(e)]),t("并进行重传。")]),C,u]),S])}const b=o(d,[["render",f],["__file","2net.html.vue"]]);export{b as default};
