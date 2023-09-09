---
title: Spring
icon: spring
date: 2023-07-13
category:
  - 框架
tag:
  - Spring
  - SpringMVC
  - SpringBoot
  
---

## Spring 是什么？

Spring 是一个轻量级的控制反转（Ioc）和面向切面（AOP）的容器框架。

- 从大小和开销两方面而言 Spring 是轻量级的。
- 通过控制反转的技术达到松耦合。
- 提供了面向切面编程的丰富支持，允许通过分离应用的业务逻辑与系统级服务进行内聚性的开发。
- 包含和管理应用对象的配置和声明周期，通过容器实现。
- 将简单的配置组件组合成复杂的应用。

<!-- more -->

## 单例 Bean 是单例设计模式吗？

单例模式指的是在 JVM 中一个类只能构造出一个实例对象，有很多单例模式的实现方法例如双检查法（懒汉式），静态代码块（饿汉式）。

而 Spring 中的单例 Bean 也是一种单例模式，只不过范围比较小，范围是 `BeanName`，一个 `BeanName` 对应同一个 Bean 对象，不同的 `BeanName` 对应不同的 Bean 对象。

也就是说同一个类可以创建多个实例，但是名称必须是不同的。

## 什么是单例池？作用是什么？

单例 Bean 通过多次 `getBean` 方法都会获得同一个实例。

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

创建容器之后获取 userService 得到的是同一个实例。而这个实例就是放入单例池中，单例池可以看成是一个 Map，保证 Bean 是单例。

## Spring 中的设计模式

**工厂设计模式**：Spring 使用工厂模式通过 `BeanFactory`、`ApplicationContext` 创建 Bean 对象。

**代理设计模式**：Spring AOP 功能的实现。

**单例设计模式**：Spring 中的 Bean 默认都是单例的。

**模板方法模式**：Spring 中 `jdbcTemplate`、`hibernateTemplate` 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。

**观察者模式**：各种监听器就是使用观察者模式。

**适配器模式**：Spring AOP 的增强或通知（Advice）使用到了适配器模式、Spring MVC 中也是用到了适配器模式适配 `Controller`。

**包装器设计模式**：构造数据库查询条件的 `Wrapper` 就是包装器模式。

。。。

## Spring 中 Bean 创建的生命周期

Spring 中一个 Bean 的创建大概分为以下几个步骤：

- 推断构造方法；
- 实例化；
- 依赖注入；
- 初始化前，处理 `@PostConstruct` 注解；
- 初始化，处理 `InitializingBean` 接口；
- 初始化后，进行 AOP；
- 放入单例池。

### Bean 初始化和实例化的区别是什么？

Bean 的实例化就是步骤 **UserService 类-->无参构造方法-->对象**，而初始化就是调用 `afterPropertiesSet()`（类需要实现`InitializingBean`接口）。

初始化过程其实就是对应 `afterPropertiesSet()` 方法，通过判断

```java
boolean isInitializingBean = (bean instanceof InitializingBean);
```

Bean 实现了 `InitializingBean` 则调用 `afterPropertiesSet()`。

```java
@Component
public class UserService implements InitializingBean {
    //想加入一个特定的User对象到UserService，此处通过初始化中注入
    private User admin;

    @Override
    public void afterPropertiesSet() throws Exception {
        //mysql ->管理员的信息->User对象->admin
    }
}
```

> 此处的初始化概念不同于 JVM 中的初始化。

### 初始化后是什么？

初始化后做的事情就是执行 AOP，生成代理对象，并将代理对象放入单例池中。

### Bean 对象和普通对象之间的区别是什么

Bean 对象本身就是普通对象，不过可能会经过初始化前和初始化后的增强。

### @PostConstruct 是如何工作的

创建 Bean 的过程：UserService 类-->无参构造方法-->对象-->依赖注入-->初始化前（`@PostConstruct`）-->初始化（`InitializingBean`）-->初始化后（AOP）-->放入 Map 单例池-->Bean 对象。

![image-20230619153337460](/markdown/image-20230619153337460.png)

```java
@Component
public class UserService {
    //想加入一个特定的User对象到UserService，此处是通过初始化前注入的
    private User admin;

    @PostConstruct
    public void a(){
        //mysql ->管理员的信息->User对象->admin
    }
}
```

通过 `@PostConstruct`，让 Bean 在初始化前进行增强。对应于创建 Bean 过程中的**初始化前**（调用 `@PostConstruct` 修饰的方法），再通过反射去调用方法。

```java
for (Method method : userService1.getClass().getDeclaredMethods()) {
    if (method.isAnnotationPresent(PostConstruct.class)) {
        method.invoke(userService1, null);
    }
}
```

### 构造方法推断

Spring 发现有多个构造方法的时候，**如果有无参构造方法则调用无参构造，如果没有无参构造，并且有参构造不止一个则会报错**。（例如不存在无参构造，但是存在多个不同参数的有参构造方法）

可以使用 `@Autowired` 注解默认使用的构造方法。

### 先 ByType 再 ByName

在单例池 Map中 会存在多个类型相同的 Bean。

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

会产生两个 UserService 类型的 Bean，但是名字不同。

依赖注入时，如果执行有参构造方法，发现 UserService 类型的 Bean 只有一个则直接注入（ByType），发现有多个则根据名称注入（ByName）。

```java
@Autowired 
public OrderService(UserService userService2){
	this.userService = userService2;
};//注入的是第二个名为“userService2”的Bean
```

`@Autowired` 只能根据类型注入的，可以使用 `@Qualifier("userService1")` 指定名称。


### SpringAOP 怎么工作的？

SpringAOP 是通过动态代理机制，如果 Bean 实现了接口，就会采用 JDK 动态代理来生成该接口的代理对象（实现类），如果没有实现接口，则通过 CGLIB 来生成当前类的一个代理对象（代理类继承目标类，子类）。

AOP 表示面向切面编程，是一个思想，AspectJ 就是其中的一种实现方式，会在编译器对类进行增强，需要使用 AspectJ 提供的编译器，提供了例如 `@Before`、`@After`、`@Around` 等注解，而 SpringAOP 是采用动态代理的方式实现 AOP，同样也使用了这些注解但是实现方式是完全不同的。

### Spring 为什么要使用三级缓存来解决循环依赖？

Bean 的创建生命周期

1. 创建普通对象；
2. 填充属性；
3. 填充其他属性；
4. 其他操作；
5. 初始化后；
6. 放入单例池。

三级缓存，就是三个 Map 集合。

**第一级缓存**：SingletonObjects，它用来存放经过完整 Bean 生命周期过程的单例 Bean 对象；

**第二级缓存**：EarlySingletonObjects，它用来保存哪些没有经过完整Bean生命周期的单例Bean对象，用来保证不完整的Bean也是单例；

**第三级缓存**：SingletonFactories，它保存的就是一个 lambda 表达式，它主要的作用就是 Bean 出现循环依赖后，某一个 Bean 到底会不会进行 AOP 操作。

::: info 循环依赖为什么用三级缓存

AService 和 BService 相互依赖。

如果采用以下方法：

创建 AService 普通对象之后放入二级缓存，注入 BService 时发现没有，转而去创建 BService 对象，BService 对象需要依赖注入 AService 对象，因此从二级缓存中拿去 AService 进行依赖注入，完成创建周期后将 BService 放入一级缓存中，返回 AService 的创建过程就能进行 BService 的依赖注入，之后 AService 
也完成创建周期。

**二级缓存就能解决普通对象的循环依赖问题，那三级缓存的作用？**

比如，可能 AService 会进行 AOP 操作，会创建 AServiceProxy 代理对象（**正常情况是在属性注入之后进行 AOP**），然后将代理对象放入单例池中，但是 BService 进行属性赋值，依赖注入的时候是把二级缓存中的 AService 的普通对象进行赋值，同时存在普通对象和代理对象违背了单例池规则。

解决办法就是在 AService 创建普通对象之后存入一个 Lambda 表达式到三级缓存中。

- 创建 AService 普通对象；
- 放入 Lambda 表达式到三级缓存中；
- 尝试注入 BService 发现没有；
- 创建 BService 普通对象，尝试注入 AService 属性；
- 发现一二级缓存都没有；
- 执行三级缓存中的 Lambda 表达式返回 AService 普通对象或者代理对象；
- 将返回的对象放入二级缓存中，称为早期 Bean 对象；
- 将二级缓存中的 AService 对象或者 AService 代理对象注入到 BService 中；
- BService 完成创建周期放入一级缓存；
- AService 普通对象注入一级缓存中的 BService 完整对象；
- 根据是否需要 AOP 决定最后放入单例池中的对象是普通对象还是代理对象。

![image-20230619212929209](/markdown/image-20230619212929209.png)

通过对注入属性添加 `@Lazy` 实现懒惰式加载，只有在调用方法用到属性的时候才会进行初始化，此时本类已经完成创建周期，因此不会出现循环依赖。

出现循环依赖属于代码设计问题，在 Spring 2.6.0 以及以后的版本会进行循环依赖检查，出现循环依赖则报错。

:::

### Spring 框架中的 Bean 是线程安全的吗？

Spring 本身没有提供 Bean 的线程安全策略，也就是说 Bean 是线程不安全的。

Bean 有多种作用域：

- **singleton**：容器中仅存在一个实例。
- **prototype**：为每个 Bean 请求创建实例。不存在线程安全问题。
- **request**：为每个 request 创建实例，请求完成之后失效。
- **session**：每次 session 才会创建实例，会话断开后失效。
- **global-session**：全局作用域。

默认是 **singleton** 但是对于开发中大部分的 Bean 是无状态的，因此不需要保证线程安全。如果要保证线程安全可以将作用域改为 **Prototype**，另外还能使用 `ThreadLocal` 解决线程安全问题。

> 无状态表示这个实例没有属性对象，不能保存数据，是不变的类，例如：Controller、Service、Dao。

### ApplicationContext 和 BeanFactory 有什么区别？

`BeanFactory` 是 Spring 中非常核心的组件，表示 Bean 工厂，可以生成和维护 Bean，而 `ApplicationContext` 继承了 `BeanFactory`，所以 `ApplicationContext` 拥有 
`BeanFactory` 的所有特点，也是一个 Bean 工厂，另外还继承了其他接口例如 `EnvironmentCapable`、`MessageSourse`、`ApplicationEventPublisher` 等接口，从而让 `ApplicationContext` 具有 `BeanFactory` 不具备的功能。

### Spring DI 方式

DI 的三种常见注入方式为：注解注入、构造器注入、setter 注入。

1. 注解注入：使用 `@Autowired` 或者 `@Resource` 注解实现注入，`@Autowired`：Spring 注解，默认是以 byType 的方式去匹配类型相同的 bean，可以结合 `@Qualifier` 注解根据 byName 方式匹配。`@Resource`
：java 的注解，默认以 byName 的方式去匹配与属性名相同的 bean 的 id，如果没有找到就会以 byType 的方式查找。

2. 构造器注入：使用有参构造器实现依赖注入，允许将应用组件实现为不可变的对象，确保依赖都不为空。由于添加了有参的构造函数，则无参的默认构造会失效，在依赖注入时必须要传入不为空的对象。之前如果有父类先初始化父类，然后自己的成员变量，最后才是构造方法，确保构造完成之后的对象是一个完全初始化的状态。同时构造器注入还避免了循环依赖，明确类的依赖关系。

3. setter 注入：在构造器上面添加 `@Autowired` 就是 setter 注入。

### Spring 中如果有两个相同 id 的 Bean 会报错吗？

1. 在 XML 文件中配置 Bean 时不能有相同的 id，在 Spring 启动时会去验证 id 唯一性，报错发生在文件解析为 `BeanDefinition` 对象的时候。
2. 在 Spring3.x 之后使用 @Bean 声明一个 Bean，此时如果有相同名字的 Bean，只会加载第一个。

### Spring 容器的启动流程

1. 创建 Spring 容器时会先进行扫描，得到所有的 `BeanDefinition` 对象，并放在一个 Map 中，其中包含了 Bean 的作用范围 `Scope`。
2. 然后筛选出非懒加载的单例 `BeanDefinition` 进行创建 Bean，对于多例 Bean 不需要在启动过程中取创建，而是每次获取的时候才会创建。
3. 利用 `BeanDefinition` 创建 Bean 就是 Bean 的创建生命周期，包括了合并 `BeanDefinition`、推断构造方法、实例化、属性填充、初始化前、初始化、初始化后等步骤，其中 AOP 发生在初始化后这个步骤。
4. 单例 Bean 创建完成之后 Spring 发布一个容器启动事件。
5. Spring 启动结束。

☀️详见 [手写SPRING源码](https://www.bilibili.com/video/BV1AM4y1c79v/?p=1&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

## Spring 事务

### 事务实现原理

事务 `Transactional` 本质也是通过代理对象调用普通对象的方法，并在前后做增强。

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

### Spring 事务传播机制

多个事务方法相互调用的时候，事务包含以下的转播机制。

- **REQUIRED**（默认）：如果当前没有事务则开启一个新的事务，如果存在事务则加入。
- **SUPPORTS**：如果存在事务则加入，否则以非事务模式运行。
- **MANDATORY**：如果存在事务则加入，如果不存在事务则抛出异常。
- **REQUIRED_NEW**：创建一个新的事务，如果已经存在事务，则将该事务挂起。
- **NEVER**：从来不使用事务。
- **NESTED**：如果存在事务则将当前事务嵌套进去，否则开启一个新的事务。

### Spring 事务失效的原因

1、**方法异常没有抛出**

```java
@Transactional
public void test(){
    try {
        System.out.println("Spring事务");//正常代码执行
        int a = 1 / 0;//异常代码  被捕获
    } catch(Exception e) {
        System.out.println("出现异常");//这里并没有抛出异常，而是自己处理了 因此Spring无法感知
    }
}
```

异常不能被 Spring 感知就不会执行 `rollBack`。

2、**使用 `@Transactional` 修饰的方法不是 `public` 方法**

通过实现类或者是父类生成代理对象，代理对象不能调用父类 `private` 方法。

3、**自身调用**

事务是通过代理对象调用才能生效，如果在一个类里面调用本类的方法就相当于 `this` 调用，事务不会生效。 

4、**propagation 事务传播机制设置错误**

如果内部方法的事务传播类型为不支持事务的传播类型，那么，内部方法的事务在 Spring 中会失效。

```java
@Transactional(propagation = Propagation.NEVER)
//如果有一个事务已经存在则会抛出异常
```

5、**数据库不支持事务**

6、**异常类型错误**

7、**没有被 Spring 管理**

### 同一个类中方法 A 中调用 B，事务会生效吗？

- 在同一个类中，如果在方法 A 中调用方法 B，无论 B 有没有添加 `@Transactional` 注解，A 事务都会生效，因为 B 中的异常会被 A 捕获从而导致事务回滚，但是 B 事务不会生效。
- 如果 A 没有添加 `@Transactional` 注解，在 A 中调用添加了注解的 B 方法，属于 `this` 调用，B 事务不会生效。

## SpringMVC

### SpringMVC 处理请求的底层原理

请求会被 `DispatcherServlet` 拦截，`DispatcherServlet` 结构如图。

![image-20230620221443613](/markdown/image-20230620221443613.png)


**SpringMVC 中的一次请求流程：**

1. 客户端（浏览器）发送请求， `DispatcherServlet` 拦截请求。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping` 。`HandlerMapping` 根据 uri 去匹配查找能处理的 `Handler`（也就是 `Controller` 控制器） ，并会将请求涉及到的拦截器和 `Handler` 一起封装。
3. `DispatcherServlet` 调用 `HandlerAdapter` 适配器执行 `Handler` 。
4. `Handler` 完成对用户请求的处理后，会返回一个 `ModelAndView` 对象给 `DispatcherServlet`，`ModelAndView` 包含了数据模型以及相应的视图的信息。`Model` 是返回的数据对象，`View` 是个逻辑上的 `View`。
5. `ViewResolver` 会根据逻辑 `View` 查找实际的 `View`。
6. `DispaterServlet` 把返回的 `Model` 传给 `View`（视图渲染）。
7. 把 `View` 返回给请求者（浏览器）。

![image-20230620223832571](/markdown/image-20230620223832571.png)

### SpringMVC 的核心组件有哪些？

- `DispatcherServlet`：**核心的中央处理器**，负责接收请求、分发、并给予客户端响应。
- `HandlerMapping`：**处理器映射器**，根据 uri 去匹配查找能处理的 `Handler`，并会将请求涉及到的拦截器和 `Handler` 一起封装，`Handler` 其实就是 `Controller`。
- `HandlerAdapter`：**处理器适配器**，根据 `HandlerMapping` 找到的 `Handler`，适配执行对应的 `Handler`。
- `Handler`：**请求处理器**，处理实际请求的处理器。
- `ViewResolver`：**视图解析器**，根据 `Handler` 返回的逻辑视图/视图，解析并渲染真正的视图，并传递给 `DispatcherServlet` 响应给客户端。

### SpringMVC 零配置

```java
public class MyWebApplicationInitializer implements WebApplicationInitializer {
    @Override
    public void onStartup(ServletContext servletContext) throws ServletException {
        AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
        context.register(AppConfig.class);
        DispatcherServlet servlet = new DispatcherServlet(context);
        ServletRegistration.Dynamic registration = servletContext.addServlet("app", servlet);
        registration.addMapping("/app/*");
    }
}
```

直接使用类也能完成配置文件中类似的配置；

创建容器，创建 `DispatcherServlet`，并将容器放入，创建 `Servlet`，并添加 `Servlet` 匹配路径。

### 统一异常处理

使用到 `@ControllerAdvice` + `@ExceptionHandler` 这两个注解实现统一异常处理。

```java
@ControllerAdvice
@ResponseBody
public class GlobalExceptionHandler {

    @ExceptionHandler(BaseException.class)
    public ResponseEntity<?> handleAppException(BaseException ex, HttpServletRequest request) {
        //......
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorReponse> handleResourceNotFoundException(ResourceNotFoundException ex, HttpServletRequest request) {
        //......
    }
}
```

这种异常处理方式下，会给所有或者指定的 `Controller` 织入异常处理的逻辑（AOP），当 `Controller` 中的方法抛出异常的时候，由被 `@ExceptionHandler` 注解修饰的方法进行处理。

## SpringBoot

### SpringBootApplication 注解的作用？

`@SpringBootApplication` 是一个复合注解：

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
public @interface SpringBootApplication {
    
}
```

添加了`@SpringBootApplication`，相当于添加了 `@SpringBootConfiguration`、`@EnableAutoConfiguration`、`@ComponentScan` 三个注解。

- `@SpringBootConfiguration`：相当于注解 `@Configuration` 表示这是一个配置类。

- `@EnableAutoConfiguration`：这个注解会负责进行自动配置类的导入，就是将项目中的自动配置类导入到 Spring 容器中，从而得到解析。

  > 此注解内部有 `@Import({AutoConfigurationImportSelector.class})` 注解，用来扫描项目中的自动配置类（spring.factories 中配置的自动配置类）并将其返回为自动配置类的名字 `String[]` 给 Spring 容器进行加载。

- `@ComponentScan`：Spring 容器会进行扫描，默认扫描路径就是这个类所在的包路径。作用一：扫描含有 `@Component`，`@Controller`，`@Service` 和 `@Repository` 的类，并将其注入到 Spring 容器中。作用二：扫描含有 `@Configuration` 的类，并使其生效。

### SpringBoot 的约定优于配置是什么意思？

约定优于配置是一种软件设计的范式，它的核心思想是减少软件开发人员对于配置项的维护，从而让开发人员更加聚焦在业务逻辑上。

SpringBoot 约定优于配置的体现有很多，例如：
- SpringBootStarter 启动依赖，能帮助我们管理所有 jar 包版本。
- SpringBoot 的自动装配机制中，通过扫描约定路径下的 spring.factories 文件来识别配置类，实现 Bean 的自动装配。
- 如果当前的应用依赖了 SpringMVC 相关的 jar 包，则会自动内置 Tomcat 容器来运行 web 应用，不需要再去单独部署。
- 默认加载的配置文件 application.properties。

### SpringBoot 中的 spring.factories 文件有什么作用？

`spring.factories` 是 SpringBoot SPI 实现的核心，SPI 机制表示扩展机制，所以 `spring.factories` 就是对 SpringBoot 进行扩展的，比如要添加 Listener，只需要在这个文件中添加类路径名。

SpringBoot 在启动的过程中，会找出项目中所有的 `spring.factories` 文件，从而向 Spring 容器中去添加各种 `spring.factories` 中指定的组件、配置类等，使得对 SpringBoot 的扩展的变得很容易。

### SpringBoot 的启动流程

1. **加载主要配置类**：
   Spring Boot 的入口是一个主要的配置类，通常是带有 `@SpringBootApplication` 注解的类。在启动过程中，Spring Boot 首先会加载这个配置类。

2. **创建 Spring 应用上下文**：
   Spring Boot 使用 Spring 的核心容器，即应用上下文（`Application Context`）来管理和组织组件。在启动过程中，Spring Boot 会创建一个根应用上下文，并将主要配置类加载到这个应用上下文中。

3. **执行自动配置**：
   Spring Boot 的核心功能之一是自动配置（`Auto-Configuration`），它通过条件化配置来根据应用的依赖和配置来自动装配和配置各种功能和组件。在启动过程中，Spring Boot 会根据配置和类路径上的依赖，自动配置各种功能，如数据库连接、Web MVC、安全性等。

4. **执行启动器（Starters）**：
   Spring Boot 提供了一系列的启动器，它们是一组预配置的依赖关系，可以快速启动特定类型的应用。启动器通过自动配置和依赖管理来简化应用的搭建和配置。在启动过程中，Spring Boot 会根据应用的类型和配置，自动加载适当的启动器。

5. **启动 Web 容器**：
   如果应用是一个 Web 应用，Spring Boot 会自动启动一个嵌入式的 Web 容器（如 Tomcat、Jetty 等），并将应用部署到该容器中。

6. **运行应用**：
   一切就绪后，Spring Boot 会开始运行应用。它会触发各种生命周期事件，调用初始化方法、执行业务逻辑等。

### 自动装配原理

1. 引入 Starter 启动依赖组件的时候，这个组件里面必须要包含 `@Configuration` 配置类，在这个配置类里面通过 `@Bean` 注解声明需要装配到 IOC 容器的 Bean 对象。
2. 这个配置类是放在第三方的 jar 包里面，然后通过 SpringBoot 中的约定优于配置思想，把这个配置类的全路径放在 classpath:/META-INF/spring.factories 文件 中。这样 SpringBoot 就可以知道第三方 jar 包里面的配置类的位置，这个步骤主 要是用到了 Spring 里面的 `SpringFactoriesLoader` 来完成的。
3. SpringBoot 拿到所第三方 jar 包里面声明的配置类以后，再通过 Spring 提供的 `ImportSelector` 接口，实现对这些配置类的动态加载。

> ⚡ 可以再向 @EnableAutoConfiguration 这个注解部分进行延伸。

### 实现一个 Stater

1. 引入依赖

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-autoconfigure</artifactId>
        <version>2.0.3.RELEASE</version>
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-configuration-processor</artifactId>
        <version>2.1.3.RELEASE</version>
    </dependency>
</dependencies>
```

2. 写一个 TestBen，装载信息。

```java
public class TestBean {
    private String msg;
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
}
```

3. 写一个 Properties 类。

```java
@ConfigurationProperties(prefix = "hello")
public class HelloServiceProperties {
    private static final String MSG="hello world";
    private String msg=MSG;
    public static String getMSG() {
        return MSG;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
}
```

4. 写一个自动配置类 MyAutoConfiguration

```java
@Configuration
@ConditionalOnClass({TestBean.class})//判断当前classpath下是否存在指定类，若是则将当前的配置装载入spring容器
@EnableConfigurationProperties(HelloServiceProperties.class)//激活自动配置（指定文件中的配置）
public class MyAutoConfiguration {
    @Autowired
    HelloServiceProperties helloServiceProperties;//注入测试的配置信息类
    @Bean
    @ConditionalOnMissingBean(TestBean.class) //当前上下文中没有TestBean实例时创建实例
    public TestBean getTestService(){
        TestBean testBean=new TestBean();
        testBean.setMsg(helloServiceProperties.getMsg());
        return testBean;
    }
}
```

5. 新建 `spring.factories` 文件。

在 `resources` 文件夹下新建文件夹 `META-INF/spring.factories`，将上面的自定义配置类 MyAutoConfiguration的全路径名 + 类名配置到该文件中（遵循 `spring.factories` 的格式），这样随着项目的启动就可以实现自动装配。

```yaml
# Auto Configure
org.springframework.boot.autoconfigure.EnableAutoConfiguration=com.zyl.tomcat.bean.MyAutoConfiguration
```

6. `package install` 进行打包，这样就能在其他项目中引用这个 starter。

### 自定义注解
```java
// 元注解，例如生命周期和作用目标
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)

public @interface Component {
    String value() default "";
}

```
后续过程中如果要获得用注解标识的类的相关信息。

```java
// 根据全类名获取对应的字节码
Class<?> clazz = classLoader.loadClass(className);

if (clazz.isAnnotationPresent(Component.class)) {
    Component componentAnnotation = clazz.getDeclaredAnnotation(Component.class);
    // 获取注解中添加的 value 属性
    String beanName = componentAnnotation.value();
    //后续业务操作
}

```
