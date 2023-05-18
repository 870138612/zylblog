export const data = JSON.parse("{\"key\":\"v-6a5c135d\",\"path\":\"/java/3juc/2juc.html\",\"title\":\"并发编程二\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"并发编程二\",\"icon\":\"page\",\"category\":[\"Java\"],\"tag\":[\"并发编程\",\"八股\"],\"description\":\"Java内存模型 指令重排序 编译器优化重排：编译器在不改变单线程程序语义的前提下，重新安排语句执行顺序。 指令并行重排：如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。 指令重排序可以保证串行语义的一致，但是没义务保证多线程之间语义的一致，在多线程下，指令重排可能会导致问题。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/java/3juc/2juc.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"LIANG\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"并发编程二\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Java内存模型 指令重排序 编译器优化重排：编译器在不改变单线程程序语义的前提下，重新安排语句执行顺序。 指令并行重排：如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。 指令重排序可以保证串行语义的一致，但是没义务保证多线程之间语义的一致，在多线程下，指令重排可能会导致问题。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-05-17T09:59:10.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ZYL1210\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"并发编程\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"八股\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-05-17T09:59:10.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"并发编程二\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2023-05-17T09:59:10.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ZYL1210\\\",\\\"url\\\":\\\"https://localhost\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Java内存模型\",\"slug\":\"java内存模型\",\"link\":\"#java内存模型\",\"children\":[{\"level\":3,\"title\":\"指令重排序\",\"slug\":\"指令重排序\",\"link\":\"#指令重排序\",\"children\":[]},{\"level\":3,\"title\":\"什么是Java内存模型？为什么需要Java内存模型？\",\"slug\":\"什么是java内存模型-为什么需要java内存模型\",\"link\":\"#什么是java内存模型-为什么需要java内存模型\",\"children\":[]},{\"level\":3,\"title\":\"什么是主内存？什么是本地内存？\",\"slug\":\"什么是主内存-什么是本地内存\",\"link\":\"#什么是主内存-什么是本地内存\",\"children\":[]},{\"level\":3,\"title\":\"Java内存结构和Java内存模型的区别\",\"slug\":\"java内存结构和java内存模型的区别\",\"link\":\"#java内存结构和java内存模型的区别\",\"children\":[]},{\"level\":3,\"title\":\"happens-before\",\"slug\":\"happens-before\",\"link\":\"#happens-before\",\"children\":[]},{\"level\":3,\"title\":\"happens-before 常见规则\",\"slug\":\"happens-before-常见规则\",\"link\":\"#happens-before-常见规则\",\"children\":[]}]},{\"level\":2,\"title\":\"并发编程的三个特性\",\"slug\":\"并发编程的三个特性\",\"link\":\"#并发编程的三个特性\",\"children\":[]},{\"level\":2,\"title\":\"volatile关键字\",\"slug\":\"volatile关键字\",\"link\":\"#volatile关键字\",\"children\":[{\"level\":3,\"title\":\"volatile如何禁止指令重排序？\",\"slug\":\"volatile如何禁止指令重排序\",\"link\":\"#volatile如何禁止指令重排序\",\"children\":[]}]},{\"level\":2,\"title\":\"乐观锁和悲观锁\",\"slug\":\"乐观锁和悲观锁\",\"link\":\"#乐观锁和悲观锁\",\"children\":[{\"level\":3,\"title\":\"什么是乐观锁？\",\"slug\":\"什么是乐观锁\",\"link\":\"#什么是乐观锁\",\"children\":[]},{\"level\":3,\"title\":\"什么是悲观锁？\",\"slug\":\"什么是悲观锁\",\"link\":\"#什么是悲观锁\",\"children\":[]},{\"level\":3,\"title\":\"CAS 算法\",\"slug\":\"cas-算法\",\"link\":\"#cas-算法\",\"children\":[]},{\"level\":3,\"title\":\"ABA问题\",\"slug\":\"aba问题\",\"link\":\"#aba问题\",\"children\":[]},{\"level\":3,\"title\":\"CAS问题\",\"slug\":\"cas问题\",\"link\":\"#cas问题\",\"children\":[]}]},{\"level\":2,\"title\":\"synchronized\",\"slug\":\"synchronized\",\"link\":\"#synchronized\",\"children\":[{\"level\":3,\"title\":\"synchronized 是什么？有什么用？\",\"slug\":\"synchronized-是什么-有什么用\",\"link\":\"#synchronized-是什么-有什么用\",\"children\":[]},{\"level\":3,\"title\":\"sychronized修饰方法\",\"slug\":\"sychronized修饰方法\",\"link\":\"#sychronized修饰方法\",\"children\":[]},{\"level\":3,\"title\":\"synchronized底层原理\",\"slug\":\"synchronized底层原理\",\"link\":\"#synchronized底层原理\",\"children\":[]},{\"level\":3,\"title\":\"synchronized 和 volatile 有什么区别？\",\"slug\":\"synchronized-和-volatile-有什么区别\",\"link\":\"#synchronized-和-volatile-有什么区别\",\"children\":[]}]},{\"level\":2,\"title\":\"ReentrantLock\",\"slug\":\"reentrantlock\",\"link\":\"#reentrantlock\",\"children\":[{\"level\":3,\"title\":\"ReentrantLock 是什么？\",\"slug\":\"reentrantlock-是什么\",\"link\":\"#reentrantlock-是什么\",\"children\":[]},{\"level\":3,\"title\":\"公平锁和非公平锁有什么区别？\",\"slug\":\"公平锁和非公平锁有什么区别\",\"link\":\"#公平锁和非公平锁有什么区别\",\"children\":[]},{\"level\":3,\"title\":\"synchronized 和 ReentrantLock 有什么区别？\",\"slug\":\"synchronized-和-reentrantlock-有什么区别\",\"link\":\"#synchronized-和-reentrantlock-有什么区别\",\"children\":[]},{\"level\":3,\"title\":\"可中断锁和不可中断锁有什么区别？\",\"slug\":\"可中断锁和不可中断锁有什么区别\",\"link\":\"#可中断锁和不可中断锁有什么区别\",\"children\":[]}]}],\"git\":{\"createdTime\":1684306897000,\"updatedTime\":1684317550000,\"contributors\":[{\"name\":\"ZYL1210\",\"email\":\"870138612@qq.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":11.11,\"words\":3332},\"filePathRelative\":\"java/3juc/2juc.md\",\"localizedDate\":\"2023年5月17日\",\"excerpt\":\"<h2> Java内存模型</h2>\\n<h3> 指令重排序</h3>\\n<ul>\\n<li>编译器优化重排：编译器在不改变单线程程序语义的前提下，重新安排语句执行顺序。</li>\\n<li>指令并行重排：如果不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序。</li>\\n</ul>\\n<p>指令重排序可以保证串行语义的一致，但是没义务保证多线程之间语义的一致，在多线程下，指令重排可能会导致问题。</p>\\n\",\"autoDesc\":true}")
