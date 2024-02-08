Subversion 备忘清单
===

本备忘单总结了常用的 [SVN](https://git-scm.com/) 命令行指令，以供快速参考。

入门
---

### Subversion 组件
<!--rehype:wrap-class=row-span-2-->

名称 | 说明
:- | :-
`svn` | 命令行程序
`svnversion` | 工作副本的修订
`svnlook` | 检查存储库
`svnadmin` | 存储库管理
`svndumpfilter` | 过滤存储库流
`mod_dav_svn` | Apache 模块
`svnserve` | SVN服务器（SVN协议）
`svnsync` | 镜像仓库
<!--rehype:className=left-align-->

---

- [Subversion 官方文档](https://subversion.apache.org/)

### 添加文件或文件夹

```bash
$ svn add *
# 添加文件夹中的所有项目，然后递归（忽略版本目录）
$ svn add itemname
# 如果 itemname 是文件夹，
# 则所有子文件夹 并且文件也会被添加
$ svn add * --force
# 强制递归到版本化目录
```

### 将更改提交到存储库

```shell
$ svn commit "/path"
# 提交对文件或文件夹的更改
$ svn commit -m "Message" "/path"
# 提交消息“Message”
$ svn commit -N "/path"
# 提交对文件夹的更改而不递归
```

### Subversion 协议

协议 | 说明
:- | :-
`file://` | 本地
`http://` | HTTP (Apache)
`https://` | HTTPS (SSL)
`svn://` | SVN (svnserve)
`svn+ssh://` | SVN over SSH
<!--rehype:className=left-align-->

### 删除、复制和移动

```shell
$ svn delete "/path"
$ svn -m "Deleting" delete "/path"
# 删除并显示消息“正在删除”
$ svn copy "sourcepath" "targetpath"
# 将源复制到目标
$ svn move "sourcepath" "targetpath"
# 将源移动到目标
```

### 杂项命令 ($ svn ... )
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:- | :-
`$ svn resolve "/path"` | 解决冲突
`$ svn cleanup "/path"` | 递归删除，锁并完成，操作
`$ svn lock "/path"` | 锁定路径
`$ svn unlock "/path"` | 解锁路径
`$ svn cat "/path"` | 查看文件内容
`$ svn status "/path"` | 获取路径状态
<!--rehype:className=left-align-->

### Subversion 帮助

```shell
$ svn help
$ svn help import
# 显示“导入”命令的帮助
```

### 恢复本地（未提交）更改

```shell
$ svn revert "/path/filename"
# 恢复对文件的更改
$ svn revert -R "/path/folder"
# 递归恢复对文件夹的更改
```

### 日志与责任

```shell
$ svn log "/path"
# 显示存储库中的日志消息
$ svn blame "/path"
#  显示路径的带有消息的提交
```

### 将本地文件夹添加到存储库

```shell
$ svn import folder "/path/to/repository"
```

### 物品和财产状态
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:- | :-
' ' | 无修改
`A` | 添加
`D` | 删除
`M` | 修改的
`R` | 已更换物品
`C` | 冲突中
`X` | 外部定义
`I` | 被忽略
`?` | 不在存储库中
`!` | 物品缺失
`~` | 对象类型已更改
<!--rehype:className=left-align-->

### 存储库管理

```shell
$ svnadmin create "/path/to/repository"
# 创建存储库
$ svnadmin setlog "path" -r 7 message.txt
# 第7版的更改日志消息
# message.txt内容的“路径”
$ svnadmin dump "repository" > filename
# 将存储库的内容转储到文件
$ svnadmin load "repository" < filename
# 将文件的内容加载到存储库
```

### 文件之间的差异

```shell
$ svn diff "/path/file"
# 查看“/path/file”中的更改
$ svn diff "/path/file@2" "/path/file@7"
# 比较修订版2和7中的文件
$ svn diff -r 2:7 "/path/folder"
# 比较修订版2和7中的所有文件
```

### 签出工作副本

```shell
$ svn checkout "/path/to/repository/folder"
# 创建“文件夹”的工作副本
$ svn checkout "/path" foldername
# 签出到新文件夹“foldername”
```

### 合并更改

```shell
$ svn merge -r 2:7 "item" "/path/file"
# 在修订2之间应用差异
# 和“item”到“/path/file”的7
$ svn merge "url1" "url2" "/path/file"
# 应用“url1”和
# “url2”到“/path/file”
```

### 特性命令($ svn ... )

命令 | 说明
:- | :-
`$ svn proplist "/path"` | 列出属性
`$ svn propset PROP VAL` | 设置属性“PROP”
`$ svn "/path"` | 至值“VAL”
`$ svn propget PROP "/path"` | 获取“PROP”的值
`$ svn propedit PROP "/path"` | 编辑“PROP”
`$ svn propdel PROP "/path"` | 删除“PROP”
<!--rehype:className=left-align-->

### 参数快捷方式

参数 | 说明
:- | :-
`-m "Message"` | `--message`
`-q` | `--quiet`
`-v` | `--verbose`
`-r` | `--revision`
`-c` | `--change`
`-t` | `--transaction`
`-R` | `--recursive`
`-N` | `--non-recursive`
<!--rehype:className=left-align-->

### 从存储库更新工作副本

```shell
$ svn update "/path"
$ svn update -r9 "/path"
# 更新至修订版9
```

另见
---

- [Apache Subversion: Quick Start](https://subversion.apache.org/quick-start)
- [Subversion 与版本控制](https://svnbook.red-bean.com/)
