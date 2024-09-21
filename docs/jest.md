Jest 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/jest.svg?style=flat)](https://www.npmjs.com/package/jest)
[![Downloads](https://img.shields.io/npm/dm/jest.svg?style=flat)](https://www.npmjs.com/package/jest)
[![Repo Dependents](https://badgen.net/github/dependents-repo/facebook/jest)](https://github.com/facebook/jest/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/facebook/jest)

Jest 是一款优雅、简洁的 JavaScript 测试框架，这里介绍了它的入门和 一些 API 的索引
<!--rehype:style=padding-top: 12px;-->

入门
----
<!--rehype:body-class=cols-6-->

### 介绍
<!--rehype:wrap-class=col-span-2 row-span-2-->

[Jest v29](https://jestjs.io/) 是一款优雅、简洁的 JavaScript 测试框架。

- `无需配置` 大多数 JS 项目中即装即用，无需配置
- `优秀接口` 从 `it` 到 `expect` - Jest 将工具包整合在一处。文档齐全、不断维护，非常不错。
- `隔离的` 并行进行测试，发挥每一丝算力。
- `快照` 轻松编写持续追踪大型对象的测试，并在测试旁或代码内显示实时快照。
- `代码覆盖` 无需其他操作，您仅需添加 `--coverage` 参数来生成代码覆盖率报告。

### 快速开始
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
npm install --save-dev jest
```

Add to `package.json`

```js
"scripts": {
  "test": "jest"
}
```

运行你的测试

```bash
npm test -- --watch
```

查看: [Getting started](https://jestjs.io/docs/getting-started)

### 常用命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
# 指定测试文件的名称
$ jest my-test
# 指定测试文件的路径
$ jest path/to/my-test.js
# 仅运行在 hg/git 上有改动但尚未提交的文件
$ jest -o
# 仅运行与 fileA.js 和 fileB.js相关的测试
$ jest --findRelatedTests fileA.js fileB.js
# 仅运行匹配特定名称的测试用例
$ jest -t name-of-spec
# 运行监视模式默认执行 jest -o 监视有改动的测试
$ jest --watch 
$ jest --watchAll # 监视所有测试
```

### 支持驼峰和串式命名的参数
<!--rehype:wrap-class=col-span-2-->

```bash
# 下面给出的命令执行的结果是一样的：
$ jest --collect-coverage
$ jest --collectCoverage
# 不同命名形式的参数还可以混用，如：
$ jest --update-snapshot \
       --detectOpenHandles
```

### 编写测试
<!--rehype:wrap-class=col-span-2-->

```js
describe('My work', () => {
  test('works', () => {
    expect(2).toEqual(2)
  })
})
```

### BDD 语法
<!--rehype:wrap-class=col-span-2-->

```js {2}
describe('My work', () => {
  it('works', () => { // `it`是`test`的别名
    ···
  })
})
```

### 测试结构
<!--rehype:wrap-class=col-span-3 row-span-2-->

```js
describe('makePoniesPink', () => {
  beforeAll(() => {
    /* 在所有测试之前运行 */
  })
  afterAll(() => {
    /* 在所有测试后运行 */
  })
  beforeEach(() => {
    /* 在每次测试之前运行 */
  })
  afterEach(() => {
    /* 每次测试后运行 */
  })
  test('make each pony pink', () => {
    const actual = fn(['Alice', 'Bob', 'Eve'])
    expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
  })
})
```

### 聚焦测试

```js
describe.only(···)

it.only(···)
// 别名: fit()
```

查看: [test.only](https://jestjs.io/docs/api#testonlyname-fn-timeout)

### 可选参数
<!--rehype:wrap-class=col-span-2-->

| Flag                  | Description                              |
| --------------------- | ---------------------------------------- |
| `--coverage`          | 查看测试覆盖率摘要 |
| `--detectOpenHandles` | 查看未关闭端口的摘要 |
| `--runInBand`         | 一个接一个地运行所有测试 |
| `--bail,-b`         | 失败跳出测试 |

更多参数查看 [Jest CLI Options](https://jestjs.io/docs/next/cli#--bailn)

### 跳过测试

```js
describe.skip(···)

it.skip(···)
// 别名: xit()
```

查看: [test.skip](https://jestjs.io/docs/next/api#testskipname-fn)

### 基本测试用例
<!--rehype:wrap-class=col-span-2-->

```js
expect(value).not.toBe(value)
  .toEqual(value)
  .toBeTruthy()
// Errors 测试
expect(value).toThrow(error)
  .toThrowErrorMatchingSnapshot()
```

### 快照
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toMatchSnapshot()
  .toMatchInlineSnapshot()
```

### Errors
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toThrow(error)
  .toThrowErrorMatchingSnapshot()
```

### Objects
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toBeInstanceOf(Class)
  .toMatchObject(object)
  .toHaveProperty(keyPath, value)
```

### Objects
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toContain(item)
  .toContainEqual(item)
  .toHaveLength(number)
```

### Numbers
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toBeCloseTo(number, numDigits)
  .toBeGreaterThan(number)
  .toBeGreaterThanOrEqual(number)
  .toBeLessThan(number)
  .toBeLessThanOrEqual(number)
```

### Booleans
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toBeFalsy()
  .toBeNull()
  .toBeTruthy()
  .toBeUndefined()
  .toBeDefined()
```

### Strings
<!--rehype:wrap-class=col-span-2-->

```js
expect(value)
  .toMatch(regexpOrString)
```

### NaN
<!--rehype:wrap-class=col-span-2-->

```js
test('当值为 NaN 时通过', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});
```

### Others
<!--rehype:wrap-class=col-span-2-->

```js
expect.extend(matchers)
expect.any(constructor)
expect.addSnapshotSerializer(serializer)

expect.assertions(1)
```

匹配器
----

### 基本匹配器

```js
expect(42).toBe(42)    // 严格相等 (===)
expect(42).not.toBe(3) // 严格相等 (!==)
expect([1, 2]).toEqual([1, 2]) // 深度相等

// 深度相等
expect({ a: undefined, b: 2 })
  .toEqual({ b: 2 })

// 严格相等 (Jest 23+)
expect({ a: undefined, b: 2 })
  .not.toStrictEqual({ b: 2 })
```

[Using matchers](http://jestjs.io/docs/en/using-matchers), [matchers docs](https://jestjs.io/docs/en/expect)

### 真实性

```js
// 匹配 if 语句视为 true 的任何内容
// （not false、0、''、null、undefined、NaN）
expect('foo').toBeTruthy()
// 匹配 if 语句视为 false 的任何内容
// （false、0、''、null、undefined、NaN）
expect('').toBeFalsy()
// 仅匹配 null
expect(null).toBeNull()
// 仅匹配未定义
expect(undefined).toBeUndefined()
// toBeUndefined 的反义词
expect(7).toBeDefined()
// 匹配真假
expect(true).toEqual(expect.any(Boolean))
```

### 数字

```js
// 大于
expect(2).toBeGreaterThan(1)
// 大于或等于
expect(1).toBeGreaterThanOrEqual(1)
// 小于
expect(1).toBeLessThan(2)
// 小于或等于
expect(1).toBeLessThanOrEqual(1)
// 接近于
expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
// 原始值的传递类型
expect(NaN).toEqual(expect.any(Number))
```

### 字符串

```js
// 检查字符串是否与正则表达式匹配。
expect('long string').toMatch('str')
expect('string').toEqual(expect.any(String))
expect('coffee').toMatch(/ff/)
expect('pizza').not.toMatch('coffee')
expect(['pizza', 'coffee']).toEqual(
  [
    expect.stringContaining('zz'), 
    expect.stringMatching(/ff/)
  ]
)
```

### 数组

```js
expect([]).toEqual(expect.any(Array))
const exampleArray = [
  'Alice', 'Bob', 'Eve'
]
expect(exampleArray).toHaveLength(3)
expect(exampleArray).toContain('Alice')
expect(exampleArray).toEqual(
  expect.arrayContaining(['Alice', 'Bob'])
)
expect([{ a: 1 }, { a: 2 }])
    .toContainEqual({ a: 1 }) // 包含相等
```

### 对象

```js
expect({ a:1 }).toHaveProperty('a')
expect({ a:1 }).toHaveProperty('a', 1)
expect({ a: {b:1} }).toHaveProperty('a.b')
expect({ a:1, b:2 }).toMatchObject({a:1})
expect({ a:1, b:2 }).toMatchObject({
  a: expect.any(Number),
  b: expect.any(Number),
})
expect([{ a: 1 }, { b: 2 }]).toEqual([
  expect.objectContaining(
    { a: expect.any(Number) }
  ),
  expect.anything(),
])
```

### 模拟函数
<!--rehype:wrap-class=row-span-2-->

```js
// const fn = jest.fn()
// const fn = jest.fn().mockName('Unicorn') -- 命名为 mock, Jest 22+
// 函数被调用
expect(fn).toBeCalled()
// 函数*未*调用
expect(fn).not.toBeCalled()
// 函数只被调用一次
expect(fn).toHaveBeenCalledTimes(1)
// 任何执行都带有这些参数
expect(fn).toBeCalledWith(arg1, arg2)
// 最后一个执行是用这些参数
expect(fn).toHaveBeenLastCalledWith(arg1, arg2)
// 第 N 个执行带有这些参数（Jest 23+）
expect(fn).toHaveBeenNthCalledWith(callNumber, args)
// 函数返回没有抛出错误（Jest 23+）
expect(fn).toHaveReturnedTimes(2)
// 函数返回一个值（Jest 23+）
expect(fn).toHaveReturnedWith(value)
// 最后一个函数调用返回一个值（Jest 23+）
expect(fn).toHaveLastReturnedWith(value)
// 第 N 个函数调用返回一个值（Jest 23+）
expect(fn).toHaveNthReturnedWith(value)
expect(fn.mock.calls).toEqual([
  ['first', 'call', 'args'],
  ['second', 'call', 'args'],
]) // 多次调用
// fn.mock.calls[0][0] — 第一次调用的第一个参数
expect(fn.mock.calls[0][0]).toBe(2)
```

#### 别名

- `toBeCalled` → `toHaveBeenCalled`
- `toBeCalledWith` → `toHaveBeenCalledWith`
- `lastCalledWith` → `toHaveBeenLastCalledWith`
- `nthCalledWith` → `toHaveBeenNthCalledWith`
- `toReturnTimes` → `toHaveReturnedTimes`
- `toReturnWith` → `toHaveReturnedWith`
- `lastReturnedWith` → `toHaveLastReturnedWith`
- `nthReturnedWith` → `toHaveNthReturnedWith`

### 杂项

```js
// 检查对象是否是类的实例。
expect(new A()).toBeInstanceOf(A)

// 检查对象是否是函数的实例。
expect(() => {}).toEqual(
  expect.any(Function)
)

// 匹配除 null 或 undefined 之外的任何内容
expect('pizza').toEqual(expect.anything())
```

### 快照

```js
// 这可确保某个值与最近的快照匹配。
expect(node).toMatchSnapshot()

// Jest 23+
expect(user).toMatchSnapshot({
  date: expect.any(Date),
})

// 确保值与最近的快照匹配。
expect(user).toMatchInlineSnapshot()
```

### Promise 匹配器（Jest 20+）

```js
test('resolve to lemon', () => {
  // 验证在测试期间是否调用了一定数量的断言。
  expect.assertions(1)
  // 确保添加return语句
  return expect(Promise.resolve('lemon'))
            .resolves.toBe('lemon')

  return expect(Promise.reject('octopus'))
            .rejects.toBeDefined()

  return expect(Promise.reject(
    Error('pizza')
  )).rejects.toThrow()
})
```

或者使用 async/await:

```js
test('resolve to lemon', async () => {
  expect.assertions(2)
  await expect(Promise.resolve('lemon'))
          .resolves.toBe('lemon')

  await expect(Promise.resolve('lemon'))
          .resolves.not.toBe('octopus')
})
```

[resolves 文档](https://jestjs.io/docs/en/expect#resolves)

### 例外

```js
// const fn = () => {
//    throw new Error('Out of cheese!')
// }

expect(fn).toThrow()
expect(fn).toThrow('Out of cheese')

// 测试错误消息在某处说“cheese”：这些是等价的
expect(fn).toThrowError(/cheese/);
expect(fn).toThrowError('cheese');

// 测试准确的错误信息
expect(fn).toThrowError(
  /^Out of cheese!$/
);
expect(fn).toThrowError(
  new Error('Out of cheese!')
);

// 测试函数在调用时是否抛出与最新快照匹配的错误。
expect(fn).toThrowErrorMatchingSnapshot()
```

#### 别名

- `toThrowError` → `toThrow`

异步测试
----

### 实例
<!--rehype:wrap-class=row-span-2-->

在异步测试中指定一些预期的断言是一个很好的做法，所以如果你的断言根本没有被调用，测试将会失败。

```js
test('async test', () => {
  // 在测试期间恰好调用了三个断言
  expect.assertions(3) 
  // 或者 - 在测试期间至少调用一个断言
  expect.hasAssertions()
  // 你的异步测试
})
```

请注意，您也可以在任何 `describe` 和 `test` 之外对每个文件执行此操作：

```js
beforeEach(expect.hasAssertions)
```

这将验证每个测试用例至少存在一个断言。 它还可以与更具体的 `expect.assertions(3)` 声明配合使用。
请参阅 Jest 文档中的 [更多示例](https://jestjs.io/docs/en/tutorial-async)

### async/await

```js
test('async test', async () => {
  expect.assertions(1)

  const result = await runAsyncOperation()
  expect(result).toBe(true)
})
```

### done() 回调
<!--rehype:wrap-class=row-span-2-->

```js
test('async test', (done) => {
  expect.assertions(1)

  runAsyncOperation()
  
  setTimeout(() => {
    try {
      const res = getAsyncOperatResult()
      expect(res).toBe(true)
      done()
    } catch (err) {
      done.fail(err)
    }
  })
})
```

将断言包装在 `try/catch` 块中，否则 `Jest` 将忽略失败

### Promises

```js
test('async test', () => {
  expect.assertions(1)

  return runAsyncOperation().then((result) => {
    expect(result).toBe(true)
  })
})
```

从你的测试中 _返回_ 一个 `Promise`

## 模拟

### 模拟函数
<!--rehype:wrap-class=row-span-2-->

```js
test('call the callback', () => {
  const callback = jest.fn()
  fn(callback)
  expect(callback).toBeCalled()
  expect(callback.mock.calls[0][1].baz)
    .toBe('pizza') // 第一次调用的第二个参数
  
  // 匹配第一个和最后一个参数，但忽略第二个参数
  expect(callback)
    .toHaveBeenLastCalledWith(
      'meal',
      expect.anything(),
      'margarita'
    )
})
```
<!--rehype:className=wrap-text -->

您还可以使用快照：

```js
test('call the callback', () => {
  // mockName 在 Jest 22+ 中可用
  const callback = jest.fn()
    .mockName('Unicorn')

  fn(callback)
  expect(callback).toMatchSnapshot()
  // ->
  // [MockFunction Unicorn] {
  //   "calls": Array [
  // ...
})
```

并将实现传递给 `jest.fn` 函数：

```js
const callback = jest.fn(() => true)
```

[模拟函数文档](https://jestjs.io/docs/en/mock-function-api)

### 返回、解析和拒绝值
<!--rehype:wrap-class=row-span-2-->

您的模拟可以返回值：

```js
const callback
    = jest.fn().mockReturnValue(true)

const callbackOnce
    = jest.fn().mockReturnValueOnce(true)
```

或解析值：

```js
const promise
    = jest.fn().mockResolvedValue(true)

const promiseOnce
    = jest.fn().mockResolvedValueOnce(true)
```

他们甚至可以拒绝值：

```js
const failedPromise =
  jest.fn().mockRejectedValue('Error')

const failedPromiseOnce =
  jest.fn().mockRejectedValueOnce('Error')
```

你甚至可以结合这些：

```js
const callback = jest.fn()
        .mockReturnValueOnce(false)
        .mockReturnValue(true)
// ->
//  call 1: false
//  call 2+: true
```

### 使用 `jest.mock` 方法模拟模块

```js
// 原来的 lodash/memoize 应该存在
jest.mock(
  'lodash/memoize',
  () => (a) => a
)
// 不需要原始的 lodash/memoize
jest.mock(
  'lodash/memoize',
  () => (a) => a,
  { virtual: true }
)
```

注意：当使用 `babel-jest` 时，对 [`jest.mock`](https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options) 的调用将自动提升到代码块的顶部。 如果您想明确避免这种行为，请使用 `jest.doMock`。

### 使用模拟文件模拟模块

创建一个类似 `__mocks__/lodash/memoize.js` 的文件：

```js
module.exports = (a) => a
```

添加到您的测试中：

```js
jest.mock('lodash/memoize')
```

注意：当使用 `babel-jest` 时，对 `jest.mock` 的调用将自动提升到代码块的顶部。 如果您想明确避免这种行为，请使用 `jest.doMock`。[手动模拟文档](https://jestjs.io/docs/en/manual-mocks)

### 模拟 getters 和 setters

```js
const getTitle = jest.fn(() => 'pizza')
const setTitle = jest.fn()
const location = {}
Object.defineProperty(location, 'title', {
  get: getTitle,
  set: setTitle,
})
```

### 模拟 getter 和 setter (Jest 22.1.0+)

```js
const location = {}
const getTitle = jest
    .spyOn(location, 'title', 'get')
    .mockImplementation(() => 'pizza')
const setTitle = jest
    .spyOn(location, 'title', 'set')
    .mockImplementation(() => {})
```

### 定时器模拟
<!--rehype:wrap-class=row-span-3-->

为使用本机计时器函数（`setTimeout`、`setInterval`、`clearTimeout`、`clearInterval`）的代码编写同步测试。

```js
// 启用假计时器
jest.useFakeTimers()
test('kill the time', () => {
  const callback = jest.fn()
  // 运行使用 setTimeout或setInterval 的代码
  const actual 
    = someFunctionThatUseTimers(callback)
  // 快进直到所有定时器都执行完毕
  jest.runAllTimers()
  // 同步检查结果
  expect(callback).toHaveBeenCalledTimes(1)
})
```

或者使用 [advanceTimersByTime()](https://jestjs.io/docs/en/timer-mocks#advance-timers-by-time) 按时间调整计时器：

```js
// 启用假计时器
jest.useFakeTimers()
test('kill the time', () => {
  const callback = jest.fn()
  // 运行使用 setTimeout或setInterval 的代码
  const actual 
    = someFunctionThatUseTimers(callback)
  // 快进 250 毫秒
  jest.advanceTimersByTime(250)
  // 同步检查结果
  expect(callback).toHaveBeenCalledTimes(1)
})
```

> 对于特殊情况，请使用 [jest.runOnlyPendingTimers()](https://jestjs.io/docs/en/timer-mocks#run-pending-timers)。

**注意：** 您应该在测试用例中调用 `jest.useFakeTimers()` 以使用其他假计时器方法。

### 模拟对象方法

```js
const spy = jest.spyOn(console, 'log')
  .mockImplementation(() => {})

expect(console.log.mock.calls)
  .toEqual([['dope'], ['nope']])
spy.mockRestore()
```

```js
const spy = jest.spyOn(ajax, 'request')
  .mockImplementation(
    () => Promise.resolve({success: true})
  )

expect(spy).toHaveBeenCalled()
spy.mockRestore()
```

### 清除和恢复模拟
<!--rehype:wrap-class=row-span-2-->

对于一个模拟

```js
// 清除模拟使用日期
// （fn.mock.calls、fn.mock.instances）
fn.mockClear()

// 清除并删除任何模拟的返回值或实现
fn.mockReset()

// 重置并恢复初始实现
fn.mockRestore()
```

> 注意：`mockRestore` 仅适用于由`jest.spyOn` 创建的模拟。对于所有模拟：

```js
// 清除所有 mock 的 
// mock.calls、mock.instances、
// mock.contexts 和 mock.results 属性。
jest.clearAllMocks()
// 重置所有模拟的状态。
jest.resetAllMocks()
// 将所有模拟恢复到其原始值。
jest.restoreAllMocks()
```

### 使用模拟时访问原始模块

```js
jest.mock('fs')
// 模拟模块
const fs = require('fs')
// 原始模块
const fs = require.requireActual('fs')
```

数据驱动测试（Jest 23+）
----

### 使用不同的数据运行相同的测试

```js
test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%s, %s)', (a, b, expected) => {
  expect(a + b).toBe(expected)
})
```

### 使用模板文字相同

```js
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})
```

### 或在“describe”级别

```js
describe.each([
  ['mobile'], ['tablet'], ['desktop']
])('checkout flow on %s', (viewport) => {
  test('displays success page', () => {
    //
  })
})
```

[describe.each()](https://jestjs.io/docs/en/api#describeeachtablename-fn-timeout) 文档、[test.each()](https://jestjs.io/docs/en/api#testeachtablename-fn-timeout) 文档

跳过测试
----
<!--rehype:body-class=cols-2-->

### 不要运行这些测试

```js
describe.skip('makePoniesPink'...
tests.skip('make each pony pink'...
```

### 仅运行以下测试

```js
describe.only('makePoniesPink'...
tests.only('make each pony pink'...
```

测试有副作用的模块
----
<!--rehype:body-class=cols-1-->

### 实例

```js
const modulePath = '../module-to-test'
afterEach(() => {
  jest.resetModules()
})
test('第一次测试', () => {
  // 准备第一次测试的条件
  const result = require(modulePath)
  expect(result).toMatchSnapshot()
})
test('第二个文本', () => {
  // 准备第二次测试的条件
  const fn = () => require(modulePath)
  expect(fn).toThrow()
})
```

`Node.js` 和 `Jest` 会缓存你需要的模块。 要测试具有副作用的模块，您需要在测试之间重置模块注册表

命令参数参考
---
<!--rehype:body-class=cols-1-->

### 命令参数

:-- | --
:-- | --
`--bail[=<n>]`, `-b` | 在 `n` 个测试套件失败后立即退出测试套件
`--cache` | 是否使用缓存
`--changedFilesWithAncestor` | 运行与当前更改和上次提交中所做更改相关的测试
`--changedSince` | 运行与自提供的分支或提交哈希以来的更改相关的测试
`--ci` | 指定该参数时，`Jest` 会认为正在 `CI` 环境上运行
`--clearCache` | 删除 `Jest` 的缓存目录, 然后不运行测试直接退出
`--clearMocks` | 在每次测试前自动清除模拟的上下文
`--collectCoverageFrom=<glob>` | 相对于 `rootDir` 的 `glob` 模式匹配需要从中收集覆盖信息的文件
`--colors` | 即便 `stdout` 不是 `TTY` 模式，也要强制高亮显示测试结果
`--config=<path>` | 指定配置文件的路径
`--coverage[=<boolean>]`, `--collectCoverage` | 将测试覆盖率信息输出为报告
`--coverageProvider=<provider>` | 指示应该使用哪个提供程序来检测代码的覆盖率
`--debug` | 打印关于 `Jest` 配置的调试信息
`--detectOpenHandles` | 尝试收集并打印打开的句柄以防止 `Jest` 干净地退出
`--env=<environment>` | 所有测试都使用该测试环境设定
`--errorOnDeprecated` | 使调用已弃用的 `API` 抛出有用的错误消息
`--expand`, `-e` | 使用该参数来对比完整的差异和错误，而非修复
`--filter=<file>` | 导出过滤功能的模块的路径
`--findRelatedTests <spaceSeparatedListOfSourceFiles>` | 查找并运行涵盖作为参数传入的以空格分隔的源文件列表的测试
`--forceExit` | 强制 `Jest` 在所有测试运行完后退出
`--help` | 显示帮助信息，类似于本页文档
`--ignoreProjects <project1> ... <projectN>` | 忽略特定的测试项目
`--init` | 生成一个基础配置文件
`--injectGlobals` | 将全局变量（`expect`,`test`,`describe`,`beforeEach`等）插入到全局环境中
`--json` | 以 `JSON` 模式显示测试结果
`--lastCommit` | 运行受上次提交中的文件更改影响的所有测试
`--listTests` | 以 `JSON` 数组的形式列出所有将要运行的测试并退出
`--logHeapUsage` | 记录每个测试后的记录堆使用情况
`--maxConcurrency=<num>` | 防止 `Jest` 同时执行超过指定数量的测试
`--maxWorkers=<num>\|<string>` | 设定运行测试的最大工作池数目
`--noStackTrace` | 禁止栈跟踪信息在测试结果输出中
`--notify` | 激活测试结果通知
`--onlyChanged` `-o` | 尝试确定根据当前存储库中哪些已经更改的文件来运行的测试
`--outputFile=<filename>` | 通过 `——json` 参数可以将测试结果写入到指定文件
`--passWithNoTests` | 允许在没有找到文件的情况下通过测试
`--projects <path1> ... <pathN>` | 从指定路径中找到的一个或多个项目运行测试；也采用路径 `globs`
`--reporters` | 使用指定的记者进行测试
`--resetMocks` | 每次测试前自动重置模拟状态
`--restoreMocks` | 在每次测试前自动恢复模拟状态和实现
`--roots` | `Jest` 应该用来搜索文件的目录路径列表
`--runInBand`, `-i` | 仅在当前的进程中连续运行所有测试，而非通过创建的子进程的工作池来运行测试
`--runTestsByPath` | 仅运行使用其确切路径指定的测试
`--selectProjects <project1> ... <projectN>` | 运行指定的测试项目
`--setupFilesAfterEnv <path1> ... <pathN>` | 运行某些代码以在每次测试之前配置或设置测试框架的模块的路径列表
`--shard` | 测试套件分片以 `(?<shardIndex>\d+)/(?<shardCount>\d+)` 的格式执行
`--showConfig` | 输出 `Jest` 配置，然后退出
`--silent` | 阻止所有测试通过控制台输出信息
`--testEnvironmentOptions=<json string>` | 带有将传递给 `testEnvironment` 的选项的 `JSON` 字符串
`--testLocationInResults` | 向测试结果添加 `location` 字段
`--testMatch glob1 ... globN` | `Jest` 用于检测测试文件的 `glob` 模式
`--testNamePattern=<regex>`, `-t` | 仅运行名称与正则表达式匹配的测试
`--testPathIgnorePatterns=<regex>\|[array]` | 在执行测试之前针对所有测试路径进行测试的单个或一组正则表达式模式字符串
`--testPathPattern=<regex>` | 在运行测试前，匹配的 `regexp` 模式字符串的测试文件路径
`--testRunner=<path>` | 允许你指定自定义测试运行程序
`--testSequencer=<path>` | 允许您指定自定义测试定序器
`--testTimeout=<number>` | 测试的默认超时时间(以毫秒为单位)。默认值：`5000`
`--updateSnapshot`, `-u` | 在运行测试中使用这个参数来重新录制每个失败测试的快照
`--useStderr` | 转移所有输出到 `stderr` (标准错误输出)
`--verbose` | 层次显示测试套件中每个测试的结果
`--version`, `-v` | 打印版本并退出
`--watch` | 监视文件更改，并重新运行与已更改的文件相关的测试
`--watchAll` | 监视文件的更改并在任何更改时重新运行所有测试
`--watchman` | 是否使用 `watchman` 进行文件爬取。 默认为 `true`
<!--rehype:className=left-align-->

另见
----

- [Jest cheat sheet](https://github.com/sapegin/jest-cheat-sheet) _(github.com)_
