Golang 备忘清单
===

该备忘单提供了帮助您使用 [Golang](https://golang.org) 的基本语法和方法。

入门
--------

### hello.go

```go
package main
import "fmt"
func main() {
    fmt.Println("Hello, world!")
}
```

直接运行

```shell
$ go run hello.go
Hello, world!
```

或者在 [Go repl](https://repl.it/languages/go) 中尝试一，`go` 命令[参考](#go-命令)

### 变量

```go
var s1 string
s1 = "Learn Go!"
// 一次声明多个变量
var b, c int = 1, 2
var d = true
// 匿名赋值
_ , e = 10, 20 
```

简短声明

```go
s1 := "Learn Go!"        // string
b, c := 1, 2             // int
d := true                // bool
```

参见：[基本类型](#golang-基本类型)

### 函数

```go
package main
import "fmt"
// 程序的入口点
func main() {
  fmt.Println("Hello world!")
  say("Hello Go!")
}
func say(message string) {
  fmt.Println("You said: ", message)
}
```

参见：[函数(Functions)](#golang-函数)

### 注释

```go
// 单行注释
/* 这是
多行注释 */
```

### if 语句

```go
if true {
  fmt.Println("Yes!")
}
```

参见：[条件控制](#golang-条件控制)

Golang 基本类型
--------

### 字符串 Strings

```go
s1 := "Hello" + "World"
s2 := `A "raw" string literal
can include line breaks.`
// 输出：10
fmt.Println(len(s1))
// 输出：Hello
fmt.Println(string(s1[0:5]))
```

字符串的类型为 `字符串`

### 数字 Numbers

```go
num := 3             // int
num := 3.            // float64
num := 3 + 4i        // complex128
num := byte('a')     // byte (alias: uint8)
var u uint = 7       // uint (unsigned)
var p float32 = 22.7  // 32-bit float
```

#### 操作符 Operators

```go
x := 5
x++
fmt.Println("x + 4 =", x + 4)
fmt.Println("x * 4 =", x * 4) 
```

参见：[更多操作符](#运算符和标点符号)

### 布尔值 Booleans

```go
isTrue   := true
isFalse  := false
```

#### 操作符

```go
fmt.Println(true && true)   // true 
fmt.Println(true && false)  // false
fmt.Println(true || true)   // true
fmt.Println(true || false)  // true
fmt.Println(!true)          // false
```

参见：[更多操作符](#运算符和标点符号)

### 数组 Arrays

```go
┌────┬────┬────┬────┬─────┬─────┐
| 2  | 3  | 5  | 7  | 11  | 13  |
└────┴────┴────┴────┴─────┴─────┘
  0    1    2    3     4     5
```

---

```go
primes := [...]int{2, 3, 5, 7, 11, 13}
fmt.Println(len(primes)) // => 6
// 输出：[2 3 5 7 11 13]
fmt.Println(primes)
// 与 [:3] 相同，输出：[2 3 5]
fmt.Println(primes[0:3])
```

---

```go
var a [2]string
a[0] = "Hello"
a[1] = "World"
fmt.Println(a[0], a[1]) //=> Hello World
fmt.Println(a)   // => [Hello World]
```

#### 2d array

```go
var twoDimension [2][3]int
for i := 0; i < 2; i++ {
    for j := 0; j < 3; j++ {
        twoDimension[i][j] = i + j
    }
}
// => 2d:  [[0 1 2] [1 2 3]]
fmt.Println("2d: ", twoDimension)
```

### 指针(Pointers)
<!--rehype:wrap-class=col-span-2-->

```go
func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}

func getPointer () (myPointer *int) {
  a := 234
  return &a
}
//申明指针的时候，如果没有指向某个变量，默认值为nil
//不能直接进行操作，包括读写
var p *int
*p = 123      // panic   nil pointer
```

---

```go
//而用new返回的是有默认值的指针, 为数据类型的默认值
func main(){
  //有一块内存存放了10，它的地址由系统自动分配，别名是a
  a := 10
  //内存存放的10变成了20
  a = 20
  var p *int
  p = &a   //或者直接写 p := &a
  //上面的p是一个指针，通过 *p 的方式同样可以访问 变量a指向 的内存

  /*当你动态申请内存的时候，指针的存在意义之一就被体现出来了*/ 
  ptr := new(int)   
  //申请了一块内存空间，没有办法指定别名，new()返回内存地址，用指针接收
  //此时并没有变量能直接指向这块内存，所以只能通过内存地址来访问
}
```

参见：[指针(Pointers)](https://tour.golang.org/moretypes/1)

### 切片(Slices)

```go
s := make([]string, 3)
s[0] = "a"
s[1] = "b"
s = append(s, "d")
s = append(s, "e", "f")
fmt.Println(s)
fmt.Println(s[1])
fmt.Println(len(s))
fmt.Println(s[1:3])
slice := []int{2, 3, 4}
```

另见：[切片示例](https://gobyexample.com/slices)

### 常量(Constants)

```go
const s string = "constant"
const Phi = 1.618
const n = 500000000
const d = 3e20 / n
```

常量声明可以使用 iota常量生成器 初始化，它用于
生成一组以相似规则初始化的常量，但是不用每行都
写一遍初始化表达式。
注意：

1. 在一个const声明语句中，在第一个声明的常量所在的行，iota被置为0，然后在每一个有常量声明的行加一。
2. 写在同一行的值是相同的

```go
const (
    a = iota
    b
    c
)
// a = 0, b = 1, c = 2
```

### 类型转换

Go语言中不允许隐式转换，所有类型转换必须显式声明（强制转换），而且转换只能发生在两种相互兼容的类型之间。

```go
i := 90
f := float64(i)
u := uint(i)
// 将等于字符Z
s := string(i)
```

#### 字符串与其他类型的相互转换

```go
// 字符串转其他类型
str := "90"
// 整数类型
i, err := strconv.Atoi(str)
if err != nil {
    fmt.Println("转换错误:", err)
} else {
    fmt.Println(i)
}
// 浮点类型
f, err := strconv.ParseFloat(str, 64)
// []byte 类型
bytes := []byte(str)
// 其他类型转字符串
str = strconv.Itoa(i)
str = strconv.FormatFloat(f, 'f', 2, 64)
str = string(bytes[:])
```

Golang 字符串
--------

### 字符串函数

```go
package main
import (
        "fmt"
        s "strings"
)
func main() {
    /* 需要将字符串导入为 s */
        fmt.Println(s.Contains("test", "e"))
    /* 内置 */
    fmt.Println(len("hello"))  // => 5
    // 输出: 101
        fmt.Println("hello"[1])
    // 输出: e
        fmt.Println(string("hello"[1]))
}
```

### fmt.Printf
<!--rehype:wrap-class=row-span-2 col-span-2-->

```go
package main
import (
        "fmt"
        "os"
)
type point struct {
        x, y int
}
func main() {
        p := point{1, 2}
        fmt.Printf("%v\n", p)                        // => {1 2}
        fmt.Printf("%+v\n", p)                       // => {x:1 y:2}
        fmt.Printf("%#v\n", p)                       // => main.point{x:1, y:2}
        fmt.Printf("%T\n", p)                        // => main.point
        fmt.Printf("%t\n", true)                     // => TRUE
        fmt.Printf("%d\n", 123)                      // => 123
        fmt.Printf("%b\n", 14)                       // => 1110
        fmt.Printf("%c\n", 33)                       // => !
        fmt.Printf("%x\n", 456)                      // => 1c8
        fmt.Printf("%f\n", 78.9)                     // => 78.9
        fmt.Printf("%e\n", 123400000.0)              // => 1.23E+08
        fmt.Printf("%E\n", 123400000.0)              // => 1.23E+08
        fmt.Printf("%s\n", "\"string\"")             // => "string"
        fmt.Printf("%q\n", "\"string\"")             // => "\"string\""
        fmt.Printf("%x\n", "hex this")               // => 6.86578E+15
        fmt.Printf("%p\n", &p)                       // => 0xc00002c040
        fmt.Printf("|%6d|%6d|\n", 12, 345)           // => |    12|   345|
        fmt.Printf("|%6.2f|%6.2f|\n", 1.2, 3.45)     // => |  1.20|  3.45|
        fmt.Printf("|%-6.2f|%-6.2f|\n", 1.2, 3.45)   // => |1.20  |3.45  |
        fmt.Printf("|%6s|%6s|\n", "foo", "b")        // => |   foo|     b|
        fmt.Printf("|%-6s|%-6s|\n", "foo", "b")      // => |foo   |b     |
        s := fmt.Sprintf("a %s", "string")
        fmt.Println(s)
        fmt.Fprintf(os.Stderr, "an %s\n", "error")
}
```

另见：[fmt](https://golang.org/pkg/fmt/)

### 函数实例

| 实例                          | Result      |
| ----------------------------- | ----------- |
| Contains("test", "es")        | true        |
| Count("test", "t")            | 2           |
| HasPrefix("test", "te")       | true        |
| HasSuffix("test", "st")       | true        |
| Index("test", "e")            | 1           |
| Join([]string{"a", "b"}, "-") | a-b         |
| Repeat("a", 5)                | aaaaa       |
| Replace("foo", "o", "0", -1)  | f00         |
| Replace("foo", "o", "0", 1)   | f0o         |
| Split("a-b-c-d-e", "-")       | [a b c d e] |
| ToLower("TEST")               | test        |
| ToUpper("test")               | TEST        |

Golang 条件控制
--------

### 有条件的

```go
a := 10
if a > 20 {
    fmt.Println(">")
} else if a < 20 {
    fmt.Println("<")
} else {
    fmt.Println("=")
}
```

### if 中的语句

```go
x := "hello go!"
if count := len(x); count > 0 {
    fmt.Println("Yes")
}
```

---

```go
if _, err := doThing(); err != nil {
    fmt.Println("Uh oh")
}
```

### Switch

```go
x := 42.0
switch x {
  case 0:
  case 1, 2:
      fmt.Println("Multiple matches")
  case 42:   // Don't "fall through".
      fmt.Println("reached")
  case 43:
      fmt.Println("Unreached")
  default:
      fmt.Println("Optional")
}
```

参见：[Switch](https://github.com/golang/go/wiki/Switch)

### For loop

```go
for i := 0; i <= 10; i++ {
  fmt.Println("i: ", i)
}
```

### 对于 Range 循环

```go
nums := []int{2, 3, 4}
sum := 0
for _, num := range nums {
  sum += num
}
fmt.Println("sum:", sum)
```

### For 循环

```go
i := 1
for i <= 3 {
  fmt.Println(i)
  i++
}
```

### Continue 关键字

```go
for i := 0; i <= 5; i++ {
  if i % 2 == 0 {
      continue
  }
  fmt.Println(i)
}
```

### Break 关键字

```go
for {
  fmt.Println("loop")
  break
}
```

Golang 结构和Maps
--------

### 定义
<!--rehype:wrap-class=row-span-2-->

```go
package main
import (
        "fmt"
)
type Vertex struct {
        X int
        Y int
}
func main() {
        v := Vertex{1, 2}
        v.X = 4
        fmt.Println(v.X, v.Y) // => 4 2
}
```

参见：[结构(Structs)](https://tour.golang.org/moretypes/2)

### 字面量

```go
v := Vertex{X: 1, Y: 2}
// Field names can be omitted
v := Vertex{1, 2}
// Y is implicit
v := Vertex{X: 1}
```

您还可以输入字段名

### Maps
<!--rehype:wrap-class=row-span-2-->

```go
m := make(map[string]int)
m["k1"] = 7
m["k2"] = 13
fmt.Println(m) // => map[k1:7 k2:13]
v1 := m["k1"]
fmt.Println(v1)     // => 7
fmt.Println(len(m)) // => 2
delete(m, "k2")
fmt.Println(m) // => map[k1:7]
_, prs := m["k2"]
fmt.Println(prs) // => false
n := map[string]int{"foo": 1, "bar": 2}
fmt.Println(n) // => map[bar:2 foo:1]
```

### 指向结构的指针

```go
v := &Vertex{1, 2}
v.X = 2
```

Doing `v.X` is the same as doing `(*v).X`, when `v` is a pointer.

Golang 函数
--------

### 多个参数

```go
func plus(a int, b int) int {
    return a + b
}
func plusPlus(a, b, c int) int {
    return a + b + c
}
fmt.Println(plus(1, 2))
fmt.Println(plusPlus(1, 2, 3))
```

### 多返回值

```go
func vals() (int, int) {
  return 3, 7
}
a, b := vals()
fmt.Println(a)    // => 3
fmt.Println(b)    // => 7
```

### 匿名函数

```go
r1, r2 := func() (string, string) {
    x := []string{"hello", "world"}
    return x[0], x[1]
}()
// => hello world
fmt.Println(r1, r2)
```

### 命名返回值

```go
func split(sum int) (x, y int) {
  x = sum * 4 / 9
  y = sum - x
  return
}
x, y := split(17)
fmt.Println(x)   // => 7
fmt.Println(y)   // => 10
```

### 可变参数函数

```go
func sum(nums ...int) {
  fmt.Print(nums, " ")
  total := 0
  for _, num := range nums {
      total += num
  }
  fmt.Println(total)
}
sum(1, 2)     // => [1 2] 3
sum(1, 2, 3)  // => [1 2 3] 6
nums := []int{1, 2, 3, 4}
sum(nums...)  // => [1 2 3 4] 10
// 不定参在内存中是连续存储的
// 不定参内部再传递的时候，参数也要是不定的
```

### 初始化函数

```go
import --> const --> var --> init()
```

---

```go
var num = setNumber()
func setNumber() int {
  return 42
}
func init() {
  num = 0
}
func main() {
  fmt.Println(num) // => 0
}
```

### 作为值的函数

```go
func main() {
  // 将函数赋给名称
  add := func(a, b int) int {
      return a + b
  }
  // 使用名称调用函数
  fmt.Println(add(3, 4)) // => 7
}
```

### 闭包
<!--rehype:wrap-class=col-span-2 row-span-2-->
```go
func outer() (func() int, int) {
    outer_var := 2
    inner := func() int {
        outer_var += 99
        return outer_var
    }
    inner()
    return inner, outer_var
}
inner, val := outer()
fmt.Println(val)
// => 101
fmt.Println(inner())
// => 200，这里涉及到golang中闭包和内存逃逸的概念，inner()实际上执行了两次，outer()中一次，fmt又一次，
//但为什么是200呢，编译器不能确定outer_var在后续会不会使用，
//所以outer_var不会随着outer()结束而释放它的栈（Stack）空间，
//而会‘逃逸到’堆（Heap）上，那么第二次的inner()中outer_var就会是101。
```

### 关闭 1

```go
func scope() func() int{
  outer_var := 2
  foo := func() int {return outer_var}
  return foo
}
// Outpus: 2
fmt.Println(scope()())
```

Golang 包(Packages)
--------

### 导入
<!--rehype:wrap-class=row-span-2-->

```go
import "fmt"
import "math/rand"
```

#### 等同于

```go
import (
  "fmt"        // 给 fmt.Println
  "math/rand"  // 给 rand.Intn
)
```

另见：[导入](https://tour.golang.org/basics/1)

### 别名
<!--rehype:wrap-class=row-span-2-->

```go
import r "math/rand"
```

---

```go
import (
    "fmt"
    r "math/rand"
)
```

---

```go
r.Intn()
```

### Packages

```go
package main
// 一个内部包只能被另一个包导入
// 那是在以内部目录的父级为根的树内
package internal
```

另见：[内部包](https://go.dev/doc/go1.4#internalpackages)

### 导出名称

```go
// 以大写字母开头
func Hello () {
  ···
}
```

另见：[导出的名称](https://tour.golang.org/basics/3)

Golang 并发
--------

### 协程
<!--rehype:wrap-class=row-span-2-->

```go
package main
import (
    "fmt"
    "time"
)
func f(from string) {
    for i := 0; i < 3; i++ {
            fmt.Println(from, ":", i)
    }
}
func main() {
    f("direct")
    go f("goroutine")
    go func(msg string) {
            fmt.Println(msg)
    }("going")
    time.Sleep(time.Second)
    fmt.Println("done")
}
```

参见：[Goroutines](https://tour.golang.org/concurrency/1), [Channels](https://tour.golang.org/concurrency/2)

### WaitGroup
<!--rehype:wrap-class=row-span-2-->

```go
package main
import (
    "fmt"
    "sync"
    "time"
)
func w(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("%d starting\n", id)
    time.Sleep(time.Second)
    fmt.Printf("%d done\n", id)
}
func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 5; i++ {
            wg.Add(1)
            go w(i, &wg)
    }
    wg.Wait()
}
```

参见：[WaitGroup](https://golang.org/pkg/sync/#WaitGroup)

### Closing channels

```go
ch <- 1
ch <- 2
ch <- 3
close(ch) // 关闭频道
```

---

```go
// 迭代通道直到关闭
for i := range ch {
  ···
}
```

---

```go
// Closed if `ok == false`
v, ok := <- ch
```

参见：[范围和关闭](https://tour.golang.org/concurrency/4)

### 缓冲通道

```go
ch := make(chan int, 2)
ch <- 1
ch <- 2
ch <- 3
// 致命错误：
// 所有 goroutine 都处于休眠状态 - 死锁
```

参见：[缓冲通道](https://tour.golang.org/concurrency/3)

Golang 错误控制
--------

### 延迟函数

```go
func main() {
  defer func() {
    fmt.Println("Done")
  }()
  fmt.Println("Working...")
}
```

### Lambda defer

```go
func main() {
  var d = int64(0)
  defer func(d *int64) {
    fmt.Printf("& %v Unix Sec\n", *d)
  }(&d)
  fmt.Print("Done ")
  d = time.Now().Unix()
}
```

`defer` 函数使用当前值`d`，除非我们使用指针在 `main` 末尾获取最终值

### Defer

```go
func main() {
  defer fmt.Println("Done")
  fmt.Println("Working...")
}
```

参见：[Defer, panic and recover](https://blog.golang.org/defer-panic-and-recover)

Golang 方法(Methods)
--------
<!--rehype:body-class=cols-2-->

### 接收器
<!--rehype:wrap-class=row-span-2-->
```go
//Go语言中的方法（Method）是一种作用于特定类型变量的函数。
//这种特定类型变量叫做接收者（Receiver）。
//接收者的概念就类似于其他语言中的 this 或者 self。
//方法的定义格式如下：
func (接收者变量 接收者类型) 方法名(参数列表) (返回参数) {
    函数体
}
// 其中，
//     1.接收者变量：接收者中的参数变量名在命名时，官方建议使用接收者类型名
//的第一个小写字母，而不是self、this之类的命名。例如，Person类型的接收者变量
// 应该命名为 p，Connector类型的接收者变量应该命名为c等。
//     2.接收者类型：接收者类型和参数类似，可以是指针类型和非指针类型。
//     3.方法名、参数列表、返回参数：具体格式与函数定义相同。
type Vertex struct {
  X, Y float64
}

func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}
func (v Vertex) valuechange() float64 {
  v.X += 1
  return v.X
}
func (v *Vertex) pointerchange() float64 {
  v.X += 1
  return v.X
}
func main() {
  v := Vertex{1, 2}
  v.Abs()

  v = Vertex{1, 2}
  fmt.Println(v.valuechange())  // 2
  fmt.Println(v)                // {1 2}

  v = Vertex{1, 2}
  fmt.Println(v.pointerchange())// 2
  fmt.Println(v)                // {2 2}
}
//如果在方法里修改receiver的值要对caller生效，使用 pointer receiver。

```

参见：[Methods](https://tour.golang.org/methods/1)，[指针接收器](https://tour.golang.org/methods/4)

### 方法表达式

方法表达式相当于提供一种语法将类型方法调用显式地转换为函数调用，接收者(receiver)必须显式地传递进去。

```go
func (t T) Get(){
    return t.a
}
func (t *T) Set(i int){
    t.a = i
}
//表达式`T.Get`和`(*T).Set`被称为方法表达式，
//需要注意的是在方法表达式中编译器不会做自动转换。
//值调用会自动转换，表达式调用则不会，例如：
type Data struct{}
func (Data) TestValue () {}
func (*Data) TestPointer () {} 
//声明一个类型变量a
var a Data= struct{}{}
//表达式调用编译器不会进行自动转换
Data.TestValue(a) 
//Data.TestValue(&a) 
(*Data).TestPointer (&a) 
//Data.TestPointer(&a) //type Data has no method TestPointer 
//值调用编译器会进行自动转换
y : = (&a).TestValue //编译器帮助转换a.TestValue
g : = a.TestPointer //会转换为(&a).TestPointer 
```

#### 组合结构的方法集

内嵌字段的访问不需要使用全路径，只要保证命名是唯一的就可以，尽量避免同名。如果外层字段和内层字段有相同的方法，则使用简化模式访问外层方法会覆盖内层的方法。

```go
x : = X{a: 1} 
y : = Y{ 
    X : x , 
    b : 2 , 
}
z : = z { 
    Y : y , 
    c : 3 ,
}//组合结构，内嵌字段
```

组合结构的方法集有如下规则：

- 若类型 T 包含匿名字段 S ，则 T 的方法集包含S的方法集
- 若类型 T 包含匿名字段 *S ，则 T 的方法集包含 S 和*S方法集
- 不管类型 T 中嵌入的匿名字段是 S 还是 *S ，*T 方法集总是包含 S 和 *S 方法集

Golang 接口(Interfaces)
--------
<!--rehype:body-class=cols-2-->

### 基本接口(Interfaces)

```go
type Shape interface {
  Area() float64
  Perimeter() float64
}
```

### 结构(Struct)

```go
type Rectangle struct {
  Length, Width float64
}
```

结构 `Rectangle` 通过实现其所有方法隐式实现接口 `Shape`

### 方法(Methods)

```go
func (r Rectangle) Area() float64 {
  return r.Length * r.Width
}
func (r Rectangle) Perimeter() float64 {
  return 2 * (r.Length + r.Width)
}
```

在 `Shape` 中定义的方法在`Rectangle`中实现

### 接口实例

```go
func main() {
  var r Shape = Rectangle{Length: 3, Width: 4}
  fmt.Printf("Type of r: %T, Area: %v, Perimeter: %v.", r, r.Area(), r.Perimeter())
}
```
<!--rehype:className=wrap-text -->

Golang Embed (Go version >= 1.16)
---

### 嵌入为string

``` go
package main

import (
    _ "embed"
    "fmt"
)

//go:embed version.txt
var version string

func main() {
    fmt.Printf("version %q\n", version)
}
```

### 嵌入为[]byte

``` go
package main
import (
    _ "embed"
    "fmt"
)

//go:embed version.txt
var versionByte []byte

func main() {
    fmt.Printf("version %q\n", string(versionByte))
}
```

### 嵌入为embed.FS

``` go
//go:embed hello.txt
var f embed.FS
func main() {
  data, _ := f.ReadFile("hello.txt")
  fmt.Println(string(data))
}
```

### 嵌入多个文件

``` go
//go:embed hello.txt
//go:embed hello2.txt
var f embed.FS
func main() {
  data, _ := f.ReadFile("hello.txt")
  fmt.Println(string(data))
  data, _ = f.ReadFile("hello2.txt")
  fmt.Println(string(data))
}
```

### 嵌入子文件夹下的文件

``` go
//go:embed p/hello.txt p/hello2.txt
var f embed.FS
func main() {
  data, _ := f.ReadFile("p/hello.txt")
  fmt.Println(string(data))
  data, _ = f.ReadFile("p/hello2.txt")
  fmt.Println(string(data))
}
```

### 同一个文件嵌入为多个变量

``` go
//go:embed hello.txt
var s string
//go:embed hello.txt
var s2 string
func main() {
  fmt.Println(s)
  fmt.Println(s2)
}
```

### 匹配模式

``` go
//go:embed p/*
var f embed.FS
func main() {
  data, _ := f.ReadFile("p/.hello.txt")
  fmt.Println(string(data))
  data, _ = f.ReadFile("p/q/.hi.txt") // 没有嵌入 p/q/.hi.txt
  fmt.Println(string(data))
}
```

Golang 泛型 (Go version >= 1.18)
-------------

### 泛型类型
<!--rehype:wrap-class=row-span-1-->

```text
type S[T int|float32|float64 ] []T
       ┬  ────────┬──────── 
       ┆          ╰─── 2. 类型约束
       ╰────────────── 1. 类型形参
```
<!--rehype:className=wrap-text -->

可以使用类型实参 int 或 string 实例化

``` go
type MyMap[K int|string, V float32 | float64] map[K]V

var a MyMap[string, float64] = map[string]float64{
    "jack_score": 9.6,
    "bob_score":  8.4,
}
```
<!--rehype:className=wrap-text -->
- **匿名结构体不支持泛型**<!--rehype:style=color: #b43c29;-->
- **匿名函数不支持泛型**<!--rehype:style=color: #b43c29;-->

### 泛型函数
<!--rehype:wrap-class=row-span-1-->

任意类型

``` go
func Add[T any](a,b T) T {
    return  a+b
}
```

对类型进行约束

``` go
func Add[T string | int | int8](a,b T) T {
    return  a+b
}
```

类型嵌套

``` go
type WowStruct[T int | float32, S []T] struct {
    Data     S
    MaxValue T
    MinValue T
}

var ws WowStruct[int, []int]  
```
<!--rehype:className=wrap-text -->

泛型函数中进行类型声明 (go version >= 1.20)

``` go
func F[T1 any]() {
    type x struct{} 
    type y = x      
}
```

### 泛型约束
<!--rehype:wrap-class=row-span-2-->

通过接口实现

``` go
type Addable interface{
    type int, int8, int16, int32, int64, uint, uint8, uint16, uint32, uint64, uintptr, float32, float64, complex64, complex128, string 
}

func Add[T Addable](a,b T) T {
    return  a+b
}
```
<!--rehype:className=wrap-text -->

使用 ~ 符号

``` go
type Int interface {
    ~int | ~int8 | ~int16 | ~int32 | ~int64
}

type Uint interface {
    ~uint | ~uint8 | ~uint16 | ~uint32
}
type Float interface {
    ~float32 | ~float64
}

type Slice[T Int | Uint | Float] []T 

var s Slice[int] // 正确

type MyInt int
var s2 Slice[MyInt]  // MyInt底层类型是int，所以可以用于实例化

type MyMyInt MyInt
var s3 Slice[MyMyInt]  // 正确。MyMyInt 虽然基于 MyInt ，但底层类型也是int，所以也能用于实例化

type MyFloat32 float32  // 正确
var s4 Slice[MyFloat32]
```
<!--rehype:className=wrap-text -->

使用 ~ 时的限制：
<!--rehype:style=color: #b43c29;-->
1. ~后面的类型不能为接口
2. ~后面的类型必须为基本类型
<!--rehype:style=color: #b43c29;-->

### 泛型 Receiver
<!--rehype:wrap-class=row-span-1-->

定义普通类型支持泛型

``` go
type MySlice[T int | float32] []T

func (s MySlice[T]) Sum() T {
    var sum T
    for _, value := range s {
        sum += value
    }
    return sum
}
```
<!--rehype:className=wrap-text -->

结构体支持泛型

``` go
type A[T int | float32 | float64] struct {
}

func (receiver A[T]) Add(a T, b T) T {
    return a + b
}

```
<!--rehype:className=wrap-text -->

### 泛型接口
<!--rehype:wrap-class=row-span-1-->

``` go
type Uint interface { // 接口 Uint 中有类型，所以是一般接口
    ~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64
}

type ReadWriter interface {  // ReadWriter 接口既有方法也有类型，所以是一般接口
    ~string | ~[]rune

    Read(p []byte) (n int, err error)
    Write(p []byte) (n int, err error)
}
```
<!--rehype:className=wrap-text -->

一般接口类型不能用来定义变量，只能用于泛型的类型约束中
<!--rehype:style=color: #b43c29;-->

杂项
-------------

### 关键字(Keywords)

- break
- default
- func
- interface
- select
- case
- defer
- go
- map
- struct
- chan
- else
- goto
- package
- switch
- const
- fallthrough
- if
- range
- type
- continue
- for
- import
- return
- var
<!--rehype:className=cols-3 style-none-->

### 运算符和标点符号

|     |      |       |       |        |      |       |     |     |
| --- | ---- | ----- | ----- | ------ | ---- | ----- | --- | --- |
| `+` | `&`  | `+=`  | `&=`  | `&&`   | `==` | `!=`  | `(` | `)` |
| `-` | `\|` | `-=`  | `\|=` | `\|\|` | `<`  | `<=`  | `[` | `]` |
| `*` | `^`  | `*=`  | `^=`  | `<-`   | `>`  | `>=`  | `{` | `}` |
| `/` | `<<` | `/=`  | `<<=` | `++`   | `=`  | `:=`  | `,` | `;` |
| `%` | `>>` | `%=`  | `>>=` | `--`   | `!`  | `...` | `.` | `:` |
|     | `&^` | `&^=` |       |        |      |       |     |     |

Go 命令
---

### Go 编译器命令

:- | --
:- | --
`go command [参数]`  | go 命令 [参数]
`go build`          | 编译包和依赖包
`go clean`          | 移除对象和缓存文件
`go doc`            | 显示包的文档
`go env`            | 打印go的环境变量信息
`go bug`            | 报告bug
`go fix`            | 更新包使用新的api
`go fmt`            | 格式规范化代码
`go generate`       | 通过处理资源生成go文件
`go get`            | 下载并安装包及其依赖
`go install`        | 编译和安装包及其依赖
`go list`           | 列出所有包
`go run`            | 编译和运行go程序
`go test`           | 测试
`go tool`           | 运行给定的go工具
`go version`        | 显示go当前版本
`go vet`            | 发现代码中可能的错误

### ENV

:- | --
:- | --
`GOOS`         | 编译系统
`GOARCH`       | 编译arch
`GO111MODULE`  | gomod开关
`GOPROXY`      | go代理 <https://goproxy.io>  <https://goproxy.cn>  <https://mirrors.aliyun.com/goproxy/>
`GOSSAFUNC`    | 生成 `SSA.html` 文件，展示代码优化的每一步 `GOSSAFUNC=func_name go build`
<!--rehype:className=style-list-arrow-->

### Module

:- | --
:- | --
`go mod init`         | 初始化当前文件夹，创建go.mod文件
`go mod download`     | 下载依赖的module到本地
`go mod tidy`         | 增加缺少的module，删除无用的module
`go mod vendor`       | 将依赖复制到vendor下
文件 `go.mod`          |  依赖列表和版本约束
文件 `go.sum`          |  记录 `module` 文件 `hash` 值，用于安全校验
<!--rehype:className=style-list-arrow-->

另见
--------

- [Devhints](https://devhints.io/go) *(devhints.io)*
- [A tour of Go](https://tour.golang.org/welcome/1) *(tour.golang.org)*
- [Golang wiki](https://github.com/golang/go/wiki/) *(github.com)*
- [Effective Go](https://golang.org/doc/effective_go.html) *(golang.org)*
- [Go by Example](https://gobyexample.com/) *(gobyexample.com)*
- [Awesome Go](https://awesome-go.com/) *(awesome-go.com)*
- [JustForFunc Youtube](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) *(youtube.com)*
- [Style Guide](https://github.com/golang/go/wiki/CodeReviewComments) *(github.com)*
