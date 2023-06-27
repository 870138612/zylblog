---
title: Spring
icon: page
category:
  - 框架
tag:
  - Spring
  - 八股
---

## Spring是什么

Spring是一个轻量级的控制反转（Ioc）和面向切面（AOP）的容器框架。

- 从大小和开销两方面而言Spring是轻量级的。
- 通过控制反转的技术达到松耦合。
- 提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务进行内聚性的开发。
- 包含和管理应用对象的配置和声明周期，通过容器实现。
- 将简单的配置组件组合成复杂的应用。

## 单例Bean是单例设计模式吗？

单例模式指的是在JVM中一个类只能构造出一个实例对象，有很多单例模式的实现方法例如双检查法（懒汉式），静态代码块（饿汉式）。

而Spring中的单例Bean也是一种单例模式，只不过范围比较小，范围是beanName，一个beanName对应同一个Bean对象，不同的beanName对应不同的Bean对象。

也就是说同一个类可以创建多个实例，但是名称必须是不同的。

## 什么是单例池？作用是什么？

**单例Bean**通过多次`getBean`方法都会获得同一个实例。

```java
@ComponentScan("com.zyl")
public class AppConfig {
}

@Component
public class UserService {
}

public class Test {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext =
                new AnnotationConfigApplicationContext(AppConfig.class);
        Object userService1 = applicationContext.getBean("userService");
        Object userService2 = applicationContext.getBean("userService");
        System.out.println(userService1);
        System.out.println(userService2);
    }
}
```

创建容器之后获取userService得到的是同一个实例。而这个实例就是放入单例池中，单例池可以看成是一个Map，保证Bean是单例。

## Spring中的设计模式

**工厂设计模式**：Spring 使用工厂模式通过 `BeanFactory`、`ApplicationContext` 创建 bean 对象。

**代理设计模式**：Spring AOP 功能的实现。

**单例设计模式**：Spring 中的 Bean 默认都是单例的。

**模板方法模式**：Spring 中 `jdbcTemplate`、`hibernateTemplate` 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。

**观察者模式**：各种监听器就是使用观察者模式。

**适配器模式**：Spring AOP 的增强或通知（Advice）使用到了适配器模式、Spring MVC 中也是用到了适配器模式适配`Controller`。

**包装器设计模式**：构造数据库查询条件的Wrapper就是包装器模式。

。。。

## Spring中Bean创建的生命周期

Spring中一个Bean的创建大概分为以下几个步骤：

- 推断构造方法
- 实例化
- 依赖注入
- 初始化前，处理@PostConstruct注解
- 初始化，处理Initializing接口
- 初始化后，进行AOP
- 放入单例池

### Bean初始化和实例化的区别是什么？

Bean的实例化就是步骤**UserService类-->无参构造方法-->对象**，而初始化就是调用`afterPropertiesSet()`（类需要实现`InitializingBean`接口）。

初始化过程其实就是对应`afterPropertiesSet()`方法，通过判断

```java
boolean isInitializingBean = (bean instanceof InitializingBean);
```

bean实现了`InitializingBean`则调用`afterPropertiesSet()`。

```java
@Component
public class UserService implements InitializingBean {
    //想加入一个特定的User对象到UserService
    private User admin;

    @Override
    public void afterPropertiesSet() throws Exception {
        //mysql ->管理员的信息->User对象->admin
    }
}
```

### 初始化后是什么？

初始化后做的事情就是执行AOP，生成代理对象，并将代理对象放入单例池中。

### Bean对象和普通对象之间的区别是什么

Bean对象本身就是普通对象，不过可能会经过初始化前和初始化后的增强。

### @PostConstruct是如何工作的

创建Bean的过程：UserService类-->无参构造方法-->对象-->依赖注入-->初始化前（@PostConstruct）-->初始化（InitializingBean）-->初始化后（AOP）-->放入Map单例池-->Bean对象。

![image-20230619153337460](/markdown/image-20230619153337460.png)

```java
@Component
public class UserService {
    //想加入一个特定的User对象到UserService
    private User admin;

    @PostConstruct
    public void a(){
        //mysql ->管理员的信息->User对象->admin
    }
}
```

通过`@PostConstruct`，让Bean在初始化前进行增强。对应于创建Bean过程中的**初始化前（调用@PostConstruct修饰的方法）**，再通过反射去调用方法。

```java
for (Method method : userService1.getClass().getDeclaredMethods()) {
    if (method.isAnnotationPresent(PostConstruct.class)) {
        method.invoke(userService1, null);
    }
}
```

### 构造方法推断

Spring发现有多个构造方法的时候，**如果有无参构造方法则调用无参构造，如果没有无参构造，并且有参构造不止一个则会报错**。（例如不存在无参构造，但是存在多个不同参数的有参构造方法）

可以使用`@Autowired`注解默认使用的构造方法。

### 先ByType再ByName

在单例池Map中会存在多个类型相同的Bean。

```java
@Configuration
public class BeanConfig {
    @Bean
    UserService userService1(){
        return new UserService();
    }
    @Bean
    UserService userService2(){
        return new UserService();
    }
}
```

会产生两个UserService类型的Bean，但是名字不同。

依赖注入时，如果执行有参构造方法，发现UserService类型的Bean只有一个则直接注入（ByType），发现有多个则根据名称注入（ByName）。

```java
@Autowired 
public OrderService(UserService userService2){
	this.userService = userService2;
};//注入的是第二个名为“userService2”的Bean
```

`@Autowired`只能根据类型注入的，可以使用`@Qualifier("userService1")`指定名称。

## Spring事务

### 事务实现原理

事务`Transactional`本质也是通过代理对象调用普通对象的方法，并在前后做增强。

```java
class UserServiceProxy extends UserService{
	UserService target;
	public void test(){
		//@Transactional
        //事务管理器新建一个数据库连接conn;ThreadLocal<Map,conn>
		//conn.autocommit=false;//关闭自动提交
        //target.test();//执行数据库操作
        //没有出现异常则提交conn.commit();否则回滚conn.rollBack();
	}
}
```

### Spring事务传播机制

多个事务方法相互调用的时候，事务包含以下的转播机制。

- **REQUIRED**（默认）：如果当前没有事务则开启一个新的事务，如果存在事务则加入。
- **SUPPORTS**：如果存在事务则加入，否则以非事务模式运行。
- **MANDATORY**：如果存在事务则加入，如果不存在事务则抛出异常。
- **REQUIRED_NEW**：创建一个新的事务，如果已经存在事务，则将该事务挂起。
- **NEVER**：从来不使用事务。
- **NESTED**：如果存在事务则将当前事务嵌套进去，否则开启一个新的事务。

### Spring事务失效的原因

1、**方法异常没有抛出**

```java
@Transactional
public void test(){
	try {
		System.out.println("Spring事务");//正常代码执行
		int a=1/0;//异常代码  被捕获
	}catch (Exception e){
		System.out.println("出现异常");//这里并没有抛出异常，而是自己处理了 因此Spring无法感知
	}
}
```

异常不能被Spring感知就不会执行`rollBack`。

2、**使用`@Transactional`修饰的方法不是public方法**

通过实现类或者是父类生成代理对象，代理对象不能调用子类private方法。

3、**自身调用**

事务是通过代理对象调用才能生效，如果在一个类里面调用本类的方法就相当于`this`调用，事务不会生效。 

4、**propagation事务传播机制设置错误**

如果内部方法的事务传播类型为不支持事务的传播类型，那么，内部方法的事务在Spring中会失效。

```java
@Transactional(propagation = Propagation.NEVER)
//如果有一个事务已经存在则会抛出异常
```

5、**数据库不支持事务**

6、**异常类型错误**

7、**没有被Spring管理**

## SpringAOP怎么工作的？

SpringAOP是通过动态代理机制，如果Bean实现了接口，就会采用JDK动态代理来生成该接口的代理对象（实现类），如果没有实现接口，则通过CGLIB来生成当前类的一个代理对象（父类）。

AOP表示面向切面编程，是一个思想，AspectJ就是其中的一种实现方式，会在编译器对类进行增强，需要使用AspectJ提供的编译器，提供了例如`@Before`、`@After`、`@Around`等注解，而SpringAOP是采用动态代理的方式实现AOP，同样也使用了这些注解但是实现方式是完全不同的。

## Spring为什么要使用三级缓存来解决循环依赖？

Bean的创建生命周期

1. 创建普通对象；
2. 填充属性；
3. 填充其他属性；
4. 其他操作；
5. 初始化后；
6. 放入单例池。

三级缓存，就是三个Map集合。

**第一级缓存**：singletonObjects，它用来存放经过完整Bean生命周期过程的单例Bean对象；

**第二级缓存**：earlySingletonObjects，它用来保存哪些没有经过完整Bean生命周期的单例Bean对象，用来保证不完整的bean也是单例；

**第三级缓存**：singletonFactories，它保存的就是一个lambda表达式，它主要的作用就是bean出现循环依赖后，某一个bean到底会不会进行AOP操作。

::: info 循环依赖为什么用三级缓存

AService和BService相互依赖。

如果采用以下方法：

创建AService普通对象之后放入二级缓存，注入BService时发现没有，转而去创建BService对象，BService对象需要依赖注入AService对象，因此从二级缓存中拿去AService进行依赖注入，完成创建周期后将BService放入一级缓存中，返回AService的创建过程就能进行BService的依赖注入，之后AService也完成创建周期。

**二级缓存就能解决普通对象的循环依赖问题，那三级缓存的作用？**

比如，可能AService会进行AOP操作，会创建AServiceProxy代理对象（**正常情况是在属性注入之后进行AOP**），然后将代理对象放入单例池中，但是BService进行属性赋值，依赖注入的时候是把二级缓存中的AService的普通对象进行赋值，同时存在普通对象和代理对象违背了单例池规则。

解决办法就是在AService创建普通对象之后存入一个Lamda表达式到三级缓存中。

- 创建AService普通对象；

- 放入Lambda表达式到三级缓存中；
- 尝试注入BService发现没有；
- 创建BService普通对象，尝试注入AService属性；
- 发现一二级缓存都没有；
- 执行三级缓存中的Lambda表达式返回AService普通对象或者代理对象；
- 将返回的对象放入二级缓存中，称为早期Bean对象；
- 将二级缓存中的AService对象或者AService代理对象注入到BService中；
- BService完成创建周期放入一级缓存；
- AService普通对象注入一级缓存中的BService完整对象；
- 根据是否需要AOP决定最后放入单例池中的对象是普通对象还是代理对象。

![image-20230619212929209](/markdown/image-20230619212929209.png)

通过对注入属性添加`@Lazy`实现懒惰式加载，只有在调用方法用到属性的时候才会进行初始化，此时本类已经完成创建周期，因此不会出现循环依赖。

:::

## Spring框架中的Bean是线程安全的吗？

Spring本身没有提供Bean的线程安全策略，也就是说Bean是线程不安全的。

Bean有多种作用域：

- **singleton**：容器中仅存在一个实例。

- **prototype**：为每个Bean请求创建实例。不存在线程安全问题。
- **request**：为每个request创建实例，请求完成之后失效。
- **session**：每次session才会创建实例，会话断开后失效。
- **global-session**：全局作用域。

默认是**singleton**但是对于开发中大部分的Bean是无状态的，因此不需要保证线程安全。如果要保证线程安全可以将作用域改为**Prototype**，另外还能使用`ThreadLocal`解决线程安全问题。

> 无状态表示这个实例没有属性对象，不能保存数据，是不变的类，例如：Controller、Service、Dao。

## ApplicationContext和BeanFactory有什么区别？

`BeanFactory`是Spring中非常核心的组件，表示Bean工厂，可以生成和维护Bean，而`ApplicationContext`继承了`BeanFactory`，所以`ApplicationContext`拥有`BeanFactory`的所有特点，也是一个Bean工厂，另外还继承了其他接口例如`EnvironmentCapable`、`MessageSourse`、`ApplicationEventPublisher`等接口，从而让`ApplicationContext`具有`BeanFactory`不具备的功能。

## Spring容器的启动流程

1. 创建Spring容器时会先进行扫描，得到所有的`BeanDefinition`对象，并放在一个Map中。
2. 然后筛选出非懒加载的单例`BeanDefinition`进行创建Bean，对于多例Bean不需要在启动过程中取创建，而是每次获取的时候才会创建。
3. 利用`BeanDefinition`创建Bean就是Bean的创建生命周期，包括了合并`BeanDefinition`、推断构造方法、实例化、属性填充、初始化前、初始化、初始化后等步骤，其中AOP发生在初始化后这个步骤。
4. 单例Bean创建完成之后Spring发布一个容器启动事件。
5. Spring启动结束。
