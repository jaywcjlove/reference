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

#### `$&`

`$%`: 仅当目标是函数库文件中，表示规则中的目标成员名

* windows 中是 `.lib` 文件
* unix 中是 `.a` 文件

<!--rehype:className=style-round-->

另见
---

* [make 中文教程](https://seisman.github.io/how-to-write-makefile/overview.html) _(seisman.github.io)_
* [make 手册](https://www.gnu.org/software/make/manual/make.html#toc-Overview-of-make) _(www.gnu.org)_
* [make 官网](https://www.gnu.org/software/make/) _www.gnu.org_
