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

### 注释

```cs
// 单行注释

/* 
 * 多行
 * 注释 
 */

// TODO：向IDE中的任务列表添加注释（VS、Rider都支持）

/// XML 单行注释，用于文档

/**
 * XML 多行注释，
 *  用于文档 
 */
```

### 字符串

```cs
string first = "John";
string last = "Doe";
// 字符串连接
string name = first + " " + last;
Console.WriteLine(name); // => John Doe
```

查看: [C#字符串](#c-字符串)

### 用户输入

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

### 数组

```cs
char[] chars = new char[10];
chars[0] = 'a';
chars[1] = 'b';
string[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
bool[] answers = {true, false};
```

### 循环

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

C# 数据类型
---------------------

### 原始数据类型
<!--rehype:wrap-class=col-span-2-->

| 关键字 | 名称         | System 别名 | 占用空间（Byte） | 数据范围                                 |
| ------ | ------------ | ----------- | ---------- | ---------------------------------------- |
| bool   | 布尔型       | Boolean     | 1          | true/false                               |
| sbyte  | 有符号字节型 | SByte       | 1          | -128 ~ 127                               |
| byte   | 字节型       | Byte        | 1          | 0 ~ 255                                  |
| short  | 短整型       | Int16       | 2          | -32,768 ~ 32,767                         |
| ushort | 无符号短整型 | UInt16      | 2          | 0 ~ 65,535                               |
| int    | 整型         | Int32       | 4          | -2,147,483,648 ~ 2,147,483,647           |
| uint   | 无符号整型   | UInt32      | 4          | 0 ~ 4,294,967,295                        |
| long   | 长整型       | Int64       | 8          | -2^63 ~ 2^63-1                           |
| ulong  | 无符号长整型 | UInt64      | 8          | 0 ~ 2^64-1                               |
| char   | 字符型       | Char        | 8          | UTF-16 所编码的字符                      |
| float  | 单精度浮点型 | Single      | 4          | ±1.5x10^45 ~ ±3.4x10^38                  |
| double | 双精度浮点型 | Double      | 8          | ±5.0x10^-324 ~ ±1.7x10^308               |
| nint   | 指针型       | IntPtr      | 与指针相同 | 与指针相同（受操作系统和处理器位宽影响） |
| nuint | 无符号指针型 | UIntPtr     | 与指针相同 | 与指针相同（受操作系统和处理器位宽影响） |
<!--rehype:className=show-header-->

### 基本数据类型

| 关键字                           | 名称         | System 别名 | 说明                                                               |
| -------------------------------- | ------------ | ----------- | ------------------------------------------------------------------ |
| （除指针型外的全部原始数据类型） |              |             | 原始数据类型都是值类型，基本数据类型包含部分本质上是引用的数据类型 |
| string                           | 字符串       | String      | 可变长度                                                           |
| decimal                          | 十进制浮点数 | Decimal     | 适合处理货币等计算，16字节长，不遵循 IEEE 754 关于浮点数的规则     |
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

### 字符串操作

```cs
//字符串分割
string Name = "字A符A串A分A割";
string[] Names=Name.Split(new char[] { 'A' });
//会以A为媒介把字符串分成若干份
for (int i = 0; i < Names.Length; i++)
{
    Console.Write(Names[i]);
}
//-----------------------------------
//字符串截取
string Str = "字符串截取";
Str = Str.Substring(2, 1);
Console.WriteLine(Str);
//输出结果“串”，意为从第二个下标开始截取一位字符
//-----------------------------------
//字符串替换
string Rep = "字符1替换";
Rep = Rep.Replace("1", "串");
Console.WriteLine(Rep);
//会把字符中的 “1”替换成“串”
```

### 逻辑运算
<!--rehype:wrap-class=col-span-2-->

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
true | true | true | true | false | false
true | false | false | true | true | false
true | null | null | true | null | false
false | true | false | true | true | true
false | false | false | false | false | true
false | null | false | null | null | true
null | true | null | true | null | null
null | false | false | null | null | null
null | null | null | null | null | null
<!--rehype:className=show-header-->

杂项
-----------

### 常用 .NET 概念
<!--rehype:wrap-class=col-span-3-->

概念 | 中文名 | 定义
:- | -|--
Runtime | 运行时 | 执行给定的已编译代码单元所需的服务集合
Common Language Runtime (CLR) | 通用语言运行库 | 主要定位、加载和托管 .NET 对象。<br/>CLR 还处理内存管理、应用程序托管、线程协调、执行安全检查和其他低级细节
Managed code | 托管代码 | 在 `.NET` 运行时编译和运行的代码。 C#/F#/VB 就是例子
Unmanaged code | 非托管代码 | 直接编译为机器代码且不能由 .NET 运行时直接托管的代码。<br/>不包含空闲内存管理、垃圾收集等。从 C/C++ 创建的 DLL 就是示例
<!--rehype:className=show-header-->
