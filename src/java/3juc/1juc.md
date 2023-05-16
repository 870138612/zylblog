---
title: 并发编程一
icon: page
category:
  - Java
tags:
  - 并发编程
  - 八股
---

## 进程和线程

### 进程

进程是程序的一次执行过程，启动main函数就相当于启动了一个JVM进程，而main函数所在的线程称为主线程。

### 线程

引入线程之后，调度的最小单位从进程变成了线程，一个进程能在运行的时候产生多个线程，每一个线程共享进程的**堆**和**方法区**（线程共有），每一个线程有自己的程序计数器，虚拟机栈，本地方法栈，所以线程之间的切换开销远远小于进程，线程又称为轻量级进程。

[**五分钟记住JVM内存分布**](https://www.bilibili.com/video/BV1Q64y1h7PT/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

 

