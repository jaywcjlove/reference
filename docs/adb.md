Android Debug Bridge 备忘清单
===

[Android Debug Bridge](https://developer.android.com/tools/adb)（`adb`）是 Android SDK Platform Tools 中的命令行工具，用于与 Android 设备或模拟器通信。它可以安装和调试应用、复制文件、打开设备 Shell、采集日志、生成错误报告，以及执行常见的设备诊断操作。

入门
----

### 安装与环境

:-- | --
:-- | --
`adb version` | 查看当前 `adb` 版本
`adb help` | 查看 `adb` 命令帮助
`adb start-server` | 启动本机 `adb` server
`adb kill-server` | 停止本机 `adb` server
`adb server-status` | 查看 server 状态与无线调试相关配置
`adb reconnect` | 重新连接设备
`adb reconnect device` | 重新连接设备端连接
`adb reconnect offline` | 重新连接处于 `offline` 状态的设备
<!--rehype:className=left-align code-nowrap-->

`adb` 位于 `android_sdk/platform-tools/`。命令行使用时通常需要把该目录加入 `PATH`，也建议设置 `ANDROID_HOME` 指向 SDK 安装目录。

### 设备列表与状态
<!--rehype:wrap-class=row-span-2 col-span-2-->

:-- | --
:-- | --
`adb devices` | 列出连接到 server 的设备
`adb devices -l` | 列出设备并显示产品、型号等详细信息
`adb get-state` | 输出设备状态
`adb get-serialno` | 输出设备序列号
`adb wait-for-device <command>` | 等到设备连接后再执行命令
`adb -s <serial> <command>` | 指定某一台设备执行命令
`adb -d <command>` | 指定唯一 USB 设备执行命令
`adb -e <command>` | 指定唯一模拟器执行命令
<!--rehype:className=left-align code-nowrap-->

设备常见状态：

- `device`：已连接到 `adb` server，可执行命令
- `offline`：设备未响应，常见于授权弹窗未确认或连接异常
- `unauthorized`：设备未授权当前电脑调试
- `no device`：没有连接到设备

#### 示例

```bash
$ adb devices -l
$ adb -s emulator-5554 shell getprop ro.product.model
$ adb wait-for-device shell getprop sys.boot_completed
```

### 重启与权限

:-- | --
:-- | --
`adb reboot` | 重启设备
`adb reboot bootloader` | 重启到 bootloader / fastboot 模式
`adb reboot recovery` | 重启到 recovery 模式
`adb root` | 以 root 权限重启 `adbd`，仅部分开发镜像支持
`adb unroot` | 以非 root 权限重启 `adbd`
`adb remount` | 重新挂载分区为可写，通常需要 root
`adb disable-verity` | 禁用 verified boot 检查，通常仅调试镜像可用
<!--rehype:className=left-align code-nowrap-->

应用与文件
----

### 安装与卸载
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`adb install app.apk` | 安装 APK 到设备
`adb install -r app.apk` | 覆盖安装，保留应用数据
`adb install -d app.apk` | 允许安装低版本 APK
`adb install -g app.apk` | 安装后授予清单中的运行时权限
`adb install-multiple base.apk split.apk` | 安装多 APK / split APK
`adb uninstall <package>` | 卸载应用
`adb uninstall -k <package>` | 卸载应用但保留数据和缓存目录
<!--rehype:className=style-list-arrow-->

#### 示例

```bash
$ adb install -r app-debug.apk
$ adb install-multiple base.apk config.arm64_v8a.apk
$ adb uninstall com.example.app
```
<!--rehype:className=wrap-text-->

### 包管理

:-- | --
:-- | --
`adb shell pm list packages` | 列出包名
`adb shell pm list packages -3` | 仅列出第三方应用
`adb shell pm list packages -s` | 仅列出系统应用
`adb shell pm list packages -f` | 列出包名和 APK 路径
`adb shell pm list packages -d` | 列出已停用应用
`adb shell pm list packages -e` | 列出已启用应用
`adb shell pm path <package>` | 查看 APK 文件路径
`adb shell dumpsys package <package>` | 查看包的详细信息
`adb shell am force-stop <package>` | 强制停止应用
`adb shell monkey -p <package> 1` | 启动指定包的默认入口
<!--rehype:className=style-list-arrow-->

### 文件传输

:-- | --
:-- | --
`adb push <local> <remote>` | 从电脑复制文件到设备
`adb pull <remote> [local]` | 从设备复制文件到电脑
`adb sync` | 同步构建输出到设备，常用于平台开发
`adb shell ls <path>` | 列出设备目录
`adb shell rm <path>` | 删除设备文件
`adb shell mkdir -p <path>` | 创建设备目录
<!--rehype:className=style-list-arrow-->

#### 示例

```bash
$ adb push app.apk /sdcard/Download/
$ adb pull /sdcard/Download/log.txt .
$ adb shell ls -lah /sdcard/Download
```

Shell 与交互
----

### 远程 Shell

:-- | --
:-- | --
`adb shell` | 打开交互式设备 Shell
`adb shell <command>` | 在设备上执行单条命令
`adb exec-out <command>` | 执行命令并将原始输出写到本机 stdout
`adb shell getprop` | 查看系统属性
`adb shell getprop <key>` | 查看指定系统属性
`adb shell setprop <key> <value>` | 设置系统属性
`adb shell settings list global` | 查看 global 设置
`adb shell settings put global http_proxy host:port` | 设置全局 HTTP 代理
`adb shell settings put global http_proxy :0` | 清除全局 HTTP 代理
<!--rehype:className=style-list-arrow-->

### 输入与界面控制

:-- | --
:-- | --
`adb shell input tap <x> <y>` | 点击屏幕坐标
`adb shell input swipe x1 y1 x2 y2` | 滑动屏幕
`adb shell input text <text>` | 输入文本，空格常写作 `%s`
`adb shell input keyevent 66` | 发送按键事件，`66` 为回车
`adb shell wm size` | 查看屏幕分辨率
`adb shell wm density` | 查看屏幕密度
`adb shell wm size 1080x1920` | 临时修改分辨率
`adb shell wm size reset` | 重置分辨率
<!--rehype:className=style-list-arrow-->

#### 示例

```bash
$ adb shell input tap 540 1800
$ adb shell input text "Hello%sAndroid"
$ adb shell input keyevent KEYCODE_HOME
```

### Activity 与 Intent

:-- | --
:-- | --
`adb shell am start -n <package>/<activity>` | 启动指定 Activity
`adb shell am start -a android.intent.action.VIEW -d <url>` | 打开 URL
`adb shell am start -a android.intent.action.VIEW -t image/*` | 打开图片查看器
`adb shell am broadcast -a <action>` | 发送广播
`adb shell am startservice -n <component>` | 启动服务
`adb shell am force-stop <package>` | 强制停止应用
`adb shell pidof <package>` | 查看进程 PID
<!--rehype:className=style-list-arrow-->

#### 示例

```bash
$ adb shell am start -a android.intent.action.VIEW -d https://developer.android.com
$ adb shell am force-stop com.example.app
```
<!--rehype:className=wrap-text-->

日志与诊断
----

### Logcat
<!--rehype:wrap-class=row-span-2 col-span-2-->

:-- | --
:-- | --
`adb logcat` | 打印设备日志，等同于 `adb shell logcat`
`adb logcat --help` | 查看当前设备支持的 logcat 选项
`adb logcat -c` | 清空日志缓冲区
`adb logcat -g` | 查看日志缓冲区大小
`adb logcat -G 16M` | 设置日志缓冲区大小
`adb logcat -d` | 输出现有日志后退出
`adb logcat -f /sdcard/log.txt` | 在设备上写入日志文件
`adb logcat -v time` | 使用带时间的输出格式
`adb logcat --pid=<pid>` | 仅显示指定 PID 的日志
<!--rehype:className=style-list-arrow-->

Logcat 过滤表达式格式为 `tag:priority`。优先级从低到高为：

- `V`：Verbose
- `D`：Debug
- `I`：Info
- `W`：Warning
- `E`：Error
- `F`：Fatal
- `S`：Silent，不输出任何日志
<!--rehype:className=cols-2 style-none-->

#### 示例

```bash
$ adb logcat "*:W"
$ adb logcat ActivityManager:I MyApp:D "*:S"
$ adb shell pidof -s com.example.app
$ adb logcat --pid=$(adb shell pidof -s com.example.app)
```

### dumpsys

:-- | --
:-- | --
`adb shell dumpsys` | 输出所有系统服务诊断信息
`adb shell dumpsys -l` | 列出可用系统服务
`adb shell dumpsys <service>` | 输出指定服务信息
`adb shell dumpsys <service> -h` | 查看指定服务的帮助
`adb shell dumpsys battery` | 查看电池状态
`adb shell dumpsys meminfo <package>` | 查看应用内存信息
`adb shell dumpsys activity activities` | 查看 Activity 栈
`adb shell dumpsys window displays` | 查看显示窗口信息
<!--rehype:className=style-list-arrow-->

### bugreport 与诊断文件

:-- | --
:-- | --
`adb bugreport` | 生成完整错误报告
`adb bugreport <path>` | 将错误报告保存到指定路径
`adb shell screencap /sdcard/screen.png` | 在设备上保存截图
`adb exec-out screencap -p > screen.png` | 直接保存截图到电脑
`adb shell screenrecord /sdcard/demo.mp4` | 录制屏幕视频
`adb shell screenrecord --time-limit 30 /sdcard/demo.mp4` | 限制录屏时长
<!--rehype:className=style-list-arrow-->

`screenrecord` 默认最长录制 3 分钟，不录制音频。录制完成后可用 `adb pull` 下载到电脑。

网络调试
----

### Android 11 及以上无线调试
<!--rehype:wrap-class=col-span-2-->

Android 11（API 30）及以上支持通过无线调试配对，不需要先使用 USB 线连接。电脑和设备需要在同一无线网络内，并使用最新 SDK Platform Tools。

:-- | --
:-- | --
`adb pair <ip>:<pairing-port>` | 使用设备上显示的配对端口进行配对
`adb connect <ip>:<debug-port>` | 连接已配对设备的调试端口
`adb disconnect <ip>:<debug-port>` | 断开指定无线设备
`adb mdns services` | 查看 mDNS 发现的 adb 服务
`adb mdns track-services --proto-text` | 持续查看 mDNS 服务详情
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ adb pair 192.168.1.20:37123
# 输入设备上显示的配对码
$ adb connect 192.168.1.20:42115
$ adb devices
```

### Android 10 及以下 TCP 调试

旧设备通常需要先通过 USB 连接，然后把 `adbd` 切换到 TCP 端口：

```bash
$ adb devices
$ adb tcpip 5555
$ adb shell ip addr show wlan0
$ adb connect 192.168.1.20:5555
```

完成后可断开 USB。调试结束建议执行：

```bash
$ adb disconnect 192.168.1.20:5555
$ adb usb
```

常用流程
----

### 安装、启动并看日志

```bash
$ adb install -r app-debug.apk
$ adb shell monkey -p com.example.app 1
$ adb logcat MyApp:D "*:S"
```

### 抓取截图和录屏

```bash
$ adb exec-out screencap -p > screen.png
$ adb shell screenrecord --time-limit 30 /sdcard/demo.mp4
$ adb pull /sdcard/demo.mp4 .
```
<!--rehype:className=wrap-text-->

### 查找应用 APK 并导出

```bash
$ adb shell pm path com.example.app
$ adb pull /data/app/~~xxx/base.apk ./example.apk
```
<!--rehype:className=wrap-text-->

### 查看前台 Activity

```bash
$ adb shell dumpsys activity activities | grep mResumedActivity
```
<!--rehype:className=wrap-text-->

在 Windows PowerShell 中可改用：

```powershell
$ adb shell dumpsys activity activities | Select-String "mResumedActivity"
```
<!--rehype:className=wrap-text-->

### 常见排障
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`unauthorized` | 解锁设备并确认 RSA 授权弹窗；必要时撤销 USB 调试授权后重连
`offline` | 重新插拔、执行 `adb reconnect`，或重启 `adb` server
无线调试找不到设备 | 确认同一网络、mDNS 可用，并检查 `adb server-status`
多个设备冲突 | 使用 `adb -s <serial>` 指定设备
命令无权限 | 需要 root、debuggable 应用或对应系统权限时，普通设备可能无法执行
日志太多 | 使用 `tag:priority` 过滤，并用 `"*:S"` 收窄范围
<!--rehype:className=left-align-->

参考资料
----

- [Android Debug Bridge (adb)](https://developer.android.com/tools/adb)
- [Logcat command-line tool](https://developer.android.com/tools/logcat)
- [dumpsys](https://developer.android.com/tools/dumpsys)
- [Android command-line tools](https://developer.android.com/tools)
