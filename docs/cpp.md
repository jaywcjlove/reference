C++ 备忘清单
===

提供基本语法和方法的 [C++](https://zh.cppreference.com/) 快速参考备忘单

入门
--------

### hello.cpp

```cpp
#include <iostream>
int main() {
    std::cout << "Hello Quick Reference\n";
    return 0;
}
```

编译运行

```shell
$ g++ hello.cpp -o hello
$ ./hello
Hello Quick Reference
```

### 变量

```cpp
int number = 5;       // 整数
float f = 0.95;       // 浮点数
double PI = 3.14159;  // 浮点数
char yes = 'Y';       // 特点
std::string s = "ME"; // 字符串（文本）
bool isRight = true;  // 布尔值
// 常量
const float RATE = 0.8;
```

----

```cpp
int age {25};      // 自 C++11
std::cout << age;  // 打印 25
```

### 原始数据类型

数据类型 | 大小 | 范围
:- | -- | --
`int`     | 4 bytes        | -2<sup>31</sup> 到 2<sup>31</sup>-1
`float`   | 4 bytes        | _N/A_
`double`  | 8 bytes        | _N/A_
`char`    | 1 byte         | -128 到 127
`bool`    | 1 byte         | `true` / `false`
`void`    | _N/A_          | _N/A_
`wchar_t` | 2 到 4 bytes   | 1 个宽字符
<!--rehype:className=show-header-->

### 用户输入

```cpp
int num;
std::cout << "Type a number: ";
std::cin >> num;
std::cout << "You entered " << num;
```

### 交换

```cpp
int a = 5, b = 10;
std::swap(a, b);
// 输出: a=10, b=5
std::cout << "a=" << a << ", b=" << b;

// 整数交换的奇技淫巧
(x ^= y), (y ^= x), (x ^= y);
// 注意！ 以下操作会造成  undefined behavior
x ^= y ^= x ^= y;
```

### 注释

```cpp
// C++中的单行注释
/* 这是一个多行注释
    在 C++ 中 */
```

### If 语句

```cpp
if (a == 10) {
    // do something
}
```

查看: [条件](#c-条件)

### 循环

```cpp
for (int i = 0; i < 10; i++) {
    std::cout << i << "\n";
}
```

查看: [循环 Loops](#c-循环)

### 函数
<!--rehype:wrap-class=row-span-2-->

```cpp
#include <iostream>

void hello();   // 声明

int main() {    // 主函数
    hello();    // 执行函数
}

void hello() { // 定义
  std::cout << "Hello Quick Reference!\n";
}
```

查看: [函数 Functions](#c-函数)

### 引用

```cpp
int i = 1;
int& ri = i; // ri 是对 i 的引用
ri = 2; // i 现在改为 2
std::cout << "i=" << i;
i = 3;   // i 现在改为 3
std::cout << "ri=" << ri;
```

`ri` 和 `i` 指的是相同的内存位置

### 命名空间

```cpp
#include <iostream>
namespace ns1 {int val(){return 5;}}
int main()
{
    std::cout << ns1::val();
}
```

----

```cpp
#include <iostream>
namespace ns1 {int val(){return 5;}}
using namespace ns1;
using namespace std;
int main()
{
    cout << val();
}
```

名称空间允许名称下的全局标识符

C++ 数组
------

### 定义

```cpp
std::array<int, 3> marks; // 定义
marks[0] = 92;
marks[1] = 97;
marks[2] = 98;
// 定义和初始化
std::array<int, 3> = {92, 97, 98};
// 有空成员
std::array<int, 3> marks = {92, 97};
std::cout << marks[2]; // 输出: 0
```

### 操控

```cpp
┌─────┬─────┬─────┬─────┬─────┬─────┐
| 92  | 97  | 98  | 99  | 98  | 94  |
└─────┴─────┴─────┴─────┴─────┴─────┘
   0     1     2     3     4     5
```

----

```cpp
std::array<int, 6> marks = {
  92, 97, 98, 99, 98, 94
};
// 打印第一个元素
std::cout << marks[0];
// 将第 2 个元素更改为 99
marks[1] = 99;
// 从用户那里获取输入
std::cin >> marks[2];
```

### 展示

```cpp
char ref[5] = {'R', 'e', 'f'};
// 基于范围的for循环
for (const int &n : ref) {
    std::cout << std::string(1, n);
}
// 传统的for循环
for (int i = 0; i < sizeof(ref); ++i) {
    std::cout << ref[i];
}
```

### 多维

```cpp
     j0   j1   j2   j3   j4   j5
   ┌────┬────┬────┬────┬────┬────┐
i0 | 1  | 2  | 3  | 4  | 5  | 6  |
   ├────┼────┼────┼────┼────┼────┤
i1 | 6  | 5  | 4  | 3  | 2  | 1  |
   └────┴────┴────┴────┴────┴────┘
```

----

```cpp
int x[2][6] = {
    {1,2,3,4,5,6}, {6,5,4,3,2,1}
};
for (int i = 0; i < 2; ++i) {
    for (int j = 0; j < 6; ++j) {
        std::cout << x[i][j] << " ";
    }
}
// 输出: 1 2 3 4 5 6 6 5 4 3 2 1
```

C++ 条件
------------

### If Clause

```cpp
if (a == 10) {
    // do something
}
```

----

```cpp
int number = 16;
if (number % 2 == 0)
{
    std::cout << "even";
}
else
{
    std::cout << "odd";
}
// 输出: even
```

### Else if 语句

```cpp
int score = 99;
if (score == 100) {
    std::cout << "Superb";
}
else if (score >= 90) {
    std::cout << "Excellent";
}
else if (score >= 80) {
    std::cout << "Very Good";
}
else if (score >= 70) {
    std::cout << "Good";
}
else if (score >= 60)
    std::cout << "OK";
else
    std::cout << "What?";
```

### 运算符
<!--rehype:wrap-class=row-span-2-->

#### 关系运算符

:--|--
:--|--
`a == b` | a 等于 b
`a != b` | a 不等于 b
`a < b`  | a 小于 b
`a > b`  | a 大于 b
`a <= b` | a 小于或等于 b
`a >= b` | a 大于或等于 b

#### 赋值运算符

范例 | 相当于
:--|--
`a += b` | _Aka_ `a = a + b`
`a -= b` | _Aka_ `a = a - b`
`a *= b` | _Aka_ `a = a * b`
`a /= b` | _Aka_ `a = a / b`
`a %= b` | _Aka_ `a = a % b`

#### 逻辑运算符

| Example        | Meaning                |
|----------------|------------------------|
| `exp1 && exp2` | Both are true _(AND)_  |
| `exp1 || exp2` | Either is true _(OR)_  |
| `!exp`         | `exp` is false _(NOT)_ |

#### 位运算符

| Operator | Description             |
|----------|-------------------------|
| `a & b`  | Binary AND              |
| `a | b`  | Binary OR               |
| `a ^ b`  | Binary XOR              |
| `a ~ b`  | Binary One's Complement |
| `a << b` | Binary Shift Left       |
| `a >> b` | Binary Shift Right      |

### 三元运算符

```
           ┌── True ──┐
Result = Condition ? Exp1 : Exp2;
           └───── False ─────┘
```

----

```cpp
int x = 3, y = 5, max;
max = (x > y) ? x : y;
// 输出: 5
std::cout << max << std::endl;
```

----

```cpp
int x = 3, y = 5, max;
if (x > y) {
    max = x;
} else {
    max = y;
}
// 输出: 5
std::cout << max << std::endl;
```

### switch 语句

```cpp
int num = 2;
switch (num) {
    case 0:
        std::cout << "Zero";
        break;
    case 1:
        std::cout << "One";
        break;
    case 2:
        std::cout << "Two";
        break;
    case 3:
        std::cout << "Three";
        break;
    default:
        std::cout << "What?";
        break;
}
```

C++ 循环
------------

### While

```cpp
int i = 0;
while (i < 6) {
    std::cout << i++;
}
// 输出: 012345
```

### Do-while

```cpp
int i = 1;
do {
    std::cout << i++;
} while (i <= 5);
// 输出: 12345
```

### Continue 语句

```cpp
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    std::cout << i;
} // 输出: 13579
```

### 无限循环

```cpp
while (true) { // true or 1
    std::cout << "无限循环";
}
```

----

```cpp
for (;;) {
    std::cout << "无限循环";
}
```

----

```cpp
for(int i = 1; i > 0; i++) {
    std::cout << "infinite loop";
}
```

### for_each (C++11 起)

```cpp
#include <iostream>
int main()
{
    auto print = [](int num) {
      std::cout << num << std::endl;
    };
    std::array<int, 4> arr = {1, 2, 3, 4};
    std::for_each(arr.begin(), arr.end(), print);
    return 0;
}
```
<!--rehype:className=wrap-text-->

### 基于范围 (C++11 起)

```cpp
for (int n : {1, 2, 3, 4, 5}) {
    std::cout << n << " ";
}
// 输出: 1 2 3 4 5
```

----

```cpp
std::string hello = "Quick Reference.ME";
for (char c: hello)
{
    std::cout << c << " ";
}
// 输出: Q u i c k R e f . M E
```

### 中断语句

```cpp
int password, times = 0;
while (password != 1234) {
    if (times++ >= 3) {
        std::cout << "Locked!\n";
        break;
    }
    std::cout << "Password: ";
    std::cin >> password; // input
}
```

### Several variations

```cpp
for (int i = 0, j = 2; i < 3; i++, j--){
    std::cout << "i=" << i << ",";
    std::cout << "j=" << j << ";";
}
// 输出: i=0,j=2;i=1,j=1;i=2,j=0;
```

### auto

```cpp
std:: string s = "hello world";
for(auto c: s){
    std:: cout << c << " ";
}
// 输出: h e l l o   w o r l d
```

C++ 函数
------------

### 参数和返回

```cpp
#include <iostream>
int add(int a, int b) {
    return a + b;
}
int main() {
    std::cout << add(10, 20);
}
```

`add` 是一个接受 2 个整数并返回整数的函数

### 重载

```cpp
void fun(string a, string b) {
    std::cout << a + " " + b;
}
void fun(string a) {
    std::cout << a;
}
void fun(int a) {
    std::cout << a;
}
```

### 内置函数

```cpp
#include <iostream>
#include <cmath> // 导入库

int main() {
    // sqrt() 来自 cmath
    std::cout << sqrt(9);
}
```

### Lambda 表达式
<!--rehype:wrap-class=col-span-2-->

Lambda 表达式可以在函数内定义，可以理解为在函数内定义的临时函数。格式：

```cpp
auto func = []() -> return_type { };
```

- `[]`为捕获列表，能够捕获其所在函数的局部变量
  - 一个空的捕获列表代表Lambda表达式不捕获任何的变量
  - 对于值捕获，直接在中括号中填写要捕获的变量即可：

      ```cpp
      int val = 5;
      auto func = [val]() -> return_type { };
      ```

- 对于引用捕获，需要在捕获的变量前添加`&`：

  ```cpp
  string str("hello world!");
  auto func = [&str]() -> return_type { };
  ```

- 如果变量太多，需要编译器根据我们编写的代码自动捕获，可以采用隐式捕获的方式。

  - 全部值捕获：

      ```cpp
      int val1, val2;
      auto func = [=]() -> int
          {
              return val1 + val2;
          };
      ```

  - 全部引用捕获：

      ```cpp
      string str1("hello"), str2("word!");
      auto func = [&]() -> string
          {
              return str1 + str2;
          };
      ```

  - 混合隐式捕获：

      如果希望对一部分变量采用值捕获，对其他变量采用引用捕获，可以混合使用：

      ```cpp
      int val1 = 123, val2 = 456;
      string str1("123"), str2(456);

      auto func1 = [=, &str1]() -> int
          {
              return   val1 == std::stoi(str1)
                    ? val1 : val2;
          };

      auto func2 = [&, val1]() -> int
          {
              return   str1 == std::to_string(val1)
                    ? str1 : str2;
          };
      ```

- `()` 是参数列表，我们只需要按照普通函数的使用方法来使用即可
- `return_type` 是函数的返回类型，`-> return_type` 可以不写，编译器会自动推导
- `{}` 中的内容就是函数体，依照普通函数的使用方法使用即可
<!--rehype:className=style-timeline-->

此处给出一个 Lambda 表达式的实际使用例子(当然可以使用 `str::copy`):

```cpp
// vec中包含1, 2, 3, 4, 5
std::vector<int> vec({1, 2, 3, 4, 5});
std::for_each(vec.begin(), vec.end(),
              [](int& ele) -> void
          {
              std::cout << ele
                          << " ";
          });
```

## C++多线程

### 多线程介绍

g++编译选项：`-std=c++11`。包含头文件：

- `#include <thread>`：C++多线程库
- `#include <mutex>`：C++互斥量库
- `#include <future>`：C++异步库

### 线程的创建
<!--rehype:wrap-class=row-span-2-->

以普通函数作为线程入口函数：

```cpp
void entry_1() { }
void entry_2(int val) { }

std::thread my_thread_1(entry_1);
std::thread my_thread_2(entry_2, 5);
```

以类对象作为线程入口函数：

```cpp
class Entry
{
    void operator()() { }
    void entry_function() { }
};

Entry entry;
// 调用operator()()
std::thread my_thread_1(entry);
// 调用Entry::entry_function
std::thread my_thread_2(&Entry::entry_function, &entry);
```

以lambda表达式作为线程入口函数：

```cpp
std::thread my_thread([]() -> void
      {
         // ...
      });
```

### 线程的销毁

```cpp
thread my_thread;
// 阻塞
my_thread.join();
// 非阻塞
my_thread.detach();
```

### `this_thread`

```cpp
// 获取当前线程ID
std::this_thread::get_id();
// 使当前线程休眠一段指定时间
std::this_thread::sleep_for();
// 使当前线程休眠到指定时间
std::this_thread::sleep_until();
// 暂停当前线程的执行，让别的线程执行
std::this_thread::yield();
```

### 锁
<!--rehype:wrap-class=row-span-3-->

> `#include <mutex>`

#### 锁的基本操作

创建锁

```cpp
std::mutex m;
```

上锁

```cpp
m.lock();
```

解锁

```cpp
m.unlock();
```

尝试上锁：成功返回`true`，失败返回`false`

```cpp
m.try_lock();
```

解锁

```cpp
m.unlock();
```

#### 更简单的锁 —— `std::lock_guard<Mutex>`

构造时上锁，析构时解锁

```cpp
std::mutex m;
std::lock_guard<std::mutex> lock(m);
```

额外参数：`std::adopt_lock`：只需解锁，无需上锁

```cpp
// 手动上锁
m.lock();
std::lock_guard<mutex> lock(m,
    std::adopt_lock);
```

#### `unique_lock<Mutex>`

构造上锁，析构解锁

```cpp
std::mutex m;
std::unique_lock<mutex> lock(m);
```

##### `std::adopt_lock`

只需解锁，无需上锁

```cpp
// 手动上锁
m.lock();
std::unique_lock<mutex> lock(m,
    std::adopt_lock);
```

##### `std::try_to_lock`

尝试上锁，可以通过`std::unique_lock<Mutex>::owns_lock()`查看状态

```cpp
std::unique_lock<mutex> lock(m,
    std::try_to_lock);
if (lock.owns_lock())
{
    // 拿到了锁
}
else
{
    // 没有
}
```

##### `std::defer_lock`

绑定锁，但不上锁

```cpp
std::unique_lock<mutex> lock(m,
    std::defer_lock);
lock.lock();
lock.unlock();
```

##### `std::unique_lock<Mutex>::release`

返回所管理的`mutex`对象指针，**释放所有权。**一旦释放了所有权，那么如果原来互斥量处于互斥状态，程序员有责任手动解锁。

#### `std::call_once`

当多个线程通过这个函数调用一个可调用对象时，只会有一个线程成功调用。

```cpp
std::once_flag flag;

void foo() { }

std::call_once(flag, foo);
```

### `std::condition_variable`

#### 创建条件变量

```cpp
std::condition_variable cond;
```

#### 等待条件变量被通知

```cpp
std::unique_lock<std::mutex>
    lock;
extern bool predicate();

// 调用方式 1
cond.wait(lock);
// 调用方式 2
cond.wait(lock, predicate);
```

----

- `wait`不断地尝试重新获取并加锁该互斥量，如果获取不到，它就卡在这里并反复尝试重新获取，如果获取到了，执行流程就继续往下走
- `wait`在获取到互斥量并加锁了互斥量之后：
  - 如果`wait`被提供了可调用对象，那么就执行这个可调用对象：
    - 如果返回值为`false`，那么`wait`继续加锁，直到再次被 notified
    - 如果返回值为`true`，那么`wait`返回，继续执行流程
  - 如果`wait`没有第二个参数，那么直接返回，继续执行

#### `std::condition_variable::notify_one`

`notify_one` 唤醒一个调用 `wait` 的线程。注意在唤醒之前要解锁，否则调用 `wait` 的线程也会因为无法加锁而阻塞。

#### `std::condition_variable::notify_all`

唤醒所有调用 `wait` 的线程。

### 获取线程的运行结果
<!--rehype:wrap-class=row-span-2-->

> `#include <future>`

#### 创建异步任务

```cpp
double func(int val);

// 使用std::async创建异步任务
// 使用std::future获取结果
// future模板中存放返回值类型
std::future<double> result =
    std::async(func, 5);
```

#### 获取异步任务的返回值

等待异步任务结束，但是不获取返回值：

```cpp
result.wait();
```

获取异步任务的返回值：

```cpp
int val = result.get();
```

注：

- `get()`返回右值，因此只可调用一次
- 只要调用上述任意函数，线程就会一直阻塞到返回值可用（入口函数运行结束）

#### `std::async` 的额外参数

额外参数可以被放在 `std::async` 的第一个参数位置，用于设定 `std::async` 的行为：

- `std::launch::deferred`：入口函数的运行会被推迟到`std::future<T>::get()`或者`std::future<T>::wait()`被调用时。此时调用线程会直接运行线程入口函数，换言之，**不会创建子线程**
- `std::launch::async`：立即创建子线程，并运行线程入口函数
- `std::launch::deferred | std::launch::async`：默认值，由系统自行决定

#### 返回值的状态

让当前线程等待一段时间（等待到指定时间点），以期待返回值准备好：

```cpp
extern double foo(int val) {}

std::future<double> result =
    async(foo, 5);

//返回值类型
std::future_status status;
// 等待一段时间
status = result.wait_for(
  std::chrono::seconds(1)
  );
// 等待到某一时间点
status = result.wait_for(
  std::chrono::now() +
    std::chrono::seconds(1)
  );
```

在指定的时间过去后，可以获取等待的结果：

```cpp
// 返回值已经准备好
if (status ==
     std::future_status::ready)
{

}
// 超时：尚未准备好
else if (status ==
    std::future_status::timeout)
{ }
// 尚未启动: std::launch::deferred
else if (status ==
    std::future_status::deferred)
{ }
```

#### 多个返回值

```cpp
std::shared_future<T> result;
```

如果要多次获取结果，可以使用`std::shared_future`，其会返回结果的一个**拷贝**。

对于不可拷贝对象，可以在`std::shared_future`中存储对象的指针，而非指针本身。

C++ 预处理器
------------

### 预处理器
<!--rehype:wrap-class=row-span-3-->

- [if](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [elif](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [else](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [endif](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [ifdef](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [ifndef](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [define](https://zh.cppreference.com/w/cpp/preprocessor/replace)
- [undef](https://zh.cppreference.com/w/cpp/preprocessor/replace)
- [include](https://zh.cppreference.com/w/cpp/preprocessor/include)
- [line](https://zh.cppreference.com/w/cpp/preprocessor/line)
- [error](https://zh.cppreference.com/w/cpp/preprocessor/error)
- [pragma](https://zh.cppreference.com/w/cpp/preprocessor/impl)
- [defined](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [__has_include](https://zh.cppreference.com/w/cpp/feature_test)
- [__has_cpp_attribute](https://zh.cppreference.com/w/cpp/feature_test)
- [export](https://zh.cppreference.com/w/cpp/keyword/export)
- [import](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword/import&amp;action=edit&amp;redlink=1)
- [module](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword/module&amp;action=edit&amp;redlink=1)
<!--rehype:className=style-none cols-2-->

### Includes

```cpp
#include "iostream"
#include <iostream>
```

### Defines

```cpp
#define FOO
#define FOO "hello"
#undef FOO
```

### If
<!--rehype:wrap-class=row-span-2-->

```cpp
#ifdef DEBUG
  console.log('hi');
#elif defined VERBOSE
  ...
#else
  ...
#endif
```

### Error

```cpp
#if VERSION == 2.0
  #error Unsupported
  #warning Not really supported
#endif
```

### 宏

```cpp
#define DEG(x) ((x) * 57.29)
```

### 令牌连接

```cpp
#define DST(name) name##_s name##_t
DST(object);   #=> object_s object_t;
```

### 字符串化

```cpp
#define STR(name) #name
char * a = STR(object);   #=> char * a = "object";
```
<!--rehype:className=wrap-text-->

### 文件和行

```cpp
#define LOG(msg) console.log(__FILE__, __LINE__, msg)
#=> console.log("file.txt", 3, "hey")
```
<!--rehype:className=wrap-text-->

各种各样的
-------------

### 转义序列

转义序列 | 说明
:--|--
`\b`             | 退格键
`\f`             | 换页
`\n`             | 换行
`\r`             | 返回
`\t`             | 水平制表符
`\v`             | 垂直制表符
`\\`             | 反斜杠
`\'`             | 单引号
`\"`             | 双引号
`\?`             | 问号
`\0`             | 空字符

### 关键字
<!--rehype:wrap-class=row-span-2 col-span-2-->

- [alignas](https://zh.cppreference.com/w/cpp/keyword/alignas)
- [alignof](https://zh.cppreference.com/w/cpp/keyword/alignof)
- [and](https://zh.cppreference.com/w/cpp/keyword/and)
- [and_eq](https://zh.cppreference.com/w/cpp/keyword/and_eq)
- [asm](https://zh.cppreference.com/w/cpp/keyword/asm)
- [atomic_cancel](https://zh.cppreference.com/w/cpp/keyword/atomic_cancel)
- [atomic_commit](https://zh.cppreference.com/w/cpp/keyword/atomic_commit)
- [atomic_noexcept](https://zh.cppreference.com/w/cpp/keyword/atomic_noexcept)
- [auto](https://zh.cppreference.com/w/cpp/keyword/auto)
- [bitand](https://zh.cppreference.com/w/cpp/keyword/bitand)
- [bitor](https://zh.cppreference.com/w/cpp/keyword/bitor)
- [bool](https://zh.cppreference.com/w/cpp/keyword/bool)
- [break](https://zh.cppreference.com/w/cpp/keyword/break)
- [case](https://zh.cppreference.com/w/cpp/keyword/case)
- [catch](https://zh.cppreference.com/w/cpp/keyword/catch)
- [char](https://zh.cppreference.com/w/cpp/keyword/char)
- [char8_t](https://zh.cppreference.com/w/cpp/keyword/char8_t)
- [char16_t](https://zh.cppreference.com/w/cpp/keyword/char16_t)
- [char32_t](https://zh.cppreference.com/w/cpp/keyword/char32_t)
- [class](https://zh.cppreference.com/w/cpp/keyword/class)
- [compl](https://zh.cppreference.com/w/cpp/keyword/compl)
- [concept](https://zh.cppreference.com/w/cpp/keyword/concept)
- [const](https://zh.cppreference.com/w/cpp/keyword/const)
- [consteval](https://zh.cppreference.com/w/cpp/keyword/consteval)
- [constexpr](https://zh.cppreference.com/w/cpp/keyword/constexpr)
- [constinit](https://zh.cppreference.com/w/cpp/keyword/constinit)
- [const_cast](https://zh.cppreference.com/w/cpp/keyword/const_cast)
- [continue](https://zh.cppreference.com/w/cpp/keyword/continue)
- [co_await](https://zh.cppreference.com/w/cpp/keyword/co_await)
- [co_return](https://zh.cppreference.com/w/cpp/keyword/co_return)
- [co_yield](https://zh.cppreference.com/w/cpp/keyword/co_yield)
- [decltype](https://zh.cppreference.com/w/cpp/keyword/decltype)
- [default](https://zh.cppreference.com/w/cpp/keyword/default)
- [delete](https://zh.cppreference.com/w/cpp/keyword/delete)
- [do](https://zh.cppreference.com/w/cpp/keyword/do)
- [double](https://zh.cppreference.com/w/cpp/keyword/double)
- [dynamic_cast](https://zh.cppreference.com/w/cpp/keyword/dynamic_cast)
- [else](https://zh.cppreference.com/w/cpp/keyword/else)
- [enum](https://zh.cppreference.com/w/cpp/keyword/enum)
- [explicit](https://zh.cppreference.com/w/cpp/keyword/explicit)
- [export](https://zh.cppreference.com/w/cpp/keyword/export)
- [extern](https://zh.cppreference.com/w/cpp/keyword/extern)
- [false](https://zh.cppreference.com/w/cpp/keyword/false)
- [float](https://zh.cppreference.com/w/cpp/keyword/float)
- [for](https://zh.cppreference.com/w/cpp/keyword/for)
- [friend](https://zh.cppreference.com/w/cpp/keyword/friend)
- [goto](https://zh.cppreference.com/w/cpp/keyword/goto)
- [if](https://zh.cppreference.com/w/cpp/keyword/if)
- [inline](https://zh.cppreference.com/w/cpp/keyword/inline)
- [int](https://zh.cppreference.com/w/cpp/keyword/int)
- [long](https://zh.cppreference.com/w/cpp/keyword/long)
- [mutable](https://zh.cppreference.com/w/cpp/keyword/mutable)
- [namespace](https://zh.cppreference.com/w/cpp/keyword/namespace)
- [new](https://zh.cppreference.com/w/cpp/keyword/new)
- [noexcept](https://zh.cppreference.com/w/cpp/keyword/noexcept)
- [not](https://zh.cppreference.com/w/cpp/keyword/not)
- [not_eq](https://zh.cppreference.com/w/cpp/keyword/not_eq)
- [nullptr](https://zh.cppreference.com/w/cpp/keyword/nullptr)
- [operator](https://zh.cppreference.com/w/cpp/keyword/operator)
- [or](https://zh.cppreference.com/w/cpp/keyword/or)
- [or_eq](https://zh.cppreference.com/w/cpp/keyword/or_eq)
- [private](https://zh.cppreference.com/w/cpp/keyword/private)
- [protected](https://zh.cppreference.com/w/cpp/keyword/protected)
- [public](https://zh.cppreference.com/w/cpp/keyword/public)
- [reflexpr](https://zh.cppreference.com/w/cpp/keyword/reflexpr)
- [register](https://zh.cppreference.com/w/cpp/keyword/register)
- [reinterpret_cast](https://zh.cppreference.com/w/cpp/keyword/reinterpret_cast)
- [requires](https://zh.cppreference.com/w/cpp/keyword/requires)
- [return](https://zh.cppreference.com/w/cpp/language/return)
- [short](https://zh.cppreference.com/w/cpp/keyword/short)
- [signed](https://zh.cppreference.com/w/cpp/keyword/signed)
- [sizeof](https://zh.cppreference.com/w/cpp/keyword/sizeof)
- [static](https://zh.cppreference.com/w/cpp/keyword/static)
- [static_assert](https://zh.cppreference.com/w/cpp/keyword/static_assert)
- [static_cast](https://zh.cppreference.com/w/cpp/keyword/static_cast)
- [struct](https://zh.cppreference.com/w/cpp/keyword/struct)
- [switch](https://zh.cppreference.com/w/cpp/keyword/switch)
- [synchronized](https://zh.cppreference.com/w/cpp/keyword/synchronized)
- [template](https://zh.cppreference.com/w/cpp/keyword/template)
- [this](https://zh.cppreference.com/w/cpp/keyword/this)
- [thread_local](https://zh.cppreference.com/w/cpp/keyword/thread_local)
- [throw](https://zh.cppreference.com/w/cpp/keyword/throw)
- [true](https://zh.cppreference.com/w/cpp/keyword/true)
- [try](https://zh.cppreference.com/w/cpp/keyword/try)
- [typedef](https://zh.cppreference.com/w/cpp/keyword/typedef)
- [typeid](https://zh.cppreference.com/w/cpp/keyword/typeid)
- [typename](https://zh.cppreference.com/w/cpp/keyword/typename)
- [union](https://zh.cppreference.com/w/cpp/keyword/union)
- [unsigned](https://zh.cppreference.com/w/cpp/keyword/unsigned)
- [using](https://zh.cppreference.com/w/cpp/keyword/using)
- [virtual](https://zh.cppreference.com/w/cpp/keyword/virtual)
- [void](https://zh.cppreference.com/w/cpp/keyword/void)
- [volatile](https://zh.cppreference.com/w/cpp/keyword/volatile)
- [wchar_t](https://zh.cppreference.com/w/cpp/keyword/wchar_t)
- [while](https://zh.cppreference.com/w/cpp/keyword/while)
- [xor](https://zh.cppreference.com/w/cpp/keyword/xor)
- [xor_eq](https://zh.cppreference.com/w/cpp/keyword/xor_eq)
- [final](https://zh.cppreference.com/w/cpp/language/final)
- [override](https://zh.cppreference.com/w/cpp/language/override)
- [transaction_safe](https://zh.cppreference.com/w/cpp/language/transactional_memory)
- [transaction_safe_dynamic](https://zh.cppreference.com/w/cpp/language/transactional_memory)
<!--rehype:className=style-none cols-5-->

### 预处理器

- [if](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [elif](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [else](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [endif](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [ifdef](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [ifndef](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [define](https://zh.cppreference.com/w/cpp/preprocessor/replace)
- [undef](https://zh.cppreference.com/w/cpp/preprocessor/replace)
- [include](https://zh.cppreference.com/w/cpp/preprocessor/include)
- [line](https://zh.cppreference.com/w/cpp/preprocessor/line)
- [error](https://zh.cppreference.com/w/cpp/preprocessor/error)
- [pragma](https://zh.cppreference.com/w/cpp/preprocessor/impl)
- [defined](https://zh.cppreference.com/w/cpp/preprocessor/conditional)
- [__has_include](https://zh.cppreference.com/w/cpp/feature_test)
- [__has_cpp_attribute](https://zh.cppreference.com/w/cpp/feature_test)
- [export](https://zh.cppreference.com/w/cpp/keyword/export)
- [import](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword/import&amp;action=edit&amp;redlink=1)
- [module](https://zh.cppreference.com/mwiki/index.php?title=cpp/keyword/module&amp;action=edit&amp;redlink=1)
<!--rehype:className=style-none cols-2-->

另见
----

- [C++ Infographics & Cheat Sheets](https://hackingcpp.com/cpp/cheat_sheets.html) _(hackingcpp.com)_
- [C++ reference](https://zh.cppreference.com/w/) _(cppreference.com)_
- [C++ Language Tutorials](http://www.cplusplus.com/doc/tutorial/) _(cplusplus.com)_

# 数据结构与开发技巧
## map和set
```cpp
#include<iostream>
#include<map> // 注意map的key会自动排序, 所以在遇到排序问题时参考
#include<algorithm>
#include<vector>
#include <unordered_map>
using namespace std;
//     map中 所有元素都是pair
//     pair中 第一个元素为key(键值) 用于索引   第二个元素value(实值)
//     所有元素都会根据键值自动排序
// 本质：
//      map /mulmap底层都是二叉树
// 优点：
//     可根据key值快速找到value值

//      map不允许容器中出现相同的值 
//      mulmap中允许出现重复的值2
// map大小和交换：
//      .size()   //返回容器中元素的数目
//      .empty()   //判断容器是否为空
//      .swap(st)     //交换两个容器
// 插入和删除：
//     insert(elem)  //容器中插入元素  inseert(pair<int,int>               ( , ));
//     clear()    //清除所有元素
//     erase(pos)    //删除pos迭代器所指的元素 返回下一个迭   代器位置
//     erase(key)   删除键值为key的元素

void map_test(){
    // https://blog.csdn.net/tcx1992/article/details/80928790
    // https://blog.csdn.net/sevenjoin/article/details/81937695
    typedef map<int, string> myMap; // 这其实就是将map里面的数据格式给固定下来而已, map<int, string> = myMap
    myMap test;
    //插入
    test.insert(pair<int, string>(3, "a"));
    test.insert(pair<int, string>(4, "b"));
    test.insert(pair<int, string>(5, "c"));
    test.insert(pair<int, string>(8, "d"));
    test.insert(pair<int, string>(50, "e"));

    //遍历（二叉搜索树的中序遍历，按照key值递增顺序）
    cout << "遍历" << endl;

    // for(auto i : test){  // 将temp里面的每个值, 放到i中, 这个i是新建的
	// for(auto &i : test){  // 将temp里面的每个值, 软连接到i, 修改i就是在修改temp中的值
	for(const auto &i : test){ // 将temp里面的每个值, 软连接到i, 禁用修改, 防止在遍历过程中出现改值
        cout << i.second << endl;
    cout << endl;
    auto iter = test.rbegin();//最大的N个数
    for (int i = 0; i < 3; i++)
        cout << iter++->second << endl;
    //查找
    cout << "查找" << endl;
    // 使用find，返回的是被查找元素的位置，没有则返回map.end()。
    auto it = test.find(50); //查找key=50的数据是, find(key)返回的是pair格式, 也就是(50, e), 所以it->second=
    if (it != test.end())
        cout << it->second << endl;
    // 使用count，返回的是被查找元素的个数。如果有，返回1；否则，返回0
    cout << test.count(3) << endl;
    //删除
    cout << "删除" << endl;
    if (test.erase(3))
        cout << "delete success" << endl;
    for (auto &i : test)
        cout << i.second << endl;    
}

void map_test2(){
    map<int, string> myMap;  // 创建
    myMap.insert(pair<int, string>(3, "a")); // 插入
    myMap.insert(pair<int, string>(5, "b"));
    myMap.insert(pair<int, string>(50, "d"));
    for (auto &i : myMap) cout <<i.first <<"value="<< i.second<<"; "; cout<<endl;  // 遍历
        
    //返回map最后一个值
    map<int, string>::reverse_iterator iter = myMap.rbegin(); 
    if (iter != myMap.rend()) cout<<"最后一个值是"<<iter->first << "-" << iter->second <<endl;
    // cout<<"最后一个值是"<<myMap.end()->first << "-" << myMap.end()->second <<endl; //这样是错误的, 因为rend()和end()这两个函数只是标记找没找到 不是返回最后一个元素

    // 最大的2个数
    auto iter1 = myMap.rbegin();
    for (int i = 0; i < 2; i++)
        cout << iter1++->second << endl;

    // 查找find
    auto it = myMap.find(50); //查找key=50的数据是, find(key)返回的是pair格式, 也就是(50, e), 所以it->second=
    if (it != myMap.end()) 
        cout <<it->first << "-"<<it->second << endl;

    // 判断存在, 
    cout << "3有" << myMap.count(3) << endl;
}

int main()
{
    // map_test2();
    unordered_map<int, string> map1{{1, "hel"}, {2, "ahskg"}, {3, "world"}};
    cout<<map1.at(1)<<endl; // 最简单的查找
    // cout<<map1.at(5)<<endl; // 最简单的查找
    return 0;
}
```

## string
```cpp
#include <iostream>
#include <algorithm>
#include <stdio.h>
#include <vector>
#include <sstream> // 为了使用stringsteam
using namespace std;
// 题目描述: 给定字符串S,T, 求S中包含T所有字符的最短连续子字符串的长度, 时间复杂度不能超过O(n)
// 输入样例: 
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"

string String_test(){
	string str="hello world";

	//直接打印字符串
	cout<<"str="<<str<<endl; 
	// printf("%s\n", str); //这里会报错, 需要将string转化为const char*类型
	const char *p = str.c_str();
	printf("str=%s\n", p);

	// 求字符串长度:
	cout<<"字符串长度等于: "<<str.length()<<endl;

    // 打印字符串最后一位
    cout<<"字符串最后一位"<<str[str.length()-1]<<endl;
    cout<<"字符串最后一位"<<str.back()<<endl;

    // string切片 substr(起始位置, 长度)
    cout<<"切片"<<str.substr(0, 5)<<endl;  

	//比较字符串
	if (0 == str.compare("hello world")){
		printf("字符串等于hello world\n");
	}

	// 字符串判断空
	if(!str.empty()){
		printf("字符串不为空\n");
	}

    // 字符串翻转
    // reverse(str.begin(), str.end()); // algorithm定义


	// char*、char[]转换为string 
    const char* pszName = "liitdar";
    char pszCamp[] = "alliance";
    string strName = pszName;
    string strCamp = pszCamp;
    cout << "strName is: " << strName << endl;	//strName is: liitdar
    cout << "strCamp is: " << strCamp << endl;	//strCamp is: alliance

    // find检测是否存在
	// size_t find (const string& str, size_t pos = 0) const;
	// size_t find (const char* s, size_t pos = 0) const;
	// size_t find (const char* s, size_t pos, size_t n) const;
	// size_t find (char c, size_t pos = 0) const;
    string str2 = "world";
    size_t son_location = str.find(str2);
    if (son_location != string::npos){ 
    	cout<<"找到子串str2, 在str位置是: "<<son_location<<endl; //找到子串str2, 在str位置是: 6
    }

    // 插入方法 insert
    str.insert(6, "zjq's "); //hello zjq's world
    str.insert(5, 4, 'a'); //在5的位置, 插入4个a
    cout<<str<<endl;

    // int2string stringstream
    int n1 = 1234;
    // n1.str(); // 这肯定不对
    stringstream str3; //注意这里导入头文件<sstream>
    str3 << n1;
    string str4 = str3.str();
    cout<<"将int类型转化为string类型: "<<str4<<endl;

    string str5;
    str3 >> str5;
    cout<<str5<<endl; //总之都要将int转化为string类型


    // 方法2 to_string
    int numb2 = 456;
    string str6;
    str6 = to_string(numb2);    // C++11 标准
    cout << "str6 is: " << str6 << endl; //str6 is: 456
    return str6;
}


int main(int argc, char const *argv[])
{
	string str = String_test();
    cout<<str<<endl;
	return 0;
}
```

## 指针
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <stdio.h>
using namespace std;

// 指针和引用
void test1(int*a, int b, int &c){
	cout<<"函数参数输入是: *a="<<*a<<" b="<<b<<" c="<<c<<endl;
	*a = 10;
	b = 23;
	c = 25;
	cout<<"函数参数修改后的结果是: *a="<<*a<<" b="<<b<<" c="<<c<<endl;
}

void pointor_test1(){
	int x=0, y=1, z=3;
	int *z1 = &z; //指向z地址的指针z1
	cout<<"原始数据值是: *z1="<<*z1<<" x="<<x<<" y="<<y<<" z="<<z<<endl;
	test1(z1,x,y);
	cout<<"经过函数洗礼后的结果是: *z1="<<*z1<<" x="<<x<<" y="<<y<<" z="<<z<<endl;
	/*
	总结: 引用&跟指针的原理都是一样, 就是传递的是指针,所以当函数参数使用&时,该参数的改变就会影响到调用的值 
	
	*z1和y的引用: 根据结果可以看出来, 其实指针*跟引用&有着异曲同工之妙呀, \
	因为指针*z1指向的地址, 传递给函数后, 函数对这个地址的内容进行了修改\
	但是由于*z1指向的地址的参数z的作用于是main函数, 也就是只有等到main函数结束后, \
	回收机制才会将z回收, 所以当*z1去函数test的作用域走了一圈以后, 他指向的地址依然有效;"

	x的调用: 虽然x的作用域是main, 但是传递到test的x, 其实只是值传递给了b, 而b的作用域只是函数test1, 当test1执行完毕, \
	b自然就废了, 所以即使b的值改变了, 但是并没有影响到x的值变化
	 */
}

int * addition(int a, int b){
    // new函数和malloc函数申请的内存在堆, 因此函数即使执行完毕, 堆不会回收
    int *sum = new int(a+b); //创建指针, 指针指向一块新开辟的内存(这块内存是new开辟出来的), 内存的里面的值是a+b
    return sum;

    // 这里之所以返回的地址虽然正确, 但是内容错误, 
    // 这是因为在函数中创建的c是在栈中创建, 作用域只有在函数内有效, 等函数执行完毕,c被回收, 
    // 因此即使地址还是那个地址, 但是c已经不再是那个c了
    // int c = a+b;
    // int *sum = &c; //sum 指向c这块地址
    // cout<<"sum="<<*sum<<" 地址是:"<<sum<<endl;
    // return sum; 

    // int *c = a+b;   //这个错误出在了a+b是一个值, 不是一个地址
    // return c;
}

int subtraction(int a, int b){
    return a-b;
}

int operation(int x, int y, int(*func)(int,int)){
    return (*func)(x,y);
}

int main(int argc, char const *argv[])
{
	pointor_test1(); // 指针和引用的基础使用

	int *p = addition(2,3); //函数指针, 返回指针, 同时证明new int(a+b)开辟的空间在堆上, 需要手动回收或者程序执行完毕才会回收
    cout<<"返回来的值和地址是:"<< *p<<"  地址:"<< p <<endl;

    int x = 3;
    int *p1 = &x; //此时p1指向一块内存, 内存里面存的是3, 
    const int *p2=&x; // 指针能修改, 但是值不能被修改
    int * const p3 = &x; // 指针不能被修改, 但是值可以
    const int * const p4 = &x; // 指针不能被修改, 值也不能

    // 指针函数minus, 指向函数的指针
    int (*minus)(int, int) = subtraction; // minus指向函数subtraction
    int *m = addition(1,2); // 返回的是addition结果保存的地址
    int n = operation(3, *m, minus); // x=3, y=1+2=3, 函数执行minus,即subtraction
    cout<<"结果是:"<<n<<endl;
	return 0;
}
```



## sstream类处理字符串
```cpp
#include <vector>
#include <iostream>
#include <unordered_map>
#include <unordered_map>
#include <sstream> // C++引入了ostringstream、istringstream、stringstream这三个类
/*
istringstream类用于执行C++风格的串流的输入操作。 string str="i am a boy";  该类可以搞出来一个队列分解这四个单词
ostringstream类用于执行C风格的串流的输出操作。
strstream类同时可以支持C风格的串流的输入输出操作。
*/

using namespace std;

int main(int argc, char const *argv[])
{
    // 这里打印出来的东西主要是看s的类型, 
    // 如果s是int, 就打印出12,3,4,5,67
    // 如果s是char, 就打印出所有字符
    // 如果s是string, 就直接将整行打印出来
    string a = "12+3-4+5*67";
    istringstream s1(a);
    int i; 
    // 12 3 -4 5 
    while(s1 >> i){ 
        cout<<i<<" ";
    }cout<<endl;

    istringstream s2(a);
    char c;
    // 1 2 + 3 - 4 + 5 * 6 7 
    while(s2 >> c){ 
        cout<<c<<" ";
    }cout<<endl;

    string b = "hello world, my name is zjq, hello worldB, my name is xixi";
    istringstream s3(b);
    string s;
    // hello//world,//my//name//is//zjq//
    while(s3 >> s){ 
        cout<<s<<"//";
    }cout<<endl;

    // 统计b里面的单词和数量
    istringstream s4(b);
    string str1;
    unordered_map<string , int> counts;
    // hello//world,//my//name//is//zjq//
    while(s4 >> str1){ 
        counts[str1]++;
    }cout<<endl;

    for(const auto& count: counts){
        cout<<count.first<<":"<<count.second<<endl;
    }
}
```



## 技巧

```cpp
// 子串表示连续的, 子序列表示不连续
// 没有特别需要排序的要求, 最好使用unordered_map和unordered_set, 底层是hash, 索引速度快, 没有排序的过程
// 能使用&进行参数传递, 尽可能使用&, 提高内存使用效率

#include <string> // getline

string str;
getline(cin, str); //可以将带空格的字符放入到str中
cout<<str<<endl;
```



# 面试知识点

## [C++编译流程](https://www.cnblogs.com/ericling/articles/11736681.html)

[C/C++程序编译过程详解](C/C++程序编译过程详解)

1. 预处理: **预处理用于将所有的#include头文件以及宏定义替换成其真正的内容**
2. 编译: **将经过预处理之后的程序转换成特定汇编代码**
3. 汇编: **汇编过程将上一步的汇编代码转换成机器码**
4. 链接: **链接过程将多个目标文件以及所需的库文件(.so等)链接成最终的可执行文件(executable file)**。

![image-20210906112152587](D:/0_2024/work/README.assets/image-20210906112152587.png)

## [说一下 static 关键字的作用](https://www.runoob.com/w3cnote/cpp-static-usage.html)

1. 静态局部变量只初始化一次, 延长局部变量生命周期

2. 全局, 只能本文件中使用, 不能在其他文件中访问, 既是extern也不行 等于是在每个源文件中都定义了该变量一次

3. 头文件中定义: 每个CPP文件中会拷贝一份对应的变量

4. 修饰函数: 该函数只能本文件访问

5. 不想被释放时, 比如修饰函数中存放栈空间的数组, 可以加static

6. 类

   ```c
   class A{
       int a=0;
       static int b=0;
       static int c;
   public:
       void fun1(){}
       static void fun2(){}
       // 这句话本来就是错误的, 以为fun3比对象先实现, 但是a还没init
       static void fun3(){  cout<< a <<endl; } // err 
       static void fun4(){ cout << b << endl; } // 通过, 因为fun4和b一起初始化
       void fun5(){ cout << b << endl; } // 通过, 因为b先初始化, 创建对象实例的时候才初始化fun5
   }
   
   A::fun1(); // 1. err 因为类实例化对象后才能使用成员函数
   A::fun2(); // 2. 通过 因为类实例化对象之前已经给静态成员函数分配了空间
   A::fun3(); // 3. err 因为完成成员函数, 但是此时类成员变量还没有初始化, 因此错误
   
   A a = new A;
   a.fun3(); // 4. err 跟3一个道理, fun3先初始化, 但是里面包含的成员变量a未初始化, 编译错误
   
   总结:
   1. 静态成员函数不能使用非静态成员(函数和变量)
   2. 非静态成员函数可以调用静态成员
   3. 静态成员变量必须在初始化先 比如 int A::c = 20;
   ```

   

***

## 说一下 C++和 C 的区别

1. 思想: 面向对象, 面向过程的结构化编程语言
2. 语法: 封装(隐藏实现细节,代码模块化) 继承(派生类可以继承父类数据和方法,扩展已存在的模块, 代码重用) 多态(一个接口, 多种实现, 派生类重写父类虚函数, 实现接口重用)三种特性, 更安全:强制类型转化
3. 动态管理内存方法不一样: C是malloc和free, C++除此之外还有new/delete
4. 支持范式, 模板类, 函数模板等


***

## 指针和引用

| 指针                                                 | 引用                                       |
| ---------------------------------------------------- | ------------------------------------------ |
| 有自己的一块空间                                     | 引用只是一个别名                           |
| sizeof 看一个指针的大小是 4                          | 被引用对象的大小                           |
| 可以被初始化为 NULL                                  | 引用必须被初始化且必须是一个已有对象的引用 |
| 作为参数传递时, 指针需要被解引用才可以对对象进行操作 | 直接对引用的修改都会改变引用所指向的对象   |
| 可以有 const 指针                                    | 无                                         |
| 指针在使用中可以指向其它对象                         | 只能是一个对象的引用, 不能被改变           |
| 多级指针（**p）                                      | 引用只有一级                               |
| 指针和引用使用++运算符的意义不一样                   |                                            |
| 返回动态内存分配的对象或者内存, 必须使用指针         |                                            |



## 智能指针? 为何使用智能指针

减少内存泄漏等问题

### 解决的问题

1. 空指针和野指针
2. 对象重复释放
3. 内存泄漏
4. 不匹配new和delete

### unique_ptr, shared_ptr, weak_ptr

unique_ptr 注意: 初始化相当于一个空指针, 再用make_unique初始化; 唯一指针, 不允许共享, 禁止拷贝复制; 相当于当我相对一个对象进行操作, 但是我不想别的指针操作这个对象, 就可以用unique_ptr; 尽量不要对其赋值操作, 让他自生自灭

shared_ptr 允许多个指针指向, 类似原始指针, 继承了`p->name` 和 ` (*p).name`注意: 降低程序运行效率, shared_ptr析构函数不能太复杂, 特别慢, 当他析构的时候, 整个线程会阻塞, 

weak_ptr 打破循环引用, 只做观察指针, 看一下对象对象存不存在

auto_ptr已经不用了

[智能指针是线程安全的么?](http://www.cppblog.com/Solstice/archive/2013/01/28/197597.html) 显然智能指针控制写不是,因为智能指针操作不是原子性, 当赋值语句执行时, 其实智能指针拷贝对象同时还得对对象的计数进行+1操作, 这两步就会被其他线程钻空子了





C++里面的四个智能指针: auto_ptr, shared_ptr, weak_ptr, unique_ptr 其中后三个是c++11 支持，并且第一个已经被 11 弃用。

1. 作用是管理一个指针; 申请空间在函数结束时忘记释放, 造成内存泄漏, 而使用智能指针, 一旦智能指针超出类的作用域, 类会自动调用析构函数, 释放资源, 所以智能指针的作用原理在函数结束后, 自动释放内存空间;
2. auto_ptr<string> p1 (new string ("I reigned lonely as a cloud.”));
   auto_ptr<string> p2; 
   p2 = p1; //auto_ptr 不会报错. 此时p2掠夺了p1所有权, 使用p1的时候, 内存崩溃
3. unique_ptr<string> p3 (new string ("auto"));
   unique_ptr<string> p4; 
   p4 = p3;// 报错, 非法, 避免内存崩溃
4. shared_ptr共享拥有, 多个智能指针可以指向同一个对象, 该对象和其相关资源会在最后一个引用被销毁后释放
5. weak_ptr 是一种不控制对象生命周期的智能指针, 它指向一个 shared_ptr 管理的对象, 作为管理指针; 为了解决循环引用导致的内存泄漏, 构造函数不会改变引用计数, 不会对对象内存进行管理, 像是一个普通指针, 但会检测所管理的对象是否被释放, 从而避免内存泄漏;
   **

***

## #define和const区别

| const                        |
| ---------------------------- |
| 有类型有名字, 放到静态存储   |
| 编译时确定, 只有一个拷贝     |
| 可以用指针去指向该变量的地址 |
| 不能定义函数                 |

## 重载overload，覆盖（重写）override，隐藏（重定义）overwrite，这三者之间的区别

1. overload，将语义相近的几个函数用同一个名字表示，但是参数列表（参数的类型，个数，顺序不同）不同，这就是==函数重载==，返回值类型可以不同
   特征：相同范围（同一个类中）、函数名字相同、参数不同、virtual关键字可有可无
2. override，派生类覆盖基类的虚函数，实现接口的重用，==返回值类型必须相同==
   特征：==不同范围（基类和派生类）、函数名字相同、参数相同、基类中必须有virtual关键字==（必须是虚函数）
3. overwrite，派生类屏蔽了其同名的基类函数，返回值类型可以不同
   特征：不同范围（基类和派生类）、函数名字相同、参数不同或者参数相同且无virtual关键字



## 多态

### [动态多态和静态多态](https://www.cnblogs.com/lizhenghn/p/3667681.html)

多态的实现分为==静态多态和动态多态==

1. 静态多态: 主要是 ==重载== ，在编译的时候就已经确定；
2. 静态多态设计思想: 对于相关的对象类型，直接实现它们各自的定义，不需要共有基类，甚至可以没有任何关系。只需要各个具体类的实现中要求相同的接口声明，这里的接口称之为隐式接口。客户端把操作这些对象的函数定义为模板，当需要操作什么类型的对象时，直接对模板指定该类型实参即可（或通过实参演绎获得）。
3. 动态多态: 用虚函数机制实现的，在运行期间动态绑定
4. 动态多态设计思想: 对于相关的对象类型，确定它们之间的一个共同功能集，然后在基类中，把这些共同的功能声明为多个公共的虚函数接口。各个子类重写这些虚函数，以完成具体的功能。客户端的代码（操作函数）通过指向基类的引用或指针来操作这些对象，对虚函数的调用会自动绑定到实际提供的子类对象上去。

如动物音乐大赛, 乌鸦和狗和猫报名, 但是这三个对象都指向动物类(这是一个基类), 使用动物指针对乌鸦, 狗, 猫进行方法调用, 就是多态

### 动态多台和静态多态的比较

|        | 静态多态                                                     | 动态多态                                       |
| ------ | ------------------------------------------------------------ | ---------------------------------------------- |
| 优点   | 编译期完成, 效率高, 编译器可优化                             | 运行期动态绑定,                                |
|        | 强适配性和松耦合性, 通过偏特化,全特化处理特殊类型            | 实现与接口分离, 可以复用                       |
|        | 静态多态通过模板编程为C++带来了泛型设计概念, 如STL库         | 处理同一继承体系下异质对象集合的强大威力       |
| 缺点   | 用模板实现静态多态, 模板不足, 调试困难,编译耗时, 代码膨胀, 编译器支持的兼容性, | 运行期绑定, 运行开销大                         |
|        | 不能处理异质对象集合                                         | 编译器无法对虚函数进行优化                     |
|        |                                                              | 笨重的类继承体系, 对接口的修改影响整个类的层次 |
| 不同点 | 本质不同, 静态多态,编译阶段, 模板实现, 动态多态,运行阶段, 继承虚函数实现 |                                                |
|        | 动态多态接口是显式, 静态是隐式,                              |                                                |


https://www.cnblogs.com/zkfopen/p/11061414.html

### 虚函数表

```cpp
class B {
    virtual int f1 (void);  // 0
    virtual void f2 (int);  // 1
    virtual int f3 (int);   // 2
};

// 虚函数表
vptr -> [B::f1, B::f2, B::f3]
          0      1      2
```

首先对于包含虚函数的类, 编译器会为每个包含虚函数的类生成一张虚函数表，即存放每个虚函数地址的函数指针的数组，简称虚表(vtbl)，每个虚函数对应一个虚函数表中的下标。

除了为包含虚函数的类生成虚函数表以外，编译器还会为该类增加一个隐式成员变量，通常在该类实例化对象的起始位置，用于存放虚函数表的首地址，
该变量被称为虚函数表指针，简称虚指针(vptr)。例如：

```cpp
B* pb = new B;  /
pb->f3 (12);
// 被编译为
pb->vptr[2] (pb, 12); // B::f3  参数pb是this指针, 他首先找到虚函数表, 调用对应的f3函数

// 注意：虚表是一个类一张,而不是一个对象一张,同一个类的多个对象,通过各自的虚指针,共享同一张虚表。
vptr-> | vptr1  |   vptr2 |   vptr3 |
```

## 多态的工作原理(底层实现机制)

```cpp
// 继承自B的子类
class D : public B {
    int f1 (void); 
    int f3 (int);  
    virtual void f4 (void);
};

// 虚函数表
// 子类覆盖了基类的f1和f3,继承了基类的f2,增加了自己的f4,编译器同样会为子类生成一张专属于它的虚表。
// 如下所示, 当基类指向子类时, vptr->vptr(子类)->D::f3, 这是因为他根据动态绑定原则, 先不直接加载基类自身函数, 编译器在运行时, 根据基类指向的子类的vptr函数进行加载指令, 这就实现了多态
vptr(子类)-> D::f1, B::f2, D::f3, D::f4
             0       1     2      3
```

```cpp
// 指向子类虚表的虚指针就存放在子类对象的基类子对象中。例如：
B* pb = new D;  // 父类指向子类, 调用子类的方法
pb->f3 (12);
// 被编译为
pb->vptr(子类)[2] (pb, 12); // D::f3 pb是基类指针, 他首先找基类的虚函数表vptr, 
```


```cpp
// 示例
class A{
public: 
    A():m_ch('A'){}
    virtual void foo() {
        cout << m_ch << "::foo()" << endl ;
    }
    virtual void bar(){
        cout << m_ch << "::bar()" << endl ;
    }
private:
    char m_ch ;
} ;
class B:public A{
public:
    B():m_ch('B'){}
    void foo(){
        cout << "B::foo()" <<endl ;
    }
private:
    char m_ch ; 
} ;

int main(){
    A a ;
    void(**vptr_a)(A*) = *(void(***)(A*))&a ;
    cout << (void *)vptr_a <<endl ;                                 //0x8048bb0
    cout << "foo():"<<(void *)vptr_a[0] <<endl ;            //foo():0x8048992
    cout << "bar():" <<(void *)vptr_a[1] <<endl ;           //bar():0x80489d4
    vptr_a[0](&a) ;                                                              //A::foo()
    vptr_a[1](&a) ;                                                              //A::bar()
    cout << "-----------------------------------------" <<endl ;
    B b ;
    void(**vptr_b)(B*) = *(void(***)(B*))&b ;                
    cout << (void *)vptr_b <<endl ;                                 //0x8048ba0
    cout << "foo():"<<(void *)vptr_b[0] <<endl ;            //foo():0x8048a3a 
    cout << "bar():" <<(void *)vptr_b[1] <<endl ;           //bar():0x80489d4
    vptr_b[0](&b) ;                                                              //B::foo()
    vptr_b[1](&b) ;                                                              //A::bar()
}

```

上述程序说明了虚函数表是真实存在的：
void(**vptr_a)(A*) = *(void(***)(A*))&a ;建立一个vptr_a的虚函数表，如下图：

### 动态绑定

当编译器“看到”通过指针或者引用调用基类中的虚函数时，并不急于生成有关函数调用的指令，相反它会用一段代码替代该调用语句，这段代码在运行时被执行，完成如下操作：
1)根据调用指针或引用的目标对象找到其内部的虚表指针；
2)根据虚表指针找到其所指向的虚函数表；
3)根据虚函数名和函数指针在虚函数表中的索引，找到所调用虚函数的入口地址；
4)在完成函数调用的准备工作以后，直接跳转到虚函数入口地址处顺序执行函数体指令序列，直到从函数中返回。
3.动态绑定对性能的影响
1)虚函数表和虚指针的存在势必要增加内存空间的开销。
2)和普通函数调用相比，虚函数调用要多出一个步骤，增加运行时间的开销。
3)动态绑定会妨碍编译器通过内联优化代码，虚函数不能内联。



## 析构函数为何为虚函数:

父类设置为虚函数,保证new子类时,使用父类指针指向子类对象,释放父类指针时, 会自动释放子类空间, 防止内存泄漏

也就是父类指针释放的应该是子类对象的父类成员, 但是由于虚函数的特点, 同时会调用子类的析构函数

## map和set的实现

|          | map/set                        | unordered_map/unordered_set |
| -------- | ------------------------------ | --------------------------- |
| 底层     | 红黑树                         | 哈希表                      |
| 有序性   | 自动排序                       | 无序, key映射               |
| 查找时间 | O(logn)                        | O(1)                        |
|          | 空间占用率高(保存父子节点关系) | 空间占用率低                |

1. C++关联容器,红黑树,map是KV对,K索引,V数据, set中K为集合; 
2. map修改V不改K, 因为红黑树底层按照K排列,保证有序,如果可以修改K,首先需要删除K,调节树平衡,在插入修改后的K,调节平衡, 将会破坏map和set的结构; 
3. map支持下标查询,不存在默认值, 因此慎用, 建议find

***

## 指针和数组的区别?

```cpp
int arr[4] = {1,2,3,4};
int* p1 = arr;
int *p2 = &arr[0];
cout<<arr<<" "<< p1 << " "<<p2<<endl;
*(p1+4) // 越界, 你不能更改
// 0x7fffeebfabf0 0x7fffeebfabf0 0x7fffeebfabf0
```



| 指针                       | 数组 arr=[1,2,3], arr表示数组的首地址                        |
| -------------------------- | ------------------------------------------------------------ |
| 数据的地址                 | 保存数据                                                     |
| 间接访问数据, 获得指针内容 | 直接访问数据                                                 |
| 动态数据结构               | 固定数目, 数据类型相同                                       |
| malloc分配内存和free释放   | 隐式分配和删除                                               |
| 指向匿名数据, 操作匿名函数 | 自身作为数据名                                               |
|                            | *(arr+1) 表示第2个元素, 也就是数组的这个指针支持加减法, 加减的是元素位置 |
|                            |                                                              |

***

## [深浅拷贝](https://www.zhihu.com/question/36370072/answer/99839254)

==浅拷贝==实际上是对类成员的引用，==深拷贝==是对类成员的复制并且重新分配了内存

## 定义字符串的区别

const char * arr = "123"; char * brr = "123"; const char crr[] = "123"; char drr[] = "123"; 区别
const 常量区  
\* brr 地址存放

## [类型转换? cast](https://mp.weixin.qq.com/s/6YW7VX787X7kZiRBLbVn-Q)

1. reinterpret_cast：任意类型的指针之间的转换，对转换的结果不做任何保证(不建议使用)
2. dynamic_cast：只能用于存在虚函数的父子关系的强制类型转换
3. const_cast：删除变量的const属性方便再次赋值
4. static_cast：完成基础数据类型；同一个继承体系中类型的转换；任意类型与空指针类型 void* 之间的转换。不能对其他指针类型进行转换

```cpp
int i = 10;
double d2 = static_cast<double>(i); //相当于创建一个static_cast<double>类型的匿名对象赋值给d2
float *p4 = static_cast<float*>(&i); // err
int* p2 = reinterpret_cast<int*>(i); // 任意类型转换
int *p = const_cast<int*>(&i);
```

***

## [const指针](https://blog.csdn.net/xixihaha331/article/details/51280263)

1. 常量指针和指针常量

```cpp
int a = 20;
int b=40;
//------------------------------------------------
const int *p; // 常量指针值不变, 对象可变, 这就是为何 for(const auto &a : arr){}
p=&a;
// (*p)++;  // 这里会报错, 因为不能修改指向的值
p=&b;    // 这里不会报错, 因为可以指向别的对象
printf("a=%d, b=%d, *p=%d\n", a, b, *p); //a=20, b=40, *p=40

//------------------------------------------------
int* const p1 = &a; // 指针常量, 对象不可变, 值可变
// p1=&b; // 会报错, 因为指针是常量, 对象不能变
(*p1)++;  // 这里不会报错, 因为可以改值, 但是不可以改对象
printf("a=%d, b=%d, *p1=%d\n", a, b, *p1); //a=21, b=40, *p1=40

//------------------------------------------------
const int* const p2 = &b; // 常量指针常量值, 
// p2=&a; // 会报错, 因为指针是常量, 对象不能变
// (*p2)++;  // 会报错, 因为值是常量, 值不能变
printf("a=%d, b=%d, *p2=%d\n", a, b, *p2); //a=21, b=40, *p2=40
```

2. 常量参数 `void func(char *dest_str, const char *src_str)`
3. 修饰函数返回值 `const char *get_string(void)` 注意只能是指针传递, 如果是值传递就没用了
4. 修饰成员函数 `int get_count(void) const;` 不可以修改对象的成员变量



## [new/delete 与 malloc/free 的区别是什么](https://blog.csdn.net/linux_ever/article/details/50533149)

|                    | new/delete                                                   | malloc/free                                                  |
| ------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 类型               | C++的关键字                                                  | C语言库函数                                                  |
| 返回类型安全性     | 只需要对象名即可创建对象, 返回的是对象类型指针, 类型严格与对象匹配, 无需进行类型转换 | 开辟空间大小严格, 返回的是(void*), 需要通过强制类型转换成需要的类型 |
|                    | ==new调用构造函数,  delete调用析构函数, 能保证对象的初始化和回收内存== | 不会调用构造析构函数, 无法满足动态对象要求                   |
|                    | ==由于new对象返回的指针, 在底层空间还存储了这个对象开辟空间的大小, 因此在析构的时候能够根据这个存储进行回收内存== |                                                              |
| 内存分配失败       | ==抛出bac_alloc异常try { int *a = new int(); } catch (bad_alloc) {  }== | 返回NULL                                                     |
| 是都需要指定内存   | ==new无需指定, 编译器会根据类型自行计算==                    | 需要显式指出所需内存                                         |
| 实际创建步骤       | 1, 调用operator new函数, 分配一块足够大的内存, 方便存储特定类型对象,  2, 编译器运行相应的构造函数, 构造对象, 并传入初始值, 3, 对象构造完成, 返回一个指向该对象的指针 |                                                              |
| delete释放对象步骤 | 1, 调用对象析构函数, 2, 编译器调用operator delete函数释放内存空间 |                                                              |

new/delete 是 C++的关键字，而 malloc/free 是 C 语言的库函数，后者使用必须指明申请内存空间的大小，对于类类型的对象，后者不会调用构造函数和析构函数

***

## 构造函数和析构函数

| 构造函数                                                     | 析构函数                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 无类型, 没有返回值, 名字和类名相同, 可重载                   | 无类型, 无返回值, 名字和类名相同, 不带参数, 不可重载, 析构函数只有一个, 前面加个`~` |
| 作用: 完成对象的初始化                                       | 对象被删除前有系统自动执行清理工作                           |
| 当对象d被创建时, 会自动调用构造函数, 当未定义构造函数时,编译器会自动假设存在两个默认构造函数cdata::cdata(){} |                                                              |
| Cdate::Cdate(const Cdate& a)                                 |                                                              |
| 对象的析构函数在被销毁前调用, 对象何时销毁与其作用域相关     |                                                              |
| 全局对象在程序运行结束时销毁                                 |                                                              |
| 自动对象在离开作用域时销毁                                   |                                                              |
| 动态对象使用delete时销毁                                     |                                                              |




## allocator 内存分配和释放?

1. STL分配器封装与STL容器在内存管理上的底层细节; 
2. new(调用operate new配置内存,调用对象构造函数构造对象内容)delete(调用析构函数, 释放内存); 
3. allocator将两个阶段操作区分开来,内存配置有alloc::allocate()负责, 释放alloc::deallocate(); 对象构造由construct负责,内存析构由destroy负责; 
4. 为了提升内存管理效率, 减少申请小内存内存碎片问题, STL采用两级配置器, 当分配大小空间超过128B, 使用一级空间配置器(malloc, realloc, free进行内存管理和内存空间分配和释放),大于128B, 二级(内存池技术,通过空闲链表来管理内存)

***

## malloc 的原理

malloc函数用于动态分配内存; 为了减少内存碎片和系统调用开销, malloc采用内存池的方式, 首先申请大块内存作为堆, 再将堆分成多个内存块, 以块作为内存管理的基础单位; 当用户申请内存时, 直接从堆区分配一块合适的空闲块; malloc采用隐式链表结构将堆区分成连续,大小不一的块, 包含已分配和未分配块; 同时malloc采用显示链表结构管理所有空闲块, 双向链表, 每个空闲块记录一个连续的, 未分配的地址;
当进行内存分配时，Malloc 会通过隐式链表遍历所有的空闲块，选择满足要求的块进行分配；当进行内存合并时，malloc 采用边界标记法，根据每个块的前后块是否已经分配来决定是否进行块合并。
Malloc 在申请内存时，一般会通过 brk 或者 mmap 系统调用进行申请。其中当申请内存小于128K 时，会使用系统函数 brk 在堆区中分配；而当申请内存大于 128K 时，会使用系统函数 mmap在映射区分配。


## STL迭代器删除元素:

1. 对于序列容器vector,deque来讲,使用erase, 后面元素前移一位,erase返回下一个有效的迭代器; 
2. 对于map,set,使用erase,当前元素迭代器失效,但是因为结构为红黑树,所以删除元素不会影响下一元素迭代器,在调用erase之前,记录下一个元素的迭代器即可, 
3. 对于list,使用不连续分配内存, erase返回下一个有效迭代器

## vector和list 的区别

|                            Vector                            |                           List                           |
| :----------------------------------------------------------: | :------------------------------------------------------: |
| 连续存储的容器，动态数组，在堆上分配空间, 两倍容量增长, 顺序内存 |   动态双向链表, 堆上空间, 每删除一个元素会释放一个空间   |
| 访问：O(1)(随机访问);插入:后插快, 中间需要内存拷贝, 内存申请和释放; 删除: 后删快, 中间需要内存拷贝 | 访问: 随机访问差, 只能开头和结尾; 插入和删除快, 常数开销 |
|    适用场景：经常随机访问，且不经常对非尾节点进行插入删除    |                   适用于经常插入和删除                   |
|                          下面是区别                          |                                                          |
|                             数组                             |                         双向链表                         |
|                         支持随机访问                         |                      不支持随机访问                      |
|                           顺序内存                           |                         离散内存                         |
|                  中间节点插入删除会导致拷贝                  |                           不会                           |
|                  一次性分配好内存, 二倍扩容                  |            list每次在新节点插入会进行内存申请            |
|                  随机访问性能好,插入性能差                   |                           相反                           |

## STL迭代器的作用, 为何不用指针而用迭代器?

1. 迭代器提供一种方法顺序访问一个聚合对象各个元素, 而又不暴露该对象的内部表示; 或者说运用这种方法, 是的我们可以在不知道对象内部结构情况下, 按照一定顺序规则直接反问聚合对象的各个元素
2. 与指针的区别: 迭代器不是指针, 而是类模板, 表现像指针,模拟指针功能,重载指针操作符如->, *, ++等, 相当于一种智能指针, 根据不同类型的数据结构实现不同的操作
3. 迭代器类的访问方式就是把不同集合类的访问逻辑抽象出来, 是的不用暴露集合内部的结构而达到循环遍历的效果;

## C++中类成员的访问权限

C++通过 public、protected、private 三个关键字来控制成员变量和成员函数的访问权限，它们分别表示公有的、受保护的、私有的，被称为成员访问限定符
类内部, 不区分, 无限制
子类, 能访问父类的private以外的属性和方法
其他类, 只能访问public

## struct和class的区别

在 C++中，可以用 struct 和 class 定义类，都可以继承。区别在于：structural 的默认继承权限和默认访问权限是 public，而 class 的默认继承权限和默认访问权限是 private。另外，class 还可以定义模板类形参，比如 template <class T, int i>

## C++源文从文本到可执行文件经历过程

1. 预处理: 源代码文件包含的头文件, 预编译语句, 分析替换, 生成预编译文件
2. 编译阶段: 特定编码
3. 汇编阶段: 转化为机器码, 重定位目标文件
4. 链接阶段: 多个目标文件及所需要的库链接成为最终可执行文件

## include "" 和include <>的区别

1. 编译器预处理阶段查找头文件的路径不一样
2. 双引号查找路径: 当前头文件目录, 编译器设置的头文件路径, 系统变量路径path指定的路径
3. <>查找路径: 编译器设置的头文件, 系统变量


## fork,wait,exec 函数

父进程产生子进程使用 fork 拷贝出来一个父进程的副本，此时只拷贝了父进程的页表，两个进程都读同一块内存，当有进程写的时候使用写实拷贝机制分配内存，exec 函数可以加载一个 elf文件去替换父进程，从此父进程和子进程就可以运行不同的程序了。fork 从父进程返回子进程的 pid，从子进程返回 0.调用了 wait 的父进程将会发生阻塞，直到有子进程状态改变,执行成功返回 0，错误返回-1。exec 执行成功则子进程从新的程序开始运行，无返回值，执行失败返回-1

## STL 里 resize 和 reserve 的区别

1. resize(): 改变当前容器内含有元素的数量
   vector<int>v; 
   v.resize(20);
   v.push_back(2); // 此时的2是21位置
2. reserve(len): 改变当前容器最大容量, 不会生成元素; 如果reserve大于capacity, 重新分配个len的对象空间, 原始对象复制过来



## BSS端等六段: C++的内存管理?

![代码存储结构](D:/0_2024/work/README.assets/代码存储结构.jpg)
在C++中, 虚拟内存分为代码段,数据段, BSS段, 堆区, 文件映射区, 栈区六个部分

1. 代码段: 包括只读存储区(字符串常量)和文本区(程序的机器代码), 只读
2. 数据段: 存储程序中已初始化的全局变量和静态变量; 属于静态内存分配
3. BSS段: 存储未初始化或初始化为0的全局变量和静态变量(局部+全局); 属于静态分配, 程序结束后静态变量资源由系统自动释放。
4. 堆区:  调用 new/malloc 函数时在堆区动态分配内存，同时需要调用 delete/free 来手动释放申请的内存。频繁的malloc free造成内存空间不连续, 产生碎片, 因此堆比栈效率低
5. 映射区:存储动态链接库以及调用 mmap 函数进行的文件映射
6. 栈区: 存储函数的返回地址,返回值, 参数, 局部变量; 编译器自动释放,

## 内存泄漏

1. 堆内存泄漏, 如果malloc, new, realloc从堆分配的内存, 由于程序错误造成内存未释放, 产生的
2. 系统资源泄漏: 程序使用系统资源: bitmap, handle, socket忘记释放, 将导致系统效能和稳定差
3. 没有将基类析构函数定义为虚函数, 基类指针指向子类对象后, 释放基类时, 子类资源不会被正确释放


## 判断内存泄漏:

1. 内存泄漏原因: 通常调用malloc/new等内存申请操作, 缺少对应的free/delete
2. 判断内存是否泄漏, 可以使用Linux环境下的内存泄漏检测工具, 也可以在写代码时添加内存申请和释放统计功能, 统计申请和释放是否一致, 以此判断内存泄漏
   varglind，mtrace 检测


## 如何采用单线程的方式处理高并发?

I/O 复用 异步回调

## 大端小端?

大端是指低字节存储在高地址；小端存储是指低字节存储在低地址。我们可以根据联合体来判断该系统是大端还是小端。因为联合体变量总是从低地址存储。

## 设计一个server, 实现多个客户端请求

1. 多线程, 
2. 线程池 ,
3. IO复用

## [C++的线程锁你知道几种?](https://www.cnblogs.com/steamedbun/p/9376458.html)

### 互斥锁mutex

用于控制多线程对他们共享资源互斥访问的一个信号量, 也就是说为了避免多个线程同一个时刻操作一个共同资源;例如线程池中的多个空闲线程核一个任务队列, 任何一个线程都要使用互斥锁互斥访问任务队列, 避免多个线程同时访问任务队列发生错乱, 如果其他线程想要获取互斥锁, 只能阻塞等待

### 条件锁

条件锁就是所谓的条件变量, 某一个线程因为某个条件未满足时, 可以使用条件变量是程序处于阻塞状态, 一旦条件满足以信号量的方式唤醒一个因为该条件而被阻塞的线程

### 自旋锁

假设我们有一个两个处理器core1和core2计算机，现在在这台计算机上运行的程序中有两个线程：T1和T2分别在处理器core1和core2上运行，两个线程之间共享着一个资源。

首先我们说明互斥锁的工作原理，互斥锁是是一种sleep-waiting的锁。假设线程T1获取互斥锁并且正在core1上运行时，此时线程T2也想要获取互斥锁（pthread_mutex_lock），但是由于T1正在使用互斥锁使得T2被阻塞。当T2处于阻塞状态时，T2被放入到等待队列中去，处理器core2会去处理其他任务而不必一直等待（忙等）。也就是说处理器不会因为线程阻塞而空闲着，它去处理其他事务去了。

而自旋锁就不同了，自旋锁是一种busy-waiting的锁。也就是说，如果T1正在使用自旋锁，而T2也去申请这个自旋锁，此时T2肯定得不到这个自旋锁。与互斥锁相反的是，此时运行T2的处理器core2会一直不断地循环检查锁是否可用（自旋锁请求），直到获取到这个自旋锁为止。

### 读写锁

说到读写锁我们可以借助于“读者-写者”问题进行理解。首先我们简单说下“读者-写者”问题。计算机中某些数据被多个进程共享，对数据库的操作有两种：一种是读操作，就是从数据库中读取数据不会修改数据库中内容；另一种就是写操作，写操作会修改数据库中存放的数据。因此可以得到我们允许在数据库上同时执行多个“读”操作，但是某一时刻只能在数据库上有一个“写”操作来更新数据。这就是一个简单的读者-写者模型。

1 如果一个线程用读锁锁定了临界区，那么其他线程也可以用读锁来进入临界区，这样可以有多个线程并行操作。这个时候如果再用写锁加锁就会发生阻塞。写锁请求阻塞后，后面继续有读锁来请求时，这些后来的读锁都将会被阻塞。这样避免读锁长期占有资源，防止写锁饥饿。

2 如果一个线程用写锁锁住了临界区，那么其他线程无论是读锁还是写锁都会发生阻塞。

## 什么类不能被继承

1. 将自身的构造函数与析构函数放在private作用域
2. 友元类 friend
3. class FinalClass final { };

## 结构体和类大小

空的为1, 内存对齐, int double, char 则4,8,1+3, 后面的char需要对齐

## 类的什么方法不能是虚函数

普通函数, 友元函数, 构造函数, 内联成员, 静态态成员函数



## hash扩容

HashMap初始容量大小16，扩容因子为0.75，扩容倍数为2；

底层是数组加链表, 随着数据的增加, hash冲突会增加, 因此设置扩容因子, 当数据数量到达hash容量的扩容因子倍, 就会以二倍扩容, 16*2=32, 然后重新计算每个元素在数组中的位置.

## C++派生类的构造函数和析构函数执行顺序及其构造形式

### 派生类的构造函数和析构函数的执行顺序

   <font color=red>先执行基类的构造函数，随后执行派生类的构造函数，当撤销派生类对象时，先执行派生类的析构函数，再执行基类的析构函数。</font>

### 派生类构造函数和析构函数的构造原则

   1）派生类不能继承基类中的构造函数和析构函数。
   当基类含有带参数的构造函数时，派生类必须定义构造函数，以提供把参数传递给基类构造函数的途径。
   2）当派生类中还有对象成员时，其构造函数的一般形式为：

### 注意

1. 当基类构造函数不带参数时，派生类不一定需要定义构造函数，然而当基类的析构函数哪怕只有一个参数，也要为派生类定义构造函数，甚至所定义的派生类析构函数的函数体可能为空，仅仅起到传递参数的作用
2. 当基类使用缺省构造函数时或不带参数的构造函数时，则在派生类中定义构造函数时，可以省略：基类构造函数名（参数表），此时若派生类不需要构造 函数，则可以不定义构造函数。
3. 如果派生类的基类也是一个派生类，则每个派生类只需负责其直接基类的 构造，依次上溯。
4. 如果析构函数是不带参数的，在派生类中是否要定义析构函数与它所属的 基类无关，故基类的析构函数不会因为派生类没有析构函数而得不到执行，他们各自是独立的

## 虚函数调用的工作原理 基于虚函数多态的机制

### 虚函数和纯虚函数

虚函数: C++中用于实现多态的机制, 核心理念是通过基类访问派生类定义的函数, 是C++中多态的一个重要体现; 利用基类指针访问派生类中的虚函数, 这种情况采用的是动态绑定技术;

纯虚函数: 基类声明的虚函数, 基类无定义, 要求任何派生类都需要定义自己的实现方法, 在基类中实现纯虚函数的方法是在函数原型后面加 `=0` 纯虚函数不能实例化对象;

### 抽象类

特殊类, 为了抽象和设计的目的建立的, 处于继承层次结构的较上层;

定义: 带有纯虚函数的类为抽象类

作用: 将有关操作作为结果接口组织在一个继承层次结构中, 由他来为派生类提供一个公共根, 派生类将具体实现在其积累中作为接口的操作. 所以派生类实际上刻画了一组子类的操作接口的通用语义, 这些语义传给子类, 子类可以具体实现这些语义, 在将这些语义传给自己的子类

注意: 抽象类只能作为基类, 纯虚函数的实现由派生类给出; 如果派生类中没有重新定义纯虚函数，而只是继承基类的纯虚函数，则这个派生类仍然还是一个抽象类。如果派生类中给出了基类纯虚函数的实现，则该派生类就不再是抽象类了，它是一个可以建立对象的具体的类。



### 虚函数表

```cpp
class B {
    virtual int f1 (void);  // 0
    virtual void f2 (int);  // 1
    virtual int f3 (int);   // 2
};

// 虚函数表
vptr -> [B::f1, B::f2, B::f3]
          0      1      2
```

首先对于包含虚函数的类, 编译器会为每个包含虚函数的类生成一张虚函数表，即存放每个虚函数地址的函数指针的数组，简称虚表(vtbl)，每个虚函数对应一个虚函数表中的下标。

除了为包含虚函数的类生成虚函数表以外，编译器还会为该类增加一个隐式成员变量，通常在该类实例化对象的起始位置，用于存放虚函数表的首地址，
该变量被称为虚函数表指针，简称虚指针(vptr)。例如：

```cpp
B* pb = new B;
pb->f3 (12);
// 被编译为
pb->vptr[2] (pb, 12); // B::f3       参数pb是this指针

// 注意：虚表是一个类一张,而不是一个对象一张,同一个类的多个对象,通过各自的虚指针,共享同一张虚表。
vptr-> | vptr1  |   vptr2 |   vptr3 |
```

### 多态的工作原理(底层实现机制)

```cpp
// 继承自B的子类
class D : public B {
    int f1 (void); 
    int f3 (int);  
    virtual void f4 (void);
};

// 虚函数表
// 子类覆盖了基类的f1和f3,继承了基类的f2,增加了自己的f4,编译器同样会为子类生成一张专属于它的虚表。
vptr(子类)-> D::f1, B::f2, D::f3, D::f4
             0       1     2      3
```

```cpp
// 指向子类虚表的虚指针就存放在子类对象的基类子对象中。例如：
B* pb = new D;  // 父类指向子类, 调用子类的方法
pb->f3 (12);
// 被编译为
pb->vptr(子类)[2] (pb, 12); // D::f3
```


```cpp
// 示例
class A{
public: 
    A():m_ch('A'){}
    virtual void foo() {
        cout << m_ch << "::foo()" << endl ;
    }
    virtual void bar(){
        cout << m_ch << "::bar()" << endl ;
    }
private:
    char m_ch ;
} ;
class B:public A{
public:
    B():m_ch('B'){}
    void foo(){
        cout << "B::foo()" <<endl ;
    }
private:
    char m_ch ; 
} ;

int main(){
    A a ;
    void(**vptr_a)(A*) = *(void(***)(A*))&a ;
    cout << (void *)vptr_a <<endl ;                                 //0x8048bb0
    cout << "foo():"<<(void *)vptr_a[0] <<endl ;            //foo():0x8048992
    cout << "bar():" <<(void *)vptr_a[1] <<endl ;           //bar():0x80489d4
    vptr_a[0](&a) ;                                                              //A::foo()
    vptr_a[1](&a) ;                                                              //A::bar()
    cout << "-----------------------------------------" <<endl ;
    B b ;
    void(**vptr_b)(B*) = *(void(***)(B*))&b ;                
    cout << (void *)vptr_b <<endl ;                                 //0x8048ba0
    cout << "foo():"<<(void *)vptr_b[0] <<endl ;            //foo():0x8048a3a 
    cout << "bar():" <<(void *)vptr_b[1] <<endl ;           //bar():0x80489d4
    vptr_b[0](&b) ;                                                              //B::foo()
    vptr_b[1](&b) ;                                                              //A::bar()
}

```

上述程序说明了虚函数表是真实存在的：



### 动态绑定

当编译器“看到”通过指针或者引用调用基类中的虚函数时，并不急于生成有关函数调用的指令，相反它会用一段代码替代该调用语句，这段代码在运行时被执行，完成如下操作：
1)根据调用指针或引用的目标对象找到其内部的虚表指针；
2)根据虚表指针找到其所指向的虚函数表；
3)根据虚函数名和函数指针在虚函数表中的索引，找到所调用虚函数的入口地址；
4)在完成函数调用的准备工作以后，直接跳转到虚函数入口地址处顺序执行函数体指令序列，直到从函数中返回。
3.动态绑定对性能的影响
1)虚函数表和虚指针的存在势必要增加内存空间的开销。
2)和普通函数调用相比，虚函数调用要多出一个步骤，增加运行时间的开销。
3)动态绑定会妨碍编译器通过内联优化代码，虚函数不能内联。



# ref

[nwu_zjq](https://gitee.com/nwu_zjq)

