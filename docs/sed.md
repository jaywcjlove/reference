Sed 备忘清单
====

Sed 是一个流编辑器，此 Sed 备忘清单包含 Sed 命令和一些常见的 Sed 技巧。

入门
----

### Sed 用法

语法

```shell
$ sed [options] command [input-file]
```

带管道

```shell
$ cat report.txt | sed 's/Nick/John/g'
```

```shell
$ echo '123abc' | sed 's/[0-9]+//g'
```

### 选项示例
<!--rehype:wrap-class=col-span-2-->

| 参数 | 示例 | 描述 |
|-------|-------|-------|
| `-i`   | sed -ibak 's/On/Off/' php.ini              | 直接备份和修改输入文件 |
| `-E`   | sed -E 's/[0-9]+//g' input-file            | 使用扩展正则表达式 |
| `-n`   | sed -n '3 p' config.conf                   | 禁止默认图案空间打印 |
| `-f`   | sed -f script.sed config.conf              | 执行 sed 脚本文件 |
| `-e`   | sed -e 'command1' -e 'command2' input-file | 执行多个 sed 命令 |
<!--rehype:className=show-header-->

### 多个命令

```shell
$ echo "hello world" | sed -e 's/h/H/g' -e 's/w/W/g'
Hello World
```

使用 `-e` 执行多个 sed 命令

### Sed 脚本

```shell
$ echo 's/h/H/g' >> hello.sed
$ echo 's/w/W/g' >> hello.sed
$ echo "hello world" | sed -f hello.sed
Hello World
```

使用 `-f` 执行 sed 脚本文件

### Examples

```shell
$ sed 's/old/new/g' file.txt
$ sed 's/old/new/g' file.txt > new.txt
$ sed 's/old/new/g' -i file.txt
$ sed 's/old/new/g' -i.backup file.txt
```

Sed 命令
-----------

### 命令
<!--rehype:wrap-class=col-span-2-->

命令 | 示例 | 描述
:- | :-  |:-
`p`     | sed -n '1,4 p' input.txt               | 打印第 1-4 行
`p`     | sed -n -e '1,4 p' -e '6,7 p' input.txt | 打印第 1-4 行和第 6-7 行
`d`     | sed '1,4 d' input.txt                  | 打印除 1-4 之外的行
`w`     | sed -n '1,4 w output.txt' input.txt    | 将模式空间写入文件
`a`     | sed '2 a new-line' input.txt           | 在后面追加一行
`i`     | sed '2 i new-line' input.txt           | 在前面插入行
<!--rehype:className=show-header-->

### 空间命令

命令 | 描述
:- | :-
`n`     | 打印模式空间，空模式空间，读取下一行
`x`     | 用保持空间交换模式空间
`h`     | 复制模式空间以保持空间
`H`     | 追加模式空间以保持空间
`g`     | 将保持空间复制到模式空间
`G`     | 将保持空间附加到模式空间

### Flags

```shell
$ sed 's/old/new/[flags]' [input-file]
```

---

| Flag     | Description                                |
|----------|--------------------------------------------|
| `g`      | 全球替代  |
| `1,2...` | 替换第 n 次出现  |
| `p`      | 仅打印替换的行  |
| `w`      | 仅将替换的行写入文件  |
| `I`      | 搜索时忽略大小写  |
| `e`      | 在命令行中替换并执行  |

### 循环命令

| Command   | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `b label` | 分支到标签（用于循环）   |
| `t label` | 仅在成功替换时分支到标签（用于循环）   |
| `:label`  | b 和 t 命令的标签（用于循环）   |
| `N`       | 将下一行追加到模式空间   |
| `P`       | 多行打印第一行   |
| `D`       | 删除多行中的第一行   |

### 杂项标志

| Flag           | Description   |
|----------------|---------------|
| `/ \| ^ @ ! #`  | 替换分隔符可以是任何字符 |
| `&`            | 获取匹配的模式 |
| `( ) \1 \2 \3` | 使用 `(` 和 `)` 进行分组。<br>使用 `\1`、`\2` 替换来引用组 |

Sed 示例
----------

### 替换文本
<!--rehype:wrap-class=row-span-2-->

替换所有出现的字符串

```shell
$ sed 's/old/new/g' file.txt
```

仅替换第 n 次出现的字符串

```shell
$ sed 's/old/new/2' file.txt
```

仅在第 5 行替换替换字符串

```shell
$ sed '5 s/old/new/' file.txt
```

将“world”替换为“universe”，但前提是该行以“hello”开头

```shell
$ sed '/hello/s/world/universe/' file.txt
```

从每行的末尾删除“\”

```shell
$ sed 's/\\$//' file.txt
```

删除每行开头的所有空格

```shell
$ sed 's/^\s*//' file.txt
```

删除评论。 即使是那些在行尾的

```shell
$ sed 's/#.*$//' file.txt
```

### 搜索文本

搜索字符串并仅打印匹配的行

```shell
$ sed -n '/hello/p' file.txt
```

不区分大小写的搜索

```shell
$ sed -n '/hello/Ip' file.txt
```

搜索字符串，但仅输出不匹配的行

```shell
$ sed -n '/hello/!p' file.txt
```

### 追加行

在第 2 行之后追加一行

```shell
$ sed '2a Text after line 2' file.txt
```

在文件末尾追加一行

```shell
$ sed '$a THE END!' file.txt
```

从第 3 行开始，每 3 行后追加一行

```shell
$ sed '3~3a Some text' file.txt
```

### 编号
<!--rehype:wrap-class=col-span-2-->

文件的数字行（简单的左对齐）

```shell
$ sed = file.txt | sed 'N;s/\n/\t/'
```

文件的数字行（数字在左，右对齐）

```shell
$ sed = file.txt | sed 'N; s/^/   /; s/ *\(.\{6,\}\)\n/\1  /'
```

文件的数字行，但如果行不为空，则仅打印数字

```shell
$ sed '/./=' file.txt | sed '/./N; s/\n/ /'
```

计算行数（模拟“wc -l”）

```shell
$ sed -n '$='
```

### 前置行

在第 5 行之前插入文本

```shell
$ sed '5i line number five' file.txt
```

在包含“hello”的每一行之前插入“示例：”

```shell
$ sed '/hello/i Example: ' file.txt
```

### 删除行

删除文件中的第 5-7 行

```shell
$ sed '5,7d' file.txt
```

删除从第 3 行开始的每 2 行

```shell
$ sed '3~2d' file.txt
```

删除文件的最后一行

```shell
$ sed '$d' file.txt
```

删除以“Hello”开头的行

```shell
$ sed '/^Hello/d' file.txt
```

删除所有空行

```shell
$ sed '/^$/d' file.txt
```

删除以“#”开头的行

```shell
$ sed '/^#/d' file.txt
```

### 文件间距

双倍行距

```shell
$ sed G
```

删除所有空行和双空格

```shell
$ sed '/^$/d;G'
```

三倍空间文件

```shell
$ sed 'G;G'
```

撤消双倍行距

```shell
$ sed 'n;d'
```

在匹配“正则表达式”的行上方插入一个空行

```shell
$ sed '/regex/{x;p;x;}'
```

在匹配“正则表达式”的行下方插入一个空行

```shell
$ sed '/regex/G'
```

在匹配“正则表达式”的行周围插入一个空行

```shell
$ sed '/regex/{x;p;x;G;}'
```

另见
----------

- [sed 备忘单](https://gist.github.com/ssstonebraker/6140154) _(gist.github.com)_
