Java 备忘清单
===

该备忘单是针对 Java 初学者的速成课程，有助于复习 Java 语言的基本语法。

入门
--------

### Hello.java
<!--rehype:wrap-class=row-span-2-->

```java
public class Hello {
  // 主要方法
  public static void main(String[] args)
  {
    // 输出: Hello, world!
    System.out.println("Hello, world!");
  }
}
```

编译和运行

```shell
$ javac Hello.java
$ java Hello
Hello, world!
```

### 变量 Variables

```java
int num = 5;
float floatNum = 5.99f;
char letter = 'D';
boolean bool = true;
String site = "jaywcjlove.github.io";
```

### 原始数据类型
<!--rehype:wrap-class=row-span-2-->

| 数据类型 | 大小   | 默认 | 范围               |
|-----------|--------|---------|---------------------|
| `byte`    | 1 byte | 0       | -128 ^to^ 127       |
| `short`   | 2 byte | 0       | -2^15^ ^to^ 2^15^-1 |
| `int`     | 4 byte | 0       | -2^31^ ^to^ 2^31^-1 |
| `long`    | 8 byte | 0       | -2^63^ ^to^ 2^63^-1 |
| `float`   | 4 byte | 0.0f    | _N/A_               |
| `double`  | 8 byte | 0.0d    | _N/A_               |
| `char`    | 2 byte | \\u0000 | 0 ^to^ 65535        |
| `boolean` | _N/A_  | false   | true / false        |
<!--rehype:className=show-header-->

### 字符串 Strings

```java
String first = "John";
String last = "Doe";
String name = first + " " + last;
System.out.println(name);
```

查看: [Strings](#java-字符串)

### 循环 Loops

```java
String word = "QuickRef";
for (char c: word.toCharArray()) {
  System.out.print(c + "-");
}
// 输出: Q-u-i-c-k-R-e-f-
```

查看: [Loops](#java-循环)

### 数组 Arrays

```java
char[] chars = new char[10];
chars[0] = 'a'
chars[1] = 'b'
String[] letters = {"A", "B", "C"};
int[] mylist = {100, 200};
boolean[] answers = {true, false};
```

查看: [Arrays](#java-数组)

### 交换变量 Swap

```java
int a = 1;
int b = 2;
System.out.println(a + " " + b); // 1 2
int temp = a;
a = b;
b = temp;
System.out.println(a + " " + b); // 2 1
```

### 类型转换 Type Casting

```java
// Widening
// byte<short<int<long<float<double
int i = 10;
long l = i;               // 10
// Narrowing
double d = 10.02;
long l = (long)d;         // 10
String.valueOf(10);       // "10"
Integer.parseInt("10");   // 10
Double.parseDouble("10"); // 10.0
```

### 条件语句 Conditionals

```java
int j = 10;
if (j == 10) {
  System.out.println("I get printed");
} else if (j > 10) {
  System.out.println("I don't");
} else {
  System.out.println("I also don't");
}
```

查看: [Conditionals](#条件语句 Conditionals)

### 用户输入

```java
Scanner in = new Scanner(System.in);
String str = in.nextLine();
System.out.println(str);
int num = in.nextInt();
System.out.println(num);
```

Java 字符串
-------

### 基本的

```java
String str1 = "value";
String str2 = new String("value");
String str3 = String.valueOf(123);
```

### 字符串连接

```java
String s = 3 + "str" + 3;     // 3str3
String s = 3 + 3 + "str";     // 6str
String s = "3" + 3 + "str";   // 33str
String s = "3" + "3" + "23";  // 3323
String s = "" + 3 + 3 + "23"; // 3323
String s = 3 + 3 + 23;        // 29
```

### 字符串生成器
<!--rehype:wrap-class=row-span-3-->

```java
StringBuilder sb = new StringBuilder(10);
```

---

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
|   |   |   |   |   |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

---

```java
sb.append("Reference");
```

---

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| R | e | f | e | r | e | n | c | e |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

---

```java
sb.delete(3, 9);
```

---

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| R | e | f |   |   |   |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

---

```java
sb.insert(0, "My ");
```

---

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | R | e | f |   |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

---

```java
sb.append("!");
```

---

```java
┌───┬───┬───┬───┬───┬───┬───┬───┬───┐
| M | y |   | R | e | f | ! |   |   |
└───┴───┴───┴───┴───┴───┴───┴───┴───┘
0   1   2   3   4   5   6   7   8   9
```

### 比较

```java
String s1 = new String("QuickRef");
String s2 = new String("QuickRef");
s1 == s2          // false
s1.equals(s2)     // true
"AB".equalsIgnoreCase("ab")  // true
```

### 操纵

```java
String str = "Abcd";
str.toUpperCase();     // ABCD
str.toLowerCase();     // abcd
str.concat("#");       // Abcd#
str.replace("b", "-"); // A-cd
"  abc ".trim();       // abc
"ab".toCharArray();    // {'a', 'b'}
```

### 信息

```java
String str = "abcd";
str.charAt(2);       // c
str.indexOf("a")     // 0
str.indexOf("z")     // -1
str.length();        // 4
str.toString();      // abcd
str.substring(2);    // cd
str.substring(2,3);  // c
str.contains("c");   // true
str.endsWith("d");   // true
str.startsWith("a"); // true
str.isEmpty();       // false
```

### 不可变

```java
String str = "hello";
str.concat("world");
// 输出: hello
System.out.println(str);
```

---

```java
String str = "hello";
String concat = str.concat("world");
// 输出: helloworld
System.out.println(concat);
```

一旦创建就不能修改，任何修改都会创建一个新的String

Java 数组
-------

### 声明 Declare

```java
int[] a1;
int[] a2 = {1, 2, 3};
int[] a3 = new int[]{1, 2, 3};
int[] a4 = new int[3];
a4[0] = 1;
a4[2] = 2;
a4[3] = 3;
```

### 修改 Modify

```java
int[] a = {1, 2, 3};
System.out.println(a[0]); // 1
a[0] = 9;
System.out.println(a[0]); // 9
System.out.println(a.length); // 3
```

### 循环 (读 & 写)

```java
int[] arr = {1, 2, 3};
for (int i=0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
    System.out.print(arr[i] + " ");
}
// 输出: 2 4 6
```

### Loop (Read)

```java
String[] arr = {"a", "b", "c"};
for (int a: arr) {
    System.out.print(a + " ");
}
// 输出: a b c
```

### 二维数组 Multidimensional Arrays

```java
int[][] matrix = { {1, 2, 3}, {4, 5} };
int x = matrix[1][0];  // 4
// [[1, 2, 3], [4, 5]]
Arrays.deepToString(matrix)
for (int i = 0; i < a.length; ++i) {
  for(int j = 0; j < a[i].length; ++j) {
    System.out.println(a[i][j]);
  }
}
// 输出: 1 2 3 4 5 6 7
```

### 排序 Sort

```java
char[] chars = {'b', 'a', 'c'};
Arrays.sort(chars);
// [a, b, c]
Arrays.toString(chars);
```

Java 条件语句
-----------

### 运算符
<!--rehype:wrap-class=row-span-3-->

- `+` _(加法运算符(也用于字符串连接))_
- `-` _(减法运算符)_
- `*` _(乘法运算符)_
- `/` _(分区运算符)_
- `%` _(余数运算符)_
- `=` _(简单赋值运算符)_
- `++` _(增量运算符；将值增加 1)_
- `--` _(递减运算符；将值减 1)_
- `!` _(逻辑补码运算符；反转布尔值)_
<!--rehype:className=style-round-->

---

- `==` _(等于)_
- `!=` _(不等于)_
- `>` _(比...更棒)_
- `>=` _(大于或等于)_
- `<` _(少于)_
- `<=` _(小于或等于)_
<!--rehype:className=cols-2 style-round-->

---

- `&&` _条件与_
- `||` _条件或_
- [?:](#三元运算符) _三元(if-then-else 语句的简写)_
<!--rehype:className=style-round-->

---

- `instanceof` _(将对象与指定类型进行比较)_
<!--rehype:className=style-round-->

---

- `~` _(一元按位补码)_
- `<<` _(签名左移)_
- `>>` _(有符号右移)_
- `>>>` _(无符号右移)_
- `&` _(按位与)_
- `^` _(按位异或)_
- `|` _(按位包含 OR)_
<!--rehype:className=cols-2 style-round-->

### If else

```java
int k = 15;
if (k > 20) {
  System.out.println(1);
} else if (k > 10) {
  System.out.println(2);
} else {
  System.out.println(3);
}
```

### Switch
<!--rehype:wrap-class=row-span-2-->

```java
int month = 3;
String str;
switch (month) {
  case 1:
    str = "January";
    break;
  case 2:
    str = "February";
    break;
  case 3:
    str = "March";
    break;
  default:
    str = "Some other month";
    break;
}
// 输出: Result March
System.out.println("Result " + str);
```

### 三元运算符

```java
int a = 10;
int b = 20;
int max = (a > b) ? a : b;
// 输出: 20
System.out.println(max);
```

### 逻辑运算符

```java
// 与运算
if (condition1 && condition2) {
  // 如果 condition1 和 condition2 都成立
  // 则执行此处的代码
}

// 或运算
if (condition1 || condition2) {
  // 如果condition1或condition2任意一个成立
  // 则执行此处的代码
}

// 非运算
if (!condition) {
  // 如果条件不成立，则执行此处的代码
}
```

### 比较运算

```java
// 等于
if (a == b) {
    // 如果a等于b，则执行此处的代码
}

// 不等于
if (a != b) {
    // 如果a不等于b，则执行此处的代码
}

// 大于、大于等于、小于、小于等于
if (a > b) {}
if (a >= b) {}
if (a < b) {}
if (a <= b) {}
```

Java 循环
----

### For 循环

```java
for (int i = 0; i < 10; i++) {
  System.out.print(i);
}
// 输出: 0123456789
```

---

```java
for (int i = 0,j = 0; i < 3; i++,j--) {
  System.out.print(j + "|" + i + " ");
}
// 输出: 0|0 -1|1 -2|2
```

### 增强的 For 循环

```java
int[] numbers = {1,2,3,4,5};
for (int number: numbers) {
  System.out.print(number);
}
// 输出: 12345
```

用于循环数组或列表

### While 循环

```java
int count = 0;
while (count < 5) {
  System.out.print(count);
  count++;
}
// 输出: 01234
```

### Do While 循环

```java
int count = 0;
do {
  System.out.print(count);
  count++;
} while (count < 5);
// 输出: 01234
```

### 继续声明

```java
for (int i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  System.out.print(i);
}
// 输出: 01245
```

### 中断语句

```java
for (int i = 0; i < 5; i++) {
  System.out.print(i);
  if (i == 3) {
    break;
  }
}
// 输出: 0123
```

Java 多线程
---

### 创建线程
<!--rehype:wrap-class=row-span-2 col-span-2-->

```java
// 实现Runnable接口
public class RunnableThread implements Runnable {
    @Override
    public void run() {
       // todo something
    }
}
```

实现Callable接口,T 替换成实际类型

```java
public class CallableTask implements Callable<T> {
    @Override
    public T call() throws Exception {
        // todo something
        return null;
    }
}
```

继承Thrad类

```java
public class ExtendsThread extends Thread {
    @Override
    public void run() {
       // todo something
    }
}
```

运行线程

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
    new Thread(new RunnableThread()).start();
    new ExtendsThread2().start();
    FutureTask<Integer> integerFutureTask = new FutureTask<>(new CallableTask());
    integerFutureTask.run();
}

```

### 线程池

- corePoolSize: 核心线程数
- maximumPoolSize: 最大线程数
- keepAliveTime: 线程空闲时间
- timeUni: 线程空闲时间单位
- workQueue: 线程等待队列
- threadFactory: 线程创建工厂
- handler: 拒绝策略

```java
ThreadPoolExecutor threadPoolExecutor
  = new ThreadPoolExecutor(
  2, 5,
  5, TimeUnit.SECONDS,
  new ArrayBlockingQueue<>(10),
  new DefaultThreadFactory("pollName"),
  new ThreadPoolExecutor.CallerRunsPolicy()
);

// 内置的线程池, 不推荐生产使用
Executors.newCachedThreadPool();
Executors.newFixedThreadPool(10);
Executors.newScheduledThreadPool(10);
Executors.newSingleThreadExecutor();
```

### synchronized

```java
// 代码块
synchronized(obj) {
   ...
}

// (静态)方法
public synchronized
  (static) void methodName() {
   ...
}
```

### 线程编排
<!--rehype:wrap-class=row-span-2 col-span-2-->

```java
// CountDownLatch
CountDownLatch countDownLatch = new CountDownLatch(2);
new Thread(() -> {
    try {
       ...
    }finally {
       countDownLatch.countDown();
    }
}).start();
countDownLatch.await();
```

CompletableFuture

```java
CompletableFuture<Void> task1 = CompletableFuture.runAsync(() -> {});
CompletableFuture<Void> task2 = CompletableFuture.runAsync(() -> {});
CompletableFuture<Void> task3 = CompletableFuture.runAsync(() -> {});
CompletableFuture.allOf(task1, task2, task3).get();
```

Semaphore

```java
Semaphore semaphore = new Semaphore(5);
try {
    semaphore.acquire();
} finally {
    semaphore.release();
}
```

### ThreadLocal

```java
ThreadLocal<Integer> threadLocal
    = new ThreadLocal<>();
```

使用完之后一定要记得 `remove`, 否则会内存泄露

```java
threadLocal.set(1);
threadLocal.get();
threadLocal.remove();
```

### 线程等待与唤醒

```java
// 需要synchronized修饰的代码块才能使用
wait();
notify();
notifyAll();

// 使用lock的条件唤醒
ReentrantLock lock = new ReentrantLock();
Condition condition= lock.newCondition();
lock.lock();
try{
   // 当前线程唤醒或等待
    condition.await();
    condition.signal();
    condition.signalAll();
} finally {
  lock.unlock
}

// LockSupport,可以先unpark,后续park不会阻塞线程
LockSupport.park(obj);
LockSupport.unpark(thread);
```

Java 框架搜集
---

### Java 集合
<!--rehype:wrap-class=col-span-2 row-span-2-->

集合 | Interface   | 有序 | 已排序 | 线程安全 | 复制 | Nullable
:-|:-|:-|:-|:-|:-|:-
[ArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayList.html)                                    | List        | Y       | _N_    | _N_         | Y         | Y
[Vector](https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html)                                          | List        | Y       | _N_    | Y           | Y         | Y
[LinkedList](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedList.html)                                  | List, Deque | Y       | _N_    | _N_         | Y         | Y
[CopyOnWriteArrayList](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArrayList.html)   | List        | Y       | _N_    | Y           | Y         | Y
[HashSet](https://docs.oracle.com/javase/8/docs/api/java/util/HashSet.html)                                        | Set         | _N_     | _N_    | _N_         | _N_       | One `null`
[LinkedHashSet](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashSet.html)                            | Set         | Y       | _N_    | _N_         | _N_       | One `null`
[TreeSet](https://docs.oracle.com/javase/8/docs/api/java/util/TreeSet.html)                                        | Set         | Y       | Y      | _N_         | _N_       | _N_
[CopyOnWriteArraySet](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/CopyOnWriteArraySet.html)     | Set         | Y       | _N_    | Y           | _N_       | One `null`
[ConcurrentSkipListSet](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListSet.html) | Set         | Y       | Y      | Y           | _N_       | _N_
[HashMap](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)                                        | Map         | _N_     | _N_    | _N_         | _N (key)_ | One `null` _(key)_
[HashTable](https://docs.oracle.com/javase/8/docs/api/java/util/Hashtable.html)                                    | Map         | _N_     | _N_    | Y           | _N (key)_ | _N (key)_
[LinkedHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/LinkedHashMap.html)                            | Map         | Y       | _N_    | _N_         | _N (key)_ | One `null` _(key)_
[TreeMap](https://docs.oracle.com/javase/8/docs/api/java/util/TreeMap.html)                                        | Map         | Y       | Y      | _N_         | _N (key)_ | _N (key)_
[ConcurrentHashMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentHashMap.html)         | Map         | _N_     | _N_    | Y           | _N (key)_ | _N_
[ConcurrentSkipListMap](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentSkipListMap.html) | Map         | Y       | Y      | Y           | _N (key)_ | _N_
[ArrayDeque](https://docs.oracle.com/javase/8/docs/api/java/util/ArrayDeque.html)                                  | Deque       | Y       | _N_    | _N_         | Y         | _N_
[PriorityQueue](https://docs.oracle.com/javase/8/docs/api/java/util/PriorityQueue.html)                            | Queue       | Y       | _N_    | _N_         | Y         | _N_
[ConcurrentLinkedQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedQueue.html) | Queue       | Y       | _N_    | Y           | Y         | _N_
[ConcurrentLinkedDeque](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentLinkedDeque.html) | Deque       | Y       | _N_    | Y           | Y         | _N_
[ArrayBlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ArrayBlockingQueue.html)       | Queue       | Y       | _N_    | Y           | Y         | _N_
[LinkedBlockingDeque](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/LinkedBlockingDeque.html)     | Deque       | Y       | _N_    | Y           | Y         | _N_
[PriorityBlockingQueue](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/PriorityBlockingQueue.html) | Queue       | Y       | _N_    | Y           | Y         | _N_
<!--rehype:className=show-header-->

### ArrayList

```java
List<Integer> nums = new ArrayList<>();
// 添加
nums.add(2);
nums.add(5);
nums.add(8);
// 检索
System.out.println(nums.get(0));
// 为循环迭代编制索引
for (int i = 0; i < nums.size(); i++) {
    System.out.println(nums.get(i));
}
nums.remove(nums.size() - 1);
nums.remove(0); // 非常慢
for (Integer value : nums) {
    System.out.println(value);
}
// lambda 打印元素
nums.forEach(
  e -> System.out.println(e.toString())
);
```

### HashMap

```java
Map<Integer, String> m = new HashMap<>();
m.put(5, "Five");
m.put(8, "Eight");
m.put(6, "Six");
m.put(4, "Four");
m.put(2, "Two");
// 检索
System.out.println(m.get(6));
// Lambda forEach
m.forEach((key, value) -> {
    String msg = key + ": " + value;
    System.out.println(msg);
});
```

### ConcurrentHashMap

```java
ConcurrentHashMap<Integer, String> m
            = new ConcurrentHashMap<>();
m.put(100, "Hello");
m.put(101, "Geeks");
m.put(102, "Geeks");
// 移除
m.remove(101, "Geeks");

// 如果不存在，就添加，存在就不变更
m.putIfAbsent(103, "Hello");

// 替换
m.replace(101, "Hello", "For");
System.out.println(m);
```

### HashSet

```java
Set<String> set = new HashSet<>();
if (set.isEmpty()) {
    System.out.println("Empty!");
}
set.add("dog");
set.add("cat");
set.add("mouse");
set.add("snake");
set.add("bear");
if (set.contains("cat")) {
    System.out.println("Contains cat");
}
set.remove("cat");
for (String element : set) {
    System.out.println(element);
}
set.forEach(
  e -> System.out.println(e.toString())
);
```

### ArrayDeque

```java
Deque<String> a = new ArrayDeque<>();
// 使用 add()
a.add("Dog");
// 使用 addFirst()
a.addFirst("Cat");
// 使用 addLast()
a.addLast("Horse");
// [Cat, Dog, Horse]
System.out.println(a);
// 访问元素
System.out.println(a.peek());
// 移除元素
System.out.println(a.pop());
```

Java I/O流
---

### 常见的类和操作
<!--rehype:wrap-class=row-span-5-->

字节流

- `InputStream` 字节输入流的抽象基类
- `FileInputStream` 从文件中读取字节的输入流
- `ByteArrayInputStream` 从字节数组中读取字节的输入流
- `OutputStream` 字节输出流的抽象基类
- `FileOutputStream` 向文件中写入字节的输出流
- `ByteArrayOutputStream` 将字节写入到字节数组的输出流

字符流

- `Reader` 字符输入流的抽象基类
- `FileReader` 从文件中读取字符的输入流
- `BufferedReader` 带缓冲区的字符输入流
- `InputStreamReader` 字节流到字符流的桥接器
- `Writer` 字符输出流的抽象基类
- `FileWriter` 向文件中写入字符的输出流
- `BufferedWriter` 带缓冲区的字符输出流
- `OutputStreamWriter` 字符流到字节流的桥接器

对象流

- `ObjectInputStream` 从输入流中读取Java对象的流
- `ObjectOutputStream` 将Java对象写入输出流的流

缓冲流

- `BufferedInputStream` 带缓冲区的字节输入流
- `BufferedOutputStream` 带缓冲区的字节输出流
- `BufferedReader` 带缓冲区的字符输入流
- `BufferedWriter` 带缓冲区的字符输出流

数据流

- `DataInputStream` 从输入流中读取基本数据类型的数据
- `DataOutputStream` 将基本数据类型数据写入输出流

文件类

- `File` 文件和目录路径名的抽象表示
- `FileReader` 从文件中读取字符的输入流
- `FileWriter` 向文件中写入字符的输出流

输入输出异常处理

- `IOException` Java I/O操作中的通用异常
- `FileNotFoundException` 当试图打开指定文件失败时抛出
- `EOFException` 在尝试读取流的末尾时抛出

其他流

- `PrintStream` 打印格式化表示的对象的输出流
- `PrintWriter` 格式化的文本输出流
- `RandomAccessFile` 随机访问文件的类，支持读取和写入操作

### 字节流

```java
// 文件输入流
InputStream inputStream
  = new FileInputStream("input.txt");

// 文件输出流
OutputStream outputStream
  = new FileOutputStream("output.txt");

// 缓冲字节输入流
InputStream bufferedInputStream
  = new BufferedInputStream(inputStream);

// 缓冲字节输出流
OutputStream bufferedOutputStream
  = new BufferedOutputStream(outputStream);
```

### 字符流

```java
// 文件字符输入流
Reader fileReader
  = new FileReader("input.txt");

// 文件字符输出流
Writer fileWriter
  = new FileWriter("output.txt");

// 缓冲字符输入流
Reader bufferedFileReader
  = new BufferedReader(
    new FileReader("input.txt")
  );

// 缓冲字符输出流
Writer bufferedFileWriter
  = new BufferedWriter(
    new FileWriter("output.txt")
  );
```

### 数据流

```java
// 数据输入流
DataInputStream dataInputStream
  = new DataInputStream(inputStream);

// 数据输出流
DataOutputStream dataOutputStream
  = new DataOutputStream(outputStream);
```

### 对象流

```java
// 对象输入流
ObjectInputStream objectInputStream
  = new ObjectInputStream(inputStream);

// 对象输出流
ObjectOutputStream objectOutputStream
  = new ObjectOutputStream(outputStream);
```

### 序列化与反序列化
<!--rehype:wrap-class=col-span-2-->

序列化对象到文件

```java
try (
  ObjectOutputStream objectOutputStream
    = new ObjectOutputStream(new FileOutputStream("object.dat"))
) {
    objectOutputStream.writeObject(object);
}
```

从文件反序列化对象

```java
try (
  ObjectInputStream objectInputStream
    = new ObjectInputStream(new FileInputStream("object.dat"))
) {
    Object object = objectInputStream.readObject();
}
```

### 标准输入输出流

标准输入流

```java
InputStream standardInputStream
      = System.in;
```

标准输出流

```java
PrintStream standardOutputStream
      = System.out;
```

### 基本操作
<!--rehype:wrap-class=row-span-2-->

```java
// 读取字节数据
int byteData = inputStream.read();

// 写入字节数据
outputStream.write(byteData);

// 读取字符数据
int charData = reader.read();

// 写入字符数据
writer.write(charData);
```

### 关闭流

```java
// 关闭输入流
inputStream.close();

// 关闭输出流
outputStream.close();
```

Java Stream 流
---
<!--rehype:body-class=cols-2-->

### 创建流

从集合创建流

```java
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> streamFromList = list.stream();
```

从数组创建流

```java
String[] array = {"d", "e", "f"};
Stream<String> streamFromArray = Arrays.stream(array);
```

创建空流

```java
Stream<String> emptyStream = Stream.empty();
```

创建无限流

```java
Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2);
```

### 中间操作

```java
// 过滤
Stream<String> filteredStream = list.stream().filter(
  s -> s.startsWith("a")
);

// 映射
Stream<Integer> mappedStream = list.stream().map(String::length);

// 排序
Stream<String> sortedStream = list.stream().sorted();

// 去重
Stream<String> distinctStream = list.stream().distinct();

// 截断
Stream<String> limitedStream = list.stream().limit(2);

// 跳过
Stream<String> skippedStream = list.stream().skip(1);
```

### 终端操作

```java
// 聚合操作
Optional<String> anyElement = list.stream().findAny();
Optional<String> firstElement = list.stream().findFirst();
long count = list.stream().count();
Optional<String> maxElement = list.stream()
    .max(Comparator.naturalOrder());
Optional<String> minElement = list.stream()
    .min(Comparator.naturalOrder());

// 检查匹配
boolean anyMatch = list.stream().anyMatch(s -> s.contains("a"));
boolean allMatch = list.stream().allMatch(s -> s.length() == 1);
boolean noneMatch = list.stream().noneMatch(s -> s.contains("z"));

// 归约
Optional<String> reducedString = list.stream()
  .reduce((s1, s2) -> s1 + s2);
String reducedStringWithIdentity = list.stream()
  .reduce("Start:", (s1, s2) -> s1 + s2);

// 收集
List<String> collectedList = list.stream()
    .collect(Collectors.toList());
Set<String> collectedSet = list.stream()
    .collect(Collectors.toSet());
Map<Integer, String> collectedMap = list.stream()
    .collect(
        Collectors.toMap(String::length, Function.identity())
    );
```

### 并行流

```java
List<String> list = Arrays.asList("a", "b", "c", "d", "e");
List<String> upperCaseList = list.parallelStream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

反射
---

这些是使用 Java 反射时常见的操作。使用反射需要注意性能和安全性问题，尽量避免在性能要求高的地方过度使用。

### 获取 Class 对象
<!--rehype:wrap-class=col-span-2-->

```java
// 通过类名获取Class对象
Class<?> clazz1 = MyClass.class;

// 通过对象获取Class对象
MyClass obj = new MyClass();
Class<?> clazz2 = obj.getClass();

// 通过完整类名字符串获取Class对象
Class<?> clazz3 = Class.forName("com.example.MyClass");
```

### 获取类的信息
<!--rehype:wrap-class=row-span-2-->

获取类的名称

```java
String className = clazz.getName();
```

获取类的修饰符

```java
int modifiers = clazz.getModifiers();
```

获取类的包信息

```java
Package pkg = clazz.getPackage();
```

获取类的父类

```java
Class<?> superClass = clazz.getSuperclass();
```

获取类实现的接口

```java
Class<?>[] interfaces = clazz.getInterfaces();
```

### 创建对象实例
<!--rehype:wrap-class=col-span-2-->

```java
// 使用默认构造函数创建对象
MyClass instance = (MyClass) clazz.newInstance();

// 使用带参数的构造函数创建对象
Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
MyClass instanceWithArgs = (MyClass) constructor.newInstance("example", 123);
```

### 获取和设置字段值
<!--rehype:wrap-class=col-span-2-->

```java
// 获取字段值
Field field = clazz.getDeclaredField("fieldName");
field.setAccessible(true); // 如果字段是私有的，需要设置可访问
Object value = field.get(instance);

// 设置字段值
field.set(instance, newValue);
```

### 处理泛型

```java
// 获取泛型信息
Type genericType = field.getGenericType();
```

### 调用方法
<!--rehype:wrap-class=col-span-2-->

```java
// 获取方法
Method method = clazz.getDeclaredMethod("methodName", parameterTypes);
method.setAccessible(true); // 如果方法是私有的，需要设置可访问

// 调用方法
Object result = method.invoke(instance, args);
```

### 其他常用操作
<!--rehype:wrap-class=row-span-2-->

```java
// 判断是否是数组、枚举、注解等
boolean isArray = clazz.isArray();
boolean isEnum = clazz.isEnum();
boolean isAnnotation = clazz.isAnnotation();

// 获取构造函数、字段、方法等
Constructor<?>[] constructors = clazz.getConstructors();
Field[] fields = clazz.getDeclaredFields();
Method[] methods = clazz.getDeclaredMethods();
```

### 处理注解
<!--rehype:wrap-class=col-span-2-->

```java
// 获取注解信息
Annotation annotation = field.getAnnotation(MyAnnotation.class);
```

方法引用
---

### 方法引用
<!--rehype:wrap-class=row-span-3-->

Java 的 `Consumer` 接口里的 `accept` 方法接受参数但不返回值。要让它打印传入的参数，可以这样做：

```java
Consumer<String> test = new Consumer<String>() {
    @Override
    public void accept(String s) {
      System.out.println(s);
    }
  };
test.accept("test");
```

更简单的，我们可以直接传入Lambda表达式

```java
Consumer<String> test = System.out::println;
```

方法引用通过方法的名字指向一个方法，使语言构造更简洁，减少冗余代码。

#### 使用方式

- 引用方法
- 引用构造方法
- 引用数组

### 静态方法引用

```java
Comparator<Integer> comparator = Math::max;

int result = comparator.compare(1, 2);
// 返回 2
```

### 实例方法引用

```java
String str = "HELLO";

String lowerCase = str::toLowerCase;
// 返回 "hello"
```

### 构造方法引用

```java
Supplier<String> supplier = String::new;

String str = supplier.get();
// 返回一个空字符串
```

### 数组构造方法引用

```java
Function<Integer, String[]> function = String[]::new;


String[] array = function.apply(5);
// 返回 5 个空字符串的数组
```
<!--rehype:className=wrap-text-->

### 对象中的方法引用

```java
String someStr = "HELLO";

String lowerCase = someStr::toLowerCase;
// 返回 "hello"
```

### 对象中的静态方法引用

```java
SomeClass someObject = new SomeClass();

int result = someObject::staticMethod;
// 调用静态方法
```

杂项 Misc
----

### 访问修饰符
<!--rehype:wrap-class=col-span-2-->

| 修饰符    | Class | Package | Subclass | World |
|-------------|-------|---------|----------|-------|
| public      | Y     | Y       | Y        | Y     |
| protected   | Y     | Y       | Y        | _N_   |
| no modifier | Y     | Y       | _N_      | _N_   |
| private     | Y     | _N_     | _N_      | _N_   |
<!--rehype:className=show-header-->

### 常用表达

```java
String text = "I am learning Java";
// 删除所有空格
text.replaceAll("\\s+", "");
// 拆分字符串
text.split("\\|");
text.split(Pattern.quote("|"));
```

查看: [Regex in java](./regex.md#java-中的正则表达式)

### 注释 Comment

```java
// 我是单行注释！

/*
而我是一个
多行注释！
*/
/**
  * 这个
  * 是
  * 文档
  * 注释
 */
```

### 关键字
<!--rehype:wrap-class=col-span-2-->

- abstract
- continue
- for
- new
- switch
- assert
- default
- goto
- package
- synchronized
- boolean
- do
- if
- private
- this
- break
- double
- implements
- protected
- throw
- byte
- else
- import
- public
- throws
- case
- enum
- instanceof
- return
- transient
- catch
- extends
- int
- short
- try
- char
- final
- interface
- static
- void
- class
- finally
- long
- strictfp
- volatile
- const
- float
- native
- super
- while
<!--rehype:className=cols-7 style-none-->

### 数学方法
<!--rehype:wrap-class=row-span-2-->

方法 | 说明
:-|:-
`Math.max(a,b)`       | `a` 和 `b` 的最大值
`Math.min(a,b)`       | `a` 和 `b` 的最小值
`Math.abs(a)`         | 绝对值
`Math.sqrt(a)`        | `a` 的平方根
`Math.pow(a,b)`       | `b` 的幂
`Math.round(a)`       | 最接近的整数
`Math.sin(ang)`       | 正弦
`Math.cos(ang)`       | `ang` 的余弦
`Math.tan(ang)`       | `ang` 的切线
`Math.asin(ang)`      | `ang` 的反正弦
`Math.log(a)`         | `a` 的自然对数
`Math.toDegrees(rad)` | 以度为单位的角度弧度
`Math.toRadians(deg)` | 以弧度为单位的角度度

### 异常 Try/Catch/Finally

```java
try {
  // something
} catch (Exception e) {
  e.printStackTrace();
} finally {
  System.out.println("always printed");
}
```

### util工具类
<!--rehype:wrap-class=row-span-2-->

- `ArrayDeque`: 可调整大小的数组双端队列，实现了Deque接口
- `Arrays`: 提供静态工厂，允许将数组视为列表
- `Collections`: 包含操作集合或返回集合的静态方法
- `Date`: 表示特定时间瞬间，精度为毫秒
- `Dictionary`: 抽象父类，可用于键值对映射，例如Hashtable
- `EnumMap`: 专门用于枚举键的Map实现
- `EnumSet`: 专门用于枚举键的Set实现
- `Formatter`: 提供对布局、对齐、数字、字符串和日期/时间数据的格式化支持，以及特定于语言环境的输出
- `SecureRandom`: 生成安全的伪随机数流的实例
- `UUID`: 表示不可变的通用唯一标识符
- `Vector`: 实现了可增长的对象数组
- `LocalDate`: 表示无时区的日期，仅包含年月日，不可变且线程安全，适用于Java 8及更高版本
- `LocalTime`: 表示无时区的时间，仅包含时分秒，不可变且线程安全，适用于Java 8及更高版本
- `LocalDateTime`: 表示无时区的日期时间，包含年月日时分秒，不可变且线程安全，适用于Java 8及更高版本

### Collections 工具类

```java
// 计算出现频率
List<Integer> list = new ArrayList<>();
list.add(1);
list.add(2);
list.add(2);
list.add(3);
list.add(3);
list.add(3);
int frequency = Collections
      .frequency(list, 2); // frequency = 2
```

操纵数据库
----

### JDBC

```java
String url = "jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=UTC";
String user = "root";
String password = "123456";
String sql = "SELECT 1 as a, '2' as b";
String preparedSql = "SELECT * FROM t_user WHERE id = ?";

Connection conn = null;
Statement sm = null;
ResultSet rs = null;
try {
  // 1.注册驱动
  Class.forName("com.mysql.cj.jdbc.Driver");
} catch (ClassNotFoundException e) {
  // 驱动找不到
  throw new RuntimeException(e);
}

// 2.建立连接
try (Connection connection = DriverManager.getConnection(url, user, password)) {

  conn = connection;

  // 3.创建Statement对象
  try (Statement statement = connection.createStatement()) {

    sm = statement;

    // 4.执行SQL语句
    try (ResultSet resultSet = statement.executeQuery(sql)) {

      rs = resultSet;

      // 5.处理结果集
      while (resultSet.next()) {
        // 按照列名取值
        System.out.println(resultSet.getLong("a"));
        // 按照索引取值
        System.out.println(resultSet.getString(2));
      }
    }
  }

  // 3.创建PreparedStatement对象
  try (PreparedStatement preparedStatement = connection.prepareStatement(preparedSql)) {

    sm = preparedStatement;

    preparedStatement.setLong(1, 1_000L);
    // 4.执行SQL语句
    try (ResultSet resultSet = preparedStatement.executeQuery()) {

      rs = resultSet;

      // 5.处理结果集
      while (resultSet.next()) {
        System.out.println(resultSet.getLong("id"));
        System.out.println(resultSet.getString(2));
      }
    }
  }
} catch (SQLException e) {
  // 数据库异常
  throw new RuntimeException(e);
} finally {
  // 6.关闭资源
  // 上面的try块里已经自动关闭，否则（JDK 7以前）按照以下顺序关闭
  // 先打开的后关闭，后打开的先关闭
  if (null != rs) {
    try {
      rs.close();
    } catch (SQLException ignored) {
    }
  }

  if (null != sm) {
    try {
      sm.close();
    } catch (SQLException ignored) {
    }
  }

  if (null != conn) {
    try {
      conn.close();
    } catch (SQLException ignored) {
    }
  }

  // 也可以直接工具类， 注意顺序
  IOUtils.close(rs);
  IOUtils.close(sm);
  IOUtils.close(conn);
}
```

### JDBC注册驱动

```java
Class.forName("com.mysql.cj.jdbc.Driver");

DriverManager.registerDriver(new org.postgresql.Driver());

// 支持多个同时注册
System.setProperty("jdbc.drivers", "com.mysql.cj.jdbc.Driver:org.postgresql.Driver");
```

另见
---

- [Java 官网](https://www.oracle.com/cn/java/) _(oracle.com/cn/java)_
