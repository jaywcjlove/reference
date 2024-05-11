Docker Compose 备忘清单
===

这是 [docker-compose](https://docs.docker.com/compose/) 的快速参考备忘单。你可以在这里找到最常见的 Docker Compose 使用方式。

入门
---

### Docker Compose 是什么？

- `Docker-compsoe` 是一个开源项目，用于定义和运行多容器 `Docker` 应用程序的工具。由 `Docker` 社区维护。
- 通过一个 `YAML` 文件来配置应用程序的服务，以便可以使用一个命令启动、停止和重启整个应用程序。
- [Docker Compose 开源地址](https://github.com/docker/compose)
- [Docker Compose 发行地址](https://github.com/docker/compose/releases) _github.com_

### 基本概念

- **服务 (services):** 一个服务指的是一个容器，即一个应用程序的一个实例。
- **容器 (container):** `Docker` 容器，其中运行着应用程序的一个实例。
- **镜像 (image):** `Docker` 镜像，用于创建容器的模板。
- **Docker-Compose 文件：** 一个 `YAML` 文件，描述了应用程序的各个服务以及它们之间的关系、配置等信息。

### Docker-Compose 文件结构

- `version`: _Docker-Compose_ 文件的版本。
- `services`: 定义了各个服务，每个服务都有自己的配置项，如镜像、端口映射、依赖等。
- `networks`: 定义了应用程序使用的网络，可以自定义网络以控制服务之间的通信。
- `volumes`: 定义了应用程序使用的卷，用于持久化数据或与主机共享文件。

### 安装
<!--rehype:wrap-class=row-span-2-->

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
| `docker compose ps`      | 查看容器状态     |                      |
| `docker compose logs`    | 查看容器日志     | `-f` 跟随日志输出    |
| `docker compose exec`    | 进入容器         | `-it` 启动交互式终端 |
| `docker compose build`   | 构建镜像         |                      |
| `docker compose rm`      | 删除容器         |                      |
| `docker compose stop`    | 停止容器         |                      |
| `docker compose start`   | 启动容器         |                      |
| `docker compose restart` | 重启容器         |                      |
| `docker compose pull`    | 拉取镜像         |                      |
| `docker compose run`     | 运行一个临时容器 |                      |
| `docker compose config`  | 显示配置信息     |                      |
| `docker compose images`  | 列出镜像         |                      |
| `docker compose push`    | 推送镜像         |                      |
| `docker compose version` | 查看版本信息     |                      |
<!--rehype:className=left-align-->

Docker Compose 配置
---

### 示例配置文件
<!--rehype:wrap-class=col-span-2-->

`docker-compose` 的配置文件是一个 `YAML` 文件，用于定义和运行多容器 Docker 应用程序。通常命名为 `docker-compose.yml`，它使用单一的 YAML 文件来定义多个容器的集合，以及它们之间的依赖关系和服务。以下是一份 `docker-compose.yml` 文件的配置模板，包含了常用配置项和解释：

```yml
version: '3'  # 指定使用的 Docker Compose 文件格式版本，目前推荐使用 3.x 或更高

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

    ports:  # 容器端口与主机端口映射
      - "80:80"  # 主机 80 端口映射到容器的 80 端口

    volumes:  # 数据卷挂载
      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # 将主机上的 nginx.conf 挂载到容器的 /etc/nginx/nginx.conf，只读
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
- 当你修改了 `docker-compose.yml` 文件后，需要重新运行 `docker-compose up` 来使改动生效。
- 使用 `docker-compose build` 仅重建镜像，而不启动容器。
- 使用 `docker-compose restart` 重启容器。
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
