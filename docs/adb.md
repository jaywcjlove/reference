Android Debug Bridge 备忘清单
===

[ADB](https://developer.android.com/studio/command-line/adb.html) 既 Android Debug Bridge，是 Google 的 Android SDK 中的一个命令行工具，可让您的计算机控制 Android 设备执行各种设备操作。以下是您可以与 [ADB](https://developer.android.com/studio/command-line/adb.html) 一起使用的一些最常见的命令及其用法

入门
----

### 设备基础
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`adb devices`                     | 列出已连接的设备
`adb devices -l`                  | 列出已连接的设备和种类
`adb connect [IP:PORT]`           | 连接到指定 IP 和端口的设备
`adb disconnect [IP:PORT]`        | 断开指定 IP 和端口的设备连接，若未指定，则断开所有连接
`adb root`                        | 以 `root` 权限重新启动 `adbd`
`adb start-server`                | 启动 `adb` 服务
`adb kill-server`                 | 停止 `adb` 服务
`adb remount`                     | 重新挂载具有读/写访问权限的文件系统
`adb reboot`                      | 重启设备
`adb reboot bootloader`           | 将设备重启到 fastboot 模式
`adb reboot recovery`             | 将设备重启到恢复模式
`adb disable-verity`              | 禁用设备的 dm-verity 安全特性
<!--rehype:className=left-align code-nowrap-->

---

- `wait-for-device` 可以在 `adb` 之后指定，以确保该命令在设备连接后运行
- `-s` 可用于在多个连接时将命令发送到特定设备

#### 示例

```bash
$ adb wait-for-device devices
 List of devices attached
 somedevice-1234 device
 someotherdevice-1234 device
```

```bash
$ adb -s somedevice-1234 root
```

### Logcat
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`adb logcat`                         | 将日志消息打印到标准输出
`adb logcat -g`                      | 显示当前日志缓冲区大小
`adb logcat -G <size>`               | 设置缓冲区大小（K 或 M）
`adb logcat -c`                      | 清除日志缓冲区
`adb logcat *:V`                     | 启用所有日志消息（详细）
`adb logcat -f <filename>`           | 将日志转储到指定文件
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ adb logcat -G 16M
$ adb logcat *:V > output.log
```

#### 过滤日志输出

- `V` 最详细的信息(最低优先级)
- `D` 调试信息
- `I` 普通信息
- `W` 警告信息
- `E` 错误信息
- `F` 致命错误信息
- `S` 静默(最高优先级)
<!--rehype:className=cols-2 shortcuts style-none-->

例如，要显示优先级不低于 `警告` 的所有标记的所有日志消息，可以使用以下命令：

```bash
$ adb logcat *:W
```

### 文件管理

:-- | --
:-- | --
`adb push <local> <remote>` | 将本地文件复制到远程设备
`adb pull <remote> <local>` | 将远程设备文件复制到本地
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ echo "This is a test" > test.txt
$ adb push  test.txt /sdcard/test.txt
$ adb pull /sdcard/test.txt pulledTest.txt
```

### 远程 Shell

:-- | --
:-- | --
`adb shell <command>`                  | 在设备上运行指定的命令（大多数 Unix 命令在这里工作）
`adb shell wm size`                    | 显示当前屏幕分辨率
`adb shell wm size WxH`                | 将分辨率设置为 WxH
`adb shell pm list packages`           | 列出所有已安装的应用包
`adb shell pm list packages -3`        | 列出所有已安装的第三方的应用包
`adb shell monkey -p app.package.name <count>` | 启动指定包名的应用程序, 并执行测试
<!--rehype:className=style-list-arrow-->

### 包安装

:-- | --
:-- | --
`adb install <apk>`          | 安装应用程序
`adb install <path>`         | 从手机路径安装应用
`adb install -r <path>`      | 从手机路径安装应用（允许覆盖安装）
`adb uninstall <name>`       | 卸载应用程序
<!--rehype:className=left-align code-nowrap-->

### Paths
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`/data/data/<package>/databases` | 应用程序数据库
`/data/data/<package>/shared_prefs/` | 共享偏好设置
`/data/app` | 用户安装的 APK
`/system/app` | 系统预装的 APK 文件
`/mnt/asec` | 加密的应用程序（App2SD）
`/mnt/emmc` | 内部 SD 卡
`/mnt/sdcard` | 外部/内部 SD 卡
`/mnt/sdcard/external_sd` | 外置 SD 卡
<!--rehype:className=style-list-arrow-->

---

:-- | --
:-- | --
`adb shell ls` | 列出目录内容
`adb shell ls -s` | 每个文件的打印尺寸
`adb shell ls -R` | 递归列出子目录
<!--rehype:className=left-align code-nowrap-->

### 手机信息
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`adb get-statе` | 打印设备状态
`adb get-serialno` | 获取设备的序列号
`adb shell dumpsys iphonesybinfo` | 获取设备的 IMEI 信息
`adb shell netstat` | 列出设备上的所有 TCP 连接
`adb shell pwd` | 打印当前工作目录
`adb shell dumpsys battery` | 获取设备电池状态
`adb shell pm list features` |列出设备支持的所有功能
`adb shell service list` | 列出设备上运行的所有服务
`adb shell dumpsys activity <package>/<activity>` | 获取指定包和活动的信息
`adb shell ps` | 打印设备上所有运行的进程状态
`adb shell wm size` | 显示当前设备的屏幕分辨率
`dumpsys window windows` \| `grep -E 'mCurrentFocus\|mFocusedApp'` | 打印当前应用程序的打开活动的信息
<!--rehype:className=style-list-arrow-->

### 包信息

:-- | --
:-- | --
`adb shell pm list packages` | 列出包名称
`adb shell pm list packages -f` | 列出包名 + apks 的路径
`adb shell pm list packages -3` | 列出第三方包名称
`adb shell pm list packages -s` | 仅列出系统包
`adb shell pm list packages -u` | 列出出包和未安装包
`adb shell pm list packages -i` | 列出包名称 + 安装来源
`adb shell pm list packages -e` | 列出启用的包
`adb shell pm list packages -d` | 列出禁用的包
`adb shell dumpsys package packages` | 列出所有应用程序的信息
`adb shell dumpsys package <name>` | 列出一个包的信息
`adb shell pm path <package>` | 列出 APK 文件的路径
<!--rehype:className=style-list-arrow-->

### 设备相关命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

:-- | --
:-- | --
`adb reboot recovery` | 重启设备进入恢复模式
`adb reboot fastboot` | 重启设备进入恢复模式
`adb shell screencap -p "/path/to/screenshot.png"` | 截图
`adb shell screenrecord "/path/to/record.mp4"` | 录制设备屏幕
`adb backup -apk -all -f backup.ab` | 备份设置和应用程序
`adb backup -apk -shared -all -f backup.ab` | 备份设置、应用程序和共享存储
`adb backup -apk -nosystem -all -f backup.ab` | 仅备份非系统应用程序
`adb restore backup.ab` | 恢复以前的备份
`adb shell am start -a android.intent.action.VIEW -d URL` | 打开网址
`adb shell am start -t image/* -a android.intent.action.VIEW` | 打开画廊
<!--rehype:className=code-nowrap left-align-->

### 权限

:-- | --
:-- | --
`adb shell permissions groups` | 列出所有已定义的权限组
`adb shell list permissions -g -r` | 列出了所有权限的详细信息
<!--rehype:className=style-list-arrow-->

### Logs

:-- | --
:-- | --
`adb logcat [options] [filter] [filter]` | 查看设备日志
`adb bugreport` | 打印错误报告
<!--rehype:className=style-list-arrow-->

常见的 ADB 命令
---

### 将文件推送到 Android 设备的下载文件夹

```bash
$ adb push example.apk /sdcard/Download/
```

### 列出所有已安装的包并获取完整路径

```bash
$ adb shell pm list packages -f
```

### 从安卓设备中提取文件

```bash
$ adb pull /sdcard/Download/example.apk
```

### 从主机安装 APK 到 Android 设备

```bash
$ adb install example.apk
```

### 从 Android 设备存储安装 APK

```bash
$ adb install /sdcard/Download/example.apk
```

### 设置网络代理

```bash
$ adb shell settings put global http_proxy <address>:<port>
```

### 禁用网络代理

```bash
$ adb shell settings put global http_proxy :0
```

### 显示连接的设备并指定一个设备进行 Shell

```bash
$ adb devices
$ adb -s 7f1c864e shell
```

`7f1c864e` 是设备 `ID`

### 通过 IP 地址连接到设备

```bash
$ adb connect 192.168.56.101:5555
```

### 通过 Wi-Fi 连接 ADB
<!--rehype:wrap-class=row-span-5-->

我们可以通过 `Wi-Fi` 或专门使用 `tcp` 连接使用 `adb`。 要通过 `Wi-Fi` 使用 `adb`，首先通过 `USB` 连接手机并启用 `USB` 调试。然后列出所有设备：

```bash
$ adb devices
# 这应该给出这样的输出：
# device_id    device
```

现在检查 `Android` 设备的 `IP`：

```bash
$ adb shell ifconfig
# 输出:

wlan0  Link encap:UNSPEC    Driver icnss
       inet addr:XXX.XXX.X.XX  Bcast:XXX.XXX.X.XXX
```

记下 `inet addr` 后的 `IP` 地址。稍后要用。现在在某个端口重新启动 `tcpip`：

```bash
$ adb tcpip $port
```

例如 5555：

```bash
$ adb tcpip 5555
```

您现在可以断开 USB 线缆使用。 若要连接到设备请键入以下命令：

```bash
$ adb connect $ip:$port
```

例如:

```bash
$ adb connect 192.168.1.4:5555
```

### 将计算机上的 APK 文件安装到设备

```bash
$ adb install /Users/dev/projects/myapp.apk
```

### 查找应用的 APK 路径

```bash
$ adb shell pm path com.example.myapp
```

将 `com.example.myapp` 替换为您自己的应用程序包名称

### 通过名称查找应用的包名

```bash
$ adb shell pm list packages | grep app_name
```

### 从设备提取 APK 到您的计算机

```bash
$ adb pull /data/app/com.example.myapp.apk ./
```

### 将文件从计算机复制到设备

```bash
$ adb push path/to/local/file /sdcard/foo.txt
```

### 滚动屏幕

```bash
$ adb shell input swipe 300 300 500 1000 # 上
$ adb shell input swipe 500 1000 300 300 # 下
```

### 发文本

使用虚拟键盘发送文本：

```bash
$ adb shell input text "Hello World"
```

### 发送按键事件

```bash
$ adb shell input keyevent 66
# 66 是回车键码
```

### 发送点击

点击屏幕：

```bash
$ adb shell input tap x y
```

### 查看包的日志

```bash
$ adb shell 'logcat --pid=$(pidof -s <package_name>)'
```

查看特定包的日志
