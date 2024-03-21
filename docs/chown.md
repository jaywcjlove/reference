Chown 备忘清单
===

这份快速参考备忘单提供了改变文件或目录的所有者的简要概述，以及 chown 命令的操作

入门
--------

### 介绍

Linux/Unix 系统中的一个命令，全称为 `change owner`，用于改变文件或目录的所有者

```shell
chown [选项] [所有者][:[组]] 文件或目录名
```

命令可以更改某个文件或目录的属主（owner），也可以同时更改其属组（group）

#### 示例

```shell
$ chown :groupname file1.txt
$ chown -R username:groupname *
$ chown $USER file.txt
```

`注意` 只有超级用户(root)才有权限改变文件或目录的所有者

### 选项

- `-c` : 显示更改的部分的信息
- `-f` : 忽略错误信息
- `-h` :修复符号链接
- `-v` : 显示详细的处理信息
- `-R` : 处理指定目录以及其子目录下的所有文件
- `--help` : 显示辅助说明
- `--version` : 显示版本

示例
--------

### 更改文件所有者

```shell
$ chown root /var/run/httpd.pid
```

把 `/var/run/httpd.pid` 的所有者设为 `root`

#### 仅更改所有者

```bash
$ chown new_owner file.txt
```

### 递归更改目录及其内容的所有者
<!--rehype:wrap-class=row-span-2-->

```shell
chown -R new_owner:new_group directory/
```

将文件夹 `directory` 的拥有者设为 `new_owner` ，群体的使用者设为 `new_group`

```shell
$ chown username:groupname file1.txt
```

将文件 file1.txt 的拥有者设为 `username` ，群体的使用者设为 `groupname`

```shell
$ chown -R username:groupname *
```

将当前目录以及子目录的所有文件的拥有者设为 `username` ，群体的使用者设为 `groupname`

### 更改所有者为当前用户

```bash
$ chown $USER file.txt
```

递归更改目录及其内容的所有者为当前用户

```bash
sudo chown -R $USER directory/
```

### 递归并且不显示错误信息

```bash
chown -R -f new_owner:new_group directory/
```

更改目录及其内容的所有者和组为 `alice`

```bash
chown -R alice: directory/
```

### 仅更改组

```shell
$ chown :groupname file1.txt
```

不修改文件 `file1.txt` 的拥有者，将文件使用群体改为 `groupname`

### 变更符号链接的所有者
<!--rehype:wrap-class=row-span-2-->

```bash
$ chown -h new_owner:new_group symlink
```

变更符号链接的所有者而不是链接指向的文件

```bash
$ chown -h manager symlink
```

更改符号链接的所有者为"manager"

### 更改所有者为根用户
<!--rehype:wrap-class=row-span-2-->

```bash
sudo chown root:root file.txt
```

#### 递归更改所有者为当前用户

```bash
sudo chown -R $USER directory/
# 更改目录及其内容的所有者和组为"alice":
chown -R alice: directory/
```

### 将文件所有者更改为其他用户，但保留组

```bash
chown new_owner file.txt
```

### 将文件所有者更改为其他用户，同时更改组

```bash
chown new_owner:new_group file.txt
```
