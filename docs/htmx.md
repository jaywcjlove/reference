\</> htmx 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/htmx.org.svg?style=flat)](https://npmjs.org/package/htmx.org)
[![Downloads](https://img.shields.io/npm/dm/htmx.org.svg?style=flat)](https://www.npmjs.com/package/htmx.org)
[![Repo Dependents](https://badgen.net/github/dependents-repo/bigskysoftware/htmx)](https://github.com/bigskysoftware/htmx/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/bigskysoftware/htmx)

适合初学者的综合 [htmx](https://htmx.org/) 备忘清单
<!--rehype:style=padding-top: 12px;-->

入门
---

### 快速开始

[htmx](https://htmx.org/) 是 [intercooler.js](http://intercoolerjs.org/) 的继承者

```html
<script
  src="https://unpkg.com/htmx.org@1.8.4"
>
</script>
<!-- 有一个按钮POST，通过AJAX点击 -->
<button
  hx-post="/clicked"
  hx-swap="outerHTML"
>
  点击我
</button>
```
<!--rehype:className=wrap-text-->

`hx-post` 和 `hx-swap` 属性告诉 `htmx`：

> 当用户单击此按钮时，向 `/clicked` 发出 `AJAX` 请求，并用响应替换整个按钮

```bash
$ npm install htmx.org
```

安装 `htmx` 将导入添加到您的 `index.js`

```js
import 'htmx.org';
```

### 点击编辑提交
<!--rehype:wrap-class=col-span-2-->

有一个按钮，可以从 `/contacts/1/edit` 获取联系人的编辑 UI

```html
<div hx-target="this" hx-swap="outerHTML">
  <div><label>名字</label>: Joe</div>
  <div><label>姓</label>: Blow</div>
  <div><label>邮箱</label>: joe@blow.com</div>
  <button hx-get="/contact/1/edit" class="btn btn-primary">
    点击编辑
  </button>
</div>
```

这将返回一个可用于编辑联系人的表单

```html
<form hx-put="/contact/1" hx-target="this" hx-swap="outerHTML">
  <div>
    <label>名字</label>
    <input type="text" name="firstName" value="Joe">
  </div>
  <div class="form-group">
    <label>姓</label>
    <input type="text" name="lastName" value="Blow">
  </div>
  <div class="form-group">
    <label>邮箱</label>
    <input type="email" name="email" value="joe@blow.com">
  </div>
  <button class="btn">提交</button>
  <button class="btn" hx-get="/contact/1">取消</button>
</form> 
```

表单按照通常的 `REST-ful` 模式将 `PUT` 发回 `/contacts/1`

### 删除行
<!--rehype:wrap-class=col-span-2 row-span-2-->

```html
<table class="table delete-row-example">
  <thead>
    <tr>
      <th>Name</th> <th>Email</th> <th>Status</th> <th></th>
    </tr>
  </thead>
  <tbody hx-confirm="Are you sure?" hx-target="closest tr" hx-swap="outerHTML swap:1s">
    ...
  </tbody>
</table>
```

表体有一个 `hx-confirm` 属性来确认删除动作。 它还将所有按钮的目标设置为最近的 `tr`，即最近的表格行（`hx-target` 继承自 DOM 中的父级）`hx-swap` 中的交换规范表示将整个目标换出并收到响应后等待 1 秒。最后一点是为了让我们可以使用以下 CSS：

```css
tr.htmx-swapping td {
  opacity: 0;
  transition: opacity 1s ease-out;
}
```

在交换/删除之前淡出该行。每行都有一个带有 `hx-delete` 属性的按钮，该属性包含发出 `DELETE` 请求以从服务器中删除该行的 `url`。此请求以空内容响应，表明该行应替换为空内容

```html
<tr>
  <td>Angie MacDowell</td>
  <td>angie@macdowell.org</td>
  <td>Active</td>
  <td>
    <button class="btn btn-danger" hx-delete="/contact/1">
      Delete
    </button>
  </td>
</tr>
```

### 延迟加载

```html
<div hx-get="/graph" hx-trigger="load">
  <img
    alt="正在加载中..."
    class="htmx-indicator"
    width="150"
    src="/img/bars.svg"/>
</div>
```

当我们加载图表时显示进度指示器。 然后通过稳定的 CSS(`htmx-settling`) 过渡加载图形并逐渐淡入视图

```css
.htmx-settling img {
  opacity: 0;
}
img {
  transition: opacity 300ms ease-in;
}
```

### hx-swap

:-- | --
:-- | --
`innerHTML` | 默认，替换目标元素的内部 `html`
`outerHTML` | 用响应替换整个目标元素
`beforebegin` | 在目标元素之前插入响应
`afterbegin` | 目标元素的第一个子元素之前插入响应
`beforeend` | 目标元素的最后一个子元素之后插入响应
`afterend` | 在目标元素之后插入响应
`delete` | 无论响应如何，都删除目标元素
`none` | 不附加来自响应的内容 <br />_(带外项目仍将被处理)_
<!--rehype:className=left-align-->

API 参考
---
<!--rehype:body-class=cols-2-->

### 核心属性参考

属性 | 说明
:- | --
`hx-boost` | 添加或删除链接和表单的[渐进增强](https://en.wikipedia.org/wiki/Progressive_enhancement)
`hx-get` | 向指定的 URL 发出 `GET`
`hx-post` | 向指定的 URL 发出 `POST`
`hx-push-url` | 将 URL 推入浏览器地址栏，创建一个新的历史条目
`hx-select` | 从响应中选择要换入的内容
`hx-select-oob` | 从带外(目标以外的某个地方)的响应中选择要换入的内容
`hx-swap` | 控制内容的交换方式(`outerHTML`、`beforeEnd`、`afterend`，...)
`hx-swap-oob` | 将响应中的内容标记为带外(应该在目标以外的地方交换)
`hx-target` | 指定要交换的目标元素
`hx-trigger` | 指定触发请求的事件
`hx-vals` | 向参数添加值以随请求一起提交(JSON 格式)
<!--rehype:className=left-align-->

使用 htmx 时最常用的属性

### 附加属性参考
<!--rehype:wrap-class=row-span-2-->

属性 | 说明
:- | --
`hx-confirm` | 在发出请求之前显示一个 `confim()` 对话框
`hx-delete` | 向指定的 URL 发出 `DELETE`
`hx-disable` | 禁用给定节点和任何子节点的 htmx 处理
`hx-disinherit` | 控制和禁用子节点的自动属性继承
`hx-encoding` | 更改请求编码类型
`hx-ext` | 用于此元素的扩展
`hx-headers` | 添加到将与请求一起提交的标头
`hx-history-elt` | 在历史导航期间要快照和恢复的元素
`hx-include` | 在请求中包含额外数据
`hx-indicator` | 在请求期间放置 `htmx-request` 类的元素
`hx-params` | 过滤将与请求一起提交的参数
`hx-patch` | 向指定的 URL 发出 PATCH
`hx-preserve` | 指定在请求之间保持不变的元素
`hx-prompt` | 在提交请求之前显示一个 `prompt()`
`hx-put` | 向指定的 URL 发出 PUT
`hx-replace-url` | 替换浏览器地址栏中的 URL
`hx-request` | 配置请求的各个方面
`hx-sse` | 已移至分机。 [旧版本的文档](https://htmx.org/attributes/hx-sse)
`hx-sync` | 控制不同元素发出的请求如何同步
`hx-validate` | 强制元素在请求之前验证自己
~~`hx-vars`~~ | 将值动态添加到参数以随请求提交(已弃用，请使用 `hx-vals`)
`hx-ws` | 已移至分机。[旧版本的文档](https://htmx.org/attributes/hx-ws)
<!--rehype:className=left-align-->

列出了 htmx 中可用的所有其他属性

### CSS 类参考

Class | 说明
:- | --
`htmx-added` | 在交换之前应用于新的内容，在它被解决之后移除
`htmx-indicator` | 一个动态生成的类，当存在 `htmx-request` 类时将切换可见<br /> _(不透明度：`1`)_
`htmx-request` | 在请求进行时应用于元素或使用 `hx-indicator` 指定的元素
`htmx-settling` | 内容交换后应用于目标，内容确定后删除。<br /> _可以通过 `hx-swap` 修改持续时间_
`htmx-swapping` | 在交换任何内容之前应用于目标，在交换之后移除。<br /> _可以通过 `hx-swap` 修改持续时间_

### 事件参考
<!--rehype:wrap-class=row-span-3-->

事件 | 说明
:- | --
`htmx:abort` | 将此事件发送到元素以中止请求
`htmx:afterOnLoad` | AJAX 请求完成处理成功响应后触发
`htmx:afterProcessNode` | 在 htmx 初始化节点后触发
`htmx:afterRequest` | AJAX 请求完成后触发
`htmx:afterSettle` | DOM 稳定后触发
`htmx:afterSwap` | 换入新内容后触发
`htmx:beforeOnLoad` | 在任何响应处理发生之前触发
`htmx:beforeProcessNode` | 在 htmx 初始化节点之前触发
`htmx:beforeRequest` | 在发出 AJAX 请求之前触发
`htmx:beforeSwap` | 在交换完成之前触发，允许您配置交换
`htmx:beforeSend` | 在发送 ajax 请求之前触发
`htmx:configRequest` | 在请求之前触发，允许您自定义参数、标头
`htmx:confirm` | 在元素上发生触发器后触发<br /> _允许您取消(或延迟)发出 AJAX 请求_
`htmx:historyCacheError` | 在缓存写入期间因错误而触发
`htmx:historyCacheMiss` | 在历史子系统中的缓存未命中时触发
`htmx:historyCacheMissError` | 远程检索不成功时触发
`htmx:historyCacheMissLoad` | 在成功的远程检索时触发
`htmx:historyRestore` | 当 htmx 处理历史恢复操作时触发
`htmx:beforeHistorySave` | 在内容保存到历史缓存之前触发
`htmx:load` | 当新内容添加到 DOM 时触发
`htmx:noSSESourceError` | 当元素在其触发器中引用 SSE 事件<br/> _但未定义父 SSE 源时触发_
`htmx:onLoadError` | htmx中onLoad处理异常时触发
`htmx:oobAfterSwap` | 在交换了一个带元素之后触发
`htmx:oobBeforeSwap` | 在带外元素交换完成之前触发，允许您配置交换
`htmx:oobErrorNoTarget` | 当带外元素在当前 DOM 中没有匹配的 ID 时触发
`htmx:prompt` | 显示提示后触发
`htmx:pushedIntoHistory` | 在 url 被推送到历史记录后触发
`htmx:responseError` | 当发生 HTTP 响应错误<br/> _(非 200 或 300 响应代码)时触发_
`htmx:sendError` | 当网络错误阻止 HTTP 请求发生时触发
`htmx:sseError` | 当 SSE 源发生错误时触发
`htmx:swapError` | 在交换阶段发生错误时触发
`htmx:targetError` | 指定无效目标时触发
`htmx:timeout` | 发生请求超时时触发
`htmx:validation:validate` | 在验证元素之前触发
`htmx:validation:failed` | 当元素验证失败时触发
`htmx:validation:halted` | 当请求由于验证错误而停止时触发
`htmx:xhr:abort` | 当 `ajax` 请求中止时触发
`htmx:xhr:loadend` | `ajax` 请求结束时触发
`htmx:xhr:loadstart` | `ajax` 请求开始时触发
`htmx:xhr:progress` | 在支持进度事件的 `ajax` 请求期间定期触发

### JavaScript API 参考

方法 | 说明
:- | --
`htmx.addClass()` | 向给定元素添加一个类
`htmx.ajax()` | 发出一个 htmx 风格的 ajax 请求
`htmx.closest()` | 找到与选择器匹配的给定元素的最近父级
`htmx.config` | 保存当前 htmx 配置对象的属性
`htmx.createEventSource` | 包含为 htmx 创建 SSE EventSource 对象的函数的属性
`htmx.createWebSocket` | 包含为 htmx 创建 WebSocket 对象的函数的属性
`htmx.defineExtension()` | 定义一个 htmx 扩展
`htmx.find()` | 查找与选择器匹配的单个元素
`htmx.findAll()` \| `htmx.findAll(elt, selector)` | 查找与给定选择器匹配的所有元素
`htmx.logAll()` | 安装将记录所有 htmx 事件的记录器
`htmx.logger` | 设置为当前记录器的属性（默认为空）
`htmx.off()` | 从给定元素中删除事件侦听器
`htmx.on()` | 在给定元素上创建事件侦听器，并返回它
`htmx.onLoad()` | 为 htmx:load 事件添加回调处理程序
`htmx.parseInterval()` | 将间隔声明解析为毫秒值
`htmx.process()` | 处理给定元素及其子元素，连接任何 htmx 行为
`htmx.remove()` | 删除给定的元素
`htmx.removeClass()` | 从给定元素中删除一个类
`htmx.removeExtension()` | 删除一个 htmx 扩展
`htmx.takeClass()` | 从给定元素的其他元素中获取一个类
`htmx.toggleClass()` | 从给定元素切换一个类
`htmx.trigger()` | 在元素上触发事件
`htmx.values()` | 返回与给定元素关联的输入值

### 请求标头参考

标头 | 说明
:- | --
`HX-Boosted` | 表示请求是通过使用 `hx-boost` 的元素发出的
`HX-Current-URL` | 浏览器的当前 `URL`
`HX-History-Restore-Request` | 如果请求是在本地历史缓存未命中后进行历史恢复，则为 `true`
`HX-Prompt` | 用户对 `hx` 提示的响应
`HX-Request` | 总是 `true`
`HX-Target` | 目标元素的 id(如果存在)
`HX-Trigger-Name` | 触发元素的名称(如果存在)
`HX-Trigger` | 触发元素的 id(如果存在)

### 响应标头参考

标头 | 说明
:- | --
[`HX-Location`](https://htmx.org/headers/hx-location) | 允许您执行不执行整页重新加载的客户端重定向
[`HX-Push-Url`](https://htmx.org/headers/hx-push-url) | 将一个新的 `url` 推入历史堆栈
`HX-Redirect` | 可用于将客户端重定向到新位置
`HX-Refresh` | 如果设置为 `true`，客户端将完全刷新页面
[`HX-Replace-Url`](https://htmx.org/headers/hx-replace-url) | 替换地址栏中的当前 `URL`
`HX-Reswap` | 允许您指定如何交换响应<br /> _有关可能的值，请参阅 [`hx-swap`](https://htmx.org/attributes/hx-swap)_
`HX-Retarget` | 将内容更新的目标更新为页面上不同元素的 CSS 选择器
[`HX-Trigger`](https://htmx.org/headers/hx-trigger) | 允许您触发客户端事件<br /> _请[参阅文档](https://htmx.org/headers/hx-trigger)以获取更多信息_
[`HX-Trigger-After-Settle`](https://htmx.org/headers/hx-trigger) | 允许您触发客户端事件<br /> _请[参阅文档](https://htmx.org/headers/hx-trigger)以获取更多信息_
[`HX-Trigger-After-Swap`](https://htmx.org/headers/hx-trigger) | 允许您触发客户端事件<br /> _请[参阅文档](https://htmx.org/headers/hx-trigger)以获取更多信息_
