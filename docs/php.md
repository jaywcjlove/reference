PHP 备忘清单
===

这份 [PHP](https://www.php.net/manual/zh/index.php) 备忘单为快速查找最常用代码的正确语法提供了参考

入门
------

### hello.php

```php
<?php // 以 PHP 开放标签开头
echo "Hello World\n";
print("Hello jaywcjlove.github.io");
?>
```

PHP 运行命令

```shell
$ php hello.php
```

### 变量 Variables

```php
$boolean1 = true;
$boolean2 = True;
$int = 12;
$float = 3.1415926;
unset($float);  // 删除变量
$str1 = "How are you?";
$str2 = 'Fine, thanks';
```

查看: [Types](#php-类型)

### 字符串 Strings

```php
$url = "jaywcjlove.github.io";
echo "I'm learning PHP at $url";
// 连接字符串
echo "I'm learning PHP at " . $url;
$hello = "Hello, ";
$hello .= "World!";
echo $hello;   # => Hello, World!
```

查看: [Strings](#php-字符串)

### 数组 Arrays

```php
$num = [1, 3, 5, 7, 9];
$num[5] = 11;
unset($num[2]);    // 删除变量
print_r($num);     # => 1 3 7 9 11
echo count($num);  # => 5
```

查看: [Arrays](#php-数组)

### 运算符 Operators

```php
$x = 1;
$y = 2;
$sum = $x + $y;
echo $sum;   # => 3
```

查看: [Operators](#php-运算符)

### Include
<!--rehype:wrap-class=row-span-3-->

#### vars.php

```php
<?php // 以 PHP 开放标签开头。
$fruit = 'apple';
echo "I was imported";
return 'Anything you like.';
?>
```

#### test.php

```php
<?php
include 'vars.php';
echo $fruit . "\n";   # => apple
/* 与 include 相同，
如果不能包含则导致错误*/
require 'vars.php';
// 也有效
include('vars.php');
require('vars.php');
// 通过 HTTP 包含
include 'http://x.com/file.php';
// 包含和返回语句
$result = include 'vars.php';
echo $result;  # => Anything you like.
?>
```

### 功能 Functions

```php
function add($num1, $num2 = 1) {
    return $num1 + $num2;
}
echo add(10);    # => 11
echo add(10, 5); # => 15
```

查看: [Functions](#php-函数)

### 注释 Comments

```php
# 这是一个单行 shell 样式的注释
// 这是一行 c++ 风格的注释
/* 这是一个多行注释
    另一行注释 */
```

### 常数 Constants

```php
const MY_CONST = "hello";
echo MY_CONST;   # => hello

# => MY_CONST is: hello
echo 'MY_CONST is: ' . MY_CONST; 
```

### 类 Classes

```php
class Student {
  public function __construct($name) {
      $this->name = $name;
  }
}
$alex = new Student("Alex");
```

查看: [Classes](#php-类)

PHP 类型
------

### 布尔值 Boolean
<!--rehype:wrap-class=row-span-2-->

```php
$boolean1 = true;
$boolean2 = TRUE;
$boolean3 = false;
$boolean4 = FALSE;
$boolean5 = (boolean) 1;   # => true
$boolean6 = (boolean) 0;   # => false
```

布尔值不区分大小写

### 整数 Integer
<!--rehype:wrap-class=row-span-2-->

```php
$int1 = 28;    # => 28
$int2 = -32;   # => -32
$int3 = 012;   # => 10 (octal)
$int4 = 0x0F;  # => 15 (hex)
$int5 = 0b101; # => 5  (binary)
# => 2000100000 (decimal, PHP 7.4.0)
$int6 = 2_000_100_000;
```

另见: [Integers](https://www.php.net/manual/en/language.types.integer.php)

### 字符串 Strings

```php
echo 'this is a simple string';
```

查看: [Strings](#php-字符串)

### 数组 Arrays

```php
$arr = array("hello", "world", "!");
```

查看: [Arrays](#php-数组)

### 浮点数 Float (Double)

```php
$float1 = 1.234;
$float2 = 1.2e7;
$float3 = 7E-10;
$float4 = 1_234.567;  // as of PHP 7.4.0
var_dump($float4);    // float(1234.567)
$float5 = 1 + "10.5";   # => 11.5
$float6 = 1 + "-1.3e3"; # => -1299
```

### Null

```php
$a = null;
$b = 'Hello php!';
echo $a ?? 'a is unset'; # => a is unset
echo $b ?? 'b is unset'; # => Hello php
$a = array();
$a == null    # => true
$a === null   # => false
is_null($a)   # => false
```

### 可迭代对象 Iterables

```php
function bar(): iterable {
  return [1, 2, 3];
}
function gen(): iterable {
  yield 1;
  yield 2;
  yield 3;
}
foreach (bar() as $value) {
  echo $value;   # => 123
} 
```

PHP 字符串
------

### 字符串 String

```php
# => '$String'
$sgl_quotes = '$String';
# => 'This is a $String.'
$dbl_quotes = "This is a $sgl_quotes.";
# => a    tab character.
$escaped   = "a \t tab character.";
# => a slash and a t: \t
$unescaped = 'a slash and a t: \t';
```

### 多行 Multi-line

```php
$str = "foo";
// 未插值的多行
$nowdoc = <<<'END'
Multi line string
$str
END;
// 将执行字符串插值
$heredoc = <<<END
Multi line
$str
END;
```

### 操作 Manipulation

```php
$s = "Hello Phper";
echo strlen($s);       # => 11
echo substr($s, 0, 3); # => Hel
echo substr($s, 1);    # => ello Phper
echo substr($s, -4, 3);# => hpe
echo strtoupper($s);   # => HELLO PHPER
echo strtolower($s);   # => hello phper
echo strpos($s, "l");      # => 2
var_dump(strpos($s, "L")); # => false
```

另见: [字符串函数](https://www.php.net/manual/en/ref.strings.php)

PHP 数组
------

### 定义
<!--rehype:wrap-class=row-span-2-->

```php
$a1 = ["hello", "world", "!"]
$a2 = array("hello", "world", "!");
$a3 = explode(",", "apple,pear,peach");
```

#### 混合 int 和 string 键

```php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
    100   => -100,
    -100  => 100,
);
var_dump($array);
```

#### 短数组语法

```php
$array = [
    "foo" => "bar",
    "bar" => "foo",
];
```

### 多阵列

```php
$multiArray = [ 
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
print_r($multiArray[0][0]) # => 1
print_r($multiArray[0][1]) # => 2
print_r($multiArray[0][2]) # => 3
```

### 多类型
<!--rehype:wrap-class=row-span-2-->

```php
$array = array(
    "foo" => "bar",
    42    => 24,
    "multi" => array(
         "dim" => array(
             "a" => "foo"
         )
    )
);
# => string(3) "bar"
var_dump($array["foo"]);
# => int(24)
var_dump($array[42]);    
# =>  string(3) "foo"
var_dump($array["multi"]["dim"]["a"]);
```

### 操作

```php
$arr = array(5 => 1, 12 => 2);
$arr[] = 56;      // 附加
$arr["x"] = 42;   // 用键添加
sort($arr);       // 排序
unset($arr[5]);   // 消除
unset($arr);      // 移除所有
```

查看: [数组函数](https://www.php.net/manual/en/ref.array.php)

### 索引迭代

```php
$array = array('a', 'b', 'c');
$count = count($array);
for ($i = 0; $i < $count; $i++) {
    echo "i:{$i}, v:{$array[$i]}\n";
}
```

### 价值迭代

```php
$colors = array('red', 'blue', 'green');
foreach ($colors as $color) {
    echo "Do you like $color?\n";
}
```

### 关键迭代

```php
$arr = ["foo" => "bar", "bar" => "foo"];
foreach ( $arr as $key => $value )
{
    echo "key: " . $key . "\n";
    echo "val: {$arr[$key]}\n";
}
```

### 串联阵列

```php
$a = [1, 2];
$b = [3, 4];
// PHP 7.4 以后
# => [1, 2, 3, 4]
$result = [...$a, ...$b];
```

### Into 函数

```php
$array = [1, 2];
function foo(int $a, int $b) {
  echo $a; # => 1
    echo $b; # => 2
}
foo(...$array);
```

### Splat运算符

```php
function foo($first, ...$other) {
  var_dump($first); # => a
    var_dump($other); # => ['b', 'c']
}
foo('a', 'b', 'c' /*, ...*/ );
// 或
function foo($first, string ...$other){}
```

PHP 运算符
-------

### 算术

:- | -
:- | -
`+`  | 添加
`-`  | 减法
`*`  | 乘法
`/`  | 分配
`%`  | 取模
`**` | 求幂

### 分配

:- | -
:- | -
`a += b` | 如同 `a = a + b`
`a -= b` | 如同 `a = a – b`
`a *= b` | 如同 `a = a * b`
`a /= b` | 如同 `a = a / b`
`a %= b` | 如同 `a = a % b`

### 比较

:- | -
:- | -
`==`  | 平等的
`===` | 完全相同的
`!=`  | 不相等
`<>`  | 不相等
`!==` | 不相同
`<`   | 少于
`>`   | 比...更棒
`<=`  | 小于或等于
`>=`  | 大于或等于
`<=>` | 小于/等于/大于

### 逻辑的

:- | -
:- | -
`and` | 和
`or`  | 或者
`xor` | 独家或
`!`   | 不是
`&&`  | 和
`\|\|`  | 或者

### 算术

```php
// 算术
$sum        = 1 + 1; // 2
$difference = 2 - 1; // 1
$product    = 2 * 2; // 4
$quotient   = 2 / 1; // 2
// 速记算术
$num = 0;
$num += 1;       // 将 $num 增加 1
echo $num++;     // 打印 1（评估后的增量）
echo ++$num;     // 打印 3（评估前的增量）
$num /= $float;  // 将商除并分配给 $num
```

### 按位

:- | -
:- | -
`&`  | 和
`|`  | 或（包括或）
`^`  | 异或（异或）
`~`  | 不是
`<<` | 左移
`>>` | 右移

PHP 条件
------

### If elseif else

```php
$a = 10;
$b = 20;
if ($a > $b) {
    echo "a is bigger than b";
} elseif ($a == $b) {
    echo "a is equal to b";
} else {
    echo "a is smaller than b";
}
```

### Switch

```php
$x = 0;
switch ($x) {
    case '0':
        print "it's zero";
        break; 
    case 'two':
    case 'three':
        // do something
        break;
    default:
        // do something
}
```

### 三元运算符

```php
# => Does
print (false ? 'Not' : 'Does');
$x = false;
# => Does
print($x ?: 'Does');
$a = null;
$b = 'Does print';
# => a is unsert
echo $a ?? 'a is unset';
# => print
echo $b ?? 'b is unset';
```

### 匹配

```php
$statusCode = 500;
$message = match($statusCode) {
  200, 300 => null,
  400 => '未找到',
  500 => '服务器错误',
  default => '已知状态码',
};
echo $message; # => 服务器错误
```

查看: [Match](https://www.php.net/manual/en/control-structures.match.php)

### 匹配表达式

```php
$age = 23;
$result = match (true) {
    $age >= 65 => 'senior',
    $age >= 25 => 'adult',
    $age >= 18 => 'young adult',
    default => 'kid',
};
echo $result; # => young adult
```

PHP 循环
------

### while 循环

```php
$i = 1;
# => 12345
while ($i <= 5) {
    echo $i++;
}
```

### do while 循环

```php
$i = 1;
# => 12345
do {
    echo $i++;
} while ($i <= 5);
```

### for i 循环

```php
# => 12345
for ($i = 1; $i <= 5; $i++) {
    echo $i;
}
```

### break 跳出循环

```php
# => 123
for ($i = 1; $i <= 5; $i++) {
    if ($i === 4) {
        break;
    }
    echo $i;
}
```

### continue 继续

```php
# => 1235
for ($i = 1; $i <= 5; $i++) {
    if ($i === 4) {
        continue;
    }
    echo $i;
}
```

### foreach 循环

```php
$a = ['foo' => 1, 'bar' => 2];
# => 12
foreach ($a as $k) {
    echo $k;
}
```

查看: [Array iteration](#关键迭代)

PHP 函数
------

### 返回值

```php
function square($x)
{
    return $x * $x;
}
echo square(4);  # => 16
```

### 返回类型

```php
// 基本返回类型声明
function sum($a, $b): float {/*...*/}
function get_item(): string {/*...*/}
class C {}
// 返回一个对象
function getC(): C { return new C; }
```

### 可空返回类型

```php
// 在 PHP 7.1 中可用
function nullOrString(int $v) : ?string
{
    return $v % 2 ? "odd" : null;
}
echo nullOrString(3);       # => odd
var_dump(nullOrString(4));  # => NULL
```

查看: [Nullable types](https://www.php.net/manual/en/migration71.new-features.php)

### 无效函数

```php
// 在 PHP 7.1 中可用
function voidFunction(): void
{
  echo 'Hello';
  return;
}
voidFunction();  # => Hello
```

### 变量函数

```php
function bar($arg = '')
{
    echo "In bar(); arg: '$arg'.\n";
}
$func = 'bar';
$func('test'); # => In bar(); arg: test
```

### 匿名函数

```php
$greet = function($name)
{
    printf("Hello %s\r\n", $name);
};
$greet('World'); # => Hello World
$greet('PHP');   # => Hello PHP
```

### 递归函数

```php
function recursion($x)
{
    if ($x < 5) {
        echo "$x";
        recursion($x + 1);
    }
}
recursion(1);  # => 1234
```

### 默认参数

```php
function coffee($type = "cappuccino")
{
    return "Making a cup of $type.\n";
}
# => 制作一杯卡布奇诺
echo coffee();
# => 制作一杯
echo coffee(null);
# => 制作一杯浓缩咖啡
echo coffee("espresso");
```

### 箭头函数

```php
$y = 1;
 
$fn1 = fn($x) => $x + $y;
// 相当于按值使用 $y：
$fn2 = function ($x) use ($y) {
    return $x + $y;
};
echo $fn1(5);   # => 6
echo $fn2(5);   # => 6
```

PHP 类
------

### 构造函数 Constructor

```php
class Student {
    public function __construct($name) {
        $this->name = $name;
    }
    public function print() {
        echo "Name: " . $this->name;
    }
}
$alex = new Student("Alex");
$alex->print();    # => Name: Alex
```

### 继承 Inheritance

```php
class ExtendClass extends SimpleClass
{
    // 重新定义父方法
    function displayVar()
    {
        echo "Extending class\n";
        parent::displayVar();
    }
}
$extended = new ExtendClass();
$extended->displayVar();
```

### 类变量 Classes variables
<!--rehype:wrap-class=row-span-2-->

```php
class MyClass
{
    const MY_CONST         = 'value';
    static $staticVar      = 'static';
    // 可见度
    public static $var1    = 'pubs';
    // 仅限类
    private static $var2   = 'pris';
    // 类和子类
    protected static $var3 = 'pros';
    // 类和子类
    protected $var6        = 'pro';
    // 仅限类
    private $var7          = 'pri';  
}
```

静态访问

```php
echo MyClass::MY_CONST;   # => value
echo MyClass::$staticVar; # => static
```

### 魔术方法

```php
class MyClass
{
    // 对象被视为字符串
    public function __toString()
    {
        return $property;
    }
    // 与 __construct() 相反
    public function __destruct()
    {
        print "Destroying";
    }
}
```

### 接口

```php
interface Foo 
{
    public function doSomething();
}
interface Bar
{
    public function doSomethingElse();
}
class Cls implements Foo, Bar 
{
    public function doSomething() {}
    public function doSomethingElse() {}
}
```

各种各样的
------

### 基本错误处理

```php
try {
    // 做一点事
} catch (Exception $e) {
    // 处理异常
} finally {
    echo "Always print!";
}
```

### PHP 8.0 中的异常

<!--rehype:wrap-class=col-span-2-->
```php {.wrap}
$nullableValue = null;
try {
  $value = $nullableValue ?? throw new InvalidArgumentException();
} catch (InvalidArgumentException) { // 变量是可选的
    // 处理我的异常
    echo "print me!";
}
```

### 自定义异常

<!--rehype:wrap-class=row-span-2-->
```php
class MyException extends Exception {
    // 做一点事
}
```

用法

```php
try {
    $condition = true;
    if ($condition) {
        throw new MyException('bala');
    }
} catch (MyException $e) {
    // 处理我的异常
}
```

### Nullsafe 运算符
<!--rehype:wrap-class=row-span-2-->

```php
// 从 PHP 8.0.0 开始，这一行：
$result = $repo?->getUser(5)?->name;
// 相当于下面的代码：
if (is_null($repo)) {
    $result = null;
} else {
    $user = $repository->getUser(5);
    if (is_null($user)) {
        $result = null;
    } else {
        $result = $user->name;
    }
}
```

另见: [Nullsafe 运算符](https://wiki.php.net/rfc/nullsafe_operator)

### 常用表达

```php
$str = "Visit jaywcjlove.github.io";
echo preg_match("/qu/i", $str); # => 1
```

查看: [PHP中的正则表达式](./regex.md#php中的正则表达式)

### fopen() 模式

:- | -
:- | -
`r`  | 读
`r+` | 读写，前置
`w`  | 写入，截断
`w+` | 读写，截断
`a`  | 写，追加
`a+` | 读写，追加

### 运行时定义的常量

```php
define("CURRENT_DATE", date('Y-m-d'));
// 一种可能的表示
echo CURRENT_DATE;   # => 2021-01-05
# => CURRENT_DATE is: 2021-01-05
echo 'CURRENT_DATE is: ' . CURRENT_DATE; 
```

另见
----

- [PHP 官方中文文档](https://www.php.net/manual/zh/index.php) _(php.net)_
- [Learn X in Y minutes](https://learnxinyminutes.com/docs/zh-cn/php-cn/) _(learnxinyminutes.com)_
