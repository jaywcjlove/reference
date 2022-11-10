Screen 备忘清单
====

这是 screen 命令的快速参考指南备忘单。

入门
----

### 快速开始

```shell
$ screen 
```

---

1\. 按 <kbd>Ctrl-A</kbd> <kbd>D</kbd> 分离会话

---

2\. 列出所有屏幕会话

```shell
$ screen -ls
```

3\. 重新附加屏幕会话

```shell
$ screen -r <name/pid>
```

### 选项
<!--rehype:wrap-class=col-span-2-->

选项 | 示例 | 说明
:-|:-|:-
`-S`    | screen -S debug                       | 使用会话名称启动新会话
`-ls`   | screen -ls                            | 列出正在运行的会话/屏幕
`-x`    | screen -x                             | 附加到正在运行的会话
`-r`    | screen -r debug                       | 使用名称附加到正在运行的会话
`-R`    | screen -R debug                       | 附加到会话 _(如果它不存在将创建)_
`-d`    | screen -d -m wget xxxx.com/large.file | 分离模式下的开始屏幕
`-X`    | screen -X -S debug kill               | 终止正在运行的会话
<!--rehype:className=show-header-->

### 进入

Command | Description
:-|:-
`screen -S <name>` | 使用会话名称开始新的屏幕会话
`screen -ls`       | 列出正在运行的会话/屏幕
`screen -x`        | 附加到正在运行的会话
`screen -r <name>` | 使用名称附加到正在运行的会话
`screen -dRR`      | “终极附加”

### 窗口管理
<!--rehype:wrap-class=col-span-2 row-span-2-->

Command | Description
:-|:-
`Ctrl-A` `C`                           | 创建新窗口
`Ctrl-A` `Ctrl-A`                      | 更改为上次访问的活动窗口
`Ctrl-A` `0...9`                       | 按编号切换到窗口
`Ctrl-A` `'` `<0...9 or title>`        | 按编号或名称更改为窗口
`Ctrl-A` `N` or `Ctrl-A` `<space>`     | 切换到列表中的下一个窗口
`Ctrl-A` `P` or `Ctrl-A` `<backspace>` | 切换到列表中的上一个窗口
`Ctrl-A` `"`                           | 查看窗口列表
`Ctrl-A` `W`                           | 显示窗口栏
`Ctrl-A` `K`                           | 杀死当前窗口 _(不推荐)_
`Ctrl-A` `\`                           | 杀死所有窗口 _(不推荐)_
`Ctrl-A` `A`                           | 重命名当前窗口
<!--rehype:className=shortcuts-->

### 出去

Command | Description
:-|:-
`Ctrl-A` `D`     | 分离
`Ctrl-A` `D` `D` | 分离和注销 <br> _(快速退出)_
`Ctrl-A` `:`     | 退出所有会话
`Ctrl-A` `C-\`   | 强制退出屏幕<br> _(不推荐)_
<!--rehype:className=shortcuts-->

### 帮助

| Command      | Description                    |
|--------------|--------------------------------|
| `Ctrl-A` `?` | 查看帮助 _(列出键绑定)_ |
<!--rehype:className=shortcuts-->

### 杂项
<!--rehype:wrap-class=col-span-2 row-span-2-->

Command | Description
:-|:-
`Ctrl-A` `C-l`    | 重绘窗口
`Ctrl-A` `[`      | 复制模式
`Ctrl-A` `ESC`    | 复制模式
`Ctrl-A` `]`      | 粘贴
`Ctrl-A` `M`      | 活动监控窗口
`Ctrl-A` `_`      | 静音监控窗口
`Ctrl-A` `Ctrl-V` | 输入二合字母 _(非 ASCII 字符)_
`Ctrl-A` `X`      | 锁定（密码保护）显示
`Ctrl-A` `:`      | 输入屏幕命令
`Ctrl-A` `H`      | 在屏幕会话中启用日志记录
<!--rehype:className=shortcuts-->

### 分屏

Command | Description
:-|:-
`Ctrl-A` `S`   | 水平分割显示
`Ctrl-A` `V`   | 垂直分割显示
`Ctrl-A` `\|`   | 垂直拆分显示
`Ctrl-A` `TAB` | 跳转到下一个显示区域
`Ctrl-A` `X`   | 删除当前区域
`Ctrl-A` `Q`   | 删除除当前区域之外的所有区域
<!--rehype:className=shortcuts-->

### 滚动

Command | Description
:-|:-
`Ctrl-a esc` | 进入滚动模式
`Ctrl-u`     | 向上滑动
`Ctrl-d`     | 向下滚动
`esc esc`    | 退出滚动模式
<!--rehype:className=shortcuts-->

### 屏幕技巧

[SSH](./ssh.md) 并附加在一行中

```shell
$ ssh -t user@host screen -x <name/pid>
```
