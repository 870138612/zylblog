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

一个注重过程，一个注重内部属性。

<!-- more -->

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

:::tabs

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

:::tabs

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

- 对象类型和引用类型之间具有继承/实现关系；
- 引用类型变量发出的方法调用到底是哪个类中的方法，在程序运行的时候才能确定；
- 多态不能调用只在子类中存在，但是父类中不存在的方法，也就是`hero`能调用的方法是看父类`Hero`的，执行的结果看子类`Hero1`；
- 如果子类重写了父类方法，则执行的是子类中的方法，如果没有重写则执行的是父类中的方法。

### 接口和抽象类的共同点

**共同点**

- 都不能被实例化；
- 都可以包含抽象方法；
- 都可以有默认的实现方法（Java8可以用`default`关键字在接口中定义默认方法）。

**不同点**

- 接口强调行为的约束，实现某个接口就相当于有某个责任，必须实现对应的方法，继承则是强调复用，子类继承父类并不一定要重写父类方法；
- 一个类只能`extends`一个类，但是能`implements`多个接口；
- 接口中的成员变量只能是`public static final`类型，不能被修改而且必须有初始值，抽象类中的成员变量默认default，可以在子类中被重新定义，重新赋值。

### 浅拷贝，深拷贝，引用拷贝

**浅拷贝**

在堆上创建一个新对象N，N对象中的内部对象是引用类型的话，会直接复制原本类O的内部对象引用地址；

也就是新对象N内部对象和原来的对象O的内部对象是同一个。

**深拷贝**

不仅仅拷贝对象，将原本对象内部的所有属性都单独复制一份；

新对象的内部引用对象不再是原来对象的内部引用对象。

**引用拷贝**

两个不同对象的引用指向同一个对象。

## Object

### ==和equals区别

- 对于基本类型来说==是比较值；
- 对于引用类型来说==是比较地址。

`equals`存在两种情况：

- 类没有重写`equals`方法：则通过`equals`比较两个对象的时候等价于`==`；
- 重写了`equals`方法：则是比较两个对象内部的属性是否相等。

创建`String`类型的对象，虚拟机会在字符串常量池中查找有没有相同值的对象，如果有则直接返回这个对象的引用，如果没有就创建一个`String`对象。

### hashCode()作用

`hashCode()`方法用来获哈希码，作用是确定在哈希表中的位置。

`hashCode()`定义在`Object`类中，所以所有的对象都有这个方法。`hashCode()`是本地方法，也就是通过C或者是C++实现的。

`HashMap`通过计算`Hash`值使得查找元素的时间复杂度为1，数据结构散列表。

### 为什么重写 equals() 时必须重写 hashCode() 方法？

- Java中如果两个对象相同则`HashCode`，必须相等；

- 如果`HashCode`相同，则对象不一定相等；

- 如果两个对象的`HashCode`不同则对象一定不同。

重写`equals()`代表这个方法是用来比较两个对象是否相等，如果不重写`HashCode()`方法可能会导致判断是相等的两个对象但是`HashCode`不等。

## String

### String、StringBuffer、StringBuilder 的区别？

- `String`是不可变的，可以看成常量，线程安全。对内部方法加了同步锁，是线程安全的。`StringBuilder`没有添加同步锁，所以是线程不安全的。
- 每次对`String`类型进行修改的时候，都会新生成一个`String`类型，然后将引用指向新的`String`对象。`StringBuffer`和`StringBuilder`是对对象本身进行操作，不会生成新的对象，相同情况下使用`StringBuilder`会带来一点性能提升，但是线程不安全。
- 少量数据使用`String`，单线程下大量数据使用`StringBuilder`，多线程下使用`StringBuffer`。

### String为何不可变？

JDK8中的源码：

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
    private final char value[];
    //...
}
```

- 保存字符串的数组是`final`修饰的，并且内部没有暴露能修改这个数组的方法；

- `String`类本身也被`final`修饰导致不能被继承，从而避免子类破坏`String`的不变性。

### 字符串拼接用“+” 还是 StringBuilder?

+和+=是Java中唯二为`String`重载过的运算符。

`String`对象使用+进行拼接，实际就是通过`StringBuilder`调用`append()`方法，拼完之后调用`toString()`方法返回`String`对象。

::: info

如果在循环内使用+进行拼接多个字符串，编译器不会复用`StringBuilder`，而是每次循环都创建一个`StringBuilder`。

直接使用`StringBuilder`进行拼接就能解决这个问题。

:::

### String s1 = new String("abc");这句话创建了几个字符串对象？

会创建1个或者2个字符串对象。、

String str = new String("abc");

```java
String str = new String("abc");
```

如果字符串常量池中不存在"abc"的引用，则会在堆中创建2个字符串对象"abc"。一个是在字符串常量池中创建的"abc"，另外是new在堆中创建的对象。

如果字符串常量池中存在"abc"的引用，则会在堆中创建1个字符串对象"abc"。也就是new在堆中创建的对象。

示意图：

![image-20230515171640642](https://blog-1312634242.cos.ap-shanghai.myqcloud.com/markdown/image-20230515171640642.png)

### String#intern 方法有什么作用?

`String.intern()`是一个本地方法，作用是将指定的字符串对象保存到字符串常量池中。

- 如果字符串常量池中保存了对应的字符串对象的引用，则返回引用。
- 如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回。

```java
// 在堆中创建字符串对象”Java“
// 将字符串对象”Java“的引用保存在字符串常量池中
String s1 = "Java";
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s2 = s1.intern();
// 会在堆中在单独创建一个字符串对象
String s3 = new String("Java");
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s4 = s3.intern();
// s1 和 s2 指向的是堆中的同一个对象
System.out.println(s1 == s2); // true
// s3 和 s4 指向的是堆中不同的对象
System.out.println(s3 == s4); // false
// s1 和 s4 指向的是堆中的同一个对象
System.out.println(s1 == s4); //true
```

### 编译器对字符串拼接的优化

```java
String str1 = "a";
String str2 = "b";
String str3 = "a" + "b";//常量池中创建的对象
String str4 = str1 + str2;//堆中创建的对象
```

对于`String str3 = "a" + "b"`等价于`String str3 = "ab"`；对于在编译期间就能确定的字符串，编译器会在编译期间直接放入字符串常量池中。

`String str4 = str1 + str2;`则不会在编译期间确定结果，不会产生优化。

```java
final String str1 = "str";
final String str2 = "ing";
// 下面两个表达式其实是等价的
String c = "str" + "ing";// 常量池中的对象
String d = str1 + str2; // 常量池中的对象
System.out.println(c == d);// true
```

使用`final`修饰则看成常量，在编译期间就会优化放入字符串常量池中。
## Java值传递

### 形参和实参

```java
String s = "abc";
//s 为实参
method(s);
//str 为形参
void method(String str){
	System.out.println(str);
}
```

### 值传递&引用传递

- 值传递：方法接收的是实参的拷贝，会创建副本；
- 引用传递：方法接收的直接是实参所引用对象在堆中的地址，不会创建副本，对形参的修改将会影响到实参。

### Java只有值传递

```java
public static void main(String[] args) {
  int[] arr = { 1, 2, 3, 4, 5 };
  System.out.println(arr[0]);
  change(arr);
  System.out.println(arr[0]);//输出为 0
}

public static void change(int[] array) {
  // 将数组的第一个元素变为0
  array[0] = 0;
}
```

array为引用类型，但是不称为引用传递，案例中仍然是值传递，值是实参的地址。

引用传递值得是：对形参本身修改会导致实参变化。

## Java序列化

- **序列化**：将数据结构或对象转换成二进制字节流的过程
- **反序列化**：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程

序列化协议属于TCP/IP中的应用层。

Java中通过实现`Serializable`接口实现序列化功能。

### serialVersionUID 有什么作用？

`serialVersionUID`的作用是版本控制，反序列化的时候会检查`serialVersionUID`是否和当前类的`serialVersionUID`相同，如果不同则会抛出`InvalidClassException`异常。如果不指定`serialVersionUID`，编译器会自动生成。

```java
private static final long serialVersionUID = 1905122041950251207L;
```

`serialVersionUID`用来给JVM识别的，并不会被序列化。
