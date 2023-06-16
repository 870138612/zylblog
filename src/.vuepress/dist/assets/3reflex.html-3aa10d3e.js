import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,d as e,a as t,e as p}from"./app-7193d35c.js";const o={},c=t("p",null,"反射可以获取任意一个类的所有属性和方法，还能调用这些方法和属性。",-1),l=p(`<h3 id="反射的应用场景" tabindex="-1"><a class="header-anchor" href="#反射的应用场景" aria-hidden="true">#</a> 反射的应用场景</h3><p>Spring/SpringBoot/Mybatis等框架中都大量使用了反射机制。</p><p>框架中也使用了动态代理，动态代理就是依赖反射。</p><p>JDK动态代理：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 代理类中的真实对象
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;before method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;after method &quot;</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中的<code>Method</code>就是反射类。</p><p>SpringBoot中使用<code>@Component</code>就能声明一个Bean，原理就是基于反射获取到对应类上的注解，再做处理。</p><h3 id="反射的优缺点" tabindex="-1"><a class="header-anchor" href="#反射的优缺点" aria-hidden="true">#</a> 反射的优缺点</h3><p>优点：让代码更加灵活，为各种框架提供开箱即用的便利。</p><p>缺点：拥有分析操作类的能力，增加了安全隐患。</p><h3 id="反射获取class对象" tabindex="-1"><a class="header-anchor" href="#反射获取class对象" aria-hidden="true">#</a> 反射获取Class对象</h3><ol><li>知道具体类的情况下：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Target</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>通过<code>Class.forName()</code>传入类的全路径名：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;com.zyl.Target&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>通过实例对象的<code>getClass()</code>获取：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Target</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Target</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> clazz <span class="token operator">=</span> t<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>通过类加载器<code>xxxClassLoader.loadClasss()</code>传入类路径获取：</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">&quot;com.zyl.Target&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过类加载器获取Class对象不会进行初始化，意味着静态代码块和静态对象不会得到执行。</p><h3 id="获取方法并执行" tabindex="-1"><a class="header-anchor" href="#获取方法并执行" aria-hidden="true">#</a> 获取方法并执行</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Method</span> privateMethod <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">&quot;privateMethod&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//为了调用private方法取消安全检查</span>
privateMethod<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
privateMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>targetObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function i(u,d){return a(),s("div",null,[c,e(" more "),l])}const v=n(o,[["render",i],["__file","3reflex.html.vue"]]);export{v as default};
