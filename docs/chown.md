Chown 备忘清单
===

这份快速参考备忘单整理了 `chown` 修改文件所有者和属组的常用语法、选项、递归行为与安全示例

入门
--------
<!--rehype:body-class=cols-2-->

### 语法

```shell
$ chown [选项]... [所有者][:[属组]] 文件...
$ chown [选项]... --reference=参考文件 文件...
```

`chown` 命令可修改文件或目录的所有者及属组，执行该操作一般需要管理员权限。

#### 示例

```shell
$ sudo chown alice report.txt
$ sudo chown alice:staff report.txt
$ sudo chown -R alice:staff project/
$ sudo chown --reference=template.txt target.txt
```

### 所有者与属组

写法 | 含义
:- | :-
`alice` | 只把所有者改为 `alice`，属组保持不变
`alice:staff` | 所有者改为 `alice`，属组改为 `staff`
`alice:` | 所有者改为 `alice`，属组改为 `alice` 的登录属组
`:staff` | 只把属组改为 `staff`，效果类似 `chgrp staff`
`:` | 不改变所有者或属组
`+1001:+1001` | 使用数字 UID/GID，`+` 可避免与同名用户或组混淆
<!--rehype:className=show-header left-align-->

### 常用选项

选项 | 说明
:- | :-
`-c`, `--changes` | 只在发生变更时输出信息
`-f`, `--silent`, `--quiet` | 抑制大多数错误信息
`-v`, `--verbose` | 为每个处理的文件输出诊断信息
`-R`, `--recursive` | 递归处理目录及其内容
`--from=当前所有者:当前属组` | 仅当当前所有者或属组匹配时才修改
`--reference=参考文件` | 使用参考文件的所有者和属组
`--preserve-root` | 递归操作 `/` 时失败，防止误操作根目录
`--no-preserve-root` | 不对 `/` 做特殊保护
`--help` | 显示帮助
`--version` | 显示版本
<!--rehype:className=show-header left-align-->

### 符号链接

选项 | 说明
:- | :-
`--dereference` | 修改符号链接指向的目标，这是默认行为
`-h`, `--no-dereference` | 修改符号链接本身，而不是它指向的目标
`-H` | 与 `-R` 一起使用；命令行参数中的目录符号链接会被遍历
`-L` | 与 `-R` 一起使用；遍历遇到的每个目录符号链接
`-P` | 与 `-R` 一起使用；不遍历任何符号链接，GNU 默认值
<!--rehype:className=show-header left-align-->

常用示例
--------

### 修改文件所有者

```shell
$ sudo chown alice report.txt
```

把 `report.txt` 的所有者改为 `alice`，文件属组保持不变。

### 同时修改所有者和属组

```shell
$ sudo chown alice:staff report.txt
```

把 `report.txt` 的所有者改为 `alice`，属组改为 `staff`。

### 只修改属组

```shell
$ sudo chown :staff report.txt
```

不改变文件所有者，只把属组改为 `staff`。

### 使用登录属组

```shell
$ sudo chown alice: report.txt
```

所有者改为 `alice`，属组改为 `alice` 的登录属组。

### 递归修改目录
<!--rehype:wrap-class=row-span-2-->

```shell
$ sudo chown -R alice:staff project/
```

递归修改 `project/` 目录及其所有内容的所有者和属组。

```shell
$ sudo chown --preserve-root -R alice:staff /srv/app
```
<!--rehype:className=wrap-text-->

递归处理重要路径时可加 `--preserve-root`，降低误把根目录作为目标的风险。

### 按当前归属条件修改
<!--rehype:wrap-class=row-span-2-->

```shell
$ sudo chown --from=root:root app:app config.yml
```
<!--rehype:className=wrap-text-->

只有当 `config.yml` 当前所有者和属组都是 `root` 时，才改为 `app:app`。

```shell
$ sudo chown --from=:oldgroup :newgroup *.log
```
<!--rehype:className=wrap-text-->

只要求当前属组匹配 `oldgroup`，匹配后把属组改为 `newgroup`。

### 参照其他文件

```shell
$ sudo chown --reference=template.txt target.txt
```
<!--rehype:className=wrap-text-->

把 `target.txt` 的所有者和属组改成与 `template.txt` 相同。

### 修改符号链接本身

```shell
$ sudo chown -h alice:staff current-link
```

修改符号链接 `current-link` 自身的所有者和属组，而不是它指向的目标文件。

### 递归时不遍历符号链接

```shell
$ sudo chown -R -P app:app /srv/app
```

`-P` 会让递归过程不进入符号链接指向的目录，适合多数需要避免越界修改的场景。

实践
--------

### Web 应用目录

```shell
$ sudo chown -R app:app /srv/app
$ sudo chown -R www-data:www-data /var/www/example
```

把应用目录交给运行服务的用户和属组，避免用 `root` 直接运行应用进程。

### 上传目录

```shell
$ sudo chown -R www-data:www-data /var/www/example/uploads
```
<!--rehype:className=wrap-text-->

只给需要写入的目录设置 Web 服务用户归属，其他代码目录应尽量保持只读权限。

### 恢复当前用户归属

```shell
$ sudo chown -R "$USER":"$USER" ~/.config/my-tool
```
<!--rehype:className=wrap-text-->

当配置目录被 `sudo` 创建后，可把它恢复为当前用户拥有。

### 避免通配符误伤

```shell
$ sudo chown -R app:app /srv/app/
$ sudo chown -R app:app ./
```

递归操作前优先使用明确路径。避免在不确定的工作目录中直接执行 `chown -R user:group *`。

排错
--------

### 查看当前归属

```shell
$ ls -l report.txt
$ stat report.txt
```

`ls -l` 适合快速查看，`stat` 会显示更完整的 UID、GID 与文件元数据。

### 找出归属不正确的文件

```shell
$ find /srv/app -not -user app -ls
$ find /srv/app -not -group app -ls
```

用 `find` 先列出目标，再决定是否批量修复，能减少递归修改的风险。

### 批量修复特定归属

```shell
$ sudo find /srv/app -user root -exec chown app:app {} +
```

只修复当前所有者为 `root` 的文件，避免无差别覆盖整个目录树。

另见
----

- [GNU Coreutils: chown invocation](https://www.gnu.org/s/coreutils/manual/html_node/chown-invocation.html)
- [GNU Coreutils: File permissions](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html)
