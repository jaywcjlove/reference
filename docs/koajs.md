Koajs 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/koa.svg?style=flat)](https://npmjs.org/package/koa)
[![Downloads](https://img.shields.io/npm/dm/koa.svg?style=flat)](https://www.npmjs.com/package/koa)
[![Repo Dependents](https://badgen.net/github/dependents-repo/koajs/koa)](https://github.com/koajs/koa/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/koajs/koa)

基于 Node.js 平台的下一代 web 开发框架，包含 [Koa](https://koajs.com/) 的 API 参考列表和一些示例
<!--rehype:style=padding-top: 12px;-->

入门
---

### Hello World
<!--rehype:wrap-class=row-span-2-->

[Koa](https://koajs.com/) 需要 [node v7.6.0](https://nodejs.org) 或更高版本来支持ES2015、异步方法，你可以安装自己支持的 `node` 版本

- 安装依赖

  ```bash
  $ mkdir myapp # 创建目录
  $ cd myapp    # 进入目录
  $ nvm install 7
  $ npm init -y # 初始化一个配置
  $ npm install koa # 安装依赖
  ```

- 入口文件 `index.js` 添加代码：

  ```js
  const Koa = require('koa');
  const app = new Koa();

  app.use(async ctx => {
    ctx.body = 'Hello World';
  });

  app.listen(3000);
  ```

- 使用以下命令运行应用程序

  ```bash
  $ node index.js
  ```
<!--rehype:className=style-timeline-->

### 级联
<!--rehype:wrap-class=row-span-2-->

```js
const Koa = require('koa');
const app = new Koa();
// X-Response-Time x 响应时间
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
// 记录器 logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(
    `${ctx.method} ${ctx.url} - ${ms}`
  );
});
// 响应 response
app.use(async ctx => {
  ctx.body = 'Hello World';
});
app.listen(3000);
```

### 配置

:- | :-
:- | :-
`app.env` | 默认为 `NODE_ENV` 或 `development`
`app.keys` | 签名 `cookie` 密钥数组
`app.proxy` | 何时信任真正的代理头字段
`app.subdomainOffset` | 要忽略的 `.subdomains` 的偏移量，默认为 `2`
`app.proxyIpHeader` | 代理 `ip` 头，默认为 `X-Forwarded-For`
`app.maxIpsCount` | 从代理 `ip` 头读取的最大 `ips` 数，默认为 `0`（表示无穷大）
<!--rehype:className=style-list style-list-arrow-->

### app.callback()
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`app.listen(...)` [#](https://koajs.com/#app-listen-) | 为一个绑定 `3000` 端口的简单 `Koa` 应用
`app.callback()` [#](https://koajs.com/#app-callback-) | 返回一个适合 `http.createServer()` 方法的回调函数用来处理请求
`app.use(function)` [#](https://koajs.com/#app-use-function-) | 添加指定的中间件，详情请看 [Middleware](https://github.com/koajs/koa/wiki#middleware)
`app.keys` [#](https://koajs.com/#app-keys-) | 设置签名 `cookie` 密钥
`app.context` [#](https://koajs.com/#app-context) | 从中创建 `ctx` 的原型
<!--rehype:className=style-list style-list-arrow-->

### 错误处理

```js
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});
```

默认情况下 `Koa` 会将所有错误信息输出到 `stderr`， 除非 `app.silent` 是 `true`。当 `err.status` 是 `404` 或者 `err.expose` 时，默认错误处理程序也不会输出错误

### Context 示例

```js
app.use(async ctx => {
  ctx; // 这是上下文 Context
  ctx.request;  // 这是 koa Request
  ctx.response; // 这是 koa Response
});
```

### app.listen(...)
<!--rehype:wrap-class=col-span-2 row-span-2-->

```js
const Koa = require('koa');
const app = new Koa();
app.listen(3000);
```

`app.listen(...)` 实际上是以下代码的语法糖:

```js
const http = require('http');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
```

这意味着您可以同时支持 `HTTPS` 和 `HTTPS`，或者在 `多个端口` 监听同一个应用

```js
const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
http.createServer(app.callback()).listen(3000);
https.createServer(app.callback()).listen(3001);
```

### ctx.throw 示例

```js
ctx.throw(400);
ctx.throw(400, 'name required');
ctx.throw(400, 'name required', { user: user });
```

`this.throw('name required', 400)` 等价于

```js
const err = new Error('name required');
err.status = 400;
err.expose = true;
throw err;
```

### ctx.assert 示例

```js
ctx.assert(
  ctx.state.user,
  401,
  'User not found. Please login!'
);
```

### Context(上下文) API
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`ctx.req` | Node 的 request 对象
`ctx.res` | Node 的 response 对象
`ctx.request` | Koa 的 Request 对象
`ctx.response` | Koa 的 Response 对象
`ctx.state` | 推荐的命名空间，用于通过中间件传递信息到前端视图
`ctx.app` | 应用实例引用
`ctx.app.emit` | 发出由第一个参数定义的类型的事件
`ctx.cookies.get(name, [options])` | 获得 `cookie` 中名为 `name` 的值
`ctx.cookies.set(name, value, [options])` | 设置 `cookie` 中名为 `name` 的值
`ctx.throw([status], [msg], [properties])` | 抛出包含 `.status` 属性的错误，默认为 `500`
`ctx.assert(value, [status], [msg], [properties])` | 当 `!value` 时， `Helper` 方法抛出一个类似 `.throw()` 的错误
`ctx.respond` | 避免使用 `Koa` 的内置响应处理功能，您可以直接赋值 `this.repond = false`
<!--rehype:className=style-list style-list-arrow-->

### ctx.cookies.set 参数

:- | :-
:- | :-
`maxAge` | 表示从Date开始的毫秒数 `now()` 到期。
`expires` | 一个 `Date` 对象，指示 `cookie` 的到期日期（默认情况下在会话结束时到期）
`path` | 表示 `cookie` 路径的字符串（默认为`/`）
`domain` | 表示 `cookie` 的域的字符串（无默认值）
`secure` | 一个布尔值，指示 `cookie` 是否只通过HTTPS发送（HTTP默认为false，HTTPS默认为true）。阅读有关此选项的更多信息
`httpOnly` | 一个布尔值，指示cookie是否只通过HTTP（S）发送，而不可用于客户端 JavaScript（默认为true）
`sameSite` | 一个布尔值或字符串，指示cookie是否为“同一站点”cookie（默认为false）。这可以设置为“strict”、“lax”、“none”或true（映射为“strect”）
`signed` | 一个布尔值，指示是否对cookie进行签名（默认为false）。如果这是真的，还将发送另一个附加了.sig后缀的同名cookie，其中一个27字节的url安全base64 SHA1值表示cookie name=cookie值相对于第一个Keygrip键的哈希值。此签名密钥用于在下次收到cookie时检测篡改
`overwrite` | 一个布尔值，指示是否覆盖以前设置的同名 `cookie`（默认为false）。如果为true，则在设置此Cookie时，将从set-Cookie标头中筛选出在同一请求期间设置的具有相同名称的所有Cookie（无论路径或域如何）
<!--rehype:className=style-list style-list-arrow-->

### 请求(Request)
<!--rehype:wrap-class=row-span-5-->

:- | :-
:- | :-
`request.header` | 请求头对象
`request.header=` | 设置请求头对象
`request.headers` | 请求头对象。等价于 request.header.
`request.headers=` | 设置请求头对象。 等价于request.header=.
`request.method` | 请求方法
`request.method=` | 设置请求方法, 在实现中间件时非常有用，比如 methodOverride()
`request.length` | 以数字的形式返回 request 的内容长度(Content-Length)，或者返回 undefined。
`request.url` | 获得请求url地址.
`request.url=` | 设置请求地址，用于重写url地址时
`request.originalUrl` | 获取请求原始地址
`request.origin` | 获取URL原始地址, 包含 protocol 和 host
`request.href` | 获取完整的请求URL, 包含 protocol, host 和 url
`request.path` | 获取请求路径名
`request.path=` | 设置请求路径名并保留当前查询字符串
`request.querystring` | 获取查询参数字符串(url中?后面的部分)，不包含?
`request.querystring=` | 设置原始查询字符串
`request.search` | 获取查询参数字符串，包含?
`request.search=` | 设置原始查询字符串
`request.host` | 获取 host (hostname:port)。 当 app.proxy 设置为 true 时，支持 X-Forwarded-Host
`request.hostname` | 获取 hostname。当 app.proxy 设置为 true 时，支持 X-Forwarded-Host。
`request.URL` | 获取 WHATWG 解析的对象.
`request.type` | 获取请求 Content-Type，不包含像 "charset" 这样的参数。
`request.charset` | 获取请求 charset，没有则返回 `undefined`
`request.query` | 将查询参数字符串进行解析并以对象的形式返回，如果没有查询参数字字符串则返回一个空对象
`request.query=` | 根据给定的对象设置查询参数字符串
`request.fresh` | 检查请求缓存是否 "fresh"(内容没有发生变化)
`request.stale` | 与 req.fresh 相反
`request.protocol` | 返回请求协议，"https" 或者 "http"
`request.secure` | 简化版 this.protocol == "https"，用来检查请求是否通过 TLS 发送
`request.ip` | 请求远程地址，当 app.proxy 设置为 true 时，支持 X-Forwarded-Host
`request.ips` | 当 X-Forwarded-For 存在并且 app.proxy 有效，将会返回一个有序（从 upstream 到 downstream）ip 数组
`request.subdomains` | 以数组形式返回子域名
`request.is(types...)` | 检查请求所包含的 "Content-Type" 是否为给定的 type 值
`request.accepts(types)` | 检查给定的类型 types(s) 是否可被接受，当为 true 时返回最佳匹配，否则返回 false
`request.acceptsEncodings(encodings)` | 检查 `encodings` 是否可以被接受，当为 `true` 时返回最佳匹配，否则返回 `false`
`request.acceptsCharsets(charsets)` | 检查 `charsets` 是否可以被接受，如果为 `true` 则返回最佳匹配，否则返回 `false`
`request.acceptsLanguages(langs)` | 检查 `langs` 是否可以被接受，如果为 `true` 则返回最佳匹配，否则返回 `false`
`request.idempotent` | 检查请求是否为幂等(idempotent)
`request.socket` | 返回请求的socket
`request.get(field)` | 返回请求头
<!--rehype:className=style-list style-list-arrow-->

### 响应(Response)
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`response.header` | Response header 对象
`response.headers` | Response header 对象。等价于 response.header.
`response.socket` | Request socket.
`response.status` | 获取响应状态。 默认情况下，response.status设置为404，而不像node's res.statusCode默认为200。
`response.status=` | 通过数字设置响应状态
`response.message` | 获取响应状态消息。默认情况下, response.message关联response.status。
`response.message=` | 将响应状态消息设置为给定值。
`response.length=` | 将响应Content-Length设置为给定值。
`response.length` | 如果 Content-Length 作为数值存在，或者可以通过 ctx.body 来进行计算，则返回相应数值，否则返回 undefined。
`response.body` | 获取响应体。
`response.body=` | 设置响应体为如 `string`,`Buffer`,`Stream`,`Object\|Array`,`null`
`response.get(field)` | 获取 response header 中字段值，field 不区分大小写
`response.set(field, value)` | 设置 response header 字段 field 的值为 value
`response.append(field, value)`| 添加额外的字段field 的值为 val
`response.set(fields)` | 使用对象同时设置 response header 中多个字段的值
`response.remove(field)` | 移除 response header 中字段 filed
`response.type` | 获取 response Content-Type，不包含像"charset"这样的参数
`response.type=` | 通过 mime 类型的字符串或者文件扩展名设置 response Content-Type
`response.is(types...)` | 跟 `ctx.request.is()` 非常类似。用来检查响应类型是否是所提供的类型之一
`response.redirect(url, [alt])` | 执行 [302] 重定向到对应 url
`response.attachment([filename])` | 设置 "attachment" 的 Content-Disposition，用于给客户端发送信号来提示下载
`response.headerSent` | 检查 response header 是否已经发送，用于在发生错误时检查客户端是否被通知。
`response.lastModified` | 如果存在 Last-Modified，则以 Date 的形式返回。
`response.lastModified=` | 以 UTC 格式设置 Last-Modified。您可以使用 Date 或 date 字符串来进行设置。
`response.etag=` | 设置 包含 "s 的 ETag
`response.vary(field)` | 不同于field.
`response.flushHeaders()` | 刷新任何设置的响应头，并开始响应体
<!--rehype:className=style-list style-list-arrow-->

### 请求(Request)别名

以下访问器和别名与 [Request](#请求request) 等价：

- `ctx.header`
- `ctx.headers`
- `ctx.method`
- `ctx.method=`
- `ctx.url`
- `ctx.url=`
- `ctx.originalUrl`
- `ctx.origin`
- `ctx.href`
- `ctx.path`
- `ctx.path=`
- `ctx.query`
- `ctx.query=`
- `ctx.querystring`
- `ctx.querystring=`
- `ctx.host`
- `ctx.hostname`
- `ctx.fresh`
- `ctx.stale`
- `ctx.socket`
- `ctx.protocol`
- `ctx.secure`
- `ctx.ip`
- `ctx.ips`
- `ctx.subdomains`
- `ctx.is()`
- `ctx.accepts()`
- `ctx.acceptsEncodings()`
- `ctx.acceptsCharsets()`
- `ctx.acceptsLanguages()`
- `ctx.get()`

### 响应(Response)别名

以下访问器和别名与 [Response](#响应response) 等价：

- `ctx.body`
- `ctx.body=`
- `ctx.status`
- `ctx.status=`
- `ctx.message`
- `ctx.message=`
- `ctx.length=`
- `ctx.length`
- `ctx.type=`
- `ctx.type`
- `ctx.headerSent`
- `ctx.redirect()`
- `ctx.attachment()`
- `ctx.set()`
- `ctx.append()`
- `ctx.remove()`
- `ctx.lastModified=`
- `ctx.etag=`

### request.fresh 示例

```js
// freshness 检查需要状态 20x 或 304
ctx.status = 200;
ctx.set('ETag', '123');

// 缓存正常
if (ctx.fresh) {
  ctx.status = 304;
  return;
}

// 缓存已过时
// 获取新数据
ctx.body = await db.find('something');
```

### ctx.is 示例

```js
// Content-Type: text/html; charset=utf-8
ctx.is('html'); // => 'html'
ctx.is('text/html'); // => 'text/html'
ctx.is('text/*', 'text/html');
// => 'text/html'
// 当 Content-Type 为 application/json 时
ctx.is('json', 'urlencoded'); // => 'json'
ctx.is('application/json');
// => 'application/json'
ctx.is('html', 'application/*');
// => 'application/json'

ctx.is('html'); // => false
```

### ctx.accepts 示例

```js
// 接受: text/*, application/json
ctx.accepts('html');
// => "html"
ctx.accepts('text/html');
// => "text/html"
ctx.accepts('json', 'text');
// => "json"
ctx.accepts('application/json');
// => "application/json"
```

### request.acceptsCharsets 示例

```js
// Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5
ctx.acceptsCharsets('utf-8', 'utf-7');
// => "utf-8"

ctx.acceptsCharsets(['utf-7', 'utf-8']);
// => "utf-8"
```

检查 `charsets` 是否可以被接受，如果为 `true` 则返回最佳匹配， 否则返回 `false`

### response.set 示例

```js
ctx.set({
  'Etag': '1234',
  'Last-Modified': date
});
```

使用对象同时设置 response header 中多个字段的值

### response.type 示例

```js
const ct = ctx.type;
// => "image/png"
```

获取 response Content-Type，不包含像"charset"这样的参数
