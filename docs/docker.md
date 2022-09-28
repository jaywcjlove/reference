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
<!--rehype:class=table-thead-hide-->

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
<!--rehype:class=table-thead-hide-->

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
<!--rehype:class=table-thead-hide-->


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




Docker Images
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
<!--rehype:class=table-thead-hide-->


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



Docker 联网
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
<!--rehype:class=table-thead-hide-->

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
<!--rehype:class=table-thead-hide-->


### 卷 volume

检查卷

```shell
$ docker volume ls
```

清理未使用的卷

```shell
$ docker volume prune
```