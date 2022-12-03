Stylus 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/stylus.svg?style=flat)](https://npmjs.org/package/stylus)
[![Downloads](https://img.shields.io/npm/dm/stylus.svg?style=flat)](https://www.npmjs.com/package/stylus)
[![Repo Dependents](https://badgen.net/github/dependents-repo/stylus/stylus)](https://github.com/stylus/stylus/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/stylus/stylus)

本备忘单旨在快速理解 [stylus](https://github.com/stylus/stylus) 所涉及的主要概念，显示了它的常用方法使用清单
<!--rehype:style=padding-top: 12px;-->

入门
---

### 介绍
<!--rehype:wrap-class=row-span-2-->

为 Node.js 构建的富有表现力、健壮、功能丰富的 [CSS](./css.md) 语言

- [CSS 备忘清单](./css.md) _(jaywcjlove.github.io)_
- [在线编译预览](https://stylus-lang.com/try.html) _(stylus-lang.com)_

```bash
# npm
$ npm install stylus -g
# pnpm
$ pnpm add -g stylus
```

在 Node.js 环境中使用 `stylus`

```bash
$ stylus one.styl two.styl
# stylus 从标准输入读取并输出到标准输出
$ stylus --compress < some.styl > some.css
# 将 css 目录中的文件编译输出到 `public/css`
$ stylus css --out public/css
```

转换 CSS，输出 `*.styl` 文件

```
$ stylus --css < test.css > test.styl
$ stylus --css test.css /tmp/out.styl
```

### 支持 CSS 嵌套语法

```stylus
.box {
  color: blue;
  .button {
    color: red;
  }
}
```

Stylus 是一个 CSS 预处理器。另见: [stylus-lang.com](http://stylus-lang.com/)

### 支持类 python 缩进语法

```stylus
.box
  color: blue
  .button
    color: red
```

也有效！冒号也是可选的。这通常用于 Stylus 文档的语法

### 混合 Mixins

```stylus
caps-type()
  letter-spacing: 0.05em
```

----

```stylus {2}
h5
  caps-type()
```

编译 css 为：

```css
h5 {
  letter-spacing: 0.05em;
}
```

<!-- markdownlint-disable MD051 -->
另见：下面[Mixins](#混合-Mixins)

### 变量 Variables

```stylus
royal-blue = #36a
```

----

```stylus
div
  color: royal-blue
```

标识符（变量名、函数等）也可以包括 `$` 字符

```stylus
$font-size = 14px
body {
  font: $font-size sans-serif;
}
```

另见：[变量 Variables](https://stylus-lang.com/docs/variables.html)

混合 Mixins
------

### 没有参数

```stylus {1}
red-border()
  border: solid 2px red
```

----

```stylus {2}
div
  red-border()
```

另见: [Mixins](http://stylus-lang.com/docs/mixins.html)

### 有参数

```stylus {1}
border-radius(n)
  -webkit-border-radius: n
  border-radius: n
```

----

```stylus {2,3}
div
  border-radius: 2px
  border-radius(2px)
```

Mixins can be applied in two different ways.

### 参数默认值

```stylus {1}
border-radius(n = 2px)
  -webkit-border-radius: n
```

### 块混合

```stylus {3}
mobile()
  @media (max-width: 480px)
    {block}
```

----

```stylus {1}
+mobile()
  width: 10px
```

另见: [块混合](http://stylus-lang.com/docs/mixins.html#block-mixins)

### Rest 参数

```stylus {1}
shadow(offset-x, args...)
  box-shadow: offset-x args
  margin-top: offset-x
```

----

```stylus
#login
  shadow: 1px 2px 5px #eee
```

另见: [Rest 参数](http://stylus-lang.com/docs/vargs.html)

函数 Functions
---------

### 函数 Functions

```stylus {1}
add(a, b)
  a + b
```

----

```stylus {2}
body
  padding: add(10px, 5)
```

另见: [Functions](http://stylus-lang.com/docs/functions.html)

### 参数默认值

```stylus {1}
add(a, b = 2)
  a + b
```

另见: [参数默认值](http://stylus-lang.com/docs/functions.html#argument-defaults)

### 命名参数

```stylus
shadow(x, y)
  x y (y * 1.5) #000
```

----

```stylus {2}
.button
  box-shadow: shadow(x: 2, y: 4)
```

另见: [命名参数](http://stylus-lang.com/docs/functions.html#named-parameters)

### 多个返回值

```stylus {2}
sizes()
  8px 16px
```

----

```stylus
sizes()[0]  // → 8px
sizes()[1]  // → 16px
```

另见: [多个返回值](http://stylus-lang.com/docs/functions.html#multiple-return-values)

### arguments

```stylus
sum()
  n = 0
  for num in arguments
    n = n + num
```

----

```stylus
sum(1,2,3,4,5) // => 15
```

参数 local 可用于所有函数体，并包含所有传递的参数

### hash 示例

```stylus
get(hash, key)
  return pair[1] if pair[0] == key for pair in hash

hash = (one 1) (two 2) (three 3)

get(hash, two)
// => 2
```
<!--rehype:className=wrap-text -->

值 Values
------

### 条件赋值

```stylus {2}
royal-blue = #36a
royal-blue ?= #89f
```

----

```stylus
div
  color: royal-blue  // #36a
```

`?=` 只会在之前未设置的情况下设置变量

另见: [条件赋值](https://stylus-lang.com/docs/operators.html#conditional-assignment--)

### 属性查找

```stylus {2,3}
.logo
  width: w = 150
  margin-left: -(w / 2)
  // or
  height: 80px
  margin-top: -(@height / 2)
```

另见: [属性查找](https://stylus-lang.com/docs/variables.html#property-lookup)

### 插值

```stylus
-{prefix}-border-radius: 2px
```

另见: [Interpolation](https://stylus-lang.com/docs/interpolation.html)

### Color operators

```stylus
#888 + 50%    // → #c3c3c3 (lighten)
#888 - 50%    // → #444 (darken)
#f00 + 50deg  // → #ffd500 (hue)
```

### Casting

```stylus
n = 5px
```

----

```stylus {1,2}
foo: (n)em
foo: (n * 5)%
```

### Lookup

```stylus {3}
light-blue = #3bd
name = 'blue'
lookup('light-' + name)
```

另见: [lookup](https://stylus-lang.com/docs/bifs.html#lookupname)

高级功能
-----------------

### 有条件的
<!--rehype:wrap-class=row-span-2-->

```stylus
if color == blue
  display: block
else if true and true
  display: inline
else if 'hey' is not 'bye'
  display: flex
else
  display: none
```

别名:

:- | :-
:- | :-
| `==` | `is` |
| `!=` | `is not` |
| `!=` | `isnt` |

另见: [Conditionals](https://stylus-lang.com/docs/functions.html#conditionals)

### 对于循环

```stylus {5}
font-size-1 = 10px
font-size-2 = 20px
font-size-3 = 30px
for i in 1..3
  .text-{i}
    font-size: lookup('font-size-' + i)
```

### 定义检查

```stylus {1}
if ohnoes is defined
  color: blue
```

另见: [is defined](https://stylus-lang.com/docs/operators.html#variable-definition-is-defined)

### False 值

```stylus
0
null
false
''
```

### 类型检查

```stylus
if val is a 'string'
if val is a 'ident'
if #fff is a 'rgba'    // → true
```

另见: [Instance check](https://stylus-lang.com/docs/operators.html#instance-check-is-a)

内置函数
------------------

### 颜色函数
<!--rehype:wrap-class=row-span-4-->

```stylus
alpha(#fff)   //→ 1
alpha(rgba(0, 0, 0, 0.2))   //→ 0.2
```

----

```stylus
dark(black)  //→ true
light(black) //→ false
```

----

```stylus
hue(#0a0)         //→ 50deg
saturation(#f00)  //→ 100%
lightness(#f00)   //→ 50%
luminosity(#f00)  //→ 0.2126
```

----

```stylus
hue(#0a0, 0deg)
saturation(#f00, 50%)
lightness(#f00)
```

----

```stylus
lighten(color, 10%)
darken(color, 10%)
saturate(color, 10%)
desaturate(color, 10%)
invert(color)
```

----

```stylus
tint(color, 50%)  // mix with white
shade(color, 50%) // mix with black
```

----

```stylus
unquote(string)
```

另见: [Built-in functions](http://stylus-lang.com/docs/bifs.html)

### 图片尺寸

返回给定图像的宽度和高度

```stylus
width:  image-size('tux.png')[0]
height: image-size('tux.png')[1]
```

另见: [image-size](http://stylus-lang.com/docs/bifs.html#image-sizepath)

### 缓存 Caching
<!--rehype:wrap-class=row-span-2-->

```stylus
size($width)
  +cache('w' + $width)
    width: $width
.a { size: 10px }
.b { size: 10px }
```

----

```stylus
// 输出: .a, b { width: 10px }
```

在第一次调用时将其内容应用于给定的选择器，但会在第二次调用时使用相同的参数 `@extend` 第一次调用的选择器。另见: [cache](http://stylus-lang.com/docs/bifs.html#cachekeys)

### Embed URL

```
background: embedurl('logo.png')
// → background: url("data:image/png;base64,…")
```
<!--rehype:className=wrap-text -->

另见: [embedurl](http://stylus-lang.com/docs/bifs.html#embedurlpath-encoding)

### 添加属性

```stylus
gradient(color)
  add-property('background-image', linear-gradient(top, color, darken(color, 20%)))
  color
```

----

```stylus
body
  background: gradient(red)
```

另见: [add-property](http://stylus-lang.com/docs/bifs.html#add-propertyname-expr)

### sprintf

```stylus
'-webkit-gradient(%s, %s, %s)' % (linear (0 0) (0 100%))
// → -webkit-gradient(linear, 0 0, 0 100%)
```
<!--rehype:className=wrap-text -->

----

```stylus
s("rgba(0, 0, 0, %s)", 0.3)
```

另见: [s](http://stylus-lang.com/docs/bifs.html#sfmt-)

另见
---

- [CSS 备忘清单](./css.md) _(jaywcjlove.github.io)_
- [在线编译预览](https://stylus-lang.com/try.html) _(stylus-lang.com)_
- [Less.js 备忘清单](./lessjs.md) _(jaywcjlove.github.io)_
