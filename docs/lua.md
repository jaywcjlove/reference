Lua 备忘清单
===

包含最重要概念、函数、方法等的 [Lua](http://www.lua.org) 备忘单。 初学者的完整快速参考。

入门
---

### 下载

macos 使用 homebrew 下载

```bash
$ brew install lua
```

#### 其它下载方式

* [下载地址](https://luabinaries.sourceforge.net/download.html) _(sourceforge.net)_

```bash
# 查看 lua 是否安装成功
$ lua -v
```

### hello world

```lua
#!/usr/bin/env lua

print("Hello World!")
```

#### 运行

```bash
$ lua ./hello.lua
# 或者也可以像 bash 脚本一样
$ chmod +x hello.lua
./hello.lua
```

### 注释

#### 单行注释

```lua
-- 以两个减号开始
```

#### 多行注释

多行注释以 `--[[` 开头, 以 `]]` 结尾

```lua
--[[

]]
```
<!--rehype:className=wrap-text -->

### type() 函数

使用 `type()` 函数可以判断变量或者值的类型

```lua
print(type(true)) -- boolean
print(type(nil)) -- nil
```

### number

Lua 默认只有一种 number 类型 double (双精度) 类型

```lua
print(10)
print(0.3)
print(2e + 10)
```

### string
<!--rehype:wrap-class=row-span-2-->

```lua
-- 使用 ''
local str1 = 'str1'
-- 使用 ""
local str2 = "str2"
```

#### `[[]]`

使用 `[[]]` 跨行表示多个字符串

```lua
local html = [[
<html>
<head></head>
<body>
  <a href="https://www.twle.cn/">
    简单编程
  </a>
</body>
</html>
]]
print(html)
```

#### 字符串连接(`..`)

```lua
print("a" .. 'b')
-- ab
print(157 .. 428)
-- 157428
```

#### 字符串长度(`#`)

```lua
print(#"string") -- 6
```

### table

```lua
local table = {}
```

#### 迭代 table

默认的初始索引会从 1 开始

```lua
local array = { "apple", "pear", "orange", "grape" }

print(array[1]) -- apple

for k, v in pairs(array) do
  print(k .. " : " .. v)
end
-- 1 : apple
-- 2 : pear
-- 3 : orange
-- 4 : grape
```

#### 指定键

```lua
local array = {}
array.one = "apple"
array["two"] = "peach"

print(array.one) -- apple
print(array.two) -- peach
```

### 变量

#### 默认值

变量的默认值均是 nil

```lua
#!/usr/bin/env lua
print(b) -- nil
```

#### 全局和局部变量

Lua 中的变量全是全局变量，那怕是语句块或是函数里，除非用 local 显式声明为局部变量

```lua
#!/usr/bin/env lua
function main()
  local b = 12
  a = 23
end

main()
print(a) -- 23
print(b) -- nil
```

<!--rehype:className=wrap-text -->

### 赋值
<!--rehype:wrap-class=row-span-2-->

```lua
a = "hello " .. "world" -- 改变 变量
t.n = t.n + 1  -- 改变 table
```

---

```lua
-- 给多个变量赋值
a, b = 10, 2*a  --> a=10; b=20
```

#### 交换变量

```lua
local x, y = 1, 3
x, y = y, x

print(x, y) -- 3, 1
```

---

```lua
local tab = {}

tab.one = 2
tab.two = 1

tab["one"], tab["two"] = tab.two, tab.one

print(tab.one, tab.two) -- 1    2
```

#### 赋值个数不一致

* 如果变量个数**大于**值的个数，按变量个数补足 nil

   ```lua
   a, b, c = 1, 3
   print(a,b,c)      --> 1   3   nil
   ```

* 如果变量个数**小于**值的个数，多余的值会被忽略

   ```lua
   a = 1
   local a, b = a, a + 1, a + 2
   print(a, b) --> 1   2
   ```

<!--rehype:className=style-round-->
<!--rehype:className=wrap-text -->

### 运算符

:-   | :-
:-   | :-
`+`   | 加法
`-`   | 减法
`*`   | 乘法
`/`   | 除法
`%`   | 取余，求出除法的余数
`^`   | 乘幂，计算次方
`-`   | 负号，取负值

```lua
local a, b = 4, 3

print(a + b) -- 7
print(a - b) -- 1
print(a / b) -- 1.3333333333333
print(a * b) -- 12
print(a % b) -- 1
print(a ^ b) -- 64.0
```

### 类型转换

* 在算术运算中，string 类型会尝试自动转换为 number 时

   ```lua
   local a, b, c = "str", "1", "2"

   -- print(a + b) -- error
   print(b + c) -- 3
   ```

* number 类型使用 `..` 会自动转换为 string

   ```lua
   local a, b = 1, 2
   print(type(a .. b))
   ```

* 其它方式的转换

   ```lua
   print(type(tostring(12))) -- string
   print(type(tonumber("12"))) -- number
   ```
<!--rehype:className=style-round-->

### goto 语法
<!--rehype:wrap-class=col-span-2-->

```lua
local function isValidNumber(num)
    if type(num) ~= "number" then
        goto invalidNumber   -- 无条件地跳转到代码中的标签 `::invalidNumber::`
    end

    print("Valid number:", num)
    return true

    ::invalidNumber::
    print("Invalid number:", num)
    return false
end

isValidNumber(123)    -- 输出: Valid number: 123
isValidNumber("abc")  -- 输出: Invalid number: abc
```

条件语句
---

### 运算符
<!--rehype:wrap-class=row-span-3-->

#### 关系运算符

符号 | 含义
:-  | :-
`==`  | 等于
`~=`  | 不等于
`>`  | 大于
`<`  | 小于
`>=` | 大于等于
`<=` | 小于等于
<!--rehype:className=show-header-->

```lua
local a, b = 4, 3

print(a < b) -- false
print(a <= b) -- false
print(a == b) -- false
print(a ~= b) -- true
print(a > b) -- true
print(a >= b)-- true
```

#### 逻辑运算符

符号 | 含义
:-  | :-
`and` | 逻辑与
`or` | 逻辑或操作符
`not` | 逻辑非操作符
<!--rehype:className=show-header-->

```lua
local a, b = true, false
print(a and b) -- false
print(a and not b) -- true
print(a or b) -- true
```

### while 循环

```lua
local num = 1
while (num < 5) do
  print("num 的值为:", num)
  num = num + 1
end
```

### if 语句
<!--rehype:wrap-class=row-span-2-->

```lua
if(0)
then
    print("0 为 true")
end
```

#### if .. elseif() .. else

```lua
local age = 27;

if (age < 18)
then
  print("age 小于 18")
elseif (age < 25)
then
  print("age 小于 25")
elseif (age < 30)
then
  print("age 小于 30")
else
  print("age 大于 30")
end

print("age 的值为 :", age)
```

<red>注意: </red>`Lua` 中 `0` 为 `true`，但是 `Lua` 中的 `nil` 可以当作 `false`

### for 循环

```lua
for i = 10, 1, -1 do
  print(i)
end
```

* lua 中的 for 循环从参数 1 变化到参数 2，每次变化以参数 3 为步长递增 i，并执行一次表达式
* 参数三，是可选的，如果不指定，默认是 1
* 参数二只会在一开始求值，其后不会再进行运算

```lua
local f = function(x)
  print("in f(x) ")
  return x * 2
end

for i = 1, f(5) do
  print(i)
end
```
<!--rehype:className=style-round wrap-text-->

### repeat...until 循环

```lua
local num = 11
repeat
  print("num 的值为: ", num)
  num = num + 1
until (num > 10)
-- num 的值为：11
```

`repeat...until` 循环的条件语句在当前循环结束后判断

### break

```lua
local num = 11
repeat
  print("num 的值为: ", num)
  num = num + 1
  if (num > 15) then
    break
  end
until (num > 20)
```

函数
---

### 初始化

像变量一样，如果加上 `local` 那么就是局部函数

```lua
local function main()
  print("这是一个局部函数")
end
```

---

你也可以将函数赋值给一个变量

```lua
local main = function()
  print("这是一个局部函数")
end
```

### 返回值

```lua
local function min(a, b)
  if (a < b) then
    return a
  else
    return b
  end
end

print(min(1, 2))
```

### 参数

```lua
local p = function(res)
  print("打印自己的风格", res)
end

local function main(a, b, p)
  p(a + b)
end

main(1, 2, p)
```

### 多个返回值

```lua
local function min(a)
  local sum = 0
  local factorial = 1
  for i, v in pairs(a) do
    sum = sum + v
    factorial = factorial * v
  end
  return sum, factorial
end

local a, b = min({ 1, 2, 3, 4 })

print(a, b)
```

### 可变参数(`...`)

```lua
local function average(...)
  local result = 0
  local arg = { ... }
  for i, v in ipairs(arg) do
    result = result + v
  end
  return result / #arg
end

print("平均值为", average(1, 3, 5, 7, 9, 11))
```

字符串
---

### 字符串方法
<!--rehype:wrap-class=col-span-2-->

```lua
-- 全部转换为大写
string.upper("str") -- STR

-- 全部转换为小写
string.lower("STR") -- str

-- 指定替换的字符串个数, 最后一个参数可选，默认是全部替换
string.gsub("aaaa", "a", "b", 3) -- bbba  3
string.gsub("Today is 29/01/2019", "%d%d/%d%d/%d%d%d%d", "a good day.")
-- Today is a good day.

-- 查找第一个匹配的字符串，第三个参数可以提供开始查找的位置，默认从 1 开始
-- 如果未找到，则返回 nil
string.find("referference", "fer") -- 3   5
string.find("Today is 29/01/2021", "%d%d/%d%d/%d%d%d%d") -- 10      19

-- 字符串反转
string.reverse("fw") -- wf

-- 格式化字符串
string.format("value:%c", 1) -- value:a

-- 转换字符并拼接
string.char(97,98,99,100) -- abcd

-- 将字符转化为整数值。 int 用来指定某个字符，默认第一个字符
string.byte("ABCD",4) -- 68

-- 计算字符串长度
string.len("abc") -- 3

-- 返回字符串的 n 个拷贝
string.rep("fw", n) -- fwfw

-- 剪切字符串，第三个参数可选，默认是字符串长度
string.sub("referference", 5, 6) -- rf
```

### 正则匹配

:-   | :-
:-   | :-
`%a` | 与任何字母配对
`%c` | 与任何控制符配对(例如\n)
`%d` | 与任何数字配对
`%l` | 与任何小写字母配对
`%p` | 与任何标点(punctuation)配对
`%s` | 与空白字符配对
`%u` | 与任何大写字母配对
`%w` | 与任何字母/数字配对
`%x` | 与任何十六进制数配对
`%z` | 与任何代表0的字符配对
<!--rehype:className=left-align-->

#### match

第三个参数可选，默认从 1 开始。如果没有捕获组返回整个字符串，匹配失败返回 nil

```lua
string.match(
  "I have 2 questions for you.", 
  "(%d+) (%a+) "
)  -- 2       questions
```

#### gmatch

返回一个迭代器函数，每次调用迭代器函数，如果参数 pattern 描述的字符串没有找到，迭代函数返回nil

```lua
for world in string.gmatch("I have 2 questions for you.", "%a+") do
  print(world)
end
-- I
-- have
-- questions
-- for
-- you
```

<!--rehype:className=style-round wrap-text-->

数学方法
---

### 常用方法

```lua
-- 一个比任何数字都大的浮点数
math.huge

-- 最小值的整数
math.mininteger

local a = math.abs(-1) -- 1

-- 返回不小于该数到最小整数
local b = math.ceil(1.2) -- 2

-- 返回不大于该数到最大整数
local c = math.floor(1.2) -- 1

-- 取余
local d = math.fmod(9.9, 9) -- 0.9

-- 返回最大值
local g = math.max(1, 2, 3) -- 3
-- 返回最小值
local h = math.min(1, 2, 3) -- 1

-- 返回参数的平方根
local r = math.sqrt(9) -- 3
```

### 工具方法

```lua
-- 返回数字的类型，
local l = math.type(1.2) -- float
local m = math.type(3) -- integer
local n = math.type("") -- nil

-- 返回以指定底底对数
local e = math.log(4, 2) -- 2

-- 返回以 e 为底的自然对数
local f = math.exp(2) -- 7.3890560989307

-- 返回 [0,1) 区间内一致分布的浮点伪随机数
math.random()
-- 返回 [1, n] 区间内一致分布的整数伪随机数
math.random(10)
-- 返回 [n, m] 区间内一致分布的整数伪随机数
math.random(10, 100)

-- 无符号整数比较，参数一 小于 参数二 则返回 true，否则返回 false
local o = math.ult(1, 10)

-- 如果参数可以转换为一个整数，则返回该整数，否则返回 nil
local p = math.tointeger("3") -- 3
local q = math.tointeger(0.32) -- nil

-- 返回整数和小数部分
local i, j = math.modf(3.14) -- 3   0.14
```

### 其它方法

```lua
-- 圆周率
math.pi -- 3.1415926535898

-- 正弦方法（以下皆是以弧度表示）
math.sin(math.pi / 2) -- 1.0
-- 余弦方法
math.cos(math.pi) -- -1.0
-- 正切方法
math.tan(math.pi / 4) -- 1.0

-- 反正弦方法（以下皆是以弧度表示）
math.asin(1.0) -- 1.5707963267949
-- 反余弦方法
math.acos(1.0) -- 0.0
-- 反正切方法
math.atan(1.0) -- 0.78539816339745

-- 角度转换为弧度
math.rad(90) -- 1.5707963267949
-- 弧度转换为角度
math.deg(math.pi) -- 180.0
```

table
---

### 初始化数组

初始化一个空数组

```lua
local array = {} 
```

---

默认的数组索引从 1 开始

```lua
local array = { "a", "b", "c", "d" }
array[5] = "e"

for i = 1, 5 do
  print(array[i])
end
```

### 多维数组

```lua
local array = {
  { "a", "b", "c" },
  { "d", "e", "f" }
}

for i = 1, #array do
  for j = 1, #array[i] do
    print(array[i][j])
  end
end
```

### 初始化 table

```lua
local table = {}

table.name = "fw"
table.age = "18"
table["sex"] = "boy"

-- 获取 table 的长度

print(#table) -- 3

-- 如果想要删除一个 table，那么可以使用 nil 赋值
table = nil
print(table)
```

### table 方法
<!--rehype:wrap-class=col-span-2-->

```lua
-- 用于连接 table 中指定的元素
-- table.concat(table [, sep [, start [, end]]])
local a = { "apple", "orange", "peach" }
print(table.concat(a, "->", 2, 3)) -- orange->peach

-- 用于向指定闻之插入元素。默认数组末尾
-- table.insert(table, [pos,] value)
local a = { "apple", "orange", "peach" }
table.insert(a, 1, "pear")
print(a[1]) -- pear

-- table.move(a1,f,e,t[,a2])
-- 表a1，a1下标开始位置f，a1下标结束位置e，t选择移动到的开始位置(如果没有a2，默认a1的下标)
local array = { "a", "b", "c" }

for i,v in pairs(table.move(array, 1, 3, 2)) do
  print(v)
end -- a a b c

-- table.sort (table [, comp])
-- 排序，默认是升序
local array = { "a", "c", "b" }

local f = function(a, b)
  return string.byte(a) - string.byte(b) > 0
end

table.sort(array, f)
for i, v in pairs(array) do
  print(v)
end -- c b a
```

### 迭代器

#### 无状态的迭代器

```lua
function square(d,n)
   if n < d
   then
      n = n + 1
   return n, n*n
   end
end

for i,n in square,5,0
do
   print(i,n)
end
```

#### for 循环迭代器

```lua
for i, n in pairs({ 1, 2, 3, 4 }) do
  print(i, n)
end
```

模块
---

### 定义模块

```lua
-- a.lua
local mod = {}

mod.cool = "this is a mod"
function mod.test()
  print("this is a function")
end

return mod
```

### 导入模块

一般我们可以直接使用 `require` 导入

```lua
-- b.lua
-- local mod = require("a")
-- 使用 pcall 确保 require 函数导入成功，失败则返回一个 false 状态
local status, mod = pcall(require, "a")

if not status then
  return
end

mod.test()
print(mod.cool)
```

### 私有函数

```lua
local mod = {}

local function private()
  print("private")
end

function mod.public()
  private()
end

return mod
```

另见
----

* [Lua 官网](http://www.lua.org) _(lua.org)_
* [luatos](https://wiki.luatos.com/luaGuide/introduction.html) _(wiki.luatos.com)_
* [Lua 教程](https://www.twle.cn/l/yufei/lua53/lua-basic-index.html) _(twle.cn)_
