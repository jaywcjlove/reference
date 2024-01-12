Chown 备忘清单
===

这份快速参考备忘单提供了改变文件或目录的所有者的简要概述，以及 chown 命令的操作

入门
--------

### 介绍

"chown"是Linux/Unix系统中的一个命令，全称为"change owner"，用于改变文件或目录的所有者。这个命令可以更改某个文件或目录的属主（owner），也可以同时更改其属组（group）。

**注意：只有超级用户（root）才有权限改变文件或目录的所有者。**

### 用法

```shell
chown [选项] [所有者][:[组]] 文件或目录名
```

#### 选项

- `-c` : 显示更改的部分的信息
- `-f` : 忽略错误信息
- `-h` :修复符号链接
- `-v` : 显示详细的处理信息
- `-R` : 处理指定目录以及其子目录下的所有文件
- `--help` : 显示辅助说明
- `--version` : 显示版本

示例
--------

### 把 /var/run/httpd.pid 的所有者设为 root

```shell
chown root /var/run/httpd.pid
```

### 将文件 file1.txt 的拥有者设为 username ，群体的使用者设为 groupname

```shell
chown username:groupname file1.txt
```

### 将当前目录以及子目录的所有文件的拥有者设为 username ，群体的使用者设为 groupname

```shell
chown -R username:groupname *
```

### 不修改文件 file1.txt 的拥有者，将文件使用群体改为 groupname

```shell
chown :groupname file1.txt
```
