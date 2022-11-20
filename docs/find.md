Find 备忘清单
===

这是 Linux find 命令备忘清单的快速参考列表，包含常用选项和示例。

入门
----

### 用法

```shell
$ find [path...] [options] [expression]
```

通配符

```shell
$ find . -name "*.txt"
$ find . -name "2020*.csv"
$ find . -name "json_*"
```

----

- [Find 备忘清单](https://gist.github.com/gr1ev0us/3a9b9d9dbdd38f6379288eb2686fc538) _(gist.github.com)_

### 参数示例
<!--rehype:wrap-class=col-span-2-->

| 参数 | 示例 | 描述 |
|-------|-------|-------|
| `-type`     | find . -type d                            | 仅查找目录 |
| `-name`     | find . -type f -name "*.txt"              | 按名称查找文件 |
| `-iname`    | find . -type f -iname "hello"             | 按名称查找文件（不区分大小写） |
| `-size`     | find . -size +1G                          | 查找大于 1G 的文件 |
| `-user`     | find . -type d -user jack                 | 查找杰克的文件 |
| `-regex`    | find /var -regex '.\*/tmp/.\*[0-9]*.file' | 将正则表达式与查找一起使用 |
| `-maxdepth` | find . -maxdepth 1 -name "a.txt"          | 在当前目录和子目录中 |
| `-mindepth` | find / -mindepth 3 -maxdepth 5 -name pass | 在子目录级别 2 和 4 之间 |
<!--rehype:className=show-header-->

### 类型

|           |                      |
|-----------|----------------------|
| `-type d` | 目录 |
| `-type f` | 文件 |
| `-type l` | 符号链接 |
| `-type b` | 缓冲块 |
| `-type c` | 无缓冲字符 |
| `-type p` | 命名管道 |
| `-type s` | 插座 |

### 大小

|           |                           |
|-----------|---------------------------|
| `-size b` | 512 字节块（默认）   |
| `-size c` | 字节   |
| `-size k` | 千字节   |
| `-size M` | 兆字节   |
| `-size G` | 千兆字节   |
| `-size T` | 太字节_（仅限 BSD）_   |
| `-size P` | PB _（仅 BSD）_   |

### 大小 +/-

查找所有大于 10MB 的文件

```shell
$ find / -size +10M
```

查找所有小于 10MB 的文件

```shell
$ find / -size -10M
````

查找所有正好为 10M 的文件

```shell
$ find / -size 10M
```

查找 100MB 和 1GB 之间的大小

```shell
$ find / -size +100M -size -1G
```

像往常一样，`+` 和 `-` 前缀表示大于和小于。

### 名称

在当前目录中使用名称查找文件

```shell
$ find . -name tecmint.txt
```

查找主目录下的文件

```shell
$ find /home -name tecmint.txt
```

使用名称查找文件并忽略大小写

```shell
$ find /home -iname tecmint.txt
```

使用名称查找目录

```shell
$ find / -type d -name tecmint
```

使用名称查找php文件

```shell
$ find . -type f -name tecmint.php
```

查找目录下的所有php文件

```shell
$ find . -type f -name "*.php"
```

### 权限

查找权限为 777 的文件。

```shell
$ find . -type f -perm 0777 -print
```

查找未经许可的文件 777.

```shell
$ find / -type f ! -perm 777
```

查找 SUID 集文件。

```shell
$ find / -perm /u=s
```

查找 SGID 集文件。

```shell
$ find / -perm /g=s
```

查找只读文件。

```shell
$ find / -perm /u=r
```

查找可执行文件。

```shell
$ find / -perm /a=x
```

### 所有者和组

根据用户查找单个文件

```shell
$ find / -user root -name tecmint.txt
```

根据用户查找所有文件

```shell
$ find /home -user tecmint
```

根据组查找所有文件

```shell
$ find /home -group developer
```

查找用户的特定文件

```shell
$ find /home -user tecmint -iname "*.txt"
```

### 多个文件名

```shell
$ find . -type f \( -name "*.sh" -or -name "*.txt" \)
```
<!--rehype:className=wrap-text -->

查找带有 `.sh` 或 `.txt` 扩展名的文件

### 多个目录

```shell
$ find /opt /usr /var -name foo.scala -type f
```
<!--rehype:className=wrap-text -->

查找具有多个目录的文件

### 空的

```shell
$ find . -type d -empty
```

删除目录中的所有空文件

```shell
$ find . -type f -empty -delete
```

查找日期和时间
-------------

### 方法
<!--rehype:wrap-class=col-span-2-->

| Option  | Description                                                     |
|---------|-----------------------------------------------------------------|
| `atime` | 访问时间（上次文件<yel>打开</yel>） |
| `mtime` | 修改时间（上次文件<yel>内容被修改</yel>） |
| `ctime` | 更改时间（上次文件 <yel>inode 已更改</yel>） |

#### 示例

| Option          | Description                                                |
|-----------------|------------------------------------------------------------|
| `-mtime +0`     | 24 小时前修改   |
| `-mtime 0`      | 从现在到 1 天前修改   |
| `-mtime -1`     | 不到 1 天前修改（与 `-mtime 0` 相同）   |
| `-mtime 1`      | 24 至 48 小时前修改   |
| `-mtime +1`     | 超过 48 小时前修改   |
| `-mtime +1w`    | 上次修改时间超过 1 周前   |
| `-atime 0`      | 从现在到 24 小时前最后一次访问   |
| `-atime +0`     | 访问时间超过 24 小时   |
| `-atime 1`      | 在 24 至 48 小时前访问   |
| `-atime +1`     | 访问时间超过 48 小时   |
| `-atime -1`     | 不到 24 小时前访问过（与 `-atime 0` 相同）   |
| `-ctime -6h30m` | 文件状态在过去 6 小时 30 分钟内发生变化   |

### 更多示例

查找最近 50 天修改的文件

```shell
$ find / -mtime 50
```

查找最近 50 天访问的文件

```shell
$ find / -atime 50
```

查找最近 50-100 天修改的文件

```shell
$ find / -mtime +50 –mtime -100
```

查找最近 1 小时内更改的文件

```shell
$ find / -cmin -60
```

查找最近 1 小时内修改过的文件

```shell
$ find / -mmin -60
```

查找最近 1 小时内访问过的文件

```shell
$ find / -amin -60
```

查找并
--------
<!--rehype:body-class=cols-2-->

### 查找和删除
<!--rehype:wrap-class=row-span-3-->

查找并删除多个文件

```shell
$ find . -type f -name "*.mp3" -exec rm -f {} \;
```

查找和删除单个文件

```shell
$ find . -type f -name "tecmint.txt" -exec rm -f {} \;
```

查找和删除 100mb 文件

```shell
$ find / -type f -size +100m -exec rm -f {} \;
```

查找特定文件并删除

```shell
$ find / -type f -name *.mp3 -size +10m -exec rm {} \;
```

### 查找和替换

```shell
$ find ./ -type f -exec sed -i 's/find/replace/g' {} \;
$ find ./ -type f -readable -writable -exec sed -i "s/old/new/g" {} \;
```

参见：[sed](./sed.md) 命令

### 查找和重命名

```shell
$ find . -type f -name 'file*' -exec mv {} {}_renamed \;
$ find . -type f -name 'file*' -exec sh -c 'x="{}"; mv "$x" "${x}.bak"' \;
```

### 查找和移动

```shell
$ find . -name '*.mp3' -exec mv {} /tmp/music \;
```

查找并将其移动到特定目录

### 查找和复制

```shell
$ find . -name '*2020*.xml' -exec cp -r "{}" /tmp/backup \;
```

查找并将其复制到特定目录

### 查找并连接

```shell
$ find download -type f -iname '*.csv' | xargs cat > merged.csv
$ find download -type f -name '*.gz' -exec cat {} \; > output
```

### 查找和排序

```shell
$ find . -printf "%T+\t%p\n" | sort
$ find . -printf "%T+\t%p\n" | sort -r
```

### 查找和 chmod
<!--rehype:wrap-class=row-span-2-->

查找文件并将权限设置为 644。

```shell
$ find / -type f -perm 0777 -print -exec chmod 644 {} \;
```

查找目录并将权限设置为 755。

```shell
$ find / -type d -perm 777 -print -exec chmod 755 {} \;
```

### 查找并 tar

```shell
$ find . -type f -name "*.java" | xargs tar cvf myfile.tar
$ find . -type f -name "*.java" | xargs tar rvf myfile.tar
```

### 查找并排除目录

查找当前目录及子目录中的所有`js`文件，但是排除掉`node_modules`目录中的

```shell
$ find . -type f -name "*.js" -not -path "./node_modules/*"
```
