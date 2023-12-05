Taskset 备忘清单
===

`Taskset` 命令用于设置或检索给定pid的运行进程的CPU相关性，或启动具有给定CPU相关性的新命令

入门
----

### 使用

默认行为是使用给定的关联掩码运行新命令

```shell
$ taskset [mask] [command] [arguments]
```

#### 使用 #2

```shell
$ taskset -p [pid]
```

---------

```shell
$ taskset -p [mask] [pid]
```

您还可以检索现有任务的CPU相关性

### 常用选项
<!--rehype:wrap-class=col-span-2-->

命令 | 候补 | 含义
---|---|---
`-a`    | --all-tasks  | 设置或检索给定PID的所有任务（线程）的CPU相关性
`-c`    | --cpu-list   | 将掩码解释为处理器的数字列表，而不是位掩码</br>数字用逗号分隔，可能包括范围。例如：`0,5,8-11`
`-p`    | --pid        | 对现有PID进行操作，不要启动新任务
`-h`    | --help       | 显示帮助文本并退出
`-v`    | --version    | 打印版本并退出
<!--rehype:className=show-header-->

示例
--------

### 查看CPU相关性

```shell
$ taskset -cp 29523
pid 29523's current affinity list: 0-15
```

这意味着 PID `29523` 的进程在 CPU 范围 `[0,1,...,15]` 上处于活动状态，这意味着总共 `16`。

**PID**：进程标识符 - 是赋予每个正在运行的进程的唯一数字标识符，您可以在 `top` 或 `htop` 工具中查看进程的PID

_如果您运行上述命令但收到消息 `错误使用`，请尝试使用 PID = 1_

```shell
$ taskset -cp 1
```

### 设置 CPU 相关性

现在让我们尝试将进程设置到指定的CPU。 例如，我们有一个进程 PID = 14846

我们先看一下该进程的CPU相关性列表：

```shell
$ taskset -cp 14846
pid 14846's current affinity list: 0-15
```

#### 将 CPU 关联性更改为 1

```shell
$ taskset -cp 1 14846
pid 14846's current affinity list: 0-15
pid 14846's new affinity list: 1
```

正如我们所看到的，CPU 相关性发生了变化

### 设置多个值的CPU 相关性

这意味着新的CPU关联列表是`[0,1,2,3]`

```shell
$ taskset -cp 0-3 14846
pid 14846's current affinity list: 1
pid 14846's new affinity list: 0-3
```

您可以使用以下命令设置单个CPU：

```shell
$ taskset -cp 5,8,12 14846
pid 14846's current affinity list: 0-3
pid 14846's new affinity list: 5,8,12
```

这意味着新的CPU关联列表是`[5,8,12]`

### 将进程的CPU亲和性设置为特定的CPU核心

```bash
$ taskset -p <cpu_mask> <pid>
```

例如：`taskset -p 0x00000001 12345` 将进程ID为12345的进程的CPU亲和性设置为CPU核心 0。

### 获取进程的CPU亲和性

```bash
$ taskset -p <pid>
```

例如：`taskset -p 12345` 将显示进程ID为12345的进程的CPU亲和性。

### 启动一个新进程，并将其CPU亲和性设置为特定的CPU核心

```bash
$ taskset <cpu_mask> <command>
```

例如：`taskset 0x00000001 ./my_program` 将以CPU核心 0 的亲和性运行 ./my_program。

### 将已运行进程的CPU亲和性移动到特定的CPU核心

```bash
$ taskset -p -c <cpu_list> <pid>
```

例如：`taskset -p -c 0,1 12345` 将进程ID为12345的进程的CPU亲和性移动到CPU核心 0 和 1。

### 指定进程只能在指定的CPU核心上运行（排他性）

```bash
$ taskset -p --exclusive <cpu_mask> <pid>
```

例如：`taskset -p --exclusive 0x00000001 12345` 将进程ID为12345的进程限制在CPU核心 0 上运行。

### 将所有已运行进程的CPU亲和性设置为特定的CPU核心

```bash
$ taskset -a -p <cpu_mask>
```

例如：`taskset -a -p 0x00000001` 将所有进程的CPU亲和性设置为CPU核心 0。

### 在启动新进程时设置CPU亲和性，并指定优先级
<!--rehype:wrap-class=col-span-2-->

```bash
$ taskset -c <cpu_mask> nice -n <priority> <command>
```

例如：`taskset -c 0x00000001 nice -n 10 ./my_program` 将以 CPU 核心 `0` 的亲和性和优先级 `10` 运行 `./my_program`。

### 切换已运行进程的CPU亲和性到其他CPU核心

```bash
$ taskset -p <cpu_mask> -P <pid>
```

例如：`taskset -p 0x00000001 -P 12345` 将进程ID为12345的进程的CPU亲和性切换到CPU核心 0。

### 将已运行进程的CPU亲和性移动到随机选取的可用CPU核心

```bash
$ taskset -p --cpu-list - <pid>
```

例如：

```bash
$ taskset -p --cpu-list - 12345
```

将进程ID为12345的进程的CPU亲和性移动到一个可用的CPU核心。

### 使用CPU亲和性运行命令，并显示其CPU使用情况

```bash
$ taskset <cpu_mask> <command> &
top -p <pid>
```

例如：

```bash
$ taskset 0x00000001 ./my_program &
top -p $(pgrep my_program)
```

将以CPU核心 `0` 的亲和性运行 `./my_program`，并显示该进程的CPU使用情况。

### 其他

您可以通过范围设置与其他类似指定CPU的相关性

```shell
$ taskset -cp 1-3,12 14846
```

或

```shell
$ taskset -cp 1-6:2 14846
```

后缀 `:N` 指定范围内的步幅，例如 `0-10:3` 被解释为 `0,3,6,9` 列表。

另见
----

[taskset — Linux manual page](https://man7.org/linux/man-pages/man1/taskset.1.html) _(man7.org)_
