Bash 备忘清单
===

这是开始使用 linux bash shell 脚本的快速参考备忘单。

入门
-----

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
echo '$NAME'    # => $NAME (字符串原样输出)
echo "${NAME}!" # => John! (变量)
NAME = "John"   # => Error (注意不能有空格)
```

### 注释

```shell
# 这是一个内联 Bash 注释。

: '
这是一个
非常整洁的
bash 注释
'
```

多行注释使用 `:'` 打开和 `'` 关闭

### 参数
<!--rehype:wrap-class=row-span-2-->

表示 | 描述
:-|-
`$1` … `$9` | 参数 1 ... 9
`$0`        | 脚本本身的名称
`$1`        | 第一个参数
`${10}`     | 位置参数 10
`$#`        | 参数数量
`$$`        | shell 的进程 id
`$*`        | 所有参数
`$@`        | 所有参数，从第一个开始
`$-`        | 当前选项
`$_`        | 上一个命令的最后一个参数
<!--rehype:className=left-align-->

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
<!--rehype:className=code-nowrap left-align-->

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

---

```bash
BASEPATH=${SRC##*/}   
echo $BASEPATH  # => "foo.cpp"
```

---

```bash
DIRPATH=${SRC%$BASEPATH}
echo $DIRPATH   # => "/path/to/"
```

### 转换

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

#### 有索引

```bash
for i in "${!Fruits[@]}"; do
  printf "%s\t%s\n" "$i" "${Fruits[$i]}"
done
```

### 操作
<!--rehype:wrap-class=col-span-2-->

```bash
Fruits=("${Fruits[@]}" "Watermelon")         # 添加
Fruits+=('Watermelon')                       # 也是添加
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
`[[ NUM -eq NUM ]]` | 等于 <yel>Eq</yel>ual
`[[ NUM -ne NUM ]]` | 不等于 <yel>N</yel>ot <yel>e</yel>qual
`[[ NUM -lt NUM ]]` | 小于 <yel>L</yel>ess <yel>t</yel>han
`[[ NUM -le NUM ]]` | 小于等于 <yel>L</yel>ess than or <yel>e</yel>qual
`[[ NUM -gt NUM ]]` | 大于 <yel>G</yel>reater <yel>t</yel>han
`[[ NUM -ge NUM ]]` | 大于等于 <yel>G</yel>reater than or <yel>e</yel>qual
`(( NUM < NUM ))`   | 小于
`(( NUM <= NUM ))`  | 小于或等于
`(( NUM > NUM ))`   | 比...更大
`(( NUM >= NUM ))`  | 大于等于

### 字符串条件

条件 | 描述
:- | -
`[[ -z STR ]]`     | 空字符串
`[[ -n STR ]]`     | <yel>非</yel>空字符串
`[[ STR == STR ]]` | 相等
`[[ STR = STR ]]`  | 相等(同上)
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

#### 小于

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
`[[ f1 -ot f2 ]]` | f2 比 f1 新
`[[ f1 -ef f2 ]]` | 相同的文件

### 更多条件

条件 | 描述
:- | -
`[[ -o noclobber ]]` | 如果启用 <pur>OPTION</pur>
`[[ ! EXPR ]]`       | 不是 <pur>Not</pur>
`[[ X && Y ]]`       | 和 <pur>And</pur>
`[[ X \|\| Y ]]`     | 或者 <pur>Or</pur>

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

#### 步长

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

### 自动递减

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
        # 跳过整个循环的其余部分。
        break;
    fi
    # 这只会打印 1
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

### 死循环

```bash
while true; do
    # 下面是一些代码
done
```

### 死循环(简写)

```bash
while :; do
    # 下面是一些代码
done
```

### 读取文件的每一行

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

同上(替代语法)

```bash
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

### 抛出错误

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

避免覆盖文件

```bash
# (echo "hi" > foo)
set -o noclobber
```

用于出错时退出，避免级联错误

```bash
set -o errexit   
```

揭示隐藏的失败

```bash
set -o pipefail  
```

公开未设置的变量

```bash
set -o nounset
```

### 全局选项

不匹配的 glob 被删除

```bash
shopt -s nullglob   # ('*.foo' => '')
```

不匹配的 glob 抛出错误

```bash
shopt -s failglob  
```

不区分大小写的球体

```bash
shopt -s nocaseglob 
```

通配符匹配点文件

```bash
shopt -s dotglob    # ("*.sh" => ".foo.sh")
```

允许 ** 进行递归匹配

```bash
shopt -s globstar   # ('lib/**/*.rb' => 'lib/a/b/c.rb')
```

Bash 历史
-------
<!--rehype:body-class=cols-2-->

### 命令

命令 | 描述
:- | -
`history`             | 显示历史
`sudo !!`             | 使用 `sudo` 运行上一个命令
`shopt -s histverify` | 不要立即执行扩展结果
<!--rehype:className=left-align-->

### 表达式

表达式 | 描述
:- | -
`!$`         | 展开最新命令的最后一个参数
`!*`         | 展开最新命令的所有参数
`!-n`        | 展开第 `n` 个最近的命令
`!n`         | 展开历史中的第 `n` 个命令
`!<command>` | 展开最近调用的命令 `<command>`
<!--rehype:className=left-align-->

### 操作

代码 | 描述
:- | -
`!!`                 | 再次执行最后一条命令
`!!:s/<FROM>/<TO>/`  | 在最近的命令中将第一次出现的 `<FROM>` 替换为 `<TO>`
`!!:gs/<FROM>/<TO>/` | 在最近的命令中将所有出现的 `<FROM>` 替换为 `<TO>`
`!$:t`               | 仅从最近命令的最后一个参数扩展基本名称
`!$:h`               | 仅从最近命令的最后一个参数展开目录
<!--rehype:className=left-align-->

`!!` 和 `!$` 可以替换为任何有效的扩展。

### 切片 Slices

代码 | 描述
:- | -
`!!:n`   | 仅扩展最近命令中的第 `n` 个标记(命令为 `0`；第一个参数为 `1`)
`!^`     | 从最近的命令展开第一个参数
`!$`     | 从最近的命令中展开最后一个标记
`!!:n-m` | 从最近的命令扩展令牌范围
`!!:n-$` | 从最近的命令中将第 `n` 个标记展开到最后
<!--rehype:className=left-align-->

`!!` 可以替换为任何有效的扩展，即 `!cat`、`!-2`、`!42` 等。

杂项
---

### 数值计算

```bash
$((a + 200))      # $a 加 200
```

```bash
$(($RANDOM%200))  # 随机数 0..199
```

### 子 shell

```bash
(cd somedir; echo "I'm now in $PWD")
pwd # 仍然在第一个目录
```

### 检查命令

```bash
command -V cd
#=> "cd 是一个函数/别名/其他"
```

### 重定向
<!--rehype:wrap-class=row-span-2 col-span-2-->

```bash
python hello.py > output.txt   # 标准输出到(文件)
python hello.py >> output.txt  # 标准输出到(文件)，追加
python hello.py 2> error.log   # 标准错误到(文件)
python hello.py 2>&1           # 标准错误到标准输出
python hello.py 2>/dev/null    # 标准错误到(空null)
python hello.py &>/dev/null    # 标准输出和标准错误到(空null)
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

```bash
if ping -c 1 google.com; then
    echo "看来您的互联网连接正常"
fi
```

### grep 检查

```bash
if grep -q 'foo' ~/.bash_history; then
    echo "您过去似乎输入过“foo”"
fi
```

### 写入文件
<!--rehype:wrap-class=row-span-6-->

:-- | --
:-- | --
`cat` | 用于显示文本文件内容，全部输出
`EOF` | `end of file`，表示文本结束符

---

```bash
cat > output.txt <<EOF
this is test eof
this is test eof2
EOF
```

输出 `cat output.txt`

```
this is test eof
this is test eof2
```

追加内容

```bash
cat >>2.txt <<EOF
456
789
EOF
```

`$` 等特殊字符时，须利用转义字符 `\`

```bash
cat > file <<EOF
export ORACLE_SID=yqpt 
export PATH=\$PATH:\$ORACLE_HOME/bin  
EOF
```

取消变量替换，`EOF` 被加上双引号或者单引号，即可取消变量的替换

```bash
cat << "EOF" > output.sh
echo "This is output"
echo $1
EOF
```

所有TAB键将全部忽略[不能是空格]

```bash
cat << -EOF
        echo "This is output"
EOF
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
pwd     # /home/user/foo
cd bar/
pwd     # /home/user/foo/bar
cd -
pwd     # /home/user/foo
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

### 调试模式

启用调试模式，会把脚本中的每条命令的执行情况打印出来。它可以在整个会话或脚本上运行，也可以在脚本内以编程方式启用。

以调试模式运行脚本(整个脚本都会打印调试信息)：

```bash
$ bash -x myscript.sh
```

在 bash 脚本中打开调试(针对部分内容打印调试信息)

```bash
#!/bin/bash
set -x   # Enable debugging
# some code here
set +x   # Disable debugging output.
```

Bash 颜色
----

### 颜色着色语法示例
<!--rehype:wrap-class=row-span-2-->

您可以通过为其输出着色来使您的 BASH 脚本更漂亮，使用以下模板编写彩色文本：

#### 示例

```bash
$ echo -e "\e[31m命令行中显示红色文字\e[0m"
```

<red>命令行中显示红色文字</red>

```
$ echo -e "\e[42m绿色背景\e[0m"
```

`绿色背景`<!--rehype:style=background:green;color: black;-->

Option | Description
:- | --
`-e` | 启用反斜杠转义的解释
`\e[` 或 `\x1b[` 或 `\033[` | 开始颜色修改
`COLORm` | 颜色代码 + `m` 在末尾
`\e[0m` 或 `\x1b[0m` 或 `\033[0m` | 结束颜色修改
<!--rehype:className=left-align-->

`0x1b` 字面上称为 `ESC`

#### 示例

```bash
$ echo -e "\e[3m下划线文本\e[0m"
```

`下划线文本`<!--rehype:style=text-decoration: underline;color: inherit;-->

```bash
$ echo -e "\e[1;33;4;44m粗体下划线蓝色背景黄色文字的文本\e[0m"
```
<!--rehype:className=wrap-text-->

`粗体下划线蓝色背景黄色文字的文本`<!--rehype:style=text-decoration: underline;color: inherit;font-weight: bold;color: #cdcd00;background: #0000ee;-->

```bash
\e[         # 启用转义
1;33;4;44   # 参数 (1;33;4;44)
m           # 设置图形模式
```

#### 样式

:- | -- | --
:- | -- | --
`0` | 普通字符(复位或正常) | 关闭所有属性
`1` | **粗体**字
`2` | 弱化(降低强度) | 未广泛支持
`3` | 斜体 | 未广泛支持有时为反相显示
`4` | 下划线
`5` | 缓慢闪烁
`6` | 快速闪烁
`7` | 反显
`8` | 隐藏 | 未广泛支持
`9` | 划除
<!--rehype:className=left-align-->

### ANSI — 颜色转义码

颜色 | 名称 | 前景色 | 背景色 | 示例
:- | --| -- | -- | --
`Black` | 黑色 | 30 | 40 | `黑`<!--rehype:style=background:#000;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Red` | 红色 | 31 | 41 | `红`<!--rehype:style=background:#c23621;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Green` | 绿色 | 32 | 42 | `绿`<!--rehype:style=background:#25bc26;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Yellow` | 黄色 | 33 | 43 | `黄`<!--rehype:style=background:#cdcd00;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Blue` | 蓝色 | 34 | 44 | `蓝`<!--rehype:style=background:#0000ee;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Purple` | 紫色 | 35 | 45 | `紫`<!--rehype:style=background:#cd00cd;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Cyan` | 青色 | 36 | 46 | `青`<!--rehype:style=background:#00AAAA;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`White` | 白色 | 37 | 47 | `白`<!--rehype:style=background:#e5e5e5;padding:0.2rem 1.2rem;border: 1px solid #333;-->
<!--rehype:className=show-header left-align-->

### ANSI — 颜色转义码(亮色)

颜色 | 前色 | 背色 | 示例
:- | -- | -- | --
`BrightBlack(Gray)` 灰色 | 90 | 100 | `90`<!--rehype:style=background:#555555;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Red` 亮红色 | 91 | 101 | `91`<!--rehype:style=background:#FF5555;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Green` 亮绿色 | 92 | 102 | `92`<!--rehype:style=background:#55FF55;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Yellow` 亮黄色 | 93 | 103 | `93`<!--rehype:style=background:#FFFF55;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Blue` 亮蓝色 | 94 | 104 | `94`<!--rehype:style=background:#5555FF;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Magenta` 亮紫色 | 95 | 105 | `95`<!--rehype:style=background:#FF55FF;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright Cyan` 亮青色 | 96 | 106 | `96`<!--rehype:style=background:#55FFFF;padding:0.2rem 1.2rem;border: 1px solid #333;-->
`Bright White` 浅灰 | 97 | 107 | `97`<!--rehype:style=background:#ffffff;padding:0.2rem 1.2rem;border: 1px solid #333;-->
<!--rehype:className=show-header left-align-->

### 可用功能
<!--rehype:wrap-class=col-span-2-->

:- | -- | --
:- | -- | --
`n` A | 光标上移 | 光标向指定的方向移动 `n`(默认1)格
`n` B | 光标下移 | 光标向指定的方向移动 `n`(默认1)格
`n` C | 光标前移 | 光标向指定的方向移动 `n`(默认1)格
`n` D | 光标后移 | 光标向指定的方向移动 `n`(默认1)格
`n` E | 光标移到下一行 | 光标移动到下面第 `n`(默认1)行的开头(非ANSI.SYS)
`n` F | 光标移到上一行 | 光标移动到上面第 `n`(默认1)行的开头(非ANSI.SYS)
`n` G | 光标水平绝对 | 光标移动到第 `n`(默认1)列(非ANSI.SYS)
`n`;`m` H | 光标位置 | 光标移动到第 `n`行、第 `m` 列。值从1开始，且默认为1(左上角)
`n` J | ED – 擦除显示 | 清除屏幕的部分区域
`n` K | EL – 擦除行 | 清除行内的部分区域
`n` S | SU – 向上滚动 | 整页向上滚动 `n`(默认1)行。新行添加到底部 (非ANSI.SYS)
`n` T | SD – 向下滚动 | 整页向下滚动 `n`(默认1)行。新行添加到顶部 (非ANSI.SYS)
`n`;`m`f | HVP – 水平垂直位置 | 同CUP
`n` `m` | SGR – 选择图形再现 | 设置SGR参数，包括文字颜色
`5i` | 打开辅助端口 | 启用辅助串行端口，通常用于本地串行打印机
`4i` | 关闭辅助端口 | 禁用辅助串行端口，通常用于本地串行打印机
`6n` | DSR – 设备状态报告 | 以 `ESC[n;mR` (就像在键盘上输入)向应用程序报告光标位置(CPR)，其中 `n`是行， `m` 是列
`s` | SCP – 保存光标位置 | 保存光标的当前位置
`u` | RCP – 恢复光标位置 | 恢复保存的光标位置
<!--rehype:className=left-align-->

另见
----

- [Shell 教程](https://jaywcjlove.github.io/shell-tutorial) _(jaywcjlove.github.io)_
- [Devhints](https://devhints.io/bash) _(devhints.io)_
- [Bash-hackers wiki](http://wiki.bash-hackers.org/) _(bash-hackers.org)_
- [Shell vars](http://wiki.bash-hackers.org/syntax/shellvars) _(bash-hackers.org)_
- [Learn bash in y minutes](https://learnxinyminutes.com/docs/bash/) _(learnxinyminutes.com)_
- [Bash Guide](http://mywiki.wooledge.org/BashGuide) _(mywiki.wooledge.org)_
- [ShellCheck](https://www.shellcheck.net/) _(shellcheck.net)_
- [shell - Standard Shell](https://devmanual.gentoo.org/tools-reference/bash/index.html) _(devmanual.gentoo.org)_
- [ANSI 转义序列](https://zh.wikipedia.org/wiki/ANSI转义序列) _(zh.wikipedia.org)_
