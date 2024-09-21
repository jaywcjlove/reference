Dockerfile 备忘清单
===

这是 [Dockerfile](https://docs.docker.com/engine/reference/builder/) 的快速参考备忘单。包含用户可以在命令行上调用以组装镜像的所有命令。

参考
----

### 继承

默认 `Dockerfile` 位于上下文的根目录中。

- [Docker 备忘清单](./docker.md) _(github.io)_

```shell
docker build -f /path/to/a/Dockerfile .
```

使用 `-f` 指向文件系统中任何位置的 `Dockerfile`。

### 继承

```dockerfile
FROM [--platform=<platform>] <image> [AS <name>]
```
<!--rehype:className=wrap-text -->

示例

```dockerfile
FROM ruby:3.3.0
FROM golang:1.20-alpine3.16 AS build-env
```

### 变量 ENV

```dockerfile
ENV <key>=<value> ...
```

```dockerfile
ENV APP_HOME /myapp
RUN mkdir $APP_HOME
```

```dockerfile
ENV MY_NAME="John Doe" MY_DOG=Rex\ The\ Dog \
    MY_CAT=fluffy
```

### 初始化
<!--rehype:wrap-class=row-span-2 -->

```dockerfile
RUN bundle install
```

`WORKDIR` 指令为任何 `RUN`、`CMD`、`ENTRYPOINT`、`COPY` 和 `ADD` 指令设置工作目录。

```dockerfile
WORKDIR /myapp
```

`VOLUME` 指令创建一个具有指定名称的挂载点，并将其标记为保存来自本机主机或其他容器的外部挂载卷。

```dockerfile
VOLUME ["/data"]
# 安装点规范
```

```dockerfile
ADD file.xyz /file.xyz
# 复制
COPY --chown=user:group host_file.xyz /path/container_file.xyz
```
<!--rehype:className=wrap-text -->

### Onbuild

```dockerfile
ONBUILD RUN bundle install
# 与另一个文件一起使用时

ONBUILD ADD . /app/src
ONBUILD RUN /usr/local/bin/python-build --dir /app/src
```
<!--rehype:className=wrap-text -->

指令将触发指令添加到镜像中，以便稍后执行，此时镜像用作另一个构建的基础。

### 在严格的 shell 中运行命令

```dockerfile
ENV my_var
SHELL ["/bin/bash", "-euo", "pipefail", "-c"]
# 使用严格模式：
RUN false         # ails 像使用 && 一样构建
RUN echo "$myvar" # 由于拼写错误会抛出错误
RUN true | false  # 将脱离管道
```
<!--rehype:className=wrap-text -->

使用 `shell` 将为 shell 命令打开严格模式。

### 命令 CMD
<!--rehype:wrap-class=col-span-2-->

:- | -
:- | -
`CMD ["executable","param1","param2"]` | (exec 形式，这是首选形式)
`CMD ["param1","param2"]` | (作为 ENTRYPOINT 的默认参数)
`CMD command param1 param2` | (shell形式)
<!--rehype:class=auto-wrap-->

```dockerfile
EXPOSE 5900
CMD ["bundle", "exec", "rails", "server"]
```

### 入口点 ENTRYPOINT

```dockerfile
ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2
```
<!--rehype:className=wrap-text -->

配置将作为可执行文件运行的容器。

```dockerfile
ENTRYPOINT exec top -b
```

这将使用 shell 处理来替换 shell 变量，并将忽略任何 `CMD` 或 `docker run` 命令行参数。

### 元数据 LABEL

```dockerfile
LABEL version="1.0"
```

```dockerfile
LABEL "com.example.vendor"="ACME Incorporated"
LABEL com.example.label-with-value="foo"
LABEL version="1.0"
```
<!--rehype:className=wrap-text -->

```dockerfile
LABEL description="本文说明\
标签值可以跨越多行。"
LABEL multi.label1="value1" \
      multi.label2="value2" \
      other="value3"
```

### ARG

```dockerfile
ARG <name>[=<default value>]
```

指令定义了一个变量，在构建时通过 `docker build` 命令使用 --build-arg `<varname>=<value>` 标志将其传递给构建器。

```dockerfile
FROM busybox
# user1 默认值为 someuser
ARG user1=someuser
ARG buildno=1
```

### .dockerignore 文件

```ignore
# 注释说明
*/temp*
*/*/temp*
temp?
```

----

:- | -
:- | -
`# comment` | 忽略
`*/temp*` | 在根的任何直接子目录中<br />排除名称以 `temp` 开头的文件和目录
`*/*/temp*` | 从根以下两级的任何子目录中<br />排除以 `temp` 开头的文件和目录
`temp?` | 排除根目录中名称为<br /> `temp` 的单字符扩展名的文件和目录
<!--rehype:class=auto-wrap-->

如果此文件存在，排除与其中的模式匹配的文件和目录，有利于避免 `ADD` 或 `COPY` 将敏感文件添加到镜像中。匹配是使用 Go 的 [filepath.Match](https://golang.org/pkg/path/filepath#Match) 规则完成的。

### 主要命令
<!--rehype:wrap-class=col-span-2 -->

命令 | 说明
:- | -
`FROM image` | 构建的基础镜像
~~`MAINTAINER email`~~ | (已弃用)维护者的名字
`COPY [--chown=<user>:<group>] <src>... <dest>` | 将上下文中的路径复制到位置 `dest` 的容器中
`ADD [--chown=<user>:<group>] <src>... <dest>` | 与 `COPY` 相同，但解压缩存档并接受 http url。
`RUN <command>` | 在容器内运行任意命令。
`USER <user>[:<group>]` | 设置默认用户名。
`WORKDIR /path/to/workdir` | 设置默认工作目录。
`CMD command param1 param2` | 设置默认命令
`ENV <key>=<value> ...` | 设置环境变量
`EXPOSE <port> [<port>/<protocol>...]` | 运行时侦听指定的网络端口
<!--rehype:class=auto-wrap-->

Dockerfile 示例
----
<!--rehype:body-class=cols-2-->

### 服务静态网站的最小 Docker 镜像

```dockerfile
FROM wcjiang/docker-static-website:latest
# 使用 .dockerignore 文件来控制镜像中的内容！
# 复制当前目录内容，到容器中
COPY ./ .
```

这会产生一个 **`154KB +`** 的单层镜像。 如果您需要以不同的方式配置 `httpd`，您可以覆盖 CMD 行：

```dockerfile
FROM wcjiang/docker-static-website:latest
COPY . .

CMD ["/busybox","httpd","-f","-v","-p","3000","-c","httpd.conf"]
```

缩小镜像过程[查看原文](https://lipanski.com/posts/smallest-docker-image-static-website)，镜像 [Dockerfile 源码](https://github.com/forksss/docker-static-website)。

### Docker 镜像多阶段构建

```dockerfile
FROM golang:alpine as builder
RUN apk --no-cache add git
WORKDIR /go/src/github.com/go/helloworld/
RUN go get -d -v github.com/go-sql-driver/mysql
COPY app.go .
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

FROM alpine:latest as prod
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /go/src/github.com/go/helloworld/app .
CMD ["./app"]
```
<!--rehype:className=wrap-text -->

使用多阶段构建能将构建依赖留在 builder 镜像中，只将编译完成后的二进制文件拷贝到运行环境中，大大减少镜像体积。

## 也可以看看

- [Dockerfile reference](https://docs.docker.com/engine/reference/builder/) _(docker.com)_
- [Docker 备忘清单](./docker.md) _(github.io)_
- [Docker入门学习笔记](https://jaywcjlove.github.io/docker-tutorial) _(github.io)_
