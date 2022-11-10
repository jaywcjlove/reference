TOML 备忘清单
===

这是 TOML 格式配置文件语法的快速参考备忘清单。

入门
----

### 介绍

[TOML](https://toml.io/en/) 是一种最小的配置文件格式，由于明显的语义而易于阅读。

- [Document](https://toml.io/en/latest) _(toml.io)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/toml/) _(learnxinyminutes.com)_
- [Better TOML VSCode 插件](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml) _(visualstudio.com)_

### 示例

```toml
bool = true
date = 2006-05-27T07:32:00Z
string = "hello"
number = 42
float = 3.14
scientificNotation = 1e+12
```

### 注释

```yaml
# A single line comment example
# block level comment example
# 注释行 1
# 注释行 2
# 注释行 3
```

### 整数

```toml
int1 = +42
int2 = 0
int3 = -21
integerRange = 64
```

### 浮点数

```toml
float2 = 3.1415
float4 = 5e+22
float7 = 6.626e-34
```

### 布尔值

```toml
bool1 = true
bool2 = false
boolMustBeLowercase = true
```

### 时间日期

```toml
date1 = 1989-05-27T07:32:00Z
date2 = 1989-05-26T15:32:00-07:00
date3 = 1989-05-27T07:32:00
date4 = 1989-05-27
time1 = 07:32:00
time2 = 00:32:00.999999
```

### 字符串

```toml
str1 = "I'm a string."
str2 = "You can \"quote\" me."
str3 = "Name\tJos\u00E9\nLoc\tSF."
```

See: [Strings](#字符串)

### Table

```toml
[owner]
name = "Tom Preston-Werner"
dob = 1979-05-27T07:32:00-08:00
```

See: [Tables](#toml-tables)

### 数组

```toml
array1 = [1, 2, 3]
array2 = ["Commas", "are", "delimiter"]
array3 = [8001, 8001, 8002]
```

### 友好数组
<!--rehype:wrap-class=col-span-2-->

```toml
array1 = [ "Don't mix", "different", "types" ]
array2 = [ [ 1.2, 2.4 ], ["all", 'strings', """are the same""", '''type'''] ]
array3 = [
  "Whitespace", "is", 
  "ignored"
]
```

TOML 字符串
-----

### 多行字符串

```toml
multiLineString = """
Multi-line basic strings are surrounded
by three quotation marks on each side
and allow newlines. 
"""
```

### 文字字符串

```toml
path = 'C:\Users\nodejs\templates'
path2 = '\\User\admin$\system32'
quoted = 'Tom "Dubs" Preston-Werner'
regex = '<\i\c*\s*>'
```

用单引号括起来。不允许转义。

### 多行文字字符串

```toml
re = '''\d{2} apps is t[wo]o many'''
lines = '''
The first newline is
trimmed in raw strings.
All other whitespace
is preserved.
'''
```

TOML Tables
-----

### 基本的

```toml
[name]
foo = 1
bar = 2
```

`foo` 和 `bar` 是名为`name` 的表中的键

### 嵌套

```toml
[table1]
foo = "bar"
[table1.nested_table]
baz = "bat"
```

### 类数组
<!--rehype:wrap-class=row-span-2-->

```toml
[[comments]]
author = "Nate"
text = "Great Article!"
[[comments]]
author = "Anonymous"
text = "Love it!"
```

#### ↓ 等效的 JSON

```json
{
  "comments" : [
    {
      "author" : "Nate",
      "text" : "Great Article!"
    },
    {
      "author" : "Anonymous",
      "text" : "Love It!"
    }
  ]
}
```

### 点分隔

```toml
[dog."tater.man"]
type = "pug"
```

#### ↓ 等效的 JSON

```json
{
  "dog": {
    "tater.man": {
      "type": "pug"
    }
  }
}
```

### 多嵌套

```toml
[foo.bar.baz]
bat = "hi"
```

#### ↓ 等效的 JSON

```json
{
 "foo" : {
  "bar" : {
   "baz" : {
    "bat" : "hi"
   }
  }
 }
}
```

### 忽略空格

```toml
[a.b.c]          # this is best practice
[ d.e.f ]        # same as [d.e.f]
[ g .  h  .i ]   # same as [g.h.i]
[ j . "ʞ" .'l' ] # same as [j."ʞ".'l']
```

### 内联表
<!--rehype:wrap-class=col-span-2-->

```toml
name = { first = "Tom", last = "Preston-Werner" }
point = { x = 1, y = 2 }
animal = { type.name = "pug" }
```

另见
---

- [Document](https://toml.io/en/latest) _(toml.io)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/toml/) _(learnxinyminutes.com)_
- [Better TOML VSCode 插件](https://marketplace.visualstudio.com/items?itemName=bungcip.better-toml) _(visualstudio.com)_

- [INI 格式配置文件备忘清单](./ini.md) _(jaywcjlove.github.io)_
- [YAML 格式配置文件备忘清单](./yaml.md) _(jaywcjlove.github.io)_
