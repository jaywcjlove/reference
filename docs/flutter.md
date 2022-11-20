Flutter 备忘清单
===

包含 Flutter 常用的组件、布局、方法等。初学者的完整快速参考

入门
---

### macOS 操作系统上安装和配置

```bash
$ sudo softwareupdate --install-rosetta --agree-to-license
```
<!--rehype:className=wrap-text-->

在 [Apple 芯片的 Mac 电脑](https://support.apple.com/zh-cn/HT211814) 上，还需要安装 [Rosetta 2](https://github.com/flutter/website/pull/7119#issuecomment-1124537969) 环境因为 一些辅助工具 仍然需要，通过手动运行上面的命令来安装

#### 获取 Flutter SDK

- 安装包来获取最新的 stable Flutter SDK：
  - Intel [`flutter_macos_3.3.8-stable.zip`](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/macos/flutter_macos_3.3.8-stable.zip)
  - Apple 芯片 [`flutter_macos_arm64_3.3.8-stable.zip`](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/macos/flutter_macos_arm64_3.3.8-stable.zip)  

    想要获取到其他版本的安装包，请参阅 [SDK 版本列表](https://flutter.cn/docs/development/tools/sdk/releases) 页面
- 将文件解压到目标路径, 比如:

    ```bash
    $ cd ~/development
    $ unzip ~/Downloads/flutter_macos_3.3.8-stable.zip
    ```
    <!--rehype:className=wrap-text-->
- 配置 `flutter` 的 PATH 环境变量：

    ```bash
    $ export PATH="$PATH:`pwd`/flutter/bin"
    ```

- 运行 `flutter doctor` 命令
<!--rehype:className=style-timeline-->

### Windows 操作系统上安装和配置

- 点击下方的安装包，获取 stable 发行通道的 Flutter SDK 最新版本：
  - [flutter_windows_3.3.8-stable.zip](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.3.8-stable.zip)
  - 要查看其他发行通道和以往的版本，请参阅 [SDK 版本列表](https://flutter.cn/docs/development/tools/sdk/releases) 页面
- 将压缩包解压，然后把其中的 `flutter` 目录整个放在你想放置 `Flutter SDK` 的路径中（例如 `C:\src\flutter`）
- 更新 `path` 环境变量，在开始菜单的搜索功能键入`「env」`，然后选择 `编辑系统环境变量`。在 **`用户变量`** 一栏中，检查是否有 **`Path`** 这个条目：
  - 如果存在这个条目，以 `;` 分隔已有的内容，加入 `flutter\bin` 目录的完整路径。
  - 如果不存在的话，在用户环境变量中创建一个新的 Path 变量，然后将 `flutter\bin` 所在的完整路径作为新变量的值
<!--rehype:className=style-timeline-->

如果你不想安装指定版本的安装包。可以忽略步骤 `1` 和 `2`。从 `GitHub` 上的 `Flutter repo` 获取源代码，并根据需要，切换到指定的分支或标签

```bash
C:\src>git clone https://github.com/flutter/flutter.git -b stable
```
<!--rehype:className=wrap-text-->

另见
---

- [Dart 备忘清单](./dart.md) _(jaywcjlove.github.io)_
- [flutter 官网](https://flutter.dev) _(flutter.dev)_
- [flutter 中文开发者社区](https://flutterchina.club/) _(flutterchina.club)_
