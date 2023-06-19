<template><div><p>使用代理对象来代替真实对象的访问，这样能在不改变目标对象的前提下，提供额外的功能，扩展目标对象。</p>
<p>代理模式有静态代理和动态代理两种实现方式。</p>
<!-- more -->
<h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2>
<p>静态代理中，对方法的增强是手动完成的，非常不灵活，从JVM层面来说，静态代理在编译的时候就将接口、实现类、代理类变成一个个class文件。编译从<code v-pre>.java</code>变成<code v-pre>.class</code>。</p>
<Tabs id="13" :data='[{"id":"目标对象"},{"id":"代理对象"},{"id":"测试"}]' :active="0">
<template #title0="{ value, isActive }">目标对象</template>
<template #title1="{ value, isActive }">代理对象</template>
<template #title2="{ value, isActive }">测试</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TInterface</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">T</span> <span class="token keyword">implements</span> <span class="token class-name">TargetInterface</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TargetProxy</span> <span class="token keyword">implements</span> <span class="token class-name">TInterface</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Target</span> target<span class="token punctuation">;</span>
    
	<span class="token keyword">public</span> <span class="token class-name">TargetProxy</span><span class="token punctuation">(</span><span class="token class-name">T</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token operator">=</span>target<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"增强前置方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        target<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//在方法的前后进行增强，编译阶段就能确定.class</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"增强后置方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">T</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TargetProxy</span> targetProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TargetProxy</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
        targetProxy<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="动态代理" tabindex="-1"><a class="header-anchor" href="#动态代理" aria-hidden="true">#</a> 动态代理</h2>
<p>相对于静态代理，动态代理更加灵活，不需要对每一个目标对象创建一个代理类，也不需要强制实现接口。</p>
<p><strong>动态代理属于运行时动态生成类字节码，并加载到JVM中</strong>。</p>
<p>动态代理主要有两种：JDK动态代理、CGLIB动态代理。</p>
<h3 id="jdk动态代理" tabindex="-1"><a class="header-anchor" href="#jdk动态代理" aria-hidden="true">#</a> JDK动态代理</h3>
<p>Java中动态代理中<code v-pre>InvocationHandler</code>接口和<code v-pre>Proxy</code>类是核心。</p>
<p><code v-pre>Proxy</code>类中使用较多的方法是<code v-pre>newProxyInstance()</code>，用来生成一个代理对象。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span>
                                      <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span>
                                      <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span>
    <span class="token keyword">throws</span> <span class="token class-name">IllegalArgumentException</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>newProxyInstance()</code>方法有三个参数：</p>
<ul>
<li>loader：类加载器，用来加载代理对象；</li>
<li>interfaces：被代理类实现的接口；</li>
<li>h：实现了<code v-pre>InvocationHandler</code>接口的对象。</li>
</ul>
<p>要实现动态代理，还要实现<code v-pre>InvocationHandler</code>接口，使用动态代理类调用方法的时候，方法就会被转发到实现<code v-pre>InvocationHandler</code>接口类的<code v-pre>invoke</code>方法来调用。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 当你使用代理对象调用方法的时候实际会调用到这个方法
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>invoke()</code>方法有三个参数：</p>
<ul>
<li>proxy：动态生成的代理类；</li>
<li>method：与代理类对象调用的方法相对应；</li>
<li>args：当前method方法的参数。</li>
</ul>
<p>流程：通过<code v-pre>proxy</code>类的<code v-pre>newInstance()</code>创建代理对象调用方法，会实际调用实现<code v-pre>InvocationHandler</code>接口类的<code v-pre>invoke()</code>方法。</p>
<p><strong>实现：</strong></p>
<Tabs id="96" :data='[{"id":"目标对象"},{"id":"JDK动态代理对象"},{"id":"获取代理对象的工厂类"},{"id":"测试"}]' :active="0">
<template #title0="{ value, isActive }">目标对象</template>
<template #title1="{ value, isActive }">JDK动态代理对象</template>
<template #title2="{ value, isActive }">获取代理对象的工厂类</template>
<template #title3="{ value, isActive }">测试</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TInterface</span><span class="token punctuation">{</span>
	<span class="token class-name">String</span> <span class="token function">targetMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">T</span> <span class="token keyword">implements</span> <span class="token class-name">TargetInterface</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">targetMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TargetProxy</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span><span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>
    
	<span class="token keyword">public</span> <span class="token class-name">TargetProxy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>target<span class="token operator">=</span>target<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"前置增强"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"后置增强"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdkProxyFactory</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span>
        		target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            	target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            	<span class="token keyword">new</span> <span class="token class-name">TargetProxy</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TInteger</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TInteger</span><span class="token punctuation">)</span> <span class="token class-name">F</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    proxy<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h3 id="cglib动态代理" tabindex="-1"><a class="header-anchor" href="#cglib动态代理" aria-hidden="true">#</a> CGLIB动态代理</h3>
<p>JDK代理需要实现接口的类才能作为目标对象，为了解决这个问题，可以使用CGLIB动态代理。</p>
<p>CGLIB动态代理中<code v-pre>MethodIntercepter</code>接口和<code v-pre>Enhancer</code>类是核心。</p>
<p>需要自定义接口<code v-pre>MethodIntercepter</code>并重写<code v-pre>intercept</code>方法，用于拦截增强被代理类的方法。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MethodInterceptor</span>
<span class="token keyword">extends</span> <span class="token class-name">Callback</span><span class="token punctuation">{</span>
    <span class="token comment">// 拦截被代理类中的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span>Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span><span class="token class-name">MethodProxy</span> proxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>obj：被代理的对象（需要增强的对象）；</li>
<li>method：被拦截的方法；</li>
<li>args：方法参数；</li>
<li>proxy：用于调用原始方法。</li>
</ul>
<p>通过<code v-pre>Enhancer</code>类来动态获取被代理类，当代理类调用方法的时候，实际调用的是<code v-pre>MethodInterceptor</code>中的<code v-pre>intercept</code>方法。</p>
<p><strong>实现：</strong></p>
<p>添加依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>cglib<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.3.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><Tabs id="155" :data='[{"id":"目标对象"},{"id":"方法拦截器"},{"id":"获取代理对象的工厂"},{"id":"测试"}]' :active="0">
<template #title0="{ value, isActive }">目标对象</template>
<template #title1="{ value, isActive }">方法拦截器</template>
<template #title2="{ value, isActive }">获取代理对象的工厂</template>
<template #title3="{ value, isActive }">测试</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">T</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">targetMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"目标类"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> str<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TProxy</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> object <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> object<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CglibProxyFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建动态代理增强类</span>
        <span class="token class-name">Enhancer</span> enhancer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Enhancer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置类加载器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setClassLoader</span><span class="token punctuation">(</span>clazz<span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置被代理类</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setSuperclass</span><span class="token punctuation">(</span>clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 设置方法拦截器</span>
        enhancer<span class="token punctuation">.</span><span class="token function">setCallback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DebugMethodInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建代理类</span>
        <span class="token keyword">return</span> enhancer<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token class-name">T</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">)</span> <span class="token class-name">CglibProxyFactory</span><span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
proxy<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<h2 id="jdk动态代理和cglib动态代理的区别" tabindex="-1"><a class="header-anchor" href="#jdk动态代理和cglib动态代理的区别" aria-hidden="true">#</a> JDK动态代理和CGLIB动态代理的区别</h2>
<p>1.JDK动态代理需要目标类实现接口或直接代理接口，CGLIB则不需要，CGLIB是通过生成一个被代理类的子类来拦截代理类的方法调用，因此不能代理声明<code v-pre>final</code>类型的类和方法。</p>
<ol start="2">
<li>JDK动态代理的效率要更好。</li>
</ol>
<h2 id="静态代理和动态代理的区别" tabindex="-1"><a class="header-anchor" href="#静态代理和动态代理的区别" aria-hidden="true">#</a> 静态代理和动态代理的区别</h2>
<ol>
<li>动态代理更加灵活，不需要实现接口可以直接代理实现类，并且不用为每一个目标类都创建一个代理类，静态代理中接口新增方法，则目标类和代理类都要修改。</li>
<li>静态代理在编译时就将接口、实现类、代理类这些都变成一个个class文件，而动态代理是在运行时产生class文件，并加载到JVM中。</li>
</ol>
</div></template>


