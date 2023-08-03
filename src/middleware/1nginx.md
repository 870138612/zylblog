---
title: Nginx
icon: nginx
category:
  - 中间件云原生
tag:
  - Nginx
  - 八股
---

## 静态 Web 配置

```nginx
server {
    listen 80;
    server_name localhost;
    location /abc {
        root /html;
        index index.html index.htm;
    }
    error_page 500 502 503 504 /50x.html;
}
```

**`listen`**

监听可以配置成 `IP` 或 `端口` 或 `IP + 端口`。

`listen 127.0.0.1:8080`、`listen 8080`、`listen *:8080`。

**`server_name`**

主要用于区分，可以随便起，可以使用 `$hostname` 配置成主机名。

**`location`**

```nginx
location /abc {
    root /html;
    index index.html index.htm;
}
```

访问 `/` 目录会去子目录 `html` 中寻找页面或资源。也就是说访问 `/abc` 就会被追加到 `root` 目录之后，成为 `/html/abc`。

## 反向代理和 Header

### 正向代理与反向代理

在**客户端**代理转发请求称为**正向代理**。例如 VPN。

![image-20230613150948601](/markdown/image-20230613150948601.png)

在**服务端**代理转发请求称为**反向代理**。例如 Nginx。

![image-20230613151142088](/markdown/image-20230613151142088.png)

### 配置反向代理

```nginx
server{
    listen 80;
    server_name localhost;
    location / {
        proxy_pass http://localhost:8080/;
    }
}
```

访问 `80` 端口会被路由到本机的 `8080` 端口，但是在路由的时候会丢失 `Header`。

### 设置代理请求 headers

用户可以重新定义或追加 header 信息传递给后端服务器。

```nginx
proxy_set_header Host $proxy_host;
proxy_set_header Connection close;
```

由于使用反向代理之后，后端无法获取用户的真实 IP，所以一般反向代理都会设置以下 header 信息。

```nginx
location /{
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_pass http://localhost:8080/;
}
```

常用的变量值：

`$host`：nginx 主机 IP；

`$http_host`：nginx 主机 IP 和端口；

`$proxy_host`：`localhost:8080`，`proxy_pass` 里面配置的主机名和端口；

`$remote_addr`：用户的真实 IP，也就是客户端 IP。

::: info proxy_pass说明

- 如果 `proxy_pass` 的地址只配置到 `/`，不包括 URI，`location` 将被追加到转发地址中。

```nginx
location /some/ {
    proxy_pass http://localhost:8080/;
}
```

访问`http://localhost/some/page.html` 会被代理到 `http://localhost:8080/some/page.html`。

- 如果 `proxy_pass` 的地址包括 URI，那么 location 将不会被追加到转发地址中。

```nginx
location /some/ {
  proxy_pass http://localhost:8080/zh-cn/;
}
```

访问`http://localhost/some/page.html` 会被代理到 `http://localhost:8080/zh-cn/page.html`，`some` 路径消去。

:::

## 动静分离

```nginx
server {
    listen 81;	    
    server_name localhost;
    location ~ \.(css|js|png|jpg|gif|ico) {
        root  /home/static;
        index index.html index.htm;
    } 
    error_page 500 502 503 504  /50x.html;
    location = /50x.html {
        root  /usr/share/nginx/html;
    }
}
```

将静态资源放入 nginx 服务器的 `static` 目录中，则所有以 `(css|js|png|jpg|gif|ico)` 结尾的文件都会在这个文件夹中寻找。

### 修饰符

`location` 可以使用正则表达式。包括：

`=`：等于，严格匹配，优先级最高；

`^~`：前缀匹配，表示普通匹配字符，如果匹配成功，不再匹配其他 `location`，优先级第二；

`~`：正则匹配，区分大小写，优先级第三；

`~*`：正则匹配，不区分大小写，优先级第三。

不写修饰符：优先级最低。

```nginx
location ^~ /img/ {
    root  /host/static;
}
```

例如请求 `/img/a.jpg` 会请求 `/host/static/img/a.jpg`，资源都是在 `root` 后拼接路径，不同于`proxy_pass`。

### 动静分离的好处

Tomcat 主要用来处理 servlet 请求。处理像 css、js、图片这些静态文件的 IO 性能不好，因此将静态文件交给 nginx 处理，可以提高系统访问速度，减少 Tomcat 的请求次数，有效减少后端压力。

## 缓冲与缓存

### 缓冲（buffer）

缓冲一般放在内存中，如果不适合放入内存（超过了指定大小），则会将响应临时写入磁盘中。

启用缓冲之后，nginx 先将后端的请求响应（response）放入缓冲区中，等到整个响应完成再返回给客户端。

![image-20230613163140106](/markdown/image-20230613163140106.png)

客户端往往是用户网络，情况复杂，可能出现网络不稳定，速度很慢的情况。

而 nginx 和后端 server 一般处于同一个机房或者区域，网速稳定且快。

**如果禁用了缓冲**，则在客户端从代理服务器接收响应时，响应将同步发送给客户端，对于需要尽快开始接收响应的快速交互式客户端是可取的。但是如果客户端网速很慢，导致 nginx 只能以较慢的速度将响应传给客户端，进而导致后端 server 也只能以同样较慢的速度传递响应给 nginx，造成一次请求连接耗时较长。

在高并发的情况下，后端 server 可能会出现大量的连接积压，最终拖垮 server 端。

**开启代理缓冲之后**，nginx 以尽可能快的速度将响应读入缓冲区中，同时根据客户端网络质量以合适的网速将响应传递给客户端。

这样既解决了 server 端连接过多的问题，也能保证持续稳定的向客户端传递响应。

通过 `proxy_buffering` 启用和禁用缓冲区，默认为 `on`。

```nginx
proxy_buffering on;
```

`proxy_buffers` 设置每个连接读取响应的缓冲区的数量和大小。

来自后端服务器响应的第一部分存储在单独的缓冲区中，大小通过 `proxy_buffer_size` 进行设置，此部分通常是相对较小的 headers，通常设置成小于默认值。

```nginx
location / {
    proxy_buffers 16 4K;
    proxy_buffer_size 2K;
    proxy_pass http://localhost:8080;
}
```

如果整个响应不适合放入内存中，则将其中的一部分保存至磁盘的临时文件中。

`proxy_max_temp_file_size` 设置临时文件的最大值。

`proxy_temp_file_write_size` 设置一次写入临时文件的大小。

### 缓存（cache）

启用缓存后，nginx 将响应保存在磁盘中，返回给客户端的数据首先在缓存中取，这样相同的请求不用每次都发送给后端服务器，减少到后端请求的数量。

通过 `proxy_cache_path` 指定缓存路径名称和大小。

缓存区可以被多个 server 共享，使用 `proxy_cache` 指定缓存区。

```nginx
http {
    proxy_cache_path  /data/nginx/cache keys_zone=mycache:10m;
    server {
        proxy_cache mycache;
        location / {
            proxy_pass http://localhost:8000;
        }
    }
}
```

## 负载均衡

跨多个应用程序实例的负载均衡是一种常用的技术，用于优化资源利用率，最大化吞吐量，减少延时，容灾。nginx 将流量分配到多个服务器，可以提升服务器性能，提高扩展性和可靠性。

通过配置 `upstream` 实现多个服务器的负载均衡。

```nginx
upstream apps {
    server http://localhost:8080;
    server http://localhost:8081;
}

server {
    listen 80;
    server_name localhost;
    location / {
        proxy_pass http://apps;
    }
}
```

### 负载均衡策略

负载均衡策略有：轮询，最小连接，ip_hash，hash，权重，随机。

- **轮询机制（round-robin）**：默认的负载均衡策略，以轮询方式分发请求。
- **最小连接（least-connected）**：将下一个请求分配给最小连接的服务器（较为空闲的服务器）。

```nginx
upstream apps {	
    least-conn;
    server http://localhost:8080;
    server http://localhost:8081;
}
```

::: info 注意

使用轮训或者最小连接会让每一个客户端的请求分发到不同的服务器上，不能保证同一个客户端将始终定位到同一个服务器，**因此不能会话保持**。

:::

- **ip_hash**：客户端的 IP 地址将计算哈希键，来自同一个 IP 的请求会分发到同一台服务器。

```nginx
upstream apps {	
    ip_hash;
    server http://localhost:8080;
    server http://localhost:8081;
}
```

如果某个时刻对应的服务器宕机，还是会导致同一个 IP 请求转发到其他的服务器，引发缓存失效，路由失效等连锁反应。

因此有了**一致性 hash 算法**。

- **一致性 hash 算法**：通用 hash，允许用户自定义 hash，key 可以是配对的源 IP 地址和端口，也可以是 URI。

```nginx
upstream apps {	
    hash $request_uri consistent;
    server http://localhost:8080;
    server http://localhost:8081;
}
```

`consistent` 参数启用 **ketama** 一致哈希算法，如果在上游服务器组中添加或者删除服务器，只会**重新映射部分键**，最大限度减少缓存失效。

- **权重方式**：在 server 服务器后面添加参数 `weight` 参数指定权重，权重越大，分得请求的概率越大，不写默认为 1。

```nginx
server http://localhost:8080 weight=3;
```

- **随机方式**：随机挑选 `N` 个服务器，在 `N` 个服务器中选择一台发送请求，默认是连接数最小的机器。

```nginx
upstream apps {	
    random two least_conn;
    server http://localhost:8080;
    server http://localhost:8081;
    server http://localhost:8082;
}
```

### 健康检查

如果后端服务器在某个周期内响应失败的次数超过规定值，nginx 将会标记服务器为失败，后续的周期不再分发请求给这个服务器。

通过 `fail_timeout` 来设置检查周期，默认为 10 秒。

通过 `max_fails` 来设置失败次数，默认是 1 次。

```nginx
upstream apps {
    server http://localhost:8080;
    server http://localhost:8081 max_fails=3 fail_timeout=30s;
}
```

## Https 配置

```nginx
server {
    listen 443 ssl;    #表示监听443端口即https
    server_name ylzhong.top; #域名
    ssl_certificate ./ylzhong.top_nginx/ylzhong.top_bundle.crt;   #证书文件路径
    ssl_certificate_key ./ylzhong.top_nginx/ylzhong.top.key;      #证书私钥文件路径
    ssl_session_timeout 5m;   #5分钟session会话保持
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    location / {		
        root  /usr/share/nginx/html/dist;
        index index.html index.htm;
    }
    error_page 500 502 503 504  /50x.html;
    location = /50x.html {
        root  /usr/share/nginx/html;
    }
}
```

## TCP 反向代理

Http 反向代理使用 `http` 模块，TCP 反向代理使用 `stream` 模块。可以用来负载均衡连接 MySQL，Redis 等。

```nginx
http {
    ...
}

stream {
    upstream backend-mysql {
        server localhost:3306;
        #定义连接池空闲连接的数量，可以避免打开频繁的打开和关闭连接，相当于线程池里的核心线程数
        keepalive 8;
    }
    server {
        listen 13306;
        proxy_pass backend-mysql;
        #没有添加 http 字段
    }
}
```

## 重写

### 重写 - return

**转发是服务端行为，重定向是客户端行为。**

```nginx
server {
    ...
    return 301 https://localhost:8000;
    ...
}
```

重定向的地址如果写成 `localhost` 会造成重定向错误，会在本机中进行地址映射也就是IP地址 `127.0.0.1`，而不是服务器中。`301` 表示永久重定向。

### 重写 - rewrite

```nginx
server {
    rewrite ^(/download/.*)/media/(/w+)\.?.*$  $1/mp3/$2.mp3 last;
    rewrite ^(/download/.*)/audio/(/w+)\.?.*$  $1/mp3/$2.ra last;
}
```

`^` 表示正则开始，`$` 表示结束。

`.*` 中 `.` 表示匹配任何字符，`*` 表示前面的正则出现 0 或者多次。

`/w+` 匹配出现 1 次或者多次任意字母或者数字。

`\.` 是 `.` 的转义。`?` 表示前面的转义出现 0 或者 1 次。

`$1、$2` 是截取前面括号中匹配的内容。

例如访问 `/download/cnd-west/media/file1` 就会变成 `/download/cdn-west/mp3/file1.mp3`。如果文件有扩展名也会被删除，`\.?.*` 就是匹配 `.` 开头的字符串或者是空串。

**last 与 break**

`last`：rewrite 之后停止后续正则匹配处理，使用重写后的路径，重新搜索 `location`。

![image-20230613231341162](/markdown/image-20230613175233575.png)

`break`：rewrite 之后停止后续正则匹配处理，使用重写后的路径，执行余下的块内指令。

![image-20230613175233575](/markdown/image-20230614114418512.png)
