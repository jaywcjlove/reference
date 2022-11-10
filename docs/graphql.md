GraphQL 备忘清单
===

这份快速参考备忘单提供了 [GraphQL](https://graphql.org/) 的简要概述

入门
---

### 概述

- RESTful API 的另一种方法
- GraphQL 是一种 API 查询语言
- 使用清晰的共享术语轻松描述 GraphQL API 的形状。
- 客户端发出查询/突变以读取和更新数据
- GraphQL 语法可以表达复杂的实体关系
- 用 [不同语言](https://graphql.org/code/) 实现 GraphQL 的库

[GraphQL](https://graphql.org/)

### Schema

:-|-
:-|-
`schema`       | GraphQL 架构定义
`query`        | 读取和遍历数据
`mutation`     | 修改数据或触发动作
`subscription` | 发生事件时运行查询

### 内置标量类型

:-|-
:-|-
`Int`     | 有符号 32 位整数
`Float`   | 有符号双精度浮点值
`String`  | UTF-8 字符序列
`Boolean` | 对或错布尔值类型
`ID`      | 唯一标识符

### 类型定义

:-|-
:-|-
`scalar`    | 标量类型
`type`      | 对象类型
`interface` | 接口类型
`union`     | 联合类型
`enum`      | 枚举类型
`input`     | 输入对象类型

### 类型修饰符

:-|-
:-|-
`String`     | 可空字符串
`String!`    | 非空字符串
`[String]`   | 可空字符串列表
`[String]!`  | 可空字符串的非空列表
`[String!]!` | 非空字符串的非空列表

### 输入参数
<!--rehype:wrap-class=row-span-2-->

#### 基本输入

```graphql
type Query {
  users(limit: Int): [User]
}
```

#### 输入默认值

```graphql
type Query {
  users(limit: Int = 10): [User]
}
```

#### 具有多个参数的输入

```graphql
type Query {
  users(limit: Int, sort: String): [User]
}
```

#### 具有多个参数和默认值的输入

```graphql
type Query {
  users(limit: Int = 10, sort: String): [User]
}
type Query {
  users(limit: Int, sort: String = "asc"): [User]
}
type Query {
  users(limit: Int = 10, sort: String = "asc"): [User]
}
```
<!--rehype:className=wrap-text -->

### 输入类型

```graphql
input ListUsersInput {
  limit: Int
  since_id: ID
}
```

```graphql
type Mutation {
  users(params: ListUsersInput): [User]!
}
```

### 自定义标量

```graphql
scalar Url
type User {
  name: String
  homepage: Url
}
```

### 接口

```graphql
interface Foo {
  is_foo: Boolean
}
interface Goo {
  is_goo: Boolean
}
type Bar implements Foo {
  is_foo: Boolean
  is_bar: Boolean
}
type Baz implements Foo, Goo {
  is_foo: Boolean
  is_goo: Boolean
  is_baz: Boolean
}
```

实现一个或多个接口的对象

### 联合

```graphql
type Foo {
  name: String
}
type Bar {
  is_bar: String
}
union SingleUnion = Foo
union MultipleUnion = Foo | Bar
type Root {
  single: SingleUnion
  multiple: MultipleUnion
}
```

一个或多个对象的联合

### 枚举

```graphql
enum USER_STATE {
  NOT_FOUND
  ACTIVE
  INACTIVE
  SUSPENDED
}
type Root {
  stateForUser(userID: ID!): USER_STATE!
  users(state: USER_STATE, limit: Int = 10): [User]
}
```
<!--rehype:className=wrap-text -->

查询和变更(Mutations)
---

### 字段

```graphql
{
  hero {
    name
  }
}
```

结果:

```json
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
```

### 查询可以有注释

```graphql
{
  hero {
    name
    # 查询可以有注释！
    friends {
      name
    }
  }
}
```

结果:

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        { "name": "Luke Skywalker" },
        { "name": "Han Solo" }
      ]
    }
  }
}
```

### 参数 Arguments

```graphql
{
  human(id: "1000") {
    name
    height
  }
}
```

结果:

```json
{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 1.72
    }
  }
}
```

### 不同类型的参数

```graphql
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}
```

结果:

```json
{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}
```

### 别名(Aliases)

```graphql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

结果:

```json
{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}
```

### 片段(Fragments)
<!--rehype:wrap-class=row-span-2-->

```graphql
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}
​
fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

结果:

```json
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        { "name": "Han Solo" },
        { "name": "Leia Organa" },
        { "name": "C-3PO" },
        { "name": "R2-D2" }
      ]
    },
    "rightComparison": {
      "name": "R2-D2",
      "appearsIn": [
        "NEWHOPE",
        "EMPIRE",
        "JEDI"
      ],
      "friends": [
        { "name": "Luke Skywalker" },
        { "name": "Han Solo" },
        { "name": "Leia Organa" }
      ]
    }
  }
}
```

### 在片段内使用变量
<!--rehype:wrap-class=row-span-3-->

```graphql
query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}
​
fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}
```

结果:

```json
{
  "data": {
    "leftComparison": {
      "name": "Luke Skywalker",
      "friendsConnection": {
        "totalCount": 4,
        "edges": [
          {
            "node": {
              "name": "Han Solo"
            }
          },
          {
            "node": {
              "name": "Leia Organa"
            }
          }
        ]
      }
    },
    "rightComparison": {
      "name": "R2-D2",
      "friendsConnection": {
        "totalCount": 3,
        "edges": [
          {
            "node": {
              "name": "Luke Skywalker"
            }
          },
          {
            "node": {
              "name": "Han Solo"
            }
          }
        ]
      }
    }
  }
}
```

### 操作名称(Operation name)

```graphql
query HeroNameAndFriends {
  hero {
    name
    friends {
      name
    }
  }
}
```

结果:

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        { "name": "Luke Skywalker" },
        { "name": "Han Solo" },
        { "name": "Leia Organa" }
      ]
    }
  }
}
```

### 变量(Variables)

```graphql
# { "graphiql": true, "variables": { "episode": JEDI } }
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```
<!--rehype:className=wrap-text -->

变量前缀必须为 `$`，后跟其类型

### 默认变量(Default variables)

```graphql
query HeroNameAndFriends($episode: Episode = "JEDI") {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}
```
<!--rehype:className=wrap-text -->

### 指令(Directives)

```graphql
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```
<!--rehype:className=wrap-text -->

----

```graphql
{ "episode": "JEDI", "withFriends": false }
```

结果:

```json
{
  "data": { "hero": { "name": "R2-D2" } }
}
```

- `@include(if: Boolean)` 仅在参数为 `true` 时，包含此字段
- `@skip(if: Boolean)` 如果参数为 `true`，跳过此字段

### 变更(Mutations)

```graphql
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
```
<!--rehype:className=wrap-text -->

----

```
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```

结果:

```json
{
  "data": {
    "createReview": {
      "stars": 5,
      "commentary": "This is a great movie!"
    }
  }
}
```

### 内联片段(Inline Fragments)

```graphql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
    ... on Human {
      height
    }
  }
}
```

----

```graphql
{ "ep": "JEDI" }
```

结果:

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

### 元字段(Meta fields)

```graphql
{
  search(text: "an") {
    __typename
    ... on Human {
      name
    }
    ... on Droid {
      name
    }
    ... on Starship {
      name
    }
  }
}
```

结果:

```json
{
  "data": {
    "search": [
      {
        "__typename": "Human",
        "name": "Han Solo"
      },
      {
        "__typename": "Human",
        "name": "Leia Organa"
      },
      {
        "__typename": "Starship",
        "name": "TIE Advanced x1"
      }
    ]
  }
}
```

另见
-------

- [GraphQL Schema Language Cheat Sheet](https://github.com/sogko/graphql-schema-language-cheat-sheet) _(github.com)_
