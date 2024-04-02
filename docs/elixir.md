Elixir 备忘清单
===

提供基本语法和方法的 Elixir 快速参考备忘单。

入门
------

### 安装Elixir

> 每个操作系统的安装说明可以在 elixir-lang.org 网站上 [Installing Elixir](http://elixir-lang.org/install.html) 部分找到。  
> Elixir 自带了`iex`这样一个交互 shell，可以随时计算 Elixir 表达式的值,运行`iex`命令，继续输入几个简单的表达式试试：

```shell
iex 2+3
5
iex 2+3 == 5
true
iex String.length("The quick brown fox jumps over the lazy dog")
43
```

### hello.exs

```elixir
IO.puts("Hello world from Elixir")
```

Elixir 运行命令

```shell
$ elixir hello.exs
```

### 基本类型
>
> Elixir 支持多种基本类型：整数、浮点、布尔值、原子和字符串。其他数据类型，如列表和元组

```elixir
iex> 1          # integer
iex> 0x1F       # integer（支持二进制、八进制和十六进制的整数）
iex> 1.0        # float
iex> true       # boolean
iex> :atom      # atom / symbol
iex> "elixir"   # string
iex> [1, 2, 3]  # list
iex> {1, 2, 3}  # tuple
```

### 基本算术

```elixir
iex> 1 + 2
3
iex> 5 * 5
25
iex> 10 / 2
5.0
```

> 运算符`/`总是返回一个float。如果你想做整数除法或得到除法余数，你可以调用div和rem函数:

```elixir
iex> div(10, 2)
5
iex> div 10, 2 # Elixir允许在调用需要一个或多个参数的函数时删除括号
5
iex> rem 10, 3
1
```

> 可以调用round函数来获取与给定浮点数最接近的整数，或者调用trunc函数来获取浮点数的整数部分

```elixir
iex> round(3.58)
4
iex> trunc(3.58)
3
```

> 可以使用is_integer、is_float或is_number分别检查参数是否为integer、float或number类型

```elixir
iex> is_integer(1)
true
iex> is_float(2.0)
true
iex> is_number(2.0)
false
```

### 布尔算术
>
> Elixir 提供了 `||`、`&&` 和 `!` 布尔操作符，它们支持任何类型的操作：

```elixir
iex> -20 || true
-20
iex> false || 42
42

iex> 42 && true
true
iex> 42 && nil
nil

iex> !42
false
iex> !false
true
```

> 还有三个操作符（and、or、not），它们的第一个参数**必须是布尔类型**（true 和 false）:

```elixir
iex> true and 42
42
iex> false or true
true
iex> not false
true
iex> 42 and true
** (ArgumentError) argument error: 42
iex> not 42
** (ArgumentError) argument error
```

### 比较运算符
>
> 比较运算符 ：`==`, `!=`, `===`, `!==`, `<=`, `>=`, `<` 和 `>`

```elixir
iex> 1 > 2
false
iex> 1 != 2
true
iex> 2 == 2
true
iex> 2 <= 3
true
```

### 字符串插值与拼接

```elixir
iex> name = "Sean"
iex> "Hello #{name}"
"Hello Sean"

iex> "Hello " <> "world!"
"Hello world!"
```

集合
------
>
> 列表（list）、元组（tuple）、关键字列表（keyword list）、映射（map）。
>
### 列表（List）

```elixir
iex> [3.14, :pie, "Apple"]
[3.14, :pie, "Apple"]

iex> list = [3.14, :pie, "Apple"]
iex> [3.14, :pie, "Apple"]
iex> ["π" | list] # 列表的开头添加元素
["π", 3.14, :pie, "Apple"]
iex> list ++ ["Cherry"] # 列表的尾部添加元素/列表拼接
[3.14, :pie, "Apple", "Cherry"]

iex> hd [3.14, :pie, "Apple"] # 获取列表的头部元素
3.14
iex> tl [3.14, :pie, "Apple"] # 获取列表的尾部元素
[:pie, "Apple"]
```

### 元组（Tuple）

```elixir
iex> {3.14, :pie, "Apple"}
{3.14, :pie, "Apple"}
```

### 关键字列表（Keyword List）

```elixir
iex> [foo: "bar", hello: "world"]
[foo: "bar", hello: "world"]
iex> [{:foo, "bar"}, {:hello, "world"}]
[foo: "bar", hello: "world"]
```

> 关键字列表非常重要，它有以下的特性：

- 键（key）都是原子（atom）
- 键（key）是有序的（定义后，顺序不会改变）
- 键（key）不必是唯一的

> 因为这些原因，关键字列表最常见的用法是作为参数传递给函数。

### 映射（Map）

> Elixir 的映射（maps）是键值对结构的第一选择，和关键字列表（keywords）不同，映射允许任意类型的数据作为键，而且数据并不严格排序。 你可以使用 %{} 来定义映射：

```elixir
iex> map = %{:foo => "bar", "hello" => :world}
%{:foo => "bar", "hello" => :world}
iex> map[:foo]
"bar"
iex> map["hello"]
:world
```

模式匹配
------
>
> 模式匹配是 Elixir 很强大的特性，它允许我们匹配简单值、数据结构、甚至函数。
>
### 匹配操作符

```elixir
# 匹配元组
iex> {a, b, c} = {:hello, "world", 42}
{:hello, "world", 42}
iex> a
:hello
iex> b
"world"

# 匹配列表
iex> [a, b, c] = [1, 2, 3]
[1, 2, 3]
iex> a
1
# 匹配列表的头部元素
iex> [head | tail] = [1, 2, 3]
[1, 2, 3]
iex> head
1
iex> tail
[2, 3]
```

### Pin操作符

> pin 操作符，就是用已经绑定的值去匹配，而不是重新绑定一个新值。

```elixir
iex> {x, ^x} = {2, 1}
{2, 1}
iex> x
2

# 使用下划线_忽略匹配的值
iex> [head | _] = [1, 2, 3]
[1, 2, 3]
iex> head
1
```

控制语句
------
>
> case, cond, and if
>
### case
>
> case允许我们将一个值与许多模式进行比较，直到找到匹配的模式：

```elixir
iex> case {1, 2, 3} do
  {4, 5, 6} ->
    "This clause won't match"
  {1, x, 3} ->
    "This clause will match and bind x to 2 in this clause"
  _ ->
    "This clause would match any value"
end
"This clause will match and bind x to 2 in this clause"

# 还可以使用when指定额外的条件
iex> case {1, 2, 3} do
  {1, x, 3} when x > 0 ->
    "Will match"
  _ ->
    "Would match, if guard condition were not satisfied"
end
"Will match"
```

### cond

> 当我们需要匹配条件而不是值的时候，可以使用 cond，这和其他语言的 else if 或者 elsif 相似

```elixir
iex> cond do
  2 + 2 == 5 ->
    "This will not be true"
  2 * 2 == 3 ->
    "Nor this"
  1 + 1 == 2 ->
    "But this will"
end
"But this will"

# 如果所有的条件都返回nil或false，则会引发一个错误（CondClauseError）。因此，需要添加一个final条件，等于true，它将始终匹配：
iex> cond do
  2 + 2 == 5 ->
    "This is never true"
  2 * 2 == 3 ->
    "Nor this"
  true ->
    "This is always true (equivalent to else)"
end
"This is always true (equivalent to else)"
```

### if/unless

```elixir
iex> if true do
  "This works!"
end
"This works!"

iex> unless true do
  "This will never be seen"
end
nil

# if...else...
iex> if nil do
  "This won't be seen"
else
  "This will"
end
"This will"

# 关于Elixir中变量的作用域：如果在if、case和类似的构造中声明或更改了任何变量，则声明和更改将只在构造中可见。
iex> x = 1
1
if true do
  x = x + 1
end
2
iex> x
1

# 如果要更改值，则必须从if返回值：
iex> x = 1
1
iex> x = if true do
  x + 1
else
  x
end
2
```

函数
------

### 匿名函数
>
> 使用 fn 和 end 关键字来定义匿名函数，在这两者之间，可以定义任意数量的参数和函数体，它们用 -> 分隔开。

```elixir
iex> sum = fn (a, b) -> a + b end
iex> sum.(2, 3)
5

# 可以使用 & 语法来简化匿名函数的定义：
iex> sum = &(&1 + &2)
iex> sum.(2, 3)
5
```

### 闭包
>
> 匿名函数去引用外部的变量，这通常被称为闭包。

```elixir
iex> double = fn a -> add.(a, a) end
#Function<6.71889879/1 in :erl_eval.expr/5>
double.(2)
4
```

> 闭包与守卫

```elixir
iex> f = fn
  x, y when x > 0 -> x + y
  x, y -> x * y
end

iex> f.(1, 3)
4
iex> f.(-1, 3)
-3
```

### 命名函数
>
> 命名函数是通过 def 关键字定义在某个模块中

```elixir
defmodule Greeter do
  def hello(name) do
    "Hello, " <> name
  end
end

iex> Greeter.hello("Sean")
"Hello, Sean"

# 简写为一行：
defmodule Greeter do
  def hello(name), do: "Hello, " <> name
end

# 私有函数
defmodule Greeter do
  def hello(name), do: phrase <> name
  defp phrase, do: "Hello, " # 使用defp来定义私有函数
end
```

> 函数的默认参数：使用`\\`来定义默认参数

```elixir
defmodule Greeter do
  def hello(name, language_code \\ "en") do
    phrase(language_code) <> name
  end

  defp phrase("en"), do: "Hello, "
  defp phrase("es"), do: "Hola, "
end
```

Enumerables 与 Streams
------
>
> Elixir 提供了 Enum 和 Stream 两个模块，用于处理集合。
>
### Enum
>
> Enum 模块提供了对集合的常用操作，如 map、filter、reduce、sort、chunk、join、into 等。

```elixir
iex> Enum.map([1, 2, 3], fn x -> x * 2 end)
[2, 4, 6]
iex> Enum.map(%{1 => 2, 3 => 4}, fn {k, v} -> k * v end)
[2, 12]
```

### Stream
>
> 作为Enum的替代品，Elixir提供了支持懒惰操作的Stream模块

```elixir
iex> 1..100_000 |> Stream.map(&(&1 * 3)) |> Stream.filter(odd?) |> Enum.sum()
7500000000
```

> 流文件操作

```elixir
iex> stream = File.stream!("path/to/file")
%File.Stream{
  line_or_bytes: :line,
  modes: [:raw, :read_ahead, :binary],
  path: "path/to/file",
  raw: true
}
Enum.take(stream, 10)

# 上面的例子将提取所选文件的前10行。这意味着流对于处理大型文件甚至是网络资源等慢速资源非常有用。
```

另见
----

- [Elixir 官方](https://elixir-lang.org/) _(elixir-lang.org)_
- [Elixir School](https://elixirschool.com/) _(elixirschool.com)_
