docker-compose 备忘清单
===
这是 [docker-compose](https://docs.docker.com/compose/) 的官方文档。 你可以在这里找到最常见的 docker-compose 使用方式。

---

入门
---
<!--rehype:body-class=cols-2-->

#### 安装 docker-compose  需要安装（docker desktop）

- windows 安装

  - 官网地址:[https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/) 

- linux 版本安装

  - 官网地址:[https://docs.docker.com/desktop/install/linux-install/](https://docs.docker.com/desktop/install/linux-install/) 

- mac 版本安装

  - 官网地址:[https://docs.docker.com/desktop/install/mac-install/](https://docs.docker.com/desktop/install/mac-install/)

- 可以通过 releases 下载安装 releases 地址：[https://github.com/docker/compose/releases](https://github.com/docker/compose/releases)

- 安装成功
  
  ```sh
  docker compose version
  Docker Compose version v2.17.3

  docker --version
  Docker version 23.0.5, build bc4487a

  docker version
  Client: Docker Engine - Community
  Cloud integration: v1.0.31
  Version:           23.0.5
  API version:       1.42
  <...>
  ```

介绍
---

**Docker-Compose 是什么？**

  - `Docker-compsoe` 是一个开源项目，用于定义和运行多容器 `Docker` 应用程序的工具。由 `Docker` 社区维护。

  - 通过一个 `YAML` 文件来配置应用程序的服务，以便可以使用一个命令启动、停止和重启整个应用程序。

  - 开源地址：[https://github.com/docker/compose](https://github.com/docker/compose)
 
  - releases 地址：[https://github.com/docker/compose/releases](https://github.com/docker/compose/releases)

**基本概念：**
   
  - **服务 (services):** 一个服务指的是一个容器，即一个应用程序的一个实例。
   
  - **容器 (container):** `Docker` 容器，其中运行着应用程序的一个实例。
   
  - **镜像 (image):** `Docker` 镜像，用于创建容器的模板。
   
  - **Docker-Compose 文件：** 一个 `YAML` 文件，描述了应用程序的各个服务以及它们之间的关系、配置等信息。

**Docker-Compose 文件结构：**
  
  - `version`: `Docker-Compose` 文件的版本。
  
  - `services`: 定义了各个服务，每个服务都有自己的配置项，如镜像、端口映射、依赖等。
  
  - `networks`: 定义了应用程序使用的网络，可以自定义网络以控制服务之间的通信。
  
  - `volumes`: 定义了应用程序使用的卷，用于持久化数据或与主机共享文件。

命令
---
**常用命令：**

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

配置模板
---

**示例 Docker-Compose 文件：**

`docker-compsoe` 的配置文件是一个 `YAML` 文件，用于定义和运行多容器 Docker 应用程序。它使用 一个单一的 YAML 文件（通常命名为 `docker-compose.yml`）来定义多个容器的集合，以及它们之间的依赖关系和服务。

以下是一份 `docker-compose.yml` 文件的配置模板，包含了常用配置项和解释：

```yaml
version: '3'  # 指定使用的Docker Compose文件格式版本，目前推荐使用3.x或更高

services:  # 定义一个或多个服务
  service1:  # 服务名称
    image: nginx:latest  # 使用的Docker镜像，这里是Nginx的最新版本
    # 或者使用构建指令来从Dockerfile构建镜像
    build:
      context: ./path/to/Dockerfile  # Dockerfile所在的目录
      dockerfile: Dockerfile-alternative  # 可选的Dockerfile名称，默认是Dockerfile

    # 容器启动时执行的命令，覆盖默认的命令
    command: ["nginx", "-g", "daemon off;"]  # 以数组形式指定，防止shell解析

    ports:  # 容器端口与主机端口映射
      - "80:80"  # 主机80端口映射到容器的80端口

    volumes:  # 数据卷挂载
      - ./nginx.conf:/etc/nginx/nginx.conf:ro  # 将主机上的nginx.conf挂载到容器的/etc/nginx/nginx.conf，只读
      - ./logs:/var/log/nginx  # 将logs目录挂载到容器的/var/log/nginx

    environment:  # 设置环境变量
      - MYSQL_HOST=database  # 可以引用其他服务，这里假设有一个名为database的服务
      - MYSQL_PORT=3306

    depends_on:  # 服务启动顺序，这里表明service1依赖于database服务
      - database

    networks:  # 定义网络
      - my_network  # 参与名为my_network的网络

  service2:  # 另一个服务示例
    # ... 类似地定义其他服务

networks:  # 定义网络
  my_network:  # 网络名称
    driver: bridge  # 网络驱动，通常是bridge模式

volumes:  # 定义数据卷
  nginx_logs:  # 卷名称
```

   
**备忘录事项**

  - 配置文件中的缩进必须使用空格，不能使用制表符。
  - 可以使用环境变量来动态设置配置项，如数据库密码。
  - 使用 `Docker-Compose` 可以简化多容器应用程序的部署和管理，但需要注意容器之间的依赖关系和通信。
  - 当你修改了 `docker-compose.yml` 文件后，需要重新运行 `docker-compose up` 来使改动生效。
  - 使用 `docker-compose build` 仅重建镜像，而不启动容器。
  - 使用 `docker-compose restart` 重启容器。
  - 记得清理不再需要的容器和镜像，以避免磁盘空间不足。
