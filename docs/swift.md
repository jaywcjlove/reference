Swift 备忘清单
===

该备忘单提供了使用 [Swift](https://www.swift.org) 的示例，涵盖 Swift 基础知识、控制流、类型、结构/类、运算符、函数方法等。

入门
---

### 变量
<!--rehype:wrap-class=row-span-2-->

```swift
var score = 0 // 变量
let pi = 3.14 // 常数

var greeting = "Hello"
var numberOfToys = 8
var isMorning = true

var numberOfToys: Int = 8
numberOfToys += 1
print(numberOfToys) // 打印 "9"
```

### 类型注释

```swift
var greeting: String = "Hello"
var numberOfToys: Int = 8
var isMorning: Bool = true
var price: Double = 8.99
```

### 算术运算符
<!--rehype:wrap-class=row-span-3-->

- `+` 添加
- `-` 减法
- `*` 乘法
- `/` 分配
- `%` 余数
<!--rehype:className=cols-5 style-none-->

----

```swift
var x = 0
x = 4 + 2  // x 现在是 6
x = 4 - 2  // x 现在是 2
x = 4 * 2  // x 现在是 8
x = 4 / 2  // x 现在是 2
x = 4 % 2  // x 现在是 0
```

#### 复合赋值运算符

```swift
var numberOfDogs = 100
numberOfDogs += 1
print("有 \(numberOfDogs) 个斑点狗！")
// 打印: 有 101 个斑点狗！
```

----

- `+=` 添加和分配总和
- `-=` 减去并分配差值
- `*=` 乘并赋值
- `/=` 除并分配商
- `%=` 除并分配余数
<!--rehype:className=style-arrow cols-2-->

### 字符串插值

```swift
var apples = 6
print("I have \(apples) apples!")
// 打印: I have 6 apples!
```

### 多行字符串

```swift
let myLongString = """
Swift?
这是我最喜欢的语言！
"""
```

### 代码注释

```swift
// 这一行表示 Swift 中的注释。
/*
这都被注释掉了。
没有一个会跑！
*/
```

### 组成一个元组
<!--rehype:wrap-class=col-span-2-->

```swift
let player = ("Maya", 5, 150)

print(player) // ("Maya", 5, 150)
print("\(player.0): level \(player.1), \(player.2) pts") // Maya: level 5, 150 pts
```

### 分解元组

```swift
let player = (name: "Maya", level: 5)
let (currentName, curLevel) = player
print("\(currentName): level \(curLevel)")
// 打印: Maya: level 5
```

### 特殊注释语法 (MARK)

```swift
// MARK: - 查看设置
```

`MARK` 可用于在栏中显示评论

### 特殊注释语法 (TODO)

```swift
// TODO: 更新逻辑以适应数据更改
```

`TODO` 用于显示需要完成的事情的提醒

### 特殊注释语法 (FIXME)

```swift
// FIXME: 修复对现有条目进行更改时的故障行为
```

`FIXME` 用于显示需要修复的内容的提醒

变量
----

### 变量声明

变量用 `var` 声明：

```swift
var greeting = "你好"
var numberOfToys = 8
var isMorning = true
```

为了清楚起见，变量声明可以包含类型注释：

```swift
var greeting: String = "你好"
var numberOfToys: Int = 8
var isMorning: Bool = true
```

变量是可变的。 它们的值可以改变：

```swift
var numberOfToys: Int = 8
numberOfToys += 1
print(numberOfToys) // 打印“9”
```

### 常数

常量用 `let` 声明：

```swift
let greeting = "Hello"
let numberOfToys = 8
let isMorning = true
```

为清楚起见，常量声明可以包含类型注释：

```swift
let greeting: String = "Hello"
let numberOfToys: Int = 8
let isMorning: Bool = true
```

常量是不可变的。它们的值不能改变：

```swift
let numberOfToys: Int = 8
numberOfToys += 1
// ❌ 错误：numberOfToys 不可变
```

### 计算变量（get 和 set）
<!--rehype:wrap-class=row-span-3-->

```swift
import Foundation

let df = DateFormatter()
df.dateFormat = "d MMMM yyyy"

var birth = df.date(from: "5 June 1999")!

var age: Int {
  Calendar.current
    .dateComponents([.year],
                  from: birth,
                  to: Date()).year!
}

print(age) // 20
birth = df.date(from: "5 June 2002")!
print(age) // 17
```

在下面的示例中，distanceInFeet 有一个 `getter` 和一个 `setter`。 因为有 `setter`，所以 `getter` 需要关键字 `get`：

```swift
var distanceInMeters: Float = 100

var distanceInFeet: Float {
  get {
    distanceInMeters * 3.28
  }
  set(newDistance) {
    distanceInMeters = newDistance / 3.28
  }
}

print(distanceInMeters) // 100.0
print(distanceInFeet) // 328.0

distanceInFeet = 250
print(distanceInMeters) // 76.21951
print(distanceInFeet) // 250.0

distanceInMeters = 800
print(distanceInMeters) // 800.0
print(distanceInFeet) // 2624.0
```

### willSet
<!--rehype:wrap-class=row-span-2-->

```swift
var distance = 5 {
  willSet {
    print("距离将被设置")
  }
}

distance = 10 // 打印: 距离将被设置
```

可以在 `willSet` 中访问新值：

```swift
var distance = 5 {
  willSet(newDistance) {
    print("距离将被设置 \(newDistance)")
  }
}

distance = 10 // 打印: 距离将被设置 10
```

`willSet` 可用于在设置变量值之前执行一些代码

### didSet

```swift
var distance = 5 {
  didSet {
    print("距离设置为 \(distance)")
    print("它的旧值是： \(oldValue)")
  }
}
distance = 10 // 打印: 距离将被设置 10
              // 打印: 它的旧值是：5
```

### willSet 和 didSet

```swift
var distance = 5 {
  willSet(newDistance) {
    print("距离将设置为 \(newDistance)")
  }
  didSet {
    print("距离设置为 \(distance)")
    print("它的旧值是： \(oldValue)")
  }
}
distance = 10
```

条件和逻辑
---

### if 语句

```swift
var halloween = true 
if halloween {
  print("不给糖就捣蛋！")
}
// 打印: 不给糖就捣蛋！ 
if 5 > 3 {
  print("5 大于 3")
} else {
  print("5 不超过 3")
}
// 输出: "5 大于 3"
```

### else 语句

```swift
var turbulence = false

if turbulence {
  print("请坐好。")
} else {
  print("你可以自由地四处走动。")
}
// 打印: 你可以自由地四处走动。
```

### else if 语句

```swift
var weather = "rainy"
if weather == "sunny" {
  print("拿点防晒霜")
} else if weather == "rainy" {
  print("拿一把雨伞")
} else if weather == "snowing" {
  print("穿上你的雪地靴")
} else {
  print("无效天气")
}
// 打印: 拿一把雨伞
```

### 比较运算符

```swift
5 > 1          // true 
6 < 10         // true 
2 >= 3         // false
3 <= 5         // true
"A" == "a"     // false
"B" != "b"     // true
```

- `<` 小于
- `>` 大于
- `<=` 小于或等于
- `>=` 大于或等于
- `==` 等于
- `!=` 不等于
<!--rehype:className=style-round cols-2-->

### 三元条件运算符

```swift
var driverLicense = true

driverLicense 
    ? print("驾驶座") : print("乘客座位") 
// 打印: 驾驶座
```

### switch 语句

```swift
var secondaryColor = "green"

switch secondaryColor {
  case "orange":
    print("红色和黄色的混合")
  case "purple":
    print("红色和蓝色的混合") 
  default: 
    print("这可能不是辅助颜色") 
}
// 打印: 蓝色和黄色的混合
```

### switch 语句：区间匹配

```swift
let year = 1905
var artPeriod: String

switch year {
  case 1860...1885:
    artPeriod = "印象派"
  case 1886...1910:
    artPeriod = "后印象派"
  default:  
    artPeriod = "未知"
}
// 打印: 后印象派
```

### switch 语句：复合案例

```swift
let service = "Seamless"

switch service {
  case "Uber", "Lyft":
    print("旅行")
  case "DoorDash", "Seamless", "GrubHub":
    print("餐厅送餐")
  case "Instacart", "FreshDirect":
    print("杂货配送")
  default: 
    print("未知服务")
}
// 打印: 餐厅外卖
```

### switch 语句：where 子句

```swift
let num = 7

switch num {
  case let x where x % 2 == 0:
    print("\(num) 是偶数")
  case let x where x % 2 == 1:
    print("\(num) 奇数")
  default:
    print("\(num) 无效")
}

// 打印: 7 奇数
```

### 逻辑运算符

```swift
!true          // false
!false         // true
```

### 逻辑运算符 &&

```swift
true && true    // true
true && false   // false 
false && true   // false 
false && false  // false
```

### 逻辑运算符 ||

```swift
true || true    // true
true || false   // true
false || true   // true 
false || false  // false
```

### 组合逻辑运算符

```swift
!false && true || false // true
```

`!false && true` 首先计算并返回 `true` 然后，表达式，`true` || `false` 评估并返回最终结果 `true`

```swift
false || true && false  // false
```

`true && false` 首先计算返回 `false` 然后，表达式，`false` || `false` 评估并返回最终结果 `false`

### 控制执行顺序

```swift
// 没有括号：
true || true && false || false
// ---->  true 

// 带括号：
(true || true) && (false || false)
// ---->  false 
```

### 简单的 guard

```swift
func greet(name: String?) {
  guard let unwrapped = name else {
    print("Hello guest!")
    return
  }
  print("Hello \(unwrapped)!")
}
greet(name: "Asma") // 输出：Hello Asma!
greet(name: nil)    // 输出：Hello guest!
```

循环
----

### 范围

```swift
let zeroToThree = 0...3
// zeroToThree: 0, 1, 2, 3
```

### stride() 函数

```swift
for oddNum in stride(from: 1, to: 5, by: 2) {
  print(oddNum)
}
// 打印: 1
// 打印: 3
```

### for-in 循环

```swift
for char in "hehe" {
  print(char)
}
// 打印: h
// 打印: e
// 打印: h
// 打印: e
```

### continue 关键字

```swift
for num in 0...5 {
  if num % 2 == 0 {
    continue
  }
  print(num)
}
// 打印: 1
// 打印: 3
// 打印: 5
```

`continue` 关键字将强制循环继续进行下一次迭代

### break 关键字

```swift
for char in "supercalifragilistice" {
  if char == "c" {
    break
  }
  print(char)
}
// 打印: s
// 打印: u
// 打印: p
// 打印: e
// 打印: r
```

### 使用下划线

```swift
for _ in 1...3 {
  print("Olé")
}
// 打印: Olé
// 打印: Olé
// 打印: Olé
```

### while 循环

```swift
var counter = 1
var stopNum = Int.random(in: 1...10)

while counter < stopNum {
  print(counter)
  counter += 1
}
// 循环打印，直到满足停止条件
```

`while` 循环接受一个条件，并在所提供的条件为 `true` 时持续执行其主体代码。如果条件从不为假，则循环将继续运行，程序将陷入`无限循环`

数组和集合
----

### Array 数组

```swift
var scores = [Int]()
// 数组为空：[]
```

### .count 属性

```swift
var grocery = ["🥓", "🥞", "🍪", "🥛", "🍊"]
print(grocery.count)
// 打印: 5
```

### 索引
<!--rehype:wrap-class=row-span-2-->

索引是指项目在有序列表中的位置，使用下标语法 `array[index]` 从数组中检索单个元素。

```swift
var vowels = ["a", "e", "i", "o", "u"]

print(vowels[0])  // 打印: a
print(vowels[1])  // 打印: e
print(vowels[2])  // 打印: i
print(vowels[3])  // 打印: o
print(vowels[4])  // 打印: u
```

注意：Swift 数组是零索引的，这意味着第一个元素的索引为 0。

### 用数组字面量初始化

```swift
// 使用类型推断：
var snowfall = [2.4, 3.6, 3.4, 1.8, 0.0]
// 明确类型：
var temp: [Int] = [33, 31, 30, 38, 44]
```

### .append() 方法和 += 运算符

```swift
var gymBadges = ["Boulder", "Cascade"]
gymBadges.append("Thunder")
gymBadges += ["Rainbow", "Soul"]
// ["Boulder", "Cascade", "Thunder",
//   "Rainbow", "Soul"]
```

### .insert() 和 .remove() 方法

```swift
var moon = ["🌖", "🌗", "🌘", "🌑"]
moon.insert("🌕", at: 0)
// ["🌕", "🌖", "🌗", "🌘", "🌑"]

moon.remove(at: 4)
// ["🌕", "🌖", "🌗", "🌘"]
```

### 遍历数组

```swift
var employees = ["小王", "张三", "王五"]
for person in employees {
  print(person)
}
// 打印: 小王
// 打印: 张三
// 打印: 王五
```

### 集合(Set)

```swift
var paintingsInMOMA: Set = [
  "The Dream",
  "The Starry Night",
  "The False Mirror"
]
```

我们可以使用集合(`Set`)来存储相同数据类型的`唯一`元素

### 空集合(Set)

```swift
var team = Set<String>()

print(team)
// 打印: [] 
```

### 填充集合

```swift
var vowels: Set = ["a", "e", "i", "o","u"]
```

要创建一个填充有值的集合，请在赋值运算符之前使用 `Set` 关键字。

### .insert()

```swift
var cookieJar: Set = [
  "Chocolate Chip",
  "Oatmeal Raisin"
]
// 添加一个新元素
cookieJar.insert("Peanut Butter Chip")
```

### .remove() 和 .removeAll() 方法

```swift
var oddNumbers: Set = [1, 2, 3, 5]

// 移除现有元素
oddNumbers.remove(2)
// 删除所有元素
oddNumbers.removeAll()
```

### .contains()

```swift
var names: Set = ["Rosa", "Doug", "Waldo"]
print(names.contains("Lola")) //打印: false

if names.contains("Waldo"){
  print("There's Waldo!")
} else {
  print("Where's Waldo?")
}
// 打印: There's Waldo!
```

### 迭代一个集合

```swift
var recipe: Set = ["蛋", "面粉", "糖"]

for ingredient in recipe {
  print ("在配方中包含\(ingredient)")
}
```

### .isEmpty 属性

```swift
var emptySet = Set<String>()
print(emptySet.isEmpty)  // 打印: true

var populatedSet: Set = [1, 2, 3]
print(populatedSet.isEmpty) // 打印: false
```

### .count 属性

```swift
var band: Set = ["张三", "王五", "赵六"]

print("乐队有 \(band.count) 名演奏者。")
// 打印: 乐队有 4 名演奏者。
```

### .intersection() 交叉

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.intersection(setB)
print(setC)  // 打印: ["D", "C"]
```

### .union() 合并去重

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.union(setB)
print(setC) 
// 打印: ["B", "A", "D", "F", "C", "E"]
```

### .symmetricDifference() 对称差

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D", "E", "F"]

var setC = setA.symmetricDifference(setB)
print(setC) 
// 打印: ["B", "E", "F", "A"]
```

### .subtracting() 减法

```swift
var setA: Set = ["A", "B", "C", "D"]
var setB: Set = ["C", "D"]

var setC = setA.subtracting(setB)
print(setC) 
// 打印: ["B", "A"]
```

字典
---

### 基础字典

```swift
var dictionaryName = [
  "Key1": "Value1",
  "Key2": "Value2",
  "Key3": "Value3"
]
```

成对数据或键值对的`无序`集合

### Keys

```swift
var fruitStand = [
  "Coconuts": 12,
  "Pineapples": 12,
  "Papaya": 12
]
```

每个`键`都是`唯一`的，即使它们都包含相同的`值`

### 类型一致性

```swift
var numberOfSides = [
  "triangle": 3,
  "square": 4,
  "rectangle": 4
]
```

仅包含 `String` 键和 `Int` 值

### 初始化填充字典

```swift
var employeeID = [
  "Hamlet": 1367,
  "Horatio": 8261,
  "Ophelia": 9318
]
```

### 初始化一个空字典

```swift
// 初始化器语法：
var yearlyFishPopulation = [Int: Int]()

// 空字典字面量语法：
var yearlyBirdPopulation: [Int: Int] = [:]
```

### 添加到字典

```swift
var pronunciation = [
  "library": "lai·breh·ree",
  "apple": "a·pl"
]
// 新键：“programming”，新值：“prow·gra”
pronunciation["programming"] = "prow·gra"
```

### 删除键值对
<!--rehype:wrap-class=row-span-2-->

```swift
var bookShelf = [
  "Goodnight": "Margaret Wise Brown",
  "The BFG": "Roald Dahl",
  "Falling Up": "Shel Silverstein",
  "No, David!": "David Shannon"
]

// 通过将 key 设置为 nil 来删除值
bookShelf["The BFG"] = nil

// 使用 .removeValue() 删除值
bookShelf.removeValue(forKey: "Goodnight")

// 删除所有值
bookShelf.removeAll()
```

### 修改键值对
<!--rehype:wrap-class=row-span-2-->

```swift
var change = [
  "Quarter": 0.29,
  "Dime": 0.15,
  "Nickel": 0.05
]

// 使用下标语法更改值
change["Quarter"] = .25

// 使用 .updateValue() 更改值
change.updateValue(.10, forKey: "Dime")
```

要更改键值对的值，请使用 `.updateValue()` 方法或下标语法，通过将括号 `[ ]` 和其中的现有键附加到字典的名称，然后添加赋值运算符 _(`=`)_ 后跟修改后的值

### .isEmpty 属性

```swift
var bakery = [String:Int]()

// 检查字典是否为空
print(bakery.isEmpty)    // 打印 true
bakery["Cupcakes"] = 12
// 检查字典是否为空
print(bakery.isEmpty)    // 打印 false
```

### .count 属性

```swift
var fruitStand = [
  "Apples": 12,
  "Oranges", 17
]
print(fruitStand.count)  // 打印: 2
```

### 为变量赋值

```swift
var hex = [
  "red": "#ff0000",
  "yellow": "#ffff00",
  "blue": "#0000ff",
]

print("蓝色十六进制代码 \(hex["blue"])")
// 打印: 蓝色十六进制代码 Optional("#0000ff")

if let redHex = hex["red"] {
  print("红色的十六进制代码 \(redHex)")
}
// 打印: 红色的十六进制代码 #ff0000
```

将键值对的值分配给变量将返回一个可选值。要提取值，请使用可选的展开

### 遍历字典

```swift
var emojiMeaning = [
  "🤔": "Thinking Face",
  "😪": "Sleepy Face",
  "😵": "Dizzy Face"
]
// 遍历键和值
for (emoji, meaning) in emojiMeaning {
  print("\(emoji)被称为'\(meaning)Emoji'")
}
// 仅通过键迭代
for emoji in emojiMeaning.keys {
  print(emoji)
}
// 仅通过值迭代
for meaning in emojiMeaning.values {
  print(meaning)
}
```

函数
---

### 基础函数

```swift
func washCar() -> Void {
  print("Soap")
  print("Scrub")
  print("Rinse")
  print("Dry")
}
```

### 调用函数

```swift
func greetLearner() {
 print("欢迎来到 Quick Reference!")
}
// 函数调用：
greetLearner()
// 打印: 欢迎来到 Quick Reference!
```

### 返回值

```swift
let birthYear = 1994
var currentYear = 2020

func findAge() -> Int {
  return currentYear - birthYear
}

print(findAge()) // 打印: 26
```

### 多个参数
<!--rehype:wrap-class=col-span-2-->

```swift
func convertFracToDec(numerator: Double, denominator: Double) -> Double {
  return numerator / denominator
} 

let decimal = convertFracToDec(numerator: 1.0, denominator: 2.0) 
print(decimal) // Prints:  0.5 
```

### 省略参数标签

```swift
func findDiff(_ a: Int, b: Int) -> Int {
  return a - b
}

print(findDiff(6, b: 4)) // 打印: 2
```

### 返回多个值
<!--rehype:wrap-class=col-span-2-->

```swift
func smartphoneModel() -> (name: String, version: String, yearReleased: Int) {
  return ("iPhone", "8 Plus", 2017)
}

let phone = smartphoneModel()

print(phone.name)     // 打印: iPhone
print(phone.version)  // 打印: 8 Plus
print(phone.yearReleased) // 打印: 2017
```

### Parameters & Arguments

```swift
func findSquarePerimet(side: Int) -> Int {
  return side * 4
} 

let perimeter = findSquarePerimet(side: 5)
print(perimeter) // 打印: 20

// Parameter: side
// Argument:  5
```

### 隐式返回

```swift
func nextTotalSolarEclipse() -> String {
  "April 8th, 2024 🌎"
}

print(nextTotalSolarEclipse())
// 打印: April 8th, 2024 🌎
```

### 默认参数

```swift
func greet(person: String = "guest") {
  print("Hello \(person)")
}
greet() // Hello guest
greet(person: "Aliya") // Hello Aliya
```

### 输入输出参数
<!--rehype:wrap-class=row-span-2-->

```swift
var currentSeason = "冬天" 

func season(month: Int, name: inout String) {
  switch month {
    case 1...2:
      name = "冬天 ⛄️" 
    case 3...6:
      name = "春天 🌱"
    case 7...9:
      name = "夏天 ⛱"
    case 10...11: 
      name = "秋天 🍂"
    default: 
      name = "未知"
  } 
} 

season(monthNum: 4, name: &currentSeason)

print(currentSeason) // 春天 🌱
```

### 可变参数

```swift
func totalStudent(data: String...) -> Int {
  let numStudents = data.count
  return numStudents
}

print(totalStudent(data: "王五", "张三"))
// 打印: 2
```

### 可选参数

```swift
func getFirstInitial(from name: String?) -> String? {
  return name?.first
}
```

函数可以接受可选类型并返回可选类型。当一个函数不能返回请求类型的合理实例时，它应该返回 `nil`

结构
----

### 结构创建

```swift
struct Building {
  var address: String
  var floors: Int

  init(address: String, floors: Int) {
    self.address = address
    self.floors = floors
  }
}
```

结构或结构用于以编程方式在代码中表示现实生活中的对象。结构是使用 `struct` 关键字创建的，后跟其名称，然后是包含其属性和方法的主体

### 默认属性值

```swift
struct Car {
  var numOfWheels = 4
  var topSpeed = 80
}

var reliantRobin = Car(numOfWheels: 3)

print(reliantRobin.numOfWheels) // 打印: 3
print(reliantRobin.topSpeed)    // 打印: 80
```

### 结构实例创建

```swift
struct Person {
  var name: String
  var age: Int

  init(name: String, age: Int) {
    self.name = name
    self.age = age
  }
}

// Person 实例：
var morty = Person(name: "张三", age: 14)
```

### init() 方法
<!--rehype:wrap-class=row-span-2-->

```swift
struct TV {
  var size: Int
  var type: String
  
  init(size: Int, type: String) {
    self.size = size
    self.type = type
  }
}
```

使用 `TV` 类

```swift
var newTV = TV(size: 65, type: "LED")
```

### 检查类型

```swift
print(type(of: "abc")) // 打印: String
print(type(of: 123))   // 打印: 123
```

### 变异方法(mutating)
<!--rehype:wrap-class=row-span-2-->

```swift
struct Menu {
  var menuItems = ["Fries", "Burgers"]
  mutating func addToMenu(dish: String) {
    self.menuItems.append(dish)
  }
}
```

使用 `Menu` 类

```swift
var dinerMenu = Menu()
dinerMenu.addToMenu(dish: "Toast")
print(dinerMenu.menuItems) 
// 打印: ["Fries", "Burgers", "Toast"]
```

### 结构方法

```swift
struct Dog {
  func bark() {
    print("Woof")
  }
}
let fido = Dog()
fido.bark() // 打印: Woof
```

Class
----

### 引用类型（类）
<!--rehype:wrap-class=row-span-2-->

```swift
class Player {
  var name: String

  init(name: String) {
    self.name = name
  }
}

var player1 = Player(name: "Tomoko")
var player2 = player1
player2.name = "Isabella"

print(player1.name) // Isabella
print(player2.name) // Isabella
```

### 类的实例

```swift
class Person {
  var name = ""
  var age = 0
}

var sonny = Person()
// sonny 现在是 Person 的一个实例
```

### init() 方法
<!--rehype:wrap-class=row-span-2-->

```swift
class Fruit {
  var hasSeeds = true 
  var color: String

  init(color: String) {
    self.color = color
  }
}
```

使用 Fruit 类

```swift
let apple = Fruit(color: "red")
```

可以使用 `init()` 方法和相应的初始化属性来初始化类，在 `init()` 方法中，`self` 关键字用于引用类分配属性值的实际实例

### 类属性

```swift
var ferris = Student()

ferris.name = "Ferris Bueller"
ferris.year = 12
ferris.gpa = 3.81
ferris.honors = false
```

### 继承
<!--rehype:wrap-class=row-span-2-->

假设我们有一个 BankAccount 类：

```swift
class BankAccount {
  var balance = 0.0
  func deposit(amount: Double) {
    balance += amount
  }
  func withdraw(amount: Double) {
    balance -= amount
  }
}
```

`SavingsAccount` 继承 `BankAccount` 类

```swift
class SavingsAccount: BankAccount {
  var interest = 0.0

  func addInterest() {
    let interest = balance * 0.005
    self.deposit(amount: interest)
  }
}
```

新的 `SavingsAccount` 类(子类)自动获得了 `BankAccount` 类(超类)的所有特征。 此外，`SavingsAccount` 类定义了一个 `.interest` 属性和一个 `.addInterest()` 方法。

### 示例

使用数据类型

```swift
class Student {
  var name: String
  var year: Int
  var gpa: Double
  var honors: Bool
}
```

使用默认属性值

```swift
class Student {
  var name = ""
  var gpa = 0.0
  var honors = false
}
```

### 这是结构定义和类定义的示例

```swift
struct Resolution {
  var width = 0
  var height = 0
}
class VideoMode {
  var resolution = Resolution()
  var interlaced = false
  var frameRate = 0.0
  var name: String?
}
```

`Resolution` 结构定义和 `VideoMode` 类定义仅描述 `Resolution` 或 `VideoMode` 的外观，创建结构或类的实例：

```swift
let resolution = Resolution(width: 1920)
let someVideoMode = VideoMode()
```

枚举
----

### 定义枚举

```swift
enum Day {
  case monday
  case tuesday
  case wednesday
  case thursday
  case friday
  case saturday
  case sunday
}

let casualWorkday: Day = .friday
```

### Switch 语句

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let customerOrder: Dessert = .cake(flavor: "红色天鹅绒")
switch customerOrder {
  case let .cake(flavor):
    print("你点了一个 \(flavor) 蛋糕")
  case .brownie: 
    print("你点了一块巧克力蛋糕")
}
// 打印: "你点了一个红色天鹅绒蛋糕"
```

### CaseIterable

```swift
enum Season: CaseIterable {
  case winter
  case spring
  case summer
  case fall
}

for season in Season.allCases {
  print(season)
}
```

添加对 `CaseIterable` 协议的一致性以访问 `allCases` 属性，该属性返回枚举的所有案例的数组

### 原始值

```swift
enum Beatle: String {
  case john, paul, george, ringo
}

print("披头士是 \(Beatle.john.rawValue).")
// 打印: 披头士是 john.
```

### 相关值

```swift
enum Dessert {
  case cake(flavor: String)
  case vanillaIceCream(scoops: Int)
  case brownie
}

let order: Dessert = .cake(flavor: "红色天鹅绒")
```

### 实例方法
<!--rehype:wrap-class=row-span-2-->

```swift
enum Traffic {
  case light
  case heavy

  mutating func reportAccident() {
    self = .heavy
  }
}

var currentTraffic: Traffic = .light

currentTraffic.reportAccident()
// currentTraffic 现在是 .heavy
```

就像类和结构一样，枚举也可以有实例方法。如果实例方法改变了枚举的值，则需要将其标记为 `mutating`

### 从原始值初始化

```swift
enum Hello: String {
  case english = "Hello"
  case japanese = "你好呀！"
  case emoji = "👋"
}
let hello1 = Hello(rawValue: "你好呀！")
let hello2 = Hello(rawValue: "Привет")
print(hello1) // Optional(Hello.japanese)
print(hello2) // nil
```

### 计算属性

```swift
enum ShirtSize: String {
  case small = "S"
  case medium = "M"
  case large = "L"
  case extraLarge = "XL"
  var description: String {
    return "这件衬衫尺码是 \(self.rawValue)"
  }
}
```

另见
----

- [Swift 文档(官方)](https://www.swift.org/documentation/) _(swift.or)_
- [快速编程语言(官方)](https://docs.swift.org/swift-book/) _(swift.or)_
- [Learn Swift](https://www.codecademy.com/resources/cheatsheets/language/swift) _(codecademy.com)_
- [Swift 开发人员的一站式快速参考](https://swiftly.dev/) _(swiftly.dev)_
- [Swift 入门教程、读书笔记](https://jaywcjlove.github.io/swift-tutorial) _(jaywcjlove.github.io)_
