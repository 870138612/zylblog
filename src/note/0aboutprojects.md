---
title: 关于项目
icon: biji1
star: true
category:
  - 笔记
tag:
  - 简历
  - 项目
---

八股经历大约两个月终于是啃（抄）完了，该换点活的东西看看了，以下就针对三个项目进行复习。

包含[谷粒商城](https://www.bilibili.com/video/BV1np4y1C7Yf/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[三更博客](https://www.bilibili.com/video/BV1hq4y1F7zk/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)。（点击跳转B站网课）

<!-- more -->

## 谷粒商城

项目整体较为复杂，项目中可能会涉及到的疑问点参考诚哥的博客文章[秋招笔记整理](https://www.jcwang.top/2022/10/14/%E6%88%91%E7%9A%84%E7%A7%8B%E6%8B%9B%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86/)。

首先是简历部分：

```
恐龙商城                                                                  2022.3-2022.8
springcloud，springboot，mybatis，redis，rabbitmq，sentinel，nginx, docker
商城页面由Nginx代理实现动静分离，请求负载均衡，拆分为网关，订单，秒杀等微服务。
实现单点登录，商品缓存快速查询，秒杀遵从服务单一职责，独立部署，定时上架，库存预热快速扣减，秒杀连接加密，恶意请求拦截，流量错峰，后端限流，队列削峰。
● 网关微服务实现集群状态下的负载均衡，使得来自同一个主域名的不同请求分发到对应的微服务。
● Redis存储Token，完成多微服务下的用户登录验证和状态刷新。
● SpringSchedule定时任务上架秒杀商品。
● 前端限流，后端验证登录，Sentinel框架熔断降级的流量错峰保证在高流量的情况下保持项目稳定。
● Redis验证秒杀中的一人一单，信号量Semephore实现库存的快速扣减，解决并发安全问题。
● RabbitMq完成秒杀订单创建，实现队列削峰，减少数据库压力，采用手动ack确保订单创建成功。
● RabbitMq延时队列模拟订单过期，过期订单的解锁订单和解锁库存通过RabbitMq消息队列实现。
```

下面逐句进行分析。

## 介绍下项目的技术选型

项目中使用到的技术栈为**springcloud**，**springboot**，**mybatis**，**redis**，**rabbitmq**，**sentinel**，**nginx**，**docker**，使用**springcloud（Nacos**作为注册中心和配置中心，简化多服务器的管理，并将项目拆分为多个微服务（模块），微服务之间使用**OpenFeign**调用，**mybatis**作为数据库框架，**redis**作为缓存，分布式锁，**rabbitmq**用来队列削峰，**sentinel**用来熔断降级限流，主要用在秒杀部分，**nginx**用来动静分离，**docker**容器化部署，**zipkin**用作链路追踪，分析请求到每个模块的运行耗时。

## 商城页面由Nginx代理实现动静分离，请求负载均衡

### Nginx反向代理在计算机网络的第几层？

Nginx反向代理包含7层反向代理（应用层）和4层反向代理（传输层）两种。

7层代理是写在http模块中的，而4层代理是写在stream模块中，与http模块并列。

4层代理是基于**ip和端口**转发的，基于**TCP/UDP**协议。

7层代理可以 基于**url和ip以及cookie和请求头**进行分流。

**七层代理写法：**

```nginx
http {
    # 写在http模块中基于内容和协议的交换 nginx代理服务器其实建立了两次TCP连接
    upstream web {
        server 192.168.1.100:80;
        server 192.168.1.101:80;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://web;              
            root html;
            index index.html index.htm;
        } 
    }
}
```

**四层代理写法：**

```nginx
stream {
    # 写在stream中 基于ip和端口进行转发 实际上是修改了请求头中的目标ip和端口
	server {
		listen 30028;
        proxy_pass appserver;
	}
    upstream appserver {
        server 10.0.0.12:8080;
        server 10.0.0.13:8080;
    }
}
```

4层代理设备将client发送报文中的目标地址（原来为4层代理的ip地址）修改为目标内部服务器的地址，这样client就可以和server建立TCP连接并发送数据。
在stream中，server一定要配置port，proxy_pass配置行直接加集群名，**不能加http:// **。

> 在本项目中，upstream使用的是七层代理的配置方法。

### Nginx的负载均衡算法有哪些？

详见☀️[Nginx负载均衡](https://ylzhong.top/middleware/1nginx.html#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1)

负载均衡策略有：轮训，最小连接，ip_hash，hash，权重，随机。

### Nginx动静分离

项目编译完成之后会产生一些不会发生变化的静态文件，放入到nginx的html目录下，通过nginx配置进行获取这些静态文件，后端tomcat服务器应该用来处理请求而不是返回这些静态数据。开启nginx缓冲（buffer）之后还能解决高并发下的连接积压问题（server端到nginx端的连接）。

### Nginx反向代理怎么配置的？反向代理跟正向代理的区别是什么？nginx可以配置正向代理吗？

详见☀️[正向代理和反向代理](https://ylzhong.top/middleware/1nginx.html#%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)

- 反向代理通过在location里添加`proxy_pass`进行请求代理

```nginx
http {
    # 写在http模块中基于内容和协议的交换 nginx代理服务器其实建立了两次TCP连接
    upstream web {
        server 192.168.1.100:80;
        server 192.168.1.101:80;
    }
    server {
        listen 80;
        location / {
            proxy_pass http://web;              
            root html;
            index index.html index.htm;
        } 
    }
}
```

- 正向代理通过客户端代理转发请求，例如VPN。反向代理通过服务端代理转发请求例如Nginx反向代理。

- Nginx可以配置正向代理，例如A能访问外网，BCD不能访问外网但是能访问A，则可以通过正向代理将请求代理转发给A进行外网访问。（类似VPN代理模式）

## 拆分为网关，订单，秒杀等微服务

### 分微服务的原则是什么？

1. **单一职责原则**：每个微服务应该只负责一个特定的业务功能。例如网关微服务只用来做请求转发，秒杀微服务只做秒杀，即使因为高流量导致秒杀微服务宕机也不会影响到正常的订单微服务。

2. **业务领域驱动划分**：根据应用程序的业务需求和领域知识来对服务进行划分。同上，每一个微服务需要做的业务清晰明了。

3. **最小可行服务**：在进行微服务划分时，应该尽量保持服务的粒度足够小，以降低系统复杂性和提高灵活性。拆分成微服务之后，各个微服务之间的调用变得更加灵活。

4. **高内聚低耦合**：微服务划分应该追求高内聚低耦合的原则。各个微服务之间的耦合度应该尽可能的小。

5. **数据自治原则**：每个微服务应该对其所使用的数据有完全的控制权。每一个微服务都对自己所属的数据库架构有完全控制权。

6. **技术多样性**：微服务架构允许使用不同的技术栈来实现不同的服务。

## 实现单点登录

### 单点登录怎么实现的？

使用SpringSecurity框架实现。

首先需要考虑用户的数据应该存储在哪。

- 如果使用session保存用户数据则会导致其他的服务器无法获取用户数据。

- 如果使用cookie存储用户数据，由于cookie存储在客户端，容易篡改，不安全。

- 采用nginx的hash一致性负载均衡算法，让所有来源相同的请求定位到同一个服务器，但是如果服务器宕机，则数据会丢失，不可行。

本项目使用`Redis`进行用户数据统一存储。添加依赖之后将session存储方式改为redis。

> 项目课程中使用SpringSession进行登录数据存储，后续改为SpringSecurity框架实现认证授权功能。

在配置类中添加了`jwtAuthenticationTokenFilter(OncePerRequestFilter的实现类，每次请求都会拦截)`，和`UsernamePasswordAuthenticationFilter.class`。

其中**登录的密码查询**是需要自己去实现接口`UserDetailsService`，并重写方法。

```java
@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private UserMapper userMapper;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //根据用户名查询用户信息
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getUserName, username);
        User user = userMapper.selectOne(wrapper);
        //判断是否查到用户 如果没有查到则抛出异常
        if (Objects.isNull(user)) {
            throw new RuntimeException("用户不存在");
        }
        //TODO 查询权限信息封装
        return new LoginUser(user);
    }
}
```

返回值为实现接口`UserDetails`的LoginUser类。

```java
UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword());
        Authentication authenticate = authenticationManager.authenticate(authenticationToken);//通过UserDetails实现类查询用户账号和密码，并进行认证
```

密码编码器：

```java
 @Bean
 public PasswordEncoder passwordEncoder(){
 	return new BCryptPasswordEncoder();
 }
```

认证整体流程：

1. 用户提交用户名、密码被`SecurityFilterChain`中的 `UsernamePasswordAuthenticationFilter`过滤器获取到， 封装为请求`Authentication`，通常情况下是`UsernamePasswordAuthenticationToken`这个实现类。

2. 然后过滤器将`Authentication`提交至认证管理器（`AuthenticationManager`）进行认证，通过`UserDetailsService`实现类获取包含用户账号密码的`UserDetails`实现类 ，密码对比过`PasswordEncoder`实现类`BCryptPasswordEncoder`完成，认证成功则返回`Authentication`，否则返回空。
3. 认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

4. `SecurityContextHolder` 安全上下文容器将第2步填充了信息的 `Authentication` ，通过 `SecurityContextHolder.getContext().setAuthentication(…)`方法，设置到其中。

`SecurityContextHolder`可以看成一个`ThreadLocal`用来在一次会话中共享数据。

上述流程在分布式下有时候不能保持登录状态，可以将用户数据保存至Redis中。

**分布式下的用户登录状态保持：**

第二次会话时开启新的线程就会导致不能获取之前的用户数据，不能保持登录状态。

在第二步认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

添加`OncePerRequestFilter`过滤器，每次请求都会被拦截。如果请求中没有携带token则表示是不需要登录的请求，直接放行，携带了token通过JWT工具类进行解密获得userId，如果解密为有效的userId，则可以作为key（`"LOGIN:"+userId`）去Redis中找到用户数据，并添加到`SecurityContextHolder`中，这样只要客户端保存正确的token就能保持登录状态。

登录状态续期可以通过给Redis添加新的过期时间进行续期。

### 如果想要用户仅仅在一段时间内免登录怎么办？

在`OncePerRequestFilter`过滤器添加Redis数据的时候加上过期时间，在通过key（`"LOGIN:"+userId`）获取Redis数据失败的时候则认为是用户的免登录时间已经过期。（用户数据在Redis中过期，则需要重新登录并将用户数据保存至Redis，返回新的Token）

### JWT（Token）如何生成的？

详见☀️[15分钟学会JWT的使用](https://www.bilibili.com/video/BV1cK4y197EM/?spm_id_from=333.788.recommend_more_video.1&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

使用JJWT生成JWT。

JWT由三个部分构成，用`.`拼接：

- Header，包含类型和加密算法，此部分通过BASE64加密之后得到第一个部分（需要一个Key作为秘钥）。

  ```json
  {
  	"typ":"jwt,
      "alg":"HS256"
  }
  ```

- Payload，载荷，用于存放主要信息，通过BASE64加密之后得到TOKEN的第二个部分。

  ```json
  {
  	"sub":"123456",
  	"name":"zyl",
  }
  ```

- Signature，通过对Header和Payload进行再次加密得到的数据再通过HS256加盐得到最终的Signature。

  ```java
  String encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
  String signature = HMACSHA256(encodedString, secret);
  ```

​	最后HS256加盐算法中的秘钥也可以通过BASE64加密获得。

