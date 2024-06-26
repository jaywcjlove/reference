Dart 备忘清单
===

包含最重要概念、功能、方法等的 [Dart](https://dart.dev/) 备忘单。初学者的完整快速参考

入门
-----

### 安装 Dart
<!--rehype:wrap-class=row-span-2-->

#### Windows

```bash
C:\> choco install dart-sdk # Windows
```

#### Linux

执行以下一次性设置

```bash
$ sudo apt-get update
$ sudo apt-get install apt-transport-https
$ wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor -o /usr/share/keyrings/dart.gpg
$ echo 'deb [signed-by=/usr/share/keyrings/dart.gpg arch=amd64] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main' | sudo tee /etc/apt/sources.list.d/dart_stable.list
```

安装 Dart SDK

```bash
$ sudo apt-get update
$ sudo apt-get install dart
```

#### Mac

```bash
$ brew tap dart-lang/dart
$ brew install dart
```

### hello.dart

```dart
// 应用执行开始的顶级函数
void main() {
    print("Hello World!"); // 打印到控制台
}
```

每个应用程序都有一个 `main()` 函数

#### Windows

```bash
$ dart compile exe hellow.dart
$ time ./hello.exe
Hello World!
```

### 变量

```dart
int x = 2; // 显式键入
var p = 5; // 类型推断 - 具有类型推断的通用var
dynamic z = 8; // 变量可以采用任何类型
z = "cool"; // cool

// 如果您从不打算更改变量，请使用 final 或 const
// 像这样的东西：
final email = "temid@gmail.com";
// 与 var 相同，但不能重新分配
final String email = "temid@gmail.com";
// 你不能改变价值
const qty = 5; // 编译时常数
```

### 数据类型
<!--rehype:wrap-class=row-span-2-->

```dart
// 整数，范围 -2^63 到 2^63 - 1
int age = 20;
// 浮点数字

double height = 1.85;
// 您还可以将变量声明为 num
// x 可以同时具有 int 和 double 值
num x = 1;
num += 2.5;
print(num); // 打印: 3.5

String name = "Nicola";
bool isFavourite = true;
bool isLoaded = false;
```

### 注释

```dart
// 这是一条正常的单行注释
/// 这是一个文档注释，用于文档库，
/// 类及其成员。 IDE 和 dartdoc 等工具
/// doc 特别注释。
/* 也支持此类注释 */
```

### 字符串插值

```dart
// 可以对字符串类型使用单引号或双引号
var firstName = 'Nicola';
var lastName = "Tesla";
// 可以用 $ 将变量嵌入到字符串中
String fullName = "$firstName $lastName";
// 与 + 连接
var name = "Albert " + "Einstein";
String upperCase = '${firstName.toUpperCase()}';
print(upperCase); // 打印: NICOLA
```
<!--rehype:className=wrap-text -->

### 导入 Imports

```dart
// 导入核心库
import 'dart:math';
// 从外部包导入库
import 'package:test/test.dart';
// 导入文件
import 'path/to/my_other_file.dart';
```

操作符
-------

### 算术运算符
<!--rehype:wrap-class=row-span-2-->

```dart
print(2 + 3);  // 打印: 5
print(2 - 3);  // 打印: -1
print(2 * 3);  // 打印: 6
print(5 / 2);  // 打印: 2.5 - 结果是 double
print(5 ~/ 2); // 打印: 2 - 结果是n int
print(5 % 2);  // 打印: 1 - 余
int a = 1, b;
```

----

```dart
// 增
b = ++a; // 前增量 - 在 b 获得其值之前增加 a
b = a++; // 后增量 - 在 b 获得它的值之后增加 a
// 递
b = --a; // 前减量 - 在 b 获得它的值之前减少 a
b = a--; // 后减量 - 在 b 获得它的值之后递减 a
```

### 逻辑运算符
<!--rehype:wrap-class=col-span-2-->

```dart
// !expr 反转表达式（将 false 更改为 true，反之亦然）
// ||  逻辑或
// &&  逻辑与
bool isOutOfStock = false;
int quantity = 3;
if (!isOutOfStock && (quantity == 2 || quantity == 3)) {
  // ...Order the product...
}
```

### 等式和关系运算符

```dart
print(2 == 2); // 打印: true - 平等的
print(2 != 3); // 打印: true - 不相等
print(3 > 2);  // 打印: true - 比...更棒
print(2 < 3);  // 打印: true - 少于
print(3 >= 3); // 打印: true - 大于或等于
print(2 <= 3); // 打印: true - 小于或等于
```

### 运算符优先级示例

```dart
// 括号可以提高可读性。
if ((n % i == 0) && (d % i == 0)) ...
// 虽然难以阅读，但等效。
if (n % i == 0 && d % i == 0) ...
```

### 位运算符和移位运算符

操作符 | 含义
:-|-
`&` | 与（AND）
`\|` | 或（OR）
`^` | 异或（XOR）
`~expr` | 一元位补码<br>_(0 变为 1；1 变为 0)_
`<<` | 左移
`>>` | 右移
`>>>` | 无符号右移
<!--rehype:className=left-align-->

----

```dart
final value = 0x22;
final bitmask = 0x0f;

// 与（AND）
assert((value & bitmask) == 0x02);
// 非与（AND NOT）
assert((value & ~bitmask) == 0x20);
// 或（OR）
assert((value | bitmask) == 0x2f);
// 异或（XOR）
assert((value ^ bitmask) == 0x2d);

assert((value << 4) == 0x220); // 左移
assert((value >> 4) == 0x02);  // 右移
```

### 级联表示法

级联 (.., ?..) 允许您对同一对象进行一系列操作。除了访问实例成员之外，您还可以调用同一对象的实例方法。这通常可以节省您创建临时变量的步骤，并允许您编写更流畅的代码。考虑以下代码：

```dart
var paint = Paint()
  ..color = Colors.black
  ..strokeCap = StrokeCap.round
  ..strokeWidth = 5.0;
```

示例相当于以下代码：

```dart
var paint = Paint();
paint.color = Colors.black;
paint.strokeCap = StrokeCap.round;
paint.strokeWidth = 5.0;
```

以 `?...`开头可确保不会对该空对象进行任何级联操作。

```dart
querySelector('#confirm') // 获取一个对象
  ?..text = 'Confirm' // 使用它的成员
  ..classes.add('important')
  ..onClick.listen((e) => {
    window.alert('Confirmed!')
  })
  ..scrollIntoView();
```

控制流：条件
------

### if 和 else if
<!--rehype:wrap-class=row-span-2-->

```dart
if(age < 18){
    print("Teen");
} else if( age > 18 && age <60){
    print("Adult");
} else {
    print("Old");
}
```

### switch case
<!--rehype:wrap-class=row-span-2-->

```dart
enum Pet {dog, cat}
Pet myPet = Pet.dog;
switch(myPet) {
    case Pet.dog:
        print('My Pet is Dog.');
        break;
    case Pet.cat:
        print('My Pet is Cat.');
        break;
    default:
        print('I don\'t have a Pet');
}
// 打印: My Pet is Dog.
```

### 三元操作符

```dart
int age = 20;
String message = age >= 18 ? "成人" : "儿童";
print("年龄类别: $message");
// 输出: 年龄类别: 成人
```

### 三元操作符嵌套使用

```dart
int x = 10;
int y = 5;
int result = x > y ? x : y > 0 ? y : 0;
print("Result: $result");
// 输出: Result: 10
```

控制流：循环
-----

### while 循环

```dart
while (!dreamsAchieved) {
  workHard();
}
```

循环迭代之前的 `while` 循环检查条件

### do-while 循环

```dart
do {
  workHard();
} while (!dreamsAchieved);
```

`do-while` 循环在执行循环内的语句后验证条件

### for 循环

```dart
for(int i=0; i< 10; i++){
    print(i);
}
var numbers = [1,2,3];
// 列表的 for-in 循环
for(var number in numbers){
    print(number);
}
```

Collections
------------

### Lists
<!--rehype:wrap-class=col-span-2-->

```dart
// 有序的对象组
var list = [1, 2, 3];
print(list.length); //Print: 3
print(list[1]); //Print: 2
// 列表声明和初始化的其他方式
List<String> cities = <String>["New York", "Mumbai", "Tokyo"];
// 创建一个编译时常量的列表
const constantCities = const ["New York", "Mumbai", "Tokyo"];
```

### Maps
<!--rehype:wrap-class=row-span-2-->

```dart
// 映射是关联键和值的对象
var person = Map<String, String>();
// 要初始化地图，请执行以下操作：
person['firstName'] = 'Nicola';
person['lastName'] = 'Tesla';
print(person);
// 打印: {firstName:Nicola, lastName:Tesla}
print(person['lastName']);
// 打印: Tesla

var nobleGases = {
  // Key: Value
  2: 'helium',
  10: 'neon',
  18: 'argon',
};
```

### Sets
<!--rehype:wrap-class=col-span-2-->

```dart
// Dart 中的集合是唯一项的无序集合
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
// 创建一个空集
var names = <String>{};
Set<String> names = {}; // 这也有效
//var names = {}; // 创建地图，而不是集合
```

函数
------

### 函数示例

```dart
// dart 中的函数是对象并且有一个类型
int add(int a, int b){
    return a+b;
}
// 函数可以分配给变量
int sum = add(2,3); // 回报：5
// 可以作为参数传递给其他函数
int totalSum = add(2, add(2,3)); // 返回：7
```

### 箭头函数 (=>)

```dart
// 只包含一个表达式的函数，您可以使用简写语法
bool isFav(Product product) => favProductsList.contains(product);
```
<!--rehype:className=wrap-text-->

### Anonymous (lambda) functions

```dart
// 没有名字的小单行函数
int add(a,b) => a+b;
// lambda 函数大多作为参数传递给其他函数
const list = [
  'apples', 'bananas', 'oranges'
];

list.forEach(
  (item) =>
    print('${list.indexOf(item)}: $item')
);
// 打印: 0: apples 1: bananas 2: oranges
```
<!--rehype:className=wrap-text-->

### 扩展函数 (Extension)

```dart
//extension 定义扩展名称 on 扩展类
extension StringExtension on String {
  //扩展方法
  String capitalize() {
    if (isEmpty) {
      return this;
    }
    // 将字符串的首字母大写
    String topStr = this[0].toUpperCase();

    return '${topStr}${substring(1)}';
  }
}

void main(List<String> args) {
  print("apple".capitalize());
  // Print: Apple
  print("苹果apple".capitalize());
  // Print: 苹果apple
}

```

在不修改 String 类的前提下为其新增了 capitalize 方法
<!--rehype:className=wrap-text-->

### 运算符重载 (Extension)
<!--rehype:wrap-class=col-span-2-->
```dart
class Money {
  final num amount;
  Money({required this.amount});
}

// 利用扩展函数特性 
extension MoneyOperatorExtension<T> on Money {
  // operator 重载运算符
  Money operator +(Money elements) {
    Money newMoney = Money(amount: this.amount + elements.amount);
    return newMoney;
  }
}

void main(List<String> args) {
  // 怎么样？两个类加起来了
  Money appleMoney = Money(amount: 10.0);
  Money cardMoney = Money(amount: 6.0);
  Money allMoney = cardMoney + appleMoney;
  print(allMoney.amount);
  //Print: 16.0
}

```

类和对象
----------

### 类 Class

```dart
class Cat {
    String name;
    // 方法
    void voice(){
        print("Meow");
    }
}
```

### 对象 Object

```dart
// 类的实例
// 在 myCat 下面是 Cat 类的对象
void main(){
    Cat myCat = Cat();
    myCat.name = "Kitty";
    myCat.voice(); // 打印: Meow
}
```

### 构造函数

```dart
class Cat {
    String name;
    Cat(this.name);
}
void main(){
    Cat myCat = Cat("Kitty");
    print(myCat.name); // 打印: Kitty
}
```

### 抽象类

```dart
// 抽象类——不能实例化的类
// 这个类被声明为抽象的，因此不能被实例化
abstract class AbstractContainer {
  // 定义构造函数、字段、方法...
  void updateChildren(); // 抽象方法
}
```

### Getters Setters

```dart
// 提供对对象属性的读写访问
class Cat {
    String name;
    // getter
    String get catName {
        return name;
    }
    // setter
    void set catName(String name){
        this.name = name;
    }
}
```

隐式接口
------------

### 一个基本的界面
<!--rehype:wrap-class=col-span-2-->

```dart
// 一个人。隐式接口包含 greet()。
class Person {
  // 在接口中，但仅在此库中可见。
  final String _name;
  // 不在接口中，因为这是一个构造函数。
  Person(this._name);
  // 在接口中
  String greet(String who) => 'Hello, $who. I am $_name.';
}
// Person 接口的实现。
class Impostor implements Person {
  String get _name => '';
  String greet(String who) => 'Hi $who. Do you know who I am?';
}
String greetBob(Person person) => person.greet('Bob');
void main() {
  print(greetBob(Person('Kathy')));
  // 打印: Hello, Bob. I am Kathy.
  print(greetBob(Impostor()));
  // 打印: Hi Bob. Do you know who I am?
}
```

### 扩展类

```dart
class Phone {
    void use(){
        _call();
        _sendMessage();
    }
}
// 使用 extends 创建子类
class SmartPhone extends Phone {
    void use(){
        // 使用 super 来引用超类
        super.use();
        _takePhotos();
        _playGames();
    }
}
```

枚举
-----

### 定义枚举

```dart
enum Color { red, green, blue }
```

使用枚举，像访问任何其他静态变量一样访问枚举值：

```dart
final favoriteColor = Color.blue;
if (favoriteColor == Color.blue) {
  print('Your favorite color is blue!');
}
```

枚举中的每个值都有一个索引获取器，它返回枚举声明中值从零开始的位置。 例如，第一个值的索引为 0，第二个值的索引为 1

```dart
assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);
```

要获取所有枚举值的列表，请使用枚举的值常量

```dart
List<Color> colors = Color.values;
assert(colors[2] == Color.blue);
```

您可以在 switch 语句中使用枚举，如果您没有处理枚举的所有值，您将收到警告：

```dart
var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('Red as roses!');
    break;
  case Color.green:
    print('Green as grass!');
    break;
  default: // 没有这个，你会看到一个警告
    print(aColor); // 'Color.blue'
}
```

如果您需要访问枚举值的名称，例如 `Color.blue` 中的“blue”，请使用 `.name` 属性：

```dart
print(Color.blue.name); // 'blue'
```

### 枚举示例
<!--rehype:wrap-class=col-span-2-->

声明了一个具有多个实例、实例变量、一个 `getter` 和一个已实现接口的增强型枚举

```dart
// 简单定义一个枚举类型
enum PlanetType { terrestrial, gas, ice }

// 定义一个行星复杂的枚举类型
enum Planet {
  mercury(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  venus(planetType: PlanetType.terrestrial, moons: 0, hasRings: false),
  
  uranus(planetType: PlanetType.ice, moons: 27, hasRings: true),
  neptune(planetType: PlanetType.ice, moons: 14, hasRings: true);

  // 定义一个构造函数
  const Planet({required this.planetType, required this.moons, required this.hasRings});

  // 声明枚举类型中的变量
  final PlanetType planetType;
  final int moons;
  final bool hasRings;

  // 实现枚举类型中的get 方法
  bool get isGiant =>
    planetType == PlanetType.gas || planetType == PlanetType.ice;
}

// 使用枚举类型
void main()
{
  final yourPlanet = Planet.mercury;

  if (!yourPlanet.isGiant) {
    print('Your planet is not a "giant planet".');
  }
}
```

Mixin
-----

### 定义Mixin
<!--rehype:wrap-class=col-span-2-->
`Dart`中类只能单继承，使用`Mixin`可以实现多个继承，复用多个类中代码的方法。

```dart
// 定义Mixin
mixin Piloted {
  int astronauts = 1;

  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}
```

使用`with`关键字并在其后跟上`Mixin类`的名字来使用

```dart
// 使用with将Piloted混入
class PilotedCraft extends Spacecraft with Piloted {
  // ···
}
```

支持混入多个Mixin，如果出现相同的方法后混入的Mixin会覆盖前面的

```dart
class Musician extends Performer with Musical {
  // ···
}

// 混入多个Mixin
class Maestro extends Person with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
```

使用关键字`on`来指定哪些类可以使用该Mixin，比如有Mixin类`MusicalPerformer`，但是`MusicalPerformer`只能被`Musician`类使用，则可以这样定义`MusicalPerformer`：

```dart
class Musician {
  // ...
}
// 现在MusicalPerformer 只能在 Musican及其子类中使用
mixin MusicalPerformer on Musician {
  // ...
}
class SingerDancer extends Musician with MusicalPerformer {
  // ...
}
```

异常
-----

### Throw

```dart
// 抛出 throws 或引发 raises 和异常 exception
throw IntegerDivisionByZeroException();
// 你也可以抛出任意对象
throw "Product out of stock!";
```

### Catch

```dart
try {
    int c = 3/0;
    print(c);
} on IntegerDivisionByZeroException {
    // 一个特定的异常
    print('Can not divide integer by 0.')
} on Exception catch (e) {
    // 任何其他异常情况
    print('Unknown exception: $e');
} catch (e) {
    // 没有指定类型，处理所有
    print('Something really unknown: $e');
}
```

### Finally

```dart
// 确保某些代码无论是否抛出异常都能运行
try {
  cookFood();
} catch (e) {
  print('Error: $e'); // 先处理异常
} finally {
  cleanKitchen();     // 然后清理
}
```

Futures
------------

### Async Await

```dart
// 异步函数：它们在设置可能耗时的操作后返回
// async 和 await 关键字支持异步编程
Future<String> login() {
  String userName="Temidjoy";
  return
    Future.delayed(
      Duration(seconds: 4), () => userName
    );
}
// 异步
main() async {
  print('Authenticating please wait...');
  print(await userName());
}
```

各种各样的
------------

### Null 和 Null 感知
<!--rehype:wrap-class=col-span-2-->

```dart
int x; // 任何对象的初始值为 null
// ?? 空感知运算符
x ??=6;   // ??= 赋值运算符，仅当变量当前为 null 时才为其赋值
print(x); // 打印: 6
x ??=3;
print(x); // 打印: 6 - 结果仍然是 6
print(null ?? 10); // 打印: 10。如果不为空，则显示左侧的值，否则返回右侧的值
```

### 三元运算符

```dart
// 条件 ? 条件如果为真 : 条件如果为假
bool isAvailable;
isAvailable ? orderproduct() : addToFavourite();
```
<!--rehype:className=wrap-text-->

### 条件属性访问
<!--rehype:wrap-class=col-span-2-->

```dart
userObject?.userName
// 上面的代码片段等效于以下代码：
(userObject != null) ? userObject.userName : null
// 您可以将 ? 的多种用途链接起来。一起在一个表达式中
userObject?.userName?.toString()
// 如果 userObject 或 userObject.userName 为 null，则前面的代码返回 null 并且从不调用 toString()
```

### 扩展运算符 (...)

```dart
// 将多个值插入到集合中
var list = [1, 2, 3];
var list2 = [0, ...list];
print(list2.length); // 打印: 4
```

### enum
<!--rehype:wrap-class=col-span-2 row-span-2-->

定义：enum（"enumeration"的缩写）是一种特殊的数据类型，可使变量成为一组预定义的常量。枚举用于定义只能从一小组可能值中选择一个的变量。通过为这些值集提供有意义的名称，枚举有助于提高代码的可读性，减少出错率。

```dart
// 定义枚举类型
enum TrafficLight {
  red,
  yellow,
  green
}
// 根据交通灯状态打印消息的函数
void printTrafficLightMessage(TrafficLight light) {
  switch (light) {
    case TrafficLight.red:
      print('Stop!');
      break;
    case TrafficLight.yellow:
      print('Get ready...');
      break;
    case TrafficLight.green:
      print('Go!');
      break;
  }
}
void main() {
  // 枚举类型的示例用法
  TrafficLight currentLight = TrafficLight.green;
  // 打印当前交通灯状态的消息
  printTrafficLightMessage(currentLight);
}
```

### 级联符号 (..)

```dart
// 允许您对同一对象进行一系列操作
// 而不是这样做
var user = User();
user.name = "Nicola";
user.email = "nicola@g.c";
user.age = 24;
// 你可以这样做
var user = User()
  ..name = "Nicola"
  ..email = "nicola@g.c"
  ..age = 24;
```

### 延迟初始化

```dart
// token 类型非空，但是不用立即赋值
late String token;

void main(List<String> args) {
  /// print(token);
  /// 字段 "token "尚未初始化
  /// 在初始化前调用就会报错
  token = "tokenContent";
  print(token);
}
```

另见
----

- [Dart 官方文档](https://dart.dev/) _(dart.dev)_
