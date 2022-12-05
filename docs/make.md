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

文件会以 `GNUmakefile`（不推荐使用）、`Makefile`、`makefile` 查找目录下的名称。

#### 自定义文件名称

```bash
$ make target -f NAME
```

我们可以使用 `-f NAME` 来指定需要编译的文件名

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

另见
---

* [make 中文教程](https://seisman.github.io/how-to-write-makefile/overview.html) _(seisman.github.io)_
* [make 手册](https://www.gnu.org/software/make/manual/make.html#toc-Overview-of-make) _(www.gnu.org)_
* [make 官网](https://www.gnu.org/software/make/) _www.gnu.org_
