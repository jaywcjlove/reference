Yazi 备忘清单
===

这份快速参考备忘单提供了Yazi 快速的终端文件管理的简要概述，以及 Yazi的基本操作

入门
----
<!--rehype:body-class=cols-2-->
### 功能特点
<!--rehype:wrap-class=row-span-2-->
- 跨平台支持

 `Yazi` 支持多种操作系统，包括 Linux、macOS 和 Windows。这使得用户可以在不同的平台上获得一致的体验。

- 轻量级和快速

Yazi 是一个设计简洁、执行效率高的终端文件管理器。它的轻量级特性确保了在启动和操作过程中都能保持高速度和低资源消耗。

- 插件支持

Yazi 支持插件，用户可以根据需要安装和配置插件，以扩展文件管理器的功能

- 丰富的文件操作

Yazi 提供了一系列丰富的文件操作功能，包括复制、剪切、粘贴、删除、重命名等。此外，还支持批量操作和多选功能，极大提高了文件管理的效率。

### 安装

| 系统 | 安装方法 |
| ----- | ----- |
| **使用 Cargo 安装** | cargo install yazi |
| **Arch Linux** | yay -S yazi |
| **Debian/Ubuntu** | 可以使用 Cargo 进行安装 |
| **macOS (使用 Homebrew)** | brew install yazi |
| **Windows (使用 Carg)** | cargo install yazi |
| **Windows (使用 Scoop)** | scoop install yazi |

### 使用方法

#### 启动

你可以在终端中通过以下命令启动 Yazi

```sh
yazi
```

#### 帮助

你可以通过以下命令查看 Yazi 的帮助文档

```sh
yazi --help
```

## 基本操作

Yazi 文件管理器主要通过键盘快捷键进行操作。以下是一些常用的快捷键：

### 导航

:- | :-
:- | :-
| `h` | 返回上一级目录 |
| `j` | 向下移动选中项 |
| `k` | 向上移动选中项 |
| `l` | 进入选中的目录或打开文件 |
<!--rehype:className=shortcuts-->

### 文件操作

:- | :-
:- | :-
| `y` | 复制选中的文件或目录 |
| `d` | 剪切选中的文件或目录 |
| `p` | 粘贴文件或目录 |
| `x` | 删除选中的文件或目录 |
| `r` | 重命名选中的文件或目录 |
<!--rehype:className=shortcuts-->

### 搜索与过滤

:- | :-
:- | :-
| `/` | 开始搜索模式 |
| `n` | 在搜索模式中跳到下一个匹配项 |
| `N` | 在搜索模式中跳到上一个匹配项 |
<!--rehype:className=shortcuts-->

### 视图操作

:- | :-
:- | :-
| `gg` | 跳到列表的顶部 |
| `G`  | 跳到列表的底部 |
| `Ctrl+f` | 向下滚动一页 |
| `Ctrl+b` |  向上滚动一页 |
<!--rehype:className=shortcuts-->

## 自定义配置

### 自定义配置
<!--rehype:wrap-class=col-span-3-->
你可以通过编辑配置文件来自定义 Yazi。配置文件通常位于 `$HOME/.config/yazi/xxx.toml`  
你可以在该文件中修改一些默认设置，例如快捷键绑定、主题颜色等。

- yazi.toml - 常规配置。
- keymap.toml - 按键绑定配置。
- theme.toml - 配色方案配置。

### 配置文件示例：yazi.toml

```toml
[general]
# 设置主界面主题为 dark 或 light
theme = "dark"

# 启动时的默认路径
default_path = "~"

# 是否启用自动保存配置
auto_save_config = true

[keybindings]
# 自定义快捷键绑定
quit = "q"        # 退出
copy = "y"        # 复制文件
paste = "p"       # 粘贴文件
delete = "d"      # 删除文件

[ui]
# 界面相关配置
preview_enabled = true        # 是否启用文件预览
show_hidden_files = true      # 显示隐藏文件
columns = 2                   # 文件列表列数

[search]
# 搜索行为配置
case_sensitive = false        # 搜索是否区分大小写
search_timeout = 30           # 搜索超时时间（秒）

[sorting]
# 排序规则配置
sort_by = "name"              # 排序方式: name, size, date
reverse_sort = false          # 是否反向排序

 [plugins]
# 插件加载配置
enabled_plugins = ["git", "archive"]
```

### keymap.toml 配置示例

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
