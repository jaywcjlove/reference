React Native 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/react-native.svg?style=flat)](https://npmjs.org/package/react-native)
[![Downloads](https://img.shields.io/npm/dm/react-native.svg?style=flat)](https://www.npmjs.com/package/react-native)
[![Repo Dependents](https://badgen.net/github/dependents-repo/facebook/react-native)](https://github.com/facebook/react-native/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/facebook/react-native)

适合初学者的综合 [React Native](https://reactnative.dev/) 备忘清单，在开始 [React Native](https://reactnative.dev/) 之前需要先掌握 [react](./react.md) 库
<!--rehype:style=padding-top: 12px;-->

入门
---

### macOS 安装 iOS 环境

您将需要 Node、Watchman、React Native 命令行界面、Ruby 版本管理器、Xcode 和 [CocoaPods](./cocoapods.md)

```bash
$ brew install node # Node 14 或更新版本
$ brew install watchman
```

使用 `.ruby-version` 文件来确保您的 Ruby 版本与所需的一致

```bash
$ ruby --version
# ruby 2.7.5
```

<red>注意:</red> macOS 12.5.1 附带了 Ruby <pur>**2.6.8**</pur>，这不是 React Native 所要求的，React Native 70+ 需要 Ruby <yel>**2.7.5**</yel>，可以使用下面工具切换版本：

- [rbenv](https://github.com/rbenv/rbenv) _推荐_
- [RVM](https://rvm.io/) _推荐_
- [chruby](https://github.com/postmodern/chruby)
- 带有 [asdf-ruby](https://github.com/asdf-vm/asdf-ruby) 插件的 [asdf-vm](https://github.com/asdf-vm)
<!--rehype:className=cols-2-->

创建一个新的应用程序

```bash
$ npx react-native init MyApp
# 指定 React Native 版本创建
$ npx react-native init MyApp \
  --version X.XX.X
# 创建 typescript 版本项目
$ npx react-native init MyTSApp \
--template react-native-template-typescript
```

安装依赖

```bash
$ yarn install # 根目录运行
$ cd ios # 进入 ios 目录
$ bundle install # 安装 Bundler
$ bundle exec pod install # 以安装 iOS 依赖项
```

运行你的 React Native 应用程序

```bash
# 启动监听打包 JS 服务，默认端口 8081
$ npx react-native start
# 指定 8088 端口
$ npx react-native start --port=8088
# 启动 iOS 模拟器运行你的应用
$ npx react-native run-ios
```

---

:- | --
:- | --
`⇧` + `⌘` + `2` | 设备窗格
`⌘` + `R` | 构建并运行
`摇动您的设备` | 打开<yel>开发者</yel>菜单
<!--rehype:className=shortcuts-->

### macOS 安装 Android 环境
<!--rehype:wrap-class=col-span-2 row-span-2-->

您将需要 Node、Watchman、React Native 命令行界面、JDK 和 Android Studio

```bash
$ brew install node # Node 14 或更新版本
$ brew install watchman
```

我们建议使用 [Homebrew](./homebrew.md) 安装名为 Azul Zulu 的 OpenJDK 发行版，发行版为 **Intel** 和 **M1 Mac** 提供 JDK

```bash
$ brew tap homebrew/cask-versions
$ brew install --cask zulu11
```

下载安装 [Android Studio](https://developer.android.com/studio/index.html)

- Android SDK
- Android SDK Platform
- Android Virtual Device
<!--rehype:className=cols-3-->

安装安卓SDK，React Native 应用需要 Android 12 (S) SDK，通过 Android Studio 中的 SDK 管理器安装其他 Android SDK

> SDK 管理器也可以在 Android Studio “**Preferences**” 对话框中找到，位于 **Appearance & Behavior** → **System Settings** → **Android SDK**

- `Android SDK Platform 31`
- `Intel x86 Atom_64 System Image` 或 `Google APIs Intel x86 Atom System Image` 或 (for Apple M1 Silicon) `Google APIs ARM 64 v8a System Image`

接下来，选择 `SDK Tools` 选项卡并选中 `Show Package Details` 旁边的复选框。 查找并展开 `Android SDK Build-Tools` 条目，然后确保选择了 <pur>**31.0.0**</pur>。最后点击 `Apply` 下载并安装 `Android SDK` 及相关构建工具

配置 ANDROID_SDK_ROOT 环境变量

将以下行添加到您的 `$HOME/.bash_profile` 或 `$HOME/.bashrc`（如果您使用的是 zsh，则为 `~/.zprofile` 或 `~/.zshrc`）配置文件：

```bash
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

创建一个新的应用程序

```bash
$ npx react-native init MyApp
# 指定 React Native 版本创建
$ npx react-native init MyApp --version X.XX.X
# 创建 typescript 版本项目
$ npx react-native init MyTSApp --template react-native-template-typescript
```

安装依赖

```bash
$ yarn install # 根目录运行
```

使用虚拟设备

- 使用 Android Studio 打开 <pur>./AwesomeProject/android</pur>
- 从 Android Studio 中打开 **AVD 管理器** 来查看可用的 Android **虚拟设备 (AVD)** 列表
- 第一次，您可能需要创建一个新的 AVD。选择 **Create Virtual Device...**，然后从列表中选择任何电话并单击“下一步”，然后选择 **S API Level 31 image**。

运行你的 React Native 应用程序

```bash
# 启动监听打包 JS 服务
$ npx react-native start
# 启动 iOS 模拟器运行你的应用
$ npx react-native run-ios
```

### 打开 React Native Debug 菜单

:- | --
:- | --
`⌘` + `M`(Android) | 打开<yel>开发者</yel>菜单
`⌘` + `D`(iOS) | 打开<yel>开发者</yel>菜单
`Ctrl` + `D`(Linux) | 打开<yel>开发者</yel>菜单
<pur>摇动您的设备</pur> | 打开<yel>开发者</yel>菜单
按两次 `R` 键 | 构建并运行
<!--rehype:className=shortcuts-->

基本组件
---

### View

```jsx
import React from "react";
import { View, Text } from "react-native";

export default function ViewExample() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 0.5
      }}
    />
  );
};
```

构建 UI 的最基本组件

### Text

```jsx
import React from 'react';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function BoldBeautiful() {
  return (
    <Text style={styles.baseText}>
      我是粗体
      <Text style={styles.innerText}>
        和红色
      </Text>
    </Text>
  );
};
const styles = StyleSheet.create({
  baseText: { fontWeight: 'bold' },
  innerText: { color: 'red' }
});
```

用于显示文本的组件

### TextInput

```jsx
import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export default function UseTextInput() {
  const [
    text, onChangeText
  ] = React.useState("Useless Text");
  return (
    <SafeAreaView>
      <TextInput
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};
```
<!--rehype:className=wrap-text-->

用于通过键盘将文本输入应用程序的组件

### Image
<!--rehype:wrap-class=col-span-2-->

```jsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { paddingTop: 50, },
  tinyLogo: { width: 50, height: 50, },
  logo: { width: 66, height: 58, },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('@expo/snack-static/react-native-logo.png')}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: 'data:image/png;base64,iVBORw0K.....',
        }}
      />
    </View>
  );
}

export default DisplayAnImage;
```

用于显示图像的组件

### ScrollView

```jsx
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
```

提供一个可以承载多个组件和视图的滚动容器

### StyleSheet

```jsx
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>
      React Native
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
  }
});
```
<!--rehype:className=wrap-text-->

提供类似于 CSS 样式表的抽象层

用户界面
---
<!--rehype:body-class=cols-2-->

### Button

```jsx
import { Button } from "react-native";

<Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="了解紫色按钮的更多信息"
/>
```

一个基本的按钮组件，用于处理应该在任何平台上都能很好地呈现的触摸

### Switch

```jsx
import { Switch } from "react-native";

<Switch
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
  ios_backgroundColor="#3e3e3e"
  onValueChange={toggleSwitch}
  value={isEnabled}
/>
```

呈现布尔输入

列表视图
---
<!--rehype:body-class=cols-2-->

### SectionList

```jsx
import React from "react";
import {
  StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar
} from "react-native";

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: { fontSize: 32, backgroundColor: "#fff" },
  title: { fontSize: 24 }
});

export default App;
```

### FlatList

```jsx
import React from 'react';
import {
  SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
```

Android 组件和 API
---
<!--rehype:body-class=cols-2-->

### BackHandler

```jsx
import React, { useEffect } from "react";
import {
  Text, View, StyleSheet, BackHandler, Alert
} from "react-native";

const App = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "你确定要回去吗？", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>点击后退按钮！</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default App;
```

检测硬件按钮按下以进行后退导航

### DrawerLayoutAndroid

```jsx
import React, { useRef, useState } from "react";
import {
  Button, DrawerLayoutAndroid, Text, StyleSheet, View
} from "react-native";

const App = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default App;
```

在 Android 上呈现 DrawerLayout

### PermissionsAndroid

```jsx
import React from "react";
import {
  Button, PermissionsAndroid,
  SafeAreaView, StatusBar, StyleSheet, Text, View
} from "react-native";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "Cool Photo App Camera Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const App = () => (
  <View style={styles.container}>
    <Text style={styles.item}>Try permissions</Text>
    <Button
      title="request permissions"
      onPress={requestCameraPermission}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  item: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;
```

提供对 Android M 中引入的权限模型的访问

### ToastAndroid

```jsx
import React from "react";
import {
  View, StyleSheet, ToastAndroid, Button, StatusBar
} from "react-native";

const App = () => {
  const showToast = () => {
    ToastAndroid.show("一只皮卡丘出现在附近!", ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      "All Your Base Are Belong To Us",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "A wild toast appeared!",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Toggle Toast" onPress={() => showToast()} />
      <Button
        title="Toggle Toast With Gravity"
        onPress={() => showToastWithGravity()}
      />
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#888888",
    padding: 8
  }
});

export default App;
```

创建 Android Toast 警报

iOS 组件和 API
---
<!--rehype:body-class=cols-1-->

### ActionSheetIOS

```jsx
import React, { useState } from "react";
import { ActionSheetIOS, Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [result, setResult] = useState("🔮");

  const onPress = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Generate number", "Reset"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark'
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("🔮");
        }
      }
    );

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{result}</Text>
      <Button onPress={onPress} title="Show Action Sheet" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  result: {
    fontSize: 64,
    textAlign: "center"
  }
});

export default App;
```

其它
---
<!--rehype:body-class=cols-2-->

### ActivityIndicator

```jsx
import React from "react";
import {
  ActivityIndicator, StyleSheet, Text, View
} from "react-native";

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default App;
```

显示圆形加载指示器

### Alert

```jsx
import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const App = () => {
  const createTwoButtonAlert = () =>
    Alert.alert( "Alert Title", "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"}
        onPress={createTwoButtonAlert} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default App;
```

启动具有指定标题和消息的警报对话框

### Animated
<!--rehype:wrap-class=row-span-2-->

```jsx
import React, { useRef } from "react";
import {
  Animated, Text, View, StyleSheet, Button, SafeAreaView
} from "react-native";

const App = () => {
  // fadeAnim 将用作不透明度的值。 初始值：0
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // 将在 5 秒内将 fadeAnim 值更改为 1
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };
  const fadeOut = () => {
    // 将在 3 秒内将 fadeAnim 值更改为 0
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // 将不透明度绑定到动画值
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="淡入淡出" onPress={fadeIn} />
        <Button title="淡出视图" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: { fontSize: 28 },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});

export default App;
```

一个用于创建易于构建和维护的流畅、强大的动画的库

### Dimensions

```jsx
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
```

提供获取设备尺寸的接口

### KeyboardAvoidingView

```jsx
import React from 'react';
import {
  View, KeyboardAvoidingView, TextInput,
  StyleSheet, Text, Platform,
  TouchableWithoutFeedback, Button, Keyboard
} from 'react-native';

const KeyboardAvoidingComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="用户名" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: { fontSize: 36, marginBottom: 48 },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});

export default KeyboardAvoidingComponent;
```

提供一个自动移出虚拟键盘的视图

### Linking

```jsx
import React, { useCallback } from "react";
import {
  Alert, Button, Linking, StyleSheet, View
} from "react-native";

const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // 检查具有自定义 URL 方案的链接是否支持该链接。
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      // 打开某些应用程序的链接，如果 URL 方案是“http”，则应打开 Web 链接
      // 通过手机中的某些浏览器
      await Linking.openURL(url);
    } else {
      Alert.alert(`不知道如何打开这个网址： ${url}`);
    }
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
};

export default function App() {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>
        打开支持的 URL
      </OpenURLButton>
      <OpenURLButton url={unsupportedURL}>
        打开不支持的 URL
      </OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
```

提供一个通用接口来与传入和传出应用程序链接进行交互

### Modal
<!--rehype:wrap-class=row-span-3-->

```jsx
import React, { useState } from "react";
import {
  Alert, Modal, StyleSheet, Text, Pressable, View
} from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("模态已关闭");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
```

提供一种在封闭视图上方呈现内容的简单方法

### PixelRatio

```jsx
var image = getImage({
  width: PixelRatio.getPixelSizeForLayoutSize(200),
  height: PixelRatio.getPixelSizeForLayoutSize(100)
});
<Image source={image} style={{ width: 200, height: 100 }} />;
```

提供对设备像素密度的访问

### RefreshControl

```jsx
import React from 'react';
import {
  RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text
} from 'react-native';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <Text>下拉看 RefreshControl 指标</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

该组件在 ScrollView 内部使用，以添加下拉刷新功能

### StatusBar
<!--rehype:wrap-class=col-span-2-->

```jsx
import React, { useState } from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const App = () => {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
      <Text style={styles.textStyle}>
        StatusBar Visibility:{'\n'}
        {hidden ? 'Hidden' : 'Visible'}
      </Text>
      <Text style={styles.textStyle}>
        StatusBar Style:{'\n'}
        {statusBarStyle}
      </Text>
      {Platform.OS === 'ios' ? (
        <Text style={styles.textStyle}>
          StatusBar Transition:{'\n'}
          {statusBarTransition}
        </Text>
      ) : null}
      <View style={styles.buttonsContainer}>
        <Button
          title="Toggle StatusBar"
          onPress={changeStatusBarVisibility} />
        <Button
          title="Change StatusBar Style"
          onPress={changeStatusBarStyle} />
        {Platform.OS === 'ios' ? (
          <Button
            title="Change StatusBar Transition"
            onPress={changeStatusBarTransition} />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

export default App;
```

控制应用程序状态栏的组件

StyleSheet
----

### StyleSheet

```jsx
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 16,
  },
  label: {
    fontSize: 11,   
    textTransform: 'uppercase'
  }
});

<Text style={styles.paragraph}>段落</Text>
<Text style={styles.label}>标签</Text>
```

StyleSheet 是一种抽象，它通过使用二维 JavaScript 对象接受 CSS 样式规则来替代 CSS

### style 属性

```jsx
<Text style={styles.paragraph} />
<Text style={{ fontSize: 16 }} />
<Text
  style={[
    styles.paragraph, { color: 'red' }
  ]}
/>
```

可以使用 `style={}` 属性设置组件的样式，该属性接受对象作为内联样式、样式表创建的样式定义或一组对象/定义来组成样式

### 使用样式表定义

```jsx
// 使用内联样式
const AwesomeBox = () => (
  <View style={{
    width: 100, height: 100,
    backgroundColor: 'red' }} />
);
// 使用样式表 API
const AwesomeBox = () => (
  <View style={styles.box} />
);
 
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
});
```

### 动态样式

```jsx
// 如果 props.isActive 为真 则在 `paragraph`
// 样式之上应用 `selected` 样式
function Item(props) {
  return (
    <Text style={[
      styles.paragraph,
      props.isActive && styles.selected
    ]} />
  );
}
```

### React Native 中的 Flex

```jsx
<View style={{ flexDirection: 'row' }}>
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
</View>
```

布局是用类似 `Flex` 的规则定义的，以适应各种屏幕尺寸。Web 上的 `Flex` 和 React Native 中的 `Flex` 之间的主要区别在于不需要带有 `display: flex` 的父元素

### flexDirection

```jsx
<View style={{ flexDirection: 'row' }}>
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
</View>
```

flexDirection 样式属性确定子元素的布局方向和顺序，可以是`row`、`row-reverse`、`column`或`column-reverse`

### justifyContent

```jsx
<View style={{
  flexDirection: 'row',
  justifyContent: 'flex-start'
}}>
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
  <View style={{ flex: 1 }} />
</View>
```

样式属性决定了子元素在父容器中的定位方式，可以是 `center`、`flex-start`、`flex-end`、`space-around`、`space-between` 或 `space-evenly`。

### React Native 中的尺寸

```jsx
<View
  style={{
    width: 50,
    height: 50,
    backgroundColor: 'powderblue'
  }}
/>
```

默认所有尺寸都是<pur>**无单位**</pur>的，并且表示与密度无关的像素

Props
---

### View Style Props
<!--rehype:wrap-class=row-span-3-->

```jsx
import React from "react";
import { View, StyleSheet } from "react-native";

export default function ViewStyle() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
});
```
<!--rehype:className=wrap-text-->

---

:- | --
:- | --
`backfaceVisibility` | [#](https://reactnative.dev/docs/view-style-props#backfacevisibility)
`backgroundColor` | [#](https://reactnative.dev/docs/view-style-props#backgroundcolor)
`borderBottomColor` | [#](https://reactnative.dev/docs/view-style-props#borderbottomcolor)
`borderBottomEndRadius` | [#](https://reactnative.dev/docs/view-style-props#borderbottomendradius)
`borderBottomLeftRadius` | [#](https://reactnative.dev/docs/view-style-props#borderbottomleftradius)
`borderBottomRightRadius` | [#](https://reactnative.dev/docs/view-style-props#borderbottomrightradius)
`borderBottomStartRadius` | [#](https://reactnative.dev/docs/view-style-props#borderbottomstartradius)
`borderBottomWidth` | [#](https://reactnative.dev/docs/view-style-props#borderbottomwidth)
`borderColor` | [#](https://reactnative.dev/docs/view-style-props#bordercolor)
`borderEndColor` | [#](https://reactnative.dev/docs/view-style-props#borderendcolor)
`borderLeftColor` | [#](https://reactnative.dev/docs/view-style-props#borderleftcolor)
`borderLeftWidth` | [#](https://reactnative.dev/docs/view-style-props#borderleftwidth)
`borderRadius` | [#](https://reactnative.dev/docs/view-style-props#borderradius)
`borderRightColor` | [#](https://reactnative.dev/docs/view-style-props#borderrightcolor)
`borderRightWidth` | [#](https://reactnative.dev/docs/view-style-props#borderrightwidth)
`borderStartColor` | [#](https://reactnative.dev/docs/view-style-props#borderstartcolor)
`borderStyle` | [#](https://reactnative.dev/docs/view-style-props#borderstyle)
`borderTopColor` | [#](https://reactnative.dev/docs/view-style-props#bordertopcolor)
`borderTopEndRadius` | [#](https://reactnative.dev/docs/view-style-props#bordertopendradius)
`borderTopLeftRadius` | [#](https://reactnative.dev/docs/view-style-props#bordertopleftradius)
`borderTopRightRadius` | [#](https://reactnative.dev/docs/view-style-props#bordertoprightradius)
`borderTopStartRadius` | [#](https://reactnative.dev/docs/view-style-props#bordertopstartradius)
`borderTopWidth` | [#](https://reactnative.dev/docs/view-style-props#bordertopwidth)
`borderWidth` | [#](https://reactnative.dev/docs/view-style-props#borderwidth)
`elevation` _Android_ | [#](https://reactnative.dev/docs/view-style-props#elevation-android)
`opacity` | [#](https://reactnative.dev/docs/view-style-props#opacity)

### Text Style Props
<!--rehype:wrap-class=row-span-2-->

:- | --
:- | --
`color` | [#](https://reactnative.dev/docs/text-style-props#color)
`fontFamily` | [#](https://reactnative.dev/docs/text-style-props#fontfamily)
`fontSize` | [#](https://reactnative.dev/docs/text-style-props#fontsize)
`fontStyle` | [#](https://reactnative.dev/docs/text-style-props#fontstyle)
`fontWeight` | [#](https://reactnative.dev/docs/text-style-props#fontweight)
`includeFontPadding` _Android_ | [#](https://reactnative.dev/docs/text-style-props#includefontpadding-android)
`fontVariant` | [#](https://reactnative.dev/docs/text-style-props#fontvariant)
`letterSpacing` | [#](https://reactnative.dev/docs/text-style-props#letterspacing)
`lineHeight` | [#](https://reactnative.dev/docs/text-style-props#lineheight)
`textAlign` | [#](https://reactnative.dev/docs/text-style-props#textalign)
`textAlignVertical` _Android_ | [#](https://reactnative.dev/docs/text-style-props#textalignvertical-android)
`textDecorationColor` _iOS_ | [#](https://reactnative.dev/docs/text-style-props#textdecorationcolor-ios)
`textDecorationLine` | [#](https://reactnative.dev/docs/text-style-props#textdecorationline)
`textDecorationStyle` _iOS_ | [#](https://reactnative.dev/docs/text-style-props#textdecorationstyle-ios)
`textShadowColor` | [#](https://reactnative.dev/docs/text-style-props#textshadowcolor)
`textShadowOffset` | [#](https://reactnative.dev/docs/text-style-props#textshadowoffset)
`textShadowRadius` | [#](https://reactnative.dev/docs/text-style-props#textshadowradius)
`textTransform` | [#](https://reactnative.dev/docs/text-style-props#texttransform)
`writingDirection` _iOS_ | [#](https://reactnative.dev/docs/text-style-props#writingdirection-ios)

### Shadow Props

:- | --
:- | --
`shadowColor` | [#](https://reactnative.dev/docs/shadow-props#shadowcolor)
`shadowOffset` _iOS_ | [#](https://reactnative.dev/docs/shadow-props#shadowoffset-ios)
`shadowOpacity` _iOS_ | [#](https://reactnative.dev/docs/shadow-props#shadowopacity-ios)
`shadowRadius` _iOS_ | [#](https://reactnative.dev/docs/shadow-props#shadowradius-ios)

### Layout Props
<!--rehype:wrap-class=row-span-3-->

:- | --
:- | --
`alignContent` | [#](https://reactnative.dev/docs/layout-props#aligncontent)
`alignItems` | [#](https://reactnative.dev/docs/layout-props#alignitems)
`alignSelf` | [#](https://reactnative.dev/docs/layout-props#alignself)
`aspectRatio` | [#](https://reactnative.dev/docs/layout-props#aspectratio)
`borderBottomWidth` | [#](https://reactnative.dev/docs/layout-props#borderbottomwidth)
`borderEndWidth` | [#](https://reactnative.dev/docs/layout-props#borderendwidth)
`borderLeftWidth` | [#](https://reactnative.dev/docs/layout-props#borderleftwidth)
`borderRightWidth` | [#](https://reactnative.dev/docs/layout-props#borderrightwidth)
`borderStartWidth` | [#](https://reactnative.dev/docs/layout-props#borderstartwidth)
`borderTopWidth` | [#](https://reactnative.dev/docs/layout-props#bordertopwidth)
`borderWidth` | [#](https://reactnative.dev/docs/layout-props#borderwidth)
`bottom` | [#](https://reactnative.dev/docs/layout-props#bottom)
`direction` | [#](https://reactnative.dev/docs/layout-props#direction)
`display` | [#](https://reactnative.dev/docs/layout-props#display)
`end` | [#](https://reactnative.dev/docs/layout-props#end)
`flex` | [#](https://reactnative.dev/docs/layout-props#flex)
`flexBasis` | [#](https://reactnative.dev/docs/layout-props#flexbasis)
`flexDirection` | [#](https://reactnative.dev/docs/layout-props#flexdirection)
`flexGrow` | [#](https://reactnative.dev/docs/layout-props#flexgrow)
`flexShrink` | [#](https://reactnative.dev/docs/layout-props#flexshrink)
`flexWrap` | [#](https://reactnative.dev/docs/layout-props#flexwrap)
`height` | [#](https://reactnative.dev/docs/layout-props#height)
`justifyContent` | [#](https://reactnative.dev/docs/layout-props#justifycontent)
`left` | [#](https://reactnative.dev/docs/layout-props#left)
`margin` | [#](https://reactnative.dev/docs/layout-props#margin)
`marginBottom` | [#](https://reactnative.dev/docs/layout-props#marginbottom)
`marginEnd` | [#](https://reactnative.dev/docs/layout-props#marginend)
`marginHorizontal` | [#](https://reactnative.dev/docs/layout-props#marginhorizontal)
`marginLeft` | [#](https://reactnative.dev/docs/layout-props#marginleft)
`marginRight` | [#](https://reactnative.dev/docs/layout-props#marginright)
`marginStart` | [#](https://reactnative.dev/docs/layout-props#marginstart)
`marginTop` | [#](https://reactnative.dev/docs/layout-props#margintop)
`marginVertical` | [#](https://reactnative.dev/docs/layout-props#marginvertical)
`maxHeight` | [#](https://reactnative.dev/docs/layout-props#maxheight)
`maxWidth` | [#](https://reactnative.dev/docs/layout-props#maxwidth)
`minHeight` | [#](https://reactnative.dev/docs/layout-props#minheight)
`minWidth` | [#](https://reactnative.dev/docs/layout-props#minwidth)
`overflow` | [#](https://reactnative.dev/docs/layout-props#overflow)
`padding` | [#](https://reactnative.dev/docs/layout-props#padding)
`paddingBottom` | [#](https://reactnative.dev/docs/layout-props#paddingbottom)
`paddingEnd` | [#](https://reactnative.dev/docs/layout-props#paddingend)
`paddingHorizontal` | [#](https://reactnative.dev/docs/layout-props#paddinghorizontal)
`paddingLeft` | [#](https://reactnative.dev/docs/layout-props#paddingleft)
`paddingRight` | [#](https://reactnative.dev/docs/layout-props#paddingright)
`paddingStart` | [#](https://reactnative.dev/docs/layout-props#paddingstart)
`paddingTop` | [#](https://reactnative.dev/docs/layout-props#paddingtop)
`paddingVertical` | [#](https://reactnative.dev/docs/layout-props#paddingvertical)
`position` | [#](https://reactnative.dev/docs/layout-props#position)
`right` | [#](https://reactnative.dev/docs/layout-props#right)
`start` | [#](https://reactnative.dev/docs/layout-props#start)
`top` | [#](https://reactnative.dev/docs/layout-props#top)
`width` | [#](https://reactnative.dev/docs/layout-props#width)
`zIndex` | [#](https://reactnative.dev/docs/layout-props#zindex)

### Image Style Props

```jsx
<Image
  style={{
    resizeMode: "contain",
    height: 100,
    width: 200
  }}
  source={require("@expo/snack-static/react-native-logo.png")}
/>
```
<!--rehype:className=wrap-text-->

---

:- | --
:- | --
`backfaceVisibility` | [#](https://reactnative.dev/docs/image-style-props#backfacevisibility)
`backgroundColor` | [#](https://reactnative.dev/docs/image-style-props#backgroundcolor)
`borderBottomLeftRadius` | [#](https://reactnative.dev/docs/image-style-props#borderbottomleftradius)
`borderBottomRightRadius` | [#](https://reactnative.dev/docs/image-style-props#borderbottomrightradius)
`borderColor` | [#](https://reactnative.dev/docs/image-style-props#bordercolor)
`borderRadius` | [#](https://reactnative.dev/docs/image-style-props#borderradius)
`borderTopLeftRadius` | [#](https://reactnative.dev/docs/image-style-props#bordertopleftradius)
`borderTopRightRadius` | [#](https://reactnative.dev/docs/image-style-props#bordertoprightradius)
`borderWidth` | [#](https://reactnative.dev/docs/image-style-props#borderwidth)
`opacity` | [#](https://reactnative.dev/docs/image-style-props#opacity)
`overflow` | [#](https://reactnative.dev/docs/image-style-props#overflow)
`overlayColor` | [#](https://reactnative.dev/docs/image-style-props#overlaycolor-android)
`resizeMode` | [#](https://reactnative.dev/docs/image-style-props#resizemode)
`tintColor` | [#](https://reactnative.dev/docs/image-style-props#tintcolor)
