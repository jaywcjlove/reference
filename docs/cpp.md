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
<!--rehype:wrap-class=row-span-5-->

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
<!--rehype:wrap-class=row-span-5-->

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

如果要多次获取结果，可以使用`std::shared_future`，其会返回结果的一个**拷贝**。

```cpp
std::shared_future<T> result;
```

对于不可拷贝对象，可以在`std::shared_future`中存储对象的指针，而非指针本身。

### 创建线程

```cpp
void threadFunction() {
  // 线程函数体
  std::cout << "From thread" << std::endl;
}

int main() {
  // 创建线程并开始执行线程函数
  std::thread t(threadFunction);
  
  // 等待线程执行完毕
  t.join();
  
  return 0;
}
```

### 传递参数给线程函数

```cpp
void threadFunction(int value) {
  // 线程函数体
  std::cout << "Received value: " << value << std::endl;
}

int main() {
  int data = 42;
  std::thread t(threadFunction, data);
  t.join();
  return 0;
}
```

### 使用Lambda表达式创建线程

```cpp
int main() {
  int data = 42;
  std::thread t([data]() {
      // Lambda 表达式作为线程函数
      std::cout << "Received value: " << data << std::endl;
  });
  t.join();
  return 0;
}
```

### **处理线程间的同步：**

```cpp
#include <mutex>

std::mutex mtx;

void threadFunction() {
  std::lock_guard<std::mutex> lock(mtx);
  std::cout << "Thread safe output." << std::endl;
}

int main() {
  std::thread t1(threadFunction);
  std::thread t2(threadFunction);
  t1.join();
  t2.join();
  return 0;
}
```

### **使用`std::async`启动异步任务：**

```cpp
#include <future>

int taskFunction() {
  // 异步任务
  return 42;
}

int main() {
  // 启动异步任务
  std::future<int> fut = std::async(std::launch::async, taskFunction);
  
  // 获取异步任务的结果
  int result = fut.get();
  
  std::cout << "Result: " << result << std::endl;
  return 0;
}
```

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
