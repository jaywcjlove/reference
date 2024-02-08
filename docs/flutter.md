Flutter 备忘清单
===

包含 Flutter 常用的组件、布局、方法等。初学者的完整快速参考

入门
---

### macOS 操作系统上安装和配置

```bash
$ sudo softwareupdate --install-rosetta --agree-to-license
```
<!--rehype:className=wrap-text-->

在 [Apple 芯片的 Mac 电脑](https://support.apple.com/zh-cn/HT211814) 上，还需要安装 [Rosetta 2](https://github.com/flutter/website/pull/7119#issuecomment-1124537969) 环境因为 一些辅助工具 仍然需要，通过手动运行上面的命令来安装

#### 获取 Flutter SDK

- 安装包来获取最新的 stable Flutter SDK：
  - Intel [`flutter_macos_3.3.8-stable.zip`](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/macos/flutter_macos_3.3.8-stable.zip)
  - Apple 芯片 [`flutter_macos_arm64_3.3.8-stable.zip`](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/macos/flutter_macos_arm64_3.3.8-stable.zip)  

    想要获取到其他版本的安装包，请参阅 [SDK 版本列表](https://flutter.cn/docs/development/tools/sdk/releases) 页面
- 将文件解压到目标路径, 比如:

    ```bash
    $ cd ~/development
    $ unzip ~/Downloads/flutter_macos_3.3.8-stable.zip
    ```
    <!--rehype:className=wrap-text-->
- 配置 `flutter` 的 PATH 环境变量：

    ```bash
    $ export PATH="$PATH:`pwd`/flutter/bin"
    ```

- 运行 `flutter doctor` 命令
<!--rehype:className=style-timeline-->

### Windows 操作系统上安装和配置

- 点击下方的安装包，获取 stable 发行通道的 Flutter SDK 最新版本：
  - [flutter_windows_3.3.8-stable.zip](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_3.3.8-stable.zip)
  - 要查看其他发行通道和以往的版本，请参阅 [SDK 版本列表](https://flutter.cn/docs/development/tools/sdk/releases) 页面
- 将压缩包解压，然后把其中的 `flutter` 目录整个放在你想放置 `Flutter SDK` 的路径中（例如 `C:\src\flutter`）
- 更新 `path` 环境变量，在开始菜单的搜索功能键入`「env」`，然后选择 `编辑系统环境变量`。在 **`用户变量`** 一栏中，检查是否有 **`Path`** 这个条目：
  - 如果存在这个条目，以 `;` 分隔已有的内容，加入 `flutter\bin` 目录的完整路径。
  - 如果不存在的话，在用户环境变量中创建一个新的 Path 变量，然后将 `flutter\bin` 所在的完整路径作为新变量的值
<!--rehype:className=style-timeline-->

如果你不想安装指定版本的安装包。可以忽略步骤 `1` 和 `2`。从 `GitHub` 上的 `Flutter repo` 获取源代码，并根据需要，切换到指定的分支或标签

```bash
C:\src>git clone https://github.com/flutter/flutter.git -b stable
```
<!--rehype:className=wrap-text-->

基础组件
---

### Text 样式文本

```dart
Text("Hello world",
  textAlign: TextAlign.left,
);

Text("Hello world! I'm Jack. "*4,
  maxLines: 1,
  overflow: TextOverflow.ellipsis,
);

Text("Hello world",
  textScaleFactor: 1.5,
);
```

### TextStyle 指定文本显示的样式

```dart
Text("Hello world",
  style: TextStyle(
    color: Colors.blue,
    fontSize: 18.0,
    height: 1.2,  
    fontFamily: "Courier",
    background: Paint()..color=Colors.yellow,
    decoration:TextDecoration.underline,
    decorationStyle: TextDecorationStyle.dashed
  ),
);
```
<!--rehype:className=wrap-text-->

### TextSpan 文本的一个“片段”

```dart
Text.rich(TextSpan(
    children: [
     TextSpan(
       text: "Home: "
     ),
     TextSpan(
       text: "https://flutter.dev",
       style: TextStyle(
         color: Colors.blue
       ),  
       recognizer: _tapRecognizer
     ),
    ]
))
```

### DefaultTextStyle 文本默认样式  
<!--rehype:wrap-class=row-span-4-->

```dart
DefaultTextStyle(
  // 1.设置文本默认样式  
  style: TextStyle(
    color:Colors.red,
    fontSize: 20.0,
  ),
  textAlign: TextAlign.start,
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      Text("hello world"),
      Text("I am Jack"),
      Text("I am Jack",
        style: TextStyle(
          inherit: false, //2.不继承默认样式
          color: Colors.grey
        ),
      ),
    ],
  ),
);
```
<!--rehype:className=wrap-text-->

### 字体设置加载
<!--rehype:wrap-class=row-span-4-->

- 在 asset 中声明，要先在 `pubspec.yaml` 中声明它

    ```yaml
    flutter:
      fonts:
        - family: Raleway
          fonts:
            - asset: assets/fonts/Raleway-Regular.ttf
            - asset: assets/fonts/Raleway-Medium.ttf
              weight: 500
            - asset: assets/fonts/Raleway-SemiBold.ttf
              weight: 600
        - family: AbrilFatface
          fonts:
            - asset: assets/fonts/abrilfatface/AbrilFatface-Regular.ttf
    ```

- 将字体文件复制到在 `pubspec.yaml` 中指定的位置
- 使用字体

    ```dart
    // 声明文本样式
    const textStyle = const TextStyle(
      fontFamily: 'Raleway',
    );
    // 使用文本样式
    var buttonText = const Text(
      "Use the font for this text",
      style: textStyle,
    );
    ```
<!--rehype:className=style-timeline-->

### ElevatedButton "漂浮"按钮

```dart
ElevatedButton(
  child: Text("normal"),
  onPressed: () {},
);
```

### TextButton 文本按钮

```dart
TextButton(
  child: Text("normal"),
  onPressed: () {},
)
```

### OutlineButton 边框阴影且背景透明按钮

```dart
OutlineButton(
  child: Text("normal"),
  onPressed: () {},
)
```

### IconButton 可点击的图标按钮

```dart
IconButton(
  icon: Icon(Icons.thumb_up),
  onPressed: () {},
)
```

### 带图标的按钮

```dart
ElevatedButton.icon(
  icon: Icon(Icons.send),
  label: Text("发送"),
  onPressed: _onPressed,
),
OutlineButton.icon(
  icon: Icon(Icons.add),
  label: Text("添加"),
  onPressed: _onPressed,
),
TextButton.icon(
  icon: Icon(Icons.info),
  label: Text("详情"),
  onPressed: _onPressed,
),
```

### 从 asset 中加载图片

- 在工程根目录下创建一个`images目录`，并将图片 `aaa.png` 拷贝到该目录。
- 在 `pubspec.yaml` 中的 `flutter` 部分添加如下内容：

    ```yaml
    assets:
      - images/aaa.png
    ```

    注意: 由于 yaml 文件对缩进严格，所以必须严格按照每一层两个空格的方式进行缩进，此处 assets 前面应有两个空格。

- 加载该图片

    ```dart
    Image(
      image: AssetImage("images/aaa.png"),
      width: 100.0
    );
    ```

    Image 也提供了一个快捷的构造函数 `Image.asset` 用于从 `asset` 中加载、显示图片：

    ```dart
    Image.asset("images/aaa.png",
      width: 100.0,
    )
    ```
<!--rehype:className=style-timeline-->

### 从网络加载图片

```dart
Image(
  image: NetworkImage(
      "https://avatars2.githubusercontent.com/u/20411648?s=460&v=4"),
  width: 100.0,
)
```
<!--rehype:className=wrap-text-->

Image 也提供了一个快捷的构造函数 `Image.network` 用于从网络加载、显示图片：

```dart
Image.network(
  "https://avatars2.githubusercontent.com/u/20411648?s=460&v=4",
  width: 100.0,
)
```
<!--rehype:className=wrap-text-->

### Image 参数
<!--rehype:wrap-class=row-span-2-->

```dart
const Image({
  ...
  this.width, // 图片的宽
  this.height, // 图片高度
  this.color, // 图片的混合色值
  this.colorBlendMode, // 混合模式
  this.fit,// 缩放模式
  // 对齐方式
  this.alignment = Alignment.center,
  // 重复方式
  this.repeat = ImageRepeat.noRepeat,
  ...
})
```

### Switch 单选开关

```dart
Switch(
  value: true,//当前状态
  onChanged:(value){
    // 重新构建页面  
  },
),
```

### Checkbox 复选框
<!--rehype:wrap-class=row-span-2-->

```dart
Checkbox(
  value: true,
  // 选中时的颜色
  activeColor: Colors.red,
  onChanged:(value){
    // ...
  },
)
```

### TextField 文本输入框

```dart
TextField(
    autofocus: true,
    onChanged: (v) {
      print("onChange: $v");
    }
)
```

### LinearProgressIndicator 线性、条状的进度条

模糊进度条(会执行一个动画)

```dart
LinearProgressIndicator(
  backgroundColor: Colors.grey[200],
  valueColor: AlwaysStoppedAnimation(Colors.blue),
),
```
<!--rehype:className=wrap-text-->

进度条显示 `50%`

```dart
LinearProgressIndicator(
  backgroundColor: Colors.grey[200],
  valueColor: AlwaysStoppedAnimation(Colors.blue),
  value: .5, 
)
```
<!--rehype:className=wrap-text-->

### CircularProgressIndicator 圆形进度条

模糊进度条(会执行一个旋转动画)

```dart
CircularProgressIndicator(
  backgroundColor: Colors.grey[200],
  valueColor: AlwaysStoppedAnimation(Colors.blue),
),
```
<!--rehype:className=wrap-text-->

进度条显示 `50%`，会显示一个半圆

```dart
CircularProgressIndicator(
  backgroundColor: Colors.grey[200],
  valueColor: AlwaysStoppedAnimation(Colors.blue),
  value: .5,
),
```
<!--rehype:className=wrap-text-->

### 自定义尺寸

线性进度条高度指定为 `3`

```dart
SizedBox(
  height: 3,
  child: LinearProgressIndicator(
    backgroundColor: Colors.grey[200],
    valueColor: AlwaysStoppedAnimation(Colors.blue),
    value: .5,
  ),
),
```

圆形进度条直径指定为 `100`

```dart
SizedBox(
  height: 100,
  width: 100,
  child: CircularProgressIndicator(
    backgroundColor: Colors.grey[200],
    valueColor: AlwaysStoppedAnimation(Colors.blue),
    value: .7,
  ),
),
```

基础布局
---

### Container

在实际开发中，Container常常用于对一个组件进行包装修饰。

```dart
Container(
  width: 100,
  height: 100,
  color: Colors.blue,
  alignment: Alignment.center,
  child: Text('Hello world'),
),
```

将 `Contianer` 大小固定为 `100 * 100`， 背景色为蓝色。把 `Text` 包裹在 `Container` 中，并将其居中

### Column

列布局(Column),可以将多个子组件沿着垂直的方向摆放(竖的摆放)

```dart
// 将container 和 button 摆放到同一列。
Column(
   children: [
     Container(
       width: 100,
       height: 100,
       color: Colors.blue,
       alignment: Alignment.center,
       child: Text('Hello world'),
     ),
     ElevatedButton(
       onPressed: () {},
       child: Text('Button'),
     ),
   ],
),
```

### Row

行布局(Row)，可以将多个组件沿水平的方向摆放。

```dart
Row(
  children: [
    ElevatedButton(
      onPressed: () {},
      child: const Text('1'),
    ),
    ElevatedButton(
      onPressed: () {},
      child: const Text('2'),
    ),
    ElevatedButton(
      onPressed: () {},
      child: const Text('3'),
    ),
  ],
),
```

在同一行摆放 3 个 `Button`

### Wrap

将子组件从左到右依次排列，当空间不足时自动换行。

```dart
Wrap(
  children: [
    FlutterLogo(),
    FlutterLogo(),
    FlutterLogo(),
    FlutterLogo(),
    FlutterLogo(),  
    FlutterLogo(),
  ],
),
```

显示多个 `Flutter` 的 `logo` 并自动换行

### Stack

Stack 可以将一多个子组件叠在一起显示。堆叠顺序按照children属性中的列表依次堆叠摆放，默认将子控件沿左上角对齐。
需要控制子控件位置可以嵌套`Positoned`控件。

```dart
Stack(
  children: [
    Container(
      height: 300,
      width: 300,
      color: Colors.blue,
    ),
    Container(
      height: 200,
      width: 200,
      color: Colors.black,
    ),
    Container(
      height: 100,
      width: 100,
      color: Colors.yellow,
    ),
  ],
),
```

依次堆叠 `300*300` 的蓝色色块、`200*200` 的黑色色块、`100*100` 的黄色色块

### Positioned
<!--rehype:wrap-class=row-span-2-->
若需要控制Stack中子控件的位置，则可以嵌套改控件。

```dart
Stack(
  children: [
    // 默认摆放在左上位置
    Container(
      height: 300,
      width: 300,
      color: Colors.blue,
    ),
    // 距离左边40个、距离上面40个逻辑像素的位置
    Positioned(
      left: 40,
      top: 40,
      child: Container(
        height: 200,
        width: 200,
        color: Colors.black,
      ),
    ),
    // 距离左边80个、距离上面80个逻辑像素的位置
    Positioned(
      left: 80,
      top: 80,
      child: Container(
        height: 100,
        width: 100,
        color: Colors.yellow,
      ),
    ),
  ],
),
```

### Align

Align组件用于决定子组件对齐方式

```dart
// 使用Align将Button 居中在Container中
Container(
  width: 100,
  height: 100,
  color: Colors.green,
  child: Align(
    alignment: Alignment.center,
    child: ElevatedButton(
      onPressed: () {}, 
      child: Text('Center'),
    ),
  ),
),
```

### Center

Center 组件实际上继承于Align。用于专门剧中。

```dart
//与 Align中代码效果一致
Container(
  width: 100,
  height: 100,
  color: Colors.green,
  child: Center(
    child: ElevatedButton(
      onPressed: () {}, 
      child: Text('Center'),
    ),
  ),
),
```

### Flex

Flex 的用法与 `Row` 或 `Column` 类似，但只需要额外传入 `direction` 参数

- `Row` 和 `Column` 组件都继承 `Flex` 组件
- 设置 `direction` 为 `Axis.horizontal` 表示水平方向(`Row`)，为 `Axis.vertical`则为垂直方向(`Column`)

垂直方向依次摆放3个flutter logo

```dart
Flex(
  direction: Axis.vertiacl,
  children: [
    FlutterLogo(),
    FlutterLogo(),
    FlutterLogo(),
  ],
),
```

水平方向依次摆放 3 个 flutter logo

```dart
Flex(
  direction: Axis.horizontal,
  children: [
    FlutterLogo(),
    FlutterLogo(),
    FlutterLogo(),
  ],
),
```

### Expaneded
<!--rehype:wrap-class=row-span-2-->

Expanded 用于扩张一个子组件。可以通过 `flex` 属性，用于表示该组件相对其他弹性组件放大的倍数(可以理解为一个权重)。

```dart
// Container 会占满剩余的全部空用空间
Row(
  children: [
    FlutterLogo(),
    Expanded(
      child: Container(
        child: FlutterLogo(),
        color: Colors.green,
      ),
    ),
    FlutterLogo(),
  ],
),

// 按照1:2 的比例分配一整行的空间
Row(
  children: [
    Expanded(
      flex: 1,
      child: Container(
        child: FlutterLogo(),
        color: Colors.green,
      ),
    ),
    Expanded(
      flex: 2,
      child: Container(
        child: FlutterLogo(),
        color: Colors.blue,
      ),
    ),
  ],
),
```

### Flexible
<!--rehype:wrap-class=row-span-2-->

`Flexible` 是 `Expanded` 组件的父类。
与 `Expanded` 不同的是，`Flexible` 可以通过 `fit` 属性设置子控件是否必须占满 `Flexibal` 扩展的空间。而 `Expaned` 默认子控件必须占满

```dart
// 如果将fit设置为tight，
// 则绿色Container 和蓝色Container大小一样。
// 如果将fit设置为loose，
// 则两个Flexible扩展的空间大小是一样的，
// 但绿色Container并不会填充整个扩展的空间。
Row(
  children: [
    Flexible(
      flex: 2,
      // fit: FlexFit.tight,
      child: Container(
        child: FlutterLogo(),
        color: Colors.green,
      ),
    ),
    Expanded(
      flex: 2,
      child: Container(
        child: FlutterLogo(),
        color: Colors.blue,
      ),
    ),
  ],
),
```

将 `Flexible` 的 `fit` 属性设置为 `tingt`，就等价于使用 `Expanded`

### Spacer

Spacer 用于在布局中留白

```dart
Row(
  children: [
    Text('Item'),
    Spacer(),
    FlutterLogo(),
  ],
),
```

例如，需要文本和图标位于一个行的两端，而中间留白时。就可以使用 `Spacer`

### ListView

`ListView` 是一个支持滚动的列表组件。该组件默认支持上下滑动。
`ListView`的默认构造函数，会立即初始化`children`中的所有子`widget`，无法动态加载。

```dart
ListView(
  children: [
    Text('1'),
    Text('2'),
    Text('3'),
    Text('4'),
  ],
),
```

需要动态加载，则可以使用 `ListView.builder()`命名构函数。

```dart
// 动态生成4个Text
ListView.builder(
  itemBuilder: (BuildContext context, int index) {
    return Text('$index');
  },
  itemCount: 4,
),
```

需要在对`ListView`中的`Item`添加分割线，则可以借助`ListView.separated()`。

```dart
// separatorBuilder 函数用于在元素之间插入分割线。
// 也可以返回其他widget。该widget会被插入各个元素之间。
ListView.separated(
  itemBuilder: (BuildContext context, int index) {
    return Text('$index');
  },
  itemCount: 4,
  separatorBuilder: (BuildContext context, int index) {
    // 使用Divider widget 画一条粗为5，颜色为红色的线
    return const Divider(
      height: 5,
      thickness: 5,
      color: Colors.red,
    );
  },
),
```

### GridView
<!--rehype:wrap-class=col-span-2-->
`GridView`可将元素显示为二维网格状的列表组件，并支持主轴方向滚动。
使用GridView() 构造函数，需要传入gridDelegate和children。Flutter中已经提供了两种实现方式，分别是:

- `SliverGridDelegateWithFixedCrossAxisCount()` 用于交叉轴方向固定数。
- `SliverGridDelegateWithMaxCrossAxisExtent()` 用于交叉轴方向限制最大长度。

```dart
// 使用SliverGridDelegateWithFixedCrossAxisCount
GridView(
  gridDelegate:
      const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4),
  children: List.generate(
      8,
      (index) => Container(
            color: Colors.red[index % 8 * 100],
            child: Text("index $index"),
          )),
),

// 使用SliverGridDelegateWithMaxCrossAxisExtent
 GridView(
  gridDelegate:
      SliverGridDelegateWithMaxCrossAxisExtent(maxCrossAxisExtent: 200),
  children: List.generate(
    8,
    (index) => Container(
      color: Colors.red[index % 8 * 100],
      child: Text("index $index"),
    ),
  ),
),
```

`GridView.builder()`命名构造可以实现元素的动态加载，与`ListView.builder()`类似

```dart
GridView.builder(
  itemCount: 8,
  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
      crossAxisCount: 4),
  itemBuilder: (context, index) => Container(
    color: Colors.red[index % 8 * 100],
    child: Text("index $index"),
  ),
),
```

`Gridview.count()` 一个简单的构造函数，只需要传入`crossAxisCount`（交叉轴元素的个数）和`children`即可。

```dart
GridView.count(
  crossAxisCount: 4, // 每行固定为4个
  children: List.generate(
      8,
      (index) => Container(
            color: Colors.red[index % 8 * 100],
            child: Text("index $index"),
          )),
),
```

`GridView.extent()` 用于设定每个元素在交叉轴方向的最大尺寸。当程序运行在较大屏幕时通常能看到更多的元素，而不是少量元素的放大版。通过传入`maxCrossAxisExtent`,`Gridview`会根据屏幕尺寸自动选择合适的行数量。

```dart
GridView.extent(
  maxCrossAxisExtent: 200,
  children: List.generate(
      8,
      (index) => Container(
            color: Colors.red[index % 8 * 100],
            child: Text("index $index"),
          )),
),
```

`GridView.count()`和GridView.extent()`可以看作GridView的语法糖。

### PageView

使用`PageView`可以实现整屏页面滚动,默认为水平方向翻页。与`ListView`类似。

- `pageSnapping`参数可以设置滑动时`Page`停留在任意位置。
- `scrollDirection`参数设置滚动方向(默认为水平方向)。

```dart
PageView(
  pageSnapping: false, // 取消页面固定
  scrollDirection: Axis.vertical, // 设置为垂直方向滚动
  children: [
    for (int i = 0; i < 4; i++)
      Container(
        color: Colors.red[i % 4 * 100],
      )
  ],
),
```

使用`PageView.builder()`命名构造，可以动态加载页面。与`ListView.builder()`类似。

```dart
PageView.builder(
  pageSnapping: false,
  scrollDirection: Axis.vertical,
  itemBuilder: (BuildContext context, int index) => Container(
    color: Colors.red[index % 4 * 100],
  ),
),
```

另见
---

- [Dart 备忘清单](./dart.md) _(jaywcjlove.github.io)_
- [flutter 官网](https://flutter.dev) _(flutter.dev)_
- [flutter 中文开发者社区](https://flutterchina.club/) _(flutterchina.club)_
