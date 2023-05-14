import{_ as n,X as s,Y as a,a3 as e}from"./framework-a3ecc17a.js";const p={},t=e(`<h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象" aria-hidden="true">#</a> 面向对象</h2><h3 id="面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程的区别" aria-hidden="true">#</a> 面向对象和面向过程的区别</h3><ul><li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li><li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li></ul><p>一个注重过程，一个注重对象的内部属性。</p><h3 id="对象的相等和引用的相等" tabindex="-1"><a class="header-anchor" href="#对象的相等和引用的相等" aria-hidden="true">#</a> 对象的相等和引用的相等</h3><p>对象的相等是是比较内存中存放的对象是否相等。</p><p>引用相等是指向的内存地址是否相等。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false	</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1 <span class="token operator">==</span> str3<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true	</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>System.out.println(str1 == str2);//false</code>详见后半部分<a href="##String">String</a>。</p><h3 id="如果没有声明构造方法-程序能正确执行吗" tabindex="-1"><a class="header-anchor" href="#如果没有声明构造方法-程序能正确执行吗" aria-hidden="true">#</a> 如果没有声明构造方法，程序能正确执行吗？</h3><p>如果类没有声明构造方法则会默认生成一个不带参数的构造方法。</p><p>如果自己添加了构造方法无论是否有参数都不会再自动生成无参构造方法。</p><p>构造方法不能被重写<code>@Override</code>，但是能重载（有参构造和无参构造）。</p><h3 id="面向对象的三个特征" tabindex="-1"><a class="header-anchor" href="#面向对象的三个特征" aria-hidden="true">#</a> 面向对象的三个特征</h3><p><strong>封装</strong></p><p>封装是将一个对象的状态信息隐藏在内部，不允许外部直接访问这些属性，但是会提供方法来操作属性。</p><p><strong>继承</strong></p><p>不同类型的对象可能会具有相似特点，例如游戏中的每一个英雄都有血量，移速等基础属性，但是每一个英雄的技能各有不同，则可以通过继承复用减少开发难度。</p><p>:::tags</p><p>@tab:active HeroTemplate</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> hp<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> speed<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Hero1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero1</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">skill1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;技能1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Hero2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero2</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">skill2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;技能2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><ol><li>子类拥有父类的所有属性和方法（包括私有属性和私有方法）。</li><li>子类能对父类进行扩展。</li></ol><p><strong>多态</strong></p><p>表示一个对象具有多种状态，上述代码中创建对象：</p><p>:::tags</p><p>@tab:active HeroTemplate</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Hero1</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero1</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;技能1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@tab Hero2</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero2</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;技能2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Hero</span> hero <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Hero1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
hero<span class="token punctuation">.</span><span class="token function">skill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//打印技能1，编译是否能通过看左边，执行结果看右边。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>特点</p><ul><li>对象类型和引用类型之间具有继承/实现关系；</li><li>引用类型变量发出的方法调用到底是哪个类中的方法，在程序运行的时候才能确定；</li><li>多态不能调用只在子类中存在，但是父类中不存在的方法，也就是<code>hero</code>能调用的方法是看父类<code>Hero</code>的，执行的结果看子类<code>Hero1</code></li><li>如果子类重写了父类方法，则执行的是子类中的方法，如果没有重写则执行的是父类中的方法</li></ul><h3 id="接口和抽象类的共同点" tabindex="-1"><a class="header-anchor" href="#接口和抽象类的共同点" aria-hidden="true">#</a> 接口和抽象类的共同点</h3><p><strong>共同点</strong></p><ul><li>都不能被实例化；</li><li>都可以包含抽象方法；</li><li>都可以有默认的实现方法（Java8可以用<code>default</code>关键字在接口中定义默认方法）。</li></ul><p><strong>不同点</strong></p><ul><li>接口强调行为的约束，实现某个接口就相当于有某个责任，必须实现对应的方法，继承则是强调复用，子类继承父类并不一定要重写父类方法；</li><li>一个类只能<code>extends</code>一个类，但是能<code>implements</code>多个接口。</li><li>接口中的成员变量只能是<code>public static final</code>类型，不能被修改而且必须有初始值，抽象类中的成员变量默认default，可以在子类中被重新定义，重新赋值。</li></ul><h3 id="浅拷贝-深拷贝-引用拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝-深拷贝-引用拷贝" aria-hidden="true">#</a> 浅拷贝，深拷贝，引用拷贝</h3><p><strong>浅拷贝</strong></p><p>在堆上创建一个新对象N，N对象中的内部对象是引用类型的话，会直接复制原本类O的内部对象引用地址；</p><p>也就是新对象N内部对象和原来的对象O的内部对象是同一个。</p><p><strong>深拷贝</strong></p><p>不仅仅拷贝对象，将原本对象内部的所有属性都单独复制一份；</p><p>新对象的内部引用对象不再是原来对象的内部引用对象。</p><p><strong>引用拷贝</strong></p><p>两个不同对象的引用指向同一个对象</p><h2 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h2>`,55),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","2java.html.vue"]]);export{r as default};