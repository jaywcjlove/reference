Docker 备忘清单
===

这是 [Docker](https://docs.docker.com/get-started/) 的快速参考备忘单。 你可以在这里找到最常见的 Docker 命令。

入门
----
<!--rehype:body-class=cols-2-->

### 入门

在后台创建和运行容器

```shell
$ docker run -d -p 80:80 docker/getting-started
```

----

- `-d` - 以分离模式运行容器
- `-p 80:80` -  将端口 80 映射到容器中的端口 80
- `docker/getting-started` - 要使用的镜像


在前台创建并运行容器

```shell
$ docker run -it -p 8001:8080 --name my-nginx nginx
```

----

- `-it` - 交互式 bash 模式
- `-p 8001:8080` - 将 `8001` 端口映射到容器中的 `8080` 端口
- `--name my-nginx` - 指定名称
- `nginx` - 要使用的镜像

### 一般命令

| Example                             | Description                                      |
|-------------------------------------|--------------------------------------------------|
| `docker ps`                         | 列出正在运行的容器                                  |
| `docker ps -a`                      | 列出所有容器                                  |
| `docker ps -s`                      | 列出正在运行的容器 _(带 CPU / 内存)_        |
| `docker images`                     | 列出所有镜像                                  |
| `docker exec -it <container>  bash` | 连接到容器                                  |
| `docker logs <container>`           | 显示容器的控制台日志                                  |
| `docker stop <container>`           | 停止容器                                  |
| `docker restart <container>`        | 重启一个容器                                  |
| `docker rm <container>`             | 移除一个容器                                  |
| `docker port <container>`           | 显示容器的端口映射                                  |
| `docker top <container>`            | 列出进程                                  |
| `docker kill <container>`           | 杀死一个容器                                  |

参数 `<container>` 可以是容器 id 或名称

Docker 容器
----
<!--rehype:body-class=cols-2-->

### 启动和停止

| Description                   | Example                             |
|-------------------------------|-------------------------------------|
`docker start nginx-server`   | 开始
`docker stop nginx-server`    | 停止
`docker restart nginx-server` | 重启
`docker pause nginx-server`   | 暂停
`docker unpause nginx-server` | 取消暂停
`docker wait nginx-server`    | 阻塞容器
`docker kill nginx-server`    | 发送 SIGKILL
`docker attach nginx-server`  | 连接到现有容器

### 说明

| Example                       | Description                            |
|-------------------------------|----------------------------------------|
`docker ps`                   | 列出正在运行的容器
`docker ps -a`                | 列出所有容器
`docker logs nginx-server`    | 容器日志
`docker inspect nginx-server` | 检查容器
`docker events nginx-server`  | 容器事件
`docker port nginx-server`    | 公共端口
`docker top nginx-server`     | 运行进程
`docker stats nginx-server`   | 容器资源使用
`docker diff nginx-server`    | 列出对容器所做的更改


### 创建容器

```shell
docker create [options] IMAGE
  -a, --attach               # 附加标准输出/错误
  -i, --interactive          # 附加标准输入（交互式）
  -t, --tty                  # 伪终端 pseudo-tty
      --name NAME            # 命名你的镜像
  -p, --publish 5000:5000    # 端口映射（主机:容器）
      --expose 5432          # 向容器公开端口 
  -P, --publish-all          # 发布所有端口
      --link container:alias # 链接 linking
  -v, --volume `pwd`:/app    # mount（需要绝对路径）
  -e, --env NAME=hello       # 环境变量 env vars
```

#### 实例

```shell
$ docker create --name my_redis --expose 6379 redis:3.0.2
```

### 操控

重命名容器

```shell
docker rename my-nginx nginx-server
```

移除容器

```shell
docker rm nginx-server
```

更新容器

```shell
docker update --cpu-shares 512 -m 300M nginx-server
```

Docker 镜像
----
<!--rehype:body-class=cols-2-->

### 操控

| `Example` | Description |
|-----------|-----------|
`docker images`                    | 列出镜像
`docker rmi nginx`                 | 删除镜像
`docker load < ubuntu.tar.gz`      | 加载一个 tarred 存储库
`docker load --input ubuntu.tar`   | 加载一个 tarred 存储库
`docker save busybox > ubuntu.tar` | 将镜像保存到 tar 存档
`docker history`                   | 显示镜像的历史
`docker commit nginx`              | 将容器另存为镜像。
`docker tag nginx eon01/nginx`     | 标记镜像
`docker push eon01/nginx`          | 推送镜像

### 构建镜像

```shell
$ docker build .
$ docker build github.com/creack/docker-firefox
$ docker build - < Dockerfile
$ docker build - < context.tar.gz
$ docker build -t eon/nginx-server .
$ docker build -f myOtherDockerfile .
$ curl example.com/remote/Dockerfile | docker build -f - .
```

Docker 网络
----
<!--rehype:body-class=cols-2-->

### 操作

删除网络

```shell
docker network rm MyOverlayNetwork
```

列出网络

```shell
docker network ls
```

获取有关网络的信息

```shell
docker network inspect MyOverlayNetwork
```

将正在运行的容器连接到网络

```shell
docker network connect MyOverlayNetwork nginx
```

启动时将容器连接到网络

```shell
docker run -it -d --network=MyOverlayNetwork nginx
```

断开容器与网络的连接

```shell
docker network disconnect MyOverlayNetwork nginx
```

### 创建网络

```shell
docker network create -d overlay MyOverlayNetwork
docker network create -d bridge MyBridgeNetwork
docker network create -d overlay \
  --subnet=192.168.0.0/16 \
  --subnet=192.170.0.0/16 \
  --gateway=192.168.0.100 \
  --gateway=192.170.0.100 \
  --ip-range=192.168.1.0/24 \
  --aux-address="my-router=192.168.1.5" \
  --aux-address="my-switch=192.168.1.6" \
  --aux-address="my-printer=192.170.1.5" \
  --aux-address="my-nas=192.170.1.6" \
  MyOverlayNetwork
```

各种各样的
----
<!--rehype:body-class=cols-2-->

### Docker Hub

| Docker 语法 | 说明 |
|------------|------|
`docker search search_word` | 在 docker hub 中搜索镜像。
`docker pull user/image   ` | 从 docker hub 下载镜像。
`docker login             ` | 向 docker hub 进行身份验证
`docker push user/image   ` | 将镜像上传到 docker hub。

### 注册表命令
<!--rehype:wrap-class=row-span-3-->

登录到注册表

```shell
$ docker login
$ docker login localhost:8080
```

从注册表注销

```shell
$ docker logout
$ docker logout localhost:8080
```

搜索镜像

```shell
$ docker search nginx
$ docker search nginx --stars=3 --no-trunc busybox
```

拉取镜像

```shell
$ docker pull nginx
$ docker pull eon01/nginx localhost:5000/myadmin/nginx
```

推送镜像

```shell
$ docker push eon01/nginx
$ docker push eon01/nginx localhost:5000/myadmin/nginx
```

### 批量清除

| 实例 | 说明 |
|---------|---------|
`docker stop -f $(docker ps -a -q)` | 停止所有容器
`docker rm -f $(docker ps -a -q)` | 删除所有容器
`docker rmi -f $(docker images -q)` | 删除所有图像

### 卷 volume

检查卷

```shell
$ docker volume ls
```

清理未使用的卷

```shell
$ docker volume prune
```

### Docker Compose
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`docker-compose up` | 创建和启动容器
`docker-compose up -d` | 以分离模式创建和启动容器
`docker-compose down` | 停止和删除容器、网络、映像和卷
`docker-compose logs` | 查看容器的输出
`docker-compose restart` | 重启所有服务
`docker-compose pull` | 拉取所有图片服务
`docker-compose build` | 构建所有图像服务
`docker-compose config` | 验证并查看 Compose 文件
`docker-compose scale <service_name>=<replica>` | 规模特殊服务
`docker-compose top` | 显示正在运行的进程
`docker-compose run -rm -p 2022:22 web bash` | 启动 Web 服务并运行 bash 作为其命令，删除旧容器。

### Docker Services

:- | :-
:- | :-
`docker service create <options> <image> <command>`   | 创建新服务
`docker service inspect --pretty <service_name>`      | 显示详细信息服务
`docker service ls`                                   | 列出服务
`docker service ps`                                   | 列出服务的任务
`docker service scale <service_name>=<replica>`       | 规模特殊服务
`docker service update <options> <service_name>`      | 更新服务选项

### Docker Stack

:- | :-
:- | :-
`docker stack ls`                                 | 列出此 Docker 主机上所有正在运行的应用程序
`docker stack deploy -c <composefile> <appname>`  | 运行指定的 Compose 文件
`docker stack services <appname>`                 | 列出与应用关联的服务
`docker stack ps <appname>`                       | 列出与应用关联的正在运行的容器
`docker stack rm <appname>`                       | 拆掉一个应用程序

### Docker Machine
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`docker-machine create --driver virtualbox myvm1`                           | 创建虚拟机（Mac、Win7、Linux）
`docker-machine create -d hyperv --hyperv-virtual-switch "myswitch" myvm1`  | Win10
`docker-machine env myvm1`                                                  | 查看有关您的节点的基本信息
`docker-machine ssh myvm1 "docker node ls"`                                 | 列出集群中的节点
`docker-machine ssh myvm1 "docker node inspect <node ID>"`                  | 检查节点
`docker-machine ssh myvm1 "docker swarm join-token -q worker"`              | 查看加入令牌
`docker-machine ssh myvm1`                                                  | 打开与 VM 的 SSH 会话； 输入“exit”结束
`docker-machine ssh myvm2 "docker swarm leave"`                             | 让工人离开群体
`docker-machine ssh myvm1 "docker swarm leave -f"`                          | 让主人离开，杀群
`docker-machine start myvm1`                                                | 启动当前未运行的 VM
`docker-machine stop $(docker-machine ls -q)`                               | 停止所有正在运行的虚拟机
`docker-machine rm $(docker-machine ls -q)`                                 | 删除所有虚拟机及其磁盘映像
`docker-machine scp docker-compose.yml myvm1:~`                             | 将文件复制到节点的主目录
`docker-machine ssh myvm1 "docker stack deploy -c <file> <app>"`            | 部署应用

另见
----

- [Dockerfile 备忘清单](./dockerfile.md) _(github.io)_
- [Docker 官方入门教程](https://docs.docker.com/get-started/) _(docker.com)_
- [Docker入门学习笔记](https://jaywcjlove.github.io/docker-tutorial) _(github.io)_