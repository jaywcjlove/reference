INI 备忘清单
====

这是理解和编写 INI 格式配置文件的快速参考备忘单，此清单包含配置的内容，结构和语法等内容。

入门
------

### 介绍

INI 是一种固定标准格式的配置文件，INI配置方法来自 MS-DOS 操作系统

```ini
; 这里是注释
[owner]
name=John Doe
organization=Acme Products

[database]
; 这里是注释
server=192.0.2.42
port=143
file="acme payroll.dat"
```

现在已成为许多配置的非正式标准，其它操作系统可能使用 `.conf` 或 `.cfg` 作为后缀

### 稳定的特性

- 基本元素是键或属性
- 每个键由`名称`和`值`构成，等号 (=) 分隔
- `键名称`显示在等号的`左侧`
- `等号`和`分号`是`保留`字符
<!--rehype:className=style-round-->

```ini
name = value
```

与下面👇 JSON 大致相同

```js
{
  "name": "value"
}
```

### 注释

注释 (`;`)

```ini
; 这里是注释文本，将被忽略
```

注释 (`#`)

```ini
# 这里是注释文本，⚠️ 部分编译器支持
```

一行之后的注释 (`;`,`#`) _(不标准)_

```ini
var = a       ; 这是一个内联注释
foo = bar     # 这是另一个内联注释
```

在某些情况下注释必须单独出现在行上

### 部分(Sections)

- 名称单独出现在一行中
- 名称在方括号 `[` 和 `]` 中
- 没有明确的 `section 结束` 分隔符
- 在下一个 `section` 声明处或文件末尾处结束
- 部分和属性名称不区分大小写
<!--rehype:className=style-round-->

```ini
[section]
key1 = a
key2 = b
```

与下面👇 `JSON` 大致相同

```json
{
  "section": {
    "key1": "a",
    "key2": "b"
  }
}
```

### 嵌套(部分解析器支持)

```ini
[section]
domain = jaywcjlove.github.io

[section.subsection]
foo = bar
```

与下面👇 `JSON` 大致相同

```js
{
  "section": {
    "domain": "jaywcjlove.github.io"
    "subsection": {
      "foo": "bar"
    }
  }
}
```

嵌套到上一节(简写)

```ini
[section]
domain = jaywcjlove.github.io
[.subsection]
foo = bar
```

### 转义字符

序列 | 意思
:- | :-
`\\` | \ (单个反斜杠，转义转义字符)
`\'` | 撇号
`\"` | 双引号
`\0` | 空字符
`\a` | 铃声/警报/声音
`\b` | 退格键，某些应用程序的[贝尔字符](https://en.wikipedia.org/wiki/Bell_character)
`\t` | 制表符
`\r` | 回车
`\n` | 换行
`\;` | 分号
`\#` | 数字符号
`\=` | 等号
`\:` | 冒号
`\x????` | 十六进制代码点的 Unicode 字符对应于 ????

另见
---

- [INI 文件配置](https://en.wikipedia.org/wiki/INI_file) _(wikipedia.org)_
- [YAML 格式配置文件备忘清单](./yaml.md) _(jaywcjlove.github.io)_
- [TOML 格式配置文件备忘清单](./toml.md) _(jaywcjlove.github.io)_