---
title: Java基础一
icon: page
category:
  - Java
tag:
  - Java基础
   
---

::: tip 一切就从这里开始吧
笔记来源网络，仅做个人学习，非商业用途。
:::
<!-- more -->

## JVM  JRE  JDK

JVM 是 java 虚拟机，针对不同系统有不同的实现，常用的为 HotSpot VM。

JDK 是功能齐全的 SDK，包含 JRE 和一些其他的工具，例如 javac，java等。

JRE 是 Java 运行时环境，仅包含 Java 应用程序运行时的必要环境。

![image-20230514210704461](/markdown/image-20230514210704461.png)

## 什么是字节码？采用字节码的好处？

JVM 能理解的代码就是字节码，字节码解决了传统解释语言运行效率低的问题，还具有很好的可移植性，一次编译，任何地方运行。

`.java` 文件经过 javac 编译之后变成 `.class` 文件，`.class` 通过解释器和 JIT（运行时编译器）编译成机器可以理解的代码，JIT 完成一次编译之后，就会将对应的机器码保存下来，之后复用，其中编译的是热点代码。所以 Java 也是编译与解释共存的语言。

## Java 和 C++ 的区别

Java 和 C++ 都是面向对象的语言，都支持封装继承多态。

Java 不支持通过指针来直接访问内存，程序内存更加安全。

Java 的类是单继承的，C++ 支持多继承。

Java 有自动的垃圾回收机制，不需要手动释放内存。

## 基本数据类型

Java 有 8 种基本数据类型：

- 6 种数字类型
  - 4 种整数类型：`byte`、`short`、`int`、`long`
  - 2 种浮点数类型：`float`、`double`
- 1 种字符类型：`char`
- 1 种布尔类型：`boolean`

### 基本类型和包装类型

- 包装类型能用于泛型，而基本类型不可以。
- 基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中（线程私有），基本数据类型的成员变量没有被 `static` 修饰的话放在堆中。而包装类型属于对象类型。
- 包装类型占用的空间比基本类型要大。
- 成员包装类型不赋值就是 `null`，而基本类型有默认值并且不是 `null`。
- 基本数据类型使用 `==` 进行比较，而包装类型通过 `equals()` 进行比较。

在 Hot Spot 虚拟机中引入 JIT 优化之后，会对对象进行逃逸分析，如果对象的作用范围没有超过当前方法，则可能通过标量替换来实现栈（线程私有）上分配，避免堆上分配对象。

### 包装类的缓存机制

`Byte`，`Short`，`Integer`，`Long` 这 4 种包装类默认创建了数值 **[-128，127]** 的相应类型的缓存数据，8 位补码的表示范围。

`Character` 创建了 **[0，127]** 范围的缓存数据，7 位无符号数的表示范围，`Boolean` 直接返回 `True` 或者是 `False`。

### 自动拆装箱

装箱就是使用包装类的 `valueOf` 方法，拆箱就是使用 `xxValue` 方法。

`Integer i = 10` 等价于 `Integer i = Integer.valueOf(10)`，

`int n = i ` 等价于 `int n = i.intValue()`。

### 浮点数运算的时候会有精度丢失的风险？

计算机组成原理第二章浮点加减法，具体从浮点数加减法的步骤说起。
- 对阶；
- 尾数求和；
- 舍入；
- 规格化；
- 溢出判断。

### 如何解决浮点数运算的时候精度丢失问题？

使用 `BigDecimal` 类进行浮点数运算，不会造成精度丢失问题。

### 超过 long 64 位补码的范围数字应该如何表示？

通过 `BigInteger` 存储，`BigInteger` 内部使用 `int[]` 存储任意大小的整型数据。

## 变量

```java
public class Example{
    //成员变量
    private String name;
    private int age;
    
    public void method() {
        int num1 = 0;//栈中分配的局部变量，没有逃逸出本方法
        System.out.println(num1);
    }
     // 带参数的方法中的局部变量
    public void method2(int num2) {
        int sum = num2 + 10; // 栈中分配的局部变量
        System.out.println(sum);
    }
}
```

### 静态变量

静态变量就是被 `static` 修饰的变量，被 `static` 修饰的变量为类所共享的，无论创建了多少个类实例，这个变量都是共享的，只会分配一次内存，静态变量通过类名.进行访问。

通常情况下被 `final` 修饰的 `static` 变量会成为常量。

## 方法

### 静态方法为什么不能调用非静态成员？

静态方法属于类，在类加载的时候就会分配内存，通过类名直接访问，非静态方法属于实例对象，需要通过类的实例对象去调用。

在类的非静态成员不存在的时候静态方法就已经存在，此时调用内存中不存在的非静态成员不合法。

### 重载和重写

重载就是对同一个方法根据输入的不同作出不同的方法处理。

重写一般在子类继承父类，输入的数据一样，但是方法内的代码不同。

**重载**

```java
public class Example {
    public void method(String a) {
        System.out.println("输入了一个参数");
    }

    public void method(String a, String b) {
        System.out.println("输入了两个参数");
    }
}
```

**重写**

::: tabs
@tab:active 父类

```java
public class F {
    public void method() {
        System.out.println("父类方法");
    }
}
```

@tab 子类

```java
public class S extends F{
    @Override
    public void method() {
        System.out.println("子类方法");
    }
}
```

:::

重写发生在运行时，是子类对父类方法的实现过程重新编写

1. 方法名，参数列表必须相同，子类方法返回值类型比父类方法返回值类型更小或者是相等，子类抛出的异常应该小于或者等于父类，访问修饰符范围大于等于父类
2. 如果父类方法访问修饰符是 `private/final/static` 则子类不能重写方法，被 `static` 修饰的方法能被再次声明。
3. 构造方法无法被重写

::: tabs
@tab:active 父类

```java
public class F {
    public static void method() {
        System.out.println("父类方法");
    }
}
```

@tab 子类

```java
public class S extends F{
    //此方法不能添加@Override，但是可以再次声明
    public static void method() {
        System.out.println("子类方法");
    }
}
```

:::

**方法的重写要遵循“两同两小一大”**

“两同”即方法名相同、形参列表相同；

“两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；

“一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。











