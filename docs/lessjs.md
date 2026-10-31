Less 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/less.svg?style=flat)](https://npmjs.org/package/less)
[![Downloads](https://img.shields.io/npm/dm/less.svg?style=flat)](https://www.npmjs.com/package/less)
[![Repo Dependents](https://badgen.net/github/dependents-repo/nestjs/nest)](https://github.com/less/less.js/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/less/less.js)

本备忘单旨在快速理解 [Less](https://github.com/less/less.js) 所涉及的主要概念，显示了它的常用方法使用清单
<!--rehype:style=padding-top: 12px;-->

入门
---

### 介绍

Less(Leaner Style Sheets 的缩写)是一门向后兼容的 [`CSS`](./css.md) 扩展语言

- [CSS 备忘清单](./css.md) _(jaywcjlove.github.io)_
- [Less.js 官方文档](https://lesscss.org/) _(lesscss.org)_
- [在线编译预览](http://lesscss.org/less-preview/#eyJjb2RlIjoiI2xpYigpIHtcbiAgICAuY29sb3JzKCkge1xuICAgICAgQHByaW1hcnk6IGJsdWU7XG4gICAgICBAc2Vjb25kYXJ5OiBncmVlbjtcbiAgICB9XG4gICAgLnJ1bGVzKEBzaXplKSB7XG4gICAgICBib3JkZXI6IEBzaXplIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLmJveCB3aGVuICgjbGliLmNvbG9yc1tAcHJpbWFyeV0gPSBibHVlKSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogKCR3aWR0aCAvIDIpO1xuICB9XG4gIFxuICAuYmFyOmV4dGVuZCguYm94KSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAjbGliLnJ1bGVzKDFweCk7XG4gICAgfVxuICB9IiwiYWN0aXZlVmVyc2lvbiI6IjQueCJ9) _(lesscss.org)_

在 Node.js 环境中使用 `Less`

```bash
$ npm install -g less
$ lessc styles.less styles.css
```

在浏览器环境中使用 `Less`

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="https://cdn.jsdelivr.net/npm/less@4" ></script>
```
<!--rehype:className=wrap-text -->

### 变量(Variables)

```less
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

编译 css 为：

```css
#header {
  width: 10px;
  height: 20px;
}
```

另见: [变量的更多信息](https://lesscss.org/features/#variables-feature)

### 混合(Mixins)

```less {1,8,13}
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```

另见: [混合(Mixin)的更多信息](https://lesscss.org/features/#mixins-feature)

### 嵌套(Nesting)

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

👇👇 更改为 less 的写法 ✅ 👇👇

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

### 父选择器 &

```less
.button {
  color: blue;
  &-ok {
    background-image: url("ok.png");
  }
  &:hover {
    color: green;
  }
}
```

编译 css 为：

```css
.button {
  color: blue;
}
.button-ok {
  background-image: url("ok.png");
}
.button:hover {
  color: green;
}
```

### @规则嵌套和冒泡
<!--rehype:wrap-class=row-span-2-->

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/icon2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

编译 css 为：

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/icon2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```
<!--rehype:className=wrap-text -->

### 运算(Operations)
<!--rehype:wrap-class=row-span-2-->

算术运算符 `+`、`-`、`*`、`/` 对任何数字、颜色或变量进行运算

```less
@conversion-1: 5cm + 10mm; // 结果是 6cm
@conversion-2: 2 - 3cm - 5mm; // 结果 -1.5cm
@incompatible-units: 2 + 5px - 3cm;
// 结果是 4px
@base: 5%;
@filler: @base * 2; // 结果是 10%
@other: @base + @filler; // 结果是 15%

@base: 2cm * 3mm; // 结果是 6cm
@color: (#224488 / 2); // 结果是 #112244
background-color: #112244 + #111;
// 结果是 #223355
@color: #222 / 2;
// 结果是 `#222 / 2`, not #111
background-color: (#FFFFFF / 16);
// 结果是 #101010
```

#### calc() 特例

为了与 `CSS` 保持兼容，`calc()` 并不对数学表达式进行计算，但是在嵌套函数中会计算变量和数学公式的值

```less
@var: 50vh/2;
width: calc(50% + (@var - 20px));
// 结果是 calc(50% + (25vh - 20px))
```

### 转义(Escaping)
<!--rehype:wrap-class=row-span-2-->

```less
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

编译 css 为：

```css
@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```

从 Less 3.5 开始，可以简写为

```less
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
```

在 Less 3.5+ 版本中，许多以前需要“引号转义”的情况就不再需要了

### 函数(Functions)

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // 返回 `50%`
  color: saturate(@base, 5%);
  background-color: 
      spin(lighten(@base, 25%), 8);
}
```

Less 内置了多种函数用于转换颜色、处理字符串、算术运算等

### 命名空间和访问符

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white;
    }
  }
  .tab { ... }
  .citation { ... }
}
```

把 `.button` 类混合到 `#header a` 中，我们可以这样做

```less
#header a {
  color: orange;
  #bundle.button();
  // 还可以书写为 #bundle > .button 形式
}
```

### 映射(Maps)

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

输出符合预期(css)：

```css
.button {
  color: blue;
  border: 1px solid green;
}
```

另见：[映射(Maps)](https://lesscss.org/features/#maps-feature)

### 作用域（Scope）

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

和上面实例代码相同

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```

另见：[懒加载](https://lesscss.org/features/#variables-feature-lazy-loading)

### 注释（Comments）

```less
/* 一个块注释
 * style comment! */
@var: red;

// 这一行被注释掉了！
@var: white;
```

块注释和行注释都可以使用

### 导入（Importing）

```less
@import "library"; // library.less
@import "typo.css";
```

另见：[导入(Importing)的知识](https://lesscss.org/features/#imports-feature)

### Extend
<!--rehype:wrap-class=row-span-2-->

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```

编译 css 为：

```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

函数
---

### 逻辑函数 if & boolean

```less
@bg: black;
@bg-light: boolean(luma(@bg) > 50%);

div {
  background: @bg; 
  color: if(@bg-light, black, white);
}
```

编译 css 为：

```css
div {
  background: black;
  color: white;
}
```

### 字符串函数
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`escape` | 将 [URL 编码](http://en.wikipedia.org/wiki/Percent-encoding)应用于输入字符串中的特殊字符
`e` | 字符串转义
`%` | 第一个参数是带有占位符的字符串

```less
escape('a=1') // 输出 a%3D1

@mscode: "ms:alwaysHasItsOwnSyntax.For.Stuff()" 
filter: e(@mscode);
// 输出 filter: ms:alwaysHasItsOwnSyntax.For.Stuff();

format-a-d: %("repetitions: %a file: %d", 1 + 2, "directory/file.less");
// 输出 format-a-d: "repetitions: 3 file: "directory/file.less"";
```

### 替换字符串 replace
<!--rehype:wrap-class=col-span-2-->

```less
replace("Hello, Mars?", "Mars\?", "Earth!");
replace("One + one = 4", "one", "2", "gi");
replace('This is a string.', "(string)\.$", "new $1.");
replace(~"bar-1", '1', '2');
```

预期输出

```
"Hello, Earth!";
"2 + 2 = 4";
'This is a new string.';
bar-2;
```

### length

```less
@list: "banana", "tomato", "potato", "peach";
n: length(@list);
```

预期输出

```css
n: 4;
```

返回值列表中的元素数

### extract

```less
@list: apple, pear, coconut, orange;
value: extract(@list, 3);
```

预期输出

```css
value: coconut;
```

返回列表中指定位置的值

### range

```less
value: range(4);
// 输出 value: 1 2 3 4;
value: range(10px, 30px, 10);
// 输出 value: 10px 20px 30px;
```

生成跨越一系列值的列表

### each
<!--rehype:wrap-class=row-span-3-->

```less
@selectors: blue, green, red;

each(@selectors, {
  .sel-@{value} {
    a: b;
  }
});
```

预期输出

```css
.sel-blue {
  a: b;
}
.sel-green {
  a: b;
}
.sel-red {
  a: b;
}
```

每个列表成员的每个规则集都绑定到 `@value`、`@key` 和 `@index` 变量

```less
@set: {
  one: blue;
  two: green;
  three: red;
}
.set {
  each(@set, {
    @{key}-@{index}: @value;
  });
}
```

预期输出

```css
.set {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```

将规则集的评估绑定到列表的每个成员

### each()

```less
set-2() {
  one: blue;
  two: green;
  three: red;
}
.set-2 {
  // 调用 mixin 并迭代每个规则
  each(.set-2(), .(@v, @k, @i) {
    @{k}-@{i}: @v;
  });
}
```

预期输出

```css
.set-2 {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```

### 使用 `range` 和 `each` 创建一个 `for` 循环

```less
each(range(4), {
  .col-@{value} {
    height: (@value * 50px);
  }
});
```

预期输出

```css
.col-1 {
  height: 50px;
}
.col-2 {
  height: 100px;
}
.col-3 {
  height: 150px;
}
.col-4 {
  height: 200px;
}
```

### 数学函数
<!--rehype:wrap-class=row-span-3-->

:- | :-
:- | :-
`ceil(2.4)` _(输出 3)_ | 向上舍入到下一个最大整数 [#](https://lesscss.org/functions/#math-functions-ceil)
`floor(2.6)` _(输出 2)_ | 向下舍入到下一个最小整数 [#](https://lesscss.org/functions/#math-functions-floor)
`percentage(0.5)` _(输出 50%)_ | 将浮点数转换为百分比字符串 [#](https://lesscss.org/functions/#math-functions-floor)
`round(1.67)` _(输出 2)_ | 应用舍入 [#](https://lesscss.org/functions/#math-functions-round)
`sqrt(25cm)` _(输出 5cm)_ | 计算数字的平方根。保持单位不变 [#](https://lesscss.org/functions/#math-functions-sqrt)
`abs(25cm)` _(输出 25cm)_ | 计算数字的绝对值。 保持单位不变 [#](https://lesscss.org/functions/#math-functions-abs)
`sin(1deg)` _(输出 0.01745240643728351)_ | 计算正弦函数 [#](https://lesscss.org/functions/#math-functions-sin)
`asin(-0.8414709848078965)` _(输出 -1rad)_ | 计算反正弦（正弦的倒数）函数 [#](https://lesscss.org/functions/#math-functions-asin)
`cos(1deg)` _(输出 0.9998476951563913)_ | 计算余弦函数 [#](https://lesscss.org/functions/#math-functions-cos)
`acos(0.5403023058681398)` _(输出 1rad)_ | 计算反余弦（余弦的倒数）函数 [#](https://lesscss.org/functions/#math-functions-acos)
`tan(1deg)` _(输出 0.017455064928217585)_ | 计算正切函数 [#](https://lesscss.org/functions/#math-functions-tan)
`atan(-1.5574077246549023)` _(输出 -1rad)_ | 计算反正切（正切的倒数）函数 [#](https://lesscss.org/functions/#math-functions-atan)
`pi()` _(输出 3.141592653589793)_ | π (pi) [#](https://lesscss.org/functions/#math-functions-pi)
`pow(0cm, 0px)` _(输出 1cm)_ | 返回第一个参数的第二个参数次幂的值 [#](https://lesscss.org/functions/#math-functions-pow)
`mod(11cm, 6px)` _(输出 5cm)_ | 返回第一个参数模数第二个参数的值 [#](https://lesscss.org/functions/#math-functions-mod)
`min(5, 10)` _(输出 5)_ | 返回一个或多个值中的最小值 [#](https://lesscss.org/functions/#math-functions-min)
`max(5, 10)` _(输出 10)_ | 返回一个或多个值中的最大值 [#](https://lesscss.org/functions/#math-functions-min)
<!--rehype:className=style-list-arrow-->

### 颜色定义函数

:- | :-
:- | :-
`rgb`| [#](https://lesscss.org/functions/#color-definition-rgb)
`rgba`| [#](https://lesscss.org/functions/#color-definition-rgba)
`argb`| [#](https://lesscss.org/functions/#color-definition-argb)
`hsl`| [#](https://lesscss.org/functions/#color-definition-hsl)
`hsla`| [#](https://lesscss.org/functions/#color-definition-hsla)
`hsv`| [#](https://lesscss.org/functions/#color-definition-hsv)
`hsva`| [#](https://lesscss.org/functions/#color-definition-hsva)

### 类型函数

:- | :-
:- | :-
`isnumber`| 值是否为数字 [#](https://lesscss.org/functions/#type-functions-isnumber)
`isstring`| 值是否为字符串 [#](https://lesscss.org/functions/#type-functions-isstring)
`iscolor`| 值是否为颜色值 [#](https://lesscss.org/functions/#type-functions-iscolor)
`iskeyword`| 值是否为 keyword [#](https://lesscss.org/functions/#type-functions-iskeyword)
`isurl`| 值是否为 url 值 [#](https://lesscss.org/functions/#type-functions-isurl)
`ispixel`| 值是否为像素值 [#](https://lesscss.org/functions/#type-functions-ispixel)
`isem`| 值是否为 em 值 [#](https://lesscss.org/functions/#type-functions-isem)
`ispercentage`| 值是否为 百分百 值 [#](https://lesscss.org/functions/#type-functions-ispercentage)
`isunit`| 值是是否为指定单位的数字 [#](https://lesscss.org/functions/#type-functions-isunit)
`isruleset`| 值是否为规则集 [#](https://lesscss.org/functions/#type-functions-isruleset)
`isdefined`| 值是否为 defined [#](https://lesscss.org/functions/#type-functions-isdefined)

### 杂项函数

:- | :-
:- | :-
`color`| [#](https://lesscss.org/functions/#misc-functions-color)
`image-size`| [#](https://lesscss.org/functions/#misc-functions-image-size)
`image-width`| [#](https://lesscss.org/functions/#misc-functions-image-width)
`image-height`| [#](https://lesscss.org/functions/#misc-functions-image-height)
`convert`| [#](https://lesscss.org/functions/#misc-functions-convert)
`data-uri`| [#](https://lesscss.org/functions/#misc-functions-data-uri)
`default`| [#](https://lesscss.org/functions/#misc-functions-default)
`unit`| [#](https://lesscss.org/functions/#misc-functions-unit)
`get-unit`| [#](https://lesscss.org/functions/#misc-functions-get-unit)
`svg-gradient`| [#](https://lesscss.org/functions/#misc-functions-svg-gradient)

### 颜色通道函数

:- | :-
:- | :-
`hue`| [#](https://lesscss.org/functions/#color-channel-hue)
`saturation`| [#](https://lesscss.org/functions/#color-channel-saturation)
`lightness`| [#](https://lesscss.org/functions/#color-channel-lightness)
`hsvhue`| [#](https://lesscss.org/functions/#color-channel-hsvhue)
`hsvsaturation`| [#](https://lesscss.org/functions/#color-channel-hsvsaturation)
`hsvvalue`| [#](https://lesscss.org/functions/#color-channel-hsvvalue)
`red`| [#](https://lesscss.org/functions/#color-channel-red)
`green`| [#](https://lesscss.org/functions/#color-channel-green)
`blue`| [#](https://lesscss.org/functions/#color-channel-blue)
`alpha`| [#](https://lesscss.org/functions/#color-channel-alpha)
`luma`| [#](https://lesscss.org/functions/#color-channel-luma)
`luminance`| [#](https://lesscss.org/functions/#color-channel-luminance)

### 色彩运算函数

:- | :-
:- | :-
`saturate`| [#](https://lesscss.org/functions/#color-operations-saturate)
`desaturate`| [#](https://lesscss.org/functions/#color-operations-desaturate)
`lighten`| [#](https://lesscss.org/functions/#color-operations-lighten)
`darken`| [#](https://lesscss.org/functions/#color-operations-darken)
`fadein`| [#](https://lesscss.org/functions/#color-operations-fadein)
`fadeout`| [#](https://lesscss.org/functions/#color-operations-fadeout)
`fade`| [#](https://lesscss.org/functions/#color-operations-fade)
`spin`| [#](https://lesscss.org/functions/#color-operations-spin)
`mix`| [#](https://lesscss.org/functions/#color-operations-mix)
`tint`| [#](https://lesscss.org/functions/#color-operations-tint)
`shade`| [#](https://lesscss.org/functions/#color-operations-shade)
`greyscale`| [#](https://lesscss.org/functions/#color-operations-greyscale)
`contrast`| [#](https://lesscss.org/functions/#color-operations-contrast)

### 颜色混合功能

:- | :-
:- | :-
`multiply`| [#](https://lesscss.org/functions/#color-blending-multiply)
`screen`| [#](https://lesscss.org/functions/#color-blending-screen)
`overlay`| [#](https://lesscss.org/functions/#color-blending-overlay)
`softlight`| [#](https://lesscss.org/functions/#color-blending-softlight)
`hardlight`| [#](https://lesscss.org/functions/#color-blending-hardlight)
`difference`| [#](https://lesscss.org/functions/#color-blending-difference)
`exclusion`| [#](https://lesscss.org/functions/#color-blending-exclusion)
`average`| [#](https://lesscss.org/functions/#color-blending-average)
`negation`| [#](https://lesscss.org/functions/#color-blending-negation)

另见
---

- [Less.js 官网](https://lesscss.org/) _(lesscss.org)_
- [Less.js Usage](https://lesscss.org/usage/) _(lesscss.org)_
- [CSS 备忘清单](./css.md) _(jaywcjlove.github.io)_
- [Stylus 备忘清单](./stylus.md) _(jaywcjlove.github.io)_
- [在线编译预览](http://lesscss.org/less-preview/#eyJjb2RlIjoiI2xpYigpIHtcbiAgICAuY29sb3JzKCkge1xuICAgICAgQHByaW1hcnk6IGJsdWU7XG4gICAgICBAc2Vjb25kYXJ5OiBncmVlbjtcbiAgICB9XG4gICAgLnJ1bGVzKEBzaXplKSB7XG4gICAgICBib3JkZXI6IEBzaXplIHNvbGlkIHdoaXRlO1xuICAgIH1cbiAgfVxuICBcbiAgLmJveCB3aGVuICgjbGliLmNvbG9yc1tAcHJpbWFyeV0gPSBibHVlKSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogKCR3aWR0aCAvIDIpO1xuICB9XG4gIFxuICAuYmFyOmV4dGVuZCguYm94KSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAjbGliLnJ1bGVzKDFweCk7XG4gICAgfVxuICB9IiwiYWN0aXZlVmVyc2lvbiI6IjQueCJ9) _(lesscss.org)_
