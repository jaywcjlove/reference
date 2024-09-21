TypeScript 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/typescript.svg?style=flat)](https://www.npmjs.com/package/typescript)
[![Downloads](https://img.shields.io/npm/dm/typescript.svg?style=flat)](https://www.npmjs.com/package/typescript)
[![Repo Dependents](https://badgen.net/github/dependents-repo/Microsoft/TypeScript)](https://github.com/Microsoft/TypeScript/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/Microsoft/TypeScript)

包含最重要基础、泛型、方法、class 等 TypeScript 强类型编程语言语法的快速参考备忘单。初学者的完整快速参考
<!--rehype:style=padding-top: 12px;-->

入门 Interface
----

### 介绍

TypeScript 是具有类型语法的 JavaScript。Interface 是为了匹配它们的运行时行为而构建的。

- [JavaScript 备忘清单](./javascript.md) _(jaywcjlove.github.io)_
- [TypeScript 官网](https://www.typescriptlang.org/)  _(typescriptlang.org)_

### 内置类型基元

```ts
any, void,
boolean, string, number,
undefined, null,
unknown, never,
bigint, symbol
```

### 常见的内置 JS 对象

```ts
Date, Error,
Array, Map, Set,
Regexp, Promise
```

### 内置

#### 类型字面量

Object:

```ts
{ field: string }
```

Function:

```ts
(arg: number) => string
```

Arrays:

```ts
string[] or Array<string>
```

Tuple:

```ts
[string, number]
```

#### 避免

```
Object, String, Number, Boolean
```

### 通用语法
<!--rehype:wrap-class=col-span-2-->

```ts
/** 可选择从现有接口或类型(Response, HTTPAble)中获取属性 */
interface JSONResponse extends Response, HTTPAble {
  version: number;
  // 👇  附加在编辑器中显示的 JSDoc 注释
  /** In bytes */
  payloadSize: number;
  // 👇  此属性可能不在对象上
  outOfStock?: boolean;
  // 👇  这是描述作为函数的属性的两种方法
  update: (retryTimes: number) => void;
  update(retryTimes: number): void;
  // 👇  你可以通过 () 调用这个对象 -（JS中的函数是可以调用的对象）
  (): JSONResponse
  // 👇  您可以在此 Interface 描述的对象上使用 new
  new(s: string): JSONResponse;
  // 👇  任何未描述的属性都假定存在，并且所有属性必须是数字
  [key: string]: number;
  // 👇  告诉 TypeScript 一个属性不能被改变
  readonly body: string;
}
```

### 泛型
<!--rehype:wrap-class=row-span-2-->

声明一个可以在你的 Interface 中改变的类型

```ts
interface APICall<Response> {
  data: Response
}
```

#### 用法

```ts
const api: APICall<ArtworkCall> = ...

api.data  // Artwork
```

您可以通过 `extends` 关键字限制泛型参数接受的类型。

```ts
interface APICall<Response extends { status: number }> {
  data: Response
}

const api: APICall<ArtworkCall> = ...

api.data.status
```

### 重载

```ts
interface Expect {
  (matcher: boolean): string
  (matcher: string): boolean;
}
```

一个可调用 Interface 可以对不同的参数集有多个定义。

### 类一致性

```ts
interface Syncable {
  sync(): void
}
class Account implements Syncable { ... }
```

您可以通过实现确保类 class 符合 Interface。

### Get & Set

对象可以有自定义的 `getter` 或 `setter`。

```ts
interface Ruler {
  get size(): number
  set size(value: number | string);
}
```

用法

```ts
const r: Ruler = ...
r.size = 12
r.size = "36"
```

### 通过合并扩展

```ts
interface APICall {
  data: Response
}

interface APICall {
  error?: Error
}
```

Interface 被合并，多个声明将向类型定义添加新字段。

Type
----

### Type vs Interface
<!--rehype:wrap-class=row-span-2-->

- Interface 只能描述对象形状
- Interface 可以通过多次声明来扩展
- 在性能关键 Type 中，Interface 比较检查可以更快。

#### 把类型想象成变量

就像您如何在不同范围内创建具有相同名称的变量一样，type 具有相似的语义。

#### 使用实用程序类型构建

TypeScript 包含许多全局类型，它们将帮助您在类型系统中完成常见任务。检查他们的网站。

### 原始类型

```ts
type SanitizedInput = string;
type MissingNo = 404;
```

主要用于文档

### 对象字面类型

```ts
type Location = {
  x: number;
  y: number;
};
```

### 联合类型

```ts
type Size = "small" | "medium" | "large"
```

描述许多选项中的一个类型，例如已知字符串的列表。

### 交叉口类型

```ts
type Location = { x: number }
              & { y: number }
// { x: number, y: number }
```

一种合并/扩展类型的方法

### 从值类型

```ts
const data = { ... }
type Data = typeof data
```

通过 typeof 运算符重用来自现有 JavaScript 运行时值的类型。

### 从函数返回类型

```ts
const createFixtures = () => { ... }
type Fixtures = ReturnType<typeof createFixtures>
function test(fixture: Fixtures) {}
```

将函数的返回值重新用作类型。

### 从模块类型

```ts
const data: import("./data").data
```

这些功能非常适合构建库、描述现有的 JavaScript 代码，您可能会发现在大多数 TypeScript 应用程序中很少使用它们。

### 对象字面量语法
<!--rehype:wrap-class=col-span-2-->

```ts
type JSONResponse = {
  version: number;                        // 字段
  /** In bytes */                         // 附加文档
  payloadSize: number;
  outOfStock?: boolean;                   // 可选的
  update: (retryTimes: number) => void;   // 箭头函数字段
  update(retryTimes: number): void;       // 函数
  (): JSONResponse                        // 类型是可调用的
  [key: string]: number;                  // 接受任何索引
  new (s: string): JSONResponse;          // new 对象
  readonly body: string;                  // 只读属性
}
```

用于节省空间的 Terser，请参阅 Interface 备忘清单了解更多信息，除了“static”匹配之外的所有内容。

### 映射类型

```ts
type Artist = {
  name: string, bio: string
}

type Subscriber<Type> = {
  [Property in keyof Type]: 
      (newValue: Type[Property]) => void
}
type ArtistSub = Subscriber<Artist>
// { name: (nv: string) => 
//    void, bio: (nv: string) => void }
```

类似于类型系统的映射语句，允许输入类型更改新类型的结构。

### 模板联合类型
<!--rehype:wrap-class=col-span-3-->

```ts
type SupportedLangs =  "en" | "pt" | "zh";
type FooterLocaleIDs = "header" | "footer";
type AllLocaleIDs = `${SupportedLangs}_${FooterLocaleIDs}_id`;

// "en_header_id" | "en_footer_id"
//         | "pt_header_id" | "pt_footer_id"
//         | "zh_header_id" | "zh_footer_id"
```

### 条件类型
<!--rehype:wrap-class=col-span-3-->

```ts
type HasFourLegs<Animal> = Animal extends { legs: 4 } ? Animal : never
type Animals = Bird | Dog | Ant | Wolf;
type FourLegs = HasFourLegs<Animals>
// Dog | Wolf
```

在类型系统中充当“if 语句”。 通过泛型创建，然后通常用于减少类型联合中的选项数量。

控制流动分析
----

### If 声明
<!--rehype:wrap-class=row-span-3-->

#### typeof（用于原语）

```ts
const input = getUserInput()
input // string | number

if (typeof input === 'string') {
 input // string
}
```

#### 对象中的“property”（对于对象）

```ts
const input = getUserInput()
input  // string | { error: ... }

if ('error' in input) {
  input // { error: ... }
}
```

#### instanceof（用于类）

```ts
const input = getUserInput()
  input // number | number[]

if (input instanceof Array) {
  input // number[]
}
```

#### 类型保护功能（适用于任何东西）

```ts
const input = getUserInput()
   input // number | number[]

if (Array.isArray(input)) {
  input // number[]
}
```

### 任务
<!--rehype:wrap-class=row-span-3-->

```ts
const data1 = {
  name: "Zagreus"
}
// typeof data1 = {
//   name: string
// }
```

👇 使用 `as const` 缩小类型 👇

```ts
const data2 = {
  name: "Zagreus"
} as const
// typeof data1 = {
//   name: 'Zagreus'
// }
```

跟踪相关变量

```ts
const response = getResponse()
const isSuccessResponse = 
    res instanceof SuccessResponse

if (isSuccessResponse) {
  res.data // SuccessResponse
}
```

重新分配更新类型

```ts
let data: string | number = ...
data // string | number
data = "Hello"
data // string
```

### 关键点

CFA 几乎总是采用联合，并根据代码中的逻辑减少联合内的类型数量。

大多数时候 CFA 在自然 JavaScript 布尔逻辑中工作，但是有一些方法可以定义您自己的函数，这些函数会影响 TypeScript 如何缩小类型。

### 表达式

```ts
const input = getUserInput()
input // string | number
const inputLength =
  (typeof input === "string" && input.length)
  || input
   // input: string
```

在进行布尔运算时，缩窄也发生在与代码相同的行上

### 可识别联合

```ts
type Responses =
  | { status: 200, data: any }
  | { status: 301, to: string }
  | { status: 400, error: Error }
```

#### 用法

```ts
const response = getResponse()
response // Responses
switch(response.status) {
  case 200: return response.data
  case 301: return redirect(response.to)
  case 400: return response.error
}
```

### 断言函数
<!--rehype:wrap-class=col-span-2-->

描述影响当前范围的 CFA 更改的函数，因为它抛出而不是返回 false。

```ts
function assertResponse(obj: any): asserts obj is SuccessResponse {
  if (!(obj instanceof SuccessResponse)) {
    throw new Error('Not a success!')
  }
}
```

#### 用法

```ts
const res = getResponse():
res // SuccessResponse | ErrorResponse

// 断言函数改变当前作用域或抛出
assertResponse(res)

res // SuccessResponse
```

### in 操作符

```ts
interface A {
  x: number;
}
interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}
```

操作符可以安全的检查一个对象上是否存在一个属性，它通常也被作为类型保护使用

Class
----

### 创建类实例

```ts
class ABC { ... }
const abc = new ABC()
```

新 ABC 的参数来自构造函数。

#### private x 与 #private

前缀 private 是一个仅类型的添加，在运行时没有任何影响。 在以下情况下，类之外的代码可以进入项目：

```ts
class Bag {
  private item: any
}
```

Vs #private 是运行时私有的，并且在 JavaScript 引擎内部强制执行，它只能在类内部访问：

```ts
class Bag { #item: any }
```

#### Class 上的 “this”

函数内部‘this’的值取决于函数的调用方式。 不能保证始终是您可能在其他语言中使用的类实例。

您可以使用“此参数”、使用绑定功能或箭头功能来解决问题。

#### 类型和值

一个类既可以用作类型也可以用作值。

```ts
const a:Bag = new Bag()
```

所以，小心不要这样做：

```ts
class C implements Bag {}
```

### 通用语法
<!--rehype:wrap-class=col-span-2-->

```ts
// 确保类符合一组接口或类型  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈▶┈┈╮
// 子类这个类 ┈┈┈┈┈┈┈┈↘                 ┈┈┈┈┈┈┈┈┈┈┈┈┈┴┈┈┈┈┈┈┈
class User extends Account implements Updatable, Serializable {
  id: string;                     // 一个字段
  displayName?: boolean;          // 可选字段
  name!: string;                  // '相信我，它在哪里'字段
  #attributes: Map<any, any>;     // 私人字段
  roles = ["user"];               // 具有默认值的字段
  readonly createdAt = new Date() // 具有默认值的只读字段
  // 👇 代码调用“new”
  constructor(id: string, email: string) {
    super(id);
    // 👇 在 `strict: true` 中，会根据字段检查此代码以确保其设置正确
    this.email = email;
    // ....
  };
  // 👇 描述类方法（和箭头函数字段）的方式
  setName(name: string) { this.name = name }
  verifyName = (name: string) => { /* ... */ }

  // 👇 具有 2 个重载定义的函数
  sync(): Promise<{ ... }>
  sync(cb: ((result: string) => void)): void
  sync(cb?: ((result: string) => void)): void | Promise<{ ... }> {}
  // 👇 Getters 和 setters
  get accountID() { }
  set accountID(value: string) { }
  // 👇 私有访问只是对这个类，受保护的允许子类。 仅用于类型检查，public 是默认值。
  private makeRequest() { ... }
  protected handleRequest() { ... }
  // 👇 静态字段/方法
  static #userCount = 0;
  static registerUser(user: User) { ... }
  // 👇 用于设置静态变量的静态块。 ‘this’指的是静态类
  static { this.#userCount = -1 }
}
```

### 泛型

声明一个可以在你的类方法中改变的类型。

```ts
class Box<Type> {
  contents: Type
  constructor(value: Type) {
    this.contents = value;
  }
}
const stringBox = new Box("a package")
```

这些功能是 TypeScript 特定的语言扩展，可能永远无法使用当前语法进入 JavaScript。

### 参数属性

```ts
class Location {
  constructor(
    public x: number,
    public y: number
  ) {}
}
const loc = new Location(20, 40);

loc.x // 20
loc.y // 40
```

TypeScript 特定于类的扩展，可自动将实例字段设置为输入参数。

### 抽象类

```ts
abstract class Animal {
  abstract getName(): string;
  printName() {
   console.log("Hello, " + this.getName());
  }
}
class Dog extends Animal {
  getName(): { ... }
}
```

一个类可以被声明为不可实现，但可以在类型系统中被子类化。 class 成员也可以。

### 装饰器和属性

```ts
import {
  Syncable, triggersSync, preferCache,
  required
} from "mylib"

@Syncable
class User {
  @triggersSync()
  save() { ... }
  @preferCache(false)
  get displayName() { ... }
  update(@required info: Partial<User>) {
    //...
  }
}
```

您可以在类、类方法、访问器、属性和方法参数上使用装饰器。

### 索引签名

```ts
class MyClass {
  // 最好将索引数据存储在另一个地方
  // 而不是类实例本身。
  [s: string]:
    boolean | ((s: string) => boolean);

  check(s: string) {
    return this[s] as boolean;
  }
}
```

类可以声明索引签名，与其他对象类型的索引签名相同。

### 在 forwardRef 上面声明泛型

```ts
export const Wrapper = forwardRef(
  <T extends object>
(
  props: RootNodeProps<T>,
  ref: React.LegacyRef<HTMLDivElement>
) => {
  return (
    <div ref={ref}></div>
  );
}
```

实用程序类型
----

### Awaited\<Type>

```ts
type A = Awaited<Promise<string>>;
// type A = string

type B = Awaited<Promise<Promise<number>>>;
// type B = number

type C = Awaited<boolean|Promise<number>>;
// type C = number | boolean
```

这种类型旨在模拟异步函数中的 await 或 Promises 上的 .then() 方法等操作 - 特别是它们递归解包 Promises 的方式。

### Required\<Type>

```ts
interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 }; 
const obj2: Required<Props> = { a: 5 };
// ❌ 类型“{ a: number;”中缺少属性“b” }' 
// 但在 'Required<Props>' 类型中是必需的。
```

使 Type 中的所有属性成为必需

### Readonly\<Type>

```ts
interface Todo {
  title: string;
}
const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};
todo.title = "Hello";
// ❌ 无法分配给“title”，因为它是只读属性。

function freeze<Type>(obj: Type)
            : Readonly<Type>;
```

将 Type 中的所有属性设为**只读**

### Partial\<Type>

```ts
interface Todo {
  title: string;
  description: string;
}
function updateTodo(
  todo: Todo,
  fieldsToUpdate: Partial<Todo>
) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

将 `Type` 中的所有属性设为可选

### Record\<Keys, Type>

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris";
const cats: Record<CatName, CatInfo> = {
  miffy: {age:10, breed: "Persian" },
  boris: {age:5, breed: "Maine Coon" },
};

cats.boris; 
// 👉 const cats: Record<CatName, CatInfo>
```

构造一个具有一组 Keys 类型的属性 Type 的类型

### Pick\<Type, Keys>

```ts
interface Todo {
  name: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<
  Todo, "name" | "load"
>;
const todo: TodoPreview = {
  name: "Clean room",
  load: false,
};

todo;
 // 👉 const todo: TodoPreview
```

从 Type 中**选择**一组其键在并集 Keys 中的属性

### Exclude\<UnionType, ExcludedMembers>

```ts
type T0 = Exclude<"a" | "b" | "c", "a">;
// 👉 type T0 = "b" | "c"

type T1 = Exclude<"a"|"b"|"c", "a" | "b">;
// 👉 type T1 = "c"

type T2 = Exclude<string | number |
    (() => void), Function>;
// 👉 type T2 = string | number
```

从 `UnionType` 中**排除**那些可分配给 `ExcludedMembers` 的类型

### Extract\<Type, Union>

```ts
type T0 = Extract<
  "a" | "b" | "c", "a" | "f"
>;
// type T0 = "a"
type T1 = Extract<
  string | number | (() => void),
  Function
>;
// type T1 = () => void
```

通过从 Type 中**提取**所有可分配给 Union 的联合成员来构造一个类型。

### NonNullable\<Type>

```ts
type T0 = NonNullable<
  string | number | undefined
>;
// type T0 = string | number

type T1 = NonNullable<
  string[] | null | undefined
>;
// type T1 = string[]
```

通过从 Type 中**排除** null 和 undefined 来构造一个类型。

### Omit\<Type, Keys>

```ts
interface Todo {
  name: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "name">;

const todo: TodoPreview = {
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 // 👉 const todo: TodoPreview
```

构造一个具有 Type 属性的类型，但类型 Keys 中的属性**除外**。

### Parameters\<Type>

```ts
declare function f1(
  arg: { a: number; b: string }
): void;

type T0 = Parameters<() => string>;
// type T0 = []
type T1 = Parameters<(s: string) => void>;
// type T1 = [s: string]
type T2 = Parameters<<T>(arg: T) => T>;
// type T2 = [arg: unknown]
type T3 = Parameters<typeof f1>;
// type T3 = [arg: {
//     a: number;
//     b: string;
// }]
type T4 = Parameters<any>;
// type T4 = unknown[]
type T5 = Parameters<never>;
// type T5 = never
```

从函数类型 Type 的**参数中**使用的类型构造元组类型。

### ConstructorParameters\<Type>

```ts
type T0 = ConstructorParameters<
  ErrorConstructor
>;
// type T0 = [message?: string]
type T1 = ConstructorParameters<
  FunctionConstructor
>;
// type T1 = string[]
type T2 = ConstructorParameters<
  RegExpConstructor
>;
// type T2 = [
//    pattern: string | RegExp,
//    flags?: string
// ]
type T3 = ConstructorParameters<any>;
// type T3 = unknown[]
```

从构造函数类型的类型构造元组或数组类型。它产生一个包含所有参数类型的元组类型（如果 Type 不是函数，则类型 never ）。

### 内在字符串操作类型

#### Uppercase\<StringType>

```ts
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
// type ShoutyGreeting = "HELLO, WORLD"

type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
// type MainID = "ID-MY_APP"
```

将字符串中的每个字符**转换为大写**版本。

#### Lowercase\<StringType>

```ts
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
// type QuietGreeting = "hello, world"

type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
// type MainID = "id-my_app"
```

将字符串中的每个字符转换为等效的**小写字母**。

#### Capitalize\<StringType>

```ts
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
// type Greeting = "Hello, world"
```

将字符串中的第一个字符转换为等效的**大写字母**。

#### Uncapitalize\<StringType>

```ts
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
// type UncomfortableGreeting = "hELLO WORLD"
```

将字符串中的第一个字符转换为等效的**小写字母**。

### ReturnType\<Type>

```ts
declare function f1(): {
  a: number; b: string
};

type T0 = ReturnType<() => string>;
// type T0 = string

type T1 = ReturnType<(s: string) => void>;
// type T1 = void

type T2 = ReturnType<<T>() => T>;
// type T2 = unknown

type T3 = ReturnType<<
  T extends U, U extends number[]
>() => T>;
// type T3 = number[]

type T4 = ReturnType<typeof f1>;
// type T4 = {
//     a: number;
//     b: string;
// }

type T5 = ReturnType<any>;
// type T5 = any

type T6 = ReturnType<never>;
// type T6 = never
```

构造一个由函数 Type 的**返回类型**组成的类型。

### ThisType\<Type>

```ts
type ObjectDescriptor<D, M> = {
  data?: D;
  // 方法中“this”的类型是 D & M
  methods?: M & ThisType<D & M>;
};
 
function makeObject<D, M>(
  desc: ObjectDescriptor<D, M>
): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}
 
let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});
 
obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

此实用程序不返回转换后的类型。 相反，它用作上下文 this 类型的标记。 请注意，必须启用 [noImplicitThis](https://www.typescriptlang.org/tsconfig#noImplicitThis) 标志才能使用此实用程序。

### InstanceType\<Type>

```ts
class C {
  x = 0;
  y = 0;
}
type T0 = InstanceType<typeof C>;
// type T0 = C
type T1 = InstanceType<any>;
// type T1 = any
type T2 = InstanceType<never>;
// type T2 = never
```

构造一个由 Type 中构造函数的实例类型组成的类型。

### ThisParameterType\<Type>

```ts
function toHex(this: Number) {
  return this.toString(16);
}
 
function numberToString(
  n: ThisParameterType<typeof toHex>
) {
  return toHex.apply(n);
}
```

提取函数类型的 `this` 参数的类型，如果函数类型没有 `this` 参数，则为未知。

### OmitThisParameter\<Type>

```ts
function toHex(this: Number) {
  return this.toString(16);
}
const fiveToHex
  : OmitThisParameter<typeof toHex>
  = toHex.bind(5);

console.log(fiveToHex());
```

从 Type 中移除 this 参数。 如果 Type 没有显式声明此参数，则结果只是 Type。 否则，从 Type 创建一个不带此参数的新函数类型。 泛型被删除，只有最后一个重载签名被传播到新的函数类型中。

JSX
----

### JSX 介绍

JSX 规范是对 ECMAScript 的类似 XML 的语法扩展。

- 使用 `.tsx` 扩展名命名您的文件
- 启用 `jsx` 选项
- 不允许在 `.tsx` 文件中使用尖括号类型断言。
- [JSX 规范](https://facebook.github.io/jsx/)

### as 运算符

```ts
const foo = <foo>bar;
// ❌ 不允许在 .tsx 👆 文件中使用尖括号类型断言。

const foo = bar as foo;
```

`as` 运算符在 `.ts` 和 `.tsx` 文件中都可用，并且在行为上与**尖括号**类型断言样式相同。

### 基于值的元素

```tsx
import MyComponent from "./myComponent";

<MyComponent />; // ok
<SomeOtherComponent />; // ❌ error
```

基于值的元素只是由范围内的标识符查找。

### 内在的元素

```tsx
declare namespace JSX {
  interface IntrinsicElements {
    foo: any;
  }
}
<foo />; // ok
<bar />; // error
```

\<bar /> 没有在 JSX.IntrinsicElements 上指定。

```tsx
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
```

### 函数组件
<!--rehype:wrap-class=col-span-2-->

```tsx
interface FooProp {
  name: string;
  X: number;
  Y: number;
}
declare function AnotherComponent(prop: { name: string });
function ComponentFoo(prop: FooProp) {
  return <AnotherComponent name={prop.name} />;
}

const Button = (prop: { value: string }, context: { color: string }) => (
  <button />
);
```

该组件被定义为一个 JavaScript 函数，其第一个参数是一个 props 对象。 TS 强制它的返回类型必须可分配给 JSX.Element。

### 函数组件重载

```tsx
interface CeProps {
  children: JSX.Element[] | JSX.Element;
}
 
interface HomeProps extends CeProps {
  home: JSX.Element;
}
 
interface SideProps extends CeProps {
  side: JSX.Element | string;
}
 
function Dog(prop:HomeProps): JSX.Element;
function Dog(prop:SideProps): JSX.Element;
function Dog(prop:CeProps): JSX.Element {
  // ...
}
```

### 函数子组件
<!--rehype:wrap-class=col-span-2-->

```tsx
interface MenuProps extends React.LiHTMLAttributes<HTMLUListElement> { ... };
const InternalMenu = React.forwardRef<HTMLUListElement, MenuProps>((props, ref) => (
  <ul {...props} ref={ref} />
));

type MenuComponent = typeof InternalMenu & {
  Item: typeof MenuItem;    // MenuItem 函数组件
  SubMenu: typeof SubMenu;  // SubMenu 函数组件
};

const Menu: MenuComponent = InternalMenu as unknown as MenuComponent;

Menu.Item = MenuItem;
Menu.SubMenu = SubMenu;

<Menu.Item />     // ✅ ok
<Menu.SubMenu />  // ✅ ok
```

### 有效组件
<!--rehype:wrap-class=row-span-2-->

```tsx
declare namespace JSX {
  interface ElementClass {
    render: any;
  }
}
class MyComponent {
  render() {}
}
function MyFactoryFunction() {
  return { render: () => {} };
}
<MyComponent />;       // ✅ 有效类组件
<MyFactoryFunction />; // ✅ 有效函数组件
```

元素实例类型必须可以分配给 `JSX.ElementClass`，否则将导致错误。

```tsx
class NotAValidComponent {}
function NotAValidFactoryFunction() {
  return {};
}
<NotAValidComponent />; // ❌ error
<NotAValidFactoryFunction />; // ❌ error
```

默认情况下，`JSX.ElementClass` 是 {}，但可以对其进行扩展，以将 `JSX` 的使用限制为仅限于符合适当接口的类型。

### 类组件
<!--rehype:wrap-class=col-span-2-->

```ts
type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
};

class MyComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.header}
        {this.props.body}
      </div>
    );
  }
}

<MyComponent header={<h1>Header</h1>} body={<i>body</i>} />
```

### 泛型组件
<!--rehype:wrap-class=col-span-2-->

```tsx
// 一个泛型组件
type SelectProps<T> = { items: T[] };
class Select<T> extends React.Component<SelectProps<T>, any> {}

// 使用
const Form = () => <Select<string> items={['a', 'b']} />;
```

### 函数组件 ref
<!--rehype:wrap-class=col-span-3-->

```tsx
import { FC, ForwardedRef, forwardRef, PropsWithRef } from "react";

function InternalProgress(props: ProgressProps, ref?: ForwardedRef<HTMLDivElement>) {
  return (
    <div {...props} ref={ref}>
      {props.children}
    </div>
  )
}

export interface ProgressProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const Progress: FC<PropsWithRef<ProgressProps>> = forwardRef<HTMLDivElement>(InternalProgress)
```

### 组件 'as' 属性
<!--rehype:wrap-class=col-span-2-->

```tsx
import React, { ElementType, ComponentPropsWithoutRef } from "react";

export const Link = <T extends ElementType<any> = "a">(
  props: { as?: T; } & ComponentPropsWithoutRef<T>
) => {
  const Comp = props.as || "a";
  return <Comp {...props}></Comp>;
};


<Link as="div">文本</Link>;
```

允许传入自定义 `React` 组件，或 `div`, `a` 标签

### 组件作为 Props 传递

```tsx
type RowProps = {
  element: React.ElementType<{
    className?: string;
  }>;
}
const Row = (props: RowProps) => {
  return (
    <props.element className="h-8 w-8" />
  );
};
 
<Row element={"div"} />;
<Row element={UserIcon} />;
```

各种各样的技巧
---

### 类型推导（infer）
<!--rehype:wrap-class=col-span-2-->

```ts
type Capitalize<T extends string> = T extends `${infer U}${infer V}`
  ? `${Uppercase<U>}${V}`
  : T
type capitalized = Capitalize<"hello world"> // Hello world
```

也可以在 infer 中使用条件约束（`extends`）

```ts
type SomeBigInt = "100" extends `${infer U extends bigint}` ? U : never;
// 100n
```

### keyof 取 interface 的键

```ts
interface Point { x: number; y: number; }
 
// type keys = "x" | "y"
type keys = keyof Point;

type Arrayish = {
    [n: number]: unknown;
};
type A = keyof Arrayish; 
// type A = number
```

### 两个数组合并成一个新类型
<!--rehype:wrap-class=col-span-2 row-span-2-->

```ts
const named = ["aqua", "aquamarine", "azure"] as const;
const hex = ["#00FFFF", "#7FFFD4", "#F0FFFF"] as const;

type Colors = {
  [key in (typeof named)[number]]: (typeof hex)[number];
};
// Colors = {
//   aqua: "#00FFFF" | "#7FFFD4" | "#F0FFFF"; 
//   .... 
// }
```

### 索引签名

```ts
interface NumberOrString {
  [index: string]: string | number;
  length: number;
  name: string;
}
```

### 只读元组类型

```ts
const point = [3, 4] as const
// type 'readonly [3, 4]'
```

### 从数组中提取类型

```ts
type Point = { x: number; y: number; }
type Data = Point[];
// Data 是个数组，提取里面的元素类型
type PointDetail = Data[number];
// type PointDetail = { x: number; y: number; }
```
<!--rehype:className=wrap-text-->

### satisfies
<!--rehype:wrap-class=row-span-3-->

`satisfies` 允许将验证表达式的类型与某种类型匹配，而无需更改该表达式的结果类型。

```ts
type Colors = 'red' | 'green' | 'blue';
type RGB = [
  red: number,
  green: number,
  blue: number
];
type Palette = Record<Colors, string | RGB>

const palette: Palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
};

// 通常的方式会推导出 redComponent 为
// => string | number | undefined
const redComponent = palette.red.at(0);
```

#### 使用 satisfies

```ts
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>

// undefined | number
const redComponent = palette.red.at(0)
```
<!--rehype:className=wrap-text-->

### 范型实例化表达式
<!--rehype:wrap-class=row-span-3-->

不使用的情况下：

```ts
const errorMap: Map<string, Error> 
        = new Map()
// 或者使用 type 定义别名
type ErrorMapType = Map<string, Error>
```

使用泛型实例化表达式：

```ts
const ErrorMap = Map<string, Error>
const errorMap = new ErrorMap()
```

#### 泛型实例化函数

```ts
function makeBox<T>(value: T) {
    return { value };
}
```

---

不使用：

```ts
function makeHammerBox(hammer: Hammer) {
  return makeBox(hammer);
}
// or...
const makeWrenchBox: (wrench: Wrench) 
    => Box<Wrench> = makeBox;
```

使用：

```ts
const makeStringBox = makeBox<string>;
makeStringBox(42);
```

### 识别全局修改模块

```ts
declare global {
  interface String {
    fancyFormat(opts: FancyOption): string;
  }
}
export interface FancyOption {
  fancinessLevel: number;
}
```

### 获取数组元素的类型

```ts
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person = typeof MyArray[number];
// type Person = {
//   name: string;
//   age: number;
// }

type Age = typeof MyArray[number]["age"];
// type Age = number

type Age2 = Person["age"];
// type Age2 = number
```

### 范型推导出列表字面量
<!--rehype:wrap-class=row-span-2-->

```ts
const a = <T extends string>(t: T) => t;
const b = <T extends number>(t: T) => t;
const c = <T extends boolean>(t: T) => t;
const d = a("a");  // const d: 'a'
const e = b(1);    // const d: 1
const f = c(true); // const d: true
```

这里t的类型用了一个展开运算

```ts
const g = 
      <T extends string[]>(t: [...T]) => t;
```

类型变成["111", "222"]了

```ts
const h = g(["111", "222"]);
```

### Object.keys 类型声明
<!--rehype:wrap-class=col-span-2-->

```ts
const keys = Object.keys(options) as (keyof typeof options)[];

keys.forEach(key => {
  if (options[key] == null) {
    throw new Error(`Missing option ${key}`);
  }
});
```

### 保留一段时间字符串常量类型
<!--rehype:wrap-class=col-span-2-->

```ts
type Color = "primary" | "secondary" | string;
```

修改成下面代码，有代码下拉提示

```ts
type Color = "primary" | "secondary" | (string & {});
```

.d.ts 模版
---

### Module: Plugin

例如，当您想使用扩展另一个库的 JavaScript 代码时

```ts
import { greeter } from "super-greeter";
// 普通欢迎 API
greeter(2);
greeter("Hello world");
// 现在我们在运行时用一个新函数扩展对象
import "hyper-super-greeter";
greeter.hyperGreet();
```

"`super-greeter`" 的定义：

```ts
/* 此示例说明如何为您的函数设置多个重载 */
export interface GreeterFunction {
  (name: string): void
  (time: number): void
}
/* 此示例显示如何导出接口指定的函数 */
export const greeter: GreeterFunction;
```

我们可以像下面这样扩展现有模块：

```ts
/* 导入这个模块添加到的模块 */
import { greeter } from "super-greeter";
/* 声明与上面导入的模块相同的模块，然后我们扩展 greeter 函数的现有声明 */
export module "super-greeter" {
  export interface GreeterFunction {
    /** Greets even better! */
    hyperGreet(): void;
  }
}
```
<!--rehype:className=wrap-text-->

### 全局库模板 Global .d.ts
<!--rehype:wrap-class=row-span-2-->

全局库可能如下所示：

```ts
function createGreeting(s) {
  return "Hello, " + s;
}
```

或者像这样：

```ts
window.createGreeting = function (s) {
  return "Hello, " + s;
};
```

<pur>类型声明示例</pur>

```ts
/* 可以作为 myLib(3) 此处包含这些调用签名 */
declare function myLib(a: string): string;
declare function myLib(a: number): number;
/* 如果你希望这个库的名称是一个有效的类型名称，你可以在这里这样做例如，这允许我们写 'var x: myLib'; 确保这确实有意义！ 如果没有，只需删除此声明并在下面的命名空间内添加类型 */
interface myLib {
  name: string;
  length: number;
  extras?: string[];
}
/* 如果您的库在全局变量上公开了属性，请将它们放在此处。 您还应该在此处放置类型（接口和类型别名） */
declare namespace myLib {
  // 我们可以写 'myLib.timeout = 50;'
  let timeout: number;
  // 我们可以访问 'myLib.version'，但不能更改它
  const version: string;
  // 我们可以通过 'let c = new myLib.Cat(42)' 创建一些类或参考例如 '函数 f(c: myLib.Cat) { ... }
  class Cat {
    constructor(n: number);
    // 我们可以从 'Cat' 实例中读取 'c.age' 
    readonly age: number;
    // 我们可以从 'Cat' 实例调用 'c.purr()' 
    purr(): void;
  }
  // 我们可以将变量声明为
  //    'var s: myLib.CatSettings = { weight: 5, name: "Maru" };'
  interface CatSettings {
    weight: number;
    name: string;
    tailLength?: number;
  }
  // 我们可以写 'const v: myLib.VetID = 42;'
  //   或 'const v: myLib.VetID = "bob";'
  type VetID = string | number;
  // 我们可以调用 'myLib.checkCat(c)' 或 'myLib.checkCat(c, v);'
  function checkCat(c: Cat, s?: VetID);
}
```
<!--rehype:className=wrap-text-->

### Module: Function
<!--rehype:wrap-class=row-span-2-->

```ts
import greeter from "super-greeter";
greeter(2);
greeter("Hello world");
```

要处理通过 `UMD` 和模块导入：

```ts
/* 如果此模块是一个 UMD 模块，在模块加载器环境之外加载时公开全局变量“myFuncLib”，请在此处声明该全局变量。 否则，删除此声明 */
export as namespace myFuncLib;
/* 此声明指定该函数是从文件中导出的对象 */
export = Greeter;
/* 此示例说明如何为您的函数设置多个重载 */
declare function Greeter(name: string): Greeter.NamedReturnType;
declare function Greeter(length: number): Greeter.LengthReturnType;
```
<!--rehype:className=wrap-text-->

如果你也想从你的模块中公开类型，你可以把它们放在这个块中。 通常你会想要描述函数返回类型的形状； 如本例所示，应在此处声明该类型，请注意，如果您决定包含此命名空间，则模块可能会被错误地导入为命名空间对象，除非 `--esModuleInterop` 已打开： `import * as x from '[~THE MODULE~]';` 错误的！不要这样做!

```ts
declare namespace Greeter {
  export interface LengthReturnType {
    width: number;
    height: number;
  }
  export interface NamedReturnType {
    firstName: string;
    lastName: string;
  }
  /**
   * 如果模块也有属性，在这里声明它们。 例如，这个声明说这个代码是合法的：
   *  import f = require('super-greeter');
   *  console.log(f.defaultName);
   */
  export const defaultName: string;
  export let defaultLength: number;
}
```
<!--rehype:className=wrap-text-->

### Module: Class

例如，当您想要使用如下所示的 `JavaScript` 代码时：

```ts
const Greeter = require("super-greeter");
const greeter = new Greeter();
greeter.greet();
```

要处理通过 `UMD` 和模块导入：

```ts
export as namespace "super-greeter";
/* 此声明指定类构造函数是从文件中导出的对象 */
export = Greeter;
/* 在此类中编写模块的方法和属性 */
declare class Greeter {
  constructor(customGreeting?: string);
  greet: void;
  myMethod(opts: MyClass.MyClassMethodOptions): number;
}
```
<!--rehype:className=wrap-text-->

如果你也想从你的模块中公开类型，你可以把它们放在这个块中，如果您决定包含此命名空间，则模块可能会被错误地导入为命名空间对象，除非 --esModuleInterop 已打开：
 `import * as x from '[~THE MODULE~]';` 错误的！ 不要这样做！

```ts
declare namespace MyClass {
  export interface MyClassMethodOptions {
    width?: number;
    height?: number;
  }
}
```
<!--rehype:className=wrap-text-->

JSDoc 参考
---

### @type
<!--rehype:wrap-class=row-span-2-->

```javascript
/** @type {string} */
var s;
/** @type {Window} */
var win;
/** @type {PromiseLike<string>} */
var promisedString;
// 您可以指定具有 DOM 属性的 HTML 元素
/** @type {HTMLElement} */
var elm = document.querySelector(selector);
elm.dataset.myData = "";
/** @type {number[]} */
var ns;
/** @type {Array.<number>} */
var jsdoc;
/** @type {Array<number>} */
var nas;
/** @type {string | boolean} */
var sb;
/** @type {{ a: string, b: number }} */
var var9;
/**
 * 将任意“字符串”属性映射到“数字”的类地图对象
 * @type {Object.<string, number>}
 */
var stringToNumber;
/** @type {Object.<number, object>} */
var arrayLike;
/** @type {function(string, boolean): number} Closure syntax */
var sbn;
/** @type {(s: string, b: boolean) => number} TypeScript syntax */
var sbn2;
/** @type {Function} */
var fn7;
/** @type {function} */
var fn6;
/**
 * @type {*} - can be 'any' type
 */
var star;
/**
 * @type {?} - unknown type (same as 'any')
 */
var question;
/** @type {number | string} */
var numberOrString = Math.random() < 0.5 ? "hello" : 100;
var typeAssertedNumber = /** @type {number} */ (numberOrString);
let one = /** @type {const} */(1);
```

### 导入类型

```javascript
// @filename: types.d.ts
export type Pet = {
  name: string,
};
// @filename: main.js
/** @param { import("./types").Pet } p */
function walk(p) {
  console.log(`Walking ${p.name}...`);
}
```

导入类型可以在类型别名声明中使用

```javascript
/**
 * @typedef {import("./types").Pet} Pet
 */
/** @type {Pet} */
var myPet;
myPet.name;
```

如果您不知道类型，或者如果它有一个很烦人的大类型，`import types` 可以用来从模块中获取值的类型：

```javascript
/**
 * @type {typeof import("./accounts").userAccount}
 */
var x = require("./accounts").userAccount;
```

### @param 和 @returns

```javascript
/**
 * @param {string}  p1 - 一个字符串参数
 * @param {string=} p2 - 可选参数（Google Closure 语法）
 * @param {string} [p3] - 另一个可选参数（JSDoc 语法）
 * @param {string} [p4="test"] - 具有默认值的可选参数
 * @returns {string} 这是结果
 */
function stringsStrings(p1, p2, p3, p4) {
  // TODO
}
```

同样，对于函数的返回类型：

```javascript
/**
 * @return {PromiseLike<string>}
 */
function ps() {}
 
/**
 * @returns {{ a: string, b: number }} - 可以使用“@returns”和“@return”
 */
function ab() {}
```

### @typedef, @callback, 和 @param
<!--rehype:wrap-class=col-span-2 row-span-2-->

```javascript
/**
 * @typedef {Object} SpecialType - 创建一个名为“SpecialType”的新类型
 * @property {string} prop1 - SpecialType 的字符串属性
 * @property {number} prop2 - SpecialType 的数字属性
 * @property {number=} prop3 - SpecialType 的可选数字属性
 * @prop {number} [prop4] - SpecialType 的可选数字属性
 * @prop {number} [prop5=42] - 具有默认值的 SpecialType 的可选数字属性
 */
 
/** @type {SpecialType} */
var specialTypeObject;
specialTypeObject.prop3;
```

您可以在第一行使用 object 或 Object

```javascript
/**
 * @typedef {object} SpecialType1 - 创建一个名为“SpecialType”的新类型
 * @property {string} prop1 - SpecialType 的字符串属性
 * @property {number} prop2 - SpecialType 的数字属性
 * @property {number=} prop3 - SpecialType 的可选数字属性
 */
 
/** @type {SpecialType1} */
var specialTypeObject1;
```

**@param** 允许对一次性类型规范使用类似的语法。 请注意，嵌套的属性名称必须以参数名称为前缀：

```javascript
/**
 * @param {Object} options - 形状和上面的SpecialType一样
 * @param {string} options.prop1
 * @param {number} options.prop2
 * @param {number=} options.prop3
 * @param {number} [options.prop4]
 * @param {number} [options.prop5=42]
 */
function special(options) {
  return (options.prop4 || 1001) + options.prop5;
}
```

**@callback** 类似于 **@typedef**，但它指定的是函数类型而不是对象类型：

```javascript
/**
 * @callback Predicate
 * @param {string} data
 * @param {number} [index]
 * @returns {boolean}
 */
 
/** @type {Predicate} */
const ok = (s) => !(s.length % 2);
```

当然，这些类型中的任何一种都可以在单行 **@typedef** 中使用 TypeScript 语法声明：

```javascript
/** @typedef {{ prop1: string, prop2: string, prop3?: number }} SpecialType */
/** @typedef {(data: string, index?: number) => boolean} Predicate */
```

### @template

您可以使用 **@template** 标记声明类型参数。 这使您可以创建通用的函数、类或类型：

```javascript
/**
 * @template T
 * @param {T} x - 流向返回类型的通用参数
 * @returns {T}
 */
function id(x) {
  return x;
}
 
const a = id("string");
const b = id(123);
const c = id({});
```

使用逗号或多个标签来声明多个类型参数：

```javascript
/**
 * @template T,U,V
 * @template W,X
 */
```

您还可以在类型参数名称之前指定类型约束。 只有列表中的第一个类型参数受到约束：

```javascript
/**
 * @template {string} K - K 必须是字符串或字符串文字
 * @template {{ serious(): string }} Seriousalizable - 一定要有 serious 的方法
 * @param {K} key
 * @param {Seriousalizable} object
 */
function seriousalize(key, object) {
  // ????
}
```

最后，您可以为类型参数指定默认值：

```javascript
/** @template [T=object] */
class Cache {
  /** @param {T} initial */
  constructor(T) {
  }
}
let c = new Cache()
```

CLI
---

### 使用 CLI

```bash
# 基于向后查看 tsconfig.json 的 fs 运行编译
$ tsc
# 使用编译器默认值仅为 index.ts 发射 JS
$ tsc index.ts
# 使用默认设置为文件夹 src 中的任何 .ts 文件发出 JS
$ tsc src/*.ts
# 使用 tsconfig.production.json 中的编译器设置发出引用的文件
$ tsc --project tsconfig.production.json
# 为 js 文件发出 d.ts 文件，显示布尔值的编译器选项
$ tsc index.js --declaration --emitDeclarationOnly
# 通过采用字符串参数的编译器选项从两个文件发出单个 .js 文件
$ tsc app.ts util.ts --target esnext --outfile index.js
```
<!--rehype:className=wrap-text-->

### 编译器选项
<!--rehype:wrap-class=col-span-2-->

:- | --
:- | --
`--all` _boolean_ | 显示所有编译器选项
`--generateTrace` _string_ | 生成事件跟踪和类型列表
`--help` _boolean_ | 提供有关 CLI 帮助的本地信息
`--init` _boolean_ | 初始化 TypeScript 项目并创建 tsconfig.json 文件
`--listFilesOnly` _boolean_ | 打印作为编译一部分的文件名，然后停止处理
`--locale` _string_ | 设置来自 TypeScript 的消息传递语言。 这不影响发射
`--project` _string_ | 编译项目给定其配置文件的路径，或带有 'tsconfig.json' 的文件夹
`--showConfig` _boolean_ | 打印最终配置而不是构建
`--version` _boolean_ | 打印编译器的版本
<!--rehype:className=left-align-->

### 构建选项

:- | --
:- | --
`--build` _boolean_ | 构建一个或多个项目及其依赖项（如果已过期）
`--clean` _boolean_ | 删除所有项目的输出
`--dry` _boolean_ | 显示将构建的内容（或删除，如果使用“--clean”指定）
`--force` _boolean_ | 构建所有项目，包括那些看起来是最新的项目
`--verbose` _boolean_ | 启用详细日志记录
<!--rehype:className=style-list-->

### 监听选项
<!--rehype:wrap-class=col-span-2-->

:- | --
:- | --
`--excludeDirectories` _list_ | 从监视进程中删除目录列表
`--excludeFiles` _list_ | 从监视模式的处理中删除文件列表
`--fallbackPolling` _fixedinterval_, _priorityinterval_, _dynamicpriority_, _fixedchunksize_ | 指定当系统用完本机文件观察器时观察器应使用的方法
`--synchronousWatchDirectory` _boolean_ | 在本机不支持递归监视的平台上同步调用回调并更新目录监视程序的状态
`--watch` _boolean_ | 观看输入文件
`--watchDirectory` _usefsevents_, _fixedpollinginterval_, _dynamicprioritypolling_, _fixedchunksizepolling | 指定在缺少递归文件监视功能的系统上如何监视目录
`--watchFile` _fixedpollinginterval_, _prioritypollinginterval_, _dynamicprioritypolling_, _fixedchunksizepolling_, _usefsevents_, _usefseventsonparentdirectory_ | 指定 TypeScript 监视模式的工作方式
<!--rehype:className=style-list-->

TSConfig Ref
---

### 可完成 90% 的任务
<!--rehype:wrap-class=row-span-2-->

```js
"compilerOptions": {
  /* 基本选项: */
  "esModuleInterop": true,
  "skipLibCheck": true,
  "target": "es2022",
  "verbatimModuleSyntax": true,
  "allowJs": true,
  "resolveJsonModule": true,
  "moduleDetection": "force",
  /* 严格 */
  "strict": true,
  "noUncheckedIndexedAccess": true,
  /* 如果使用 TypeScript 进行转译： */
  "moduleResolution": "NodeNext",
  "module": "NodeNext",
  /* 如果不使用 TypeScript 进行转译: */
  "moduleResolution": "Bundler",
  "module": "ESNext",
  "noEmit": true,
  /* 如果你的代码在 DOM 中运行: */
  "lib": ["es2022", "dom", "dom.iterable"],
  /* 如果你的代码不在 DOM 中运行: */
  "lib": ["es2022"],
  /* 如果你正在构建一个库: */
  "declaration": true,
  /* 如果您正在 monorepo 中构建库: */
  "composite": true,
  "sourceMap": true,
  "declarationMap": true
}
```

### 顶层配置

:- | --
:- | --
`files` [#](https://www.typescriptlang.org/zh/tsconfig#files) | 指定要`包含`在程序中的文件的允许列表
`extends` [#](https://www.typescriptlang.org/zh/tsconfig#extends) | 包含要`继承`的另一个配置文件的路径
`include` [#](https://www.typescriptlang.org/zh/tsconfig#include) | 指定要`包含`在程序中的文件名或模式数组
`exclude` [#](https://www.typescriptlang.org/zh/tsconfig#exclude) | 指定解析包含时应`跳过`的文件名或模式数组
`references` [#](https://www.typescriptlang.org/zh/tsconfig#references) | 项目引用是一种将 TypeScript 程序构造成更小部分的方法
<!--rehype:className=style-list-arrow-->

---

```js
{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

### 类型检查(compilerOptions)
<!--rehype:wrap-class=row-span-3-->

:- | --
:- | --
`allowUnreachableCode` [#](https://www.typescriptlang.org/zh/tsconfig#allowUnreachableCode) | 允许无法访问的代码
`allowUnusedLabels` [#](https://www.typescriptlang.org/zh/tsconfig#allowUnusedLabels) | 允许未使用的标签
`alwaysStrict` [#](https://www.typescriptlang.org/zh/tsconfig#alwaysStrict) | 始终严格
`exactOptionalPropertyTypes` [#](https://www.typescriptlang.org/zh/tsconfig#exactOptionalPropertyTypes) | 启用后，TypeScript 应用更严格的规则来处理它如何处理类型或具有 ? 字首
`noFallthroughCasesInSwitch` [#](https://www.typescriptlang.org/zh/tsconfig#noFallthroughCasesInSwitch) | 在 switch 语句中报告失败案例的错误
`noImplicitAny` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitAny) | 在某些不存在类型注释的情况下，TypeScript 将在无法推断类型时回退到变量的任何类型
`noImplicitOverride` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitOverride) | 当处理使用继承的类时，子类可能与在基类中重命名时重载的函数“不同步”
`noImplicitReturns` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitReturns) | 没有隐式返回
`noImplicitThis` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitThis) | 使用隐含的“any”类型在“this”表达式上引发错误
`noPropertyAccessFromIndexSignature` [#](https://www.typescriptlang.org/zh/tsconfig#noPropertyAccessFromIndexSignature) | 此设置确保通过“点”（obj.key）语法访问字段和“索引”（obj[“key”]）以及在类型中声明属性的方式之间的一致性
`noUncheckedIndexedAccess` [#](https://www.typescriptlang.org/zh/tsconfig#noUncheckedIndexedAccess) | TypeScript 有一种方法可以通过索引签名来描述对象上具有未知键但已知值的对象
`noUnusedLocals` [#](https://www.typescriptlang.org/zh/tsconfig#noUnusedLocals) | 报告未使用的局部变量的错误
`noUnusedParameters` [#](https://www.typescriptlang.org/zh/tsconfig#noUnusedParameters) | 报告函数中未使用参数的错误
`strict` [#](https://www.typescriptlang.org/zh/tsconfig#strict) | 严格标志启用了范围广泛的类型检查行为，从而更有效地保证了程序的正确性
`strictBindCallApply` [#](https://www.typescriptlang.org/zh/tsconfig#strictBindCallApply) | TypeScript 将检查函数调用、绑定和应用的内置方法是否使用底层函数的正确参数调用
`strictFunctionTypes` [#](https://www.typescriptlang.org/zh/tsconfig#strictFunctionTypes) | 此标志会导致更正确地检查函数参数
`strictNullChecks` [#](https://www.typescriptlang.org/zh/tsconfig#strictNullChecks) | 严格的空检查
`strictPropertyInitialization` [#](https://www.typescriptlang.org/zh/tsconfig#strictPropertyInitialization) | 严格的属性初始化
`useUnknownInCatchVariables` [#](https://www.typescriptlang.org/zh/tsconfig#useUnknownInCatchVariables) | 在 TypeScript 4.0 中，添加了支持以允许将 catch 子句中的变量类型从 any 更改为 unknown
<!--rehype:className=style-list-arrow-->

### 模块(compilerOptions)
<!--rehype:wrap-class=row-span-3-->

:- | --
:- | --
`allowUmdGlobalAccess` [#](https://www.typescriptlang.org/zh/tsconfig#allowUmdGlobalAccess) | 为 true 时，将允许你在模块文件中以全局变量的形式访问 UMD 的导出
`baseUrl` [#](https://www.typescriptlang.org/zh/tsconfig#baseUrl) | 可以让您设置解析非绝对路径模块名时的基准目录
`module` [#](https://www.typescriptlang.org/zh/tsconfig#module) | 设置程序的模块系统
`moduleResolution` [#](https://www.typescriptlang.org/zh/tsconfig#moduleResolution) | 指定模块解析策略：'node'（Node.js）或 'classic'
`moduleSuffixes` [#](https://www.typescriptlang.org/zh/tsconfig#moduleSuffixes) | 提供一种在解析模块时覆盖要搜索的默认文件名后缀列表的方法
`noResolve` [#](https://www.typescriptlang.org/zh/tsconfig#noResolve) | 默认情况下，TypeScript 将检查导入和 `<reference` 指令的初始文件集，并将这些解析的文件添加到您的程序中
`paths` [#](https://www.typescriptlang.org/zh/tsconfig#paths) | 一些将模块导入重新映射到相对于 baseUrl 路径的配置
`resolveJsonModule` [#](https://www.typescriptlang.org/zh/tsconfig#resolveJsonModule) | 允许导入带有“.json”扩展名的模块，这是 node 项目中的常见做法
`rootDir` [#](https://www.typescriptlang.org/zh/tsconfig#rootDir) | 默认: 所有输入的非声明文件中的最长公共路径
`rootDirs` [#](https://www.typescriptlang.org/zh/tsconfig#rootDirs) | 通过 rootDirs，你可以告诉编译器有许多“虚拟”的目录作为一个根目录
`typeRoots` [#](https://www.typescriptlang.org/zh/tsconfig#typeRoots) | 默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中
`types` [#](https://www.typescriptlang.org/zh/tsconfig#types) | 默认情况下，所有 可见 的 ”@types” 包都将包含在你的编译过程中
<!--rehype:className=style-list-arrow-->

### Emit(compilerOptions)
<!--rehype:wrap-class=row-span-5-->

:- | --
:- | --
`declaration` [#](https://www.typescriptlang.org/zh/tsconfig#declaration) | 为项目中的每个 TypeScript 或 JavaScript 文件生成 .d.ts 文件
`declarationDir` [#](https://www.typescriptlang.org/zh/tsconfig#declarationDir) | 提供一种配置发出声明文件的根目录的方法
`declarationMap` [#](https://www.typescriptlang.org/zh/tsconfig#declarationMap) | 为映射回原始 .ts 源文件的 .d.ts 文件生成源映射
`downlevelIteration` [#](https://www.typescriptlang.org/zh/tsconfig#downlevelIteration) | 降级是 TypeScript 的术语，用于转译到旧版本的 JavaScript
`emitBOM` [#](https://www.typescriptlang.org/zh/tsconfig#emitBOM) | 控制 TypeScript 在写入输出文件时是否会发出字节顺序标记 (BOM)
`emitDeclarationOnly` [#](https://www.typescriptlang.org/zh/tsconfig#emitDeclarationOnly) | 只发出 .d.ts 文件；不要发出 .js 文件
`importHelpers` [#](https://www.typescriptlang.org/zh/tsconfig#importHelpers) | 对于某些降级操作，TypeScript 使用一些辅助代码来执行扩展类、展开数组或对象以及异步操作等操作
`importsNotUsedAsValues` [#](https://www.typescriptlang.org/zh/tsconfig#importsNotUsedAsValues) | 此标志控制导入的工作方式，有 3 个不同的选项: `remove`, `preserve`, `error`
`inlineSourceMap` [#](https://www.typescriptlang.org/zh/tsconfig#inlineSourceMap) | 设置后，TypeScript 不会写出 .js.map 文件来提供源映射，而是将源映射内容嵌入到 .js 文件中
`inlineSources` [#](https://www.typescriptlang.org/zh/tsconfig#inlineSources) | 设置后，TypeScript 会将 .ts 文件的原始内容作为嵌入字符串包含在源映射中（使用源映射的 sourcesContent 属性）
`mapRoot` [#](https://www.typescriptlang.org/zh/tsconfig#mapRoot) | 指定调试器应该定位映射文件而不是生成位置的位置
`newLine` [#](https://www.typescriptlang.org/zh/tsconfig#newLine) | 指定发出文件时要使用的行尾顺序：“CRLF”（dos）或“LF”（unix）
`noEmit` [#](https://www.typescriptlang.org/zh/tsconfig#noEmit) | 不要发出编译器输出文件，如 JavaScript 源代码、源映射或声明
`noEmitHelpers` [#](https://www.typescriptlang.org/zh/tsconfig#noEmitHelpers) | 您可以在全局范围内为您使用的助手提供实现，并完全关闭助手函数的发出，而不是使用 importHelpers 导入助手
`noEmitOnError` [#](https://www.typescriptlang.org/zh/tsconfig#noEmitOnError) | 如果报告了任何错误，请不要发出编译器输出文件，如 JavaScript 源代码、源映射或声明
`outDir` [#](https://www.typescriptlang.org/zh/tsconfig#outDir) | 如果指定，.js（以及 .d.ts、.js.map 等）文件将被发送到此目录中
`outFile` [#](https://www.typescriptlang.org/zh/tsconfig#outFile) | 如果指定，所有全局（非模块）文件将连接到指定的单个输出文件中
`preserveConstEnums` [#](https://www.typescriptlang.org/zh/tsconfig#preserveConstEnums) | 不要删除生成的代码中的 const enum 声明
`preserveValueImports` [#](https://www.typescriptlang.org/zh/tsconfig#preserveValueImports) | 在某些情况下，TypeScript 无法检测到您正在使用导入
`removeComments` [#](https://www.typescriptlang.org/zh/tsconfig#removeComments) | 转换为 JavaScript 时从 TypeScript 文件中删除所有注释
`sourceMap` [#](https://www.typescriptlang.org/zh/tsconfig#sourceMap) | 启用源映射文件的生成
`sourceRoot` [#](https://www.typescriptlang.org/zh/tsconfig#sourceRoot) | 指定调试器应定位 TypeScript 文件的位置，而不是相对源位置
`stripInternal` [#](https://www.typescriptlang.org/zh/tsconfig#stripInternal) | 不要为在其 JSDoc 注释中具有 @internal 注释的代码发出声明
<!--rehype:className=style-list-arrow-->

### 完整性(compilerOptions)

:- | --
:- | --
`skipDefaultLibCheck` [#](https://www.typescriptlang.org/zh/tsconfig#skipDefaultLibCheck) | 请改用 `skipLibCheck`
`skipLibCheck` [#](https://www.typescriptlang.org/zh/tsconfig#skipLibCheck) | 跳过声明文件的类型检查

### 编辑器支持(compilerOptions)

:- | --
:- | --
`disableSizeLimit` [#](https://www.typescriptlang.org/zh/tsconfig#disableSizeLimit) | 分配的内存量有一个上限。打开此标志将删除限制
`plugins` [#](https://www.typescriptlang.org/zh/tsconfig#plugins) | 可在编辑器内运行的语言服务插件列表
<!--rehype:className=style-list-arrow-->

### 输出格式(compilerOptions)

:- | --
:- | --
`noErrorTruncation` [#](https://www.typescriptlang.org/zh/tsconfig#noErrorTruncation) | 不要截断错误消息
`preserveWatchOutput` [#](https://www.typescriptlang.org/zh/tsconfig#preserveWatchOutput) | 保留监视输出
`pretty` [#](https://www.typescriptlang.org/zh/tsconfig#pretty) | 使用颜色和上下文对错误和消息进行样式化，默认情况下启用
<!--rehype:className=style-list-arrow-->

### JavaScript 支持(compilerOptions)

:- | --
:- | --
`allowJs` [#](https://www.typescriptlang.org/zh/tsconfig#allowJs) | 允许 JavaScript 文件在你的工程中被引入，而不是仅仅允许 .ts 和 .tsx 文件
`checkJs` [#](https://www.typescriptlang.org/zh/tsconfig#checkJs) | 与 allowJs 配合使用，当 checkJs 被启用时，JavaScript 文件中会报告错误
`maxNodeModuleJsDepth` [#](https://www.typescriptlang.org/zh/tsconfig#maxNodeModuleJsDepth) | 在 node_modules 下搜索和加载 JavaScript 文件的最大依赖深度
<!--rehype:className=style-list-arrow-->

### 互操作约束(compilerOptions)

:- | --
:- | --
`allowSyntheticDefaultImports` [#](https://www.typescriptlang.org/zh/tsconfig#allowSyntheticDefaultImports) | 允许合成默认导入
`esModuleInterop` [#](https://www.typescriptlang.org/zh/tsconfig#esModuleInterop) | ES 模块互操作
`forceConsistentCasingInFileNames` [#](https://www.typescriptlang.org/zh/tsconfig#forceConsistentCasingInFileNames) | 在文件名中强制使用一致的大小写
`isolatedModules` [#](https://www.typescriptlang.org/zh/tsconfig#isolatedModules) | 隔离模块
`preserveSymlinks` [#](https://www.typescriptlang.org/zh/tsconfig#preserveSymlinks) | 保留符号链接
<!--rehype:className=style-list-arrow-->

### 编译器诊断(compilerOptions)

:- | --
:- | --
`diagnostics` [#](https://www.typescriptlang.org/zh/tsconfig#diagnostics) | 用于输出调试信息
`explainFiles` [#](https://www.typescriptlang.org/zh/tsconfig#explainFiles) | 打印 TypeScript 视为项目一部分的文件的名称以及它们是编译一部分的原因
`extendedDiagnostics` [#](https://www.typescriptlang.org/zh/tsconfig#extendedDiagnostics) | 您可以使用此标志来发现 TypeScript 在编译时将时间花在哪里
`generateCpuProfile` [#](https://www.typescriptlang.org/zh/tsconfig#generateCpuProfile) | 此选项使您有机会让 TypeScript 在编译器运行期间发出 v8 CPU 配置文件
`listEmittedFiles` [#](https://www.typescriptlang.org/zh/tsconfig#listEmittedFiles) | 将编译过程中生成的文件的名称打印到终端
`listFiles` [#](https://www.typescriptlang.org/zh/tsconfig#listFiles) | 打印编译部分文件的名称
`traceResolution` [#](https://www.typescriptlang.org/zh/tsconfig#traceResolution) | 当您尝试调试未包含模块的原因时
<!--rehype:className=style-list-arrow-->

### 向后兼容性(compilerOptions)

:- | --
:- | --
`charset` [#](https://www.typescriptlang.org/zh/tsconfig#charset) | 在早期版本的 TypeScript 中，这控制了从磁盘读取文本文件时使用的编码
`keyofStringsOnly` [#](https://www.typescriptlang.org/zh/tsconfig#keyofStringsOnly) | 此标志将 `keyof` 类型运算符更改为返回 `string` 而不是 `string | number` 当应用于具有字符串索引签名的类型时
`noImplicitUseStrict` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitUseStrict) | 默认情况下，当向非 ES6 目标发出模块文件时，TypeScript 发出`"use strict"`；文件顶部的序言。此设置禁用序言
`noStrictGenericChecks` [#](https://www.typescriptlang.org/zh/tsconfig#noStrictGenericChecks) | TypeScript 在比较两个泛型函数时会统一类型参数
`out` [#](https://www.typescriptlang.org/zh/tsconfig#out) | 请改用 `outFile`
`suppressExcessPropertyErrors` [#](https://www.typescriptlang.org/zh/tsconfig#suppressExcessPropertyErrors) | 抑制过多的属性错误
`suppressImplicitAnyIndexErrors` [#](https://www.typescriptlang.org/zh/tsconfig#suppressImplicitAnyIndexErrors) | 抑制隐式任何索引错误
<!--rehype:className=style-list-arrow-->

### 语言与环境(compilerOptions)
<!--rehype:wrap-class=row-span-2-->

:- | --
:- | --
`emitDecoratorMetadata` [#](https://www.typescriptlang.org/zh/tsconfig#emitDecoratorMetadata) | 发射装饰器元数据
`experimentalDecorators` [#](https://www.typescriptlang.org/zh/tsconfig#experimentalDecorators) | 实验装饰器
`jsx` [#](https://www.typescriptlang.org/zh/tsconfig#jsx) | 控制 JSX 在 JavaScript 文件中的输出方式
`jsxFactory` [#](https://www.typescriptlang.org/zh/tsconfig#jsxFactory) | 使用经典 JSX 运行时编译 JSX 元素时更改在 .js 文件中调用的函数
`jsxFragmentFactory` [#](https://www.typescriptlang.org/zh/tsconfig#jsxFragmentFactory) | 指定在使用 jsxFactory 编译器选项指定 react JSX emit 时要使用的 JSX 片段工厂函数，例如 `Fragment`
`jsxImportSource` [#](https://www.typescriptlang.org/zh/tsconfig#jsxImportSource) | 声明模块说明符用于在将 jsx 用作 TypeScript 4.1 中引入的“react-jsx”或“react-jsxdev”时导入 jsx 和 jsxs 工厂函数
`lib` [#](https://www.typescriptlang.org/zh/tsconfig#lib) | TypeScript 包括一组默认的内建 JS 接口（例如 Math）的类型定义，以及在浏览器环境中存在的对象的类型定义（例如 document）
`moduleDetection` [#](https://www.typescriptlang.org/zh/tsconfig#moduleDetection) | 模块检测
`noLib` [#](https://www.typescriptlang.org/zh/tsconfig#noLib) | 禁用自动包含任何库文件
`reactNamespace` [#](https://www.typescriptlang.org/zh/tsconfig#reactNamespace) | 请改用 jsxFactory
`target` [#](https://www.typescriptlang.org/zh/tsconfig#target) | 现代浏览器支持全部 ES6 的功能，所以 ES6 是一个不错的选择
`useDefineForClassFields` [#](https://www.typescriptlang.org/zh/tsconfig#useDefineForClassFields) | 为类字段使用定义
<!--rehype:className=style-list-arrow-->

### 项目(compilerOptions)

:- | --
:- | --
`composite` [#](https://www.typescriptlang.org/zh/tsconfig#composite) | composite 选项会强制执行某些约束，使得构建工具（包括 在 --build 模式下的 TypeScript 本身）可以快速确定一个工程是否已经建立
`disableReferencedProjectLoad` [#](https://www.typescriptlang.org/zh/tsconfig#disableReferencedProjectLoad) | 禁用引用项目加载
`disableSolutionSearching` [#](https://www.typescriptlang.org/zh/tsconfig#disableSolutionSearching) | 禁用解决方案搜索
`disableSourceOfProjectReferenceRedirect` [#](https://www.typescriptlang.org/zh/tsconfig#disableSourceOfProjectReferenceRedirect) | 禁用源项目引用重定向
`incremental` [#](https://www.typescriptlang.org/zh/tsconfig#incremental) | 使 TypeScript 将上次编译的工程图信息保存到磁盘上的文件中
`tsBuildInfoFile` [#](https://www.typescriptlang.org/zh/tsconfig#tsBuildInfoFile) | 这个选项可以让您指定一个文件来存储增量编译信息，以作为复合工程的一部分，从而可以更快的构建更大的 TypeScript 代码库
<!--rehype:className=style-list-arrow-->

### 监听选项(watchOptions)

:- | --
:- | --
`watchFile` [#](https://www.typescriptlang.org/zh/tsconfig#watch-watchFile) | 如何监视单个文件的策略
`watchDirectory` [#](https://www.typescriptlang.org/zh/tsconfig#watch-watchDirectory) | 在缺乏递归文件监视功能的系统下监视整个目录树的策略
`fallbackPolling` [#](https://www.typescriptlang.org/zh/tsconfig#watch-fallbackPolling) | 使用文件系统事件时，此选项指定当系统用完本机文件观察器和/或不支持本机文件观察器时使用的轮询策略
`synchronousWatchDirectory` [#](https://www.typescriptlang.org/zh/tsconfig#watch-synchronousWatchDirectory) | 在本机不支持递归监视的平台上同步调用回调并更新目录监视程序的状态
`excludeDirectories` [#](https://www.typescriptlang.org/zh/tsconfig#watch-excludeDirectories) | 您可以使用 excludeFiles 来大幅减少在 --watch 期间监视的文件数量
`excludeFiles` [#](https://www.typescriptlang.org/zh/tsconfig#watch-excludeFiles) | 您可以使用 excludeFiles 从监视的文件中删除一组特定文件
<!--rehype:className=style-list-arrow-->

---

```js
{
  "watchOptions": {
    "synchronousWatchDirectory": true
  }
}
```

### 类型采集(typeAcquisition)

:- | --
:- | --
`enable` [#](https://www.typescriptlang.org/zh/tsconfig#type-enable) | 提供用于在 JavaScript 项目中禁用类型获取的配置
`include` [#](https://www.typescriptlang.org/zh/tsconfig#type-include) | 如果您有一个 JavaScript 项目，其中 TypeScript 需要额外的指导来理解全局依赖关系，或者已通过 disableFilenameBasedTypeAcquisition 禁用了内置推理
`exclude` [#](https://www.typescriptlang.org/zh/tsconfig#type-exclude) | 提供用于禁用 JavaScript 项目中特定模块的类型获取的配置
`disableFilenameBasedTypeAcquisition` [#](https://www.typescriptlang.org/zh/tsconfig#type-disableFilenameBasedTypeAcquisition) | TypeScript 的类型获取可以根据项目中的文件名推断出应该添加哪些类型
<!--rehype:className=style-list-arrow-->

---

```js
{
  "typeAcquisition": {
    "enable": false
  }
}
```

另见
----

- [JavaScript 备忘清单](./javascript.md)
- [TypeScript 官网](https://www.typescriptlang.org/) _(typescriptlang.org)_
