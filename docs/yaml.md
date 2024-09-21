YAML 备忘清单
====

这是理解和编写 YAML 格式配置文件的快速参考备忘单。

入门
-----------

### 介绍

[YAML](https://yaml.org/) 是一种数据序列化语言，旨在供人类直接读写

- YAML 不允许使用制表符
- 元素部分之间必须有空间
- YAML 区分大小写
- 以 `.yaml` 或 `.yml` 扩展名结束您的 YAML 文件
- YAML 是 JSON 的超集
- Ansible playbook 是 YAML 文件
<!--rehype:className=style-round-->

### 标量类型
<!--rehype:wrap-class=row-span-2-->

```yaml
n1: 1            # 整数
n2: 1.234        # 浮点
s1: 'abc'        # 字符串
s2: "abc"        # 字符串
s3: abc          # 字符串
b: false         # 布尔类型
d: 2015-04-05    # 日期类型
```

#### ↓ 等效的 JSON

```json
{
  "n1": 1,
  "n2": 1.234,
  "s1": "abc",
  "s2": "abc",
  "s3": "abc",
  "b": false,
  "d": "2015-04-05"
}
```

使用空格缩进。 元素部分之间必须有空间。

### 变量

```yaml
some_thing: &VAR_NAME foobar
other_thing: *VAR_NAME
```

#### ↓ 等效的 JSON

```json
{
  "some_thing": "foobar",
  "other_thing": "foobar"
}
```

### 注释

```yaml
# A single line comment example
# block level comment example
# comment line 1
# comment line 2
# comment line 3
```

### 多行字符串

```yaml
description: |
  hello
  world
```

#### ↓ 等效的 JSON

```json
{"description": "hello\nworld\n"}
```

### 继承
<!--rehype:wrap-class=row-span-2-->

```yaml
parent: &defaults
  a: 2
  b: 3
child:
  <<: *defaults
  b: 4
```

#### ↓ 等效的 JSON

```json
{
  "parent": {
    "a": 2,
    "b": 3
  },
  "child": {
    "a": 2,
    "b": 4
  }
}
```

### 参考
<!--rehype:wrap-class=row-span-2-->

```yaml
values: &ref
  - Will be
  - reused below
  
other_values:
  i_am_ref: *ref
```

#### ↓ 等效的 JSON

```json
{
  "values": [
    "Will be",
    "reused below"
  ],
  "other_values": {
    "i_am_ref": [
      "Will be",
      "reused below"
    ]
  }
}
```

### 折叠的字符串

```yaml
description: >
  hello
  world
```

#### ↓ 等效的 JSON

```json
{"description": "hello world\n"}
```

### 两份文件

```yaml
---
document: this is doc 1
---
document: this is doc 2
```

YAML使用`---`将指令与文档内容分开。

YAML Collections
-----------

### 序列

```yaml
- Mark McGwire
- Sammy Sosa
- Ken Griffey
```

#### ↓ 等效的 JSON

```json
[
  "Mark McGwire",
  "Sammy Sosa",
  "Ken Griffey"
]
```

### 映射

```yaml
hr:  65       # Home runs
avg: 0.278    # Batting average
rbi: 147      # Runs Batted In
```

#### ↓ 等效的 JSON

```json
{
  "hr": 65,
  "avg": 0.278,
  "rbi": 147
}
```

### 映射到序列

```yaml
attributes:
  - a1
  - a2
methods: [getter, setter]
```

#### ↓ 等效的 JSON

```json
{
  "attributes": ["a1", "a2"],
  "methods": ["getter", "setter"]
}
```

### 映射序列

```yaml
children:
  - name: Jimmy Smith
    age: 15
  - name: Jimmy Smith
    age: 15
  -
    name: Sammy Sosa
    age: 12
```

#### ↓ 等效的 JSON

```json
{
  "children": [
    {"name": "Jimmy Smith", "age": 15},
    {"name": "Jimmy Smith", "age": 15},
    {"name": "Sammy Sosa", "age": 12}
  ]
}
```

### 序列的序列

```yaml
my_sequences:
  - [1, 2, 3]
  - [4, 5, 6]
  -  
    - 7
    - 8
    - 9
    - 0 
```

#### ↓ 等效的 JSON

```json
{
  "my_sequences": [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 0]
  ]
}
```

### 映射的映射

```yaml
Mark McGwire: {hr: 65, avg: 0.278}
Sammy Sosa: {
    hr: 63,
    avg: 0.288
  }
```

#### ↓ 等效的 JSON

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

### 嵌套集合

```yaml
Jack:
  id: 1
  name: Franc
  salary: 25000
  hobby:
    - a
    - b
  location: {country: "A", city: "A-A"}
```

#### ↓ 等效的 JSON

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

### 无序集

```yaml
set1: !!set
  ? one
  ? two
set2: !!set {'one', "two"}
```

#### ↓ 等效的 JSON

```json
{
  "set1": {"one": null, "two": null},
  "set2": {"one": null, "two": null}
}
```

集合表示为一个映射，其中每个键都与一个空值相关联

### 有序映射

```yaml
ordered: !!omap
- Mark McGwire: 65
- Sammy Sosa: 63
- Ken Griffy: 58
```

#### ↓ 等效的 JSON

```json
{
  "ordered": [
     {"Mark McGwire": 65},
     {"Sammy Sosa": 63},
     {"Ken Griffy": 58}
  ]
}
```

YAML 参考
--------------

### 条款

- 序列又名数组或列表
- 标量又名字符串或数字
- 映射又名哈希或字典
<!--rehype:className=style-round-->

基于 YAML.org [refcard](https://yaml.org/refcard.html)。

### 文档指标

:- | :-
:- | :-
`%`   | 指令指标
`---` | 文档标题
`...` | 文档终结者

### 收集指标
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`?`  | 关键指标
`:`  | 价值指标
`-`  | 嵌套系列条目指示器
`,`  | 单独的内联分支条目
`[]` | 环绕串联系列分支
`{}` | 环绕在线键控分支

### 别名指标

:- | :-
:- | :-
`&` | 锚属性
`*` | 别名指示符

### 特殊键

:- | :-
:- | :-
`=`  | 默认“值”映射键
`<<` | 合并来自另一个映射的键

### 标量指标

:- | :-
:- | :-
`''`  | 环绕内联未转义标量
`"`   | 环绕内嵌转义标量
`|`   | 块标量指示器
`>`   | 折叠标量指示器
`-`   | 剥离 chomp 修饰符（`\|-` 或 `>-`）
`+`   | 保留 chomp 修饰符（`\|+` 或 `>+`）
`1-9` | 显式缩进修饰符（`\|1` 或 `>2`）。 <br/> 修饰符可以组合（`\|2-`, `>+1`）

### 标签属性（通常未指定）
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
`none`   | 未指定的标签（由应用程序自动解析）
`!`      | 非特定标签（默认情况下，`!!map`/`!!seq`/`!!str`）
`!foo`   | 主要（按照惯例，表示本地 `!foo` 标记）
`!!foo`  | 次要的（按照惯例，表示 `tag:yaml.org,2002:foo`）
`!h!foo` | 需要 `%TAG !h! <prefix>`（然后表示 `<prefix>foo`）
`!<foo>` | 逐字标记（始终表示“foo”）
<!--rehype:class=auto-wrap-->

### 杂项指标

|     |                             |
|-----|-----------------------------|
| `#` | 一次性评论指示器 |
| <code>\`@</code> | 两者都保留供将来使用 |

### 核心类型（默认自动标签）
<!--rehype:wrap-class=row-span-2-->

|         |                                          |
|---------|------------------------------------------|
| `!!map` | `{Hash table, dictionary, mapping}`      |
| `!!seq` | `{List, array, tuple, vector, sequence}` |
| `!!str` | Unicode 字符串                            |

### 转义码
<!--rehype:wrap-class=row-span-3-->

#### Numeric

- `\x12` (8-bit)
- `\u1234` (16-bit)
- `\U00102030` (32-bit)
<!--rehype:className=cols-2 style-none-->

#### Protective

- `\\` (\\)
- `\"` (")
- `\` ( )
- `\<TAB>` (TAB)
<!--rehype:className=cols-3 style-none-->

#### C

- `\0` (NUL)
- `\a` (BEL)
- `\b` (BS)
- `\f` (FF)
- `\n` (LF)
- `\r` (CR)
- `\t` (TAB)
- `\v` (VTAB)
<!--rehype:className=cols-3 style-none-->

#### 额外的

- `\e` (ESC)
- `\_` (NBSP)
- `\N` (NEL)
- `\L` (LS)
- `\P` (PS)
<!--rehype:className=cols-3 style-none-->
  
### 更多类型

|          |                             |
|----------|-----------------------------|
| `!!set`  | `{cherries, plums, apples}` |
| `!!omap` | `[one: 1, two: 2]`          |

### 与语言无关的标量类型
<!--rehype:wrap-class=col-span-2-->

|                           |                                            |
|---------------------------|--------------------------------------------|
| `{~, null}`               | 空（无值）。 |
| `[1234, 0x4D2, 02333]`    | [十进制整数、十六进制整数、八进制整数] |
| `[1_230.15, 12.3015e+02]` | [固定浮点数，指数浮点数] |
| `[.inf, -.Inf, .NAN]`     | [无穷大（浮点数），负数，不是数字] |
| `{Y, true, Yes, ON}`      | 布尔真 |
| `{n, FALSE, No, off}`     | 布尔假 |
<!--rehype:class=auto-wrap-->

另见
---

- [YAML Reference Card](https://yaml.org/refcard.html) _(yaml.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/zh-cn/yaml-cn/) _(learnxinyminutes.com)_
- [YAML lint online](http://www.yamllint.com/) _(yamllint.com)_
- [INI 格式配置文件备忘清单](./ini.md) _(jaywcjlove.github.io)_
- [TOML 格式配置文件备忘清单](./toml.md) _(jaywcjlove.github.io)_
