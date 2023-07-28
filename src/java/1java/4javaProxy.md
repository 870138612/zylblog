---
title: 代理模式
icon: page
category:
  - Java
tag:
  - 代理模式
  - 八股
  - Java 基础
---


使用代理对象来代替真实对象的访问，这样能在不改变目标对象的前提下，提供额外的功能，扩展目标对象。

代理模式有静态代理和动态代理两种实现方式。
<!-- more -->
## 静态代理

静态代理中，对方法的增强是手动完成的，非常不灵活，从JVM层面来说，静态代理在编译的时候就将接口、实现类、代理类变成一个个 `class` 文件。编译从 `.java` 变成 `.class`。

::: tabs

@tab:active 目标对象

```java
public interface TInterface{
    String method(String str);
}

public class T implements TargetInterface{
    public String method(String str){
        return str;
    }
}
```

@tab:active 代理对象

```java
public class TargetProxy implements TInterface{
    private final Target target;
    
    public TargetProxy(T target){
        this.target=target;
    }
    
    @Override
    public String method(String str){
        System.out.println("增强前置方法");
        target.method(str);//在方法的前后进行增强，编译阶段就能确定.class
        System.out.println("增强后置方法");
        return null;
    }
}
```

@tab 测试

```java
public class Main {
    public static void main(String[] args) {
        T target = new T();
        TargetProxy targetProxy = new TargetProxy(target);
        targetProxy.method("java");
    }
}
```

:::

## 动态代理

相对于静态代理，动态代理更加灵活，不需要对每一个目标对象创建一个代理类，也不需要强制实现接口。

**动态代理属于运行时动态生成类字节码，并加载到JVM中**。

动态代理主要有两种：JDK动态代理、CGLIB动态代理。

### JDK 动态代理

Java中动态代理中`InvocationHandler`接口和`Proxy`类是核心。

`Proxy`类中使用较多的方法是`newProxyInstance()`，用来生成一个代理对象。

```java
public static Object newProxyInstance(ClassLoader loader,
                                      Class<?>[] interfaces,
                                      InvocationHandler h)
    throws IllegalArgumentException
{
    ......
}
```

`newProxyInstance()`方法有三个参数：

- `loader`：类加载器，用来加载代理对象；
- `interfaces`：被代理类实现的接口；
- `h`：实现了 `InvocationHandler` 接口的对象。

要实现动态代理，还要实现 `InvocationHandler` 接口，使用动态代理类调用方法的时候，方法就会被转发到实现 `InvocationHandler` 接口类的 `invoke` 方法来调用。

```java
public interface InvocationHandler {

    /**
    * 当你使用代理对象调用方法的时候实际会调用到这个方法
    */
    public Object invoke(Object proxy, Method method, Object[] args)
        throws Throwable;
}
```

`invoke()`方法有三个参数：

- `proxy`：动态生成的代理类；
- `method`：与代理类对象调用的方法相对应；
- `args`：当前method方法的参数。

流程：通过 `proxy` 类的 `newInstance()` 创建代理对象调用方法，会实际调用实现 `InvocationHandler` 接口类的 `invoke()` 方法。

**实现：**

::: tabs

@tab:active 目标对象

```java
public interface TInterface{
    String targetMethod(String str);
}

public class T implements TargetInterface{
    public String targetMethod(String str){
        return str;
    }
}
```

@tab JDK动态代理对象

```java
public class TargetProxy implements InvocationHandler{
    private final Object target;
    
    public TargetProxy(Object target){
        this.target=target;
    }
    
    @Override
    public Object invoke(Object proxy, Method method, Object[] args){
        System.out.println("前置增强");
        Object result = method.invoke(target, args);
        System.out.println("后置增强");
        return result;
    }
}
```

@tab 获取代理对象的工厂类

```java
public class JdkProxyFactory{
    public static Object getProxy(Object target){
        return Proxy.newProxyInstance(
                target.getClass().getClassLoader(),
                target.getClass().getInterfaces(),
                new TargetProxy(target)
        );
    }    
}
```

@tab 测试

```java
public static void main(String[] args) {
    TInteger proxy = (TInteger) JdkProxyFactory.getProxy(new T());
    proxy.send("abc");
}
```

:::

### CGLIB 动态代理

JDK代理需要实现接口的类才能作为目标对象，为了解决这个问题，可以使用CGLIB动态代理。

CGLIB动态代理中 `MethodIntercepter` 接口和 `Enhancer` 类是核心。

需要自定义接口 `MethodIntercepter` 并重写 `intercept` 方法，用于拦截增强被代理类的方法。

```java
public interface MethodInterceptor
extends Callback{
    // 拦截被代理类中的方法
    public Object intercept(Object obj, java.lang.reflect.Method method, Object[] args,MethodProxy proxy) throws Throwable;
}
```

- `obj`：被代理的对象（需要增强的对象）；
- `method`：被拦截的方法；
- `args`：方法参数；
- `proxy`：用于调用原始方法。

通过 `Enhancer` 类来动态获取被代理类，当代理类调用方法的时候，实际调用的是 `MethodInterceptor` 中的 `intercept` 方法。

**实现：**

添加依赖

```xml
<dependency>
    <groupId>cglib</groupId>
    <artifactId>cglib</artifactId>
    <version>3.3.0</version>
</dependency>
```

::: tabs

@tab:active 目标对象

```java
public class T {
    public String targetMethod(String str){
        System.out.println("目标类");
        return str;
    }
}
```

@tab 方法拦截器

```java
public class TProxy implements MethodInterceptor {
    @Override
    public Object intercept(Object o, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        System.out.println("before method " + method.getName());
        Object object = methodProxy.invokeSuper(o, args);
        System.out.println("after method " + method.getName());
        return object;
    }
}
```

@tab 获取代理对象的工厂

```java
public class CglibProxyFactory {

    public static Object getProxy(Class<?> clazz) {
        // 创建动态代理增强类
        Enhancer enhancer = new Enhancer();
        // 设置类加载器
        enhancer.setClassLoader(clazz.getClassLoader());
        // 设置被代理类
        enhancer.setSuperclass(clazz);
        // 设置方法拦截器
        enhancer.setCallback(new DebugMethodInterceptor());
        // 创建代理类
        return enhancer.create();
    }
}
```

@tab 测试

```java
T proxy = (T) CglibProxyFactory.getProxy(T.class);
proxy.send("java");
```

:::

## JDK 动态代理和 CGLIB 动态代理的区别

1. JDK动态代理需要目标类实现接口或直接代理接口，CGLIB则不需要，CGLIB是通过生成一个被代理类的子类来拦截代理类的方法调用，因此不能代理声明 `final` 类型的类和方法。

2. JDK动态代理的效率要更好。

## 静态代理和动态代理的区别

1. 动态代理更加灵活，不需要实现接口可以直接代理实现类，并且不用为每一个目标类都创建一个代理类，静态代理中接口新增方法，则目标类和代理类都要修改。
2. 静态代理在编译时就将接口、实现类、代理类这些都变成一个个class文件，而动态代理是在运行时产生class文件，并加载到JVM中。
