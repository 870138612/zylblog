---
title: 简历项目详解
icon: biji1
star: 1
category:
  - 笔记
tag:
  - 简历
  - 项目
---

八股经历大约两个月终于是啃（抄）完了，得上点硬菜了，以下针对我简历上的三个项目进行复习。

包含[谷粒商城](https://www.bilibili.com/video/BV1np4y1C7Yf/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[三更博客](https://www.bilibili.com/video/BV1hq4y1F7zk/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)。（点击跳转B站网课）

<!-- more -->

# 谷粒商城

项目整体较为复杂，项目中可能会涉及到的疑问点参考诚哥的博客文章[秋招笔记整理](https://www.jcwang.top/2022/10/14/%E6%88%91%E7%9A%84%E7%A7%8B%E6%8B%9B%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86/)。

首先是简历部分：

```
恐龙商城                                                                  2022.3-2022.8
springcloud，springsecurity，springboot，mybatis，redis，rabbitmq，sentinel，nginx, docker
商城页面由Nginx代理实现动静分离，请求负载均衡，拆分为网关，订单，购物车，秒杀等微服务。
实现单点登录，商品缓存快速查询，订单创建幂等性。秒杀遵从服务单一职责，独立部署，定时上架，库存预热快速扣减，秒杀连接加密，恶意请求拦截，流量错峰，后端限流，队列削峰。
● 网关微服务实现集群状态下的负载均衡，使得来自同一个主域名的不同请求分发到对应的微服务。
● Redis存储Token，完成多微服务下的用户登录验证和状态刷新。
● SpringSchedule定时任务上架秒杀商品。
● 前端限流，后端验证登录，Sentinel框架熔断降级的流量错峰保证在高流量的情况下保持项目稳定。
● Redis验证秒杀中的一人一单，信号量Semephore实现库存的快速扣减，解决并发安全问题。
● RabbitMq完成秒杀订单创建，实现队列削峰，减少数据库压力，采用手动ack确保订单创建成功。
● RabbitMq延时队列模拟订单过期，过期订单的解锁订单和解锁库存通过RabbitMq消息队列实现。
```

> 为什么叫做恐龙商城？因为诚哥写的就是恐龙商城，哥们照抄的✨。

下面逐句进行分析。

## 介绍下项目的技术选型

项目中使用到的技术栈为**springcloud**，**springboot**，**mybatis**，**redis**，**rabbitmq**，**sentinel**，**nginx**，**docker**，使用**springcloud（Nacos**作为注册中心和配置中心，简化多服务器的管理，并将项目拆分为多个微服务（模块），微服务之间使用**openFeign**调用，**mybatis**作为数据库框架，**redis**作为缓存，分布式锁，**rabbitmq**用来队列削峰，**sentinel**用来熔断降级限流，主要用在秒杀部分，**nginx**用来动静分离，负载均衡，**docker**容器化部署，**zipkin**用作链路追踪，分析请求到每个模块的运行耗时，另外还用到了**jmeter**进行压力测试，**visualVM**查看堆内存情况。

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

1. 用户提交用户名、密码被`SecurityFilterChain`中的 `UsernamePasswordAuthenticationFilter`过滤器获取到， 封装为`Authentication`，通常情况下是`UsernamePasswordAuthenticationToken`这个实现类。

2. 然后过滤器将`Authentication`提交至认证管理器（`AuthenticationManager<<interface>>`，实现类为`ProviderManager`，内部包含`DaoAuthenticationProvider`用来查找用户数据并认证）进行认证`authenticationManager.authenticate(authenticationToken)`，通过`UserDetailsService`实现类获取包含用户账号密码的`UserDetails`实现类 ，密码加密解密通过`PasswordEncoder`实现类`BCryptPasswordEncoder`完成，认证成功则返回`Authentication`，否则返回空。通过`.getPrincipal`从`Authentication`中获取用户数据（`UserDetails`的实现类）。
3. 认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

4. `SecurityContextHolder` 安全上下文容器将第2步填充了信息的 `Authentication` ，通过 `SecurityContextHolder.getContext().setAuthentication(…)`方法，设置到其中。

`SecurityContextHolder`可以看成一个`ThreadLocal`用来在一次会话中共享数据。

上述流程在分布式下有时候不能保持登录状态，可以将用户数据保存至Redis中。

### 分布式下的用户登录状态保持

第二次会话时开启新的线程就会导致不能获取之前的用户数据，不能保持登录状态。

可将Redis作为分布式下用户数据的存储介质。

在第二步认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

添加`OncePerRequestFilter`过滤器，需要重写`doFilterInternal`方法，每次请求都会被拦截。如果请求中没有携带token则表示是不需要登录的请求，直接放行，携带了token通过JWT工具类进行解密获得userId，如果解密为有效的userId，则可以作为key（`"LOGIN:"+userId`）去Redis中找到用户数据，并添加到`SecurityContextHolder`中，这样只要客户端保存正确的token就能保持登录状态。

登录状态续期可以通过给Redis添加新的过期时间进行续期。

### 项目中用到了哪些SpringSecurity过滤器？

 `UsernamePasswordAuthenticationFilter`用来做用户认证，`OncePerRequestFilter`用来做请求拦截并根据情况做业务处理之后放行。

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

​	最后HS256加盐算法中的秘钥`secret`也可以通过BASE64加密获得。

## 商品缓存快速查询

项目中使用`SpringCache`作为缓存框架。使用`@Cacheable`快速添加返回结果到缓存。

### 数据更新之后对缓存如何操作？缓存一致性解决办法？

缓存一致性的解决方案有 **双写模式** 和 **失效模式**。

- **双写模式**：对数据库进行数据修改之后，会接着把新数据写入Redis。

- **失效模式**：对数据库进行数据修改之后，会让旧的缓存数据失效，`SpringCache`中的`@CacheEvict`执行缓存失效。

双写模式下如果有两个数据同时写数据库，执行流程：1修改数据库，2修改数据库，2更新缓存，1更新缓存，这样会导致现在的缓存数据是1修改的数据，并不是后执行的2修改的数据，存在暂时脏数据问题，需要等到缓存失效之后才能得到最新的正确数据。

![image-20230628213424542](/markdown/image-20230628213424542.png)

失效模式下如果有三个进程，1修改数据库，1删除缓存，3查询缓存没有，3读数据库，2修改数据库，2删除缓存，3更新缓存，此时缓存中为旧数据，同样存在脏数据问题。

![image-20230628214754324](markdown/image-20230628214754324.png)

两种方式都会存在脏数据问题，只能通过添加过期时间缓解，对于经常变化的数据就应该直接查询数据库，放入缓存的数据应该是变化度不高的数据。

如果硬要解决缓存一致性问题，可以在并发读写，写写下加锁，读读不需要添加锁。（不建议）

::: info 不要过度设计

缓存只要保证最终一致性不需要强一致性，为了强一致性牺牲可用性不划算。

:::

### 缓存穿透，缓存雪崩，缓存击穿问题

详见☀️[缓存穿透，缓存雪崩，缓存击穿](https://ylzhong.top/database/2redis/1redis.html#%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F-%E9%9B%AA%E5%B4%A9-%E5%87%BB%E7%A9%BF)

- 缓存穿透：查询空数据，解决：缓存空数据并添加过期时间、布隆过滤器。
- 缓存雪崩：大量的key失效，解决：添加随机过期时间。
- 缓存击穿：热点key失效，解决：使用同步锁控制只能有一个线程去数据库中查询数据并更新缓存，秒杀场景下商品的过期时间应该在秒杀场结束之后。

```java
@Cacheable(value = {"category"}, key = "#root.method.name",sync = true)
//默认是没有加锁的  所以没有解决缓存击穿问题 使用sync=true 进行加锁  本地锁
```

常规数据使用`SpringCache`可以满足大部分要求。

## 订单创建幂等性

### 订单创建的幂等性如何实现？

当用户点击多次提交订单的时候应该保证只会产生一个唯一的订单，也就是接口的幂等性。

实现方式为从购物车页面点击确认订单的时候会在后端生成一个**防重令牌**，令牌的Key和`memberId`有关，值为随机生成的UUID，并将令牌放入Redis中，返回令牌到前端。

此时前端提交订单的时候就会将令牌进行提交，后端从数据库中获取对应的令牌，如果比对成功则创建订单并将令牌删除，否则不会创建订单。这样就保证了在确认页面只有第一次点击订单能创建成功。

![image-20230630165509583](/markdown/image-20230630165509583.png)

## 秒杀遵从服务单一职责，独立部署，定时上架

### 秒杀的流程是啥样的？

- 秒杀开始前通过`@Scheduled`进行定时上架商品，查询近期的秒杀场次，保存至Redis用于后续秒杀的时间和场次合法性校验，查询SKU信息保存至Redis加速查询，同时通过UUID生成随机码保存到SKU详情数据。

- 秒杀商品的信号量key为`SKU_STOCK_SEMAPHORE + token`，token是生成的SKU随机码，通过`semaphore.trySetPermits(seckillSkuVo.getSeckillCount())`设置对应SKU信号量的许可证数量（秒杀库存数量）。

- 秒杀开始判断用户是否登录，登录的话进行合法性校验，包含当前所处时间是否处于秒杀时间，检验随机码是否正确（在秒杀开始时返回到前端的随机码，用于防止恶意请求），验证购买数量是否超额。

- 合法性校验通过之后进行占位（防止一个用户并发秒杀），使用`SETNX`进行占位（原子操作），key为`userId+'_'+skuId`，同时还需要添加过期时间，过期时间为场次结束时间-当前时间，让一个用户只能对同一个商品秒杀一次。**遵从请求的幂等性**。
- `boolean b = semaphore.tryAcquire(num, 100, TimeUnit.MILLISECONDS)`如果获取信号量成功则表示秒杀成功，将**OrderSn**，**UserId**，**SkuId**，**SeckillSkuPrice**，**Num**，**PromotionSessionId**封装发送到RabbitMQ的`order-event-exchange`交换机，路由键为`order.seckill.order`，返回OrderSn到前端，前端可以使用一个页面让用户选择收货地址。

`SETNX`占位成功表示这个用户没有买过商品，通过Redssion的Semaphore。

![image-20230628222659062](/markdown/image-20230628222659062.png)

- 等待一段时间之后如果没有出现差错则订单已经创建在数据库中了，为未消费状态。

![image-20230628225544890](/markdown/image-20230628225544890.png) 

详见☀️[RabbitMQ](https://ylzhong.top/middleware/2mq.html)

### 服务单一职责，独立部署，定时上架

服务单一职责：秒杀项目是一个独立的微服务即使发生宕机也不会影响订单微服务。

定时上架使用`@Scheduled(cron = "0 */1 * * * ?")`完成，参数为Cron表达式。

## 库存预热快速扣减，秒杀连接加密，恶意请求拦截

### 库存预热快速扣减如何实现？

预热通过定时上架商品为Redis信号量完成，快速扣减使用Semaphore完成。

### 秒杀连接加密，恶意请求拦截如何实现？

秒杀在快开始的时候才会将随机的UUID设置到SKU详情中，请求携带这个UUID才是正确的请求参数，同时秒杀商品信号量的Semaphore的key也是SkuId生成的UUID组合起来的，而不是SkuId，如果是SkuId则很容易被人猜到。

恶意请求拦截体现在对请求的合法性校验上，包含时间段校验，随机码校验，SkuId和秒杀场次的对应正确性校验，一人一单的秒杀幂等性问题。

## 流量错峰，后端限流，队列削峰。

### 流量错峰，队列削峰如何实现？

其实这两个是差不多的意思，在秒杀项目中为了防止数据库同时创建多个订单导致压力剧增，可以使用队列进行削峰填谷。

同时在创建秒杀单时可以通过分布式锁对秒杀单的创建流程上锁，防止大量请求同时到达数据库。

### 后端限流如何实现？

后端限流在本项目中使用Sentinel框架实现后端限流。

