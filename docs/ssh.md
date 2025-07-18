SSH 备忘清单
====

此快速参考备忘单提供了使用 SSH 的各种方法。

入门
----

### 连接

连接到服务器（默认端口 22）

```shell
$ ssh root@192.168.1.5
```

在特定端口上连接

```shell
$ ssh root@192.168.1.5 -p 6222
```

通过 pem 文件连接（0400 权限）

```shell
$ ssh -i /path/file.pem root@192.168.1.5
```

请参阅：[SSH 权限](./chmod.md#ssh-权限)

### 执行

执行远程命令

```shell
$ ssh root@192.168.1.5 'ls -l'
```

调用本地脚本

```shell
$ ssh root@192.168.1.5 bash < script.sh
```

从服务器压缩和下载

```shell
$ ssh root@192.168.1.5 "tar cvzf - ~/source" > output.tgz
```
<!--rehype:className=wrap-text -->

### SCP
<!--rehype:wrap-class=row-span-2-->

从远程复制到本地

```shell
$ scp user@server:/dir/file.ext dest/
```

两台服务器之间的副本

```shell
$ scp user@server:/file user@server:/dir
```

从本地复制到远程

```shell
$ scp dest/file.ext user@server:/dir
```

复制整个文件夹

```shell
$ scp -r user@server:/dir dest/
```

复制文件夹中的所有文件

```shell
$ scp user@server:/dir/* dest/
```

从服务器文件夹复制到当前文件夹

```shell
$ scp user@server:/dir/* .
```

### 配置位置

文件路径 | 说明
:-|-
`/etc/ssh/ssh_config`    | 系统范围的配置
`~/.ssh/config`          | 用户特定的配置
`~/.ssh/id_{type}`       | 私钥
`~/.ssh/id_{type}.pub`   | 公钥
`~/.ssh/known_hosts`     | 登录主机
`~/.ssh/authorized_keys` | 授权登录密钥

### SCP 选项

选项 | 说明
:-|-
scp `-r`      | 递归复制整个目录
scp `-C`      | 压缩数据
scp `-v`      | 打印详细信息
scp `-P` 8080 | 使用特定端口
scp `-B`      | 批处理模式_（防止密码）_
scp `-p`      | 保留时间和模式

### 配置示例

```toml
Host server1 
    HostName 192.168.1.5
    User root
    Port 22
    IdentityFile ~/.ssh/server1.key
```

通过别名启动

```shell
$ ssh server1
```

请参阅：完整 [配置选项](https://linux.die.net/man/5/ssh_config)

### ProxyJump

```shell
$ ssh -J proxy_host1 remote_host2
```

```shell
$ ssh -J user@proxy_host1 user@remote_host2
```
<!--rehype:className=wrap-text -->

多次跳跃

```shell
$ ssh -J user@proxy_host1:port1,user@proxy_host2:port2 user@remote_host3
```
<!--rehype:className=wrap-text -->

### ssh-copy-id

```shell
$ ssh-copy-id user@server
```

复制到别名服务器

```shell
$ ssh-copy-id server1
```

复制特定密钥

```shell
$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server
```
<!--rehype:className=wrap-text -->

SSH keygen
---------------
<!--rehype:body-class=cols-5-->

### ssh-keygen
<!--rehype:wrap-class=col-span-2-->

```shell
$ ssh-keygen -t rsa -b 4096 -C "your@mail.com" 
```

----

| - | -    | -                             |
|---|------|-------------------------------|
|   | `-t` | [类型](#钥匙类型) 键 |
|   | `-b` | 密钥中的位数 |
|   | `-C` | 提供新评论 |

生成带有电子邮件作为注释的 RSA 4096 位密钥

### 产生
<!--rehype:wrap-class=col-span-2 row-span-2-->

以交互方式生成密钥

```shell
$ ssh-keygen
```

指定文件名

```shell
$ ssh-keygen -f ~/.ssh/filename
```

从私钥生成公钥

```shell
$ ssh-keygen -y -f private.key > public.pub
```

更改评论

```shell
$ ssh-keygen -c -f ~/.ssh/id_rsa
```

更改私钥密码

```shell
$ ssh-keygen -p -f ~/.ssh/id_rsa
```

### 钥匙类型

- rsa
- ed25519
- dsa
- ecdsa

### known_hosts
<!--rehype:wrap-class=col-span-2-->

从 known_hosts 搜索

```shell
$ ssh-keygen -F <ip/hostname>
```

从 known_hosts 中删除

```shell
$ ssh-keygen -R <ip/hostname>
```

### 密钥格式

- PEM
- PKCS8

端口转发
---------------
<!--rehype:body-class=cols-6-->

### 动态端口转发语法
<!--rehype:wrap-class=col-span-3-->

将本地端口变成一个 SOCKS 代理，自动转发任意目标地址的请求（适用于代理上网）。

```shell
$ ssh -D 本地SOCKS端口 用户名@SSH服务器 -N
```

示例：开启本地 1080 端口作为 SOCKS5 代理：

```shell
$ ssh -D 1080 -N user@example.com
```

### 验证 SOCKS5 代理
<!--rehype:wrap-class=col-span-3-->

使用 curl 命令验证 SOCKS5 代理是否工作正常：

```shell
# 设置
$ ssh -D 1080 -N user@example.com
# 验证
$ curl --socks5 127.0.0.1:1080 https://ifconfig.me
```

如果返回的是 `example.com` 服务器的公网 IP，说明 SOCKS5 代理正常工作。

### 本地端口转发
<!--rehype:wrap-class=col-span-3-->

将本地端口的流量通过 SSH 隧道转发到目标服务器（适用于访问远程/内网服务）。

```shell
$ ssh -L [本地IP:]本地端口:目标IP:目标端口 用户名@SSH服务器 -N
```

示例：将本地的 `4000` 端口转发到远程内网服务器 192.168.1.10:80：

```shell
$ ssh -L 4000:192.168.1.10:80 user@example.com -N
```

其中 `-N` 表示不执行远程命令，只是建立隧道。


### 远程端口转发
<!--rehype:wrap-class=col-span-3-->

让远程 SSH 服务器上的端口转发到本地的某个服务（适用于让外部访问你本地服务）。

```shell
$ ssh -R [SSH服务器IP:]远程端口:本地IP:本地端口 用户名@SSH服务器 -N
```

示例：将远程服务器的 5000 端口映射到你本地的 localhost:3306（MySQL）：

```shell
$ ssh -R 5000:localhost:3306 user@example.com -N
```

另见
--------

- [OpenSSH 配置文件示例](https://www.cyberciti.biz/faq/create-ssh-config-file-on-linux-unix/) _(cyberciti.biz)_
- [ssh_config](https://linux.die.net/man/5/ssh_config) _(linux.die.net)_
