Scala
===

[![Repo Dependents](https://badgen.net/github/dependents-repo/scala/scala)](https://github.com/scala/scala/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/scala/scala)

本速查表可以用于快速地查找 [Scala](https://github.com/scala/scala) 语法结构
<!--rehype:style=padding-top: 12px;-->

入门
-----

### 介绍

- [Scala](https://github.com/scala/scala) 官网  _(github.com)_

### 函数
<!--rehype:wrap-class=col-span-2 row-span-4-->

```scala
def f(x: Int) = { x*x }  // ✅ GOOD
def f(x: Int)   { x*x }   // ❌ BAD 定义函数,潜在风险: 
// 不加“=”号将会是一段返回Unit类型的过程，
// 这将会导致意想不到的错误。

def f(x: Any) = println(x)  // ✅ GOOD
def f(x) = println(x)       // ❌ BAD 定义函数 语法错误: 每个参数都需要指定类型。

type R = Double    // 类型别名
def f(x: R) vs.
def f(x: => R)     // 传值调用 传名调用 （惰性参数）
(x:R) => x*x       // 匿名函数
(1 to 5).map(_*2) vs.     // 匿名函数: 下划线是参数的占位符
(1 to 5).reduceLeft( _+_ )
(1 to 5).map( x => x*x )  // 匿名函数: 必须命名以后才可以多次使用同一个参数

(1 to 5).map(2*) // ✅ GOOD
(1 to 5).map(*2) // ❌ BAD 匿名函数: 绑定中缀方法，明智的做法是2*_。


(1 to 5).map { x => val y=x*2; println(y); y } // 匿名函数: 代码块风格，最后一个表达式作为返回值
(1 to 5) filter {_%2 == 0} map {_*2}           // 匿名函数: 管道风格（或者用圆括号）

// 匿名函数: 要传入多个代码块的话，需要使用花括号。
def compose(g:R=>R, h:R=>R) = (x:R) => g(h(x))
val f = compose({_*2}, {_-1})

val zscore = (mean:R, sd:R) => (x:R) => (x-mean)/sd // 柯里化, 显然的语法。
def zscore(mean:R, sd:R) = (x:R) => (x-mean)/sd // 柯里化, 显然的语法。
def zscore(mean:R, sd:R)(x:R) = (x-mean)/sd  // 柯里化，语法糖。然后:)

val normer = zscore(7, 0.4) _  // 需要在尾部加下划线来变成偏函数（只对语法糖版本适用）
def mapmake[T](g:T=>T)(seq: List[T]) = seq.map(g) // 泛型

5.+(3); 5 + 3
(1 to 5) map (_*2) // 中缀语法糖
def sum(args: Int*) = args.reduceLeft(_+_) // 变长参数
```

### 变量

```scala
var x = 5         // 可变变量      
val x = 5         // ✅ GOOD
x=6               // ❌ BAD 常量
var x: Double = 5 // 显式类型
```

### 包

```scala
import scala.collection._ // 通配符导入
import scala.collection.Vector
// 选择性导入
import scala.collection.{Vector, Sequence}
// 重命名导入
import scala.collection.{Vector => Vec28}
// 导入java.util包里除Date之外的一切
import java.util.{Date => _, _}
// 文件开头的包名 pkg
package pkg { ... } // 声明这是一个包
```

### 数据结构

```scala
(1,2,3) // 元组字面量 (Tuple3)
// 解构绑定：通过模式匹配来解构元组。
var (x,y,z) = (1,2,3)
// ❌ BAD 潜在风险：整个元组被赋值给了每一个变量
var x,y,z = (1,2,3)
// 列表 (不可变)
var xs = List(1,2,3)
xs(2) // 用括号索引 (slides)
1 :: List(2,3) // Cons（构成）
1 to 5 /* 等价于 => */ 1 until 6
// Range类型（语法糖）
1 to 10 by 2
// Unit类型的唯一成员 (相当于 C/Java 里的void)
() (空括号) 
```

控制结构
---

### 条件

```scala
if (check) happy else sad
```

### 条件（语法糖）

```scala
if (check) happy same as
if (check) happy else ()
```

### while 循环

```scala
while (x < 5) { println(x); x += 1}
```

### do while 循环

```scala
do { println(x); x += 1} while (x < 5)
```

### break. (slides)

```scala
import scala.util.control.Breaks._
breakable {
  for (x <- xs) {
    if (Math.random < 0.1) break
  }
}
```

### for 表达式: filter/map

```scala
for (x <- xs if x%2 == 0) yield x*10
// 等价于
xs.filter(_%2 == 0).map(_*10)         
```

### for 表达式: 解构绑定

```scala
for ((x,y) <- xs zip ys) yield x*y
// 等价于
(xs zip ys) map { case (x,y) => x*y }
```

### for 表达式: 叉乘

```scala
for (x <- xs; y <- ys) yield x*y
// 等价于
xs flatMap {x => ys map {y => x*y}}
```

### for 表达式: 不可避免的格式

```scala
for (x <- xs; y <- ys) {
   println("%d/%d = %.1f".format(x, y, x/y.toFloat))
}            
```

### for 表达式: 包括上边界的遍历

```scala
for (i <- 1 to 5) {
  println(i)
}
```

### for 表达式: 忽略上边界的遍历

```scala
for (i <- 1 until 5) {
  println(i)
}
```

模式匹配
---

### 在函数的参数中使用模式匹配

```scala
// ✅ GOOD
(xs zip ys) map { case (x,y) => x*y }
// ❌ BAD
(xs zip ys) map( (x,y) => x*y )
```

### 可以匹配任何Int类型值的名称
<!--rehype:wrap-class=col-span-2-->

```scala
val v42 = 42
Some(3) match {
  case Some(v42) => println("42")
  case _ => println("Not 42")
}
```

❌ BAD: “v42” 被解释为可以匹配任何Int类型值的名称，打印输出”42”

```scala
val v42 = 42
Some(3) match {
  case Some(`v42`) => println("42")
  case _ => println("Not 42")
}
```

✅ GOOD: 有反引号的 “`v42`” 被解释为已经存在的 `val v42`，所以输出的是 “Not 42”.

```scala
val UppercaseVal = 42
Some(3) match {
case Some(UppercaseVal) => println("42")
  case _ => println("Not 42")
}
```

✅ GOOD: UppercaseVal 被视作已经存在的 val，而不是一个新的模式变量，因为它是以大写字母开头的，所以 `UppercaseVal` 所包含的值（42）和检查的值（3）不匹配，输出”Not 42”

面向对象
----

### 构造器参数 - 私有

```scala
class C(x: R) same as
class C(private val x: R)
var c = new C(4)
```

### 构造器参数 - 公有

```scala
class C(val x: R)
var c = new C(4)
c.x
```

### 构造函数就是类的主体
<!--rehype:wrap-class=row-span-2-->

```scala
class C(var x: R) {
  assert(x > 0, "positive please")
  var y = x
  val readonly = 5
  private var secret = 1
  def this = this(42)
}
```

### 匿名类

```scala
new{ ... }
```

### 定义一个抽象类

```scala
abstract class D { ... } // 不可创建
```

### 定义一个继承子类

```scala
class C extends D { ... }
```

### 继承与构造器参数

```scala
class D(var x: R)
class C(x: R) extends D(x)
```

愿望清单: 默认自动传参

### 定义一个单例

```scala
object O extends D { ... }
```

和模块一样

### 特质

```scala
trait T { ... }
class C extends T { ... }
class C extends D with T { ... }     
```

带有实现的接口，没有构造参数

### 多个特质

```scala
trait T1; trait T2
class C extends T1 with T2
class C extends D with T1 with T2
```

### 必须声明覆盖该方法

```scala
class C extends D { override def f = ...}
```

### 创建对象

```scala
new java.io.File("f")
new List[Int]  // ✅ GOOD
List(1,2,3)    // ❌ BAD
```

### 类字面量

```scala
classOf[String]
```

### 类型检查 (运行时)

```scala
x.isInstanceOf[String]
```

### 类型强制转换 (运行时)

```scala
x.asInstanceOf[String]
```

### 归属 (编译时)

```scala
x: String
```
