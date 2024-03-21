Emacs 备忘清单
====

[Emacs](https://www.gnu.org/software/emacs) 是可扩展的、可定制的、自记录的实时显示文本编辑器。此参考适用于 Emacs 27+

入门
----

### 启动 Emacs

要进入 Emacs，只需输入其名称：

```shell
$ emacs
```

------

:- | :-
:- | :-
`C-z`       | 挂起 Emacs
`C-x` `C-c` | 永久退出 Emacs
<!--rehype:className=shortcuts-->

### 全局描述

:- | :-
:- | :-
`C-<key>` | 表示按住控件，然后按 `<key>`
`M-<key>` | 表示按 `Esc` 一次，然后按 `<key>`
<!--rehype:className=shortcuts-->

注意：本备忘单遵循上述规则

### 移动
<!--rehype:wrap-class=row-span-2-->

返回  | 向前   | 要移动的实体
:- | :- | :-
`C-b`     | `C-f`     | Haracter
`M-b`     | `M-f`     | 单词
`C-p`     | `C-n`     | 线
`C-a`     | `C-e`     | 行开头<br/>_（或结尾）_
`M-a`     | `M-e`     | 句子
`M-{`     | `M-}`     | 段落
`C-x` `[` | `C-x` `]` | 页
`C-M-b`   | `C-M-f`   | Sexp
`C-M-a`   | `C-M-e`   | 功能
`M-<`     | `M->`     | 缓冲区开始<br>_（或结束）_
<!--rehype:className=shortcuts show-header-->

### 案例变更

:- | :-
:- | :-
`M-u`       | 大写单词
`M-l`       | 小写单词
`M-c`       | 大写单词
`C-x` `C-u` | 大写区域
`C-x` `C-l` | 小写区域
<!--rehype:className=shortcuts-->

### 文件

:- | :-
:- | :-
`C-x` `C-f` | 将文件读入 Emacs
`C-x` `C-s` | 将文件保存回磁盘
`C-x` `s`   | 保存所有文件
`C-x` `i`   | 将另一个文件的内容插入此缓冲区
`C-x` `C-v` | 将此文件替换为您的文件
`C-x` `C-w` | 将缓冲区写入指定文件
`C-x` `C-q` | 切换缓冲区的只读状态
<!--rehype:className=shortcuts-->

### 错误恢复

:- | :-
:- | :-
`C-g`                       | 中止部分键入或执行的命令
`M-x` recover-session       | 恢复因系统崩溃而丢失的文件
`C-x` `u` `C-_` `C-/`       | 撤消不需要的更改
`M-x` revert-buffer         | 将缓冲区恢复到其原始内容
`C-l`                       | 重绘垃圾屏幕
<!--rehype:className=shortcuts-->

### Transposing
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`C-t`       | 转置字符
`M-t`       | 转置词
`C-x` `C-t` | 转置线
`C-M-t`     | 转置性别
<!--rehype:className=shortcuts-->

#### Scroll

:- | :-
:- | :-
`C-v`     | 滚动到下一个屏幕
`M-v`     | 滚动到上一个屏幕
`C-x` `<` | 向左滚动
`C-x` `>` | 向右滚动
`C-l`     | 将当前行滚动到 <br> _center, top, bottom_
<!--rehype:className=shortcuts-->

#### 跳转

:- | :-
:- | :-
`M-g` `g` | 转到行
`M-g` `c` | 转到字符
`M-m`     | 返回缩进
<!--rehype:className=shortcuts-->

### 标记

:- | :-
:- | :-
`C-@` `C-SPC`     | 在标记在这里
`C-x` `C-x`       | 交换点和标记
`M-@`             | 设置标记 arg 单词
`M-h`             | 标记段落
`C-x` `C-p`       | 标记页面
`C-M-@`           | 标记性
`C-M-h`           | 标记功能
`C-x` `h`         | 标记整个缓冲区
<!--rehype:className=shortcuts-->

### 杀死和删除
<!--rehype:wrap-class=row-span-2-->

向后 | 向前 | 要杀死的实体
:- | :- | :-
`DEL`         | `C-d`   | 字符 <br>_(删除)_
`M-DEL`       | `M-d`   | 单词
`M-0` `C-k`   | `C-k`   | 行 <br/> _(到结尾)_
`C-x` `DEL`   | `M-k`   | 句子
`M--` `C-M-k` | `C-M-k` | 性爱
<!--rehype:className=shortcuts show-header-->

#### 杀死

:- | :-
:- | :-
`C-W`      | 杀死区域 C-w
`M-w`      | 复制区域杀死环
`M-z` char | 杀死下一次出现的字符
`C-y`      | 拉回最后一个被杀的东西
`M-y`      | 用之前的杀戮替换最后的猛拉
<!--rehype:className=shortcuts-->

### 获得帮助

:- | :-
:- | :-
`C-x` `1` | 删除帮助窗口
`C-M-v`   | 滚动帮助窗口
`C-h` `a` | Apropos：显示匹配字符串的命令
`C-h` `k` | 描述一个键运行的功能
`C-h` `f` | 描述一个函数
`C-h` `m` | 获取特定于模式的信息
<!--rehype:className=shortcuts-->

帮助系统很简单。键入 `C-h`（或 `F1`）并按照说明进行操作。如果您是第一次使用，请键入 `C-h` `t` 以获得教程

### 多个窗口
<!--rehype:wrap-class=col-span-2 row-span-2-->

当显示两个命令时，第二个命令是用于框架而不是窗口的类似命令

:- | :- | :-
:- | :- | :-
`C-x` `5` `1` | `C-x` `1` | 删除所有其他窗口
`C-x` `5` `2` | `C-x` `2` | 拆分窗口，上方和下方
`C-x` `5` `0` | `C-x` `0` | 删除此窗口
<!--rehype:className=shortcuts-->

:- | :- | :-
:- | :- | :-
&nbsp; | `C-x` `3`     | 拆分窗口，并排
&nbsp; | `C-M-v`       | 滚动其他窗口
<!--rehype:className=shortcuts-->

:- | :- | :-
:- | :- | :-
`C-x` `5` `o`   | `C-x` `o`       | 将光标切换到另一个窗口
`C-x` `5` `b`   | `C-x` `4` `b`   | 在其他窗口中选择缓冲区
`C-x` `5` `C-o` | `C-x` `4` `C-o` | 在其他窗口中显示缓冲区
`C-x` `5` `f`   | `C-x` `4` `f`   | 在其他窗口中查找文件
`C-x` `5` `r`   | `C-x` `4` `r`   | 在其他窗口中以只读方式查找文件
`C-x` `5` `d`   | `C-x` `4` `d`   | 在其他窗口中运行 Dired
`C-x` `5` `.`   | `C-x` `4` `.`   | 在其他窗口中查找标签
<!--rehype:className=shortcuts-->

:- | :- | :-
:- | :- | :-
&nbsp;  | `C-x` `^`     | 让窗户变高
&nbsp;  | `C-x` `{`     | 缩小窗口
&nbsp;  | `C-x` `}`     | 让窗口变宽
<!--rehype:className=shortcuts-->

### 格式化

:- | :-
:- | :-
`TAB`       | 缩进当前行（取决于模式）
`C-M-\`     | 缩进区域（取决于模式）
`C-M-q`     | 缩进 sexp（取决于模式）
`C-x` `TAB` | 缩进区域刚性 arg 列
`M-;`       | 缩进评论
`C-o`       | 在点后插入换行符
`C-M-o`     | 将其余行垂直向下移动
`C-x` `C-o` | 删除点周围的空行
`M-^`       | 与上一个加入行（带 arg，下一个）
`M-\`       | 删除点周围的所有空白
`M-SPC`     | 在点上正好放一个空格
`M-q`       | 填写段落
`C-x` `f`   | 将填充列设置为 arg
`C-x` `.`   | 设置每行开头的前缀
`M-o`       | 设置面
<!--rehype:className=shortcuts-->

### 信息
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`C-h` `i` | 输入信息文档阅读器
`C-h` `S` | 在 Info 中查找指定的函数或变量
<!--rehype:className=shortcuts-->

#### 在节点内移动

:- | :-
:- | :-
`SPC` | 向前滚动
`DEL` | 反向滚动
`b`   | 节点的开始
<!--rehype:className=shortcuts-->

#### 在节点之间移动

:- | :-
:- | :-
`n` | 下一个节点
`p` | 上一个节点
`u` | 提升
`m` | 按名称选择菜单项
`n` | 按编号 (1–9) 选择第 n 个菜单项
`f` | 遵循交叉引用（用 l 返回）
`l` | 返回您看到的最后一个节点
`d` | 返回目录节点
`t` | 转到信息文件的顶部节点
`g` | 按名称转到任何节点
<!--rehype:className=shortcuts-->

#### 其他

:- | :-
:- | :-
`h` | 运行信息教程
`i` | 在索引中查找主题
`s` | 搜索节点以查找正则表达式
`q` | 退出信息
<!--rehype:className=shortcuts-->

### 小缓冲区
<!--rehype:wrap-class=row-span-2-->

以下键在 `minibuffer` 中定义

:- | :-
:- | :-
`TAB` | 尽可能完成
`SPC` | 最多完成一个单词
`RET` | 完成并执行
`?`   | 显示可能的完成
`M-p` | 获取先前的 `minibuffer` 输入
`M-n` | 获取稍后的 `minibuffer` 输入或默认值
`M-r` | 正则表达式向后搜索历史
`M-s` | 正则表达式向前搜索历史
`C-g` | 中止命令
<!--rehype:className=shortcuts-->

键入 `C-x` `ESC` `ESC` 以编辑并重复使用 `minibuffer` 的最后一个命令。键入 `F10` 以激活文本终端上的菜单栏项

### 标签

:- | :-
:- | :-
`M-.`                    | 查找标签（定义）
`C-u` `M-.`              | 查找标签的下一个出现
`M-x` visit-tags-table   | 指定一个新的标签文件
`M-x` tags-search        | 正则表达式搜索标签表中的所有文件
`M-x` tags-query-replace | 对所有文件运行查询替换
`M-,`                    | 继续最后一个标签搜索或查询替换
<!--rehype:className=shortcuts-->

### 缓冲器

:- | :-
:- | :-
`C-x` `b`   | 选择另一个缓冲区
`C-x` `C-b` | 列出所有缓冲区
`C-x` `k`   | 杀死一个缓冲区
<!--rehype:className=shortcuts-->

### 矩形

:- | :-
:- | :-
`C-x` `r` `r` | 复制矩形进行注册
`C-x` `r` `k` | 杀死矩形
`C-x` `r` `y` | 拉长矩形
`C-x` `r` `o` | 打开矩形，向右移动文本
`C-x` `r` `c` | 空白矩形
`C-x` `r` `t` | 用字符串为每一行添加前缀
<!--rehype:className=shortcuts-->

### 键盘宏

:- | :-
:- | :-
`C-x` `(`                 | 开始定义键盘宏
`C-x` `)`                 | 结束键盘宏定义
`C-x` `e`                 | 执行最后定义的键盘宏
`C-u` `C-x` `(`           | 附加到最后一个键盘宏
`M-x` name-last-kbd-macro | 命名最后一个键盘宏
`M-x` insert-kbd-macro    | 在缓冲区中插入 Lisp 定义
<!--rehype:className=shortcuts-->

Emacs 搜索
------

### 正则表达式（常用）
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`.` `(dot)`   | 除换行符外的任何单个字符
`*`           | 零次或多次重复
`+`           | 一次或多次重复
`?`           | 零次或一次重复
`\`           | 引用特殊字符
`\c`          | 引用正则表达式特殊字符 c
`\|`          | 替代（“或”）
`\(...\)`     | 分组
`\(:?...\)`   | 害羞的分组
`\(:NUM...\)` | 显式编号分组
`\n`          | 与第 n 组相同的文本
`\b`          | 在断字时
`\B`          | 不在断字

### 正则表达式（条目）

开始 | 结束 | 实体
:- | :- | :-
`^`   | `$`   | 行
`\<`  | `\>`  | 单词
`\_<` | `\_>` | 象征
`\‘`  | `\’`  | 缓冲
<!--rehype:className=show-header-->

### 正则表达式（冲突）

这些 | 其他 | class
:- | :- | :-
`[...]` | `[^...]` | 显式集
`\w`    | `\W`     | 单词语法字符
`\sc`   | `\Sc`    | 具有语法 c 的字符
`\cc`   | `\Cc`    | 类别 c 的字符
<!--rehype:className=show-header-->

### 增量搜索

:- | :-
:- | :-
`C-s`   | 向前搜索
`C-r`   | 向后搜索
`C-M-s` | 正则表达式搜索
`C-M-r` | 反向正则表达式搜索
`M-p`   | 选择上一个搜索字符串
`M-n`   | 选择下一个稍后搜索字符串
`RET`   | 退出增量搜索
`DEL`   | 最后一个字符的撤消效果
`C-g`   | 中止当前搜索
<!--rehype:className=shortcuts-->

再次使用 `C-s` 或 `C-r` 在任一方向重复搜索。 如果 Emacs 仍在搜索，`C-g` 只取消不匹配的部分

### 查询替换

:- | :-
:- | :-
`M-%`        | 以交互方式替换文本字符串
`M-x` regexp | 使用正则表达式
`SPC` / `y`  | 替换这个，继续下一个
`,`          | 换这个，别动
`DEL` / `n`  | 不更换就跳到下一个
`!`          | 替换所有剩余的匹配项
`^`          | 回到上一场比赛
`RET`        | 退出查询替换
`C-r`        | 进入递归编辑（C-M-c 退出）
<!--rehype:className=shortcuts-->

杂项
----

### Shell

:- | :-
:- | :-
`M-!`       | 执行一个shell命令
`M-&`       | 异步执行shell命令
`M-`        | 在区域上运行 shell 命令
`C-u` `M-`  | 通过 shell 命令过滤区域
`M-x` shell | 在window shell中启动一个shell
<!--rehype:className=shortcuts-->

### 国际字符集
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`C-x` `RET` `l`            | 指定主要语言
`M-x` list-input-methods   | 显示所有输入法
`C-\`                      | 启用或禁用输入法
`C-x` `RET` `c`            | 为下一个命令设置编码系统
`M-x` list-coding-systems  | 显示所有编码系统
`M-x` prefer-coding-system | 选择首选的编码系统
<!--rehype:className=shortcuts-->

### 寄存器

:- | :-
:- | :-
`C-x` `r` `s`   | 在寄存器中保存区域
`C-x` `r` `i`   | 将寄存器内容插入缓冲区
`C-x` `r` `SPC` | 将点的值保存在寄存器中
`C-x` `r` `j`   | 跳转到保存在寄存器中的点
<!--rehype:className=shortcuts-->

### 各种各样的

:- | :-
:- | :-
`C-u` num  | 数值参数
`M--`      | 否定论点
`C-q` char | 带引号的插页
<!--rehype:className=shortcuts-->

### 处理 Emacs Lisp 的命令

:- | :-
:- | :-
`C-x` `C-e`        | 评估点前的性
`C-M-x`            | 评估电流定义
`M-x` eval-region  | 评估区
`M-:`              | 读取和评估 minibuffer
`M-x` load-library | 从加载路径加载 Lisp 库
<!--rehype:className=shortcuts-->

### 简单的定制

:- | :-
:- | :-
`M-x` `customize` | 自定义变量和面

在 Emacs Lisp 中进行全局键绑定：

```emacs
(global-set-key (kbd "C-c g") ’search-forward)
(global-set-key (kbd "M-#") ’query-replace-regexp)
```
<!--rehype:className=wrap-text -->

### 缩写

:- | :-
:- | :-
`C-x` `a` `g`     | 添加全局缩写
`C-x` `a` `l`     | 添加模式本地缩写
`C-x` `a` `i` `g` | 为这个缩写添加全局扩展
`C-x` `a` `i` `l` | 为这个缩写添加模式本地扩展
`C-x` `a` `e`     | 显式扩展缩写
`M-/`             | 动态扩展前一个单词
<!--rehype:className=shortcuts-->

### 拼写检查

:- | :-
:- | :-
`M-$`               | 检查当前单词的拼写
`M-x` ispell-region | 检查区域内所有单词的拼写
`M-x` ispell-buffer | 检查整个缓冲区的拼写
`M-x` flyspell-mode | 切换即时拼写检查
<!--rehype:className=shortcuts-->

### 编写命令
<!--rehype:wrap-class=col-span-2-->

#### 语法

```emacs
(defun command-name (args)
"documentation" (interactive "template")
body)
```
<!--rehype:className=wrap-text -->

#### 示例

```emacs
(defun this-line-to-top-of-window (line)
    "Reposition current line to top of window.
With prefix argument LINE, put point on LINE."
    (interactive "P")
    (recenter (if (null line)
                  0
              (prefix-numeric-value line))))
```
