import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as t,e as n,f as e}from"./app-d6b61794.js";const a="/markdown/3192518.jpg",d="/markdown/image-202307272029.png",i="/markdown/image-tcpfour.png",s={},l=e('<h2 id="常见的网络协议" tabindex="-1"><a class="header-anchor" href="#常见的网络协议" aria-hidden="true">#</a> 常见的网络协议</h2><h3 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h3><ul><li><strong>HTTP（Hypertext Transfer Protocol，超文本传输协议）</strong>：基于 TCP 协议，是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当使用浏览器浏览网页的时候，网页就是通过 HTTP 请求进行加载的。</li><li><strong>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</strong>：基于 TCP 协议，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP（邮件接收协议）</strong>：基于 TCP 协议，两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>FTP（File Transfer Protocol，文件传输协议）</strong> : 基于 TCP 协议，是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>Telnet（远程登陆协议）</strong>：基于 TCP 协议，用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH（Secure Shell Protocol，安全的网络传输协议）</strong>：基于 TCP 协议，通过加密和认证机制实现安全的访问和文件传输等业务</li><li><strong>RTP（Real-time Transport Protocol，实时传输协议）</strong>：通常基于 UDP 协议，但也支持 TCP 协议。它提供了端到端的实时传输数据的功能，但不包含资源预留存、不保证实时传输质量，这些功能由 WebRTC 实现。</li><li><strong>DNS（Domain Name System，域名管理系统）</strong>: 基于 UDP 协议，用于解决域名和 IP 地址的映射问题。</li></ul><h3 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h3><ul><li><strong>TCP（Transmission Control Protocol，传输控制协议 ）</strong>：提供<strong>面向连接</strong>的，<strong>可靠</strong>的数据传输服务。</li><li><strong>UDP（User Datagram Protocol，用户数据协议）</strong>：提供<strong>无连接</strong>的，<strong>尽最大努力</strong>的数据传输服务（不保证数据传输的可靠性），简单高效。</li></ul><h3 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h3><ul><li><strong>IP（Internet Protocol，网际协议）</strong>：TCP/IP 协议中最重要的协议之一，属于网络层的协议，主要作用是定义数据包的格式、对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。目前 IP 协议主要分为两种，一种是过去的 IPv4，另一种是较新的 IPv6，目前这两种协议都在使用，但后者已经被提议来取代前者。</li><li><strong>ARP（Address Resolution Protocol，地址解析协议）</strong>：ARP 协议解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li><li><strong>ICMP（Internet Control Message Protocol，互联网控制报文协议）</strong>：一种用于传输网络状态和错误消息的协议，常用于网络诊断和故障排除。例如，Ping 工具就使用了 ICMP 协议来测试网络连通性。</li><li><strong>NAT（Network Address Translation，网络地址转换协议）</strong>：NAT 协议的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。</li><li><strong>OSPF（Open Shortest Path First，开放式最短路径优先）</strong> ）：一种内部网关协议（Interior Gateway Protocol，IGP），也是广泛使用的一种动态路由协议，基于链路状态算法，考虑了链路的带宽、延迟等因素来选择最佳路径。</li><li><strong>RIP（Routing Information Protocol，路由信息协议）</strong>：一种内部网关协议（Interior Gateway Protocol，IGP），也是一种动态路由协议，基于距离向量算法，使用固定的跳数作为度量标准，选择跳数最少的路径作为最佳路径。</li><li><strong>BGP（Border Gateway Protocol，边界网关协议）</strong>：一种用来在路由选择域之间交换网络层可达性信息（Network Layer Reachability Information，NLRI）的路由选择协议，具有高度的灵活性和可扩展性。</li></ul><h2 id="get-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#get-和-post-的区别" aria-hidden="true">#</a> GET 和 POST 的区别</h2><p><code>GET</code> 和 <code>POST</code> 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 <code>GET</code> 还是 <code>POST</code>，用的都是同一个传输层协议，所以在传输上，没有区别。</p><p>不带参数时，这俩请求的报文只有在HTTP请求行的 method 字段不一样，其他都一样。带参数时，通常约定 <code>GET</code> 方法的参数应该放在 URL 中，<code>POST</code> 方法参数应该放在 Body 中。当然也可以不遵循这种约定，只要在服务端做好支持就好了。</p><ul><li><code>GET</code> 用于获取信息，是无副作用的，是幂等的，且可缓存。</li><li><code>POST</code> 用于修改服务器上的数据，有副作用，非幂等，不可缓存。</li></ul><p><strong>GET 方法参数写法是固定的吗？</strong></p><p>在约定中，参数是写在 <code>?</code> 后面，用 <code>&amp;</code> 分割。解析报文的过程是通过获取 TCP 数据，用正则等工具从数据中获取 Header 和 Body，从而提取参数。所以 <code>GET</code> 方法的参数是可以自定义的。</p><p><strong>POST 方法比 GET 方法安全？</strong></p><p>按照网上大部分文章的解释，<code>POST</code> 比 <code>GET</code> 安全，因为数据在地址栏上不可见。然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。要想安全传输，就只有加密，也就是 HTTPS。</p><p><strong>GET 方法的长度限制是怎么回事？</strong></p><p><strong>HTTP 协议没有 Body 和 URL 的长度限制</strong>，对 URL 限制的大多是浏览器和服务器的原因。浏览器原因就不说了，服务器是因为处理长 URL 要消耗比较多的资源，为了性能和安全（防止恶意构造长 URL 来攻击）考虑，会给 URL 长度加限制。</p><p><strong>POST 方法会产生两个 TCP 数据包？</strong></p><p>有些文章中提到，<code>POST</code> 会将 Header 和 Body 分开发送，先发送 Header，服务端返回 100 状态码再发送 Body。HTTP 协议中没有明确说明 <code>POST</code> 会产生两个 TCP 数据包，而且实际测试发现，Header 和 Body 不会分开发送。所以，Header 和 Body 分开发送是部分浏览器或框架的请求方法，不属于 <code>POST</code> 必然行为。</p><h2 id="put-和-post-的区别" tabindex="-1"><a class="header-anchor" href="#put-和-post-的区别" aria-hidden="true">#</a> PUT 和 POST 的区别</h2><p><strong>PUT 请求</strong></p><p><code>PUT</code> 请求是 HTTP 协议中的一种请求方法，通常用于更新或者是替换服务器上的资源。使用 <code>PUT</code> 请求时，客户端需要将整个资源的新版本发送到服务器，如果服务器有这个资源，则用客户端提交的新版本替换原有的资源，如果资源不存在则会创建一个新的资源。</p><ul><li>可以更新整个资源。</li><li>客户端需要发送完整的资源内容。</li><li>如果服务器上不存在该资源，则会创建一个新的资源。</li><li><strong><code>PUT</code> 请求具有幂等性</strong>，即执行多次 <code>PUT</code> 请求的结果应该相同。</li></ul><p><strong>POST 请求</strong></p><p><code>POST</code> 请求是 HTTP 协议中的一种请求方法，通常用于创建新的资源或提交数据到服务器进行处理。使用 <code>POST</code> 请求时，客户端将数据提交到服务器，服务器根据数据进行处理，并返回响应。通常情况下，<code>POST</code> 请求会在服务器上创建新的资源，并返回该资源的 URI。</p><ul><li>可以创建新的资源或提交数据到服务器进行处理。</li><li>客户端可以只发送部分资源内容。</li><li>如果请求成功，服务器会返回一个表示新资源的 URI。</li><li><strong><code>POST</code> 请求不具有幂等性</strong>。</li></ul><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="从输入-url-到页面展示到底发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入-url-到页面展示到底发生了什么" aria-hidden="true">#</a> 从输入 URL 到页面展示到底发生了什么？</h3><ol><li>DNS 解析；</li><li>TCP 连接；</li><li>发送 HTTP 请求；</li><li>服务器处理请求并返回 HTTP 报文；</li><li>浏览器解析渲染页面；</li><li>连接结束。</li></ol><h3 id="http-状态码" tabindex="-1"><a class="header-anchor" href="#http-状态码" aria-hidden="true">#</a> HTTP 状态码</h3><ul><li><p><strong>1 开头的表示临时响应</strong>。比如 100 表示客户端可以继续发送剩余请求。</p></li><li><p><strong>2 开头的表示客户端的请求成功被接收、理解、接受了</strong>。200 OK 表示请求成功，会根据请求中使用的方法返回响应的实体。204 Not Content 表示响应成功，但是响应头没有 Body 数据。206 Partial Content 应用于 HTTP 分块下载或断点续传，表示返回的 Body 数据不是全部数据，而是当中的一部分。</p></li><li><p><strong>3 开头的表示重定向</strong>。就是说用户代理需要采取进一步措施才能满足要求。首部 Location 字段标示重定向的 URL。301 Moved Permanently 表示永久性的重定向，302 Found 表示临时性的重定向，304 Not Modified 表示客户端发送附带条件的请求时，服务端允许请求访问资源，但未满足条件（if-Match，if-Range） 。当 301、302、303 响应状态码返回时，几乎所有的浏览器都会把 <code>POST</code> 改成 <code>GET</code>，并删除请求报文内的主体，之后请求会自动再次发送。</p></li><li><p><strong>4 开头的表示客户端错误</strong>。400 Bad Request 代表客户端的请求服务器理解不了，属于笼统的客户端错误。401 Unauthorized 未授权。403 Forbidden 服务器拒绝执行该请求，授权了也没用。404 Not Found 请求路径不存在。</p></li><li><p><strong>5 开头的表示服务端错误</strong>。500 Internal Server Error 服务端内部出现错误，属于笼统的服务器错误。502 Bad Gateway 指的是服务器作为网关从上游服务器中获得响应时失败（上游服务器宕机或者网关配置错误），504 Gateway Timeout 指的是服务器作为网关从上游服务器中获得响应时超时（上游服务器过载）。</p></li></ul><h3 id="https-与-http-的区别" tabindex="-1"><a class="header-anchor" href="#https-与-http-的区别" aria-hidden="true">#</a> HTTPS 与 HTTP 的区别</h3><p><strong>端口号</strong>：HTTP 默认是 <code>80</code>，HTTPS 默认是 <code>443</code>。</p><p><strong>URL 前缀</strong>：HTTP 的 URL 前缀是 <code>http://</code>，HTTPS 的 URL 前缀是 <code>https://</code>。</p><p><strong>安全性和资源消耗</strong>：HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。HTTPS 是运行在 SSL/TLS 之上的 HTTP 协议，SSL/TLS 运行在 TCP 之上。<strong>所有传输的内容都经过对称加密，加密使用的秘钥是通过非对称加密传输的</strong>。HTTP 安全性没有 HTTPS 高，但是 HTTPS 比 HTTP 耗费更多服务器资源。</p><blockquote><p>服务器生成一对公钥和私钥，公钥公开出去，私钥自己保留。 验证证书是否被篡改：从操作系统中拿到该证书发布机构的公钥, 对证书签名解密, 得到一个 hash 值（称为数据摘要/签名）, 设为 hash1； 然后浏览器计算整个证书的 hash 值, 设为 hash2，对比 hash1 和 hash2 是否相等，如果相等, 则说明证书是没有被篡改过的。 客户端拿到证书的公钥之后，使用公钥对对称密钥进行加密，将加密之后的秘钥密文通过网络传输给服务器。 服务器拿到密文之后，通过私钥对密文进行解密，得到对称密钥，那么后续就能通过这个对称密钥对数据进行加密解密。 为了防止服务器是伪造的，也就是提供的公钥是伪造的，引入了证书（证书 = 公钥 + 身份标识），这样在客户端收到公钥之后就会去验证公钥的合法性，合法才会进行后续步骤。</p></blockquote><p><strong>SEO（搜索引擎优化）</strong>：搜索引擎通常会更青睐使用 HTTPS 协议的网站，因为 HTTPS 能够提供更高的安全性和用户隐私保护。使用 HTTPS 协议的网站在搜索结果中可能会被优先显示，从而对 SEO 产生影响。</p><h3 id="http-1-0-和-http-1-1-区别" tabindex="-1"><a class="header-anchor" href="#http-1-0-和-http-1-1-区别" aria-hidden="true">#</a> HTTP/1.0 和 HTTP/1.1 区别</h3><ul><li><p>HTTP 1.0 是一种无状态，无连接的应用层协议，只能保持短连接，每次请求都需要建立 TCP 链接，完成请求之后断开，存在无法复用连接和队头阻塞问题（HTTP 1.0 规定下一个请求必须在前一个请求到达之后才能发送），不支持文件断点续传。</p></li><li><p>HTTP 1.1 增加 <code>Connection</code> 字段，通过设置 <code>Keep-Alive</code> 保持 HTTP 的连接不断开，避免了客户端与服务器之间频繁创建连接和释放连接，提高了网络利用率，使用管道化技术使得请求能够并行传送，但是响应结果必须按照请求先后顺序响应，还是无法解决队头阻塞问题。通过 <code>Range:bytes</code> 字段来支持断点续传，此外通过 <code>Cache-Control</code> 字段进行缓存处理。</p></li><li><p>HTTP 2.0 将传输的信息分为更小的消息和帧，采用二进制的格式进行编码，实现方便而且健壮。所有的请求都是通过一个 TCP 连接并发完成，多路复用真正做到了并发请求，此外还支持流量控制，首部压缩，HTTP 2.0 在客户端和服务器端使用 “首部表” 来跟踪和存储之前发送的键值对，对于相同的数据，不再通过每次请求和响应发送，如果首部发生变化了，那么只需要发送变化了数据在 Headers 帧里面，新增或修改的首部帧会被追加到 “首部表”。首部表在 HTTP 2.0 的连接存续期内始终存在，由客户端和服务器共同渐进地更新。</p></li></ul><h3 id="uri-和-url-的区别" tabindex="-1"><a class="header-anchor" href="#uri-和-url-的区别" aria-hidden="true">#</a> URI 和 URL 的区别</h3><ul><li><p><strong>URI（Uniform Resource Identifier）是统一资源标志符</strong>，可以唯一标识一个资源。</p></li><li><p><strong>URL（Uniform Resource Locator）是统一资源定位符</strong>，可以提供该资源的路径。它是一种具体的 URI，即 URL 可以用来标识一个资源，而且还指明了如何 locate 这个资源。</p></li></ul><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><h3 id="dns-的作用是什么" tabindex="-1"><a class="header-anchor" href="#dns-的作用是什么" aria-hidden="true">#</a> DNS 的作用是什么？</h3><p>DNS（Domain Name System）域名管理系统，是当用户使用浏览器访问网址之后，使用的第一个重要协议。DNS 要解决的是<strong>域名和 IP 地址的映射问题</strong>。</p><p>如果访问的网址在 <code>hosts</code> 文件中有对应的映射表目，则直接进行解析，否则需要使用 DNS 系统，DNS 是应用层协议，基于 UDP 协议之上，端口为 <code>53</code>。</p><h3 id="dns-服务器有哪些" tabindex="-1"><a class="header-anchor" href="#dns-服务器有哪些" aria-hidden="true">#</a> DNS 服务器有哪些？</h3><ul><li>根 DNS 服务器。根 DNS 服务器提供 TLD 服务器的 IP 地址。目前世界上只有 13 组根服务器，我国境内目前仍没有根服务器。</li><li>顶级域 DNS 服务器（TLD 服务器）。顶级域是指域名的后缀，如 <code>com</code>、<code>org</code>、<code>net</code> 和 <code>edu</code> 等。国家也有自己的顶级域，如 <code>uk</code>、<code>fr</code> 和 <code>ca</code>。TLD 服务器提供了权威 DNS 服务器的 IP 地址。</li><li>权限 DNS 服务器。在因特网上具有公共可访问主机的每个组织机构必须提供公共可访问的 DNS 记录，这些记录将这些主机的名字映射为 IP 地址。</li><li>本地 DNS 服务器。每个 ISP（互联网服务提供商）都有一个自己的本地 DNS 服务器。当主机发出 DNS 请求时，该请求被发往本地 DNS 服务器，它起着代理的作用，并将该请求转发到 DNS 层次结构中。严格说来，不属于 DNS 层级结构。</li></ul><p>解析方式分为迭代查询和递归查询。</p><p><img src="'+a+'" alt="3192518"></p><h2 id="tcp-与-udp" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp" aria-hidden="true">#</a> TCP 与 UDP</h2><h3 id="tcp-与-udp-的区别" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp-的区别" aria-hidden="true">#</a> TCP 与 UDP 的区别</h3><ul><li><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li><li><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</li><li><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了。</li><li><strong>传输效率</strong>：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。</li><li><strong>传输形式</strong>：TCP 是面向字节流的，UDP 是面向报文的。</li><li><strong>首部开销</strong>：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。</li><li><strong>是否提供广播或多播服务</strong>：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多；</li></ul><h3 id="什么时候选择-tcp-什么时候选-udp" tabindex="-1"><a class="header-anchor" href="#什么时候选择-tcp-什么时候选-udp" aria-hidden="true">#</a> 什么时候选择 TCP，什么时候选 UDP？</h3><ul><li><strong>UDP 一般用于即时通信</strong>，语音、 视频、直播等等。这些场景对传输数据的准确性要求不是特别高，比如看视频即使少个一两帧，实际给人的感觉区别也不大。</li><li><strong>TCP 用于对传输准确性要求特别高的场景</strong>，文件传输、发送和接收邮件、远程登录等等。</li></ul><h3 id="http-基于-tcp-还是-udp" tabindex="-1"><a class="header-anchor" href="#http-基于-tcp-还是-udp" aria-hidden="true">#</a> HTTP 基于 TCP 还是 UDP？</h3><p>HTTP/3.0 之前是基于 TCP 协议的，而 HTTP/3.0 将弃用 TCP，改用<strong>基于 UDP 的 QUIC 协议</strong>。此变化解决了 HTTP/2.0 中存在的队头阻塞问题。由于 HTTP/2.0 在单个 TCP 连接上使用了多路复用，受到 TCP 拥塞控制的影响，少量的丢包就可能导致整个 TCP 连接上的所有流被阻塞。另外，HTTP/2.0 需要经过经典的 TCP 三次握手过程（一般是 3 个 RTT）。由于 QUIC 协议的特性，HTTP/3.0 可以避免 TCP 三次握手的延迟，允许在第一次连接时发送数据（0 个 RTT ，零往返时间）。</p><h3 id="使用-tcp-的协议有哪些-使用-udp-的协议有哪些" tabindex="-1"><a class="header-anchor" href="#使用-tcp-的协议有哪些-使用-udp-的协议有哪些" aria-hidden="true">#</a> 使用 TCP 的协议有哪些？使用 UDP 的协议有哪些？</h3><p><strong>运行于 TCP 协议之上的协议</strong>：</p><ul><li><strong>HTTP 协议</strong>：超文本传输协议（HTTP，HyperText Transfer Protocol)是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当使用浏览器浏览网页的时候，网页就是通过 HTTP 请求进行加载的。</li><li><strong>HTTPS 协议</strong>：更安全的超文本传输协议(HTTPS，Hypertext Transfer Protocol Secure)，身披 SSL 外衣的 HTTP 协议</li><li><strong>FTP 协议</strong>：文件传输协议 FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>SMTP 协议</strong>：简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）的缩写，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP 协议</strong>：两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>Telnet 协议</strong>：用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH 协议</strong>：SSH（Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH 建立在可靠的传输协议 TCP 之上。</li></ul><p><strong>运行于 UDP 协议之上的协议</strong>：</p><ul><li><strong>DHCP</strong>：动态主机配置协议，动态配置 IP 地址。</li><li><strong>DNS</strong>：域名系统（DNS，Domain Name System）。</li></ul><h2 id="tcp-三次握手和四次挥手-传输层" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手和四次挥手-传输层" aria-hidden="true">#</a> TCP 三次握手和四次挥手（传输层）</h2><h3 id="建立连接-tcp三次握手" tabindex="-1"><a class="header-anchor" href="#建立连接-tcp三次握手" aria-hidden="true">#</a> 建立连接 - TCP三次握手</h3><ul><li><strong>一次握手</strong>：客户端发送带有 <code>SYN(SEQ=x)</code> 标志的数据包 -&gt; 服务端，然后客户端进入 <code>SYN_SEND</code> 状态，等待服务器的确认；</li><li><strong>二次握手</strong>：服务端发送带有 <code>SYN+ACK(SEQ=y,ACK=x+1)</code> 标志的数据包 –&gt; 客户端，然后服务端进入 <code>SYN_RECV</code> 状态；</li><li><strong>三次握手</strong>：客户端发送带有 <code>ACK(ACK=y+1)</code> 标志的数据包 –&gt; 服务端，然后客户端和服务器端都进入 <code>ESTABLISHED</code> 状态，完成 TCP 三次握手。</li></ul><p><img src="'+d+'" alt="tcp三次握手"></p><h3 id="为什么要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么要三次握手" aria-hidden="true">#</a> 为什么要三次握手？</h3><p>三次握手的目的是建立可靠的通信信道。</p><ol><li>第一次握手：Client 什么都不能确认，Server 确认了对方发送正常，自己接收正常。</li><li>第二次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：对方发送正常，自己接收正常。</li><li>第三次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送、接收正常。</li></ol><p>三次握手就能确认双方收发功能都正常，缺一不可。</p><h3 id="断开连接-tcp-四次挥手" tabindex="-1"><a class="header-anchor" href="#断开连接-tcp-四次挥手" aria-hidden="true">#</a> 断开连接 - TCP 四次挥手</h3><p><img src="'+i+'" alt="TCP四次挥手"></p><ol><li><strong>第一次挥手</strong>：客户端发送一个 <code>FIN(SEQ=x)</code> 标志的数据包 -&gt; 服务端，用来关闭客户端到服务器的数据传送。然后，客户端进入 <code>FIN-WAIT-1</code> 状态。</li><li><strong>第二次挥手</strong>：服务器收到这个 <code>FIN(SEQ=X)</code> 标志的数据包，它发送一个 <code>ACK(ACK=x+1)</code> 标志的数据包-&gt;客户端 。然后，此时服务端进入 <code>CLOSE-WAIT</code> 状态，客户端进入 <code>FIN-WAIT-2</code> 状态。</li><li><strong>第三次挥手</strong>：服务端关闭与客户端的连接并发送一个 <code>FIN(SEQ=y)</code> 标志的数据包 -&gt; 客户端请求关闭连接，然后，服务端进入 <code>LAST-ACK</code> 状态。</li><li><strong>第四次挥手</strong>：客户端发送 <code>ACK(ACK=y+1)</code> 标志的数据包 -&gt; 服务端，并且客户端进入 <code>TIME-WAIT</code> 状态，服务端在收到 <code>ACK(ACK=y+1)</code> 标志的数据包后进入 <code>CLOSE</code> 状态。此时，如果客户端等待 <strong>2MSL</strong> 后依然没有收到回复，就证明服务端已正常关闭，随后，客户端也可以关闭连接了。</li></ol><p><strong>只要四次挥手没有结束，客户端和服务端就可以继续传输数据</strong></p><h3 id="为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手" tabindex="-1"><a class="header-anchor" href="#为什么不能把服务器发送的-ack-和-fin-合并起来-变成三次挥手" aria-hidden="true">#</a> 为什么不能把服务器发送的 ACK 和 FIN 合并起来，变成三次挥手？</h3><p>因为服务器收到客户端断开连接的请求时，可能还有一些数据没有发完，这时先回复 <code>ACK</code>，表示接收到了断开连接的请求。等到数据发完之后再发 <code>FIN</code>，断开服务器到客户端的数据传送。</p><h3 id="为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态" tabindex="-1"><a class="header-anchor" href="#为什么第四次挥手客户端需要等待-2-msl-报文段最长寿命-时间后才进入-closed-状态" aria-hidden="true">#</a> 为什么第四次挥手客户端需要等待 2*MSL（报文段最长寿命）时间后才进入 CLOSED 状态？</h3><p>第四次挥手时，客户端发送给服务器的 <code>ACK</code> 有可能丢失，如果服务端因为某些原因而没有收到 <code>ACK</code> 的话，服务端就会重发 <code>FIN</code>，如果客户端在 2*MSL 的时间内收到了 <code>FIN</code>，就会重新发送 <code>ACK</code> 并再次等待 2MSL，防止 Server 没有收到 <code>ACK</code> 而不断重发 <code>FIN</code>。从客户端回复 <code>ACK</code> 到关闭的过程需要等待 2MSL，防止这个 <code>ACK</code> 对方没有收到，如果这个时间段内都没有收到任何回复消息，则说明服务端已经关闭，自己也能关闭。</p><h2 id="tcp-传输可靠性保障-传输层" tabindex="-1"><a class="header-anchor" href="#tcp-传输可靠性保障-传输层" aria-hidden="true">#</a> TCP 传输可靠性保障（传输层）</h2><h3 id="tcp-如何保证传输的可靠性" tabindex="-1"><a class="header-anchor" href="#tcp-如何保证传输的可靠性" aria-hidden="true">#</a> TCP 如何保证传输的可靠性？</h3><ul><li><strong>基于数据块传输</strong>：应用数据被分割成 TCP 认为最适合发送的数据块，再传输给网络层，数据块被称为报文段或段。</li><li><strong>对失序数据包重新排序以及去重</strong>：TCP 为了保证不发生丢包，就给每个包一个序列号，有了序列号能够将接收到的数据根据序列号排序，并且去掉重复序列号的数据就可以实现数据包去重。</li><li><strong>校验和</strong> : TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。</li><li><strong>超时重传</strong> : 当发送方发送数据之后，它启动一个定时器，等待目的端确认收到这个报文段。接收端实体对已成功收到的包发回一个相应的确认信息（ACK）。如果发送端实体在合理的往返时延（RTT）内未收到确认消息，那么对应的数据包就被重传。</li><li><strong>流量控制</strong> : TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议（TCP 利用滑动窗口实现流量控制）。</li><li><strong>拥塞控制</strong> : 当网络拥塞时，减少数据的发送。</li></ul><h3 id="tcp-如何实现流量控制" tabindex="-1"><a class="header-anchor" href="#tcp-如何实现流量控制" aria-hidden="true">#</a> TCP 如何实现流量控制？</h3><p><strong>TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。</strong></p><h3 id="tcp-的拥塞控制是怎么实现的" tabindex="-1"><a class="header-anchor" href="#tcp-的拥塞控制是怎么实现的" aria-hidden="true">#</a> TCP 的拥塞控制是怎么实现的？</h3><p>通过拥塞控制算法实现。其中发送窗口 = Min(拥塞窗口，接收窗口)。</p><ul><li><strong>慢开始</strong>： 慢开始算法的思路是当主机开始发送数据时，如果立即把大量数据字节注入到网络，那么可能会引起网络阻塞，因为现在还不知道网络的符合情况。经验表明，较好的方法是先探测一下，即由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口数值。cwnd（拥塞窗口）初始值为 1，每收到一个确认，cwnd+1，每一个轮次后 cwnd 加倍。</li><li><strong>拥塞避免</strong>： 拥塞避免算法的思路是让拥塞窗口 cwnd 缓慢增大，即每经过一个往返时间 RTT 就把发送方的 cwnd 加 1.</li><li><strong>快重传与快恢复</strong>： 快重传：如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。快恢复：在网络发生拥塞之后，不会将拥塞窗口设置为 1，而是直接设置为 <code>ssthresh</code> 阈值的一半。</li></ul><h2 id="arq-协议" tabindex="-1"><a class="header-anchor" href="#arq-协议" aria-hidden="true">#</a> ARQ 协议</h2><p>ARQ称为<strong>自动重传请求</strong>（Automatic Repeat-reQuest，ARQ）；</p><h3 id="停止等待协议" tabindex="-1"><a class="header-anchor" href="#停止等待协议" aria-hidden="true">#</a> 停止等待协议</h3><p><strong>发送窗口 = 接收窗口 = 1</strong></p><p>停止等待协议中超时重传是指只要超过一段时间仍然没有收到确认，就重传前面发送过的分组（认为刚才发送过的分组丢失了）。因此每发送完一个分组需要设置一个超时计时器，其重传时间应比数据在分组传输的平均往返时间更长一些。这种自动重传方式常称为 <strong>自动重传请求 ARQ</strong> 。另外在停止等待协议中若收到重复分组，就丢弃该分组，但同时还要发送确认。</p><h3 id="后退n帧协议-gbn" tabindex="-1"><a class="header-anchor" href="#后退n帧协议-gbn" aria-hidden="true">#</a> 后退N帧协议（GBN）</h3><p><strong>发送窗口 &gt; 1 ,接收窗口 = 1</strong></p><p>连续 ARQ 协议可提高信道利用率。发送方维持一个发送窗口，凡位于发送窗口内的分组可以连续发送出去，而不需要等待对方确认。接收方一般采用累计确认，对按序到达的最后一个分组发送确认，表明到这个分组为止的所有分组都已经正确收到了。</p><p>发送方能将发送窗口内的所有序号发送，接收窗口每收到一个序号就会发送一个确认帧，并将接收窗口向前移动。如果发送方超时没有收到确认帧，则将此确认帧还有之后已经发送的序号全部重发。</p><p>如果收到了序号n的确认，则认为前面需要的数据在接收端都受到了，这种确认叫做<strong>累计确认机制</strong>。</p><h3 id="选择重传协议-sr" tabindex="-1"><a class="header-anchor" href="#选择重传协议-sr" aria-hidden="true">#</a> 选择重传协议（SR）</h3><p><strong>发送窗口 &gt; 1 ,接收窗口 &gt; 1</strong></p><p>选择重传协议不再具有累计确认机制，凡是接收窗口中的序号都接收并返回确认帧，如果发生超时，就重传超时的帧，而不是 GBN 中的当前帧和后续的所有帧。</p><h2 id="ip-网络层" tabindex="-1"><a class="header-anchor" href="#ip-网络层" aria-hidden="true">#</a> IP（网络层）</h2><h3 id="ip-协议的作用是什么" tabindex="-1"><a class="header-anchor" href="#ip-协议的作用是什么" aria-hidden="true">#</a> IP 协议的作用是什么？</h3><p>IP（网际协议）是TCP/IP协议中最重要的协议之一，属于网络层的协议，主作用是定义数据包的格式，对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。</p>',101),c=e('<h3 id="什么是-ip-地址-ip-寻址如何工作" tabindex="-1"><a class="header-anchor" href="#什么是-ip-地址-ip-寻址如何工作" aria-hidden="true">#</a> 什么是 IP 地址？IP 寻址如何工作？</h3><p>每个连入互联网的设备或域都被分配一个 IP 地址，作为唯一标识符。</p><p>当网络设备发送 IP 数据包时，数据包包含了<strong>源 IP 地址</strong>和<strong>目的 IP 地址</strong>。源 IP 地址用于标识数据包的发送来源，目的IP地址用来表示数据包的接收方设备地址。</p><p>网络设备根据目的 IP 地址来判断数据包的目的地，并将数据包转发到正确的目的地网络或子网络，从而实现了设备间的通信。</p><h3 id="ipv4-和-ipv6-有什么区别" tabindex="-1"><a class="header-anchor" href="#ipv4-和-ipv6-有什么区别" aria-hidden="true">#</a> IPv4 和 IPv6 有什么区别？</h3><p>为了解决 IP 地址耗尽的问题，IPV 6采用 128 位的地址，除了更大的地址空间之外，IPv6 的优势还包括：</p><ul><li><p><strong>无状态地址自动配置（Stateless Address Autoconfiguration，简称 SLAAC）</strong>：主机可以直接通过根据接口标识和网络前缀生成全局唯一的 IPv6 地址，而无需依赖 DHCP（Dynamic Host Configuration Protocol）服务器，简化了网络配置和管理。</p></li><li><p><strong>NAT（Network Address Translation，网络地址转换） 成为可选项</strong>：IPv6 地址资源充足，可以给全球每个设备一个独立的地址。</p></li><li><p><strong>对标头结构进行了改进</strong>：IPv6 标头结构相较于 IPv4 更加简化和高效，减少了处理开销，提高了网络性能。</p></li><li><p><strong>可选的扩展头</strong>：允许在 IPv6 标头中添加不同的扩展头（Extension Headers），用于实现不同类型的功能和选项。</p></li><li><p><strong>ICMPv6（Internet Control Message Protocol for IPv6）</strong>：IPv6 中的 ICMPv6 相较于 IPv4 中的 ICMP 有了一些改进，如邻居发现、路径 MTU 发现等功能的改进，从而提升了网络的可靠性和性能。</p></li></ul><h3 id="nat-作用是什么" tabindex="-1"><a class="header-anchor" href="#nat-作用是什么" aria-hidden="true">#</a> NAT 作用是什么？</h3><p><strong>NAT（Network Address Translation，网络地址转换）</strong> 主要用于在不同网络之间转换 IP 地址。它允许将私有 IP 地址（如在局域网中使用的 IP 地址）映射为公有 IP 地址（在互联网中使用的 IP 地址）或者反向映射，从而实现局域网内的多个设备通过单一公有 IP 地址访问互联网。</p><p>NAT 不光可以缓解 IPv4 地址资源短缺的问题，还可以隐藏内部网络的实际拓扑结构，使得外部网络无法直接访问内部网络中的设备，从而提高了内部网络的安全性。</p><h2 id="arp" tabindex="-1"><a class="header-anchor" href="#arp" aria-hidden="true">#</a> ARP</h2><h3 id="什么是-mac-地址" tabindex="-1"><a class="header-anchor" href="#什么是-mac-地址" aria-hidden="true">#</a> 什么是 MAC 地址？</h3><p>MAC 地址的全称是<strong>媒体访问控制地址（Media Access Control Address）</strong>。如果说，互联网中每一个资源都由 IP 地址唯一标识（IP 协议内容），那么一切网络设备都由 MAC 地址唯一标识。</p><p>可以理解为，MAC 地址是一个网络设备真正的身份证号，IP 地址只是一种不重复的定位方式（比如说住在某省某市某街道的张三，这种逻辑定位是 IP 地址，他的身份证号才是他的 MAC 地址），也可以理解为 MAC 地址是身份证号，IP 地址是邮政地址。MAC 地址也有一些别称，如 LAN 地址、物理地址、以太网地址等。</p><p>MAC 地址具有可携带性、永久性，身份证号备更换了网络，它的 IP 地址也就可能发生改变，也就是它在永久地标识一个人的身份，不论他到哪里都不会改变。而 IP 地址不具有这些性质，当一台设互联网中的定位发生了变化。</p><p>MAC 地址有一个特殊地址：<code>FF-FF-FF-FF-FF-FF</code>（全 1 地址），该地址表示广播地址。</p><h3 id="arp-协议解决了什么问题" tabindex="-1"><a class="header-anchor" href="#arp-协议解决了什么问题" aria-hidden="true">#</a> ARP 协议解决了什么问题？</h3><p>ARP 协议，全称<strong>地址解析协议（Address Resolution Protocol）</strong>，它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，<strong>ARP 协议用来 IP 地址转 MAC 地址</strong>。</p><p>在一个局域网内，每个网络设备都自己维护了一个 ARP 表，ARP 表记录了某些其他网络设备的 <code>IP 地址-MAC</code> 地址映射关系，该映射关系以 <code>&lt;IP, MAC, TTL&gt;</code> 三元组的形式存储。<code>TTL</code> 为该映射关系的生存周期，典型值为 20 分钟，超过该时间，该条目将被丢弃。</p>',19);function P(h,T){return r(),t("div",null,[l,n(" more "),c])}const C=o(s,[["render",P],["__file","1net.html.vue"]]);export{C as default};
