---
title: Java反射
icon: page
category:
  - Java
tag:
  - Java反射
  - 八股
---

反射可以获取任意一个类的所有属性和方法，还能调用这些方法和属性。
<!-- more -->
### 反射的应用场景

Spring/SpringBoot/Mybatis等框架中都大量使用了反射机制。

框架中也使用了动态代理，动态代理就是依赖反射。

JDK动态代理：

```java
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
     */
    private final Object target;

    public DebugInvocationHandler(Object target) {
        this.target = target;
    }
    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        System.out.println("before method " + method.getName());
        Object result = method.invoke(target, args);
        System.out.println("after method " + method.getName());
        return result;
    }
}
```

其中的`Method`就是反射类。

SpringBoot中使用`@Component`就能声明一个Bean，原理就是基于反射获取到对应类上的注解，再做处理。

### 反射的优缺点

优点：让代码更加灵活，为各种框架提供开箱即用的便利。

缺点：拥有分析操作类的能力，增加了安全隐患。

### 反射获取Class对象

1. 知道具体类的情况下：

```java
Class clazz = Target.class;
```

2. 通过`Class.forName()`传入类的全路径名：

```java
Class clazz = Class.forName("com.zyl.Target");
```

3. 通过实例对象的`getClass()`获取：

```java
Target t = new Target();
Class clazz = t.getClass();
```

4. 通过类加载器`xxxClassLoader.loadClasss()`传入类路径获取：

```java
ClassLoader.getSystemClassLoader().loadClass("com.zyl.Target");
```

通过类加载器获取Class对象不会进行初始化，意味着静态代码块和静态对象不会得到执行。

### 获取方法并执行

```java
Method privateMethod = targetClass.getDeclaredMethod("privateMethod");
//为了调用private方法取消安全检查
privateMethod.setAccessible(true);
privateMethod.invoke(targetObject);
```
