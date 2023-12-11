tar 备忘清单
===

这是 tar 常用命令的快速参考备忘单。

入门
----

### 介绍

在Linux平台上，`tar` 命令是主要的归档实用程序。了解各种 `tar` 命令选项将帮助您掌握归档文件操作。`tar` 代表磁带存档。

#### 语法

```shell
tar [-ABcdgGhiklmMoOpPrRsStuUvwWxzZ][-C <目的目录>][-f <备份文件>][--delete][--totals][文件或目录...]
```
<!--rehype:className=wrap-text -->

以前 unix 系统管理员使用 `tar` 执行磁带机备份。`tar` 命令用于获取文件和目录的集合，并生成高度压缩的归档文件，在Linux中通常称为 `tarball` 或 `tar`、`gzip` 和 `bzip`。

### 选项

:- | -
:- | -
`-c` | 建立新的备份文件
`-C` | 切换到指定的目录
`-d` | 对比备份文件内和文件系统上的文件的差异
`-x` | 解压缩归档文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名
`-t` | 查看归档文件内容
`-j` | 通过 bzip2 指令处理备份文件
`-z` | 通过 gzip 指令处理备份文件
`-r` | 向现有存档文件追加或更新文件或目录
`-W` | 验证归档文件
`--totals` | 备份文件建立后，列出文件大小
`--delete` | 从备份文件中删除指定的文件
`--wildcards` | 在 unix tar 命令中指定匹配模式

### 创建一个 tar 格式的压缩文件

在当前工作目录的 `/home/cyberpunk/testdir` 目录下创建一个名为 `archive.tar` 的 `tar` 归档文件:

```shell
tar -cvf archive.tar /home/cyberpunk/testdir/

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.sh
/home/cyberpunk/testdir/file3.tar
```

本例中使用的选项有:
:- | -
:- | -
`-c` | 建立新的备份文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名

### 创建压缩后的 `tar.gz` 存档文件

要创建一个压缩的 `gzip` 归档文件，我们需要使用选项 `z` 。

```shell
tar cvzf compressedArchive.tar.gz /home/cyberpunk/testdir

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.jpg
/home/cyberpunk/testdir/file3.png
```

本例中使用的选项有:
:- | -
:- | -
`-c` | 建立新的备份文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名
`-z` | 通过 `gzip` 指令处理备份文件

### 生成压缩率更高的 `tar.bz2` 文件

`tar` 的 `bz2` 压缩，可以创建比 `gzip` 文件小的归档。`Bz2` 模式执行归档压缩和解压所需的时间比 `gzip` 模式多。通常，这个时间差可以忽略不计，但如果文件非常大，或者是文件数量非常多，那么时间差就会非常大。

```shell
tar cvfj Archive.tar.bz2 /home/cyberpunk/testdir

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.txt
/home/cyberpunk/testdir/file3.txt
```

本例中使用的选项有:
:- | -
:- | -
`-c` | 建立新的备份文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名
`-j` | 通过 bzip2 指令处理备份文件

### 解压缩 tar 文件

要解压缩(提取)一个tar文件，将 `x` (提取)选项传递给该命令
使用不带 `-C` 选项的命令将在当前工作目录中提取存档。`-C` 选项告诉命令在哪里提取存档文件。

```shell
tar -xvf Archive.tar -C /home/cyberpunk/testdir/

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.txt
/home/cyberpunk/testdir/file3.txt
```

本例中使用的选项有:
:- | -
:- | -
`-x` | 解压缩归档文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名

### 解压缩 tar.gz 文件

小知识：使用 `tar` 命令创建的所有归档文件，都可以以相同的方式提取。

```shell
tar -xvf Archive.tar.gz

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.txt
/home/cyberpunk/testdir/file3.txt
```

本例中使用的选项有:
:- | -
:- | -
`-x` | 解压缩归档文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名

### 解压缩 tar.bz2 文件

小知识：使用 `tar` 命令创建的所有归档文件，都可以以相同的方式提取。

```shell
tar -xvf Archive.tar.bz2

/home/cyberpunk/testdir/
/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.txt
/home/cyberpunk/testdir/file3.txt
```

本例中使用的选项有:
:- | -
:- | -
`-x` | 解压缩归档文件
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名

### 列出归档内容
<!--rehype:wrap-class=col-span-1 row-span-2-->
使用 `t` 选项列出 `tar` 归档文件的内容:

```shell
# tar -tvf uploadprogress.tar

-rwxr--r-- root/root   1111 2014-10-19 12:33:42 file1.txt
-rwxr--r-- root/root   1111 2014-10-19 12:33:42 file2.txt
-rwxr--r-- root/root   1111 2014-10-19 12:33:42 file3.txt
-rwxr--r-- root/root   1111 2014-10-19 12:33:42 file4.txt
```

本例中使用的选项有:
:- | -
:- | -
`-t` | 查看归档文件内容
`-v` | 显示指令执行过程
`-f` | 指定归档文件的文件名

### 从 tar 归档文件中提取单个文件

```shell
tar --extract --file=archive.tar file1.txt

file1.txt
```

### 从 tar 归档文件中提取多个文件

```shell
tar -xvf Archive.tar "file 1" "file 2"
```

### 使用通配符提取文件组

```shell
# tar -xvf Archive.tar --wildcards *.txt'

/home/cyberpunk/testdir/file1.txt
/home/cyberpunk/testdir/file2.txt
/home/cyberpunk/testdir/file3.txt
```

### 添加文件或目录到 tar 存档中

要向现有的 `tar` 文件中添加文件或目录，可以使用 `r` 选项。例如，我们将 `xyz.txt` 文件和 `php` 目录添加到现有的 `tecmint-14-09-12.tar` 归档文件中。

```shell
# tar -rvf Archive.tar xyz.txt  #add file
or
# tar -rvf Archive.tar php      # add directory
```

另见
----

[Linux Tar Commands Cheatsheet](https://neverendingsecurity.wordpress.com/2015/04/13/linux-tar-commands-cheatsheet/)
