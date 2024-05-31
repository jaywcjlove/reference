tauri 备忘清单
===

这个 [tauri](https://tauri.app/) 快速参考备忘单显示了它的常用命令使用清单

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
[Android Studio](https://developer.android.google.cn/studio?hl=zh-cn)|安卓开发工具

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

安卓开发
---

### 环境变量
<!--rehype:wrap-class=col-span-2-->
`JAVA_HOME`

`ANDROID_HOME`

`NDK_HOME`

### 准备目标
<!--rehype:wrap-class=col-span-2-->

```bash
$ npm install @tauri-apps/cli@next @tauri-apps/api@next
$ npm run tauri migrate
$ rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
$ rm -r src-tauri/gen
$ npm run tauri android init
$ npm run tauri icon
```

修改应用名：%app_path%\src-tauri\gen\android\app\src\main\res\values\strings.xml

### 编译
<!--rehype:wrap-class=col-span-2-->
```bash
$ npm run tauri android dev
$ npm run tauri android build
```

### 签名
<!--rehype:wrap-class=col-span-2-->
```bash
$ keytool -genkey -alias android.keystore -keyalg RSA -validity 20000 -keystore android.keystore
$ zipalign -p -f -v 4 unsigned.apk release.apk
$ apksigner sign --ks android.keystore release.apk
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
