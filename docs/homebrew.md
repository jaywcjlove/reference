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

### 命令

命令 | 说明
:--- :--- 
`brew install git`         | `安装`一个包
`brew uninstall git`       | `删除`/`卸载`软件包
`brew upgrade git`         | 升级包
:--- :---
`brew unlink git`          | `取消`链接
`brew link git`            | 关联
`brew switch git 2.5.0`    | 更改版本
:--- :---
`brew list --versions git` | 看看你有什么版本
:--- :---
`brew help` | 打印帮助信息
`brew help <sub-command>` | 打印子命令的帮助信息

### 更多包命令

命令 | 说明
:--- :--- 
`brew info git`            | 列出版本、注意事项等
`brew cleanup git`         | 删除旧版本
`brew edit git`            | 编辑此软件包
`brew cat git`             | 打印这个软件包
`brew home git`            | 打开主页
`brew search git`          | 搜索公式

### Brew Cask 命令

命令 | 说明
:--- :--- 
`brew install --cask firefox` | 安装火狐浏览器
`brew list --cask`            | 列出已安装应用

Cask 命令用于与图形应用程序交互

### 全局命令
<!--rehype:wrap-class=row-span-2-->

命令 | 说明
:--- :--- 
`brew update`   | 更新 `brew` 和 `cask`
`brew upgrade`  | 升级所有软件包
`brew list`     | 已安装列表
`brew outdated` | 升级需要什么？
`brew doctor`   | 诊断冲泡问题
`brew pin <formula>` | 防止指定软件包升级
`brew unpin <formula>` | 允许升级指定的软件包

### Brew 清理

```bash
$ brew cleanup # 删除旧版本的已安装软件包
$ brew cleanup <formula> # 删除旧版本指定软件包
# 显示所有将被删除的软件包(试运行)
$ brew cleanup -n 
```

### brew 源码仓库

```bash
# 列出所有当前点击的源码仓库（点击）
$ brew tap
# 使用 https 从 Github 中点击软件包源码仓库以点击
# https://github.com/user/homebrew-repo
$ brew tap <user/repo>
# 点击指定 URL 中的软件源码仓库
$ brew tap <user/repo> <URL>
# 从存储库中删除给定的源码仓库
$ brew untap <user/repo>
```

### 搜索查看

```bash
# 列出所有已安装的软件包
$ brew list
# 显示所有本地可用的 brew 配方
$ brew search
# 对用于 brew 的软件包名称执行子字符串搜索
$ brew search <text>
# 显示有关软件包的信息
$ brew info <formula>
```

另见
---

- [Homebrew 官网](https://brew.sh/index_zh-cn) _(brew.sh)_
- [Homebrew brew 源码](https://github.com/Homebrew/brew) _(github.com)_
- [Homebrew core 源码](https://github.com/Homebrew/homebrew-core) _(github.com)_