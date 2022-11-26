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
// 将Contianer大小固定为100 * 100， 背景色为蓝色。
// 把Text包裹在Container中，并将其居中
Container(
  width: 100,
  height: 100,
  color: Colors.blue,
  alignment: Alignment.center,
  child: Text('Hello world'),
),

```

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
// 在同一行摆放3个Button
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

### Wrap

将子组件从左到右依次排列，当空间不足时自动换行。

```dart
// 显示多个Flutter 的logo并自动换行
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

### Stack

Stack 可以将一多个子组件叠在一起显示。堆叠顺序按照children属性中的列表依次堆叠摆放，默认将子控件沿左上角对齐。
需要控制子控件位置可以嵌套`Positoned`控件。

```dart
// 依次堆叠300*300的蓝色色块、200*200的黑色色块、
// 100*100的黄色色块
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

另见
---

- [Dart 备忘清单](./dart.md) _(jaywcjlove.github.io)_
- [flutter 官网](https://flutter.dev) _(flutter.dev)_
- [flutter 中文开发者社区](https://flutterchina.club/) _(flutterchina.club)_
