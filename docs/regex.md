RegEX 备忘清单
===

正则表达式 (regex) 的快速参考，包括符号、范围、分组、断言和一些示例模式，以帮助您入门。

入门
--------

### 介绍

这是开始使用正则表达式(Regex)的快速备忘单。

- [Python 中的 Regex](#python-中的正则表达式)  
    _(速查手册)_
- [JavaScript 中的 Regex](#javascript-中的正则表达式)  
    _(速查手册)_
- [PHP 中的 Regex](#php中的正则表达式)  
    _(速查手册)_
- [Java 中的 Regex](#java-中的正则表达式)  
    _(速查手册)_
- [MySQL 中的 Regex](#mysql中的正则表达式)  
    _(速查手册)_
- [Vim 中的 Regex](./vim#vim-搜索和替换)  
    _(速查手册)_
- [在线 Regex 测试器](https://regex101.com/) _(regex101.com)_
- [轻松学习 Regex](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md) _(github.com)_
- [正则表达式实例搜集](https://jaywcjlove.github.io/regexp-example) _(jaywcjlove.github.io)_
<!--rehype:className=cols-2-->

### 字符类

范例 | 说明
:-|-
`[abc]`       | 单个字符：`a`、`b` 或 `c`
`[^abc]`      | 一个字符，除了：`a`、`b` 或 `c`
`[a-z]`       | 范围内的字符：`a-z`
`[^a-z]`      | 不在范围内的字符：`a-z`
`[0-9]`       | 范围内的数字：`0-9`
`[a-zA-Z]`    | 范围内的字符：<br>`a-z` 或 `A-Z`
`[a-zA-Z0-9]` | 范围内的字符：<br>`a-z`、`A-Z` 或 `0-9`
<!--rehype:className=left-align-->

### 量词

范例 | 说明
:-|-
`a?`      | 零个或一个`a`
`a*`      | 零个或多个 `a`
`a+`      | 一个或多个`a`
`[0-9]+`  | `0-9`中的一个或多个
`a{3}`    | 正好 `3` 个 `a`
`a{3,}`   | 3个或更多的`a`
`a{3,6}`  | `a` 的 `3` 到 `6` 之间
`a*`      | 贪心量词
`a*?`     | 惰性量词
`a*+`     | 占有量词
<!--rehype:className=left-align-->

### 常用元字符

模式 | 描述
:-|-
`^`      | 匹配字符串的开头
`{`      | 开始一个数量限定符，指定出现次数
`+`      | 匹配前面的元素一次或多次
`<`      | 非标准的正则表达式元字符（在 HTML 中常用）
`[`      | 开始一个字符类
`*`      | 匹配前面的元素零次或多次
`)`      | 结束捕获组
`>`      | 非标准的正则表达式元字符（在 HTML 中常用）
`.`      | 匹配除换行符之外的任意字符
`(`      | 开始一个捕获组
`\|`      | 在正则表达式模式中作为逻辑或操作
`$`      | 匹配字符串的结尾
`\`      | 转义元字符，使其具有字面意义
`?`      | 匹配前面的元素零次或一次
<!--rehype:className=left-align-->

使用 `\` 转义这些特殊字符

### 元序列
<!--rehype:wrap-class=row-span-4-->

范例 | 说明
:-|-
`.`          | 任何单个字符
`\s`         | 任何空白字符
`\S`         | 任何非空白字符
`\d`         | 任何数字，与 `[0-9]` 相同
`\D`         | 任何非数字，与 `[^0-9]` 相同
`\w`         | 任何单词字符
`\W`         | 任何非单词字符
`\X`         | 任何 Unicode 序列，包括换行符
`\C`         | 匹配一个数据单元
`\R`         | Unicode 换行符
`\v`         | 垂直空白字符
`\V`         | `\v` 的否定 - 除了换行符和垂直制表符之外的任何内容
`\h`         | 水平空白字符
`\H`         | `\h` 的否定
`\K`         | 重置匹配
`\n`         | 匹配第 `n` 个子模式
`\pX`        | `Unicode` 属性 `X`
`\p{...}`    | `Unicode` 属性或脚本类别
`\PX`        | `\pX` 的否定
`\P{...}`    | `\p` 的否定
`\Q...\E`    | 引用;视为文字
`\k<name>`   | 匹配子模式`name`
`\k'name'`   | 匹配子模式`name`
`\k{name}`   | 匹配子模式`name`
`\gn`        | 匹配第 n 个子模式
`\g{n}`      | 匹配第 n 个子模式
`\g<n>`      | 递归第 n 个捕获组
`\g'n'`      | 递归第 n 个捕获组。
`\g{-n}`     | 匹配第 n 个相对前一个子模式
`\g<+n>`     | 递归第 n 个相对即将到来的子模式
`\g'+n'`     | 匹配第 n 个相对即将到来的子模式
`\g'letter'` | 递归命名捕获组 `字母`
`\g{letter}` | 匹配先前命名的捕获组 `字母`
`\g<letter>` | 递归命名捕获组 `字母`
`\xYY`       | 十六进制字符 `YY`
`\x{YYYY}`   | 十六进制字符 `YYYY`
`\ddd`       | 八进制字符`ddd`
`\cY`        | 控制字符 `Y`
`[\b]`       | 退格字符
`\`          | 使任何字符文字

### 锚点

范例 | 说明
:-|-
`\G`    | 比赛开始
`^`     | 字符串的开始
`$`     | 字符串结束
`\A`    | 字符串的开始
`\Z`    | 字符串结束
`\z`    | 字符串的绝对结尾
`\b`    | 一个词的边界
`\B`    | 非单词边界
<!--rehype:className=left-align-->

### 替代

范例 | 说明
:-|-
`\0`       | 完整的比赛内容
`\1`       | 捕获组 `1` 中的内容
`$1`       | 捕获组 `1` 中的内容
`${foo}`   | 捕获组 `foo` 中的内容
`\x20`     | 十六进制替换值
`\x{06fa}` | 十六进制替换值
`\t`       | 标签
`\r`       | 回车
`\n`       | 新队
`\f`       | 换页
`\U`       | 大写转换
`\L`       | 小写转换
`\E`       | 终止任何转换
<!--rehype:className=left-align-->

### 组构造

范例 | 说明
:-|-
`(...)`           | 捕获所有封闭的东西
`(a\|b)`          | 匹配 `a` 或 `b`
`(?:...)`         | 匹配随附的所有内容
`(?>...)`         | 原子组（非捕获）
`(?\|...)`        | 重复的子模式组号
`(?#...)`         | 注解
`(?'name'...)`    | 命名捕获组
`(?<name>...)`    | 命名捕获组
`(?P<name>...)`   | 命名捕获组
`(?imsxXU)`       | 内联修饰符
`(?(DEFINE)...)`  | 在使用它们之前预定义模式
<!--rehype:className=left-align-->

### 断言

:-|-
:-|-
`(?(1)yes\|no)`      | 条件语句
`(?(R)yes\|no)`      | 条件语句
`(?(R#)yes\|no)`     | 递归条件语句
`(?(R&name)yes\|no)` | 条件语句
`(?(?=...)yes\|no)`  | 有条件的前瞻
`(?(?<=...)yes\|no)` | 有条件的往后看

### 递归

:-|-
:-|-
`(?R)`      | 递归整个模式
`(?1)`      | 递归第一个子模式
`(?+1)`     | 递归第一个相对子模式
`(?&name)`  | 递归子模式`name`
`(?P=name)` | 匹配子模式`name`
`(?P>name)` | 递归子模式`name`

### 标志/修饰符

:-|-
:-|-
`g`   | 全部
`m`   | 多行
`i`   | 不区分大小写
`x`   | 忽略空格
`s`   | 单线
`u`   | 统一码
`X`   | 扩展
`U`   | 不贪心
`A`   | 锚
`J`   | 重复的组名
`d`   | 结果包含捕获组子字符串开始和结束的索引

### 零宽度断言

:-|-
:-|-
`(?=...)`  | 正先行断言
`(?!...)`  | 负先行断言
`(?<=...)` | 正后发断言
`(?<!...)` | 负后发断言
`?=`|正先行断言-存在
`?!`|负先行断言-排除
`?<=`|正后发断言-存在
`?<!`|负后发断言-排除

零宽度断言 允许您在主模式之前（向后看）或之后（lookahead）匹配一个组，而不会将其包含在结果中。

### POSIX 字符类
<!--rehype:wrap-class=col-span-2-->

字符类 | 如同 | 意义
:-|-|-
| `[[:alnum:]]`   | `[0-9A-Za-z]`                                     | 字母和数字
| `[[:alpha:]]`   | `[A-Za-z]`                                        | 字母
| `[[:ascii:]]`   | `[\x00-\x7F]`                                     | ASCII 码 0-127
| `[[:blank:]]`   | `[\t ]`                                           | 仅空格或制表符
| `[[:cntrl:]]`   | `[\x00-\x1F\x7F]`                                 | 控制字符
| `[[:digit:]]`   | `[0-9]`                                           | 十进制数字
| `[[:graph:]]`   | `[[:alnum:][:punct:]]`                            | 可见字符（不是空格）
| `[[:lower:]]`   | `[a-z]`                                           | 小写字母
| `[[:print:]]`   | `[ -~] == [ [:graph:]]`                           | 可见字符
| `[[:punct:]]`   | <code>[!"#$%&’()*+,-./:;<=>?@[]^_\`{\|}~]</code>  | 可见标点符号
| `[[:space:]]`   | <code>[\t\n\v\f\r ]</code>                        | 空白
| `[[:upper:]]`   | `[A-Z]`                                           | 大写字母
| `[[:word:]]`    | `[0-9A-Za-z_]`                                    | 单词字符
| `[[:xdigit:]]`  | `[0-9A-Fa-f]`                                     | 十六进制数字
| `[[:<:]]`       | `[\b(?=\w)]`                                      | 词的开头
| `[[:>:]]`       | `[\b(?<=\w)]`                                     | 词尾
<!--rehype:className=show-header-->

### 控制动词

:-|-
:-|-
`(*ACCEPT)`            | 控制动词
`(*FAIL)`              | 控制动词
`(*MARK:NAME)`         | 控制动词
`(*COMMIT)`            | 控制动词
`(*PRUNE)`             | 控制动词
`(*SKIP)`              | 控制动词
`(*THEN)`              | 控制动词
`(*UTF)`               | 图案修饰符
`(*UTF8)`              | 图案修饰符
`(*UTF16)`             | 图案修饰符
`(*UTF32)`             | 图案修饰符
`(*UCP)`               | 图案修饰符
`(*CR)`                | 换行修饰符
`(*LF)`                | 换行修饰符
`(*CRLF)`              | 换行修饰符
`(*ANYCRLF)`           | 换行修饰符
`(*ANY)`               | 换行修饰符
`\R`                   | 换行修饰符
`(*BSR_ANYCRLF)`       | 换行修饰符
`(*BSR_UNICODE)`       | 换行修饰符
`(*LIMIT_MATCH=x)`     | 正则表达式引擎修饰符
`(*LIMIT_RECURSION=d)` | 正则表达式引擎修饰符
`(*NO_AUTO_POSSESS)`   | 正则表达式引擎修饰符
`(*NO_START_OPT)`      | 正则表达式引擎修饰符

正则表达式示例
--------------

### 字符串

范例 | 说明
:-|-
`ring` | 匹配 <yel>ring</yel> sp<yel>ring</yel>board 等。
`.` | 匹配 <yel>a</yel>、<yel>9</yel>、<yel>+</yel> 等。
`h.o` | 匹配 <yel>hoo</yel>、<yel>h2o</yel>、<yel>h/o</yel> 等。
`ring\?` | 匹配 <yel>ring?</yel>
`\(quiet\)` | 匹配<yel>（安静）</yel>
`c:\\windows` | 匹配 <yel>c:\windows</yel>

使用 `\` 搜索这些特殊字符：<br> `[ \ ^ $ . | ? * + ( ) { }`

### 速记类

范例 | 说明
:-|-
`\w` | “单词”字符 <br> _(字母、数字或下划线)_
`\d` | 数字
`\s` | 空格 <br> _(空格、制表符、vtab、换行符)_
`\W, \D, or \S` | 不是单词、数字或空格
`[\D\S]` | 表示不是数字或空格，两者都匹配
`[^\d\s]` | 禁止数字和空格

### 出现次数

范例 | 说明
:-|-
`colou?r`           | 匹配 <yel>color</yel> 或 <yel>colour</yel>
`[BW]ill[ieamy's]*` | 匹配 <yel>Bill</yel>、<yel>Willy</yel>、<yel>William's</yel> 等。
`[a-zA-Z]+`         | 匹配 1 个或多个字母
`\d{3}-\d{2}-\d{4}` | 匹配 SSN
`[a-z]\w{1,7}`      | 匹配 UW NetID

### 备择方案

范例 | 说明
:-|-
`cat\|dog` | 匹配 <yel>cat</yel> 或 <yel>dog</yel>
`id\|identity` | 匹配 <yel>id</yel> 或 <yel>id</yel>entity
`identity\|id` | 匹配 <yel>id</yel> 或 <yel>identity</yel>

当替代品重叠时，命令从长到短

### 字符类

范例 | 说明
:-|-
`[aeiou]`     | 匹配任何元音
`[^aeiou]`    | 匹配一个非元音
`r[iau]ng`    | 匹配<yel>ring</yel>、w<yel>rang</yel>le、sp<yel>rung</yel>等。
`gr[ae]y`     | 匹配 <yel>gray</yel> 或 <yel>grey</yel>
`[a-zA-Z0-9]` | 匹配任何字母或数字

在 `[ ]` 中总是转义 `. \ ]` 有时是 `^ - .`

### 贪婪与懒惰

范例 | 说明
:-|-
`*  + {n,}`<br>_greedy_  | 尽可能匹配
`<.+>`                | 在 <yel>\<b>bold\<\/b></yel> 中找到 1 个大匹配项
`*?  +? {n,}?`<br>_lazy_ | 尽可能少匹配
`<.+?>`                  | 在 \<<yel>b</yel>>bold\<<yel>\/b</yel>> 中找到 2 个匹配项

### 范围
<!--rehype:wrap-class=col-span-2-->

范例 | 说明
:-|-
`\b` | “单词”边缘（非“单词”字符旁边）
`\bring` | 单词以“ring”开头，例如 <yel>ringtone</yel>
`ring\b` | 单词以“ring”结尾，例如 <yel>spring</yel>
`\b9\b` | 匹配单个数字 <yel>9</yel>，而不是 19、91、99 等。
`\b[a-zA-Z]{6}\b` | 匹配 6 个字母的单词
`\B` | 不是字边
`\Bring\B` | 匹配 <yel>springs</yel> 和 <yel>wringer</yel>
`^\d*$` | 整个字符串必须是数字
`^[a-zA-Z]{4,20}$` | 字符串必须有 4-20 个字母
`^[A-Z]` | 字符串必须以大写字母开头
`[\.!?"')]$` | 字符串必须以终端标点结尾

### 修饰

范例 | 说明
:-|-
`(?i)`[a-z]*`(?-i)` | 忽略大小写开/关
`(?s)`.*`(?-s)`     | 匹配多行（导致 . 匹配换行符）
`(?m)`^.*;$`(?-m)`  | <yel>^</yel> & <yel>$</yel> 匹配行不是整个字符串
`(?x)`              | #free-spacing 模式，此 EOL 注释被忽略
`(?-x)`             | 自由空间模式关闭
/regex/`ismx`       | 修改整个字符串的模式

### 组

范例 | 说明
:-|-
`(in\|out)put` | 匹配 <yel>input</yel> 或 <yel>output</yel>
`\d{5}(-\d{4})?` | 美国邮政编码 _(“+ 4”可选)_
<!--rehype:className=left-align-->

如果组后匹配失败，解析器会尝试每个替代方案。
<br>
可能导致灾难性的回溯。

### 反向引用

范例 | 说明
:-|-
`(to) (be) or not \1 \2` | 匹配 <yel>to be or not to be</yel>
`([^\s])\1{2}`           | 匹配非空格，然后再相同两次 &nbsp; <yel>aaa</yel>, <yel>...</yel>
`\b(\w+)\s+\1\b`         | 匹配双字

### 非捕获组

范例 | 说明
:-|-
`on(?:click\|load)` | 快于：`on(click\|load)`

尽可能使用非捕获或原子组

### 原子组

范例 | 说明
:-|-
`(?>red\|green\|blue)` | 比非捕获更快
`(?>id\|identity)\b`   | 匹配 <yel>id</yel>，但不匹配 <yel>id</yel>entity
<!--rehype:className=left-align-->

<yel>id</yel> 匹配，但 `\b` 在原子组之后失败，
解析器不会回溯到组以重试“身份”

---

如果替代品重叠，请从长到短命令。

### 零宽度断言 Lookaround(前后预查)
<!--rehype:wrap-class=col-span-2 row-span-2-->

范例 | 说明
:-|-
`(?= )`                 | 向前看，如果你能提前找到
`(?! )`                 | 向前看，如果你找不到前面
`(?<= )`                | 向后看，如果你能找到后面
`(?<! )`                | 向后看，如果你找不到后面
`\b\w+?(?=ing\b)`       | 匹配 <yel>warbl</yel>ing, <yel>str</yel>ing, <yel>fish</yel>ing, ...
`\b(?!\w+ing\b)\w+\b`   | 不以“ing”结尾的单词
`(?<=\bpre).*?\b`      | 匹配 pre<yel>tend</yel>、pre<yel>sent</yel>、pre<yel>fix</yel>、...
`\b\w{3}(?<!pre)\w*?\b` | 不以“pre”开头的词
`\b\w+(?<!ing)\b`       | 匹配不以“ing”结尾的单词

### If-then-else

匹配 `Mr.` 或 `Ms.` 如果单词 `her` 稍后在字符串中

```
M(?(?=.*?\bher\b)s|r)\.
```

需要环顾 `IF` 条件

基础实例
---

### 基本匹配

表达式 | 匹配示例
:- | -
`the` | The fat cat sat on `the` mat.
`The` | `The` fat cat sat on the mat.
<!--rehype:className=show-header-->

由字母`t`开始，接着是`h`，再接着是`e`

### 点运算符 `.`

表达式 | 匹配示例
:- | -
`.ar` | The `car` `par`ked in the `gar`age.
<!--rehype:className=show-header-->

表达式`.ar`匹配一个任意字符后面跟着是`a`和`r`的字符串

### 字符集

表达式 | 匹配示例
:- | -
`.ar` | The `car` <pur>`par`</pur>ked in the `gar`age.
`ar[.]` | A garage is a good place to park a c`ar`.
<!--rehype:className=show-header-->

方括号的句号就表示句号。表达式 `ar[.]` 匹配 `ar.` 字符串

### 否定字符集

表达式 | 匹配示例
:- | -
`[^c]ar` | The car `par`ked in the `gar`age.
<!--rehype:className=show-header-->

表达式 `[^c]ar` 匹配一个后面跟着 `ar` 的除了`c`的任意字符。

### 重复次数
<!--rehype:wrap-class=row-span-2-->

#### `*` 号

表达式 | 匹配示例
:- | -
`[a-z]*` | T`he` <pur>`car`</pur> `parked` <pur>`in`</pur> `the` <pur>`garage`</pur> #21.
`\s*cat\s*` | The fat `cat` sat on the con`cat`enation.

表达式 `[a-z]*` 匹配一个行中所有以小写字母开头的字符串。

#### `+` 号

表达式 | 匹配示例
:- | -
`c.+t` | The `fat cat sat on the mat`.

表达式 `c.+t` 匹配以首字母c开头以t结尾，中间跟着至少一个字符的字符串。

#### `?` 号

表达式 | 匹配示例
:- | -
`[T]he` | `The` car is parked in the garage.
`[T]?he` | `The` car is parked in t`he` garage.

表达式 `[T]?he` 匹配字符串 `he` 和 `The`。

### `{}` 号

表达式 | 匹配示例
:- | -
`[0-9]{2,3}` | The number was 9.`999`7 but we rounded it off to `10`.0.
`[0-9]{2,}` | The number was 9.`9997` but we rounded it off to `10`.0.
`[0-9]{3}` | The number was 9.`999`7 but we rounded it off to 10.0.
<!--rehype:className=style-list-arrow-->

### `(...)` 特征标群

表达式 | 匹配示例
:- | -
`(c\|g\|p)ar` | The `car` is `par`ked in the `gar`age.
<!--rehype:className=show-header-->

表达式 `(c|g|p)ar` 匹配 `car` 或 `gar` 或 `par`。 注意 `\` 是在 Markdown 中为了不破坏表格转义 `|`。

### `|` 或运算符

表达式 | 匹配示例
:- | -
`(T\|t)he\|car` | The car is parked in the garage.
<!--rehype:className=show-header-->

表达式 `(T|t)he|car` 匹配 `(T|t)he` 或 `car`

### 转码特殊字符

表达式 | 匹配示例
:- | -
`(f\|c\|m)at\.?` | The `fat` `cat` sat on the `mat.`
<!--rehype:className=show-header-->

如果想要匹配句子中的 `.` 则要写成 `\.` 以下这个例子 `\.?` 是选择性匹配.

### 锚点
<!--rehype:wrap-class=row-span-2-->

匹配指定开头或结尾的字符串就要使用到锚点。

#### `^` 号 (符串的开头)

表达式 | 匹配示例
:- | -
`(T\|t)he` | `The` car is parked in `the` garage.
`^(T\|t)he` | `The` car is parked in the garage.
<!--rehype:className=show-header-->

#### `$` 号 (否是最后一个)

表达式 | 匹配示例
:- | -
`(at\.)` | The fat c`at.` s`at.` on the m`at.`
`(at\.)$` | The fat cat. sat. on the m`at.`
<!--rehype:className=show-header-->

### 简写字符集
<!--rehype:wrap-class=row-span-4-->

|简写|描述|
|:----:|----|
|`.`|除换行符外的所有字符|
|`\w`|匹配所有字母数字<br />等同于 `[a-zA-Z0-9_]`|
|`\W`|匹配所有非字母数字，即符号<br />等同于： `[^\w]`|
|`\d`|匹配数字： `[0-9]`|
|`\D`|匹配非数字： `[^\d]`|
|`\s`|匹配所有空格字符<br />等同于：`[\t\n\f\r\p{Z}]`|
|`\S`|匹配所有非空格字符： `[^\s]`|
|`\f`|匹配一个换页符|
|`\n`|匹配一个换行符|
|`\r`|匹配一个回车符|
|`\t`|匹配一个制表符|
|`\v`|匹配一个垂直制表符|
|`\p`|匹配 CR/LF(等同于 `\r\n`)<br />用来匹配 DOS 行终止符|
<!--rehype:className=show-header-->

正则表达式提供一些常用的字符集简写。

### `?=...` 正先行断言

表达式 | 匹配示例
:- | -
`(T\|t)he(?=\sfat)` | `The` fat cat sat on the mat.
<!--rehype:className=show-header-->

`The` 和 `the` 后面紧跟着 `(空格)fat`。

### `?!...` 负先行断言

表达式 | 匹配示例
:- | -
`(T\|t)he(?!\sfat)` | The fat cat sat on `the` mat.
<!--rehype:className=show-header-->

匹配 `The` 和 `the`，且其后不跟着 `(空格)fat`。

### `?<= ...` 正后发断言

表达式 | 匹配示例
:- | -
`(?<=(T\|t)he\s)(fat\|mat)` | The `fat` cat sat on the `mat`.
<!--rehype:className=show-header-->

匹配 `fat` 和 `mat`，且其前跟着 `The` 或 `the`。

### `?<!...` 负后发断言

表达式 | 匹配示例
:- | -
`(?<!(T\|t)he\s)(cat)` | The cat sat on `cat`.
<!--rehype:className=show-header-->

匹配 `cat`，且其前不跟着 `The` 或 `the`。

### 忽略大小写 (Case Insensitive)

表达式 | 匹配示例
:- | -
`The` | `The` fat cat sat on the mat.
`/The/gi` | `The` fat cat sat on `the` mat.
<!--rehype:className=show-header-->

修饰语 `i` 用于忽略大小写，`g` 表示全局搜索。

### 全局搜索 (Global search)

表达式 | 匹配示例
:- | -
`/.(at)/` | The `fat` cat sat on the mat.
`/.(at)/g` | The `fat` `cat` `sat` on the `mat`.
<!--rehype:className=show-header-->

表达式 `/.(at)/g` 表示搜索 任意字符（除了换行）+ `at`，并返回全部结果。

### 多行修饰符 (Multiline)

表达式 | 匹配示例
:- | -
`/.at(.)?$/` | The fat<br /> cat sat<br /> on the `mat`.
`/.at(.)?$/gm` | The `fat`<br /> cat `sat`<br /> on the `mat`.
<!--rehype:className=show-header-->

### 贪婪匹配与惰性匹配 (Greedy vs lazy matching)

表达式 | 匹配示例
:- | -
`/(.*at)/` | `The fat cat sat on the mat`.
`/(.*?at)/` | `The fat` cat sat on the mat.
<!--rehype:className=show-header-->

Python 中的正则表达式
---

### 入门

导入正则表达式模块

```python
import re
```

### 实例
<!--rehype:wrap-class=col-span-2 row-span-3-->

#### re.search()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> sentence = 'This is a sample string'
>>> bool(re.search(r'this', sentence, flags=re.I))
True
>>> bool(re.search(r'xyz', sentence))
False
```

#### re.findall()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> re.findall(r'\bs?pare?\b', 'par spar apparent spare part pare')
['par', 'spar', 'spare', 'pare']
>>> re.findall(r'\b0*[1-9]\d{2,}\b', '0501 035 154 12 26 98234')
['0501', '154', '98234']
```

#### re.finditer()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> m_iter = re.finditer(r'[0-9]+', '45 349 651 593 4 204')
>>> [m[0] for m in m_iter if int(m[0]) < 350]
['45', '349', '4', '204']
```

#### re.split()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> re.split(r'\d+', 'Sample123string42with777numbers')
['Sample', 'string', 'with', 'numbers']
```

#### re.sub()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> ip_lines = "catapults\nconcatenate\ncat"
>>> print(re.sub(r'^', r'* ', ip_lines, flags=re.M))
* catapults
* concatenate
* cat
```

#### re.compile()
<!--rehype:style=text-align: left;color: var(--primary-color);-->

```python
>>> pet = re.compile(r'dog')
>>> type(pet)
<class '_sre.SRE_Pattern'>
>>> bool(pet.search('They bought a dog'))
True
>>> bool(pet.search('A cat crossed their path'))
False
```

### 函数

函数 | 说明
:-|-
`re.findall`  | 返回包含所有匹配项的列表
`re.finditer` | 返回一个可迭代的匹配对象<br/> _(每个匹配一个)_
`re.search`   | 如果字符串中的任何位置存在匹配项，则返回 Match 对象
`re.split`    | 返回一个列表，其中字符串在每次匹配时被拆分
`re.sub`      | 用字符串替换一个或多个匹配项
`re.compile`  | 编译正则表达式模式供以后使用
`re.escape`   | 返回所有非字母数字反斜杠的字符串

### Flags 标志

:- | - | -
:- | - | -
`re.I` | `re.IGNORECASE` | 忽略大小写
`re.M` | `re.MULTILINE`  | 多行
`re.L` | `re.LOCALE`     | 使 `\w`、`\b`、`\s` _locale 依赖_
`re.S` | `re.DOTALL`     | 点匹配所有 _（包括换行符）_
`re.U` | `re.UNICODE`    | 使 `\w`、`\b`、`\d`、`\s` _unicode 依赖_
`re.X` | `re.VERBOSE`    | 可读风格

JavaScript 中的正则表达式
---------------

### RegExp
<!--rehype:wrap-class=row-span-4-->

#### 属性

:- | :-
:- | :-
`dotAll` | 是否使用了 `s` 修饰符
`flags` | 返回标志的字符串
`global` | 是否使用了 `g` (全部)修饰符
`hasIndices` | 是否使用了 `d` 修饰符
`ignoreCase` | 匹配文本的时候是否忽略大小写 `i`
`multiline` | 是否进行多行搜索 `m`
`lastIndex` | 该索引表示从哪里开始下一个匹配
`source` | 正则表达式的文本
`sticky` | 搜索是否是 sticky
`unicode` | Unicode 功能是否开启

#### 方法

:- | :-
:- | :-
`match()` | 获取匹配结果
`matchAll()` | 所有匹配项
`replace()` | 替换所有符合正则模式的匹配项
`search()` | 搜索以取得匹配正则模式的项
`split()` | 切割字符串返回字符串数组
~~`compile()`~~ | （重新）编译正则表达式
`exec()` | 指定字符串中执行一个搜索匹配
`test()` | 正则表达式与指定的字符串是否匹配
`toString()` | 返回该正则表达式的字符串

### test()

```javascript
let textA = 'I like APPles very much';
let textB = 'I like APPles';
let regex = /apples$/i
 
console.log(regex.test(textA)); // false
console.log(regex.test(textB)); // true
```

### search()

```javascript
let text = 'I like APPles very much';
let regexA = /apples/;
let regexB = /apples/i;

console.log(text.search(regexA)); // -1
console.log(text.search(regexB)); // 7
```

### exec()

```javascript
let text = 'Do you like apples?';
let regex= /apples/;
// Output: apples
console.log(regex.exec(text)[0]);
// Output: Do you like apples?
console.log(regex.exec(text).input);
```

### match()

```javascript
let text = 'Here are apples and apPleS';
let regex = /apples/gi;
 
// Output: [ "apples", "apPleS" ]
console.log(text.match(regex));
```

### split()
<!--rehype:wrap-class=col-span-2-->

```javascript
let text = 'This 593 string will be brok294en at places where d1gits are.';
let regex = /\d+/g
 
// Output: [ "This ", " string will be brok", "en at places where d", "gits are." ] 
console.log(text.split(regex))
```

### matchAll()

```javascript
let regex = /t(e)(st(\d?))/g;
let text = 'test1test2';
let array = [...text.matchAll(regex)];
// Output: ["test1", "e", "st1", "1"]
console.log(array[0]);
// Output: ["test2", "e", "st2", "2"]
console.log(array[1]);
```

### replace()

```javascript
let text = 'Do you like aPPles?';
let regex = /apples/i
 
// Output: Do you like mangoes?
let result = text.replace(regex, 'mangoes');
console.log(result);
```

### 属性示例

```javascript
/d/s.dotAll;             // => true
/d/g.global;             // => true
/d/ig.flags;             // => "gi"
/d/d.hasIndices;         // => true
/d/i.ignoreCase;         // => true
```

### 多行文本中使用正则表达式

```js
let s = "Please yes\nmake my day!";

s.match(/yes[^]*day/);
// 返回 'yes\nmake my day'
```

### replaceAll()

```javascript
let regex = /apples/gi;
let text = 'Here are apples and apPleS';

text.replaceAll(regex, "mangoes");
// 返回: Here are mangoes and mangoes
```
<!--rehype:className=wrap-text-->

PHP中的正则表达式
------------

### 函数
<!--rehype:wrap-class=col-span-2-->

:- | -
:- | -
`preg_match()`            | 执行正则表达式匹配
`preg_match_all()`        | 执行全局正则表达式匹配
`preg_replace_callback()` | 使用回调执行正则表达式搜索和替换
`preg_replace()`          | 执行正则表达式搜索和替换
`preg_split()`            | 按正则表达式模式拆分字符串
`preg_grep()`             | 返回与模式匹配的数组条目

### preg_replace

```php
$str = "Visit Microsoft!";
$regex = "/microsoft/i";

// Output: Visit QuickRef!
echo preg_replace($regex, "QuickRef", $str); 
```
<!--rehype:className=wrap-text-->

### preg_match

```php
$str = "Visit QuickRef";
$regex = "#quickref#i";
// Output: 1
echo preg_match($regex, $str);
```

### preg_matchall
<!--rehype:wrap-class=col-span-2 row-span-2-->

```php
$regex = "/[a-zA-Z]+ (\d+)/";
$input_str = "June 24, August 13, and December 30";
if (preg_match_all($regex, $input_str, $matches_out)) {
    // Output: 2
    echo count($matches_out);
    // Output: 3
    echo count($matches_out[0]);
    // Output: Array("June 24", "August 13", "December 30")
    print_r($matches_out[0]);
    // Output: Array("24", "13", "30")
    print_r($matches_out[1]);
}
```

### preg_grep

```php
$arr = ["Jane", "jane", "Joan", "JANE"];
$regex = "/Jane/";
// Output: Jane
echo preg_grep($regex, $arr);
```

### preg_split
<!--rehype:wrap-class=col-span-2-->

```php
$str = "Jane\tKate\nLucy Marion";
$regex = "@\s@";
// Output: Array("Jane", "Kate", "Lucy", "Marion")
print_r(preg_split($regex, $str));
```

Java 中的正则表达式
-------------

### 风格
<!--rehype:wrap-class=col-span-2-->

#### 第一种方式

```java
Pattern p = Pattern.compile(".s", Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher("aS");  
boolean s1 = m.matches();  
System.out.println(s1);   // Outputs: true
```

#### 第二种方式

```java
boolean s2 = Pattern.compile("[0-9]+").matcher("123").matches();  
System.out.println(s2);   // Outputs: true
```

#### 第三种方式

```java
boolean s3 = Pattern.matches(".s", "XXXX");  
System.out.println(s3);   // Outputs: false
```

### 模式字段

:- | -
:- | -
`CANON_EQ`         | 规范等价
`CASE_INSENSITIVE` | 不区分大小写的匹配
`COMMENTS`         | 允许空格和注释
`DOTALL`           | 圆点模式
`MULTILINE`        | 多行模式
`UNICODE_CASE`     | Unicode 感知大小写折叠
`UNIX_LINES`       | Unix 行模式

### 方法

#### Pattern

- 模式编译 compile(字符串正则表达式 [,int flags])
- 布尔匹配 matches([字符串正则表达式,] CharSequence 输入)
- String[] 拆分 split(字符串正则表达式 [,int 限制])
- 字符串引用 quote(字符串 s)

#### 匹配器

- int start([int group | 字符串名称])
- int end([int group | 字符串名称])
- 布尔 find([int start])
- 字符 group([int 组 | 字符串名称])
- 匹配器重置 reset()

#### String

- boolean matches(String regex)
- String replaceAll(String regex, 字符串替换)
- String[] split(String regex[, int limit])

还有更多方法...

### 例子
<!--rehype:wrap-class=col-span-2-->

替换句子：

```java
String regex = "[A-Z\n]{5}$";
String str = "I like APP\nLE";
Pattern p = Pattern.compile(regex, Pattern.MULTILINE);
Matcher m = p.matcher(str);
// Outputs: I like Apple!
System.out.println(m.replaceAll("pple!"));
```

所有匹配的数组：

```java
String str = "She sells seashells by the Seashore";
String regex = "\\w*se\\w*";
Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
Matcher m = p.matcher(str);
List<String> matches = new ArrayList<>();
while (m.find()) {
    matches.add(m.group());
}
// Outputs: [sells, seashells, Seashore]
System.out.println(matches);
```

MySQL中的正则表达式
-------------
<!--rehype:body-class=cols-2-->

### 函数

函数名称 | 说明
:- | -
`REGEXP` | 字符串是否匹配正则表达式
`REGEXP_INSTR()` | 匹配正则表达式的子字符串的起始索引 <br>_（注意：仅限 MySQL 8.0+）_
`REGEXP_LIKE()` | 字符串是否匹配正则表达式 <br>_(注意：仅 MySQL 8.0+)_
`REGEXP_REPLACE()` | 替换匹配正则表达式的子字符串 <br>_（注意：仅限 MySQL 8.0+）_
`REGEXP_SUBSTR()` | 返回匹配正则表达式的子字符串 <br>_(注意：仅 MySQL 8.0+)_

### REGEXP

```sql
expr REGEXP pat 
```

#### Examples

```sql
mysql> SELECT 'abc' REGEXP '^[a-d]';
1
mysql> SELECT name FROM cities WHERE name REGEXP '^A';
mysql> SELECT name FROM cities WHERE name NOT REGEXP '^A';
mysql> SELECT name FROM cities WHERE name REGEXP 'A|B|R';
mysql> SELECT 'a' REGEXP 'A', 'a' REGEXP BINARY 'A';
1   0
```

### REGEXP_REPLACE

```
REGEXP_REPLACE(expr, pat, repl[, pos[, occurrence[, match_type]]])
```

#### 例子

```sql
mysql> SELECT REGEXP_REPLACE('a b c', 'b', 'X');
a X c
mysql> SELECT REGEXP_REPLACE('abc ghi', '[a-z]+', 'X', 1, 2);
abc X
```

### REGEXP_SUBSTR

```
REGEXP_SUBSTR(expr, pat[, pos[, occurrence[, match_type]]])
```

#### 例子

```sql
mysql> SELECT REGEXP_SUBSTR('abc def ghi', '[a-z]+');
abc
mysql> SELECT REGEXP_SUBSTR('abc def ghi', '[a-z]+', 1, 3);
ghi
```

### REGEXP_LIKE

```
REGEXP_LIKE(expr, pat[, match_type])
```

#### 例子

```sql
mysql> SELECT regexp_like('aba', 'b+')
1
mysql> SELECT regexp_like('aba', 'b{2}')
0
mysql> # i: case-insensitive
mysql> SELECT regexp_like('Abba', 'ABBA', 'i');
1
mysql> # m: multi-line
mysql> SELECT regexp_like('a\nb\nc', '^b$', 'm');
1
```

### REGEXP_INSTR

```
REGEXP_INSTR(expr, pat[, pos[, occurrence[, return_option[, match_type]]]])
```

#### 例子

```sql
mysql> SELECT regexp_instr('aa aaa aaaa', 'a{3}');
2
mysql> SELECT regexp_instr('abba', 'b{2}', 2);
2
mysql> SELECT regexp_instr('abbabba', 'b{2}', 1, 2);
5
mysql> SELECT regexp_instr('abbabba', 'b{2}', 1, 3, 1);
7
```

也可以看看
----------

- [轻松学习 Regex](https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md) _(github.com)_
- [正则表达式实例搜集](https://jaywcjlove.github.io/regexp-example) _(jaywcjlove.github.io)_
- [一些正则表达式随记](https://github.com/jaywcjlove/handbook/blob/master/docs/JavaScript/RegExp.md) _(jaywcjlove.github.io)_
