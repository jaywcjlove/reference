\</> htmx 备忘清单
===

[htmx](https://htmx.org/) 是一个面向浏览器、无运行时依赖的 JavaScript 库。它通过 `hx-*` HTML 属性让页面直接发起 AJAX 请求、局部替换 HTML、处理 CSS 过渡，并通过扩展支持 WebSocket、SSE 等能力。
<!--rehype:style=padding-top: 12px;-->

入门
---

### 安装
<!--rehype:wrap-class=col-span-2 row-span-2-->

:-- | --
:-- | --
下载文件 | 下载 `htmx.min.js` 后用普通 `<script>` 引入
npm | `npm install htmx.org@2.0.10`
Webpack / bundler | `import "htmx.org";`
全局变量 | `window.htmx = require("htmx.org");`
扩展 | 先加载 htmx，再加载扩展并使用 `hx-ext`
<!--rehype:className=left-align code-nowrap-->

htmx 2.x 是当前主线；1.x 仍支持 IE11。生产环境使用 CDN 时建议固定版本，并按官方下载页更新 `integrity` 值。

```html
<script src="https://cdn.jsdelivr.net/npm/htmx.org@2.0.10/dist/htmx.min.js"></script>
```

### 第一个请求

```html
<button hx-post="/clicked" hx-swap="outerHTML">
  点击我
</button>
```

当按钮被点击时，htmx 会向 `/clicked` 发出 `POST` 请求，并用响应 HTML 替换整个按钮。

### AJAX 方法

:-- | --
:-- | --
`hx-get="/url"` | 发起 `GET` 请求
`hx-post="/url"` | 发起 `POST` 请求
`hx-put="/url"` | 发起 `PUT` 请求
`hx-patch="/url"` | 发起 `PATCH` 请求
`hx-delete="/url"` | 发起 `DELETE` 请求
<!--rehype:className=left-align code-nowrap-->

默认触发事件按元素类型决定：`input`、`textarea`、`select` 为 `change`，`form` 为 `submit`，其他元素为 `click`。

请求与交换
---

### hx-trigger
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`hx-trigger="click"` | 点击时触发
`hx-trigger="mouseenter"` | 鼠标进入时触发
`hx-trigger="load"` | 元素加载后触发
`hx-trigger="every 2s"` | 每 2 秒轮询
`hx-trigger="keyup changed delay:500ms"` | 值变化且停止输入 500ms 后触发
`hx-trigger="click once"` | 只触发一次
`hx-trigger="click[ctrlKey]"` | 满足事件过滤表达式才触发
`hx-trigger="load, click delay:1s"` | 多个触发器组合
<!--rehype:className=left-align code-nowrap-->

常用修饰符：

- `once`：只触发一次
- `changed`：值变化时才触发
- `delay:<time>`：延迟触发，期间再次触发会重置计时
- `throttle:<time>`：节流触发
- `from:<selector>`：监听其他元素上的事件
- `target:<selector>`：只处理来自匹配目标的事件
<!--rehype:className=cols-2 style-none-->

### hx-target

:-- | --
:-- | --
`hx-target="#result"` | 将响应换入指定元素
`hx-target="this"` | 目标为当前元素
`hx-target="closest tr"` | 目标为最近的表格行
`hx-target="next .panel"` | 目标为后续匹配元素
`hx-target="previous .item"` | 目标为前一个匹配元素
`hx-target="find .body"` | 目标为当前元素内的匹配子元素
<!--rehype:className=left-align code-nowrap-->

#### 示例

```html
<input
  name="q"
  hx-get="/search"
  hx-trigger="keyup changed delay:500ms"
  hx-target="#search-results"
  placeholder="搜索">
<div id="search-results"></div>
```

### hx-swap
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`innerHTML` | 默认，替换目标元素内部 HTML
`outerHTML` | 替换整个目标元素
`beforebegin` | 插入到目标元素之前
`afterbegin` | 插入到目标元素内部开头
`beforeend` | 插入到目标元素内部结尾
`afterend` | 插入到目标元素之后
`delete` | 删除目标元素
`none` | 不换入主体内容，仍处理带外交换
<!--rehype:className=left-align code-nowrap-->

常用修饰符：

:-- | --
:-- | --
`swap:1s` | 收到响应后延迟 1 秒再交换
`settle:500ms` | 交换后等待 500ms 再 settle
`transition:true` | 使用 View Transitions API
`ignoreTitle:true` | 忽略响应中的 `<title>`
`scroll:bottom` | 交换后滚动到底部
`show:top` | 交换后显示目标顶部
<!--rehype:className=left-align code-nowrap-->

### 选择与带外交换

:-- | --
:-- | --
`hx-select="#content"` | 从响应中选择局部内容换入
`hx-select-oob="#alert"` | 从响应中挑选带外内容
`hx-swap-oob="true"` | 响应片段按 `id` 直接更新页面其他位置
`hx-preserve` | 在交换中保留元素
<!--rehype:className=left-align code-nowrap-->

表格中的 `tr`、`td` 等片段用于带外交换时，建议用 `<template>` 包裹，避免浏览器解析 HTML 时丢失结构。

参数与表单
---

### 参数提交

:-- | --
:-- | --
普通输入元素 | 如果元素有 `name` 和值，会随请求提交
`form` | 提交表单内所有输入值
非 `GET` 请求 | 会包含关联表单的输入值
`hx-include="#extra"` | 额外包含其他元素的值
`hx-params="not csrf"` | 过滤请求参数
`hx-vals='{"page": 1}'` | 添加 JSON 格式的额外值
`htmx:configRequest` | 发请求前用事件修改参数或请求头
<!--rehype:className=left-align code-nowrap-->

### 文件上传

```html
<form
  hx-post="/upload"
  hx-encoding="multipart/form-data"
  hx-target="#result">
  <input type="file" name="file">
  <button>上传</button>
</form>
<progress id="progress" value="0" max="100"></progress>
<div id="result"></div>
```

上传时可监听 `htmx:xhr:progress` 显示进度。

### 确认与提示

:-- | --
:-- | --
`hx-confirm="确定删除？"` | 请求前显示确认框
`hx-prompt="请输入名称"` | 请求前显示提示框
`htmx:confirm` | 自定义异步确认流程
`HX-Prompt` | 请求头中包含用户对 prompt 的响应
<!--rehype:className=left-align code-nowrap-->

常见模式
---

### 点击编辑
<!--rehype:wrap-class=col-span-2-->

```html
<div hx-target="this" hx-swap="outerHTML">
  <div><label>名字</label>: Joe</div>
  <div><label>邮箱</label>: joe@example.com</div>
  <button hx-get="/contacts/1/edit">编辑</button>
</div>
```

服务器返回表单：

```html
<form hx-put="/contacts/1" hx-target="this" hx-swap="outerHTML">
  <input name="firstName" value="Joe">
  <input name="email" value="joe@example.com">
  <button>保存</button>
  <button hx-get="/contacts/1">取消</button>
</form>
```

### 删除行

```html
<tbody hx-confirm="确定删除？" hx-target="closest tr" hx-swap="outerHTML swap:1s">
  <tr>
    <td>Joe</td>
    <td>joe@example.com</td>
    <td><button hx-delete="/contacts/1">删除</button></td>
  </tr>
</tbody>
```

---

```css
tr.htmx-swapping td {
  opacity: 0;
  transition: opacity 1s ease-out;
}
```

### 延迟加载与轮询
<!--rehype:wrap-class=col-span-2-->

```html
<div hx-get="/graph" hx-trigger="load">
  <img class="htmx-indicator" src="/spinner.svg" alt="加载中">
</div>

<div hx-get="/news" hx-trigger="every 2s"></div>
```

服务器可返回 HTTP `286` 来停止轮询。

### 请求指示器

```html
<button hx-get="/save" hx-indicator="#indicator">
  保存
</button>
<img id="indicator" class="htmx-indicator" src="/spinner.svg" alt="加载中">
```

请求期间 htmx 会添加 `htmx-request` 类，默认会让 `.htmx-indicator` 显示出来。

API 参考
---
<!--rehype:body-class=cols-2-->

### 核心属性

属性 | 说明
:- | --
`hx-boost` | 增强链接和表单，使用 AJAX 替代整页跳转
`hx-get` | 发起 `GET` 请求
`hx-post` | 发起 `POST` 请求
`hx-put` | 发起 `PUT` 请求
`hx-patch` | 发起 `PATCH` 请求
`hx-delete` | 发起 `DELETE` 请求
`hx-trigger` | 指定触发请求的事件
`hx-target` | 指定响应内容换入的目标
`hx-swap` | 指定内容交换方式
`hx-select` | 从响应中选择要换入的内容
`hx-push-url` | 将 URL 推入浏览器历史
`hx-replace-url` | 替换当前浏览器 URL
`hx-swap-oob` | 处理响应中的带外交换
<!--rehype:className=left-align-->

### 附加属性
<!--rehype:wrap-class=row-span-2-->

属性 | 说明
:- | --
`hx-confirm` | 请求前显示确认对话框
`hx-disabled-elt` | 请求期间禁用触发元素或指定元素
`hx-disable` | 禁用当前节点及子节点的 htmx 处理
`hx-disinherit` | 禁用属性继承
`hx-encoding` | 设置请求编码，如 `multipart/form-data`
`hx-ext` | 启用扩展
`hx-headers` | 添加请求头
`hx-history-elt` | 指定历史快照元素
`hx-include` | 包含额外输入值
`hx-indicator` | 指定请求期间显示状态的元素
`hx-params` | 过滤请求参数
`hx-preserve` | 交换时保留元素
`hx-prompt` | 请求前显示提示框
`hx-request` | 配置请求行为
`hx-select-oob` | 从响应中选择带外交换内容
`hx-sync` | 控制多个请求之间的同步
`hx-validate` | 请求前触发表单验证
`hx-vals` | 添加 JSON 格式参数
<!--rehype:className=left-align-->

### CSS 类

Class | 说明
:- | --
`htmx-added` | 新内容换入前添加，settle 后移除
`htmx-indicator` | 请求指示器元素，默认隐藏
`htmx-request` | 请求期间添加到触发元素或指示器元素
`htmx-settling` | 内容交换后、settle 前添加
`htmx-swapping` | swap 前添加，可用于离场动画

### 常用事件
<!--rehype:wrap-class=row-span-2-->

事件 | 说明
:- | --
`htmx:beforeRequest` | 发出请求前触发
`htmx:configRequest` | 请求前配置参数和请求头
`htmx:beforeSend` | XHR 发送前触发
`htmx:afterRequest` | 请求完成后触发
`htmx:beforeSwap` | 交换前触发，可改变目标或 swap 方式
`htmx:afterSwap` | 内容换入后触发
`htmx:afterSettle` | DOM settle 后触发
`htmx:load` | 新内容加入 DOM 后触发
`htmx:confirm` | 请求确认阶段触发
`htmx:responseError` | HTTP 错误响应时触发
`htmx:sendError` | 网络发送失败时触发
`htmx:timeout` | 请求超时时触发
`htmx:xhr:progress` | XHR 进度事件，常用于上传

### JavaScript API
<!--rehype:wrap-class=row-span-2-->

方法 | 说明
:- | --
`htmx.ajax()` | 发起 htmx 风格 AJAX 请求
`htmx.trigger()` | 触发元素事件
`htmx.on()` | 添加事件监听器
`htmx.off()` | 移除事件监听器
`htmx.onLoad()` | 监听 htmx 加载的新内容
`htmx.process()` | 处理动态加入的 DOM
`htmx.find()` | 查找单个元素
`htmx.findAll()` | 查找多个元素
`htmx.closest()` | 查找最近祖先元素
`htmx.addClass()` | 添加类
`htmx.removeClass()` | 移除类
`htmx.toggleClass()` | 切换类
`htmx.takeClass()` | 从同级元素中取得唯一类
`htmx.logAll()` | 打开所有 htmx 事件日志
`htmx.logger` | 自定义日志函数

### 请求头

标头 | 说明
:- | --
`HX-Boosted` | 请求来自 `hx-boost`
`HX-Current-URL` | 当前浏览器 URL
`HX-History-Restore-Request` | 历史恢复请求
`HX-Prompt` | 用户对 `hx-prompt` 的响应
`HX-Request` | htmx 请求总是为 `true`
`HX-Target` | 目标元素 id
`HX-Trigger-Name` | 触发元素 name
`HX-Trigger` | 触发元素 id

### 响应头

标头 | 说明
:- | --
`HX-Location` | 客户端跳转但不整页刷新
`HX-Push-Url` | 推入新的浏览器历史 URL
`HX-Redirect` | 浏览器重定向到新地址
`HX-Refresh` | 值为 `true` 时刷新整页
`HX-Replace-Url` | 替换当前浏览器 URL
`HX-Reswap` | 覆盖客户端 `hx-swap`
`HX-Retarget` | 覆盖客户端目标元素
`HX-Reselect` | 覆盖客户端 `hx-select`
`HX-Trigger` | 响应收到后触发事件
`HX-Trigger-After-Swap` | swap 后触发事件
`HX-Trigger-After-Settle` | settle 后触发事件

扩展与调试
---

### 扩展
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`hx-ext="response-targets"` | 按 HTTP 状态码选择目标
`hx-ext="sse"` | Server-Sent Events 支持
`hx-ext="ws"` | WebSocket 支持
`hx-ext="preload"` | 预加载内容
`hx-ext="head-support"` | 合并响应中的 head 信息
`hx-ext="htmx-1-compat"` | 恢复部分 htmx 1.x 行为
<!--rehype:className=left-align code-nowrap-->

扩展必须在核心 htmx 之后加载，社区扩展可能有不同安装方式，使用前应查看对应扩展仓库。

### 调试

:-- | --
:-- | --
`htmx.logAll()` | 在控制台记录所有 htmx 事件
`htmx.logger = fn` | 自定义日志输出
`HX-Request: true` | 服务端识别 htmx 请求
Network 面板 | 查看 `HX-*` 请求头和响应头
`htmx:beforeSwap` | 调试目标、响应和交换行为
`htmx:responseError` | 处理非 2xx/3xx 响应
<!--rehype:className=left-align-->

### 全局配置
<!--rehype:wrap-class=col-span-3-->

```html
<meta name="htmx-config" content='{"defaultSwapStyle":"outerHTML"}'>
```

也可以直接修改 `htmx.config`。常见配置包括默认 swap 样式、请求超时、是否允许属性继承、是否携带跨站凭据等。

参考资料
---

- [htmx Documentation](https://htmx.org/docs/)
- [htmx Reference](https://htmx.org/reference/)
- [hx-trigger](https://htmx.org/attributes/hx-trigger/)
- [hx-swap](https://htmx.org/attributes/hx-swap/)
- [hx-target](https://htmx.org/attributes/hx-target/)
- [htmx Events](https://htmx.org/events/)
- [HX-Trigger Response Headers](https://htmx.org/headers/hx-trigger/)
