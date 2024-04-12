
C# 备忘清单
===

提供基本语法和方法的 C# 快速参考备忘单

入门
--------

### Hello.cs

```cs
class Hello {
  // main method
  static void Main(string[] args)
  {
    // 输出: Hello, world!
    Console.WriteLine("Hello, world!");
  }
}
```

编译运行（确保在项目目录下）

```shell
$ dotnet run
Hello, world!
```

### 命名空间

```cs
//使用时 using 命名名称
using Test;
//创建：
namespace Test{
  class Test_className{
    // main方法是程序的主入口
    public void Myclass() {
      console.writeline("Test")
    }
  }
}
```

### 访问修饰符
<!--rehype:wrap-class=row-span-2-->

| 声明的可访问性     | 含义     |
|-----|----------------------|
| `public`             | 访问不受限制 |
| `protected`          | 访问限于包含类或派生自包含类的类型 (该类内部和继承类中可以访问)   |
| `internal`           | 访问限于当前程序集          |
| `protected internal` | 访问限于当前程序集或派生自包含类的类型         |
| `private`            | 访问限于包含类              |
| `private protected`  | 访问限于包含类或当前程序集中派生自包含类的类型,自 C# 7.2 之后可用 |
<!--rehype:className=style-list-->

### 字符串

```cs
string first = "John";
string last = "Doe";
// 字符串连接
string name = first + " " + last;
Console.WriteLine(name); // => John Doe
```

查看: [C#字符串](#c-字符串)

### 注释

```cs
// 单行注释

/* 
 * 多行
 * 注释 - 用于文档 
 */

// TODO：
// 向IDE中的任务列表添加注释（VS、Rider都支持）
/// XML 单行注释，用于文档
```

### 用户输入
<!--rehype:wrap-class=col-span-2-->

```cs showLineNumbers
Console.WriteLine("Enter number:");
if(int.TryParse(Console.ReadLine(),out int input))
{
  // 输入验证
  Console.WriteLine($"You entered {input}");
}
```

### 条件判断

```cs
int j = 10;
if (j == 10) {
  Console.WriteLine("I get printed");
} else if (j > 10) {
  Console.WriteLine("I don't");
} else {
  Console.WriteLine("I also don't");
}
```

### 变量

```cs
int intNum = 9;
long longNum = 9999999;
float floatNum = 9.99F;
double doubleNum = 99.999;
decimal decimalNum = 99.9999M;
char letter = 'D';
bool @bool = true;
string site = "jaywcjlove.github.io";
var num = 999;
var str = "999";
var bo = false;
```

### 循环
<!--rehype:wrap-class=col-span-2 row-span-2-->

```cs
int[] numbers = {1, 2, 3, 4, 5};
for(int i = 0; i < numbers.Length; i++) {
  Console.WriteLine(numbers[i]);
}
```

---

```cs
foreach(int num in numbers) {
  Console.WriteLine(num);
}
```

---

```cs
while(true)
{
   Console.WriteLine("只要给定的条件为真，while 循环语句会重复执行");
}
```

---

```cs
do
{
   Console.WriteLine("与 while 类似，do...while 会确保至少执行一次循环。");
} while( true );
```

### 数组

```cs
char[] chars = new char[10];
chars[0] = 'a';
chars[1] = 'b';
string[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
bool[] answers = {true, false};
```

C# 数据类型
---------------------

### 原始数据类型
<!--rehype:wrap-class=col-span-2-->

| 关键字 | 名称         | System 别名 | 占用空间（Byte） | 数据范围                                 |
| ------ | ------------ | ----------- | ---------- | ---------------------------------------- |
| `bool`   | 布尔型       | `Boolean`     | 1          | true/false                               |
| `sbyte`  | 有符号字节型 | `SByte`       | 1          | -128 ~ 127                               |
| `byte`   | 字节型       | `Byte`        | 1          | 0 ~ 255                                  |
| `short`  | 短整型       | `Int16`       | 2          | -32,768 ~ 32,767                         |
| `ushort` | 无符号短整型 | `UInt16`      | 2          | 0 ~ 65,535                               |
| `int`    | 整型         | `Int32`       | 4          | -2,147,483,648 ~ 2,147,483,647           |
| `uint`   | 无符号整型   | `UInt32`      | 4          | 0 ~ 4,294,967,295                        |
| `long`   | 长整型       | `Int64`       | 8          | -2^63 ~ 2^63-1                           |
| `ulong`  | 无符号长整型 | `UInt64`      | 8          | 0 ~ 2^64-1                               |
| `char`   | 字符型       | `Char`        | 8          | UTF-16 所编码的字符                      |
| `float`  | 单精度浮点型 | `Single`      | 4          | ±1.5x10^45 ~ ±3.4x10^38                  |
| `double` | 双精度浮点型 | `Double`      | 8          | ±5.0x10^-324 ~ ±1.7x10^308               |
| `nint`   | 指针型       | `IntPtr`      | 与指针相同 | 与指针相同（受操作系统和处理器位宽影响） |
| `nuint` | 无符号指针型 | `UIntPtr`     | 与指针相同 | 与指针相同（受操作系统和处理器位宽影响） |
<!--rehype:className=show-header-->

### 基本数据类型

关键字 | 名称 | System 别名 | 说明
:------ | ------ | ------ | ------
(除指针型外的全部原始数据类型) | - | - | 原始数据类型都是值类型，基本数据类型包含部分本质上是引用的数据类型
`string` | 字符串 | `String` | 可变长度
`decimal` | 十进制浮点数 | `Decimal`     | 适合处理货币等计算，16字节长，不遵循 IEEE 754 关于浮点数的规则
<!--rehype:className=show-header-->

C# 字符串
----------------

### 字符串连接

```cs
string first = "John";
string last = "Doe";
string name = first + " " + last;
Console.WriteLine(name); // => John Doe
```

### 字符串插值

```cs
string first = "John";
string last = "Doe";
string name = $"{first} {last}";
Console.WriteLine(name); // => John Doe
```

### 字符串成员
<!--rehype:wrap-class=row-span-2-->

成员 | 说明
:- | -
`Length`    | 返回字符串长度的属性
`Compare()`   | 比较两个字符串的静态方法
`Contains()`  | 确定字符串是否包含特定的子字符串
`Equals()`    | 确定两个字符串是否具有相同的字符数据
`Format()`    | 通过 {0} 表示法和使用其他原语格式化字符串
`Trim()`      | 从尾随和前导字符中删除特定字符的所有实例。 默认删除前导和尾随空格
`Split()`     | 删除提供的字符并从两侧的剩余字符中创建一个数组
<!--rehype:className=show-header-->

### 逐字字符串

```cs showLineNumbers
string longString = @"I can type any characters in here !#@$%^&*()__+ '' \n \t except double quotes and I will be taken literally. I even work with multiple lines.";
```
<!--rehype:className=wrap-text-->

### 成员示例

```cs
// 使用 System.String 的属性
string lengthOfString = "How long?";
lengthOfString.Length           // => 9
// 使用 System.String 的方法
lengthOfString.Contains("How"); // => true
```

### 频繁字符串拼接

```cs
var sb = new StringBuilder();
for (int i = 0; i < 100; i++)
{
    sb.Append(i.ToString());
}
Console.WriteLine(sb.ToString());
// => 123456789....
```

对于频繁拼接字符串的场景（如：成百上千次循环），使用 `System.Text.StringBuilder` 提升性能

### 原始字符串文本
<!--rehype:wrap-class=col-span-2-->

```cs
// C#11 语法, 至少3个双引号(""")开头和结尾，内容可以输入任何原始字符
// 单行: 左引号，右引号，内容 三者同行
string singleLine = """Content begin "Hello World!" end.""";

// 多行：左引号，右引号各一行，内容需与右引号缩进对齐
string multiLine = """
    Content begin "Hello World!" /\n<>"" end.
    """;
Console.WriteLine(multiLine); // => Content begin "Hello World!" /\n<>"" end.
```

### 字符串判空
<!--rehype:wrap-class=col-span-2-->

```cs
string name; //空引用
string gender = ""; //空值

// 使用 string.IsNullOrEmpty(字符串) 方法，返回 bool 型
Console.WriteLine(string.IsNullOrEmpty(name)); //输出 true
Console.WriteLine(string.IsNullOrEmpty(gender)); // 输出 true
```

### 字符串截取

```cs
string Str = "字符串截取";
Str = Str.Substring(2, 1);
Console.WriteLine(Str);
// 输出结果“串”，意为从第二个下标开始截取一位字符
```

### 字符串分割
<!--rehype:wrap-class=col-span-2-->

```cs
string Name = "字A符A串A分A割";
string[] Names=Name.Split(new char[] { 'A' });
// 会以A为媒介把字符串分成若干份
for (int i = 0; i < Names.Length; i++)
{
    Console.Write(Names[i]);
}
```

### 字符串替换

```cs
string Rep = "字符1替换";
Rep = Rep.Replace("1", "串");
Console.WriteLine(Rep);
// 会把字符中的 “1”替换成“串”
```

运算符和表达式
--------

### 逻辑运算
<!--rehype:wrap-class=row-span-2-->

```cs
//或运算, 与运算, 非运算
bool A = true;
bool B = false;
bool Or = A || B; // = A | B
bool And = A && B; // = A & B
bool Not = !A;
// ||,&& 与 |,& 分别为逻辑运算和条件逻辑运算, 两者的区别在于, 
// 前者仅在必要时才会计算右侧的值, 后者始终计算右侧的值. 例如:
bool C = false;
bool D = true;
bool CalcD() {
  D = !D;
  return D;
}
bool E = C && CalcD(); // C: false, D: false, E: false
bool F = C & CalcD(); // C:false, D: true, F: false
// 两种运算方法稍有不同, 计算结果始终相同, 但第二种可能造成其他影响.
//异或运算
bool Xor = A ^ B;
```

C# 中的逻辑运算支持可空布尔类型运算. 注意条件逻辑运算不支持可空布尔类型.

x |  y | x & y | x \| y | x ^ y | ! x
:- | - | --- | --- | --- | --
<code>true</code> | <code>true</code> | <code>true</code> | <code>true</code> | false | false
<code>true</code> | false | false | <code>true</code> | <code>true</code> | false
<code>true</code> | <pur>null</pur> | <pur>null</pur> | <code>true</code> | <pur>null</pur> | false
false | <code>true</code> | false | <code>true</code> | <code>true</code> | <code>true</code>
false | false | false | false | false | <code>true</code>
false | <pur>null</pur> | false | <pur>null</pur> | <pur>null</pur> | <code>true</code>
<pur>null</pur> | <code>true</code> | <pur>null</pur> | <code>true</code> | <pur>null</pur> | <pur>null</pur>
<pur>null</pur> | false | false | <pur>null</pur> | <pur>null</pur> | <pur>null</pur>
<pur>null</pur> | <pur>null</pur> | <pur>null</pur> | <pur>null</pur> | <pur>null</pur> | <pur>null</pur>
<!--rehype:className=show-header-->

### 关系运算符
<!--rehype:wrap-class=col-span-2-->

C# 支持下表中的所有关系运算符。假设变量 A 的值为 1，变量 B 的值为 2，则：

| 运算符 | 描述                                                           | 实例              |
| :----- | -------------------------------------------------------------- | ----------------- |
| ==     | 检查两个操作数的值是否相等，如果相等则条件为真。               | (A == B) 不为真。 |
| !=     | 检查两个操作数的值是否相等，如果不相等则条件为真。             | (A != B) 为真。   |
| >      | 检查左操作数的值是否大于右操作数的值，如果是则条件为真。       | (A > B) 不为真。  |
| <      | 检查左操作数的值是否小于右操作数的值，如果是则条件为真。       | (A < B) 为真。    |
| >=     | 检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。 | (A >= B) 不为真。 |
| <=     | 检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。 | (A <= B) 为真。   |
<!--rehype:className=show-header-->

### 算术运算符
<!--rehype:wrap-class=col-span-2-->

C# 支持下表中的所有算术运算符。假设变量 A 的值为 10，变量 B 的值为 20，则：

| 运算符 | 描述                             | 实例              |
| :----- | -------------------------------- | ----------------- |
| +      | 把两个操作数相加                 | A + B 将得到 30   |
| -      | 从第一个操作数中减去第二个操作数 | A - B 将得到 -10  |
| \*     | 把两个操作数相乘                 | A \* B 将得到 200 |
| /      | 分子除以分母                     | B / A 将得到 2    |
| %      | 取模运算符，整除后的余数         | B % A 将得到 0    |
| ++     | 自增运算符，整数值增加 1         | A++ 将得到 11     |
| --     | 自减运算符，整数值减少 1         | A-- 将得到 9      |
<!--rehype:className=show-header-->

### 运算符优先级
<!--rehype:wrap-class=col-span-2 row-span-3-->

下表将按运算符优先级从高到低列出各个运算符，具有较高优先级的运算符出现在表格的上面，具有较低优先级的运算符出现在表格的下面。在表达式中，较高优先级的运算符会优先被计算。

| 类别       | 运算符                             | 结合性   |
| :--------- | ---------------------------------- | -------- |
| 后缀       | () [] -> . ++ - -                  | 从左到右 |
| 一元       | + - ! ~ ++ - - (type)\* & sizeof   | 从右到左 |
| 乘除       | \* / %                             | 从左到右 |
| 加减       | + -                                | 从左到右 |
| 移位       | << >>                              | 从左到右 |
| 关系       | < <= > >=                          | 从左到右 |
| 相等       | == !=                              | 从左到右 |
| 位与 AND   | &                                  | 从左到右 |
| 位异或 XOR | ^                                  | 从左到右 |
| 位或 OR    | \|                                 | 从左到右 |
| 逻辑与 AND | &&                                 | 从左到右 |
| 逻辑或 OR  | \|\|                               | 从左到右 |
| 条件       | ?:                                 | 从右到左 |
| 赋值       | = += -= \*= /= %=>>= <<= &= ^= \|= | 从右到左 |
| 逗号       | ,                                  | 从左到右 |
<!--rehype:className=show-header-->

运算符的优先级确定表达式中项的组合。这会影响到一个表达式如何计算。某些运算符比其他运算符有更高的优先级，例如，乘除运算符具有比加减运算符更高的优先级。

### 逻辑非运算符

```cs
bool passed = false;
Console.WriteLine(!passed); // 输出: True
Console.WriteLine(!true);   // 输出: False
```

### 逻辑“与”运算符 &

```cs
bool SecondOperand()
{
    Console.WriteLine("计算第二个操作数");
    return true;
}

bool a = false & SecondOperand();
Console.WriteLine(a);
// 输出:
// 计算第二个操作数
// False

bool b = true & SecondOperand();
Console.WriteLine(b);
// 输出:
// 计算第二个操作数
// True
```

### 逻辑异或运算符 ^

```cs
Console.WriteLine(true ^ true);  // 输出: False
Console.WriteLine(true ^ false); // 输出: True
Console.WriteLine(false ^ true); // 输出: True
Console.WriteLine(false ^ false);// 输出: False
```

### 逻辑或运算符 |

```cs
bool SecondOperand()
{
    Console.WriteLine("计算第二个操作数");
    return true;
}

bool a = true | SecondOperand();
Console.WriteLine(a);
// 输出:
// 计算第二个操作数
// True

bool b = false | SecondOperand();
Console.WriteLine(b);
// 输出:
// 计算第二个操作数
// True
```

### 条件逻辑“与”运算符 &&

```cs
bool SecondOperand()
{
    Console.WriteLine("计算第二个操作数");
    return true;
}

bool a = false && SecondOperand();
Console.WriteLine(a);
// 输出:
// False

bool b = true && SecondOperand();
Console.WriteLine(b);
// 输出:
// 计算第二个操作数
// True
```

### 条件逻辑或运算符 ||

```cs
bool SecondOperand()
{
    Console.WriteLine("计算第二个操作数");
    return true;
}

bool a = true || SecondOperand();
Console.WriteLine(a);
// 输出:
// True

bool b = false || SecondOperand();
Console.WriteLine(b);
// 输出:
// 计算第二个操作数
// True
```

类
---

### 成员变量

```cs
public class MyClass
{
    // 私有变量
    private int myVariable;
    // 公有属性
    public string MyProperty { get; set; }
}
```

### 静态成员

```cs
public class MyClass
{
    public static int StaticVariable = 10;
    public static void StaticMethod()
    {
        // 静态方法体
    }
}
```

### 构造函数
<!--rehype:wrap-class=row-span-2-->

```cs
public class MyClass
{
    // 默认构造函数
    public MyClass() 
    {
        // 初始化代码
    }

    // 自定义构造函数
    public MyClass(int value) 
    {
        // 使用传入的值初始化
    }

    // 析构函数
    ~MyClass() {
        // Destructor body.
    }

}
```

### 方法

```cs
public class MyClass
{
    // 无返回值方法
    public void MyMethod()
    {
        // 方法体
    }
    // 有返回值方法
    public int Add(int a, int b)
    {
        return a + b;
    }
}
```

### 属性

```cs
public class MyClass
{
    private string myField;
    
    public string MyProperty
    {
        get { return myField; }
        set { myField = value; }
    }
}
```

### 接口

```cs
public interface IMyInterface
{
    void MyMethod(); // 接口方法声明
}

public class MyClass : IMyInterface
{
    public void MyMethod() // 实现接口方法
    {
        // 实现代码
    }
}
```

### 继承
<!--rehype:wrap-class=row-span-3-->

注意

- 在类定义中，只能有一个基类
- 继承了一个抽象类，必须实现所继承的所有抽象成员(除非派生类也是抽象的)
- 编译器不允许派生类的可访问性高于基类
- 内部类可以继承于一个公共基类，但公共类不能继承于一个内部基类

因此，下述代码是合法的：

```cs
public class MyBase
{
    // Class members.
}
internal class MyClass : MyBase
{
    // Class members.
}
```

下述代码不能编译:

```cs
internal class MyBase
{
    // Class members.
}
public class MyClass : MyBase
{
    // Class members.
}
```

如果没有使用基类，被定义的类就只继承于基类 System.Object(它在 C# 中的别名是 object)。在继承层次结构中，所有类的根都是 `System.Object`

### 访问修饰符
<!--rehype:wrap-class=row-span-2-->

:-- | :--
:-- | :--
`public` | 公有，可从任何位置访问
`private` | 私有，只能在当前类中访问
`protected` | 受保护，只能在当前类和派生类中访问
`internal` | 内部，只能在同一程序集中访问
`protected internal` | 受保护的内部，可以在同一程序集中的任何地方访问，以及派生类中
`private protected` | 私有保护，只能在同一程序集中的派生类中访问
<!--rehype:className=style-list-->

### 字段的特殊修饰符

| :--      | :--                                                          |
| -------- | ------------------------------------------------------------ |
| `readonly` | 表示这个字段只能在执行构造函数的过程中赋值，或由初始化赋值语句赋值 |
| `static`   | 静态字段，必须通过类名来访问，例如：Class.staticField        |
| `const`    | 常量字段，但同时也是静态字段，自带static                     |
<!--rehype:className=left-align-->

### 方法的特殊修饰符
<!--rehype:wrap-class=row-span-2-->

| :--      | :--                                                          |
| -------- | ------------------------------------------------------------ |
| `static`   | 静态方法，只能通过类名来调用方法                             |
| `virtual`  | 方法可以被重写                                               |
| `abstract` | 抽象方法，只用于抽象类                                       |
| `override` | 方法重写了基类的一个方法（如果方法被重写，就必须使用该关键字）。 |
| `extern`   | 方法定义放在其他地方，可以在项目外部提供方法的实际实现代码   |
| `sealed`   | 如果使用了 `override` ，也可以使用 `sealed` 来指定在派生类中不能再对这个方法进行进一步的修改，即这个方法不能被派生类重写 |
<!--rehype:className=left-align-->

### 公共类

```cs
public class MyClass
{
  ...
}
```

添加 `public` 声明为公共类

### 私有类

```cs
private class MyClass
{
  ...
}
```

添加 `public` 声明为公共类

### 命名约定

- 类名使用 PascalCase 格式
- 成员变量和方法名使用 camelCase 格式
- 公有成员和类型名应该使用有意义的名字

### 默认情况(默认情况即为内部类)

```cs
class MyClass 
{
  ...
}
internal class MyCalss
{
  ...
}
```

上面两个类相同，声明为内部（`internal`）类，只能在当前项目中的代码才能访问它

---

- 抽象类与密封类为互斥关系
- 抽象类不能实例化，允许继承
- 可以有抽象成员，密封类不允许继承
- 都可以声明为公共类（public）和内部类（internal）

### 抽象类与密封类

#### 抽象类（abstract）

```cs
public abstract class MyClass
{
  // 普通公共字段
  public string id;
  // 抽象字段
  public abstract string Name { get; }
  // 常量字段
  public const string Description = "常量";
  // 静态字段
  public static string Order = "静态";
}
```

#### 密封类（sealed

```cs
public sealed class MyClass
{
  ...
}
```

## 元组

### 基本使用

不带名称的基本元组创建

```cs
(
    int item1,
    string item2,
    bool item3
) tuple1 = (1, "Hello", true);

Console.WriteLine(
    $"Item1: {tuple1.Item1}, " +
    $"Item2: {tuple1.Item2}, " +
    $"Item3: {tuple1.Item3}"
);
```

带名称的元组创建（C# 7.0及以上版本）

```cs
(
    string FirstName,
    string LastName,
    int Age
) person = ("Alice", "Smith", 30);

Console.WriteLine(
    $"First Name: {person.FirstName}, " +
    $"Last Name: {person.LastName}, " +
    $"Age: {person.Age}"
);
```

### 方法调用与接收

```cs
public (int Id, string Name, double Score) GetStudentInfo()
{
    return (123, "John Doe", 95.5);
}
```

使用

```cs
(
    var id,
    var name,
    var score
) = GetStudentInfo();

Console.WriteLine(
    $"Id: {id}, " +
    $"Name: {name}, " +
    $"Score: {score}"
);
```

### 类中使用元组

```cs
public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public double GPA { get; set; }

    public void Deconstruct(out int id, out string name, out double gpa)
    {
        id = this.Id;
        name = this.Name;
        gpa = this.GPA;
    }
}
```

使用Deconstruct方法创建元组

```cs
Student student = new Student
{
    Id = 1,
    Name = "Jane",
    GPA = 3.8
};

(int id, string name, double gpa) = student;
Console.WriteLine($"Student Id: {id}, Name: {name}, GPA: {gpa}");
```

## 集合

### c#集合

| 集合                                                         | 有序 | 已排序 | 线程安全 | 允许空值 |
| :----------------------------------------------------------- | :--- | :----- | :------- | :------- |
| [List](https://docs.microsoft.com/dotnet/api/system.collections.generic.list-1) | Y    | *N*    | *N*      | 是       |
| [ArrayList](https://docs.microsoft.com/dotnet/api/system.collections.arraylist) (非泛型) | Y    | *N*    | *N*      | 是       |
| [Vector](https://docs.microsoft.com/dotnet/api/system.collections.vector) (非泛型) | N    | *N*    | Y        | 是       |
| [LinkedList](https://docs.microsoft.com/dotnet/api/system.collections.generic.linkedlist-1) | Y    | *N*    | *N*      | 是       |
| [ConcurrentBag](https://docs.microsoft.com/dotnet/api/system.collections.concurrent.concurrentbag-1) | *N*  | *N*    | Y        | 是       |
| [HashSet](https://docs.microsoft.com/dotnet/api/system.collections.generic.hashset-1) | *N*  | *N*    | *N*      | 是       |
| [SortedSet](https://docs.microsoft.com/dotnet/api/system.collections.generic.sortedset-1) | Y    | Y      | *N*      | 是       |
| [ConcurrentDictionary](https://docs.microsoft.com/dotnet/api/system.collections.concurrent.concurrentdictionary-2) | Y    | *N*    | Y        | 是       |
| [Dictionary](https://docs.microsoft.com/dotnet/api/system.collections.generic.dictionary-2) | *N*  | *N*    | *N*      | 是       |
| [SortedDictionary](https://docs.microsoft.com/dotnet/api/system.collections.generic.sorteddictionary-2) | Y    | Y      | *N*      | 是       |
| [Stack](https://docs.microsoft.com/dotnet/api/system.collections.generic.stack-1) | *N*  | *N*    | *N*      | 是       |
| [Queue](https://docs.microsoft.com/dotnet/api/system.collections.generic.queue-1) | *N*  | *N*    | *N*      | 是       |
| [ConcurrentQueue](https://docs.microsoft.com/dotnet/api/system.collections.concurrent.concurrentqueue-1) | *N*  | *N*    | Y        | 是       |
| [ConcurrentStack](https://docs.microsoft.com/dotnet/api/system.collections.concurrent.concurrentstack-1) | *N*  | *N*    | Y        | 是       |
| [HashTable](https://learn.microsoft.com/zh-cn/dotnet/api/system.collections.hashtable?view=net-6.0) | N    | Y      | Y        | 否       |

### List

```cs
// 创建一个整数类型的List
List<int> numbers = new List<int>();

// 增加（Add）
numbers.Add(10);
numbers.Add(20);
//增加30，40两个元素
numbers.AddRange(new[] { 30, 40 });

// 删除（Remove）
if (numbers.Contains(20))
{
    numbers.Remove(20);
}

// 修改（更改特定索引处的元素）
numbers[0] = 50; // 直接替换元素

// 查询（Find/Contains）
bool isPresent = numbers.Contains(50);

// 查找索引
int index = numbers.IndexOf(40);
if (index != -1)
{
    numbers[index] = 45; // 修改找到的元素
}
```

### HashSet

```cs
// 创建一个字符串类型的HashSet
HashSet<string> words = new HashSet<string> { "apple", "banana" };

// 增加（Add）
words.Add("cherry");

// 返回 false，因为"apple"已存在
bool wasAdded = words.Add("apple"); 

// 删除（Remove）
words.Remove("banana");

// 修改 - HashSet不允许直接修改元素
// 需删除后重新添加
if (words.Contains("cherry"))
{
    words.Remove("cherry");
    words.Add("cherries");
}

// 查询（Contains）
bool containsCherries = words.Contains("cherries");
```
<!--rehype:className=wrap-text-->

### ConcurrentBag
<!--rehype:wrap-class=col-span-2-->

```cs
// 创建一个并发安全的整数集合
ConcurrentBag<int> concurrentNumbers = new ConcurrentBag<int>();

// 增加（Add）
concurrentNumbers.Add(1);
concurrentNumbers.Add(2);

// 删除（由于ConcurrentBag没有直接的Remove方法，只能通过迭代并尝试移除）
foreach (var number in concurrentNumbers.ToArray())
{
    concurrentNumbers.TryTake(out _number); // 并发安全地移除一个元素
}
```

修改（无法直接修改，同样需先移除再添加，但由于并发特性，不能保证一定能修改目标元素）。
在并发环境下尤其复杂，此处省略示例

```cs
// 查询（Contains）
bool hasOne = concurrentNumbers.Contains(1);
```

### Stack

```cs
// 创建一个整数栈
Stack<int> stack = new Stack<int>();
stack.Push(1);
stack.Push(2);

// 增加（Push）
stack.Push(3);

// 删除（Pop）并返回栈顶元素
int topNumber = stack.Pop();

// 修改（Stack不支持直接修改元素，需先Pop再Push）
int poppedValue = stack.Pop();
// 替换刚弹出的值
stack.Push(poppedValue * 2); 

// 查询（Peek / Contains） 但不移除栈顶元素
int peekedValue = stack.Peek();
bool hasTwo = stack.Contains(2);
```

### Dictionary
<!--rehype:wrap-class=col-span-2-->

```cs
// 创建一个键值对字典
Dictionary<string, int> scores = new Dictionary<string, int>
{
    { "Alice", 85 },
    { "Bob", 90 }
};

// 增加（Add）
scores.Add("Charlie", 88);

// 删除（Remove）
scores.Remove("Bob");

// 修改（Update）
if (scores.ContainsKey("Alice"))
{
    scores["Alice"] = 90; // 直接替换值
}

// 查询（ContainsKey / GetValueOrDefault）
bool aliceExists = scores.ContainsKey("Alice");
int charlieScore = scores.GetValueOrDefault("Charlie", 0);
```

### Hashtable

```cs
// 创建一个哈希表
Hashtable hashTable = new Hashtable();
hashTable.Add("key1", "value1");
hashTable.Add("key2", "value2");

// 增加（Add）
hashTable.Add("key3", "value3");

// 删除（Remove）
hashTable.Remove("key1");

// 修改（Replace）
object oldValue;
if (hashTable.ContainsKey("key2"))
{
    oldValue = hashTable["key2"];
    hashTable["key2"] = "new_value2";
}

// 查询（Contains / GetValue）
bool hasKey2 = hashTable.ContainsKey("key2");
string valueOfKey2 = (string)hashTable["key2"];
```

LINQ
--------

> C#语言中的LINQ（Language-Integrated Query）是一种强大的查询语言，它提供了一种统一的编程模型，使得数据查询变得更加直观和简洁。

### FROM

<!--rehype:wrap-class=col-span-3-->

> 任何数据源，包括对象集合、数据库、XML等。

### WHERE

<!--rehype:wrap-class=col-span-2&style=background:#e91e63;-->

> 条件查询

```cs
// 示例数据源
List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Age = 25, Grade = "A" },
    new Student { Name = "Bob", Age = 30, Grade = "B" },
    new Student { Name = "Barry", Age = 35, Grade = "C" },
    new Student { Name = "Charlie", Age = 22, Grade = "A" },
    new Student { Name = "David", Age = 21, Grade = "C" },
    new Student { Name = "Damon", Age = 28, Grade = "B" },
    new Student { Name = "Echo", Age = 18, Grade = "C" }
};

// 使用WHERE筛选出成绩为A的学生
var result1 = students.Where(student => student.Grade = "A");

// 使用WHERE筛选出年龄大于20的学生
var result2 = students.Where(student => student.Age > 20);

// 使用WHERE筛选出名字包含'D'的学生
var result3 = students.Where(student => student.Name.Contains("D"));

// 使用WHERE筛选出名字为'Bob'和'Echo'的学生
List<string> nameList = new() { "Bob", "Echo" };
var result4 = students.Where(student => nameList.Contains(student.Name));
```

### GROUPBY

> 分组查询

```cs
// 示例数据源
List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Age = 25, Grade = "A" },
    new Student { Name = "Bob", Age = 30, Grade = "B" },
    new Student { Name = "Barry", Age = 35, Grade = "C" },
    new Student { Name = "Charlie", Age = 22, Grade = "A" },
    new Student { Name = "David", Age = 21, Grade = "C" },
    new Student { Name = "Damon", Age = 28, Grade = "B" },
    new Student { Name = "Echo", Age = 18, Grade = "C" }
};

// 使用GROUP BY按成绩进行分组查询
var groupedByGrade = students.GroupBy(student => student.Grade);
```

<!--rehype:className=wrap-text-->

### SELECT

<!--rehype:wrap-class=col-span-2&style=background:#e91e63;-->

> 结果查询

```cs
// 示例数据源
List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Age = 25, Grade = "A" },
    new Student { Name = "Bob", Age = 30, Grade = "B" },
    new Student { Name = "Barry", Age = 35, Grade = "C" },
    new Student { Name = "Charlie", Age = 22, Grade = "A" },
    new Student { Name = "David", Age = 21, Grade = "C" },
    new Student { Name = "Damon", Age = 28, Grade = "B" },
    new Student { Name = "Echo", Age = 18, Grade = "C" }
};

// 使用SELECT创建一个新的匿名类，并输出为集合，一般配合Where使用
var result1 = students.Select(student => 
  new 
    {
      student.Name,
        student.Age
    });

// 使用SELECT创建一个新的指定类，并输出为集合
var result2 = students.Select(student => new StudentDto()
    {
        StudentName = student.Name,
        StudentAge = student.Age
    });
```

### ORDERBY

> 排序

```cs
// 示例数据源
List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Age = 25, Grade = "A" },
    new Student { Name = "Bob", Age = 30, Grade = "B" },
    new Student { Name = "Barry", Age = 35, Grade = "C" },
    new Student { Name = "Charlie", Age = 22, Grade = "A" },
    new Student { Name = "David", Age = 21, Grade = "C" },
    new Student { Name = "Damon", Age = 28, Grade = "B" },
    new Student { Name = "Echo", Age = 18, Grade = "C" }
};

// 使用LINQ的OrderBy进行排序
var result1 = students.OrderBy(student => student.Age);

// 使用LINQ的OrderByDescending进行降序排序
var result2 = students.OrderByDescending(student => student.Age);
```

<!--rehype:className=wrap-text-->

### JOIN

<!--rehype:wrap-class=col-span-3-->

- `Join`：用于执行内连接操作，它会返回两个数据源中满足连接条件的元素的交集
- `GroupJoin`：用于执行左外连接（left outer join）操作，它会返回左边数据源的所有元素，以及每个元素所匹配的右边数据源的元素组成的集合。(嵌套)

示例数据源

```cs
List<Department> departments = new List<Department>
{
    new Department { ID = 1, Name = "HR" },
    new Department { ID = 2, Name = "IT" }
};
```

示例数据源

```cs
List<Employee> employees = new List<Employee>
{
    new Employee { DepartmentID = 1, Name = "Alice" },
    new Employee { DepartmentID = 2, Name = "Bob" },
    new Employee { DepartmentID = 1, Name = "Charlie" },
    new Employee { DepartmentID = 3, Name = "David" }
};
```

使用 `Join`，将部门和员工相结合，获取部门名称和员工名称的集合

```cs
var joinQuery = departments.Join(employees, 
    department => department.ID, employee => employee.DepartmentID, 
    (department, employee) => new { Department = department.Name, Employee = employee.Name }
);
```

使用 `GroupJoin`，将部门和员工相结合，返回所有的部门，并返回每个部门相关联的员工集合(嵌套)

```cs
var groupJoinQuery = departments.GroupJoin(employees, 
    department => department.ID, employee => employee.DepartmentID, 
    (department, employeeGroup) => new 
        { 
            Department = department.Name, 
            Employees = employeeGroup.Select(e => e.Name).ToList() 
        }
);
```

### 结果转换
<!--rehype:wrap-class=col-span-2&style=background:#e91e63;-->

```cs
// ToList(): 将结果转换为List集合。
List<Student> resultList = result.ToList();

// ToDictionary(): 将结果转换为Dictionary字典。
Dictionary<string, int> resultDictionary = students
    .ToDictionary(student => student.Name, student => student.Age);

// ToArray(): 将结果转换为数组。
Student[] resultArray = result.ToArray();

// First(): 获取结果中的第一个元素。
Student firstStudent = result.First();

// FirstOrDefault(): 获取结果中的第一个元素，如果结果为空则返回默认值。
Student firstStudent = result.FirstOrDefault();
```

### 自定义扩展方法

```cs
public static class CustomExtensions
{
    public static IEnumerable<T> CustomFilter<T>(this IEnumerable<T> source, Func<T, bool> predicate)
    {
        foreach (var item in source)
        {
            if (predicate(item))
            {
                yield return item;
            }
        }
    }
}
// 使用自定义扩展方法
var filteredData = students.CustomFilter(s => s.Age > 20);
```
<!--rehype:className=wrap-text-->

### 示例
<!--rehype:wrap-class=col-span-3&style=background:#e91e63;-->

假设有一个包含学生信息的列表，每个学生有姓名、年龄和成绩。使用LINQ查询来选择年龄大于20岁的学生，然后按照他们的成绩进行分组，并选择每个分组中年龄最小的学生的姓名。

```cs
// 示例数据源
List<Student> students = new List<Student>
{
    new Student { Name = "Alice", Age = 25, Grade = "A" },
    new Student { Name = "Bob", Age = 30, Grade = "B" },
    new Student { Name = "Barry", Age = 35, Grade = "C" },
    new Student { Name = "Charlie", Age = 22, Grade = "A" },
    new Student { Name = "David", Age = 21, Grade = "C" },
    new Student { Name = "Damon", Age = 28, Grade = "B" },
    new Student { Name = "Echo", Age = 18, Grade = "C" }
};
```

使用 `LINQ` 进行查询

```cs
var result = students
    .Where(student => student.Age > 20) // WHERE: 选择年龄大于20的学生
    .GroupBy(student => student.Grade)  // GROUP BY: 按成绩分组
    .Select(group => group.OrderBy(student => student.Age).First().Name) // SELECT: 选择每个分组中年龄最小的学生的姓名
    .ToList(); //转换为List<Student>()
```

输出结果

```cs
["Charlie","Damon","David"]
```

语法糖
----

> 语法糖需要根据 `c#` 版本来确实是否可以使用，一般情况下 `c# 8.0` 及以上的 `C#` 版本都已支持。

### 对象判空及赋值
<!--rehype:wrap-class=col-span-2-->

```cs
// 判断对象是否为空，为空抛出异常
if(obj == null) throw new NullReferenceException();

// 简化的语法糖
obj ?? throw new NullReferenceException();

// 判断 对象为空 的情况下再赋新值
//     对象不为空 不进行赋值
if(obj == null)
{
  obj = new object();
}

// 简化的语法糖
obj ??= new object();
```

### 可空类型判空及赋值

```cs
// 可空类型
int? nums = null;

// 判断值是否为空，并进行不同的赋值
if(nums == null)
{
  result = -1;
} 
else 
{
  result = nums;
}

// 简化的语法糖
int result = nums ?? -1;
```

### 减少空引用

判断数组或 `list` 不能 `null` 且有元素

```cs
if(list != null && list.Count > 0)
```

简化的语法糖当 `list` 为 `null` 时，将直接返回 `false`

```cs
if(list?.Count > 0)
```

同样可运用在赋值时，如果 `obj` 为 `null`，将不会取 `obj.text` 的值，而是将会为 `text` 赋值 `null`

```cs
string text = obj?.text;
```
<!--rehype:className=wrap-text-->

### 判断参数类型并转换类型+校验

- 判断 `value` 是否为 `string` 类型，如果 `value` 是 `string` 类型
- 那么将 `value` 转换为 `string` 类型，并赋值给 `stringValue`
- 再判断 `stringValue` 是否不为 `Null` 或 `空`
<!--rehype:className=style-timeline-->

```cs
if(value is string stringValue && !string.IsNullOrEmpty(stringValue))
```
<!--rehype:className=wrap-text-->

### Switch

```cs
public string GetNums(int num)
{
  // 使用这种方式的switch时，要求返回类型统一
  string str = num switch
  {
    1 => "num的值是1",
    2 => "num的值是2",
    3 => "num的值是3",
    4 => "num的值是4",
    _ => "其他"
  };

  return str;
}
```

### 切片操作

<!--rehype:wrap-class=col-span-2-->

```cs
// **以下所有[]中的数字都代表索引**
// **如果是范围索引，且声明结束索引，那么都将不包含结束索引的值**

// 数组例子
string[] arr = new string[] { "10", "20", "30", "40", "50", "60", "70", "80", "90", "100" };

// 获取最后一个元素
string str = arr[^1];

// 获取前3个元素，从索引0开始 到 索引3(不包含)：["10","20","30"]
// 可省略索引0，从开始 到 索引3(不包含)
// string[] strs = arr[..3];
string[] strs1 = arr[0..3];

// 获取后3个元素，从倒数第3个元素开始 到 最后：["80", "90", "100"]
// 最后一位索引被省略 string[] strs21 = arr[^3..^0];
// ^0 倒数第0个元素是不存在的
string[] strs2 = arr[^3..];

// 指定获取 正向 某一段元素
// 从索引3开始 到 索引7(不包含)：["40", "50", "60", "70"]
string[] strs3 = arr[3..7];

// 指定获取 反向 某一段元素
// 倒数第4个元素开始 到 倒数第2个元素(不包含)：["70","80"]
string[] strs4 = arr[^4..^2];
```

杂项
-----------

### 常用 .NET 概念
<!--rehype:wrap-class=col-span-3-->

概念 | 中文名 | 定义
:- | -|--
`Runtime` | 运行时 | 执行给定的已编译代码单元所需的服务集合
`Common Language Runtime (CLR)` | 通用语言运行库 | 主要定位、加载和托管 .NET 对象。<br/>CLR 还处理内存管理、应用程序托管、线程协调、执行安全检查和其他低级细节
`Managed code` | 托管代码 | 在 `.NET` 运行时编译和运行的代码。 C#/F#/VB 就是例子
`Unmanaged code` | 非托管代码 | 直接编译为机器代码且不能由 .NET 运行时直接托管的代码。<br/>不包含空闲内存管理、垃圾收集等。从 C/C++ 创建的 DLL 就是示例
<!--rehype:className=show-header left-align-->