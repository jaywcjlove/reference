Rust 备忘清单
====

Rust 快速参考备忘单，旨在为编写基本语法和方法提供帮助。

入门
---

### Hello_World.rs

```rust
fn main() {
  println!("Hello, World!");
}
```

#### 编译运行

```shell
$ rustc Hello_World.rs
$ ./Hello_World
Hello, World!
```

### 原始类型

:-| :-
:-| :-
`bool`                    | 布尔值 (`true` _/_ `false`)
`char`                    | 字符
`f32`, `f64`              | 32 位、64 位浮点数
`i64`, `i32`, `i16`, `i8` | 有符号 16- ... 整数
`u64`, `u32`, `u16`, `u8` | 无符号 16 位，... 整数
`isize`                   | 指针大小的有符号整数
`usize`                   | 指针大小的无符号整数

查看: [Rust 类型](#rust-类型)

### 格式化
<!--rehype:wrap-class=row-span-2-->

```rust
// 单个占位符
println!("{}", 1);
// 多个占位符
println!("{} {}", 1, 3);
// 位置参数
println!("{0} 是 {1} {2}，{0} 也是 {3} 编程语言", "Rust", "cool", "language", "safe");
// 命名参数
println!("{country} 是一个团结的国家", country = "China");
// 占位符特征 :b 表示二进制， :0x 表示十六进制， :o 表示八进制
println!("让我们打印 76 是二进制的 {:b} ，十六进制等价物是 {:0x} 八进制等价物是 {:o}", 76, 76, 76);
// 调试特征
println!("使用调试特征 {:?} 在此处打印我们想要的任何内容", (76, 'A', 90));

// 1.58 中的新格式字符串
let x = "world";
println!("Hello {x}!");
```
<!--rehype:className=wrap-text -->

### 打印风格

```rust
// 打印输出
print!("Hello World\n");
// 打印后追加新行
println!("追加新行");
// 打印为错误
eprint!("这是一个错误\n");
// 打印为新行错误
eprintln!("这是新行的错误");
```

### 变量

```rust
// 初始化和声明变量
let some_variable = "This_is_a_variable";
// 使变量可变
let mut mutable_variable = "Mutable";
// 分配多个变量
let (name, age) = ("ElementalX", 20);
// （全局）常量
const SCREAMING_SNAKE_CASE:i64 = 9;
```

### 注释

```rust
// 行注释
/*.............块注释 */
/// 外部文档注释
//! 内部文档评论
```

另见: [注释](https://doc.rust-lang.org/reference/comments.html) _(doc.rust-lang.org)_

### 函数

```rust
fn test(){
  println!("这是一个函数!");
}
fn main(){
  test();
}
```

查看: [Functions](#rust-函数)

### 声明宏

```rust
macro_rules! foo {
  ($l:tt) => { bar!($l); }
}
macro_rules! bar {
  (3) => {}
}
foo!(3);
```

### 元变量
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`item` | 程序项
`block` | 块表达式
`stmt` | 语句<br/> _(注意此选择器不匹配句尾的分号)_
`pat` | 模式
`expr` | 表达式
`ty` | 类型
`ident` | 标识符或关键字
`path` | 类型表达式 形式的路径
`tt` | `token` 树<br/> _(单个 `token` 或宏匹配定界符 `()`、`[]` 或 `{}` 中的标记)_
`meta` | 属性，属性中的内容
`lifetime` | 生存期 `token`
`vis` | 可能为空的可见性限定符
`literal` | 匹配 `-?` 字面量表达式

### 结构体

```rust
struct Point { x: i32, y: i32 }
let p = Point { x: 10, y: 11 };
let px: i32 = p.x;
```

结构体是一个使用关键字 `struct` 定义的标称型(nominal)结构体类型

### 枚举

```rust
enum Foo {
  Bar,       // 0
  Baz = 123, // 123
  Quux,      // 124
}

let baz_discriminant = Foo::Baz as u32;
assert_eq!(baz_discriminant, 123);
```

Rust 类型
--------

### 类型别名

```rust
type Point = (u8, u8);
let p: Point = (41, 68);
```

### 整数

```rust
let mut a: u32 = 8;
let b: u64 = 877;
let c: i64 = 8999;
let d = -90;
```

### 浮点数

```rust
let mut sixty_bit_float: f64 = 89.90;
let thirty_two_bit_float: f32 = 7.90;
let just_a_float = 69.69;
```

### 布尔值

```rust
let true_val: bool = true;
let false_val: bool = false;
let just_a_bool = true;
let is_true = 8 < 5;  // => false
```

### 字符

```rust
let first_letter_of_alphabet = 'a';
let explicit_char: char = 'F';
let implicit_char = '8';
let emoji = "\u{1f600}";   // => 😀
```

### 字符串字面量

```rust
let community_name = "AXIAL";
let no_of_members: &str = "ten";
println!("社区的名称是 {community_name}，它有 {no_of_members} 个成员");
```
<!--rehype:className=wrap-text -->

查看: [字符串](#rust-字符串)

### 数组

```rust
┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5
```

----

```rust
let array: [i64; 6] = [92,97,98,99,98,94];
```

### 多维数组
<!--rehype:wrap-class=row-span-2-->

```rust
     j0   j1   j2   j3   j4   j5
   ┌────┬────┬────┬────┬────┬────┐
i0 | 1  | 2  | 3  | 4  | 5  | 6  |
   ├────┼────┼────┼────┼────┼────┤
i1 | 6  | 5  | 4  | 3  | 2  | 1  |
   └────┴────┴────┴────┴────┴────┘
```

----

```rust
let array: [[i64; 6] ;2] = [
            [1,2,3,4,5,6],
            [6,5,4,3,2,1]];
```

### 可变数组

```rust
let mut array: [i32 ; 3] = [2,6,10];
array[1] = 4;
array[2] = 6;
```

使用 `mut` 关键字使其可变

### 切片

```rust
let mut array: [ i64; 4] = [1,2,3,4];
// 下限包括在内，上限不包括在内
let mut slices: &[i64] = &array[0..3]
println!("切片的元素是：{slices:?}");
```

### 向量

```rust
let some_vector = vec![1,2,3,4,5]; 
```

使用 `vec!` 宏声明向量

### 元组

```rust
let tuple = (1, 'A' , "Cool", 78, true);
```

Rust 字符串
--------------

### 字符串字面量

```rust
let cs:&str = "备忘清单";
// => 为开发者分享备忘单
println!("为开发者分享 {cs}");
```

### 字符串对象

```rust
// 创建一个空字符串对象
let my_string = String::new;
// 转换为字符串对象
let S_string = a_string.to_string()
// 创建一个初始化的字符串对象
let lang = String::from("Rust");  
println!("First language is {lang}");
 ```

### .capacity()

 ```rust
let rand = String::from("Random String");
rand.capacity()  // => 13
```

以字节为单位计算字符串的容量

### .contains()

```rust
let name = String::from("ElementalX");
name.contains("Element") // => true
```

检查子字符串是否包含在原始字符串中

### 添加单个字符

```rust
let mut half_text = String::from("Hal");
half_text.push('f');    // => Half
```

### 添加整个字符串

```rust
let mut hi = String::from("Hey there...");
hi.push_str("How are you doing??");
// => Hey there...How are you doing??
println!("{hi}");
```

Rust 运算符
-----------

### 比较运算符

:-|:-
:-|:-
`e == f` | `e` 等于 `f`
`e != f` | `e` 不等于 `f`
`e < f`  | `e` 小于 `f`
`e > f`  | `e` 大于 `f`
`e <= f` | `e` 小于或等于 `f`
`e >= f` | `e` 大于或等于 `f`

----

```rust
let (e, f) = (1, 100);
let greater = f > e;        // => true
let less = f < e;           // => false
let greater_equal = f >= e; // => true
let less_equal = e <= f;    // => true
let equal_to = e == f;      // => false
let not_equal_to = e != f;  // => true
```

### 算术运算符

:-|:-
:-|:-
`a +  b` | `a` 被添加到 `b`
`a -  b` | 从 `a` 中减去`b`
`a /  b` | `a` 除以 `b`
`a % b`  | 通过与 `b` 相除得到 `a` 的余数
`a * b`  | `a` 与 `b` 相乘

----

```rust
let (a, b) = (4, 5);
let sum: i32 = a + b;            // => 9
let subtractions: i32 = a - b;   // => -1
let multiplication: i32 = a * b; // => 20
let division: i32 = a / b;       // => 0
let modulus: i32 = a % b;        // => 4
```

### 位运算符

运算符 | 描述
:- | :-
`g & h`  | 二进制与
`g | h`  | 二进制或
`g ^ h`  | 二进制异或
`g ~ h`  | 二进制补码
`g << h` | 二进制左移
`g >> h` | 二进制右移

----

```rust
let (g, h) = (0x1, 0x2);
let bitwise_and = g & h;  // => 0
let bitwise_or = g | h;   // => 3
let bitwise_xor = g ^ h;  // => 3
let right_shift = g >> 2; // => 0
let left_shift = h << 4;  // => 32 
```

### 逻辑运算符

示例 | 意义
:- | :-
`c && d` | 两者都是真的_(AND)_
`c || d` | 要么是真的_(OR)_
`!c`     | `c` 为假 _(NOT)_

----

```rust
let (c, d) = (true, false);
let and = c && d;  // => false
let or  = c || d;  // => true
let not = !c;      // => false
```

### 复合赋值运算符

```rust
let mut k = 9;
let mut l = k;
```

----

运算符 | 描述
:- | :-
`k += l`  | 添加一个值并赋值，然后 `k=9`
`k -= l`  | `Substrate` 一个值并赋值，然后 `k=18`
`k /= l`  | 除以一个值并赋值，然后 `k=9`
`k *= l`  | 乘一个值并赋值，然后 `k=81`
`k \|= l`  | 按位或并赋值，则 `k=89`

Rust 流程控制
------------

### If表达式

```rust
let case1: i32 = 81;
let case2: i32 = 82;
if case1 < case2 {
  println!("case1 大于 case2");
}
```

### If...Else 表达式

```rust
let case3 = 8;
let case4 = 9;
if case3 >= case4 {
  println!("case3 优于 case4");
} else {
  println!("case4 大于 case3");
}
```

### If...Else...if...Else 表达式

```rust
let foo = 12;
let bar = 13;
if foo == bar {
  println!("foo 等于 bar");
} else if foo < bar {
  println!("foo 小于 bar");
} else if foo != bar {
  println!("foo 不等于 bar");
} else {
  println!("Nothing");
}
```

### If...let 表达式
<!--rehype:wrap-class=row-span-3-->

```rust
let mut arr1:[i64 ; 3] = [1,2,3];
if let[1,2,_] = arr1{
    println!("与数组一起使用");
}
let mut arr2:[&str; 2] = ["one", "two"];
if let["Apple", _] = arr2{
    println!("也适用于 str 数组");
}
```

----

```rust
let tuple_1 = ("India", 7, 90, 90.432);
if let(_, 7, 9, 78.99) = tuple_1{
    println!("也适用于元组");
}
let tuple_2 = ( 9, 7, 89, 12, "Okay");
if let(9, 7,89, 12, blank) = tuple_2 {
    println!("一切{blank}伴侣？");
}
let tuple_3 = (89, 90, "Yes");
if let(9, 89, "Yes") = tuple_3{
    println!("模式确实匹配");
}
else {
    println!("模式不匹配");
}
```

### 匹配表达式
<!--rehype:wrap-class=row-span-3-->

```rust
let day_of_week = 2;
  match day_of_week {
    1 => {
      println!("兄弟们今天是星期一");
    },
    2 => {
      println!("兄弟们今天是星期二");
    },
    3 => {
      println!("兄弟们今天是星期三");
    },
    4 => {
      println!("兄弟们今天是星期四");
    },
    5 => {
      println!("兄弟们今天是星期五");
    },
    6 => {
      println!("兄弟们今天是星期六");
    },
    7 => {
      println!("兄弟们今天是星期天");
    },
    _ => {
      println!("默认!")
    }
  };
}
```

### 嵌套...If 表达式

```rust
let nested_conditions = 89;
if nested_conditions == 89 {
    let just_a_value = 98;
    if just_a_value >= 97 {
        println!("大于 97");
    }
}
```

### For 循环

```rust
for mut i in 0..15 {
  i-=1;
  println!("i 的值为：{i}");
}
```

### While 循环

```rust
let mut check =  0;
while check < 11{
  println!("check 是：{check}");
  check+=1;
  println!("递增后：{check}");
  if check == 10{
    break; // 停止 while
  }
}
```

### Loop 关键字

```rust
loop {
  println!("你好，世界永远！");
}
```

无限循环表示

### Break 中断语句

```rust
let mut i = 1;
loop {
  println!("i 是 {i}");
  if i > 100 {
    break;
  }
  i *= 2;
}
```

### Continue 继续声明

```rust
for (v, c) in (0..10+1).enumerate(){
  println!("{c} 数字循环");
  if v == 9{
    println!("我们继续？");
    continue;
  }
  println!{"v 的值为：{v}"};
}
```

Rust 函数
--------

### 基本函数

```rust
fn print_message(){
  println!("Hello, Quick Reference!");
}
fn main(){
  // 在 Rust 中调用函数
  print_message();
}
```

### 按值传递

```rust
fn main()
{
  let x:u32 = 10;
  let y:u32 = 20;
  
  // => 200
  println!("计算: {}", cal_rect(x, y));
}
fn cal_rect(x:u32, y:u32) -> u32
{
  x * y
}
```

### 通过引用传递

```rust
fn main(){
  let mut by_ref = 3;      // => 3
  power_of_three(&mut by_ref);
  println!("{by_ref}");  // => 9
}
fn power_of_three(by_ref: &mut i32){
  // 取消引用很重要
  *by_ref = *by_ref * *by_ref;
  println!("{by_ref}");  // => 9
}
```

### 返回

```rust
fn main(){
  let (mut radius, mut pi) = (3.0, 3.14);
  let(area, _perimeter) = calculate (
      &mut radius,
      &mut pi
  );
  println!("圆的面积和周长为：{area} & {_perimeter}");
}
fn calculate(radius : &mut f64, pi: &mut f64) -> (f64, f64){
  let perimeter = 2.0 * *pi * *radius;
  let area = *pi * *radius * *radius;
  return (area, perimeter);
}
```
<!--rehype:className=wrap-text -->

### 数组作为参数

```rust
fn main(){
  let mut array: [i32 ; 5] = [1,2,3,4,6];
  print_arrays(array);
  println!("元素：{array:?}");
}
fn print_arrays(mut array:[i32; 5]) {
  array[0] = 89;
  array[1] = 90;
  array[2] = 91;
  array[3] = 92;
  array[4] = 93;
  println!("元素：{array:?}");
}
```

### 返回数组

```rust
fn main(){
  let mut arr:[i32; 5] = [2,4,6,8,10];
  multiply(arr);
  println!("数组是：{:?}", multiply(arr));
}
fn multiply (mut arr: [i32 ; 5]) -> [i32 ; 5]{
  arr[2] = 90;
  for mut i in 0..5 {
      arr[i] = arr[i] * arr[2];
  }
  return arr;
}
```
<!--rehype:className=wrap-text -->

### 泛型函数

```rust
use std::fmt::Debug;
fn foo<T>(x: &[T]) where T: Debug {
    // 省略细节
}
foo(&[1, 2]);
```

杂项
-----

### 类型断言 type-casting

```rust
let a_int = 90; // int
// int 到 float
let mut type_cast = (a_int as f64);
```

----

```rust
let orginal: char = 'I';
// char 到 int => 73
let type_casted: i64 = orginal as i64;
```

要在 `Rust` 中执行类型转换，必须使用 `as` 关键字

### 借用

```rust
let mut foo = 4;
let mut borrowed_foo = &foo;
println!("{borrowed_foo}");
```

----

```rust
let mut bar = 3;
let mut mutable_borrowed_bar = &mut bar;
println!("{mutable_borrowed_bar}");
```

这里借用的值使用 `&` 运算符从值一中借用值

### 取消引用

```rust
let mut borrow = 10;
let deref = &mut borrow;
println!("{}", *deref);
```

可以使用 `*` 操作符在 rust 中取消引用

### 变量范围

```rust
{
  // 范围仅限于此大括号
  let a_number = 1;
}
println!("{a_number}");
```

这将产生错误，因为变量 `a_number` 的范围在大括号处结束

另见
--------

- [Cargo 备忘清单](./cargo.md) _(jaywcjlove.github.io)_
- [The Rust Document](https://doc.rust-lang.org/book/ch00-00-introduction.html) _(doc.rust-lang.org)_
- [The Rust Reference](https://doc.rust-lang.org/reference/introduction.html) _(doc.rust-lang.org)_
- [Rust Cheatsheet](https://phaiax.github.io/rust-cheatsheet/) _(phaiax.github.io)_
- [Rust 标准库文档中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/std/std/) _(jaywcjlove.github.io)_
- [Rust 程序设计语言 中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/book/) _(jaywcjlove.github.io)_
- [Rust By Example 中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/rust-by-example-cn/) _(jaywcjlove.github.io)_
- [Rust 参考手册中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/reference/) _(jaywcjlove.github.io)_
- [RustDoc 手册中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/rustdoc/) _(jaywcjlove.github.io)_
- [Rust Cookbook 中文版](https://jaywcjlove.github.io/rust-cn-document-for-docker/rust-cookbook/) _(jaywcjlove.github.io)_
