Docker 备忘清单
===

这是 [Docker](https://docs.docker.com/get-started/) 的快速参考备忘单。 你可以在这里找到最常见的 Docker 命令。

入门
----
<!--rehype:body-class=cols-2-->

### 入门

#### 安装

```shell
curl -sSL https://get.docker.com/ | sh
sudo chmod 777 /var/run/docker.sock
```

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
$ docker build --build-arg https_proxy=127.0.0.1:8088 # 使用http代理构建
$ curl example.com/remote/Dockerfile | docker build -f - .
$ docker save -o <保存路径>/myimage.tar myimage:latest # 导出
$ docker load -i <路径>/myimage.tar # 导入
```

### 删除 \<none> 镜像

```bash
$ docker rmi -f $(docker images | grep "none" | awk '{print $3}')
```

Docker 网络
----
<!--rehype:body-class=cols-2-->

### 创建网络

```shell
docker network create -d overlay MyOverlayNetwork
docker network create -d bridge MyBridgeNetwork
```

自定义网络子网和网关

```shell
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

### 操作
<!--rehype:wrap-class=row-span-3-->

获取容器连接的网络

```shell
docker inspect MyContainer | grep Network
```

获取有关网络的信息

```shell
docker network inspect <network_name>
```

将正在运行的容器连接到网络

```shell
docker network connect <network_name> <container_name>
```

启动时将容器连接到网络

```shell
docker run -it -d --network=<network_name> <container_name>
```

断开容器与网络的连接

```shell
docker network disconnect <network_name> <container_name>
```

### 删除网络

```bash
docker network rm <network_name>
```

### 列出网络

```shell
docker network ls
```

Docker 快捷键
----

需要特别注意的是，退出快捷键中的删除容器实例，只对于使用 `docker attach` 进入的容器生效，使用 `docker exec` 进入容器后，使用上面的快捷键后将隔离容器，且不会删除容器实例。

### 退出 - 关闭容器

| Docker 快捷键 | 说明 |
|------------|------|
`ctrl` `c` | 将关闭容器
<!--rehype:className=shortcuts-->

将关闭容器, 并删除当前的容器实例

### 退出 - 保留容器

| Docker 快捷键 | 说明 |
|------------|------|
`ctrl` `d` | 保留容器
<!--rehype:className=shortcuts-->

将保留容器，并退出到Docker主机的命令行界面

### 退出 - 容器分离

| Docker 快捷键 | 说明 |
|------------|------|
`ctrl` `p` `q` | 容器分离
<!--rehype:className=shortcuts-->

将容器分离，保留容器，但是不退出

各种各样的
----
<!--rehype:body-class=cols-2-->

### Docker Hub

```bash
$ docker search search_word  # 在 docker hub 中搜索镜像
$ docker pull user/image     # 从 docker hub 下载镜像
$ docker login               # 向 docker hub 进行身份验证
$ docker push user/image     # 将镜像上传到 docker hub
```

### 镜像仓库命令
<!--rehype:wrap-class=row-span-2-->

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
<!--rehype:className=left-align-->

### 卷 volume

```shell
$ docker volume ls    # 检查卷
$ docker volume prune # 清理未使用的卷
```

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
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`docker stack ls`                                 | 列出此 Docker 主机上所有正在运行的应用程序
`docker stack deploy -c <composefile> <appname>`  | 运行指定的 Compose 文件
`docker stack services <appname>`                 | 列出与应用关联的服务
`docker stack ps <appname>`                       | 列出与应用关联的正在运行的容器
`docker stack rm <appname>`                       | 拆掉一个应用程序
<!--rehype:className=left-align-->


### docker 主要命令
<!--rehype:wrap-class=row-span-3-->

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

### docker 管理命令

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
`docker secret`      | 管理 Docker 机密
`docker system`      | 管理 Docker
`docker volume`      | 管理卷
`docker search`      | 搜索镜像
<!--rehype:className=left-align-->

### 功能状态
<!--rehype:wrap-class=row-span-3-->
截至 2025 年 8 月最新官方信息，以下功能处于维护模式，建议迁移到Kubernetes，或者其他编排工具。

| 命令               | 用途          | 状态说明       |
| ---------------- | ----------- | ---------- |
| `docker swarm`   | 管理 Swarm 集群 | 维护模式       |
| `docker service` | Swarm 服务管理  | 维护模式       |
| `docker stack`   | Swarm 多服务部署 | 维护模式       |
| `docker node`    | Swarm 节点管理  | 维护模式       |
| `docker plugin`  | 插件管理        | 生态活跃度低，维护中 |

已废弃或被移除

| 命令                     | 用途                | 取代方式                                           |
| ---------------------- | ----------------- | ---------------------------------------------- |
| `docker-machine`       | 创建/管理远程 Docker 主机 | 使用 cloud provider CLI 或 SSH + `docker context` |
| `docker trust`         | 内容信任（Notary v1）   | 迁移到 **Notary v2**（镜像签名）                        |
| `docker app`           | CNAB 应用包管理        | 已并入 Compose/其他工具                               |
| `docker search`（旧 API） | Docker Hub 搜索     | 用 Hub Web API 或 CLI 插件                         |
| `docker manifest`（旧版本） | 多平台镜像管理           | 已集成到 `docker buildx imagetools`                |


### docker 全局参数

```bash
    --config string     # 客户端配置文件的位置（默认“~/.docker”）
-c, --context string    # 用于连接到守护程序的上下文的名称（
                        # 覆盖 DOCKER_HOST 环境变量和使用
                        # “docker context use” 设置的默认上下文）
-D, --debug             # 启用调试模式
-H, --host list         # 要连接的守护进程套接字
-l, --log-level string  # 设置日志级别
        # （默认“info”） ("debug"|"info"|"warn"|"error"|"fatal") 
    --tls               # 使用 TLS； 由 --tlsverify 暗示
    --tlscacert string  # 仅由该 CA 签署的信任证书
        #（默认为“~/.docker/ca.pem”）
    --tlscert string    # TLS证书文件路径
        #（默认“~/.docker/cert.pem”）
    --tlskey string     # TLS 密钥文件的路径
        #（默认为“~/.docker/key.pem”）
    --tlsverify         # 使用 TLS 并验证远程
-v, --version           # 打印版本信息并退出
```

### docker images

```bash
-a, --all             显示所有镜像（默认隐藏中间镜像）
    --digests         显示摘要
-f, --filter filter   根据提供的条件过滤输出
    --format string   使用 Go 模板打印漂亮的镜像
    --no-trunc        不要截断输出
-q, --quiet           仅显示镜像 ID
```

### docker run/create
<!--rehype:wrap-class=col-span-2-->

```bash
    --add-host list            # 添加自定义主机到 IP 映射 (host:ip)
-a, --attach list              # 连接到 STDIN、STDOUT 或 STDERR
    --blkio-weight uint16      # 块 IO（相对权重），介于 10 和 1000 之间，或 0 禁用（默认 0）
    --blkio-weight-device list # 块 IO 权重（相对设备权重）（默认 []）
    --cap-add list             # 添加 Linux 功能
    --cap-drop list            # 放弃 Linux 功能
    --cgroup-parent string     # 容器的可选父 cgroup
    --cgroupns string          # 要使用的 Cgroup 命名空间（主机|私有）
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

### 修改Docker镜像拉取地址

您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器

```bash
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://1ojaslt1.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker

```

### 修改 Docker 数据存储路径
<!--rehype:wrap-class=row-span-2-->

- 停止 Docker 服务：

    ```bash
    sudo systemctl stop docker
    ```

- 将现有的 Docker 数据移动到新的目录：

    ```bash
    sudo mv /var/lib/docker /new/path/docker
    ```

- 更新 Docker 的配置文件 `/etc/docker/daemon.json`，添加或修改 `data-root` 选项：

    ```json
    { "data-root": "/new/path/docker" }
    ```

- 重新启动 Docker 服务：

    ```bash
    sudo systemctl start docker
    ```
<!--rehype:className=style-timeline-->

⚠️注意：当你执行此操作时，旧的容器和镜像可能无法正常工作，因为它们的路径已更改。建议在部署 Docker 时执行此操作，以避免这些问题。如有必要，重新启动容器或重新创建它们，以确保它们的配置指向新的路径。

### Docker降级版本的方法

```bash
yum downgrade --setopt=obsoletes=0 \
    -y docker-ce-${version} docker-ce-selinux-${version}
```

`${version}` 指定要降级的版本

Docker 常用示例
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
    portainer/portainer-ce:latest
```

### Nginx
<!--rehype:wrap-class=row-span-2-->

```bash
docker run -itd -p 80:80 --restart=always --name Nginx \
-v $HOME/nginx_data/html:/usr/share/nginx/html \
-v $HOME/nginx_data/conf:/etc/nginx/conf.d \
-v $HOME/nginx_data/nginx.conf:/etc/nginx/nginx.conf \
nginx
```

#### 参数解释

- `-itd`: 启动容器并保持后台运行
- `-p 80:80`: 将主机的 80 端口映射到容器的 80 端口，用于访问 Nginx 站点页面
- `--name Nginx`: 给容器指定一个名称为 "Nginx"
- `--restart=always`: 在容器退出时，总是重新启动容器

#### 持久化解释

-- | --
:-- | --
`-v $HOME/nginx_data/html:/usr/share/nginx/html`| 将容器中的 Nginx 站点页面路径映射到本地
`-v $HOME/nginx_data/conf:/etc/nginx/conf.d`| 将容器中的 Nginx 虚拟主机配置文件路径映射到本地 *(需要提前准备好文件)*
`-v $HOME/nginx_data/nginx.conf:/etc/nginx/nginx.conf`| 将容器中的 Nginx 主配置文件路径映射到本地 *(需要提前准备好文件)*
<!--rehype:className=style-list-arrow-->

### Tomcat

```bash
docker run -itd -p 8080:8080 --restart=always \
--name Tomcat \
-v $HOME/Tomcat_data/webapps:/usr/local/tomcat/webapps/ROOT \
tomcat
```

#### 参数解释

- `-itd`: 以后台运行的方式启动容器，并分配一个伪终端（pseudo-TTY）和保持 STDIN 打开
- `-p 8080:8080`: 将主机的端口 8080 映射到容器的 8080 端口，用于访问 Tomcat 站点页面
- `--name Tomcat`: 为容器指定名称为 "Tomcat"
- `--restart=always`: 当容器退出时，总是重新启动容器

#### 持久化解释

将容器中的 `/usr/local/tomcat/webapps/ROOT` 路径挂载到宿主机中的 `$HOME/Tomcat_data/webapps` 目录下。

### Weblogic
<!--rehype:style=background:#d7a100;-->

```bash
docker run -itd \
-p 7001:7001 \
-p 7002:7002 \
-p 5556:5556 \
--restart=always --name Weblogic ismaleiva90/weblogic12
```

注意：`ismaleiva90/weblogic12` 是非官方或认证的 `Docker` 镜像！

#### 参数解释

- `-itd`: 后台运行容器，保持 STDIN 打开
- `-p 7001:7001`: 映射主机 7001 端口到容器 7001 端口，访问 Weblogic 控制台页面
- `-p 7002:7002`: 映射主机 7002 端口到容器 7002 端口，访问 Weblogic 站点页面
- `-p 5556:5556`: 映射主机 5556 端口到容器 5556 端口，访问 Weblogic 站点页面
- `--name Weblogic`: 容器名称为 "Weblogic"
- `--restart=always`: 容器退出时，总是重新启动容器

### MySQL
<!--rehype:wrap-class=row-span-2-->

```bash
docker run -d -it -p 3306:3306 --name MySQL --restart=always \
-v $HOME/MySQL_Data/data:/var/lib/mysql \
-v $HOME/MySQL_Data/conf:/etc/mysql/conf.d \
--privileged=true \
-e MYSQL_DATABASE='test_db' \
-e MYSQL_ROOT_PASSWORD='abc$123' \
-e MYSQL_USER='testuser' -e MYSQL_PASSWORD='abc$123' \
mysql:8.0.31 \
    --character-set-server=utf8mb4 \
    --collation-server=utf8mb4_unicode_ci
```

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 3306:3306` | 将主机的端口映射到容器的端口，这里是将主机的 3306 端口映射到容器的 3306 端口，用于访问 MySQL 数据库
`--name MySQL` | 为容器指定一个名称，这里是 "MySQL"
`--restart=always` | 表示当容器退出时，总是重新启动容器
`--privileged=true` | 若不加字段--privileged=true可能会报权限错误
`--character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci` | 这两个选项参数是改变所有表的默认编码和排序规则以使用 UTF-8 (utf8mb4)
<!--rehype:className=style-list-arrow-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/MySQL_Data/data:/var/lib/mysql` | 将容器中的 MySQL 数据库数据存储到本地，以确保在容器重启时数据得以保留。
`-v $HOME/MySQL_Data/conf:/etc/mysql/conf.d` | 将容器中的 MySQL 自定义配置文件路径映射到本地，以方便自定义配置。*请确保提前准备好文件，否则可能会启动失败*。
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

-- | --
:-- | --
`MYSQL_ROOT_PASSWORD` *【必填】* | 必需的变量，用于指定 MySQL 的 root 超级用户帐户的密码。如果设置了 *`MYSQL_RANDOM_ROOT_PASSWORD=yes`* ，则会随机生成一个密码，并打印到 stdout。
`MYSQL_USER` *【可选】* | 可选变量，用于创建新用户。此用户将被授予指定数据库的超级用户权限。需要同时设置 `MYSQL_PASSWORD` 变量。
`MYSQL_PASSWORD` *【可选】* | 可选变量，用于创建新用户并设置密码。此用户将被授予指定数据库的超级用户权限。需要同时设置 `MYSQL_USER` 变量。
`MYSQL_DATABASE` *【可选】* | 可选变量，允许在容器启动时指定要创建的数据库的名称。如果设置了 `MYSQL_USER` 和 `MYSQL_PASSWORD`，则该用户将被授予对此数据库的超级用户访问权限。
<!--rehype:className=style-list-arrow-->

### Oracle

```bash
docker run -d -it -p 1521:1521 --name Oracle_11g --restart=always \
--mount source=oracle_vol,target=/home/oracle/app/oracle/oradata \
registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

注意：registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g 是非官方或认证的Docker镜像！

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 1521:1521` | 将主机的端口映射到容器的端口，这里是将主机的 1521 端口映射到容器的 1521 端口，用于访问 Oracle 数据库
`--name Oracle_11g` | 为容器指定一个名称，这里是 "Oracle_11g"
`--restart=always` | 表示当容器退出时，总是重新启动容器
<!--rehype:className=style-list-arrow-->

#### 持久化解释

-- | --
:-- | --
`--mount source=oracle_vol,target=/home/oracle/app/oracle/oradata` | 将名为 "oracle_vol" 的 Docker 卷挂载到容器中的 "/home/oracle/app/oracle/oradata" 路径。这样做的目的是将 Oracle 数据库的数据存储在持久化的卷中，以便数据在容器重启时得以保留
<!--rehype:className=style-list-arrow-->

### PostgreSQL

```bash
docker run -d -p 5432:5432 --restart=always --name PostgreSQL \
-e POSTGRES_USER='postgres' \
-e POSTGRES_PASSWORD='abc$123' \
-e POSTGRES_DB='test' \
-e PGDATA=/var/lib/postgresql/data/pgdata \
-v $HOME/Postgres_Data:/var/lib/postgresql/data \
-d postgres
```

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 5432:5432` | 将主机的端口映射到容器的端口，这里是将主机的 5432 端口映射到容器的 5432 端口，用于访问 Postgre 数据库
`--name PostgreSQL` | 为容器指定一个名称，这里是 "PostgreSQL"
`--restart=always` | 表示当容器退出时，总是重新启动容器
<!--rehype:className=auto-wrap left-align-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/Postgres_Data:/var/lib/postgresql/data` | 将到容器中的 "/var/lib/postgresql/data" 路径映射挂载到 宿主机中的 ”$HOME/Postgres_Data“目录下,这样做的目的是将 Postgre 数据库的数据存储在本地中，以便数据在容器重启时得以保留
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

-- | --
:-- | --
`POSTGRES_PASSWORD` *【必填】* | PostgreSQL 映像所需的环境变量。设置 PostgreSQL 超级用户的密码。不能为空或未定义。
`POSTGRES_USER` *【可选】* | 可选环境变量，用于创建用户及其密码。创建具有超级用户权限的指定用户和同名的数据库。默认用户是 "postgres"。
`POSTGRES_DB` *【可选】* | 可选环境变量，用于定义首次启动映像时创建的默认数据库的名称。默认值是 `POSTGRES_USER` 的值，如果未设置，则默认为 "postgres"。
`PGDATA` *【可选】* | 默认为 `/var/lib/postgresql/data`。如果使用的数据卷是文件系统挂载点或无法被用户 chowned 的远程文件夹，则需要设置此环境变量以包含数据。
<!--rehype:className=style-list-arrow-->

### 达梦

```bash
docker run -d -p 5236:5236 --restart=always --name DaMengDB \
--privileged=true \
-e PAGE_SIZE=16 \
-e LD_LIBRARY_PATH=/opt/dmdbms/bin \
-e EXTENT_SIZE=32 \
-e BLANK_PAD_MODE=1 \
-e LOG_SIZE=1024 \
-e UNICODE_FLAG=1 \
-e LENGTH_IN_CHAR=1 \
-e INSTANCE_NAME=dm8_test \
-v $HOME/DaMeng_Data:/opt/dmdbms/data \
if010/dameng
```

注意：if010/dameng 是从官网下载上传至 Docker Hub 的镜像！

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 5236:5236` | 将主机的端口映射到容器的端口，这里是将主机的 5236 端口映射到容器的 5236 端口，用于访问达梦数据库
`--name DaMengDB` | 为容器指定一个名称，这里是 "DaMengDB"
`--restart=always` | 表示当容器退出时，总是重新启动容器
<!--rehype:className=auto-wrap left-align-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/DaMeng_Data:/opt/dmdbms/data` | 将容器中的达梦数据库数据存储路径 "/opt/dmdbms/data" 映射到本地主机的 "$HOME/DaMeng_Data" 目录，以确保在容器重启时数据得以保留
<!--rehype:className=style-list-arrow-->

### 人大金仓

```bash
docker run -idt -p 54321:54321 --restart=always \
--name Kingbase --privileged=true \
-e DB_MODE=oracle \
-e NEED_START=yes \
-e DB_USER=kingbase \
-e DB_PASSWORD=abc123 \
-e ENABLE_CI=yes \
-v $HOME/Kingbase_Data:/home/kingbase/userdata \
if010/kingbase:v009r001c001b0025 /usr/sbin/init
```

注意：`if010/kingbase:v009r001c001b0025` 是从官网下载上传至 Docker Hub 的镜像，官网提供了两个下载版本，一个是 `v008r006c008b0014`，另一个是 `v009r001c001b0025`，可以拉取对应的 `tag` 镜像进行测试使用！

#### 参数解释

-- | --
:-- | --
`-itd` | 以后台方式启动容器，保持 STDIN 打开
`-p 54321:54321` | 将主机的 54321 端口映射到容器的 54321 端口，访问数据库
`--name Kingbase` | 给容器指定名称为 "Kingbase"
`--restart=always` | 容器退出时，总是重新启动容器
<!--rehype:className=auto-wrap left-align-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/Kingbase_Data:/home/kingbase/userdata` | 将容器中的人大金仓数据库数据存储路径 "/home/kingbase/userdata" 映射到本地主机的 "$HOME/Kingbase_Data" 目录，以确保在容器重启时数据得以保留
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

-- | --
:-- | --
`DB_USER` *【可选】* | 设置用户及其密码，默认为 "system"
`DB_PASSWORD` *【可选】* | 设置用户密码，默认为 "123456"
`DB_MODE` *【可选】* | 设置数据库模式，支持的模式有 oracle、pg、mysql
`NEED_START` *【可选】* | 设置进入容器后是否启动数据库，默认为 "yes"
`ENABLE_CI` *【可选】* | 设置是否需要配置大小写敏感，默认为 "yes"
<!--rehype:className=auto-wrap left-align-->

### Redis

```bash
docker run -d -p 6379:6379 --restart=always --name Redis \
-v $HOME/Redis_Data/conf:/usr/local/etc/redis \
-v $HOME/Redis_Data/data:/data \
redis redis-server /usr/local/etc/redis/redis.conf
```

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 6379:6379` | 将主机的端口映射到容器的端口，这里是将主机的 6379 端口映射到容器的 6379 端口，用于访问 Redis 数据库
`--name Redis` | 为容器指定一个名称，这里是 "Redis"
`--restart=always` | 表示当容器退出时，总是重新启动容器
<!--rehype:className=style-list-arrow-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/Redis_Data/conf:/usr/local/etc/redis` | *(需提前准备好文件，否则可能会启动失败)* 将到容器中的 "/usr/local/etc/redis" 路径映射挂载到 宿主机中的"$HOME/Redis_Data/conf"目录下,这样子做的目的是可以自定义Redis的配置文件
`-v $HOME/Redis_Data/data:/data` | 将到容器中的 "/data" 路径映射挂载到 宿主机中的"$HOME/Redis_Data/data"目录下,这样做的目的是将 Redis 数据库的数据存储在本地中，以便数据在容器重启时得以保留
<!--rehype:className=style-list-arrow-->

#### 关于启动命令

-- | --
:-- | --
`redis-server /usr/local/etc/redis/redis.conf` | 容器内部执行该命令是为了按照我们自定义的配置文件启动，这个不是必须的！！！
<!--rehype:className=style-list-arrow-->

### Memcache

```bash
docker run -d -p 11211:11211 --name Memcached \
    --restart=always memcached memcached -m 64
```

#### 参数解释

- `-d`: 以后台方式启动容器。
- `-it`: 分配一个伪终端（pseudo-TTY）并保持 STDIN 打开。
- `-p 11211:11211`: 将主机的 11211 端口映射到容器的 11211 端口，用于访问 Memcached 消息队列的 web 管理界面。
- `--name Memcached`: 容器的名称为 "Memcached"。
- `--restart=always`: 容器退出时，总是重新启动容器。

#### 命令执行解释

- `memcached -m 64` 这会将 Memcached 服务器设置为使用 64 MB 进行存储

### MongoDB
<!--rehype:wrap-class=row-span-2-->

```bash
docker run -d -p 27017:27017 --restart=always --name MongoDB \
-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
-e MONGO_INITDB_ROOT_PASSWORD=abc123 \
-v $HOME/MongoDB_Data/data:/data/db \
-v $HOME/MongoDB_Data/conf:/etc/mongo \
mongo --config /etc/mongo/mongod.conf --wiredTigerCacheSizeGB 1.5
```

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 27017:27017` | 将主机的端口映射到容器的端口，这里是将主机的 27017 端口映射到容器的 27017 端口，用于访问 MongoDB 数据库
`--name MongoDB` | 为容器指定一个名称，这里是 "MongoDB"
`--restart=always` | 表示当容器退出时，总是重新启动容器
`--config /etc/mongo/mongod.conf` | 指定配置文件路径 (这个不是必须的，设置此选项之前需准备好mongod.conf文件映射到Docker内部)
`--wiredTigerCacheSizeGB 1.5` | 设置WiredTiger缓存大小限制为1.5G
<!--rehype:className=style-list-arrow-->

#### 持久化解释

-- | --
:-- | --
`-v $HOME/MongoDB_Data/conf:/etc/mongo` | 将到容器中的 "/etc/mongo" 路径映射挂载到 宿主机中的"$HOME/MongoDB_Data/conf"目录下,这样子做的目的是可以自定义MongoDB的配置文件 *(需提前准备好文件，否则可能会启动失败)*
`-v $HOME/Redis_Data/data:/data` | 将到容器中的 "/data/db" 路径映射挂载到 宿主机中的"$HOME/MongoDB_Data/data"目录下,这样做的目的是将 MongoDB 数据库的数据存储在本地中，以便数据在容器重启时得以保留
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

-- | --
:-- | --
`MONGO_INITDB_ROOT_USERNAME` *【可选】* | 该变量是创建管理员用户，该用户是在 admin 身份验证数据库中创建的，并被赋予角色 root，这是一个"超级用户"角色。
`MONGO_INITDB_ROOT_PASSWORD` *【可选】* | 该变量是为创建管理员用户设置密码，需配合 `MONGO_INITDB_ROOT_USERNAME` 变量参数使用
<!--rehype:className=style-list-arrow-->

### RabbitMQ

```bash
docker run -itd -p 15672:15672 --name RabbitMQ \
--hostname rmq-test \
-e RABBITMQ_DEFAULT_VHOST=rmq-test \
-e RABBITMQ_DEFAULT_USER=admin \
-e RABBITMQ_DEFAULT_PASS=abc123 \
rabbitmq:3-management 
```

#### 参数解释

-- | --
:-- | --
`-itd` | 表示以后台运行的方式启动容器,并分配一个伪终端（pseudo-TTY）和保持 STDIN 打开
`-p 15672:15672` | 将主机的端口映射到容器的端口，这里是将主机的 15672 端口映射到容器的 15672 端口，用于访问 RabbitMQ 控制台页面，内部除了该端口外，还开了4369/tcp、5671-5672/tcp、15671/tcp、15691-15692/tcp、25672/tcp
`--name RabbitMQ` | 为容器指定一个名称，这里是 "RabbitMQ"
`--restart=always` | 表示当容器退出时，总是重新启动容器
`--hostname` | 设置容器主机名称
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

-- | --
:-- | --
`RABBITMQ_DEFAULT_VHOST` *【可选】* | 该变量是可选的，是设置 RabbitMQ 的主机名称
`RABBITMQ_DEFAULT_USER` *【可选】* | 该变量是可选的，是设置 RabbitMQ 的账户
`RABBITMQ_DEFAULT_PASS` *【可选】* | 该变量是可选的，是设置 RabbitMQ 的密码
<!--rehype:className=auto-wrap left-align-->

### 远程协助工具 Guacd
<!--rehype:wrap-class=row-span-3-->

```bash
docker run -d -p 4822:4822 --privileged=true \
    --restart=always --name Guacd \
    -e LANG=zh_CN.UTF-8 \
    -v /docker_data/Guacd/rdp-rec:/rdp-rec \
    -v /docker_data/Guacd/rdp-file:/rdp-file \
    guacamole/guacd
```

#### 参数解释

-- | --
:-- | --
`-d` | 表示以后台运行的方式启动容器
`-it` | 分别表示分配一个伪终端（pseudo-TTY）并保持 STDIN 打开
`-p 4822:4822` | 将主机的端口映射到容器的端口，这里是将主机的 4822 端口映射到容器的 4822 端口，用于访问 Guacd远程的API接口
`--name Guacd` | 为容器指定一个名称，这里是 "Guacd"
`--restart=always` | 表示当容器退出时，总是重新启动容器
`--privileged=true` | 若不加字段--privileged=true可能会报权限错误
<!--rehype:className=style-list-arrow-->

#### 持久化解释

-- | --
:-- | --
`-v /docker_data/Guacd/rdp-rec:/rdp-rec` | 代码内固定配置，guacd服务rdp录屏文件存放路径
`-v /docker_data/Guacd/rdp-file:/rdp-file` | 代码内固定配置，guacd服务rdp远程磁盘文件存放路
<!--rehype:className=style-list-arrow-->

#### 环境变量解释

- `LANG` 设置字符编码格式

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
- [快速安装Docker及配置及Docker配置、Docker常用命令](https://www.loganjin.cn/article/docker-install/)
