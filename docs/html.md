HTML 备忘清单
===

此 HTML 快速参考备忘单以可读布局列出了常见的 `HTML` 和 `HTML5` 标记。

入门
------------

### hello.html
<!--rehype:wrap-class=col-span-2 row-span-2-->

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Boilerplate</title>
</head>
<body>
    <h1>Hello world, hello 备忘清单!</h1>
</body>
</html>
```

或者在 [jsfiddle](https://jsfiddle.net/Randy8080/1e4wz20b/)

### 注释 Comment

```html
<!-- 这是代码注释 -->

<!--
  或者你可以注释掉一个
  大量的行。
-->
```

### 段落 Paragraph

```html
<p>我来自快速参考</p>
<p>分享快速参考备忘单。</p>
```

请参阅：[段落元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p)

### HTML 链接

```html
<a href="https://github.com/jaywcjlove/reference">
  Github
</a>
<a href="mailto:jack@abc.com">邮箱</a>
<a href="tel:+123456789">电话</a>
<a href="sms:+123456789&body=ha%20ha">
  短信
</a>
```

---

:-|:-
:-|:-
`href`   | 超链接指向的 URL |
`rel`    | 链接 URL 的关系 |
`target` | 链接目标位置：`_self`/`_blank`/`_top`/`_parent` |

请参阅：[\<a> 属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attributes)

### Image 标签

```html
<img loading="lazy"
  src="https://xxx.png"
  alt="在此处描述图像"
  width="400" height="400">
```
<!--rehype:className=wrap-text -->

---

|   |           |                                          |
|---|-----------|------------------------------------------|
|   | `src` _(URL/路径)_ | 必填，图片位置 |
|   | `alt`     | 描述图像 |
|   | `width`   | 图像宽度 |
|   | `height`  | 图像高度 |
|   | `loading` | 浏览器应该如何加载 |

请参阅：[图像嵌入元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img)

### 文本格式标签

```html
<b>粗体文字</b>
<strong>这段文字很重要</strong>
<i>斜体文本</i>
<em>这段文字被强调</em>
<u>下划线文本</u>
<pre>预格式化文本</pre>
<code>源代码</code>
<del>删除的文字</del>
<mark>突出显示的文本 (HTML5)</mark>
<ins>插入的文本</ins>
<sup>使文本上标</sup>
<sub>使文本下标</sub>
<small>使文本变小</small>
<pre>预格式化文本</pre>
<kbd>Ctrl</kbd>
<blockquote>文本块引用</blockquote>
```

### 标题

```html
<h1> 这是标题 1 </h1>
<h2> 这是标题 2 </h2>
<h3> 这是标题 3 </h3>
<h4> 这是标题 4 </h4>
<h5> 这是标题 5 </h5>
<h6> 这是标题 6 </h6>
```

您的页面上应该只有一个 `h1`

### Section Divisions

:-|:-
:-|:-
`<div></div>`   | 页面内容的划分或部分
`<span></span>` | 其他内容中的文本部分
`<p></p>`       | 文本段落
`<br>`          | 换行
`<hr>`          | 水平分割线

这些标签用于将页面划分为多个部分

### 内部框架
<!--rehype:wrap-class=row-span-2-->

```html
<iframe
  id="inlineFrameExample"
  title="Inline Frame Example"
  width="100%"
  height="200"
  frameborder="0"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
```
<!--rehype:className=wrap-text -->

#### ↓ 预览

<iframe id="inlineFrameExample"
  title="Inline Frame Example"
  width="100%"
  height="200"
  frameborder="0"
  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>

请参阅：[内联框架元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/iframe)

### HTML 中的 JavaScript

```html
<script type="text/javascript">
  let text = "Hello 快速参考";
  alert(text);
</script>
```

#### 外部 JavaScript

```html
<body>
  ...
  <script src="app.js"></script>
</body>
```

### HTML 中的 CSS

```html
<style type="text/css">
    h1 {
        color: purple;
    }
</style>
```

#### 外部样式表

```html
<head>
  ...
  <link rel="stylesheet" href="style.css"/>
</head>
```

HTML5 标签
-------------

### 页面

```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>快速参考</h1>
  </main>
  <footer>
    <p>©2023 快速参考</p>
  </footer>
</body>
```

### 标题导航

```html
<header>
  <nav>
    <ul>
      <li><a href="#">编辑页面</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  </nav>
</header>
```

### HTML5 Tags
<!--rehype:wrap-class=row-span-4-->

:-|:-
:-|:-
[article](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article)       | 独立的内容
[aside](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside)           | 次要内容
[audio](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)           | 嵌入声音或音频流
[bdi](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/bdi)               | 双向隔离元件
[canvas](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)         | 通过JavaScript绘制图形
[data](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/data)             | 机器可读内容
[datalist](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/datalist)     | 一组预定义选项
[details](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details)       | 其他信息
[dialog](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dialog)         | 对话框或子窗口
[embed](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/embed)           | 嵌入外部应用程序
[figcaption](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption) | 图形的标题或图例
[figure](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure)         | 插图
[footer](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer)         | 页脚或最不重要的
[header](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header)         | 刊头或重要信息
[main](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main)             | 文件的主要内容
[mark](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark)             | 突出显示的文本
[meter](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meter)           | 已知范围内的标量值
[nav](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav)               | 导航链接的一部分
[output](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/output)         | 计算的结果
[picture](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/picture)       | 用于多个图像源的容器
[progress](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/progress)     | 任务的完成进度
[rp](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rp)                 | 提供回退括号
[rt](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/rt)                 | 定义字符的发音
[ruby](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ruby)             | 表示ruby注释
[section](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section)       | 一系列相关内容中的组
[source](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/source)         | 媒体元素的资源
[summary](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/summary)       | 元素的摘要
[template](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/template)     | 定义HTML片段
[time](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time)             | 时间或日期
[track](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/track)           | 媒体元素的字幕信息
[video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)           | 嵌入视频
[wbr](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/wbr)               | 换行机会

### HTML5 Video

```html
<video controls="" width="100%">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    很抱歉，您的浏览器不支持嵌入式视频。
</video>
```
<!--rehype:className=wrap-text -->

#### ↓ 预览

<video controls="" width="100%">
    <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
    很抱歉，您的浏览器不支持嵌入式视频。
</video>

### HTML5 Audio

```html
<audio
  controls
  src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
    您的浏览器不支持音频元素。
</audio>
```
<!--rehype:className=wrap-text -->

#### ↓ 预览

<audio controls
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3">
    您的浏览器不支持音频元素。
</audio>

### HTML5 Ruby

```html
<ruby>
  汉 <rp>(</rp><rt>hàn</rt><rp>)</rp>
  字 <rp>(</rp><rt>zì</rt><rp>)</rp>
  拼 <rp>(</rp><rt>pīn</rt><rp>)</rp>
  音 <rp>(</rp><rt>yīn</rt><rp>)</rp>
</ruby>
```
<!--rehype:className=wrap-text -->

#### ↓ 预览
<!--rehype:wrap-style=text-align: center;-->

<ruby style="font-size: 4rem;">
  汉 <rp>(</rp><rt>hàn</rt><rp>)</rp>
  字 <rp>(</rp><rt>zì</rt><rp>)</rp>
  拼 <rp>(</rp><rt>pīn</rt><rp>)</rp>
  音 <rp>(</rp><rt>yīn</rt><rp>)</rp>
</ruby>

### HTML5 kdi

```html
<ul>
 <li>User <bdi>hrefs</bdi>: 60 points</li>
 <li>User <bdi>jdoe</bdi>: 80 points</li>
 <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>
```

#### ↓ 预览

<ul>
 <li>User <bdi>hrefs</bdi>: 60 points</li>
 <li>User <bdi>jdoe</bdi>: 80 points</li>
 <li>User <bdi>إيان</bdi>: 90 points</li>
</ul>

### HTML5 progress

```html
<progress value="50" max="100"></progress>
```

<progress value="50" max="100" style="width: 100%"></progress>

### HTML5 mark

```html
<p>我爱<mark>备忘清单</mark></p>
```

<p>我爱<mark>备忘清单</mark></p>

HTML 表格
--------------

### Table 示例
<!--rehype:wrap-class=row-span-2-->

```html
<table>
  <thead>
      <tr>
        <td>name</td>
        <td>age</td>
      </tr>
  </thead>
  <tbody>
      <tr>
        <td>Roberta</td>
        <td>39</td>
      </tr>
      <tr>
        <td>Oliver</td>
        <td>25</td>
      </tr>
  </tbody>
</table>
```

### HTML表格标签
<!--rehype:wrap-class=row-span-2-->

标签|说明
:-|:-
[\<table>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/table)       | 定义表格
[\<th>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th)             | 定义表格中的标题单元格
[\<tr>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tr)             | 定义表中的行
[\<td>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/td)             | 定义表格中的单元格
[\<caption>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/caption)   | 定义表格标题
[\<colgroup>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/colgroup) | 定义一组列
[\<col>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/col)           | 定义表中的列
[\<thead>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/thead)       | 对标题内容进行分组
[\<tbody>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tbody)       | 将正文内容分组
[\<tfoot>](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/tfoot)       | 对页脚内容进行分组

### \<td> 属性

属性|说明
:-|:-
`colspan` | 单元格应跨越的列数
`headers` | 单元格与一个或多个标题单元格相关
`rowspan` | 单元格应跨越的行数

请参阅：[td\#属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/td#attributes)

### \<th> 属性

属性|说明
:-|:-
`colspan`                                                                        | 单元格应跨越的列数
`headers`                                                                        | 单元格与一个或多个标题单元格相关
`rowspan`                                                                        | 单元格应跨越的行数
`abbr`                                                                           | 单元格内容的描述
[scope](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th#attr-scope) | 表头元素(在\<th>中定义)关联的单元格

请参阅：[th\#属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/th#attributes)

HTML 列表
----

### 无序列表

```html
<ul>
  <li>I'm an item</li>
  <li>I'm another item</li>
  <li>I'm another item</li>
</ul>
```

请参阅：[无序列表元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul)

### 有序列表

```html
<ol>
  <li>I'm the first item</li>
  <li>I'm the second item</li>
  <li>I'm the third item</li>
</ol>
```

请参阅：[有序列表元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol)

### 定义列表

```html
<dl>
  <dt>A Term</dt>
  <dd>Definition of a term</dd>
  <dt>Another Term</dt>
  <dd>Definition of another term</dd>
</dl>
```

请参阅：[描述列表元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl)

HTML 表单
-----------

### Form 标签
<!--rehype:wrap-class=row-span-2-->

```html
<form method="POST" action="api/login">
  <label for="mail">邮箱: </label>
  <input type="email" id="mail" name="mail">
  <br/>
  <label for="pw">密码:</label>
  <input type="password" id="pw" name="pw">
  <br/>
  <input type="submit" value="登录">
  <br/>
  <input type="checkbox" id="ck" name="ck">
  <label for="ck">记住我</label>
</form>
```

#### ↓ 预览

<form method="POST" action="api/login" style="padding: 20px;">
  <label for="email">邮箱: </label>
  <input type="email" id="email" name="email" class="border border-slate-400 mt-2">
  <br/>
  <label for="pwd">密码:</label>
  <input type="password" id="pwd" name="pwd" class="border border-slate-400 mt-2">
  <br/>
  <input type="submit" value="登录" class="mt-2">
  <br/>
  <input type="checkbox" id="ck" name="ck" class="mt-2">
  <label for="ck">记住我</label>
</form>

HTML `<form>` 元素用于收集信息并将其发送到外部源。

### Form 属性

属性|说明
:-|:-
`name`     | 脚本形式的名称
`action`   | 表单脚本的URL
`method`   | HTTP方法，`POST`/`GET` _(默认)_
`enctype`  | 介质类型，请参见[enctype](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLFormElement/enctype)
`onsubmit` | 提交表单时运行
`onreset`  | 在窗体重置时运行

### Label 标签

```html
<!-- 嵌套标签 -->
<label>Click me 
<input type="text" id="user" name="name"/>
</label>
```

---

```html
<!-- 'for' 属性 -->
<label for="user">Click me</label>
<input id="user" type="text" name="name"/>
```

`for`在标签中引用输入的`id`属性

### Input 标签

```html
<label for="Name">Name:</label>
<input type="text" name="Name" id="">
```

#### ↓ 预览

<form style="padding: 20px;">
  <label for="username">Username:</label>
  <input type="text" name="username" id="username" class="border border-slate-400">
</form>

请参阅：[HTML输入标记](/html#html-input-tags)

### Textarea 标签

```html
<textarea rows="2" cols="30" name="address" id="address"></textarea>
```
<!--rehype:className=wrap-text -->

#### ↓ 预览

<form style="padding: 20px;">
    <textarea rows="2" cols="30" name="address" id="address" class="border border-slate-400"style="width: 100%"></textarea>
</form>

Textarea 是一个多行文本输入控件

### Radio Buttons

```html
<input type="radio" name="gender" id="m">
<label for="m">Male</label>
<input type="radio" name="gender" id="f">
<label for="f">Female</label>
```

#### ↓ 预览

<form style="padding: 20px;">
    <input type="radio" name="gender" id="m">
    <label for="m">Male</label>
    <input type="radio" name="gender" id="f">
    <label for="f">Female</label>
</form>

单选按钮用于让用户只选择一个

### Checkboxes

```html
<input type="checkbox" name="s" id="soc">
<label for="soc">Soccer</label>
<input type="checkbox" name="s" id="bas">
<label for="bas">Baseball</label>
```

#### ↓ 预览

<form style="padding: 20px;">
    <input type="checkbox" name="sports" id="soccer">
    <label for="soccer">Soccer</label>
    <input type="checkbox" name="sports" id="baseball">
    <label for="baseball">Baseball</label>
</form>

复选框允许用户选择一个或多个

### Select 标签

```html
<label for="city">City:</label>
<select name="city" id="city">
  <option value="1">Sydney</option>
  <option value="2">Melbourne</option>
  <option value="3">Cromwell</option>
</select>
```

#### ↓ 预览

<form style="padding: 20px">
  <label for="city">City:</label>
  <select name="city" id="city" class="border border-slate-400">
      <option value="1">Sydney</option>
      <option value="2">Melbourne</option>
      <option value="3">Cromwell</option>
  </select>
</form>

选择框是选项的下拉列表

### Fieldset 标签

```html
<fieldset>
  <legend>Your favorite monster</legend>
  <input type="radio" id="kra" name="m">
  <label for="kraken">Kraken</label><br/>
  <input type="radio" id="sas" name="m">
  <label for="sas">Sasquatch</label>
</fieldset>
```

#### ↓ 预览

<form style="padding: 20px">
<fieldset class="border border-slate-400" style="padding: 20px">
  <legend>Your favorite monster</legend>
  <input type="radio" id="kra" name="monster">
  <label for="kra">Kraken</label><br/>
  <input type="radio" id="sas" name="monster">
  <label for="sas">Sasquatch</label>
</fieldset>
</form>

### 数据列表标签（HTML5）

```html
<label for="b">Choose a browser: </label>
<input list="list" id="b" name="browser"/>
<datalist id="list">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

#### ↓ 预览

<form style="padding: 20px">
  <label for="myBrowser">Choose a browser:</label>
  <input list="browsers" id="myBrowser" name="myBrowser"/>
  <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Internet Explorer">
    <option value="Opera">
    <option value="Safari">
    <option value="Microsoft Edge">
  </datalist>
</form>

### 提交和重置按钮

```html
<form action="register.php" method="post">
  <label for="foo">Name:</label>
  <input type="text" name="name" id="foo">
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>
```

#### ↓ 预览

<form action="register.php" method="post" style="padding: 20px">
  <label for="name">Name:</label>
  <input type="text" name="name" id="name"">
  <input type="submit" value="提交">
  <input type="reset" value="重置">
</form>

`将数据提交到服务器` 重置为默认值

HTML input 标签
-----------
<!--rehype:body-class=cols-2-->

### Input 属性
<!--rehype:wrap-class=row-span-2-->

输入标记是一个空元素，用于标识要从用户处获取的特定类型的字段信息。

```html
<input type="text" name="?" value="?" minlength="6"  required />
```

---

:-|:-
:-|:-
`type="…"`              | 正在输入的数据类型
`value="…"`             | 默认值
`name="…"`              | 用于在 HTTP 请求中描述此数据
`id="…"`                | 其他 HTML 元素的唯一标识符
`readonly`              | 停止用户修改
`disabled`              | 停止任何交互
`checked`               | 单选或复选框是否选中
`required`              | 是强制性的，参阅[必填](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/required#example)
`placeholder="…"`       | 添加临时，请参阅[::placeholder](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::placeholder#examples)
`autocomplete="off"`    | 禁用自动完成
`autocapitalize="none"` | 禁用自动大写
`inputmode="…"`         | 显示特定键盘，请参阅[inputmode](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)
`list="…"`              | 关联的[datalist](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/datalist)的id
`maxlength="…"`         | 最大字符数
`minlength="…"`         | 最小字符数
`min="…"`               | 范围和编号上的最小数值
`max="…"`               | 范围和编号上的最大数值
`step="…"`              | 数字如何在范围和数字中递增
`pattern="…"`           | 指定一个[正则表达式](./regex.md)，请参阅[pattern](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/pattern)
`autofocus`             | 集中精力
`spellcheck`            | 执行拼写检查
`multiple`              | 是否允许[多个](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/multiple)值
`accept=""`             | [file](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/file) 中需要文件类型上载控件

请参阅：[\<input>元素 的属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#attributes)

### Input 类型

|               |                  |
|---------------|------------------|
`type="checkbox"` | <input type="checkbox">
`type="radio"`    | <input type="radio">
`type="file"`     | <input type="file">
`type="hidden"`   | <input type="hidden">
`type="text"`     | <input type="text">
`type="password"` | <input type="password">
`type="image"`    | <input type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png" width="70">
`type="reset"`    | <input type="reset">
`type="button"`   | <input type="button">
`type="submit"`   | <input type="submit">

#### HTML5 中的新输入类型

|               |                  |
|---------------|------------------|
| `type="color"`          | <input type="color" value="#0FB881"> |
| `type="date"`           | <input type="date">                  |
| `type="time"`           | <input type="time">                  |
| `type="month"`          | <input type="month">                 |
| `type="datetime-local"` | <input type="datetime-local">        |
| `type="week"`           | <input type="week">                  |
| `type="email"`          | <input type="email">                 |
| `type="tel"`            | <input type="tel">                   |
| `type="url"`            | <input type="url">                   |
| `type="number"`         | <input type="number">                |
| `type="search"`         | <input type="search">                |
| `type="range"`          | <input type="range">                 |

### Input CSS 选择器

|               |                  |
|---------------|------------------|
| `input:focus` | 当键盘聚焦时       |

HTML meta 标签
-----------
<!--rehype:body-class=cols-2-->

### Meta 标签
<!--rehype:wrap-class=row-span-5-->

meta 标记描述 HTML 文档中的元数据。它解释了关于 HTML 的其他材料。

```html
<meta charset="utf-8">
```

```html
<!-- 标题 -->
<title>···</title>
<meta property="og:title"  content="···">
<meta name="twitter:title" content="···">
```

---

```html
<!-- url -->
<link rel="canonical"       href="https://···">
<meta property="og:url"  content="https://···">
<meta name="twitter:url" content="https://···">
```

---

```html
<!-- 描述 -->
<meta name="description"         content="网页描述···">
<meta property="og:description"  content="···">
<meta name="twitter:description" content="···">
```

---

```html
<!-- image -->
<meta property="og:image"  content="https://···">
<meta name="twitter:image" content="https://···">
```

---

```html
<!-- ua -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

---

```html
<!-- viewport -->
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="width=1024">
```

---

```html
<!-- 重定向 -->
<meta http-equiv="refresh" content="5;url=http://example.com/">
<meta name="robots" content="index,follow">
<meta name="generator" content="网站生成工具">
<meta name="csrf-token" content="token值">
```

### 常用 Meta

```html
<meta name="description" content="网页描述···">
<meta name="keywords" content="关键词1,关键词2,关键词3">
<meta name="author" content="作者名">
```

### 常用 Meta

```html
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
<link rel="icon" href="favicon.png" type="image/png">
<link rel="icon" href="favicon.jpg" type="image/jpeg">
```

### Open Graph

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="en_CA">
<meta property="og:title" content="HTML cheatsheet">
<meta property="og:url" content="https://jaywcjlove.github.io/">
<meta property="og:image" content="https://xxx.com/image.jpg">
<meta property="og:site_name" content="Name of your website">
<meta property="og:description" content="Description of this page">
```

Facebook、Instagram、Pinterest、LinkedIn 等使用。

### Twitter 卡片

```html
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@QuickRef_ME">
<meta name="twitter:title" content="HTML cheatsheet">
<meta name="twitter:url" content="https://jaywcjlove.github.io/">
<meta name="twitter:description" content="Description of this page">
<meta name="twitter:image" content="https://xxx.com/image.jpg">
```

请参阅：[Twitter 卡片文档](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary)

### Geotagging

```html
<meta name="ICBM" content="45.416667,-75.7">
<meta name="geo.position" content="45.416667;-75.7">
<meta name="geo.region" content="ca-on">
<meta name="geo.placename" content="Ottawa">
```

请参阅：[Geotagging](https://en.wikipedia.org/wiki/Geotagging#HTML_pages)

标签语义化
------

### 复杂布局
<!--rehype:wrap-class=row-span-2-->

```
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆ <header>                                ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆ <nav>                                   ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆ <section>                               ┆
┆╭┈┈┈┈┈┈┈┈╮╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮┆
┆┆<aside> ┆┆ <main>                      ┆┆
┆┆        ┆┆╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮┆┆
┆┆        ┆┆┆  <article>    ┆ ┆ <aside> ┆┆┆
┆┆        ┆┆┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ┆ <header>  ┆ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ┆ <article> ┆ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ┆ <footer>  ┆ ┆ ┆         ┆┆┆
┆┆        ┆┆┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯ ┆ ┆         ┆┆┆
┆┆        ┆┆╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯┆┆
┆╰┈┈┈┈┈┈┈┈╯╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆ <footer>                                ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

### 复杂布局
<!--rehype:wrap-class=row-span-2-->

```
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  <header>                           ┆
┆  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮  ┆
┆  ┆  <nav>                        ┆  ┆
┆  ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ 
┆  <main>                             ┆ 
┆ ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈╮  ┆ 
┆ ┆  <article>       ┆ ┆  <aside>  ┆  ┆ 
┆ ┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆  ┆ 
┆ ┆ ┆ <header>  ┆    ┆ ┆           ┆  ┆ 
┆ ┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆  ┆ 
┆ ┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆  ┆ 
┆ ┆ ┆ <section> ┆    ┆ ┆           ┆  ┆ 
┆ ┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆  ┆ 
┆ ┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆  ┆ 
┆ ┆ ┆ <footer>  ┆    ┆ ┆           ┆  ┆ 
┆ ┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆  ┆ 
┆ ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈╯  ┆ 
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ 
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  <footer>                           ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

### 区域语义化

```
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈┈┈╮
┆  <main>          ┆ ┆  <aside>  ┆
┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆
┆ ┆ <header>  ┆    ┆ ┆           ┆
┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆
┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆
┆ ┆ <section> ┆    ┆ ┆           ┆
┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆
┆ ╭┈┈┈┈┈┈┈┈┈┈┈╮    ┆ ┆           ┆
┆ ┆ <footer>  ┆    ┆ ┆           ┆
┆ ╰┈┈┈┈┈┈┈┈┈┈┈╯    ┆ ┆           ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈┈┈╯
```

### 页面头语义化

```
╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
┆  <header>                           ┆
┆  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮  ┆
┆  ┆  <section>                    ┆  ┆
┆  ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯  ┆
┆  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮ ╭┈┈┈┈┈┈┈┈┈╮  ┆
┆  ┆  <nav>            ┆ ┆ <aside> ┆  ┆
┆  ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯ ╰┈┈┈┈┈┈┈┈┈╯  ┆
┆  ╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮  ┆
┆  ┆  <footer>                     ┆  ┆
┆  ╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯  ┆
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╯
```

另见
--------

- [HTML 4.01 Specification](https://www.w3.org/TR/REC-html40/cover.html#minitoc) _(w3.org)_
- [HTML Tutorial](https://wangchujiang.com/html-tutorial/) _(jaywcjlove.github.io)_
- [Emmet 备忘清单，提升 HTML 和 CSS 代码编写的工具包](./emmet.md) _(jaywcjlove.github.io)_
