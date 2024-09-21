Awk 备忘清单
===

这是 [GNU awk](https://www.gnu.org/software/gawk/manual/gawk.html) 的单页快速参考备忘单，其中涵盖了常用的 `awk` 表达式和命令。

入门
------

### 试试

该程序可用于选择文件中的特定记录并对其执行操作

```shell
$ awk -F: '{print $1, $NF}' /etc/passwd
```

----

| - | -             | -                         |
|---|---------------|---------------------------|
|   | `-F:`         | 冒号作为分隔符   |
|   | `{...}`       | awk 程序       |
|   | `print`       | 打印当前记录   |
|   | `$1`          | 第一个字段     |
|   | `$NF`         | 最后一个字段   |
|   | `/etc/passwd` | 输入数据文件   |

### Awk 程序

```bash
BEGIN          {<初始化>} 
   <pattern 1> {<计划动作>} 
   <pattern 2> {<计划动作>} 
   ...
END            {< 最后的动作 >}
```

#### 示例

```bash
awk '
    BEGIN { print "\n>>>Start" }
    !/(login|shutdown)/ { print NR, $0 }
    END { print "<<<END\n" }
' /etc/passwd
```

### 变量
<!--rehype:wrap-class=row-span-2-->

```bash
          $1      $2/$(NF-1)    $3/$NF
           ▼          ▼           ▼ 
        ┌──────┬──────────────┬───────┐
$0/NR ▶ │  ID  │  WEBSITE     │  URI  │
        ├──────┼──────────────┼───────┤
$0/NR ▶ │  1   │  baidu.com   │  awk  │
        ├──────┼──────────────┼───────┤
$0/NR ▶ │  2   │  google.com  │  25   │
        └──────┴──────────────┴───────┘
```

----

```shell
# 第一个和最后一个字段
awk -F: '{print $1,$NF}' /etc/passwd
# 带行号
awk -F: '{print NR, $0}' /etc/passwd
# 倒数第二个字段
awk -F: '{print $(NF-1)}' /etc/passwd
# 自定义字符串
awk -F: '{print $1 "=" $6}' /etc/passwd
```

查看: [Awk 变量](#awk-变量)

### Awk 程序示例
<!--rehype:wrap-class=row-span-2 col-span-2-->

```shell
awk 'BEGIN {print "hello world"}'        # 打印 "hello world"
awk -F: '{print $1}' /etc/passwd         # -F: 指定字段分隔符
# /pattern/ 仅对匹配的模式执行操作
awk -F: '/root/ {print $1}' /etc/passwd                     
# BEGIN 块在开始时执行一次
awk -F: 'BEGIN { print "uid"} { print $1 }' /etc/passwd     
# END 块在最后执行一次
awk -F: '{print $1} END { print "-done-"}' /etc/passwd
```

### 条件

```bash
awk -F: '$3>30 {print $1}' /etc/passwd
```

查看: [Conditions 条件](#awk-条件)

### 生成 1000 个空格

```shell
awk 'BEGIN{
    while (a++ < 1000)
        s=s " ";
    print s
}'
```

查看: [Loops](#awk-循环)

### 数组 Arrays

```shell
awk 'BEGIN {
   fruits["mango"] = "yellow";
   fruits["orange"] = "orange"
   for(fruit in fruits) {
     print fruit " 的颜色是 " fruits[fruit]
   }
}'
```

查看: [Awk 数组](#awk-数组)

### 函数 Functions

```shell
# => 5
awk 'BEGIN{print length("hello")}'
# => HELLO
awk 'BEGIN{print toupper("hello")}'
# => hel
awk 'BEGIN{print substr("hello", 1, 3)}'
```

查看: [Functions](#awk-函数)

Awk 变量
---------

### 内置变量

:- | :-
:- | :-
`$0`           | 全线
`$1, $2...$NF` | 第一个，第二个……最后一个字段
`NR`           | 记录总数(`N`umber of `R`ecords)
`NF`           | N个字段(`N`number of `F`ields)
`OFS`          | `O`utput `F`ield `S`eparator<br> 输出字段分隔符 _(default " ")_
`FS`           | input `F`ield `S`eparator <br> 输入字段分隔符 _(default " ")_
`ORS`          | `O`utput `R`ecord `S`eparator <br> 输出记录分隔符 _(default "\n")_
`RS`           | input `R`ecord `S`eparator <br> 输入记录分隔符 _(default "\n")_
`FILENAME`     | 文件名

### 表达式
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`$1 == "root"`       | 第一个字段等于根
`{print $(NF-1)}`    | 倒数第二个字段
`NR!=1{print $0}`    | 从第 2 条记录开始
`NR > 3`             | 从第 4 条记录开始
`NR == 1`            | 第一次记录
`END{print NR}`      | 总记录
`BEGIN{print OFMT}`  | 输出格式
`{print NR, $0}`     | 行号
`{print NR "  " $0}` | 行号(选项卡)
`{$1 = NR; print}`   | 用行号替换第一个字段
`$NF > 4`            | 最后一个字段 > 4
`NR % 2 == 0`        | 甚至记录
`NR==10, NR==20`     | 记录 10 到 20
`BEGIN{print ARGC}`  | 总 `arguments`
`ORS=NR%5?",":"\n"`  | 连接记录

### 示例
<!--rehype:wrap-class=row-span-2-->

打印总和和平均值

```shell
awk -F: '{sum += $3}
     END { print sum, sum/NR }
' /etc/passwd
```

打印参数

```shell
awk 'BEGIN {
    for (i = 1; i < ARGC; i++)
        print ARGV[i] }' a b c
```

输出字段分隔符为逗号

```shell
awk 'BEGIN { FS=":";OFS=","}
    {print $1,$2,$3,$4}' /etc/passwd
```

匹配位置

```shell
awk 'BEGIN {
    if (match("One Two Three", "Tw"))
        print RSTART }'
```

匹配时长

```shell
awk 'BEGIN {
    if (match("One Two Three", "re"))
        print RLENGTH }'
```

### 仅限 GNU awk

:- | :-
:- | :-
`ENVIRON`     | 环境变量
`IGNORECASE`  | 忽略大小写
`CONVFMT`     | 转换格式
`ERRNO`       | 系统错误
`FIELDWIDTHS` | 固定宽度字段

### 环境变量

:- | :-
:- | :-
`ARGC`    | 数字或参数
`ARGV`    | 参数数组
`FNR`     | 文件记录数(`F`ile `N`umber of `R`ecords)
`OFMT`    | 数字格式 _(default "%.6g")_
`RSTART`  | 字符串中的位置
`RLENGTH` | 比赛时长
`SUBSEP`  | 多维数组分隔符 _(default "\034")_
`ARGIND`  | 参数索引

### 定义变量

```shell
awk -v var1="Hello" -v var2="Wold" '
    END {print var1, var2}
' </dev/null
```

#### 使用 shell 变量

```shell
awk -v varName="$PWD" '
    END {print varName}' </dev/null
```

Awk 运算符
---------

### 运算符

:- | :-
:- | :-
`{print $1}`     | 第一个字段
`$2 == "foo"`    | 等于
`$2 != "foo"`    | 不等于
`"foo" in array` | 在数组中

#### 正则表达式

:- | :-
:- | :-
| `/regex/`       | 行匹配|
| `!/regex/`      | 行不匹配|
| `$1 ~ /regex/`  | 字段匹配|
| `$1 !~ /regex/` | 字段不匹配|

#### 更多条件

:- | :-
:- | :-
`($2 <= 4 \|\| $3 < 20)` | 或者
`($1 == 4 && $3 < 20)`   | 和

### 运算符

#### 算术运算

- `+`
- `-`  
- `*`  
- `/`  
- `%`  
- `++`
- `--`
<!--rehype:className=cols-3 style-none-->

#### 速记作业

- `+=`
- `-=`
- `*=`
- `/=`
- `%=`
<!--rehype:className=cols-3 style-none-->

#### 比较运算符

- `==`
- `!=`
- `<`
- `>`
- `<=`
- `>=`
<!--rehype:className=cols-3 style-none-->

### 示例

```shell
awk 'BEGIN {
    if ("foo" ~ "^fo+$")
        print "Fooey!";
}'
```

#### 不匹配

```shell
awk 'BEGIN {
    if ("boo" !~ "^fo+$")
        print "Boo!";
}'
```

#### 如果在数组中

```shell
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("foo" in assoc)
        print "Fooey!";
}'
```

Awk 函数
----------

### 常用功能
<!--rehype:wrap-class=col-span-2-->

函数 | 描述
:- | :-
`index(s,t)`          | 字符串 `s` 中出现字符串 `t` 的位置，如果未找到则为 `0`
`length(s)`           | 字符串 `s` 的长度(如果没有 `arg`，则为 `$0`)
`rand`                | `0` 到 `1` 之间的随机数
`substr(s,index,len)` | 返回从索引开始的 `s` 的 `len-char` 子字符串(从 `1` 开始计数)
`srand`               | 为 `rand` 设置种子并返回之前的种子
`int(x)`              | 将 `x` 截断为整数值
`split(s,a,fs)`       | 将字符串 `s` 拆分为数组 `a` 由 `fs` 拆分，返回 `a` 的长度
`match(s,r)`          | 字符串 `s` 中出现正则表达式 `r` 的位置，如果未找到，则为 `0`
`sub(r,t,s)`          | 将 `t` 替换为字符串 `s` 中第一次出现的正则表达式 `r`(如果未给出 `s`，则替换为 `$0`)
`gsub(r,t,s)`         | 用 `t` 替换字符串 `s` 中所有出现的正则表达式 `r`
`system(cmd)`         | 执行cmd并返回退出状态
`tolower(s)`          | 字符串 `s` 转小写
`toupper(s)`          | 字符串 `s` 转大写
`getline`             | 将 `$0` 设置为当前输入文件中的下一个输入记录

### 用户定义函数

```shell
awk '
    # 返回最小数量
    function find_min(num1, num2){
       if (num1 < num2)
       return num1
       return num2
    }
    # 返回最大数量
    function find_max(num1, num2){
       if (num1 > num2)
       return num1
       return num2
    }
    # 主功能
    function main(num1, num2){
       result = find_min(num1, num2)
       print "Minimum =", result
      
       result = find_max(num1, num2)
       print "Maximum =", result
    }
    # 脚本执行从这里开始
    BEGIN {
       main(10, 60)
    }
'
```

Awk 数组
---------

### 带索引的数组

```shell
awk 'BEGIN {
    arr[0] = "foo";
    arr[1] = "bar";
    print(arr[0]); # => foo
    delete arr[0];
    print(arr[0]); # => ""
}'
```

### 带键的数组

```shell
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    print("baz" in assoc); # => 0
    print("foo" in assoc); # => 1
}'
```

### 带拆分的数组

```shell
awk 'BEGIN {
    split("foo:bar:baz", arr, ":");
    for (key in arr)
        print arr[key];
}'
```

### 带有排序的数组

```shell
awk 'BEGIN {
    arr[0] = 3
    arr[1] = 2
    arr[2] = 4
    n = asort(arr)
    for (i = 1; i <= n ; i++)
        print(arr[i])
}'
```

### 多维

```shell
awk 'BEGIN {
    multidim[0,0] = "foo";
    multidim[0,1] = "bar";
    multidim[1,0] = "baz";
    multidim[1,1] = "boo";
}'
```

### 多维迭代

```shell
awk 'BEGIN {
    array[1,2]=3;
    array[2,3]=5;
    for (comb in array) {
        split(comb,sep,SUBSEP);
        print sep[1], sep[2], 
        array[sep[1],sep[2]]
    }
}'
```

Awk 条件
----------

### if-else 语句

```shell
awk -v count=2 'BEGIN {
    if (count == 1)
        print "Yes";
    else
        print "Huh?";
}'
```

#### 三元运算符

```shell
awk -v count=2 'BEGIN {
    print (count==1) ? "Yes" : "Huh?";
}'
```

### 存在

```shell
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("foo" in assoc)
        print "Fooey!";
}'
```

#### 不存在

```shell
awk 'BEGIN {
    assoc["foo"] = "bar";
    assoc["bar"] = "baz";
    if ("Huh" in assoc == 0 )
        print "Huh!";
}'
```

### switch

```shell
awk -F: '{
    switch (NR * 2 + 1) {
        case 3:
        case "11":
            print NR - 1
            break
        case /2[[:digit:]]+/:
            print NR
        default:
            print NR + 1
        case -1:
            print NR * -1
    }
}' /etc/passwd
```

Awk 循环
----------

### for...i

```shell
awk 'BEGIN {
    for (i = 0; i < 10; i++)
        print "i=" i;
}'
```

#### 1 到 100 之间的 2 的幂

```shell
awk 'BEGIN {
    for (i = 1; i <= 100; i *= 2)
        print i
}'
```

### for...in

```shell
awk 'BEGIN {
    assoc["key1"] = "val1"
    assoc["key2"] = "val2"
    for (key in assoc)
        print assoc[key];
}'
```

#### Arguments

```shell
awk 'BEGIN {
    for (argnum in ARGV)
        print ARGV[argnum];
}' a b c
```

### 示例
<!--rehype:wrap-class=row-span-3-->

#### 反向记录

```shell
awk -F: '{ x[NR] = $0 }
    END {
        for (i = NR; i > 0; i--)
        print x[i]
    }
' /etc/passwd
```

#### 反向字段

```shell
awk -F: '{
    for (i = NF; i > 0; i--)
        printf("%s ",$i);
    print ""
}' /etc/passwd
```

#### 按记录求和

```shell
awk -F: '{
    s=0;
    for (i = 1; i <= NF; i++)
        s += $i;
    print s
}' /etc/passwd
```

#### 总结整个文件

```shell
awk -F: '
    {for (i = 1; i <= NF; i++)
        s += $i;
    };
    END{print s}
' /etc/passwd
```

### while
<!--rehype:wrap-class=row-span-2-->

```shell
awk 'BEGIN {
    while (a < 10) {
        print "- " " concatenation: " a
        a++;
    }
}'
```

#### do...while

```shell
awk '{
    i = 1
    do {
        print $0
        i++
    } while (i <= 5)
}' /etc/passwd
```

### Break

```shell
awk 'BEGIN {
    break_num = 5
    for (i = 0; i < 10; i++) {
        print i
        if (i == break_num)
            break
    }
}'
```

### Continue

```shell
awk 'BEGIN {
    for (x = 0; x <= 10; x++) {
        if (x == 5 || x == 6)
            continue
        printf "%d ", x
    }
    print ""
}'
```

Awk 格式化打印
---------

### 用法

#### 右对齐

```shell
awk 'BEGIN{printf "|%10s|\n", "hello"}'
# |     hello|
```

#### 左对齐

```shell
awk 'BEGIN{printf "|%-10s|\n", "hello"}'
# |hello     |
```

### 通用说明符

特征符 | 描述
:- | :-
`c`           | ASCII 字符
`d`           | 十进制整数
`e`, `E`, `f` | 浮点格式
`o`           | 无符号八进制值
`s`           | 细绳
`%`           | 文字百分比

### Space 空间

```shell
awk -F: '{
    printf "%-10s %s\n", $1, $(NF-1)
}' /etc/passwd | head -n 3
```

输出

```shell
root       /root
bin        /bin
daemon     /sbin
```

### Header 标题头

```shell
awk -F: 'BEGIN {
    printf "%-10s %s\n", "User", "Home"
    printf "%-10s %s\n", "----","----"}
    { printf "%-10s %s\n", $1, $(NF-1) }
' /etc/passwd | head -n 5
```

输出

```shell
User       Home
----       ----
root       /root
bin        /bin
daemon     /sbin
```

各种各样的
-------------

### 正则表达式元字符

- `\`
- `^`
- `$`
- `.`
- `[`
- `]`
- `|`
- `(`
- `)`
- `*`
- `+`
- `?`
<!--rehype:className=cols-3 style-none-->

### 转义序列

:- | :-
:- | :-
`\b` | 退格
`\f` | 换页
`\n` | 换行(换行)
`\r` | 回车
`\t` | 水平选项卡
`\v` | 垂直选项卡

### 运行脚本

```shell
$ cat demo.awk
#!/usr/bin/awk -f
BEGIN { x = 23 }
      { x += 2 }
END   { print x }
$ awk -f demo.awk /etc/passwd
69
```

另见
--------

- [GNU awk 用户指南](https://www-zeuthen.desy.de/dv/documentation/unixguide/infohtml/gawk/gawk.html) _(www-zeuthen.desy.de)_
- [AWK cheatsheet](https://gist.github.com/Rafe/3102414) _(gist.github.com)_
