ES2015+ 备忘清单
===

快速浏览 ES2015、ES2016、ES2017、ES2018 及以后的 JavaScript 新特性

常用
---

### 块范围
<!--rehype:wrap-class=row-span-2-->

#### Let

```js {2,4}
function fn () {
  let x = 0
  if (true) {
    let x = 1 // 只在这个`if`里面
  }
}
```

#### Const

```js
const a = 1
```

`let` 是新的 `var`。 常量(`const`) 就像 `let` 一样工作，但不能重新分配。
请参阅：[Let 和 const](https://babeljs.io/learn-es2015/#let--const)

### 反引号字符串
<!--rehype:wrap-class=row-span-2-->

#### 插值

```js
const message = `Hello ${name}`
```

#### 多行字符串

```js
const str = `
hello
world
`
```

模板和多行字符串。
请参阅：[模板字符串](https://babeljs.io/learn-es2015/#template-strings)

### 二进制和八进制文字

```js
let bin = 0b1010010
let oct = 0o755
```

请参阅：[二进制和八进制文字](https://babeljs.io/learn-es2015/#binary-and-octal-literals)

### 指数运算符

```js {1}
const byte = 2 ** 8
// 同: Math.pow(2, 8)
```

### 新方法

#### 新的字符串方法

```js
"hello".repeat(3)
"hello".includes("ll")
"hello".startsWith("he")
"hello".padStart(8) // "   hello"
"hello".padEnd(8) // "hello   " 
"hello".padEnd(8, '!') // hello!!!
"\u1E9B\u0323".normalize("NFC")
```

#### 新的数字方法

```js
Number.EPSILON
Number.isInteger(Infinity) // false
Number.isNaN("NaN") // false
```

#### 新的 Math 方法

```js
Math.acosh(3) // 1.762747174039086
Math.hypot(3, 4) // 5
Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2) // 2
```

#### 新的 Array 方法

```js
// 返回一个真实的数组
Array.from(document.querySelectorAll("*"))
// 类似于 new Array(...)，但没有特殊的单参数行为
Array.of(1, 2, 3)
```

请参阅: [新方法](https://babeljs.io/learn-es2015/#math--number--string--object-apis)

### 类

```js
class Circle extends Shape {
```

#### 构造函数

```js {1}
  constructor (radius) {
    this.radius = radius
  }
```

#### 方法

```js {1}
  getArea () {
    return Math.PI * 2 * this.radius
  }
```

#### 调用超类方法

```js {2}
  expand (n) {
    return super.expand(n) * Math.PI
  }
```

#### 静态方法

```js {1}
  static createFromDiameter(diameter) {
    return new Circle(diameter / 2)
  }
}
```

原型的语法糖。
请参阅: [类](https://babeljs.io/learn-es2015/#classes)

### 私有类

javascript 默认字段是公共的（`public`）,如果需要注明私有，可以使用（`#`）

```js
class Dog {
  #name;
  constructor(name) {
    this.#name = name;
  }
  printName() {
    //只能在类内部调用私有字段
    console.log(`你的名字是${this.#name}`)
  }
}

const dog = new Dog("putty")
//console.log(this.#name) 
//Private identifiers are not allowed outside class bodies.
dog.printName()
```

#### 静态私有类

```js
class ClassWithPrivate {
  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 42;

  static #privateStaticMethod() {
    // …
  }
}
```

Promises
--------

### 做出承诺

```js {1}
new Promise((resolve, reject) => {
  if (ok) { resolve(result) }
  else { reject(error) }
})
```

用于异步编程。
请参阅：[Promises](https://babeljs.io/learn-es2015/#promises)

### 使用 Promises

```js {2,3}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
```

### 在 finally 中使用 Promise

```js {4}
promise
  .then((result) => { ··· })
  .catch((error) => { ··· })
  .finally(() => {
    /* 独立于成功/错误的逻辑 */
  })
```

当承诺被履行或被拒绝时，处理程序被调用

### Promise 函数

```js
Promise.all(···)
Promise.race(···)
Promise.reject(···)
Promise.resolve(···)
```

### Async-await

```js {2,3}
async function run () {
  const user = await getUser()
  const tweets = await getTweets(user)
  return [user, tweets]
}
```

`async` 函数是使用函数的另一种方式。
请参阅：[异步函数](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

解构 Destructuring
-------------

### 解构赋值

#### Arrays

```js {1}
const [first, last] = ['Nikola', 'Tesla']
```

#### Objects

```js {1}
let {title, author} = {
  title: 'The Silkworm',
  author: 'R. Galbraith'
}
```

支持匹配数组和对象。
请参阅：[解构](https://babeljs.io/learn-es2015/#destructuring)

### 默认值

```js
const scores = [22, 33]
const [math = 50, sci = 50, arts = 50] = scores
```

----

```js
// Result:
// math === 22, sci === 33, arts === 50
```

可以在解构数组或对象时分配默认值

### 函数参数

```js {1}
function greet({ name, greeting }) {
  console.log(`${greeting}, ${name}!`)
}
```

----

```js
greet({ name: 'Larry', greeting: 'Ahoy' })
```

对象和数组的解构也可以在函数参数中完成

### 默认值

```js {1}
function greet({ name = 'Rauno' } = {}) {
  console.log(`Hi ${name}!`);
}
```

----

```js
greet() // Hi Rauno!
greet({ name: 'Larry' }) // Hi Larry!
```

### 重新分配键

```js {1}
function printCoordinates({ left: x, top: y }) {
  console.log(`x: ${x}, y: ${y}`)
}
```

----

```js
printCoordinates({ left: 25, top: 90 })
```

此示例将 `x` 分配给 `left` 键的值

### 循环

```js {1}
for (let {title, artist} of songs) {
  ···
}
```

赋值表达式也在循环中工作

### 对象解构

```js {1}
const { id, ...detail } = song;
```

使用 `rest(...)` 运算符单独提取一些键和对象中的剩余键

扩展运算符 Spread
------

### 对象扩展

#### 与对象扩展

```js {2}
const options = {
  ...defaults,
  visible: true
}
```

#### 没有对象扩展

```js
const options = Object.assign(
  {}, defaults,
  { visible: true })
```

对象扩展运算符允许您从其他对象构建新对象。
请参阅：[对象传播](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

### 数组扩展

#### 具有数组扩展

```js {2,3}
const users = [
  ...admins,
  ...editors,
  'rstacruz'
]
```

#### 没有数组扩展

```js
const users = admins
  .concat(editors)
  .concat([ 'rstacruz' ])
```

扩展运算符允许您以相同的方式构建新数组。
请参阅：[扩展运算符](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)

函数 Functions
---------

### 函数参数
<!--rehype:wrap-class=row-span-3-->

#### 默认参数

```js {1}
function greet (name = 'Jerry') {
  return `Hello ${name}`
}
```

#### Rest 参数

```js {1}
function fn(x, ...y) {
  // y 是一个数组
  return x * y.length
}
```

#### 扩展

```js {1}
fn(...[1, 2, 3])
// 与 fn(1, 2, 3) 相同
```

Default(默认), rest, spread(扩展)。
请参阅：[函数参数](https://babeljs.io/learn-es2015/#default--rest--spread)

### 箭头函数
<!--rehype:wrap-class=row-span-3-->

#### 箭头函数

```js {1}
setTimeout(() => {
  ···
})
```

#### 带参数

```js {1}
readFile('text.txt', (err, data) => {
  ...
})
```

#### 隐式返回

```js {1,4,5,6}
arr.map(n => n*2)
// 没有花括号 = 隐式返回
// 同: arr.map(function (n) { return n*2 })
arr.map(n => ({
  result: n*2
}))
// 隐式返回对象需要在对象周围加上括号
```

类似函数，但保留了 `this`。
请参阅：[箭头函数](https://babeljs.io/learn-es2015/#arrows-and-lexical-this)

### 参数设置默认值

```js
function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello')          // Hello World
log('Hello', 'China') // Hello China
log('Hello', '')      // Hello
```

### 与解构赋值默认值结合使用

```js
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
```

### name 属性

```js
function foo() {}
foo.name // "foo"
```

### length 属性

```js
function foo(a, b){}
foo.length // 2
```

Objects
-------

### 速记语法

```js
module.exports = { hello, bye }
```

同下:

```js
module.exports = {
  hello: hello, bye: bye
}
```

请参阅：[对象字面量增强](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### 方法

```js {2}
const App = {
  start () {
    console.log('running')
  }
}
// 同: App = { start: function () {···} }
```

请参阅：[对象文字增强](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### Getters and setters

```js {2,5}
const App = {
  get closed () {
    return this.status === 'closed'
  },
  set closed (value) {
    this.status = value ? 'closed' : 'open'
  }
}
```

请参阅：[对象字面量增强](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### 计算属性名称

```js {3}
let event = 'click'
let handlers = {
  [`on${event}`]: true
}
// 同: handlers = { 'onclick': true }
```

请参阅：[对象字面量增强](https://babeljs.io/learn-es2015/#enhanced-object-literals)

### 提取值

```js {3,5}
const fatherJS = { age: 57, name: "张三" }
Object.values(fatherJS)
// [57, "张三"]
Object.entries(fatherJS)
// [["age", 57], ["name", "张三"]]
```

Modules 模块
-------

### Imports 导入

```js
import 'helpers'
// 又名: require('···')
```

----

```js
import Express from 'express'
// 又名: const Express = require('···').default || require('···')
```

----

```js
import { indent } from 'helpers'
// 又名: const indent = require('···').indent
```

----

```js
import * as Helpers from 'helpers'
// 又名: const Helpers = require('···')
```

----

```js
import { indentSpaces as indent } from 'helpers'
// 又名: const indent = require('···').indentSpaces
```

`import` 是新的 `require()`。
请参阅：[Module imports](https://babeljs.io/learn-es2015/#modules)

### Exports 导出

```js
export default function () { ··· }
// 又名: module.exports.default = ···
```

----

```js
export function mymethod () { ··· }
// 又名: module.exports.mymethod = ···
```

----

```js
export const pi = 3.14159
// 又名: module.exports.pi = ···
```

----

```js
const firstName = 'Michael';
const lastName = 'Jackson';
const year = 1958;
export { firstName, lastName, year };
```

----

```js
export * from "lib/math";
```

`export` 是新的`module.exports`。
请参阅：[Module exports](https://babeljs.io/learn-es2015/#modules)

### `as` 关键字重命名

```js {2,8,12-14}
import {
  lastName as surname // 导入重命名
} from './profile.js';

function v1() { ... }
function v2() { ... }

export { v1 as default };
// 等同于 export default v1;

export {
  v1 as streamV1,           // 导出重命名
  v2 as streamV2,           // 导出重命名
  v2 as streamLatestVersion // 导出重命名
};
```

### 动态加载模块

```js
button.addEventListener('click', event => {
  import('./dialogBox.js')
    .then(dialogBox => {
      dialogBox.open();
    })
    .catch(error => {
      /* Error handling */
    })
});
```

[ES2020提案](https://github.com/tc39/proposal-dynamic-import) 引入 `import()` 函数

### import() 允许模块路径动态生成

```js
const main = document.querySelector('main')

import(`./modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
```

### import.meta

[ES2020](https://github.com/tc39/proposal-import-meta) 为 `import` 命令添加了一个元属性 `import.meta`，返回当前模块的元信息

```js
new URL('data.txt', import.meta.url)
```

Node.js 环境中，`import.meta.url`返回的总是本地路径，即 `file:URL` 协议的字符串，比如 `file:///home/user/foo.js`

### 导入断言（Import Assertions）
<!--rehype:wrap-class=col-span-2-->

#### 静态导入

```js
import json from "./package.json" assert {type: "json"}
// 导入 json 文件中的所有对象
```

#### 动态导入

```js
const json = 
     await import("./package.json", { assert: { type: "json" } })
```

Generators
----------

### Generator 函数

```js
function* idMaker () {
  let id = 0
  while (true) { yield id++ }
}
```

----

```js
let gen = idMaker()
gen.next().value  // → 0
gen.next().value  // → 1
gen.next().value  // → 2
```

情况很复杂。
请参阅：[Generators](https://babeljs.io/learn-es2015/#generators)

### For..of + 迭代器(iterator)
<!--rehype:wrap-class=row-span-2-->

```js
let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}

for (var n of fibonacci) {
  // 在 1000 处截断序列
  if (n > 1000) break;
  console.log(n);
}
```

用于迭代生成器和数组。
请参阅：[For..of iteration](https://babeljs.io/learn-es2015/#iterators--forof)

### 与 Iterator 接口的关系

```js
var gen = {};
gen[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...gen] // => [1, 2, 3]
```

`Generator` 函数赋值给 `Symbol.iterator` 属性，从而使得 `gen` 对象具有了 `Iterator` 接口，可以被 `...` 运算符遍历了

### Symbol.iterator 属性

```js
function* gen() { /* some code */ }
var g = gen();

g[Symbol.iterator]() === g // true
```

`gen` 是一个 `Generator` 函数，调用它会生成一个遍历器对象`g`。它的 `Symbol.iterator` 属性，也是一个遍历器对象生成函数，执行后返回它自己

另见
---

- [Learn ES2015](https://babeljs.io/docs/en/learn/) _(babeljs.io)_
- [ECMAScript 6 功能概述](https://github.com/lukehoban/es6features#readme) _(github.com)_
- [ECMAScript 6 入门教程 (阮一峰)](https://es6.ruanyifeng.com/) _(ruanyifeng.com)_
