Ejs 备忘清单
====

[![NPM version](https://img.shields.io/npm/v/ejs.svg?style=flat)](https://www.npmjs.com/package/ejs)
[![Downloads](https://img.shields.io/npm/dm/ejs.svg?style=flat)](https://www.npmjs.com/package/ejs)
[![Repo Dependents](https://badgen.net/github/dependents-repo/mde/ejs)](https://github.com/mde/ejs/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/mde/ejs)

EJS（嵌入式 JavaScript）是一种简单的模板语言，可让您使用纯 JavaScript 生成 HTML 标记
<!--rehype:style=padding-top: 12px;-->

入门
----

### Hello world

#### 安装

```shell
$ npm install ejs
```

#### hello.ejs

```ejs
<% if (user.email) { %>
  <h1><%= user.email %></h1>
<% } %>
```

#### 命令 CLI

```shell
$ ejs hello.ejs -o hello.html
```

### 使用数据渲染

```js
let ejs = require('ejs');

let people = ['geddy', 'neil', 'alex'];
let tpl = '<%= people.join(", "); %>';

let html = ejs.render(tpl, {
  people: people
});
console.log(html);
```

向 `EJS` 传递模板字符串和一些数据

### 浏览器支持

```html
<script src="ejs.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'];
  let html = ejs.render(
    '<%= people.join(", "); %>',
    { people: people }
  );
</script>
```

在脚本标签中使用 `ejs`

### 变量

|              |                                  |
|--------------|----------------------------------|
| `<%= var %>` | 打印变量的值 |
| `<%- var %>` | 打印时不进行 HTML 转义 |

### CLI

渲染并指定输出文件

```shell
$ ejs hello.ejs -o hello.html
```

为其提供模板文件和数据文件

```shell
$ ejs hello.ejs -f data.json -o hello.html
```

### 注释

```ejs
<%# 该行将表示一条注释 %>
```

--------

```ejs
<%# 这是一个多行 EJS 注释。
    它可以跨越多行，
    但不会显示
    在最终的 HTML 输出中。
%>
```

### 方法

```js
let ejs = require('ejs');
let template = ejs.compile(str, options);

template(data);
// => 渲染的 HTML 字符串

ejs.render(str, data, options);
// => 渲染的 HTML 字符串

ejs.renderFile(filename, data, options,
  function(err, str){
      // str => 渲染的 HTML 字符串
  }
);
```

### 包括文件
<!--rehype:wrap-class=col-span-2-->

```ejs
<%- include('partials/navbar.ejs') %>
```

包含带有数据的模板：

```ejs
<% include('header', { title: 'My Page' }) %>
```

--------

```ejs
<ul>
  <% users.forEach(function(user){ %>
    <%- include('item', {user: user}); %>
  <% }); %>
</ul>
```

要包含模板，需要文件名选项，路径是相对的

文档
--------

### 条件句

```ejs
<% if (userLoggedIn) { %>
  <p>Welcome, <%= username %>!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```

### 使用循环

```ejs
<% if (userLoggedIn) { %>
  <p>Welcome, <%= username %>!</p>
<% } else { %>
  <p>Please log in.</p>
<% } %>
```

### 自定义分隔符
<!--rehype:wrap-class=row-span-2-->

```js
let ejs = require('ejs'),
    users = ['geddy', 'neil', 'alex'];

// 只需一个模板
ejs.render('<?= users.join(" | "); ?>',
    {users: users},
    {delimiter: '?'});
// => 'geddy | neil | alex'

// 或全局范围内
ejs.delimiter = '$';
ejs.render('<$= users.join(" | "); $>',
    {users: users});
// => 'geddy | neil | alex'
```

### 缓存

```js
let ejs = require('ejs'),
LRU = require('lru-cache');

// LRU 缓存具有 100 项限制
ejs.cache = LRU(100);
```

### 布局

```ejs
<%- include('header'); -%>
<h1> Title </h1>
<p>
  My page
</p>
<%- include('footer'); -%>
```

### 自定义文件加载器
<!--rehype:wrap-class=col-span-2-->

```js
let ejs = require('ejs');
let myFileLoader = function (filePath) {
  return 'myFileLoader: ' + fs.readFileSync(filePath);
};

ejs.fileLoader = myFileLoader;
```

客户端支持
-----
<!--rehype:body-class=cols-2-->

### 例子

```html
<div id="output"></div>
<script src="ejs.min.js"></script>
<script>
  let people = ['geddy', 'neil', 'alex'],
      html = ejs.render('<%= people.join(", "); %>', {people: people});
  // With jQuery:
  $('#output').html(html);
  // Vanilla JS:
  document.getElementById('output').innerHTML = html;
</script>
```

### 注意事项

```js
let str = "Hello <%= include('file', {person: 'John'}); %>",
      fn = ejs.compile(str, {client: true});

fn(data, null, function(path, d){ // include callback
  // path -> 'file'
  // d -> {person: 'John'}
  // Put your code here
  // Return the contents of file as a string
}); // returns rendered string
```

## 选项
<!--rehype:body-class=cols-1-->

### 选项列表

选项 | 描述
:---|---
`cache`              | 编译后的函数被缓存，需要文件名
`filename`           | 由缓存用于关键缓存，并用于包含
`root`               | 使用绝对路径（例如 `/file.ejs`）设置包含项目的根目录。 可以是一个数组来尝试解析来自多个目录的包含。
`views`              | 解析包含相对路径时要使用的路径数组。
`context`            | 函数执行上下文
`compileDebug`       | 当 `false` 时，不编译任何调试工具
`client`             | 返回独立编译的函数
`delimiter`          | 用于内部分隔符的字符，默认为 `%`
`openDelimiter`      | 用于打开分隔符的字符，默认为 `<`
`closeDelimiter`     | 用于结束分隔符的字符，默认为 `>`
`debug`              | 输出生成的函数体
`strict`             | 当设置为 `true` 时，生成的函数处于严格模式
`_with`              | 是否使用 `with() {}` 构造。 如果为 `false`，则局部变量将存储在局部变量对象中。 （暗示`--strict`）
`localsName`         | 不使用时用于存储局部变量的对象的名称 默认为局部变量
`rmWhitespace`       | 删除所有可安全删除的空格，包括前导和尾随空格。 它还为所有 `scriptlet` 标记启用了更安全版本的 `-%>` 行吸收（它不会在行中间去除新的标记行）
`escape`             | 与 `<%=` 构造一起使用的转义函数。 它用于渲染，并在生成客户端函数时进行 `.toString()` 处理。 （默认情况下转义 XML）
`outputFunctionName` | 设置为字符串（例如 `echo` 或 `print`），以便函数在 `scriptlet` 标签内打印输出
`async`              | 当 `true` 时，EJS 将使用异步函数进行渲染。 （取决于 `JS` 运行时中的 `async`/`await` 支持

## 标签
<!--rehype:body-class=cols-1-->

### 标签列表

标签 | 描述
:---|---
`<%`  | 'Scriptlet' 标签，用于控制流，无输出
`<%_`  | “Whitespace Slurping”Scriptlet 标签，删除其前面的所有空格
`<%=`  | 将值输出到模板中（HTML 转义）
`<%-`  | 将未转义的值输出到模板中
`<%#`  | 注释标签，不执行，不输出
`<%%`  | 输出文字 `<%`
`%>`  | 普通结束标签
`-%>`  | 修剪模式（'newline slurp'）标签，修剪换行符后的内容
`_%>`  | “Whitespace Slurping”结束标签，删除其后的所有空格

## Cli
<!--rehype:body-class=cols-1-->

### Cli 列表

选项 | 描述
:---|---
`cache`                           | 编译后的函数被缓存，需要文件名
`-o / --output-file FILE`         | 将渲染的输出写入 FILE 而不是 stdout。
`-f / --data-file FILE`           | 必须是 JSON 格式。 使用来自 FILE 的解析输入作为渲染数据。
`-i / --data-input STRING`        | 必须采用 JSON 格式和 URI 编码。 使用来自 STRING 的解析输入作为渲染数据。
`-m / --delimiter CHARACTER`      | 使用带有尖括号的 CHARACTER 来表示打开/关闭（默认为 %）。
`-p / --open-delimiter CHARACTER` | 使用 CHARACTER 而不是左尖括号来打开。
`-c / --close-delimiter CHARACTER` | 使用 CHARACTER 而不是右尖括号来结束。
`-s / --strict`                   | 当设置为 `true` 时，生成的函数处于严格模式
`-n / --no-with`                   | 对变量使用 `locals` 对象，而不是使用 `with`（隐含--strict）。
`-l / --locals-name`               | 不使用“with”时用于存储局部变量的对象的名称。
`-w / --rm-whitespace`             | 删除所有可安全删除的空格，包括前导和尾随空格。
`-d / --debug`                     | 输出生成的函数体
`-h / --help`                     | 显示此帮助消息。
`-V/v / --version`                 | 显示 EJS 版本。

使用示例：

```bash
$ ejs -p [ -c ] ./template_file.ejs -o ./output.html
$ ejs ./test/fixtures/user.ejs name=Lerxst
$ ejs -n -l _ ./some_template.ejs -f ./data_file.json
```
