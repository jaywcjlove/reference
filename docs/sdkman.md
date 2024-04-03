SDKMAN 备忘清单
====

SDKMAN是一款管理 java 体系中的各类 SDK 版本的工具，可以用于大多数基于Uinx的系统。它提供了命令行以及API，功能有：安装、移除、列举候选版本。这个快速参考备忘单显示了它的常用命令使用清单

- [SDKMAN 官网](http://sdkman.io)

入门
---

### 安装

| 安装命令                                  | 环境                                                 |
| :---------------------------------------- | ---------------------------------------------------- |
| `curl -s "https://get.sdkman.io" \| bash` | macos/linux                                          |
| `curl -s "https://get.sdkman.io" \| bash` | windows 需要 (WSL Approach) 或者 (Git Bash Approach) |

- 查看 sdkman 是否安装成功

    ```bash
    $ sdk version
    ```

### 获取帮助

您可以通过运行以下命令获得基本帮助：

`$ sdk help`

这将提供一个有用的顶级帮助页面。您可以向该命令添加限定符以获得有关特定子命令的帮助。

`$ sdk help install`

### 安装一个SDK

最新稳定版通过运行以下命令安装您选择的SDK的最新稳定版本（例如Java JDK）：

```shell
$ sdk install java
You will see something like the following output:

Downloading: java 21.0.2-tem

In progress...

######################################################################## 100.0%

Installing: java 21.0.2-tem
Done installing!
Now you will be prompted if you want this version to be set asdefault.

Do you want java 21.0.2-tem to be set as default? (Y/n):
Answering yes (or hitting enter) will ensure that all subsequent shells opened will have this version of the SDK in use by default.

Setting java 21.0.2-tem as default.
```

### 安装特定版本

`$ sdk install scala 3.4.1`

### 安装本地版本

使用快照版本？已经在本地安装了吗？通过指定本地安装的路径来安装本地版本：

`$ sdk install groovy 3.0.0-SNAPSHOT /path/to/groovy-3.0.0-SNAPSHOT`

`$ sdk install java 17-zulu /Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`

### 删除一个指定版本

`$ sdk uninstall scala 3.4.1`

### 所有可以安装的软件列表

要获得可用 sdk 的列表：

`$ sdk list`

```shell
================================================================================
Available Candidates
================================================================================
q-quit                                  /-search down
j-down                                  ?-search up
k-up                                    h-help
--------------------------------------------------------------------------------
...
--------------------------------------------------------------------------------
Java (21.0.2-tem)        https://projects.eclipse.org/projects/adoptium.temurin/

Java Platform, Standard Edition (or Java SE) is a widely used platform for
development and deployment of portable code for desktop and server environments.
Java SE uses the object-oriented Java programming language. It is part of the
Java software-platform family. Java SE defines a wide range of general-purpose
APIs – such as Java APIs for the Java Class Library – and also includes the Java
Language Specification and the Java Virtual Machine Specification.

$ sdk install java
--------------------------------------------------------------------------------
...
```

### 获取某个 sdk 的版本列表

`$ sdk list groovy`

```shell
This will result in a list view showing the available, local, installed and current versions of the SDK.

================================================================================
Available Groovy Versions
================================================================================
> * 2.4.4                2.3.1                2.0.8                1.8.3
2.4.3                2.3.0                2.0.7                1.8.2
2.4.2                2.2.2                2.0.6                1.8.1
2.4.1                2.2.1                2.0.5                1.8.0
2.4.0                2.2.0                2.0.4                1.7.9
2.3.9                2.1.9                2.0.3                1.7.8
2.3.8                2.1.8                2.0.2                1.7.7
2.3.7                2.1.7                2.0.1                1.7.6
2.3.6                2.1.6                2.0.0                1.7.5
2.3.5                2.1.5                1.8.9                1.7.4
2.3.4                2.1.4                1.8.8                1.7.3
2.3.3                2.1.3                1.8.7                1.7.2
2.3.2                2.1.2                1.8.6                1.7.11
2.3.11               2.1.1                1.8.5                1.7.10
2.3.10               2.1.0                1.8.4                1.7.1

================================================================================
+ - local version
* - installed
> - currently in use
================================================================================
```

### 使用指定版本

选择在当前终端中使用给定版本：

`$ sdk use scala 3.4.1`

**重要的是要意识到，这将仅切换当前 shell 的 SDK 版本。若要使此更改永久化，请改用默认命令。**

### 设置默认版本

选择将给定版本设为默认版本：

`$ sdk default scala 3.4.1`

这将确保所有后续 shell 将从使用中的版本 3.4.1。

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

想在每次访问项目时切换到特定的 JDK 或 SDK 吗？这可以通过项目基本目录中的 `.sdkmanrc` 文件来实现。可以通过发出以下命令自动生成此文件：

`$ sdk env init`

现在已经在当前目录中创建了一个包含以下内容的配置文件：

```conf
# Enable auto-env through the sdkman_auto_env config

# Add key=value pairs of SDKs to use below

java=21.0.2-tem
```

该文件预先填充了当前使用的JDK版本，但可以根据需要包含任意多个支持的SDK的键值对。要切换到 `.sdkmanrc`文件中的配置，只需发出以下命令：

`sdk env`

您应该看到如下输出：

`Using java version 21.0.2-tem in this shell.`

您的路径现在也已更新为在当前 shell 中使用这些 SDK 中的任何一个。离开项目时，您可能需要将SDK重置为默认版本。这可以通过输入：

```shell
$ sdk env clear
```

将java版本恢复到21.0.2-tem（默认）签出新项目后，您可能缺少在项目的 `.sdkmanrc` 文件中指定的一些SDK。要安装这些丢失的SDK，只需键入：

```shell
$ sdk env install

Downloading: java 21.0.2-tem

In progress...

######################################################################## 100,0%

Repackaging Java 21.0.2-tem...

Done repackaging...

Installing: java 21.0.2-tem
Done installing!
```

您想在 cd 到目录中时自动切换 SDK 版本吗？这可以通过在 sdkman 配置中设置 `sdkman_auto_env=true` 来实现。请注意，这也会在离开目录时将任何特定于项目的SDK重置为默认版本。

### 升级版本

要查看您系统中 SDK 当前过期的内容：

```shell
$ sdk upgrade springboot
Upgrade:
springboot (1.2.4.RELEASE, 1.2.3.RELEASE < 3.2.4)
```

要查看所有 SDK 的过时内容：

```shell
$ sdk upgrade
Upgrade:
gradle (2.3, 1.11, 2.4, 2.5 < 8.7)
grails (2.5.1 < 6.1.1)
springboot (1.2.4.RELEASE, 1.2.3.RELEASE < 3.2.4
```

### SDKMAN 版本

```shell
$ sdk version

SDKMAN!
script: 5.7.0
native: 0.1.3
```

### 离线模式

最初被称为飞行模式，这允许SDKMAN！以在脱机工作时发挥作用。它有一个参数，可以传递给启用或禁用脱机模式。

```shell
$ sdk offline enable
Forced offline mode enabled.

$ sdk offline disable

Online mode re-enabled
```

在离线模式下操作时，大多数命令仍然可以工作，即使它们将以缩小的容量操作。例如list命令，它将只显示当前安装的和活动的版本：

```shell
$ sdk list groovy
------------------------------------------------------------

Offline Mode: only showing installed groovy versions
------------------------------------------------------------
>
> 2.4.4

- 2.4.3

------------------------------------------------------------

- - installed
>
> - currently in use
>
------------------------------------------------------------
```

当互联网可用/不可用时，离线模式也将自动禁用/启用。当然，需要互联网连接的命令不会起作用，但会发出警告。

### 自动更新

安装新版本的SDKMAN！如果可用。

`$ sdk selfupdate`

如果没有可用的新版本，将显示相应的消息。可以通过将force参数传递给命令来强制重新安装：

`$ sdk selfupdate force`

自动每日检查新版本的SDKMAN！也将代表用户执行。

### 更新

定期更新 SDKMAN！需要更新以了解新的（或已删除的）SDK。当 SDK 元数据可能变得过时时，会显示一条警告，并说明如何更新。只需运行以下命令，就可以刷新 SDK 缓存，并且可以安装新的 SDK 缓存：

```shell
WARNING: SDKMAN is out-of-date and requires an update.

$ sdk update
Adding new candidates(s): kotlin
```

### Flush

应该很少需要刷新 SDKMAN！。flush命令有助于实现这一点，因此您不需要删除任何目录。
手动删除像 .sdkman/tmp 目录这样的目录会破坏 sdkman！请始终使用 flush 命令！

`$ sdk flush`

### Home

在脚本中使用 SDKMAN 时，获取SDK所在位置的绝对路径通常很有用（类似于 java_home 命令在 macOS 上的工作方式）。为此，我们拥有设置权限。

```shell
$ sdk home java 21.0.2-tem
/home/myuser/.sdkman/candidates/java/21.0.2-tem
```

### Configuration

可以在 ~/.sdkman/etc/config 文件中找到配置。要编辑配置，可以发出 sdk-config 命令在系统编辑器中编辑此文件。以下配置可用：

```conf
# make sdkman non-interactive, preferred for CI environments
sdkman_auto_answer=true|false

# check for newer versions and prompt for update
sdkman_selfupdate_feature=true|false

# disables SSL certificate verification
# https://github.com/sdkman/sdkman-cli/issues/327
# HERE BE DRAGONS....
sdkman_insecure_ssl=true|false

# configure curl timeouts
sdkman_curl_connect_timeout=5
sdkman_curl_continue=true
sdkman_curl_max_time=10

# subscribe to the beta channel
sdkman_beta_channel=true|false

# enable verbose debugging
sdkman_debug_mode=true|false

# enable colour mode
sdkman_colour_enable=true|false

# enable automatic env
sdkman_auto_env=true|false

# enable bash or zsh auto-completion
sdkman_auto_complete=true|false
```
