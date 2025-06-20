Yazi 备忘清单
===

这份快速参考备忘单提供了Yazi 快速的终端文件管理的简要概述，以及 Yazi的基本操作

入门
----

### 功能特点

- <code>**跨平台支持**</code>：Yazi 支持 Linux、macOS 和 Windows，提供一致的跨平台体验
- <code>**轻量高效**</code>：简洁设计，启动和操作快速，资源消耗低
- <code>**插件扩展**</code>：支持插件安装，灵活扩展功能
- <code>**文件操作**</code>：支持复制、剪切、粘贴、删除、重命名等操作，且支持批量和多选功能，提升效率

### 安装

| 系统 | 安装方法 |
| ----- | ----- |
| 使用 Cargo 安装 | `cargo install yazi` |
| Arch Linux | `yay -S yazi` |
| Debian/Ubuntu | 可以使用 `Cargo` 进行安装 |
| macOS (使用 Homebrew) | `brew install yazi` |
| Windows (使用 Carg) | `cargo install yazi` |
| Windows (使用 Scoop) | `scoop install yazi` |

### 使用方法

#### 命令启动 Yazi

```sh
yazi
```

#### 查看 Yazi 的帮助文档

```sh
yazi --help
```

## 常用的快捷键
<!--rehype:body-class=cols-2-->

### 导航

:- | :-
:- | :-
| `h` | 返回上一级目录 |
| `j` | 向下移动选中项 |
| `k` | 向上移动选中项 |
| `l` | 进入选中的目录或打开文件 |
<!--rehype:className=shortcuts-->

更多导航命令

| 快捷键                         | 操作说明                                                      |
| --------------------------- | --------------------------------------------------------- |
| `K`                | 在预览中向上移动 5 个单位                                            |
| `J`                | 在预览中向下移动 5 个单位                                            |
| `g` ⇒ `g` | 将光标移动到顶部                                                  |
| `G`                | 将光标移动到底部                                                  |
| `z`                | 通过 fzf 进入目录或显示文件（[cd](https://yazi-rs.github.io/docs/configuration/keymap#mgr.cd) 或 [reveal](https://yazi-rs.github.io/docs/configuration/keymap#mgr.reveal)） |
| `Z`                | 通过 zoxide 进入目录（[cd](https://yazi-rs.github.io/docs/configuration/keymap#mgr.cd)）                            |
<!--rehype:className=shortcuts left-align-->

### 选择操作

| 快捷键                          | 操作说明                                      |
| ------------------------------ | --------------------------------------------- |
| <kbd>Space</kbd>               | 切换当前悬停的文件/目录的选择状态             |
| <kbd>v</kbd>                   | 进入可视模式（选择模式）                      |
| <kbd>V</kbd>                   | 进入可视模式（取消模式）                      |
| <kbd>Ctrl</kbd> + <kbd>a</kbd> | 选择所有文件                                  |
| <kbd>Ctrl</kbd> + <kbd>r</kbd> | 反转当前所有文件的选择状态                    |
| <kbd>Esc</kbd>                 | 取消所有选择                                  |
<!--rehype:className=shortcuts left-align-->

用于选择文件和目录的快捷键命令

### 文件操作
<!--rehype:wrap-class=row-span-4-->

| 快捷键                              | 操作说明                                                                      |
| ----------------------------------- | ----------------------------------------------------------------------------- |
| <kbd>o</kbd>                        | 打开选中的文件                                                                |
| <kbd>O</kbd>                        | 以交互方式打开选中的文件                                                     |
| <kbd>Enter</kbd>                    | 打开选中的文件                                                                |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | 以交互方式打开选中的文件（部分终端尚不支持）                                |
| <kbd>Tab</kbd>                      | 显示文件信息                                                                  |
| <kbd>y</kbd>                        | 复制选中的文件                                                                |
| <kbd>x</kbd>                        | 剪切选中的文件                                                                |
| <kbd>p</kbd>                        | 粘贴已复制/剪切的文件                                                         |
| <kbd>P</kbd>                        | 粘贴已复制/剪切的文件（如目标存在则覆盖）                                    |
| <kbd>Y</kbd> 或 <kbd>X</kbd>        | 取消已复制/剪切状态                                                           |
| <kbd>d</kbd>                        | 将选中的文件移至回收站                                                        |
| <kbd>D</kbd>                        | 彻底删除选中的文件                                                            |
| <kbd>a</kbd>                        | 新建文件（以 / 结尾表示新建目录）                                             |
| <kbd>r</kbd>                        | 重命名选中的文件                                                              |
| <kbd>.</kbd>                        | 切换隐藏文件的显示状态                                                       |
<!--rehype:className=shortcuts left-align-->

更多文件操作命令如下：

| 快捷键                          | 操作说明                                     |
| ------------------------------ | -------------------------------------------- |
| <kbd>;</kbd>                   | 执行一个 Shell 命令                          |
| <kbd>:</kbd>                   | 执行一个 Shell 命令（阻塞，直到命令完成）    |
| <kbd>-</kbd>                   | 创建已复制文件的绝对路径符号链接             |
| <kbd>\_</kbd>                  | 创建已复制文件的相对路径符号链接             |
| <kbd>Ctrl</kbd> + <kbd>-</kbd> | 创建已复制文件的硬链接                       |
<!--rehype:className=shortcuts left-align-->

要操作选中的文件或目录

### 复制路径

| 快捷键                       | 操作说明                           |
| ---------------------------- | ---------------------------------- |
| <kbd>c</kbd> ⇒ <kbd>c</kbd> | 复制文件路径                       |
| <kbd>c</kbd> ⇒ <kbd>d</kbd> | 复制目录路径                       |
| <kbd>c</kbd> ⇒ <kbd>f</kbd> | 复制文件名                         |
| <kbd>c</kbd> ⇒ <kbd>n</kbd> | 复制不带扩展名的文件名             |
<!--rehype:className=shortcuts left-align-->

**复制路径** _说明：<kbd>c</kbd> ⇒ <kbd>d</kbd> 表示先按下 <kbd>c</kbd> 键，然后按下 <kbd>d</kbd> 键。_

### 搜索与过滤

| 快捷键       | 操作说明             |
| ------------ | -------------------- |
| <kbd>f</kbd> | 过滤文件     |
| <kbd>/</kbd> | 查找下一个文件       |
| <kbd>?</kbd> | 查找上一个文件       |
| <kbd>n</kbd> | 跳转到下一个匹配项   |
| <kbd>N</kbd> | 跳转到上一个匹配项   |
<!--rehype:className=shortcuts left-align-->

### 搜索文件

| 快捷键                       | 操作说明                                                |
| ---------------------------- | ------------------------------------------------------- |
| <kbd>s</kbd>                 | 使用 [fd](https://github.com/sharkdp/fd) 按名称搜索文件 |
| <kbd>S</kbd>                 | 使用 [ripgrep](https://github.com/BurntSushi/ripgrep) 按内容搜索文件 |
| <kbd>Ctrl</kbd> + <kbd>s</kbd> | 取消当前进行中的搜索                                   |
<!--rehype:className=shortcuts-->

### 排序
<!--rehype:wrap-class=row-span-2-->

| 快捷键                 | 操作说明                 |
| ---------------------- | ------------------------ |
| <kbd>,</kbd> ⇒ <kbd>m</kbd> | 按修改`时间`排序         |
| <kbd>,</kbd> ⇒ <kbd>M</kbd> | 按修改`时间倒序`排序     |
| <kbd>,</kbd> ⇒ <kbd>b</kbd> | 按`创建时间`排序         |
| <kbd>,</kbd> ⇒ <kbd>B</kbd> | 按`创建时间`倒序排序     |
| <kbd>,</kbd> ⇒ <kbd>e</kbd> | 按文件`扩展名`排序       |
| <kbd>,</kbd> ⇒ <kbd>E</kbd> | 按文件`扩展名倒序`排序   |
| <kbd>,</kbd> ⇒ <kbd>a</kbd> | 按`字母顺序`排序         |
| <kbd>,</kbd> ⇒ <kbd>A</kbd> | 按`字母倒序`排序         |
| <kbd>,</kbd> ⇒ <kbd>n</kbd> | 按`自然`排序             |
| <kbd>,</kbd> ⇒ <kbd>N</kbd> | 按`自然倒序`排序         |
| <kbd>,</kbd> ⇒ <kbd>s</kbd> | 按文件`大小`排序         |
| <kbd>,</kbd> ⇒ <kbd>S</kbd> | 按文件`大小倒序`排序     |
| <kbd>,</kbd> ⇒ <kbd>r</kbd> | `随机`排序               |
<!--rehype:className=shortcuts left-align-->

对文件/目录进行排序说明： _<kbd>,</kbd> ⇒ <kbd>a</kbd> 表示先按下 <kbd>,</kbd> 键，再按下 <kbd>a</kbd> 键。_

### 多标签页

| 快捷键                                      | 操作说明                     |
| ------------------------------------------- | ---------------------------- |
| <kbd>t</kbd>                                | 以当前工作目录创建新标签页  |
| <kbd>1</kbd>, <kbd>2</kbd>, ..., <kbd>9</kbd> | 切换到第 N 个标签页         |
| <kbd>[</kbd>                                | 切换到上一个标签页          |
| <kbd>]</kbd>                                | 切换到下一个标签页          |
| <kbd>{</kbd>                                | 当前标签页与上一个互换位置  |
| <kbd>}</kbd>                                | 当前标签页与下一个互换位置  |
| <kbd>Ctrl</kbd> + <kbd>c</kbd>              | 关闭当前标签页              |
<!--rehype:className=shortcuts-->

## 自定义配置

### 自定义配置

通过编辑配置文件来自定义 `Yazi`，配置文件通常位于 `$HOME/.config/yazi/xxx.toml`，可修改默认设置如快捷键、主题等。

- `yazi.toml` - 常规配置
- `keymap.toml` - 快捷键绑定
- `theme.toml` - 主题配置

### 配置文件示例：yazi.toml
<!--rehype:wrap-class=row-span-2-->

```toml
[general]
# 设置主界面主题为 dark 或 light
theme = "dark"
```

启动时的默认路径

```toml
default_path = "~"
```

是否启用自动保存配置

```toml
auto_save_config = true
```

自定义快捷键绑定

```toml
[keybindings]
quit = "q"        # 退出
copy = "y"        # 复制文件
paste = "p"       # 粘贴文件
delete = "d"      # 删除文件
```

界面相关配置

```toml
[ui]
preview_enabled = true     # 是否启用文件预览
show_hidden_files = true   # 显示隐藏文件
columns = 2                # 文件列表列数
```

搜索行为配置

```toml
[search]
case_sensitive = false  # 搜索是否区分大小写
search_timeout = 30     # 搜索超时时间（秒）
```

排序规则配置

```toml
[sorting]
sort_by = "name" # 排序方式: name,size,date
reverse_sort = false  # 是否反向排序
```

插件加载配置

```toml
[plugins]
enabled_plugins = ["git", "archive"]
```

### keymap.toml 配置示例
<!--rehype:wrap-class=row-span-2-->

```toml
# 全局快捷键配置
[global]
# 全局退出应用程序
quit = "Ctrl+Q"
# 打开文件或目录
open = "Enter"
# 返回上级目录
back = "Backspace"
# 搜索功能触发
search = "/"
# 复制路径
copy_path = "Ctrl+C"

# 窗口控制快捷键
[window]
# 切换窗口
switch_window = "Tab"
# 新建窗口
new_window = "Ctrl+N"
# 关闭窗口
close_window = "Ctrl+W"

# 文件操作快捷键
[file]
# 删除文件
delete_file = "D"
# 重命名文件
rename_file = "R"
# 复制文件
copy_file = "Y"
# 粘贴文件
paste_file = "P"
# 移动文件
move_file = "M"

# 文件选择快捷键
[selection]
# 全选
select_all = "Ctrl+A"
# 取消所有选择
deselect_all = "Ctrl+D"
# 反选
invert_selection = "Ctrl+I"
# 选择当前文件/目录
select_item = "Space"

# 页面导航快捷键
[navigation]
# 向上移动光标
move_up = "K"
# 向下移动光标
move_down = "J"
# 向左切换标签
move_left = "H"
# 向右切换标签
move_right = "L"

# 自定义命令触发键
[custom]
# 触发自定义功能
custom_action_1 = "Ctrl+1"
custom_action_2 = "Ctrl+2"
custom_action_3 = "Ctrl+3"
```

### theme.toml 配置示例

```toml
[general]
# 设置主界面配色方案
background_color = "#1e1e2e"  # 背景颜色
foreground_color = "#cdd6f4"  # 文本颜色
cursor_color = "#89dceb"      # 光标颜色
selection_color = "#585b70"   # 选中项背景颜色
highlight_color = "#fab387"   # 高亮颜色

# 字体设置
font_family = "FiraCode"      # 字体名称
font_size = 14                # 字体大小

[ui]
# 界面边框与间距
border_color = "#45475a"      # 边框颜色
padding = 4                   # 界面内容的内边距

[file_browser]
# 文件浏览器颜色配置
directory_color = "#89b4fa"   # 目录名称颜色
file_color = "#cdd6f4"        # 普通文件颜色
symlink_color = "#f5c2e7"     # 符号链接颜色
hidden_file_color = "#6c7086" # 隐藏文件颜色

[status_bar]
# 状态栏颜色
background_color = "#313244"  # 状态栏背景
foreground_color = "#a6adc8"  # 状态栏文字
error_color = "#f38ba8"       # 状态栏错误信息

[search]
# 搜索结果配色
match_color = "#a6e3a1"       # 搜索结果的匹配高亮
current_match_color = "#fab387"  # 当前匹配项的高亮

[progress_bar]
# 进度条的配色
filled_color = "#89dceb"      # 已填充部分
empty_color = "#313244"       # 未填充部分
```

另见
----

- [Yazi 官方文档](https://yazi-rs.github.io/) _(yazi-rs.github.io)_
- [Yazi Github](https://github.com/sxyazi/yazi) _(github.com)_
