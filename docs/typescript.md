TypeScript 备忘清单
===

包含最重要基础、泛型、方法、class 等 TypeScript 强类型编程语言语法的快速参考备忘单。初学者的完整快速参考。

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
  constructor(public x: number, public y: number) {}
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
class Dog extends Animal { getName(): { ... } }
```

一个类可以被声明为不可实现，但可以在类型系统中被子类化。 class 成员也可以。

### 装饰器和属性
<!--rehype:wrap-class=col-span-2-->

```ts
import { Syncable, triggersSync, preferCache, required } from "mylib"

@Syncable
class User {
  @triggersSync()
  save() { ... }
  @preferCache(false)
  get displayName() { ... }
  update(@required info: Partial<User>) { ... }
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
interface MenuProps extends React.LiHTMLAttributes<HTMLUListElement> { ... }
const InternalMenu = (props: MenuProps, ref?: React.ForwardedRef<HTMLUListElement>) => (
  <ul {...props} ref={ref} />
);
type MenuComponent = React.FC<React.PropsWithRef<MenuProps>> & {
  Item: typeof MenuItem;    // MenuItem 函数组件
  SubMenu: typeof SubMenu;  // SubMenu 函数组件
};
const Menu: MenuComponent = React.forwardRef<HTMLUListElement>(
  InternalMenu
) as unknown as MenuComponent;

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

各种各样的技巧
---

### 类型推导（infer）
<!--rehype:wrap-class=col-span-2-->

```ts
type Capitalize<T extends string> = T extends `${infer U}${infer V}`
  ? `${Uppercase<U>}${V}`
  : T
type capitalized = Capitalize<"hello world"> // Hello World
```

- 也可以在 infer 中使用条件约束（`extends`）

```ts
type SomeBigInt = "100" extends `${infer U extends bigint}` ? U : never;
// 100n
```

### keyof 取 interface 的键

```ts
interface Point {
    x: number;
    y: number;
}
 
// type keys = "x" | "y"
type keys = keyof Point;
```

### 索引签名

```ts
interface NumberOrString {
  [index: string]: string | number;
  length: number;
  name: string;
}
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

### 只读元组类型

```ts
const point = [3, 4] as const
// type 'readonly [3, 4]'
```

TSConfig Ref
---

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
<!--rehype:wrap-class=row-span-2-->

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
<!--rehype:wrap-class=row-span-2-->

:- | --
:- | --
`declaration` [#](https://www.typescriptlang.org/zh/tsconfig#declaration) |
`declarationDir` [#](https://www.typescriptlang.org/zh/tsconfig#declarationDir) |
`declarationMap` [#](https://www.typescriptlang.org/zh/tsconfig#declarationMap) |
`downlevelIteration` [#](https://www.typescriptlang.org/zh/tsconfig#downlevelIteration) |
`emitBOM` [#](https://www.typescriptlang.org/zh/tsconfig#emitBOM) |
`emitDeclarationOnly` [#](https://www.typescriptlang.org/zh/tsconfig#emitDeclarationOnly) |
`importHelpers` [#](https://www.typescriptlang.org/zh/tsconfig#importHelpers) |
`importsNotUsedAsValues` [#](https://www.typescriptlang.org/zh/tsconfig#importsNotUsedAsValues) |
`inlineSourceMap` [#](https://www.typescriptlang.org/zh/tsconfig#inlineSourceMap) |
`inlineSources` [#](https://www.typescriptlang.org/zh/tsconfig#inlineSources) |
`mapRoot` [#](https://www.typescriptlang.org/zh/tsconfig#mapRoot) |
`newLine` [#](https://www.typescriptlang.org/zh/tsconfig#newLine) |
`noEmit` [#](https://www.typescriptlang.org/zh/tsconfig#noEmit) |
`noEmitHelpers` [#](https://www.typescriptlang.org/zh/tsconfig#noEmitHelpers) |
`noEmitOnError` [#](https://www.typescriptlang.org/zh/tsconfig#noEmitOnError) |
`outDir` [#](https://www.typescriptlang.org/zh/tsconfig#outDir) |
`outFile` [#](https://www.typescriptlang.org/zh/tsconfig#outFile) |
`preserveConstEnums` [#](https://www.typescriptlang.org/zh/tsconfig#preserveConstEnums) |
`preserveValueImports` [#](https://www.typescriptlang.org/zh/tsconfig#preserveValueImports) |
`removeComments` [#](https://www.typescriptlang.org/zh/tsconfig#removeComments) |
`sourceMap` [#](https://www.typescriptlang.org/zh/tsconfig#sourceMap) |
`sourceRoot` [#](https://www.typescriptlang.org/zh/tsconfig#sourceRoot) |
`stripInternal` [#](https://www.typescriptlang.org/zh/tsconfig#stripInternal) |

### JavaScript 支持(compilerOptions)

:- | --
:- | --
`allowJs` [#](https://www.typescriptlang.org/zh/tsconfig#allowJs) | 允许 JavaScript 文件在你的工程中被引入，而不是仅仅允许 .ts 和 .tsx 文件
`checkJs` [#](https://www.typescriptlang.org/zh/tsconfig#checkJs) | 与 allowJs 配合使用，当 checkJs 被启用时，JavaScript 文件中会报告错误
`maxNodeModuleJsDepth` [#](https://www.typescriptlang.org/zh/tsconfig#maxNodeModuleJsDepth) | 在 node_modules 下搜索和加载 JavaScript 文件的最大依赖深度
<!--rehype:className=style-list-arrow-->

### 编辑器支持(compilerOptions)

:- | --
:- | --
`disableSizeLimit` [#](https://www.typescriptlang.org/zh/tsconfig#disableSizeLimit) | 分配的内存量有一个上限。打开此标志将删除限制
`plugins` [#](https://www.typescriptlang.org/zh/tsconfig#plugins) | 可在编辑器内运行的语言服务插件列表
<!--rehype:className=style-list-arrow-->

### 互操作约束(compilerOptions)

:- | --
:- | --
`allowSyntheticDefaultImports` [#](https://www.typescriptlang.org/zh/tsconfig#allowSyntheticDefaultImports) |
`esModuleInterop` [#](https://www.typescriptlang.org/zh/tsconfig#esModuleInterop) |
`forceConsistentCasingInFileNames` [#](https://www.typescriptlang.org/zh/tsconfig#forceConsistentCasingInFileNames) |
`isolatedModules` [#](https://www.typescriptlang.org/zh/tsconfig#isolatedModules) |
`preserveSymlinks` [#](https://www.typescriptlang.org/zh/tsconfig#preserveSymlinks) |

### 向后兼容性(compilerOptions)

:- | --
:- | --
`charset` [#](https://www.typescriptlang.org/zh/tsconfig#charset) |
`keyofStringsOnly` [#](https://www.typescriptlang.org/zh/tsconfig#keyofStringsOnly) |
`noImplicitUseStrict` [#](https://www.typescriptlang.org/zh/tsconfig#noImplicitUseStrict) |
`noStrictGenericChecks` [#](https://www.typescriptlang.org/zh/tsconfig#noStrictGenericChecks) |
`out` [#](https://www.typescriptlang.org/zh/tsconfig#out) |
`suppressExcessPropertyErrors` [#](https://www.typescriptlang.org/zh/tsconfig#suppressExcessPropertyErrors) |
`suppressImplicitAnyIndexErrors` [#](https://www.typescriptlang.org/zh/tsconfig#suppressImplicitAnyIndexErrors) |

### 语言与环境(compilerOptions)

:- | --
:- | --
`emitDecoratorMetadata` [#](https://www.typescriptlang.org/zh/tsconfig#emitDecoratorMetadata) |
`experimentalDecorators` [#](https://www.typescriptlang.org/zh/tsconfig#experimentalDecorators) |
`jsx` [#](https://www.typescriptlang.org/zh/tsconfig#jsx) |
`jsxFactory` [#](https://www.typescriptlang.org/zh/tsconfig#jsxFactory) |
`jsxFragmentFactory` [#](https://www.typescriptlang.org/zh/tsconfig#jsxFragmentFactory) |
`jsxImportSource` [#](https://www.typescriptlang.org/zh/tsconfig#jsxImportSource) |
`lib` [#](https://www.typescriptlang.org/zh/tsconfig#lib) |
`moduleDetection` [#](https://www.typescriptlang.org/zh/tsconfig#moduleDetection) |
`noLib` [#](https://www.typescriptlang.org/zh/tsconfig#noLib) |
`reactNamespace` [#](https://www.typescriptlang.org/zh/tsconfig#reactNamespace) |
`target` [#](https://www.typescriptlang.org/zh/tsconfig#target) |
`useDefineForClassFields` [#](https://www.typescriptlang.org/zh/tsconfig#useDefineForClassFields) |

### 编译器诊断(compilerOptions)

:- | --
:- | --
`diagnostics` [#](https://www.typescriptlang.org/zh/tsconfig#diagnostics) |
`explainFiles` [#](https://www.typescriptlang.org/zh/tsconfig#explainFiles) |
`extendedDiagnostics` [#](https://www.typescriptlang.org/zh/tsconfig#extendedDiagnostics) |
`generateCpuProfile` [#](https://www.typescriptlang.org/zh/tsconfig#generateCpuProfile) |
`listEmittedFiles` [#](https://www.typescriptlang.org/zh/tsconfig#listEmittedFiles) |
`listFiles` [#](https://www.typescriptlang.org/zh/tsconfig#listFiles) |
`traceResolution` [#](https://www.typescriptlang.org/zh/tsconfig#traceResolution) |

### 项目(compilerOptions)

:- | --
:- | --
`composite` [#](https://www.typescriptlang.org/zh/tsconfig#composite) |
`disableReferencedProjectLoad` [#](https://www.typescriptlang.org/zh/tsconfig#disableReferencedProjectLoad) |
`disableSolutionSearching` [#](https://www.typescriptlang.org/zh/tsconfig#disableSolutionSearching) |
`disableSourceOfProjectReferenceRedirect` [#](https://www.typescriptlang.org/zh/tsconfig#disableSourceOfProjectReferenceRedirect) |
`incremental` [#](https://www.typescriptlang.org/zh/tsconfig#incremental) |
`tsBuildInfoFile` [#](https://www.typescriptlang.org/zh/tsconfig#tsBuildInfoFile) |

### 输出格式(compilerOptions)

:- | --
:- | --
`noErrorTruncation` [#](https://www.typescriptlang.org/zh/tsconfig#noErrorTruncation) |
`preserveWatchOutput` [#](https://www.typescriptlang.org/zh/tsconfig#preserveWatchOutput) |
`pretty` [#](https://www.typescriptlang.org/zh/tsconfig#pretty) |

### 完整性(compilerOptions)

:- | --
:- | --
`skipDefaultLibCheck` [#](https://www.typescriptlang.org/zh/tsconfig#skipDefaultLibCheck) |
`skipLibCheck` [#](https://www.typescriptlang.org/zh/tsconfig#skipLibCheck) |

### 监听选项(watchOptions)

:- | --
:- | --
`watchFile` [#](https://www.typescriptlang.org/zh/tsconfig#watch-watchFile) |
`watchDirectory` [#](https://www.typescriptlang.org/zh/tsconfig#watch-watchDirectory) |
`fallbackPolling` [#](https://www.typescriptlang.org/zh/tsconfig#watch-fallbackPolling) |
`synchronousWatchDirectory` [#](https://www.typescriptlang.org/zh/tsconfig#watch-synchronousWatchDirectory) |
`excludeDirectories` [#](https://www.typescriptlang.org/zh/tsconfig#watch-excludeDirectories) |
`excludeFiles` [#](https://www.typescriptlang.org/zh/tsconfig#watch-excludeFiles) |

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
`enable` [#](https://www.typescriptlang.org/zh/tsconfig#type-enable) |
`include` [#](https://www.typescriptlang.org/zh/tsconfig#type-include) |
`exclude` [#](https://www.typescriptlang.org/zh/tsconfig#type-exclude) |
`disableFilenameBasedTypeAcquisition` [#](https://www.typescriptlang.org/zh/tsconfig#type-disableFilenameBasedTypeAcquisition) |

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
