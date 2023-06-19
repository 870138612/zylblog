---
title: Spring面试题一
icon: page
category:
  - 框架
tags:
  - Spring
  - SpringWeb  
  - SpringBoot
  - 八股
---

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

## Bean对象和普通对象之间的区别是什么

Bean对象本身就是普通对象，不过可能会经过初始化前和初始化后的增强。

## @PostConstruct是如何工作的

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

## Bean的初始化是如何工作的？

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

## Bean初始化和实例化的区别是什么？

Bean的实例化就是步骤**UserService类-->无参构造方法-->对象**，而初始化就是调用`afterPropertiesSet()`（类需要实现`InitializingBean`接口）。

## 初始化后是什么？

初始化后做的事情就是执行AOP，生成代理对象，并将代理对象放入单例池中。

## 构造方法推断

Spring发现有多个构造方法的时候，**如果有无参构造方法则调用无参构造，如果没有无参构造，并且有参构造不止一个则会报错**。（例如不存在无参构造，但是存在多个不同参数的有参构造方法）

可以使用`@Autowired`注解默认使用的构造方法。

## 先ByType再ByName

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

`@Autowired`只能根据类型注入的，可以使用`@Qualifier`注解指定名称。

## SpringAOP怎么工作的？

在初始化后（AOP）之后生成的代理对象是没有做依赖注入的。

如果需要代理的类没有实现接口则会通过CGLIB生成代理对象。

UserServiceProxy对象-->UserService对象-->UserServiceProxy.target=普通对象-->放入Map单例池。

也就是生成一个父类对象，将普通对象赋值给父类对象的属性`target`，再对方法进行前后增强，实质就是换了一个对象调用普通对象的普通对象。

```
class UserServiceProxy extends UserService{
	UserService target;
	public void test(){
		//@Before 切面
		//target.test();//相当于执行普通对象的test()方法	
	}
}
```

## Spring事务底层如何工作？

事务本质也是通过代理对象调用普通对象的方法，并在前后做增强。

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

## Spring事务失效的原因

1、**方法异常没有抛出**

```java
@Transactionl
public void test(){
	try {
		System.out.println("Spring事务"); //正常代码执行
		int a=1/0;  //异常代码  被捕获
	}catch (Exception e){
		System.out.println("出现异常");//这里并没有抛出异常，而是自己处理了 因此Spring无法感知
	}
}
```

异常不能被Spring感知就不会执行`rollBack`。

2、**使用`@Transactionl`修饰的方法不是public方法**

通过实现类或者是父类生成代理对象，代理对象不能调用子类private方法。

3、**自身调用**

事务是通过代理对象调用才能生效，如果在一个类里面调用本类的方法就相当于`this`调用，事务不会生效。 

4、**propagation事务传播机制设置错误**

如果内部方法的事务传播类型为不支持事务的传播类型，那么，内部方法的事务在Spring中会失效。

```java
@Transaction(propagation = Propagation.NEVER)
//如果有一个事务已经存在则会抛出异常
```

5、**数据库不支持事务**

6、**异常类型错误**

7、**没有被Spring管理**

## Spring为什么要使用三级缓存来解决循环依赖？

Bean的创建生命周期

1. 创建普通对象；
2. 填充属性；
3. 填充其他属性；
4. 其他操作；
5. 初始化后；
6. 放入单例池。

三级缓存，就是三个Map集合。

**第一级缓存**：单例池 singletonObjects，它用来存放经过完整Bean生命周期过程的单例Bean对象；

**第二级缓存**：earlySingletonObjects，它用来保存哪些没有经过完整Bean生命周期的单例Bean对象，用来保证不完整的bean也是单例；

**第三级缓存**：singletonFactories，它保存的就是一个lambda表达式，它主要的作用就是bean出现循环依赖后，某一个bean到底会不会进行AOP操作。

::: info 循环依赖为什么用三级缓存

AService和BService相互依赖。

**AService 创建生命周期**

- 推断构造函数，实例化得到普通对象 —> singletonFactories(lambda(beanName,普通对象，beanDefinition))；
- 依赖注入，为bService属性赋值—>去单例池SingletonObjects中找—>没找到 —> 创建BService的Bean对象；
- 填充其他属性；
- 初始化前操作，`@PostConstruct`；
- 初始化，实现`InitialozingBean`接口，`afterPropertiesSet()`方法；
- 初始化后，AOP操作，判断是否需要；
- **将二级缓存earlySingletonObjects中的代理对象/普通对象取出来**；

- 存入单例池中；

**BService 创建生命周期**

- 推断构造函数，实例化得到普通对象；
- 依赖注入，为aService属性赋值 —> 去singletonObjects中找 —> 没找到 —> creatingSet，判断是否循环依赖 —> 二级缓存earlySingletonObjects中找 —> 没找到 —> singletonFactories --> 代理对象/普通对象 —> 存入二级缓存earlySingletonObjects；(出现了循环依赖才会提前AOP)
- 初始化前操作，`@PostConstruct`；
- 初始化，实现`InitialozingBean`接口，`afterPropertiesSet()`方法；
- 初始化后，AOP操作，判断是否需要；
- **将二级缓存earlySingletonObjects中的代理对象/普通对象取出来**；
- 存入单例池中；

对于循环依赖的对象创建，可以先创建A放入二级缓存，然后创建B对象并将A对象进行依赖注入，初始化之后放入一级缓存，此时A对象也能依赖注入B了。

**二级缓存就能解决普通对象的循环依赖问题，那三级缓存的作用？**

比如，可能AService会进行AOP操作，会创建AServiceProxy代理对象（**正常情况是在属性注入之后进行AOP**），然后将代理对象放入单例池中，但是BService进行属性赋值，依赖注入的时候是把AService的普通对象进行赋值，同时存在代理对象和普通对象违背了规则。

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

:::
