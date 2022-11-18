Sysdig 备忘清单
===

该备忘单提供了使用 [Sysdig](https://sysdig.com/) 的常用命令参数和使用案例清单

入门
----

### 命令安装
<!--rehype:wrap-class=col-span-2-->

```shell
sudo rpm --import https://download.sysdig.com/DRAIOS-GPG-KEY.public  
sudo curl -s -o /etc/yum.repos.d/draios.repo https://download.sysdig.com/stable/rpm/draios.repo
sudo yum -y install sysdig
```
<!--rehype:className=wrap-text-->

### 常用参数
<!--rehype:wrap-class=row-span-2-->

参数 | 说明
:--|:---
`-C 5` | 每个文件不超过5M
`-W 10` | 保留不超过10个文件
`-G 60` | 每个文件只保留一分钟内的系统活动
`-w  dump.pcap` | 保存到文件
`-e 1000` | 每个文件只有1000个事件
`-z` | 参数对保存的内容进行压缩
`-A --print-ascii` |  把buffer中数据按照ASCII格式打印，方便阅读
`-x --print-hex`  |  把buffer中数据按照十六进制打印
`-X --printhex-ascii` | 把buffer中数据同时按照ASCII格式和十六进制打印
`-s 1024` | 捕获buffer的数据大小，默认为80，设置过大，文件会很大
`-N` | 不用把端口号转成可读名字
`-r` | 从文件读取
<!--rehype:className=show-header-->

### 输出含义

事件 | 说明
:--|:---
`evt.num` | 递增的事件号
`evt.time` | 事件发生的时间
`evt.cpu` | 事件被捕获时所在cpu
`proc.name` | 生成事件的进程名字
`thread.tid` | 线程id，单线程则为进程id
`evt.dir` | 事件方向(direction), > 代表进入事件， < 代表退出事件
`evt.type` | 事件的名称，比如open、stat等，一般为系统调用
`evt.args` | 事件的参数。如果为系统调用，则对应系统调用的参数
<!--rehype:className=show-header-->

### chisels常用工具

事件 | 说明
:--|:---
`httplog`  |  输出所有的http请求
`topprocs_cpu` |  输出按照cpu使用率排序
`topprocs_net` |  按照网络使用情况对进程排序
`fdcount_by` |  按照建立连接书对进程排序
`echo_fds`  |     输出进程读写数据
`netsata`   |    列出网络连接情况
`spy_file`  |   输出文件的读写数据，可以提供某个文件名作为参数
`spy_ip`    |   抓取给定ip的数据交换
`spy_port`  |   抓取给定端口的数据交换
<!--rehype:className=show-header-->

### 命令帮助

```shell
sysdig -l   #事件类型
sysdig -cl  #chisels工具类型
```

### 捕获每个系统事件并将其写入标准输出

```shell
$ sysdig
```

### 自定义输出
<!--rehype:wrap-class=row-span-2-->

```shell
$ sysdig -p"user:%user.name dir:%evt.arg.path" evt.type=chdir
user:ubuntu dir:/root
user:ubuntu dir:/root/tmp
user:ubuntu dir:/root/Download
```
<!--rehype:className=wrap-text-->

字段必须用 `%` 作为前缀，所有 `sysdig -l` 列出来的字段都可以使用
如果某个字段在时间中不存在，默认这个事件会过滤掉，在这个字符串最前面加上 `*` 符号，会打印所有事件，不存在的字段会变成 `<NA>`

```shell
$ sysdig -p"*%evt.type %evt.dir %evt.arg.name" evt.type=open
open > <NA>
open < /proc/1285/task/1399/stat
open > <NA>
open < /proc/1285/task/1400/io
open > <NA>
open < /proc/1285/task/1400/statm
open > <NA>
```
<!--rehype:className=wrap-text -->

### 抓取 `kubernetes pod` 客户端 `ip` 的 `udp` 请求
<!--rehype:wrap-class=col-span-2-->

```shell
# 列出容器监听端口
$ sudo sysdig -pc -A -c netstat container.name=aaa

# 抓取kubernetes pod 的客户端ip为172.119.100.16，3000端口的的请求内容
$ sudo sysdig -A -c echo_fds  k8s.pod.name contains datacenter-web-dev  and fd.port=3000 and evt.type=read and fd.cip=172.119.100.16 fd.proto=UDP

# 按照建立连接数量对进程排序 并保存到sysdig.pcap文件中
$ sysdig  -c fdcount_by fd.sport "evt.type=accept"  -w sysdig.pcap
```
<!--rehype:className=wrap-text -->

抓取 `kubernetes pod` 客户端 `ip` 为 `172.119.100.16` 的 `udp` 请求

### io案例
<!--rehype:wrap-class=row-span-3-->

查看 io 错误最多的进程

```shell
$ sysdig -c topprocs_errors
```

查看io错误最多的文件

```shell
$ sysdig -c topfiles_errors
```

查看磁盘io失败的调用

```shell
$ sysdig fd.type=file and evt.failed=true
```

查看httpd打开失败的文件

```shell
$ sysdig "proc.name=httpd and evt.type=open and evt.failed=true"
```
<!--rehype:className=wrap-text -->

查看最花费时间的系统调用

```shell
$ sysdig -c topscalls_time
```

查看系统调用失败返回最多的系统调用

```shell
$ sysdig -c topscalls "evt.failed=true"
```

查看打开文件失败

```shell
$ sysdig -p "%12user.name %6proc.pid %12proc.name %3fd.num %fd.typechar %fd.name" evt.type=open and evt.failed=true
```
<!--rehype:className=wrap-text -->

打印延迟大于1ms的文件I/O调用

```shell
$ sysdig -c fileslower 1
```

查看使用硬盘带宽最多的进程

```shell
$ sysdig -c topprocs_file
```

列出大量使用文件描述符的进程

```shell
$ sysdig -c fdcount_by proc.name "fd.type=file"
```
<!--rehype:className=wrap-text -->

查看读写bytes最多的文件

```shell
$ sysdig -c topfiles_bytes
```

打印httpd进程已经读取中和写入中的文件

```shell
$ sysdig -c topfiles_bytes proc.name=httpd
```

基本 opensnoop:snoop 文件在发生时打开

```shell
$ sysdig -p "%12user.name %6proc.pid %12proc.name %3fd.num %fd.typechar %fd.name" evt.type=open
```
<!--rehype:className=wrap-text -->

查看活跃中的读和写最多的目录

```shell
sysdig -c fdbytes_by fd.directory "fd.type=file"
```
<!--rehype:className=wrap-text -->

查看目录/tmp活跃中的读写最多的文件

```shell
sysdig -c fdbytes_by fd.filename "fd.directory=/tmp/"
```
<!--rehype:className=wrap-text -->

查看所有文件名为passwd的i/O活动

```shell
sysdig -A -c echo_fds "fd.filename=passwd"
```

展示FD类型的活跃I/O

```shell
sysdig -c fdbytes_by fd.type
```
<!--rehype:className=wrap-text -->

### 网络

抓取 `kubernetes pod` 的客户端 `ip` 为 `172.119.100.17`，`3000` 端口的的请求内容

```shell
$ sudo sysdig -A -c echo_fds  k8s.pod.name contains datacenter-web-dev  and fd.port=3000 and evt.type=read and fd.cip=172.119.100.17 fd.proto=UDP
```
<!--rehype:className=wrap-text -->

查看占用网络带宽最多的进程

```shell
$ sysdig -c topprocs_net
#显示主机192.168.0.1的网络传输数据
#作为二进制：
$ sysdig -s2000 -X -c echo_fds fd.cip=192.168.0.1
#作为 ASCII：
$ sysdig -s2000 -A -c echo_fds fd.cip=192.168.0.1
```
<!--rehype:className=wrap-text -->

查看连接最多的服务器端口

```shell
#在已建立的连接方面：
$ sysdig -c fdcount_by fd.sport "evt.type=accept"
#就总字节数而言：
$ sysdig -c fdbytes_by fd.sport
```
<!--rehype:className=wrap-text -->

查看客户端连接最多的ip

```shell
#在已建立的联系方面
$ sysdig -c fdcount_by fd.cip "evt.type=accept"
#就总字节数而言
$ sysdig -c fdbytes_by fd.cip
```
<!--rehype:className=wrap-text -->

列出所有不是访问apache服务的访问连接

```shell
$ sysdig -p"%proc.name %fd.name" "evt.type=accept and proc.name!=httpd"
```
<!--rehype:className=wrap-text -->

显示 wordpress1 容器在端口 80 上发送和接收的数据：

```shell
$ sysdig -A -cecho_fds container.name=wordpress1 and fd.port=80
```
<!--rehype:className=wrap-text -->

实时打印 `mysql` 容器接收的所有新连接

```shell
$ sysdig -p"%fd.name" container.name=mysql and evt.type=accept
```
<!--rehype:className=wrap-text -->

### 进程

查看哪些文件花费时间做多

```shell
$ sysdig -c topfiles_time
```

查看httpd进程哪些文件花费最多时间

```shell
$ sysdig -c topfiles_time proc.name=httpd
```

查看io错误最多的进程

```shell
$ sysdig -c topprocs_errors
```

查看io错误最多的文件

```shell
$ sysdig -c topfiles_errors
```

查看磁盘io失败的调用

```shell
$ sysdig fd.type=file and evt.failed=true
```

查看httpd打开失败的文件

```shell
$ sysdig "proc.name=httpd and evt.type=open and evt.failed=true"
```
<!--rehype:className=wrap-text -->

查看最花费时间的系统调用

```shell
$ sysdig -c topscalls_time
```

查看系统调用失败返回最多的系统调用

```shell
$ sysdig -c topscalls "evt.failed=true"
```

查看打开文件失败

```shell
$ sysdig -p "%12user.name %6proc.pid %12proc.name %3fd.num %fd.typechar %fd.name" evt.type=open and evt.failed=true
```
<!--rehype:className=wrap-text -->

打印延迟大于1ms的文件I/O调用

```shell
$ sysdig -c fileslower 1
```
<!--rehype:className=wrap-text -->

### 基本用法
<!--rehype:wrap-class=row-span-2-->

将事件捕获到跟踪文件以供以后分析

```shell
$ sysdig –w myfile.scap
```

从跟踪文件中读取事件

```shell
$ sysdig –r myfile.scap
```

根据特定字段过滤事件

```shell
$ sysdig proc.name=httpd and evt.type!=open
```

运行凿子以获得高级功能

```shell
$ sysdig -c topprocs_cpu
```

列出所有可用字段

```shell
$ sysdig -l
```

列出所有可用的凿子

```shell
$ sysdig -cl
```

### 容器

查看具有容器上下文的进程列表

```shell
$ sysdig -pc
```

查看 `wordpress1` 容器中运行的进程的CPU使用率

```shell
$ sysdig -pc -c topprocs_cpu container.name=wordpress1
```
<!--rehype:className=wrap-text -->

查看对基于 `Kubernetes` 的 `mySQL` 服务发出的热门 `HTTP` 请求

```shell
$ sysdig -k http://127.0.0.1:8080 -c httptop k8s.svc.name=mysql
```
<!--rehype:className=wrap-text -->

### 文件系统

列出使用最多文件数的进程

```shell
$ sysdig -c fdcount_by proc.name "fd.type=file"
```
<!--rehype:className=wrap-text -->

观察名为“passwd”的所有文件的 I/O 活动

```shell
$ sysdig -A -c echo_fds "fd.filename=passwd"
```
<!--rehype:className=wrap-text -->

### 安全

显示 `root` 访问的目录

```shell
$ sysdig -p "%evt.arg.path" "evt.type=chdir and user.name=root"
```
<!--rehype:className=wrap-text -->

观察 `ssh` 活动

```shell
$ sysdig -A -c echo_fds fd.name=/dev/ptmx and proc.name=sshd
```
<!--rehype:className=wrap-text -->

### 日志

显示来自 python 的所有系统日志消息

```shell
$ sysdig -c spy_syslog proc.name=python
```

超尾系统中的所有日志文件

```shell
$ sysdig -c spy_logs
```

### CSysdig

```shell
$ csysdig -m http://127.0.0.1:8080
```

使用 Mesos 元数据运行 Csysdig，Sysdig 基于 curses 的 UI

另见
----------

- [sysdig wiki](https://github.com/draios/sysdig/wiki) _(github.com)_
- [sysdig 官网](https://sysdig.com/) _(sysdig.com)_
- [Linux 故障排除速查表：strace、htop、lsof、tcpdump、iftop 和 sysdig](https://sysdig.com/blog/linux-troubleshooting-cheatsheet/) _(sysdig.com)_
