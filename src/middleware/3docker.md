---
title: Docker
icon: docker
category:
  - 中间件云原生
tags:
  - docker
  - 八股
---



Docker是一个应用打包、分发、部署的工具。

可以把它理解为一个轻量级的虚拟机，它只虚拟软件需要运行的环境，多余的不要，而普通的虚拟机则是一个完整而庞大的系统。

<!-- more -->

### 打包、分发、部署

**打包**：把软件运行需要的依赖、第三方库、软件打包在一起成为一个安装包。

**分发**：可以把打包好的文件上传到一个镜像仓库，其他用户可以轻松获取。

**部署**：使用安装包就能通过一个命令运行应用，不管是在Win/Mac/Linux环境中。

### Docker部署的优势

确保了应用能在不同的机器上使用相同的环境运行，不会出现从开发到部署环境不兼容的问题。

### 镜像、容器

**镜像**：可以理解为软件安装包，方便传播和安装。

**容器**：软件安装之后的状态，每个软件在docker中的运行环境都是独立的、隔离的，称之为容器。

```sh
docker run -d -p 6379:6379 --name redis redis:latest;
```

运行上述命令会先去下载镜像`redis:latest`，之后在`6379`端口运行，本机的`6379`端口映射到docker中的`6379`端口，容器的名称为`redis`。

### Docker挂载目录

```sh
docker run -p 80:80 --name nginx \
-v /mydata/nginx/html:/usr/share/nginx/html \
-v /mydata/nginx/logs:/var/log/nginx \
-v /mydata/nginx/conf:/etc/nginx \
-d nginx:latest
```

`nginx:latest`拉去最新的nginx镜像，`-p`映射本机端口80到容器中。`-v`表示挂载目录，将目录` /mydata/nginx/html`映射到`/usr/share/nginx/html`，这样在目录` /mydata/nginx/html`中添加文件，nginx容器就能直接读取，其他同理。

### Docker-Compose

如果每个虚拟机中需要创建很多的容器，一个一个运行命令很麻烦。

可以使用docker-compose把项目的多个服务集合到一起，一键运行。

创建`docker-compose.yml`文件，写入：

```yaml
services:
	redis:
		image: redis:latest
		volumes:
			- redis: /data
        environment:
        	- TZ=Asia/Shanghai
```

在`docker-compose.yml`文件所在目录，执行`docker-compose up`就能运行安装。

关于查看运行状态，停止，重启docker-compose命令和docker命令结构是相同的。

```sh
docker-compose stop
```
