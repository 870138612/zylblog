import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c,d as t,a as e,f as n,e as a,b as h}from"./app-978be180.js";const s="/markdown/image-20230517134427874.png",l="/markdown/image-20230517140544893.png",p={},u=a('<h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2><h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3><p>进程是程序的一次执行过程，启动main函数就相当于启动了一个JVM进程，而main函数所在的线程称为主线程。</p><h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3><p>引入线程之后，调度的最小单位从进程变成了线程，一个进程能在运行的时候产生多个线程，每一个线程共享进程的<strong>堆</strong>和<strong>方法区</strong>（线程共有），每一个线程有自己的程序计数器，虚拟机栈，本地方法栈，所以线程之间的切换开销远远小于进程，线程又称为轻量级进程。</p>',5),_=e("h2",{id:"从-jvm-角度说进程和线程之间的关系",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从-jvm-角度说进程和线程之间的关系","aria-hidden":"true"},"#"),h(" 从 JVM 角度说进程和线程之间的关系")],-1),m=e("p",null,"一个进程能有很多个线程，多个线程共享本进程的堆和方法区（1.8之后的元空间），每一个线程拥有自己的虚拟机栈，本地方法栈，程序计数器。",-1),f=e("p",null,[e("img",{src:s,alt:"image-20230517134427874"})],-1),b={href:"https://www.bilibili.com/video/BV1Q64y1h7PT/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7",target:"_blank",rel:"noopener noreferrer"},g=e("strong",null,"五分钟记住JVM内存结构",-1),x=a('<h3 id="程序计数器为什么是线程私有" tabindex="-1"><a class="header-anchor" href="#程序计数器为什么是线程私有" aria-hidden="true">#</a> 程序计数器为什么是线程私有？</h3><p>程序计数器存放的是下一条将要执行指令的地址。</p><p>在多线程下，程序计数器用来记录当前线程执行的位置，当线程切换回来的时候能够知道上次运行到哪里了。</p><p>所以程序计数器的作用就是线程切换之后能恢复到正确的位置。</p><h3 id="虚拟机栈和本地方法栈为什么是私有的" tabindex="-1"><a class="header-anchor" href="#虚拟机栈和本地方法栈为什么是私有的" aria-hidden="true">#</a> 虚拟机栈和本地方法栈为什么是私有的?</h3><p>虚拟机栈用于存放栈帧，而每一个栈帧就对应着一个Java方法，用于存放局部变量表，操作数栈，常量池等信息。从方法调用到执行完成的过程，就对应着栈帧的入栈和出栈。</p><p>本地方法栈用于存放<code>Native</code>方法，这种方法一般是C或者C++实现的。本地方法栈和虚拟机栈发挥的作用类似。</p><h3 id="堆和方法区" tabindex="-1"><a class="header-anchor" href="#堆和方法区" aria-hidden="true">#</a> 堆和方法区</h3><p>堆和方法区都是线程共享的资源，堆是进程内存中最大的一块区域，用于存放新创建的对象，方法区用来存放已经被加载的类信息、常量、静态变量、即时编译器编译之后的代码。</p><h2 id="线程的生命周期和状态" tabindex="-1"><a class="header-anchor" href="#线程的生命周期和状态" aria-hidden="true">#</a> 线程的生命周期和状态</h2><ul><li>NEW：初始状态，线程已经创建但是没有调用<code>start()</code>;</li><li>RUNNABLE：运行状态，线程调用了<code>start()</code>等待运行；</li><li>BLOCKED：阻塞状态，需要等待锁释放；</li><li>WAITING：等待状态，需要等待其他线程作出动作（通知或中断）；</li><li>TIME_WAITING：超时等待状态，可以在等待一段时间之后自行返回，而不是像WAITING一样一直等待。</li><li>TERMINATED：终止状态，表示线程运行完毕。</li></ul><p><img src="'+l+'" alt="image-20230517140544893"></p><h2 id="什么是死锁-如何避免" tabindex="-1"><a class="header-anchor" href="#什么是死锁-如何避免" aria-hidden="true">#</a> 什么是死锁？如何避免</h2><h3 id="死锁" tabindex="-1"><a class="header-anchor" href="#死锁" aria-hidden="true">#</a> 死锁</h3><p>两个或者以上的线程因为竞争资源导致阻塞，若无外力作用都无法向前推进。</p><p>死锁的四个必要条件：</p><ul><li>互斥</li><li>不剥夺</li><li>请求并保持</li><li>环路等待</li></ul><h3 id="如何预防死锁" tabindex="-1"><a class="header-anchor" href="#如何预防死锁" aria-hidden="true">#</a> 如何预防死锁？</h3><p>预防死锁就是破坏四个必要条件中的任意一个。</p><ol><li><strong>破坏不剥夺条件</strong>：占用部分资源的线程在进一步申请资源失败时，主动放出已经保持的资源。</li><li><strong>破坏请求并保持</strong>：一次性分配所需要的所有资源。</li><li><strong>破坏环路等待</strong>：资源有序分配。</li></ol><h3 id="如何避免死锁" tabindex="-1"><a class="header-anchor" href="#如何避免死锁" aria-hidden="true">#</a> 如何避免死锁？</h3><p>银行家算法，防止当前系统进入不安全状态。</p><h2 id="sleep-方法和-wait-方法对比" tabindex="-1"><a class="header-anchor" href="#sleep-方法和-wait-方法对比" aria-hidden="true">#</a> sleep() 方法和 wait() 方法对比</h2><p>两个方法都能暂停线程的执行。</p><p>区别：</p><ul><li><code>sleep()</code>方法没有释放锁，而<code>wait()</code>方法释放了锁；</li><li><code>wait()</code>通常用于线程之间的通信，<code>sleep()</code>用于线程的暂停执行；</li><li><code>wait()</code>方法被调用之后，线程不会自动苏醒，需要别的线程调用同一个对象的<code>notify()</code>或者<code>notifyAll()</code>方法。<code>sleep()</code>方法执行完成后，线程会自动苏醒，或者也可以使用 <code>wait(long timeout)</code> 超时后线程会自动苏醒。</li><li><code>sleep</code>方法是<code>Thread</code>类的静态本地方法，<code>wait()</code>则是<code>Object</code>类的本地方法</li></ul><h3 id="为什么wait-方法不定义在thread中" tabindex="-1"><a class="header-anchor" href="#为什么wait-方法不定义在thread中" aria-hidden="true">#</a> 为什么wait()方法不定义在Thread中？</h3><p><code>wait()</code>是让获得对象锁的线程等待，会释放对象锁，每一个<code>Object</code>都有对象锁，要释放当前线程占有的对象锁并让其进入WAITING状态，当然是使用对象的操作而不是线程的操作。</p><p>因为<code>sleep()</code>方法是让当前线程暂停执行，不涉及对象，所以定义在<code>Thread</code>类中。</p><h3 id="直接调用run-和start-的区别" tabindex="-1"><a class="header-anchor" href="#直接调用run-和start-的区别" aria-hidden="true">#</a> 直接调用run()和start()的区别</h3><p>new一个<code>Thread</code>，并调用<code>start()</code>方法会创建一个新的线程并让其进入就绪状态。<code>start()</code>的方法会执行线程的准备工作，然后自动调用<code>run()</code>方法，这样才能实现多线程。</p><p>如果直接调用<code>run()</code>方法，则是通过调用线程来运行的，会把<code>run()</code>方法当成普通方法执行。</p><p><strong>调用 <code>start()</code> 方法方可启动线程并使线程进入就绪状态，直接执行 <code>run()</code> 方法的话不会以多线程的方式执行。</strong></p>',33);function w(N,T){const d=o("ExternalLinkIcon");return i(),c("div",null,[u,t(" more "),_,m,f,e("p",null,[e("a",b,[g,n(d)])]),x])}const E=r(p,[["render",w],["__file","1juc.html.vue"]]);export{E as default};
