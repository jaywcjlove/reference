Quick Reference 备忘清单
===

这是您可以在 Quick Reference 备忘单上使用的样式参考，快速参与[贡献](https://github.com/jaywcjlove/reference/blob/main/CONTRIBUTING.md)！

入门
---

### 本地编译预览

将仓库克隆到本地调试页面。请参阅[贡献指南](https://github.com/jaywcjlove/reference/blob/main/CONTRIBUTING.md)了解如何开始

#### 克隆仓库

```shell
git clone git@github.com:jaywcjlove/reference.git
```
<!--rehype:className=wrap-text -->

#### 安装依赖编译生成 HTML 页面

```shell
npm i         # 安装依赖
npm run build # 编译输出 HTML
```

HTML 存放在仓库根目录下的 `dist` 目录中，将 `dist/index.html` 静态页面在浏览器中打开预览。

```shell
npm run start # 监听 md 文件编译输出 HTML
```

### 目录结构

```bash
.
├── CONTRIBUTING.md   # 贡献说明
├── Dockerfile
├── LICENSE
├── README.md  # 🌐 Home(首页)内容
├── dist       # 📦 编译后的静态资源目录
├── docs       # 👈 Markdown 文档(速查表)
│   ├── bash.md
│   ├── ....
│   └── yaml.md
├── .refsrc.json # refs 配置
├── package.json
└── assets  # LOGO 图标文件资源
```

### 添加一个备忘清单

一个简单的备忘清单包含 `页面大标题<h1>`，放在大标题下面的 `介绍` 文本，`<h2>` 分类标题，`<h3>` 内容为 `卡片`

```markdown
备忘清单 (页面大标题)
===

这是您可以在当前清单上使用的样式参考！备忘清单介绍

入门 (分类标题)
---

### 介绍 (卡片)

卡片内容
```

上面 markdown 内容存放到 `docs` 目录中，命名为 `xxx.md`

### 首页导航
<!--rehype:wrap-class=col-span-2-->

首页(`README.md`)存放在仓库的根目录，通过这个 `README.md` 自动生成首页导航，下面是导航实例：

```markdown
## Linux 命令

[Cron](./docs/cron.md)<!--rehype:style=background: rgb(239 68 68/var(\-\-bg\-opacity));-->
<!--rehype:class=home-card-->
```

首页导航图标存放在 `scripts/assets` 目录中，如果你的备忘清单定义为 `docs/cron.md`，那么你的图标就定义为 `cron.svg` 存放到 `scripts/assets` 目录中，重新编译首页当行菜单就拥有了图标。

- 图标存放在 [`scripts/assets`](https://github.com/jaywcjlove/reference/blob/main/scripts/assets) 目录中
- 图片名称与清单名称保持一致 `cron.md` -> `cron.svg` (注意大小写)
- SVG 图标尺寸 `<svg height="1em" width="1em"`
- SVG 图标颜色使用继承颜色值 `<svg fill="currentColor"`
- 使用 `<!--rehype:class=home-card-->` 标识卡片样式

### 首页提示配置

```markdown
[Django](./docs/django.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=contributing-->
```
<!--rehype:className=wrap-text-->

添加 `contributing` 类名，会在卡片下方默认添加 `👆待完善需要您的参与`

```markdown
class=tag&data-info=👆看看还缺点儿什么？
```

上面示例将默认提示更改为： `👆看看还缺点儿什么？`

```markdown
[Django](./docs/django.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=tag&data-lang=Python-->
```
<!--rehype:className=wrap-text-->

添加 `class=tag&data-lang=Python` 类名和参数，会在卡片右上角标记 _`Python`_

### 命令帮助

```bash
Usage: refs-cli [output-dir] [--help|h]

  显示帮助信息

Options:

  --version, -v 显示版本号
  --help, -h    显示帮助信息
  --watch, -w   观看并编译 Markdown 文件
  --output, -o  输出目录。默认（分布）
  --force, -f   强制文件重新生成

Example:

  $ npx refs-cli
  $ refs-cli --watch
  $ refs-cli --output website
  $ refs-cli

refs-cli@v0.0.1
```

### 配置 Config

将 `.refsrc.json` 存放在项目的根目录下

```json
{
  "title": "文档网站名称",
  "description": "{{description}} 网站说明",
  "keywords": "关键字,refs-cli,refs,cli",
  "data-info": "👆 需要你的参与",
  "search": {
    "label": "搜索",
    "placeholder": "搜索备忘清单",
    "cancel": "取消"
  },
  "editor": {
    "label": "编辑"
  },
  "github": {
    "url": "https://<github url>"
  },
  "home": {
    "label": "首页",
    "url": "https://<你的网站>"
  },
  "footer": "<br />备案号：支持HTML字符串",
  "license": "支持 HTML 字符串"
}
```

支持 [JSON](https://www.json.org), [JSONC](https://github.com/microsoft/node-jsonc-parser), [JSON5](https://json5.org/), [YAML](https://yaml.org/), [TOML](https://toml.io), [INI](https://en.wikipedia.org/wiki/INI_file), [CJS](http://www.commonjs.org), [Typescript](https://www.typescriptlang.org/), 和 ESM 配置加载。

### `TOML` 配置示例

将 `.refsrc.toml` 存放在项目的根目录下

```toml
title = "Refs CLI 文档网站名称"
description = "{{description}}. 网站说明"
keywords = "关键字,reference,refs-cli,cli"
data-info = "👆 需要你的参与"

[search]
  label = "搜索"
  placeholder = "搜索备忘清单"
  cancel = "取消"

[editor]
  label = "编辑"

[github]
  url = "<github url>"

[home]
  label = "首页"
  url = "https://<你的网站>"

footer = "<br />备案号：支持HTML字符串"
license = "支持 HTML 字符串"
```

### 支持更多配置加载

```bash
.refsrc                .refsrc.json
.refsrc.json5          .refsrc.jsonc
.refsrc.yaml           .refsrc.yml
.refsrc.toml           .refsrc.ini
.refsrc.js             .refsrc.ts
.refsrc.cjs            .refsrc.mjs
.config/refsrc         .config/refsrc.json
.config/refsrc.json5   .config/refsrc.jsonc
.config/refsrc.yaml    .config/refsrc.yml
.config/refsrc.toml    .config/refsrc.ini
.config/refsrc.js      .config/refsrc.ts
.config/refsrc.cjs     .config/refsrc.mjs
refs.config.js         refs.config.ts
refs.config.cjs        refs.config.mjs
```

### 环境变量

导航菜单

```ini
REF_URL=http://ref.ecdata.cn/
REF_LABEL=网站首页
```

页脚添加 (支持 HTML 字符串)

```ini
REF_FOOTER=备案号：沪ICP备20220000000号-1
```

修改版权信息 (支持 HTML 字符串)

```ini
LICENSE=Copyright (c) <b>2022</b> 小弟调调™
```

在项目根目录中创建 <pur>**.env**</pur> 文件

Markdown 语法注释
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

在备忘清单采用 `HTML 注释语法`，标识网站布局和一些样式，目的是为了在 `GitHub` 中也是正常毫无瑕疵的预览 [`Markdown`](./markdown.md)。

```markdown
### 卡片标题
<!--rehype:wrap-class=col-span-2-->

卡片 Markdown 内容展示，下面注释语法为文字内容改变样式
<!--rehype:style=color: red;-->
```
<!--rehype:className=wrap-text-->

上面基础示例，使用 `col-span-2` 类标识，卡片占 `2` 列位置，参考现有备忘清单的源代码是一个好习惯！

### 注释语法介绍
<!--rehype:wrap-class=row-span-4&style=color:black;background-color: #d7a100;-->

- 在某个 [`Markdown`](./markdown.md) 语法下方或者后面，添加 HTML注释
- 以 `<!--rehype:` 开始，`-->` 结束，包裹参数内容
- 内容采用 URL 参数的字符拼接方式

#### 语法

`<!--rehype:` _+_ `key=value` _+_ **`&`** _+_ `key=value` _+_ `-->`  
`标识开始` + `参数` + `分隔符(&)` + `参数`  + `标识结束`

#### 示例

```markdown
## H2 部分
<!--rehype:body-class=cols-2-->

### H3 部分
<!--rehype:wrap-class=row-span-2-->
```

#### 示例，三行占位，标题红色

```markdown
### 标题
<!--rehype:wrap-class=row-span-3&style=color:red;-->
```
<!--rehype:className=wrap-text-->

#### 参数说明

类 | 说明
---- | ----
`body-style` | 包裹所有卡片`外壳`的样式
`body-class` | 用于卡片栏布局，添加`类`名
`wrap-style` | 卡片栏添加 [CSS](./css.md) 样式
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
<!--rehype:className=wrap-text-->

上面添加注释样式，文字 _加粗变大红色_<!--rehype:style=color: red;font-size: 18px--> 变`红`并且`大`了

### 强制换行

```markdown
\```js
function () {}
\```
<!--rehype:className=wrap-text-->
```

如果代码块内容太长，使用强制换行类(`wrap-text`)解决

### 展示表格表头

```markdown
| Key | value | 
| ---- | ---- |
| `键` | 值    |
<!--rehype:className=show-header-->
```

注释配置添加 `show-header` 类，放置在表格下面，表头将被展示出来。

### 代码行高亮
<!--rehype:wrap-class=row-span-2-->

```jsx {1,4-5}
import React from "react";
import "./Student.css";

export const Student = (
  <div className="Student"></div>
);
```

上面 `{1,4-5}` 行代码高亮，下面是 [`Markdown`](./markdown.md) 代码示例

```markdown
  ```jsx {1,4-5}
```

代码行高亮可以和代码行号一起使用。

### Tooltips

[鼠标移动到上面有提示](https://github.com/jaywcjlove/reference) _Tooltips 的提示内容_<!--rehype:tooltips-->

添加注释配置 `<!--rehype:tooltips-->` 添加一个 Tooltips 提示。

### H3 部分(卡片)背景颜色
<!--rehype:wrap-style=background: #8dffd42e;-->

```markdown
### H3 部分(卡片)背景颜色
<!--rehype:wrap-style=background: #8dffd42e;-->
```
<!--rehype:className=wrap-text -->

### 红色标题
<!--rehype:style=background:#e91e63;-->

```markdown
### 红色标题
<!--rehype:style=background:#e91e63;-->
```

在 H3 标题下面添加样式标注 `<!--rehype:style=background:#e91e63;-->`

### 快捷键样式

| Key | value |
| ---- | ---- |
| `快捷键` | 说明    |
| `快捷键` | 说明    |
<!--rehype:className=shortcuts-->

列表添加 `<!--rehype:className=shortcuts-->` 样式类，展示快捷键样式。

### 代码行号

```jsx showLineNumbers
export const Student = <div>学生</div>;
const school = <div>学校</div>;
```

下面是 `Markdown` 代码示例

```markdown
  ```jsx showLineNumbers
```

标记语言后面添加 `showLineNumbers` 标识

### 内置类样式

:- | -
:- | -
`shortcuts` | 快捷键样式
`wrap-text` | 超出换行
`show-header` | 展示表头
`style-none` | 隐藏 `<ul>` 列表样式
`style-list` | `<table>` 单元格行展示
<!--rehype:className=shortcuts-->

### 颜色标签

:- | -
:- | -
`<yel>` | <yel>黄色</yel>
`<red>` | <red>红色</red>
`<pur>` | <pur>紫色</pur>
`<code>` 或 <code>\`\`</code> | <code>绿</code>`色`
`<del>` 或 `~~删除~~` | <del>~~红色~~</del>
<!--rehype:className=shortcuts-->

### HTML 代码预览

```
  ```html preview
  <b>这里是你的 HTML 代码</b>
  \```
```

---

```html preview
<b>这里是你的 HTML 代码</b>
```

上面的 [`markdown`](./markdown.md) 代码在 `meta` 位置添加 `preview` 标识，[HTML](./html.md) 代码将被执行预览

### 隐藏卡片标题
<!--rehype:style=display:none;&wrap-style=padding-top: 0;-->

```
隐藏卡片标题，在 H3 标题下面添加注释样式
```

```markdown {2}
### 隐藏卡片标题
<!--rehype:style=display:none;&wrap-style=padding-top: 0;-->
```
<!--rehype:className=wrap-text -->

### 注释类配置
<!--rehype:wrap-class=col-span-2-->

类 | 说明
---- | ----
`<!--rehype:className=wrap-text-->` | 强制`换行`
`<!--rehype:className=show-header-->` | 展示表格`表头`
`<!--rehype:className=shortcuts-->` | `快捷键`样式
`<!--rehype:className=auto-wrap-->` | 隐藏表头强制小尺寸`自动换行`
`<!--rehype:className=style-list-arrow-->` | 列表`箭头`样式展示表格
`<!--rehype:className=style-list-->` | `列表`样式展示表格
`<!--rehype:className=left-align-->` | 表格末尾列`左对齐`
`<!--rehype:className=style-none-->` | \<li> 没有标记样式
`<!--rehype:className=style-timeline-->` | `时间轴`样式
`<!--rehype:className=style-arrow-->` | `箭头`标记
<!--rehype:className=left-align-->

### KaTeX 数学渲染

```KaTeX
c = \pm\sqrt{a^2 + b^2}
L = \frac{1}{2} \rho v^2 S C_L
```

上面示例 [`Markdown`](./markdown.md) 代码源码

```markdown {1}
  ```KaTeX
  c = \pm\sqrt{a^2 + b^2}
  L = \frac{1}{2} \rho v^2 S C_L
```

还可以单行展示 `KaTeX:c = \pm\sqrt{a^2 + b^2}`，需要标记 <code>\`KaTeX:数学公式\`</code> 将被显示成数学公式，这是基于 [KaTeX](https://katex.org/) 生成

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

```markdown {3}
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
`cols-{1~6}` | `1~6` 栏卡片布局
<!--rehype:className=show-header -->

### 占位布局 style 写法

```markdown {2}
### H3 部分
<!--rehype:wrap-style=grid-row: span 2/span 2;-->
```
<!--rehype:className=wrap-text -->

放在 `### H3 部分` 下面的注释配置，与 `<!--rehype:wrap-class=row-span-2-->` 相同，设置 2 行占位布局。

### 卡片栏布局 style 写法

```markdown {2}
## H2 部分
<!--rehype:body-style=grid-template-columns: repeat(2,minmax(0,1fr));-->
```
<!--rehype:className=wrap-text -->

放在 `## H2 部分` 下面的注释配置，与 `<!--rehype:body-class=cols-2-->` 相同，设置 2 栏布局。

### H3 部分

```markdown {2,4}
### 卡片 1 (H3 部分)
<!--rehype:wrap-class=row-span-2-->
### 卡片 2 (H3 部分)
<!--rehype:wrap-class=col-span-3-->
### 卡片 3 (H3 部分)
```

---

:-- | --
:-- | --
合并 **列** 布局 |
`col-span-2` | `2` 列占位
`col-span-3` | `3` 列占位
`col-span-4` | `4` 列占位
`col-span-{2~10}` | `{2~10}` 列占位
合并 **行** 布局 |
`row-span-2` | `2` 行占位
`row-span-3` | `3` 行占位
`row-span-4` | `4` 行占位
`row-span-{2~10}` | `{2~10}` 行占位

### 卡片合并行布局 1

```shell
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆   H3 Title 1  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 2 ┆ ┆ 3 ┆ ┆ 4 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 [Markdown](./markdown.md) 源码：

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

上面布局效果 [Markdown](./markdown.md) 源码：

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

上面布局效果 [Markdown](./markdown.md) 源码：

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

上面布局效果 [Markdown](./markdown.md) 源码：

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

上面布局效果 [Markdown](./markdown.md) 源码：

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

上面布局效果 [Markdown](./markdown.md) 源码：

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

```shell
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆     H3 Title 1      ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮ ╭┈┈┈╮
┆ 2 ┆ ┆ 3 ┆ ┆ 4 ┆ ┆ 5 ┆
╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯ ╰┈┈┈╯
```

上面布局效果 [Markdown](./markdown.md) 源码：

```markdown
H2 部分
----
<!--rehype:body-class=cols-4-->
### Title 1
<!--rehype:wrap-class=col-span-4-->
### Title 2
### Title 3
### Title 4
### Title 5
```

在 `H2 部分` 标题添加 `cols-4`，和 `Title 1` 添加 `col-span-4` 合并栏

### 卡片列合并布局 9
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

上面布局效果 [Markdown](./markdown.md) 源码：

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

:- | :-
:- | :-
`%m/%d/%Y` | 06/05/2013
`%A, %B %e, %Y` | Sunday, June 5, 2013
`%b %e %a` | Jun 5 Sun

#### Time

:- | :-
:- | :-
`%H:%M` | 23:05
`%I:%M %p` | 11:05 PM

标题为 `H4` 的基本表格。

### 快捷键

:- | :-
:- | :-
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

### 列表样式展示表格

:- | :-
:- | :-
`visualEffectState.inactive` | 后台应一直显示为非激活状态。
`titleBarStyle` _string_ _(win/mac)_ | 窗口标题栏样式。默认值 _(default)_
`titleBarStyle.default` | 分别返回 _mac_ 或者 _win_ 的标准标题栏
<!--rehype:className=style-list-->

`<!--rehype:className=style-list-->`

### 列表箭头样式展示表格

:- | :-
:- | :-
`visualEffectState.inactive` | 后台应一直显示为非激活状态。
`titleBarStyle` _string_ _(win/mac)_ | 窗口标题栏样式。默认值 _(default)_
`titleBarStyle.default` | 分别返回 _mac_ 或者 _win_ 的标准标题栏
<!--rehype:className=style-list-arrow-->

`<!--rehype:className=style-list-arrow-->`

### 隐藏表头强制小尺寸自动换行

:- | :-
:- | :-
`visualEffectState.inactive` | 后台应一直显示为非激活状态。
`titleBarStyle` _string_ _(win/mac)_ | 窗口标题栏样式。默认值 _(default)_
`titleBarStyle.default` | 分别返回 _mac_ 或者 _win_ 的标准标题栏
<!--rehype:className=auto-wrap-->

`<!--rehype:className=auto-wrap-->`

### 表格末尾列左对齐
<!--rehype:wrap-class=col-span-2-->

| Prefix | What |
| ---- | ---- |
`//`  | Anywhere
`./`  | Relative
<!--rehype:className=show-header left-align-->

默认表格末尾列`右对齐`，添加 `<!--rehype:className=left-align-->` 类让其`左对齐`

### 强制 code 不换行

| Command | Description |
| ---- | ---- |
| `adb remount`                     | Remounts file system with read/write access |
| `adb reboot bootloader`           | Reboots the device into fastboot            |
<!--rehype:className=show-header code-nowrap-->

添加 `<!--rehype:className=code-nowrap-->` 注释

列表
---

### 一栏(默认)

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

### 列表步骤
<!--rehype:wrap-class=row-span-2-->

- **重命名为 new_name**

  ```bash
  $ git branch -m <new_name>
  ```

- 推送和**重置**

  ```bash
  $ git push origin -u <new_name>
  ```

- 删除远程分支

  ```bash
  $ git push origin --delete <old>
  ```
<!--rehype:className=style-timeline-->

`<!--rehype:className=style-timeline-->`

### 没有标记

- Item 1
- Item 2
- Item 3
- Item 4
- Item 5
- Item 6
- Item 7
- Item 8
- Item 9
<!--rehype:className=cols-3 style-none-->

`<!--rehype:className=cols-3 style-none-->`

### 圆圈标记

- Item 1
- Item 2
- Item 3
<!--rehype:className=style-round-->

`<!--rehype:className=style-round-->`

### 箭头标记

- Item 1
- Item 2
- Item 3
<!--rehype:className=style-arrow-->

`<!--rehype:className=style-arrow-->`

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
...合并两行
```

`<!--rehype:wrap-class=row-span-2-->`

### col-span-2
<!--rehype:wrap-class=col-span-2-->

```
...合并两列
```

`<!--rehype:wrap-class=col-span-2-->`

### 红色标题
<!--rehype:style=background:#e91e63;-->

```
...红色标题配置
```

`<!--rehype:style=background:#e91e63;-->`

### 黄色标题
<!--rehype:style=background:#d7a100;-->

```
...黄色标题配置
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
