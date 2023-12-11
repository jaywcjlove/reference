Zip 备忘清单
====

Zip 命令用于在 Linux 系统上创建、压缩和解压缩 zip 文件

入门
----

### Zip 用法

```shell
$ zip [-选项] [-b 路径] [-t 日期] [-n 后缀名] [压缩文件列表] [-xi 列表]
```
<!--rehype:className=wrap-text-->

默认操作是添加或替换压缩文件列表中的压缩文件条目，压缩文件列表可以包括特殊名称 `-`，压缩标准输入数据

- `Zip` 是一个创建和管理 `zip` 文件的压缩工具
- `Unzip` 是一个用于解压缩 `zip` 文件的工具

```shell
$ yum install -y unzip zip
```

### 选项示例
<!--rehype:wrap-class=col-span-2 row-span-2-->

参数 | 描述  | 参数 | 描述
:--- | :--- | :--- | :---
`-f` | **freshen:** 只压缩具有变化的文件 | `-u` | **update:** 只压缩变化的或新增的文件
`-d` | 在压缩文件中删除项目 | `-m` | 移动到压缩文件中(删除操作系统文件)
`-r` | 递归进入目录   | `-j` | 不记录目录名
`-0` | 仅存储    | `-l` | 将`LF`转换为`CRLF`(-ll CRLF转LF)
`-1` | 更快压缩  | `-9`  | 更好压缩
`-q` | 安静操作  | `-v` | 显示详细操作/打印版本信息
`-c` | 增加注释   | `-z`  | 添加压缩文件注释
`-@` | 从标准输入流读取文件列表  | `-o` | 让压缩文件日期与最近更新的文件日期一致
`-x` | 排除以下文件/目录  | `-i` | 仅添加以下文件/目录
`-F` | 修复压缩文件(-FF尝试更加努力) | `-D` | 不添加目录到压缩文件中
`-A` | 调整自解压可执行文件   | `-J` | 忽略压缩文件的前缀(解压自解压文件)
`-T` | 检查压缩文件是否完整  | `-X`  | 排除额外的文件属性
`-y` | 将符号链接作为链接存储 | `-h` | 显示此帮助文件
`-n` | 不压缩以下文件类型   | `-w`  | 在压缩操作之前提示
`-V` | 保留VMS版本号     | `-L` | 使一些名称小写
`-M` | 通过“more”分页器进行数据流输出 | `-O` | CHARSET指定字符编码以供压缩条目使用
`-k`  | 加密压缩文件项     | `-s`  | 使用正则表达式选择要包括的条目
`-u@` | 从标准输入读取参数 | `-vV` | 仅包括与VMS版本字符串匹配的条目
`-z`   | 将zip放入存档模式    | `-Z`  | `zipinfo` 模式
`-C`   | 大小写不敏感匹配文件名(需要UTF-8文件系统;参阅--Ohelp) | &nbsp; | &nbsp;
`-2**` | 通过第二层压缩  | `-3**` | 通过第三层压缩
`-4**` | 通过第四层压缩  | `-d**` | 仅提取这些文件(仅限zipinfo模式)
`-j**` | 忽略 `zipfile` 的前缀(解压模式) | &nbsp; | &nbsp;

`**` 这些级别是数据压缩算法，具有 gzip(1) 兼容的级别 `1-9`, 以及特殊的 `0` 表示无压缩和 `-1` (最快)表示压缩数据以"存储"方法机会存储在ZIP文件中 的未压缩数据。

### 语法形式和选项

:- | :-
:- | :-
**基本语法** | `zip [选项] 文件名.zip [文件列表]`
**压缩目录** | `zip -r [选项] 文件名.zip 目录名称`
**将文件添加到现有压缩文件** | `zip -u [选项] 文件名.zip 文件名称`
**解压缩文件** | `unzip [选项] 文件名.zip`
**将 zip 文件解压缩到指定目录** | `unzip [选项] 文件名.zip -d 目录名称`
**列出 zip 文件中的内容** | `unzip -l 文件名.zip`
**将 zip 文件加密** | `zip -e [选项] 文件名.zip 文件名称`
**将 zip 文件解密** | `unzip [选项] 文件名.zip（然后输入密码解密）`
**将 zip 文件中的文件转成 UTF-8 编码** | `zip -O utf-8 -r [选项] 文件名.zip 文件列表`
<!--rehype:className=style-list-arrow-->

Zip 压缩示例
--------

### 创建新的 zip 压缩文件

```shell
$ zip filename.zip file1 file2 folder1
```

### 将文件添加到现有的 zip 压缩文件

```shell
$ zip -r filename.zip file3 folder2
```

### 压缩文件排除文件
<!--rehype:wrap-class=row-span-2-->

```shell
$ zip -r basic.zip example/basic/ -x "example/basic/node_modules/*" -x "example/basic/build/*" -x "example/basic/coverage/*"
```
<!--rehype:className=wrap-text-->

压缩 `example/basic/` 目录内容到 `basic.zip` 压缩包中 `-x` 指定排除目录，注意**没有双引**号将不起作用

### 将大文件分割成多个zip文件

```shell
$ zip -s 10M -r filename.zip largefile
```

### 将zip文件加密

```shell
$ zip -e secure.zip file4
```

### 更新zip文件中的文件

```shell
$ zip -u filename.zip file5
```

### 将zip文件中的文件转成UTF-8编码

```shell
$ zip -O utf-8 -r utf8zip.zip utf8file
```

Zip 解压示例
--------

### 将zip文件解密

```shell
$ unzip secure.zip（然后输入密码解密）
```

### 解压缩zip文件

```shell
$ unzip filename.zip
```

### 将zip文件解压缩到指定目录

```shell
$ unzip filename.zip -d folder3
```

### 列出zip文件中的内容

```shell
$ unzip -l filename.zip
```

另见
----

- [Zip 官网](https://www.info-zip.org/Zip.html) _(info-zip.org)_
- [Zip 命令帮助文档](https://jaywcjlove.github.io/linux-command/c/zip.html) _(info-zip.org)_
