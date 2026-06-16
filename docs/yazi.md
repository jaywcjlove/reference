Yazi 备忘清单
===

这份快速参考备忘单整理了 Yazi 终端文件管理器的安装、启动、快捷键、配置、插件、主题和常见排错用法

入门
----

### 介绍

Yazi 是一个使用 Rust 编写的终端文件管理器，支持异步文件操作、预览、Vim 风格快捷键、插件和主题扩展。

```shell
$ yazi
$ yazi ~/Projects
$ yazi --help
```

默认使用三栏视图：父目录、当前目录和预览面板。推荐把它与 shell wrapper 搭配使用，这样退出后可以回到 Yazi 中最后所在目录。

### 可选依赖

工具 | 用途
:- | :-
`file` | 文件类型检测，必需
`nerd-fonts` | 推荐，显示图标
`ffmpeg` | 视频缩略图
`7-Zip` | 压缩包预览和解压
`jq` | JSON 预览
`poppler` | PDF 预览
`fd` | 文件名搜索
`ripgrep` | 文件内容搜索
`fzf` | 快速目录跳转
`zoxide` | 智能目录跳转
<!--rehype:className=show-header-->

### 安装
<!--rehype:wrap-class=col-span-2-->

系统 | 命令
:- | :-
Arch Linux | `sudo pacman -S yazi ffmpeg 7zip jq poppler fd ripgrep fzf zoxide resvg imagemagick`
Homebrew | `brew install yazi ffmpeg-full sevenzip jq poppler fd ripgrep fzf zoxide resvg imagemagick-full font-symbols-only-nerd-font`
MacPorts | `sudo port install yazi ffmpeg 7zip jq poppler fd ripgrep fzf zoxide ImageMagick`
Windows Scoop | `scoop install yazi`
Windows WinGet | `winget install sxyazi.yazi`
Snap | `sudo snap install yazi --classic`
Flatpak | `flatpak run io.github.sxyazi.yazi`
PyPI | `pipx install yazi-bin`
Cargo | `cargo install --force yazi-build`
源码构建 | `cargo build --release --locked`
<!--rehype:className=show-header-->

发行版包多数由社区维护，版本可能滞后。需要最新版本时可使用官方 GitHub Releases、nightly 或源码构建。

### Windows 注意事项
<!--rehype:wrap-class=row-span-2-->

Yazi 依赖 `file(1)` 检测 MIME 类型。Windows 上官方推荐使用 Git for Windows 附带的 `file.exe`。

```powershell
$env:YAZI_FILE_ONE = "C:\Program Files\Git\usr\bin\file.exe"
```

如果使用 Scoop 安装 Git，路径通常是：

```powershell
$env:YAZI_FILE_ONE = "$env:USERPROFILE\scoop\apps\git\current\usr\bin\file.exe"
```

设置后重启终端。官方不推荐通过 Scoop 或 Chocolatey 单独安装 `file`，因为它们可能无法正确处理 Unicode 文件名。

### Shell Wrapper
<!--rehype:wrap-class=row-span-2-->

直接运行 `yazi` 退出后不会改变当前 shell 的目录。使用 wrapper 后，按 `q` 退出会切换到 Yazi 退出时所在目录，按 `Q` 退出则不切换。

```bash
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
  yazi "$@" --cwd-file="$tmp"
  if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    builtin cd -- "$cwd"
  fi
  rm -f -- "$tmp"
}
```

把函数放入对应 shell 的配置文件后，使用 `y` 启动。

快捷键
----
<!--rehype:body-class=cols-2-->

### 导航

键位 | 操作
:- | :-
`h`, `←` | 返回父目录
`j`, `↓` | 光标下移
`k`, `↑` | 光标上移
`l`, `→` | 进入目录
`K` | 预览向上滚动 5 个单位
`J` | 预览向下滚动 5 个单位
`g` ⇒ `g` | 跳到顶部
`G` | 跳到底部
`z` | 通过 fzf 进入目录或显示文件
`Z` | 通过 zoxide 进入目录
`g` ⇒ `Space` | 交互式输入路径跳转
<!--rehype:className=shortcuts left-align-->

### 选择

键位 | 操作
:- | :-
`Space` | 切换当前项选择状态
`v` | 进入可视选择模式
`V` | 进入可视取消选择模式
`Ctrl` + `a` | 全选
`Ctrl` + `r` | 反选
`Esc` | 取消选择
<!--rehype:className=shortcuts left-align-->

### 文件操作
<!--rehype:wrap-class=row-span-2-->

键位 | 操作
:- | :-
`o`, `Enter` | 打开选中文件
`O`, `Shift` + `Enter` | 交互式打开选中文件
`Tab` | 显示文件信息
`y` | 复制选中文件
`x` | 剪切选中文件
`p` | 粘贴
`P` | 覆盖粘贴
`Y`, `X` | 取消复制/剪切状态
`d` | 移到回收站
`D` | 永久删除
`a` | 新建文件或目录
`r` | 重命名
`.` | 显示或隐藏隐藏文件
<!--rehype:className=shortcuts left-align-->

### Shell 与链接

键位 | 操作
:- | :-
`;` | 执行 shell 命令
`:` | 执行阻塞式 shell 命令
`-` | 创建绝对路径符号链接
`_` | 创建相对路径符号链接
`Ctrl` + `-` | 创建硬链接
<!--rehype:className=shortcuts left-align-->

### 复制路径

键位 | 操作
:- | :-
`c` ⇒ `c` | 复制文件路径
`c` ⇒ `d` | 复制目录路径
`c` ⇒ `f` | 复制文件名
`c` ⇒ `n` | 复制不带扩展名的文件名
<!--rehype:className=shortcuts left-align-->

### 搜索与过滤

键位 | 操作
:- | :-
`f` | 过滤当前目录
`/` | 查找下一个文件
`?` | 查找上一个文件
`n` | 跳到下一个匹配项
`N` | 跳到上一个匹配项
`s` | 使用 fd 按名称搜索文件
`S` | 使用 ripgrep 按内容搜索文件
`Ctrl` + `s` | 取消当前搜索
<!--rehype:className=shortcuts left-align-->

### 排序
<!--rehype:wrap-class=row-span-2-->

键位 | 操作
:- | :-
`,` ⇒ `m` | 按修改时间排序
`,` ⇒ `M` | 按修改时间倒序
`,` ⇒ `b` | 按创建时间排序
`,` ⇒ `B` | 按创建时间倒序
`,` ⇒ `e` | 按扩展名排序
`,` ⇒ `E` | 按扩展名倒序
`,` ⇒ `a` | 按字母排序
`,` ⇒ `A` | 按字母倒序
`,` ⇒ `n` | 自然排序
`,` ⇒ `N` | 自然倒序
`,` ⇒ `s` | 按大小排序
`,` ⇒ `S` | 按大小倒序
`,` ⇒ `r` | 随机排序
<!--rehype:className=shortcuts left-align-->

### 标签页

键位 | 操作
:- | :-
`t` | 新建标签页
`1` ... `9` | 切换到第 N 个标签页
`[` | 上一个标签页
`]` | 下一个标签页
`{` | 与上一个标签页交换
`}` | 与下一个标签页交换
`Ctrl` + `c` | 关闭当前标签页
<!--rehype:className=shortcuts left-align-->

配置
----

### 配置文件

文件 | 说明
:- | :-
`yazi.toml` | 通用配置
`keymap.toml` | 快捷键配置
`theme.toml` | 配色配置
`init.lua` | Lua 初始化脚本
`package.toml` | 插件和主题锁定信息
<!--rehype:className=show-header-->

Unix-like 系统配置目录为 `~/.config/yazi/`，Windows 配置目录为 `%AppData%\yazi\config\`。也可以通过 `YAZI_CONFIG_HOME` 使用自定义配置目录。

### 显示隐藏文件

```toml
# yazi.toml
[mgr]
show_hidden = true
```

Yazi 已内置默认配置，只需要在自己的配置文件里写入要覆盖的片段。

### 布局比例

```toml
# yazi.toml
[mgr]
ratio = [1, 4, 3]
```

`ratio` 控制父目录、当前目录、预览面板的宽度比例。某一栏设为 `0` 可隐藏该栏，但至少需要保留一个非零面板。

### keymap.toml 层
<!--rehype:wrap-class=col-span-2-->

层 | 说明
:- | :-
`mgr` | 文件列表
`tasks` | 任务管理器
`spot` | 文件信息查看
`pick` | 选择组件，例如“打开方式”
`input` | 输入组件，例如创建、重命名
`confirm` | 确认对话框
`cmp` | 补全组件
`help` | 帮助菜单
<!--rehype:className=show-header-->

### 追加快捷键

```toml
# keymap.toml
[[mgr.prepend_keymap]]
on = "<C-a>"
run = "toggle_all --state=on"
desc = "Select all files"

[[mgr.append_keymap]]
on = [ "g", "b" ]
run = "cd ~/Books"
desc = "Go to books"
```

`prepend_keymap` 优先级高于默认快捷键，`append_keymap` 优先级低于默认快捷键。若要完全替换默认快捷键，可使用 `keymap`。

插件与主题
----

### ya 命令

```shell
$ ya --help
```

`ya` 是 Yazi 的辅助命令，负责插件管理、主题管理和 DDS 消息发布订阅等功能。`ya` 与 `yazi` 版本必须一致。

### 插件管理

```shell
$ ya pkg add owner/my-plugin
$ ya pkg add yazi-rs/plugins:git
$ ya pkg list
$ ya pkg install
$ ya pkg upgrade
$ ya pkg delete yazi-rs/plugins:git
```

`ya pkg` 会把插件复制到配置目录，并更新 `package.toml` 来锁定版本。

### 锁定插件版本

```toml
# package.toml
[[plugin.deps]]
use = "owner/my-plugin"
rev = "=9a1129c"
hash = "d81b64a39432fcd6224cd75d296e7510"
```

在 `rev` 前加 `=` 可固定插件版本，避免 `ya pkg upgrade` 自动升级。

### Flavors

```toml
# theme.toml
[flavor]
dark = "catppuccin-mocha"
light = "catppuccin-mocha"
```

Flavor 是可复用的预制主题，通常放在 `flavors/` 子目录中，并可由 `ya pkg` 管理。用户自己的 `theme.toml` 会覆盖 flavor 的同名配置。

### 安装 Flavor

```shell
$ ya pkg add yazi-rs/flavors:catppuccin-mocha
```

如果只想使用某个 flavor，`theme.toml` 中通常只需要 `[flavor]` 配置；需要微调时再添加覆盖项。

排错
----

### 检查帮助

```shell
$ yazi --help
$ ya --help
```

先确认 `yazi` 和 `ya` 都在 `PATH` 中，并且两者版本一致。

### Windows 无法识别类型

```powershell
$env:YAZI_FILE_ONE = "C:\Program Files\Git\usr\bin\file.exe"
```

如果预览或类型检测异常，优先确认 `YAZI_FILE_ONE` 是否指向 Git for Windows 附带的 `file.exe`。

### 配置目录调试

```shell
$ YAZI_CONFIG_HOME=~/.config/yazi-alt yazi
```

用独立配置目录启动可以排查现有配置、插件或主题是否导致问题。

### 主题校验

```shell
$ taplo check --schema https://yazi-rs.github.io/schemas/theme.json theme.toml
```

Flavor 或主题不生效时，检查字段是否与当前 Yazi 版本兼容。

另见
----

- [Yazi 官方文档](https://yazi-rs.github.io/docs/)
- [Yazi Installation](https://yazi-rs.github.io/docs/installation/)
- [Yazi Quick Start](https://yazi-rs.github.io/docs/quick-start/)
- [Yazi Configuration](https://yazi-rs.github.io/docs/configuration/overview/)
- [Yazi CLI](https://yazi-rs.github.io/docs/cli/)
- [Yazi Flavors](https://yazi-rs.github.io/docs/flavors/overview/)
