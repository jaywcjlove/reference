Julia 备忘清单
===

本备忘清单旨在快速理解 [Julia](https://julialang.org/) 一份简单而粗略的语言概览，供您参考。

入门
---

### Julia 是什么？
<!--rehype:wrap-class=row-span-3-->

- **`Julia`** 是一种为科学计算而生的，开源、多平台、高性能的高级编程语言
- **`Julia`** 有一个基于 LLVM 的 JIT 编译器，这让使用者无需编写底层的代码也能拥有像 C 与 FORTRAN 那样的性能。因为代码在运行中编译，你可以在 shell 或 REPL 中运行代码，这也是一种推荐的工作流程
- **`Julia`** 是动态类型的。并且提供了为并行计算和分布式运算设计的多重派发机制
- **`Julia`** 自带包管理器
- **`Julia`** 有许多内置的数学函数，包括特殊函数 (例如：Gamma 函数)。并且支持开箱即用的复数运算
- **`Julia`** 允许你通过类似 Lisp 的宏来自动生成代码
- **`Julia`** 诞生于 2012 年

### 赋值语句

```julia
answer = 42
x, y, z = 1, [1:10; ], "A string"
x, y = y, x     # 交换 x, y
```

### 常量定义

```julia
const DATE_OF_BIRTH = 2012
```

### 行尾注释

```julia
i = 1           # 这是一行注释
# 多行注释
#= 这是另一行注释 =#
```

### 链式操作

```julia
x = y = z = 1   # 从右向左
0 < x < 3       # true
5 < x != y < 5  # false
```

### 函数定义

```julia
function add_one(i)
    return i + 1
end
```

### 插入 LaTeX 符号

```julia
\delta + [Tab] # δ
```

### 运算符
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
基本算数运算 | `+`，`-`，`*`，`/`
幂运算 | `2^3` => 8
除法 | `3/12` => 0.25
反向除法 | `7\3 == 3/7` => true
取余 | `x % y` 或 `rem(x,y)`
取反 | `!true` => false
等于 | `a == b`
不等于 | `a != b` 或 `a ≠ b`
小于与大于 | `<` 与 `>`
小于等于 | `<=` 或 `≤`
大于等于 | `>=` 或 `≥`
逐元素运算(点运算) | `[1, 2, 3] .+ [1, 2, 3] == [2, 4, 6]` => true<br /> `[1, 2, 3] .* [1, 2, 3] == [1, 4, 9]` => true
检测非数值(NaN) | `isnan(NaN)` => true <br />而不是 `NaN == NaN` => false
三元运算符 | `a == b ? "Equal" : "Not equal"`
短路 AND 和 OR 表达式 | `a && b` 和 `a \|\| b`
对象等价 | `a === b`

### shell/REPL 环境
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
上一次运算的结果 | `ans`
中断命令执行 | <kbd>Ctrl</kbd> + <kbd>C</kbd>
清屏 | <kbd>Ctrl</kbd> + <kbd>L</kbd>
运行程序文件 | `include("filename.jl")`
查找 func 相关的帮助 | `?func`
查找 func 的所有定义 | `apropos("func")`
命令行模式 | `;`
包管理模式 | `]`
帮助模式 | `?`
查找特殊符号输入方式 | `?☆ # "☆" can be typed by \bigwhitestar<tab>`
退出特殊模式，返回到 REPL | 在空行上按 <kbd>Backspace</kbd>
退出 REPL | `exit()` 或 <kbd>Ctrl</kbd> + <kbd>D</kbd>

### 缺失值与空值

:- | :-
:- | :-
空值(Null) | `nothing`
缺失数据 | `missing`
浮点数的非数值 | `NaN`
滤除缺失值 | `collect(skipmissing([1, 2, missing])) == [1,2]`
替换缺失值 | `collect((df[:col], 1))`
检查是否有缺失值 | `ismissing(x)` 而不是 `x == missing`

### 自我检查与反射

:- | :-
:- | :-
类型 | `typeof(name)`
类型检查 | `isa(name, TypeName)`
列出子类型 | `subtypes(TypeName)`
列出超类型 | `supertype(TypeName)`
函数方法 | `methods(func)`
即时编译的字节码 | `code_llvm(expr)`
汇编代码 | `code_native(expr)`

### 随机数
<!--rehype:wrap-class=col-span-2-->

:- | :-
:- | :-
设置随机数种子 | `Random.seed!(seed)`
产生随机数 | `rand()` # 均匀分布 [0,1)<br/>`randn()` # 正态分布 (-Inf, Inf)
产生特定分布的随机数 | `using Distributions`<br/>`my_dist = Bernoulli(0.2)` 举例<br/>`rand(my_dist)`
以概率 p 从 A 中进行伯努利抽样 | `randsubseq(A, p)`
随机重排 A 中的元素 | `shuffle(A)`

许多随机数函数都需要 `using Random`

### 异常处理
<!--rehype:wrap-class=row-span-3-->

```julia
# 抛出异常 SomeExcep
throw(SomeExcep())
# 再次引发当前的异常
rethrow()
```

定义新异常 NewExcep

```julia
struct NewExcep <: Exception
    v::String
end
Base.showerror(io::IO, e::NewExcep) = print(io, "A problem with $(e.v)!")

throw(NewExcep("x"))
# 抛出带文本的异常
error(msg)
```

异常处理流程

```julia
try
  # 进行一些可能会失败的操作
  catch ex
    if isa(ex, SomeExcep)
        # 处理异常 SomeExcep
    elseif isa(ex, AnotherExcep)
        # 处理另一个异常 AnotherExcep
    else
        # 处理其余的异常
    end
  finally
  # 永远执行这些语句
end
```

### 类型
<!--rehype:wrap-class=row-span-4-->

```julia
# 类型注释
var::TypeName
# 类型声明
struct Programmer
    name::String
    birth_year::UInt16
    fave_language::AbstractString
end
# 可变类型声明
将 struct 替换为 mutable struct
# 类型别名
const Nerd = Programmer
# 类型构造器
methods(TypeName)
# 类型实例
me = Programmer("Ian", 1984, "Julia")
me = Nerd("Ian", 1984, "Julia")
# 子类型声明
abstract type Bird end
struct Duck <: Bird
    pond::String
end
# 参数化类型
struct Point{T <: Real}
    x::T
    y::T
end

p = Point{Float64}(1,2)
# 联合类型
Union{Int, String}
# 遍历类型层级
supertype(TypeName) 和 subtypes(TypeName)
# 默认的超类型
Any
# 所有字段
fieldnames(TypeName)
# 所有字段类型
TypeName.types
```

### 标准库

:- | :-
:- | :-
Random | `rand`, `randn`, `randsubseq`
Statistics | `mean`, `std`, `cor`, `median`, `quantile`
LinearAlgebra | `I`, `eigvals`, `eigvecs`, `det`, `cholesky`
SparseArrays | `sparse`, `SparseVector`, `SparseMatrixCSC`
Distributed | `@distributed`, `pmap`, `addprocs`
Dates | `DateTime`, `Date`

### 表达式
<!--rehype:wrap-class=row-span-2-->

使用引用 `:( ... )` 或块引用 `quote ... end` 可以创建一个表达式，就像 `parse(str)`，和 `Expr(:call, ...)`。

```julia
x = 1
line = "1 + $x"         # 一些代码
expr = Meta.parse(line) # 生成一个 Expr 对象
typeof(expr) == Expr # true
dump(expr)           # 打印生成抽象语法(AST)
eval(expr) == 2      # 对 Expr 对象求值: true
```

Julia 具有同像性：程序被表示为语言本身的数据结构。 实际上 `Julia` 语言里的任何东西都是一个表达式 `Expr`。符号(`Symbols`)即驻留字符串 ，以冒号 `:` 为前缀。相对于其他类型来说，符号效率更高。它也经常用作标识符、字典的键或者数据表里的列名。符号不能进行拼接。

### 输入/输出
<!--rehype:wrap-class=row-span-3-->

读取流

```julia
stream = stdin
for line in eachline(stream)
    # 做点啥
end
```

读取文件

```julia
open(filename) do file
    for line in eachline(file)
        # 做点啥
    end
end
```

读取/写入 CSV 文件

```julia
# 读取 CSV 文件
using CSV
data = CSV.File(filename)
# 写入 CSV 文件
[label](koajs.md)CSV.write(filename, data)
```

读取/保存 Julia 对象

```julia
using JLD
# 保存 Julia 对象
save(filename, "object_key", object, ...)
# 读取 Julia 对象
d = load(filename) # 返回对象的字典
```

读取/保存 HDF5

```julia
using HDF5
# 保存 HDF5
h5write(filename, "key", object)
# 读取 HDF5
h5read(filename, "key")
```

### 宏
<!--rehype:wrap-class=row-span-2-->

宏允许你在程序中自动生成代码（如：表达式）

```julia
# 定义
macro macroname(expr)
    # 做点啥
end
```

使用

```julia
macroname(ex1, ex2, ...) 或 @macroname ex1, ex2, ...
```
<!--rehype:className=wrap-text-->

内置的宏

```julia
@assert    # assert (单元测试)
@which     # 查看对特定参数使用的方法/查找函数所在的模块
@time      # 运行时间与内存分配统计
@elapsed   # 返回执行用时
@allocated # 查看内存分配
@async     # 异步任务

using Test
@test          # 精确相等
@test x ≈ y    # 近似相等 isapprox(x, y)

using Profile
@profile        # 优化
```
<!--rehype:className=wrap-text-->

创建 卫生宏 (hygienic macros)的规则：

- 在宏的内部只通过 `local` 声明本地变量
- 在宏的内部不使用 `eval`
- 转义插值表达式以避免宏变大：`$(esc(expr))`

### 并行计算
<!--rehype:wrap-class=row-span-2-->

并行计算相关的工具可以在标准库 `Distributed` 里找到

```julia
# 启动带 N 各 worker 的 REPL
julia -p N
# 可用的 worker 数量
nprocs()
# 添加 N 个 worker
addprocs(N)
# 查看所有 worker 的 pid
for pid in workers()
    println(pid)
end
# 获得正在执行的 worker 的 id
myid()
# 移除 worker
rmprocs(pid)
# 在特定 pid 的 worker 上运行 f(args)
r = remotecall(f, pid, args...)
# 或:
r = @spawnat pid f(args)
...
fetch(r)
# 在特定 pid 的 worker 上运行 f(args) (更高效)
remotecall_fetch(f, pid, args...)
# 在任意 worker 上运行 f(args)
r = @spawn f(args) ... fetch(r)
# 在所有 worker 上运行 f(args)
r = [@spawnat w f(args) for w in workers()] ... fetch(r)
# 让表达式 expr 在所有 worker 上执行
@everywhere expr
# 并行化带规约函数 red 的循环
sum = @distributed (red) for i in 1:10^6
    # 进行并行任务
end
# 将 f 用用到集合 coll 中的所有元素上
pmap(f, coll)
```
<!--rehype:className=wrap-text-->

### 数组
<!--rehype:wrap-class=col-span-2 row-span-2-->

:- | :-
:- | :-
声明数组 | `arr = Float64[]`
预分配内存 | `sizehint!(arr, 10^4)`
访问与赋值 | `arr = Any[1,2]`<br/>`arr[1] = "Some text"`
从 m 到 n 的子数组 | `arr[m:n]`
n 个 `0.0` 填充的数组 | `zeros(n)`
n 个 `1.0` 填充的数组 | `ones(n)`
n 个随机 Int8 填充的数组 | `rand(Int8, n)`
用值 val 填充数组 | `fill!(arr, val)`
弹出最后一个元素 | `pop!(arr)`
弹出第一个元素 | `popfirst!(a)`
n 个 `#undef` 填充的数组 | `Vector{Type}(undef,n)`
n 个从 `start` 到 `stop` 的等间距数 | `range(start,stop=stop,length=n)`
将值 `val` 作为最后一个元素压入数组 | `push!(arr, val)`
将值 `val` 作为第一个元素压入数组 | `pushfirst!(arr, val)`
删除指定索引值的元素 | `deleteat!(arr, idx)`
数组排序 | `sort!(arr)`
将 `b` 连接到 `a` 后 | `append!(a,b)`
转化为字符串，并以 delim 分隔 | `join(arr, delim)`
<!--rehype:className=left-align-->

---

```julia
# 数组比较
a = [1:10;]
b = a      # b 指向 a
a[1] = -99
a == b     # true
# 复制元素(而不是地址)/深拷贝
b = copy(a)
b = deepcopy(a)
# 检查值 val 是否在数组 arr 中
in(val, arr) # 或
val in arr
# 改变维数
reshape(1:6, 3, 2)' == [1 2 3; 4 5 6]
```

### 线性代数

:- | :-
:- | :-
单位矩阵 | `I`
定义矩阵 | `M = [1 0; 0 1]`
矩阵维数 | `size(M)`
选出第 i 行 | `M[i, :]`
选出第 j 列 | `M[:, j]`
水平拼接 | `M = [a b] 或 M = hcat(a, b)`
竖直拼接 | `M = [a ; b]` 或 `M = vcat(a, b)`
矩阵转置 | `transpose(M)`
共轭转置 | `M'` 或 `adjoint(M)`
迹(trace) | `tr(M)`
行列式 | `det(M)`
秩(rank) | `rank(M)`
特征值 | `eigvals(M)`
特征向量 | `eigvecs(M)`
矩阵求逆 | `inv(M)`
解矩阵方程 `M*x == v` | `M\v` 比 `inv(M)*v` 更好
求 Moore-Penrose 伪逆 | `pinv(M)`
<!--rehype:className=left-align-->

控制流与循环
---

### 条件语句

```julia
if x < y
    println("x is less than y")
elseif x > y
    println("x is greater than y")
else
    println("x is equal to y")
end
```

### for 循环

```julia
for i in 1:10
    println(i)
end
```

### 嵌套循环

```julia
for i in 1:10, j = 1:5
    println(i*j)
end
```

### 枚举

```julia
for (idx, val) in enumerate(arr)
    println("the $idx-th element is $val")
end
```

### while 循环

```julia
while bool_expr
    # 做点啥
end
```

### 退出循环

```julia {4}
julia> i = 0
julia> while true
           global i += 1
           i > 5 && break
           println(i)
       end
```

### 退出本次循环

```julia {2}
for i = 1:6
    iseven(i) && continue
    println(i)
end
```

数字相关
---

### 整数类型

`IntN` 和 `UIntN`, 且 `N ∈ {8, 16, 32, 64, 128}`, `BigInt`

### 浮点类型

`FloatN` 且 `N ∈ {16, 32, 64}`
`BigFloat`

### 类型的最大和最小值

```julia
typemin(Int8)
typemax(Int64)
```

### 复数类型

```julia
Complex{T<:Real}
```

### 虚数单位

```julia
im
```

### 机器精度

```julia
eps() # 等价于 eps(Float64)
```

### 圆整

```julia
round()       # 浮点数圆整
round(Int, x) # 整数圆整
```

### 类型转换

```julia
# 尝试进行转换/可能会报错
convert(TypeName, val)
# 调用类型构造器转换
TypeName(val)
```

### 全局常量

```julia
pi # 3.1415...
π  # 3.1415...
im # real(im * im) == -1
```

### 更多常量

```julia
using Base.MathConstants
```

模块
---

### 定义

```julia
module PackageName
# 添加模块定义
# 使用 export 让定义对外可见
end
```

### 包含文件 filename.jl

```julia
include("filename.jl")
```

### 加载
<!--rehype:wrap-class=row-span-2-->

```julia
using ModuleName # 导出所有名称
# 仅导出 x, y
using ModuleName: x, y
# 仅导出 x, y
using ModuleName.x, ModuleName.y:
# 仅导出 ModuleName
import ModuleName 
# 仅导出 x, y
import ModuleName: x, y 
# 仅导出 x, y
import ModuleName.x, ModuleName.y
```

`using` 和 `import` 只有一点区别：使用 `using` 时，你需要写 `function Foo.bar(..` 来给 `Foo` 模块的函数 `bar` 增添一个新方法； 而使用 `import Foo.bar` 时，只需写 `function bar(...` 就能达到同样的效果

### 导出

```julia
# 得到模块导出名称的数组
names(ModuleName)

# 包含未导出的、弃用的
# 和编译器产生的名称
names(ModuleName, all::Bool)
# 也显示从其他模块显式导入的名称
names(ModuleName, all::Bool, imported::Bool)
```
<!--rehype:className=wrap-text-->

包管理
---

### 介绍

一个程序包必须先[注册](https://github.com/JuliaRegistries/General)，然后才能在包管理器中看到它。在 Julia 1.0 中，有两种使用包管理器的方法：

- 一是通过 `using Pkg` 导入 `Pkg` 模块，然后用它的函数管理其他包；
- 或者在 REPL 中输入 `]`，然后按回车。进入特殊的交互式包管理模式。 (要从包管理模式返回 REPL，只需要在空行上按退格键 `BACKSPACE` 就行了)

注意新的工具总是先添加到交互式模式中，然后才会加入 `Pkg` 模块

### 在 Julia 会话中使用 Pkg 管理包

:- | :-
:- | :-
列出已安装的包 | `Pkg.status()`
更新所有包 | `Pkg.update()`
安装包 | `Pkg.add("PackageName")`
重新构建包 | `Pkg.build("PackageName")`
使用包 | `using PackageName`
删除包 | `Pkg.rm("PackageName")`
<!--rehype:className=left-align-->

### 交互式包管理模式

:- | :-
:- | :-
添加包 | `add PackageName`
删除包 | `rm PackageName`
更新包 | `update PackageName`
使用开发版本 | `dev PackageName` 或 `dev GitRepoUrl`
返回普通发行版 | `free PackageName`
<!--rehype:className=left-align-->

另见
---

- [Julia 官方网站](https://julialang.org/) _(julialang.org)_
- [快速入门一份简单而粗略的语言概览](https://cheatsheet.juliadocs.org/zh-cn/) _(juliadocs.org)_
