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

如果你想让 make 不理那些无法读取的文件，而继续执.

```makefile
-include <filename>
```

另见
---

* [make 中文教程](https://seisman.github.io/how-to-write-makefile/overview.html) _(seisman.github.io)_
* [make 手册](https://www.gnu.org/software/make/manual/make.html#toc-Overview-of-make) _(www.gnu.org)_
* [make 官网](https://www.gnu.org/software/make/) _www.gnu.org_
