JSON 备忘清单
===

这是理解和编写 JSON 格式配置文件的快速参考备忘单。

入门
----

### 介绍

[JSON](https://json.org/) 是一种基于文本的轻量级开放标准，专为人类可读的数据交换而设计。

- JSON 代表 JavaScript 对象表示法
- JSON 易于读写。
- JSON 是与语言无关的数据交换格式
- JSON 文件扩展名为 `.json`
- JSON Internet 媒体类型为 `application/json`

### 示例

```json
{
  "name": "Jason",
  "age": 39,
  "height": 1.92,
  "gender": "M",
  "salary": 70000,
  "married": true,
  "children": [
    {"name": "Tom", "age": 9},
    {"name": "Ava", "age": 7}
  ]
}
```

### 类型

| 类型      | 描述                             |
|-----------|---------------------------------|
| `Number`  | 双精度浮点                       |
| `String`  | 字符系列                         |
| `Boolean` | “true”或“false”                 |
| `Array`   | 有序的值序列                      |
| `Value`   | 字符串、数字、布尔值、空值等         |
| `Object`  | 键/值对的无序集合                 |
| `null`    | Null 或 Empty                   |

### 字符串
<!--rehype:wrap-style=grid-row: span 3/span 3;-->

|      |                            |
|------|----------------------------|
| `\"` | 双引号 Double quote         |
| `\\` | 反斜杠 Backslash            |
| `\/` | 正斜杠 Forward slash        |
| `\b` | 退格 Backspace              |
| `\f` | 换页 Form feed              |
| `\n` | 换行 Newline                |
| `\r` | 回车 Carriage return        |
| `\t` | 标签 Tab                    |
| `\u` | 后跟四个十六进制数字           |

#### 示例

```json
{
  "url": "https://jaywcjlove.github.io",
  "msg" : "Hi,\n\"Quick Reference\"",
  "intro": "为开发人员分享快速参考和备忘单"
}
```

#### 无效字符串

```json
{ "foo": 'bar' }
```

Have to be delimited by double quotes

### 数字
<!--rehype:wrap-class=row-span-2-->

 类型 | 说明
-----|------
`Integer`  | 数字 1-9、0 和正数或负数
`Fraction` | 0.3、3.9 等分数
`Exponent` | 指数，如 e、e+、e-、E、E+、E
<!--rehype:className=show-header -->

#### 示例

```json
{
  "positive" : 12,
  "negative" : -1,
  "fraction" : 10.25,
  "exponent" : 1.0E+2,
  "zero" : 0
}
```

#### 无效的数字

```json
{ "foo": 0xFF }
```

在JSON中，只能使用十进制文字

### 对象 Objects

```json
{
  "color": "Purple",
  "id": "210",
  "composition": {
    "R": 70,
    "G": 39,
    "B": 89
  },
  "empty_object": {}
}
```

用逗号分隔的多个键/值对

### 数组 Arrays

```json
[1, 2, 3, 4, 5]
```

以 `[` 开始并以 `]` 结束

### 对象数组

```json
{
  "children": [
    { "name": "Jimmy Smith", "age": 15 },
    { "name": "Sammy Sosa", "age": 12 }
  ]
}
```

### 数组对象

```json
{
  "attributes": ["a1", "a2"],
  "methods": ["getter", "setter"],
  "empty_array": []
}
```

### 二维阵列

```json
{
  "my_sequences": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0],
    [10, 11]
  ]
}
```

### 对象的对象

```json
{
  "Mark McGwire": {
    "hr": 65,
    "avg": 0.278
  },
  "Sammy Sosa": {
    "hr": 63,
    "avg": 0.288
  }
}
```

### 嵌套

```json
{
  "Jack": {
    "id": 1,
    "name": "Franc",
    "salary": 25000,
    "hobby": ["a", "b"],
    "location": {
        "country": "A", "city": "A-A"
    }
  }
}
```

JSON 5
----

### Objects

对象键可以是 ECMAScript 5.1 [IdentifierName](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)

```json
{
    width: 1920,
    height: 1080,
}
```

数组可以有一个尾随逗号

```json
[
    1,
    true,
    'three',
]
```

### 允许单行和多行注释

```js
{
  // 一行注释
  "name": "Kenny"
}
```

多行注释

```js
{
/* 这是一个
   多行注释 */
  "name": "Kenny"
}
```

### 允许附加空白字符

代码点 | 描述
:-- | ---
`U+0009` | 水平制表符
`U+000A` | 换行符
`U+000B` | 垂直制表符
`U+000C` | 换页符
`U+000D` | 回车符
`U+0020` | 空格
`U+00A0` | 不间断空格
`U+2028` | 行分隔符
`U+2029` | 段落分隔符
`U+FEFF` | 字节顺序标记
Unicode Zs 类别 | 空格分隔符 Unicode 类别中的任何其他字符
<!--rehype:className=left-align-->

### 数字

数字可能有前导或尾随小数点

```json
{
    integer: 123,
    withFractionPart: 123.456,
    onlyFractionPart: .456,
    withExponent: 123e-456,
}
```

数字可以是十六进制

```json
{
    positiveHex: 0xdecaf,
    negativeHex: -0xC0FFEE,
}
```

数字可以是正无穷大、负无穷大和 NaN。

```json
{
    positiveInfinity: Infinity,
    negativeInfinity: -Infinity,
    notANumber: NaN,
}
```

数字可以以明确的加号开头

### 字符串
<!--rehype:wrap-class=col-span-2-->

```js
'Lorem ipsum dolor sit amet, \
consectetur adipiscing elit.'
```

以下是代表相同的意思

```js
'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
```

```json
'\A\C\/\D\C'
```

以下是代表相同的意思

```json
'AC/DC'
```

在 JavaScript 中访问 JSON
----

### 访问对象

```javascript
let myObject = {
  "name": "Jason",
  "last": "Doe",
  "age": 39,
  "gender": "M",
  "salary": 70000,
  "married": true
};
```

----

|                    |           |
|--------------------|-----------|
| `myObject.name`    | "Jason"   |
| `myObject["name"]` | "Jason"   |
| `myObject.age`     | 39        |
| `myObject.other`   | undefined |
| `myObject[0]`      | undefined |

### 访问嵌套
<!--rehype:wrap-style=grid-row: span 2/span 2;-->

```javascript
let myObject = {
    "ref": {
        "name": 0,
        "last": 1,
        "age": 2,
        "gender": 3,
        "salary": 4,
        "married": 5
    },
    "jdoe": [
        "Jason",
        "Doe",
        39,
        "M",
        70000,
        true
    ],
    "jsmith": [
        "Tom",
        "Smith",
        42,
        "F",
        80000,
        true
    ]
};
```

----

|                          |                          |
|--------------------------|--------------------------|
| `myObject.ref.age`       | 2                        |
| `myObject["ref"]["age"]` | 2                        |
| `myObject.jdoe`          | ["Jason", "Doe", 39 ...] |
| `myObject.jsmith[3]`     | "F"                      |
| `myObject[1]`            | undefined                |

### 访问对象数组
<!--rehype:wrap-style=grid-row: span 2/span 2;-->

```javascript
let myArray = [
  {
    "name": "Jason",
    "last": "Doe",
    "age": 39,
    "gender": "M",
    "salary": 70000,
    "married": true
  },
  {
    "name": "Tom",
    "last": "Smith",
    "age": 42,
    "gender": "F",
    "salary": 80000,
    "married": true
  },
  {
    "name": "Amy",
    "last": "Burnquist",
    "age": 29,
    "gender": "F",
    "salary": 60000,
    "married": false
  }
];
```

----

|                     |                            |
|---------------------|----------------------------|
| `myArray[0]`        | `{`"name": "Jason", ...`}` |
| `myArray[1].name`   | "Tom"                      |
| `myArray[1][2]`     | 42                         |
| `myArray[3]`        | undefined                  |
| `myArray[3].gender` | TypeError: Cannot read...  |

### 访问阵列

```javascript
let myArray = [
  "Jason",
  "Doe",
  39,
  "M",
  70000,
  true
];
```

----

|              |           |
|--------------|-----------|
| `myArray[1]` | "Doe"     |
| `myArray[5]` | true      |
| `myArray[6]` | undefined |

另见
----

- [JSON](https://www.json.org/json-en.html) _(json.org)_
- [JSON Editor Online](http://jsoneditoronline.org/) _(jsoneditoronline.org)_
- [Convert JSON Array to Markdown Table, CSV and more](https://tableconvert.com/json-to-markdown) _(tableconvert.com)_
