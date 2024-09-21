Tmux 备忘清单
===

最常用的快捷键和命令的 tmux 备忘单快速参考

Tmux CLI
-------

### 新会话
<!--rehype:wrap-class=row-span-2-->

开始一个新的会话

```bash
$ tmux
$ tmux new
$ tmux new-session

:new
```

开始一个名为 myname 的新会话

```bash
$ tmux new -s myname

:new -s myname
```

显示所有会话，或者 <kbd>Ctrl</kbd> + <kbd>b</kbd> + <kbd>s</kbd> 快捷键

```bash
$ tmux ls
$ tmux list-sessions
```

### 附加会话
<!--rehype:wrap-class=row-span-2-->

附加到上一个会话

```bash
$ tmux a
$ tmux at
$ tmux attach
$ tmux attach-session
```

附加到命名

```bash
$ tmux a -t myname
```

附加到名为 myname 的会话

```bash
$ tmux a -t myname
$ tmux at -t myname
$ tmux attach -t myname
$ tmux attach-session -t myname
```

### 终止会话

按名称终止会话

```bash
$ tmux kill-ses -t myname # 杀死/删除会话
$ tmux kill-session -t myname
```

杀死/删除除当前会话之外的所有会话

```bash
$ tmux kill-ses -a
```

杀死/删除除 myname 之外的所有会话

```bash
$ tmux kill-ses -a -t myname
```

### Tmux 帮助

```bash
$ tmux info
```

### 配置

重新加载配置

```bash
$ tmux source-file ~/.tmu­x.conf
```

显示配置

```bash
$ tmux show-options -g
```

### 复制模式

命令 | 描述
:- | -
`Ctrl+b` `[` | 进入复制模式
`<Space>`    | 开始选择
`Enter`      | 复制选择
`q`          | 退出复制模式
`Ctrl+b` `]` | 粘贴 buffer_0 的内容
<!--rehype:className=shortcuts-->

主要作用类似于在 [Vim](./vim.md#动作) 中选择文本

Tmux 快捷键
----------

### 入门
<!--rehype:style=background:rgb(245 158 11/1);-->

快捷键/命令 | 描述
:- | -
| `Ctrl+b` `?` | List all shortcuts |
<!--rehype:className=shortcuts show-header-->

----

显示每个会话、窗口、窗格等

```bash
$ tmux info
```

### 窗格（拆分）
<!--rehype:wrap-class=row-span-2-->

快捷键/命令 | 描述
:- | -
`Ctrl+b` `"` _/_ `%`   | 水平分割/垂直
`Ctrl+b` `!`           | 窗格 -> 窗口
`Ctrl+b` `x`           | 杀死窗格
`Ctrl+b` \<Arrow>      | 导航窗格
`Ctrl+b` \<Space>      | 切换布局
`Ctrl+b` `{` _/_ `}`   | 向左/向右移动
`Ctrl+b` `o`           | 转到下一个窗格
`Ctrl+b` `z`           | 切换全屏
`Ctrl+b` `;`           | 切换最后一个窗格
`Ctrl+b` `q`           | 显示号码
`Ctrl+b` `q` `0`...`9` | 转到 # 窗格
<!--rehype:className=shortcuts-->

### Window (Tabs)
<!--rehype:wrap-class=row-span-2-->

快捷键/命令 | 描述
:- | -
`Ctrl+b` `c`         | 创建窗口
`Ctrl+b` `p` _/_ `n` | 上一个/下一个窗口
`Ctrl+b` `"` _/_ `%` | 水平分割/垂直
`Ctrl+b` `w`         | 列表窗口
`Ctrl+b` `,`         | 重命名窗口
`Ctrl+b` `f`         | 查找窗口
`Ctrl+b` `l`         | 最后一个窗口
`Ctrl+b` `.`         | 移动窗口
`Ctrl+b` `&`         | 关闭窗口
`Ctrl+b` `0`...`9`   | 转到#窗口
<!--rehype:className=shortcuts-->

### 会话（Windows 组）

快捷键/命令 | 描述
:- | -
`Ctrl+b` `d`         | <red>从会话中分离</red>
`Ctrl+b` `s`         | 显示所有会话
`Ctrl+b` `$`         | 重命名会话
`Ctrl+b` `(` _/_ `)` | 上一届/下一届
<!--rehype:className=shortcuts-->

Tmux 命令模式
-----------

### 用法
<!--rehype:style=background:rgb(245 158 11/1);-->

快捷键/命令 | 描述
:- | -
`Ctrl+b` `:` | 进入命令模式
<!--rehype:className=shortcuts-->

### 调整大小

快捷键/命令 | 描述
:- | -
`resize-pane -D 20` | 缩小尺寸
`resize-pane -U 20` | 调整大小
`resize-pane -L 20` | 向左调整大小
`resize-pane -R 20` | 向右调整大小

### 清单

快捷键/命令 | 描述
:- | -
`list-keys`    | 所有命令
`list-panes`   | 所有窗格
`list-windows` | 所有窗口

### 复印

快捷键/命令 | 描述
:- | -
`list-buffers`       | 列出所有缓冲区
`show-buffer`        | 显示 #0 内容
`capture-pane`       | 窗格的副本
`choose-buffer`      | 显示和粘贴
`save-buffer a.txt`  | 保存到文件
`delete-buffer -b 1` | 删除缓冲区 1

### 环境

快捷键/命令 | 描述
:- | -
`set -g OPTION`        | 为所有会话设置
`setw -g OPTION`       | 为所有窗口设置
`setw -g mode-keys vi` | 启用 vi 模式
`set -g prefix C-a`    | 设置前缀

### 杂项

快捷键/命令 | 描述
:- | -
`swap-pane -s 3 -t 1`    | 交换窗格
`swap-window -t -1`      | 向左移动
`setw synchronize-panes` | 同步窗格
`join-pane -t :#`        | 加入窗格

另见
---

- [Tmux 开源仓库](https://github.com/tmux/tmux) _(github.com)_
- [Tmux Cheat Sheet & Quick Reference](https://tmuxcheatsheet.com/) _(tmuxcheatsheet.com)_
