Quick Reference 备忘清单
===

这是您可以在 Quick Reference 备忘单上使用的样式参考，快速参与贡献！

入门
---

### 本地编译预览

简单的将仓库克隆下来本地调试页面展示。

#### 克隆仓库

```shell
git clone git@github.com:jaywcjlove/reference.git
```
<!--rehype:className=wrap-text -->

#### 安装依赖编译生成 HTML 页面

```shell
npm i         # 安装依赖
npm run build # 编译输出 HTML
npm run start # 监听 md 文件编译输出 HTML
```

HTML 存放在仓库根目录下的 `dist` 目录中，将 `dist/index.html` 静态页面在浏览器中打开预览。

### 介绍

在备忘清单采用 `HTML 注释语法`，标识网站布局和一些样式，目的是为了在 `GitHub` 中也是正常毫无瑕疵的预览 `Markdown`。

```markdown
### 卡片标题
<!--rehype:wrap-class=col-span-2-->

卡片 Markdown 内容展示，下面注释语法为文字内容改变样式
<!--rehype:style=color: red;-->
```
<!--rehype:className=wrap-text -->

使用 `col-span-2` 类标识，卡片占 `2` 列位置

### 注释语法介绍
<!--rehype:wrap-class=row-span-3&style=color:black;background-color: #d7a100;-->

- 在某个 Markdown 语法下方或者后面，添加 HTML注释
- 以 `<!--rehype:` 开始，`-->` 结束，包裹参数内容
- 内容采用 URL 参数的字符拼接方式

#### 语法

`<!--rehype:` + `key=value` + `&` + `key=value` + `-->`  
`标识开始`     + `参数`     + `分隔符` + `参数`  + `标识结束`

#### 示例

```markdown
### H2 部分
<!--rehype:body-class=cols-2-->

### H3 部分
<!--rehype:wrap-class=row-span-2-->
```

#### 示例，三行占位，标题红色

```markdown
### 标题
<!--rehype:wrap-class=row-span-3&style=color:red;-->
```
<!--rehype:className=wrap-text -->


#### 参数说明

类 | 说明
---- | ----
`body-style` | 包裹所有卡片`外壳`的样式
`body-class` | 用于卡片栏布局，添加`类`名
`wrap-style` | 卡片栏添加 CSS 样式
`wrap-class` | 用于卡片占位，添加`类`名

### 文字颜色

```markdown
_我是红色_<!--rehype:style=color: red;-->
**加粗红色**<!--rehype:style=color: red;-->
```

上面添加注释样式，文字 _我是红色_<!--rehype:style=color: red;--> 文字变`红`了

### 文字大小

```markdown
**加粗变大红色**
<!--rehype:style=color: red;font-size: 18px-->
```
<!--rehype:className=wrap-text -->

上面添加注释样式，文字 _加粗变大红色_<!--rehype:style=color: red;font-size: 18px--> 变`红`并且`大`了

### 强制换行

```markdown
\```js
function () {}
\```
<!--rehype:className=wrap-text -->
```

如果代码块内容太长，使用强制换行类解决


### 展示表格表头

```markdown
| Key | value | 
| ---- | ---- |
| `键` | 值    |
<!--rehype:className=show-header-->
```

注释配置添加 `show-header` 类，放置在表格下面，表头将被展示出来。

### Tooltips

[鼠标移动到上面有提示](https://github.com/jaywcjlove/reference) _Tooltips 的提示内容_<!--rehype:tooltips-->

添加注释配置 `<!--rehype:tooltips-->` 添加一个 tooltips 提示。

### H3 部分(卡片)背景颜色
<!--rehype:wrap-style=background: #00c69357;-->

```markdown
### H3 部分(卡片)背景颜色
<!--rehype:wrap-style=background: #00c69357;-->
```
<!--rehype:className=wrap-text -->

### 红色标题
<!--rehype:style=background:#e91e63;-->

```markdown
### 红色标题
<!--rehype:style=background:#e91e63;-->
```

布局
---

### H2 部分
<!--rehype:wrap-class=row-span-2-->

```markdown
H2 部分
---

### 卡片 1 (H3 部分)
### 卡片 2 (H3 部分)
### 卡片 3 (H3 部分)
```

上面实例 `H2 部分` 标题下面有三个`卡片`，默认 `3` 栏布局。

```markdown
H2 部分
---
<!--rehype:body-class=cols-2-->
### 卡片 1 (H3 部分)
### 卡片 2 (H3 部分)
### 卡片 3 (H3 部分)
```

使用注释配置为 H2 部分 添加 `col-span-2` 类，将 ~~`3`~~ 栏布局变成 `2` 栏布局。

类 | 说明
---- | ----
`cols-1` | `1` 栏卡片布局
`cols-2` | `2` 栏卡片布局
`cols-3` | `3` 栏卡片布局
`cols-4` | `4` 栏卡片布局
`cols-5` | `5` 栏卡片布局
<!--rehype:className=show-header -->

### 占位布局 style 写法

```markdown
### H3 部分
<!--rehype:wrap-style=grid-row: span 2/span 2;-->
```
<!--rehype:className=wrap-text -->

放在 `### H3 部分` 下面的注释配置，与 `<!--rehype:wrap-class=row-span-2-->` 相同，设置 2 行占位布局。

### 卡片栏布局 style 写法

```markdown
## H2 部分
<!--rehype:body-style=grid-template-columns: repeat(2,minmax(0,1fr));-->
```
<!--rehype:className=wrap-text -->

放在 `## H2 部分` 下面的注释配置，与 `<!--rehype:body-class=cols-2-->` 相同，设置 2 栏布局。


### H3 部分

```markdown
### 卡片 1 (H3 部分)
<!--rehype:wrap-class=row-span-2-->
### 卡片 2 (H3 部分)
<!--rehype:wrap-class=col-span-3-->
### 卡片 3 (H3 部分)
```

类 | 说明
---- | ----
`col-span-2` | `2` 列占位
`col-span-3` | `3` 列占位
`col-span-4` | `4` 列占位
`row-span-2` | `2` 行占位
`row-span-3` | `3` 行占位
`row-span-4` | `4` 行占位
<!--rehype:className=show-header -->

### 卡片合并行布局 1

```shell
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆   H3 Title 1  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 2 ┆ ┆ 3 ┆ ┆ 4 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### H3 Title 1
<!--rehype:wrap-class=col-span-3-->
### Title 2

### Title 3

### Title 4
```

第一标题添加 `col-span-3` 占位类

### 卡片列合并布局 2

```shell
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 1 ┆ ┆ 2 ┆ ┆ 3 ┆
┆   ┆ ╰┈┈┈╯ ╰┈┈┈╯
┆   ┆ ╭┈┈┈╮ ╭┈┈┈╮
┆   ┆ ┆ 4 ┆ ┆ 5 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
<!--rehype:wrap-class=row-span-2-->
### Title 2
### Title 3
### Title 4
### Title 5
```

在 `Title 1` 标题添加 `row-span-2` 占位类

### 卡片列合并布局 3

```shell
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 1 ┆ ┆ 2 ┆ ┆ 3 ┆
╰┈┈┈╯ ┆   ┆ ╰┈┈┈╯
╭┈┈┈╮ ┆   ┆ ╭┈┈┈╮
┆ 4 ┆ ┆   ┆ ┆ 5 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
### Title 2
<!--rehype:wrap-class=row-span-2-->
### Title 3
### Title 4
### Title 5
```

在 `Title 2` 标题添加 `row-span-2` 占位类

### 卡片列合并布局 4

```shell
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 1 ┆ ┆ 2 ┆ ┆ 3 ┆
╰┈┈┈╯ ╰┈┈┈╯ ┆   ┆
╭┈┈┈╮ ╭┈┈┈╮ ┆   ┆
┆ 4 ┆ ┆ 5 ┆ ┆   ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
### Title 2
### Title 3
<!--rehype:wrap-class=row-span-2-->
### Title 4
### Title 5
```

在 `Title 3` 标题添加 `row-span-2` 占位类

### 卡片列合并布局 5

```shell
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 1 ┆ ┆ 2 ┆ ┆ 3 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯ 
╭┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 4 ┆ ┆ 5       ┆
╰┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
### Title 2
### Title 3
### Title 4
### Title 5
<!--rehype:wrap-class=col-span-2-->
```

在 `Title 5` 标题添加 `col-span-2` 占位类

### 卡片列合并布局 6

```shell
╭┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮
┆ 1 ┆ ┆ 2       ┆
╰┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 3 ┆ ┆ 4 ┆ ┆ 5 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
### Title 2
<!--rehype:wrap-class=col-span-2-->
### Title 3
### Title 4
### Title 5
```

在 `Title 2` 标题添加 `col-span-2` 占位类

### 卡片列合并布局 7

```shell
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 1 ┆ ┆ 2 ┆ ┆ 3 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈╮
┆ 4       ┆ ┆ 5 ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
### Title 2
### Title 3
### Title 4
<!--rehype:wrap-class=col-span-2-->
### Title 5
```

在 `Title 4` 标题添加 `col-span-2` 占位类

### 卡片列合并布局 8
<!--rehype:wrap-class=col-span-2-->

```shell
╭┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈╮
┆ 1       ┆ ┆ 2 ┆
┆         ┆ ╰┈┈┈╯
┆         ┆ ╭┈┈┈╮
┆         ┆ ┆ 3 ┆
╰┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈╯
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 4 ┆ ┆ 5 ┆ ┆ 6 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 Markdown 源码：

```markdown
### Title 1
<!--rehype:wrap-class=col-span-2 row-span-2-->
### Title 2
### Title 3
### Title 4
### Title 5
### Title 6
```

在 `Title 1` 标题添加 `col-span-2` 和 `row-span-2` 占位类，使用 `空格` 间隔。


表格
---

### 基本表格

#### Date

|      |      |
| ---- | ---- |
`%m/%d/%Y` | 06/05/2013
`%A, %B %e, %Y` | Sunday, June 5, 2013
`%b %e %a` | Jun 5 Sun

#### Time

|      |      |
| ---- | ---- |
`%H:%M` | 23:05
`%I:%M %p` | 11:05 PM

标题为 `H4` 的基本表格。

### 快捷键

|      |      |
| ---- | ---- |
`V` | Vector
`P` | Pencil
`T` | Text
`L` | Line
`R` | Rectangle
`O` | Oval
`U` | Rounded

### 展示标题

| Prefix | Example | What |
| ---- | ---- | ---- |
`//` | `//hr[@class='edge']` | Anywhere
`./` | `./a` | Relative
`/` | `/html/body/div` | Root
<!--rehype:className=show-header-->

`<!--rehype:className=show-header-->`

列表
---

### 一栏（默认）

- Item 1
- Item 2
- Item 3

### 四列

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
- Item 7
- Item 8
<!--rehype:className=cols-4-->

`<!--rehype:className=cols-4-->`

### 没有标记

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
<!--rehype:className=cols-3 style-none-->

`<!--rehype:className=cols-3 style-none-->`

H2 部分 - 5列效果展示
---
<!--rehype:body-class=cols-5-->

### One
<!--rehype:wrap-style=background:#dba300;-->

```
...
```

### Two

```
...
```

### Three

```
...
```

### Four

```
...
```

### Five

```
...
```

H3 部分 - 占位效果展示
---

### row-span-2
<!--rehype:wrap-class=row-span-2-->

```
...
```

`<!--rehype:wrap-class=row-span-2-->`

### col-span-2
<!--rehype:wrap-class=col-span-2-->

```
...
```

`<!--rehype:wrap-class=col-span-2-->`

### 红色标题
<!--rehype:style=background:#e91e63;-->

```
...
```

`<!--rehype:style=background:#e91e63;-->`

### 黄色标题
<!--rehype:style=background:#d7a100;-->

```
...
```

`<!--rehype:style=background:#d7a100;-->`

### col-span-3
<!--rehype:wrap-class=col-span-3-->

```
...
```

### 卡片子项

每个部分可以有以下子项：

#### H4 子标题

- pre
- table
- ul

#### H4 子标题

- pre
- table
- ul

### H3 部分

每个盒子(卡片)都是一个 `H3` 部分。 盒子将包含 `H3` 自身内的所有东西。

这是一个包含段落的基本部分。

### H3 部分背景颜色
<!--rehype:wrap-style=background: #1b5064;-->

```markdown
注释配置：
`<!--rehype:wrap-style=background: #1b5064;-->`
```
<!--rehype:className=wrap-text -->