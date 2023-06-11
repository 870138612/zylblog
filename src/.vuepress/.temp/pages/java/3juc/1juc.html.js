export const data = JSON.parse("{\"key\":\"v-53d0b748\",\"path\":\"/java/3juc/1juc.html\",\"title\":\"并发编程一\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"并发编程一\",\"icon\":\"page\",\"star\":true,\"category\":[\"Java\"],\"tag\":[\"并发编程\",\"八股\"]},\"headers\":[{\"level\":2,\"title\":\"进程和线程\",\"slug\":\"进程和线程\",\"link\":\"#进程和线程\",\"children\":[{\"level\":3,\"title\":\"进程\",\"slug\":\"进程\",\"link\":\"#进程\",\"children\":[]},{\"level\":3,\"title\":\"线程\",\"slug\":\"线程\",\"link\":\"#线程\",\"children\":[]}]},{\"level\":2,\"title\":\"从 JVM 角度说进程和线程之间的关系\",\"slug\":\"从-jvm-角度说进程和线程之间的关系\",\"link\":\"#从-jvm-角度说进程和线程之间的关系\",\"children\":[{\"level\":3,\"title\":\"程序计数器为什么是线程私有？\",\"slug\":\"程序计数器为什么是线程私有\",\"link\":\"#程序计数器为什么是线程私有\",\"children\":[]},{\"level\":3,\"title\":\"虚拟机栈和本地方法栈为什么是私有的?\",\"slug\":\"虚拟机栈和本地方法栈为什么是私有的\",\"link\":\"#虚拟机栈和本地方法栈为什么是私有的\",\"children\":[]},{\"level\":3,\"title\":\"堆和方法区\",\"slug\":\"堆和方法区\",\"link\":\"#堆和方法区\",\"children\":[]}]},{\"level\":2,\"title\":\"线程的生命周期和状态\",\"slug\":\"线程的生命周期和状态\",\"link\":\"#线程的生命周期和状态\",\"children\":[]},{\"level\":2,\"title\":\"什么是死锁？如何避免\",\"slug\":\"什么是死锁-如何避免\",\"link\":\"#什么是死锁-如何避免\",\"children\":[{\"level\":3,\"title\":\"死锁\",\"slug\":\"死锁\",\"link\":\"#死锁\",\"children\":[]},{\"level\":3,\"title\":\"如何预防死锁？\",\"slug\":\"如何预防死锁\",\"link\":\"#如何预防死锁\",\"children\":[]},{\"level\":3,\"title\":\"如何避免死锁？\",\"slug\":\"如何避免死锁\",\"link\":\"#如何避免死锁\",\"children\":[]}]},{\"level\":2,\"title\":\"sleep() 方法和 wait() 方法对比\",\"slug\":\"sleep-方法和-wait-方法对比\",\"link\":\"#sleep-方法和-wait-方法对比\",\"children\":[{\"level\":3,\"title\":\"为什么wait()方法不定义在Thread中？\",\"slug\":\"为什么wait-方法不定义在thread中\",\"link\":\"#为什么wait-方法不定义在thread中\",\"children\":[]},{\"level\":3,\"title\":\"直接调用run()和start()的区别\",\"slug\":\"直接调用run-和start-的区别\",\"link\":\"#直接调用run-和start-的区别\",\"children\":[]}]}],\"git\":{\"createdTime\":1684922992000,\"updatedTime\":1686477040000,\"contributors\":[{\"name\":\"ZYL1210\",\"email\":\"870138612@qq.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":4.37,\"words\":1312},\"filePathRelative\":\"java/3juc/1juc.md\",\"localizedDate\":\"2023年5月24日\",\"excerpt\":\"<h2> 进程和线程</h2>\\n<h3> 进程</h3>\\n<p>进程是程序的一次执行过程，启动main函数就相当于启动了一个JVM进程，而main函数所在的线程称为主线程。</p>\\n<h3> 线程</h3>\\n<p>引入线程之后，调度的最小单位从进程变成了线程，一个进程能在运行的时候产生多个线程，每一个线程共享进程的<strong>堆</strong>和<strong>方法区</strong>（线程共有），每一个线程有自己的程序计数器，虚拟机栈，本地方法栈，所以线程之间的切换开销远远小于进程，线程又称为轻量级进程。</p>\\n\"}")
