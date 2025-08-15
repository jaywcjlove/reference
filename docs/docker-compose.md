Docker Compose 备忘清单
===

这是 [docker-compose](https://docs.docker.com/compose/) 的快速参考备忘单。你可以在这里找到最常见的 Docker Compose 使用方式。

入门
---

### Docker Compose 是什么？

- **Docker Compose** 是由 [Docker](./docker.md) 社区维护的开源工具，用于定义和运行多容器应用。
- 通过单个 [YAML](./yaml.md) 文件配置服务，可用一条命令启动、停止或重启整个应用。
- [Docker Compose 开源地址](https://github.com/docker/compose)
- [Docker Compose 发行地址](https://github.com/docker/compose/releases) _github.com_

### 基本概念

- **服务 (services):** 一个服务指的是一个容器，即一个应用程序的一个实例。
- **容器 (container):** [Docker](./docker.md) 容器，其中运行着应用程序的一个实例。
- **镜像 (image):** [Docker](./docker.md) 镜像，用于创建容器的模板。
- **Docker-Compose 文件：** 一个 [YAML](./yaml.md) 文件，描述了应用程序的各个服务以及它们之间的关系、配置等信息。

### Docker-Compose 文件结构

- `version`: _Docker-Compose_ 文件的版本。
- `services`: 定义了各个服务，每个服务都有自己的配置项，如镜像、端口映射、依赖等。
- `networks`: 定义了应用程序使用的网络，可以自定义网络以控制服务之间的通信。
- `volumes`: 定义了应用程序使用的卷，用于持久化数据或与主机共享文件。

### 安装
<!--rehype:wrap-class=row-span-2-->

Docker 20.10 起，CLI 支持插件机制，官方已将 Compose 迁移为 CLI 插件。推荐使用 `docker compose`（空格，无横线），旧项目如需兼容 `docker-compose` 可安装 `docker-compose-plugin` 或使用软链接。

```bash
sudo ln -s /usr/lib/docker/cli-plugins/docker-compose /usr/local/bin/docker-compose
```
<!--rehype:className=wrap-text-->

对于 Ubuntu 和 Debian，运行：

```bash
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

对于基于 RPM 的发行版，运行：

```bash
sudo yum update
sudo yum install docker-compose-plugin
```

通过检查版本来验证 Docker Compose 是否正确安装

```sh
docker compose version
# Docker Compose version v2.17.3

docker --version
# Docker version 23.0.5, build bc4487a

docker version
# Client: Docker Engine - Community
# Cloud integration: v1.0.31
# Version:           23.0.5
# API version:       1.42
# <...>
```

### 独立安装 Compose

```sh
curl -SL https://github.com/docker/compose/releases/download/v2.27.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
```
<!--rehype:className=wrap-text-->

如果命令 `docker-compose` 安装失败，请检查你的路径。你也可以创建一个符号链接，指向 `/usr/bin` 或路径中的任何其他目录。例如

```sh
$ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```
<!--rehype:className=wrap-text-->

### 更新 Compose

对于 Ubuntu 和 Debian，运行：

```sh
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

对于基于 RPM 的发行版，运行：

```sh
sudo yum update
sudo yum install docker-compose-plugin
```

### 卸载 Docker Compose
<!--rehype:wrap-class=col-span-2-->

Ubuntu, Debian:

```sh
sudo apt-get remove docker-compose-plugin
```

基于 RPM 的发行版

```sh
sudo yum remove docker-compose-plugin
```

如果您使用curl安装Compose CLI插件，要卸载它，请运行：

```sh
rm $DOCKER_CONFIG/cli-plugins/docker-compose
```

为所有用户删除，或者，如果您已为所有用户安装 Compose，请运行：

```sh
rm /usr/local/lib/docker/cli-plugins/docker-compose
```

### 检查 Compose 的安装位置
<!--rehype:wrap-class=col-span-3-->

```sh
docker info --format '{{range .ClientInfo.Plugins}}{{if eq .Name "compose"}}{{.Path}}{{end}}{{end}}'
```

### 常用命令
<!--rehype:wrap-class=col-span-2-->

| docker compose命令       | 说明             | 常见参数说明         |
| ------------------------ | ---------------- | -------------------- |
| `docker compose up`      | 启动容器         | `-d` 后台运行容器    |
| `docker compose down`    | 停止容器         | `-v` 删除容器和卷    |
| `docker compose logs`    | 查看容器日志     | `-f` 跟随日志输出    |
| `docker compose exec`    | 进入容器         | `-it` 启动交互式终端 |
| `docker compose pull`    | 拉取镜像         |                      |
| `docker compose build`   | 构建镜像         |                      |
| `docker compose images`  | 列出镜像         |                      |
| `docker compose push`    | 推送镜像         |                      |
| `docker compose config`  | 显示配置信息     |                      |
| `docker compose version` | 查看版本信息     |                      |
<!--rehype:className=left-align-->

### 常用运维命令

| docker compose命令       | 说明             |
| ------------------------ | ---------------- |
| `docker compose stop`    | 停止容器         |
| `docker compose start`   | 启动容器         |
| `docker compose rm`      | 删除容器         |
| `docker compose restart` | 重启容器         |
| `docker compose run`     | 运行一个临时容器 |
| `docker compose ps`      | 查看容器状态     |
<!--rehype:className=left-align-->

### 其他命令
<!--rehype:wrap-class=col-span-3-->

```bash
docker compose up -d --remove-orphans --pull always --force-recreate
```

| 参数 | 说明|
|-----|----|
| `-d / --detach`     | 后台运行容器。|
| `--remove-orphans`  | 删除孤儿容器和网络配置。|
| `--pull always`     | 每次启动前都从远程仓库拉取最新镜像，确保使用最新镜像，而不是本地缓存。还可以用--pull missing（只拉不存在的镜像）或 --pull never（不拉取）。|
| `--force-recreate`  | 强制重新创建容器，即使配置或镜像没有变化。|
<!--rehype:className=left-align-->

Docker Compose 配置
---

### 示例配置文件
<!--rehype:wrap-class=col-span-2-->

`docker-compose` 使用 [YAML](./yaml.md) 文件定义和运行多容器应用，通常命名为 `docker-compose.yml`（新版本建议用 `compose.yaml`）。
该文件集中描述多个容器的服务、依赖关系等。下面是一个包含常用配置项和说明的模板：

```yml
name: myapp
version: '3' # 已过时

services:  # 定义一个或多个服务
  service1:  # 服务名称
    image: nginx:latest  # 使用的 Docker 镜像，这里是 Nginx 的最新版本
    # 或者使用构建指令来从 Dockerfile 构建镜像
    build:
      context: ./path/to/Dockerfile  # Dockerfile 所在的目录
      dockerfile: Dockerfile-alternative  # 可选的 Dockerfile 名称，默认是 Dockerfile
    # 容器启动时执行的命令，覆盖默认的命令
    command: 
      - "nginx"
      - "-g"
      - "daemon off;"  # 以数组形式指定，防止 shell 解析
    ports:       # 容器端口与主机端口映射
      - "80:80"  # 主机 80 端口映射到容器的 80 端口

    volumes:  # 数据卷挂载
      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # 将主机上的 nginx.conf 
                                              # 挂载到容器的 /etc/nginx/nginx.conf，只读
      - ./logs:/var/log/nginx  # 将 logs 目录挂载到容器的 /var/log/nginx
    environment:  # 设置环境变量
      - MYSQL_HOST=database  # 可以引用其他服务，这里假设有一个名为 database 的服务
      - MYSQL_PORT=3306
    depends_on:  # 服务启动顺序，这里表明 service1 依赖于 database 服务
      - database
    networks:  # 定义网络
      - my_network  # 参与名为 my_network 的网络

  service2:  # 另一个服务示例
    # ... 类似地定义其他服务

networks:       # 定义网络
  my_network:  # 网络名称
    driver: bridge  # 网络驱动，通常是 bridge 模式

volumes:  # 定义数据卷
  nginx_logs:  # 卷名称

```

备忘录事项

- 使用 Docker-Compose 可以简化多容器应用程序的部署和管理，但需要注意容器之间的依赖关系和通信。
- 配置文件中的缩进必须使用空格，不能使用制表符。
- 可以使用环境变量来动态设置配置项，如数据库密码。
- 当你修改了 `docker-compose.yml` 文件后，需要重新运行 `docker compose up` 来使改动生效。
- 使用 `docker compose build` 仅重建镜像，而不启动容器。
- 使用 `docker compose restart` 重启容器。
- 记得清理不再需要的容器和镜像，以避免磁盘空间不足。

### 使用环境变量

与 `docker run -e VARIABLE=VALUE ...` 相同

```yml
web:
  environment:
    - DEBUG=1
```

您可以选择不设置值并将环境变量从 shell 直接传递到容器。它的工作方式与 `docker run -e VARIABLE ...` 相同：

```yml
web:
  environment:
    - DEBUG
web:
  environment:
    - DEBUG=${DEBUG}
```

`env_file` 属性允许您在 Compose 应用程序中使用多个 `.env` 文件。
它的工作方式与 `docker run --env-file=FILE ...` 相同。

```yml
web:
  env_file:
    - web-variables.env
```

#### 额外的信息

```yml
env_file:
  - path: ./default.env
    required: true # default
  - path: ./override.env
    required: false
```

- 如果指定了多个文件，则它们将按顺序进行评估，可以覆盖先前文件中设置的值。
- 在 `.env` 文件中声明的环境变量不能在 Compose 文件中单独再次引用。
- 如果同时使用 `env_file` 和 `environment` 属性，则由 `environment` 设置的环境变量优先级更高。
- 在 `env_file` 属性中指定的 `.env` 文件的路径是相对于 compose.yml 文件的位置的。
- `.env` 文件中的值可以通过使用 `docker compose run -e` 命令行来从命令行覆盖。
- 如果使用 `--env-file` 替换了另一个 `.env`，则您的 `.env` 文件可以被另一个 `.env` 文件覆盖。
- 从 Docker Compose 版本 2.24.0 开始，您可以通过使用 `required` 字段将 `.env` 文件设置为可选项。当 `required` 设置为 `false` 且 `.env` 文件丢失时，Compose 将静默忽略该条目

### image

```yml
image: redis
image: redis:5
image: redis@sha256:0ed5d5928d473745...
image: library/redis
image: docker.io/library/redis
image: my_private.registry:5000/redis
```

### ports 端口
<!--rehype:wrap-class=col-span-2 row-span-2-->

```yml
ports:
  # 将容器的端口 3000 映射到主机的随机端口
  - "3000"
  # 将容器的端口范围从 3000 到 3005 映射到主机的相同端口范围
  - "3000-3005"
  # 将容器的端口 8000 映射到主机的端口 8000
  - "8000:8000"
  # 将容器的端口范围从 8080 到 8081 映射到主机的端口范围从 9090 到 9091
  - "9090-9091:8080-8081"
  # 将容器的端口 22（SSH端口）映射到主机的端口 49100
  - "49100:22"
  # 将容器的端口范围从 8000 到 9000 映射到主机的端口 80
  - "8000-9000:80"
  # 将容器的端口 8001 映射到主机的 127.0.0.1 地址的端口 8001
  - "127.0.0.1:8001:8001"
  # 将容器的端口范围从 5000 到 5010 映射到主机的 127.0.0.1 地址的相同端口范围
  - "127.0.0.1:5000-5010:5000-5010"
  # 将容器的 UDP 端口 6060 映射到主机的端口 6060
  - "6060:6060/udp"
```

暴露容器端口

### platform 平台

```yml
platform: darwin
platform: windows/amd64
platform: linux/arm64/v8
```

定义了服务容器运行的目标平台。值必须符合 [OCI Image Spec](https://github.com/opencontainers/image-spec/blob/v1.0.2/image-index.md) 使用的约定

### command
<!--rehype:wrap-class=col-span-2-->

会覆盖容器镜像声明的默认命令，例如 Dockerfile 的 CMD。

```yml
command: bundle exec thin -p 3000
```

该值也可以是一个列表，其方式类似于 Dockerfile：

```yml
command: [ "bundle", "exec", "thin", "-p", "3000" ]
```

如果该值为 null，则使用映像中的默认命令。如果值为 []（空列表）或 ''（空字符串），则忽略图像声明的默认命令，即覆盖为空。

### depends_on

```yml
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
```

服务之间的启动和关闭依赖关系。

### volumes
<!--rehype:wrap-class=col-span-2-->

下面的示例显示了双服务设置，其中数据库的数据目录作为名为 db-data 的卷与另一个服务共享，以便定期备份。

```yml
services:
  backend:
    image: example/database
    volumes:
      - db-data:/etc/data

  backup:
    image: backup-service
    volumes:
      - db-data:/var/lib/backup/data

volumes:
  db-data:
```

db-data 卷安装在 `/var/lib/backup/data` 和 `/etc/data` 容器路径中，分别用于备份和后端。如果卷尚不存在，则运行 `docker compose up` 会创建该卷。否则，如果在 Compose 外部手动删除现有卷，则会使用并重新创建现有卷。

#### driver

指定应使用哪个卷驱动程序。如果驱动程序不可用，Compose 将返回错误并且不会部署应用程序。

```yml
volumes:
  db-data:
    driver: foobar
```

#### driver_opts

指定一个选项列表，作为键值对传递给此卷的驱动程序。这些选项取决于驾驶员。

```yml
volumes:
  example:
    driver_opts:
      type: "nfs"
      o: "addr=10.40.0.199,nolock,soft,rw"
      device: ":/docker/example"
```

#### external

```yml
services:
  backend:
    image: example/database
    volumes:
      - db-data:/etc/data

volumes:
  db-data:
    external: true
```

在示例中，Compose 不会尝试创建名为 `{project_name}_db-data` 的卷，而是查找名为 `db-data` 的现有卷，并将其挂载到后端服务的容器中。

#### labels

标签用于将元数据添加到卷中。您可以使用数组或字典。

```yml
volumes:
  db-data:
    labels:
      com.example.description: "Database volume"
      com.example.department: "IT/Ops"
      com.example.label-with-empty-value: ""
```

```yml
volumes:
  db-data:
    labels:
      - "com.demo.description=Database volume"
      - "com.demo.department=IT/Ops"
      - "com.demo.label-with-empty-value"
```

#### name

设置卷的自定义名称。名称字段可用于引用包含特殊字符的卷。该名称按原样使用，并且不受堆栈名称的限制。

```yml
volumes:
  db-data:
    name: "my-app-data"
```

这使得可以将此查找名称作为 Compose 文件的参数，以便卷的模型 ID 被硬编码，但平台上的实际卷 ID 是在部署期间在运行时设置的。例如，如果 `.env` 文件中的 `DATABASE_VOLUME=my_volume_001`：

```yml
volumes:
  db-data:
    name: ${DATABASE_VOLUME}
```

它还可以与外部属性结合使用。这意味着用于在平台上查找实际卷的卷名称与用于在 Compose 文件中引用它的名称分开设置：

```yml
volumes:
  db-data:
    external:
      name: actual-name-of-volume
```

### networks
<!--rehype:wrap-class=row-span-3-->

```yml
services:
  some-service:
    networks:
      - some-network
      - other-network
```

#### aliases

声明网络上服务的替代主机名。同一网络上的其他容器可以使用服务名称或别名来连接到服务的容器之一

```yml
services:
  some-service:
    networks:
      some-network:
        aliases:
          - alias1
          - alias3
      other-network:
        aliases:
          - alias2
```

在以下示例中，服务前端能够通过主机名 `backend` 或者 `back-tier` 网络上的数据库来访问 `backend` 服务。服务 `monitoring` 能够在 admin 网络上通过主机名 `backend` 或者 `mysql` 来访问相同的 `backend` 服务。

```yml
services:
  frontend:
    image: example/webapp
    networks:
      - front-tier
      - back-tier

  monitoring:
    image: example/monitoring
    networks:
      - admin

  backend:
    image: example/backend
    networks:
      back-tier:
        aliases:
          - database
      admin:
        aliases:
          - mysql

networks:
  front-tier:
  back-tier:
  admin:
```

#### ipv4_address, ipv6_address

加入网络时，为服务容器指定静态IP地址。

```yml
services:
  frontend:
    image: example/webapp
    networks:
      front-tier:
        ipv4_address: 172.16.238.10
        ipv6_address: 2001:3984:3989::10

networks:
  front-tier:
    ipam:
      driver: default
      config:
        - subnet: "172.16.238.0/24"
        - subnet: "2001:3984:3989::/64"
```

#### link_local_ips

指定了链接本地IP的列表。链路本地IP是属于知名子网的特殊IP，纯粹由运营商管理，通常取决于部署它们的架构。

```yml
services:
  app:
    image: busybox
    command: top
    networks:
      app_net:
        link_local_ips:
          - 57.123.22.11
          - 57.123.22.13
networks:
  app_net:
    driver: bridge
```

#### mac_address

设置服务容器连接特定网络时使用的 MAC 地址。

#### priority 优先级

将服务的容器连接到其网络的顺序。如果未指定，默认值为 0。在以下示例中，应用服务首先连接到 `app_net_1`，因为它具有最高优先级。然后它连接到 `app_net_3`，然后是 `app_net_2`，后者使用默认优先级值 0。

```yml
services:
  app:
    image: busybox
    command: top
    networks:
      app_net_1:
        priority: 1000
      app_net_2:

      app_net_3:
        priority: 100
networks:
  app_net_1:
  app_net_2:
  app_net_3:
```

### expose

```yml
expose:
  - "3000"
  - "8000"
  - "8080-8085/tcp"
```

定义 Compose 从容器公开的（传入）端口或端口范围。这些端口必须可供链接服务访问，并且不应发布到主机。只能指定内部容器端口。

### links

```yml
web:
  links:
    - db
    - db:database
    - redis
```

定义到另一个服务中的容器的网络链接。同时指定服务名称和链接别名 (SERVICE:ALIAS)，或者仅指定服务名称。

### pids_limit

```yml
pids_limit: 10
```

调整容器的 PID 限制。设置为 -1 以获取无限 PID。

### devices

```yml
devices:
  - "/dev/ttyUSB0:/dev/ttyUSB0"
  - "/dev/sda:/dev/xvda:rwm"
```

定义已创建容器的设备映射列表

```sh
HOST_PATH:CONTAINER_PATH[:CGROUP_PERMISSIONS]
```

### dns

```yml
dns: 8.8.8.8
dns:
  - 8.8.8.8
  - 9.9.9.9
```

定义在容器网络接口配置上设置的自定义 DNS 服务器。它可以是单个值或列表。

### dns_opt

```yml
dns_opt:
  - use-vc
  - no-tld-query
```

列出要传递给容器的 DNS 解析器（Linux 上的 /etc/resolv.conf 文件）的自定义 DNS 选项。

### dns_search

```yml
dns_search: example.com
dns_search:
  - dc1.example.com
  - dc2.example.com
```

定义在容器网络接口配置上设置的自定义 DNS 搜索域。它可以是单个值或列表。
