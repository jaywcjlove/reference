Pacman 备忘清单
===

这个是 Arch Linux 软件包管理器 Pacman 快速参考备忘单显示了它的常用命令使用清单。

PACMAN 清单查询
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

Pacman 是 Arch Linux 软件包管理器。帮助您在 Arch Linux 上使用 Pacman 软件包管理器进行软件包的安装、升级、搜索和删除等操作

---

命令语法格式

```bash
$ pacman [ OPTIONS ] COMMAND
```

同步非本地(local)软件仓库并升级系统的软件包

```bash
$ pacman -Syu
```

子命令描述和任务，显示 apt 命令和选项。

```bash
$ pacman -h or --help
# 或
$ pacman
```

查看指令用法

```bash
$ man pacman
```

请注意，使用 Pacman 命令时，需要管理员权限 `sudo`

---

相关参考文献

- [Archlinux Wiki 官方文档](https://wiki.archlinuxcn.org/wiki/Pacman)

### 示例
<!--rehype:wrap-class=row-span-2-->

Option | Function
:-- | --
`pacman -D, --database` | 操作软件包数据库
`pacman -Q, --query` | 从数据库中查询软件包
`pacman -R, --remove` | 从系统中移除软件包
`pacman -S, --sync` | 同步软件包
`pacman -T, --deptest` | 检查依赖关系
`pacman -U, --upgrade` | 将包升级或添加到系统，并从同步存储库安装所需的依赖项。
`pacman -F, --files` | 查询文件数据库。
`pacman -V, --version` | 显示版本
`pacman -h, --help` | 显示帮助信息
<!--rehype:className=style-list-arrow-->

升级所有已安装的软件包

```bash
$ sudo pacman -Syu
```

### 安装

要安装单个或者一系列软件包（包含软件包的依赖）

```bash
$ pacman -S 包名_1 包名_2 ...
```

要通过正则表达式安装一系列软件包

```bash
$ pacman -S $(pacman -Ssq 包正则表达式)
```

有时软件包有多个版本，放在不同的仓库内（例如 extra 和 testing）

```bash
$ pacman -S extra/包名
```

要安装多个含有相似名称的软件包，可以使用花括号扩展

```bash
$ pacman -S plasma-{desktop,mediacenter,nm}
```

可以多层扩展到需要的层次：

```bash
$ pacman -S plasma-{workspace{,-wallpapers},pa}
```

### 安装包组

一些包属于一个可以同时安装的软件包组

```bash
$ pacman -S gnome
```

想要查看哪些包属于 gnome 组

```bash
$ pacman -Sg gnome
```

### 查询包数据库
<!--rehype:wrap-class=row-span-3-->

pacman 使用 -Q 参数查询本地软件包数据库， -S 查询同步数据库，以及 -F查询文件数据库

pacman 可以在包数据库中查询软件包，查询位置包含了软件包的名字和描述

```bash
$ pacman -Ss string1 string2 ...
```

使用正则

```bash
$ pacman -Ss '^vim-'
```

要查询已安装的软件包：

```bash
$ pacman -Qs string1 string2 ...
```

按文件名查找软件库：

```bash
$ pacman -F string1 string2 ...
```

显示软件包的详尽的信息：

```bash
$ pacman -Si package_name
```

查询本地安装包的详细信息：

```bash
$ pacman -Qi package_name
```

同时显示备份文件和修改状态：

```bash
$ pacman -Qii package_name
```

要获取已安装软件包所包含文件的列表：

```bash
$ pacman -Ql package_name
```

查询远程库中软件包包含的文件：

```bash
$ pacman -Fl package_name
```

查软件包安装的文件是否都存在：

```bash
$ pacman -Qk package_name
```

查询数据库获取某个文件属于哪个软件包

```bash
$ pacman -Qo /path/to/file_name
```

查询文件属于远程数据库中的哪个软件包：

```bash
$ pacman -F /path/to/file_name
```

查询所有不再作为依赖的软件包(孤立orphans)：

```bash
$ pacman -Qdt
```

查询所有明确安装而且不被其它包依赖的软件包：

```bash
$ pacman -Qet
```

### 清理软件包缓存

pacman 将下载的软件包保存在 /var/cache/pacman/pkg/ 并且不会自动移除旧的和未安装版本的软件包

要删除目前没有安装的所有缓存的包，和没有被使用的同步数据库

```bash
$ pacman -Sc
```

要删除缓存中的全部文件

```bash
$ pacman -Scc
```

#### Pactree

> 注意： pactree 不再是pacman包的一部分。它现在在pacman-contrib包中。

要显示软件包的依赖树：

```bash
$ pactree package_name
```

### 删除软件包

删除单个软件包，保留其全部已经安装的依赖关系

```bash
$ pacman -R package_name
```

删除指定软件包，及其所有没有被其他已安装软件包使用的依赖关系：

```bash
# ⚠️删除类似 gnome 这样的软件包组时，将会忽略组中软件包的安装原因，因为实际操作上执行的是逐一删除软件组的每一个软件，依赖软件包的安装原因不会被忽略。
$ pacman -Rs package_name
```

<!--rehype:className=wrap-text -->

要删除软件包和所有依赖这个软件包的程序:

```bash
# ⚠️此操作是递归的，请小心检查，可能会一次删除大量的软件包。
$ pacman -Rsc package_name
```

要删除一个被其他软件包依赖的软件包，但是不删除依赖这个软件包的其他软件包

```bash
# ⚠️ 此操作有破坏系统的能力，应该尽量避免使用
$ pacman -Rdd package_name
```

### 查询一个包含具体文件的包名

同步文件数据库:

```bash
$ pacman -Fy
```

查询包含某个文件的包名，比如:

```bash
$ pacman -F pacman
core/pacman 5.0.1-4
    usr/bin/pacman
    usr/share/bash-completion/completions/pacman
extra/xscreensaver 5.36-1
    usr/lib/xscreensaver/pacman
```

### 其它命令

升级系统时安装其他软件包：

```bash
$ pacman -Syu package_name1 package_name2 ...
```

下载包而不安装它：

```bash
$ pacman -Sw package_name
```

安装一个本地包(不从源里下载）

```bash
$ pacman -U /path/to/package/package_name-version.pkg.tar.zst
```

要将本地包保存至缓存

```bash
$ pacman -U file:///path/to/package/package_name-version.pkg.tar.zst
```

安装一个远程包（不在 pacman 配置的源里面）：

```bash
$ pacman -U http://www.example.com/repo/example.pkg.tar.zst
```
