import{_ as t,X as r,Y as e,a0 as n,a1 as o}from"./framework-13f105cd.js";const i="/markdown/3192518.jpg",a={},s=o('<h2 id="常见的网络协议" tabindex="-1"><a class="header-anchor" href="#常见的网络协议" aria-hidden="true">#</a> 常见的网络协议</h2><h3 id="应用层" tabindex="-1"><a class="header-anchor" href="#应用层" aria-hidden="true">#</a> 应用层</h3><ul><li><strong>HTTP（Hypertext Transfer Protocol，超文本传输协议）</strong>：基于 TCP 协议，是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li><li><strong>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</strong>：基于 TCP 协议，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP（邮件接收协议）</strong>：基于 TCP 协议，两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>FTP（File Transfer Protocol，文件传输协议）</strong> : 基于 TCP 协议，是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li></ul>',3),l=o('<ul><li><strong>Telnet（远程登陆协议）</strong>：基于 TCP 协议，用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH（Secure Shell Protocol，安全的网络传输协议）</strong>：基于 TCP 协议，通过加密和认证机制实现安全的访问和文件传输等业务</li><li><strong>RTP（Real-time Transport Protocol，实时传输协议）</strong>：通常基于 UDP 协议，但也支持 TCP 协议。它提供了端到端的实时传输数据的功能，但不包含资源预留存、不保证实时传输质量，这些功能由 WebRTC 实现。</li><li><strong>DNS（Domain Name System，域名管理系统）</strong>: 基于 UDP 协议，用于解决域名和 IP 地址的映射问题。</li></ul><h3 id="传输层" tabindex="-1"><a class="header-anchor" href="#传输层" aria-hidden="true">#</a> 传输层</h3><ul><li><strong>TCP（Transmission Control Protocol，传输控制协议 ）</strong>：提供 <strong>面向连接</strong> 的，<strong>可靠</strong> 的数据传输服务。</li><li><strong>UDP（User Datagram Protocol，用户数据协议）</strong>：提供 <strong>无连接</strong> 的，<strong>尽最大努力</strong> 的数据传输服务（不保证数据传输的可靠性），简单高效。</li></ul><h3 id="网络层" tabindex="-1"><a class="header-anchor" href="#网络层" aria-hidden="true">#</a> 网络层</h3><ul><li><p><strong>IP（Internet Protocol，网际协议）</strong>：TCP/IP 协议中最重要的协议之一，属于网络层的协议，主要作用是定义数据包的格式、对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。目前 IP 协议主要分为两种，一种是过去的 IPv4，另一种是较新的 IPv6，目前这两种协议都在使用，但后者已经被提议来取代前者。</p></li><li><p><strong>ARP（Address Resolution Protocol，地址解析协议）</strong>：ARP 协议解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</p></li><li><p><strong>ICMP（Internet Control Message Protocol，互联网控制报文协议）</strong>：一种用于传输网络状态和错误消息的协议，常用于网络诊断和故障排除。例如，Ping 工具就使用了 ICMP 协议来测试网络连通性。</p></li><li><p><strong>NAT（Network Address Translation，网络地址转换协议）</strong>：NAT 协议的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。</p></li><li><p><strong>OSPF（Open Shortest Path First，开放式最短路径优先）</strong> ）：一种内部网关协议（Interior Gateway Protocol，IGP），也是广泛使用的一种动态路由协议，基于链路状态算法，考虑了链路的带宽、延迟等因素来选择最佳路径。</p></li><li><p><strong>RIP(Routing Information Protocol，路由信息协议）</strong>：一种内部网关协议（Interior Gateway Protocol，IGP），也是一种动态路由协议，基于距离向量算法，使用固定的跳数作为度量标准，选择跳数最少的路径作为最佳路径。</p></li><li><p><strong>BGP（Border Gateway Protocol，边界网关协议）</strong>：一种用来在路由选择域之间交换网络层可达性信息（Network Layer Reachability Information，NLRI）的路由选择协议，具有高度的灵活性和可扩展性。</p></li></ul><h2 id="get和post的区别" tabindex="-1"><a class="header-anchor" href="#get和post的区别" aria-hidden="true">#</a> Get和POST的区别</h2><p>GET 和 POST 只是 HTTP 协议中两种请求方式，而 HTTP 协议是基于 TCP/IP 的应用层协议，无论 GET 还是 POST，用的都是同一个传输层协议，所以在传输上，没有区别。</p><p>不带参数时，这俩请求的报文只有在HTTP请求行的 method字段不一样，其他都一样。带参数时，我们通常约定GET 方法的参数应该放在 url 中，POST 方法参数应该放在 body 中。当然也可以不遵循这种约定，只要在服务端做好支持就好了。</p><ul><li>GET 用于获取信息，是无副作用的，是幂等的，且可缓存</li><li>POST 用于修改服务器上的数据，有副作用，非幂等，不可缓存</li></ul><p><strong>GET 方法参数写法是固定的吗？</strong></p><p>在约定中，我们的参数是写在 <code>?</code> 后面，用 <code>&amp;</code> 分割。我们知道，解析报文的过程是通过获取 TCP 数据，用正则等工具从数据中获取 Header 和 Body，从而提取参数。也就是说，我们可以自己约定参数的写法，只要服务端能够解释出来就行。</p><p><strong>POST 方法比 GET 方法安全？</strong></p><p>按照网上大部分文章的解释，POST 比 GET 安全，因为数据在地址栏上不可见。然而，从传输的角度来说，他们都是不安全的，因为 HTTP 在网络上是明文传输的，只要在网络节点上捉包，就能完整地获取数据报文。要想安全传输，就只有加密，也就是 HTTPS。</p><p><strong>GET 方法的长度限制是怎么回事？</strong></p><p>首先说明一点，<strong>HTTP 协议没有 Body 和 URL 的长度限制</strong>，对 URL 限制的大多是浏览器和服务器的原因。浏览器原因就不说了，服务器是因为处理长 URL 要消耗比较多的资源，为了性能和安全（防止恶意构造长 URL 来攻击）考虑，会给 URL 长度加限制。</p><p><strong>POST 方法会产生两个 TCP 数据包？</strong></p><p>有些文章中提到，post 会将 header 和 body 分开发送，先发送 header，服务端返回 100 状态码再发送 body。HTTP 协议中没有明确说明 POST 会产生两个 TCP 数据包，而且实际测试(Chrome)发现，header 和 body 不会分开发送。所以，header 和 body 分开发送是部分浏览器或框架的请求方法，不属于 post 必然行为。</p><h2 id="put和post的区别" tabindex="-1"><a class="header-anchor" href="#put和post的区别" aria-hidden="true">#</a> PUT和POST的区别</h2><p><strong>PUT请求</strong></p><p>PUT请求是HTTP协议中的一种请求方法，通常用于更新或者是替换服务器上的资源。使用PUT请求时，客户端需要将整个资源的新版本发送到服务器，如果服务器有这个资源，则用客户端提交的新版本替换原有的资源，如果资源不存在则会创建一个新的资源。</p><ul><li>可以更新整个资源。</li><li>客户端需要发送完整的资源内容。</li><li>如果服务器上不存在该资源，则会创建一个新的资源。</li><li><strong>PUT 请求具有幂等性</strong>，即执行多次 PUT 请求的结果应该相同。</li></ul><p><strong>POST请求</strong></p><p>POST 请求是 HTTP 协议中的一种请求方法，通常用于创建新的资源或提交数据到服务器进行处理。使用 POST 请求时，客户端将数据提交到服务器，服务器根据数据进行处理，并返回响应。通常情况下，POST 请求会在服务器上创建新的资源，并返回该资源的 URI。</p><ul><li>可以创建新的资源或提交数据到服务器进行处理。</li><li>客户端可以只发送部分资源内容。</li><li>如果请求成功，服务器会返回一个表示新资源的 URI。</li><li><strong>POST 请求不具有幂等性</strong>。</li></ul><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="从输入-url-到页面展示到底发生了什么" tabindex="-1"><a class="header-anchor" href="#从输入-url-到页面展示到底发生了什么" aria-hidden="true">#</a> 从输入 URL 到页面展示到底发生了什么？</h3><ol><li>DNS 解析</li><li>TCP 连接</li><li>发送 HTTP 请求</li><li>服务器处理请求并返回 HTTP 报文</li><li>浏览器解析渲染页面</li><li>连接结束</li></ol><h3 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> HTTP状态码</h3><ul><li><p><strong>1开头的表示临时响应</strong>，比如100表示客户端可以继续发送剩余请求。</p></li><li><p><strong>2开头的表示客户端的请求成功被接收、理解、接受了</strong>。200表示请求成功，会根据请求中使用的方法返回响应的实体。</p></li><li><p><strong>3开头的表示重定向</strong>。就是说用户代理需要采取进一步措施才能满足要求。首部Location字段标示重定向的URL。301表示永久性的重定向，302表示临时性的重定向，304表示客户端发送附带条件的请求时，服务端允许请求访问资源，但未满足条件(if-Match, if-Range)。当301、302、303响应状态码返回时，几乎所有的浏览器都会把POST改成GET，并删除请求报文内的主体，之后请求会自动再次发送。</p></li><li><p><strong>4开头的表示客户端错误</strong>。400 Bad Request代表客户端的请求服务器理解不了，401未授权、403服务器拒绝执行该请求，授权了也没用、404Not Found请求路径不存在。</p></li><li><p><strong>5开头的表示服务端错误</strong>。500服务端内部出现错误 ;502 Bad Gateway 504 Gateway timeout有可能是服务器断网了。</p></li></ul><h3 id="https与http的区别" tabindex="-1"><a class="header-anchor" href="#https与http的区别" aria-hidden="true">#</a> HTTPS与HTTP的区别</h3><p><strong>端口号</strong>：HTTP 默认是 80，HTTPS 默认是 443。</p><p><strong>URL 前缀</strong>：HTTP 的 URL 前缀是 <code>http://</code>，HTTPS 的 URL 前缀是 <code>https://</code>。</p><p><strong>安全性和资源消耗</strong>：HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。HTTPS 是运行在 SSL/TLS 之上的 HTTP 协议，SSL/TLS 运行在 TCP 之上。**所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。**所以说，HTTP 安全性没有 HTTPS 高，但是 HTTPS 比 HTTP 耗费更多服务器资源。</p><p><strong>SEO（搜索引擎优化）</strong>：搜索引擎通常会更青睐使用 HTTPS 协议的网站，因为 HTTPS 能够提供更高的安全性和用户隐私保护。使用 HTTPS 协议的网站在搜索结果中可能会被优先显示，从而对 SEO 产生影响。</p><h3 id="http-1-0-和-http-1-1-区别" tabindex="-1"><a class="header-anchor" href="#http-1-0-和-http-1-1-区别" aria-hidden="true">#</a> HTTP/1.0 和 HTTP/1.1 区别</h3><ul><li><p><strong>连接方式</strong> : HTTP/1.0 为短连接，HTTP/1.1 支持长连接。</p></li><li><p><strong>状态响应码</strong> : HTTP/1.1 中新加入了大量的状态码，光是错误响应状态码就新增了 24 种。比如说，<code>100 (Continue)</code>——在请求大资源前的预热请求，<code>206 (Partial Content)</code>——范围请求的标识码，<code>409 (Conflict)</code>——请求与当前资源的规定冲突，<code>410 (Gone)</code>——资源已被永久转移，而且没有任何已知的转发地址。</p></li><li><p><strong>缓存机制</strong> : 在 HTTP/1.0 中主要使用 Header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，HTTP/1.1 则引入了更多的缓存控制策略例如 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等更多可供选择的缓存头来控制缓存策略。</p></li><li><p><strong>带宽</strong>：HTTP/1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP/1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。</p></li><li><p><strong>Host 头（Host Header）处理</strong> :HTTP/1.1 引入了 Host 头字段，允许在同一 IP 地址上托管多个域名，从而支持虚拟主机的功能。而 HTTP/1.0 没有 Host 头字段，无法实现虚拟主机。</p></li></ul><h3 id="uri-和-url-的区别" tabindex="-1"><a class="header-anchor" href="#uri-和-url-的区别" aria-hidden="true">#</a> URI 和 URL 的区别</h3><ul><li><p><strong>URI(Uniform Resource Identifier) 是统一资源标志符</strong>，可以唯一标识一个资源。</p></li><li><p><strong>URL(Uniform Resource Locator) 是统一资源定位符</strong>，可以提供该资源的路径。它是一种具体的 URI，即 URL 可以用来标识一个资源，而且还指明了如何 locate 这个资源。</p></li></ul><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><h3 id="dns-的作用是什么" tabindex="-1"><a class="header-anchor" href="#dns-的作用是什么" aria-hidden="true">#</a> DNS 的作用是什么？</h3><p>DNS（Domain Name System）域名管理系统，是当用户使用浏览器访问网址之后，使用的第一个重要协议。DNS 要解决的是<strong>域名和 IP 地址的映射问题</strong>。</p><p>如果访问的网址在<code>hosts</code>文件中有对应的映射表目，则直接进行解析，否则需要使用DNS系统，DNS是应用层协议，基于UDP协议之上，端口为53。</p><h3 id="dns-服务器有哪些" tabindex="-1"><a class="header-anchor" href="#dns-服务器有哪些" aria-hidden="true">#</a> DNS 服务器有哪些？</h3><ul><li><p>根 DNS 服务器。根 DNS 服务器提供 TLD 服务器的 IP 地址。目前世界上只有 13 组根服务器，我国境内目前仍没有根服务器。</p></li><li><p>顶级域 DNS 服务器（TLD 服务器）。顶级域是指域名的后缀，如<code>com</code>、<code>org</code>、<code>net</code>和<code>edu</code>等。国家也有自己的顶级域，如<code>uk</code>、<code>fr</code>和<code>ca</code>。TLD 服务器提供了权威 DNS 服务器的 IP 地址。</p></li><li><p>权限 DNS 服务器。在因特网上具有公共可访问主机的每个组织机构必须提供公共可访问的 DNS 记录，这些记录将这些主机的名字映射为 IP 地址。</p></li><li><p>本地 DNS 服务器。每个 ISP（互联网服务提供商）都有一个自己的本地 DNS 服务器。当主机发出 DNS 请求时，该请求被发往本地 DNS 服务器，它起着代理的作用，并将该请求转发到 DNS 层次结构中。严格说来，不属于 DNS 层级结构。</p></li></ul><p>解析方式分为迭代查询和递归查询。</p><p><img src="'+i+'" alt="3192518"></p>',46);function T(d,P){return r(),e("div",null,[s,n(" more "),l])}const h=t(a,[["render",T],["__file","1net.html.vue"]]);export{h as default};
