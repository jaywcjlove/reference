jq 备忘清单
===

这个快速参考备忘单提供了使用 [jq](https://stedolan.github.io/jq/) 命令的各种方法。

入门
----

### 介绍

jq 就像用于 JSON 数据的 [sed](./sed.md) - 您可以使用它来切片、过滤、映射和转换结构化数据

- [jq 官网](https://stedolan.github.io/jq/) _(stedolan.github.io)_
- [jq 命令使用](https://jaywcjlove.github.io/linux-command/c/jq.html) _(jaywcjlove.github.io)_

安装

```bash
$ sudo apt-get install jq # Debian& Ubuntu
$ sudo dnf install jq     # Fedora 
$ sudo zypper install jq  # openSUSE
$ sudo pacman -S jq    # Arch
$ brew install jq      # macOS & Homebrew
$ port install jq      # macOS & MacPorts
```

语法

```bash
$ jq [options] <jq filter> [file...]
$ jq [options] --args <jq filter> [strings...]
$ jq [options] --jsonargs <jq filter> [JSON_TEXTS...]
```
<!--rehype:className=wrap-text -->

### 选项
<!--rehype:wrap-class=col-span-2-->

:- | -
:- | -
`-c`               | 紧凑而不是漂亮的输出
`-n`               | 使用`null`作为单个输入值
`-e`               | 根据输出设置退出状态代码
`-s`               | 将所有输入读取（吸取）到数组中；应用过滤器
`-r`               | 输出原始字符串，而不是JSON文本
`-R`               | 读取原始字符串，而不是JSON文本
`-C`               | 为 JSON 着色
`-M`               | 单色（不要为JSON着色）
`-S`               | 在输出上排序对象的键
`--tab`            | 使用制表符进行缩进
`--arg a v`        | 将变量 `$a` 设置为 value `<v>`
`--argjson a v`    | 将变量 `$a` 设置为 JSON value `<v>`
`--slurpfile a f`  | 将变量 `$a` 设置为从`<f>`读取的JSON文本数组
`--rawfile a f`    | 将变量 `$a` 设置为包含`<f>`内容的字符串
`--args`           | 其余参数是字符串参数，而不是文件
`--jsonargs`       | 其余的参数是JSON参数，而不是文件
`--`               | 终止参数处理

学习示例
---

### 获取一个键的值

```bash
$ echo '{"foo": 42, "bar": "less interesting data"}' | jq '.foo'
```
<!--rehype:className=wrap-text -->

输出结果

```bash
42
```

### 数组运算

```bash
$ echo '[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]' | jq '.[1]'
```
<!--rehype:className=wrap-text -->

输出结果

```bash
{
  "name": "XML",
  "good": false
}
```

### 构造一个数组/对象

```bash
$ echo '{"user":"stedolan","titles":["JQ Primer", "More JQ"]}' | jq '{user, title: .titles[]}'
```
<!--rehype:className=wrap-text -->

输出结果

```bash
{
  "user": "stedolan",
  "title": "JQ Primer"
}
{
  "user": "stedolan",
  "title": "More JQ"
}
```

### 计算一个值的长度

```bash
$ echo '[[1,2], "string", {"a":2}, null]' | jq '.[] | length'              
```
<!--rehype:className=wrap-text -->

输出结果

```bash
2
6
1
0
```

### 取出数组中的键

```bash
$ echo '{"abc": 1, "abcd": 2, "Foo": 3}' | jq 'keys'              
```
<!--rehype:className=wrap-text -->

输出结果

```bash
[
  "Foo",
  "abc",
  "abcd"
]
```

### 使用多个过滤器

```bash
$ echo '{ "foo": 42, "bar": "something else", "baz": true}' | jq '.foo, .bar' 
```
<!--rehype:className=wrap-text -->

输出结果

```bash
42
"something else"
```

### 管道传递给下一个过滤器

```bash
$ echo '[{"name":"JSON", "good":true}, {"name":"XML", "good":false}]' | jq '.[] | .name'     
```
<!--rehype:className=wrap-text -->

输出结果

```bash
"JSON"
"XML"
```

### 条件语句判断

```bash
$ echo '[1,5,3,0,7]' | jq 'map(select(. >= 2))'        
```
<!--rehype:className=wrap-text -->

输出结果

```bash
[
  5,
  3,
  7
]
```

### 每个输入调用过滤器

```bash
$ echo '[1,2,3]' | jq 'map(.+1)'
```

输出结果

```bash
[
  2,
  3,
  4
]
```

### 条件判断

```bash
$ echo '2' | jq 'if . == 0 then "zero" elif . == 1 then "one" else "many" end'
```
<!--rehype:className=wrap-text -->

输出结果

```bash
"many"
```

### 字符串插入值并进行运算

```bash
$ echo '42' | jq '"The input was \(.), which is one less than \(.+1)"'
```
<!--rehype:className=wrap-text -->

输出结果

```bash
"The input was 42, which is one less than 43"
```
<!--rehype:className=wrap-text -->

### 字符串转 JSON 数组

```bash
$ echo 'a b c d' | jq -R 'split(" ")'
```
<!--rehype:className=wrap-text -->

输出结果

```json
[
  "a",
  "b",
  "c",
  "d"
]
```
<!--rehype:className=wrap-text -->

### 更改发布注册表

```bash
echo "$(jq '.publishConfig.registry = "https://npm.pkg.github.com"' package.json)" > package.json
```

将组织范围添加到包名称

```bash
echo "$(jq '.name = "@scope/package"' package.json)" > package.json
```

另见
----

- [jq 官网](https://stedolan.github.io/jq/) _(stedolan.github.io)_
- [jq 命令使用](https://jaywcjlove.github.io/linux-command/c/jq.html) _(jaywcjlove.github.io)_
