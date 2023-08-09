---
title: 类加载器
icon: page
category:
  - Java
tag:
  - 类加载器
  - 八股
  - JVM
---
## 类加载器

- 类加载器是一个负责加载类的对象，用于实现类加载过程中的第一步。
- 每一个 Java 类都有一个引用指向加载它的 `ClassLoader`。
- 数组类不是通过 `ClassLoader` 创建的，是由 JVM 自动产生的

类加载器的作用就是加载 Java 类的字节码（`.class` 文件）到 JVM 中，字节码可以使源程序（`.java` 文件）经过编译而来，也可以是通过工具动态生成或者是从网络上下载而来。

<!-- more -->

### 类加载器的加载规则

JVM 启动的时候，并不会一次性加载所有的类，而是根据需要去动态加载。大部分类在具体用到的时候才会去加载，这样对内存更加友好。

对于已经加载的类会被放在 `ClassLoader` 中。在类加载的时候，系统会首先判断当前类是否被加载过。已经被加载的类会直接返回，否则才会尝试加载。也就是说，对于一个类加载器来说，相同二进制名称的类只会被加载一次。

### 类加载器总结

JVM 中内置了三个 `ClassLoader`：

1. **`BootstrapClassLoader`(启动类加载器)**：最顶层的加载类，由 C++ 实现，通常表示为 null，并且没有父级，主要用来加载 JDK 内部的核心类库（ `%JAVA_HOME%/lib`目录下的 `rt.jar`、`resources.jar`、`charsets.jar`等 jar 包和类）以及被 `-Xbootclasspath` 参数指定的路径下的所有类。
2. **`ExtensionClassLoader`(扩展类加载器)**：主要负责加载 `%JRE_HOME%/lib/ext` 目录下的 jar 包和类以及被 `java.ext.dirs` 系统变量所指定的路径下的所有类。
3. **`AppClassLoader`(应用程序类加载器)**：面向用户的加载器，负责加载当前应用 classpath 下的所有 jar 包和类。

除了 `BootstrapClassLoader` 是 JVM 自身的一部分之外，其他所有的类加载器都是在 JVM 外部实现的，并且全都继承自 `ClassLoader` 抽象类。这样做的好处是用户可以自定义类加载器，以便让应用程序自己决定如何去获取所需的类。

每个 `ClassLoader` 可以通过 `getParent()` 获取其父 `ClassLoader`，如果获取到 `ClassLoader` 为 `null` 的话，那么该类是通过 `BootstrapClassLoader` 加载的。

 **`ClassLoader` 为 `null` 就是 `BootstrapClassLoader` 加载的呢？** 这是因为`BootstrapClassLoader` 由 C++ 实现，由于这个 C++ 实现的类加载器在 Java 中是没有与之对应的类的，所以拿到的结果是 `null`。

### 自定义类加载器

除了 `BootstrapClassLoader` 其他类加载器均由 Java 实现且全部继承自 `java.lang.ClassLoader`。如果要自定义自己的类加载器，很明显需要继承 `ClassLoader` 抽象类。

`ClassLoader` 类有两个关键的方法：

- `protected Class loadClass(String name, boolean resolve)`：加载指定二进制名称的类，**实现了双亲委派机制** 。`name` 为类的二进制名称，`resove` 如果为 true，在加载时调用 `resolveClass(Class<?> c)` 方法解析该类。
- `protected Class findClass(String name)`：根据类的二进制名称来查找类，默认实现是空方法。

如果不想打破双亲委派模型，就重写 `ClassLoader` 类中的 `findClass()` 方法即可，无法被父类加载器加载的类最终会通过这个方法被加载。但是，如果想打破双亲委派模型则需要重写 `loadClass()` 方法。

## 双亲委派

`ClassLoader` 类使用委托模型来搜索类和资源。每个 `ClassLoader` 实例都有一个相关的父类加载器。需要查找类或资源时，`ClassLoader` 实例会在试图亲自查找类或资源之前，**将搜索类或资源的任务委托给其父类加载器**。 虚拟机中被称为 `Bootstrap Classloader` 的内置类加载器本身没有父类加载器，但是可以作为 `ClassLoader` 
实例的父类加载器。

- `ClassLoader` 类使用委托模型来搜索类和资源。

- 双亲委派模型要求除了顶层的启动类加载器外，其余的类加载器都应有自己的父类加载器。

- `ClassLoader` 实例会在试图亲自查找类或资源之前，将搜索类或资源的任务委托给其父类加载器。

下图展示的各种类加载器之间的层次关系被称为类加载器的“**双亲委派模型（Parents Delegation Model）**”。

![230522202439](/markdown/230522202439.jpg)

双亲委派模型并不是一种强制性的约束，只是 JDK 官方推荐的一种方式。

另外，类加载器之间的父子关系一般不是以继承的关系来实现的，而是通常使用组合关系来复用父加载器的代码。

```java
public abstract class ClassLoader {
    ...
    // 组合
    private final ClassLoader parent;
    protected ClassLoader(ClassLoader parent) {
        this(checkCreateClassLoader(), parent);
    }
    ...
}
```

### 双亲委派模型的执行流程

```java
protected Class<?> loadClass(String name, boolean resolve)
    throws ClassNotFoundException
{
    synchronized (getClassLoadingLock(name)) {
        //首先，检查该类是否已经加载过
        Class c = findLoadedClass(name);
        if (c == null) {
            //如果 c 为 null，则说明该类没有被加载过
            long t0 = System.nanoTime();
            try {
                if (parent != null) {
                    //当父类的加载器不为空，则通过父类的loadClass来加载该类				
                    //重写loadClass方法	就能破坏双亲委派
                    c = parent.loadClass(name, false);
                } else {
                    //当父类的加载器为空，则调用启动类加载器来加载该类
                    c = findBootstrapClassOrNull(name);
                }
            } catch (ClassNotFoundException e) {
                //非空父类的类加载器无法找到相应的类，则抛出异常
            }

            if (c == null) {
                //当父类加载器无法加载时，则调用findClass方法来加载该类
                //用户可通过覆写该方法，来自定义类加载器
                long t1 = System.nanoTime();
                c = findClass(name);
                //用于统计类加载器相关的信息
                sun.misc.PerfCounter.getParentDelegationTime().addTime(t1 - t0);
                sun.misc.PerfCounter.getFindClassTime().addElapsedTimeFrom(t1);
                sun.misc.PerfCounter.getFindClasses().increment();
            }
        }
        if (resolve) {
            //对类进行link操作
            resolveClass(c);
        }
        return c;
    }
}
```

**每当一个类加载器接收到加载请求的时候，会先将请求转发给父类加载器，在父类加载器没有找到所请求的类情况下，该类才会尝试去加载。**

执行流程：

- 在类加载的时候，先判断这个类是否已经加载过了，加载过了会直接返回，否则才会尝试加载。
- 类加载器在进行类加载的时候，它首先不会尝试去加载这个类，而是把请求委派给父类加载器去完成。最终的请求都会到顶层的启动类加载器 `BootstrapClassLoader` 中。
- 只有父类加载器反馈不能完成这个加载请求的时候，子加载器才会尝试自己加载。

⚡ JVM 检查两个 Java 类是否相同的依据：检查类的全名是否相同，还要看类的加载器是否相同，只有两者都是一样的才认为是相同的 Java 类。即使两个类来源于同一个 `Class` 文件，被同一个虚拟机加载，只要加载它们的类加载器不同，则这两个类不同。

### 双亲委派的好处

双亲委派模式，保证了 Java 程序的稳定运行，可以避免类的重复加载，也保证了 Java 的核心 API 不会被修改。

例如自己写一个 `java.lang.Object` 类，在程序运行的时候就会产生两个 `Object` 类，一个是 JRE 里面的，一个是自己写的，使用双亲委派通过启动类加载器 `Bootstrap ClassLoader` 发现这个类已经加载了，则会直接返回，不会加载自己写的 `Object`。

### 打破双亲委派模型方法

自定义加载器的话，需要继承 `ClassLoader` 。如果不想打破双亲委派模型，就重写 `ClassLoader` 类中的 `findClass()` 方法即可，无法被父类加载器加载的类最终会通过这个方法被加载。但是，如果想打破双亲委派模型则需要重写 `loadClass()` 方法。

> 类加载器在进行类加载的时候，它首先不会自己去尝试加载这个类，而是把请求委派给父类加载器去完成（调用父类的 `loadClass()` 方法来加载类）。
