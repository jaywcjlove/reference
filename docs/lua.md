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
    <a href="https://www.twle.cn/">简单编程</a>
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
\+   | 加法
\-   | 减法
\*   | 乘法
\/   | 除法
\%   | 取余，求出除法的余数
\^   | 乘幂，计算次方
\-   | 负号，取负值

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
<!--rehype:className=wrap-text -->

条件语句
---

### 运算符
<!--rehype:wrap-class=row-span-2-->

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
string.gsub("Today is 29/01/2019", "%d%d/%d%d/%d%d%d%d", "good day.")
-- Today is a good day. 1

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

for i = 1, 2 do
  for j = 1, 3 do
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

-- 如果想要删除一个 table，那么可以使用 nil 赋值
table = nil
print(table)
```

另见
----

* [Lua 官网](http://www.lua.org) _(lua.org)_
* [luatos](https://wiki.luatos.com/luaGuide/introduction.html) _(wiki.luatos.com)_
* [Lua 教程](https://www.twle.cn/l/yufei/lua53/lua-basic-index.html) _(twle.cn)_
