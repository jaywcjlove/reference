Homebrew 备忘清单
===

Homebrew 是 macOS(或Linux)缺少的包管理器，备忘清单包含 [brew](https://github.com/Homebrew/brew) 命令的使用与安装

Homebrew
---

### 安装
<!--rehype:wrap-class=row-span-3-->

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
<!--rehype:className=wrap-text -->

加速安装和更新，将仓库源码通过 [gitee](https://gitee.com/) 同步到国内，这样速度杠杠的

```bash
# 把 Homebrew/brew 的 Git 镜像放在这里
export HOMEBREW_BREW_GIT_REMOTE="..."
# 将 Homebrew/homebrew-core 的 Git 镜像放在这里
export HOMEBREW_CORE_GIT_REMOTE="..."
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
<!--rehype:className=wrap-text -->

在安装期间跳过克隆 (beta)

```bash
export HOMEBREW_INSTALL_FROM_API=1
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
<!--rehype:className=wrap-text -->

### 安装卸载
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:--- | :---
`brew install git`         | `安装`一个软件包
`brew reinstall git`       | 重新`安装`一个软件包
`brew uninstall git`       | `删除`/`卸载`软件包
`brew switch git 2.5.0`    | 切换软件包的版本
`brew unlink git`          | 取消软件包的链接
`brew link git`            | 链接已有的软件包
`brew cleanup git`         | 删除旧版本的软件包及依赖

### 升级

命令 | 说明
:--- | :---
`brew upgrade git`         | 升级一个软件包
`brew upgrade`             | 升级所有可升级的软件包
`brew update`   | 更新 `Homebrew` 和 `Cask`

### Brew Cask 命令

命令 | 说明
:--- | :---
`brew install --cask firefox` | 安装火狐浏览器
`brew list --cask`            | 列出已安装应用

Cask 命令用于与图形界面应用程序交互，可以安装和管理 macOS 上的图形界面应用程序

### 更多包命令
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:--- | :---
`brew info git`            | 显示软件包的版本、依赖、注意事项等信息
`brew edit git`            | 编辑此软件包的安装脚本
`brew cat git`             | 打印此软件包的安装脚本
`brew home git`            | 打开此软件包的主页
`brew search git`          | 搜索软件包公式并显示相关信息
`brew list --versions git` | 查看安装的软件包及其版本信息
<!--rehype:className=style-list-->

### 全局命令
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:--- | :---
`brew list`     | 列出已安装的软件包
`brew outdated` | 列出需要升级的软件包
`brew doctor`   | 诊断 Homebrew 是否存在问题
`brew pin <formula>` | 防止指定软件包被升级
`brew unpin <formula>` | 允许指定软件包被升级
<!--rehype:className=style-list-->

### 帮助命令

命令 | 说明
:--- | :---
`brew help` | 打印帮助信息
`brew help <sub-command>` | 打印子命令的帮助信息
<!--rehype:className=style-list-->

### Brew 清理
<!--rehype:wrap-class=row-span-2-->

删除旧版本的已安装软件包

```bash
$ brew cleanup
```

删除旧版本指定软件包

```bash
$ brew cleanup <formula>
```

删除未安装的软件包

```bash
$ brew cleanup -s
```

删除所有 Homebrew 缓存

```bash
$ brew cleanup --prune=all
```

直接删除 Homebrew 的缓存目录

```bash
$ rm -rf $(brew --cache)
```

显示所有将被删除的软件包(试运行)

```bash
$ brew cleanup -n
```

### Brew 源码仓库

列出所有当前点击的源码仓库（点击）

```bash
$ brew tap
```

使用 https 从 Github 中点击软件包源码仓库以点击

```bash
# https://github.com/user/homebrew-repo
$ brew tap <user/repo>
```

点击指定 URL 中的软件源码仓库

```bash
$ brew tap <user/repo> <URL>
```

从存储库中删除给定的源码仓库

```bash
$ brew untap <user/repo>
```

### 搜索查看

列出所有已安装的软件包

```bash
$ brew list
```

显示所有本地可用的 brew 配方

```bash
$ brew search
```

搜索包含指定字符的 brew 配方

```bash
$ brew search <text>
```

显示有关软件包的信息

```bash
$ brew info <formula>
```

### 依赖

命令 | 说明
:--- | :---
`brew deps --tree --installed` | 查看包和依赖关系图
`brew deps git` | 显示 git 依赖
<!--rehype:className=style-list-->

显示`包`的依赖关系。 特定于`包`的其他选项可能是附加到命令

### 卸载 Homebrew

- 使用官方卸载脚本卸载 Homebrew
- 验证文件是否已删除

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
$ sudo rm -rf /opt/homebrew
```
<!--rehype:className=wrap-text -->

另见
---

- [Homebrew 官网](https://brew.sh/index_zh-cn) _(brew.sh)_
- [Homebrew brew 源码](https://github.com/Homebrew/brew) _(github.com)_
- [Homebrew core 源码](https://github.com/Homebrew/homebrew-core) _(github.com)_
