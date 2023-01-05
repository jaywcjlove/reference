ps 备忘清单
===

Linux 为我们提供了一个名为 `ps` 的实用程序，用于查看与系统上的进程相关的信息，它是 `Process Status` 的缩写
这份 `ps` 命令备忘清单的快速参考列表，包含常用选项和示例。

入门
---

### 语法
<!--rehype:wrap-class=row-span-4-->

```bash
$ ps [options]
```

命令运行示例，列出当前 shell 中的所有进程：

```bash
$ ps

  PID TTY          TIME CMD
12330 pts/0    00:00:00 bash
21621 pts/0    00:00:00 ps
```

---

:-- | --
:-- | --
`PID` | 唯一的进程 ID
`TTY` | 用户登录的终端类型
`TIME` | 进程运行的 CPU 数量，以分钟和秒为单位
`CMD` | 启动进程的命令的名称

注意：有时当我们执行 `ps` 命令时，它显示 `TIME` 为 `00:00:00`

---

ps 命令支持 3 种使用语法风格

- `Unix` 可以分组并以连字符开头
- `BSD` 可以分组但前面没有连字符
- `GNU` 长选项，前面有双连字符

### 示例
<!--rehype:wrap-class=row-span-3-->

Option | Function
:-- | --
`ps -ef / -aux` | 以完整格式列出当前正在运行的进程
`ps -ax` | 列出当前正在运行的进程
`ps -u <username>` | 列出特定用户的进程
`ps -C <command>` | 列出给定命令的进程
`ps -p <PID>` | 列出具有给定 PID 的进程
`ps -ppid <PPID>` | 列出具有给定 ppid 的进程
`pstree` | 在层次结构中显示过程
`ps -L` | 列出特定进程的所有线程
`ps --sort pmem` | 查找内存泄漏
`ps -eo` | 显示安全信息
`ps T` | 允许您仅选择与此终端关联的所有进程
`ps -U root -u root u` | 显示由 root 运行的进程
<!--rehype:className=code-nowrap-->

### 查看系统上的每个进程

要使用标准语法查看系统上的每个进程：

```bash
$ ps -e  # 列出所有进程
$ ps -ef
$ ps -eF
$ ps -ely
```

要使用 BSD 语法查看系统上的每个进程：

```bash
$ ps ax   # 以 BSD 格式列出所有进程
$ ps axu
```

### 打印进程树

```bash
$ ps -ejH
$ ps axjf
```

### 仅打印 PID 42 的名称

```bash
$ ps -q 42 -o comm=
```

### 获取有关线程的信息

```bash
$ ps -eLf
$ ps axms
```

### 列出当前用户拥有的所有进程

```bash
$ ps x
```

### 获取安全信息
<!--rehype:wrap-class=col-span-2-->

```bash
$ ps -eo euser,ruser,suser,fuser,f,comm,label
$ ps axZ
$ ps -eM
```

### 查看以 root 身份运行的每个进程

查看以 root 身份运行的每个进程（真实且有效的 ID）用户格式：

```bash
$ ps -U root -u root u
```

### 查看具有用户定义格式的每个进程
<!--rehype:wrap-class=col-span-2-->

```bash
$ ps -eo pid,tid,class,rtprio,ni,pri,psr,pcpu,stat,wchan:14,comm
$ ps axo stat,euid,ruid,tty,tpgid,sess,pgrp,ppid,pid,pcpu,comm
$ ps -Ao pid,tt,user,fname,tmout,f,wchan
```

### 仅打印 syslogd 的进程 ID

```bash
$ ps -C syslogd -o pid=
```

### 显示面向用户的格式
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
$ ps u

USER   PID  %CPU %MEM      VSZ    RSS   TT  STAT STARTED      TIME COMMAND
refs 11400   1.1  0.0 34853544   5816 s025  Ss   Tue02PM   0:02.82 /bin/zsh --login
refs 34561   0.6  0.0 34822644   3152 s016  S+   14Dec22 115:59.28 zsh (figterm)
refs 21377   0.5  0.0 34973972   7076 s028  S+   Wed09AM   4:32.19 zsh (figterm)
refs 78881   0.5  0.0 34843484   3256 s015  S+   17Dec22  90:27.10 zsh (figterm)
```

### 列出具有完整格式的进程

```bash
$ ps f
$ ps -F
```

### 显示虚拟内存格式

```bash
$ ps v
```

### 按有效用户 ID 或名称显示进程

```bash
$ ps -u user[name or id]
# OR
$ ps --user user[name or id]
$ ps -u root
```

按**真实**用户 ID 或名称显示进程

```bash
$ ps -U user[name or id]
# OR
$ ps --User user[name or id]
```

### 按实际组 ID 或名称显示进程

```bash
$ ps -G group[name or id]
# OR
$ ps --Group group[name or id]
```

### 隐藏 ps 命令输出的标题

```bash
$ ps h

  PID   TT  STAT      TIME COMMAND
33790 s000  S+   104:10.45 zsh (figterm)
33800 s001  Ss+    0:02.76 /bin/zsh --login
77830 s002  S+    90:22.51 zsh (figterm)
77840 s003  Ss     0:00.66 /bin/zsh --login
```

### 显示命令后的环境

```bash
$ ps e

  PID TTY      STAT   TIME COMMAND
  886 tty2     Ssl+   0:00 /usr/li....
```

### 重复 ps 命令输出的标题行

```bash
$ ps --headers -A
    PID TTY          TIME CMD
      1 ?        00:00:01 systemd
      2 ?        00:00:00 kthreadd
      3 ?        00:00:00 rcu_gp
```

### 显示进程树

```bash
$ ps --forest -A
   PID TTY          TIME CMD
     2 ?        00:00:00 kthreadd
     3 ?        00:00:00  \_ rcu_gp
     4 ?        00:00:00  \_ rcu_par_gp
   960 ?        00:00:00 \_ goa-identity-se
  1118 ?        00:00:00 \_ at-spi-bus-laun
  1124 ?        00:00:00 | \_ dbus-daemon
```

您可以使用 -H 选项打印进程层次结构

```bash
$ ps -H -A
PID TTY          TIME CMD
  2 ?        00:00:00 kthreadd
  3 ?        00:00:00   rcu_gp
1832 ?        00:00:37     gnome-terminal-
1840 pts/0    00:00:00       bash
1925 pts/1    00:00:00       bash
2867 pts/1    00:00:00         su
2868 pts/1    00:00:00           bash
```
