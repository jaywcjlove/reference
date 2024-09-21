Netstat 备忘清单
===

此快速参考备忘单提供了各种使用 netstat 命令的方法

入门
-----

### 入门实例

端口 80 上的所有连接

```shell
$ netstat -anp | grep :80
```

网络统计帮助

```shell
$ netstat -h
```

### 监听

选项 | 说明
:- | :-
`netstat -ltunp` | 所有监听端口
`netstat -ltn`   | 监听 TCP 端口
`netstat -lun`   | 监听 UDP 端口
`netstat -lx`    | 监听 Unix 端口
`netstat -lt` | 仅列出侦听 TCP 端口
`netstat -lu` | 仅列出侦听 UDP 端口
`netstat -l` | 列出所有监听条件

### 连接
<!--rehype:wrap-class=row-span-2-->

选项 | 说明
:- | :-
`netstat -a`  | 所有连接
`netstat -at` | 所有 TCP 连接
`netstat -au` | 所有 UDP 连接
`netstat -ant` | 显示没有反向 DNS 查找的 IP 地址

选项 | 说明
:- | :-
`netstat` | 活动连接
`netstat -a` | 所有连接
`netstat -at` | 所有 TCP 连接
`netstat -au` | 所有 UDP 连接
`netstat -ant` | 显示没有反向 DNS 查找的 IP 地址
`netstat -tnl` | 监听 TCP 端口
`netstat -unl` | 监听 UDP 端口

### 网络

选项 | 说明
:- | :-
`netstat -i`  | 显示网络接口
`netstat -ie` | 显示网络接口扩展信息
`netstat -n` | 仅显示 IP 地址
`netstat -F` | 尽可能显示 IP 地址的域名

### 路由

选项 | 说明
:- | :-
`netstat -r`  | 显示路由表
`netstat -rn` | 显示路由表，不解析主机

### 统计数据
<!--rehype:wrap-class=row-span-3-->

选项 | 说明
:- | :-
`netstat -s`  | 显示统计信息
`netstat -st` | 显示 TCP 统计信息
`netstat -su` | 显示 UDP 统计信息
`netstat -ltpe` | 使用进程信息和扩展信息显示 TCP 的侦听连接
`netstat -tp` | 显示带有 PID 编号的服务名称
`sudo netstat -nlpt` | 列出进程名称/PID 和用户 ID
`netstat -nlptue` | 所有带有 PID 和扩展信息的侦听端口
`netstat -M` | 显示伪装的连接

### 显示没有域名的 TCP 连接

```bash
$ netstat --tcp --numeric
```

### 显示活动/已建立的连接

```bash
$ netstat -atnp | grep ESTA
```

### 获取活动连接的连续列表

```bash
$ watch -d -n0 "netstat -atnp | grep ESTA"
```

### 显示到特定端口的所有打开连接

```bash
$ netstat -anp | grep":"
```

插入`端口`号（上图）代替冒号 `:`

### 检查服务是否正在运行

```bash
$ sudo netstat -aple | grep ntp
```

你可以用`http`、`smtp`代替`ntp`

Netstat – 安全命令
---

### 显示具有大量连接的 IP
<!--rehype:wrap-class=col-span-3-->

```bash
$ netstat -tn 2>/dev/null | grep :80 | awk '{print $5}' | cut -d: -f1 | sort | uniq -c | sort -nr | head
```
<!--rehype:className=wrap-text -->

### 连接到端口 80 的 IP 地址
<!--rehype:wrap-class=col-span-3-->

```bash
$ netstat -tn 2>/dev/null | grep ':80 ' | awk '{print $5}' |sed -e 's/::ffff://' | cut -f1 -d: | sort | uniq -c | sort -rn | head
```
<!--rehype:className=wrap-text -->

### 显示端口 80 上的活动连接数

```bash
$ netstat -an |grep :80 |wc -l
```

### 仅显示外部 IP 地址
<!--rehype:wrap-class=col-span-2-->

```bash
$ netstat -antu | grep :80 | grep -v LISTEN | awk '{print $5}'
```

### 显示活动 SYNC_REC
<!--rehype:wrap-class=row-span-2-->

以下命令将输出服务器上正在发生和正在发生的活动 `SYNC_REC` 数量。数量应该很低(小于 `5`)。如果该数字为两位数，则您可能正在遭受 `DoS` 攻击或被邮件轰炸。

```bash
$ netstat -n -p|grep SYN_REC | wc -l
```

#### 列出发送 SYN_REC 连接的唯一 IP 地址

```bash
$ netstat -n -p | grep SYN_REC | awk '{print $5}' | awk -F: '{print $1}'
```
<!--rehype:className=wrap-text -->

与上面的命令一样，该命令也列出了发送 `SYN_REC` 连接状态的节点的所有唯一 `IP` 地址

### 每个远程 IP 的连接数
<!--rehype:wrap-class=col-span-2-->

```bash
$ netstat -antu | awk '{print $5}' | awk -F: '{print $1}' | sort | uniq -c | sort -n
```
<!--rehype:className=wrap-text -->

或者

```bash
$ netstat -antu | awk '$5 ~ /[0-9]:/{split($5, a, ":"); ips[a[1]]++} END {for (ip in ips) print ips[ip], ip | "sort -k1 -nr"}'
```
<!--rehype:className=wrap-text -->

### 检查开放端口（ipv4 和 ipv6）

```bash
$ netstat -plntu
```

### 检查开放端口（ipv4 和 ipv6）

```bash
$ netstat -plnt
```

### 每个 IP 的打开连接数

```bash
$ netstat -an | grep 80 | wc -l
```

### 活跃的互联网连接

```bash
$ netstat -pnut -w | column -t -s $'\t'
```
