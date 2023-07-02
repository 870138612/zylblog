---
title: 简历项目详解
icon: biji1
star: 1
category:
  - 笔记
tag:
  - 简历
  - 谷粒商城项目
---

八股经历大约两个月终于是啃（抄）完了，得上点硬菜了，以下针对我简历上的两个项目进行复习。

包含[谷粒商城](https://www.bilibili.com/video/BV1np4y1C7Yf/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)，[黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)。（点击跳转B站网课）

<!-- more -->

## 谷粒商城

项目整体较为复杂，项目中可能会涉及到的疑问点参考诚哥的博客文章[秋招笔记整理](https://www.jcwang.top/2022/10/14/%E6%88%91%E7%9A%84%E7%A7%8B%E6%8B%9B%E7%AC%94%E8%AE%B0%E6%95%B4%E7%90%86/)。

首先是简历部分：

```
恐龙商城                                                                  2022.3-2022.8
springcloud，springsecurity，springboot，mybatis，redis，rabbitmq，sentinel，nginx, docker
商城页面由Nginx代理实现动静分离，请求负载均衡，拆分为网关，订单，购物车，秒杀等微服务。
实现单点登录，商品缓存快速查询，订单创建幂等性。秒杀遵从服务单一职责，独立部署，定时上架，库存预热快速扣减，秒杀连接加密，恶意请求拦截，流量错峰，后端限流，队列削峰。
● 网关微服务实现集群状态下的负载均衡，使得来自同一个主域名的不同请求分发到对应的微服务。
● Redis存储Token，SpringSecurity完成多微服务下的用户登录验证和状态刷新。
● SpringSchedule定时任务上架秒杀商品。
● 前端限流，后端验证登录，Sentinel框架熔断降级的流量错峰保证在秒杀高流量的情况下项目稳定。
● Redis验证秒杀中的一人一单，信号量Semaphore实现库存的快速扣减，解决并发安全问题。
● RabbitMQ完成秒杀订单创建，实现队列削峰，减少数据库压力，采用手动ack确保订单创建成功。
● RabbitMQ延时队列模拟订单过期，过期订单的解锁订单和解锁库存流程通过RabbitMq消息队列实现。
```

> 为什么叫做恐龙商城？因为诚哥写的就是恐龙商城，哥们照抄的✨。

下面逐句进行分析。

### 介绍下项目的技术选型

项目中使用到的技术栈为**springcloud**，**springboot**，**mybatis**，**redis**，**rabbitmq**，**sentinel**，**nginx**，**docker**，使用**springcloud（Nacos**作为注册中心和配置中心，简化多服务器的管理，并将项目拆分为多个微服务（模块），微服务之间使用**openfeign**调用，**mybatis**作为数据库框架，**redis**作为缓存，分布式锁，**rabbitmq**用来队列削峰，**sentinel**用来熔断降级限流，主要用在秒杀部分，**nginx**用来动静分离，负载均衡，**docker**容器化部署，**zipkin**用作链路追踪，分析请求到每个模块的运行耗时，另外还用到了**jmeter**进行压力测试，**visualVM**查看堆内存情况。


### Nginx反向代理在计算机网络的第几层？

Nginx反向代理包含7层反向代理（应用层）和4层反向代理（传输层）两种。

7层代理是写在`htt`p模块中的，而4层代理是写在`stream`模块中，与`http`模块并列。

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
在`stream`中，server一定要配置`port`，`proxy_pass`配置行直接加集群名，不能加`http://`。

> 在本项目中，upstream使用的是七层代理的配置方法。

### Nginx的负载均衡算法有哪些？

详见☀️[Nginx负载均衡](https://ylzhong.top/middleware/1nginx.html#%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1)

负载均衡策略有：轮训，最小连接，ip_hash，hash，权重，随机。

### Nginx动静分离

项目编译完成之后会产生一些不会发生变化的静态文件，放入到nginx的`html`目录下，通过nginx配置进行获取这些静态文件，后端tomcat服务器应该用来处理请求而不是返回这些静态数据。开启nginx缓冲（buffer）之后还能解决高并发下的连接积压问题。

> 连接：Tomcat端到Server端的连接

### Nginx反向代理怎么配置的？反向代理跟正向代理的区别是什么？nginx可以配置正向代理吗？

详见☀️[正向代理和反向代理](https://ylzhong.top/middleware/1nginx.html#%E6%AD%A3%E5%90%91%E4%BB%A3%E7%90%86%E4%B8%8E%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86)

- 反向代理通过在`location`里添加`proxy_pass`进行请求代理

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

### 分微服务的原则是什么？

1. **单一职责原则**：每个微服务应该只负责一个特定的业务功能。例如网关微服务只用来做请求转发，秒杀微服务只做秒杀，即使因为高流量导致秒杀微服务宕机也不会影响到正常的订单微服务。

2. **业务领域驱动划分**：根据应用程序的业务需求和领域知识来对服务进行划分。同上，每一个微服务需要做的业务清晰明了。

3. **最小可行服务**：在进行微服务划分时，应该尽量保持服务的粒度足够小，以降低系统复杂性和提高灵活性。拆分成微服务之后，各个微服务之间的调用变得更加灵活。

4. **高内聚低耦合**：微服务划分应该追求高内聚低耦合的原则。各个微服务之间的耦合度应该尽可能的小。

5. **数据自治原则**：每个微服务应该对其所使用的数据有完全的控制权。每一个微服务都对自己所属的数据库架构有完全控制权。

6. **技术多样性**：微服务架构允许使用不同的技术栈来实现不同的服务。

### 单点登录怎么实现的？

使用SpringSecurity框架实现。

首先需要考虑用户的数据应该存储在哪。

- 如果使用session保存用户数据则会导致其他的服务器无法获取用户数据。

- 如果使用cookie存储用户数据，由于cookie存储在客户端，容易篡改，不安全。

- 采用nginx的hash一致性负载均衡算法，让所有来源相同的请求定位到同一个服务器，但是如果服务器宕机，则数据会丢失，不可行。

本项目使用`Redis`进行用户数据统一存储。添加依赖之后将session存储方式改为redis。

> 谷粒商城项目课程中使用SpringSession进行登录数据存储，后续自己改为SpringSecurity框架实现认证授权功能。

在配置类中添加了`jwtAuthenticationTokenFilter(OncePerRequestFilter的实现类，每次请求都会拦截)`，和`UsernamePasswordAuthenticationFilter(登录认证的过滤器，在配置中需要认证的请求都会被要求登录)`。

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

### SpringSecurity认证整体流程

1. 用户提交用户名、密码被`SecurityFilterChain`中的`UsernamePasswordAuthenticationFilter`过滤器获取到， 封装为`Authentication`，通常情况下是`UsernamePasswordAuthenticationToken`这个实现类。

2. 然后过滤器将`Authentication`提交至认证管理器（`AuthenticationManager<<interface>>`，实现类为`ProviderManager`，内部包含`DaoAuthenticationProvider`用来查找用户数据并认证）进行认证`authenticationManager.authenticate(authenticationToken)`，通过`UserDetailsService`实现类获取包含用户账号密码的`UserDetails`实现类 ，密码加密解密通过`PasswordEncoder`实现类`BCryptPasswordEncoder`完成，认证成功则返回`Authentication`，否则返回空。通过`.getPrincipal`从`Authentication`中获取用户数据（`UserDetails`的实现类）。
3. 认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

4. `SecurityContextHolder` 安全上下文容器将第2步填充了信息的 `Authentication` ，通过 `SecurityContextHolder.getContext().setAuthentication(…)`方法，设置到其中。

`SecurityContextHolder`可以看成一个`ThreadLocal`用来在一次会话中共享数据。

上述流程在分布式下有时候不能保持登录状态，可以将用户数据保存至Redis中。

### 分布式下的用户登录状态保持

第二次会话时开启新的线程就会导致不能获取之前的用户数据，不能保持登录状态。

可将Redis作为分布式下用户数据的存储介质。

在第二步认证成功之后通过userId生成JWT返回给前端，封装用户部分数据保存到Redis中，Redis数据的key是`"LOGIN:"+userId`。

添加`OncePerRequestFilter`过滤器，需要重写`doFilterInternal`方法，每次请求都会被拦截。如果请求中没有携带Token则表示是不需要登录的请求，直接放行，携带了Token通过JWT工具类进行解密获得userId，如果解密为有效的userId，则可以作为key（`"LOGIN:"+userId`）去Redis中找到用户数据，并添加到`SecurityContextHolder`中，这样只要客户端保存正确的Token就能保持登录状态。

登录状态续期可以通过给Redis添加新的过期时间进行续期。

### 项目中用到了哪些SpringSecurity过滤器？

 `UsernamePasswordAuthenticationFilter`用来做登录认证，`OncePerRequestFilter`用来做每一个请求拦截并根据情况做业务处理之后放行。

### 如果想要用户仅仅在一段时间内免登录怎么办？

在`OncePerRequestFilter`过滤器添加Redis数据的时候加上过期时间，在通过key（`"LOGIN:"+userId`）获取Redis数据失败的时候则认为是用户的免登录时间已经过期。（用户数据在Redis中过期，则需要重新登录并将用户数据保存至Redis，返回新的Token）

### JWT（Token）如何生成的？

详见☀️[15分钟学会JWT的使用](https://www.bilibili.com/video/BV1cK4y197EM/?spm_id_from=333.788.recommend_more_video.1&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

使用JJWT生成JWT。

JWT由三个部分构成，用`.`拼接：

- Header，包含类型和加密算法，此部分通过BASE64加密之后得到第一个部分（需要一个Key作为秘钥）。

  ```json
  {
    "typ":"JWT",
    "alg":"HS256"
  }
  ```

- Payload，载荷，用于存放主要信息，通过BASE64加密之后得到Token的第二个部分。

  ```json
  {
  	"sub":"123456",
  	"name":"zyl"
  }
  ```

- Signature，通过对Header和Payload进行再次加密得到的数据再通过HS256加盐得到最终的Signature。

  ```java
  String encodedString = base64UrlEncode(header) + '.' + base64UrlEncode(payload);
  String signature = HMACSHA256(encodedString, secret);
  ```

​	最后HS256加盐算法中的秘钥`secret`也可以通过BASE64加密获得。

项目中使用SpringCache作为缓存框架。使用`@Cacheable`快速添加返回结果到缓存。

### 数据更新之后对缓存如何操作？缓存一致性解决办法？

缓存一致性的解决方案有 **双写模式** 和 **失效模式**。

- **双写模式**：对数据库进行数据修改之后，会接着把新数据写入Redis。

- **失效模式**：对数据库进行数据修改之后，会让旧的缓存数据失效，`SpringCache`中的`@CacheEvict`执行缓存失效。

双写模式下如果有两个数据同时写数据库，执行流程：1修改数据库，2修改数据库，2更新缓存，1更新缓存，这样会导致现在的缓存数据是1修改的数据，并不是后执行的2修改的数据，存在暂时脏数据问题，需要等到缓存失效之后才能得到最新的正确数据。

![image-20230628213424542](/markdown/image-20230628213424542.png)

失效模式下如果有三个进程，1修改数据库，1删除缓存，3查询缓存没有，3读数据库，2修改数据库，2删除缓存，3更新缓存，此时缓存中为旧数据，同样存在脏数据问题。

![image-20230628214754324](/markdown/image-20230628214754324.png)

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

### 订单创建的幂等性如何实现？

当用户点击多次提交订单的时候应该保证只会产生一个唯一的订单，也就是接口的幂等性。

实现方式为从购物车页面点击确认订单的时候会在后端生成一个**防重令牌**，令牌的Key和`memberId`有关，值为随机生成的UUID，并将令牌放入Redis中，返回令牌到前端。

此时前端提交订单的时候就会将令牌进行提交，后端从数据库中获取对应的令牌，如果比对成功则创建订单并将令牌删除，否则不会创建订单。这样就保证了在确认页面只有第一次点击订单能创建成功。

![image-20230630165509583](/markdown/image-20230630165509583.png)

多线程下验证令牌和删除令牌的过程应该是原子性的，所以使用Lua脚本实现。

```java
String script = "if redis.call('get', KEY[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end";
String orderToken = vo.getOrderToken();
Long execute = template.execute(new DefaultRedisScript<Long>(script, Long.class),
                Arrays.asList(OrderConstant.USER_ORDER_Token_PREFIX + memberResponseVo.getId()),
                orderToken);
```

`execute`方法传入三个参数，分别是 Lua脚本，KEYS，ARGV。

验证成功之后再次验证价格，保存订单数据（商品信息，价格），锁定库存（库存模块完成，发生异常则能本地回滚），如果库存锁定成功则发送订单消息给队列创建订单（订单号，商品编号，价格，收货人，订单状态等）。

为了防止库存锁定之后订单服务出现问题，应该设置库存释放的死信队列，存活时间大于订单的释放时间，超时之后检查订单是否是取消状态，取消状态进行库存释放。需要注意一个订单只会释放一次库存，因此库存工作单中需要添加字段保证只会释放一次库存，项目中库存的释放统一由一个队列完成，因此不会存在并发问题。由于库存工作单存在状态标识，重复的库存释放消息只会执行一次。

如果订单支付成功，则支付宝会进行异步回调，此时可以发送订单已支付消息到队列中修改订单状态。

![image-20230702160233816](/markdown/image-20230702160233816.png)

### 延时关单如何实现的？

使用RabbitMQ的死信队列实现，将队列添加`x-message-ttl`属性，让消息在一定时间之后成为死信交给死信交换机，后续可进行库存释放操作。

### 秒杀的流程是啥样的？

- 秒杀开始前通过`@Scheduled`进行定时上架商品，查询近期的秒杀场次，保存至Redis用于后续秒杀的时间和场次合法性校验，查询SKU信息保存至Redis加速查询，同时通过UUID生成随机码保存到SKU详情数据。

- 秒杀商品的信号量key为`SKU_STOCK_SEMAPHORE + Token`，Token是生成的SKU随机码，通过`semaphore.trySetPermits(seckillSkuVo.getSeckillCount())`设置对应SKU信号量的许可证数量（秒杀库存数量）。

- 秒杀开始判断用户是否登录，登录的话进行合法性校验，包含当前所处时间是否处于秒杀时间，检验随机码是否正确（在秒杀开始时返回到前端的随机码，用于防止恶意请求），验证购买数量是否超额。

- 合法性校验通过之后进行占位（防止一个用户并发秒杀），使用`SETNX`进行占位（原子操作），Key为`userId+'_'+skuId`，同时还需要添加过期时间，过期时间为`场次结束时间-当前时间`，让一个用户只能对同一个商品秒杀一次，**遵从请求的幂等性**。
- `boolean b = semaphore.tryAcquire(num, 100, TimeUnit.MILLISECONDS)`如果获取信号量成功则表示秒杀成功，将**OrderSn**，**UserId**，**SkuId**，**SeckillSkuPrice**，**Num**，**PromotionSessionId**封装发送到RabbitMQ的`order-event-exchange`交换机，路由键为`order.seckill.order`，返回OrderSn到前端，前端可以使用一个页面让用户选择收货地址。

`SETNX`占位成功表示这个用户没有买过商品，通过Redission的`Semaphore`模拟库存扣减。

![image-20230628222659062](/markdown/image-20230628222659062.png)

- 等待一段时间之后如果没有出现差错则订单已经创建在数据库中了，为未支付状态。

![image-20230628225544890](/markdown/image-20230628225544890.png) 

详见☀️[RabbitMQ](https://ylzhong.top/middleware/2mq.html)

### 服务单一职责，独立部署，定时上架

服务单一职责：秒杀项目是一个独立的微服务即使发生宕机也不会影响订单微服务。

定时上架使用`@Scheduled(cron = "0 */1 * * * ?")`完成，参数为Cron表达式。

### 库存预热快速扣减如何实现？

预热通过定时上架商品为Redis信号量完成，快速扣减使用Redission的`Semaphore`完成。

### 秒杀连接加密，恶意请求拦截如何实现？

秒杀在快开始的时候才会将随机的UUID设置到SKU详情中，请求携带这个UUID才是正确的请求参数，同时秒杀商品信号量的`Semaphore`的key也是SkuId生成的UUID组合起来的，而不是SkuId，如果是SkuId则很容易被人猜到。

恶意请求拦截体现在对请求的合法性校验上，包含时间段校验，随机码校验，SkuId和秒杀场次的对应正确性校验，一人一单的秒杀幂等性问题。

### 流量错峰，队列削峰如何实现？

其实这两个是差不多的意思，在秒杀项目中为了防止数据库同时创建多个订单导致压力剧增，可以使用队列进行削峰填谷。而流量错峰可以使用验证码机制或者是添加购物车让大量请求不在同一个时间点到达。

同时在创建秒杀单时可以通过分布式锁对秒杀单的创建流程上锁，防止大量请求同时到达数据库（使用分布式锁可以解决缓存击穿问题）。

### 限流熔断降级如何实现？

后端限流在本项目中使用Sentinel框架实现限流熔断降级。

- **熔断**：A调用B，如果因为某些原因B宕机，则可以将B直接断路，不再调用B的服务。这样B的问题就不会影响到A的运作。`@FeignClient(value = "gulimall-seckill",fallback = SeckillFallbackService.class)`，调用失败之后回调方法。Sentinel中可以设置RT（每秒的并发数），异常比例，异常数进行服务熔断。
- **降级**：服务器压力剧增时，可以进行降级，就是将服务器停止服务，直接返回降级数据（前方拥堵，请稍后再试）。以上两者都是为了集群的大部分可用，防止整体崩溃，牺牲自己，用户最终的体验都是部分服务不可用。熔断是服务故障触发系统主动规则，降级是全局考虑，停止正常的服务，释放资源。
- **限流**：对请求的QPS进行限制，使得请求不会超过服务器能接受的最大压力。

黑马点评为B站Redis课程中涉及到的项目，项目整体都是在介绍Redis的数据结构以及对应方法。

详见☀️[黑马点评](https://www.bilibili.com/video/BV1cr4y1671t/?spm_id_from=333.337.search-card.all.click&vd_source=90bb400ad92a9344bb4c2ca0d7921be7)

<!-- more -->

## 黑马点评

项目中同样包含登录部分，Session共享问题，因此可以参考SpringSecurity的登录认证流程，Redis存储用户数据。

详见☀️[谷粒商城实现单点登录](https://ylzhong.top/note/0aboutprojects.html#%E5%AE%9E%E7%8E%B0%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95)

```
商户点评平台                                                           2022.9-2022.12
springboot，mybatis，redis，nginx，docker
点评平台由Nginx实现动静分离，围绕Redis实现用户登录，解决Session共享问题，登录认证，缓存加速，点赞排行榜，共同关注和取关，查询附近的店铺笔记，用户签到，UV统计。
● 使用手机号验证码登录，实现用户登录状态刷新。
● Redis作为缓存加速商品信息和笔记的读取。
● 通过Redis的各种数据结构实现点赞排行榜，共同关注和取关，查询附近的店铺笔记，用户签到，UV统计。
```

下面针对简历逐句分析

### 点评平台由Nginx实现动静分离

Nginx动静分离的好处参考谷粒商城项目。
详见☀️[Nginx动静分离](https://ylzhong.top/note/0aboutprojects.html#%E5%95%86%E5%9F%8E%E9%A1%B5%E9%9D%A2%E7%94%B1nginx%E4%BB%A3%E7%90%86%E5%AE%9E%E7%8E%B0%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB-%E8%AF%B7%E6%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1)。

### Redis实现用户登录，登录状态刷新

此项目中的登录没有使用`SpringSecurity`作为框架，使用Redis解决Session共享问题。

用户输入手机号之后，会在后端生成一个Redis的String数据，Key为手机号码，Value为验证码，验证码可通过UUID生成并截取后6个数字。并添加过期时间，防止一个手机号码在短时间内多次点击发送验证码。

登录时后端验证验证码成功之后，生成一个JWT（TOKEN）返回给前端，并存储为String类型到Redis。如果没有查询到用户数据则默认注册。同样添加过期时间，表示免登录时间。

每次请求的拦截通过实现接口`HandlerInterceptor`并重写方法`preHandle`。如果请求不携带token则直接放行，表示这个请求不需要用户验证。有token则去Redis中寻找，如果没有找到，则表示登录状态过期，需要重新登录。找到了则将对应的用户数据查询并封装放入`ThreadLocal`中，用来在这次会话中共享数据。

用户登录状态刷新可以在每次请求的时候获取正确的TOKEN，通过方法`stringRedisTemplate.expire(key, LOGIN_USER_TTL, TimeUnit.SECONDS)`刷新免登录时间。

> 登录部分有修改，没有黑马点评中的`LoginIntercepter`。

### JWT（TOKEN）如何生成？

详见☀️[JWT如何生成？](https://ylzhong.top/note/0aboutprojects.html#jwt-token-%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90%E7%9A%84)。







## 其它问题	

### 如何使用SETNX+EX实现分布式锁？

> 原文回答：redis中执行setnx+ex这个语句是原子性的。 当然前面如果释放锁的时间太短提早释放了，那么就有问题，所以可以用一个lua脚本将判断是否是当前线程的锁和取消所（删除key）原子实现

`SETNX+EX`是原子操作，判断是否有值和设置值是原子执行的。

多线程下仅仅使用`SETNX`作为分布式锁会存在问题，如果一个线程加锁之后出现错误没有释放锁，则其他的线程都获取不到这个锁。

解决办法是添加过期时间，但是也可能存在A在锁的过期时间内没有执行完，B获得了锁，A执行完之后会释放锁，导致双方都无锁。因此在删除锁之前需要判断是否是当前线程拥有的锁，检查和删除操作必须为原子操作使用Lua脚本实现。

如果设置的过期时间太长影响性能，时间太短会导致业务还没有处理完成就释放锁了。并且不支持重入。

综合来说使用`SETNX+EX`实现分布式锁还存在问题。

### Redission实现分布式锁的自动续期

Redission中通过看门狗机制实现分布式锁的自动续期，保证在业务执行时不会因为时间到期而释放锁。

详见☀️[分布式锁](https://ylzhong.top/database/2redis/2lock.html)

### 如何保证消息可靠性？

> 原文回答：生产者到broker的confirm，bnroker到消费者的时候手动确认机制，持久化。当然如果kafka的话其实可以确认的时候给一个offset，避免了重复。（这个是面试跟我说的，说主要是想问下根Kafka的区别。）

#### 消息丢失

- 消息发送由于网络问题没有到达服务器。
  - 做好容错机制（try-catch）失败之后要有重试机制，可记录到数据库，采用定期重发的机制。
- 消息抵达Broker，Broker在持久化之前宕机。
  - publisher也必须加入确认回调机制，确认成功的消息，修改数据库的消息状态。
  - 交换机持久化，队列持久化。
- 自动ACK状态下，消费者收到消息但是没有执行完业务。
  - 开启手动ack，消息成功才会移除消息，失败或者来不及处理就noACK并重新加入队列。

`confirmCallback`消息成功投递`Exchange`会回调，`returnCallback`消息投递给`Queue`失败会回调。`ack`表示消息成功消费。

![image-20230617224404357](https://ylzhong.top/markdown/image-20230617224404357.png)

#### 消息重复

- ack时消息宕机，导致消息重新放入队列被消费。
  - 消费者的业务接口应该设计为幂等性，比如库存工作单的状态标志。
- 消费失败，消息又冲洗放回队列中。
  - RabbitMQ中的每一个消息都有`redelivered`字段，获取消息是否是被重新投递的。

#### 消息积压

- 上线更多消费者。
- 上线专门的队列消费服务，先将消息取出，后面再进行消费。

### 让你设计一个网站的文章的点击量排名，你怎么实现？

>  原文回答：首先肯定用zset，然后key、value怎么存储呢？我说value每次+1，面试官说不对。

也不知道为啥不对。

Sort Set可以用来设计排行榜，如果文章的阅读量很多，使用的存储空间就比较大，并且统计的性能较慢。

针对热门文章的UV统计可以使用HyperLogLog实现，命令为`PFADD key element`添加元素，但是这个数据结构不会存储元素，仅仅会存储集合的个数，使用`PFCOUNT`返回集合个数。

HyperLogLog并不会精确计数，存在误差（0.81%）。

### 秒杀包含什么？具体的测试流程是怎么样的？

> 原文回答：我说了一些优化，查看堆内存，更改堆内存的新生代和老年代的分配，从并发量550到600了。

秒杀包含定时上架秒杀商品，使用`SETNX`实现用户秒杀的占位，Redission的`Semaphore`模拟库存快速，还有通过队列削峰，延时队列模拟订单释放过程。

使用**JConsole**查看堆内存情况，发现老生代GC很频繁，更改了新生代和老年代的内存分配，并发量从550提高到了600。

更改老年代：新生代的内存比例为4:1，表示老年代占堆内存的80%。

```java
-XX:NewRatio=4
```

请求测试通过**Jmeter**完成，先通过CSV数据文件创建1000个用户到数据库，并登录这1000个用户，再通过这1000个用户模拟秒杀过程。

### 项目中遇到的难点是怎么解决的呢？

> 原文回答：我说一开始用的chales，发现不能通过端口看，然后网上查能看端口的，找到了tcpdump。

测试时出现请求不能连通的情况因此使用`tcpdump`进行抓包。

监听虚拟机的`80`端口，抓包来源为`192.168.1.103`(本机IP)的telnet包。

```
tcpdump tcp port 80 host 192.168.1.103
```

使用**ZipKin**做链路追踪时发现查询SKU数据花费较长的时间，后续改为使用`CompletableFuture`进行异步查询减少了请求的时间。先查询SKU主体，之后异步查询SKU的图片、介绍、规格参数、销售属性组合。

### 创建线程的方法？

三种，`Thread`类，`Runnable`接口，`Callable`接口。其中`Callable`有返回值。

```java
FutureTask<String> task = new FutureTask<>(() -> {
    return "abc";//实现Callable接口重写Call方法。
});
```

