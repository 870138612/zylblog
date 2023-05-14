---
title: Java基础面试题二
icon: page
category:
  - Java
tags:
  - Java基础
  - 八股 
---

## 面向对象

### 面向对象和面向过程的区别

- 面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。
- 面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。

一个注重过程，一个注重对象的内部属性。

### 对象的相等和引用的相等

对象的相等是是比较内存中存放的对象是否相等。

引用相等是指向的内存地址是否相等。

```java
String str1 = "a";
String str2 = new String("a");
String str3 = "a";
System.out.println(str1 == str2);//false	
System.out.println(str1 == str3);//true
System.out.println(str1.equals(str2));//true	
System.out.println(str1.equals(str3));//true
```

`System.out.println(str1 == str2);//false`详见后半部分[String](##String)。

### 如果没有声明构造方法，程序能正确执行吗？

如果类没有声明构造方法则会默认生成一个不带参数的构造方法。

如果自己添加了构造方法无论是否有参数都不会再自动生成无参构造方法。

构造方法不能被重写`@Override`，但是能重载（有参构造和无参构造）。

### 面向对象的三个特征

**封装**

封装是将一个对象的状态信息隐藏在内部，不允许外部直接访问这些属性，但是会提供方法来操作属性。

**继承**

不同类型的对象可能会具有相似特点，例如游戏中的每一个英雄都有血量，移速等基础属性，但是每一个英雄的技能各有不同，则可以通过继承复用减少开发难度。

:::tags

@tab:active HeroTemplate

```java
public class Hero {
    private int hp;
    private int speed;
}
```

@tab Hero1

```java
public class Hero1 extends Hero{
    public void skill1(){
        System.out.println("技能1");
    }
}
```

@tab Hero2

```java
public class Hero2 extends Hero{
    public void skill2(){
        System.out.println("技能2");
    }
}
```

:::

1. 子类拥有父类的所有属性和方法（包括私有属性和私有方法）。
2. 子类能对父类进行扩展。

**多态**

表示一个对象具有多种状态，上述代码中创建对象：

:::tags

@tab:active HeroTemplate

```java
public class Hero {
    public void skill(){}
}
```

@tab Hero1

```java
public class Hero1 extends Hero{
    @Override
    public void skill(){
        System.out.println("技能1");
    }
}
```

@tab Hero2

```java
public class Hero2 extends Hero{
    @Override
    public void skill(){
        System.out.println("技能2");
    }
}
```

:::

```java
Hero hero = new Hero1();
hero.skill();//打印技能1，编译是否能通过看左边，执行结果看右边。
```

特点

- 对象类型和引用类型之间具有继承/实现关系；
- 引用类型变量发出的方法调用到底是哪个类中的方法，在程序运行的时候才能确定；
- 多态不能调用只在子类中存在，但是父类中不存在的方法，也就是`hero`能调用的方法是看父类`Hero`的，执行的结果看子类`Hero1`
- 如果子类重写了父类方法，则执行的是子类中的方法，如果没有重写则执行的是父类中的方法

### 接口和抽象类的共同点

**共同点**

- 都不能被实例化；
- 都可以包含抽象方法；
- 都可以有默认的实现方法（Java8可以用`default`关键字在接口中定义默认方法）。

**不同点**

- 接口强调行为的约束，实现某个接口就相当于有某个责任，必须实现对应的方法，继承则是强调复用，子类继承父类并不一定要重写父类方法；
- 一个类只能`extends`一个类，但是能`implements`多个接口。
- 接口中的成员变量只能是`public static final`类型，不能被修改而且必须有初始值，抽象类中的成员变量默认default，可以在子类中被重新定义，重新赋值。

### 浅拷贝，深拷贝，引用拷贝

**浅拷贝**

在堆上创建一个新对象N，N对象中的内部对象是引用类型的话，会直接复制原本类O的内部对象引用地址；

也就是新对象N内部对象和原来的对象O的内部对象是同一个。

**深拷贝**

不仅仅拷贝对象，将原本对象内部的所有属性都单独复制一份；

新对象的内部引用对象不再是原来对象的内部引用对象。

**引用拷贝**

两个不同对象的引用指向同一个对象

























## String



