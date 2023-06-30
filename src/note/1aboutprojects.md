---
title: 简历项目详解-黑马点评
icon: biji1
star: 2
category:
  - 笔记
tag:
  - 简历
  - 黑马点评项目
---



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

Nginx动静分离的好处参考谷粒商城项目[Nginx动静分离](https://ylzhong.top/note/0aboutprojects.html#%E5%95%86%E5%9F%8E%E9%A1%B5%E9%9D%A2%E7%94%B1nginx%E4%BB%A3%E7%90%86%E5%AE%9E%E7%8E%B0%E5%8A%A8%E9%9D%99%E5%88%86%E7%A6%BB-%E8%AF%B7%E6%B1%82%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1)。

### Redis实现用户登录，登录状态刷新

此项目中的登录没有使用`SpringSecurity`作为框架，使用Redis解决Session共享问题。

用户输入手机号之后，会在后端生成一个Redis的String数据，Key为手机号码，Value为验证码，验证码可通过UUID生成并截取后6个数字。并添加过期时间，防止一个手机号码在短时间内多次点击发送验证码。

登录时后端验证验证码成功之后，生成一个JWT（TOKEN）返回给前端，并存储为String类型到Redis。如果没有查询到用户数据则默认注册。同样添加过期时间，表示免登录时间。

每次请求的拦截通过实现接口`HandlerInterceptor`并重写方法`preHandle`。如果请求不携带token则直接放行，表示这个请求不需要用户验证。有token则去Redis中寻找，如果没有找到，则表示登录状态过期，需要重新登录。找到了则将对应的用户数据查询并封装放入`ThreadLocal`中，用来在这次会话中共享数据。

用户登录状态刷新可以在每次请求的时候获取正确的TOKEN，通过方法`stringRedisTemplate.expire(key, LOGIN_USER_TTL, TimeUnit.SECONDS)`刷新免登录时间。

> 登录部分有修改，没有黑马点评中的`LoginIntercepter`。

### JWT（TOKEN）如何生成？

详见☀️[JWT如何生成？](https://ylzhong.top/note/0aboutprojects.html#jwt-token-%E5%A6%82%E4%BD%95%E7%94%9F%E6%88%90%E7%9A%84)。
