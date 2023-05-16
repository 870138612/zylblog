<template><div><h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2>
<h3 id="进程" tabindex="-1"><a class="header-anchor" href="#进程" aria-hidden="true">#</a> 进程</h3>
<p>进程是程序的一次执行过程，启动main函数就相当于启动了一个JVM进程，而main函数所在的线程称为主线程。</p>
<h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3>
<p>引入线程之后，调度的最小单位从进程变成了线程，一个进程能在运行的时候产生多个线程，每一个线程共享进程的<strong>堆</strong>和<strong>方法区</strong>（线程共有），每一个线程有自己的程序计数器，虚拟机栈，本地方法栈，所以线程之间的切换开销远远小于进程，线程又称为轻量级进程。</p>
<p><a href="https://www.bilibili.com/video/BV1Q64y1h7PT/?spm_id_from=333.337.search-card.all.click&amp;vd_source=90bb400ad92a9344bb4c2ca0d7921be7" target="_blank" rel="noopener noreferrer"><strong>五分钟记住JVM内存分布</strong><ExternalLinkIcon/></a></p>
</div></template>


