Wails V2 备忘清单
===

[![GitHub Repo stars](https://img.shields.io/github/stars/wailsapp/wails?style=flat)](https://github.com/wailsapp/wails)    [![GitHub release (latest by date)](https://img.shields.io/github/v/release/wailsapp/wails?style=flat)](https://github.com/wailsapp/wails/releases/latest)    [![Go Reference](https://pkg.go.dev/badge/github.com/wailsapp/wails/v2.svg)](https://pkg.go.dev/github.com/wailsapp/wails/v2)

Wails 是一个基于 Go 和现代 Web 技术（如 Vue、React、Svelte 等）构建跨平台桌面应用的轻量级开源框架，可作为 Electron 的替代方案，以下是 Wails v2 的常用命令和示例速查（v3 仍在开发中）。

<!--rehype:style=padding-top: 12px;-->

## 命令行工具 (CLI)

### 安装与更新

```bash
# 安装 Wails CLI
$ go install github.com/wailsapp/wails/v2/cmd/wails@latest

# 更新到最新稳定版
$ wails update
# 更新到最新预发布版
$ wails update -pre
```
<!--rehype:className=wrap-text-->

### 常用命令参数
<!--rehype:wrap-class=col-span-2 row-span-2-->

| 命令      | 参数                      | 描述                                                         |
| ------- | ----------------------- | ---------------------------------------------------------- |
| `init`  | `-n`                    | **项目名称 (必填)**                                              |
|         | `-t`                    | 模板名称 (`vue`, `react`, `svelte`, `angular`) 或模板 URL                              |
|         | `-ide`                  | 为 `vscode` 或 `goland` 生成 IDE 配置                            |
|         | `-f`                    | 强制覆盖现有目录                                                   |
| `dev`   | `-browser`              | 在浏览器中打开前端界面进行调试                                            |
|         | `-assetdir`             | 指定前端资产目录的路径                                                |
|         | `-frontenddevserverurl` | 使用外部前端开发服务器的 URL                                           |
|         | `-wailsjsdir`           | 指定生成的 Wails JS 模块目录                                        |
|         | `-reload`               | 启用自动重载                                                     |
| `build` | `-platform`             | 交叉编译目标平台, 如 `darwin/arm64`                                 |
|         | `-clean`                | 构建前清理 `build/bin` 目录                                       |
|         | `-upx`                  | 使用 UPX 压缩最终的二进制文件                                          |
|         | `-nsis`                 | (Windows) 生成 NSIS 安装程序                                     |
|         | `-webview2`             | (Windows) WebView2 依赖处理策略 (`download`, `embed`, `browser`) |
|         | `-debug`                | 保留调试信息                                                     |
|         | `-devtools`             | 在生产版本中启用开发者工具                                              |
|         | `-ldflags`              | 传递给 Go 链接器的标志                                              |
|         | `-tags`                 | 构建标签                                                       |
<!--rehype:className=wrap-text left-align-->

### 项目命令

```bash
# 初始化新项目 (以 Vue 模板为例)
$ wails init -n my-project -t vue

# 使用自定义模板
$ wails init -n my-project -t https://github.com/user/template

# 进入项目目录并启动实时开发
$ cd my-project
$ wails dev

# 构建生产版本 (以 Windows 平台为例)
$ wails build -platform windows/amd64 -clean -upx

# 检查环境依赖
$ wails doctor

# 生成绑定文件
$ wails generate module
```
<!--rehype:className=wrap-text-->

## 项目配置

### 项目结构

```shell
my-project/
├── build/          # 构建输出目录
├── frontend/       # 前端源文件
│   └── wailsjs/    # Wails 自动生成的模块
├── app.go          # 应用核心逻辑
├── main.go         # 应用入口
├── go.mod
└── wails.json      # 项目配置文件
```

### `wails.json` 详解
<!--rehype:wrap-class=col-span-2-->

| 配置项                    | 描述                           | 示例                          |
| ---------------------- | ---------------------------- | --------------------------- |
| `name`                 | 项目名称                         | `"my-app"`                  |
| `outputfilename`       | 输出的二进制文件名                    | `"my-app.exe"`              |
| `frontend:install`     | 前端依赖安装命令                     | `"npm install"`             |
| `frontend:build`       | 前端构建命令                       | `"npm run build"`           |
| `frontend:dev:watcher` | 开发模式下运行的前端监视命令               | `"npm run dev"`             |
| `frontend:dev:serverUrl` | 前端开发服务器 URL                 | `"http://localhost:3000"`   |
| `wailsjsdir`           | 生成 JS 模块的目录                  | `"./frontend/wailsjs"`      |
| `assetdir`             | 前端资产目录                       | `"./frontend/dist"`         |
| `reloaddirs`           | 监听重载的目录                      | `"frontend/src,app.go"`     |
| `author.name`          | 作者名称，用于打包元数据                 | `"Your Name"`               |
| `author.email`         | 作者邮箱                         | `"you@example.com"`         |
| `info`                 | (macOS) 用于 `Info.plist` 的元数据 | `{"CFBundleName": "MyApp"}` |
<!--rehype:className=wrap-text left-align-->

## 核心交互与生命周期

### 方法绑定 (Go <-> JS)

在 Go 中定义公共方法，即可在前端直接调用。

```go
// app.go
type App struct {
    ctx context.Context
}

func (a *App) Greet(name string) string {
    return fmt.Sprintf("Hello %s!", name)
}

// main.go
app := NewApp()
err := wails.Run(&options.App{
    Title: "My App",
    Bind: []interface{}{
        app, // 暴露 app 实例的所有公共方法
    },
})
```

```js
// frontend/main.js
import { Greet } from '../wailsjs/go/main/App';

Greet("World").then(result => console.log(result));
```

### 事件系统 (Events)

用于在 Go 和前端之间异步发送和监听消息。

#### Go 端 (`runtime.Events*`)

```go
import "github.com/wailsapp/wails/v2/pkg/runtime"

// 发送事件到前端
runtime.EventsEmit(app.ctx, "go-event", "data from Go")

// 监听来自前端的事件
runtime.EventsOn(app.ctx, "js-event", func(optionalData ...interface{}) {
    // ... 处理数据
})
```

#### JavaScript 端 (`runtime.Events*`)

```js
import { EventsOn, EventsEmit } from '../wailsjs/runtime';

// 发送事件到 Go
EventsEmit("js-event", { "payload": 123 });

// 监听来自 Go 的事件
EventsOn("go-event", (data) => {
    console.log("Received data from Go:", data);
});
```

### 应用生命周期钩子

在 `wails.Run()` 中定义，用于在应用关键节点执行 Go 代码。

```go
// main.go
err := wails.Run(&options.App{
    // ...
    OnStartup:     app.startup,
    OnDomReady:    app.domReady,
    OnShutdown:    app.shutdown,

    // 返回 bool 值决定是否关闭
    OnBeforeClose: app.beforeClose,
})
```

| 钩子              | 描述                        |
| --------------- | ------------------------- |
| `OnStartup`     | 应用启动时，在窗口创建前调用            |
| `OnDomReady`    | 前端 DOM 加载完成后调用            |
| `OnShutdown`    | 应用关闭前，在窗口销毁后调用            |
| `OnBeforeClose` | 用户关闭窗口时调用，返回 `true` 可阻止关闭 |
<!--rehype:className=wrap-text left-align-->

## 运行时 API (Runtime)

### 窗口 (Window)
<!--rehype:wrap-class=col-span-3-->

| 功能            | Go 示例 (`runtime.*`)                   | JS 示例 (`runtime.*`)                           |
| ------------- | ------------------------------------- | --------------------------------------------- |
| **设置标题**      | `WindowSetTitle(ctx, "New")`          | `WindowSetTitle("New")`                       |
| **设置尺寸**      | `WindowSetSize(ctx, 800, 600)`        | `WindowSetSize(800, 600)`                     |
| **设置最小/最大尺寸** | `WindowSetMinSize(ctx, 400, 300)`     | `WindowSetMinSize(400, 300)`                  |
| **居中**        | `WindowCenter(ctx)`                   | `WindowCenter()`                              |
| **全屏/取消全屏**   | `WindowFullscreen(ctx)`               | `WindowFullscreen()`                          |
| **显示/隐藏**     | `WindowShow(ctx)` / `WindowHide(ctx)` | `WindowShow()` / `WindowHide()`               |
| **设为置顶**      | `WindowSetAlwaysOnTop(ctx, true)`     | `WindowSetAlwaysOnTop(true)`                  |
| **拖动窗口**      | (仅 JS)                                | 在 HTML 元素上设置 `style="--wails-draggable:drag"` |
<!--rehype:className=wrap-text left-align-->

### 对话框 (Dialog)
<!--rehype:wrap-class=col-span-3-->

#### Go 端

```go
dialogOpts := &runtime.OpenDialogOptions{ Title: "Select File" }
filePath, err := runtime.OpenFileDialog(app.ctx, *dialogOpts)
```

| 对话框类型    | Go 方法 (`runtime.*`)                                        |
| -------- | ---------------------------------------------------------- |
| **信息框**  | `MessageDialog(ctx, runtime.MessageDialogOptions{...})`    |
| **打开文件** | `OpenFileDialog(ctx, runtime.OpenDialogOptions{...})`      |
| **保存文件** | `SaveFileDialog(ctx, runtime.SaveDialogOptions{...})`      |
| **打开目录** | `OpenDirectoryDialog(ctx, runtime.OpenDialogOptions{...})` |
<!--rehype:className=wrap-text left-align-->

#### JavaScript 端

```js
import { OpenFileDialog } from '../wailsjs/runtime';

async function selectFile() {
    const filePath = await OpenFileDialog({ title: "Select File" });
}
```

### 菜单 (Menu)
<!--rehype:wrap-class=col-span-2-->

```go
// main.go
appMenu := menu.NewMenu()
fileMenu := appMenu.AddSubmenu("File")
fileMenu.AddText("Quit", keys.CmdOrCtrl("q"), func(_ *menu.CallbackData) {
    runtime.Quit(app.ctx)
})

err := wails.Run(&options.App{
    // ...
    Menu: appMenu,
})
```

| 菜单项类型   | 示例                                                        |
| ------- | --------------------------------------------------------- |
| **文本项** | `menu.AddText("Item", accelerator, callback)`             |
| **复选框** | `menu.AddCheckbox("Toggle", true, accelerator, callback)` |
| **分隔符** | `menu.AddSeparator()`                                     |
| **子菜单** | `menu.AddSubmenu("Submenu")`                              |

<!--rehype:className=wrap-text -->

### 其他 Runtime API

#### 日志

```go
// Go 示例 (`runtime.*`) 
LogInfo(ctx, "Message") 
// JS 示例 (`runtime.*`)
LogInfo("Message")      
```

#### 剪贴板

```go
// Go 示例 (`runtime.*`) 
ClipboardSetText(ctx, "text")
// JS 示例 (`runtime.*`)
ClipboardSetText("text")
```

应用打包与分发
---

### Windows 打包
<!--rehype:wrap-class=col-span-2 row-span-2-->

#### <red>■</red> 默认生成: `.exe` 可执行文件
<!--rehype:style=text-align: left;font-weight: bold;-->
  
```bash
$ wails build -platform windows/amd64
```

#### <red>■</red> 生成 NSIS 安装程序
<!--rehype:style=text-align: left;font-weight: bold;-->

**前提条件**: 需要预先安装 [NSIS (Nullsoft Scriptable Install System)](https://nsis.sourceforge.io/Download)。

- **下载 NSIS**: 从 [NSIS 官方网站](https://nsis.sourceforge.io/Download) 下载最新版本的 NSIS 安装程序。
- **安装 NSIS**: 运行安装程序并按照提示完成安装。**确保**在安装过程中选择将 NSIS 添加到系统的 `PATH` 环境变量中，以便 `makensis` 命令可以在命令行中全局访问。
- **验证安装**:
  
  ```bash
  $ makensis -VERSION
  ```

  如果安装正确，您将看到 NSIS 的版本号输出。

**生成安装程序**:

```bash
$ wails build -platform windows/amd64 -nsis
```

#### <red>■</red> 处理 WebView2 依赖
<!--rehype:style=text-align: left;font-weight: bold;-->

`download`: 提示用户下载 WebView2。

```bash
$ wails build -platform windows/amd64 -webview2 download
```

`embed`: 将 WebView2 嵌入到应用中（推荐）。

```bash
$ wails build -platform windows/amd64 -webview2 embed
```

`browser`: 在浏览器中打开下载页面。

```bash
$ wails build -platform windows/amd64 -webview2 browser
```

### macOS 打包

#### <red>■</red> 默认生成: `.app` 应用程序包
<!--rehype:style=text-align: left;font-weight: bold;-->

```bash
$ wails build -platform darwin/amd64
```

#### <red>■</red> 代码签名与公证
<!--rehype:style=text-align: left;font-weight: bold;-->

需要通过 Apple 开发者账户进行 **代码签名** 和 **公证** 才能分发。

#### <red>■</red> 跳过打包成 `.app` 步骤
<!--rehype:style=text-align: left;font-weight: bold;-->

```bash
$ wails build -platform darwin/amd64 -skippackage
```
<!--rehype:className=wrap-text-->

### Linux 打包

#### <red>■</red> 生成可执行文件
<!--rehype:style=text-align: left;font-weight: bold;-->

```bash
$ wails build -platform linux/amd64
```

#### <red>■</red> 打包成 `.deb`
<!--rehype:style=text-align: left;font-weight: bold;-->

```bash
$ wails build -platform linux/amd64 -deb
```

#### <red>■</red> 打包成 `.rpm`
<!--rehype:style=text-align: left;font-weight: bold;-->

```bash
$ wails build -platform linux/amd64 -rpm
```

---

#### AppImage 支持

Wails 不直接内置对 AppImage 的支持，但可以使用外部工具手动创建。使用 `appimagetool`:

```shell
appimagetool ./your-app-dir
```

**安装 `appimagetool`**:

- 您可以从 [AppImage 官方网站](https://appimage.org/) 获取 `appimagetool`。
- 下载后，将其添加到您的 `PATH` 中以便全局访问。

## 进阶主题与杂项

### 平台特定构建选项
<!--rehype:wrap-class=col-span-2 row-span-2-->

在 `main.go` 的 `wails.Run()` 中为不同平台提供细粒度配置。

```go
err := wails.Run(&options.App{
    // ...
    Windows: &windows.Options{
        WebviewIsTransparent: true, // WebView2 背景透明
        WindowIsTranslucent:  true, // 窗口背景透明
        DisableWindowIcon:    false, // 禁用窗口图标
        Theme:                windows.SystemDefault, // 主题设置
    },
    Mac: &mac.Options{
        TitleBar: &mac.TitleBar{
            TitlebarAppearsTransparent: true, // 透明标题栏
            HideTitle:                  false, // 隐藏标题
            HideTitleBar:               false, // 隐藏标题栏
            FullSizeContent:            false, // 全尺寸内容
            UseToolbar:                 false, // 使用工具栏
        },
        About: &mac.AboutInfo{
            Title:   "My Awesome App",
            Message: "© 2025 Me",
            Icon:    icon, // 应用图标
        },
        WebviewIsTransparent: true, // WebView 透明
        WindowIsTranslucent:  false, // 窗口半透明
    },
    Linux: &linux.Options{
        Icon: icon, // Linux 图标
        WindowIsTranslucent: false, // 窗口半透明
    },
})
```

### 使用 TypeScript

Wails 会自动为 Go 绑定的方法生成 TypeScript 定义。

```bash
# wails.json
"frontend:build": "npm run build"

# package.json
"scripts": {
  "build": "tsc && vite build"
}
```

### 上下文 (Context)

使用 Go 的 context 进行更好的资源管理和取消操作。

```go
// app.go
func (a *App) LongRunningTask(ctx context.Context) error {
    select {
    case <-time.After(5 * time.Second):
        return nil
    case <-ctx.Done():
        return ctx.Err() // 任务被取消
    }
}
```

### 调试

- **Go 部分**: 使用 `wails dev -debug` 启动并附加您的 Go 调试器。
- **前端部分**: 在 `wails dev` 模式下，右键点击应用，选择“检查”打开浏览器开发者工具。

### 性能优化

#### 构建优化

```bash
# 使用构建标签优化
$ wails build -tags production

# 使用 ldflags 减小二进制文件大小
$ wails build -ldflags "-s -w"

# 使用 UPX 压缩
$ wails build -upx

# 组合使用多个优化选项
$ wails build -ldflags "-s -w" -upx -tags production
```

#### 前端优化 (wails.json)

```json
{
  "frontend:build": "npm run build:prod",
  "frontend:dev:build": "npm run build:dev"
}
```

### 常见问题与解决方案

#### 构建问题

```bash
# 清理构建缓存
$ wails build -clean

# 强制重新生成绑定
$ wails generate module -f

# 检查环境配置
$ wails doctor
```

#### 开发问题

```bash
# 重置前端依赖
$ rm -rf frontend/node_modules
$ wails dev

# 使用外部开发服务器
$ wails dev -frontenddevserverurl http://localhost:3000
```

参考资料
---

- [Wails 官方文档](https://wails.io/) _(wails.io)_
- [Wails GitHub 仓库](https://github.com/wailsapp/wails) _(github.com)_
- [Wails Discord 社区](https://discord.gg/4K6VHPkG5c) _(discord.gg)_
- [Wails 模板库](https://github.com/wailsapp/awesome-wails) _(github.com)_
