JavaScript 备忘清单
===

包含最重要概念、函数、方法等的 JavaScript 备忘单。 初学者的完整快速参考。

入门
----

### 介绍

JavaScript 是一种轻量级的解释型编程语言。

- [JSON 备忘清单](json.md)
- [JavaScript 中的正则表达式](./regex.md#javascript-中的正则表达式)
- [TypeScript 备忘清单](./typescript.md)

### 打印调试

```javascript
// => Hello world!
console.log('Hello world!');
// => Hello QuickReference
console.warn('hello %s', 'QuickReference');
// 将错误消息打印到 stderr
console.error(new Error('Oops!'));
```

### 断点调试

```javascript
function potentiallyBuggyCode() {
  debugger;
  // 做可能有问题的东西来检查，逐步通过等。
}
```

**debugger** 语句调用任何可用的调试功能。

### 数字

```javascript
let amount = 6;
let price = 4.99;
let home = 1e2;
let num = 1_000_000; // 位数过多可以用 _ 分割
let m = 0644;   // 八进制数字 420
```

### let 关键字

```javascript
let count; 
console.log(count); // => undefined
count = 10;
console.log(count); // => 10
```

### const 关键字

```javascript
const numberOfColumns = 4;
// TypeError: Assignment to constant...
numberOfColumns = 8;
```

### 变量

```javascript
let x = null;
let name = "Tammy";
const found = false;
// => Tammy, false, null
console.log(name, found, x);
var a;
console.log(a); // => undefined
```

### 字符串

```javascript
let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";
// => 21
console.log(single.length);
```

### 算术运算符

```javascript
5 + 5 = 10     // 加法 Addition
10 - 5 = 5     // 减法 Subtraction
5 * 10 = 50    // 乘法 Multiplication
10 / 5 = 2     // 除法 Division
10 % 5 = 0     // 取模 Modulo
```

### 注释

```javascript
// 此行将表示注释
/* 
多行配置
部署前必须更改
以下配置。
*/
```

### 赋值运算符

```javascript
let number = 100;
// 两个语句都会加 10
number = number + 10;
number += 10;
console.log(number); 
// => 120
```

### 字符串插值

```javascript
let age = 7;
// 字符串拼接
'Tommy is ' + age + ' years old.';
// 字符串插值
`Tommy is ${age} years old.`;
```

### 字符串
<!--rehype:wrap-class=col-span-2-->

```js
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';    // \n 换行
var len = abc.length;            // 字符串长度
abc.indexOf("lmno");             // 查找子字符串，如果不包含则 -1
abc.lastIndexOf("lmno");         // 最后一次出现
abc.slice(3, 6);                 // 去掉“def”，负值从后面计算
abc.replace("abc","123");        // 查找和替换，接受正则表达式
abc.toUpperCase();               // 转换为大写
abc.toLowerCase();               // 转换为小写
abc.concat(" ", str2);           // abc + " " + str2
abc.charAt(2);                   // 索引处的字符：“c”
abc[2];                          // 不安全，abc[2] = "C" 不起作用
// 索引处的字符代码：“c”-> 99
abc.charCodeAt(2);
// 用逗号分割字符串给出一个数组
abc.split(",");
// 分割字符
abc.split("");
// 匹配开头字符串,如果忽略第二个参数，则从索引 0 开始匹配
abc.startsWith("bc", 1);
// 匹配结尾的字符串,如果忽略第二个参数，则默认是原字符串长度
abc.endsWith("wxy", abc.length - 1);
// padEnd 和 padStart 都用于填充长度，默认填充对象是空格
"200".padEnd(5); // "200  "
"200".padEnd(5, "."); // "200.."
// 重复字符
"abc".repeat(2); // "abcabc"
// trim、trimEnd 和 trimStart 用于去除首尾空格
" ab c ".trim(); // "ab c"
// 数字转为十六进制 (16)、八进制 (8) 或二进制 (2)
(128).toString(16);
```

### 数字
<!--rehype:wrap-class=row-span-2-->

```js
var pi = 3.141;
pi.toFixed(0);    // 返回 3             
pi.toFixed(2);    // 返回 3.14 - 使用金钱
pi.toPrecision(2) // 返回 3.1
pi.valueOf();     // 返回号码
Number(true);     // 转换为数字
// 自 1970 年以来的毫秒数
Number(new Date())          
// 返回第一个数字：3
parseInt("3 months");       
// 返回 3.5
parseFloat("3.5 days");     
// 最大可能的 JS 数
Number.MAX_VALUE            
// 最小可能的 JS 编号
Number.MIN_VALUE            
// -无穷
Number.NEGATIVE_INFINITY    
// 无穷
Number.POSITIVE_INFINITY    
```

#### Math

```ts
const pi = Math.PI; // 3.141592653589793
Math.round(4.4); // = 4 - 数字四舍五入
Math.round(4.5); // = 5
Math.pow(2,8);   // = 256 - 2 的 8 次方    
Math.sqrt(49);   // = 7 - 平方根
Math.abs(-3.14); // = 3.14 - 绝对，正值
Math.ceil(3.14); // = 4 - 返回 >= 最小整数
// = 3 - 返回 <= 最大整数
Math.floor(3.99);       
// = 0 - 正弦
Math.sin(0);            
// OTHERS: tan,atan,asin,acos,余弦值
Math.cos(Math.PI);      
// = -2 - 最低值
Math.min(0, 3, -2, 2);  
// = 3 - 最高值
Math.max(0, 3, -2, 2);  
// = 0 自然对数
Math.log(1);            
// = 2.7182pow(E,x) 自然对数的底数
Math.exp(1);            
// 0 到 1 之间的随机数
Math.random();          
// 随机整数，从 1
Math.floor(Math.random() * 5) + 1;  
```

### 全局函数
<!--rehype:wrap-class=col-span-2-->

```js
// 像脚本代码一样执行字符串
eval();                     
// 从数字返回字符串
String(23);                 
// 从数字返回字符串
(23).toString();            
// 从字符串返回数字
Number("23");               
// 解码 URI。 结果：“my page.asp”
decodeURI(enc);             
// 编码 URI。 结果：“my%20page.asp”
encodeURI(uri);             
// 解码 URI 组件
decodeURIComponent(enc);    
// 对 URI 组件进行编码
encodeURIComponent(uri);    
// 是一个有限的合法数
isFinite();                 
// 是一个非法数字
isNaN();                    
// 返回字符串的浮点数
parseFloat();               
// 解析一个字符串并返回一个整数
parseInt();                 
```

JavaScript 条件
----

### 操作符
<!--rehype:wrap-class=row-span-3-->

```javascript
true || false;       // true
10 > 5 || 10 > 20;   // true
false || false;      // false
10 > 100 || 10 > 20; // false
```

#### 逻辑运算符 &&

```javascript
true && true;        // true
1 > 2 && 2 > 1;      // false
true && false;       // false
4 === 4 && 3 > 1;    // true
```

#### 比较运算符

```javascript
1 > 3                 // false
3 > 1                 // true
250 >= 250            // true
1 === 1               // true
1 === 2               // false
1 === '1'             // false
```

#### 逻辑运算符

```javascript
let lateToWork = true;
let oppositeValue = !lateToWork;
// => false
console.log(oppositeValue); 
```

#### 空值合并运算符 ??

```javascript
null ?? 'I win';         //  'I win'
undefined ?? 'Me too';   //  'Me too'
false ?? 'I lose'        //  false
0 ?? 'I lose again'      //  0
'' ?? 'Damn it'          //  ''
```

### if Statement (if 语句)

```javascript
const isMailSent = true;
if (isMailSent) {
  console.log('Mail sent to recipient');
}
```

### Ternary Operator (三元运算符)

```javascript
var age = 1;

// => false
var status = (age >= 18) ? true : false;
```

### else if

```javascript
const size = 10;
if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('Small');
} else {
  console.log('Tiny');
}
// Print: Small
```

### == vs ===

```javascript
0 == false     // true
0 === false    // false, 不同类型
1 == "1"       // true,  自动类型转换
1 === "1"      // false, 不同类型
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false
```

`==` 只检查值，`===` 检查值和类型。

### switch 语句

```javascript
const food = 'salad';

switch (food) {
  case 'oyster': console.log('海的味道');
    break;
  case 'pizza': console.log('美味的馅饼');
    break;
  default:
    console.log('请您用餐');
}
```

### switch 多 case - 单一操作

```javascript
const food = 'salad';

switch (food) {
  case 'oyster':
  case 'pizza':
    console.log('美味的馅饼');
    break;
  default:
    console.log('请您用餐');
}
```

JavaScript Functions 函数
----

### 函数

```javascript
// 定义函数：
function sum(num1, num2) {
  return num1 + num2;
}
// 调用函数：
sum(3, 6); // 9
```

### 匿名函数

```javascript
// 命名函数
function rocketToMars() {
  return 'BOOM!';
}
// 匿名函数
const rocketToMars = function() {
  return 'BOOM!';
}
```

### 箭头函数 (ES6)
<!--rehype:wrap-class=row-span-3-->

#### 有两个参数

```javascript
const sum = (param1, param2) => { 
  return param1 + param2; 
}; 
console.log(sum(2,5)); // => 7 
```

#### 没有参数

```javascript
const printHello = () => { 
  console.log('hello'); 
}; 
printHello(); // => hello
```

#### 只有一个参数

```javascript
const checkWeight = weight => { 
  console.log(`Weight : ${weight}`); 
}; 
checkWeight(25); // => Weight : 25 
```

#### 简洁箭头函数

```javascript
const multiply = (a, b) => a * b; 
// => 60 
console.log(multiply(2, 30)); 
```

从 ES2015 开始提供[箭头函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### 返回关键字

```javascript
// 有 return
function sum(num1, num2) {
  return num1 + num2;
}
// 该函数不输出总和
function sum(num1, num2) {
  num1 + num2;
}
```

### 调用函数

```javascript
// 定义函数
function sum(num1, num2) {
  return num1 + num2;
}
// 调用函数
sum(2, 4); // 6
```

### 立即执行函数

```javascript
//命名函数并立即执行一次
(function sum(num1, num2) {
  return num1 + num2;
})(2,4)//6
```

### 函数表达式

```javascript
const dog = function() {
  return 'Woof!';
}
```

### 函数参数

```javascript
// 参数是 name
function sayHello(name) {
  return `Hello, ${name}!`;
}
```

### 函数声明

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

JavaScript 范围
----

### 范围
<!--rehype:wrap-class=row-span-2-->

```javascript
function myFunction() {
  var pizzaName = "Margarita";
  // 这里的代码可以使用 PizzaName
  
}
// ❌ PizzaName 不能在这里使用
```

`{ }` 块内声明的变量

```javascript
{
  let x = 2;
}
// ❌ x 不能在这里使用

{
  var x = 2;
}
// ✅ x 能在这里使用
```

```javascript
var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope
```

ES6 引入了两个重要的新 JavaScript 关键字：let 和 const。这两个关键字在 JavaScript 中提供了块作用域。

### 块作用域变量

```javascript
const isLoggedIn = true;
if (isLoggedIn == true) {
  const statusMessage = 'Logged in.';
}
// Uncaught ReferenceError...
// 未捕获的引用错误...
console.log(statusMessage);
```

### 全局变量

```javascript
// 全局声明的变量
const color = 'blue';
function printColor() {
  console.log(color);
}

printColor(); // => blue
```

### `let` vs `var`

```javascript
for (let i = 0; i < 3; i++) {
  // 这是“let”的最大范围
  // i 可以访问 ✔️
}
// i 不能访问 ❌
```

---

```javascript
for (var i = 0; i < 3; i++) {
  // i 可以访问 ✔️
}
// i 可以访问 ✔️
```

`var` 的范围是最近的函数块，而 `let` 的范围是最近的封闭块。

### 带闭包的循环

```javascript
// 打印三次，不是我们的意思。
for (var i = 0; i < 3; i++) {
  setTimeout(_ => console.log(i), 10);
}
```

---

```javascript
// 按预期打印 0、1 和 2。
for (let j = 0; j < 3; j++) { 
  setTimeout(_ => console.log(j), 10);
}
```

变量使用 `let` 有自己的副本，变量有使用 `var` 的共享副本。

JavaScript Arrays
----

### 方法
<!--rehype:wrap-class=row-span-6-->

:- | :-
:- | :-
`Array.from()` | 类似数组对象创建一个新的 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
`Array.isArray()` | 值是否是一个 Array [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
`Array.of()` | 创建一个新数组示例 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/of)
`.at()` | 返回值索引对应的元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
`.concat()` | 合并两个或多个数组 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
`.copyWithin()` | 浅复制替换某个位置 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
`.entries()` | 新的 Array Iterator 对象 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)
`.every()` | 是否能通过回调函数的测试 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
`.fill()` | 固定值填充一个数组中 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
`.filter()` | 返回过滤后的数组 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
`.find()` | 第一个元素的值 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
`.findIndex()` | 第一个元素的索引 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
`.findLast()` | 最后一个元素的值 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast)
`.findLastIndex()` | 最后一个元素的索引 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex)
`.flat()` | 扁平化嵌套数组 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
`.flatMap()` | 与 flat 相同 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
`.forEach()` | 升序循环执行 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
`.includes()` | 是否包含一个指定的值 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
`.indexOf()` | 找到给定元素的第一个索引 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
`.join()` | 数组链接成一个字符串 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
`.keys()` | 每个索引键 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
`.lastIndexOf()` | 给定元素的最后一个索引 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
`.map()` | 循环返回一个新数组 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
`.pop()` | `删除`最后一个元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
`.push()` | 元素`添加`到数组的末尾 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
`.reduce()` | 循环函数传递当前和上一个值 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
`.reduceRight()` | 类似 `reduce` 从右往左循环 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)
`.reverse()` | 数组元素的位置颠倒 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
`.shift()` | `删除`第一个元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
`.slice()` | `提取`元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
`.some()` | 至少有一个通过测试函数 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
`.sort()` | 元素进行排序 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
`.splice()` | `删除`或`替换`或`添加`元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
`.toLocaleString()` | 字符串表示数组中的元素 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)
`.toString()` | 返回字符串 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)
`.unshift()` | 元素`添加`到数组的`开头` [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
`.values()` | 返回新的 ArrayIterator 对象 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

### 数组

```javascript
const fruits = ["apple", "dew", "banana"];
// 不同的数据类型
const data = [1, 'chicken', false];
```

### 属性 .length

```javascript
const numbers = [1, 2, 3, 4];
numbers.length // 4
```

### 索引

```javascript
// 访问数组元素
const myArray = [100, 200, 300];
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
```

### 可变图表

|           | 添加 | 删除 | 开始 | 结束 |
|:----------|:---:|:------:|:-----:|:---:|
| `push`    | ✅  |        |       | ✅  |
| `pop`     |     | ✅     |       | ✅  |
| `unshift` | ✅  |        | ✅    |     |
| `shift`   |     | ✅     | ✅    |     |
<!--rehype:className=show-header-->

### 方法 .push()

```javascript
// 添加单个元素：
const cart = ['apple', 'orange'];
cart.push('pear'); 
// 添加多个元素：
const numbers = [1, 2];
numbers.push(3, 4, 5);
```

将项目**添加到末尾**并返回新的数组长度。

### 方法 .pop()

```javascript
const fruits = ["apple", "dew", "banana"];
const fruit = fruits.pop(); // 'banana'

console.log(fruits); // ["apple", "dew"]
```

从**末尾删除**一个项目并返回已删除的项目。

### 方法 .shift()

```javascript
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // 输出: Array [2, 3]
console.log(firstElement); // 输出: 1
```

**从头删除**一个项目并返回已删除的项目。

### 方法 .some()

```js
const array = [1, 2, 3, 4, 5];
// 检查元素是否为偶数
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// 预期输出: true
```

### 方法 .concat()

```javascript
const numbers = [3, 2, 1]
const newFirstNumber = 4
    
// => [ 4, 3, 2, 1 ]
[newFirstNumber].concat(numbers)
    
// => [ 3, 2, 1, 4 ]
numbers.concat(newFirstNumber)
```

如果你想避免改变你的原始数组，你可以使用 concat。

### 方法 .splice()

```javascript
const months = ['Jan', 'March'];
months.splice(1, 0, 'Feb');
// 在索引 1 处插入
console.log(months);
// 预期输出: Array ["Jan", "Feb", "March"]

months.splice(2, 1, 'May');
// 替换索引 2 处的 1 个元素
console.log(months);
// 预期输出: Array ["Jan", "Feb", "May"]
```

### 方法 .unshift()

```javascript
let cats = ['Bob'];
// => ['Willy', 'Bob']
cats.unshift('Willy');
// => ['Puff', 'George', 'Willy', 'Bob']
cats.unshift('Puff', 'George');
```

将项目**添加到开头**并返回新的数组长度。

### 方法 .filter()

```javascript
const words = ['js', 'java', 'golang'];
const result = words.filter(word => {
  return  word.length > 3
});
console.log(result);
// 预期输出: Array ["java", "golang"]
```

JavaScript 循环
----

### While 循环

```javascript
while (condition) {
  // 要执行的代码块
}
let i = 0;
while (i < 5) {        
  console.log(i);
  i++;
}
```

### 反向循环

```javascript
const fruits = ["apple", "dew", "berry"];
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(`${i}. ${fruits[i]}`);
}
// => 2. berry
// => 1. dew
// => 0. apple
```

### Do...While 语句

```javascript
x = 0
i = 0
do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);
// => 0 1 3 6 10
```

### For 循环

```javascript
for (let i = 0; i < 4; i += 1) {
  console.log(i);
};
// => 0, 1, 2, 3
```

### 遍历数组

```javascript
for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}
// => 数组中的每一项
```

### Break

```javascript
for (let i = 0; i < 99; i += 1) {
  if (i > 5) break;
  console.log(i)
}
// => 0 1 2 3 4 5
```

### Continue

```javascript
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += "The number is " + i + "<br>";
}
```

### 嵌套循环

```javascript
for (let i = 0; i < 2; i += 1) {
  for (let j = 0; j < 3; j += 1) {
    console.log(`${i}-${j}`);
  }
}
```

### for...in 循环

```javascript
const fruits = ["apple", "orange", "banana"];
for (let index in fruits) {
  console.log(index);
}
// => 0
// => 1
// => 2
```

### label 语句
<!--rehype:wrap-class= row-span-2-->

```js
var num = 0;

outPoint:
for(var i = 0; i < 10; i++) {
  for(var j = 0; j < 10; j++) {
    if(i == 5 && j == 5) {
      continue outPoint;
    }
    num++;
  }
}

alert(num);  // 95
```

从 `alert(num)` 的值可以看出，`continue outPoint;` 语句的作用是跳出当前循环，并跳转到 `outPoint`（标签）下的 `for` 循环继续执行。

### for...of 循环

```javascript
const fruits = ["apple", "orange", "banana"];
for (let fruit of fruits) {
  console.log(fruit);
}
// => apple
// => orange
// => banana
```

### for await...of
<!--rehype:wrap-class= row-span-2-->

```javascript
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (num of asyncGenerator()) {
    console.log(num);
  }
})();

// 0
// 1
// 2
```

### 可选的 for 表达式

```js
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}
```

JavaScript 迭代器(Iterators)
----
<!--rehype:body-class=cols-2-->

### 分配给变量的函数

```javascript
let plusFive = (number) => {
  return number + 5;  
};
// f 被赋值为 plusFive
let f = plusFive;
plusFive(3); // 8
// 由于 f 具有函数值，因此可以调用它。
f(9); // 14
```

### 回调函数

```javascript
const isEven = (n) => {
  return n % 2 == 0;
}
let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log(`${num} is an even number: ${isNumEven}.`)
}
// Pass in isEven as the callback function
printMsg(isEven, 4); 
// => The number 4 is an even number: True.
```

### 数组方法 .reduce()

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, curVal) => {  
  return accumulator + curVal;
});
console.log(sum); // 10
```

### 数组方法 .map()

```javascript
const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
const announcements = members.map((member) => {
  return member + " joined the contest.";
});
console.log(announcements);
```

### 数组方法 .forEach()

```javascript
const numbers = [28, 77, 45, 99, 27];
numbers.forEach(number => {  
  console.log(number);
}); 
```

### 数组方法 .filter()

```javascript
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});
```

JavaScript 对象(Objects)
----
<!--rehype:body-class=cols-2-->

### 访问属性

```javascript
const apple = { 
  color: 'Green',
  price: { bulk: '$3/kg', smallQty: '$4/kg' }
};
console.log(apple.color);      // => Green
console.log(apple.price.bulk); // => $3/kg
```

### 命名属性

```javascript
// 无效键名示例
const trainSchedule = {
  // 由于单词之间的空格而无效。
  platform num: 10, 
  // 表达式不能是键。
  40 - 10 + 2: 30,
  // 除非用引号括起来，否则 + 号无效。
  +compartment: 'C'
}
```

### 不存在的属性

```javascript
const classElection = {
  date: 'January 12'
};
console.log(classElection.place); // undefined
```

### 可变的
<!--rehype:wrap-class=row-span-2-->

```javascript
const student = {
  name: 'Sheldon',
  score: 100,
  grade: 'A',
}
console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }
delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' }
student = {}
// TypeError: TypeError：分配给常量变量。
```

### 赋值简写语法

```javascript
const person = {
  name: 'Tom',
  age: '22',
};
const {name, age} = person;
console.log(name); // 'Tom'
console.log(age);  // '22'
```

### 删除运算符

```javascript
const person = {
  firstName: "Matilda",
  hobby: "knitting",
  goal: "learning JavaScript"
};
delete person.hobby; // 或 delete person['hobby'];
console.log(person);
/*
{
  firstName: "Matilda"
  goal: "learning JavaScript"
} */
```

### 对象作为参数

```javascript
const origNum = 8;
const origObj = {color: 'blue'};
const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};
changeItUp(origNum, origObj);
// 将输出 8，因为整数是按值传递的。
console.log(origNum);
// 由于传递了对象，将输出“red”
// 通过引用，因此是可变的。
console.log(origObj.color);
```

### 工厂函数
<!--rehype:wrap-class=row-span-2-->

```javascript
// 一个接受 'name'，'age' 和 'breed' 的工厂函数，
//  参数返回一个自定义的 dog 对象。
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');  
    }
  };
};
```

### 速记对象创建

```javascript
const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }
```

### this 关键字

```javascript
const cat = {
  name: 'Pipey',
  age: 8,
  whatName() {
    return this.name  
  }
};
console.log(cat.whatName()); // => Pipey
```

### 方法

```javascript
const engine = {
  // 方法简写，有一个参数
  start(adverb) {
    console.log(`The engine starts up ${adverb}...`);
  },  
  // 不带参数的匿名箭头函数表达式
  sputter: () => {
    console.log('The engine sputters...');
  },
};
engine.start('noisily');
engine.sputter();
```

### Getters 和 setters

```javascript
const myCat = {
  _name: 'Dottie',
  get name() {
    return this._name;  
  },
  set name(newName) {
    this._name = newName;  
  }
};
// 引用调用 getter
console.log(myCat.name);
// 赋值调用 setter
myCat.name = 'Yankee';
```

### Proxy

Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```javascript
// 用于拦截对象的读取属性操作。
const handler = {
    get: function(obj, prop) {
        return prop in obj ? obj[prop] : 37;
    }
};

const p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b);      // 1, undefined
console.log('c' in p, p.c); // false, 37
```

#### 语法

```javascript
const p = new Proxy(target, handler)
```

- target 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- handler 一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。

#### 方法

:- | :-
:- | :-
`Proxy.revocable()` | 创建一个可撤销的Proxy对象 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/revocable)

#### handler 对象的方法

:- | :-
:- | :-
`handler.getPrototypeOf()` | Object.getPrototypeOf 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf)
`handler.setPrototypeOf()` | Object.setPrototypeOf 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf)
`handler.isExtensible()` | Object.isExtensible 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible)
`handler.preventExtensions()` | Object.preventExtensions 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions)
`handler.getOwnPropertyDescriptor()` | Object.getOwnPropertyDescriptor 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor)
`handler.defineProperty()` | Object.defineProperty 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)
`handler.has()` | in 操作符的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has)
`handler.get()` | 属性读取操作的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get)
`handler.set()` | 属性设置操作的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set)
`handler.deleteProperty()` | delete 操作符的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty)
`handler.ownKeys()` | Object.getOwnPropertyNames 方法和 Object.getOwnPropertySymbols 方法的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys)
`handler.apply()` | 函数调用操作的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply)
`handler.construct()` | new 操作符的捕捉器 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
<!--rehype:className=style-list-arrow-->

### Reflect

Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与proxy handlers (en-US)的方法相同。Reflect不是一个函数对象，因此它是不可构造的。

```javascript
// 检测一个对象是否存在特定属性
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function() {
    console.log(`Quaaaack! My name is ${this.name}`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false
```

#### 静态方法

:- | :-
:- | :-
`Reflect.apply(target, thisArgument, argumentsList)` | 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)
`Reflect.construct(target, argumentsList[, newTarget])` | 对构造函数进行 new 操作，相当于执行 new target(...args) [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct)
`Reflect.defineProperty(target, propertyKey, attributes)` | 和 Object.defineProperty() 类似。如果设置成功就会返回 true [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty)
`Reflect.deleteProperty(target, propertyKey)` | 作为函数的delete操作符，相当于执行 delete target[name] [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty)
`Reflect.get(target, propertyKey[, receiver])` | 获取对象身上某个属性的值，类似于 target[name] [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get)
`Reflect.getOwnPropertyDescriptor(target, propertyKey)`  | 类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符，否则返回 undefined [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor)
`Reflect.getPrototypeOf(target)` | 类似于 Object.getPrototypeOf() [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf)
`Reflect.has(target, propertyKey)` | 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同 [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)
`Reflect.isExtensible(target)` | 类似于 Object.isExtensible() [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible)
`Reflect.ownKeys(target)` | 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受enumerable 影响) [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
`Reflect.preventExtensions(target)` | 类似于 Object.preventExtensions()。返回一个Boolean [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions)
`Reflect.set(target, propertyKey, value[, receiver])` | 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)
`Reflect.setPrototypeOf(target, prototype)` | 设置对象原型的函数。返回一个 Boolean，如果更新成功，则返回 true [#](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf)
<!--rehype:className=style-list-arrow-->

JavaScript this 绑定
----

### 隐式绑定

```js
function foo() {
  console.log(this)
}
let obj1 = {
  name: "obj1",
  foo: foo
}
let obj2 = {
  name: "obj2",
  obj1: obj1
}
obj2.obj1.foo() // [Object obj1]
```

#### 隐式丢失

```js
let a = obj2.obj1.foo()
a() // Window
```

- 指定隐式绑定：必须在调用的对象内部有一个对函数的引用（比如一个属性）
- 将以上调用赋值给一个变量，结果最终会是 Window
- 在 a 被调用的位置没有进行过任何显示绑定，最终全局对象 window 会调用它（`Window.a`）
<!--rehype:className=style-round-->

### 显示绑定

```js
function getName(a1, a2) {
  console.log("此人" + this.name, "岁数" + (a1 + a2))
}
let person = {
  name: "zhangsan"
}
```

#### call

call 第一个参数接受 this 作用域，剩余参数传递给其调用的函数

```js
getName.call(person, 18, 12)
```

#### apply

apply 第一个参数与 call 相同，第二个参数是其调用函数的参数数组

```js
getName.apply(person, [18, 12])
```

#### bind

bind 函数会返回一个新函数

```js
getName.bind(person,18,12)()
//或者可以这样
getName.bind(person)(18, 12)
//或者这样
getName.bind(person).bind(null, 18)(12)
```

### 内置函数中的 this

数组中的一些方法，类似于 map、forEach 等，可以自己设置绑定 this

```js
const obj = {
  name: "zhangsan"
}
const array = [1, 2, 3];
array.map(function(value){
  console.log(this.name)
}, obj)
// zhangsan x3 
```

其中一些全局对象，如 setTimeout 等，它们和未显示绑定 this 的部分数组方法一样，都会指向全局对象（`Window`）

```js
setTimeout(function(){ 
  console.log(this)
}, 1000) // Window
```

JavaScript Classes
----

### 静态方法/字段
<!--rehype:wrap-class=row-span-2-->

```javascript
class Dog {
  constructor(name) {
    this._name = name;  
  }
  
  introduce() { 
    console.log('This is ' + this._name + ' !');  
  }
  
  // 静态方法
  static bark() {
    console.log('Woof!');  
  }

  static {
    console.log('类静态初始化块调用');
  }
}

const myDog = new Dog('Buster');
myDog.introduce();

// 调用静态方法
Dog.bark();
```

#### 公有静态字段

```js
class ClassStaticField {
  static staticField = 'static field'
}

console.log(ClassStaticField.staticField)
// 预期输出值："static field"​ 
```

### Class

```javascript
class Song {
  constructor() {
    this.title;
    this.author;
  }
  
  play() {
    console.log('Song playing!');
  }
}

const mySong = new Song();
mySong.play();
```

### extends

```javascript
// Parent class
class Media {
  constructor(info) {
    this.publishDate = info.publishDate;
    this.name = info.name;
  }
}
// Child class
class Song extends Media {
  constructor(songData) {
    super(songData);
    this.artist = songData.artist;
  }
}
const mySong = new Song({ 
  artist: 'Queen', 
  name: 'Bohemian Rhapsody', 
  publishDate: 1975
});
```

### Class Constructor

```javascript
class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }
}
const mySong = new Song('Bohemian Rhapsody', 'Queen');
console.log(mySong.title);
```

### Class Methods

```javascript
class Song {
  play() {
    console.log('Playing!');
  }
  
  stop() {
    console.log('Stopping!');
  }
}
```

JavaScript Modules
----
<!--rehype:body-class=cols-2-->

### Export / Import

```javascript
// myMath.js
// 默认导出 Default export
export default function add(x,y){
  return x + y
}
// 正常导出 Normal export
export function subtract(x,y){
  return x - y
}
// 多重导出 Multiple exports
function multiply(x,y){
  return x * y
}
function duplicate(x){
  return x * 2
}
export {
  multiply, duplicate
}
```

#### import 加载模块

```javascript
// main.js
import add, { subtract, multiply, duplicate } from './myMath.js';
console.log(add(6, 2));      // 8 
console.log(subtract(6, 2))  // 4
console.log(multiply(6, 2)); // 12
console.log(duplicate(5))    // 10
// index.html
<script type="module" src="main.js"></script>
```

### Export Module

```javascript
// myMath.js
function add(x,y){
  return x + y
}
function subtract(x,y){
  return x - y
}
function multiply(x,y){
  return x * y
}
function duplicate(x){
  return x * 2
}
// node.js 中的多个导出
module.exports = {
  add,
  subtract,
  multiply,
  duplicate
}
```

#### require 加载模块

```javascript
// main.js
const myMath = require('./myMath.js')
console.log(myMath.add(6, 2));      // 8 
console.log(myMath.subtract(6, 2))  // 4
console.log(myMath.multiply(6, 2)); // 12
console.log(myMath.duplicate(5))    // 10
```

JavaScript Promises
----

### Promise
<!--rehype:wrap-class=row-span-2-->

创建 promises

```javascript
new Promise((resolve, reject) => {
  if (ok) {
    resolve(result)
  } else {
    reject(error)
  }
})
```

#### 使用 promises

```javascript
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
```

#### Promise 方法

```javascript
Promise.all(···)
Promise.race(···)
Promise.reject(···)
Promise.resolve(···)
```

### 执行器函数

```javascript
const executorFn = (resolve, reject) => {
  resolve('Resolved!');
};
const promise = new Promise(executorFn);
```

### setTimeout()

```javascript
const loginAlert = () => {
  console.log('Login');
};
setTimeout(loginAlert, 6000);
```

### Promise 状态

```javascript
const promise = new Promise((resolve, reject) => {
  const res = true;
  // 一个异步操作。
  if (res) {
    resolve('Resolved!');
  }
  else {
    reject(Error('Error'));
  }
});
promise.then(
  (res) => console.log(res),
  (err) => console.error(err)
);
```

### .then() 方法

```javascript
const promise = new Promise((resolve, reject) => {    
  setTimeout(() => {
    resolve('Result');
  }, 200);
});

promise.then((res) => {
  console.log(res);
}, (err) => {
  console.error(err);
});
```

### .catch() 方法

```javascript
const promise = new Promise(
  (resolve, reject) => {  
  setTimeout(() => {
    reject(Error('Promise 无条件拒绝。'));
  }, 1000);
});

promise.then((res) => {
  console.log(value);
});

promise.catch((err) => {
  console.error(err);
});
```

### Promise.all()
<!--rehype:wrap-class=col-span-2-->

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 300);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 200);
});
Promise.all([promise1, promise2]).then((res) => {
  console.log(res[0]);
  console.log(res[1]);
});
```

### 链接多个 .then()

```javascript
const promise = new Promise(
  resolve => 
    setTimeout(() => resolve('dAlan'),100)
);

promise.then(res => {
  return res === 'Alan' 
    ? Promise.resolve('Hey Alan!')
    : Promise.reject('Who are you?')
})
.then((res) => {
  console.log(res)
}, (err) => {
  console.error(err)
});
```

### 避免嵌套的 Promise 和 .then()
<!--rehype:wrap-class=col-span-2-->

```javascript
const promise = new Promise((resolve, reject) => {  
  setTimeout(() => {
    resolve('*');
  }, 1000);
});
const twoStars = (star) => {  
  return (star + star);
};
const oneDot = (star) => {  
  return (star + '.');
};
const print = (val) => {
  console.log(val);
};
// 将它们链接在一起
promise.then(twoStars).then(oneDot).then(print);
```

JavaScript Async-Await
----
<!--rehype:body-class=cols-2-->

### 异步
<!--rehype:wrap-class=row-span-2-->

```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

// 异步函数表达式
const msg = async function() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

// 异步箭头函数
const msg1 = async () => {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- 2 秒后
msg1(); // Message: Hello World! <-- 2 秒后
```

### 解决 Promises

```javascript
let pro1 = Promise.resolve(5);
let pro2 = 44;
let pro3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'foo');
});
Promise.all([pro1, pro2, pro3]).then(function(values) {
  console.log(values);
});
// expected => Array [5, 44, "foo"]
```

### 异步等待 Promises

```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}
async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}
msg(); // Message: Hello World! <-- 2 秒后
```

### 错误处理

```javascript
// 数据不完整
let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json); // <-- 没有错误
  console.log( user.name );    // no name!
} catch (e) {
  console.error( "Invalid JSON data!" );
}
```

### 异步等待运算符

```javascript
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}
async function msg() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}
msg(); // Message: Hello World! <-- 2 秒后
```

JavaScript 请求
----

### JSON

```JS
const jsonObj = {
  "name": "Rick",
  "id": "11A",
  "level": 4  
};
```

另见：[JSON 备忘单](./json.md)

### XMLHttpRequest

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'mysite.com/getjson');
```

`XMLHttpRequest` 是一个浏览器级别的 API，它使客户端能够通过 JavaScript 编写数据传输脚本，而不是 JavaScript 语言的一部分。

### GET

```javascript
const req = new XMLHttpRequest();
req.responseType = 'json';
req.open('GET', '/getdata?id=65');
req.onload = () => {
  console.log(xhr.response);
};
req.send();
```

### POST
<!--rehype:wrap-class=row-span-2-->

```javascript
const data = { weight: '1.5 KG' };
const xhr = new XMLHttpRequest();
// 初始化一个请求。
xhr.open('POST', '/inventory/add');
// 一个用于定义响应类型的枚举值
xhr.responseType = 'json';
// 发送请求以及数据。
xhr.send(JSON.stringify(data));
// 请求成功完成时触发。
xhr.onload = () => {
  console.log(xhr.response);
}
// 当 request 遭遇错误时触发。
xhr.onerror = () => {
  console.log(xhr.response);
}
```

### fetch api
<!--rehype:wrap-class=row-span-2-->

```javascript
fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
}).then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message)
})
```

### JSON 格式

```javascript
fetch('url-that-returns-JSON')
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
  });
```

### promise url 参数获取 API

```javascript
fetch('url')
  .then(response  => {
    console.log(response);
  }, rejection => {
    console.error(rejection.message);
  });
```

### Fetch API 函数

```javascript
fetch('https://api-xxx.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
    return response.json();  
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})
```

### async await 语法
<!--rehype:wrap-class=col-span-2-->

```javascript
const getSuggestions = async () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  try{
    const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json()
    }
  }
  catch(error){
    console.log(error)
  }
}
```
