Sublime Text 备忘清单
===

这个 [Sublime Text](https://www.sublimetext.com/) 快速参考备忘单显示了它的键盘快捷键和命令。

## 快捷键

### 文本编辑初学者
<!--rehype:wrap-class=row-span-3-->

[Sublime Text](https://www.sublimetext.com/) 是一个用于代码、标记的复杂文本编辑器。

快捷键 | 说明
:- | -
`⌘ D`    | 选择单词(重复包括单词的下一个实例)
`⌘ L`    | 选择行(重复以包括下一行)
`⌘ ⇧ L`  | 将选择拆分为多行(多行编辑)
`⌘ ⇧ A`  | 选择标签内的文本(重复以展开)
`⌃ ⇧ M`  | 选择大括号或尖括号(重复展开)
`⌘ X`    | 剪切一行
`⌃ M`    | 转到匹配的括号
`⌃ ↩︎` or `↩︎`  | 在后面插入行
`⌘ ↵`     | 在后面插入行
`⇧ ⌘ ↵`   | 在前面插入行
`⇧ ⌥ ▲`   | 选择当前行光标之前
`⇧ ⌥ ▼`   | 选择当前行光标之后
`⇧ ⌃ M`   | 选择当前括号的所有内容
`⌥ ⇠/⇢`   | 进行逐词移动，相应的
`⌥ ⇧ ⇠/⇢` | 进行逐词选择
`⌘ U`     | 返回到历史光标位置(撤销)
`⌃ M`     | 快速的在起始括号和结尾括号间切换
`⌃ ⇧ M`   | 则可以快速选择括号间的内容
`⌃ ⇧ J`   | 对于缩进型语言(例如Python)可以使用
`⌃ ⌘ D`   | 复制整行
<!--rehype:className=shortcuts-->

查看：[Sublime Text](https://www.sublimetext.com/) 官网

### 代码折叠

快捷键 | 说明
:- | -
`⌘ Alt [` | 折叠最近的块
`⌘ Alt ]` | 展开最近的块
`⌘ K ⌘ 1` | 折叠所有第一级代码块
`⌘ K ⌘ 2` | 折叠所有二级代码块
`⌘ K ⌘ 3` | 折叠所有第三级代码块（等）
`⌘ K ⌘ T` | 折叠所有 HTML 属性
`⌘ K ⌘ 0` | 展开一切
`⌘ K 0`   | 代码展开
<!--rehype:className=shortcuts-->

### macOS 键盘符号

快捷键 | 说明
:- | -
`⌘`  | Command()  
`⌃`  | Control  
`⌥`  | Option(alt)  
`⇧`  | Shift  
`⇪`  | Caps Lock(大写)
`fn` | 功能键就是fn  
`↩︎`  | return/Enter
<!--rehype:className=shortcuts-->

### 编辑

快捷键 | 说明
:- | -
`⌘ ⇧ D` | 复制当前行/选择
`⌘ ⇧ K` | 删除当前行/选择
`⇧ del` | 删除当前行/选择
`⌘ ⇧ ▲` | 移动队列
`⌘ ⇧ ▼` | 下移一行
`⌘ ▼/▲`| 移动到首行/尾行
<!--rehype:className=shortcuts-->

### 转到

快捷键 | 说明
:- | -
`⌘ P`    | 去任何地方
`⌘ G`    | 转到行号
`⌘ R`    | 转到符号
`⌘ P, :` | 转到行号(`:`之后输入数字)
`⌘ P, #` | 转到并列出字符串模糊匹配(`#`之后输入字符)
`⌘ P, @` | 转到并列出符号(`@`之后开始输入符号名称)
<!--rehype:className=shortcuts-->

### 选择(Selecting)

- `⌘ + D`  
      选择光标所在的单词，并高亮该词出现的所有位置
- `⌘ + D`  
    择该词出现的下一个位置
- `⌘ + U` 进行回退，使用Esc退
<!--rehype:className=style-timeline shortcuts-->

----

快捷键 | 说明
:- | -
`⌃ K` / `⌘ K K` | 从光标处删除到行末尾
<!--rehype:className=shortcuts-->

### 拆分窗口

快捷键 | 说明
:- | -
`⇧ ⌥ 2` | 将视图拆分为两列
`⇧ ⌥ 1` | 将视图还原为单列
`⇧ ⌥ 5` | 将视图设置为网格（4 组）
`⌃ 2`   | 跳到第 2 组
`⇧ ⌃ 2` | 将文件移动到组 2
<!--rehype:className=shortcuts-->

### 书签

快捷键 | 说明
:- | -
`Ctrl` `F2`  | 切换书签
`F2`  | 下一个书签
`Shift` `F2`  | 上一个书签
`Ctrl` `Shift` `F2`  | 清除书签
<!--rehype:className=shortcuts-->

### 查找/替换

快捷键 | 说明
:- | -
`Ctrl` `F`  | 查找
`Ctrl` `H`  | 代替
`Ctrl` `Shift` `F`  | 在文件中查找
<!--rehype:className=shortcuts-->

### 文本操作

快捷键 | 说明
:- | -
`⌃ K ⌃ L`        | 转换为小写
`⌃ K ⌃ U`        | 转换为大写
`⇧ ⌃ K`          | 删除行
`⌃BACKSPACE`     | 向后删除单词
`⌃DEL`           | 删除单词转发
<!--rehype:className=shortcuts-->

### 命令行中启动编辑器
<!--rehype:wrap-class=col-span-2-->

```bash
sudo ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl\
           /usr/local/bin/subl
```
<!--rehype:className=wrap-text -->

#### 在命令行中使用 **subl** 命令

```bash
$ subl .
$ subl README.md
```

软链放到这个目录 `/usr/local/bin/subl`，这是因为 `Rootless` 机制，不能存放到 ~~`/usr/bin/subl`~~ 位置。

另见
----

- [Sublime Text 官网](https://www.sublimetext.com/) _(sublimetext.com)_
- [Sublime 编辑器快捷键](https://jaywcjlove.github.io/handbook/Shortcuts/sublime.html) _(jaywcjlove.github.io)_
- [Keyboard shortcuts for Sublime Text](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_win.html) _(docs.sublimetext.info)_
