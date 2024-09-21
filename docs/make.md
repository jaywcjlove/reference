make 备忘清单
===

包含 最重要概念、函数、方法等的 make 备忘单。 初学者的完整快速参考。

Makefile 入门
---
<!-- markdownlint-disable MD010 -->

### 示例

```makefile
a.txt: b.txt c.txt
	cat b.txt c.txt > a.txt
```

#### 工作流程

* 读入所有的 `Makefile`。
* 读入被 `include` 的其它 `Makefile`。
* 初始化文件中的变量。
* 推导隐晦规则，并分析所有规则。
* 为所有的目标文件创建依赖关系链。
* 根据依赖关系，决定哪些目标要重新生成。
* 执行生成命令。

<!--rehype:className=style-timeline-->

### 文件命令

make命令会以 `GNUmakefile`（不推荐使用）、`makefile`、`Makefile`（推荐使用）的顺序查找当前目录下的文件。

#### 自定义文件路径

```bash
$ make target -f FILE
```

我们可以使用 `-f FILE` 来指定makefile文件的路径

#### 隐式生成

如果文件夹中没有 makefile 文件，只有 main.c 源文件，那么我们可以使用 `make main.o` 隐式生成链接文件

```bash
$ make main.o
# 实际执行： cc    -c -o main.o main.c
```

### 规则

```makefile
TARGET: PREREQUISITES
  COMMAMD
...
```

* `target`: 规则的目标。目标可以是规则的动作（如 `clean` 等），也可以是目标文件或者最后的可执行文件。
* `prerequisites`: 规则的依赖。生成规则目标文件所需要的文件名列表（通常一个目标依赖于一个或者多个文件）。
* `command`: 规则的命令行。规则要执行的动作（任意的 shell 命令或者在 shell 下执行的程序）。<span style="color:red">命令需要以 tab 键开头</span>
<!--rehype:className=style-round-->

```bash
$ make [TARGET ...]
```

---

```bash
$ make        # 没有参数首先运行 TARGET
$ make help   # 显示可用目标
$ make dist   # 从当前目录制作一个发布存档
$ make check  # 无需安装的单元测试
```

### 清空目标文件

```makefile
.PHONY: clean
clean:
  rm *.o temp
```

`.PHONY` 内置命令将排除 clean 文件，不会因为当前目录中因为有 clean 文件而不会不执行 clean 伪目标

<span style="color:red">clean 从来都是放在文件的最后</span>

<!--rehype:className=auto-wrap-->

### 注释

makefile 文件的注释与 bash 脚本一致

```makefile
# 这是一个注释
main.o : main.c
	cc -c main.c
```

### 换行 `\`

```makefile
# 这是一个注释
main.o : main.c
	cc -c \
	main.c
```

### 引用其它的 Makefile

`include` 关键字可以把别的 Makefile 包含进来。这样使用 make 运行的时候就会

```makefile
# makefile
include foo.make
```

如果你想让 make 不理那些无法读取的文件，并且继续执行。

```makefile
-include <filename>
```

变量
---

### 赋值符

#### 在执行时扩展，允许递归扩展

```makefile
VARIABLE = value
```

#### 在声明时扩展

可以防止递归，并且只能引用之前声明过的变量

```makefile
VARIABLE := value
```

#### 只有在该变量为空时才设置值

```makefile
VARIABLE ?= value
```

#### 将值追加到变量的尾端

```makefile
VARIABLE += value
```

#### override

如果变量前不指定 `override`，那么命令行中指定的变量可以对 Makefile 中的变量重新定义。

```makefile
# 不会重新定义
override VARIABLE = value
override VARIABLE := value
override VARIABLE ?= value
override VARIABLE += value
override define
  #...
endef
```

<!--rehype:className=auto-wrap-->

### 变量

需要使用 `$()` 或者 `${}` 对变量进行引用

```makefile
file = main.c

run:
	clang -o hello ${file}
```

#### 避免递归变量

```makefile
# 这样会使变量陷入无穷递归
A = $(B)
B = $(A)
```

---

```makefile
x := foo
y := $(x) bar
x := later

# 等价于
# x = later
# y = foo bar
```

#### Shell 变量

如果要使用 Shell 变量，需要在之前加上 `$`

```makefile
run:
	echo $$HOME
```

#### 定义多行变量

```makefile
define foo
echo foo
echo bar
endef

run:
	${foo}
```

### 自动变量
<!--rehype:wrap-class=row-span-2-->

#### `$@`

`$@`:指代当前目标，即 Make 命令当前构建的那个目标

```makefile
foo:
	touch $@
```

---

```bash
$ make foo
# $@ 就是指的这里的 foo
```

#### `$<`

`$<` 指代第一个前置条件。比如，规则为 t: p1 p2，那么 `$<` 就指代 p1

```makefile
a.md: b.md c.md
  cp $< $@
```

---

使用 `make a.md`,相当于以下写法

```makefile
a.md: b.md c.md
    cp b.md a.md 
```

#### `$^`

`$^` 指代所有的前置条件,去除重复项

```makefile
a.md: b.md c.md
  echo $^
```

#### `$+`

`$^` 指代所有的前置条件，不会去除重复项

```makefile
a.md: b.md c.md c.md
	echo $+
```

#### `$?`

`$?` 指代更新的依赖，只有最近更新过的依赖才会引用

```makefile
a.md: b.md c.md c.md
	cat $? > a.md
```

#### `$*`

`$*` 指代匹配符匹配的部分

```makefile
main.o: main.c
	clang -o $* $*.c
```

---

```bash
$ make main
# 此时 cc  main.c -o main
```

#### `$%`

`$%`: 仅当目标是函数库文件中，表示规则中的目标成员名

* windows 中是 `.lib` 文件
* unix 中是 `.a` 文件

<!--rehype:className=style-round-->

### 内置命名变量的参数
<!--rehype:wrap-class=col-span-2-->

这些变量都是相关下面的命令的参数。如果没有指明其默认值，那么其默认值都是空。

:-       | :-
:-       | :-
`ARFLAGS`  | 函数库打包程序AR命令的参数。默认值是 `rv`
`ASFLAGS`  | 汇编语言编译器参数。（当明显地调用 `.s` 或 `.S` 文件时）
`CFLAGS`   | C 语言编译器参数。
`CXXFLAGS` | C++ 语言编译器参数。
`COFLAGS`  | RCS 命令参数。
`CPPFLAGS` | C 预处理器参数。（ `C` 和 `Fortran` 编译器也会用到）。
`FFLAGS`   | Fortran 语言编译器参数。
`GFLAGS`   | SCCS `get` 程序参数。
`LDFLAGS`  | 链接器参数。（如：`ld` ）
`PFLAGS`   | Pascal 语言编译器参数。
`LFLAGS`   | Lex 文法分析器参数。
`RFLAGS`   | Ratfor 程序的 Fortran 编译器参数。
`YFLAGS`   | Yacc 文法分析器参数。
<!--rehype:className=left-align-->

### 内置已命名的变量
<!--rehype:wrap-class=col-span-2-->

:-         | :-
:-         | :-
`AR`       | 函数库打包程序。默认命令是 `ar`
`AS`       | 汇编语言编译程序。默认命令是 `as`
`CC`       | C 语言编译程序。默认命令是 `cc`
`CXX`      | C++ 语言编译程序。默认命令是 `g++`
`CO`       | 从 RCS 文件中扩展文件程序。默认命令是 `co`
`CPP`      | C 程序的预处理器（输出是标准输出设备）。默认命令是 `$(CC) –E`
`FC`       | Fortran 和 Ratfor 的编译器和预处理程序。默认命令是 `f77`
`GET`      | 从 SCCS 文件中扩展文件的程序。默认命令是 `get`
`LEX`      | Lex 方法分析器程序（针对于 C 或 Ratfor）。默认命令是 `lex`
`PC`       | Pascal 语言编译程序。默认命令是 `pc`
`YACC`     | Yacc 文法分析器（针对于 C 程序）。默认命令是 `yacc`
`YACCR`    | Yacc 文法分析器（针对于 Ratfor 程序）。默认命令是 `yacc –r`
`MAKEINFO` | 转换 Texinfo 源文件（.texi）到 Info 文件程序。默认命令是 `makeinfo`
`TEX`      | 从 TeX 源文件创建TeX DVI文件的程序。默认命令是 `tex`
`TEXI2DVI` | 从 Texinfo 源文件创建 TeX DVI 文件的程序。默认命令是 `texi2dvi`
`WEAVE`    | 转换 Web 到 TeX 的程序。默认命令是 `weave`
`CWEAVE`   | 转换 C Web 到 TeX 的程序。默认命令是 `cweave`
`TANGLE`   | 转换 Web 到 Pascal 语言的程序。默认命令是 `tangle`
`CTANGLE`  | 转换 C Web 到 C。默认命令是 `ctangle`
`RM`       | 删除文件命令。默认命令是 `rm –f`
<!--rehype:className=left-align-->

#### 内置的变量

```makefile
run:
	${CC} -o main main.c
```

书写规则
---

### 文件搜寻（`vpath`）
<!--rehype:wrap-class=col-span-3-->

如果没有指定 vpath 变量，make 只会在当前的目录中去寻找依赖文件和目标文件。否则，如果当前目录没有，就会到指定的目录中去寻找

:-                              | :-
:-                              | :-
`vpath <pattern> <directories>` | 为符合模式 \<pattern> 的文件指定搜索目录 \<directories>
`vpath <pattern>`               | 清除符合模式 \<pattern> 的文件的搜索目录。
`vpath`                         | 清除所有已被设置好了的文件搜索目录

#### `%`

* vpath 使用方法中的 \<pattern> 需要包含 `%` 字符。`%` 的意思是匹配零或若干字符（类似于**通配符**）,并且引用规则是需要使用**自动变量**

```makefile
vpath %.c dist
TARGET = hello
OBJ = bar.o foo.o

$(TARGET): $(OBJ)
	$(CC) -o $@ $^

%.o: $.c
	$(CC) -o $< -o #@
```

<!--rehype:className=auto-wrap-->

### 通配符

#### `*`

`*`：与 linux 系统下的一样

```makefile
# 清除所有 .o 结尾的文件
clean:
    rm -f *.o
```

#### `~`

`~`：在 linux 或 mac 下表示用户目录，win 下表示 `HOME` 环境变量

```makefile
run:
    ls ~
```

#### `?`

`?`: 与在 linux 等类似，可以匹配单个字符

```makefile
run:
	ls -ll packag?.json
```

### 静态模式

```makefile
TARGET: PREREQUISITES :PREREQUISITES
  COMMAMD
#...
```

* `target` 定义了一系列的目标文件
* 第一个 `prerequisites` 是指明了 target 的模式，也就是的目标集模式。
* 第二个 `prerequisites` 是目标的依赖模式，它对第一个 `prerequisites` 形成的模式再进行一次依赖目标的定义

```makefile
objects = foo.o main.o

$(objects): %.o: %.c
	$(CC) -c $(CFLAGS) $< -o $@
```

---
相当于:

```makefile
foo.o : foo.c
    $(CC) -c $(CFLAGS) foo.c -o foo.o
main.o : main.c
    $(CC) -c $(CFLAGS) main.c -o main.o
```

### 伪目标

* **伪目标**并不是一个文件，只是一个标签。只有通过显式地指明这个**目标**才能让其生效
* 使用 `.PHONY` 来显式地指明目标是 `伪目标`

```makefile
.PHONY : clean
clean :
    rm *.o temp
```

### 约定俗成的规则
<!--rehype:wrap-class=col-span-2-->

:-  | :-
:-  | :-
`all`        | 该伪目标是所有目标的目标，一般用于编译所有的目标
`clean`      | 该伪目标用于删除所有由 make 创建的文件
`install`    | 该伪目标用于安装已编译好的程序，即将目标执行文件拷贝到指定目标中
`print`      | 该伪目标用于例出改变过的源文件
`tar`        | 该伪目标用于把源程序打包备份为 tar 文件
`dist`       | 该伪目标用于创建压缩文件，一般将 tar 文件压成 Z 或 gz 文件
`TAGS`       | 该伪目标用于更新所有的目标，以备完整地重编译使用
`check/test` | 这两个伪目标用于测试 makefile 的流程

<!--rehype:className=style-round-->
<!--rehype:className=auto-wrap-->

命令
---

### 回声（`@`）

正常情况下，make会打印每条命令，然后再执行，这就叫做回声（echoing）

```makefile
all:
  # 会有命令执行显示
	echo Hello, world
```

---

```makefile
all:
  # 不会有命令执行的显示
	@echo Hello, world
```

<!--rehype:className=auto-wrap-->

### 显示命令、禁止命令

#### 显示命令

如果我们只希望显示命令，而不希望执行命令，可以使用 `-n` 或者 `--just-print`

```bash
$ make all --just-print 
$ make all -n 
```

#### 禁止命令

`-s` 或 `--silent` 或 `--quiet` 与 `@` 一样，用于禁止回声

```bash
$ make all -s 
```

<!--rehype:className=auto-wrap-->

### 执行命令

使用 tab 及换行

```makefile
exec:
    cd /home/hchen
    pwd
```

---

使用 `;`

```makefile
exec:
    cd /home/hchen; pwd
```

### make 参数
<!--rehype:wrap-class=col-span-3-->

:-  | :-
:-  | :-
`-b`,`-m`     |  忽略和其它版本make的兼容性
`-B`          |  (`--always-make`) 认为所有的目标都需要重编译
`-C <dir>`    |  (`--directory=<dir>`) 指定读取makefile的目录
`-e`          |  (`--environment-overrides`) 指明环境变量的值覆盖 makefile 中定义的变量的值
`-f=<file>`   | 指定需要执行的makefile
`-h`          | 显示帮助信息
`-i`          | (`--ignore-errors`)在执行时忽略所有的错误
`-I <dir>`    | (`--include-dir=<dir>`) 指定一个被包含 makefile 的搜索目标
`-j [<nums>]` | (`--jobs[=<jobsnum>]`)指同时运行命令的个数
`-k`          | (`--keep-going`)出错也不停止运行
`-l <load>`   | `--load-average[=<load>]`、`-max-load[=<load>]` 指定make运行命令的负载
`-n`          | (`--just-print`, `--dry-run`, `--recon`) 仅输出执行过程中的命令序列，但不执行
`-o <file>`   | (`--old-file=<file>`, `--assume-old=<file>`)不重新生成的指定的 \<file>，即使目标的依赖文件新于它
`-p`          | (`--print-data-base`) 输出 makefile 中的所有数据，包括所有的规则和变量
`-q`          | (`--question`) 不运行命令，也不输出。仅仅是检查所指定的目标是否需要更新
`-r`          | (`--no-builtin-rules`) 禁止 make 使用任何隐含规则
`-R`          | (`--no-builtin-variabes`) 禁止 make 使用任何作用于变量上的隐含规则
`-s`          | (`--silent`,`--quiet`) 在命令运行时不输出命令的输出
`-S`          | (`--no-keep-going`, `--stop`) 取消“-k”选项的作用
`-t`          | `--touch` 相当于 UNIX 的 touch 命令，只是把目标的修改日期变成最新的，也就是阻止生成目标的命令运行
`-v`          | (`--version`) 输出 make 程序的版本、版权等关于 make 的信息
`-w`          | (`--print-directory`) 输出运行 makefile 之前和之后的信息。`--no-print-directory` 可以禁止 `-w`
`-W <file>`   | `--what-if=<file>`, `--new-file=<file>`, `--assume-file=<file>` 假定目标 \<file> 需要更新，如果和 `-n` 选项使用，那么这个参数会输出该目标更新时的运行动作
`--warn-undefined-variables` | 只要 make 发现有未定义的变量，那么就输出警告信息
<!--rehype:className=left-align-->

### `-debug[=<options>]`
<!--rehype:wrap-class=col-span-2-->

输出 make 的调试信息。下面是 \<options>的取值：

options  | :-
:-       | :-
`a` | `all`，输出所有的调试信息
`b` | `basic`，只输出简单的调试信息。即输出不需要重编译的目标
`v` | `verbose`，包括 b 的信息。输出包括 makefile 被解析的信息，不需要被重编译的依赖文件等
`i` | `implicit`，输出所有的隐含规则
`j` | `jobs`，输出执行规则中命令的详细信息，如命令的 PID、返回码等
`m` | `makefile`，输出 make 读取 makefile，更新 makefile，执行 makefile 的信息
<!--rehype:className=left-align-->

### make 的退出码

:-  | :-
:-  | :-
`0` | 成功执行
`1` | 运行时出现错误
`2` | 使用了 `-q` 选项，并且一些目标不需要更新

判断和循环
---

### 单分支条件判断

* `ifeq` 的意思表示条件语句的开始，表达式包含两个参数，如果相同则为真。
* `ifneq` 的意思表示条件语句的开始，表达式包含两个参数，如果不同则为真。
* `else` 表示条件表达式为假的情况。
* `endif` 表示一个条件语句的结束，任何一个条件表达式都应该以 `endif` 结束。
<!--rehype:className=style-round-->

```makefile
run:
ifeq ($(CC), cc)
	$(CC) -o foo foo.c
else
	$(CC) -o bar bar.c
endif
```

### 多分支条件判断

#### ifneq 语法

```makefile
ifneq (<arg1>, <arg2>)
ifneq '<arg1>' '<arg2>'
ifneq "<arg1>" "<arg2>"
ifneq "<arg1>" '<arg2>'
ifneq '<arg1>' "<arg2>"
```

#### ifeq 语法

```makefile
ifeq (<arg1>, <arg2>)
ifeq '<arg1>' '<arg2>'
ifeq "<arg1>" "<arg2>"
ifeq "<arg1>" '<arg2>'
ifeq '<arg1>' "<arg2>"
```

### ifdef

```makefile
ifdef <variable-name>
```

`ifdef` 会根据 variable-name 判断，如果为空则为真

```makefile
bar =
foo = $(bar)
ifdef foo
    frobozz = yes
else
    frobozz = no
endif

run:
	echo $(frobozz)
```

`ifndef` 则和 `ifdef` 是相反的意思

### for 循环

```makefile
LIST = one two three
all:
	for i in $(LIST); do \
	    echo $$i; \
	done
```

函数
---

### 字符串处理函数 - 替换函数(`subst`)

把字串 \<text> 中的 \<from> 字符串替换成 \<to> 。

```makefile
$(subst <from>,<to>,<text>)
```

示例

```makefile
$(subst ee,EE,feet on the street)
```

### 字符串处理函数 - 模式字符串替换函数(`patsubst`)

查找 \<text> 中的单词（**单词以空格、Tab或回车换行分隔**）是否符合模式 \<pattern>。匹配，则以 \<replacement> 替换。

```makefile
$(patsubst <pattern>,<replacement>,<text>)
```

* 示例

```makefile
$(patsubst %.c,%.o,x.c.c bar.c)
```

把字串 x.c.c bar.c 符合模式 %.c 的单词替换成 %.o ，返回结果是 x.c.o bar.o

### 字符串处理函数 - 去空格函数(`strip`)

去掉 <string> 字串中开头和结尾的空字符。

```makefile
$(strip <string>)
```

示例

```makefile
$(strip a b c )
```

把字串 `a b c` 去掉开头和结尾的空格，结果是 a b c。

### 字符串处理函数 - 查找字符串函数(`findstring`)

在字串 \<in> 中查找 \<find> 字串。

```makefile
$(findstring <find>,<in>)
```

示例：

```makefile
$(findstring a,a b c)
$(findstring a,b c)
```

第一个函数返回 a 字符串，第二个返回空字符串

### 字符串处理函数 - 过滤函数(`filter`)

以 \<pattern> 模式过滤 \<text> 字符串中的单词，保留符合模式 \<pattern> 的单词。可以有多个模式。

```makefile
$(filter <pattern...>,<text>)
```

示例

```makefile
sources := foo.c bar.c baz.s ugh.h
foo: $(sources)
    cc $(filter %.c %.s,$(sources)) -o foo
$(filter %.c %.s,$(sources)) 
# 返回的值是 foo.c bar.c baz.s
```

### 字符串处理函数 - 反过滤函数(`filter-out`)

以 \<pattern> 模式过滤 \<text> 字符串中的单词，去除符合模式 \<pattern> 的单词。可以有多个模式。

```makefile
$(filter-out <pattern...>,<text>)
```

示例：

```makefile
objects=main1.o foo.o main2.o bar.o
mains=main1.o main2.o
$(filter-out $(mains),$(objects)) 
# 返回值是 foo.o bar.o 。
```

### 字符串处理函数 - 排序函数(`sort`)

给字符串 \<list> 中的单词排序（升序）。

```makefile
$(sort <list>)
```

* 示例：`$(sort foo bar lose)` 返回 `bar foo lose`
* 注意：sort 函数会去掉 `<list>` 中相同的单词

### 字符串处理函数 - 取单词函数（`word`)

取字符串 \<text> 中第 \<n> 个单词。（从一开始）

```makefile
$(word <n>,<text>)
```

示例：`$(word 2, foo bar baz)` 返回值是 `bar`

### 字符串处理函数 - 取单词串函数(`wordlist`)

* 从字符串 \<text> 中取从 \<s> 开始到 \<e> 的单词串。\<s> 和 \<e> 是一个数字。

```makefile
$(wordlist <ss>,<e>,<text>)
```

示例：`$(wordlist 2, 3, foo bar baz)` 返回值是 bar baz。

### 字符串处理函数 - 单词个数统计函数(`words`)

* 统计 \<text> 中字符串中的单词个数。

```makefile
$(words <text>)
```

* 示例：`$(words, foo bar baz)` 返回值是 3。

### 字符串处理函数 - 首单词函数(`firstword`)

* 取字符串 \<text> 中的第一个单词。

```makefile
$(firstword <text>)
```

* 示例：`$(firstword foo bar)` 返回值是 `foo`

### 文件名操作函数
<!--rehype:wrap-class=row-span-2-->

#### 取目录函数(`dir`)

从文件名序列 \<names> 中取出目录部分。目录部分是指最后一个反斜杠（`/`）之前的部分。如果没有反斜杠，那么返回 `./`。

```makefile
$(dir <names...>)
```

---

```makefile
$(dir src/foo.c hacks) 
#返回值是 src/ ./
```

#### 取文件函数(`notdir`)

从文件名序列 \<names> 中取出非目录部分。非目录部分是指最後一个反斜杠（`/`）之后的部分。

```makefile
$(notdir <names...>)
```

---

```makefile
$(notdir src/foo.c hacks)
# 返回值是 foo.c hacks
```

#### 取后缀函数（`suffix`)

从文件名序列 \<names> 中取出各个文件名的后缀

```makefile
$(suffix <names...>)
```

---

```makefile
$(suffix src/foo.c src-1.0/bar.c hacks)
# 返回值是 .c .c
```

#### 取前缀函数(`basename`)

从文件名序列 \<names> 中取出各个文件名的前缀部分。

```makefile
$(basename <names...>)
```

---

```makefile
$(basename src/foo.c src-1.0/bar.c hacks) 
# 返回值是 src/foo src-1.0/bar hacks
```

#### 加后缀函数(`addsuffix`)

把后缀 \<suffix> 加到 \<names> 中的每个单词后面

```makefile
$(addsuffix <suffix>,<names...>)
```

---

```makefile
$(addsuffix .c,foo bar)
# 返回值是 foo.c bar.c 
```

#### 加前缀函数(`addprefix`)

把前缀 \<prefix> 加到 \<names> 中的每个单词前面。

```makefile
$(addprefix <prefix>,<names...>)
```

---

```makefile
$(addprefix src/,foo bar)
# 返回值是 src/foo src/bar 。
```

#### 连接函数(`join`)

把 \<list2> 中的单词对应地加到 \<list1> 的单词后面。

```makefile
$(join <list1>,<list2>)
```

---

```makefile
$(join aaa bbb , 111 222 333)
# 返回值是 aaa111 bbb222 333 。
```

### 其它函数
<!--rehype:wrap-class=col-span-2-->

#### foreach 函数

```makefile
$(foreach <var>,<list>,<text>)
```

---

```makefile
# $(name) 中的单词会被挨个取出，并存到变量 n 中，
# $(n).o 每次根据 $(n) 计算出一个值，这些值以空格分隔，最后作为 foreach 函数的返回
names := a b c d
files := $(foreach n,$(names),$(n).o)
run:
	echo $(files)
```

#### if 函数

与之前的条件语句——`ifeq` 类似

```makefile
$(if <condition>,<then-part>)
# 或者
$(if <condition>,<then-part>,<else-part>)
```

#### call 函数

call 函数是唯一一个可以用来创建新的参数化的函数。

```makefile
$(call <expression>,<parm1>,<parm2>,...,<parmn>)
```

---

```makefile
reverse =  $(2) $(1)

foo = $(call reverse,a,b)

run:
	echo $(foo)
# b a
```

#### shell 函数

使用操作系统 Shell 的命令

```makefile
contents := $(shell cat foo)
files := $(shell echo *.c)
```

#### 控制 make 的函数

```makefile
$(error <text ...>)
# and
$(warning <text ...>)
```

#### origin 函数

```makefile
$(origin <variable>)
```

origin 函数用于告诉这个变量的从何而来

:-              | :-
:-              | :-
`undefined`     | 如果 \<variable> 未定义，返回 `undefined`
`default`       | 如果 \<variable> 是默认的，如 `CC`
`environment`   | 如果 \<variable> 是环境变量，并且当 Makefile 执行时，-e 参数没有被打开
`file`          | 如果 \<variable> 这个变量被定义在 Makefile 中。
`command line`  | 如果 \<variable> 这个变量是被命令行定义的。
`override`      | 如果 \<variable> 是被 override 指示符重新定义的。
`automatic`     | 如果 \<variable> 是一个命令运行中的自动化变量
<!--rehype:className=left-align-->

另见
---

* [make 中文教程](https://seisman.github.io/how-to-write-makefile/overview.html) _(seisman.github.io)_
* [make 手册](https://www.gnu.org/software/make/manual/make.html#toc-Overview-of-make) _(<www.gnu.org>)_
* [make 官网](https://www.gnu.org/software/make/) _<www.gnu.org>_
