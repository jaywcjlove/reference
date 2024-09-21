Lsof 备忘清单
===

这个快速参考备忘单提供了使用 lsof 命令的各种方法。

入门
----

### 介绍

**lsof** 表示 `L`i`s`t `O`pen `F`iles 用于查找哪个进程打开了哪些文件

```shell
$ lsof
$ sudo lsof -u root
```

### 特定于端口

```shell
$ lsof -i :8080
$ lsof -i :80 -i :22
$ lsof -i TCP:22
$ lsof -i TCP:1-1024
$ lsof -i UDP
$ lsof -i @192.168.1.5
```

### 特定于进程

```shell
$ lsof -c mysql
$ lsof -c java
$ lsof -c ssh
$ lsof -c nginx
$ lsof -c ssh -c httpd
```

### 特定于用户

```shell
$ lsof -u www-data
$ lsof -u www-data -u ubuntu
$ lsof -i -u ^root # 特定用户除外
```

### 特定于网络

```shell
$ lsof -i 4   # 仅 IPv4
$ lsof -i 6   # 仅 IPv6
```

### 特定的PID

```shell
$ lsof -p 1753
$ lsof -p ^3  # 除了某些pid
```

### 特定文件名

```shell
$ lsof /var/log/messages
$ lsof /etc/passwd
```

### 特定目录

```shell
$ lsof +D /var/log # 在目录内
```

### Kill

```shell
$ kill -9 `lsof -t -u apache`
$ kill -9 $(lsof -t -i :8080)
```

### 参数
<!--rehype:wrap-class=row-span-2-->

```bash
-a        # 列出打开文件存在的进程；
-c<进程名> # 列出指定进程所打开的文件；
-g        # 列出GID号进程详情；
-d<文件号> # 列出占用该文件号的进程；
+d<目录>   # 列出目录下被打开的文件；
+D<目录>   # 递归列出目录下被打开的文件；
-n<目录>   # 列出使用NFS的文件；
-i<条件>   # 列出符合条件的进程(协议,:端口,@ip)
-p<进程号> # 列出指定进程号所打开的文件；
-u        # 列出UID号进程详情；
-h        # 显示帮助信息；
-v        # 显示版本信息
```

### 列出指定进程号所打开的文件

```bash
lsof -p $pid
```

### 获取端口对应的进程 ID=>pid

```bash
lsof -i:9981 -P -t -sTCP:LISTEN
```

### 列出打开文件的进程

```bash
lsof $filename
```

示例
---

### 示例
<!--rehype:wrap-class=col-span-2-->

```bash
$ lsof
command     PID USER   FD      type      DEVICE     SIZE       NODE NAME
init          1 root  cwd       DIR         8,2     4096          2 /
init          1 root  rtd       DIR         8,2     4096          2 /
init          1 root  txt       REG         8,2    43496    6121706 /sbin/init
init          1 root  mem       REG         8,2   143600    7823908 /lib64/ld-2.5.so
init          1 root  mem       REG         8,2  1722304    7823915 /lib64/libc-2.5.so
init          1 root  mem       REG         8,2    23360    7823919 /lib64/libdl-2.5.so
init          1 root  mem       REG         8,2    95464    7824116 /lib64/libselinux.so.1
init          1 root  mem       REG         8,2   247496    7823947 /lib64/libsepol.so.1
init          1 root   10u     FIFO        0,17                1233 /dev/initctl
migration     2 root  cwd       DIR         8,2     4096          2 /
migration     2 root  rtd       DIR         8,2     4096          2 /
migration     2 root  txt   unknown                                 /proc/2/exe
```

### 文件描述符列表(FD)
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`cwd`  | 表示当前工作目录，即：应用程序的当前工作目录，这是该应用程序启动的目录，除非它本身对这个目录进行更改
`txt`  | 该类型的文件是程序代码，如应用程序二进制文件本身或共享库，如上列表中显示的 /sbin/init 程序
`lnn`  | 库引用 (AIX);
`er`   | FD 信息错误（参见名称栏）
`jld`  | jail 目录 (FreeBSD);
`ltx`  | 共享库文本（代码和数据）
`mxx`  | 十六进制内存映射类型编号xx
`m86`  | DOS合并映射文件
`mem`  | 内存映射文件
`mmap` | 内存映射设备
`pd`   | 父目录
`rtd`  | 根目录
`tr`   | 内核跟踪文件 (OpenBSD)
`v86`  | VP/ix 映射文件
`0`    | 表示标准输出
`1`    | 表示标准输入
`2`    | 表示标准错误
<!--rehype:className=style-list-arrow-->

### 示例列信息

:- | :-
:- | :-
`COMMAND` | 进程的名称
`PID` | 进程标识符
`PPID` | 父进程标识符（需要指定-R参数）
`USER` | 进程所有者
`PGID` | 进程所属组
`FD` | 文件描述符，应用程序通过它识别该文件

### 标准输出/输入/错误文件状态模式(FD)

:- | :-
:- | :-
`u` | 表示该文件被打开并处于读取/写入模式
`r` | 表示该文件被打开并处于只读模式
`w` | 表示该文件被打开并处于写入模式
`空格` | 表示该文件的状态模式为 unknow，且没有锁定
`-` | 表示该文件的状态模式为 unknow，且被锁定

一般在[标准输出/输入/错误](#文件描述符列表fd)后还跟着文件状态模式

### 文件状态模锁 (FD)

:- | :-
:- | :-
`N`     | 对于未知类型的Solaris NFS锁
`r`     | 用于部分文件的读取锁定
`R`     | 对整个文件进行读取锁定
`w`     | 对文件的一部分进行写锁定(文件的部分写锁)
`W`     | 对整个文件进行写锁定(整个文件的写锁)
`u`     | 用于任何长度的读写锁
`U`     | 对于未知类型的锁
`x`     | 对于文件部分的SCO OpenServer Xenix锁
`X`     | 对于整个文件的SCO OpenServer Xenix锁
`space` | 如果没有锁

在[文件状态模式](#标准输出输入错误文件状态模式fd)后面，还跟着相关的锁

### 文件类型

标识 | 说明
:- | :-
`DIR` | 表示目录
`CHR` | 表示字符类型
`BLK` | 块设备类型
`UNIX` |  UNIX 域套接字
`FIFO` | 先进先出 (FIFO) 队列
`IPv4` | 网际协议 (IP) 套接字
`DEVICE` | 指定磁盘的名称
`SIZE` | 文件的大小
`NODE` | 索引节点（文件在磁盘上的标识）
`NAME` | 打开文件的确切名称
`REG` | 常规文件

另见
---

- [lsof 命令帮助文档](https://jaywcjlove.github.io/linux-command/c/lsof.html) _(jaywcjlove.github.io)_
