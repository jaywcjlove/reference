Leaf 备忘清单
====

[Leaf](https://github.com/vapor/leaf) 是 [Vapor](https://github.com/vapor/vapor) 的轻量级模板引擎，用于在服务端生成动态 HTML 页面。

入门
----

### Leaf

`Leaf` 是一种强大的模板语言，其语法受 `Swift` 启发。

- [Leaf 模板语言官方文档](https://docs.vapor.codes/zh/leaf/getting-started/) _(vapor.codes)_
- [**LeafKit**：Swift 模板引擎库](https://github.com/vapor/leaf-kit) _(github.com)_
- [**Leaf**：LeafKit 的 Vapor 集成模板系统](https://github.com/vapor/leaf) _(github.com)_

### Package
<!--rehype:wrap-class=col-span-2-->

```swift
// swift-tools-version:5.2
import PackageDescription

let package = Package(
    name: "MyApp",
    platforms: [ .macOS(.v10_15) ],
    dependencies: [ /// 添加其它依赖
        .package(url: "https://github.com/vapor/leaf.git", from: "4.0.0"),
    ],
    targets: [
        .target(name: "App", dependencies: [ .product(name: "Leaf", package: "leaf") ]),
    ]
)
```

### 配置

```swift
import Vapor
import Leaf
```

设置工作目录

```swift
app.directory.workingDirectory = "...."
```

设置模板目录

```swift
app.directory.viewsDirectory = "...."
```

设置模板引擎

```swift
app.views.use(.leaf)
```

配置自定义标签

```swift
app.leaf.tags["relative"] = CustomTag()
```

### 目录结构

```
VaporApp
├── Package.swift
├── Resources
│   ├── Views
│   │   └── hello.leaf
├── Public
│   ├── images (images 资源)
│   ├── styles (css 资源)
└── Sources
    └── ...
```

- Views 文件夹来存储 `.leaf` 文件
- 配置 [`FileMiddleware`](https://api.vapor.codes/vapor/documentation/vapor/filemiddleware/) 提供静态文件

```swift
app.middleware.use(FileMiddleware(
    publicDirectory: 
        app.directory.publicDirectory
))
```

### 渲染视图

```swift
app.get("hello") { 
    req -> EventLoopFuture<View> in
    return req.view.render("hello", [
        "name": "Leaf"
    ])
}
// 或
app.get("hello") { 
    req async throws -> View in
    return try await req.view.render(
        "hello", ["name": "Leaf"]
    )
}
```

在 `hello.leaf` 模板中使用 `name`

```
Hello, #(name)!
```

打开浏览器访问 `/hello` 显示 `Hello, Leaf!`。

## Leaf 概述

### 模板语法

一个基本的 `Leaf` 标签使用示例

```swift
There are #count(users) users.
```

可以使用冒号和结束标签为某些标签提供可选的正文。

- 标记 `#`：这表示 leaf 解析器开始寻找的标记。
- 名称 `count`：标签的标识符。
- 参数列表 (`users`)：可以接受零个或多个参数。

### 内置标签示例

```html
#(variable)
#extend("template"): 添加到模板中！#endextend
#export("title"): 欢迎使用 Vapor #endexport
#import("body")
#count(friends)
#for(friend in friends): 
    <li>#(friend.name)</li> 
#endfor
```

文件夹中的模板

```html
#extend("partials/detail-layout"):
    #export("body"): 详情页面 #endexport
#endextend
```

### 表达式

- `+`
- `%`
- `>`
- `==`
- `||`
<!--rehype:className=cols-3 style-none-->

```leaf
#if(1 + 1 == 2):
    Hello!
#endif

#if(index % 2 == 0):
    This is even index.
#else:
    This is odd index.
#endif
```

### 上下文
<!--rehype:wrap-class=row-span-2-->

Leaf 推荐用 `Encodable` 结构体传数据，数组需包装，`[String: Any]` 不支持。

```swift
struct WelcomeContext: Encodable {
    var title: String
    var numbers: [Int]
}
return req.view.render("home", 
    WelcomeContext(
        title: "Hello!", 
        numbers: [42, 9001]
    )
)
```

`title` 和 `numbers` 将暴露给 `Leaf` 模板，就可以在标签中使用这些变量。

```html
<h1>#(title)</h1>
#for(number in numbers):
    <p>#(number)</p>
#endfor
```

### 条件
<!--rehype:wrap-class=row-span-2-->

变量是否存在

```html
#if(title):
    The title is #(title)
#endif
```

比较

```html
#if(title == "Welcome"):
    This is a friendly web page.
#endif
```

使用另一个标签作为判断条件的一部分，内部标签应该省略 `#`

```html
#if(count(users) > 0):
    You have users!
#else:
    There are no users yet :(
#endif
```

多个条件满足时才渲染内容的模板

```html
#if(title == "user" && count(users) > 0):
    You have users!
#endif
```

### #elseif

```html
#if(title == "Welcome"):
    Hello new user!
#elseif(title == "Welcome back!"):
    Hello old user
#else:
    Unexpected page!
#endif
```

### 循环

```swift
struct SolarSystem: Codable {
  let planets = ["Venus", "Earth", "Mars"]
}
return req.view.render(
  "solarSystem", SolarSystem()
)
```

在 `Leaf` 中循环它们：

```html
<ul>
#for(planet in planets):
    <li>#(planet)</li>
#endfor
</ul>
```

### 模板示例
<!--rehype:wrap-class=row-span-4-->

入口页面，通过 `#extend("main")` 将 `mainleaf` 模板的内容复制到当前模板中使用

```html
#extend("main"):
  #export("body"):
    <p>Welcome to Vapor!</p>
  #endexport
#endextend
```

在公共模板 `main.leaf` 中

```html
<html>
  <head>
    <title>#(name)</title>
  </head>
  <body>#import("body")</body>
</html>
```

呈现如下内容：

```html
<html>
  <head>
    <title>Leaf</title>
  </head>
  <body>
    <p>Welcome to Vapor!</p>
  </body>
</html>
```

### 扩展模板
<!--rehype:wrap-class=row-span-3-->

在模板中使用 `#export` 存储名为 `body` 的一些 HTML

```html
#export("body"):
    <p>Welcome to Vapor!</p>
#endexport
```

使用 `#import` 获取传递给 `#extend` 标签的内容

```html
<body>
  #import("body")
</body>
```

### #count

```html
Your search matched #count(matches) pages.
```

`#count` 标签返回数组中的项目数量

### #lowercased

```html
#lowercased(name)
```

`#lowercased` 标签将字符串转成小写字母。

### #capitalized

```html
#capitalized(name)
```

`#capitalized` 标签将字符串中每个单词的首字母大写，其他字母小写。

### #contains

```html
#if(contains(planets, "Earth")):
    Earth is here!
#else:
    Earth is not in this array.
#endif
```

`#contains` 标签接受一个数组和一个值作为其两个参数，如果参数一中的数组包含参数二中的值，则返回 true。

### #date
<!--rehype:wrap-class=row-span-2-->

`#date` 标签将日期格式化为可读的字符串。默认情况下，它使用 ISO8601 格式。

```swift
render(..., ["now": Date()])
```

模板中使用

```
The time is #date(now)
```

你可以传自定义日期格式作为第二参数，详见 [Swift DateFormatter](https://developer.apple.com/documentation/foundation/dateformatter)。

```
The date is #date(now, "yyyy-MM-dd")
```

### #unsafeHTML

标签就像一个变量标签 - 例如 `#(variable)`。

```
The time is #unsafeHTML(styledTitle)
```

它不会转义任何 `variable` 可能包含的 HTML 标签

### #dumpContext

`#dumpContext` 标签将整个上下文渲染为可读的字符串。使用此标记来调试作为上下文提供给当前渲染的内容。

```
Hello, world!
#dumpContext
```

自定义标签
---

### LeafTag
<!--rehype:wrap-class=col-span-2 row-span-2-->

创建一个名为 `NowTag` 的类并遵循 `LeafTag` 协议

```swift
struct NowTag: LeafTag {
    func render(_ ctx: LeafContext) throws -> LeafData {
        ...
    }
}
```

实现 `render(_:)` 方法。传递给该方法的 `LeafContext` 参数包含了我们需要的所有内容。

```swift
enum NowTagError: Error {
    case invalidFormatParameter
    case tooManyParameters
}

struct NowTag: LeafTag {
    func render(_ ctx: LeafContext) throws -> LeafData {
        let formatter = DateFormatter()
        switch ctx.parameters.count {
        case 0: formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
        case 1:
            guard let string = ctx.parameters[0].string else {
                throw NowTagError.invalidFormatParameter
            }

            formatter.dateFormat = string
        default:
            throw NowTagError.tooManyParameters
        }

        let dateAsString = formatter.string(from: Date())
        return LeafData.string(dateAsString)
    }
}
```

### 配置标签

实现了 `NowTag`，告诉 `Leaf` 并设置标签名称为 `#now`

```swift
app.leaf.tags["now"] = NowTag()
```

现在可以在 Leaf 中使用我们的自定义标签 `#now` 了

```html
The time is #now()
```

### 上下文属性

#### `parameters`： 包含标签参数的数组

```swift
struct NowTag: LeafTag {
  func render(
    _ ctx: LeafContext
  ) throws -> LeafData {
      /// ctx.parameters
  }
}
```

#### 使用 Data，`render(_:_:)` 方法作为上下文视图的数据

```swift
return try await req.view.render(
  "home", ["name": "John"]
)
```

自定义标签使用 `Data`

```swift
struct NowTag: LeafTag {
  func render(
    _ ctx: LeafContext
  ) throws -> LeafData {
      let name = ctx.data["name"]?.string
  }
}
```

`LeafContext` 包含两个重要的属性

### 相对路径拼接标签
<!--rehype:wrap-class=col-span-2-->

```swift
struct RelativePathTag: LeafTag {
    func render(_ ctx: LeafContext) throws -> LeafData {
        guard ctx.parameters.count == 1, let filename = ctx.parameters[0].string else {
            throw "Missing #relative parameters"
        }
        if let filepath = ctx.request?.url.path, filename.hasPrefix("/") == false {
            return .string("\(relativePrefix(for: filepath, targetFile: filename))")
        }
        return .string("\(filename)")
    }
    private func relativePrefix(for pagePath: String, targetFile: String) -> String {
        var components = pagePath
            .trimmingCharacters(in: CharacterSet(charactersIn: "/"))
            .split(separator: "/")
        if let last = components.last, last.contains(".") {
            components = components.dropLast()
        }
        let cleanTarget = targetFile.hasPrefix("./") 
            ? String(targetFile.dropFirst(2)) 
            : targetFile
        return String(repeating: "../", count: components.count) + cleanTarget
    }
}
```

配置标签

```swift
app.leaf.tags["relative"] = RelativePathTag()
```

现在可以在 Leaf 中使用我们的自定义标签了

```html
<link rel="stylesheet" href="#relative("main.css")" />
```
