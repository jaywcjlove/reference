Sass
===

[![NPM version](https://img.shields.io/npm/v/sass.svg?style=flat)](https://www.npmjs.com/package/sass)
[![Downloads](https://img.shields.io/npm/dm/sass.svg?style=flat)](https://www.npmjs.com/package/sass)
[![Repo Dependents](https://badgen.net/github/dependents-repo/sass/dart-sass)](https://github.com/sass/dart-sass/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/sass/dart-sass)

这是一份快速参考备忘单，列出了 [SASS](https://sass-lang.com) 最有用的功能
<!--rehype:style=padding-top: 12px;-->

Sass 基础
--------

### 介绍
<!--rehype:wrap-class=row-span-2-->

- [Sass 官方文档](https://sass-lang.com/documentation) _(sass-lang.com)_
- [Sass 中文文档](https://www.sass.hk/docs/) _(sass.hk)_

Sass 是一种 CSS 的预编译语言

```bash
$ npm install -g sass
```

在 Node.js 环境中使用 Sass

```bash
$ sass source/index.scss build/index.css
$ sass --watch input.scss output.css
$ sass --watch app/sass:public/css
```

### 变量

```scss
$defaultLinkColor: #46EAC2;
a {
  color: $defaultLinkColor;
}
```

### 字符串插值

```scss
$wk: -webkit-;
.rounded-box {
  #{$wk}border-radius: 4px;
}
```

### 注释

```scss
/*
 这是多行注释
 块注释
 块注释
*/
// 这是一条单行注释
```

### Extend

```scss
.button {
  ···
}
.push-button {
  @extend .button;
}
```

### 嵌套(Nesting)
<!--rehype:wrap-class=row-span-2-->

```scss
nav {
  ul {
    padding: 0;
    list-style: none;
  }
  li { display: inline-block; }
  a {
    display: block;
  }
}
```

编译 css 为：

```scss
nav ul {
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
}
```

### 模块（片段）
<!--rehype:wrap-class=row-span-2-->

```scss
// _base.scss
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;
```

注意以下划线开头的 Sass 文件

```scss
// styles.scss
@use 'base';

.inverse {
  background-color: base.$primary-color;
  color: white;
}
```

编译 css 为：

```css
.inverse {
  background-color: #333;
  color: white;
}
```

### 混合(Mixins)

```scss
@mixin heading-font {
    font-family: sans-serif;
    font-weight: bold;
}
h1 {
    @include heading-font;
}
```

查看: [混合(Mixins)](#sass-混合mixins)

### @import

```scss
@import './other_sass_file';
@import '/code', 'lists';
// 纯 CSS @imports
@import "theme.css";
@import url(theme);
```

`.sass` 或 `.sass` 扩展名是可选的。

Sass 混合(Mixins)
------

### 参数

```scss
@mixin font-size($n) {
  font-size: $n * 1.2em;
}
```

----

```scss
body {
  @include font-size(2);
}
```

### 默认值

```scss
@mixin pad($n: 10px) {
    padding: $n;
}
```

----

```scss
body {
    @include pad(15px);
}
```

### 默认变量

```scss
$default-padding: 10px;
@mixin pad($n: $default-padding) {
  padding: $n;
}
body {
  @include pad(15px);
}
```

Sass 颜色函数
--------
<!--rehype:body-class=cols-2-->

### rgba

```scss
rgb(100, 120, 140)
rgba(100, 120, 140, .5)
rgba($color, .5)
```

### Mixing

```scss
mix($a, $b, 10%)   // 10% a, 90% b
```

### 修改 HSLA

```scss
darken($color, 5%)
lighten($color, 5%)
```

```scss
saturate($color, 5%)
desaturate($color, 5%)
grayscale($color)
```

```scss
adjust-hue($color, 15deg)
complement($color)    // like adjust-hue(_, 180deg)
invert($color)
```

```scss
fade-in($color, .5)   // aka opacify()
fade-out($color, .5)  // aka transparentize()
rgba($color, .5)      // sets alpha to .5
```

### 获取值
<!--rehype:wrap-class=row-span-2-->

#### HSLA

```scss
hue($color)         // 0deg..360deg
saturation($color)  // 0%..100%
lightness($color)   // 0%..100%
alpha($color)       // 0..1 (aka opacity())
```

#### RGB

```scss
red($color)         // 0..255
green($color)
blue($color)
```

----

:- | :-
:- | :-
`color.red()` | 用于获取颜色的红色通道
`color.green()` | 用于获得颜色的绿色通道
`color.blue()` | 用于获取颜色的蓝色通道
`color.hue()` | 以获得颜色的色调
`color.saturation()` | 用于获得颜色的饱和度
`color.lightness()` | 以获得颜色的亮度

另见: [hue()](http://sass-lang.com/documentation/Sass/Script/Functions.html#hue-instance_method), [red()](http://sass-lang.com/documentation/Sass/Script/Functions.html#red-instance_method)

### Sass 内置了对颜色值的支持

```scss
@debug rgb(204, 102, 153);  // #c69
@debug rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
@debug hsl(228, 7%, 86%);        // #dadbdf
@debug hsla(20, 20%, 85%, 0.7);  // rgb(225, 215, 210, 0.7)
```

### 调整

```scss
// 固定金额变动
adjust-color($color, $blue: 5)
adjust-color($color, $lightness: -30%) // darken(_, 30%)
adjust-color($color, $alpha: -0.4)     // fade-out(_, .4)
adjust-color($color, $hue: 30deg)      // adjust-hue(_, 15deg)
// 通过百分比变化
scale-color($color, $lightness: 50%)
// 完全改变一个属性
change-color($color, $hue: 180deg)
change-color($color, $blue: 250)
```

支持的: `$red`, `$green`, `$blue`, `$hue`, `$saturation`, `$lightness`, `$alpha`

Sass 其他函数
--------

### 字符串
<!--rehype:wrap-class=row-span-2-->

```scss
unquote('hello')
quote(bold); // "bold"
```

```scss
to-upper-case(hello)
to-lower-case(hello)
```

----

```scss
str-length(hello world)
// "ello" - 它是从 1 开始的，而不是从 0 开始的
str-slice(hello, 2, 5)
str-insert("abcd", "X", 1) // "Xabcd"
```

### Numbers
<!--rehype:wrap-class=row-span-2-->

```scss
floor(4.2)  // 4
ceil(4.2)   // 5
round(4.2)  // 4
abs(-10px) // 10px
```

----

```scss
min(1px, 4px)  // 1px
$widths: 50px, 30px, 100px
@debug math.min($widths...)  // 30px
```

----

```scss
percentage(.5)   // 50%
random(3)        // 0..3
```

### Units

```scss
unit(3em)        // 'em'
unitless(100px)  // false
```

### Units

```scss
unit(3em)        // 'em'
unitless(100px)  // false
```

### Misc

```scss
// 检查 $red
variable-exists(red)
// 检查@mixin red-text
mixin-exists(red-text)
function-exists(redify)
```

----

```scss
global-variable-exists(red)
```

----

```scss
// .menu li a
selector-append('.menu', 'li', 'a')
// .menu:hover li
selector-nest('.menu', '&:hover li')
selector-extend(...)
selector-parse(...)
selector-replace(...)
selector-unify(...)
```

Sass 功能检查
--------
<!--rehype:body-class=cols-2-->

### 功能检查

```scss
meta.feature-exists($feature)
feature-exists($feature) //=> boolean
```

----

```scss
@mixin debug-content-exists {
  @debug meta.content-exists();
  @content;
}

@include debug-content-exists; // false
@include debug-content-exists { // true
  // Content!
}
```

### 功能

:- | :-
:- | :-
`global-variable-shadowing` [#](https://sass-lang.com/documentation/modules/meta#feature-exists) | 这意味着局部变量将隐藏全局变量，除非它具有 `!global` 标志
`extend-selector-pseudoclass` [#](https://sass-lang.com/documentation/modules/meta#feature-exists) | 这意味着 `@extend` 规则将影响嵌套在伪类中的选择器，如 `:not()`
`units-level-3` [#](https://sass-lang.com/documentation/modules/meta#feature-exists) | 这意味着单位算术支持在 CSS 值和单位级别 3 中定义的单位
`at-error` [#](https://sass-lang.com/documentation/modules/meta#feature-exists) | 这意味着支持 `@error` 规则
`custom-property` [#](https://sass-lang.com/documentation/modules/meta#feature-exists) | 这意味着自定义属性声明值不支持除插值之外的任何表达式
<!--rehype:className=style-list-arrow-->

Sass 循环
--------

### For 循环

```scss
$base-color: #036;

@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

编译 css 为：

```css
ul:nth-child(3n + 1) {
  background-color: #004080;
}

ul:nth-child(3n + 2) {
  background-color: #004d99;
}

ul:nth-child(3n + 3) {
  background-color: #0059b3;
}
```

### Each 循环（简单）

```scss
$sizes: 40px, 50px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
  }
}
```

编译 css 为：

```css
.icon-40px {
  font-size: 40px;
  height: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
}
```

### Each 循环（嵌套）

```scss
$icons: ("eye": "\f112", "start": "\f12e");

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}
```

编译 css 为：

```css
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

### While 循环
<!--rehype:wrap-class=col-span-2-->

```scss
@use "sass:math";

/// 将 `$value` 除以 `$ratio` 直到它低于 `$base`
@function scale-below($value, $base, $ratio: 1.618) {
  @while $value > $base {
    $value: math.div($value, $ratio);
  }
  @return $value;
}

$normal-font-size: 16px;
sup {
  font-size: scale-below(20px, 16px);
}
```

编译 css 为：

```css
sup {
  font-size: 12.36094px;
}
```

Sass 其它功能
--------

### 条件句
<!--rehype:wrap-class=row-span-2-->

```scss
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```

编译 css 为：

```css
.square-av {
  width: 100px;
  height: 100px;
}

.circle-av {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
```

### 插值

```scss
.#{$klass} { ... }      // Class
call($function-name)    // Functions
@media #{$tablet}
font: #{$size}/#{$line-height}
url("#{$background}.jpg")
```

### 列表

```scss
$list: (a b c);
nth($list, 1)  // starts with 1
length($list)
@each $item in $list { ... }
```

### Maps
<!--rehype:wrap-class=col-span-2-->

```scss
$map: (key1: value1, key2: value2, key3: value3);
map-get($map, key1)
```

另见
----

- [Sass 官方文档](https://sass-lang.com/documentation) _(sass-lang.com)_
- [Sass 中文文档](https://www.sass.hk/docs/) _(sass.hk)_
