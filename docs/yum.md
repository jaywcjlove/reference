YUM 备忘清单
===

这个 YUM 快速参考备忘单显示了它的常用命令使用清单。

YUM 清单查询
---

### 介绍

yum（`Y`ellow dog `U`pdater, `M`odified）是一个在 `Fedora` 和 `RedHat` 以及 SUSE 中的 `Shell` 前端软件包管理器

```bash
$ yum [options] [command] [package ...]
```

----

- [YUM 官方网站](http://yum.baseurl.org/) _(yum.baseurl.org)_
- [Fedora 中的 Yum 文档](https://docs.fedoraproject.org/en-US/Fedora/15/html/Deployment_Guide/ch-yum.html) _(fedoraproject.org)_
- [CentOS 中的 Yum 文档](http://wiki.centos.org/PackageManagement/Yum/) _(wiki.centos.org)_
- [Scientific Linux 中的 Yum 文档](https://www.scientificlinux.org/documentation/faq/yum.apt.repo) _(scientificlinux.org)_

### YUM 查询

子命令描述和任务

#### help

显示 yum 命令和选项

```bash
yum help
```

显示 yum 子命令和选项

### 单独的包
<!--rehype:wrap-class=row-span-3-->

#### list

列出存储库中的包名称

```bash
# 列出存储库中的包名称
yum list available
# 列出所有可用的包
yum list installed
# 列出所有已安装的包
yum list all
# 列出已安装和可用的软件包
yum list kernel
```

#### info

列出已安装和可用的内核包

```bash
# 列出有关 `vsftpd` 软件包的信息
$ yum info vsftpd
```

#### deplist

显示包的依赖项

```bash
$ yum deplist nfs-utils
```

列出依赖项和提供它们的包

#### provides

```bash
# 查找提供查询文件的包
$ yum provides “*bin/top”
# 显示包含 README.top 文件的包
$ yum provides “*/README.top”
```

#### search

```bash
# 查找名称或描述中带有 samba 的软件包
$ yum search samba
```

#### updateinfo

```bash
# 获取有关可用软件包更新的信息
$ yum updateinfo security
```

获取有关可用 security 更新的信息

### 包组

#### grouplist

列出已安装和可用软件包组的名称

#### groupinfo

```bash
# 查看 Web 服务器组中的包
$ yum groupinfo "Web Server"
```

#### check-update

查询存储库以获取可用的软件包更新

### 管理 YUM 存储库
<!--rehype:wrap-class=row-span-2-->

#### repolist

显示启用的软件存储库

#### repoinfo

显示有关启用的 `yum` 存储库的信息 *

```bash
$ yum repoinfo rhel-7-server-rpms
```

请参阅有关 rhel-7-server-rpms 存储库的信息

#### repo-pkgs

使用特定存储库中的包 *

```bash
# 列出来自 my-rpms 存储库的软件包
$ yum repo-pkgs my-rpms list
# 从 my-rpms repo 安装所有软件包
$ yum repo-pkgs my-rpms install
# 从 my-rpms 存储库中删除所有软件包
$ yum repo-pkgs my-rpms remove
```

#### makecache

下载 `yum` 存储库数据到缓存

### 故障排除和维护 YUM
<!--rehype:wrap-class=row-span-2-->

#### check

检查本地 RPM 数据库是否有问题（运行了很长时间）

#### history

```bash
# 列出所有 yum 安装、更新和清理操作
$ yum history list
# 显示 yum info 3 的详细信息
$ yum history info 3
# 撤消事务 3 中的 yum 操作
$ yum history undo 3
# 重做事务 3 中撤消的 yum 操作
$ yum history redo 3
```

#### clean

```bash
# 删除缓存中保存的包
$ yum clean packages
# 从缓存中清除所有包和元数据
$ yum clean all
```

清除缓存的包数据

#### fssnapshot

列出 LVM 快照（帮助在包更新后回滚）

#### fs

```bash
# 列出启用的文件系统过滤器
$ yum fs filters
# 过滤所有正在安装的文档（小心！）
$ yum fs documentation
```

对文件系统采取行动（防止在最小系统上安装 doc 或语言文件）非常有用！

### 使用 YUM 管理语言包

#### langavailable

列出已安装的语言 *

#### langinfo

```bash
# 列出与西班牙语相关的软件包
$ yum langinfo es
```

#### langinstall

```bash
# 安装与西班牙语相关的软件包
$ yum langinstall es
```

#### langlist

列出已安装的语言 *

#### langremove

```bash
# 删除与西班牙语相关的软件包
$ yum langremove es
```

### 使用 YUM 安装、删除和升级软件包
<!--rehype:wrap-class=row-span-2-->

#### install

```bash
# 安装 vsftpd 包
$ yum install vsftpd
```

#### update

```bash
# 使用可用更新更新所有软件包
$ yum update
# 更新 httpd 包（如果可用）
$ yum update httpd
# 应用与安全相关的包更新
$ yum update --security
```

#### update-to

将一个或所有软件包更新到特定版本

#### upgrade

```bash
$ yum -y upgrade
```

更新包考虑过时，只升级所有包，不升级软件和系统内核

#### localinstall

```bash
# 从本地文件、http 或 ftp 安装包
$ yum localinstall abc-1-1.i686.rpm
# 从本地目录安装 abc 包
$ yum localinstall http://myrepo/abc-1-1.i686.rpm
```
<!--rehype:className=wrap-text-->

从 FTP 站点安装 abc

#### downgrade

将软件包降级到早期版本

```bash
$ yum downgrade abc
```

将 abc 包降级到早期版本

#### reinstall

```bash
# 重新安装 util-linux（以替换任何已删除的文件）
$ yum reinstall util-linux
```

#### swap

```bash
# 删除 ftp 包并安装 lftp 包
$ yum swap ftp lftp
```

#### erase/remove

```bash
# 删除 vsftpd 包和依赖
$ yum remove vsftpd
```

#### autoremove

```bash
# 删除 httpd 和其他不需要的包
$ yum autoremove httpd
```

#### groupinstall

```bash
# 安装 Web 服务器包
$ yum groupinstall "Web server"
```

### 更多 YUM 相关命令（安装 yum-utils 软件包）

#### find-repos-of-install

查找包来自哪个存储库

#### needs-restarting

查找已更新且需要重启的进程

#### repoclosure

从存储库中获取未满足的依赖项列表

#### repoquery

查询远程仓库和本地 `RPM` 数据库

```bash
# 显示依赖包
$ repoquery --requires --resolve bash
```

#### reposync

将 `yum` 存储库同步到本地目录

```bash
# 从 repo 获取包
$ reposync -r rhel-atomic-host-beta-rpms
```

#### repotrack

下载一个包及其所有依赖项

#### show-installed

列出已安装的 RPM 包和统计信息

#### verifytree

检查本地 yum 存储库的一致性

#### yum-complete-transaction

尝试完成未完成的 yum 交易

#### yumdb

检查或更改 yum 数据库

#### yumdownloader

```bash
# 使用本地源离线安装 net-tools 工具包
$ yumdownloader net-tools.x86_64
# 使用 –destdir 参数设置下载的目标目录
$ yumdownloader net-tools.x86_64 --destdir=/usr/local/bin/
# 使用 –resolve 参数解决依赖关系并下载所需的安装包
$ yumdownloader net-tools.x86_64 --resolve --destdir=/usr/local/bin/
```
<!--rehype:className=wrap-text-->

从 repo 下载一个包到当前目录

### 不同 YUM 命令的常用选项

```bash
yum --disableplugin=langpacks info vsftpd
# 显示与正在运行的进程相关的包
yum --enableplugin=ps ps
yum install docker \
  --enablerepo=rhel-7-server-extras-rpm
yum list available --disablerepo=epel
# 下载 vsftpd 包到缓存
yum install --downloadonly vsftpd
```

----

:- | -
:- | -
`-y` | 如果出现提示，假设是
`--assumeno` | 如果提示，则假设否
`-q` | 不产生任何输出
`-v` | 产生额外的调试输出
`--noplugins` | 运行命令而不加载任何 yum 插件
`--disableplugin=` | 禁用单个命令的特定插件
`--enableplugin=` | 启用已安装但当前已禁用的插件
`--enablerepo=` | 为单个命令启用当前禁用的 repo（通配符可以）
`--disablerepo=` | 为单个命令禁用当前启用的 repo（通配符可以）
`--downloadonly` | 下载到 `/var/cache/yum/arch/prod/repo/packages/`，但不要安装
`--filter-???=` | 代替???与vendors, rpm-groups, arches 和其他人一起过滤输出
`--changelog` | 显示包的变更日志信息
<!--rehype:className=style-list-->

另见
---

- [YUM 官方网站](http://yum.baseurl.org/) _(yum.baseurl.org)_
- [YUM 备忘清单(适用于红帽 RedHat 企业 Linux)](https://access.redhat.com/sites/default/files/attachments/rh_yum_cheatsheet_1214_jcs_print-1.pdf) _(access.redhat.com)_
- [用 yum 管理软件包](http://prefetch.net/articles/yum.html) _(prefetch.net)_
- [Fedora 中的 Yum 文档](https://docs.fedoraproject.org/en-US/Fedora/15/html/Deployment_Guide/ch-yum.html) _(fedoraproject.org)_
- [CentOS 中的 Yum 文档](http://wiki.centos.org/PackageManagement/Yum/) _(wiki.centos.org)_
- [Scientific Linux 中的 Yum 文档](https://www.scientificlinux.org/documentation/faq/yum.apt.repo) _(scientificlinux.org)_
