Electron 备忘清单
====

[![NPM version](https://img.shields.io/npm/v/electron.svg?style=flat)](https://www.npmjs.com/package/electron)
[![Downloads](https://img.shields.io/npm/dm/electron.svg?style=flat)](https://www.npmjs.com/package/electron)
[![Repo Dependents](https://badgen.net/github/dependents-repo/electron/electron)](https://github.com/electron/electron/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/electron/electron)

此快速参考备忘单提供了 Electron v21 API 说明和使用示例
<!--rehype:style=padding-top: 12px;-->

入门
----

### 快速开始
<!--rehype:wrap-class=row-span-4-->

[Electron](https://www.electronjs.org/) 是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架

#### 创建你的应用程序

- 安装

  ```bash
  mkdir my-app && cd my-app
  npm init
  ```

  在项目根目录会生成 `package.json`

  ```json
  {
    "name": "my-app",
    "version": "1.0.0",
    "description": "Hello World!",
    "main": "main.js",
    "author": "Jane Doe",
    "license": "MIT"
  }
  ```

- 安装依赖包

  ```bash
  npm install --save-dev electron
  ```

- 添加开发模式打开您的应用命令

  ```js
  "scripts": {
    "start": "electron ."
  }
  ```

- 运行命令，启动应用程序

  ```bash
  npm start
  ```

  入口都是 `main` 文件。这个文件控制了主进程，它运行在一个完整的Node.js环境中
- 创建 `index.html` 页面

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
      <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello World!</h1>
    </body>
  </html>
  ```

- 窗口中打开您的页面

  ```js
  const {
    app,
    BrowserWindow
  } = require('electron');
  
  const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    });
    win.loadFile('index.html');
  }

  app.whenReady().then(() => {
    createWindow()
  })
  ```
<!--rehype:className=style-timeline-->

### 关闭所有窗口时退出应用

```js
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

### 创建无边框窗口

```js
const win = new BrowserWindow({
  frame: false
})
```

### 自定义标题栏样式

```js
const win = new BrowserWindow({
  titleBarStyle: 'hidden'
})
```

### 控制红绿灯 (macOS)

```js
const win = new BrowserWindow({
  titleBarStyle: 'customButtonsOnHover'
})
```

### 通过预加载脚本从渲染器访问 Node.js
<!--rehype:wrap-class=col-span-2-->

创建一个名为 preload.js 的新脚本如下

```js
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})
```

在创建窗口方法中传递 `preload` 参数

```js
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}
```

### 将的 process.versions 对象暴露给渲染器

```js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'versions', {
    // 能暴露的不仅仅是函数，我们还可以暴露变量
    node: 
      () => process.versions.node,
    chrome: 
      () => process.versions.chrome,
    electron: 
      () => process.versions.electron,
  }
);
```

通过 `preload.js` 脚本将 `versions` 这一全局变量暴露给渲染器

### 启用拼写检查器

```js
const myWindow = new BrowserWindow({
  webPreferences: {
    spellcheck: true
  }
})
```

设置拼写检查器以检查英语 和 法语

```js
myWindow.session
  .setSpellCheckerLanguages([
    'en-US', 'fr'
  ])
```

app
---
<!--rehype:body-class=cols-6-->

### 事件绑定方法使用示例
<!--rehype:wrap-class=col-span-3-->

```js
const { app } = require('electron');

app.on('session-created', (session) => {
  console.log(session);
})

// 立即重启当前实例并向新的实例添加新的命令行参数的示例
app.relaunch({
  args: process.argv.slice(1).concat(['--relaunch']);
})

app.exit(0);
```

### 方法
<!--rehype:wrap-class=col-span-3 row-span-4-->

:- | :-
:- | :-
`quit` | 尝试关闭所有窗口 [#](https://www.electronjs.org/zh/docs/latest/api/app#appquit)
`exit` | 使用 exitCode 立即退出 [#](https://www.electronjs.org/zh/docs/latest/api/app#appexitexitcode)
`relaunch` | 当前实例退出，重启应用 [#](https://www.electronjs.org/zh/docs/latest/api/app#apprelaunchoptions)
`isReady` | 已完成初始化返回 boolean [#](https://www.electronjs.org/zh/docs/latest/api/app#appisready)
`whenReady` | 初始化完成 [#](https://www.electronjs.org/zh/docs/latest/api/app#appwhenready)
`focus` | 获得焦点/激活的 app [#](https://www.electronjs.org/zh/docs/latest/api/app#appfocusoptions)
`hide` | 隐藏所有的应用窗口，不是最小化 [#](https://www.electronjs.org/zh/docs/latest/api/app#apphide-macos)
`isHidden` _(mac)_ | 所有窗口是否都被隐藏 [#](https://www.electronjs.org/zh/docs/latest/api/app#appishidden)
`show` _(mac)_ | 显示隐藏后的应用程序窗口 [#](https://www.electronjs.org/zh/docs/latest/api/app#appshow-macos)
`setAppLogsPath` | 设置或创建一个您的应用程序日志目录 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetapplogspathpath)
`getAppPath` | 获取当前应用程序目录 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetapppath)
`getPath(name)` | 与 name 关联的目录或文件的路径 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetpathname)
`getFileIcon` | 一个 NativeImage 类型的应用图标 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetfileiconpath-options)
`setPath(name)` | 重写 name 的路径特定文件夹或文件 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetpathname-path)
`getVersion` | 应用程序的版本号 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetversion)
`getName` | 应用程序的名称 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetname)
`setName` | 设置当前应用程序的名字 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetname)
`getLocale` | 当前应用程序区域 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetlocale)
`getLocaleCountryCode` | 获取双字母 [ISO 3166](https://www.iso.org/iso-3166-country-codes.html) 国家代码 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetlocalecountrycode)
`getSystemLocale` | 当前系统语言环境 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetsystemlocale)
`addRecentDocument` _(win/mac)_ | 最近打开的文件列表添加新路径 [#](https://www.electronjs.org/zh/docs/latest/api/app#appaddrecentdocumentpath-macos-windows)
`clearRecentDocuments` _(win/mac)_ | 清空最近打开的文档列表[#](https://www.electronjs.org/zh/docs/latest/api/app#appclearrecentdocuments)
`setAsDefaultProtocolClient` | 设置协议(URI scheme)默认处理程序 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetasdefaultprotocolclientprotocol-path-args)
`removeAsDefaultProtocolClient` | 移除默认处理器 [#](https://www.electronjs.org/zh/docs/latest/api/app#appremoveasdefaultprotocolclientprotocol-path-args-macos-windows)
`isDefaultProtocolClient` | 可执行程序是否是协议 [#](https://www.electronjs.org/zh/docs/latest/api/app#appisdefaultprotocolclientprotocol-path-args)
`getApplicationNameForProtocol` | 返回默认处理器的应用程序名称 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetapplicationnameforprotocolurl)
`getApplicationInfoForProtocol` _(win/mac)_ | 返回包含应用程序名称 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetapplicationinfoforprotocolurl-macos-windows)
`setUserTasks` _(win)_ | 添加 tasks 到Jump List的Tasks类别 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetusertaskstasks-windows)
`getJumpListSettings` _(win)_ | 获取跳转列表 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetjumplistsettings-windows)
`setJumpList` _(win)_ | 设置跳转列表 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetjumplistcategories-windows)
`requestSingleInstanceLock` | 返回应用程序实例是否成功取了锁 [#](https://www.electronjs.org/zh/docs/latest/api/app#apprequestsingleinstancelockadditionaldata)
`hasSingleInstanceLock` | 返回应用实例当前是否持有单例锁 [#](https://www.electronjs.org/zh/docs/latest/api/app#apphassingleinstancelock)
`releaseSingleInstanceLock` | 释放所有创建的锁 [#](https://www.electronjs.org/zh/docs/latest/api/app#appreleasesingleinstancelock)
`setUserActivity` _(mac)_ | 创建 NSUserActivity 并将其设置为当前活动 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetuseractivitytype-userinfo-webpageurl-macos)
`getCurrentActivityType` _(mac)_ | 正在运行的 activity 的类型 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetcurrentactivitytype-macos)
`invalidateCurrentActivity` _(mac)_ | 使当前的Handoff用户活动无效 [#](https://www.electronjs.org/zh/docs/latest/api/app#appinvalidatecurrentactivity-macos)
`resignCurrentActivity` _(mac)_ | 将当前 Handoff 用户活动标记为非活动，但不使其失效 [#](https://www.electronjs.org/zh/docs/latest/api/app#appresigncurrentactivity-macos)
`updateCurrentActivity` _(mac)_ | 将项目从 用户信息 合并到其当前 用户信息 字典中 [#](https://www.electronjs.org/zh/docs/latest/api/app#appupdatecurrentactivitytype-userinfo-macos)
`setAppUserModelId` _(win)_ | 改变当前应用的 Application User Model ID 为 id [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetappusermodelidid-windows)
`setActivationPolicy` _(mac)_ | 为给定应用设置激活策略 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetactivationpolicypolicy-macos)
`importCertificate` _(linux)_ | 将 pkcs12 格式的证书导入到平台证书库 [#](https://www.electronjs.org/zh/docs/latest/api/app#appimportcertificateoptions-callback-linux)
`configureHostResolver` | 配置主机解析器 (DNS 和 DNS-over-HTTPS) [#](https://www.electronjs.org/zh/docs/latest/api/app#appconfigurehostresolveroptions)
`disableHardwareAcceleration` | 禁用当前应用程序的硬件加速 [#](https://www.electronjs.org/zh/docs/latest/api/app#appdisablehardwareacceleration)
`disableDomainBlockingFor3DAPIs` | GPU 进程频繁崩溃，在每个域的基础上重新启动，禁用该行为 [#](https://www.electronjs.org/zh/docs/latest/api/app#appdisabledomainblockingfor3dapis)
`getAppMetrics` | 返回 [ProcessMetric[]](https://www.electronjs.org/zh/docs/latest/api/structures/process-metric) [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetappmetrics)
`getGPUFeatureStatus` | 返回 [GPUFeatureStatus](https://www.electronjs.org/zh/docs/latest/api/structures/gpu-feature-status) [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetgpufeaturestatus)
`getGPUInfo` | GPU 信息 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetgpuinfoinfotype)
`setBadgeCount` _(mac/linux)_ | 应用设置计数器角标 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetbadgecountcount-linux-macos)
`getBadgeCount` _(mac/linux)_ | 获取计数器(badge)显示的当前值 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetbadgecount-linux-macos)
`isUnityRunning` _(linux)_ | 前桌面环境是否为 Unity 启动器 [#](https://www.electronjs.org/zh/docs/latest/api/app#appisunityrunning)
`getLoginItemSettings` _(mac/win)_ | 为 openAtLogin 设置相同的参数已确保正确的设置 [#](https://www.electronjs.org/zh/docs/latest/api/app#appgetloginitemsettingsoptions-macos-windows)
`setLoginItemSettings` _(mac/win)_ | 传递指定应用程序名称的参数 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetloginitemsettingssettings-macos-windows)
`isAccessibilitySupportEnabled` _(mac/win)_ | 是否开启了辅助功能 [#](https://www.electronjs.org/zh/docs/latest/api/app#appisaccessibilitysupportenabled-macos-windows)
`setAccessibilitySupportEnabled` _(mac/win)_ | 启用或禁用访问权限树视图 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetaccessibilitysupportenabledenabled-macos-windows)
`showAboutPanel` | 显示程序的"关于"面板选项 [#](https://www.electronjs.org/zh/docs/latest/api/app#appshowaboutpanel)
`setAboutPanelOptions` | 设置 "关于" 面板选项 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetaboutpaneloptionsoptions)
`isEmojiPanelSupported` | 当前操作系统是否支持本地 emoji 选择器 [#](https://www.electronjs.org/zh/docs/latest/api/app#appisemojipanelsupported)
`showEmojiPanel` _(mac/win)_ | 打开系统自身的emjio选取器 [#](https://www.electronjs.org/zh/docs/latest/api/app#appshowemojipanel)
`startAccessingSecurityScopedResource` _(mac)_ | 开始访问安全范围内的资源 [#](https://www.electronjs.org/zh/docs/latest/api/app#appstartaccessingsecurityscopedresourcebookmarkdata-macos)
`enableSandbox` | 在应用程序上启用完全沙盒模式 [#](https://www.electronjs.org/zh/docs/latest/api/app#appenablesandbox)
`isInApplicationsFolder` _(mac)_ | 是否从系统应用程序文件夹运行 [#](https://www.electronjs.org/zh/docs/latest/api/app#appisinapplicationsfolder-macos)
`moveToApplicationsFolder` _(mac)_ | [#](https://www.electronjs.org/zh/docs/latest/api/app#appmovetoapplicationsfolderoptions-macos)
`isSecureKeyboardEntryEnabled` _(mac)_ | 是否已启用安全键盘输入 [#](https://www.electronjs.org/zh/docs/latest/api/app#appissecurekeyboardentryenabled-macos)
`setSecureKeyboardEntryEnabled` _(mac)_ | 在应用中启用安全键盘输入 [#](https://www.electronjs.org/zh/docs/latest/api/app#appsetsecurekeyboardentryenabledenabled-macos)

### 启动时激活主实例窗口的示例
<!--rehype:wrap-class=col-span-3-->

```js
const { app } = require('electron');
let myWindow = null;

const additionalData = { myKey: 'myValue' };
const gotTheLock = app.requestSingleInstanceLock(additionalData);

if (!gotTheLock) {
  app.quit();
} else {
  app.on(
    'second-instance',
    (event, commandLine, workingDirectory, additionalData) => {
      // 输出从第二个实例中接收到的数据
      console.log(additionalData);

      // 有人试图运行第二个实例，我们应该关注我们的窗口
      if (myWindow) {
        if (myWindow.isMinimized()) myWindow.restore();
        myWindow.focus();
      }
    }
  )

  // 创建 myWindow, 加载应用的其余部分, etc...
  app.whenReady().then(() => {
    myWindow = createWindow();
  })
}
```

### 事件
<!--rehype:wrap-class=col-span-3-->

:- | :-
:- | :-
`will-finish-launching` | 基础的启动的时候被触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-will-finish-launching)
`ready` | 完成初始化时，触发一次 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-ready)
`window-all-closed` | 在程序关闭窗口前发信号 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-window-all-closed)
`before-quit` | 当所有窗口被关闭后触发，应用程序将退出 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-before-quit)
`will-quit` | 所有窗口被关闭后触发，应用程序将退出 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-will-quit)
`quit` | 在应用程序退出时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-quit)
`open-file` _(mac)_ | 在应用中打开一个文件时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-open-file-macos)
`open-url` _(mac)_ | 应用中打开一个 URL 时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-open-url-macos)
`activate` _(mac)_ | 当应用被激活时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-activate-macos)
`did-become-active` _(mac)_ | 不同设备的活动想要恢复时在切换期间触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-did-become-active-macos)
`continue-activity` _(mac)_ | 不同设备的活动通过 Handoff 想要恢复时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-continue-activity-macos)
`will-continue-activity` _(mac)_ | 恢复来自不同设备的活动之前在切换期间触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-will-continue-activity-macos)
`continue-activity-error` _(mac)_ | 不同设备的活动无法恢复时在切换期间触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-continue-activity-error-macos)
`activity-was-continued` _(mac)_ | 活动在另一个设备上成功恢复后切换期间触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-activity-was-continued-macos)
`update-activity-state` _(mac)_ | 当即将在另一台设备上恢复切换时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-update-activity-state-macos)
`new-window-for-tab` _(mac)_ | 用户点击原生的 macOS 新标签按钮时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-new-window-for-tab-macos)
`browser-window-blur` | 当 browserWindow 变得模糊时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-browser-window-blur)
`browser-window-focus` | 当 browserWindow 获得焦点时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-browser-window-focus)
`browser-window-created` | 创建新的 browserWindow 时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-browser-window-created)
`web-contents-created` | 创建新的 webContents 时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-web-contents-created)
`certificate-error` | 当对 url 的 certificate 证书验证失败触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-certificate-error)
`select-client-certificate` | 当一个客户证书被请求的时候发出 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-select-client-certificate)
`login` | 当 webContents 要进行基本身份验证时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-login)
`gpu-info-update` | 每当有 GPU 信息更新时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-gpu-info-update)
~~`gpu-process-crashed`~~ ~~废弃~~ | 当 gpu 进程崩溃或关闭(杀死)时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-gpu-process-crashed-已废弃)
~~`renderer-process-crashed`~~ ~~废弃~~ | 渲染器进程崩溃或关闭(杀死)时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-renderer-process-crashed-已废弃)
`render-process-gone` | 渲染器进程意外消失时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-render-process-gone)
`child-process-gone` | 子进程意外消失时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-child-process-gone)
`accessibility-support-changed` | 当 Chrome 的辅助功能状态改变时触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-accessibility-support-changed--macos---windows-)
`session-created` | 创建了一个新的 session 后被触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-session-created)
`second-instance` | 在你的应用程序的首个实例中触发 [#](https://www.electronjs.org/zh/docs/latest/api/app#事件-second-instance)

### 属性
<!--rehype:wrap-class=col-span-3-->

:- | :-
:- | :-
`accessibilitySupportEnabled` _(mac/win)_ | 是否开启了辅助功能 [#](https://www.electronjs.org/zh/docs/latest/api/app#appaccessibilitysupportenabled-macos-windows)
`applicationMenu` | 传递 Menu 来给此属性赋值 [#](https://www.electronjs.org/zh/docs/latest/api/app#appapplicationmenu)
`badgeCount` _(mac/linux)_ | 返回应用角标计数的 Integer 属性 [#](https://www.electronjs.org/zh/docs/latest/api/app#appbadgecount-linux-macos)
`commandLine` | Chromium 使用的命令行参数 [#](https://www.electronjs.org/zh/docs/latest/api/app#appcommandline-只读)
`dock` _(mac/只读)_ | 用户dock中对应用图标进行操作 [#](https://www.electronjs.org/zh/docs/latest/api/app#appdock-macos-只读)
`isPackaged` _(只读)_ | 应用是否已经打包 [#](https://www.electronjs.org/zh/docs/latest/api/app#appispackaged-只读)
`name` | 当前应用程序的名称 [#](https://www.electronjs.org/zh/docs/latest/api/app#appname)
`userAgentFallback` | 全局回退的用户代理字符串 [#](https://www.electronjs.org/zh/docs/latest/api/app#appuseragentfallback)
~~`runningUnderRosettaTranslation`~~ _(mac)_ | 提示下载应用程序的 arm64 版本 [#](https://www.electronjs.org/zh/docs/latest/api/app#apprunningunderrosettatranslation-macos-只读-弃用)
`runningUnderARM64Translation` _(mac/win)_ | 前应用正在使用 ARM64 运行环境 [#](https://www.electronjs.org/zh/docs/latest/api/app#apprunningunderarm64translation-只读-macos-windows)

BrowserWindow
----
<!--rehype:body-class=cols-6-->

### 参数
<!--rehype:wrap-class=col-span-3 row-span-2-->

:- | :-
:- | :-
`width` _整数_ | 窗口的宽度(以像素为单位)。默认值 _(800)_
`height` _整数_ | 窗口的高度(以像素为单位)。默认值 _(600)_
`x` _整数_ (**可选**) | 窗口相对于屏幕左侧偏移量。默认值窗口居中
`y` _整数_ (**可选**) | 窗口相对于屏幕顶端偏移量。默认值窗口居中
`useContentSize` _boolean_ | _(宽)_ 和 _(高)_ 设置为web页面的尺寸。默认值 _(false)_
`center` _boolean_ | 窗口是否在屏幕居中。默认值 _(false)_
`minHeight`  _整数_ | 窗口的最小高度。默认值 _(0)_
`maxWidth`  _整数_ | 窗口的最大宽度。默认值不限
`maxHeight` _整数_ | 窗口的最大高度。默认值不限
`resizable` _boolean_ | 窗口大小是否可调整。默认值 _(true)_
`movable` _boolean_ _(win/mac)_ | 窗口是否可移动。默认值 _(true)_
`minimizable` _boolean_ _(win/mac)_ | 窗口是否可最小化。默认值 _(true)_
`maximizable` _boolean_ _(win/mac)_ | 窗口是否最大化。默认值 _(true)_
`closable` _boolean_ _(win/mac)_ | 窗口是否可关闭。默认值 _(true)_
`focusable` _boolean_ | 窗口是否可以聚焦. 默认值 _(true)_。在 Windows 中设置 _(focusable: false)_ 也意味着设置了 _(skipTaskbar: true)_ 在 Linux 中设置 _(focusable: false)_ 时窗口停止与 wm 交互, 并且窗口将始终置顶
`alwaysOnTop` _boolean_ | 窗口是否永远在别的窗口的上面。默认值 _(false)_
`fullscreen` _boolean_ | 窗口是否全屏。为 _(false)_ 时 macOS 上按钮将被隐藏或禁用。默认值 _(false)_
`fullscreenable` _boolean_ | 窗口是否可以进入全屏状态。macOS上，最大化/缩放按钮是否可用 默认值 _(true)_
`simpleFullscreen` _boolean_ _(mac)_ | 在 macOS 上使用 pre-Lion 全屏。默认值 _(false)_
`skipTaskbar` _boolean_ _(win/mac)_ | 是否在任务栏中显示窗口。默认值 _(false)_
`kiosk` _boolean_ | 窗口是否进入kiosk模式。默认值 _(false)_
`title` _string_ | 默认窗口标题 默认为 _("Electron")_ 。如果由 _(loadURL())_ 加载的HTML文件中含有标签 _(&lt;title&gt;)_ ，此属性将被忽略
`icon` _NativeImage/string_ | 窗口图标。在 Windows 上推荐使用 _(ICO)_ 图标来获得最佳的视觉效果, 默认使用可执行文件的图标
`show` _boolean_ | 窗口是否在创建时显示。默认值 _(true)_
`paintWhenInitiallyHidden` _boolean_ | 当 _(show)_ 为 _(false)_ 并且渲染器刚刚被创建时，它是否应激活。为了让 _(document.visibilityState)_ 在 _(show: false)_ 的情况下第一次加载时正确地工作，你应该把这个设置成 _(false)_。设置为 _(false)_ 将会导致 _(ready-to-show)_ 事件不触发。默认值 _(true)_
`frame` _boolean_ | 设置为 _(false)_ 时可以创建一个无边框窗口，默认值 _(true)_
`parent` _BrowserWindow_ | 指定父窗口 默认值 _(null)_
`modal` _boolean_ | 当前是否为模态窗口。只有当窗口是子窗口时才起作用。默认值 _(false)_
`acceptFirstMouse` _boolean_ _(mac)_ | 点击 非活动窗口是否会穿透到 web contents。默认值 _(false)_
`disableAutoHideCursor` _boolean_ | 是否在打字时隐藏光标。默认值 _(false)_
`autoHideMenuBar` _boolean_ | 自动隐藏菜单栏，除非按了_(Alt)_键。默认值 _(false)_
`enableLargerThanScreen` _boolean_ _(mac)_  | 使窗口尺寸可大于屏幕的大小。其他操作系统默认允许大于屏幕的窗口。默认值 _(false)_
`backgroundColor` _string_ | 窗口背景色，格式为 Hex, RGB, RGBA, HSL, HSLA 或 CSS 命名颜色。如果 _(transparent)_ 设置为 _(true)_，则支持 #AARRGGBB 格式的透明。默认值 _(#FFF)_（白色）
`hasShadow` _boolean_ | 窗口是否有阴影. 默认值 _(true)_
`opacity` _number_ _(win/mac)_ | 设置窗口的初始透明度，在 0.0（全透明）和 1.0（完全不透明）之间 。 目前仅在 Windows 和 macOS上实现。
`darkTheme` _boolean_ | 强制窗口使用深色主题，只在部分GTK+3桌面环境下有效。 默认值 _(false)_.
`transparent` _boolean_ | 使窗口 <a href="/zh/docs/latest/tutorial/window-customization#create-transparent-windows">透明</a>。 默认值 _(false)_. 在Windows上，仅在无边框窗口下起作用。
`type` _string_ | 窗口的类型, 默认为普通窗口. 更多信息见下文
`visualEffectState` _string_ _(mac)_ | 在 macOS 上指定外观应如何响应窗口活动状态。 必须与 _(vibrancy)_ 属性一起使用。 可能的值有
`visualEffectState.followWindow` | 当窗口处于激活状态时，后台应自动显示为激活状态，当窗口处于非激活状态时，后台应自动显示为非激活状态。 默认为该值。
`visualEffectState.active` | 后台应一直显示为激活状态。
`visualEffectState.inactive` | 后台应一直显示为非激活状态。
`titleBarStyle` _string_ _(win/mac)_ | 窗口标题栏样式。默认值 _(default)_
`titleBarStyle.default` | 分别返回 _mac_ 或者 _win_ 的标准标题栏
`titleBarStyle.hidden` | 在一个隐藏的标题栏和一个全尺寸大小的内容窗口中取得结果。 在 macOS 内, 窗口将一直拥有位于左上的标准窗口控制器 _(“traffic lights”)_。 在 Windows上，当与 _(titleBarOverlay: true)_ 合并时，它将激活窗口控件叠加(详情请参阅 _(titleBarOverlay)_)，否则将不会显示窗口控件。
`titleBarStyle.hiddenInset` _(mac)_ | 隐藏标题栏，使用窗口边缘稍微小的红绿灯按钮替代。
`titleBarStyle.customButtonsOnHover` _(mac)_ | 隐藏的标题栏的全尺寸的内容窗口， 红绿灯按钮在鼠标悬停在窗口左上方时显示。**注意:**此选项目前是实验性的。
`trafficLightPosition` _Point_ _(mac)_ | 在无边框窗口中设置灯绿灯按钮位置。
`roundedCorners` _boolean_ _(mac)_ | 无边框窗口在 macOS 上，是否应该有圆角。 默认值为 _(true)_。 属性设置为 _(false)_ ，将阻止窗口是可全屏的。
~~`fullscreenWindowTitle`~~ _boolean_ _(mac)_ ~~_已弃用_~~ | _titleBarStyle_ 设置为 _(hiddenInset)_ 时，在 macOS 全屏模式下标题栏显示标题。默认值为 _(false)_.
`thickFrame` _boolean_ | 对 Windows 上的无框窗口使用 _(WS_THICKFRAME)_ 样式，会增加标准窗口框架。 设置为 _(false)_ 时将移除窗口的阴影和动画. 默认值为 _(true)_。
`vibrancy` _string_ _(mac)_ | 为窗口添加一种类型的动态效果，仅 macOS。 可以是 _(appearance-based)_，_(light)_，_(dark)_，_(titlebar)_，_(selection)_，_(menu)_，_(popover)_，_(sidebar)_，_(medium-light)_，_(ultra-dark)_，_(header)_，_(sheet)_，_(window)_，_(hud)_，_(fullscreen-ui)_，_(tooltip)_，_(content)_，_(under-window)_ 或 _(under-page)_。 请注意 _(appearance-based)_，_(light)_，_(dark)_，_(medium-light)_ 和 _(ultra-dark)_ 已弃用，在 macOS Catalina (10.15) 中已经移除。
`zoomToPageWidth` _boolean_ _(mac)_ | 在 macOS 上控制，当按住 option 点击工具栏绿色红绿灯按钮或点击窗口 &gt; 放大菜单项的行为。 如果为 _(true)_，窗口为将会缩放到适合宽度，若为 _(false)_ 将会放大到屏幕宽度。 这也会影响，直接调用 _(maximize())_ 的行为。 默认值为 _(false)_.
`tabbingIdentifier` _string_ _(mac)_ | 选项卡组名称，允许在原生选择卡中打开窗口，macOS 10.12+ 支持。 Windows 中，有相同选项卡标识的将会组合在一起。 这会添加一个原生新增选项卡按钮到你窗口的选项卡栏，同时 _(app)_ 和窗口允许接收 _(new-window-for-tab)_ 事件。
`webPreferences` _Object_ | 网页功能设置。
`webPreferences.devTools` _boolean_ | 是否开启 DevTools. 如果设置为 _(false)_, 则无法使用 _(BrowserWindow.webContents.openDevTools ())_ 打开 DevTools。 默认值为 _(true)_。
`webPreferences.nodeIntegration` _boolean_ | 是否启用Node integration. 默认值为 _(false)_.
`webPreferences.nodeIntegrationInWorker` _boolean_ | 是否在Web工作器中启用了Node集成. 默认值为 _(false)_. 更多内容参见 [多线程](https://www.electronjs.org/docs/latest/tutorial/multithreading)
`webPreferences.nodeIntegrationInSubFrames` _boolean_ **_实验性_**| 是否允许在子页面(iframe)或子窗口(child window)中集成Node.js； 预先加载的脚本会被注入到每一个iframe，你可以用 _(process.isMainFrame)_ 来判断当前是否处于主框架（main frame）中。
`webPreferences.preload` _string_ | 在页面运行其他脚本之前预先加载指定的脚本 无论页面是否集成Node, 此脚本都可以访问所有Node API 脚本路径为文件的绝对路径。 当 node integration 关闭时, 预加载的脚本将从全局范围重新引入node的全局引用标志[参考示例](https://www.electronjs.org/docs/latest/api/context-bridge#exposing-node-global-symbols)
`webPreferences.sandbox` _boolean_ | 如果设置该参数, 沙箱的渲染器将与窗口关联, 使它与Chromium OS-level 的沙箱兼容, 并禁用 Node. js 引擎。 它与 _(nodeIntegration)_ 的选项不同，且预加载脚本的 API 也有限制。[更多详情](https://www.electronjs.org/docs/latest/tutorial/sandbox)
`webPreferences.session` | [Session](https://www.electronjs.org/docs/latest/api/session#class-session) 设置页面的 session 而不是直接忽略 Session 对象, 也可用 _(partition)_ 选项来代替，它接受一个 partition 字符串. 同时设置了_(session)_ 和 _(partition)_时, _(session)_ 的优先级更高. 默认使用默认的 session.
`webPreferences.partition` |  string (optional) - 通过 session 的 partition 字符串来设置界面session. 如果 _(partition)_ 以 _(persist:)_开头, 该页面将使用持续的 session，并在所有页面生效，且使用同一个_(partition)_. 如果没有 _(persist:)_ 前缀, 页面将使用 in-memory session. 通过分配相同的 _(partition)_, 多个页可以共享同一会话。 默认使用默认的 session.
`webPreferences.zoomFactor` _number_ | 页面的默认缩放系数, _(3.0)_ 表示 _(300%)_。 默认值为 _(1.0)_.
`webPreferences.javascript` _boolean_ | 是否启用 JavaScript 支持。 默认值为 _(true)_。
`webPreferences.webSecurity` _boolean_ | 当设置为 _(false)_, 它将禁用同源策略 (通常用来测试网站), 如果此选项不是由开发者设置的，还会把 _(allowRunningInsecureContent)_设置为 _(true)_. 默认值为 _(true)_
`webPreferences.allowRunningInsecureContent` _boolean_ | 允许一个 https 页面运行来自http url的JavaScript, CSS 或 plugins。 默认值为 _(false)_
`webPreferences.images` _boolean_ | 允许加载图片。 默认值为 _(true)_
`webPreferences.imageAnimationPolicy` _string_ | 指定如何运行图像动画 (比如： GIF等).  可以是 _(animate)_, _(animateOnce)_ 或 _(noAnimation)_。默认值为 _(animate)_
`webPreferences.textAreasAreResizable` _boolean_ | 允许调整 TextArea 元素大小。 默认值为 _(true)_
`webPreferences.webgl` _boolean_ | 启用 WebGL 支持。 默认值为 _(true)_
`webPreferences.plugins` _boolean_ | 是否应该启用插件。 默认值为 _(false)_
`webPreferences.experimentalFeatures` _boolean_ | 启用 Chromium 的实验功能。 默认值为 _(false)_
`webPreferences.scrollBounce` _boolean_ _(mac)_ | 启用滚动回弹（橡皮筋）效果。 默认值为 _(false)_
`webPreferences.enableBlinkFeatures`_string_ | 以 _(逗号)_ 分隔的需要启用的特性列表，譬如 _(CSSVariables,KeyboardEventKey)_ 在 [RuntimeEnabledFeatures.json5](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/runtime_enabled_features.json5?l=70) 文件中查看被支持的所有特性
`webPreferences.disableBlinkFeatures` _string_ | 以 _(,)_ 分隔的禁用特性列表, 如 _(CSSVariables,KeyboardEventKey)_ 在 [RuntimeEnabledFeatures.json5](https://cs.chromium.org/chromium/src/third_party/blink/renderer/platform/runtime_enabled_features.json5?l=70) 文件中查看被支持的所有特性
`defaultFontFamily` _Object_ | 为 font-family 设置默认字体
`defaultFontFamily.standard` _string_ |默认值为 _(Times New Roman)_
`defaultFontFamily.serif` _string_ | 默认值为 _(Times New Roman)_
`defaultFontFamily.sansSerif` _string_ | 默认值为 _(Arial)_
`defaultFontFamily.monospace` _string_ | 默认值为 _(Courier New)_
`defaultFontFamily.cursive` _string_ | 默认值为 _(Script)_
`defaultFontFamily.fantasy` _string_ | 默认值为 _(Impact)_
`defaultFontSize` _Integer_ | 默认值为 _(16)_
`defaultMonospaceFontSize` _Integer_ | 默认值为 _(13)_
`minimumFontSize` _Integer_ | 默认值为 _(0)_
`defaultEncoding` _string_ | 默认值为 _(ISO-8859-1)_
`backgroundThrottling` _boolean_ | 是否在页面成为背景时限制动画和计时器。 这也会影响到 _[Visibility API](https://www.electronjs.org/docs/latest/api/browser-window#page-visibility)_。默认值为 _(true)_
`offscreen` _boolean_ | 是否绘制和渲染可视区域外的窗口。默认值为 _(false)_。更多详情, 请参见 [offscreen rendering tutorial](https://www.electronjs.org/docs/latest/tutorial/offscreen-rendering)
`contextIsolation` _boolean_ | 是否在独立 JavaScript 环境中运行 Electron API和指定的_(preload)_ 脚本。默认为 _(true)_。 _(预加载)_脚本所运行的上下文环境只能访问其自身专用的 _(文档)_ 和全局 _(窗口)_，其自身一系列内置的JavaScript (_(Array)_, _(Object)_, _(JSON)_, 等等) 也是如此，这些对于已加载的内容都是不可见的。 Electron API 将只在_(预加载)_脚本中可用，在已加载页面中不可用。 这个选项应被用于加载可能不被信任的远程内容时来确保加载的内容无法篡改_(预加载)_脚本和任何正在使用的Electron api。  该选项使用的是与[Chrome内容脚本](https://developer.chrome.com/extensions/content_scripts#execution-environment)相同的技术。你可以在开发者工具Console选项卡内顶部组合框中选择 'Electron Isolated Context'条目来访问这个上下文
`webviewTag` _boolean_ | 是否启用 [_(&lt;webview&gt;)_ tag](https://www.electronjs.org/docs/latest/api/webview-tag)标签。默认值为 _(false)_。**注意:** 为 _(&lt; webview&gt;)_ 配置的 _(preload)_ 脚本在执行时将启用节点集成, 因此应确保远程或不受信任的内容无法创建恶意的 _(preload)_ 脚本 。 可以使用 [webContents](https://www.electronjs.org/docs/latest/api/web-contents) 上的 _(will-attach-webview)_ 事件对 _(preload)_ 脚本进行剥离, 并验证或更改 _(&lt;webview&gt;)_ 的初始设置
`additionalArguments` _string[]_ | strin一个将被附加到当前应用程序的渲染器进程中_(process.argv)_的字符串列表。可用于将少量的数据传递到渲染器进程预加载脚本中。
`safeDialogs` _boolean_ | 是否启用浏览器样式的持续对话框保护。 默认值为 _(false)_
`safeDialogsMessage` _string_ | 当持续对话框保护被触发时显示的消息。 如果没有定义，那么将使用缺省的消息。注意：当前缺省消息是英文，并没有本地化
`disableDialogs` _boolean_ | 是否完全禁用对话框。 覆盖 _(safeDialogs)_。 默认值为 _(false)_
`navigateOnDragDrop` _boolean_ | 将文件或链接拖放到页面上时是否触发页面跳转。 默认值为 _(false)_
`autoplayPolicy` _string_ | 窗口中内容要使用的自动播放策略，值可以是 _(no-user-gesture-required)_, _(user-gesture-required)_, _(document-user-activation-required)_。默认为 _(no-user-gesture-required)_
`disableHtmlFullscreenWindowResize` _boolean_ | 是否阻止窗口在进入 HTML 全屏时调整大小。默认值为 _(false)_
`accessibleTitle` _string_ | 仅提供给如屏幕读取器等辅助工具的替代标题字符串。此字符串不直接对用户可见
`spellcheck` _boolean_ | 是否启用内置拼写检查器。 默认值为 _(true)_
`enableWebSQL` _boolean_ | 是否启用 [WebSQL api](https://www.w3.org/TR/webdatabase/)。 默认值为 _(true)_
`v8CacheOptions` _string_ | 强制 blink 使用 v8 代码缓存策略。 可接受的值为：
`v8CacheOptions.none` | 禁用代码缓存
`v8CacheOptions.code` | 基于启发式代码缓存
`v8CacheOptions.bypassHeatCheck` | 绕过启发式代码缓存，但使用懒编译。
`v8CacheOptions.bypassHeatCheckAndEagerCompile` | 与上面相同，除了编译是及时的。 默认策略是 _(code)_
`enablePreferredSizeMode` _boolean_ | 是否启用首选大小模式。 首选大小是包含文档布局所需的最小大小--无需滚动。 启用该属性将导致在首选大小发生变化时，在 _(WebContents)_ 上触发 _(preferred-size-changed)_ 事件。默认值为 _(false)_
`titleBarOverlay` _Object/Boolean_ | 当在 macOS 使用无框窗口结合 _(win.setWindowButtonVisibility(true))_ 或使用 _(titleBarStyle)_ 以便标准窗口控制 (在 macOS为 "traffic lights") 可见，此属性将启用 Window Controls Overlay [JavaScript APIs](https://github.com/WICG/window-controls-overlay/blob/main/explainer.md#javascript-apis) 和 [CSS Environment Variables](https://github.com/WICG/window-controls-overlay/blob/main/explainer.md#css-environment-variables)。指定 _(true)_ 将导致覆盖默认系统颜色。 默认值为 _(false)_
`color` _String_ _(win)_ | 启用窗口控制时覆盖面的 CSS 颜色 默认是系统颜色
`symbolColor` _String_ _(win)_ | 启用时窗口控制中符号的 CSS 颜色 默认是系统颜色
`height` _Integer_ _(win/mac)_ | 标题栏和 Window Controls Overlay，以像素为单位。 默认值为系统高度
<!--rehype:className=style-list-->

### 实例事件
<!--rehype:wrap-class=col-span-3-->

```js
const { BrowserWindow } = require('electron')

const child = new BrowserWindow({ modal: true, show: false })
child.loadURL('https://github.com')
child.once('ready-to-show', () => {
  child.show()
})
```

----

:- | :-
:- | :-
`page-title-updated` | 文档更改标题时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-page-title-updated)
`close` | 在窗口要关闭的时候触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-close)
`closed` | 在窗口关闭时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-closed)
`session-end` _(win)_ | 因为强制关机/重启/会话注销而导致窗口会话结束时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-session-end-windows)
`unresponsive` | 网页变得未响应时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-unresponsive)
`responsive` | 未响应的页面变成响应时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-responsive)
`blur` | 当窗口失去焦点时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-blur)
`focus` | 当窗口获得焦点时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-focus)
`show` | 当窗口显示时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-show)
`hide` | 当窗口隐藏时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-hide)
`ready-to-show` | 当页面已经渲染完成(还没有显示)窗口可以被显示时触发[#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-ready-to-show)
`maximize` | 窗口最大化时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-maximize)
`unmaximize` | 当窗口从最大化状态退出时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-unmaximize)
`minimize` | 窗口最小化时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-minimize)
`restore` | 当窗口从最小化状态恢复时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-restore)
`will-resize` _(mac/win)_ | 调整窗口大小前触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-will-resize-macos-windows)
`resize` | 调整窗口大小后触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-resize)
`resized` _(mac/win)_ | 当窗口完成调整大小后触发一次 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件resized-macos-windows)
`will-move` _(mac/win)_ | 窗口移动前触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-will-move-macos-windows)
`move` | 窗口移动到新位置时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-move)
`moved` _(mac/win)_ | 当窗口移动到新位置时触发一次 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-moved-macos-windows)
`enter-full-screen` | 窗口进入全屏状态时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-enter-full-screen)
`leave-full-screen` | 窗口离开全屏状态时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-leave-full-screen)
`enter-html-full-screen` | 窗口进入由HTML API 触发的全屏状态时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-enter-html-full-screen)
`leave-html-full-screen` | 窗口离开由HTML API触发的全屏状态时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-leave-html-full-screen)
`always-on-top-changed` | 设置或取消设置窗口总是在其他窗口的顶部显示时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-always-on-top-changed)
`app-command` | 请求一个应用程序命令时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-app-command-windows__linux)
`scroll-touch-begin` _(mac)_ | 滚轮事件阶段开始时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-scroll-touch-begin-macos)
`scroll-touch-end` _(mac)_ | 滚轮事件阶段结束时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-scroll-touch-end-macos)
`scroll-touch-edge` _(mac)_ | 滚轮事件阶段到达元素边缘时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-scroll-touch-edge-macos)
`swipe` | 三指滑动时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-swipe-macos)
`rotate-gesture` _(mac)_ | 在触控板旋转手势上触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-rotate-gesture-macos)
`sheet-begin` _(mac)_ | 窗口打开sheet(工作表) 时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-sheet-begin-macos)
`sheet-end` _(mac)_ | 窗口关闭sheet(工作表) 时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-sheet-end-macos)
`new-window-for-tab` _(mac)_ | 当点击了系统的新标签按钮时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-new-window-for-tab-macos)
`system-context-menu` _(win)_ | 当系统上下文菜单在窗口上触发时触发 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#事件-system-context-menu-windows)

### 实例方法
<!--rehype:wrap-class=col-span-3 row-span-3-->

:- | :-
:- | :-
`win.destroy()` | 强制关闭窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#windestroy)
`win.close()` | 尝试关闭窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winclose)
`win.focus()` | 聚焦于窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winfocus)
`win.blur()` | 取消窗口的聚焦 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winblur)
`win.isFocused()` | 判断窗口是否聚焦 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisfocused)
`win.isDestroyed()` | 判断窗口是否被销毁 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisdestroyed)
`win.show()` | 显示并聚焦于窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winshow)
`win.showInactive()` | 显示但不聚焦于窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winshowinactive)
`win.hide()` | 隐藏窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winhide)
`win.isVisible()` | 判断窗口是否可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisvisible)
`win.isModal()` | 判断是否为模态窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismodal)
`win.maximize()` | 最大化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmaximize)
`win.unmaximize()` | 取消窗口最大化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winunmaximize)
`win.isMaximized()` | 判断窗口是否最大化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismaximized)
`win.minimize()` | 最小化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winminimize)
`win.restore()` | 窗口最小化状态恢复到以前的状态 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winrestore)
`win.isMinimized()` | 判断窗口是否最小化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisminimized)
`win.setFullScreen(flag)` | 设置窗口是否应处于全屏模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetfullscreenflag)
`win.isFullScreen()` | 窗口当前是否已全屏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisfullscreen)
`win.setSimpleFullScreen(flag)` _(mac)_ | 进入或离开简单的全屏模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetsimplefullscreenflag-macos)
`win.isSimpleFullScreen()` |  窗口是否为简单全屏模式(pre-Lion) [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winissimplefullscreen-macos)
`win.isNormal()` | 窗口是否处于正常状态（未最大化，未最小化，不在全屏模式下） [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisnormal)
`win.setAspectRatio(aspectRatio[, extraSize])` | 为内容视图保持的宽高比 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetaspectratioaspectratio-extrasize)
`win.setBackgroundColor(backgroundColor)` | 颜色，格式为 Hex，RGB，RGBA，HSL，HSLA 或 CSS 命名颜色 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetbackgroundcolorbackgroundcolor)
`win.previewFile(path[, displayName])` _(mac)_ | 要用 QuickLook 预览的文件的绝对路径 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winpreviewfilepath-displayname-macos)
`win.closeFilePreview()` _(mac)_ | 关闭当前打开的 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winclosefilepreview-macos)
`win.setBounds(bounds[, animate])` | 重置窗口，并且移动窗口到指定的位置 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetboundsbounds-animate)
`win.getBounds()` | 表示窗口的 `bounds` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetbounds)
`win.getBackgroundColor()` | 格式获取窗口的背景色，格式为 Hex (`#RRGGBB`) [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetbackgroundcolor)
`win.setContentBounds(bounds[, animate])` | 调整窗口的工作区 (如网页) 的大小并将其移动到所提供的边界。 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetcontentboundsbounds-animate)
`win.getContentBounds()` | 窗口客户端区域的 `bounds` `对象` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetcontentbounds)
`win.getNormalBounds()` | 包含正常状态下的窗口大小 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetnormalbounds)
`win.setEnabled(enable)` | 禁用或者启用窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetenabledenable)
`win.isEnabled()` | 窗口是否启用 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisenabled)
`win.setSize(width, height[, animate])` | 调整窗口的 `width` 和 `height` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetsizewidth-height-animate)
`win.getSize()` | 包含窗口的宽度和高度 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetsize)
`win.setContentSize(width, height[, animate])` | 将窗口的工作区 (如网页) 的大小调整为 `width` 和 `height` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetcontentsizewidth-height-animate)
`win.getContentSize()` | 包含窗口的宽度和高度 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetcontentsize)
`win.setMinimumSize(width, height)` | 设置窗口最小化的 `width` 和 `height` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetminimumsizewidth-height)
`win.getMinimumSize()` | 包含窗口最小化的宽度和高度 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetminimumsize)
`win.setMaximumSize(width, height)` | 设置窗口最大化的 `width` 和 `height` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetmaximumsizewidth-height)
`win.getMaximumSize()` | 包含窗口最大化的宽度和高度 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetmaximumsize)
`win.setResizable(resizable)` | 设置用户是否可以手动调整窗口大小 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetresizableresizable)
`win.isResizable()` | 用户是否可以手动调整窗口大小 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisresizable)
`win.setMovable(movable)` _(mac/win)_ | 设置用户是否可以移动窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetmovablemovable-macos-windows)
`win.isMovable()` _(mac/win)_ | 窗口是否可以被用户拖动，在 Linux 上总是返回 `true` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismovable-macos-windows)
`win.setMinimizable(minimizable)` _(mac/win)_ | 设置用户是否可以手动将窗口最小化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetminimizableminimizable-macos-windows)
`win.isMinimizable()` _(mac/win)_ | 用户是否可以手动最小化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisminimizable-macos-windows)
`win.setMaximizable(maximizable)` _(mac/win)_ | 设置用户是否可以手动最大化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetmaximizablemaximizable-macos-windows)
`win.isMaximizable()` _(mac/win)_ | 窗口是否可以最大化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismaximizable-macos-windows)
`win.setFullScreenable(fullscreenable)` | 设置最大化/缩放窗口按钮是切换全屏模式还是最大化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetfullscreenablefullscreenable)
`win.isFullScreenable()` | 最大化/缩放窗口按钮是切换全屏模式还是最大化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisfullscreenable)
`win.setClosable(closable)` _(mac/win)_ | 设置用户是否可以手动关闭窗口。 在Linux上不起作用 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetclosableclosable-macos-windows)
`win.isClosable()` _(mac/win)_ | 窗口是否被用户关闭了 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisclosable-macos-windows)
`win.setAlwaysOnTop(flag[, level][, relativeLevel])` | 设置窗口是否应始终显示在其他窗口的前面 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetalwaysontopflag-level-relativelevel)
`win.isAlwaysOnTop()` | 当前窗口是否始终在其它窗口之前 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisalwaysontop)
`win.moveAbove(mediaSourceId)` | 将窗口按z轴顺序移动到源窗口前面 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmoveabovemediasourceid)
`win.moveTop()` | 无论焦点如何, 将窗口移至顶端(z轴上的顺序) [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmovetop)
`win.center()` | 将窗口移动到屏幕中央 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wincenter)
`win.setPosition(x, y[, animate])` | 将窗口移动到 `x` 和 `y` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetpositionx-y-animate)
`win.getPosition()` | 返回一个包含当前窗口位置的数组 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetposition)
`win.setTitle(title)` | 将原生窗口的标题更改为 `title` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsettitletitle)
`win.getTitle()` | 网页的标题可以与原生窗口的标题不同 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingettitle)
`win.setSheetOffset(offsetY[, offsetX])` _(mac/win)_ | 改变macOS上sheet组件的附着点，默认情况下，sheet贴在窗口边框正下方 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetsheetoffsetoffsety-offsetx-macos)
`win.flashFrame(flag)` | 启动或停止闪烁窗口, 以吸引用户的注意 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winflashframeflag)
`win.setSkipTaskbar(skip)` _(mac/win)_ | 使窗口不显示在任务栏中 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetskiptaskbarskip-macos-windows)
`win.setKiosk(flag)` | 进入或离开 kiosk 模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetkioskflag)
`win.isKiosk()` | 判断窗口是否处于kiosk模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winiskiosk)
`win.isTabletMode()` _(win)_ | 此 API 返回 窗口是否在平板电脑模式下，并且 调整大小 事件可以用于监听对平板模式的更改 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winistabletmode-windows)
`win.getMediaSourceId()` | DesktopCapturerSource 的 `id` 格式的窗口 `id` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetmediasourceid)
`win.getNativeWindowHandle()` | 窗口的平台特定句柄 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetnativewindowhandle)
`win.hookWindowMessage(message, callback)` _(win)_ | 钩住窗口消息。 当消息到达 WndProc 时调用 callback [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winhookwindowmessagemessage-callback-windows)
`win.isWindowMessageHooked(message)` _(win)_ | 返回 boolean - true 或false，具体取决于是否钩挂了消息 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winiswindowmessagehookedmessage-windows)
`win.unhookWindowMessage(message)` _(win)_ | 取消窗口信息的钩子 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winunhookwindowmessagemessage-windows)
`win.unhookAllWindowMessages()` _(win)_ | 取消所有窗口信息的钩子 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winunhookallwindowmessages-windows)
`win.setRepresentedFilename(filename)` _(mac)_ | 设置窗口所代表的文件的路径名，并且将这个文件的图标放在窗口标题栏上 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetrepresentedfilenamefilename-macos)
`win.getRepresentedFilename()` _(mac)_ | 获取窗口当前文件路径 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetrepresentedfilename-macos)
`win.setDocumentEdited(edited)` _(mac)_ | 明确指出窗口文档是否可以编辑，如果设置为true则将标题栏的图标变成灰色 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetdocumenteditededited-macos)
`win.isDocumentEdited()` _(mac)_ | 判断当前窗口文档是否可编辑 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisdocumentedited-macos)
`win.focusOnWebView()` | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winfocusonwebview)
`win.blurWebView()` | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winblurwebview)
`win.capturePage([rect])` | 在 rect 内捕获页面的快照 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wincapturepagerect)
`win.loadURL(url[, options])` | 加载页面 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winloadurlurl-options)
`win.loadFile(filePath[, options])` | 加载页面 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winloadfilefilepath-options)
`win.reload()` | 与 `webContents.reload` 相同 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winreload)
`win.setMenu(menu)` _(win/linux)_ | 将 `menu` 设置为窗口的菜单栏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetmenumenu-linux-windows)
`win.removeMenu()` _(win)_ | 删除窗口的菜单栏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winremovemenu-linux-windows)
`win.setProgressBar(progress[, options])` | 设置进度条的进度值 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetprogressbarprogress-options)
`win.setOverlayIcon(overlay, description)` _(win)_ | 设置进度条的进度值。 有效范围为 `[0, 1.0]` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetoverlayiconoverlay-description-windows)
`win.setHasShadow(hasShadow)` | 设置窗口是否有阴影 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsethasshadowhasshadow)
`win.hasShadow()` | 判断窗口是否有阴影 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winhasshadow)
`win.setOpacity(opacity)` _(win/mac)_ | 设置窗口的不透明度。 在Linux上不起作用。 超出界限的数值被限制在 `[0, 1]` 范围内 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetopacityopacity-windows-macos)
`win.getOpacity()` | 介于 `0.0` (完全透明) 和 `1.0` (完全不透明) 之间。在Linux上，始终返回 `1` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetopacity)
`win.setShape(rects)` _(win/linux)_ | 对窗口形状的设置决定了窗口内系统允许绘制与用户交互的区域 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetshaperects-windows-linux-实验性)
`win.setThumbarButtons(buttons)` _(win)_ | 将指定的一组按钮添加到菜单栏的缩图工具栏上 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetthumbarbuttonsbuttons-windows)
`win.setThumbnailClip(region)` _(win)_ | 将窗口的区域设置为在任务栏中悬停在窗口上方时显示的缩略图图像 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetthumbnailclipregion-windows)
`win.setThumbnailToolTip(toolTip)` _(win)_ | 设置在任务栏中悬停在窗口缩略图上时显示的工具提示 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetthumbnailtooltiptooltip-windows)
`win.setAppDetails(options)` _(win)_ | 设置窗口任务栏按钮的属性 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetappdetailsoptions-windows)
`win.showDefinitionForSelection()` _(mac)_ | 和 `webContents.showDefinitionForSelection()` 相同 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winshowdefinitionforselection-macos)
`win.setIcon(icon)` _(win/linux)_ | 设置窗口图标 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winseticonicon-windows-linux)
`win.setWindowButtonVisibility(visible)` _(mac)_ | 设置是否窗口交通灯需要显示 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetwindowbuttonvisibilityvisible-macos)
`win.setAutoHideMenuBar(hide)` _(win/linux)_ | 设置窗口菜单栏是否自动隐藏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetautohidemenubarhide-windows-linux)
`win.isMenuBarAutoHide()` _(win/linux)_ | 判断窗口的菜单栏是否自动隐藏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismenubarautohide-windows-linux)
`win.setMenuBarVisibility(visible)` _(win/linux)_ | 设置菜单栏是否可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetmenubarvisibilityvisible-windows-linux)
`win.isMenuBarVisible()` _(win/linux)_ | 判断窗口的菜单栏是否可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winismenubarvisible-windows-linux)
`win.setVisibleOnAllWorkspaces(visible[, options])` _(mac/linux)_ | 设置窗口是否在所有工作空间上可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetvisibleonallworkspacesvisible-options-macos-linux)
`win.isVisibleOnAllWorkspaces()` _(mac/linux)_ | 判断窗口是否在所有工作空间上可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisvisibleonallworkspaces-macos-linux)
`win.setIgnoreMouseEvents(ignore[, options])` | 忽略窗口内的所有鼠标事件 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetignoremouseeventsignore-options)
`win.setContentProtection(enable)` _(mac/linux)_ | 防止窗口内容被其他应用捕获 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetcontentprotectionenable-macos-windows)
`win.setFocusable(focusable)` _(mac/linux)_ | 设置窗口是否可聚焦 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetfocusablefocusable-macos-windows)
`win.isFocusable()` _(mac/linux)_ | 返回当前窗口是否可以作为焦点被选中 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winisfocusable-macos-windows)
`win.setParentWindow(parent)` | 设置 `parent` 为当前窗口的父窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetparentwindowparent)
`win.getParentWindow()` | 返回 BrowserWindow/null - 如果没有父窗口则为 `null` [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetparentwindow)
`win.getChildWindows()` | 返回 `BrowserWindow[]` - 首页的子窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetchildwindows)
`win.setAutoHideCursor(autoHide)` _(mac)_ | 设置输入时是否隐藏光标 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetautohidecursorautohide-macos)
`win.selectPreviousTab()` _(mac)_ | 当启用本地选项卡，并且窗口中有另一个标签时，选择上一个选项卡 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winselectprevioustab-macos)
`win.selectNextTab()` _(mac)_ | 当启用本地选项卡，并且窗口中有另一个标签时，选择下一个选项卡 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winselectnexttab-macos)
`win.mergeAllWindows()` _(mac)_ | 当启用本地选项卡并且存在多个打开窗口时，将所有窗口合并到一个带有多个选项卡的窗口中 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmergeallwindows-macos)
`win.moveTabToNewWindow()` _(mac)_ | 如果启用了本机选项卡并且当前窗口中有多个选项卡，则将当前选项卡移动到新窗口中 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmovetabtonewwindow-macos)
`win.toggleTabBar()` _(mac)_ | 如果启用了本机选项卡并且当前窗口中只有一个选项卡，则切换选项卡栏是否可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wintoggletabbar-macos)
`win.addTabbedWindow(browserWindow)` _(mac)_ | 在该窗口中添加一个窗口作为选项卡，位于窗口实例的选项卡之后 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winaddtabbedwindowbrowserwindow-macos)
`win.setVibrancy(type)` _(mac)_ | 在浏览器窗口中添加一个动态特效。 传递 null 或空字符串将会移除窗口上的动态效果 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetvibrancytype-macos)
`win.setTrafficLightPosition(position)` _(mac)_ | 在无框窗口中设置自定义控制按钮的位置 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsettrafficlightpositionposition-macos)
`win.getTrafficLightPosition()` _(mac)_ | 在无框窗口中自定义控制按钮的位置 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingettrafficlightposition-macos)
`win.setTouchBar(touchBar)` _(mac)_ | 设置窗口的触摸条布局 设置为 null 或undefined将清除触摸条 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsettouchbartouchbar-macos)
`win.setBrowserView(browserView)` _(实验)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsetbrowserviewbrowserview-实验)
`win.getBrowserView()` _(实验功能)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetbrowserview-实验功能)
`win.addBrowserView(browserView)` _(实验功能)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winaddbrowserviewbrowserview-实验功能)
`win.removeBrowserView(browserView)` _(实验功能)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winremovebrowserviewbrowserview-实验功能)
`win.setTopBrowserView(browserView)` _(实验功能)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsettopbrowserviewbrowserview-实验功能)
`win.getBrowserViews()` _(实验功能)_ | [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wingetbrowserviews-实验功能)
`win.setTitleBarOverlay(options)` _(win)_ | 在已开启 Window Controls Overlay 的窗口上，此方法将更新标题栏叠加层的样式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsettitlebaroverlayoptions-windows)
<!--rehype:className=style-list-->

### 静态方法
<!--rehype:wrap-class=col-span-3-->

:- | :-
:- | :-
`BrowserWindow.getAllWindows()` | 所有打开的窗口的数组 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#browserwindowgetallwindows)
`BrowserWindow.getFocusedWindow()` | 当前获得焦点的窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#browserwindowgetfocusedwindow)
`BrowserWindow.fromWebContents(webContents)` | 拥有给定 webContents 窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#browserwindowfromwebcontentswebcontents)
`BrowserWindow.fromBrowserView(browserView)` | 拥有给定 browserView 窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#browserwindowfrombrowserviewbrowserview)
`BrowserWindow.fromId(id)` | 带有给定 id 的窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#browserwindowfromidid)

### 实例属性
<!--rehype:wrap-class=col-span-3-->

```js
const { BrowserWindow } = require('electron')
// 本例中 `win` 是我们的实例
const win = new BrowserWindow({ width: 800, height: 600 })
win.loadURL('https://github.com')
```

----

:- | :-
:- | :-
`win.webContents` | 此窗口拥有的 WebContents 对象 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winwebcontents-只读)
`win.id` | 代表了窗口的唯一ID [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winid-只读)
`win.autoHideMenuBar` | 决定窗口菜单栏是否自动隐藏 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winautohidemenubar)
`win.simpleFullScreen` | 决定窗口是否处于简单(pre-Lion) 全屏模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winsimplefullscreen)
`win.fullScreen` | 决定窗口是否处于全屏模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winfullscreen)
`win.focusable` | 确定窗口是否可作为焦点被选中的属性 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winfocusable-windows-macos)
`win.visibleOnAllWorkspaces` | 决定窗口是否在所有工作区中可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winvisibleonallworkspaces-macos-linux)
`win.shadow` | 决定窗口是否显示阴影 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winshadow)
`win.menuBarVisible` | 决定菜单栏是否可见 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmenubarvisible-windows-linux)
`win.kiosk` | 决定窗口是否处于kiosk模式 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winkiosk)
`win.documentEdited` | 指明窗口文档是否已被编辑 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#windocumentedited-macos)
`win.representedFilename` | 确定窗口代表的文件的路径名 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winrepresentedfilename-macos)
`win.title` | 用于确定原生窗口的标题 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#wintitle)
`win.minimizable` | 决定窗口是否可被用户手动最小化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winminimizable-macos-windows)
`win.maximizable` | 决定窗口是否可被用户手动最大化 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmaximizable-macos-windows)
`win.fullScreenable` | 决定是切换全屏模式还是最大化窗口 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winfullscreenable)
`win.resizable` | 决定窗口是否可被用户手动调整大小 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winresizable)
`win.closable` | 决定窗口是否可被用户手动关闭 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winclosable-macos-windows)
`win.movable` | 决定窗口是否可被用户移动 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winmovable-macos-windows)
`win.excludedFromShownWindowsMenu` | 决定窗口是否从 Windows 菜单排除 [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winexcludedfromshownwindowsmenu-macos)
`win.accessibleTitle` | 定义一个仅为辅助工具提供的替代标题  [#](https://www.electronjs.org/zh/docs/latest/api/browser-window#winaccessibletitle)

另见
---

- [Electron 备忘清单](https://simulatedgreg.github.io/electron-cheatsheet/) _(simulatedgreg.github.io)_
