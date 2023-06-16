const i=JSON.parse('{"key":"v-0f6e5a7b","path":"/computer/3io.html","title":"I/O","lang":"zh-CN","frontmatter":{"title":"I/O","icon":"io","category":["计算机基础"],"tag":["IO","八股"]},"headers":[{"level":3,"title":"何为IO？","slug":"何为io","link":"#何为io","children":[]},{"level":3,"title":"有哪些常见的 IO 模型?","slug":"有哪些常见的-io-模型","link":"#有哪些常见的-io-模型","children":[]},{"level":2,"title":"Java 中 3 种常见 IO 模型","slug":"java-中-3-种常见-io-模型","link":"#java-中-3-种常见-io-模型","children":[{"level":3,"title":"BIO (Blocking I/O)","slug":"bio-blocking-i-o","link":"#bio-blocking-i-o","children":[]},{"level":3,"title":"NIO (Non-blocking/New I/O)","slug":"nio-non-blocking-new-i-o","link":"#nio-non-blocking-new-i-o","children":[]},{"level":3,"title":"AIO (Asynchronous I/O)","slug":"aio-asynchronous-i-o","link":"#aio-asynchronous-i-o","children":[]},{"level":3,"title":"比较","slug":"比较","link":"#比较","children":[]}]}],"git":{"createdTime":1685080299000,"updatedTime":1686477040000,"contributors":[{"name":"ZYL1210","email":"870138612@qq.com","commits":3}]},"readingTime":{"minutes":2.84,"words":851},"filePathRelative":"computer/3io.md","localizedDate":"2023年5月26日","excerpt":"<h3> 何为IO？</h3>\\n<p>I/O（<strong>I</strong>nput/<strong>O</strong>utpu） 即<strong>输入／输出</strong> 。</p>\\n<p>从应用程序的视角来看的话，我们的应用程序对操作系统的内核发起 IO 调用（系统调用），操作系统负责的内核执行具体的 IO 操作。也就是说，我们的应用程序实际上只是发起了 IO 操作的调用而已，具体 IO 的执行是由操作系统的内核来完成的。</p>\\n<p>当应用程序发起 I/O 调用后，会经历两个步骤：</p>\\n<ol>\\n<li>内核等待 I/O 设备准备好数据</li>\\n<li>内核将数据从内核空间拷贝到用户空间。</li>\\n</ol>\\n"}');export{i as data};
