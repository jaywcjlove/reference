Bash 备忘清单
===

这是开始使用 linux bash shell 脚本的快速参考备忘单。

入门
---------------

### hello.sh

```bash
#!/bin/bash
VAR="world"
echo "Hello $VAR!" # => Hello world!
```

执行脚本

```shell
$ bash hello.sh
```

### 变量

```bash
NAME="John"
echo ${NAME}    # => John (变量)
echo $NAME      # => John (变量)
echo "$NAME"    # => John (变量)
echo '$NAME'    # => $NAME (确切的字符串)
echo "${NAME}!" # => John! (变量)
NAME = "John"   # => Error (关于空间)
```

### 注释

```shell
# 这是一个内联 Bash 注释。

: '
这是一个
非常整洁的评论
在 bash
'
```

多行注释使用 `:'` 打开和 `'` 关闭

### 参数
<!--rehype:wrap-class=row-span-2-->

表示 | 描述
:-|-
`$1` … `$9` | 参数 1 ... 9
`$0`        | 脚本本身的名称
`$1`        | 第一个论点
`${10}`     | 位置参数 10
`$#`        | 参数数量
`$$`        | shell 的进程 id
`$*`        | 所有论据
`$@`        | 所有参数，从第一个开始
`$-`        | 当前选项
`$_`        | 上一个命令的最后一个参数

见：[特殊参数](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables)


### 函数

```bash
get_name() {
    echo "John"
}
echo "You are $(get_name)"
```

见：[函数](#bash-函数)

### 条件句

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
fi
```

见：[条件句](#bash-条件句)

### 大括号扩展

```shell
echo {A,B}.js
```

---

表示 | 描述
:-|-
`{A,B}`    | 与 `A B` 相同
`{A,B}.js` | 与 `A.js B.js` 相同
`{1..5}`   | 与 `1 2 3 4 5` 相同

见：[大括号扩展](http://wiki.bash-hackers.org/syntax/expansion/brace)

### Shell 执行

```bash
# => I'm in /当前/的/路径
echo "I'm in $(PWD)"
# Same as:
echo "I'm in `pwd`"
```

见：[命令替换](http://wiki.bash-hackers.org/syntax/expansion/cmdsubst)

Bash 参数扩展
-----

### 语法
<!--rehype:wrap-class=row-span-2-->

代码 | 描述
:-|-
`${FOO%suffix}`   | 删除后缀
`${FOO#prefix}`   | 删除前缀
`${FOO%%suffix}`  | 去掉长后缀
`${FOO##prefix}`  | 删除长前缀
`${FOO/from/to}`  | 替换第一个匹配项
`${FOO//from/to}` | 全部替换
`${FOO/%from/to}` | 替换后缀
`${FOO/#from/to}` | 替换前缀

#### 子字符串

表示 | 描述
:-|-
`${FOO:0:3}`    | 子串 _(位置，长度)_
`${FOO:(-3):3}` | 从右边开始的子串

#### Length

表示 | 描述
:-|-
`${#FOO}`  | `$FOO` 的长度

#### 默认值

表示 | 描述
:-|-
`${FOO:-val}`     | `$FOO`，如果未设置，则为 `val`
`${FOO:=val}`     | 如果未设置，则将 `$FOO` 设置为 `val`
`${FOO:+val}`     | `val` 如果设置了`$FOO`
`${FOO:?message}` | 如果 `$FOO` 未设置，则显示消息并退出

### 替代 Substitution

```bash
echo ${food:-Cake}  #=> $food or "Cake"
```

```bash
STR="/path/to/foo.cpp"
echo ${STR%.cpp}    # /path/to/foo
echo ${STR%.cpp}.o  # /path/to/foo.o
echo ${STR%/*}      # /path/to
echo ${STR##*.}     # cpp (extension)
echo ${STR##*/}     # foo.cpp (basepath)
echo ${STR#*/}      # path/to/foo.cpp
echo ${STR##*/}     # foo.cpp
echo ${STR/foo/bar} # /path/to/bar.cpp
```

### 切片 Slicing

```bash
name="John"
echo ${name}           # => John
echo ${name:0:2}       # => Jo
echo ${name::2}        # => Jo
echo ${name::-1}       # => Joh
echo ${name:(-1)}      # => n
echo ${name:(-2)}      # => hn
echo ${name:(-2):2}    # => hn

length=2
echo ${name:0:length}  # => Jo
```

见：[参数扩展](http://wiki.bash-hackers.org/syntax/pe)

### 基本路径和目录路径

```bash
SRC="/path/to/foo.cpp"
```

```bash
BASEPATH=${SRC##*/}   
echo $BASEPATH  # => "foo.cpp"

DIRPATH=${SRC%$BASEPATH}
echo $DIRPATH   # => "/path/to/"
```

### Transform 

```bash
STR="HELLO WORLD!"
echo ${STR,}      # => hELLO WORLD!
echo ${STR,,}     # => hello world!

STR="hello world!"
echo ${STR^}      # => Hello world!
echo ${STR^^}     # => HELLO WORLD!

ARR=(hello World)
echo "${ARR[@],}" # => hello world
echo "${ARR[@]^}" # => Hello World
```

Bash 数组 
------

### 定义数组

```bash
Fruits=('Apple' 'Banana' 'Orange')

Fruits[0]="Apple"
Fruits[1]="Banana"
Fruits[2]="Orange"

ARRAY1=(foo{1..2}) # => foo1 foo2
ARRAY2=({A..D})    # => A B C D

# 合并 => foo1 foo2 A B C D
ARRAY3=(${ARRAY1[@]} ${ARRAY2[@]})

# 声明构造
declare -a Numbers=(1 2 3)
Numbers+=(4 5) # 附加 => 1 2 3 4 5
```

### 索引

:- | -
:- | -
`${Fruits[0]}`     | 第一个元素 
`${Fruits[-1]}`    | 最后一个元素 
`${Fruits[*]}`     | 所有元素 
`${Fruits[@]}`     | 所有元素 
`${#Fruits[@]}`    | 总数 
`${#Fruits}`       | 第一节长度 
`${#Fruits[3]}`    | 第n个长度 
`${Fruits[@]:3:2}` | 范围 
`${!Fruits[@]}`    | 所有 Key

### 迭代 Iteration

```bash
Fruits=('Apple' 'Banana' 'Orange')
for e in "${Fruits[@]}"; do
    echo $e
done
```
#### With index
```bash
for i in "${!Fruits[@]}"; do
  printf "%s\t%s\n" "$i" "${Fruits[$i]}"
done
```

### 操作
<!--rehype:wrap-class=col-span-2-->

```bash
Fruits=("${Fruits[@]}" "Watermelon")         # 推
Fruits+=('Watermelon')                       # 也推
Fruits=( ${Fruits[@]/Ap*/} )                 # 通过正则表达式匹配删除
unset Fruits[2]                              # 删除一项
Fruits=("${Fruits[@]}")                      # 复制
Fruits=("${Fruits[@]}" "${Veggies[@]}")      # 连接
lines=(`cat "logfile"`)                      # 从文件中读取
```

### 数组作为参数

```bash
function extract()
{
  local -n myarray=$1
  local idx=$2
  echo "${myarray[$idx]}"
}
Fruits=('Apple' 'Banana' 'Orange')
extract Fruits 2     # => Orangle
```

Bash 字典
------------

### 定义

```bash
declare -A sounds
```

```bash
sounds[dog]="bark"
sounds[cow]="moo"
sounds[bird]="tweet"
sounds[wolf]="howl"
```

### 使用字典

```bash
echo ${sounds[dog]} # Dog's sound
echo ${sounds[@]}   # All values
echo ${!sounds[@]}  # All keys
echo ${#sounds[@]}  # Number of elements
unset sounds[dog]   # Delete dog
```

### 迭代

```bash
for val in "${sounds[@]}"; do
    echo $val
done
```

---

```bash
for key in "${!sounds[@]}"; do
    echo $key
done
```

Bash 条件句
------------

### 整数条件

条件 | 描述
:- | -
`[[ NUM -eq NUM ]]` | 等于 <yel>Eq</yel>ual                            |
`[[ NUM -ne NUM ]]` | 不等于 <yel>N</yel>ot <yel>e</yel>qual             |
`[[ NUM -lt NUM ]]` | 少于 <yel>L</yel>ess <yel>t</yel>han             |
`[[ NUM -le NUM ]]` | 小于或等于 <yel>L</yel>ess than or <yel>e</yel>qual    |
`[[ NUM -gt NUM ]]` | 大于 <yel>G</yel>reater <yel>t</yel>han          |
`[[ NUM -ge NUM ]]` | 大于或等于 <yel>G</yel>reater than or <yel>e</yel>qual |
`(( NUM < NUM ))`   | 少于
`(( NUM <= NUM ))`  | 小于或等于
`(( NUM > NUM ))`   | 比...更棒
`(( NUM >= NUM ))`  | 大于或等于

### 字符串条件

条件 | 描述
:- | -
`[[ -z STR ]]`     | 空字符串
`[[ -n STR ]]`     | <yel>非</yel>空字符串
`[[ STR == STR ]]` | 平等的
`[[ STR = STR ]]`  | 相等（同上）
`[[ STR < STR ]]`  | 小于 _(ASCII)_
`[[ STR > STR ]]`  | 大于 _(ASCII)_
`[[ STR != STR ]]` | 不相等
`[[ STR =~ STR ]]` | 正则表达式

### 例子
<!--rehype:wrap-class=row-span-3-->

#### 字符串

```bash
if [[ -z "$string" ]]; then
    echo "String is empty"
elif [[ -n "$string" ]]; then
    echo "String is not empty"
else
    echo "This never happens"
fi
```

#### 组合

```bash
if [[ X && Y ]]; then
    ...
fi
```

#### 相等

```bash
if [[ "$A" == "$B" ]]; then
    ...
fi
```

#### 正则表达式

```bash
if [[ '1. abc' =~ ([a-z]+) ]]; then
    echo ${BASH_REMATCH[1]}
fi
```

#### 更小

```bash
if (( $a < $b )); then
   echo "$a is smaller than $b"
fi
```

#### 存在

```bash
if [[ -e "file.txt" ]]; then
    echo "file exists"
fi
```

### 文件条件
<!--rehype:wrap-class=row-span-2-->

条件 | 描述
:- | -
`[[ -e FILE ]]`   | 存在
`[[ -d FILE ]]`   | 目录
`[[ -f FILE ]]`   | 文件
`[[ -h FILE ]]`   | 符号链接
`[[ -s FILE ]]`   | 大小 > 0 字节
`[[ -r FILE ]]`   | 可读
`[[ -w FILE ]]`   | 可写
`[[ -x FILE ]]`   | 可执行文件
`[[ f1 -nt f2 ]]` | f1 比 f2 新
`[[ f1 -ot f2 ]]` | f2 早于 f1
`[[ f1 -ef f2 ]]` | 相同的文件


### 更多条件

条件 | 描述
:- | -
`[[ -o noclobber ]]` | 如果启用 OPTION
`[[ ! EXPR ]]`       | 不是 Not
`[[ X && Y ]]`       | 和 And
`[[ X \|\| Y ]]`     | 或者 Or 

### 逻辑和，或

```bash
if [ "$1" = 'y' -a $2 -gt 0 ]; then
    echo "yes"
fi
if [ "$1" = 'n' -o $2 -lt 0 ]; then
    echo "no"
fi
```

Bash 循环
-----

### 基本 for 循环

```bash
for i in /etc/rc.*; do
    echo $i
done
```

### 类似 C 的 for 循环

```bash
for ((i = 0 ; i < 100 ; i++)); do
    echo $i
done
```

### 范围
<!--rehype:wrap-class=row-span-2-->

```bash
for i in {1..5}; do
    echo "Welcome $i"
done
```

#### 具有步长

```bash
for i in {5..50..5}; do
    echo "Welcome $i"
done
```

### 自动递增

```bash
i=1
while [[ $i -lt 4 ]]; do
    echo "Number: $i"
    ((i++))
done
```

### 自动递增

```bash
i=3
while [[ $i -gt 0 ]]; do
    echo "Number: $i"
    ((i--))
done
```

### Continue

```bash {data=3,5}
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        continue;
    fi
    echo "$number"
done
```

### Break

```bash
for number in $(seq 1 3); do
    if [[ $number == 2 ]]; then
        # Skip entire rest of loop.
        break;
    fi
    # This will only print 1
    echo "$number"
done
```

### Until

```bash
count=0
until [ $count -gt 10 ]; do
    echo "$count"
    ((count++))
done
```

### 永远 

```bash
while true; do
    # here is some code.
done
```

### 永远（简写）

```bash
while :; do
    # here is some code.
done
```


### 正在读取行

```bash
cat file.txt | while read line; do
    echo $line
done
```

Bash 函数
---------

### 定义函数

```bash
myfunc() {
  echo "hello $1"
}
```

```bash
# 同上（替代语法）
function myfunc() {
  echo "hello $1"
}
```

```bash
myfunc "John"
```

### 返回值

```bash
myfunc() {
    local myresult='some value'
    echo $myresult
}
```

```bash
result="$(myfunc)"
```

### 正在引发错误

```bash
myfunc() {
    return 1
}
```

```bash
if myfunc; then
    echo "success"
else
    echo "failure"
fi
```

Bash 选项
-------
<!--rehype:body-class=cols-2-->

### 选项

```bash
# 避免覆盖文件
# (echo "hi" > foo)
set -o noclobber

# 用于出错时退出
# 避免级联错误
set -o errexit   

# 揭示隐藏的失败
set -o pipefail  

# 公开未设置的变量
set -o nounset
```

### 全局选项

```bash
# 不匹配的 glob 被删除
# ('*.foo' => '')
shopt -s nullglob   

# 不匹配的 glob 抛出错误
shopt -s failglob  

# 不区分大小写的球体
shopt -s nocaseglob 

# 通配符匹配点文件
# ("*.sh" => ".foo.sh")
shopt -s dotglob    

# 允许 ** 进行递归匹配
# ('lib/**/*.rb' => 'lib/a/b/c.rb')
shopt -s globstar   
```

Bash 历史
-------
<!--rehype:body-class=cols-2-->

### 命令

命令 | 描述
:- | -
`history`             | 显示历史
`sudo !!`             | 使用 sudo 运行上一个命令
`shopt -s histverify` | 不要立即执行扩展结果

### 表达式

表达式 | 描述
:- | -
`!$`         | 展开最新命令的最后一个参数
`!*`         | 展开最新命令的所有参数
`!-n`        | 展开第 `n` 个最近的命令
`!n`         | 展开历史中的第 `n` 个命令
`!<command>` | 展开最近调用的命令 `<command>`

### 操作

代码 | 描述
:- | -
`!!`                 | 再次执行最后一条命令
`!!:s/<FROM>/<TO>/`  | 在最近的命令中将第一次出现的 `<FROM>` 替换为 `<TO>`
`!!:gs/<FROM>/<TO>/` | 在最近的命令中将所有出现的 `<FROM>` 替换为 `<TO>`
`!$:t`               | 仅从最近命令的最后一个参数扩展基本名称
`!$:h`               | 仅从最近命令的最后一个参数展开目录

`!!` 和 `!$` 可以替换为任何有效的扩展。

### 切片 Slices

代码 | 描述
:- | -
`!!:n`   | 仅扩展最近命令中的第 `n` 个标记（命令为 `0`；第一个参数为 `1`）
`!^`     | 从最近的命令展开第一个参数
`!$`     | 从最近的命令中展开最后一个标记
`!!:n-m` | 从最近的命令扩展令牌范围
`!!:n-$` | 从最近的命令中将第 `n` 个标记展开到最后

`!!` 可以替换为任何有效的扩展，即 `!cat`、`!-2`、`!42` 等。


各种各样的 
-------------

### 数值计算

```bash
$((a + 200))      # Add 200 to $a
```

```bash
$(($RANDOM%200))  # Random number 0..199
```

### 子 shell

```bash
(cd somedir; echo "I'm now in $PWD")
pwd # still in first directory
```


### 检查命令

```bash
command -V cd
#=> "cd is a function/alias/whatever"
```

### 重定向
<!--rehype:wrap-class=row-span-2 col-span-2-->

```bash
python hello.py > output.txt   # 标准输出到（文件）
python hello.py >> output.txt  # 标准输出到（文件），追加
python hello.py 2> error.log   # 标准错误到（文件）
python hello.py 2>&1           # 标准错误到标准输出
python hello.py 2>/dev/null    # 标准错误到（空null）
python hello.py &>/dev/null    # 标准输出和标准错误到（空null）
```

```bash
python hello.py < foo.txt      # 将 foo.txt 提供给 python 的标准输入
```


### 来源相对

```bash
source "${0%/*}/../share/foo.sh"
```

### 脚本目录

```bash
DIR="${0%/*}"
```

### Case/switch

```bash
case "$1" in
    start | up)
    vagrant up
    ;;
    *)
    echo "Usage: $0 {start|stop|ssh}"
    ;;
esac
```


### 陷阱错误
<!--rehype:wrap-class=col-span-2-->

```bash
trap 'echo Error at about $LINENO' ERR
```

或者

```bash
traperr() {
    echo "ERROR: ${BASH_SOURCE[1]} at about ${BASH_LINENO[0]}"
}
set -o errtrace
trap traperr ERR
```

### printf

```bash
printf "Hello %s, I'm %s" Sven Olga
#=> "Hello Sven, I'm Olga

printf "1 + 1 = %d" 2
#=> "1 + 1 = 2"

printf "Print a float: %f" 2
#=> "Print a float: 2.000000"
```

### 获取选项
<!--rehype:wrap-class=col-span-2-->

```bash
while [[ "$1" =~ ^- && ! "$1" == "--" ]]; do case $1 in
    -V | --version )
    echo $version
    exit
    ;;
    -s | --string )
    shift; string=$1
    ;;
    -f | --flag )
    flag=1
    ;;
esac; shift; done
if [[ "$1" == '--' ]]; then shift; fi
```

### 检查命令的结果
<!--rehype:wrap-class=col-span-2-->

```bash
if ping -c 1 google.com; then
    echo "看来您的互联网连接正常"
fi
```

### 特殊变量
<!--rehype:wrap-class=row-span-2-->

表达式 | 描述
:- | -
`$?`       | 最后一个任务的退出状态
`$!`       | 最后一个后台任务的 PID
`$$`       | shell PID
`$0`       | shell 脚本的文件名

见[特殊参数](http://wiki.bash-hackers.org/syntax/shellvars#special_parameters_and_shell_variables)。


### grep 检查
<!--rehype:wrap-class=col-span-2-->

```bash
if grep -q 'foo' ~/.bash_history; then
    echo "您过去似乎输入过“foo”"
fi
```


### 反斜杠转义
<!--rehype:wrap-class=row-span-2-->

- &nbsp; 
- \!
- \"
- \#
- \&
- \'
- \(
- \)
- \,
- \;
- \<
- \>
- \[
- \|
- \\
- \]
- \^
- \{
- \}
- \`
- \$
- \*
- \?
<!--rehype:className=cols-4 style-none-->

使用 `\` 转义这些特殊字符

### Heredoc

```sh
cat <<END
hello world
END
```

### 转到上一个目录

```bash
pwd # /home/user/foo
cd bar/
pwd # /home/user/foo/bar
cd -
pwd # /home/user/foo
```

### 读取输入

```bash
echo -n "Proceed? [y/n]: "
read ans
echo $ans
```

```bash
read -n 1 ans    # 只有一个字符
```

### 条件执行

```bash
git commit && git push
git commit || echo "Commit failed"
```

### 严格模式

```bash
set -euo pipefail
IFS=$'\n\t'
```

参见：[非官方 bash 严格模式](http://redsymbol.net/articles/unofficial-bash-strict-mode/)

### 可选参数

```bash
args=("$@")
args+=(foo)
args+=(bar)
echo "${args[@]}"
```

将参数放入数组中，然后追加

另见
----

* [Shell 教程](https://jaywcjlove.github.io/shell-tutorial) _(jaywcjlove.github.io)_
* [Devhints](https://devhints.io/bash) _(devhints.io)_
* [Bash-hackers wiki](http://wiki.bash-hackers.org/) _(bash-hackers.org)_
* [Shell vars](http://wiki.bash-hackers.org/syntax/shellvars) _(bash-hackers.org)_
* [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
* [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_
* [ShellCheck](https://www.shellcheck.net/) _(shellcheck.net)_
* [shell - Standard Shell](https://devmanual.gentoo.org/tools-reference/bash/index.html) _(devmanual.gentoo.org)_