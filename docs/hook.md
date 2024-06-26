Hook 备忘清单
===

Hook 备忘单是 [Hook](https://github.com/hook-lang/hook/) 编程语言的一页参考表。

## 入门

### 介绍

- [GitHub](https://github.com/hook-lang/hook)
- [在线运行](https://hook-lang.github.io/hook-playground)
- [示例](https://github.com/hook-lang/hook/tree/main/examples)
- [VSCode 扩展](https://marketplace.visualstudio.com/items?itemName=fabiosvm.hook)

### Hook 看起来是什么样的？

```rust
fn factorial(n) {
  if (n == 0)
    return 1;
  return n * factorial(n - 1);
}
```

Hook 具有类似于 `C` 的现代语法。

### Hello, World

```js
println("Hello, World!");
// Hello, World!
```

Hook 中的 `Hello, World!` 程序。

### 使用 Homebrew 安装

```text
brew tap hook-lang/hook
brew install hook
hook --help
```

解释器可以通过 [`Homebrew`](https://brew.sh) 获取。

### 在 Windows 上安装
<!--rehype:wrap-class=col-span-2-->

```bash
cd %tmp%
curl -sSLO https://raw.githubusercontent.com/hook-lang/hook/main/scripts/install.bat install
```

这是你在 `Windows` 上安装的方法。

## 类型和值

### 基本类型

|          |           |
| -------- | :-------- |
| `Nil`    | `Bool`    |
| `Number` | `String`  |
| `Range`  | `Array`   |
| `Record` | `Closure` |
<!--rehype:className=left-align-->

基本类型列表。

### 布尔值

```js
let x = true;
let y = false;
```

Bool 是布尔类型。所以，它可以是 `true` 或 `false`

### 数字

```js
let x = 0;
let degree = 45; // 整数
let pi = 3.14;   // 浮点数
```

数字可以是整数或浮点数

### 字符串

```js
let empty = "";

let name = "John";

let message = 'Hello, "John"!';
```

字符串可以用单引号或双引号表示

### 区间

```js
let range = 1..5;

println(range);
// 1..5
```

区间是整数的序列

### 数组

```js
let fruits = ["apple", "banana", "cherry"];

println(fruits);
// ["apple", "banana", "cherry"]
```

数组是元素的序列

### 记录

```js
let p = { x: 5, y: 10 };

println(p);
// {x: 5, y: 10}
```

记录将字段映射到值

### **nil** 值

```swift
let x = nil;
var y;
```

```js
println(x); // nil
println(y); // nil
```

`nil` 表示没有值

### 假值

```swift
if (nil) "true" else "false";   // false
if (false) "true" else "false"; // false
if (true) "true" else "false";  // true
if (0) "true" else "false";     // true
if (1) "true" else "false";     // true
if ("") "true" else "false";    // true
if ([]) "true" else "false";    // true
if ({}) "true" else "false";    // true
```

只有 `nil` 和 `false` 是假值。

## 语法

### 注释

```js
// This is a single-line comment.

// And this is
// a multi-line
// comment. ;)
```

Hook 只支持单行注释。抱歉！

### 分号
<!--rehype:wrap-class=col-span-2-->

<!-- prettier-ignore -->
```js
println(1) ; println(2) ; println(3) ;
println(4) ; println(5)
; println(6) ;
;                                      // error: unexpected token `;`
```

需要使用分号，不允许空语句。

### 代码块

```js
{
  println("Hello");
  {
    println("World");
  }
}
```

使用代码块定义作用域。

### 保留字

|         |          |            |         |
| ------- | :------- | :--------- | :------ |
| `as`    | `break`  | `continue` | `do`    |
| `else`  | `false`  | `fn`       | `for`   |
| `from`  | `if`     | `import`   | `in`    |
| `inout` | `let`    | `loop`     | `match` |
| `nil`   | `return` | `struct`   | `trait` |
| `true`  | `var`    | `while`    |         |
<!--rehype:className=left-align-->

有少量保留字。

### 标识符

```php
var lowercase;
var CAPS_LOCK;
var camelCase;
var PascalCase;
var snake_case;
var _123;
```

标识符是区分大小写的。

## 变量

### 变量

```js
var x; // x contains nil
x = 5; // now, x contains a number
x = "foo"; // a string

println(x);
```

数值有类型，但变量没有。

### 不可变变量
<!--rehype:wrap-class=col-span-2-->

```js
let x = 5;

x = 10; // error: cannot assign to immutable variable `x`

let y; // error: unexpected token `;`
```

不可变变量在声明时必须初始化。

### 作用域
<!--rehype:wrap-class=col-span-2-->

```js
let x = 5;
{
  let y = 15;
  println(x); // 10
  println(y); // 15
}
println(x); // 5
println(y); // error: variable `y` is used but not defined
```

当堆分配的变量超出作用域时，会自动释放。

### 遮蔽

```js
let x = 5;
{
  let x = 10; // shadows the outer `x`
  println(x); // 10
}
println(x); // 5
```

变量可以被遮蔽。

## 运算符和表达式

### 算术运算

```js
println(5 + 10); // 15
println(5 - 10); // -5
println(5 * 10); // 50
println(5 / 10); // 0.5
println(5 % 10); // 5
println(-5); // -5
```

基本算术运算符。

### 比较运算

```js
println(5 == 10); // false
println(5 != 10); // true
println(5 < 10); // true
println(5 > 10); // false
println(5 <= 10); // true
println(5 >= 10); // false
```

比较运算符。

### 逻辑运算

```js
println(true && false); // false
println(true || false); // true
println(!true); // false
```

逻辑运算符。

### 位运算和移位

```js
println(5 & 10); // 0
println(5 | 10); // 15
println(5 ^ 10); // 15
println(~5); // -6
println(5 << 1); // 10
println(5 >> 1); // 2
```

位运算和移位运算符。

### 赋值

```js
var x = 5; // 5
x += 10; // 15
x -= 10; // 5
x *= 10; // 50
x /= 10; // 5
x %= 10; // 5
x &= 10; // 0
x |= 10; // 10
x ^= 5; // 15
x <<= 5; // 480
x >>= 5; // 15
x++; // 16
x--; // 15
```

赋值运算符。

### 三元运算符

```js
let x = 5;
let y = if (x > 5) 10 else 20;

println(y);
// 20
```

在 Hook 中，三元运算符是 `if else`。

## 分支

### 如果

```js
let x = 10;

if (x > 5) {
  println("x is greater than 5");
}
// x is greater than 5
```

`if` 语句。

### 如果否则

```js
let x = 11;

if (x == 5) {
  println("x is 5");
} else if (x == 10) {
  println("x is 10");
} else {
  println("x is neither 5 nor 10");
}
// x is neither 5 nor 10
```

`if else` 语句。

### 匹配

```rust
let x = 5;

match (x) {
  1 => println("one");
  2 => println("two");
  3 => println("three");
  _ => println("other");
}
// other
```

`match` 语句。

## 循环

### while

```js
var x = 0;

while (x < 5) {
  print(x);
  x += 1;
}
// 01234
```

`while` 循环。

### do while

```js
var x = 0;

do {
  print(x);
  x += 1;
} while (x < 5);
// 01234
```

`do while` 循环。

### for

```rust
for (var i = 0; i < 5; i++) {
  print(i);
}
// 01234
```

经典的 `for` 循环。

### 循环

```rust
loop {
  println("Press Ctrl+C to stop");
}
```

无条件的 `loop` 循环。

### 中断

```js
var i = 0;
```

```rust
loop {
  if (i == 5) break;

  print(i);
  i += 1;
}
// 01234
```

使用 `break` 退出循环。

### 继续

```js
var i = 0;
```

```rust
loop {
  i += 1;
  if (i % 2 == 0) continue;

  print(i);

if (i == 5) break;
}
// 135
```

使用 `continue` 跳过循环体的剩余部分。

## 字符串

### 索引字符串

```js
let s = "Hello";

println(s[0]); // H
println(s[1]); // e
println(s[4]); // o
```

对字符串进行索引返回一个包含1个字符的字符串。

### 切片字符串

```js
let s = "Hello, World!";

println(s[0..5]);        // Hello,
println(s[7..12]);       // World!
```

通过传递一个区间来切片字符串。

### 连接字符串

```js
let greeting = "Hi" + " there!";

println(greeting);
// Hi there!
```

使用 `+` 运算符连接字符串。

## 数组

### 索引数组

```js
let a = [1, 2, 3];

println(a[0]); // 1
println(a[1]); // 2
println(a[2]); // 3
```

对数组进行索引返回一个元素

### 切片数组

```js
let a = [1, 2, 3, 4];

println(a[0..2]);            // [1, 2, 3]
println(a[1..3]);            // [2, 3, 4]
println(a[2 .. len(a) - 1]); // [3, 4]
```

数组从零开始索引

### 附加元素

```js
var a = [1, 2];

a[] = 3;

println(a);
// [1, 2, 3]
```

数组是可变的。使用 `[]` 来附加一个元素

### 元素赋值

```js
var a = [1, 2, 3];

a[0] = 4;

println(a);
// [4, 2, 3]
```

更新数组中的元素

### 连接数组

```js
let a = [1, 2];
let b = [3];
let c = a + b;

println(c);
// [1, 2, 3]
```

使用 `+` 运算符来连接数组

### 数组相减

```js
let a = [1, 2, 2, 3];
let b = [2];
let c = a - b;

println(c);
// [1, 3]
```

获取两个数组之间的差异。

## 函数和闭包

### 函数声明

```rust
fn sum(a, b) {
  return a + b;
}

println(sum(5, 10));
// 15
```

函数是一等公民

### 函数调用

```rust
fn greet(name) {
  println("Hi, " + name + "!");
}

greet("John", "Doe");
// Hi, John!
```

参数的数量可以调整

### 匿名函数

```js
let sum = |a, b| {
  return a + b;
};

println(sum(5, 10));
// 15
```

Hook 也支持匿名函数

### 闭包

```js
let pi = 3.14;
```

```rust
fn area(r) {
  return pi * r * r;
}

println(area(5));
// 78.5
```

Hook 中的闭包只捕获数值

### 高阶函数

```rust
fn apply(f, x) {
  return f(x);
}

fn double(x) {
  return x * 2;
}

println(apply(double, 5));
// 10
```

函数可以作为参数传递或返回

### 函数的语法糖

```rust
fn factorial(n) =>
  if (n == 0) 1
  else n * factorial(n - 1);

println(factorial(5));
// 120
```

当函数体是单个表达式时使用 `=>`

### 递归

```rust
fn fib(n) {
  if (n < 2)
    return n;
  return fib(n - 1) + fib(n - 2);
}

println(fib(10));
// 55
```

支持递归

### 内置函数

```js
println(type(5));
// number
println("1" + to_string(2));
// 12
println(len("foo"));
// 3
```

有许多内置函数

### 更多内置函数

|             |           |             |
| ----------- | :-------- | :---------- |
| `print`     | `println` | `type`      |
| `is_nil`    | `is_bool` | `to_number` |
| `to_string` | `hex`     | `len`       |
| `exit`      | `assert`  | `panic`     |
<!--rehype:className=left-align-->

参见：[内置函数](https://github.com/hook-lang/hook/blob/main/docs/built-in.md)

## 结构体

### 结构体

```rust
struct Point {
  x, y
}
```

```js
let p = Point { 5, 10 };

println(p);
// {x: 5, y: 10}
```

结构体是记录的原型

### 访问字段

```js
println(p.x); // 5
println(p.y); // 10
```

使用 `.` 来访问记录中的字段

### 字段赋值

```js
p.x = 10;
p.y = 20;

println(p);
// {x: 10, y: 20}
```

更新记录中字段的值。

## 解构

### 解构数组

```js
let a = [1, 2];
let [x, y] = a;

println(x); // 1
println(y); // 2
```

变量被声明并赋值

### 解构记录

```js
let p = { x: 5, y: 10 };
let { x } = p;

println(x);
// 5
```

使用 `{}` 来解构记录

### 占位符

```js
let a = [1, 2];
let [x] = a;
let [_, y] = a;

println(x); // 1
println(y); // 2
```

使用 `_` 跳过前导或中间元素。

## 模块化

### 导入模块

```js
import math;
```

```js
println(math.sqrt(25));
// 5
```

使用 `import` 将一个模块引入作用域。

### 导出符号

```rust
// my_module.hk
fn useful_fn() {
  return "Nothing";
}

return { useful: useful_fn };
```

返回一个包含要导出符号的记录。

### 导入本地模块

```python
import "./my_module.hk" as my;
```

```js
println(my.useful());
// Nothing
```

指定本地模块的路径。

### 选择性导入

```js
import { pow, sqrt } from math;

let [ b, c ] = [ 4, 3 ];
let a = sqrt(pow(b, 2) + pow(c, 2));

println(a);
// 5
```

使用 `{}` 导入特定的符号。

### 核心模块

|            |          |        |           |
| ---------- | :------- | :----- | :-------- |
| `math`     | `os`     | `io`   | `numbers` |
| `strings`  | `arrays` | `utf8` | `hashing` |
| `encoding` | `socket` | `json` | `lists`   |
<!--rehype:className=left-align-->

参见：[核心模块](https://github.com/hook-lang/hook/blob/main/docs/core-modules.md)

### 扩展模块

|           |           |         |           |
| --------- | :-------- | :------ | :-------- |
| `bigint`  | `crypto`  | `curl`  | `fastcgi` |
| `geohash` | `leveldb` | `mysql` | `redis`   |
| `regex`   | `sqlite`  | `uuid`  | `zeromq`  |
<!--rehype:className=left-align-->

这是扩展模块的列表。

### **io** 模块

```js
import { stderr, writeln } from io;

writeln(stderr, "Something went wrong");
// Something went wrong
```

使用 `io` 模块将内容输出到 `stderr`

### **hashing** 模块

```python
import hashing as h;
```

```js
let d = h.sha256("Hello, world!");

println(hex(d));
// 315f5bdb76d078c43b8ac0064e4a...
```

`hashing` 模块提供哈希函数

### **json** 模块

```js
import json;
```

```js
let j = '{"x": 1, "y": 2}';
let p = json.decode(j);

println(p.x); // 1

let k = json.encode(p);
println(type(k)); // string
```

使用 `json` 模块处理 JSON。

## 错误处理

### 错误
<!--rehype:wrap-class=col-span-2-->

```js
println(to_int("foo"));

// runtime error: type error: argument #1 is not a convertible string
//   at to_int() in <native>
//   at main() in example.hk:1
```

Hook 使用 panic 模式进行错误处理。当出现错误时，解释器会停止运行

### 语法错误

```js
println("Hello, World!");

// syntax error: unexpected end of file
//   at main() in example.hk:1,25
```

Hook 具有严格的语法

### 崩溃

```js
panic("Something went wrong");

// panic: Something went wrong
//   at main() in example.hk:1
```

使用内置函数 `panic` 来引发错误

### 断言
<!--rehype:wrap-class=col-span-2-->

```js
assert(5 > 10, "5 is not greater than 10");

// assert: 5 is not greater than 10
//   at main() in example.hk:1
```

使用内置函数 `assert` 来检查条件

### 返回错误
<!--rehype:wrap-class=col-span-2-->

```rust
fn divide(a, b) {
  if (b == 0)
    return [nil, "division by zero"];
  return a / b;
}

if (let [ok, err] = divide(5, 0); ok) {
  println(ok);
} else {
  println(err);
}
// division by zero
```

使用一对来返回一个值和一个错误

### 传递错误

```rust
if (let [ok, err] = divide(5, 0); err) {
  return [nil, err];
}
```

传递错误而不处理它
