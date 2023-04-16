GDB 备忘清单
===

本清单提供了对 [GDB](https://en.wikipedia.org/wiki/GNU_Debugger) 的入门简要概述，以及 `GDB` 常用示例，完整文档参阅 [Debugging with gdb](https://www.eecs.umich.edu/courses/eecs373/readings/Debugger.pdf)，该文档最后有 `GDB index`，可以快速查找命令。

入门
---
<!--rehype:body-class=cols-2-->

### 常用命令
<!--rehype:wrap-class=row-span-2-->

`[]` 内为命令缩写

| 命令 `[缩写]`               | 说明       |
|:--------------------|:-----------|
| `help[h]` | **查看命令帮助**。如 `help run` |
| `run[r]` | **运行程序**。可搭配参数使用 |
| `start` | **运行程序，停在第一条执行语句**。可搭配参数使用 |
| `list[l]` | **查看程序源码** |
| `break[b]` | **设置断点**。可指定文件名、函数名和行号等参数来设置断点 |
| `watch` | **设置监视点**。当监视的变量发生更改时，程序会被中断 |
| `delete` | **删除断点等**。可用于删除断点、监视点、`display` 等 |
| `continue[c]` | **继续执行程序**。让程序继续执行，到下一个断点或程序结束 |
| `next[n]` | **单步执行程序，跳过函数调用** |
| `step[s]` | **单步执行程序，进入函数调用** |
| `finish` | **结束当前函数**。返回到函数调用点 |
| `kill` | **杀死当前的调试进程** |
| `backtrace[bt]` | **查看函数调用栈**。它会打印出当前的函数调用栈 |
| `frame[fr]` | **切换栈帧**。以查看该栈帧中的局部变量和参数等 |
| `info` | **查看程序状态信息**。例如断点、寄存器、线程、局部变量等 |
| `show` | **查看 `gdb` 配置信息**。与 `info` 不同， `show` 查看 `GDB` 本身的配置信息 |
| `set` | **设置变量值**。有时指定变量类型才能设置，如 `set *(int*)(&a) = 3` |
| `whatis` | **查看变量、函数类型**。例如，`whatis a` 可以显示变量 `a` 的类型 |
| `ptype` | **查看变量、函数类型**。会显示完整的结构体类型 |
| `print[p]` | **打印变量的值**。例如，`print x` 可以显示变量 `x` 的当前值 |
| `display` | **持续打印变量的值**。与 `print` 类似，但它会在每次停下时自动输出值 |
| `thread` | **切换线程**。例如，`thread 2` 切换到编号为 `2` 的线程 |
| `signal` | **向进程发送信号**。例如，`signal 9` 发送编号为 `9` 的信号 |
<!--rehype:className=left-align-->

### 启动调试

启动进程，不带参数

```bash
# gdb <program>
(gdb) run
```

启动进程，带参数 `<args>`

```bash
# gdb <program>
(gdb) run <args>
```

启动 `gdb` 时传入参数，`run` 就不用传入了

```bash
# gdb --args <program> 1 2 3
(gdb) run
```

通过 `set` 设置参数

```bash
# gdb <program>
(gdb) set args 1 2 3
(gdb) run
```

显示运行时将要或已经传递给程序的参数

```bash
(gdb) show args
```

在启动进程前，添加环境变量

```bash
(gdb) set env DEBUG 1
```

在启动进程前，清除环境变量

```bash
(gdb) unset env DEBUG
```

通过进程号 `123` 连接到正在运行的进程

```bash
(gdb) attach 123
```

### core dump 文件
<!--rehype:wrap-class=row-span-2-->

默认情况下，`linux` 系统中程序崩溃时也不会生成 `core dump` 文件，需要先启用

```bash
ulimit -c unlimited
echo "/tmp/core-%e-%p-%t" > /proc/sys/kernel/core_pattern
```

调试 `core` 文件

```bash
gdb program /tmp/core-file
```

### 查看源码
<!--rehype:wrap-class=row-span-2-->

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) list 30` | 查看第 `30` 行为中心的上下 `5` 行源码 |
| `(gdb) list main` | 查看 `main` 函数为中心的上下 `5` 行源码 |
| `(gdb) list file.c:30` | 查看 `file.c` 文件中 `30` 行的源码 |
| `(gdb) list file.c:main` | 查看 `file.c` 文件中 `main` 函数 |
| `(gdb) disassemble` | 查看当前可执行文件的汇编源码 |
| `(gdb) disassemble myfun` | 查看指定函数的汇编源码 |

### 流程控制
<!--rehype:wrap-class=row-span-2-->

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) step[s]` | 执行源码级别的单步进入操作 |
| `(gdb) stepi[si]` | 执行指令级别的单步进入操作 |
| `(gdb) next[n]` | 执行源码级别的单步跳过操作 |
| `(gdb) nexti[ni]` | 执行指令级别的单步跳过操作 |
| `(gdb) continue[c]` | 继续执行，到下一个断点或程序结束 |
| `(gdb) finish` | 运行完当前函数，并返回到函数调用点 |
| `(gdb) return` | 直接退出当前函数，不执行剩下代码块 |
| `(gdb) return expression` | 可以指定返回值的内容 |
| `(gdb) until` | 结束当前循环 |

### 断点命令
<!--rehype:wrap-class=row-span-2-->

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) break main` | 在所有名为 `main` 的函数处设置一个断点 |
| `(gdb) break test.c:12` | 在文件 `test.c` 的第 `12` 行设置断点 |
| `(gdb) break test.c:func` | 在文件 `test.c` 的 `func` 函数处设置断点 |
| `(gdb) rbreak regular-expression` | 在正则表达式匹配的函数名上设置断点 |
| `(gdb) break foo if a < 100` | 设置**条件断点**，条件满足才停止 |
| `(gdb) info break` | 列出所有断点位置、编号 |
| `(gdb) delete 2` | 删除指定编号的断点 |
| `(gdb) clear` | 删除刚才停止处的断点 |
| `(gdb) disable 1` | `disable` 指定编号的断点 |
| `(gdb) enable 1` | `enable` 指定编号的断点 |

### watch 命令

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) watch var` | 监视变量，当值变化时会输出新、旧值 |
| `(gdb) info break` | 列出断点，也包括 `watchpoint` |
| `(gdb) i watch` | 只列出 `watchpoint` |
| `(gdb) delete 1` | 删除指定的 `watchpoint` |

### 查看变量
<!--rehype:wrap-class=row-span-2-->

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) info args` | 查看传入参数信息 |
| `(gdb) info local` | 查看当前栈帧（函数）的本地变量 |
| `(gdb) print var` | 查看指定变量的值 |
| `(gdb) print/x var` | 以十六进制输出变量的值 |
| `(gdb) print ptr` | 假设 `int *ptr=&a`，输出变量 `a` 的地址 |
| `(gdb) print *ptr` | 假设 `int *ptr=&a`，输出变量 `a` 的值 |
| `(gdb) print *ptr@5` | 假设 `int ptr[5]`，输出数组的值 |
| `(gdb) display var` | 与 `print` 作用相同，但每次停下来都自动输出变量的值 |
| `(gdb) info display` | 列出所有设置了 `display` 的变量 |
| `(gdb) undisplay 1` | 与 `display` 相反，不能指定变量名，只能是编号 |
| `(gdb) delete display 1` | 与 `undisplay` 类似，通过编号取消显示 |
| `(gdb) whatis var` | 查看变量类型 |
| `(gdb) ptype var` | 比 `type` 更详细，会给出结构体的定义 |

### frame 栈帧

每当一个函数被调用时，一个新的栈帧 `frame` 就会被压入栈中，栈帧包含了该函数的局部变量、参数、返回地址和其他信息，当函数执行完毕后，这个栈帧会被弹出栈并销毁。

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) frame` | 显示当前栈帧和源代码行 |
| `(gdb) backtrace` | 打印出当前正在执行的所有栈帧 |
| `(gdb) backtrace 5` | 只显示最近调用的 `5` 个栈帧 |
| `(gdb) frame 2` | 切换到第 `2` 个栈帧，以查看信息 |
| `(gdb) up` | 切换到上一级调用栈帧 |
| `(gdb) down` | 切换到下一级调用栈帧 |

### 函数调用

`call` 和 `print` 调用的函数如果存在全局变量、静态变量的修改，在函数返回后会恢复到调用之前的值，这两个调用不会影响程序的状态

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) call func(a, b)` | 调用指定的函数，不影响主线程变量 |
| `(gdb) print func(a, b)` | 与 `call` 类似 |
| `(gdb) finish` | 结束当前运行的函数 |

### 信号
<!--rehype:wrap-class=row-span-2-->

`linux` 下使用 `kill -l` 查看信号编号与信号名，使用 `info signal` 查看信号的处理方式、描述等：

```bash
(gdb) info signal
Signal        Stop  Print   Pass to program Description

SIGHUP        Yes   Yes     Yes             Hangup
SIGINT        Yes   Yes     No              Interrupt
SIGQUIT       Yes   Yes     Yes             Quit
SIGILL        Yes   Yes     Yes             Illegal instruction
```

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) signal SIGKILL` | 向进程发送信号，用信号名或编号表示 |
| `(gdb) signal 9` | 向进程发送信号，用信号名或编号表示 |
| `(gdb) handle <signal> actions` | 指定信号的处理方式，选择如下，可以组合 |
| `stop/nostop` | 收到信号是否停止进程，类似断点 |
| `print/noprint` | 收到信号是否输出消息 |
| `pass/nopass` | 是否将信号传递给程序 |

### 线程

| 命令                | 说明       |
|:--------------------|:-----------|
| `(gdb) info threads` | 列出所有线程，标识当前所在线程 |
| `(gdb) thread 2` | 切换到编号为 `2` 的线程 |
| `(gdb) break file.c:23 thread all` | 在所有线程中相应的行上设置断点 |
| `(gdb) thread apply all command` | 让所有线程执行 `gdb` 命令 |
| `(gdb) thread apply ID1 ID2 command` | 让指定线程执行 `gdb` 命令 |
| `(gdb) set scheduler-locking off` | 所有线程都执行，这是默认值 |
| `(gdb) set scheduler-locking on` | 只让当前线程执行 |

另见
---

- [应用崩溃调试分析](https://carlyleliu.github.io/2022/%E5%BA%94%E7%94%A8%E5%B4%A9%E6%BA%83%E8%B0%83%E8%AF%95%E5%88%86%E6%9E%90)
