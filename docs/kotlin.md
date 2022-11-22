Kotlin 备忘清单
===

Kotlin 备忘清单是 [Kotlin](https://kotlinlang.org) 编程语言的单页参考表

Kotlin 简介
----

### main() 函数

```kotlin
fun main() {
  // Code goes here
}
```

main() 函数是每个 Kotlin 程序的起点，在执行之前必须包含在代码中

### 打印声明

```kotlin
println("Greetings, earthling!")
print("Take me to ")
print("your leader.")

/* 
打印:
Greetings, earthling!
Take me to your leader.
*/
```

### 注释

```kotlin
// 这是单行注释

/*
这个
注释
用于
多
行
*/
```

### 执行顺序

```kotlin
fun main() {
  println("I will be printed first.")
  println("I will be printed second.")
  println("I will be printed third.")
}
```

数据类型和变量
---

### 可变变量

```kotlin
var age = 25
age = 26  
```

### 不可变变量

```kotlin
val goldenRatio = 1.618
```

### 类型推断

```kotlin
// 以下变量在双引号内分配了一个文本值
// 因此推断的类型是 String

var color = "Purple" 
```

### 字符串连接

```kotlin
var streetAddress = "123 Main St."
var cityState = "Brooklyn, NY" 

println(streetAddress + " " + cityState) 
// 打印: 123 Main St. Brooklyn, NY 
```

### 字符串模板

```kotlin
var address = "123 Main St."
println("The address is $address") 
// 打印: The address is 123 Main St.
```

### 内置属性和函数

```kotlin
var monument = "the Statue of Liberty"

println(monument.capitalize())
// 打印: The Statue of Liberty
println(monument.length)
// 打印: 21
```

### 字符转义序列
<!--rehype:wrap-class=row-span-2-->

```kotlin
print("\"Excellent!\" I cried. \"Elementary,\" said he.") 

// 打印: "Excellent!" I cried. "Elementary," said he.  
```
<!--rehype:className=wrap-text-->

- `\n` 插入新行
- `\t` 插入标签
- `\r` 插入回车
- `\'` 插入单引号
- `\"` 插入双引号
- `\\` 插入反斜杠
- `\$` 插入美元符号

### 算术运算符

```kotlin
5 + 7  // 12
9 - 2  // 7
8 * 4  // 32
25 / 5 // 5 
31 % 2 // 1 
```

`+` 加法、`-` 减法、`*` 乘法、`/` 除法和 `%` 模数

### 操作顺序

```kotlin
5 + 8 * 2 / 4 - 3 // 6 
3 + (4 + 4) / 2   // 7
4 * 2 + 1 * 7     // 15
3 + 18 / 2 * 1    // 12  
6 - 3 % 2 + 2     // 7   
```

### 增强赋值运算符

```kotlin
var batteryPercentage = 80

// 长语法
batteryPercentage = batteryPercantage + 10 

// 带有增广赋值运算符的短句法
batteryPercentage += 10 
```

### 递增和递减运算符

```kotlin
var year = 2019 
year++ // 2020
year-- // 2019 
```

### 数学库

```kotlin
Math.pow(2.0, 3.0)  // 8.0
Math.min(6, 9)      // 6 
Math.max(10, 12)    // 12
Math.round(13.7)    // 14
```

条件表达式
----

### if 表达式

```kotlin
var morning = true

if (morning) {
  println("Rise and shine!")
}
// 打印: Rise and shine!
```

### else 表达式

```kotlin
var rained = false

if (rained) {
  println("今天不需要给植物浇水。")
} else {
  println("植物需要浇水！")
}
// 打印: 植物需要浇水！
```

### Else-If 表达式

```kotlin
var age = 65

if (age < 18 ) {
  println("您被视为未成年人")
} else if (age < 60) {
  println("您被视为成年人")
} else {
  println("你被认为是高级")
}

// 打印: 你被认为是高级
```

### 比较运算符

```kotlin
var myAge = 19
var sisterAge = 11
var cousinAge = 11

myAge > sisterAge  // true
myAge < cousinAge  // false
myAge >= cousinAge // true
myAge <= sisterAge // false
```

### 逻辑运算符

```kotlin
var humid = true
var raining = true
var jacket = false

println(!humid)
// 打印: false
println(jacket && raining)
// 打印: true
println(humid || raining)
// 打印: true
```

### AND 运算符： &&

```kotlin
var humid = true
var raining = true
var shorts = false
var sunny = false

// true AND true
println(humid && raining) //  true
// true AND false
println(humid && shorts)  //  false
// false AND true
println(sunny && raining) //  false
// false AND false
println(shorts && sunny)  // false
```

### 或运算符：||

```kotlin
var late = true
var skipBreakfast = true
var underslept = false
var checkEmails = false

// true OR true
println(skipBreakfast || late) //  true
// true OR false
println(late || checkEmails) //  true
// false OR true
println(underslept || late) //  true
// false OR false
println(checkEmails || underslept) // false
```

### NOT 运算符

```kotlin
var hungry = true
var full = false

println(!hungry) //  false
println(!full) //  true
```

### 评估顺序

```kotlin
!true && (false || true) // false
/*
(false || true) 被评估首先返回 true。
然后，评估 !true && true 并返回最终结果 false
*/

!false && true || false // true
/*
!false 被评估首先返回 true。 
然后评估 true && true，返回 true。
那么，真|| 评估 false 最终返回 true
*/
```

### 嵌套条件

```kotlin
var studied = true
var wellRested = true

if (wellRested) {
  println("祝你今天好运！")
  if (studied) {
    println("你应该为考试做好准备！")
  } else {
    println("考试前花几个小时学习！")
  }
}

// 打印: 祝你今天好运！
// 打印: 你应该为考试做好准备！
```

### 当表达式

```kotlin
var grade = "A"

when(grade) {
  "A" -> println("很棒的工作！")
  "B" -> println("做得太好了！")
  "C" -> println("你通过了！")
  else -> println("关！下次一定要多准备！")
}
// 打印: 很棒的工作！
```

### 范围运算符

```kotlin
var height = 46 // inches

if (height in 1..53) {
  println("抱歉，您必须至少 54 英寸才能乘坐过山车"）
}
// Prints: 抱歉，您必须至少 54 英寸才能乘坐过山车
```
<!--rehype:className=wrap-text-->

### 等式运算符

```kotlin
var myAge = 22
var sisterAge = 21

myAge == sisterAge // false
myAge !== sisterAge // true
```

Collections
---

### 不可变列表

```kotlin
var programmingLanguages = listOf("C#", "Java", "Kotlin", "Ruby") 
```
<!--rehype:className=wrap-text-->

### 可变列表

```kotlin
var fruits = mutableListOf("Orange", "Apple", "Banana", "Mango") 
```
<!--rehype:className=wrap-text-->

### 访问列表元素

```kotlin
var cars = listOf("BMW", "Ferrari", "Volvo", "Tesla")

println(cars[2]) // Prints: Volvo
```
<!--rehype:className=wrap-text-->

### 大小属性

```kotlin
var worldContinents = listOf("Asia", "Africa", "North America", "South America", "Antarctica", "Europe", "Australia")

println(worldContinents.size) // Prints: 7
```
<!--rehype:className=wrap-text-->

### 列表操作
<!--rehype:wrap-class=row-span-2-->

```kotlin
var seas = listOf("Black Sea", "Caribbean Sea", "North Sea") 
println(seas.contains("North Sea")) // Prints: true

// contains() 函数对任何列表执行读取操作并确定元素是否存在
seas.add("Baltic Sea") // 错误：无法对不可变列表执行写操作
// add() 函数只能在可变列表上调用，因此上面的代码会引发错误
```
<!--rehype:className=wrap-text-->

### 不可变集

```kotlin
var primaryColors = setOf("Red", "Blue", "Yellow")
```
<!--rehype:className=wrap-text-->

### 可变集

```kotlin
var womenInTech = mutableSetOf("Ada Lovelace",  "Grace Hopper",  "Radia Perlman",  "Sister Mary Kenneth Keller")
```
<!--rehype:className=wrap-text-->

### 访问集合元素
<!--rehype:wrap-class=row-span-2-->

```kotlin
var companies = setOf("Facebook", "Apple", "Netflix", "Google")

println(companies.elementAt(3))
// Prints: Google
println(companies.elementAt(4))
// Returns and Error
println(companies.elementAtOrNull(4))
// Prints: null
```
<!--rehype:className=wrap-text-->

### 不可变映射

```kotlin
var averageTemp = mapOf("winter" to 35,  "spring" to 60,  "summer" to 85, "fall" to 55)
```
<!--rehype:className=wrap-text-->

### 可变映射

```kotlin
var europeanDomains = mutableMapOf("Germany" to "de", "Slovakia" to "sk", "Hungary" to "hu", "Norway" to "no")
```
<!--rehype:className=wrap-text-->

### 检索映射键和值

```kotlin
var oscarWinners = mutableMapOf("Parasite" to "Bong Joon-ho", "Green Book" to "Jim Burke", "The Shape Of Water" to "Guillermo del Toro")

println(oscarWinners.keys)
// Prints: [Parasite, Green Book, The Shape Of Water]

println(oscarWinners.values)
// Prints: [Bong Joon-ho, Jim Burke, Guillermo del Toro]

println(oscarWinners["Parasite"])
// Prints: Bong Joon-ho
```
<!--rehype:className=wrap-text-->

### 添加和删除地图条目

```kotlin
var worldCapitals = mutableMapOf("United States" to "Washington D.C.", "Germany" to "Berlin", "Mexico" to "Mexico City", "France" to "Paris")

worldCapitals.put("Brazil", "Brasilia")
println(worldCapitals)
// Prints: {United States=Washington D.C., Germany=Berlin, Mexico=Mexico City, France=Paris, Brazil=Brasilia}

worldCapitals.remove("Germany")
println(worldCapitals)
// Prints: {United States=Washington D.C., Mexico=Mexico City, France=Paris, Brazil=Brasilia}
```
<!--rehype:className=wrap-text-->

函数
---

### 函数

```kotlin
fun greet() {
  println("Hey there!")
}

fun main() {
  // Function call
  greet() // Prints: Hey there!
}
```

### 函数参数

```kotlin
fun birthday(name: String, age: Int) {
   println("Happy birthday $name! You turn $age today!")
}

fun main() {
  birthday("Oscar", 26) 
  // Prints: Happy birthday Oscar! You turn 25 today!
  birthday("Amarah", 30) 
  // Prints: Happy birthday Amarah! You turn 30 today!
}
```
<!--rehype:className=wrap-text-->

### 默认参数

```kotlin
fun favoriteLanguage(name, language = "Kotlin") {
  println("Hello, $name. Your favorite programming language is $language")  
}

fun main() {
  favoriteLanguage("Manon") 
  // Prints: Hello, Manon. Your favorite programming language is Kotlin
  
  favoriteLanguage("Lee", "Java") 
  // Prints: Hello, Lee. Your favorite programming language is Java
}
```
<!--rehype:className=wrap-text-->

### 命名参数

```kotlin
fun findMyAge(currentYear: Int, birthYear: Int) {
   var myAge = currentYear - birthYear
   println("I am $myAge years old.")
}

fun main() {
  findMyAge(currentYear = 2020, birthYear = 1995)
  // Prints: I am 25 years old.
  findMyAge(birthYear = 1920, currentYear = 2020)
  // Prints: I am 100 years old.
}
```
<!--rehype:className=wrap-text-->

### 返回声明

```kotlin
// Return type is declared outside the parentheses
fun getArea(length: Int, width: Int): Int {
  var area = length * width

  // return statement
  return area
}

fun main() {
  var myArea = getArea(10, 8)
  println("The area is $myArea.")
  // Prints: The area is 80.
}
```
<!--rehype:className=wrap-text-->

### 单表达式函数

```kotlin
fun fullName(firstName: String, lastName: String) = "$firstName $lastName"

fun main() {
  println(fullName("Ariana", "Ortega")) 
  // Prints: Ariana Ortega
  println(fullName("Kai", "Gittens")) 
  // Prints: Kai Gittens
}
```
<!--rehype:className=wrap-text-->

### 函数字面量

```kotlin
fun main() {
  // Anonymous Function:
  var getProduct = fun(num1: Int, num2: Int): Int {
     return num1 * num2
  }
  println(getProduct(8, 3)) 
  // Prints: 24

  // Lambda Expression
  var getDifference = { num1: Int, num2: Int -> num1 - num2 }
  println(getDifference(10, 3))
  // Prints: 7
}
```
<!--rehype:className=wrap-text-->

类
---

### 类示例

```kotlin
// 具有包含默认值的属性的类
class Student {
  var name = "Lucia"
  var semester = "Fall"
  var gpa = 3.95
}

// 没有类体的简写语法
class Student 
```

### 类实例

```kotlin
// Class
class Student {
  var name = "Lucia"
  var semester = "Fall"
  var gpa = 3.95
}

fun main() {
  var student = Student()   
  // Instance
  println(student.name)     
  // Prints: Lucia
  println(student.semester) 
  // Prints: Fall
  println(student.gpa)      
  // Prints: 3.95  
} 
```

### 主构造函数

```kotlin
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int) 

fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022) 
  println(student.name)     
  // Prints: Lucia
  println(student.gpa)      
  // Prints: 3.95
  println(student.semester) 
  // Prints: Fall
  println(student.estimatedGraduationYear) 
  // Prints: 2022
}
```
<!--rehype:className=wrap-text-->

### 初始化块

```kotlin
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int) {
  init {
    println("$name has ${estimatedGraduationYear - 2020} years left in college.")
  }
}

fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022)
  // Prints: Lucia has 2 years left in college. 
}
```
<!--rehype:className=wrap-text-->

### 成员函数
<!--rehype:wrap-class=col-span-2-->

```kotlin
class Student(val name: String, val gpa: Double, val semester: String, val estimatedGraduationYear: Int) {

  init {
    println("$name has ${estimatedGraduationYear - 2020} years left in college.")
  }

  // 成员函数
  fun calculateLetterGrade(): String {
    return when {
      gpa >= 3.0 -> "A"
      gpa >= 2.7 -> "B"
      gpa >= 1.7 -> "C"
      gpa >= 1.0 -> "D"
      else -> "E"
    }
  }
}

// 创建实例并调用函数时，将执行 when 表达式并返回字母等级
fun main() {
  var student = Student("Lucia", 3.95, "Fall", 2022) 
  // Prints: Lucia has 2 years left in college. 
  println("${student.name}'s letter grade is ${student.calculateLetterGrade()}.") 
  // Prints: Lucia's letter grade is A. 
}
```
<!--rehype:className=wrap-text-->

另见
---

- [Kotlin 语言官方文档](https://kotlinlang.org/) _(kotlinlang.org)_
