SDKMAN 备忘清单
====

[SDKMAN](http://sdkman.io) 是一款管理 java 体系中的各类 SDK 版本的工具，可以用于大多数基于 Uinx 的系统

入门
---

### 安装

macOS/Linux

```bash
curl -s "https://get.sdkman.io" \| bash
```

Windows 需要 (WSL Approach) 或者 (Git Bash Approach)

```bash
curl -s "https://get.sdkman.io" \| bash
```

初始化 SDKMAN

```bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

查看 sdkman 是否安装成功

```bash
$ sdk version
```

### 获取帮助

您可以通过运行以下命令获得基本帮助：

```bash
$ sdk help
```

这将提供一个有用的顶级帮助页面。您可以向该命令添加限定符以获得有关特定子命令的帮助

```bash
$ sdk help install
```

### 查看

列出所有可用的 SDKs

```bash
sdk list
```

查看当前使用的 SDK

```bash
$ sdk current
```

查看特定 SDK 的版本列表（例如，Java）

```bash
$ sdk list java
```

### 安装卸载
<!--rehype:wrap-class=row-span-2-->

安装特定版本的 SDK（例如，Java）

```bash
$ sdk install java <version>
```

使用已安装的 SDK（例如，Java）

```bash
$ sdk use java <version>
```

使用已安装的 SDK（例如，Java）

```bash
$ sdk use java <version>
```

卸载 SDK（例如，Java）

```bash
$ sdk uninstall java <version>
```

列出所有已安装的 SDKs

```bash
$ sdk list installed
```

删除一个指定版本

```bash
$ sdk uninstall scala 3.4.1
```

### 更新

更新 SDKMAN 自身

```bash
$ sdk selfupdate
```

更新已安装的 SDKs

```bash
$ sdk update
```

设置默认的 SDK 版本（例如，Java）

```bash
$ sdk default java <version>
```

### 帮助

查看 SDKMAN 所有可用的命令

```bash
$ sdk help
```

这些命令可以帮助你安装、管理和使用不同版本的 SDK，如 Java、Groovy、Gradle、Maven 等。

### 安装本地版本

使用快照版本？已经在本地安装了吗？通过指定本地安装的路径来安装本地版本：

```bash
$ sdk install groovy 3.0.0-SNAPSHOT /path/to/groovy-3.0.0-SNAPSHOT
```
<!--rehype:className=wrap-text-->

```bash
$ sdk install java 17-zulu /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
```
<!--rehype:className=wrap-text-->

### 使用版本

查看已安装的 SDKs**：

```bash
$ sdk list installed
```

切换使用特定版本的 SDK（例如，Java）：

```bash
$ sdk use java <version>
$ sdk use scala 3.4.1
```

设置默认使用的 SDK 版本（例如，Java）：

```bash
$ sdk default java <version>
$ sdk default scala 3.4.1
```

### 查看当前使用的版本

要查 sdk 当前使用的版本：

```shell
$ sdk current java
Using java version 21.0.2-tem
```

要查看所有 sdk 当前使用的版本：

```shell
$ sdk current
Using:
groovy: 4.0.20
java: 21.0.2-tem
scala: 3.4.1
```

### 配置 ENV
<!--rehype:wrap-class=row-span-3-->

切换到特定的 JDK 或 SDK，通过项目基本目录中的 `.sdkmanrc` 文件来实现。执行下面命令自动生配置文件：

```bash
$ sdk env init
```

现在已经在当前目录中创建了一个包含以下内容的配置文件：

```shell
# Enable auto-env through the sdkman_auto_env config
# Add key=value pairs of SDKs to use below

java=21.0.2-tem
```
<!--rehype:className=wrap-text-->

切换到 `.sdkmanrc`文件中的配置，只需发出以下命令：

```bash
$ sdk env
# 您应该看到如下输出：
# Using java version 21.0.2-tem in this shell.
```
<!--rehype:className=wrap-text-->

通过下面命令，将 SDK 重置为默认版本

```shell
$ sdk env clear
```

安装 `.sdkmanrc` 配置文件中指定丢失的 SDK

```shell
$ sdk env install
```

在 cd 到目录中时自动切换 SDK 版本，可以通过在 sdkman 配置中设置 `sdkman_auto_env=true` 来实现。请注意，这也会在离开目录时将任何特定于项目的SDK重置为默认版本。

### 升级版本

升级特定 SDK 到最新版本

```shell
$ sdk upgrade springboot
```

要查看所有 SDK 的过时内容：

```shell
$ sdk upgrade
```

### SDKMAN 版本

```shell
$ sdk version

SDKMAN!
script: 5.7.0
native: 0.1.3
```

### 自动更新

安装新版本的 `SDKMAN` 如果可用

```bash
$ sdk selfupdate
```

通过将 force 参数传递给命令强制重新安装：

```bash
$ sdk selfupdate force
```

自动每日检查新版本的SDKMAN！也将代表用户执行。

### Home

获取 SDK 所在位置的绝对路径

```shell
$ sdk home java 21.0.2-tem

# /home/myuser/.sdkman/candidates/java/21.0.2-tem
```
<!--rehype:className=wrap-text-->

### Flush

应该很少需要刷新 `SDKMAN` 。flush 命令有助于实现这一点，因此您不需要删除任何目录。

```bash
$ sdk flush
```

手动删除像 `.sdkman/tmp` 目录这样的目录会破坏 sdkman！请始终使用 flush 命令！

### 离线模式

启用强制脱机模式

```shell
$ sdk offline enable
```

重新启用联机模式

```shell
$ sdk offline disable
```

离线模式下显示当前安装的和活动的版本：

```shell
$ sdk list groovy
# ---------------------------
# 
# 离线模式：仅显示已安装的groovy版本
# --------------------------
# >
# > 2.4.4
# 
# - 2.4.3
# 
# --------------------------
# 
# - - installed
# >
# > - currently in use
# >
# ---------------------------
```

当互联网可用/不可用时，离线模式也将自动禁用/启用。当然，需要互联网连接的命令不会起作用，但会发出警告。

### 更新

当 SDK 元数据可能变得过时时，会显示一条警告，并说明如何更新。

```shell
WARNING: SDKMAN is out-of-date and requires an update.
```
<!--rehype:className=wrap-text-->

只需运行以下命令，就可以刷新 SDK 缓存，并且可以安装新的 SDK 缓存：

```shell
$ sdk update
# Adding new candidates(s): kotlin
```
<!--rehype:className=wrap-text-->

定期更新 `SDKMAN` 需要更新以了解新的（或已删除的）SDK。

### 配置

可以在 `~/.sdkman/etc/config` 文件中找到配置。要编辑配置，可以发出 `sdk-config` 命令在系统编辑器中编辑此文件。以下配置可用：

```ini
# 使 sdkman 成为非交互式的，适用于 CI 环境
sdkman_auto_answer=true|false

# 检查更新版本并提示更新
sdkman_selfupdate_feature=true|false

# 禁用 SSL 证书验证
# https://github.com/sdkman/sdkman-cli/issues/327
# HERE BE DRAGONS....
sdkman_insecure_ssl=true|false

# 配置 curl 超时
sdkman_curl_connect_timeout=5
sdkman_curl_continue=true
sdkman_curl_max_time=10

# 订阅测试版频道
sdkman_beta_channel=true|false

# 启用详细调试
sdkman_debug_mode=true|false

# 启用色彩模式
sdkman_colour_enable=true|false

# 启用自动环境
sdkman_auto_env=true|false

# 启用 bash 或 zsh 自动完成功能
sdkman_auto_complete=true|false
```
<!--rehype:className=wrap-text-->
