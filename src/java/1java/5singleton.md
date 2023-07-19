---
title: 单例模式
icon: page
category:
  - Java
tag:
  - 单例模式
  - 八股
---

保证在整个系统中，对某一个类只会存在一个对象实例，并且类只提供一个取得对象实例的方法。
<!-- more -->
## 单例模式实现方式

- 饿汉式
  - 静态常量
  - 静态代码块
- 懒汉式
  - 线程不安全法(不推荐)
  - 线程安全法，同步方法(不推荐)
  - 线程安全，同步代码块
- 其他
  - 双重检查（重要）
  - 静态内部类（重要）
  - 枚举

### 饿汉式（静态常量）

```java
public class Singleton{
    //构造器私有化
    private Singleton(){}
    //本类内部创建对象实例
    private final static Singleton singleton = new Singleton();
    //对外暴露一个静态的公共方法，返回实例对象
    public static Singleton getInstance(){
        return singleton;
    }
}
```

### 饿汉式（静态代码块）

```java
public 
class Singleton{
    private Singleton(){}
    private static Singleton singleton;
    //在静态代码块中创建单例对象
    static {
        singleton = new Singleton();
    }
    public static Singleton getInstance(){
        return singleton;
    }
}
```

**饿汉式在类装载的时候就完成实例化，避免了线程同步问题。如果一直没有使用这个实例，则会浪费内存。**

### 懒汉式(线程安全， 同步方法)

```java
public class Singleton{
    private Singleton(){}
    private static Singleton singleton;
    //提供一个静态的共有方法，当使用该方法时，才去创建singleton
    public static synchronized Singleton getInstance(){
        if(singleton == null){
            singleton = new Singleton();
        }
        return singleton;
    }
}
```

**效率较低**

### 双重检查（重要）

```java

class Singleton{
    private Singleton(){}
    //注意使用volatile修饰singleton，实现可见性，有序性
    private static volatile Singleton singleton;
    
    public static Singleton getInstance(){
        if(singleton == null){
            synchronized (Singleton.class){
                if(singleton == null){
                    singleton = new Singleton();
                }
            }
        }
        return singleton;
    }
}
```

两个`static`，一个`volatile`，一个`synchronized`修饰符。

**线程安全；延迟加载；效率较高。**

### 静态内部类（重要）

```java
public class Singleton{
    private Singleton(){}
    private static class SingletonInstance{
        private static final Singleton SINGLETON = new Singleton();
    }
    public  static Singleton getInstance(){
        return SingletonInstance.SINGLETON;
    }
}
```

**由于静态内部类在`Singleton`被装载的时候，并不会实例化静态内部类`SingletonInstance`，只有在被用到的时候才会实例化，线程安全，延时加载，效率高。**

### 枚举

```java
enum Singleton{
	SINGLETON;
}
```

**不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象，枚举仍然算饿汉式。**
