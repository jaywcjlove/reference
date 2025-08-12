tauri 备忘清单
===

[tauri](https://tauri.app/) 是一个轻量、高性能的跨平台应用开发框架，这里展示了它的常用配置与命令清单

入门
---

### 快速开始
<!--rehype:wrap-class=row-span-3-->

Bash

```bash
sh <(curl https://create.tauri.app/sh)
```

PowerShell

```bash
C:\> irm https://create.tauri.app/ps | iex
```

Cargo

```bash
$ cargo install create-tauri-app --locked
$ cargo create-tauri-app
```

npm/yarn/pnpm/bunx

```bash
$ npm create tauri-app@latest
$ yarn create tauri-app
$ pnpm create tauri-app
$ bunx create-tauri-app
```

#### 依赖环境

软件 | 描述
:- |:-
[rust](https://www.rust-lang.org/tools/install)| rust安装
[nodejs](https://nodejs.org/en)| nodejs安装
[Windows Build Tools](https://visualstudio.microsoft.com/zh-hans/visual-cpp-build-tools/)| Microsoft C++ 生成工具 (for windows)

### 启动 Tauri 开发窗口

```bash
$ npm run tauri dev
$ yarn tauri dev
$ pnpm tauri dev
$ bunx tauri dev
$ cargo tauri dev
```

### 检测最新版本的 Tauri

```bash
$ npm outdated @tauri-apps/cli
$ yarn outdated @tauri-apps/cli
$ pnpm add -D @tauri-apps/cli
$ npm outdated @tauri-apps/cli
```

### 更新 npm 包
<!--rehype:wrap-class=col-span-2-->

```bash
$ npm install @tauri-apps/cli@latest @tauri-apps/api@latest
$ yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
$ yarn up @tauri-apps/cli @tauri-apps/api
$ pnpm update @tauri-apps/cli @tauri-apps/api --latest
$ bun update @tauri-apps/cli @tauri-apps/api
```

### 更新 Cargo 包

打开 `src-tauri/Cargo.toml` 并更改 `tauri` 和 `tauri-build`

```ini
[build-dependencies]
tauri-build = "%version%"

[dependencies]
tauri = { version = "%version%" }
```

其中 `%version%` 是上面相应的版本号

```bash
$ cd src-tauri
$ cargo update
```

### 应用程序调试

代码中输出日志方法

```rust
println!("Message from Rust: {}", msg);
```

在 Linux 和 macOS 上通过下面命令重新运行

```bash
RUST_BACKTRACE=1 tauri dev
```

Window 上这样开启

```bash
set RUST_BACKTRACE=1
tauri dev
```

### 以编程方式打开 Devtools
<!--rehype:wrap-class=col-span-2-->

```rust
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    #[cfg(debug_assertions)] // 仅在调试构建时包含此代码
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
      window.close_devtools();
    }
    Ok(())
  });
```

### 在生产中使用检查器

```bash
$ npm run tauri build -- --debug
$ yarn tauri build --debug
$ pnpm tauri build --debug
$ bunx tauri build --debug
$ cargo tauri build --debug
```

### 启用开发工具功能
<!--rehype:wrap-class=col-span-2-->

```ini
[dependencies]
tauri = { version = "...", features = ["...", "devtools"] }
```

在文件 `src-tauri/Cargo.toml` 中启用 `devtools Cargo` 功能

移动端开发
---

### 注意事项
<!--rehype:wrap-class=col-span-2-->

Tauri 使用系统原生的 `Webview`，而不像 Electron 那样将完整的 `Chromium` 打包进应用，因此构建产物体积相当小。

但各手机厂商对于 `Webview` 的支持程度不同，因此在部分设备可能会出现一些兼容性问题。

安卓开发
---

### 安装 Android Studio
<!--rehype:wrap-class=row-span-2-->

在进行安卓开发之前，需要首先安装 [Android Studio](https://developer.android.google.cn/studio?hl=zh-cn) 并配置好环境变量。

安装后，打开 `Settings`，切换到 `Languages & Frameworks` > `Android SDK` 界面。
> 可以在这个页面更改 `Android SDK Location` 以调整 SDK 安装目录

安装以下内容：

- Android SDK Platform
- Android SDK Platform-Tools
- NDK (Side by side)
- Android SDK Build-Tools
- Android SDK Command-line Tools

### 环境变量
<!--rehype:wrap-class=col-span-2-->

- `JAVA_HOME`: 若无其他 JDK 环境，可以配置为 Android Studio 安装目录下的 jbr 目录。

- `ANDROID_HOME`: 配置为 Android SDK Location 目录下的 sdk 目录。

- `NDK_HOME`: 配置为 Android SDK Location 目录下的 ndk 下的 ndk 版本号目录。

### 编译目标
<!--rehype:wrap-class=col-span-2-->

Rust 默认只安装当前主机平台的编译目标（比如在 macOS 上默认就是 `x86_64-apple-darwin`）。
如果你想编译到其它平台或架构，就需要使用 `rustup target add` 安装对应的编译目标。

Android 应用打包时，一般会把编译的这几种架构的库文件全都放进 APK/ABB 中，系统会自动选择匹配的那个。

| target                      | CPU 架构         | 常见设备/场景             |
| --------------------------- | -------------- | ------------------- |
| **aarch64-linux-android**   | ARM 64 位       | 新款安卓手机（主流）          |
| **armv7-linux-androideabi** | ARM 32 位       | 老款安卓手机（较少见）         |
| **i686-linux-android**      | Intel x86 32 位 | 早期安卓模拟器（老旧）         |
| **x86_64-linux-android**   | Intel x86 64 位 | 安卓模拟器、新款 Chromebook |

```bash
$ rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
```

### 创建 Android 项目
<!--rehype:wrap-class=row-span-3-->

创建基础 Tauri 项目：

```bash
# 创建 tauri 项目
$ npm create tauri-app@latest
# 安装依赖
$ npm install
```

手动创建：

```bash
$ npm install -D @tauri-apps/cli@latest
# 进入项目目录初始化，按照提示输入即可
$ npx tauri init
```

创建后，则可以执行以下命令：

```bash
# 初始化 Android 开发配置
$ npx tauri android init
# 开发 Android 应用
$ npx tauri android dev
# 构建 Android 应用
$ npx tauri android build
```

### 开发调试
<!--rehype:wrap-class=col-span-2-->

首先需要在开发环境下打开应用，才能进行调试。

在浏览器打开检查页面，根据浏览器不同，地址也不同，edge 浏览器是 `edge://inspect`，chrome 浏览器是 `chrome://inspect`。

在检查页面中，会显示当前运行的应用，点击 `inspect` 即可打开调试工具。

### 生成签名
<!--rehype:wrap-class=col-span-2-->

Android 系统要求所有 APK 必须先使用证书进行数字签名，然后才能安装到设备上或进行更新。

`keytool` 是 Java 数据证书管理工具。

可以在 `JAVA_HOME` 环境变量指向的目录下的 `/bin/` 目录中找到 `keytool.exe`。

执行以下命令之后按照提示进行输入即可。

```bash
$ keytool -genkey -v -keystore 自定义的数据文件名称 -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias 自定义的证书别名
```

如果是要上架应用商店的，要如实填写。否则可能会导致因信息不对从而上架失败。

输入完毕，确认后，工具会要求设置密码。记住密码，后面会用到。

完成以上操作后，在当前工作目录下会生成一个 `自定义的数据文件名称.keystore` 文件。

### 手动签名
<!--rehype:wrap-class=col-span-2-->

```bash
$ keytool -genkey -alias android.keystore -keyalg RSA -validity 20000 -keystore android.keystore
$ zipalign -p -f -v 4 unsigned.apk release.apk
$ apksigner sign --ks android.keystore release.apk
```

### 自动签名
<!--rehype:wrap-class=col-span-2-->

创建 `src-tauri/gen/android/keystore.properties` 文件。

```properties
storePassword=数据文件密码
keyPassword=证书密码
keyAlias=自定义的证书别名
storeFile=自定义的数据文件名称.keystore
```

需要注意，在 windows 下，`storeFile` 需要 `C:\\Program Files\\Android` 这样的格式。

随后找到 `src-tauri/gen/android/app/build.gradle.kts` 文件，添加以下内容：

```kotlin
import java.io.FileInputStream

// ...
android {
  defaultConfig {
    // ...
  }
  signingConfigs {
    create("release") {
        val keystorePropertiesFile = rootProject.file("keystore.properties")
        val keystoreProperties = Properties()
        if (keystorePropertiesFile.exists()) {
            keystoreProperties.load(FileInputStream(keystorePropertiesFile))
        }

        keyAlias = keystoreProperties["keyAlias"] as String
        keyPassword = keystoreProperties["keyPassword"] as String
        storeFile = file(keystoreProperties["storeFile"] as String)
        storePassword = keystoreProperties["storePassword"] as String
    }
  }
  buildTypes {
    // ...
    getByName("release") {
      signingConfig = signingConfigs.getByName("release")
      // ...
    }
  }
}
```

配置完毕后，当执行 `npm run tauri android build` 时，会自动对构建的 APK/AAB 文件进行签名。

iOS 开发
---

### 预先准备

根据苹果政策，MacOS 不允许运行在非 Mac 硬件上，而开发所依赖的 Xcode 工具链只在 MacOS 上可用。

因此，为了进行开发 iOS 和 MacOS 应用，必须要有一台 Mac 设备。

对应用进行签名和发布，需要加入 [Apple Developer Program（年费 99 美元）](https://developer.apple.com/programs/whats-included/)。

不付费可以正常使用 Xcode 等工具，但无法进行正式签名和在 App Store 上架。

&nbsp;

### 签名

iOS 应用的签名现在已经非常简单了。

在 Xcode 打开项目，登录 Apple Developer 账号，在项目配置中找到并勾选自动管理签名即可。

Xcode 会自动帮助我们管理证书，签名等。

&nbsp;

### 开发调试

首先需要在开发环境下打开应用，才能进行调试。

在 Mac 上打开 Safari 浏览器，开启开发者模式，接着找到需要调试的设备即可。

如果是真机调试，则需要在设备上开启开发者模式。

&nbsp;

### 环境搭建
<!--rehype:wrap-class=col-span-2-->

#### 安装 Xcode

Xcode 是苹果官方的开发工具，提供了完整的开发环境，包括测试，分发，模拟器等。

需要注意的是，Xcode 的版本并非越新越好，而是要根据当前设备的 MacOS 的系统版本来选择。

前往 [Xcode 页面](https://developer.apple.com/cn/xcode/) 下载安装 Xcode。

#### 安装 [Homebrew](https://brew.sh/zh-cn/)

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

#### 使用 Homebrew 安装 [Cocoapods](https://cocoapods.org/)

```bash
brew install cocoapods
```

#### 增加编译目标

```bash
$ rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim
```

### 创建 iOS 项目
<!--rehype:wrap-class=col-span-1-->

首先创建基础 Tauri 项目。

```bash
# 创建 tauri 项目
$ npm create tauri-app@latest
# 安装依赖
$ npm install
```

手动创建：

```bash
$ npm install -D @tauri-apps/cli@latest
# 进入项目目录初始化，按照提示输入即可
$ npx tauri init
```

创建后，则可以执行以下命令：

```bash
# 初始化 iOS 开发配置
$ npx tauri ios init
# 开发 iOS 应用
$ npx tauri ios dev
# 构建 iOS 应用
$ npx tauri ios build
```

配置
---

### 配置结构
<!--rehype:wrap-class=row-span-2-->

默认配置 `tauri.conf.json`，还支持 `tauri.conf.json5` 和 `Tauri.toml`

-- | --
:--- | ---
`package` | 包设置
`tauri` | Tauri 配置
`build` | 构建配置
`plugins` | 插件配置

下面配置能与主配置进行合并

- `tauri.linux.conf.json` 或 `Tauri.linux.conf.toml`
- `tauri.windows.conf.json` 或 `Tauri.windows.conf.toml`
- `tauri.macos.conf.json` 或 `Tauri.macos.conf.toml`

示例

```json
{
  "build": { ... },
  "package": { ... },
  "tauri": { ... }
}
```

### Tauri 配置
<!--rehype:wrap-class=col-span-2-->

配置 | Type | 描述
:--- | --- | ---
`pattern` | [PatternKind](#patternkind) | 应用程序名称
`version` | [WindowConfig\[\]](#windowconfig) | 应用程序版本
`cli` | [CliConfig](#cliconfig) | CLI 配置
`bundle` | BundleConfig | 打包器配置
`allowlist` | AllowlistConfig | 允许列表配置
`security` | SecurityConfig | 安全配置
`updater` | UpdaterConfig | 更新程序配置
`systemTray` | [SystemTrayConfig](#systemtrayconfig) | 配置应用系统托盘
`macOSPrivateApi` | boolean | macOS 私有API配置
<!--rehype:className=left-align-->

### CliConfig
<!--rehype:wrap-class=col-span-2-->

配置 | Type | 描述
:--- | --- | ---
`description` | string? | 将显示在帮助信息中
`longDescription` | string? | 将显示在帮助信息中
`beforeHelp` | string? | 该信息显示在自动生成的帮助信息之前。这通常用于标题信息
`afterHelp` | string? | 显示在自动生成的帮助信息之后。通常用于描述如何使用参数，或者需要注意的注意事项
`args` | array? | 命令的参数列表
`subcommands` | object? | 该命令的子命令列表
<!--rehype:className=left-align-->

描述 CLI 配置

### Package 配置

配置 | 描述
:--- | ---
`productName` | 应用程序名称
`version` | 应用程序版本

### WindowConfig
<!--rehype:wrap-class=col-span-2 row-span-2-->

窗口配置对象

配置 | Type | 默认值 | 描述
:--- | --- | --- | ---
`label` | string | null | 窗口标识符
`url` | [WindowUrl](#windowurl) | view | 窗口的 webview URL
`userAgent` | userAgent? | null | webview 的用户代理
`fileDropEnabled` | boolean | true | 是否在 Web 视图上启用文件放置
`center` | boolean | false | 窗口是否开始居中
`x` | number? | null | 窗口左上角的水平位置
`y` | number? | null | 窗口左上角的水平位置
`width` | number | 800 | 窗口宽度
`height` | number | 600 | 窗口高度
`minWidth` | number | null | 最小窗口宽度
`minHeight` | number | null | 最小窗口高度

### PatternKind

应用模式。可以是以下类型中的任意一种：

#### 棕地模式

```json
{ "use": "brownfield" }
```

#### 隔离模式。建议出于安全目的

```json
{
  "use": "isolation",
  "options": { "dir": string }
}
```

### WindowUrl

要在 Tauri Web 视图窗口中打开的 URL。可以是以下任何一种类型：

- `string` (format: `uri`)：外部 URL。
- `string`：应用程序 URL 的路径部分。例如，要加载 `tauri://localhost/users/john`，只需在此配置中提供 `users/john`

### SystemTrayConfig
<!--rehype:wrap-class=col-span-2-->

配置 | Type | 默认值 | 描述
:--- | --- | --- | ---
`iconPath` | string(必填) | null | 系统托盘上使用的默认图标的路径
`iconAsTemplate` | boolean | false | 用于确定图像是否代表 macOS 上的[模板](https://developer.apple.com/documentation/appkit/nsimage/1520017-template?language=objc)图像
`menuOnLeftClick` | boolean | true | 确定在 macOS 上托盘图标收到左键点击时菜单是否应该出现
`title` | string? | null | MacOS 托盘标题
<!--rehype:className=left-align-->

应用程序系统托盘图标的配置
