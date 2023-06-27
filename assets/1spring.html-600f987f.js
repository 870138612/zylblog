const e=JSON.parse('{"key":"v-49e7ffb6","path":"/framework/1spring/1spring.html","title":"SpringMVC、SpringBoot","lang":"zh-CN","frontmatter":{"title":"SpringMVC、SpringBoot","icon":"page","category":["框架"],"tag":["Spring","SpringWeb","SpringBoot","八股"]},"headers":[{"level":2,"title":"SpringMVC","slug":"springmvc","link":"#springmvc","children":[{"level":3,"title":"SpringMVC处理请求的底层原理","slug":"springmvc处理请求的底层原理","link":"#springmvc处理请求的底层原理","children":[]},{"level":3,"title":"SpringMVC的核心组件有哪些？","slug":"springmvc的核心组件有哪些","link":"#springmvc的核心组件有哪些","children":[]},{"level":3,"title":"SpringMVC零配置","slug":"springmvc零配置","link":"#springmvc零配置","children":[]},{"level":3,"title":"统一异常处理","slug":"统一异常处理","link":"#统一异常处理","children":[]}]},{"level":2,"title":"SpringBoot","slug":"springboot","link":"#springboot","children":[{"level":3,"title":"SpringBootApplication注解的作用？","slug":"springbootapplication注解的作用","link":"#springbootapplication注解的作用","children":[]},{"level":3,"title":"SpringBoot中的spring.factories文件有什么作用？","slug":"springboot中的spring-factories文件有什么作用","link":"#springboot中的spring-factories文件有什么作用","children":[]},{"level":3,"title":"SpringBoot的启动流程","slug":"springboot的启动流程","link":"#springboot的启动流程","children":[]}]}],"git":{"createdTime":1687278705000,"updatedTime":1687862793000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":2}]},"readingTime":{"minutes":4.27,"words":1282},"filePathRelative":"framework/1spring/1spring.md","localizedDate":"2023年6月20日","excerpt":"<h2> SpringMVC</h2>\\n<h3> SpringMVC处理请求的底层原理</h3>\\n<p>请求会被<code>DispatcherServlet</code>拦截，<code>DispatcherServlet</code>结构如图。</p>\\n<p><img src=\\"/markdown/image-20230620221443613.png\\" alt=\\"image-20230620221443613\\"></p>\\n<p><strong>SpringMVC中的一次请求流程：</strong></p>\\n<ol>\\n<li>客户端（浏览器）发送请求， <code>DispatcherServlet</code>拦截请求。</li>\\n<li><code>DispatcherServlet</code> 根据请求信息调用 <code>HandlerMapping</code> 。<code>HandlerMapping</code> 根据 uri 去匹配查找能处理的 <code>Handler</code>（也就是我们平常说的 <code>Controller</code> 控制器） ，并会将请求涉及到的拦截器和 <code>Handler</code> 一起封装。</li>\\n<li><code>DispatcherServlet</code> 调用 <code>HandlerAdapter</code>适配器执行 <code>Handler</code> 。</li>\\n<li><code>Handler</code> 完成对用户请求的处理后，会返回一个 <code>ModelAndView</code> 对象给<code>DispatcherServlet</code>，<code>ModelAndView</code>包含了数据模型以及相应的视图的信息。<code>Model</code> 是返回的数据对象，<code>View</code> 是个逻辑上的 <code>View</code>。</li>\\n<li><code>ViewResolver</code> 会根据逻辑 <code>View</code> 查找实际的 <code>View</code>。</li>\\n<li><code>DispaterServlet</code> 把返回的 <code>Model</code> 传给 <code>View</code>（视图渲染）。</li>\\n<li>把 <code>View</code> 返回给请求者（浏览器）。</li>\\n</ol>"}');export{e as data};
