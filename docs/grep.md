Grep 备忘清单
===

本备忘单旨在快速提醒使用命令行程序 grep 所涉及的主要概念，并假设您已经了解其用法。

入门
------
<!--rehype:body-class=cols-5-->

### 使用
<!--rehype:wrap-class=col-span-2-->

搜索标准输出（即文本流）

```shell
$ grep [options] search_string
```

在文件中搜索确切的字符串：

```shell
$ grep [options] search_string path/to/file
```

打印 myfile.txt 中包含字符串“mellon”的行

```shell
$ grep 'mellon' myfile.txt
```

文件名中接受通配符。

### 选项示例
<!--rehype:wrap-class=col-span-3-->

选项 | 示例 | 说明
:-|:-|:-
| `-i`   | grep -i ^DA demo.txt                  | 忘记区分大小写
| `-w`   | grep -w "of" demo.txt                 | 仅搜索完整的单词
| `-A`   | grep -A 3 'Exception' error.log       | 匹配字符串后显示 3 行
| `-B`   | grep -B 4 'Exception' error.log       | 在匹配字符串前显示 4 行
| `-C`   | grep -C 5 'Exception' error.log       | 在匹配字符串周围显示 5 行
| `-r`   | grep -r 'github.io' /var/log/nginx/   | 递归搜索 _(在子目录内)_
| `-v`   | grep -v 'warning' /var/log/syslog     | 返回所有与模式不匹配的行
| `-e`   | grep -e '^al' filename                | 使用正则表达式 _(以'al'开头的行)_
| `-E`   | grep -E 'ja(s\|cks)on' filename       | 扩展正则表达式 _(包含 jason 或 jackson 的行)_
| `-c`   | grep -c 'error' /var/log/syslog       | 计算匹配数
| `-l`   | grep -l 'robot' /var/log/*            | 打印匹配文件的名称
| `-o`   | grep -o search_string filename        | 只显示字符串的匹配部分
| `-n`   | grep -n "go" demo.txt                 | 显示匹配的行号

Grep 正则表达式
-------

### 参考

- [Regex syntax](./regex.md) _(jaywcjlove.github.io)_
- [Regex examples](./regex.md#正则表达式示例) _(jaywcjlove.github.io)_

有关更复杂的要求，请参阅完整版的正则表达式备忘单。

### 通配符(Wildcards)

:- | :-
:- | :-
`.`   | 任何字符
`?`   | 可选且只能出现一次
`*`   | 可选的，可以多次出现
`+`   | 必需并且可以多次出现

### 量词(Quantifiers)

:- | :-
:- | :-
`{n}`    | 前一项恰好出现 n 次
`{n,}`   | 上一个项目出现 n 次或更多
`{,m}`   | 上一个项目最多出现 n 次
`{n,m}`  | 上一项出现在 n 到 m 次之间

### POSIX

:- | :-
:- | :-
`[:alpha:]`   | 任何大小写字母
`[:digit:]`   | 任何数字
`[:alnum:]`   | 任何大小写字母或数字
`[:space:]`   | 任何空格

### 字符串

:- | :-
:- | :-
`[A-Z­a-z]`    | 任何大小写字母
`[0-9]`       | 任何数字
`[0-9­A-Z­a-z]` | 任何大小写字母或数字

### 位置

:- | :-
:- | :-
`^` | 行的开头
`$` | 行结束
`^$` | 空行
`\<` | 词的开头
`\>` | 词尾

更多示例
----

### 搜索命令行历史记录

```bash
history | grep git
```

输入过 `git` 命令的记录

### 搜索多个文件并查找匹配文本在哪些文件中

```bash
grep -l "text" file1 file2 file3...
```

### 多级目录中对文本进行递归搜索

```bash
grep "text" . -r -n
```

`.` 表示当前目录。

### 搜索结果中包括或者排除指定文件
<!--rehype:wrap-class=row-span-2-->

```bash
# 目录中所有的 .php 和 .html 文件中
# 递归搜索字符 "main()"
grep "main()" . -r --include *.{php,html}

# 在搜索结果中排除所有 README 文件
grep "main()" . -r --exclude "README"

# 在搜索结果中排除 filelist 文件列表里的文件
grep "main()" . -r --exclude-from filelist
```

### 输出包含匹配字符串的行数 -n 选项
<!--rehype:wrap-class=row-span-2-->

```bash
grep "text" -n file_name
# 或
cat file_name | grep "text" -n

#多个文件
grep "text" -n file_1 file_2
```

### 忽略匹配样式中的字符大小写

```bash
echo "hello world" | grep -i "HELLO"
# hello
```

### 统计文件或文本中包含匹配字符串的行数 -c 选项

```
grep -c "text" file_name
```

另见
----

- [grep 中文文档](https://wangchujiang.com/linux-command/c/grep.html) _(jaywcjlove.github.io)_
