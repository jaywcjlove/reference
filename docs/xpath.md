XPath 备忘清单
===

这是一份 XPath 选择器备忘单，其中列出了常用的 `XPath` 定位方法和 `CSS` 选择器

XPath 选择器
--------

### 入门
<!--rehype:wrap-class=row-span-2-->

XPath 即为 XML 路径语言（XML Path Language），它是一种用来确定XML文档中某部分位置的计算机语言。

- [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) _(whitebeam.org)_
- XPath 代表 XML 路径语言
- XPath 使用 `类似路径` 语法识别和导航 XML 文档中的节点
- XPath 包含超过 200 个内置函数
- XPath 是 XSLT 标准中的主要元素
- XPath 是 W3C 推荐的

在 `Firefox` 或 `Chrome` 控制台中测试：

```js
$x('/html/body')
$x('//h1')
$x('//h1')[0].innerText
$x('//a[text()="XPath"]')[0].click()
```

### 后代选择器

| Xpath        | CSS          |
|--------------|--------------|
| `//h1`       | h1           |
| `//div//p`   | div p        |
| `//ul/li`    | ul > li      |
| `//ul/li/a`  | ul > li > a  |
| `//div/*`    | div > *      |
| `/`          | :root        |
| `/html/body` | :root > body |
<!--rehype:className=show-header-->

### 有序选择器

| Xpath               | CSS                  |
|---------------------|----------------------|
| `//ul/li[1]`        | ul > li:first-child  |
| `//ul/li[2]`        | ul > li:nth-child(2) |
| `//ul/li[last()]`   | ul > li:last-child   |
| `//li[@id="id"][1]` | li#id:first-child    |
| `//a[1]`            | a:first-child        |
| `//a[last()]`       | a:last-child         |
<!--rehype:className=show-header-->

### 属性选择器
<!--rehype:wrap-class=col-span-2 row-span-2-->

| Xpath                           | CSS                  |
|---------------------------------|----------------------|
| `//*[@id="id"]`                 | #id                  |
| `//*[@class="class"]`           | .class               |
| `//input[@type="submit"]`       | input[type="submit"] |
| `//a[@id="abc"][@for="xyz"]`    | a#abc[for="xyz"]     |
| `//a[@rel]`                     | a[rel]               |
| `//a[starts-with(@href, '/')]`  | a[href^='/']         |
| `//a[ends-with(@href, '.pdf')]` | a[href$='pdf']       |
| `//a[contains(@href, '://')]`   | a[href*='`:`//']     |
| `//a[contains(@rel, 'help')]`   | a[rel~='help']       |
<!--rehype:className=show-header-->

### 兄弟姐妹选择器

| Xpath                                | CSS      |
|--------------------------------------|----------|
| `//h1/following-sibling::ul`         | h1 ~ ul  |
| `//h1/following-sibling::ul[1]`      | h1 + ul  |
| `//h1/following-sibling::[@id="id"]` | h1 ~ #id |
<!--rehype:className=show-header-->

### 最有用的路径表达式

| Xpath                            | CSS                        |
|----------------------------------|----------------------------|
`nodename` | 选择名称为 `nodename` 的所有节点
`/`  | 从根节点中选择
`//` | 从当前节点中选择文档中与选择匹配的节点，无论它们在哪里
`.`  | 选择当前节点
`..` | 选择当前节点的父节点
`@`  | 选择属性
<!--rehype:className=show-header-->

### 杂项选择器
<!--rehype:wrap-class=col-span-2-->

| Xpath                             | CSS                       |
|-----------------------------------|---------------------------|
| `//h1[not(@id)]`                  | h1:not([id])              |
| `//button[text()="Submit"]`       | 文字匹配 |
| `//button[contains(text(),"Go")]` | 文本包含（子字符串） |
| `//product[@price > 2.50]`        | 算术 |
| `//ul[*]`                         | 有孩子 |
| `//ul[li]`                        | 有孩子（具体） |
| `//a[@name or @href]`             | 或逻辑 |
| `//a \| //div`                    | 联合（加入结果） |
<!--rehype:className=show-header-->

### jQuery
<!--rehype:wrap-class=col-span-2-->

| Xpath                            | CSS                        |
|----------------------------------|----------------------------|
| `//ul/li/..`                     | $('ul > li').parent()      |
| `//li/ancestor-or-self::section` | $('li').closest('section') |
| `//a/@href`                      | $('a').attr('href')        |
| `//span/text()`                  | $('span').text()           |
<!--rehype:className=show-header-->

### 运算符
<!--rehype:wrap-class=col-span-2-->

运算符 | 说明  | 示例
:- | - | -
`\|`  | 计算两个节点集 | `//book \| //cd`
`+`   | 添加 | `6 + 4`
`-`   | 减法 | `6 - 4`
`*`   | 乘法 | `6 * 4`
`div` | 分配 | `8 div 4`
`=`   | 平等的 | `price=9.80`
`!=`  | 不相等 | `price!=9.80`
`<`   | 小于   | `price<9.80`
`<=`  | 小于或等于 | `price<=9.80`
`>`   | 大于 | `price>9.80`
`>=`  | 大于或等于 | `price>=9.80`
`or`  | 或者 | `price=9.80` or `price=9.70`
`and` | 和 | `price>9.00` and `price<9.90`
`mod` | 模数（除法余数） | `5` mod `2`
<!--rehype:className=show-header-->

XPath 表达式
-----------

### 步骤和轴

| -    | -    | -    | -               |
|------|------|------|-----------------|
| `//` | `ul` | `/`  | `a[@id='link']` |
| Axis | Step | Axis | Step            |

### 前缀

| 前缀    | 例子                  | 意思是    |
|--------|-----------------------|----------|
| `//`   | `//hr[@class='edge']` | 任何地方 |
| `/`    | `/html/body/div`      | 根     |
| `./`   | `./div/p`             | 相对的 |
<!--rehype:className=show-header-->

### Axes

| Axis(轴) | 例子             | 意思是      |
|------|---------------------|------------|
| `/`  | `//ul/li/a`         | 孩子      |
| `//` | `//[@id="list"]//a` | 后裔 |
<!--rehype:className=show-header-->

XPath Predicates(谓词)
----------

### Predicates(谓词)

```bash
//div[true()]
//div[@class="head"]
//div[@class="head"][@id="top"]
```

仅当某些条件为真时才限制节点集。它们可以被链接起来。

### 操作符

```bash
# 比较
//a[@id = "xyz"]
//a[@id != "xyz"]
//a[@price > 25]
```

```bash
# 逻辑 (and/or)
//div[@id="head" and position()=2]
//div[(x and y) or not(z)]
```

### 使用节点

```bash
# 在函数内部使用它们
//ul[count(li) > 2]
//ul[count(li[@class='hide']) > 0]
```

```bash
# 返回具有 `<li>` 子级的 `<ul>`
//ul[li]
```

您可以在谓词中使用节点。

### 索引

```bash
//a[1]                # 第一个<a>
//a[last()]           # 最后一个<a>
//ol/li[2]            # 第二个<li>
//ol/li[position()=2] # 和上面一样
//ol/li[position()>1] #:not(:first-child)
```

将 `[]` 与数字一起使用，或者使用 `last()` 或 `position()`。

### 链接顺序

```bash
a[1][@href='/']
a[@href='/'][1]
```

顺序很重要，这两个是不同的。

### 嵌套谓词

```
//section[.//h1[@id='hi']]
```

如果它有一个具有 `id='hi'` 的 `<h1>` 后代，则返回 `<section>`。

XPath 函数
---------
<!--rehype:body-class=cols-2-->

### 节点功能

```bash
name()            # //[starts-with(name(), 'h')]
text()            # //button[text()="Submit"]
                  # //button/text()
lang(str)
namespace-uri()
```

```bash
count()           # //table[count(tr)=1]
position()        # //ol/li[position()=2]
```

### 字符串函数

```bash
contains()        # font[contains(@class,"head")]
starts-with()     # font[starts-with(@class,"head")]
ends-with()       # font[ends-with(@class,"head")]
```

```bash
concat(x,y)
substring(str, start, len)
substring-before("01/02", "/")  #=> 01
substring-after("01/02", "/")   #=> 02
translate()
normalize-space()
string-length()
```

### 布尔函数

```bash
not(expr)         # button[not(starts-with(text(),"Submit"))]
```

### 类型转换

```bash
string()
number()
boolean()
```

XPath Axes
----
<!--rehype:body-class=cols-2-->

### 使用轴

```bash
//ul/li                       # ul > li
//ul/child::li                # ul > li (same)
//ul/following-sibling::li    # ul ~ li
//ul/descendant-or-self::li   # ul li
//ul/ancestor-or-self::li     # $('ul').closest('li')
```

----

|      |      |            |      |
|------|------|------------|------|
| `//` | `ul` | `/child::` | `li` |
| Axis | Step | Axis       | Step |

表达式的步骤由 `/` 分隔，通常用于选择子节点。 这并不总是正确的：您可以使用 `::` 指定不同的“轴”。

### 子轴

```bash
# 都一样
//ul/li/a
//child::ul/child::li/child::a
```

`child::` is the default axis. This makes `//a/b/c` work.

```bash
# 都一样
# 这是因为 `child::li` 是真实的
//ul[li]
//ul[child::li]
```

```bash
# 都一样
//ul[count(li) > 2]
//ul[count(child::li) > 2]
```

### 后代或自我轴

```bash
# 都一样
//div//h4
//div/descendant-or-self::h4
```

`//` 是 `descendant-or-self::` 轴的缩写。

```bash
# 都一样
//ul//[last()]
//ul/descendant-or-self::[last()]
```

### 其他轴
<!--rehype:wrap-class=row-span-2-->

| Axis               | Abbrev | Notes |
|--------------------|--------|-------|
`ancestor`           |        | 选择当前节点的所有祖先(父母、祖父母等)
`ancestor-or-self`   |        | 选择当前节点所有祖先(父、祖父等)和当前节点本身
`attribute`          | `@`    | `@href` 是 `attribute::href` 的缩写
`child`              |        | `div` 是 `child::div` 的缩写
`descendant`         |        | 选择当前节点的所有后代（子、孙等）
`descendant-or-self` | `//`   | `//` 是 `/descendant-or-self::node()/`的缩写  选择当前节点和当前节点本身的所有后代（子、孙等）
`namespace`          |        | 选择当前节点的所有命名空间节点
`self`               | `.`    | `.` 是 `self::node()` 的缩写，选择当前节点
`parent`             | `..`   | `..` 是 `parent::node()` 的缩写，选择当前节点的父节点
`following`          |        | 选择文档中当前节点结束标记之后的所有内容
`following-sibling`  |        | 选择当前节点之后的所有兄弟节点
`preceding`          |        | 选择文档中出现在当前节点之前的所有节点，除了祖先、属性节点和命名空间节点
`preceding-sibling`  |        | 选择当前节点之前的所有兄弟节点
<!--rehype:className=show-header-->

您还可以使用其他轴。

### 联合

```bash
//a | //span
```

使用 `|` 连接两个表达式。

XPath 更多示例
-------------
<!--rehype:body-class=cols-2-->

### 示例

```bash
//*                 # 所有元素
count(//*)          # 计算所有元素
(//h1)[1]/text()    # 第一个 h1 标题的文本
//li[span]          # 找到一个 <li> 里面有一个 <span>
                    # ...扩展到 //li[child::span]
//ul/li/..          # 使用 .. 选择父级
```

### 查找(父)家长

```bash
//section[h1[@id='section-name']]
```

查找直接包含 `h1#section-name` 的 `<section>`

```bash
//section[//h1[@id='section-name']]
```

查找包含 `h1#section-name` 的 `<section>`。
（与上面相同，但使用后代或自我而不是孩子）

### 最近的

```bash
./ancestor-or-self::[@class="box"]
```

像 `jQuery` 的 `$().closest('.box')` 一样工作。

### 属性

```bash
//item[@price > 2*@discount]
```

查找 `<item>` 并检查其属性

另见
--------

- [Devhints](https://devhints.io/xpath) _(devhints.io)_
- [Xpath test bed](http://www.whitebeam.org/library/guide/TechNotes/xpathtestbed.rhtm) _(whitebeam.org)_
