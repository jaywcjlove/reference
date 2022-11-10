Emmet 备忘清单
====

[Emmet](https://emmet.io/) 是一个用于提升 [HTML](./html.md) 和 CSS 代码编写的 Web 开发人员工具包，它允许您使用著名的 CSS 选择器以光速编写大型 HTML 代码块。

Emmet 语法
---------------

### 入门

让我们开始将您的开发提高到光速。

- [Visual Studio 代码中的 Emmet](https://code.visualstudio.com/docs/editor/emmet) _(code.visualstudio.com)_
- [Sublime Text 的 Emmet 2](https://github.com/emmetio/sublime-text-plugin) _(github.com)_
- [Emmet for Coda](https://emmet.io/download/coda/) _(emmet.io)_
- [Emmet for Atom](https://github.com/emmetio/emmet-atom#readme) _(github.com)_

### 乘法：*

`ul>li*5`

```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

### 孩子: >

`nav>ul>li`

```html
<nav>
    <ul>
        <li></li>
    </ul>
</nav>
```

### 自定义属性
<!--rehype:wrap-class=col-span-2-->

`p[title="Hello world"]`

```html
<p title="Hello world"></p>
```

`td[rowspan=2 colspan=3 title]`

```html
<td rowspan="2" colspan="3" title=""></td>
```

`[a='value1' b="value2"]`

```html
<div a="value1" b="value2"></div>
```

### 文本: {}

a{Click me}

```html
<a href="">Click me</a>
```

p>{Click }+a{here}+{ 继续}

```html
<p>Click <a href="">here</a> 继续</p>
```

### ID 和 CLASS 属性
<!--rehype:wrap-class=row-span-2-->

\# header

```html
<div id="header"></div>
```

.title

```html
<div class="title"></div>
```

form#search.wide

```html
<form id="search" class="wide"></form>
```

p.class1.class2.class3

```html
<p class="class1 class2 class3"></p>
```

### 隐式标签名称
<!--rehype:wrap-class=row-span-2-->

.class

```html
<div class="class"></div>
```

em>.class

```html
<em><span class="class"></span></em>
```

ul>.class

```html
<ul>
    <li class="class"></li>
</ul>
```

table>.row>.col

```html
<table>
    <tr class="row">
        <td class="col"></td>
    </tr>
</table>
```

### 兄弟: +

div+p+bq

```html
<div></div>
<p></p>
<blockquote></blockquote>
```

### $
<!--rehype:wrap-class=row-span-2-->

ul>li.item$*3

```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
</ul>
```

h$[title=item$]{Header $}*3

```html
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

ul>li.item$$$*3

```html
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
</ul>
```

ul>li.item$@-*3

```html
<ul>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
```

ul>li.item$@2*3

```html
<ul>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
</ul>
```

### 上一层: ^

div+div>p>span+em^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

div+div>p>span+em^^bq

```html
<div></div>
<div>
    <p><span></span><em></em></p>
</div>
<blockquote></blockquote>
```

### 分组: ()

div>(header>ul>li*2>a)+footer>p

```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
```

(div>dl>(dt+dd)*4)+footer>p

```html
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

HTML
---

### HTML 1

`!` 或者 `html:5`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

a

```html
<a href=""></a>
```

a:link

```html
<a href="http://"></a>
```

a:mail

```html
<a href="mailto:"></a>
```

abbr

```html
<abbr title=""></abbr>
```

acronym, acr

```html
<acronym title=""></acronym>
```

base

```html
<base href="" />
```

basefont

```html
<basefont />
```

br

```html
<br />
```

frame

```html
<frame />
```

hr

```html
<hr />
```

bdo

```html
<bdo dir=""></bdo>
```

bdo:r

```html
<bdo dir="rtl"></bdo>
```

bdo:l

```html
<bdo dir="ltr"></bdo>
```

col

```html
<col />
```

link

```html
<link rel="stylesheet" href="" />
```

link:css

```html
<link rel="stylesheet" href="style.css" />
```

link:print

```html
<link rel="stylesheet" href="print.css" media="print" />
```

link:favicon

```html
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
```

link:touch

```html
<link rel="apple-touch-icon" href="favicon.png" />
```

link:rss

```html
<link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml" />
```
<!--rehype:className=wrap-text -->

link:atom

```html
<link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml" />
```
<!--rehype:className=wrap-text -->

link:import, link:im

```html
<link rel="import" href="component.html" />
```

meta

```html
<meta />
```

meta:utf

```html
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
```

meta:win

```html
<meta http-equiv="Content-Type" content="text/html;charset=windows-1251" />
```
<!--rehype:className=wrap-text -->

meta:vp

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
```
<!--rehype:className=wrap-text -->

meta:compat

```html
<meta http-equiv="X-UA-Compatible" content="IE=7" />
```

style

```html
<style></style>
```

script

```html
<script></script>
```

script:src

```html
<script src=""></script>
```

img

```html
<img src="" alt="" />
```

img:srcset, img:s

```html
<img srcset="" src="" alt="" />
```

img:sizes, img:z

```html
<img sizes="" srcset="" src="" alt="" />
```

picture

```html
<picture></picture>
```

source, src

```html
<source />
```

source:src, src:sc

```html
<source src="" type="" />
```

source:srcset, src:s

```html
<source srcset="" />
```

source:media, src:m

```html
<source media="(min-width: )" srcset="" />
```

source:type, src:t

```html
<source srcset="" type="image/" />
```

source:sizes, src:z

```html
<source sizes="" srcset="" />
```

source:media:type, src:mt

```html
<source media="(min-width: )" srcset="" type="image/" />
```
<!--rehype:className=wrap-text -->

source:media:sizes, src:mz

```html
<source media="(min-width: )" sizes="" srcset="" />
```

source:sizes:type, src:zt

```html
<source sizes="" srcset="" type="image/" />
```

iframe

```html
<iframe src="" frameborder="0"></iframe>
```

embed

```html
<embed src="" type="" />
```

object

```html
<object data="" type=""></object>
```

param

```html
<param name="" value="" />
```

map

```html
<map name=""></map>
```

area

```html
<area shape="" coords="" href="" alt="" />
```

area:d

```html
<area shape="default" href="" alt="" />
```

area:c

```html
<area shape="circle" coords="" href="" alt="" />
```

area:r

```html
<area shape="rect" coords="" href="" alt="" />
```

area:p

```html
<area shape="poly" coords="" href="" alt="" />
```

form

```html
<form action=""></form>
```

form:get

```html
<form action="" method="get"></form>
```

form:post

```html
<form action="" method="post"></form>
```

label

```html
<label for=""></label>
```

input

```html
<input type="text" />
```

inp

```html
<input type="text" name="" id="" />
```

input:hidden, input:h 别名 input[type=hidden name]

```html
<input type="hidden" name="" />
```

input:text, input:t 别名 inp

```html
<input type="text" name="" id="" />
```

input:search 别名 inp[type=search]

```html
<input type="search" name="" id="" />
```

input:email 别名 inp[type=email]

```html
<input type="email" name="" id="" />
```

### HTML 2

input:url 别名 inp[type=url]

```html
<input type="url" name="" id="" />
```

input:password, input:p 别名 inp[type=password]

```html
<input type="password" name="" id="" />
```

input:datetime 别名 inp[type=datetime]

```html
<input type="datetime" name="" id="" />
```

input:date 别名 inp[type=date]

```html
<input type="date" name="" id="" />
```

input:datetime-local 别名 inp[type=datetime-local]

```html
<input type="datetime-local" name="" id="" />
```

input:month 别名 inp[type=month]

```html
<input type="month" name="" id="" />
```

input:week 别名 inp[type=week]

```html
<input type="week" name="" id="" />
```

input:time 别名 inp[type=time]

```html
<input type="time" name="" id="" />
```

input:tel 别名 inp[type=tel]

```html
<input type="tel" name="" id="" />
```

input:number 别名 inp[type=number]

```html
<input type="number" name="" id="" />
```

input:color 别名 inp[type=color]

```html
<input type="color" name="" id="" />
```

input:checkbox, input:c 别名 inp[type=checkbox]

```html
<input type="checkbox" name="" id="" />
```

input:radio, input:r 别名 inp[type=radio]

```html
<input type="radio" name="" id="" />
```

input:range 别名 inp[type=range]

```html
<input type="range" name="" id="" />
```

input:file, input:f 别名 inp[type=file]

```html
<input type="file" name="" id="" />
```

input:submit, input:s

```html
<input type="submit" value="" />
```

input:image, input:i

```html
<input type="image" src="" alt="" />
```

input:button, input:b

```html
<input type="button" value="" />
```

isindex

```html
<isindex />
```

input:reset 别名 input:button[type=reset]

```html
<input type="reset" value="" />
```

select

```html
<select name="" id=""></select>
```

select:disabled, select:d 别名 select[disabled.]

```html
<select name="" id="" disabled="disabled"></select>
```
<!--rehype:className=wrap-text -->

option, opt

```html
<option value=""></option>
```

textarea

```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```
<!--rehype:className=wrap-text -->

marquee

```html
<marquee behavior="" direction=""></marquee>
```

menu:context, menu:c 别名 menu[type=context]>

```html
<menu type="context"></menu>
```

menu:toolbar, menu:t 别名 menu[type=toolbar]>

```html
<menu type="toolbar"></menu>
```

video

```html
<video src=""></video>
```

audio

```html
<audio src=""></audio>
```

html:xml

```html
<html xmlns="http://www.w3.org/1999/xhtml"></html>
```
<!--rehype:className=wrap-text -->

keygen

```html
<keygen />
```

command

```html
<command />
```

button:submit, button:s, btn:s 别名 button[type=submit]

```html
<button type="submit"></button>
```

button:reset, button:r, btn:r 别名 button[type=reset]

```html
<button type="reset"></button>
```

button:disabled, button:d, btn:d 别名 button[disabled.]

```html
<button disabled="disabled"></button>
```

fieldset:disabled, fieldset:d, fset:d, fst:d 别名 fieldset[disabled.]

```html
<fieldset disabled="disabled"></fieldset>
```

bq 别名 blockquote

```html
<blockquote></blockquote>
```

fig 别名 figure

```html
<figure></figure>
```

figc 别名 figcaption

```html
<figcaption></figcaption>
```

pic 别名 picture

```html
<picture></picture>
```

ifr 别名 iframe

```html
<iframe src="" frameborder="0"></iframe>
```

emb 别名 embed

```html
<embed src="" type="" />
```

obj 别名 object

```html
<object data="" type=""></object>
```

cap 别名 caption

```html
<caption></caption>
```

colg 别名 colgroup

```html
<colgroup></colgroup>
```

fst, fset 别名 fieldset

```html
<fieldset></fieldset>
```

btn 别名 button

```html
<button></button>
```

optg 别名 optgroup

```html
<optgroup></optgroup>
```

tarea 别名 textarea

```html
<textarea name="" id="" cols="30" rows="10"></textarea>
```
<!--rehype:className=wrap-text -->

leg 别名 legend

```html
<legend></legend>
```

sect 别名 section

```html
<section></section>
```

art 别名 article

```html
<article></article>
```

hdr 别名 header

```html
<header></header>
```

ftr 别名 footer

```html
<footer></footer>
```

adr 别名 address

```html
<address></address>
```

dlg 别名 dialog

```html
<dialog></dialog>
```

str 别名 strong

```html
<strong></strong>
```

prog 别名 progress

```html
<progress></progress>
```

mn 别名 main

```html
<main></main>
```

tem 别名 template

```html
<template></template>
```

datag 别名 datagrid

```html
<datagrid></datagrid>
```

datal 别名 datalist

```html
<datalist></datalist>
```

kg 别名 keygen

```html
<keygen />
```

out 别名 output

```html
<output></output>
```

det 别名 details

```html
<details></details>
```

### HTML 3

cmd
Alias of command

```html
<command />
```

doc 别名 html>(head>meta[charset=${charset}]+title{${1:Document}})+body
<!--rehype:className=wrap-text -->

```html
<html>
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

doc4 别名 html>(head>meta[http-equiv="Content-Type" content="text/html;charset=${charset}"]+title{${1:Document}})+body
<!--rehype:className=wrap-text -->

```html
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

ri:dpr, ri:d 别名 img:s

```html
<img srcset="" src="" alt="" />
```

ri:viewport, ri:v 别名 img:z

```html
<img sizes="" srcset="" src="" alt="" />
```

ri:art, ri:a 别名 pic>src:m+img

```html
<picture>
    <source media="(min-width: )" srcset="" />
    <img src="" alt="" />
</picture>
```

ri:type, ri:t 别名 pic>src:t+img

```html
<picture>
    <source srcset="" type="image/" />
    <img src="" alt="" />
</picture>
```

html:4t 别名 !!!4t+doc4[lang=${lang}]

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

html:4s 别名 !!!4s+doc4[lang=${lang}]

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

html:xt 别名 !!!xt+doc4[xmlns=<http://www.w3.org/1999/xhtml> xml:lang=${lang}]
<!--rehype:className=wrap-text -->

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

html:xs 别名 !!!xs+doc4[xmlns=<http://www.w3.org/1999/xhtml> xml:lang=${lang}]

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

html:xxs 别名 !!!xxs+doc4[xmlns=<http://www.w3.org/1999/xhtml> xml:lang=${lang}]

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
<!--rehype:className=wrap-text -->

html:5 别名 !!!+doc[lang=${lang}]

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

ol+ 别名 ol>li

```html
<ol>
    <li></li>
</ol>
```

ul+ 别名 ul>li

```html
<ul>
    <li></li>
</ul>
```

dl+ 别名 dl>dt+dd

```html
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```

map+ 别名 map>area

```html
<map name="">
    <area shape="" coords="" href="" alt="" />
</map>
```
<!--rehype:className=wrap-text -->

table+ 别名 table>tr>td

```html
<table>
    <tr>
        <td></td>
    </tr>
</table>
```

colgroup+, colg+ 别名 colgroup>col

```html
<colgroup>
    <col />
</colgroup>
```

tr+ 别名 tr>td

```html
<tr>
    <td></td>
</tr>
```

select+ 别名 select>option

```html
<select name="" id="">
    <option value=""></option>
</select>
```

optgroup+, optg+ 别名 optgroup>option

```html
<optgroup>
    <option value=""></option>
</optgroup>
```

pic+ 别名 picture>source:srcset+img

```html
<picture>
    <source srcset="" />
    <img src="" alt="" />
</picture>
```

!!!

```html
<!DOCTYPE html>
```

!!!4t

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
<!--rehype:className=wrap-text -->

!!!4s

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
<!--rehype:className=wrap-text -->

!!!xt

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
<!--rehype:className=wrap-text -->

!!!xs

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
<!--rehype:className=wrap-text -->

!!!xxs

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```
<!--rehype:className=wrap-text -->

c

```html
<!-- ${child} -->
```

cc:ie6

```html
<!--[if lte IE 6]>
    ${child}
<![endif]-->
```

cc:ie

```html
<!--[if IE]>
    ${child}
<![endif]-->
```

cc:noie

```html
<!--[if !IE]><!-->
    ${child}
<!--<![endif]-->
```

CSS
--------

### 视觉格式
<!--rehype:wrap-class=row-span-4-->

:- | :-
:- | :-
`pos` | position:relative;
`pos:s` | position:static;
`pos:a` | position:absolute;
`pos:r` | position:relative;
`pos:f` | position:fixed;
`t` | top:;
`t:a` | top:auto;
`r` | right:;
`r:a` | right:auto;
`b` | bottom:;
`b:a` | bottom:auto;
`l` | left:;
`l:a` | left:auto;
`z` | z-index:;
`z:a` | z-index:auto;
`fl` | float:left;
`fl:n` | float:none;
`fl:l` | float:left;
`fl:r` | float:right;
`cl` | clear:both;
`cl:n` | clear:none;
`cl:l` | clear:left;
`cl:r` | clear:right;
`cl:b` | clear:both;
`d` | display:block;
`d:n` | display:none;
`d:b` | display:block;
`d:f` | display:flex;
`d:if` | display:inline-flex;
`d:i` | display:inline;
`d:ib` | display:inline-block;
`d:li` | display:list-item;
`d:ri` | display:run-in;
`d:cp` | display:compact;
`d:tb` | display:table;
`d:itb` | display:inline-table;
`d:tbcp` | display:table-caption;
`d:tbcl` | display:table-column;
`d:tbclg` | display:table-column-group;
`d:tbhg` | display:table-header-group;
`d:tbfg` | display:table-footer-group;
`d:tbr` | display:table-row;
`d:tbrg` | display:table-row-group;
`d:tbc` | display:table-cell;
`d:rb` | display:ruby;
`d:rbb` | display:ruby-base;
`d:rbbg` | display:ruby-base-group;
`d:rbt` | display:ruby-text;
`d:rbtg` | display:ruby-text-group;
`v` | visibility:hidden;
`v:v` | visibility:visible;
`v:h` | visibility:hidden;
`v:c` | visibility:collapse;
`ov` | overflow:hidden;
`ov:v` | overflow:visible;
`ov:h` | overflow:hidden;
`ov:s` | overflow:scroll;
`ov:a` | overflow:auto;
`ovx` | overflow-x:hidden;
`ovx:v` | overflow-x:visible;
`ovx:h` | overflow-x:hidden;
`ovx:s` | overflow-x:scroll;
`ovx:a` | overflow-x:auto;
`ovy` | overflow-y:hidden;
`ovy:v` | overflow-y:visible;
`ovy:h` | overflow-y:hidden;
`ovy:s` | overflow-y:scroll;
`ovy:a` | overflow-y:auto;
`ovs` | overflow-style:scrollbar;
`ovs:a` | overflow-style:auto;
`ovs:s` | overflow-style:scrollbar;
`ovs:p` | overflow-style:panner;
`ovs:m` | overflow-style:move;
`ovs:mq` | overflow-style:marquee;
`zoo, zm` | zoom:1;
`cp` | clip:;
`cp:a` | clip:auto;
`cp:r` | clip:rect(top right bottom left);
`rsz` | resize:;
`rsz:n` | resize:none;
`rsz:b` | resize:both;
`rsz:h` | resize:horizontal;
`rsz:v` | resize:vertical;
`cur` | cursor:${pointer};
`cur:a` | cursor:auto;
`cur:d` | cursor:default;
`cur:c` | cursor:crosshair;
`cur:ha` | cursor:hand;
`cur:he` | cursor:help;
`cur:m` | cursor:move;
`cur:p` | cursor:pointer;
`cur:t` | cursor:text;

### 边距和填充

:- | :-
:- | :-
`m` | margin:;
`m:a` | margin:auto;
`mt` | margin-top:;
`mt:a` | margin-top:auto;
`mr` | margin-right:;
`mr:a` | margin-right:auto;
`mb` | margin-bottom:;
`mb:a` | margin-bottom:auto;
`ml` | margin-left:;
`ml:a` | margin-left:auto;
`p` | padding:;
`pt` | padding-top:;
`pr` | padding-right:;
`pb` | padding-bottom:;
`pl` | padding-left:;

### 盒子尺寸

:- | :-
:- | :-
`bxz` | box-sizing:border-box;
`bxz:cb` | box-sizing:content-box;
`bxz:bb` | box-sizing:border-box;
`bxsh` | box-shadow:inset hoff voff blur color;
`bxsh:r` | box-shadow:inset hoff voff blur spread rgb(0, 0, 0);
`bxsh:ra` | box-shadow:inset h v blur spread rgba(0, 0, 0, .5);
`bxsh:n` | box-shadow:none;
`w` | width:;
`w:a` | width:auto;
`h` | height:;
`h:a` | height:auto;
`maw` | max-width:;
`maw:n` | max-width:none;
`mah` | max-height:;
`mah:n` | max-height:none;
`miw` | min-width:;
`mih` | min-height:;

### 字体
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`f` | font:;
`f+` | font:1em Arial,sans-serif;
`fw` | font-weight:;
`fw:n` | font-weight:normal;
`fw:b` | font-weight:bold;
`fw:br` | font-weight:bolder;
`fw:lr` | font-weight:lighter;
`fs` | font-style:${italic};
`fs:n` | font-style:normal;
`fs:i` | font-style:italic;
`fs:o` | font-style:oblique;
`fv` | font-variant:;
`fv:n` | font-variant:normal;
`fv:sc` | font-variant:small-caps;
`fz` | font-size:;
`fza` | font-size-adjust:;
`fza:n` | font-size-adjust:none;
`ff` | font-family:;
`ff:s` | font-family:serif;
`ff:ss` | font-family:sans-serif;
`ff:c` | font-family:cursive;
`ff:f` | font-family:fantasy;
`ff:m` | font-family:monospace;
`ff:a` | font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
`ff:t` | font-family: "Times New Roman", Times, Baskerville, Georgia, serif;
`ff:v` | font-family: Verdana, Geneva, sans-serif;
`fef` | font-effect:;
`fef:n` | font-effect:none;
`fef:eg` | font-effect:engrave;
`fef:eb` | font-effect:emboss;
`fef:o` | font-effect:outline;
`fem` | font-emphasize:;
`femp` | font-emphasize-position:;
`femp:b` | font-emphasize-position:before;
`femp:a` | font-emphasize-position:after;
`fems` | font-emphasize-style:;
`fems:n` | font-emphasize-style:none;
`fems:ac` | font-emphasize-style:accent;
`fems:dt` | font-emphasize-style:dot;
`fems:c` | font-emphasize-style:circle;
`fems:ds` | font-emphasize-style:disc;
`fsm` | font-smooth:;
`fsm:a` | font-smooth:auto;
`fsm:n` | font-smooth:never;
`fsm:aw` | font-smooth:always;
`fst` | font-stretch:;
`fst:n` | font-stretch:normal;
`fst:uc` | font-stretch:ultra-condensed;
`fst:ec` | font-stretch:extra-condensed;
`fst:c` | font-stretch:condensed;
`fst:sc` | font-stretch:semi-condensed;
`fst:se` | font-stretch:semi-expanded;
`fst:e` | font-stretch:expanded;
`fst:ee` | font-stretch:extra-expanded;
`fst:ue` | font-stretch:ultra-expanded;

### 背景

:- | :-
:- | :-
`bg` | background:#000;
`bg+` | background:#fff url() 0 0 no-repeat;
`bg:n` | background:none;
`bgc` | background-color:#fff;
`bgc:t` | background-color:transparent;
`bgi` | background-image:url();
`bgi:n` | background-image:none;
`bgr` | background-repeat:;
`bgr:n` | background-repeat:no-repeat;
`bgr:x` | background-repeat:repeat-x;
`bgr:y` | background-repeat:repeat-y;
`bgr:sp` | background-repeat:space;
`bgr:rd` | background-repeat:round;
`bga` | background-attachment:;
`bga:f` | background-attachment:fixed;
`bga:s` | background-attachment:scroll;
`bgp` | background-position:0 0;
`bgpx` | background-position-x:;
`bgpy` | background-position-y:;
`bgbk` | background-break:;
`bgbk:bb` | background-break:bounding-box;
`bgbk:eb` | background-break:each-box;
`bgbk:c` | background-break:continuous;
`bgcp` | background-clip:padding-box;
`bgcp:bb` | background-clip:border-box;
`bgcp:pb` | background-clip:padding-box;
`bgcp:cb` | background-clip:content-box;
`bgcp:nc` | background-clip:no-clip;
`bgo` | background-origin:;
`bgo:pb` | background-origin:padding-box;
`bgo:bb` | background-origin:border-box;
`bgo:cb` | background-origin:content-box;
`bgsz` | background-size:;
`bgsz:a` | background-size:auto;
`bgsz:ct` | background-size:contain;
`bgsz:cv` | background-size:cover;

### Lists

:- | :-
:- | :-
`lis` | list-style:;
`lis:n` | list-style:none;
`lisp` | list-style-position:;
`lisp:i` | list-style-position:inside;
`lisp:o` | list-style-position:outside;
`list` | list-style-type:;
`list:n` | list-style-type:none;
`list:d` | list-style-type:disc;
`list:c` | list-style-type:circle;
`list:s` | list-style-type:square;
`list:dc` | list-style-type:decimal;
`list:dclz` | list-style-type:decimal-leading-zero;
`list:lr` | list-style-type:lower-roman;
`list:ur` | list-style-type:upper-roman;
`lisi` | list-style-image:;
`lisi:n` | list-style-image:none;

### Tables

:- | :-
:- | :-
`tbl` | table-layout:;
`tbl:a` | table-layout:auto;
`tbl:f` | table-layout:fixed;
`cps` | caption-side:;
`cps:t` | caption-side:top;
`cps:b` | caption-side:bottom;
`ec` | empty-cells:;
`ec:s` | empty-cells:show;
`ec:h` | empty-cells:hide;

### 颜色

:- | :-
:- | :-
`c`    | color:#000;
`c:r`  | color:rgb(0, 0, 0);
`c:ra` | color:rgba(0, 0, 0, .5);
`op`   | opacity:;

### 文本
<!--rehype:wrap-class=row-span-4-->

:- | :-
:- | :-
`va` | vertical-align:top;
`va:sup` | vertical-align:super;
`va:t` | vertical-align:top;
`va:tt` | vertical-align:text-top;
`va:m` | vertical-align:middle;
`va:bl` | vertical-align:baseline;
`va:b` | vertical-align:bottom;
`va:tb` | vertical-align:text-bottom;
`va:sub` | vertical-align:sub;
`ta` | text-align:left;
`ta:l` | text-align:left;
`ta:c` | text-align:center;
`ta:r` | text-align:right;
`ta:j` | text-align:justify;
`ta-lst` | text-align-last:;
`tal:a` | text-align-last:auto;
`tal:l` | text-align-last:left;
`tal:c` | text-align-last:center;
`tal:r` | text-align-last:right;
`td` | text-decoration:none;
`td:n` | text-decoration:none;
`td:u` | text-decoration:underline;
`td:o` | text-decoration:overline;
`td:l` | text-decoration:line-through;
`te` | text-emphasis:;
`te:n` | text-emphasis:none;
`te:ac` | text-emphasis:accent;
`te:dt` | text-emphasis:dot;
`te:c` | text-emphasis:circle;
`te:ds` | text-emphasis:disc;
`te:b` | text-emphasis:before;
`te:a` | text-emphasis:after;
`th` | text-height:;
`th:a` | text-height:auto;
`th:f` | text-height:font-size;
`th:t` | text-height:text-size;
`th:m` | text-height:max-size;
`ti` | text-indent:;
`ti:-` | text-indent:-9999px;
`tj` | text-justify:;
`tj:a` | text-justify:auto;
`tj:iw` | text-justify:inter-word;
`tj:ii` | text-justify:inter-ideograph;
`tj:ic` | text-justify:inter-cluster;
`tj:d` | text-justify:distribute;
`tj:k` | text-justify:kashida;
`tj:t` | text-justify:tibetan;
`to` | text-outline:;
`to+` | text-outline:0 0 #000;
`to:n` | text-outline:none;
`tr` | text-replace:;
`tr:n` | text-replace:none;
`tt` | text-transform:uppercase;
`tt:n` | text-transform:none;
`tt:c` | text-transform:capitalize;
`tt:u` | text-transform:uppercase;
`tt:l` | text-transform:lowercase;
`tw` | text-wrap:;
`tw:n` | text-wrap:normal;
`tw:no` | text-wrap:none;
`tw:u` | text-wrap:unrestricted;
`tw:s` | text-wrap:suppress;
`tsh` | text-shadow:hoff voff blur #000;
`tsh:r` | text-shadow:h v blur rgb(0, 0, 0);
`tsh:ra` | text-shadow:h v blur rgba(0, 0, 0, .5);
`tsh+` | text-shadow:0 0 0 #000;
`tsh:n` | text-shadow:none;
`lh` | line-height:;
`lts` | letter-spacing:;
`lts-n` | letter-spacing:normal;
`whs` | white-space:;
`whs:n` | white-space:normal;
`whs:p` | white-space:pre;
`whs:nw` | white-space:nowrap;
`whs:pw` | white-space:pre-wrap;
`whs:pl` | white-space:pre-line;
`whsc` | white-space-collapse:;
`whsc:n` | white-space-collapse:normal;
`whsc:k` | white-space-collapse:keep-all;
`whsc:l` | white-space-collapse:loose;
`whsc:bs` | white-space-collapse:break-strict;
`whsc:ba` | white-space-collapse:break-all;
`wob` | word-break:;
`wob:n` | word-break:normal;
`wob:k` | word-break:keep-all;
`wob:ba` | word-break:break-all;
`wos` | word-spacing:;
`wow` | word-wrap:;
`wow:nm` | word-wrap:normal;
`wow:n` | word-wrap:none;
`wow:u` | word-wrap:unrestricted;
`wow:s` | word-wrap:suppress;
`wow:b` | word-wrap:break-word;

### Border
<!--rehype:wrap-class=row-span-4-->

:- | :-
:- | :-
`bd` | border:;
`bd+` | border:1px solid #000;
`bd:n` | border:none;
`bdbk` | border-break:close;
`bdbk:c` | border-break:close;
`bdcl` | border-collapse:;
`bdcl:c` | border-collapse:collapse;
`bdcl:s` | border-collapse:separate;
`bdc` | border-color:#000;
`bdc:t` | border-color:transparent;
`bdi` | border-image:url();
`bdi:n` | border-image:none;
`bdti` | border-top-image:url();
`bdti:n` | border-top-image:none;
`bdri` | border-right-image:url();
`bdri:n` | border-right-image:none;
`bdbi` | border-bottom-image:url();
`bdbi:n` | border-bottom-image:none;
`bdli` | border-left-image:url();
`bdli:n` | border-left-image:none;
`bdci` | border-corner-image:url();
`bdci:n` | border-corner-image:none;
`bdci:c` | border-corner-image:continue;
`bdtli` | border-top-left-image:url();
`bdtli:n` | border-top-left-image:none;
`bdtli:c` | border-top-left-image:continue;
`bdtri` | border-top-right-image:url();
`bdtri:n` | border-top-right-image:none;
`bdtri:c` | border-top-right-image:continue;
`bdbri` | border-bottom-right-image:url();
`bdbri:n` | border-bottom-right-image:none;
`bdbri:c` | border-bottom-right-image:continue;
`bdbli` | border-bottom-left-image:url();
`bdbli:n` | border-bottom-left-image:none;
`bdbli:c` | border-bottom-left-image:continue;
`bdf` | border-fit:repeat;
`bdf:c` | border-fit:clip;
`bdf:r` | border-fit:repeat;
`bdf:sc` | border-fit:scale;
`bdf:st` | border-fit:stretch;
`bdf:ow` | border-fit:overwrite;
`bdf:of` | border-fit:overflow;
`bdf:sp` | border-fit:space;
`bdlen` | border-length:;
`bdlen:a` | border-length:auto;
`bdsp` | border-spacing:;
`bds` | border-style:;
`bds:n` | border-style:none;
`bds:h` | border-style:hidden;
`bds:dt` | border-style:dotted;
`bds:ds` | border-style:dashed;
`bds:s` | border-style:solid;
`bds:db` | border-style:double;
`bds:dtds` | border-style:dot-dash;
`bds:dtdtds` | border-style:dot-dot-dash;
`bds:w` | border-style:wave;
`bds:g` | border-style:groove;
`bds:r` | border-style:ridge;
`bds:i` | border-style:inset;
`bds:o` | border-style:outset;
`bdw` | border-width:;
`bdt, bt` | border-top:;
`bdt+` | border-top:1px solid #000;
`bdt:n` | border-top:none;
`bdtw` | border-top-width:;
`bdts` | border-top-style:;
`bdts:n` | border-top-style:none;
`bdtc` | border-top-color:#000;
`bdtc:t` | border-top-color:transparent;
`bdr, br` | border-right:;
`bdr+` | border-right:1px solid #000;
`bdr:n` | border-right:none;
`bdrw` | border-right-width:;
`bdrst` | border-right-style:;
`bdrst:n` | border-right-style:none;
`bdrc` | border-right-color:#000;
`bdrc:t` | border-right-color:transparent;
`bdb, bb` | border-bottom:;
`bdb+` | border-bottom:1px solid #000;
`bdb:n` | border-bottom:none;
`bdbw` | border-bottom-width:;
`bdbs` | border-bottom-style:;
`bdbs:n` | border-bottom-style:none;
`bdbc` | border-bottom-color:#000;
`bdbc:t` | border-bottom-color:transparent;
`bdl, bl` | border-left:;
`bdl+` | border-left:1px solid #000;
`bdl:n` | border-left:none;
`bdlw` | border-left-width:;
`bdls` | border-left-style:;
`bdls:n` | border-left-style:none;
`bdlc` | border-left-color:#000;
`bdlc:t` | border-left-color:transparent;
`bdrs` | border-radius:;
`bdtrrs` | border-top-right-radius:;
`bdtlrs` | border-top-left-radius:;
`bdbrrs` | border-bottom-right-radius:;
`bdblrs` | border-bottom-left-radius:;

### 生成的内容

:- | :-
:- | :-
`cnt`             | content:'';
`cnt:n, ct:n`     | content:normal;
`cnt:oq, ct:oq`   | content:open-quote;
`cnt:noq, ct:noq` | content:no-open-quote;
`cnt:cq, ct:cq`   | content:close-quote;
`cnt:ncq, ct:ncq` | content:no-close-quote;
`cnt:a, ct:a`     | content:attr();
`cnt:c, ct:c`     | content:counter();
`cnt:cs, ct:cs`   | content:counters();
`ct`              | content:;
`q`               | quotes:;
`q:n`             | quotes:none;
`q:ru`            | quotes:'\00AB' '\00BB' '\201E' '\201C';
`q:en`            | quotes:'\201C' '\201D' '\2018' '\2019';
`coi`             | counter-increment:;
`cor`             | counter-reset:;

### Outline

:- | :-
:- | :-
`ol` | outline:;
`ol:n` | outline:none;
`olo` | outline-offset:;
`olw` | outline-width:;
`olw:tn` | outline-width:thin;
`olw:m` | outline-width:medium;
`olw:tc` | outline-width:thick;
`ols` | outline-style:;
`ols:n` | outline-style:none;
`ols:dt` | outline-style:dotted;
`ols:ds` | outline-style:dashed;
`ols:s` | outline-style:solid;
`ols:db` | outline-style:double;
`ols:g` | outline-style:groove;
`ols:r` | outline-style:ridge;
`ols:i` | outline-style:inset;
`ols:o` | outline-style:outset;
`olc` | outline-color:#000;
`olc:i` | outline-color:invert;

### Print

:- | :-
:- | :-
`pgbb` | page-break-before:;
`pgbb:au` | page-break-before:auto;
`pgbb:al` | page-break-before:always;
`pgbb:l` | page-break-before:left;
`pgbb:r` | page-break-before:right;
`pgbi` | page-break-inside:;
`pgbi:au` | page-break-inside:auto;
`pgbi:av` | page-break-inside:avoid;
`pgba` | page-break-after:;
`pgba:au` | page-break-after:auto;
`pgba:al` | page-break-after:always;
`pgba:l` | page-break-after:left;
`pgba:r` | page-break-after:right;
`orp` | orphans:;
`wid` | widows:;

### Others

:- | :-
:- | :-
`!` | !important

#### @f

```css
@font-face {
    font-family:;
    src:url(|);
}
```

#### @f+

```css
@font-face {
    font-family: 'FontName';
    src: url('FileName.eot');
    src: url('FileName.eot?#iefix') format('embedded-opentype'),
         url('FileName.woff') format('woff'),
         url('FileName.ttf') format('truetype'),
         url('FileName.svg#FontName') format('svg');
    font-style: normal;
    font-weight: normal;
}
```

#### @i, @import

```css
@import url();
```

#### @kf

```css
@-webkit-keyframes identifier {
    from {  }
    to {  }
}
@-o-keyframes identifier {
    from {  }
    to {  }
}
@-moz-keyframes identifier {
    from {  }
    to {  }
}
@keyframes identifier {
    from {  }
    to {  }
}
```

#### @m, @media

```css
@media screen {
    
}
```

### transform

:- | :-
:- | :-
`trf` | transform:;
`trf:r` | transform: rotate(angle);
`trf:rx` | transform: rotateX(angle);
`trf:ry` | transform: rotateY(angle);
`trf:rz` | transform: rotateZ(angle);
`trf:sc` | transform: scale(x, y);
`trf:sc3` | transform: scale3d(x, y, z);
`trf:scx` | transform: scaleX(x);
`trf:scy` | transform: scaleY(y);
`trf:scz` | transform: scaleZ(z);
`trf:skx` | transform: skewX(angle);
`trf:sky` | transform: skewY(angle);
`trf:t` | transform: translate(x, y);
`trf:t3` | transform: translate3d(tx, ty, tz);
`trf:tx` | transform: translateX(x);
`trf:ty` | transform: translateY(y);
`trf:tz` | transform: translateZ(z);
`trfo` | transform-origin:;
`trfs` | transform-style:preserve-3d;

### Other
<!--rehype:wrap-class=col-span-2 row-span-3-->

:- | :-
:- | :-
`ac` | align-content:;
`ac:c` | align-content:center;
`ac:fe` | align-content:flex-end;
`ac:fs` | align-content:flex-start;
`ac:s` | align-content:stretch;
`ac:sa` | align-content:space-around;
`ac:sb` | align-content:space-between;
`ai` | align-items:;
`ai:b` | align-items:baseline;
`ai:c` | align-items:center;
`ai:fe` | align-items:flex-end;
`ai:fs` | align-items:flex-start;
`ai:s` | align-items:stretch;
`ap` | appearance:${none};
`as` | align-self:;
`as:a` | align-self:auto;
`as:b` | align-self:baseline;
`as:c` | align-self:center;
`as:fe` | align-self:flex-end;
`as:fs` | align-self:flex-start;
`as:s` | align-self:stretch;
`bfv` | backface-visibility:;
`bfv:h` | backface-visibility:hidden;
`bfv:v` | backface-visibility:visible;
`bg:ie` | filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='x.png',sizingMethod='crop');
`cm` | /\* ${child} */
`colm` | columns:;
`colmc` | column-count:;
`colmf` | column-fill:;
`colmg` | column-gap:;
`colmr` | column-rule:;
`colmrc` | column-rule-color:;
`colmrs` | column-rule-style:;
`colmrw` | column-rule-width:;
`colms` | column-span:;
`colmw` | column-width:;
`d:ib+` | display: inline-block;<br /> *display: inline;<br />*zoom: 1;
`jc` | justify-content:;
`jc:c` | justify-content:center;
`jc:fe` | justify-content:flex-end;
`jc:fs` | justify-content:flex-start;
`jc:sa` | justify-content:space-around;
`jc:sb` | justify-content:space-between;
`mar` | max-resolution:res;
`mir` | min-resolution:res;
`op+` | opacity: ; filter: alpha(opacity=);
`op:ie` | filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
`op:ms` | -ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
`ord` | order:;
`ori` | orientation:;
`ori:l` | orientation:landscape;
`ori:p` | orientation:portrait;
`tov` | text-overflow:${ellipsis};
`tov:c` | text-overflow:clip;
`tov:e` | text-overflow:ellipsis;
`trs` | transition:prop time;
`trsde` | transition-delay:time;
`trsdu` | transition-duration:time;
`trsp` | transition-property:prop;
`trstf` | transition-timing-function:tfunc;
`us` | user-select:${none};
`wfsm` | -webkit-font-smoothing:${antialiased};
`wfsm:a` | -webkit-font-smoothing:antialiased;
`wfsm:n` | -webkit-font-smoothing:none;
`wfsm:s, wfsm:sa` | -webkit-font-smoothing:subpixel-antialiased;
`wm` | writing-mode:lr-tb;
`wm:btl` | writing-mode:bt-lr;
`wm:btr` | writing-mode:bt-rl;
`wm:lrb` | writing-mode:lr-bt;
`wm:lrt` | writing-mode:lr-tb;
`wm:rlb` | writing-mode:rl-bt;
`wm:rlt` | writing-mode:rl-tb;
`wm:tbl` | writing-mode:tb-lr;
`wm:tbr` | writing-mode:tb-rl;
<!--rehype:className=wrap-text -->

### animation

:- | :-
:- | :-
`anim` | animation:;
`anim-` | animation:name duration timing-function delay iteration-count direction fill-mode;
`animdel` | animation-delay:time;
`animdir` | animation-direction:normal;
`animdir:a` | animation-direction:alternate;
`animdir:ar` | animation-direction:alternate-reverse;
`animdir:n` | animation-direction:normal;
`animdir:r` | animation-direction:reverse;
`animdur` | animation-duration:0s;
`animfm` | animation-fill-mode:both;
`animfm:b` | animation-fill-mode:backwards;
`animfm:bt, animfm:bh` | animation-fill-mode:both;
`animfm:f` | animation-fill-mode:forwards;
`animic` | animation-iteration-count:1;
`animic:i` | animation-iteration-count:infinite;
`animn` | animation-name:none;
`animps` | animation-play-state:running;
`animps:p` | animation-play-state:paused;
`animps:r` | animation-play-state:running;
`animtf` | animation-timing-function:linear;
`animtf:cb` | animation-timing-function:cubic-bezier(0.1, 0.7, 1.0, 0.1);
`animtf:e` | animation-timing-function:ease;
`animtf:ei` | animation-timing-function:ease-in;
`animtf:eio` | animation-timing-function:ease-in-out;
`animtf:eo` | animation-timing-function:ease-out;
`animtf:l` | animation-timing-function:linear;

### flex

:- | :-
:- | :-
`fx` | flex:;
`fxb` | flex-basis:;
`fxd` | flex-direction:;
`fxd:c` | flex-direction:column;
`fxd:cr` | flex-direction:column-reverse;
`fxd:r` | flex-direction:row;
`fxd:rr` | flex-direction:row-reverse;
`fxf` | flex-flow:;
`fxg` | flex-grow:;
`fxsh` | flex-shrink:;
`fxw` | flex-wrap: ;
`fxw:n` | flex-wrap:nowrap;
`fxw:w` | flex-wrap:wrap;
`fxw:wr` | flex-wrap:wrap-reverse;

XSL
----

### XSL

tmatch, tm

```xml
<xsl:template match="" mode=""></xsl:template>
```
<!--rehype:className=wrap-text -->

tname, tn

```xml
<xsl:template name=""></xsl:template>
```

call

```xml
<xsl:call-template name="" />
```

ap

```xml
<xsl:apply-templates select="" mode="" />
```

api

```xml
<xsl:apply-imports />
```

imp

```xml
<xsl:import href="" />
```

inc

```xml
<xsl:include href="" />
```

ch

```xml
<xsl:choose></xsl:choose>
```

xsl:when, wh

```xml
<xsl:when test=""></xsl:when>
```

ot

```xml
<xsl:otherwise></xsl:otherwise>
```

if

```xml
<xsl:if test=""></xsl:if>
```

par

```xml
<xsl:param name=""></xsl:param>
```

pare

```xml
<xsl:param name="" select="" />
```

var

```xml
<xsl:variable name=""></xsl:variable>
```

### XSL

vare

```xml
<xsl:variable name="" select="" />
```

wp

```xml
<xsl:with-param name="" select="" />
```

key

```xml
<xsl:key name="" match="" use="" />
```

elem

```xml
<xsl:element name=""></xsl:element>
```

attr

```xml
<xsl:attribute name=""></xsl:attribute>
```

attrs

```xml
<xsl:attribute-set name=""></xsl:attribute-set>
```
<!--rehype:className=wrap-text -->

cp

```xml
<xsl:copy select="" />
```

co

```xml
<xsl:copy-of select="" />
```

val

```xml
<xsl:value-of select="" />
```

each, for

```xml
<xsl:for-each select=""></xsl:for-each>
```

tex

```xml
<xsl:text></xsl:text>
```

com

```xml
<xsl:comment></xsl:comment>
```

msg

```xml
<xsl:message terminate="no"></xsl:message>
```

fall

```xml
<xsl:fallback></xsl:fallback>
```

### XSL

num

```xml
<xsl:number value="" />
```

nam

```xml
<namespace-alias stylesheet-prefix="" result-prefix="" />
```
<!--rehype:className=wrap-text -->

pres

```xml
<xsl:preserve-space elements="" />
```

strip

```xml
<xsl:strip-space elements="" />
```

proc

```xml
<xsl:processing-instruction name=""></xsl:processing-instruction>
```
<!--rehype:className=wrap-text -->

sort

```xml
<xsl:sort select="" order="" />
```

choose+ A别名 xsl:choose>xsl:when+xsl:otherwise

```xml
<xsl:choose>
    <xsl:when test=""></xsl:when>
    <xsl:otherwise></xsl:otherwise>
</xsl:choose>
```

xsl 别名 !!!+xsl:stylesheet[version=1.0 xmlns:xsl=<http://www.w3.org/1999/XSL/Transform>]>{ | }

```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"></xsl:stylesheet>
```
<!--rehype:className=wrap-text -->

!!!

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

另见
--------

- [Emmet Cheat sheet](https://docs.emmet.io/cheat-sheet/) _(docs.emmet.io)_
