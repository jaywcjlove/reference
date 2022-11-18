APT 备忘清单
===

这个 APT 快速参考备忘单显示了它的常用命令使用清单。

APT 清单查询
---

### 介绍
<!--rehype:wrap-class=row-span-2-->
APT（`A`dvanced `P`ackaging `T`ools）是`Debian`及其派生的`Linux`软件包管理器。APT可以自动下载，配置，安装二进制或者源代码格式的软件包，因此简化了Unix系统上管理软件的过程。APT最早被设计成`dpkg的前端`，用来处理deb格式的软件包。现在经过`APT-RPM`组织修改，APT已经可以安装在支持RPM的系统管理RPM包。

它结合了apt-get和apt-cache工具中最常用的命令以及选项与默认值。`apt`命令必须以具有`sudo`权限的用户运行。

命令语法格式

```bash
$ apt [ OPTIONS ] COMMAND
```

----

相关参考文献

- [APT（8） 官方网站](https://manpages.debian.org/unstable/apt/apt.8.en.html)
- [apt.conf(5) 官方文档](https://manpages.debian.org/unstable/apt/apt.conf.5.en.html)
- [sources.list(5) 官方文档](https://manpages.debian.org/unstable/apt/sources.list.5.en.html)

### 命令查询

子命令描述和任务，显示 apt 命令和选项。

```bash
$ apt -h or --help
# 或
$ apt 
```

查看指令用法

```bash
$ man apt
```

### update

从APT存储库中获取最新索引数据。

```bash
$ sudo apt update
```

在升级或安装新软件包之前，建议始终先运行一次更新软件包索引。

### upgrade

将安装的软件包升级到最新版本，该命令不会升级那些已删除软件包的依赖。

```bash
$ sudo apt upgrade
```

升级单个软件包。

```bash
$ sudo apt upgrade package_name
```

升级整个系统，则会删除当前安装的软件包。

```bash
$ sudo apt full-upgrade
```

### install

安装软件包。

```bash
$ sudo apt install package_name
```

如果只想升级，不要安装

```bash
$ sudo apt install <package_name> --only-upgrade
```
<!--rehype:className=wrap-text -->

安装多个软件包，包名用空格分隔。

```bash
$ sudo apt install package1 package2
```

安装本地deb文件，提供文件的完整路径。否则，apt命令将尝试从APT存储库中检索并安装软件包。
`Deb是所有基于Debian的发行版使用的安装软件包格式`。

```bash
$ sudo apt install /full/path/file.deb
```

### remove和purge
<!--rehype:wrap-class=row-span-2-->

要删除已安装的程序包，你可以使用apt子命令`remove`和`purge`。

#### remove

remove子命令将卸载指定的软件包，`但可能会留下一些配置文件`。
通过remove方式卸载的软件包可以通过重新安装软件包来恢复，因为个人配置文件还在本地。

卸载指定的软件包

```bash
$ sudo apt remove package_name
```

指定多个软件包，以空格分隔

```bash
$ sudo apt remove package1 package2
```

#### purge

purge子命令将卸载指定的软件包和配置文件。

```bash
$ sudo apt purge package_name
```

### autoremove自动删除依赖

用于删除自动安装的包，这些包都是为了满足其他包的依赖关系，现在不再需要这些包，因为依赖关系已更改或者同时删除了需要它们的包。

```bash
$ sudo apt autoremove
```

### list
<!--rehype:wrap-class=row-span-2-->

打印所有软件包的列表，包括软件包的版本和结构的信息。

```bash
$ sudo apt list
```

要确定是否安装了指定的软件包，可以使用grep命令过滤输出。

```bash
$ sudo apt list | grep package_name
```

仅列出已安装的软件包。

```bash
$ sudo apt list --installed
```

获取可升级软件包的列表。

```bash
$ sudo apt list --upgradeable
```

### 搜索查找软件包详细信息

#### search

在可用软件源列表中搜索指定的软件包。如果找到该软件包，则将返回名称与搜索词匹配的软件包。

```bash
$ sudo apt search package_name
```

#### show

显示有关给定软件包的信息，包括其依赖项、安装、下载大小、软件包可用的来源、软件包内容的描述等。

```bash
$ sudo apt show package_name
```

### edit-sources 快速换源

允许您在首选的文本编辑器中编辑`sources.list(5)` 文件，同时还提供基本的健全性检查。

首次换源可以使用`edit-sources`

```bash
$ sudo apt show edit-sources
```

换源后更新一下软件包索引。

```bash
$ sudo apt update
```

之后可以使用`select-editor`更换默认编辑器

```bash
$ sudo select-editor
```
