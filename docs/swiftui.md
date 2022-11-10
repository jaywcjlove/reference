SwiftUI 2.0 备忘清单
===

该备忘单提供了使用 [SwiftUI](https://developer.apple.com/xcode/swiftui/) 的标签的一些示例等

入门
---

### 介绍

[SwiftUI](https://developer.apple.com/xcode/swiftui/) 提供用于声明应用程序用户界面的视图、控件和布局结构

- [SwiftUI Document](https://developer.apple.com/xcode/swiftui/) _(apple.com)_
- [SwiftUI 2.0 备忘清单](https://wangchujiang.com/swiftui-example/cheat-sheet.html) _(swiftui-example)_
- [Swift 备忘清单](./swift.md) _(jaywcjlove.github.io)_

```swift
import SwiftUI

struct AlbumDetail: View {
  var album: Album
  var body: some View {
    List(album.songs) { song in 
      HStack {
        Image(album.cover)
        VStack(alignment: .leading) {
          Text(song.title)
        }
      }
    }
  }
}
```

### SwiftUI 与 UIKit 效果一致
<!--rehype:wrap-class=col-span-2-->

- [Text](#text) & [Label](#label) _(UILabel)_
- [Image](#image-图片) _(UIImageView)_
- [TextField](#texteditor-多行可滚动文本编辑器) / [SecureField](#securefield-密码输入框) _(UITextField)_
- [TextEditor](#texteditor-多行可滚动文本编辑器) _(UITextView)_
- [Toggle](#toggle-开关选择器) _(UISwitch)_
- [Slider](#slider-滑动输入条) _(UISlider)_
- [Button](#button-按钮控件)/ [Link](#link) _(UIButton)_
- [List](#link) _(UITableView)_
- [LazyVGrid](#lazyvgrid) / [LazyHGrid](#lazyhgrid) _(UICollectionView)_
- [NavigationView](#navigationview) _(UINavigationController)_
- [TabView](#tabview) _(UITabBarController)_
- [Alert](#alert) _(UIAlertController 带有样式 .alert)_
- [ActionSheet](#actionsheet) _(UIAlertController 带有样式 .actionSheet)_
- [HStack](#hstack) / [LazyHStack](#lazyhstack) _(UIStackView 带水平轴)_
- [VStack](#vstack) / [LazyVStack](#lazyvstack) _(UIStackView 带垂直轴)_
- [Picker](#picker-选择控件) _(UISegmentedControl)_
- [Stepper](#stepper-执行语义递增和递减操作的控件) _(UIStepper)_
- [DatePicker](#datepicker-日期控件) _(UIDatePicker)_
- [Text](#text) _(NSAttributedString)无等效项)_
- [Map](#map-地图界面的视图) _(MapKit)_
- [ProgressView](#progressview-进度视图) _(UIProgressView)_
- [Shape](#shape) / [Rectangle](#shape) / [Circle](#shape)
<!--rehype:className=cols-2-->

View(视图)
---

### Text

要在UI中显示文本，只需编写：

```swift
Text("Hello World")
```

添加样式

```swift
Text("Hello World")
    .font(.largeTitle)
    .foregroundColor(Color.green)
    .lineSpacing(50)
    .lineLimit(nil)
    .padding()
```

### Text 设置文本格式
<!--rehype:wrap-class=col-span-2-->

```swift
static let dateFormatter: DateFormatter = {
  let formatter = DateFormatter()
  formatter.dateStyle = .long
  return formatter
}()

var now = Date()
var body: some View {
  Text("Task due date: \(now, formatter: Self.dateFormatter)")
}
```

### Label
<!--rehype:wrap-class=col-span-2-->

可以使用以下代码行在文本旁边设置图标。

```swift
Label("SwiftUI CheatSheet", systemImage: "up.icloud")
```

文档 - [Label](https://developer.apple.com/documentation/swiftui/label)

### Link

可以设置URL，单击后将重定向到浏览器。

```swift
Link("Click me", destination: URL(string: "your_url")!)
```

文档 - [Label](https://developer.apple.com/documentation/swiftui/link)

### Image 图片
<!--rehype:wrap-class=row-span-2-->

显示与环境相关的图像的视图。

```swift
Image("foo") // 图像名称是foo
```

我们可以使用新的 `SF Symbols`

```swift
Image(systemName: "clock.fill")
```

您可以向系统图标集添加样式以匹配您使用的字体

```swift
Image(systemName: "cloud.heavyrain.fill")
    .foregroundColor(.red)
    .font(.title)
Image(systemName: "clock")
    .foregroundColor(.red)
    .font(Font.system(.largeTitle).bold())
```

为图像添加样式

```swift
Image("foo")
  .resizable() // 调整大小以便填充所有可用空间
  .aspectRatio(contentMode: .fit)
```

文档 - [Image](https://developer.apple.com/documentation/swiftui/image)

### Shape

创建矩形的步骤

```swift
Rectangle()
    .fill(Color.red)
    .frame(width: 200, height: 200)
```

创建圆的步骤

```swift
Circle()
  .fill(Color.blue)
  .frame(width: 50, height: 50)
```

文档 - [Image](https://developer.apple.com/documentation/swiftui/shapes)

### ProgressView 进度视图

显示任务完成进度的视图。

```swift
@State private var progress = 0.5

VStack {
    ProgressView(value: progress)
    Button("More", action: { progress += 0.05 })
}
```
<!--rehype:className=wrap-text -->

通过应用 `CircularProgressViewStyle`，可以将其用作 `UIActivityIndicatorView`。

```swift
ProgressView(value: progress)
    .progressViewStyle(CircularProgressViewStyle())
```
<!--rehype:className=wrap-text -->

文档 - [ProgressView](https://developer.apple.com/documentation/swiftui/progressview)

### Map 地图界面的视图
<!--rehype:wrap-class=col-span-3-->

显示指定区域的地图

```swift
import MapKit
@State var region = MKCoordinateRegion(center: .init(latitude: 37.334722, longitude: -122.008889), latitudinalMeters: 300, longitudinalMeters: 300)

Map(coordinateRegion: $region)
```
<!--rehype:className=wrap-text -->

您可以通过指定 `interactionModes`（使用`[]`禁用所有交互）来控制地图的交互。

```swift
struct PinItem: Identifiable {
    let id = UUID()
    let coordinate: CLLocationCoordinate2D
}

Map(coordinateRegion: $region, 
    interactionModes: [], 
    showsUserLocation: true, 
    userTrackingMode: nil, 
    annotationItems: [PinItem(coordinate: .init(latitude: 37.334722, longitude: -122.008889))]) { item in                    
    MapMarker(coordinate: item.coordinate)
}
```

文档 - [Map](https://developer.apple.com/documentation/mapkit/map)

Layout(布局)
----

### Background

将图像用作背景

```swift
Text("Hello World")
    .font(.largeTitle)
    .background(
        Image("hello_world")
            .resizable()
            .frame(width: 100, height: 100)
    )
```

### VStack

以垂直线排列其子项的视图

```swift
VStack (alignment: .center, spacing: 20){
    Text("Hello")
    Divider()
    Text("World")
}
```

创建静态可滚动列表。文档 - [VStack](https://developer.apple.com/documentation/swiftui/vstack)

### HStack

将其子级排列在一条水平线上的视图。

创建静态可滚动列表

```swift
HStack (alignment: .center, spacing: 20){
    Text("Hello")
    Divider()
    Text("World")
}
```

文档 - [HStack](https://developer.apple.com/documentation/swiftui/hstack)

### LazyVStack

`iOS 14` 一种视图，将其子级排列在垂直增长的线中，仅在需要时创建项。

```swift
ScrollView {
  LazyVStack(alignment: .leading) {
    ForEach(1...100, id: \.self) {
        Text("Row \($0)")
    }
  }
}
```

文档 - [LazyVStack](https://developer.apple.com/documentation/swiftui/lazyvstack)

### LazyHStack
<!--rehype:wrap-class=col-span-2-->

将子项排列在水平增长的线中的视图，仅在需要时创建项。

```swift
ScrollView(.horizontal) {
    LazyHStack(alignment: .center, spacing: 20) {
        ForEach(1...100, id: \.self) {
            Text("Column \($0)")
        }
    }
}
```

文档 - [LazyHStack](https://developer.apple.com/documentation/swiftui/lazyhstack)

### ZStack

覆盖其子项的视图，使子项在两个轴上对齐。

```swift
ZStack {
    Text("Hello")
        .padding(10)
        .background(Color.red)
        .opacity(0.8)
    Text("World")
        .padding(20)
        .background(Color.red)
        .offset(x: 0, y: 40)
}
```

文档 - [ZStack](https://developer.apple.com/documentation/swiftui/zstack)

### LazyVGrid
<!--rehype:wrap-class=col-span-2-->

容器视图，将其子视图排列在垂直增长的网格中，仅在需要时创建项目。

```swift
var columns: [GridItem] = Array(repeating: .init(.fixed(20)), count: 5)

ScrollView {
    LazyVGrid(columns: columns) {
        ForEach((0...100), id: \.self) {
            Text("\($0)").background(Color.pink)
        }
    }
}
```

文档 - [LazyVGrid](https://developer.apple.com/documentation/swiftui/lazyvgrid)

### LazyHGrid

一种容器视图，将其子视图排列在水平增长的网格中，仅在需要时创建项目。

```swift
var rows: [GridItem] =
  Array(
    repeating: .init(.fixed(20)), count: 2
  )

ScrollView(.horizontal) {
  LazyHGrid(rows: rows, alignment: .top) {
    ForEach((0...100), id: \.self) {
      Text("\($0)").background(Color.pink)
    }
  }
}
```

文档 - [LazyHGrid](https://developer.apple.com/documentation/swiftui/lazyhgrid)

### Spacer

沿其包含的堆栈布局的主轴或如果不包含在堆栈中的两个轴上扩展的灵活空间。

```swift
HStack {
    Image(systemName: "clock")
    Spacer()
    Text("Time")
}
```

文档 - [Spacer](https://developer.apple.com/documentation/swiftui/spacer)

### Divider

可用于分隔其他内容的视觉元素。

```swift
HStack {
    Image(systemName: "clock")
    Divider()
    Text("Time")
}.fixedSize()
```

文档 - [Divider](https://developer.apple.com/documentation/swiftui/divider)

Input(输入)
---

### Toggle 开关选择器

在打开和关闭状态之间切换的控件。

```swift
@State var isShowing = true // toggle state

Toggle(isOn: $isShowing) {
    Text("Hello World")
}
```

如果您的 `Toggle` 的标签只有 `Text`，则可以使用此更简单的签名进行初始化。

```swift
Toggle("Hello World", isOn: $isShowing)
```

文档 - [Toggle](https://developer.apple.com/documentation/swiftui/toggle)

### Button 按钮控件
<!--rehype:wrap-class=row-span-2-->

在触发时执行操作的控件。

```swift
Button(
    action: {
        print("did tap")
    },
    label: { Text("Click Me") }
)
```

如果 `Button` 的标签仅为 `Text`，则可以使用此更简单的签名进行初始化。

```swift
Button("Click Me") {
    print("did tap")
}
```

您可以通过此按钮了解一下

```swift
Button(action: {
    // 退出应用
    NSApplication.shared.terminate(self)
}, label: {
    Image(systemName: "clock")
    Text("Click Me")
    Text("Subtitle")
})
.foregroundColor(Color.white)
.padding()
.background(Color.blue)
.cornerRadius(5)
```

文档 - [Button](https://developer.apple.com/documentation/swiftui/button)

### TextField 输入框
<!--rehype:wrap-class=row-span-2-->

显示可编辑文本界面的控件。

```swift
@State var name: String = "John"    
var body: some View {
    TextField("Name's placeholder", text: $name)
        .textFieldStyle(RoundedBorderTextFieldStyle())
        .padding()
}
```

取消编辑框焦点样式。

```swift
extension NSTextField { // << workaround !!!
    open override var focusRingType: NSFocusRingType {
        get { .none }
        set { }
    }
}
```

如何居中放置 `TextField` 的文本

```swift
struct ContentView: View {
    @State var text: String = "TextField Text"
    var body: some View {
        TextField("Placeholder Text", text: $text)
            .padding(.all, 20)
            .multilineTextAlignment(.center)
    }
}
```

文档 - [TextField](https://developer.apple.com/documentation/swiftui/textfield)

### SecureField 密码输入框

用户安全地输入私人文本的控件。

```swift
@State var password: String = "1234"    
var body: some View {
  SecureField($password)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
}
```

文档 - [SecureField](https://developer.apple.com/documentation/swiftui/securefield)

### TextEditor 多行可滚动文本编辑器

可以显示和编辑长格式文本的视图。

```swift
@State private var fullText: String = "这是一些可编辑的文本..."

var body: some View {
  TextEditor(text: $fullText)
}
```
<!--rehype:className=wrap-text -->

设置 `TextEditor` 背景颜色

```swift
extension NSTextView {
  open override var frame: CGRect {
    didSet {
      backgroundColor = .clear
//      drawsBackground = true
    }
  }
}
struct DetailContent: View {
  @State private var profileText: String = "输入您的简历"
  var body: some View {
    VSplitView(){
      TextEditor(text: $profileText)
        .background(Color.red)
    }
  }
}
```
<!--rehype:className=wrap-text -->

文档 - [TextEditor](https://developer.apple.com/documentation/swiftui/texteditor)

### DatePicker 日期控件
<!--rehype:wrap-class=col-span-2 row-span-2-->

日期选择器(DatePicker)的样式也会根据其祖先而改变。 在 `Form` 或 `List` 下，它显示为单个列表行，您可以点击以展开到日期选择器（就像日历应用程序一样）。

```swift
@State var selectedDate = Date()

var dateClosedRange: ClosedRange<Date> {
    let min = Calendar.current.date(byAdding: .day, value: -1, to: Date())!
    let max = Calendar.current.date(byAdding: .day, value: 1, to: Date())!
    return min...max
}
NavigationView {
  Form {
      Section {
          DatePicker(
              selection: $selectedDate,
              in: dateClosedRange,
              displayedComponents: .date,
              label: { Text("Due Date") }
          )
      }
  }
}
```

在表格和列表的外部，它显示为普通的轮式拾取器

```swift
@State var selectedDate = Date()

var dateClosedRange: ClosedRange<Date> {
  let min = Calendar.current.date(byAdding: .day, value: -1, to: Date())!
  let max = Calendar.current.date(byAdding: .day, value: 1, to: Date())!
  return min...max
}

DatePicker(selection: $selectedDate, in: dateClosedRange,
  displayedComponents: [.hourAndMinute, .date],
  label: { Text("Due Date") }
)
```

如果 `DatePicker` 的标签仅是纯文本，则可以使用此更简单的签名进行初始化。

```swift
DatePicker("Due Date", selection: $selectedDate, in: dateClosedRange,
  displayedComponents: [.hourAndMinute, .date])
```

可以使用 `ClosedRange`，`PartialRangeThrough` 和 `PartialRangeFrom` 来设置 `minimumDate` 和 `maximumDate`。

```swift
DatePicker("Minimum Date", selection: $selectedDate,
    in: Date()...,
    displayedComponents: [.date])

DatePicker("Maximum Date", selection: $selectedDate,
    in: ...Date(),
    displayedComponents: [.date])
```

文档 - [DatePicker](https://developer.apple.com/documentation/swiftui/datepicker)

### Slider 滑动输入条

用于从值的有界线性范围中选择一个值的控件。

```swift
@State var progress: Float = 0

Slider(value: $progress,
  from: 0.0,
  through: 100.0,
  by: 5.0)
```

滑块缺少 `minimumValueImage` 和 `maximumValueImage`，但是我们可以通过 `HStack` 轻松地复制它

```swift
@State var progress: Float = 0
HStack {
    Image(systemName: "sun.min")
    Slider(value: $progress,
        from: 0.0,
        through: 100.0,
        by: 5.0)
    Image(systemName: "sun.max.fill")
}.padding()
```

文档 - [Slider](https://developer.apple.com/documentation/swiftui/slider)

### Picker 选择控件
<!--rehype:wrap-class=row-span-2-->

用于从一组互斥值中进行选择的控件。

选择器样式的更改基于其祖先，在 `Form` 或 `List` 下，它显示为单个列表行，您可以点击以进入一个显示所有可能选项的新屏幕。

```swift
NavigationView {
  Form {
    Section {
      Picker(selection: $selection,
        label: Text("Picker Name"),
        content: {
            Text("Value 1").tag(0)
            Text("Value 2").tag(1)
            Text("Value 3").tag(2)
            Text("Value 4").tag(3)
      })
    }
  }
}
```

您可以使用 `.pickerStyle(WheelPickerStyle())` 覆盖样式。

```swift
@State var mapChoioce = 0
var settings = ["Map", "Transit", "Satellite"]
Picker("Options", selection: $mapChoioce) {
    ForEach(0 ..< settings.count) { index in
        Text(self.settings[index])
            .tag(index)
    }

}.pickerStyle(SegmentedPickerStyle())
```

在 `SwiftUI` 中，`UISegmentedControl` 只是 `Picker`的另一种样式。分段控制(SegmentedControl)在 `iOS 13` 中也焕然一新。文档 - [Picker](https://developer.apple.com/documentation/swiftui/picker)

### Stepper 执行语义递增和递减操作的控件
<!--rehype:wrap-class=row-span-2-->

用于执行语义递增和递减操作的控件。

```swift
@State var quantity: Int = 0
Stepper(
  value: $quantity,
  in: 0...10,
  label: { Text("Quantity \(quantity)")}
)
```

如果 `Stepper` 的标签只有 `Text`，则可以使用此更简单的签名进行初始化。

```swift
Stepper(
  "Quantity \(quantity)",
  value: $quantity,
  in: 0...10
)
```

如果要完全控制，他们可以提供裸机步进器，您可以在其中管理自己的数据源。

```swift
@State var quantity: Int = 0
Stepper(onIncrement: {
    self.quantity += 1
}, onDecrement: {
    self.quantity -= 1
}, label: { Text("Quantity \(quantity)") })
```

如果您还为带有 `step` 的初始化程序的每个步骤指定了一个值的数量。

```swift
Stepper(
  value: $quantity, in: 0...10, step: 2
) {
    Text("Quantity \(quantity)")
}
```

文档 - [Stepper](https://developer.apple.com/documentation/swiftui/stepper)

### Tap

对于单次敲击

```swift
Text("Tap me!").onTapGesture {
  print("Tapped!")
}
```

用于双击

```swift
Text("Tap me!").onTapGesture(count: 2) {
  print("Tapped!")
}
```

### Gesture 手势

手势如轻敲手势、长按手势、拖拉手势

```swift
Text("Tap")
  .gesture(
      TapGesture()
          .onEnded { _ in
              // do something
          }
  )
Text("Drag Me")
  .gesture(
      DragGesture(minimumDistance: 50)
          .onEnded { _ in
              // do something
          }
  )
Text("Long Press")
  .gesture(
      LongPressGesture(minimumDuration: 2)
          .onEnded { _ in
              // do something
          }
  )
```

### OnChange

onChange 是一个新的视图修改器，可用于所有 SwiftUI 视图。它允许您侦听状态更改并相应地对视图执行操作

```swift
TextEditor(text: $currentText)
  .onChange(of: clearText) { value in
      if clearText{
          currentText = ""
      }
  }
```

List(列表)
---

### List 列表

一个容器，用于显示排列在单列中的数据行。创建静态可滚动列表

```swift
List {
    Text("Hello world")
    Text("Hello world")
    Text("Hello world")
}
```

### 创建动态列表
<!--rehype:wrap-class=col-span-2 row-span-2-->

```swift
let names = ["John", "Apple", "Seed"]
List(names) { name in
    Text(name)
}
```

添加 `Section`

```swift
List {
    Section(header: Text("UIKit"), footer: Text("We will miss you")) {
        Text("UITableView")
    }

    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {
        Text("List")
    }
}
```

### 可混合的列表

```swift
List {
    Text("Hello world")
    Image(systemName: "clock")
}
```

### 使其分组

添加 `.listStyle(GroupedListStyle())`

```swift
List {
  Section(header: Text("UIKit"),
    footer: Text("我们会想念你的")) {
      Text("UITableView")
  }

  Section(header: Text("SwiftUI"),
    footer: Text("要学的东西很多")) {
      Text("List")
  }
}.listStyle(GroupedListStyle())
```
<!--rehype:className=wrap-text -->

### 插入分组
<!--rehype:wrap-class=col-span-2 row-span-2-->

要使其插入分组(`.insetGrouped`)，请添加 `.listStyle(GroupedListStyle())` 并强制使用常规水平尺寸类 ``.environment(\.horizontalSizeClass, .regular)``。

```swift
List {
    Section(header: Text("UIKit"), footer: Text("We will miss you")) {
        Text("UITableView")
    }

    Section(header: Text("SwiftUI"), footer: Text("A lot to learn")) {
        Text("List")
    }
}.listStyle(GroupedListStyle())
.environment(\.horizontalSizeClass, .regular)
```

> 插图分组已添加到 `iOS 13.2` 中的 `SwiftUI`

在 `iOS 14` 中，我们为此设置了专用样式。

```swift
.listStyle(InsetGroupedListStyle())
```

文档 - [List](https://developer.apple.com/documentation/swiftui/list)

### ScrollView 滚动视图

滚动视图。

```swift
ScrollView(alwaysBounceVertical: true) {
    Image("foo")
    Text("Hello World")
}
```

文档 - [ScrollView](https://developer.apple.com/documentation/swiftui/scrollview)

Containers(容器)
---

### NavigationView

`NavigationView` 或多或少类似于 `UINavigationController`，它处理视图之间的导航，显示标题，将导航栏放在顶部。

```swift
NavigationView {
    Text("Hello")
        .navigationBarTitle(Text("World"), displayMode: .inline)
}
```

大标题使用 `.large` 将条形图项添加到导航视图

```swift
NavigationView {
  Text("Hello")
      .navigationBarTitle(Text("World"), displayMode: .inline)
      .navigationBarItems(
        trailing:
            Button(
                action: { print("Going to Setting") },
                label: { Text("Setting") }
            )
    )
}
```

### NavigationLink

按下时触发导航演示的按钮。这是 `pushViewController` 的替代品

```swift
NavigationView {
    NavigationLink(destination:
        Text("Detail")
        .navigationBarTitle(Text("Detail"))
    ) {
        Text("Push")
    }.navigationBarTitle(Text("Master"))
}
```

或者通过将组目标添加到自己的视图 `DetailView` 中，使其更具可读性

```swift
NavigationView {
    NavigationLink(destination: DetailView()) {
        Text("Push")
    }.navigationBarTitle(Text("Master"))
}
```

### Group

Group 创建多个视图作为一个视图，同时也避免了 Stack 的10视图最大限制

```swift
VStack {
    Group {
        Text("Hello")
        Text("Hello")
        Text("Hello")
    }
    Group {
        Text("Hello")
        Text("Hello")
    }
}
```

### TabView
<!--rehype:wrap-class=row-span-2-->

一个视图，允许使用可交互的用户界面元素在多个子视图之间进行切换。

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({ Text("First") })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem({ Text("Second") })
        .tag(1)
}
```

图像和文本在一起。 您可以在此处使用 `SF Symbol`。

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({
            Image(systemName: "circle")
            Text("First")
        })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem(VStack {
            Image("second")
            Text("Second")
        })
        .tag(1)
}
```

或者您可以省略 `VStack`

```swift
TabView {
    Text("First View")
        .font(.title)
        .tabItem({
            Image(systemName: "circle")
            Text("First")
        })
        .tag(0)
    Text("Second View")
        .font(.title)
        .tabItem({
            Image("second")
            Text("Second")
        })
        .tag(1)
}
```

### Form
<!--rehype:wrap-class=col-span-2-->

用于对用于数据输入的控件（例如在设置或检查器中）进行分组的容器。

```swift
NavigationView {
    Form {
        Section {
            Text("Plain Text")
            Stepper(value: $quantity, in: 0...10, label: { Text("Quantity") })
        }
        Section {
            DatePicker($date, label: { Text("Due Date") })
            Picker(selection: $selection, label:
                Text("Picker Name")
                , content: {
                    Text("Value 1").tag(0)
                    Text("Value 2").tag(1)
                    Text("Value 3").tag(2)
                    Text("Value 4").tag(3)
            })
        }
    }
}
```

您几乎可以在此表单中放入任何内容，它将为表单呈现适当的样式。文档 - [Form](https://developer.apple.com/documentation/swiftui/form)

### Modal

Modal 过渡。我们可以显示基于布尔的 Modal。

```swift
@State var isModal: Bool = false

var modal: some View {
    Text("Modal")
}

Button("Modal") {
    self.isModal = true
}.sheet(isPresented: $isModal, content: {
    self.modal
})
```

文档 - [Sheet](https://developer.apple.com/documentation/swiftui/view/3352791-sheet)

### Alert

警报演示的容器。我们可以根据布尔值显示Alert。

```swift
@State var isError: Bool = false

Button("Alert") {
    self.isError = true
}.alert(isPresented: $isError, content: {
    Alert(title: Text("Error"),
      message: Text("Error Reason"),
      dismissButton: .default(Text("OK"))
    )
})
```

### Alert 也与可识别项绑定
<!--rehype:wrap-class=row-span-2-->

```swift
@State var error: AlertError?

var body: some View {
    Button("Alert Error") {
        self.error = AlertError(reason: "Reason")
    }.alert(item: $error, content: { error in
        alert(reason: error.reason)
    })    
}

func alert(reason: String) -> Alert {
    Alert(title: Text("Error"),
            message: Text(reason),
            dismissButton: .default(Text("OK"))
    )
}

struct AlertError: Identifiable {
    var id: String {
        return reason
    }
    
    let reason: String
}
```

文档 - [Alert](https://developer.apple.com/documentation/swiftui/alert)

### ActionSheet

操作表演示文稿的存储类型。我们可以显示基于布尔值的 `ActionSheet`

```swift
@State var isSheet: Bool = false

var actionSheet: ActionSheet {
  ActionSheet(title: Text("Action"),
    message: Text("Description"),
    buttons: [
      .default(Text("OK"), action: {
          
      }),
      .destructive(Text("Delete"), action: {
          
      })
    ]
  )
}

Button("Action Sheet") {
    self.isSheet = true
}.actionSheet(isPresented: $isSheet,
  content: {
    self.actionSheet
})
```

### ActionSheet 也与可识别项绑定

```swift
@State var sheetDetail: SheetDetail?

var body: some View {
    Button("Action Sheet") {
        self.sheetDetail = ModSheetDetail(body: "Detail")
    }.actionSheet(item: $sheetDetail, content: { detail in
        self.sheet(detail: detail.body)
    })
}

func sheet(detail: String) -> ActionSheet {
    ActionSheet(title: Text("Action"),
                message: Text(detail),
                buttons: [
                    .default(Text("OK"), action: {
                        
                    }),
                    .destructive(Text("Delete"), action: {
                        
                    })
                ]
    )
}

struct SheetDetail: Identifiable {
    var id: String {
        return body
    }
    let body: String
}
```

文档 - [ActionSheet](https://developer.apple.com/documentation/swiftui/actionsheet)

另见
---

- [SwiftUI 2.0 Cheat Sheet](https://github.com/SimpleBoilerplates/SwiftUI-Cheat-Sheet) _(github.com)_
- [SwiftUI 2.0 备忘清单](https://wangchujiang.com/swiftui-example/cheat-sheet.html) _(swiftui-example)_
- [Swift 备忘清单](./swift.mdl) _(jaywcjlove.github.io)_
