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
string site = "quickref.me";
var num = 999;
var str = "999";
var bo = false;
```

### 原始数据类型

数据类型 | 尺寸 | 范围
:- | - | -
| `int`     | 4 bytes          | -2^31^ ^to^ 2^31^-1     |
| `long`    | 8 bytes          | -2^63^ ^to^ 2^63^-1     |
| `float`   | 4 bytes          | 6 ^to^ 7 decimal digits   |
| `double`  | 8 bytes          | 15 decimal digits       |
| `decimal` | 16 bytes         | 28 ^to^ 29 decimal digits |
| `char`    | 2 bytes          | 0 ^to^ 65535            |
| `bool`    | 1 bit            | true / false            |
| `string`  | 2 bytes per char | _N/A_                   |
<!--rehype:className=show-header-->

### 注释

```cs
// 单行注释
/* 多行
   注释 */
// TODO：向 Visual Studio 中的任务列表添加注释
/// 用于文档的单行注释
/** 多行 注释 
    用于文档 **/
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
