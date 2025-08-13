Python 3 备忘清单
===

Python 备忘单是 [Python 3](https://www.python.org/) 编程语言的单页参考表

入门
-----

### 介绍

- [Python 官方网站](https://www.python.org/)  _(python.org)_
- [Python 文档](https://docs.python.org/zh-cn/3/index.html)  _(docs.python.org)_
- [Y 分钟学会 Python](https://learnxinyminutes.com/docs/zh-cn/python-cn/) _(learnxinyminutes.com)_
- [Python 中的正则表达式](./regex.md#python-中的正则表达式) _(jaywcjlove.github.io)_

### 控制台打印

```python
>>> print("Hello, World!")
Hello, World!
```

著名的“Hello World”程序在 Python 中的实现

### 变量

```python
age = 18       # 年龄是 int 类型
name = "John"  # 名字现在是 str 类型
print(name)
```

- Python 不能在没有赋值的情况下声明变量
- 变量可以存放不同类型的值

### 内置数据类型
<!--rehype:wrap-class=row-span-2-->
序列指一批有序的元素，集合指一批无序且不重复的元素

| :-                                      | :-               |
|:----------------------------------------|:-----------------|
| `str`                                   | 文本／字符串（Text）     |
| `int`, `float`, `complex`               | 数值（Numeric）      |
| `dict`                                  | 映射／键值对（Mapping）  |
| `list`, `tuple`, `range`                | 序列（Sequence）     |
| `set`, `frozenset`                      | 集合（Set）          |
| `bool`                                  | 布尔值／逻辑值（Boolean） |
| `bytes`, `bytearray`, <br> `memoryview` | 二进制数据（Binary）    |

查看: [数据类型](#python-数据类型)

### 字符串切片

```python
>>> msg = "Hello, World!"
>>> print(msg[2:5])
llo
```

查看: [字符串](#python-字符串)

### 列表

```python
mylist = []
mylist.append(1)
mylist.append(2)
for item in mylist:
    print(item) # 打印输出 1,2
```

查看: [列表](#python-列表)

### 判断

```python
num = 200
if num > 0:
    print("num is greater than 0")
else:
    print("num is not greater than 0")
```

查看: [判断](#python-判断)

### 循环

```python
for item in range(6):
    if item == 3: break
    print(item)
else:
    print("Finally finished!")
```

查看: [循环](#python-循环)

### 函数

```python
>>> def my_function():
...     print("来自函数的你好")
...
>>> my_function()
来自函数的你好
```

查看: [函数](#函数)

### 文件处理
<!--rehype:wrap-class=col-span-2-->

```python
with open("myfile.txt", "r", encoding='utf8') as file:
    for line in file:
        print(line)
```

查看: [文件处理](#python-文件处理)

### 算术

```python
result = 10 + 30 # => 40
result = 40 - 10 # => 30
result = 50 * 5  # => 250
result = 16 / 4  # => 4.0 (Float Division)
result = 16 // 4 # => 4 (Integer Division)
result = 25 % 2  # => 1
result = 5 ** 3  # => 125
```

`/` 表示 x 和 y 的商，`//` 表示 x 和 y 的底商，另见 [StackOverflow](https://stackoverflow.com/a/183870/13192320)

### 加等于

```python
counter = 0
counter += 10           # => 10
counter = 0
counter = counter + 10  # => 10
message = "Part 1."
# => Part 1.Part 2.
message += "Part 2."   
```

### f-字符串 (Python 3.6+)

```python
>>> website = 'Quick Reference'
>>> f"Hello, {website}"
"Hello, Quick Reference"
>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'
```

查看: [f-字符串](#python-f-字符串-python-36)

Python 数据类型
---------------

### 字符串

```python
hello = "Hello World"
hello = 'Hello World'
multi_string = """Multiline Strings
Lorem ipsum dolor sit amet,
consectetur adipiscing elit """
```

查看: [字符串](#python-字符串)

### 数值

```python
x = 1    # 整数
y = 2.8  # 浮点小数
z = 1j   # 复数
>>> print(type(x))
<class 'int'>
```

只要内存足够，可以容纳无限大(小)的数值

### 布尔值

```python
my_bool = True 
my_bool = False
bool(0)     # => False
bool(1)     # => True
```

bool 是 int 的子类

### 列表

```python
list1 = ["apple", "banana", "cherry"]
list2 = [True, False, False]
list3 = [1, 5, 7, 9, 3]
list4 = list((1, 5, 7, 9, 3))
```

查看: [列表](#python-列表)

### 元组

```python
my_tuple = (1, 2, 3)
my_tuple = tuple((1, 2, 3))
```

类似列表，但自身不可变

### 集合

```python
set1 = {"a", "b", "c"}   
set2 = set(("a", "b", "c"))
```

类似列表，但里面的元素是无序而不重复的

### 字典

```python
>>> empty_dict = {}
>>> a = {"one": 1, "two": 2, "three": 3}
>>> a["one"]
1
>>> a.keys()
dict_keys(['one', 'two', 'three'])
>>> a.values()
dict_values([1, 2, 3])
>>> a.update({"four": 4})
>>> a.keys()
dict_keys(['one', 'two', 'three', 'four'])
>>> a['four']
4
```

键-值对，一种像 JSON 那样对象

### 类型转换

#### 转换为整数

```python
x = int(1)       # 得到 1
y = int(2.8)     # 得到 2
z = int("3")     # 得到 3
```

#### 转换为浮点数

```python
x = float(1)     # 得到 1.0
y = float(2.8)   # 得到 2.8
z = float("3")   # 得到 3.0
w = float("4.2") # 得到 4.2
```

#### 转换为字符串

```python
x = str("s1")    # 得到 "s1"
y = str(2)       # 得到 "2"
z = str(3.0)     # 得到 "3.0"
```

Python 字符串
------------

### 下标访问

```python
>>> hello = "Hello, World"
>>> print(hello[1])  # 获取第二个字符
e
>>> print(hello[-1])  # 获取倒数第一个字符
d
>>> print(type(hello[-1]))  # 得到的还是字符串
<class 'str'>
```

### 循环

```python
>>> for char in "foo":
...     print(char)
f
o
o
```

对字符串 for-in 可以得到每个字符（类型还是字符串）

### 切割字符串
<!--rehype:wrap-class=row-span-4-->

```java
 ┌───┬───┬───┬───┬───┬───┬───┐
 | m | y | b | a | c | o | n |
 └───┴───┴───┴───┴───┴───┴───┘
 0   1   2   3   4   5   6   7
-7  -6  -5  -4  -3  -2  -1
```

---

```python
>>> s = 'mybacon'
>>> s[2:5]
'bac'
>>> s[0:2]
'my'
```

---

```python
>>> s = 'mybacon'
>>> s[:2]
'my'
>>> s[2:]
'bacon'
>>> s[:2] + s[2:]
'mybacon'
>>> s[:]
'mybacon'
```

---

```python
>>> s = 'mybacon'
>>> s[-5:-1]
'baco'
>>> s[2:6]
'baco'
```

#### 步长

```python
>>> s = '12345' * 5
>>> s
'1234512345123451234512345'
>>> s[::5]
'11111'
>>> s[4::5]
'55555'
>>> s[::-5]
'55555'
>>> s[::-1]
'5432154321543215432154321'
```

### 获取长度

```python
>>> hello = "Hello, World!"
>>> print(len(hello))
13
```

`len()` 函数返回字符串的长度

### 重复多次

```python
>>> s = '===+'
>>> n = 8
>>> s * n
'===+===+===+===+===+===+===+===+'
```

### 存在性判断

```python
>>> s = 'spam'
>>> s in 'I saw spamalot!'
True
>>> s not in 'I saw The Holy Grail!'
True
```

判断 "spam" 这个字符串是否在其它字符串里

### 字符串拼接

```python
>>> s = 'spam'
>>> t = 'egg'
>>> s + t  # 可以使用加号进行拼接
'spamegg'
>>> 'spam' 'egg'  # 两个字符串之间可以省略加号
'spamegg'
```

### 格式化
<!--rehype:wrap-class=col-span-2-->

```python
name = "John"
print("Hello, %s!" % name)
```

---

```python
name = "John"
age = 23
print("%s is %d years old." % (name, age))
```

#### format() 方法

```python
txt1 = "My name is {fname}, I'm {age}".format(fname="John", age=36)
txt2 = "My name is {0}, I'm {1}".format("John", 36)
txt3 = "My name is {}, I'm {}".format("John", 36)
```

### 转义符号
<!--rehype:wrap-class=row-span-2-->

| 转义符号 | 对应的操作  |
|------|--------|
| `\\` | 输出反斜杠  |
| `\'` | 输出单引号  |
| `\"` | 输出双引号  |
| `\n` | 换行     |
| `\t` | 水平制表符  |
| `\r` | 光标回到首位 |
| `\b` | 退格     |

### 控制台输入

```python
>>> name = input("Enter your name: ")
Enter your name: Tom
>>> name
'Tom'
```

从控制台获取输入数据

### 头尾判断
<!--rehype:wrap-class=row-span-2-->

```python
>>> # 是否以 H 开头
>>> "Hello, world!".startswith("H")
True
>>> # 是否以 h 开头
>>> "Hello, world!".startswith("h")
False
>>> # 是否以 ! 结尾
>>> "Hello, world!".endswith("!")
True
```

### 插入分隔符拼接

```python
>>> "、".join(["John", "Peter", "Vicky"])
'John、Peter、Vicky'
```

Python f-字符串 (Python 3.6+)
----------------

### f-字符串 用法
<!--rehype:wrap-class=row-span-2-->

```python
>>> website = 'Reference'
>>> f"Hello, {website}"
"Hello, Reference"
>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'
>>> f"""He said {"I'm John"}"""
"He said I'm John"
>>> f'5 {"{stars}"}'
'5 {stars}'
>>> f'{{5}} {"stars"}'
'{5} stars'
>>> name = 'Eric'
>>> age = 27
>>> f"""Hello!
...     I'm {name}.
...     I'm {age}."""
"Hello!\n    I'm Eric.\n    I'm 27."
```

它从 Python 3.6 开始可用，另见: [格式字符串字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings)

### 填充对齐

```python
>>> f'{"text":10}'   # 使用空格填充到指定长度
'text      '
>>> f'{"test":*>10}' # 向左填充
'******test'
>>> f'{"test":*<10}' # 向右填充
'test******'
>>> f'{"test":*^10}' # 居中填充
'***test***'
>>> f'{12345:0>10}'  # 使用数字填充
'0000012345'
```

### 按类型输出
<!--rehype:wrap-class=row-span-2-->

```python
>>> f'{10:b}'     # 输出二进制数值
'1010'
>>> f'{10:o}'     # 输出八进制数值
'12'
>>> f'{200:x}'    # 输出十六进制数值
'c8'
>>> f'{200:X}'
'C8'
>>> f'{345600000000:e}' # 科学计数法
'3.456000e+11'
>>> f'{65:c}'       # 将整数转化为一个字符后输出
'A'
>>> f'{10:#b}'      # [类型] 带符号（基础）
'0b1010'
>>> f'{10:#o}'
'0o12'
>>> f'{10:#x}'
'0xa'
```

### 显示正负号

```python
>>> f'{12345:+}'      # 显示正数的正号
'+12345'
>>> f'{-12345:+}'     # 显示负数的负号
'-12345'
>>> f'{-12345:+10}'   # 显示负号，并使用空格填充，直到长度为 10
'    -12345'
>>> f'{-12345:+010}'  # 显示负号，并使用0填充，直到长度为 10
'-000012345'
```

### 其它

```python
>>> f'{-12345:0=10}'  # 负数
'-000012345'
>>> f'{12345:010}'    # [0] 快捷方式（不对齐）
'0000012345'
>>> f'{-12345:010}'
'-000012345'
>>> import math       # [.precision]
>>> math.pi
3.141592653589793
>>> f'{math.pi:.2f}'
'3.14'
>>> f'{1000000:,.2f}' # [分组选项]
'1,000,000.00'
>>> f'{1000000:_.2f}'
'1_000_000.00'
>>> f'{0.25:0%}'      # 百分比
'25.000000%'
>>> f'{0.25:.0%}'
'25%'
```

Python 列表
------------

### 定义

```python
>>> li1 = []
>>> li1
[]
>>> li2 = [4, 5, 6]
>>> li2
[4, 5, 6]
>>> li3 = list((1, 2, 3))
>>> li3
[1, 2, 3]
>>> li4 = list(range(1, 11))
>>> li4
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 生成
<!--rehype:wrap-class=col-span-2-->

```python
>>> list(filter(lambda x : x % 2 == 1, range(1, 20)))
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
>>> [x ** 2 for x in range (1, 11) if  x % 2 == 1]
[1, 9, 25, 49, 81]
>>> [x for x in [3, 4, 5, 6, 7] if x > 5]
[6, 7]
>>> list(filter(lambda x: x > 5, [3, 4, 5, 6, 7]))
[6, 7]
```

### 添加元素

```python
>>> li = []
>>> li.append(1)
>>> li
[1]
>>> li.append(2)
>>> li
[1, 2]
>>> li.append(4)
>>> li
[1, 2, 4]
>>> li.append(3)
>>> li
[1, 2, 4, 3]
```

### 切片
<!--rehype:wrap-class=col-span-2 row-span-3-->

列表切片的语法：

```python
a_list[start:end]
a_list[start:end:step]
```

#### 切片

```python
>>> a = ['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[2:5]
['bacon', 'tomato', 'ham']
>>> a[-5:-2]
['egg', 'bacon', 'tomato']
>>> a[1:4]
['egg', 'bacon', 'tomato']
```

#### 省略索引

```python
>>> a[:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[0:4]
['spam', 'egg', 'bacon', 'tomato']
>>> a[2:]
['bacon', 'tomato', 'ham', 'lobster']
>>> a[2:len(a)]
['bacon', 'tomato', 'ham', 'lobster']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[:]
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
```

#### 间隔索引

```python
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[0:6:2]
['spam', 'bacon', 'ham']
>>> a[1:6:2]
['egg', 'tomato', 'lobster']
>>> a[6:0:-2]
['lobster', 'tomato', 'egg']
>>> a
['spam', 'egg', 'bacon', 'tomato', 'ham', 'lobster']
>>> a[::-1]
['lobster', 'ham', 'tomato', 'bacon', 'egg', 'spam']
```

### 删除

```python
>>> li = ['bread', 'butter', 'milk']
>>> li.pop()
'milk'
>>> li
['bread', 'butter']
>>> del li[0]
>>> li
['butter']
>>> li.remove('butter')
>>> li
[]
```

### 列表边界

```python
>>> li = ['a', 'b', 'c', 'd']
>>> li[0]
'a'
>>> li[-1]
'd'
>>> li[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

### 连接
<!--rehype:wrap-class=row-span-2-->

```python
>>> odd = [1, 3, 5]
>>> odd.extend([9, 11, 13])
>>> odd
[1, 3, 5, 9, 11, 13]
>>> odd = [1, 3, 5]
>>> odd + [9, 11, 13]
[1, 3, 5, 9, 11, 13]
```

### 排序和反转
<!--rehype:wrap-class=row-span-2-->

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.sort()
>>> li
[1, 2, 3, 3, 5]
>>> li.reverse()
>>> li
[5, 3, 3, 2, 1]
```

### 计数

```python
>>> li = [3, 1, 3, 2, 5]
>>> li.count(3)
2
```

### 重复

```python
>>> li = ["re"] * 3
>>> li
['re', 're', 're']
```

### 搜索
  
```python
>>> nums = [40, 36, 89, 2, 36, 100, 7, -20.5, -999]
>>> nums.index(2)
3
>>> nums.index(100, 3, 7)  # 搜索3-7之间的元素
5
>>> nums.index(7, 4) # 搜索4之后的元素
6
```  

当寻找一个不存在的值时，抛出`ValueError`。
  
Python 判断
------------

### if-else

```python
number = int(input('输入一个整数：'))
if number < 0:
    print("您输入了一个负数。")
else:
    print("您输入了一个非负整数。")
```

### if-elif-else

```python
number = int(input('输入一个整数：'))
if number < 0:
    print("您输入了一个负数。")
elif number == 0:
    print("您输入了一个 0 。")
else:
    print("您输入了一个正数。")
```

### 三目运算

```python
scope = int(input('输入百分制成绩：'))
line = 60
tip = "及格" if scope >= line else "不及格"
# 相当于 scope >= line ? "及格" : "不及格"
print(tip)
```

注意条件是放在中间的

Python 循环
--------

### 一般形式

```python
primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
```

### 带索引

```python
animals = ["dog", "cat", "mouse"]
for i, value in enumerate(animals):
    print(i, value)
```

### while 循环

```python
x = 0
while x < 4:
    print(x)
    x += 1  # Shorthand for x = x + 1
```

### 跳出循环

```python
x = 0
for index in range(10):
    x = index * 10
    if index == 5:
        break
    print(x)
```

### 跳过一轮循环

```python
for index in range(3, 8): 
    x = index * 10
    if index == 5:
        continue
    print(x)
```

### 范围循环

```python
for i in range(4):
    print(i) # Prints: 0 1 2 3
for i in range(4, 8):
    print(i) # Prints: 4 5 6 7
for i in range(4, 10, 2):
    print(i) # Prints: 4 6 8
```

### 使用 zip()

```python
name = ['Pete', 'John', 'Elizabeth']
age = [6, 23, 44]
for n, a in zip(name, age):
    print('%s is %d years old' %(n, a))
```

### 列表生成式
<!--rehype:wrap-class=col-span-2-->

```python
result = [x**2 for x in range(10) if x % 2 == 0]
 
print(result)
# [0, 4, 16, 36, 64]
```

Python 函数
--------

### 基础

```python
def hello_world():  
    print('Hello, World!')
```

### 返回

```python {3}
def add(x, y):
    print("x is %s, y is %s" %(x, y))
    return x + y
add(5, 6)    # => 11
```

### 位置参数

```python
def varargs(*args):
    return args
varargs(1, 2, 3)  # => (1, 2, 3)
```

args 的类型是 tuple

### 关键字参数

```python
def keyword_args(**kwargs):
    return kwargs
# => {"big": "foot", "loch": "ness"}
keyword_args(big="foot", loch="ness")
```

kwargs 的类型是 dict

### 返回多个

```python
def swap(x, y):
    return y, x
x = 1
y = 2
x, y = swap(x, y)  # => x = 2, y = 1
```

### 默认值

```python
def add(x, y=10):
    return x + y
add(5)      # => 15
add(5, 20)  # => 25
```

### 匿名函数

```python
# => True
(lambda x: x > 2)(3)
# => 5
(lambda x, y: x ** 2 + y ** 2)(2, 1)
```

Python 解包
--------

- 解包是将一个
  [序列](https://docs.python.org/zh-cn/3/library/stdtypes.html#sequence-types-list-tuple-range)
  内的多个元素依次重新分配到有限个容器的过程，这只发生在 **变量赋值**、**参数传递** 和 **生成式生成** 过程中。
- `_` 这个变量是命令行交互中最后一次计算得到的值，在程序设计中一般用来存放解包时不再需要的值。
  但它的含义会因赋值而改变，比如标准库 [gettext](https://docs.python.org/zh-cn/3/library/gettext.html) 中常用作动态获取翻译文本。

### 等量解包

```python
ip, port = "127.0.0.1", 80
print(ip)  # -> "127.0.0.1"
print(port)  # -> 80

# 与以下代码等价
ip, port = ("127.0.0.1", 80)

# 与以下代码效果相同
ip, port = ["127.0.0.1", 80]
```

### 适量解包

```python
ip, _, port = "127.0.0.1:80".rpartition(":")
print(ip)  # -> "127.0.0.1"
print(port)  # -> "80"

# _ 这个变量此刻的值是 ":" ，但一般不再使用。
```

`_` 也是一个单一变量，不允许解包多个元素，因此变量与值必须一一对应。

### 过量解包

```python
major, minor, *parts = "3.10.2.beta".split(".")
print(major)  # -> "3"
print(minor)  # -> "10"
print(parts)  # -> ["2", "beta"]

# 可将 parts 改为 _ 来表示不再需要后面的元素
```

这里的 `*` 就是收集[序列](https://docs.python.org/zh-cn/3/library/stdtypes.html#sequence-types-list-tuple-range)在解包过程中多出来的元素，
只能有一个，与向函数传递[位置参数](#位置参数)时的 `*` 别无二致。

### 解包取左边

```python
major, minor, *_ = "3.10.2.beta".split(".")

print(major)  # -> "3"
print(minor)  # -> "10"
```

### 解包取两边

```python
major, *_, level = "3.10.2.beta".split(".")

print(major)  # -> "3"
print(level)  # -> "beta"
```

### 解包取右边

```python
*_, micro, level = "3.10.2.beta".split(".")

print(micro)  # -> "2"
print(level)  # -> "beta"
```

### 解包集合

```python
a, b, *_ = {3, 2, 1}
print(a)  # -> 1
print(b)  # -> 2
print(_)  # -> [3]
```

[集合](https://docs.python.org/zh-cn/3/library/stdtypes.html#set-types-set-frozenset)
中的元素是无序的，因此解包结果不能轻易确定。

### 解包迭代器

```python
a, b, *_ = range(3)
print(a)  # -> 0
print(b)  # -> 1
print(_)  # -> [2]
```

支持
[迭代器](https://docs.python.org/zh-cn/3/library/stdtypes.html#iterator-types)
协议的对象也可被解包。

### 解包字典

```python
a, b, *_ = dict(a=1, b=2, c=3)
print(a)  # -> "a"
print(_)  # -> ["c"]
a, b, *_ = dict(a=1, b=2, c=3).values()
print(a)  # -> 1
print(_)  # -> [3]
```

### 生成式中的解包

```python
chars = (*"abc", *"def", "g", "h")
# -> ("a", "b", "c", "d", "e", "f", "g", "h")

digits = [*range(10), *"abcdef"]
# -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
#     "a", "b", "c", "d", "e", "f"]

part = {"小明": 18, "小亮": 22}
summary = {"小花": 16, **part}
print(summary)
# -> {"小花": 16, "小明": 18, "小亮": 22}
```

- 仅在列表／元组生成式中可以使用多个 `*`
- 仅在字典生成式中可以使用多个 `**`

### 迭代中解包

```python
students = [
    ("小明", 18),
    ("小亮", 22),
]
for k, v in students:
    print(k)  # -> "小明"、"小亮"
    print(v)  # -> 18、22

students = [
    (0, ("小明", 18)),
    (1, ("小亮", 22)),
]
for i, (k, v) in students:
    print(i)  # -> 0、1
    print(k)  # -> "小明"、"小亮"
    print(v)  # -> 18、22
```

### 函数中的解包

```python
def version(major, minor, *parts):
    print(major)  # -> "3"
    print(minor)  # -> "10"
    print(parts)  # -> ("2", "beta", "0")

version("3", "10", "2", "beta", "0")
# 过程类似于
major, minor, *parts = ("3", "10", "2", "beta", "0")


def version():
    parts = "3.10.2.beta.0".split(".")
    return *parts, "x64"

print(version())
# -> ("3", "10", "2", "beta", "0", "x64")
```

Python 模块
--------

### 导入模块

```python
import math
print(math.sqrt(16))  # => 4.0
```

### 从一个模块导入

```python
from math import ceil, floor
print(ceil(3.7))   # => 4.0
print(floor(3.7))  # => 3.0
```

### 导入一个模块的全部

```python
from math import *
```

### 给模块起别名

```python
import math as m
# => True
math.sqrt(16) == m.sqrt(16)
```

### 浏览模块的函数和属性

```python
import math
dir(math)
```

Python 文件处理
----------

### 读取文件

#### 逐行

```python
with open("myfile.txt") as file:
    for line in file:
        print(line)
```

#### 带行号

```python
file = open('myfile.txt', 'r')
for i, line in enumerate(file, start=1):
    print("Number %s: %s" % (i, line))
```

### 字符串

#### 写入一个字符串

```python
contents = {"aa": 12, "bb": 21}
with open("myfile1.txt", "w+") as file:
    file.write(str(contents))
```

#### 读取一个字符串

```python
with open('myfile1.txt', "r+") as file:
    contents = file.read()
print(contents)
```

### 对象

#### 写一个对象

```python
contents = {"aa": 12, "bb": 21}
with open("myfile2.txt", "w+") as file:
    file.write(json.dumps(contents))
```

#### 读取对象

```python
with open('myfile2.txt', "r+") as file:
    contents = json.load(file)
print(contents)
```

### 删除文件

```python
import os
os.remove("myfile.txt")
```

### 检查和删除

```python
import os
if os.path.exists("myfile.txt"):
    os.remove("myfile.txt")
else:
    print("The file does not exist")
```

### 删除文件夹

```python
import os
os.rmdir("myfolder")
```

Python 类和继承
--------

### 定义

```python
class MyNewClass:
    pass
# 类的实例化
my = MyNewClass()
```

### 构造函数

```python
class Animal:
    def __init__(self, voice):
        self.voice = voice
 
cat = Animal('Meow')
print(cat.voice)    # => Meow
 
dog = Animal('Woof') 
print(dog.voice)    # => Woof
```

### 方法

```python
class Dog:
    # 类的方法
    def bark(self):
        print("Ham-Ham")
 
charlie = Dog()
charlie.bark()   # => "Ham-Ham"
```

### 类变量
<!--rehype:wrap-class=row-span-2-->

```python
class MyClass:
    class_variable = "A class variable!"
# => 一个类变量！
print(MyClass.class_variable)
x = MyClass()
 
# => 一个类变量！
print(x.class_variable)
```

### super() 函数
<!--rehype:wrap-class=row-span-2-->

```python
class ParentClass:
    def print_test(self):
        print("Parent Method")
 
class ChildClass(ParentClass):
    def print_test(self):
        print("Child Method")
        # 调用父级的 print_test()
        super().print_test() 
```

---

```python
>>> child_instance = ChildClass()
>>> child_instance.print_test()
Child Method
Parent Method
```

### repr() 方法

```python
class Employee:
    def __init__(self, name):
        self.name = name
 
    def __repr__(self):
        return self.name
 
john = Employee('John')
print(john)  # => John
```

### 用户定义的异常

```python
class CustomError(Exception):
    pass
```

### 多态性

```python
class ParentClass:
    def print_self(self):
        print('A')
 
class ChildClass(ParentClass):
    def print_self(self):
        print('B')
 
obj_A = ParentClass()
obj_B = ChildClass()
 
obj_A.print_self() # => A
obj_B.print_self() # => B
```

### 重写

```python
class ParentClass:
    def print_self(self):
        print("Parent")
 
class ChildClass(ParentClass):
    def print_self(self):
        print("Child")
 
child_instance = ChildClass()
child_instance.print_self() # => Child
```

### 继承

```python
class Animal: 
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs
        
class Dog(Animal):
    def sound(self):
        print("Woof!")
 
Yoki = Dog("Yoki", 4)
print(Yoki.name) # => YOKI
print(Yoki.legs) # => 4
Yoki.sound()     # => Woof!
```

### 属性封装与访问控制

实现计算属性、只读属性和验证逻辑。

```python
class Person:
    def __init__(self, age):
        self._age = age  # 约定：_age 为内部属性

    @property
    def age(self):
        """获取年龄的方法，伪装成属性"""
        return self._age

    @age.setter
    def age(self, value):
        """设置年龄的方法，添加验证逻辑"""
        if value < 0:
            raise ValueError("年龄不能为负数")
        self._age = value

# 使用示例
p = Person(30)
print(p.age)  # 直接访问属性，无需括号 → 30
p.age = 31    # 赋值操作调用 @age.setter → 验证通过
p.age = -5    # 抛出 ValueError: 年龄不能为负数
```

Python 数据模型
--------

更多请移步 <https://docs.python.org/zh-cn/3/reference/datamodel.html>

### 自定义类创建

参见 [自定义类创建](https://docs.python.org/zh-cn/3/reference/datamodel.html#customizing-class-creation) 。

```python
from typing import Any

class Object:
    def __new__(cls, *args, **kwargs) -> "self":
        # new 和 init 声明的参数必须一致
        # 或者用 *args 和 **kwargs 进行兼容
        return object.__new__(cls)

    def __init__(self, *args, **kwargs):
        # 初始化方法没有返回值，也不能返回值。
        pass

    def __call__(self, *args, **kwargs) -> Any:
        pass

# 依次调用了 new 和 init，所以如果
# 手动调用 new，那么别忘了调用 init
obj = Object()

# 触发 __call__ 方法，要给什么参数取决于声明
obj()
```

### 上下文管理器
<!--rehype:wrap-class=col-span-2-->
参见 [上下文管理器](https://docs.python.org/zh-cn/3/reference/datamodel.html#with-statement-context-managers) 。

```python
from typing import Any

class Object:
    def __enter__(self) -> Optional[Any]:
        # with 语句会将返回值绑定到 as 子句中的变量，如果有的话。
        return

    def __exit__(self, exc_type, exc_value, traceback):
        # 若 with 内没有发生异常，则三个参数都是 None 。
        # 不应该重新引发传入的异常，这是调用者的责任。
        pass

with Object() as alias:
    # 进入 with 之前调用 obj.__enter__() 并得到 alias（如果有返回的话）
    pass
# 离开 with 后调用 obj.__exit__() ，不管是正常结束还是因异常抛出而离开。

# 当需要获取 Object 的对象时可以这样写
obj = Object()
with obj as alias:
    pass
```

### 特殊方法
<!--rehype:wrap-class=col-span-3-->
下表使用 `-> *` 代表返回值类型是任意的，或者需要视情况而定，实际上并不存在这种写法。  
诸如 `-> str` 仅表示绝大多数情况下应当返回 `str` 类型，或者推荐返回 `str` 类型。  
没有 `->` 的方法一般没有返回值。  
参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html>

| 语句                  | 特殊方法                               | 备注                                                                                                                                                                                                                                                 |     |
|---------------------|------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `repr(obj)`         | `__repr__(self) -> str`            | 详见 [`repr()`](https://docs.python.org/zh-cn/3/library/functions.html#repr) 。                                                                                                                                                                       |     |
| `str(obj)`          | `__str__(self) -> str`             | 详见 [`str` 类型](https://docs.python.org/zh-cn/3/library/stdtypes.html#str) 。                                                                                                                                                                         |     |
| `bytes(obj)`        | `__bytes__(self) -> bytes`         | 详见 [`bytes()`](https://docs.python.org/zh-cn/3/library/functions.html#func-bytes) 。                                                                                                                                                                |     |
| `format(obj, spec)` | `__format__(self, spec) -> str`    | 详见 [`format()`](https://docs.python.org/zh-cn/3/library/functions.html#format)、[格式化字符串字面值](https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings)、[格式规格迷你语言](https://docs.python.org/zh-cn/3/library/string.html#formatspec) 。 |     |
| `hash(obj)`         | `__hash__(self) -> int`            | 详见 [`hash()`](https://docs.python.org/zh-cn/3/library/functions.html#hash) 。                                                                                                                                                                       |     |
| `bool(obj)`         | `__bool__(self) -> bool`           | 未定义时调用 `obj.__len__() != 0` ，若 `__len__()` 也未定义，则所有对象都被视为 `True` 。另见 [`bool()`](https://docs.python.org/zh-cn/3/library/functions.html#bool) 。                                                                                                     |     |
| `dir(obj)`          | `__dir__(self) -> list`            | 返回值必须是一个序列，[`dir()`](https://docs.python.org/zh-cn/3/library/functions.html#dir) 会把返回的序列转换为列表并对其排序。                                                                                                                                                |     |
| `Object[key]`       | `__class_getitem__(cls, key) -> *` | 不建议用于除了 [模拟泛型类型](https://docs.python.org/zh-cn/3/reference/datamodel.html#emulating-generic-types) 以外的用途，避免 IDE 误判。                                                                                                                                |     |

- 自定义实例及子类检查，参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html#customizing-instance-and-subclass-checks>

| 语句                            | 特殊方法                                              | 备注                                        |     |
|-------------------------------|---------------------------------------------------|:------------------------------------------|-----|
| `isinstance(instance, class)` | `class.__instancecheck__(self, instance) -> bool` | 如果 instance 应被视为 class 的一个（直接或间接）实例则返回真值。 |     |
| `issubclass(subclass, class)` | `class.__subclasscheck__(self, subclass) -> bool` | 如果 subclass 应被视为 class 的一个（直接或间接）子类则返回真值。 |     |

- “富比较”方法，参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__lt__>

| 语句              | 特殊方法                           | 备注                                                                                                                                                  |     |
|-----------------|--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `obj < other`   | `__lt__(self, other) -> bool`  |                                                                                                                                                     |     |
| `obj <= other`  | `__le__(self, other) -> bool`  |                                                                                                                                                     |     |
| `obj == other`  | `__eq__(self, other) -> bool`  | 默认返回 `obj is other` ，如果结果为 `False` ，则会返回 [`NotImplemented`](https://docs.python.org/zh-cn/3/reference/datamodel.html#the-standard-type-hierarchy) 。 |     |
| `obj != other`  | `__ne__(self, other) -> bool`  | 默认返回 `not obj.__eq__(other)` 。                                                                                                                      |     |
| `obj > other`   | `__gt__(self, other) -> bool`  |                                                                                                                                                     |     |
| `obj >= other`  | `__ge__(self, other) -> bool`  |                                                                                                                                                     |     |

- 自定义属性访问，参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html#customizing-attribute-access>

| 语句                  | 特殊方法                                | 备注                                                                                                                               |     |
|---------------------|-------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|-----|
| `obj.name`          | `__getattr__(self, name) -> *`      | 优先调用。当抛出 [`AttributeError`](https://docs.python.org/zh-cn/3/library/exceptions.html#AttributeError) 时转向调用 `__getattribute__()` 。 |     |
| `obj.name`          | `__getattribute__(self, name) -> *` | 参见 [自定义属性访问](https://docs.python.org/zh-cn/3/reference/datamodel.html#customizing-attribute-access) 避免无限递归。                      |     |
| `obj.name = value`  | `__setattr__(self, name, value)`    |                                                                                                                                  |     |
| `del obj.name`      | `__delattr__(self, name)`           | 仅在 `del obj.name` 对于该对象有意义时才应该被实现。                                                                                               |     |

- 模拟容器类型，参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html#emulating-container-types>

| 语句                    | 特殊方法                               | 备注                                                                                                                                                                                                                                                                                                            |     |
|-----------------------|------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `len(obj)`            | `__len__(self) -> int`             |                                                                                                                                                                                                                                                                                                               |     |
| `op.length_hint(obj)` | `__length_hint__(self) -> int`     | 在使用标准库 [operator](https://docs.python.org/zh-cn/3/library/operator.html) 的 [`length_hint()`](https://docs.python.org/zh-cn/3/library/operator.html#operator.length_hint) 时会被调用（Python 3.4+）。                                                                                                                  |     |
| `obj[key]`            | `__getitem__(self, key) -> *`      | 需要抛出 [IndexError](https://docs.python.org/zh-cn/3/library/exceptions.html#IndexError) 以便正确地结束 [for](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#for) 循环。                                                                                                                                    |     |
| `obj[key]`            | `__missing__(self, key) -> *`      | 仅在 dict 的子类找不到键时被调用（不能重写 `__getitem__` 方法）。                                                                                                                                                                                                                                                                   |     |
| `obj[key] = value`    | `__setitem__(self, key, value)`    | `a[1:2] = b` 实际上是 `a[slice(1, 2, None)] = b` ，其它情形及在其余方法中同理。详见 [`slice()`](https://docs.python.org/zh-cn/3/library/functions.html#slice) 。                                                                                                                                                                    |     |
| `del obj[key]`        | `__delitem__(self, key)`           |                                                                                                                                                                                                                                                                                                               |     |
| _调用途径有很多_             | `__iter__(self) -> Iterator`       | 在需要创建一个 [迭代器](https://docs.python.org/zh-cn/3/glossary.html#term-iterator) 时被调用，例如使用 [`iter()`](https://docs.python.org/zh-cn/3/library/functions.html#iter) 、 [`for` 循环](https://docs.python.org/zh-cn/3/reference/compound_stmts.html#for) 。<br>最好返回一个新对象，因为迭代器在语义上是一次性的。若返回 `self` ，则必须实现 `__next__()` 方法。 |     |
| `reversed(obj)`       | `__reversed__(self) -> *`          | 详见 [`reversed()`](https://docs.python.org/zh-cn/3/library/functions.html#reversed) 。                                                                                                                                                                                                                          |     |
| `item in obj`         | `__contains__(self, item) -> bool` | 对于未定义该方法的对象在 `in` 和 `not in` 时，参考 [成员检测运算](https://docs.python.org/zh-cn/3/reference/expressions.html#membership-test-details) 。                                                                                                                                                                              |     |

- 模拟数字类型，参见 <https://docs.python.org/zh-cn/3/reference/datamodel.html#emulating-numeric-types>

| 语句                   | 特殊方法                               | 备注                                                                                                                                                                                 |     |
|----------------------|------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|
| `+obj`               | `__neg__(self) -> *`               |                                                                                                                                                                                    |     |
| `-obj`               | `__pos__(self) -> *`               |                                                                                                                                                                                    |     |
| `~obj`               | `__invert__(self) -> *`            |                                                                                                                                                                                    |     |
| `abs(obj)`           | `__abs__(self) -> *`               |                                                                                                                                                                                    |     |
| `int(obj)`           | `__int__(self) -> *`               |                                                                                                                                                                                    |     |
| `float(obj)`         | `__float__(self) -> *`             |                                                                                                                                                                                    |     |
| `complex(obj)`       | `__complex__(self) -> *`           |                                                                                                                                                                                    |     |
| `round(obj)`         | `__round__(self) -> int`           | 详见 [`round()`](https://docs.python.org/zh-cn/3/library/functions.html#round) 。                                                                                                     |     |
| `round(obj)`         | `__round__(self, ndigits) -> *`    | 详见 [`round()`](https://docs.python.org/zh-cn/3/library/functions.html#round) 。                                                                                                     |     |
| `math.ceil(obj)`     | `__ceil__(self) -> int`            | 详见标准库 [math](https://docs.python.org/zh-cn/3/library/math.html#module-math) 的 [`ceil()`](https://docs.python.org/zh-cn/3/library/math.html#math.ceil) 。                            |     |
| `math.floor(obj)`    | `__floor__(self) -> int`           | 详见标准库 [math](https://docs.python.org/zh-cn/3/library/math.html#module-math) 的 [`floor()`](https://docs.python.org/zh-cn/3/library/math.html#math.floor) 。                          |     |
| `math.trunc(obj)`    | `__trunc__(self) -> int`           | 详见标准库 [math](https://docs.python.org/zh-cn/3/library/math.html#module-math) 的 [`trunc()`](https://docs.python.org/zh-cn/3/library/math.html#math.trunc) 。                          |     |
|                      | `__index__(self) -> int`           | 需要无损地将数值转换为整数的时候会被调用。详见 [这里](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__index__) 。                                                                          |     |
| `obj + other`        | `__add__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `obj - other`        | `__sub__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `obj * other`        | `__mul__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `obj @ other`        | `__matmul__(self, other) -> *`     | 为第三方库而生的矩阵乘法运算符，[这里](https://docs.python.org/zh-cn/3/reference/expressions.html#binary-arithmetic-operations)提了一嘴。（Python 3.5+）                                                    |     |
| `obj / other`        | `__truediv__(self, other) -> *`    |                                                                                                                                                                                    |     |
| `obj // other`       | `__floordiv__(self, other) -> *`   |                                                                                                                                                                                    |     |
| `obj % other`        | `__mod__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `divmod(obj, other)` | `__divmod__(self, other) -> tuple` | `divmod(a, b)` 返回一个元组 `(a // b, a % b)` ，详见 [`divmod()`](https://docs.python.org/zh-cn/3/library/functions.html#divmod) 。                                                          |     |
| `obj ** exp`         | `__pow__(self, exp) -> *`          |                                                                                                                                                                                    |     |
| `pow(obj, exp, mod)` | `__pow__(self, exp, mod) -> *`     | `pow(base, exp, mod)` 比 `pow(base, exp) % mod` 更高效。                                                                                                                                |     |
| `obj << other`       | `__lshift__(self, other) -> *`     |                                                                                                                                                                                    |     |
| `obj >> other`       | `__rshift__(self, other) -> *`     |                                                                                                                                                                                    |     |
| `obj & other`        | `__and__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `obj ^ other`        | `__xor__(self, other) -> *`        |                                                                                                                                                                                    |     |
| `obj \| other`       | `__or__(self, other) -> *`         |                                                                                                                                                                                    |     |
| `other + obj`        | `__radd__(self, obj) -> *`         | 仅当 obj 未定义 `__add__()` 或其返回 `NotImplemented` ，<br>且与 other 互相都没有继承关系时，调用 other 的 `__radd__()` 。详见 [这里](https://docs.python.org/zh-cn/3/reference/datamodel.html#object.__radd__) 。 |     |
| `other - obj`        | `__rsub__(self, obj) -> *`         | 以下，如此类推。                                                                                                                                                                           |     |
| `other * obj`        | `__rmul__(self, obj) -> *`         |                                                                                                                                                                                    |     |
| `other @ obj`        | `__rmatmul__(self, obj) -> *`      |                                                                                                                                                                                    |     |
| `other / obj`        | `__rtruediv__(self, obj) -> *`     |                                                                                                                                                                                    |     |
| `other // obj`       | `__rfloordiv__(self, obj) -> *`    |                                                                                                                                                                                    |     |
| `other % obj`        | `__rmod__(self, obj) -> *`         |                                                                                                                                                                                    |     |
| `divmod(other, obj)` | `__rdivmod__(self, obj) -> tuple`  |                                                                                                                                                                                    |     |
| `other ** obj`       | `__rpow__(self, obj) -> *`         |                                                                                                                                                                                    |     |
|                      | `__rpow__(self, obj, mod) -> *`    | `pow(obj, other, mod)` 不会尝试调用 `other.__rpow__(obj, mod)` ，因为强制转换规则会太过复杂。                                                                                                           |     |
| `other << obj`       | `__rlshift__(self, obj) -> *`      |                                                                                                                                                                                    |     |
| `other >> obj`       | `__rrshift__(self, obj) -> *`      |                                                                                                                                                                                    |     |
| `other & obj`        | `__rand__(self, obj) -> *`         |                                                                                                                                                                                    |     |
| `other ^ obj`        | `__rxor__(self, obj) -> *`         |                                                                                                                                                                                    |     |
| `other \| obj`       | `__ror__(self, obj) -> *`          |                                                                                                                                                                                    |     |
| `obj += other`       | `__iadd__(self, other) -> *`       | 若方法已定义，则 `a += b` 等价于 `a.__iadd(b)` ；<br>若未定义，则回退到 `a + b` 选择 `x.__add__(y)` 和 `y.__radd__(x)` 。                                                                                   |     |
| `obj -= other`       | `__isub__(self, other) -> *`       | 以下，如此类推。                                                                                                                                                                           |     |
| `obj *= other`       | `__imul__(self, other) -> *`       |                                                                                                                                                                                    |     |
| `obj @= other`       | `__imatmul__(self, other) -> *`    |                                                                                                                                                                                    |     |
| `obj /= other`       | `__itruediv__(self, other) -> *`   |                                                                                                                                                                                    |     |
| `obj //= other`      | `__ifloordiv__(self, other) -> *`  |                                                                                                                                                                                    |     |
| `obj %= other`       | `__imod__(self, other) -> *`       |                                                                                                                                                                                    |     |
| `obj **= exp`        | `__ipow__(self, other) -> *`       |                                                                                                                                                                                    |     |
| `obj <<= other`      | `__ilshift__(self, other) -> *`    |                                                                                                                                                                                    |     |
| `obj >>= other`      | `__irshift__(self, other) -> *`    |                                                                                                                                                                                    |     |
| `obj &= other`       | `__iand__(self, other) -> *`       |                                                                                                                                                                                    |     |
| `obj ^= other`       | `__ixor__(self, other) -> *`       |                                                                                                                                                                                    |     |
| `obj \|= other`      | `__ior__(self, other) -> *`        |                                                                                                                                                                                    |     |

Python 类型标注 (Python 3.5+)
--------

### 变量

```python
string: str = "ha"
times: int = 3

print(string * times)  # => hahaha
```

### 变量

```python
result: str = 1 + 2

print(result)  # => 3
```

错误的类型标注不会影响正常运行，也不会报错

### 参数

```python
def say(name: str, start: str = "Hi"):
    return start + ", " + name

print(say("Python"))  # => Hi, Python
```

### 位置参数

```python
def calc_summary(*args: int):
    return sum(args)

print(calc_summary(3, 1, 4))  # => 8
```

表示 args 的所有元素都是 int 类型的。

### 返回值

```python
def say_hello(name) -> str:
    return "Hello, " + name

var = "Python"
print(say_hello(var))  # => Hello, Python
```

### 多种可能的返回值

```python
from typing import Union

def resp200(meaningful) -> Union[int, str]:
    return "OK" if meaningful else 200
```

表示返回值可能是 int，也可能是 str 。

### 关键字参数

```python
def calc_summary(**kwargs: int):
    return sum(kwargs.values())

print(calc_summary(a=1, b=2))  # => 3
```

表示 kwargs 的所有值都是 int 类型的。

### 多个返回值

```python
def resp200() -> (int, str):
    return 200, "OK"
```

### 多种可能的返回值 (3.10+)

```python
def resp200(meaningful) -> int | str:
    return "OK" if meaningful else 200
```

自 Python 3.10 起可用。

### 属性

```python
class Employee:
    name: str
    age: int

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.graduated: bool = False
```

### 标注自己

```python
class Employee:
    name: str
    age: int

    def set_name(self, name) -> "Employee":
        self.name = name
        return self
```

这里表示 set_name() 返回了一个 Employee 对象。

### 标注自己 (3.11+)

```python
from typing import Self

class Employee:
    name: str
    age: int

    def set_name(self: Self, name) -> Self:
        self.name = name
        return self
```

### 标注一个值为类型的参数
<!--rehype:wrap-class=col-span-2-->
```python
from typing import TypeVar, Type

T = TypeVar("T")

# "mapper" 的值是一个像 int、str、MyClass 这样的类型
# "default" 是一个 T 类型的值，比如 314、"string"、MyClass()
# 函数的返回值也是一个 T 类型的值
def converter(raw, mapper: Type[T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

raw: str = input("请输入一个整数：")
result: int = converter(raw, mapper=int, default=0)
```

### 标注一个值为函数的参数
<!--rehype:wrap-class=col-span-2-->

```python
from typing import TypeVar, Callable, Any

T = TypeVar("T")

def converter(raw, mapper: Callable[[Any], T], default: T) -> T:
    try:
        return mapper(raw)
    except:
        return default

# Callable[[Any], T] 表示值是一个像这样声明的函数:
# def anynomous(arg: Any) -> T:
#     pass

def is_success(value) -> bool:
    return value in (0, "OK", True, "success")

resp = dict(code=0, message="OK", data=[])
successed: bool = converter(resp.message, mapper=is_success, default=False)
```

各种各样的
----------

### 注释

```python
# 这是单行注释
```

---

```python
""" 可以写多行字符串
    使用三个"，并且经常使用
    作为文档。
"""
```

---

```python
''' 可以写多行字符串
    使用三个'，并且经常使用
    作为文档。
'''
```

### 生成器

```python
def double_numbers(iterable):
    for i in iterable:
        yield i + i
```

生成器可帮助您编写惰性代码

### 要列出的生成器

```python
values = (-x for x in [1,2,3,4,5])
gen_to_list = list(values)
# => [-1, -2, -3, -4, -5]
print(gen_to_list)
```

### 处理异常
<!--rehype:wrap-class=col-span-3-->

```python
try:
    # 使用“raise”来引发错误
    raise IndexError("这是一个索引错误")
except IndexError as e:
    pass                 # pass只是一个空操作。 通常你会在这里做恢复。
except (TypeError, NameError):
    pass                 # 如果需要，可以一起处理多个异常。
else:                    # try/except 块的可选子句。 必须遵循除块之外的所有内容
    print("All good!")   # 仅当 try 中的代码未引发异常时运行
finally:                 # 在所有情况下执行
    print("我们可以在这里清理资源")
```

### 高阶函数map

将一个函数应用到可迭代对象（如列表）的每个元素上，并返回一个新的迭代器。

```python
def square(x):
    return x ** 2

使用 map 函数
numbers = [1, 2, 3, 4]
result = map(square, numbers)

转换为列表查看结果
print(list(result))  # 输出: [1, 4, 9, 16]
```

### 高阶函数sorted

对可迭代对象进行排序，返回一个新的已排序列表（原对象不变）

```python
# 按照分数排序
users = [
    {"name": "Alice", "score": 95, "time": "2023-01-15 10:30:00"},
    {"name": "Bob", "score": 88, "time": "2023-01-15 09:45:00"},
    {"name": "Charlie", "score": 95, "time": "2023-01-14 15:20:00"},
    {"name": "David", "score": 85, "time": "2023-01-16 11:10:00"}
]
# reverse=True代表降序排序
sorted_users = sorted(users, key=lambda x: x["score"], reverse=True)

# 输出结果
for user in sorted_users:
    print(f"{user['name']}: {user['score']}")

# 结果：
# Alice: 95
# Charlie: 95
# Bob: 88
# David: 85
```

### 高阶函数reduce

将一个二元函数（接受两个参数的函数）累积应用到可迭代对象的元素上，最终合并为单个值

```python
from functools import reduce

# 定义一个乘法函数
def multiply(x, y):
    return x * y

# 使用 reduce 函数
numbers = [2, 3, 4, 5]
result = reduce(multiply, numbers)

print(result)  # 输出: 120（2×3×4×5=120）
```

### 偏函数

固定原函数的某些参数，生成新函数

```python
from functools import partial

# 原函数：计算 x 的 y 次幂
def power(x, y):
    return x ** y

# 创建偏函数，固定 y=2（即平方函数）
square = partial(power, y=2)

# 调用偏函数
print(square(5))  # 输出: 25 (5²)
print(square(10)) # 输出: 100 (10²)
```

### pyenv & pipenv
<!--rehype:wrap-class=col-span-3-->

pyenv 用于管理python版本，pipenv 用于管理项目包版本

#### pyenv

```shell
# 安装 pyenv
curl https://pyenv.run | bash
```

[更多安装方式](https://github.com/pyenv/pyenv#installation)

```shell
# 查看 pyenv 可以安装的 python 版本列表
pyenv install -l
# 按照 3.10 的前缀显示 python 的最新版本
pyenv latest 3.10

# 安装 python 版本
pyenv install 3.10.14

# 查看已安装的 python 版本
pyenv versions

# 设置 python 版本
pyenv global 3.10.14 # 全局设置
pyenv shell  3.10.14 # 针对当前 shell session
pyenv local  3.10.14 # 针对当前目录 
```

#### pipenv

```shell
# 安装 pipenv
pip install pipenv --user  # pip
brew install pipenv        # homebrew

# 更新 pipenv
pip install --user --upgrade pipenv # pip
brew upgrade pipenv                 # homebrew
```

```shell
# 将 pipenv 命令加入到系统环境变量 $PATH 中 (Unix and MacOS)
dir=$(python -c 'import site; print(site.USER_BASE + "/bin")') # 打印 python site-packages bin 路径
echo 'export PATH="'$dir':$PATH"' >> ~/.zshrc # 将 dir 路径加入到 PATH 中
source ~/.zshrc


# 安装 package
pipenv install <package name> # 不指定版本
pipenv install <package name>==<version>    # 精确指定版本
pipenv install <package name>~=<version>    # 指定版本范围，例如 1.1则表示安装1.x的最新版本，1.0.1则表示安装1.0.x的最新版本
pipenv install "<package name>=<version>"   # 大于等于指定版本
pipenv install "<package name>=<version>"   # 小于等于指定版本
```

```shell
# 指定 python 版本
pipenv --python 3.10.12

# 激活当前目录虚拟环境
pipenv shell
```

另见
----

- [Python 官方网站](https://www.python.org/)  _(python.org)_
- [Python 文档](https://docs.python.org/zh-cn/3/index.html)  _(docs.python.org)_
- [Y 分钟学会 Python](https://learnxinyminutes.com/docs/zh-cn/python-cn/) _(learnxinyminutes.com)_
- [Python 中的正则表达式](./regex.md#python-中的正则表达式) _(jaywcjlove.github.io)_
