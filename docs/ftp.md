ftp 备忘清单
===

此 ftp 备忘清单包含命令和使用 ftp 脚本实现自动化的技巧示例。

入门
----

### 介绍

<!--rehype:wrap-class=col-span-2-->

- FTP 命令允许用户通过FTP（File Transfer Protocol）协议在本地计算机和远程服务器之间传输文件。
- FTP 是一种在网络上交换文件的标准协议，是 ARPANet 的标准文件传输协议，ARPANet 网络就是现今 Internet 的前身。
- 使用 FTP 协议时，一方充当客户端，另一方充当服务器，客户端可以上传、下载、删除、重命名文件和目录，以及执行其他文件传输相关的操作。

### 选项
<!--rehype:wrap-class=row-span-3-->

```bash
ftp -v ftp.example.com
```

`-v`：启用或禁用详细模式。在详细模式下，`ftp`命令会显示所有来自服务器的响应消息。默认情况下，该选项为开启状态。

```bash
ftp -d ftp.example.com
```

`-d`：启用调试模式。该选项会显示所有FTP传输过程中发送和接收到的命令，有助于调试连接问题。

```bash
ftp -n ftp.example.com
```

`-n`：禁止自动登录。默认情况下，`ftp`命令会在连接到远程服务器后尝试自动登录。使用该选项可以禁止该行为，通常与`.netrc`文件联合使用。

```bash
ftp -g ftp.example.com
```

禁用文件名通配符扩展。`ftp`命令默认会展开文件名中的通配符。使用该选项可以关闭这一行为。

```bash
ftp -p ftp.example.com
```

`-p`：使用被动模式（PASV）进行数据连接。被动模式在客户端位于防火墙或NAT后面时非常有用。

```bash
ftp -s:script.txt ftp.example.com # Windows
ftp -n ftp.example.com < script # Linux
```

:warning: Windows 上使用`-s`选项指定`script.txt`脚本执行 ftp 命令。Linux 上可以使用重定向实现。

### 目录操作

| 命令                 | 描述                       |
| -------------------- | -------------------------- |
| `cd`                 | 更改当前工作目录到指定目录 |
| `ls`或`dir`          | 列出当前目录下的内容       |
| `pwd`                | 显示当前目录的绝对路径     |
| `mkdir`              | 创建目录                   |
| `rmdir`              | 删除一个目录               |
| `rename <old> <new>` | 重命名一个目录             |

### 快速开始

<!--rehype:wrap-class=row-span-2-->

使用匿名模式访问远程 FTP 服务器

```bash
ftp ftp.example.com
```

ftp 会启动交互式命令行

```bash
Connected to <host> (<ip address>).
220 (vsFTPd 3.*)
# 需要手动输入 anonymous 
Name (192.168.10.10:root): anonymous
331 Please specify the password.
Password: # 匿名模式下直接回车
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
```

连接成功后进入交互式会话.

查看所有命令，使用 `helm` 或 `?`

```bash
ftp> help
# 或者
ftp> ?
```

### 文件操作

| 命令                   | 描述                 |
| ---------------------- | -------------------- |
| `get <remote> <local>` | 下载一个文件到本地   |
| `mget`                 | 下载多个文件到本地   |
| `put <local> <remote>` | 上传一个文件到服务器 |
| `mput`                 | 上传多个文件到服务器 |
| `delete <remote>`      | 删除一个文件         |
| `rename <old> <new>`   | 重命名一个文件       |

脚本
----

### 样例

<!--rehype:wrap-class=col-span-3-->

以匿名登录为例，将下列脚本代码放入文件 `script` 中：

```bash
user anonymous "\n"                 # 匿名用户
binary                              # 将文件传输模式设置为二进制模式，这对于非文本文件（如图片、压缩文件等）来说是必要的，以确保文件在传输过程中不会被更改。
ls <dir>                            # 进入某个目录
pwd                                 # 输出当前路径
quit                                # 退出 ftp 连接
```

使用 `ftp` 命令执行脚本文件：

```bash
ftp -n ftp.example.com < script     # 使用 -n 选项禁止自动登录，这样会继续执行 user 指令，而不是启动交互式命令行。
```
