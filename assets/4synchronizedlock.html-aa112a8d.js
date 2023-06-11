import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as r,d as t,a as n,e as o}from"./app-978be180.js";const s={},d=n("p",null,"锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。",-1),h=o('<h2 id="自旋锁与自适应自旋" tabindex="-1"><a class="header-anchor" href="#自旋锁与自适应自旋" aria-hidden="true">#</a> 自旋锁与自适应自旋</h2><p><strong>当获取锁失败的时候线程不会立马阻塞，而是采用忙循环（自旋）去再次尝试获取锁</strong>。重试的次数默认是10次。</p><p>JDK1.6之后引入自适应锁，自旋锁重试次数是固定的，不够灵活，如果在同一个锁对象上，最近通过自旋获得过这个锁，则认为此次的自旋也有较大概率获得锁，会自旋更多次。另外如果对于某个锁自旋很少成功获得，则以后在获取锁失败之后很可能会省略自旋的过程。</p><h2 id="锁消除" tabindex="-1"><a class="header-anchor" href="#锁消除" aria-hidden="true">#</a> 锁消除</h2><p>虚拟机即时编译的时候，对一些代码上要求同步，但是<strong>被检测到不可能存在共享数据竞争的锁进行消除</strong>。锁消除的主要判断依据来源于逃逸分析的数据支持。</p><p>在一段代码中，堆上的所有数据都不会逃逸出去从而被其他线程所访问到，就可以把它们当做栈上数据，认为是线程私有的，同步锁就没有必要加上了。</p><h2 id="锁粗化" tabindex="-1"><a class="header-anchor" href="#锁粗化" aria-hidden="true">#</a> 锁粗化</h2><p>在编写代码的时候，推荐将加锁的范围尽可能的变小以获得更好的性能。</p><p>大部分情况下，上面的原则都是正确的，例如在一个循环内对同一个对象进行加锁解锁，频繁的同步操作会导致不必要的性能损耗，则虚拟机会把<strong>加锁的范围扩展（粗化）以减少加锁和解锁的次数</strong>。</p><h2 id="轻量级锁" tabindex="-1"><a class="header-anchor" href="#轻量级锁" aria-hidden="true">#</a> 轻量级锁</h2><p>轻量级锁是JDK 1.6之中加入的新型锁机制，它名字中的“轻量级”是相对于使用操作系统互斥量来实现的传统锁而言的，因此传统的锁机制就称为“重量级”锁。</p><p>它的本意是在没有多线程竞争的前提下，减少传统的重量级锁使用操作系统互斥量产生的性能消耗。</p><p>整个加解锁过程其实就是一个新旧数据比对的过程（通过CAS），根据数据的变化来确定同步代码块是否多个线程抢占共享变量，如果在某段时间内没有多个线程访问这块同步代码那就可以不需要去指向操作系统互斥量（这个对象的内存相比较2bit的锁标志位是要大很多的，同时还能减少传统的重量级锁使用操作系统互斥量产生的性能消耗），如果是出现了多个线程进行抢占共享变量，就会使用操作系统互斥量达到互斥同步。<strong>也可以理解成如果同步代码块没有多个出现并发问题的话，就应该尽可能的减少实现同步互斥所带来的一系列损耗</strong>。</p><h2 id="偏向锁" tabindex="-1"><a class="header-anchor" href="#偏向锁" aria-hidden="true">#</a> 偏向锁</h2><p>偏向锁也是JDK 1.6中引入的一项锁优化，它的目的是<strong>消除数据在无竞争情况下的同步原语</strong>，进一步提高程序的运行性能。如果说轻量级锁是在无竞争的情况下使用CAS操作去消除同步使用的互斥量，那偏向锁就是在无竞争的情况下把整个同步都消除掉，连CAS操作都不做了。</p><p>偏向锁的“偏”，就是偏心的“偏”、偏袒的“偏”，它的意思是这个锁会偏向于第一个获得它的线程，如果在接下来的执行过程中，该锁没有被其他的线程获取，则持有偏向锁的线程将永远不需要再进行同步。</p>',16);function c(i,p){return a(),r("div",null,[d,t(" more "),h])}const f=e(s,[["render",c],["__file","4synchronizedlock.html.vue"]]);export{f as default};
