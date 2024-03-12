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

- `-d` - 以分离（后台）模式运行容器
- `-p 80:80` -  将端口 80 映射到容器中的端口 80，格式：宿主机端口:容器端口
- `docker/getting-started` - 要使用的镜像

在前台创建并运行容器（之后如果要退出容器但是不关闭容器，按*Ctrl+P+Q*即可）

```shell
$ docker run -it --rm -p  8001:8080 --name my-nginx nginx
```

----

- `-it` - 交互式 bash 模式
- `--rm` - 容器终止运行后自动删除容器文件
- `-p 8001:8080` - 将 `8001` 端口映射到容器中的 `8080` 端口
- `--name my-nginx` - 指定名称
- `nginx` - 要使用的镜像

### 一般命令

| Example                             | Description                                      |
|-------------------------------------|--------------------------------------------------|
| `docker ps`                         | 列出正在运行的容器                                  |
| `docker ps -a`                      | 列出所有容器                                  |
| `docker ps -s`                      | 列出正在运行的容器 *(带 CPU / 内存)*        |
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
<!--rehype:wrap-class=row-span-2-->

| `Example` | Description |
|-----------|-----------|
`docker images`                    | 列出镜像
`docker rmi nginx`                 | 删除镜像
`docker load < ubuntu.tar.gz`      | 加载一个 tarred 存储库
`docker load --input ubuntu.tar`   | 加载一个 tarred 存储库
`docker save busybox > ubuntu.tar` | 将镜像保存到 tar 存档
`docker history`                   | 显示镜像的历史
`docker commit nginx my_nginx`     | 将容器另存为镜像
`docker tag nginx eon01/nginx`     | 标记镜像
`docker push eon01/nginx`          | 推送镜像

### 构建镜像

```shell
# 注意有的最后面是英文 .
$ docker build .
$ docker build github.com/creack/docker-firefox
$ docker build - < Dockerfile
$ docker build - < context.tar.gz
$ docker build -t eon/nginx-server .
$ docker build -f myOtherDockerfile .
$ curl example.com/remote/Dockerfile | docker build -f - .
```

### 删除 \<none> 镜像

```bash
$ docker rmi -f $(docker images | grep "none" | awk '{print $3}')
```

Docker 网络
----
<!--rehype:body-class=cols-2-->

### 操作

获取容器连接的网络

```shell
docker inspect MyContainer | grep Network
```

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

Docker 快捷键
----
<!--rehype:body-class=cols-2-->

### 退出

| Docker 快捷键 | 说明 |
|------------|------|
`ctrl+c` | 将关闭容器，并删除当前的容器实例
`ctrl+d` | 将保留容器，并退出到Docker主机的命令行界面
`ctrl+p+q` | 将容器分离，保留容器，但是不退出

需要特别注意的是，上面的退出快捷键中的删除容器实例只对于使用`docker attach`进入的容器生效，使用`docker exec`进入容器后使用上面的快捷键后将隔离容器且不会删除容器实例。

各种各样的
----
<!--rehype:body-class=cols-2-->

### Docker Hub

| Docker 语法 | 说明 |
|------------|------|
`docker search search_word` | 在 docker hub 中搜索镜像
`docker pull user/image` | 从 docker hub 下载镜像
`docker login` | 向 docker hub 进行身份验证
`docker push user/image` | 将镜像上传到 docker hub

### 镜像仓库命令
<!--rehype:wrap-class=row-span-3-->

登录到镜像仓库

```shell
$ docker login
$ docker login localhost:8080
```

从镜像仓库注销

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
`docker rmi -f $(docker images -q)` | 删除所有镜像
`docker volume prune` | 删除所有未使用的Docker Volume
`docker network prune` | 删除所有未使用的Docker网络
`docker system prune` | 清理所有空闲或与任何Docker容器无关的资源
`docker image prune` | 删除悬空的Docker镜像
`docker container prune` | 删除所有未使用的Docker 容器

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
`docker-compose pull` | 拉取所有服务的镜像
`docker-compose build` | 构建所有服务的镜像
`docker-compose config` | 验证并查看 Compose 文件
`docker-compose scale <service_name>=<replica>` | 为服务指定容器个数
`docker-compose top` | 显示正在运行的进程
`docker-compose run -rm -p 2022:22 web bash` | 启动 Web 服务并运行 bash 作为其命令，删除旧容器

### Docker Services

:- | :-
:- | :-
`docker service create <options> <image> <command>`   | 创建新服务
`docker service inspect --pretty <service_name>`      | 显示详细信息服务
`docker service ls`                                   | 列出服务
`docker service ps`                                   | 列出服务的任务
`docker service scale <service_name>=<replica>`       | 规模特殊服务
`docker service update <options> <service_name>`      | 更新服务选项
<!--rehype:className=left-align-->

### Docker Stack

:- | :-
:- | :-
`docker stack ls`                                 | 列出此 Docker 主机上所有正在运行的应用程序
`docker stack deploy -c <composefile> <appname>`  | 运行指定的 Compose 文件
`docker stack services <appname>`                 | 列出与应用关联的服务
`docker stack ps <appname>`                       | 列出与应用关联的正在运行的容器
`docker stack rm <appname>`                       | 拆掉一个应用程序
<!--rehype:className=left-align-->

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
<!--rehype:className=left-align-->

### docker 主要命令

:- | :-
:- | :-
`attach`   | 将本地标准输入、输出和错误流附加到正在运行的容器
`build`    | 从 Dockerfile 构建镜像
`commit`   | 从容器的更改创建新镜像
`cp`       | 在容器和本地文件系统之间复制文件/文件夹
`create`   | 创建一个新容器
`diff`     | 检查容器文件系统上文件或目录的更改
`events`   | 从服务器获取实时事件
`exec`     | 在正在运行的容器中运行命令
`export`   | 将容器的文件系统导出为 tar 存档
`history`  | 显示镜像的历史
`images`   | 列出镜像
`import`   | 从 tarball 导入内容以创建文件系统映像
`info`     | 显示系统范围的信息
`inspect`  | 返回有关 Docker 对象的低级信息
`kill`     | 杀死一个或多个正在运行的容器
`load`     | 从 tar 存档或 STDIN 加载镜像
`login`    | 登录到 Docker 注册表
`logout`   | 从 Docker 注册表中注销
`logs`     | 获取容器的日志
`pause`    | 暂停一个或多个容器内的所有进程
`port`     | 列出容器的端口映射或特定映射
`ps`       | 列出容器
`pull`     | 从注册表中提取镜像或存储库
`push`     | 将镜像或存储库推送到注册表
`rename`   | 重命名容器
`restart`  | 重启一个或多个容器
`rm`       | 移除一个或多个容器
`rmi`      | 移除一张或多张镜像
`run`      | 在新容器中运行命令
`save`     | 将一个或多个镜像保存到 tar 存档（默认流式传输到 STDOUT）
`search`   | 在 `Docker Hub` 中搜索镜像
`start`    | 启动一个或多个停止的容器
`stats`    | 显示容器资源使用统计的实时流
`stop`     | 停止一个或多个正在运行的容器
`tag`      | 创建一个引用 SOURCE_IMAGE 的标记 TARGET_IMAGE
`top`      | 显示容器的运行进程
`unpause`  | 取消暂停一个或多个容器中的所有进程
`update`   | 更新一个或多个容器的配置
`version`  | 显示 Docker 版本信息
`wait`     | 阻塞直到一个或多个容器停止，然后打印它们的退出代码
<!--rehype:className=left-align-->

### docker run/create
<!--rehype:wrap-class=row-span-3-->

```bash
    --add-host list            # 添加自定义主机到 IP 映射 (host:ip)
-a, --attach list              # 连接到 STDIN、STDOUT 或 STDERR
    --blkio-weight uint16      # 块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）
    --blkio-weight-device list # 块 IO 权重（相对设备权重）（默认 []）
    --cap-add list             # 添加 Linux 功能
    --cap-drop list            # 放弃 Linux 功能
    --cgroup-parent string     # 容器的可选父 cgroup
    --cgroupns string   # 要使用的 Cgroup 命名空间（主机|私有）
                        #  'host':    在 Docker 主机的 cgroup 命名空间中运行容器
                        #  'private': 在自己的私有 cgroup 命名空间中运行容器
                        #  '':        使用由守护进程上的 
                        #        default-cgroupns-mode 选项配置的 cgroup 命名空间（默认）
    --cidfile string           # 将容器 ID 写入文件
    --cpu-period int           # 限制 CPU CFS（完全公平调度器）周期
    --cpu-quota int            # 限制 CPU CFS（完全公平调度器）配额
    --cpu-rt-period int        # 以微秒为单位限制 CPU 实时周期
    --cpu-rt-runtime int       # 以微秒为单位限制 CPU 实时运行时间
-c, --cpu-shares int           # CPU 份额（相对权重）
    --cpus decimal             # CPU 数量
    --cpuset-cpus string       # 允许执行的 CPU (0-3, 0,1)
    --cpuset-mems string       # 允许执行的 MEM (0-3, 0,1)
    --device list              # 将主机设备添加到容器
    --device-cgroup-rule list  # 将规则添加到 cgroup 允许的设备列表
    --device-read-bps list     # 限制设备的读取速率（每秒字节数）（默认 []）
    --device-read-iops list    # 限制设备的读取速率（每秒 IO）（默认 []）
    --device-write-bps list    # 限制设备的写入速率（每秒字节数）（默认 []）
    --device-write-iops list   # 限制设备的写入速率（每秒 IO）（默认 []）
    --disable-content-trust    # 跳过镜像验证（默认为 true）
    --dns list                 # 设置自定义 DNS 服务器
    --dns-option list          # 设置 DNS 选项
    --dns-search list          # 设置自定义 DNS 搜索域
    --domainname string        # 容器 NIS 域名
    --entrypoint string        # 覆盖镜像的默认入口点
-e, --env list                 # 设置环境变量
    --env-file list            # 读入环境变量文件
    --expose list              # 公开一个端口或一系列端口
    --gpus gpu-request         # 要添加到容器中的 GPU 设备（“全部”以传递所有 GPU）
    --group-add list           # 添加其他组以加入
    --health-cmd string        # 运行以检查运行状况的命令
    --health-interval duration # 运行检查之间的时间 (ms|s|m|h) (默认 0s)
    --health-retries int           # 需要报告不健康的连续失败
    --health-start-period duration # 开始健康重试倒计时之前容器初始化的开始时间（ms|s|m|h）（默认 0s）
    --health-timeout duration      # 允许运行一项检查的最长时间 (ms|s|m|h) (默认 0s)
    --help                     # 打印使用
-h, --hostname string          # 容器主机名
    --init                     # 在容器内运行一个 init 来转发信号并收获进程
-i, --interactive              # 即使没有连接，也保持 STDIN 打开
    --ip string                # IPv4 地址（例如 172.30.100.104）
    --ip6 string               # IPv6 地址（例如，2001:db8::33）
    --ipc string               # 要使用的 IPC 模式
    --isolation string         # 容器隔离技术
    --kernel-memory bytes      # 内核内存限制
-l, --label list               # 在容器上设置元数据
    --label-file list          # 读入以行分隔的标签文件
    --link list                # 添加到另一个容器的链接
    --link-local-ip list       # 容器 IPv4/IPv6 链路本地地址
    --log-driver string        # 容器的日志记录驱动程序
    --log-opt list             # 日志驱动程序选项
    --mac-address string       # 容器 MAC 地址（例如 92:d0:c6:0a:29:33）
-m, --memory bytes             # 内存限制
    --memory-reservation bytes # 内存软限制
    --memory-swap bytes        # 交换限制等于内存加上交换：'-1' 启用无限交换
    --memory-swappiness int    # 调整容器内存交换（0 到 100）（默认 -1）
    --mount mount              # 将文件系统挂载附加到容器
    --name string              # 为容器分配名称
    --network network          # 将容器连接到网络
    --network-alias list       # 为容器添加网络范围的别名
    --no-healthcheck           # 禁用任何容器指定的 HEALTHCHECK
    --oom-kill-disable         # 禁用 OOM 杀手
    --oom-score-adj int        # 调整主机的 OOM 首选项（-1000 到 1000）
    --pid string               # 要使用的 PID 命名空间
    --pids-limit int           # 调整容器 pids 限制（设置 -1 表示无限制）
    --platform string          # 如果服务器支持多平台，则设置平台
    --privileged               # 授予此容器扩展权限
-p, --publish list             # 将容器的端口发布到主机
-P, --publish-all              # 将所有暴露的端口发布到随机端口
    --pull string              # 创建前拉取镜像("always"|"missing"|"never")(默认"missing")
    --read-only                # 将容器的根文件系统挂载为只读
    --restart string           # 容器退出时应用的重启策略（默认“否”）
    --rm                       # 容器退出时自动移除
    --runtime string           # 用于此容器的运行时
    --security-opt list        # 安全选项
    --shm-size bytes           # /dev/shm 的大小
    --stop-signal string       # 停止容器的信号（默认“SIGTERM”）
    --stop-timeout int         # 停止容器的超时（以秒为单位）
    --storage-opt list         # 容器的存储驱动程序选项
    --sysctl map               # Sysctl 选项（默认 map[]）
    --tmpfs list               # 挂载 tmpfs 目录
-t, --tty                      # 分配一个伪 TTY
    --ulimit ulimit            # ulimit 选项（默认 []）
-u, --user string              # 用户名或 UID（格式：<name|uid>[:<group|gid>]）
    --userns string            # 要使用的用户命名空间
    --uts string               # 要使用的 UTS 命名空间
-v, --volume list              # 绑定挂载卷
    --volume-driver string     # 容器的可选卷驱动程序
    --volumes-from list        # 从指定容器挂载卷
-w, --workdir string           # 容器内的工作目录
```

`run`/`create` 大部分参数一致

### docker 全局参数

```bash
    --config string     # 客户端配置文件的位置（默认“~/.docker”）
-c, --context string    # 用于连接到守护程序的上下文的名称（
                        # 覆盖 DOCKER_HOST 环境变量和使用“docker context use”设置的默认上下文）
-D, --debug             # 启用调试模式
-H, --host list         # 要连接的守护进程套接字
-l, --log-level string  # 设置日志级别("debug"\|"info"\|"warn"\|"error"\|"fatal") （默认“info”）
    --tls               # 使用 TLS； 由 --tlsverify 暗示
    --tlscacert string  # 仅由该 CA 签署的信任证书（默认为“~/.docker/ca.pem”）
    --tlscert string    # TLS证书文件路径（默认“~/.docker/cert.pem”）
    --tlskey string     # TLS 密钥文件的路径（默认为“~/.docker/key.pem”）
    --tlsverify         # 使用 TLS 并验证远程
-v, --version           # 打印版本信息并退出
```

### docker 管理命令
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`docker builder`     | 管理构建
`docker buildx*`     | Docker Buildx（Docker Inc.，v0.7.1）
`docker compose*`    | Docker Compose（Docker Inc.，v2.2.3）
`docker config`      | 管理 Docker 配置
`docker container`   | 管理容器
`docker context`     | 管理上下文
`docker image`       | 管理镜像
`docker manifest`    | 管理 Docker 镜像清单和清单列表
`docker network`     | 管理网络
`docker node`        | 管理 Swarm 节点
`docker plugin`      | 管理插件
`docker scan*`       | Docker 扫描（Docker Inc.，v0.16.0）
`docker secret`      | 管理 Docker 机密
`docker service`     | 管理服务
`docker stack`       | 管理 Docker 堆栈
`docker swarm`       | 管理群
`docker system`      | 管理 Docker
`docker trust`       | 管理对 Docker 映像的信任
`docker volume`      | 管理卷

### docker images

```bash
-a, --all             显示所有镜像（默认隐藏中间镜像）
    --digests         显示摘要
-f, --filter filter   根据提供的条件过滤输出
    --format string   使用 Go 模板打印漂亮的镜像
    --no-trunc        不要截断输出
-q, --quiet           仅显示镜像 ID
```

Docker 示例
---
<!--rehype:body-class=cols-2-->

### Docker Web 管理工具 portainer

```bash
$ docker run -d --name portainer \
  -p 8000:8000 \
  -p 9443:9443 \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $HOME/portainer:/data \
    portainer/portainer-ee:latest
```

### 在线代码编辑器 Code Server

```bash
$ mkdir -p ~/.config
$ docker run -it --name code-server  \
  -p 127.0.0.1:8080:8080 \
  -v "$HOME/.config/code-server:/home/coder/.config" \
  -v "$PWD:/home/coder/project" \
  -u "$(id -u):$(id -g)" \
  -e "DOCKER_USER=$USER" \
    codercom/code-server:latest
```

### MySQL

```bash
$ docker run --name mysql \
  -p 3306:3306 \
  -v $HOME/mysql/conf.d:/etc/mysql/conf.d \
  -v $HOME/mysql/data:/var/lib/mysql \
  -v /etc/localtime:/etc/localtime:ro \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:5.7.23
```

### Redis

```bash
$ docker run -d --name myredis \
  -v $HOME/redis/conf:/usr/local/etc/redis \
  -v /etc/localtime:/etc/localtime:ro \
    redis redis-server /usr/local/etc/redis/redis.conf
```

### Nginx

```bash
$ docker run --name my-nginx \ 
  -v "$HOME/nginx/nginx.conf:/etc/nginx/nginx.conf:ro" \
  -v "$HOME/nginx/html:/usr/share/nginx/html:ro" \
  -p 8080:80 \
  -d nginx
```

### PostgreSQL

```bash
$ docker run --name my-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v $HOME/nginx/mount:/var/lib/postgresql/data \
  -d postgres
```

### 媒体管理工具 Dim

```bash
$ docker run --name my-dim \
   -p 8000:8000/tcp \
   -v $HOME/.config/dim:/opt/dim/config \
   -v $HOME/dim/media:/media:ro \
   -d ghcr.io/dusk-labs/dim:dev
```

[Github](https://github.com/Dusk-Labs/dim)

### Gitlab

```bash
$ docker run -d --name gitlab \
  --hostname gitlab.example.com \
  --publish 8443:443 --publish 8081:80 -p 2222:22 \
  --restart always \
  --volume $HOME/gitlab/config:/etc/gitlab \
  --volume $HOME/gitlab/logs:/var/log/gitlab \
  --volume $HOME/gitlab/data:/var/opt/gitlab \
  -v /etc/localtime:/etc/localtime \
  --shm-size 256m \
    gitlab/gitlab-ce:latest
```

另见
----

- [Dockerfile 备忘清单](./dockerfile.md) *(github.io)*
- [Docker 官方入门教程](https://docs.docker.com/get-started/) *(docker.com)*
- [Docker入门学习笔记](https://jaywcjlove.github.io/docker-tutorial) *(github.io)*
