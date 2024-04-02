Elixir 备忘清单
===

提供基本语法和方法的 Elixir 快速参考备忘单。

入门
------

### 安装 Elixir
<!--rehype:wrap-class=row-span-2-->

Elixir 自带了 `iex` 这样一个交互 shell，可以随时计算 Elixir 表达式的值，运行`iex`命令，继续输入几个简单的表达式试试：

```shell
iex 2+3
5
iex 2+3 == 5
true
iex String.length("快速的狐狸跳过了懒惰的狗")
43
```

每个操作系统的文档可以在[官网](https://elixir-lang.org)网站上 [Installing Elixir](http://elixir-lang.org/install.html) 部分找到

### hello.exs

```elixir
IO.puts("Hello world from Elixir")
```

Elixir 运行命令

```shell
$ elixir hello.exs
```

### 基本类型
<!--rehype:wrap-class=row-span-3-->

Elixir 支持多种基本类型：整数、浮点、布尔值、原子和字符串。其他数据类型，如列表和元组

```elixir
# integer 整数
iex> 1          
# integer（支持2进制、8进制和16进制的整数）
iex> 0x1F       
# float
iex> 1.0        
# boolean
iex> true       
# atom / symbol
iex> :atom      
# string
iex> "elixir"   
# list
iex> [1, 2, 3]  
# tuple
iex> {1, 2, 3}  
```

### 注释

```elixir
# 这是一个单行注释
```

### 字符串插值与拼接

```elixir
iex> name = "Sean"
iex> "Hello #{name}"
"Hello Sean"

iex> "Hello " <> "world!"
"Hello world!"
```

### 变量和模式匹配

```elixir
x = 1
# => x 现在等于 1

{a, b} = {1, 2}
# => a 等于 1，b 等于 2
```

在 Elixir 中，使用 `=` 来进行赋值操作，但实际上是模式匹配。左边是模式，右边是值

### 原子（Atoms）

```elixir
:ok
```

原子是常量，它们的名称就是它们的值

### 列表（Lists）

```elixir
list = [1, 2, 3]
```

### 元组（Tuples）

```elixir
tuple = {:ok, "value"}
```

### 函数定义

```elixir
defmodule MyModule do
  def my_function(parameter) do
    # 函数体
  end
end
```

### 匿名函数

```elixir
add = fn a, b -> a + b end
```

### 控制结构
<!--rehype:wrap-class=row-span-2-->

`if/else`

```elixir
if x > 0 do
  "Positive"
else
  "Non-positive"
end
```

`case`

```elixir
case {1, 2} do
  {1, x} -> "Matched #{x}"
  _ -> "Not matched"
end
```

`cond`

```elixir
cond do
  x > 2 -> "Greater than 2"
  x == 2 -> "Equal to 2"
  true -> "Less than 2"
end
```

### 基本算术
<!--rehype:wrap-class=row-span-4-->

```elixir
iex> 1 + 2
3
iex> 5 * 5
25
iex> 10 / 2
5.0
```

运算符`/`总是返回一个 float。如果你想做整数除法或得到除法余数，你可以调用 div 和 rem 函数:

```elixir
iex> div(10, 2)
5
```

允许在调用需要一个或多个参数的函数时删除括号

```elixir
iex> div 10, 2 
5
iex> rem 10, 3
1
```

可以调用 round 函数来获取与给定浮点数最接近的整数，或者调用 trunc 函数来获取浮点数的整数部分

```elixir
iex> round(3.58)
4
iex> trunc(3.58)
3
```

可以使用 is_integer、is_float 或 is_number 分别检查参数是否为 integer、float 或 number 类型

```elixir
iex> is_integer(1)
true
iex> is_float(2.0)
true
iex> is_number(2.0)
false
```

### 布尔算术
<!--rehype:wrap-class=row-span-4-->

Elixir 提供了 `||`、`&&` 和 `!` 布尔操作符，它们支持任何类型的操作：

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

还有三个操作符（and、or、not），它们的第一个参数**必须是布尔类型**（true 和 false）:

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

### 模块和函数导入

```elixir
import List, only: [duplicate: 2]
```

### 管道操作符

```elixir
result = data
         |> process1()
         |> process2()
```

`|>` 用于链式调用函数，将前一个函数的结果作为下一个函数的第一个参数

### 比较运算符

比较运算符 ：`==`, `!=`, `===`, `!==`, `<=`, `>=`, `<` 和 `>`

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

集合
------
>
> 列表（list）、元组（tuple）、关键字列表（keyword list）、映射（map）。
>

### 列表（List）
<!--rehype:wrap-class=row-span-2-->

```elixir
iex> [3.14, :pie, "Apple"]
[3.14, :pie, "Apple"]

iex> list = [3.14, :pie, "Apple"]
iex> [3.14, :pie, "Apple"]
```

列表的开头添加元素

```elixir
iex> ["π" | list]
["π", 3.14, :pie, "Apple"]
```

列表的尾部添加元素/列表拼接

```elixir
iex> list ++ ["Cherry"]
[3.14, :pie, "Apple", "Cherry"]

```

获取列表的头部元素

```elixir
iex> hd [3.14, :pie, "Apple"]
3.14
```

获取列表的尾部元素

```elixir
iex> tl [3.14, :pie, "Apple"]
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

关键字列表非常重要，它有以下的特性：

- 键（key）都是原子（atom）
- 键（key）是有序的（定义后，顺序不会改变）
- 键（key）不必是唯一的

因为这些原因，常见的用法是作为参数传递给函数

### 映射（Map）

Elixir 的映射（maps）是键值对结构的第一选择，和关键字列表（keywords）不同，映射允许任意类型的数据作为键，而且数据并不严格排序。 你可以使用 %{} 来定义映射：

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

### 匹配元组

```elixir
iex> {a, b, c} = {:hello, "world", 42}
{:hello, "world", 42}
iex> a
:hello
iex> b
"world"
```

### 匹配列表

```
iex> [a, b, c] = [1, 2, 3]
[1, 2, 3]
iex> a
1
```

### 匹配列表的头部元素

```
iex> [head | tail] = [1, 2, 3]
[1, 2, 3]
iex> head
1
iex> tail
[2, 3]
```

### Pin 操作符

pin 操作符，就是用已经绑定的值去匹配，而不是重新绑定一个新值。

```elixir
iex> {x, ^x} = {2, 1}
{2, 1}
iex> x
2
```

### 使用下划线 `_` 忽略匹配的值

```elixir
iex> [head | _] = [1, 2, 3]
[1, 2, 3]
iex> head
1
```

控制语句
------

### if/else/end

```elixir
if condition do
  # 条件成立时执行的代码
else
  # 条件不成立时执行的代码
end
```

### case/end

```elixir
case expression do
  pattern1 -> # 匹配 pattern1 时执行的代码
  pattern2 -> # 匹配 pattern2 时执行的代码
  _ -> # 其他情况执行的代码
end
```

### cond/end

```elixir
cond do
  condition1 -> # 条件1成立时执行的代码
  condition2 -> # 条件2成立时执行的代码
  true -> # 如果没有任何条件成立，执行这里的代码
end
```

### unless/do/end

```elixir
unless condition do
  # 条件为假时执行的代码
end
```

### try/rescue/end

```elixir
try do
  # 可能会引发异常的代码
rescue
  pattern1 -> # 匹配 pattern1 的异常处理代码
  pattern2 -> # 匹配 pattern2 的异常处理代码
  _ -> # 其他异常处理代码
end
```

### case
<!--rehype:wrap-class=row-span-2-->

允许将一个值与许多模式进行比较，直到找到匹配的模式：

```elixir
iex> case {1, 2, 3} do
  {4, 5, 6} ->
    "This clause won't match"
  {1, x, 3} ->
    "该子句将匹配并绑定 x 到该子句中的 2"
  _ ->
    "This clause would match any value"
end
"该子句将匹配并绑定 x 到该子句中的 2"
```

还可以使用when指定额外的条件

```elixir
iex> case {1, 2, 3} do
  {1, x, 3} when x > 0 ->
    "Will match"
  _ ->
    "如果不满足保护条件，将匹配"
end
"Will match"
```

### cond

当我们需要根据条件进行匹配而不是值时，类似于其他语言的 `else if` 或 `elsif`，可以使用 `cond` 控制结构。

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
```

如果所有的条件都返回 `nil` 或 `false`，则会引发一个错误（CondClauseError）。因此，需要添加一个 `final` 条件，等于 `true`，它将始终匹配：

```elixir
iex> cond do
  2 + 2 == 5 ->
    "This is never true"
  2 * 2 == 3 ->
    "Nor this"
  true ->
    "这始终为真（等同于 else）"
end
"这始终为真（等同于 else）"
```

### 变量的作用域

如果在if、case和类似的构造中声明或更改了任何变量，则声明和更改将只在构造中可见。

```elixir
iex> x = 1
1
if true do
  x = x + 1
end
2
iex> x
1
```

如果要更改值，则必须从if返回值：

```elixir
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

### 函数定义

```elixir
def function_name(param1, param2) do
  # 函数体
end
```

示例：

```elixir
def sum(a, b) do
  a + b
end
```

### 模式匹配的多个函数定义
<!--rehype:wrap-class=row-span-2-->

```elixir
def fun_name(:atom) do
  # 对于 :atom 的处理
end

def fun_name("string") do
  # 对于 "string" 的处理
end

def fun_name(number) when is_integer(number) do
  # 对于整数的处理
end
```

示例：

```elixir
def is_positive(number) when number > 0 do
  true
end

def is_positive(_), do: false
```

### 函数调用

```elixir
module_name.function_name(arg1, arg2)
```

示例：

```elixir
Enum.map([1, 2, 3], &(&1 * 2))
```

### 函数参数默认值

```elixir
def function_name(parameter \\ 默认值) do
  # 函数体
end
```

示例：

```elixir
def greet(name \\ "World") do
  "Hello, #{name}!"
end
```

### 可变参数数量

```elixir
def function_name(param1, param2 \\ []) do
  # 函数体
end
```

示例：

```elixir
def sum(numbers) do
  Enum.sum(numbers)
end
```

### 函数文档注释

```elixir
@doc """
这是函数的文档。
"""
```

示例：

```elixir
@doc """
Adds two numbers together.

## 示例

    iex> MyModule.add(1, 2)
    3
"""
def add(a, b) do
  a + b
end
```

这些是 Elixir 函数语法的基本要点，可以帮助你开始编写函数。

### 匿名函数

```elixir
iex> sum = fn (a, b) -> a + b end
iex> sum.(2, 3)
5
```

可以使用 & 语法来简化匿名函数的定义：

```elixir
iex> sum = &(&1 + &2)
iex> sum.(2, 3)
5
```

### 闭包

匿名函数去引用外部的变量，这通常被称为闭包。

```elixir
iex> double = fn a -> add.(a, a) end
#Function<6.71889879/1 in :erl_eval.expr/5>
double.(2)
4
```

闭包与守卫

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

命名函数是通过 def 关键字定义在某个模块中

```elixir
defmodule Greeter do
  def hello(name) do
    "Hello, " <> name
  end
end

iex> Greeter.hello("Sean")
"Hello, Sean"
```

简写为一行：

```elixir
defmodule Greeter do
  def hello(name), do: "Hello, " <> name
end
```

私有函数

```elixir
defmodule Greeter do
  def hello(name), do: phrase <> name
  # 使用defp来定义私有函数
  defp phrase, do: "Hello, " 
end
```

函数的默认参数：使用 `\\` 来定义默认参数

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
