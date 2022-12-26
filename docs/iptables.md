iptables 备忘清单
====

iptables 是一个配置 Linux 内核防火墙的命令行工具，是 [netfilter](https://en.wikipedia.org/wiki/Netfilter) 项目的一部分。这个快速参考备忘单显示了它的常用命令使用清单

入门
---

### 介绍

iptables 使用三个不同的链来允许或阻止流量：输入(input)、输出(output)和转发(forward)

- 输入(input) —— 此链用于控制传入连接的行为
- 输出(output) —— 此链用于传出连接
- 转发(forward) —— 这条链用于传入的连接，这些连接实际上不是在本地传递的，比如路由和 NATing

### 安装 iptables

CentOS 7 上默认安装了 firewalld 作为防火墙，使用 iptables 建议关闭并禁用 firewalld。

```bash
$ systemctl stop firewalld
$ systemctl disable firewalld
```

安装 iptables

```bash
$ yum install -y iptables-services
```

### 服务管理

```bash
$ systemctl status iptables  # 查看服务状态
$ systemctl enable iptables  # 启用服务
$ systemctl disable iptables # 禁用服务
$ systemctl start iptables   # 启动服务
$ systemctl restart iptables # 重启服务
$ systemctl stop iptables    # 关闭服务
```

### 命令参数
<!--rehype:wrap-class=row-span-3-->

基本语法：

```bash
$ iptables(选项)(参数)
```

---

参数 | 作用
:- | --
`-P` | 设置默认策略: <br/>_iptables -P INPUT (DROP_
`-F` | 清空规则链
`-L` | 查看规则链
`-A` | 在规则链的末尾加入新规则
`-I` | `num` 在规则链的头部加入新规则
`-D` | `num` 删除某一条规则
`-s` | 匹配来源地址 `IP/MASK` <br/>加叹号"!"表示除这个 `IP` 外
`-d` | 匹配目标地址
`-i` | 网卡名称 匹配从这块网卡流入的数据
`-o` | 网卡名称 匹配从这块网卡流出的数据
`-p` | 匹配协议,如 tcp,udp,icmp
`--dport num` | 匹配目标端口号
`--sport num` | 匹配来源端口号

---

```bash
$ iptables -t 表名 <-A/I/D/R> 规则链名 [规则号] <-i/o 网卡名> -p 协议名 <-s 源IP/源子网> --sport 源端口 <-d 目标IP/目标子网> --dport 目标端口 -j 动作
```
<!--rehype:className=wrap-text-->

### 开始配置规则

默认情况下，所有链都配置为接受规则，因此在强化过程中，建议从拒绝所有配置开始，然后只打开需要的端口：

```bash
$ iptables --policy INPUT DROP
$ iptables --policy OUTPUT DROP
$ iptables --policy FORWARD DROP
```

### 删除/插入规则
<!--rehype:wrap-class=row-span-2-->

按链条和编号删除规则

```bash
$ iptables -D INPUT 10
```

按规范删除规则

```bash
$ iptables -D INPUT -m conntrack --ctstate INVALID -j DROP
```
<!--rehype:className=wrap-text-->

刷新所有规则，删除所有链，并接受所有

```bash
$ iptables -P INPUT ACCEPT
$ iptables -P FORWARD ACCEPT
$ iptables -P OUTPUT ACCEPT
$ iptables -t nat -F
$ iptables -t mangle -F
$ iptables -F
$ iptables -X
```

---

```bash
# 冲洗所有链
$ iptables -F
# 刷新单链
$ iptables -F INPUT
# 插入规则
$ iptables -I INPUT 2 -s 202.54.1.2 -j DROP
```

### 显示规则

详细打印出所有活动的 `iptables` 规则

```bash
$ iptables -n -L -v
```

...具有行号的相同输出：

```bash
$ iptables -n -L -v --line-numbers
```

最后，相同的数据输出但与 `INPUT`/`OUTPUT` 链相关：

```bash
$ iptables -L INPUT -n -viptables -L OUTPUT -n -v --line-numbers
```
<!--rehype:className=wrap-text-->

### 列出特定链的规则

```bash
$ iptables -L INPUT
# 具有规则规范的相同数据：
$ iptables -S INPUT
# 包含数据包计数的规则列表
$ iptables -L INPUT -v
```

### 保存规则

```bash
# 在基于 Debian 的系统上
$ netfilter-persistent save
# 在基于 RedHat 的系统上
$ service iptables save
```

iptables 示例
---
<!--rehype:body-class=cols-2-->

### 清空当前的所有规则和计数

```bash
$ iptables -F  # 清空所有的防火墙规则
$ iptables -X  # 删除用户自定义的空链
$ iptables -Z  # 清空计数
```

### 配置允许 ssh 端口连接

```bash
$ iptables -A INPUT -s 192.168.1.0/24 -p tcp --dport 22 -j ACCEPT
```

`22` 为你的 `ssh` 端口， `-s 192.168.1.0/24` 表示允许这个网段的机器来连接，其它网段的 `ip` 地址是登陆不了你的机器的。`-j ACCEPT` 表示接受这样的请求

### 允许本地回环地址可以正常使用

```shell
$ iptables -A INPUT -i lo -j ACCEPT
# 本地圆环地址就是那个127.0.0.1
# 是本机上使用的,它进与出都设置为允许
$ iptables -A OUTPUT -o lo -j ACCEPT
```

### 设置默认的规则

```shell
# 配置默认的不让进
$ iptables -P INPUT DROP
# 默认的不允许转发
$ iptables -P FORWARD DROP
# 默认的可以出去
$ iptables -P OUTPUT ACCEPT
```

### 配置白名单

```shell
# 允许机房内网机器可以访问
$ iptables -A INPUT -p all -s 192.168.1.0/24 -j ACCEPT 
# 允许机房内网机器可以访问
$ iptables -A INPUT -p all -s 192.168.140.0/24 -j ACCEPT 
# 允许 183.121.3.7 访问本机的3380端口
$ iptables -A INPUT -p tcp -s 183.121.3.7 --dport 3380 -j ACCEPT
```

### 开启相应的服务端口

```shell
# 开启 80 端口，因为web对外都是这个端口
$ iptables -A INPUT -p tcp --dport 80 -j ACCEPT
# 允许被 ping
$ iptables -A INPUT -p icmp --icmp-type 8 -j ACCEPT
# 已经建立的连接得让它进来
$ iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
```

### 保存规则到配置文件中

```shell
# 任何改动之前先备份，请保持这一优秀的习惯
$ cp /etc/sysconfig/iptables /etc/sysconfig/iptables.bak
$ iptables-save > /etc/sysconfig/iptables
$ cat /etc/sysconfig/iptables
```

### 列出已设置的规则
<!--rehype:wrap-class=row-span-2-->

```bash
$ iptables -L [-t 表名][链名]
```

---

- 四个表名 `raw`，`nat`，`filter`，`mangle`
- 五个规则链名 `INPUT`、`OUTPUT`、`FORWARD`、`PREROUTING`、`POSTROUTING`
- filter 表包含`INPUT`、`OUTPUT`、`FORWARD`三个规则链

```shell
# 列出 nat 上面的所有规则
$ iptables -L -t nat                
#            ^ -t 参数指定，必须是 raw， nat，filter，mangle 中的一个
# 规则带编号
$ iptables -L -t nat  --line-numbers
$ iptables -L INPUT
# 查看，这个列表看起来更详细
$ iptables -L -nv
```

### 清除已有规则

```shell
# 清空指定链 INPUT 上面的所有规则
$ iptables -F INPUT
# 删除指定的链，这个链必须没有被其它任何规则引用，
# 而且这条上必须没有任何规则
$ iptables -X INPUT
    # 如果没有指定链名，则会删除该表中所有非内置的链
# 把指定链，或者表中的所有链上的所有计数器清零
$ iptables -Z INPUT
```

### 删除已添加的规则

```shell
# 添加一条规则
$ iptables -A INPUT -s 192.168.1.5 -j DROP
```

将所有 iptables 以序号标记显示，执行：

```shell
$ iptables -L -n --line-numbers
```

比如要删除 INPUT 里序号为 8 的规则，执行：

```shell
$ iptables -D INPUT 8
```

### 开放指定的端口
<!--rehype:wrap-class=row-span-2-->

```shell
# 允许本地回环接口(即运行本机访问本机)
$ iptables -A INPUT -s 127.0.0.1 -d 127.0.0.1 -j ACCEPT
# 允许已建立的或相关连的通行
$ iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
# 允许所有本机向外的访问
$ iptables -A OUTPUT -j ACCEPT
# 允许访问22端口
$ iptables -A INPUT -p tcp --dport 22 -j ACCEPT
# 允许访问80端口
$ iptables -A INPUT -p tcp --dport 80 -j ACCEPT
# 允许ftp服务的21端口
$ iptables -A INPUT -p tcp --dport 21 -j ACCEPT
# 允许FTP服务的20端口
$ iptables -A INPUT -p tcp --dport 20 -j ACCEPT
# 禁止其他未允许的规则访问
$ iptables -A INPUT -j reject
# 禁止其他未允许的规则访问
$ iptables -A FORWARD -j REJECT
```

### 屏蔽 IP
<!--rehype:wrap-class=row-span-2-->

```shell
# 屏蔽恶意主机（比如，192.168.0.8
$ iptables -A INPUT -p tcp -m tcp -s 192.168.0.8 -j DROP
# 屏蔽单个IP的命令
$ iptables -I INPUT -s 123.45.6.7 -j DROP
# 封整个段即从123.0.0.1到123.255.255.254的命令
$ iptables -I INPUT -s 123.0.0.0/8 -j DROP
# 封IP段即从123.45.0.1到123.45.255.254的命令
$ iptables -I INPUT -s 124.45.0.0/16 -j DROP
# 封IP段即从123.45.6.1到123.45.6.254的命令是
$ iptables -I INPUT -s 123.45.6.0/24 -j DROP
```

### 指定数据包出去的网络接口

只对 OUTPUT，FORWARD，POSTROUTING 三个链起作用。

```shell
$ iptables -A FORWARD -o eth0
```

### 查看已添加的规则
<!--rehype:wrap-class=row-span-2-->

```shell
$ iptables -L -n -v
Chain INPUT (policy DROP 48106 packets, 2690K bytes)
 pkts bytes target     prot opt in     out     source               destination
 5075  589K ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0
 191K   90M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:22
1499K  133M ACCEPT     tcp  --  *      *       0.0.0.0/0            0.0.0.0/0           tcp dpt:80
4364K 6351M ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0           state RELATED,ESTABLISHED
 6256  327K ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0
Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
 pkts bytes target     prot opt in     out     source               destination
Chain OUTPUT (policy ACCEPT 3382K packets, 1819M bytes)
 pkts bytes target     prot opt in     out     source               destination
 5075  589K ACCEPT     all  --  *      lo      0.0.0.0/0            0.0.0.0/0
```

### 启动网络转发规则

公网`210.14.67.7`让内网`192.168.188.0/24`上网

```shell
$ iptables -t nat -A POSTROUTING -s 192.168.188.0/24 -j SNAT --to-source 210.14.67.127
```
<!--rehype:className=wrap-text-->

### 端口映射

本机的 2222 端口映射到内网 虚拟机的 22 端口

```shell
$ iptables -t nat -A PREROUTING -d 210.14.67.127 -p tcp --dport 2222  -j DNAT --to-dest 192.168.188.115:22
```
<!--rehype:className=wrap-text-->

### 字符串匹配
<!--rehype:wrap-class=row-span-2-->

比如，我们要过滤所有 TCP 连接中的字符串`test`，一旦出现它我们就终止这个连接，我们可以这么做：

```shell
$ iptables -A INPUT -p tcp -m string --algo kmp --string "test" -j REJECT --reject-with tcp-reset
$ iptables -L
# Chain INPUT (policy ACCEPT)
# target     prot opt source          destination
# REJECT     tcp  --  anywhere        anywhere        STRING match "test" ALGO name kmp TO 65535 reject-with tcp-reset
#
# Chain FORWARD (policy ACCEPT)
# target     prot opt source          destination
#
# Chain OUTPUT (policy ACCEPT)
# target     prot opt source          destination
```

### 阻止 Windows 蠕虫的攻击

```shell
$ iptables -I INPUT -j DROP -p tcp -s 0.0.0.0/0 -m string --algo kmp --string "cmd.exe"
```
<!--rehype:className=wrap-text-->

### 防止 SYN 洪水攻击

```shell
$ iptables -A INPUT -p tcp --syn -m limit --limit 5/second -j ACCEPT
```

### 允许环回连接

```bash
$ iptables -A INPUT -i lo -j ACCEPTiptables -A OUTPUT -o lo -j ACCEPT
```

### 允许已建立和相关的传入连接

```bash
$ iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT
```

### 允许已建立的传出连接

```bash
$ iptables -A OUTPUT -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 内部到外部

```bash
$ iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT
```

### 丢弃无效数据包

```bash
$ iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
```

### 阻止 IP 地址

```bash
$ iptables -A INPUT -s 192.168.1.10 -j DROP
```

### 阻止和 IP 地址并拒绝

```bash
$ iptables -A INPUT -s 192.168.1.10 -j REJECT
```

### 阻止与网络接口的连接

```bash
$ iptables -A INPUT -i eth0 -s 192.168.1.10 -j DROP
```

### 允许所有传入的 SSH

```bash
$ iptables -A INPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许来自特定 IP 地址或子网的传入 SSH

```bash
$ iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许传出 SSH

```bash
$ iptables -A OUTPUT -p tcp --dport 22 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A INPUT -p tcp --sport 22 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许来自特定 IP 地址或子网的传入 Rsync

```bash
$ iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 873 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 873 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许传入 HTTP

```bash
$ iptables -A INPUT -p tcp --dport 80 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 80 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许传入 HTTPS

```bash
$ iptables -A INPUT -p tcp --dport 443 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 443 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许传入 HTTP 和 HTTPS

```bash
$ iptables -A INPUT -p tcp -m multiport --dports 80,443 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp -m multiport --dports 80,443 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许来自特定 IP 地址或子网的 MySQL

```bash
$ iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 3306 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 3306 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许 MySQL 到特定的网络接口

```bash
$ iptables -A INPUT -i eth1 -p tcp --dport 3306 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -o eth1 -p tcp --sport 3306 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许来自特定 IP 地址或子网的 PostgreSQL

```bash
$ iptables -A INPUT -p tcp -s 192.168.1.0/24 --dport 5432 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 5432 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许 PostgreSQL 到特定的网络接口

```bash
$ iptables -A INPUT -i eth1 -p tcp --dport 5432 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -o eth1 -p tcp --sport 5432 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 阻止传出 SMTP 邮件

```bash
$ iptables -A OUTPUT -p tcp --dport 25 -j REJECT
```

### 允许所有传入的 SMTP

```bash
$ iptables -A INPUT -p tcp --dport 25 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 25 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许所有传入的 IMAP

```bash
$ iptables -A INPUT -p tcp --dport 143 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 143 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许所有传入的 IMAPS

```bash
$ iptables -A INPUT -p tcp --dport 993 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 993 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许所有传入的 POP3

```bash
$ iptables -A INPUT -p tcp --dport 110 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 110 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 允许所有传入的 POP3S

```bash
$ iptables -A INPUT -p tcp --dport 995 -m conntrack --ctstate NEW,ESTABLISHED -j ACCEPT
$ iptables -A OUTPUT -p tcp --sport 995 -m conntrack --ctstate ESTABLISHED -j ACCEPT
```

### 在公共接口上删除专用网络地址

```bash
$ iptables -A INPUT -i eth1 -s 192.168.1.0/24 -j DROP
$ iptables -A INPUT -i eth1 -s 10.0.0.0/8 -j DROP
```

### 将所有传出到 Facebook 网络

获取 Facebook 作为：

```bash
$ whois -h v4.whois.cymru.com " -v $(host facebook.com | grep "has address" | cut -d " " -f4)" | tail -n1 | awk '{print $1}'
```

降低：

```bash
$ for i in $(whois -h whois.radb.net -- '-i origin AS1273' | grep "^route:" | cut -d ":" -f2 | sed -e 's/^[ \t]*//' | sort -n -t . -k 1,1 -k 2,2 -k 3,3 -k 4,4 | cut -d ":" -f2 | sed 's/$/;/') ; do  iptables -A OUTPUT -s "$i" -j REJECTdone
```

### 记录和丢弃数据包

```bash
$ iptables -A INPUT -i eth1 -s 10.0.0.0/8 -j LOG --log-prefix "IP_SPOOF A: "
$ iptables -A INPUT -i eth1 -s 10.0.0.0/8 -j DROP
```

默认情况下，所有内容都记录到 `/var/log/messages` 文件中：

```bash
$ tail -f /var/log/messagesgrep --color 'IP SPOOF' /var/log/messages
```

### 记录和丢弃日志条目数量有限的数据包

```bash
$ iptables -A INPUT -i eth1 -s 10.0.0.0/8 -m limit --limit 5/m --limit-burst 7 -j LOG --log-prefix "IP_SPOOF A: "
$ iptables -A INPUT -i eth1 -s 10.0.0.0/8 -j DROP
```

### 丢弃或接受来自 Mac 地址的流量

```bash
$ iptables -A INPUT -m mac --mac-source 00:0F:EA:91:04:08 -j DROP
$ iptables -A INPUT -p tcp --destination-port 22 -m mac --mac-source 00:0F:EA:91:04:07 -j ACCEPT
```

### 阻止或允许 ICMP Ping 请求

```bash
$ iptables -A INPUT -p icmp --icmp-type echo-request -j DROP
$ iptables -A INPUT -i eth1 -p icmp --icmp-type echo-request -j DROP
```

### 使用 multiport 指定多个端口

```bash
$ iptables -A INPUT -i eth0 -p tcp -m state --state NEW -m multiport --dports ssh,smtp,http,https -j ACCEPT
```

### 使用 `random*` 或 `nth*` 进行负载平衡

```bash
_ips=("172.31.250.10" "172.31.250.11" "172.31.250.12" "172.31.250.13")for ip in "${_ips[@]}" ; do  iptables -A PREROUTING -i eth0 -p tcp --dport 80 -m state --state NEW -m nth --counter 0 --every 4 --packet 0 \    -j DNAT --to-destination ${ip}:80done
```

or

```bash
_ips=("172.31.250.10" "172.31.250.11" "172.31.250.12" "172.31.250.13")for ip in "${_ips[@]}" ; do  iptables -A PREROUTING -i eth0 -p tcp --dport 80 -m state --state NEW -m random --average 25 \    -j DNAT --to-destination ${ip}:80done
```

### 使用 limit 和 `iplimit*` 限制连接数

```bash
$ iptables -A FORWARD -m state --state NEW -p tcp -m multiport --dport http,https -o eth0 -i eth1 -m limit --limit 20/hour --limit-burst 5 -j ACCEPT
```

or

```bash
$ iptables -A INPUT -p tcp -m state --state NEW --dport http -m iplimit --iplimit-above 5 -j DROP
```

### 维护要匹配的最近连接列表

```bash
$ iptables -A FORWARD -m recent --name portscan --rcheck --seconds 100 -j DROPiptables -A FORWARD -p tcp -i eth0 --dport 443 -m recent --name portscan --set -j DROP
```

### 匹配数据包数据负载中的 “string*”

```bash
$ iptables -A FORWARD -m string --string '.com' -j DROP
$ iptables -A FORWARD -m string --string '.exe' -j DROP
```

### 带有“时间*”的基于时间的规则

```bash
$ iptables -A FORWARD -p tcp -m multiport --dport http,https -o eth0 -i eth1 -m time --timestart 21:30 --timestop 22:30 --days Mon,Tue,Wed,Thu,Fri -j ACCEPT
```

### 基于 TTL 值的数据包匹配

```bash
$ iptables -A INPUT -s 1.2.3.4 -m ttl --ttl-lt 40 -j REJECT
```

### 防止端口扫描

```bash
$ iptables -N port-scanningiptables -A port-scanning -p tcp --tcp-flags SYN,ACK,FIN,RST RST -m limit --limit 1/s --limit-burst 2 -j RETURNiptables -A port-scanning -j DROP
```

### SSH 暴力破解保护

```bash
$ iptables -A INPUT -p tcp --dport ssh -m conntrack --ctstate NEW -m recent --setiptables -A INPUT -p tcp --dport ssh -m conntrack --ctstate NEW -m recent --update --seconds 60 --hitcount 10 -j DROP
```

### 同步泛洪保护

```bash
$ iptables -N syn_floodiptables -A INPUT -p tcp --syn -j syn_floodiptables -A syn_flood -m limit --limit 1/s --limit-burst 3 -j RETURN
$ iptables -A syn_flood -j DROPiptables -A INPUT -p icmp -m limit --limit  1/s --limit-burst 1 -j ACCEPT
$ iptables -A INPUT -p icmp -m limit --limit 1/s --limit-burst 1 -j LOG --log-prefix PING-DROP:
$ iptables -A INPUT -p icmp -j DROPiptables -A OUTPUT -p icmp -j ACCEPT
```

### 使用 SYNPROXY 缓解 SYN 泛洪

```bash
$ iptables -t raw -A PREROUTING -p tcp -m tcp --syn -j CT --notrack
$ iptables -A INPUT -p tcp -m tcp -m conntrack --ctstate INVALID,UNTRACKED -j SYNPROXY --sack-perm --timestamp --wscale 7 --mss 1460
$ iptables -A INPUT -m conntrack --ctstate INVALID -j DROP
```

### 阻止非 SYN 的新数据包

```bash
$ iptables -A INPUT -p tcp ! --syn -m state --state NEW -j DROP
```

或

```bash
$ iptables -t mangle -A PREROUTING -p tcp ! --syn -m conntrack --ctstate NEW -j DROP
```

### 强制碎片数据包检查

```bash
$ iptables -A INPUT -f -j DROP
```

### XMAS 包

```bash
$ iptables -A INPUT -p tcp --tcp-flags ALL ALL -j DROP
```

### 丢弃所有 NULL 数据包

```bash
$ iptables -A INPUT -p tcp --tcp-flags ALL NONE -j DROP
```

### 阻止不常见的 MSS 值

```bash
$ iptables -t mangle -A PREROUTING -p tcp -m conntrack --ctstate NEW -m tcpmss ! --mss 536:65535 -j DROP
```

### 阻止带有虚假 TCP 标志的数据包

```bash
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags FIN,SYN,RST,PSH,ACK,URG NONE -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags FIN,SYN FIN,SYN -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags SYN,RST SYN,RST -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags FIN,RST FIN,RST -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags FIN,ACK FIN -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ACK,URG URG -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ACK,FIN FIN -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ACK,PSH PSH -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL ALL -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL NONE -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL FIN,PSH,URG -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL SYN,FIN,PSH,URG -j DROP
$ iptables -t mangle -A PREROUTING -p tcp --tcp-flags ALL SYN,RST,ACK,FIN,URG -j DROP
```

### 阻止来自私有子网的数据包（欺骗）

```bash
_subnets=("224.0.0.0/3" "169.254.0.0/16" "172.16.0.0/12" "192.0.2.0/24" "192.168.0.0/16" "10.0.0.0/8" "0.0.0.0/8" "240.0.0.0/5")for _sub in "${_subnets[@]}" ; do  iptables -t mangle -A PREROUTING -s "$_sub" -j DROPdoneiptables -t mangle -A PREROUTING -s 127.0.0.0/8 ! -i lo -j DROP
```

另见
---

- [Iptables 应用](https://dunwu.github.io/linux-tutorial/linux/ops/iptables.html)
- [netfilter 官网](https://netfilter.org/)
