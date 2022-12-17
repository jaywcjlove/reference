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
<!--rehype:wrap-class=row-span-2-->

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

```go
func main () {
  b := *getPointer()
  fmt.Println("Value is", b)
}

func getPointer () (myPointer *int) {
  a := 234
  return &a
}

a := new(int)
*a = 234
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
fmt.Println(d)
```

### 类型转换

```go
i := 90
f := float64(i)
u := uint(i)
// 将等于字符Z
s := string(i)
```

#### 如何获取int字符串？

```go
i := 90
// 需要导入“strconv”
s := strconv.Itoa(i)
fmt.Println(s) // Outputs: 90
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

### 关闭 2

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
fmt.Println(inner()) // => 200
fmt.Println(val)     // => 101
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

```go
type Vertex struct {
  X, Y float64
}

func (v Vertex) Abs() float64 {
  return math.Sqrt(v.X * v.X + v.Y * v.Y)
}

v := Vertex{1, 2}
v.Abs()
```

参见：[Methods](https://tour.golang.org/methods/1)

### Mutation

```go
func (v *Vertex) Scale(f float64) {
  v.X = v.X * f
  v.Y = v.Y * f
}

v := Vertex{6, 12}
v.Scale(0.5)
// `v` 已更新
```

参见：[指针接收器](https://tour.golang.org/methods/4)

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

- [Devhints](https://devhints.io/go) _(devhints.io)_
- [A tour of Go](https://tour.golang.org/welcome/1) _(tour.golang.org)_
- [Golang wiki](https://github.com/golang/go/wiki/) _(github.com)_
- [Effective Go](https://golang.org/doc/effective_go.html) _(golang.org)_
- [Go by Example](https://gobyexample.com/) _(gobyexample.com)_
- [Awesome Go](https://awesome-go.com/) _(awesome-go.com)_
- [JustForFunc Youtube](https://www.youtube.com/channel/UC_BzFbxG2za3bp5NRRRXJSw) _(youtube.com)_
- [Style Guide](https://github.com/golang/go/wiki/CodeReviewComments) _(github.com)_
