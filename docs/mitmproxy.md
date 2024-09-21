Mitmproxy 备忘清单
====

[Mitmproxy](https://mitmproxy.org/) 是一个免费开源的交互式 HTTPS 代理。这是 mitmproxy 的快速参考备忘单。

入门
-----

### 使用
<!--rehype:wrap-class=col-span-2-->

选项 | 范例 | 描述
:--|--|--
`-p`   | mitmproxy -p 8001                                  | 在端口 `8001` 上启动代理
`-m`   | mitmproxy -p 8001 -m reverse:<http://127.0.0.1:4000> | `8001` 端口反向代理到4000端口
`-w`   | mitmproxy -p 8001 -w traffic.mitm                  | 流到达时流向文件
`-r`   | mitmproxy -r traffic.mitm                          | 从文件中读取流
`-C`   | mitmproxy -C traffic.mitm                          | 从保存的文件重放客户端请求
`-S`   | mitmproxy -S traffic.mitm                          | 从保存的文件重放服务器响应
`-s`   | mitmproxy -s myScript.py                           | 执行脚本
`-h`   | mitmproxy -h                                       | `mitmproxy` 快速帮助

### 移动

```markdown
        k                 Ctrl b
        ▲                   ▲▲
        │                   ││
h ◀ ─── + ─── ▶ l           ││ page
        │                   ││
        ▼                   ▼▼
        j             Ctrl f / Space 
```

---

:---|---
:---|---
`h`, `j`, `k` ,`l`   | 左、下、上、右
`Ctrl` `b`           | 向上翻页
`Space` / `Ctrl` `f` | 向下翻页
`g` / `G`            | 转到开头/结尾
`Arrows`             | 上下左右
<!--rehype:className=shortcuts-->

### 安装

- [mitmproxy 文档](https://docs.mitmproxy.org/stable/) _(mitmproxy.org)_
- [mitmproxy 开源仓库](https://github.com/mitmproxy/mitmproxy) _(github.com)_

---

```bash
$ brew install mitmproxy # macOS
```

### 代理模式
<!--rehype:wrap-class=col-span-2-->

Argument | Effect
:-- | --
`-R REVERSE_PROXY`, `--reverse REVERSE_PROXY` | 将所有请求转发到上游 HTTP 服务器：`http[s]://host[:port]`。客户端始终可以通过 `HTTPS` 和 `HTTP` 进行连接，与服务器的连接由指定的方案决定
`--socks` | 设置 `SOCKS5` 代理模式
`-T`, `--transparent` | 设置透明代理模式
`-U UPSTREAM_PROXY`, `--upstream UPSTREAM_PROXY` | 将所有请求转发到上游代理服务器：`http://host[:port]`
<!--rehype:className=style-list-->

### 复制到剪贴板

命令语法：

```
:export.clip format flow
```

例子：

| 描述 | 命令示例 |
| ---|--- |
| 1. 复制为 curl 命令 | `:export.clip curl @focus` |
| 2. 复制为 httpie | `:export.clip httpie @focus` |
| 3. 复制为原始文件 | `:export.clip raw @focus` |
| 4. 复制为原始 HTTP 请求 | `:export.clip raw_request @focus` |
| 5. 复制为原始 HTTP 响应 | `:export.clip raw_response @focus` |
<!--rehype:className=style-list-->

将流程导出到系统剪贴板

### 保存到文件

命令语法：

```
:export.file format flow path
```

例子：

| 描述 | 命令示例 |
| ---|--- |
| 1. 导出到 `/tmp/a.curl` | `:export.file curl @focus /tmp/a.curl` |
| 2. 导出到 `/tmp/a.httpie` | `:export.file httpie @focus /tmp/a.httpie` |
| 3. 导出到 `/tmp/a.raw` | `:export.file raw @focus  /tmp/a.raw` |
| 4. 导出到 `/tmp/a.request` | `:export.file raw_request @focus /tmp/a.request` |
| 5. 导出到 `/tmp/a.response` | `:export.file raw_response @focus /tmp/a.response` |
<!--rehype:className=style-list-->

将流程导出到系统剪贴板

### 流（视图）
<!--rehype:wrap-class=row-span-2-->

:---|---
:---|---
`A`        | 恢复所有拦截的流
`D`        | 重复流
`F`        | 设置焦点跟随
`L`        | 从文件加载流
`M`        | 切换查看标记流
`S`        | 开始服务器回放
`U`        | 取消设置所有标记
`V`        | 还原对此流的更改
`X`        | 杀死这个流
`Z`        | 清除所有未显示的流
`a`        | 恢复此拦截流
`b`        | 将响应主体保存到文件
`d`        | 从视图中删除流
`e`        | 将此流导出到文件
`f`        | 设置视图过滤器
`m`        | 在此流程上切换标记
`n`        | 创建新流程
`o`        | 设置流列表顺序
`r`        | 重播此流程
`v`        | 反向流列表顺序
`w`        | 将列出的流程保存到文件
`\|`       | 在此流上运行脚本
`Ctrl` `l` | 将剪辑发送到剪贴板
<!--rehype:className=shortcuts-->

### 常见的快捷键

:---|---
:---|---
`q`     | 返回/退出
`z`     | 清除流列表
`:`     | 命令提示符
`E`     | 查看事件日志
`O`     | 查看选项
`r`     | 重播此流程
`Tab`   | 下一个
`Enter` | 选择
<!--rehype:className=shortcuts-->

### 全局键绑定

:---|---
:---|---
`-`            | 循环到下一个布局
`?`            | 查看帮助
`B`            | 启动附加的浏览器
`C`            | 查看命令
`I`            | 切换拦截
`K`            | 查看按键绑定
`P`            | 查看流程详细信息
`Q`            | 立即退出
`W`            | 流式传输到文件
`i`            | 设置拦截
`Ctrl` `right` | 聚焦下一个布局窗格
`Shift` `tab`  | 聚焦下一个布局窗格
<!--rehype:className=shortcuts-->

### 代理选项
<!--rehype:wrap-class=col-span-2-->

:---|---
:---|---
`-b ADDR`, `--bind-address ADDR` | 将代理绑定到的地址（默认为所有接口）
`-I HOST`, `--ignore HOST` | 忽略主机并转发所有流量而不对其进行处理。在透明模式下，建议使用 IP 地址（范围），而不是主机名。在常规模式下，仅忽略 SSL 流量并应使用主机名。提供的值被解释为正则表达式并匹配 ip 或主机名。可以多次通过
`--tcp HOST` | 与模式匹配的所有主机的通用 TCP SSL 代理模式。类似于 `--ignore`，但 SSL 连接被拦截。通信内容以详细模式打印到日志中
`-n`, `--no-server` | 不要启动代理服务器。用于离线分析以前捕获的流
`-p PORT`, `--port PORT` | 代理服务端口。默认值：`8080`
`--http2`, `--no-http2` | 显式启用/禁用 `HTTP/2` 支持。默认情况下禁用，直到主要网站正确实施规范。默认值将在未来版本中更改
`--no-websocket`, `--websocket` | 显式启用/禁用 `WebSocket` 支持。默认启用
`--raw-tcp`, `--no-raw-tcp` | 显式启用/禁用实验性原始 `TCP` 支持。默认情况下禁用。默认值将在未来版本中更改
`--spoof-source-address` | 使用客户端的 IP 进行服务器端连接。与 `–upstream-bind-address` 结合使用以欺骗固定源地址
`--upstream-bind-address UPSTREAM_BIND_ADDRESS` | 将上游请求绑定到的地址（默认为无）
<!--rehype:className=style-list-->

Mitmproxy 过滤器
---------------

### 过滤器

:---|---
:---|---
`f` | 设置视图过滤器 _(在流视图页面上)_
<!--rehype:className=shortcuts-->

---

- [RegEX 备忘清单](./regex.md) _(jaywcjlove.github.io)_

正则表达式是 Python 风格的，可以指定为带引号的字符串

### 运算符

:---|---
:---|---
`!`     | 一元非
`&`     | 和
`\|`     | 或者
`(...)` | 分组

### 表达式
<!--rehype:wrap-class=row-span-2-->

:---|---
:---|---
`~a`           | 响应匹配资源：CSS、Javascript、Flash、图像。
`~b` `regex`   | 主体 Body
`~bq` `regex`  | 请求正文
`~bs` `regex`  | 响应体
`~c` `int`     | HTTP 响应代码
`~d` `regex`   | 域
`~dst` `regex` | 匹配目标地址
`~e`           | 匹配错误
`~h` `regex`   | 标头
`~hq` `regex`  | 请求头
`~hs` `regex`  | 响应头
`~http`        | 匹配 HTTP 流
`~m` `regex`   | 方法
`~marked`      | 匹配标记流
`~q`           | 匹配请求无响应
`~s`           | 匹配响应
`~src` `regex` | 匹配源地址
`~t` `regex`   | 内容类型标头
`~tcp`         | 匹配 TCP 流
`~tq` `regex`  | 请求 Content-Type 标头
`~ts` `regex`  | 响应内容类型标头
`~u` `regex`   | 网址
`~websocket`   | 匹配 WebSocket 流（和 HTTP-WebSocket 握手流）

### 流选择器

表达式

:---|---
:---|---
`@all` | 所有流程
`@focus` | 目前关注的流程
`@shown` | 当前显示的所有流程
`@hidden` | 当前隐藏的所有流程
`@marked` | 所有标记流
`@unmarked` | 所有未标记的流

mitmproxy 有一组方便的流选择器，可以在当前视图上操作

### 示例

包含“google.com”的网址

```
google\.com
```

正文中包含字符串“test”的请求

```
~q ~b test
```

除了带有 text/html 内容类型的请求之外的任何内容：

```
!(~q & ~t "text/html")
```

替换请求中的整个 GET 字符串（需要引号才能使其工作）：

```
":~q ~m GET:.*:/replacement.html"
```

Mitmproxy 脚本
-------
<!--rehype:body-class=cols-2-->

### Custom response

```python
from mitmproxy import http
def request(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "http://example.com/path":
        flow.response = http.HTTPResponse.make(
            200,  # (optional) status code
            b"Hello World",  # (optional) content
            {"Content-Type": "text/html"}  # (optional) headers
        )
```

从代理发送回复而不向远程服务器发送任何数据

### Add header

```python
class AddHeader:
    def __init__(self):
        self.num = 0
    def response(self, flow):
        self.num = self.num + 1
        flow.response.headers["count"] = str(self.num)
addons = [
    AddHeader()
]
```

为每个响应添加一个 HTTP 标头

另见
-------

- [mitmproxy addons](https://github.com/mitmproxy/mitmproxy/tree/master/examples/addons) _(github.com)_
- [mitmproxy 文档](https://docs.mitmproxy.org/stable/) _(mitmproxy.org)_
- [mitmproxy 开源仓库](https://github.com/mitmproxy/mitmproxy) _(github.com)_
- [mitmproxy 备忘清单](https://www.stut-it.net/blog/2017/mitmproxy-cheatsheet.html) _(stut-it.net)_
