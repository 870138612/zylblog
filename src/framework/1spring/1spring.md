---
title: SpringMVC、SpringBoot
icon: page
category:
  - 框架
tags:
  - Spring
  - SpringWeb  
  - SpringBoot
  - 八股
---

## SpringMVC

### SpringMVC处理请求的底层原理

请求会被`DispatcherServlet`拦截，`DispatcherServlet`结构如图。

![image-20230620221443613](/markdown/image-20230620221443613.png)

<!-- more -->

**SpringMVC中的一次请求流程：**

1. 客户端（浏览器）发送请求， `DispatcherServlet`拦截请求。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping` 。`HandlerMapping` 根据 uri 去匹配查找能处理的 `Handler`（也就是我们平常说的 `Controller` 控制器） ，并会将请求涉及到的拦截器和 `Handler` 一起封装。
3. `DispatcherServlet` 调用 `HandlerAdapter`适配器执行 `Handler` 。
4. `Handler` 完成对用户请求的处理后，会返回一个 `ModelAndView` 对象给`DispatcherServlet`，`ModelAndView`包含了数据模型以及相应的视图的信息。`Model` 是返回的数据对象，`View` 是个逻辑上的 `View`。
5. `ViewResolver` 会根据逻辑 `View` 查找实际的 `View`。
6. `DispaterServlet` 把返回的 `Model` 传给 `View`（视图渲染）。
7. 把 `View` 返回给请求者（浏览器）。

![image-20230620223832571](/markdown/image-20230620223832571.png)

### SpringMVC的核心组件有哪些？

- `DispatcherServlet`：**核心的中央处理器**，负责接收请求、分发、并给予客户端响应。
- `HandlerMapping`：**处理器映射器**，根据uri去匹配查找能处理的`Handler`，并会将请求涉及到的拦截器和`Handler`一起封装，`Handler`其实就是`Controller`。
- `HandlerAdapter`：**处理器适配器**，根据`HandlerMapping`找到的`Handler`，适配执行对应的`Handler`。
- `Handler`：**请求处理器**，处理实际请求的处理器。
- `ViewResolver`：**视图解析器**，根据`Handler`返回的逻辑视图/视图，解析并渲染真正的视图，并传递给`DispatcherServlet`响应给客户端。

### SpringMVC零配置

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

创建容器，创建`DispatcherServlet`，并将容器放入，创建`Servlet`，并添加`Servlet`匹配路径。

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

这种异常处理方式下，会给所有或者指定的 `Controller` 织入异常处理的逻辑（AOP），当 `Controller` 中的方法抛出异常的时候，由被`@ExceptionHandler` 注解修饰的方法进行处理。

## SpringBoot

### SpringBootApplication注解的作用？

`@SpringBootApplication`是一个复合注解：

```java
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
public @interface SpringBootApplication {
    
}
```

添加了`@SpringBootApplication`，相当于添加了`@SpringBootConfiguration`、`@EnableAutoConfiguration`、`@ComponentScan`三个注解。

- `@SpringBootConfiguration`：相当于注解`@Configuration`表示这是一个配置类。

- `@EnableAutoConfiguration`：这个注解会负责进行自动配置类的导入，就是将项目中的自动配置类导入到Spring容器中，从而得到解析。

  > 此注解内部有`@Import({AutoConfigurationImportSelector.class})`注解，用来扫描项目中的自动配置类并将其返回为自动配置类的名字`String[]`给Spring容器进行加载。

- `@ComponentScan`：Spring容器会进行扫描，默认扫描路径就是这个类所在的包路径。

### SpringBoot中的spring.factories文件有什么作用？

spring.factories是SpringBoot SPI实现的核心，SPI机制表示扩展机制，所以spring.factories就是对SpringBoot进行扩展的，比如要添加Listener，只需要在这个文件中添加类路径名。

SpringBoot在启动的过程中，会找出项目中所有的spring.factories文件，从而向Spring容器中去添加各种spring.factories中指定的组件、配置类等，使得对SpringBoot的扩展的变得很容易。

### SpringBoot的启动流程

1. **加载主要配置类**：
   Spring Boot 的入口是一个主要的配置类，通常是带有 `@SpringBootApplication` 注解的类。在启动过程中，Spring Boot 首先会加载这个配置类。

2. **创建 Spring 应用上下文**：
   Spring Boot 使用 Spring 的核心容器，即应用上下文（`Application Context`）来管理和组织组件。在启动过程中，Spring Boot 会创建一个根应用上下文，并将主要配置类加载到这个应用上下文中。

3. **执行自动配置**：
   Spring Boot 的核心功能之一是自动配置（`Auto-Configuration`），它通过条件化配置来根据应用的依赖和配置来自动装配和配置各种功能和组件。在启动过程中，Spring Boot 会根据配置和类路径上的依赖，自动配置各种功能，如数据库连接、Web MVC、安全性等。

4. **执行启动器（Starters）**：
   Spring Boot 提供了一系列的启动器，它们是一组预配置的依赖关系，可以快速启动特定类型的应用。启动器通过自动配置和依赖管理来简化应用的搭建和配置。在启动过程中，Spring Boot 会根据应用的类型和配置，自动加载适当的启动器。

5. **启动 Web 容器**：
   如果应用是一个 Web 应用，Spring Boot 会自动启动一个嵌入式的 Web 容器（如Tomcat、Jetty等），并将应用部署到该容器中。

6. **运行应用**：
   一切就绪后，Spring Boot 会开始运行应用。它会触发各种生命周期事件，调用初始化方法、执行业务逻辑等。
