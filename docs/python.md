Python 3 备忘清单
===

Python 备忘单是 [Python 3](https://www.python.org/) 编程语言的单页参考表

入门
-----

### 介绍

- [Python](https://www.python.org/)  _(python.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/python/) _(learnxinyminutes.com)_
- [Regex in python](./regex.md#python-中的正则表达式) _(jaywcjlove.github.io)_

### Hello World

```python
>>> print("Hello, World!")
Hello, World!
```

Python 中著名的“Hello World”程序

### 变量

```python
age = 18      # 年龄是 int 类型
name = "John" # name 现在是 str 类型
print(name)
```

Python 不能在没有赋值的情况下声明变量

### 数据类型
<!--rehype:wrap-class=row-span-2-->

:-| :-
:-| :-
`str`                              | Text
`int`, `float`, `complex`          | Numeric
`list`, `tuple`, `range`           | Sequence
`dict`                             | Mapping
`set`, `frozenset`                 | Set
`bool`                             | Boolean
`bytes`, `bytearray`, `memoryview` | Binary

查看: [Data Types](#python-数据类型)

### Slicing String

```python
>>> msg = "Hello, World!"
>>> print(msg[2:5])
llo
```

查看: [Strings](#python-字符串)

### Lists

```python
mylist = []
mylist.append(1)
mylist.append(2)
for item in mylist:
    print(item) # 打印输出 1,2
```

查看: [Lists](#python-lists)

### If Else

```python
num = 200
if num > 0:
    print("num is greater than 0")
else:
    print("num is not greater than 0")
```

查看: [流程控制](#python-流程控制)

### 循环

```python
for item in range(6):
    if item == 3: break
    print(item)
else:
    print("Finally finished!")
```

查看: [Loops](#python-循环)

### 函数

```python
>>> def my_function():
...     print("来自函数的你好")
...
>>> my_function()
来自函数的你好
```

查看: [Functions](#函数)

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

### f-字符串(Python 3.6+)

```python
>>> website = 'Quick Reference'
>>> f"Hello, {website}"
"Hello, Quick Reference"
>>> num = 10
>>> f'{num} + 10 = {num + 10}'
'10 + 10 = 20'
```

查看: [Python F-Strings](#python-f-字符串自-python-36-起)

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

查看: [Strings](#python-字符串)

### 数字

```python
x = 1    # int
y = 2.8  # float
z = 1j   # complex
>>> print(type(x))
<class 'int'>
```

### 布尔值

```python
my_bool = True 
my_bool = False
bool(0)     # => False
bool(1)     # => True
```

### Lists

```python
list1 = ["apple", "banana", "cherry"]
list2 = [True, False, False]
list3 = [1, 5, 7, 9, 3]
list4 = list((1, 5, 7, 9, 3))
```

查看: [Lists](#python-lists)

### 元组 Tuple

```python
my_tuple = (1, 2, 3)
my_tuple = tuple((1, 2, 3))
```

类似于 List 但不可变

### Set

```python
set1 = {"a", "b", "c"}   
set2 = set(("a", "b", "c"))
```

一组独特的项目/对象

### 字典 Dictionary

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

Key：值对，JSON 类对象

### Casting

#### 整数 Integers

```python
x = int(1)       # x 将是 1
y = int(2.8)     # y 将是 2
z = int("3")     # z 将是 3
```

#### 浮点数 Floats

```python
x = float(1)     # x 将为 1.0
y = float(2.8)   # y 将是 2.8
z = float("3")   # z 将为 3.0
w = float("4.2") # w 将是 4.2
```

#### 字符串 Strings

```python
x = str("s1")    # x 将是 's1'
y = str(2)       # y 将是 '2'
z = str(3.0)     # z 将是 '3.0'
```

Python 字符串
------------

### 类数组

```python
>>> hello = "Hello, World"
>>> print(hello[1])
e
>>> print(hello[-1])
d
```

获取位置 `1` 或最后的字符

### 循环

```python
>>> for char in "foo":
...     print(char)
f
o
o
```

遍历单词 `foo` 中的字母

### 切片字符串
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

### 字符串长度

```python
>>> hello = "Hello, World!"
>>> print(len(hello))
13
```

`len()` 函数返回字符串的长度

### 多份

```python
>>> s = '===+'
>>> n = 8
>>> s * n
'===+===+===+===+===+===+===+===+'
```

### 检查字符串

```python
>>> s = 'spam'
>>> s in 'I saw spamalot!'
True
>>> s not in 'I saw The Holy Grail!'
True
```

### 连接

```python
>>> s = 'spam'
>>> t = 'egg'
>>> s + t
'spamegg'
>>> 'spam' 'egg'
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

### Input 输入

```python
>>> name = input("Enter your name: ")
Enter your name: Tom
>>> name
'Tom'
```

从控制台获取输入数据

### Join 加入

```python
>>> "#".join(["John", "Peter", "Vicky"])
'John#Peter#Vicky'
```

### Endswith 以..结束

```python
>>> "Hello, world!".endswith("!")
True
```

### 转义符号

| 转义符号 | 对应的操作 |
|---|---|
| `\\` | 输出反斜杠 |
| `\'` | 输出单引号 |
| `\"` | 输出双引号 |
| `\n` | 换行 |
| `\t` | 水平制表符 |
| `\r` | 光标回到首位 |
| `\b` | 退格 |

Python F 字符串（自 Python 3.6+ 起）
----------------

### f-Strings 用法
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

它从 Python 3.6 开始可用，另见: [格式化的字符串文字](https://docs.python.org/3/reference/lexical_analysis.html#f-strings)

### f-Strings 填充对齐

```python
>>> f'{"text":10}'   # [宽度]
'text      '
>>> f'{"test":*>10}' # 向左填充
'******test'
>>> f'{"test":*<10}' # 向右填充
'test******'
>>> f'{"test":*^10}' # 填充中心
'***test***'
>>> f'{12345:0>10}'  # 填写数字
'0000012345'
```

### f-Strings 类型
<!--rehype:wrap-class=row-span-2-->

```python
>>> f'{10:b}'     # binary 二进制类型
'1010'
>>> f'{10:o}'     # octal 八进制类型
'12'
>>> f'{200:x}'    # hexadecimal 十六进制类型
'c8'
>>> f'{200:X}'
'C8'
>>> f'{345600000000:e}' # 科学计数法
'3.456000e+11'
>>> f'{65:c}'       # 字符类型
'A'
>>> f'{10:#b}'      # [类型] 带符号（基础）
'0b1010'
>>> f'{10:#o}'
'0o12'
>>> f'{10:#x}'
'0xa'
```

### F-Strings Sign

```python
>>> f'{12345:+}'      # [sign] (+/-)
'+12345'
>>> f'{-12345:+}'
'-12345'
>>> f'{-12345:+10}'
'    -12345'
>>> f'{-12345:+010}'
'-000012345'
```

### F-Strings 其它

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

Python Lists
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

### 添加

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

### List 切片
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

#### 跳跃索引

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

Python 流程控制
------------

### 基本

```python
num = 5
if num > 10:
    print("num is totally bigger than 10.")
elif num < 10:
    print("num is smaller than 10.")
else:
    print("num is indeed 10.")
```

### 一行

```python
>>> a = 330
>>> b = 200
>>> r = "a" if a > b else "b"
>>> print(r)
a
```

### else if

```python
value = True
if not value:
    print("Value is False")
elif value is None:
    print("Value is None")
else:
    print("Value is True")
```

Python 循环
--------

### 基础

```python
primes = [2, 3, 5, 7]
for prime in primes:
    print(prime)
```

### 有索引

```python
animals = ["dog", "cat", "mouse"]
for i, value in enumerate(animals):
    print(i, value)
```

### While

```python
x = 0
while x < 4:
    print(x)
    x += 1  # Shorthand for x = x + 1
```

### Break

```python
x = 0
for index in range(10):
    x = index * 10
    if index == 5:
        break
    print(x)
```

### Continue

```python
for index in range(3, 8): 
    x = index * 10
    if index == 5:
        continue
    print(x)
```

### 范围

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

### 列表理解
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

### 关键字参数

```python
def keyword_args(**kwargs):
    return kwargs
# => {"big": "foot", "loch": "ness"}
keyword_args(big="foot", loch="ness")
```

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

### 全部导入

```python
from math import *
```

### 缩短模块

```python
import math as m
# => True
math.sqrt(16) == m.sqrt(16)
```

### 功能和属性

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

#### 写一个字符串

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

### Defining

```python
class MyNewClass:
    pass
# Class Instantiation
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

### Super() 函数
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

### 覆盖

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

另见
----

- [Python](https://www.python.org/)  _(python.org)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/python/) _(learnxinyminutes.com)_
- [Regex in python](./regex.md#python-中的正则表达式) _(jaywcjlove.github.io)_
