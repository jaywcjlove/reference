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

### 控制台输入

```python
>>> name = input("Enter your name: ")
Enter your name: Tom
>>> name
'Tom'
```

从控制台获取输入数据

### 插入分隔符拼接

```python
>>> "、".join(["John", "Peter", "Vicky"])
'John、Peter、Vicky'
```

### 头尾判断

```python
>>> # 是否以 H 开头
>>> "Hello, world!".endswith("H")
True
>>> # 是否以 h 开头
>>> "Hello, world!".endswith("h")
False
>>> # 是否以 ! 结尾
>>> "Hello, world!".endswith("!")
True
```

### 转义符号

| 转义符号 | 对应的操作  |
|------|--------|
| `\\` | 输出反斜杠  |
| `\'` | 输出单引号  |
| `\"` | 输出双引号  |
| `\n` | 换行     |
| `\t` | 水平制表符  |
| `\r` | 光标回到首位 |
| `\b` | 退格     |

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

### 一般形式

```python
num = 5
if num > 10:
    print("num is totally bigger than 10.")
elif num < 10:
    print("num is smaller than 10.")
else:
    print("num is indeed 10.")
```

### 单行形式

```python
>>> a = 330
>>> b = 200
>>> r = "a" if a > b else "b"
>>> print(r)
a
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

另见
----

- [Python 官方网站](https://www.python.org/)  _(python.org)_
- [Python 文档](https://docs.python.org/zh-cn/3/index.html)  _(docs.python.org)_
- [Y 分钟学会 Python](https://learnxinyminutes.com/docs/zh-cn/python-cn/) _(learnxinyminutes.com)_
- [Python 中的正则表达式](./regex.md#python-中的正则表达式) _(jaywcjlove.github.io)_
