Android ADB 备忘清单
===

[ADB](https://developer.android.com/studio/command-line/adb.html)，Android Debug Bridge，包含在 Google 的 Android SDK 中，可用于从计算机控制您的 Android 设备。以下是您可以与 [ADB](https://developer.android.com/studio/command-line/adb.html) 一起使用的一些最常见的命令及其用法

入门
----

### 设备基础
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`adb devices`                     | 列出连接的设备
`adb devices -l`                  | 列出连接的设备和种类
`adb root`                        | 以 `root` 权限重新启动 `adbd`
`adb start-server`                | 启动 `adb` 服务器
`adb kill-server`                 | 杀死 `adb` 服务器
`adb remount`                     | 重新挂载具有读/写访问权限的文件系统
`adb reboot`                      | 重启设备
`adb reboot bootloader`           | 将设备重新启动到快速启动
`adb disable-verity`              | 将设备重新启动到快速启动
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
`adb logcat`                         | 开始将日志消息打印到标准输出
`adb logcat -g`                      | 显示当前日志缓冲区大小
`adb logcat -G <size>`               | 设置缓冲区大小（K 或 M）
`adb logcat -c`                      | 清除日志缓冲区
`adb logcat *:V`                     | 启用所有日志消息（详细）
`adb logcat -f <filename>`           | 转储到指定文件
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ adb logcat -G 16M
$ adb logcat *:V > output.log
```

#### 过滤日志输出

- `V` 详细(最低优先级)
- `D` 调试
- `I` 信息
- `W` 警告
- `E` 错误
- `F` 严重错误
- `S` 静默(最高优先级)
<!--rehype:className=cols-2 shortcuts style-none-->

过滤器表达式显示了优先级不低于 `警告` 的所有标记的所有日志消息：

```bash
$ adb logcat *:W
```

### 文件管理

:-- | --
:-- | --
`adb push <local> <remote>` | 将本地复制到远程设备
`adb pull <remote> <local>` | 将远程设备从设备复制到本地
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
`adb shell <command>`                  | 在设备上运行指定的命令（大多数 unix 命令在这里工作）
`adb shell wm size`                    | 显示当前屏幕分辨率
`adb shell wm size WxH`                | 将分辨率设置为 WxH
`adb shell pm list packages`           | 列出所有已安装的包
`adb shell pm list packages -3`        | 列出所有已安装的 3rd 方包
`adb shell monkey -p app.package.name` | 启动指定包
<!--rehype:className=style-list-arrow-->

### 包安装

:-- | --
:-- | --
`adb shell install <apk>` | 安装应用程序
`adb shell install <path>` | 手机路径安装应用
`adb shell install -r <path>` | 手机路径安装应用
`adb shell uninstall <name>` | 删除应用程序
<!--rehype:className=left-align code-nowrap-->

### Paths
<!--rehype:wrap-class=row-span-2-->

:-- | --
:-- | --
`/data/data/<package>/databases` | 应用程序数据库
`/data/data/<package>/shared_prefs/` | 共享偏好
`/data/app` | 用户安装的apk
`/system/app` | 预装的 APK 文件
`/mmt/asec` | 加密的应用程序\|App2SD
`/mmt/emmc` | 内部 SD 卡
`/mmt/adcard` | 外部/内部 SD 卡
`/mmt/adcard/external_sd` | 外置 SD 卡
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
`adb get-serialno` | 获取序列号
`adb shell dumpsys iphonesybinfo` | 获取 IMEI
`adb shell netstat` | 列出 TCP 连接
`adb shell pwd` | 打印当前工作目录
`adb shell dumpsys battery` | 电池状态
`adb shell pm list features` | 列出电话功能
`adb shell service list` | 列出所有服务
`adb shell dumpsys activity <package>/<activity>` | 活动信息
`adb shell ps` | 打印进程状态
`adb shell wm size` | 显示当前屏幕分辨率
`dumpsys window windows` \| `grep -E 'mCurrentFocus\|mFocusedApp'` | 打印当前应用程序的打开活动
<!--rehype:className=style-list-arrow-->

### 包信息

:-- | --
:-- | --
`adb shell list packages` | 列出包名称
`adb shell list packages -r` | 列出包名 + apks 的路径
`adb shell list packages -3` | 列出第三方包名称
`adb shell list packages -s` | 仅列出系统包
`adb shell list packages -u` | 列出包名称 + 已卸载
`adb shell dumpsys package packages` | 列出所有应用程序的信息
`adb shell dump <name>` | 列出一个包裹的信息
`adb shell path <package>` | apk文件的路径
<!--rehype:className=style-list-arrow-->

### 设备相关命令
<!--rehype:wrap-class=col-span-2 row-span-2-->

:-- | --
:-- | --
`adb reboot-recovery` | 重启设备进入恢复模式
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
`adb shell permissions groups` | 列出权限组定义
`adb shell list permissions -g -r` | 列出权限详细信息
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
$ adb push example.apk /mnt/Download/
```

### 列出所有已安装的包并获取完整路径

```bash
$ adb shell pm list packages -f
```

### 从安卓设备中提取文件

```bash
$ adb pull /mnt/Download/example.apk
```

### 从主机安装 apk 到 Android 设备

```bash
$ adb shell install example.apk
```

### 从 Android 设备存储安装 apk

```bash
$ adb shell install /mnt/Download/example.apk
```

### 设置网络代理

```bash
$ adb shell settings put global http_proxy <address>:<port>
```

### 禁用网络代理

```bash
$ adb shell settings put global http_proxy :0
```

### 显示连接的设备并选择一个设备和外壳

```bash
$ adb devices
$ adb -s 7f1c864e shell
```

`7f1c864e` 是设备 `ID`

### 通过 ip 地址无线连接到设备

```bash
$ adb connect 192.168.56.101:5555
```

### adb 通过 wifi
<!--rehype:wrap-class=row-span-5-->

我们可以通过 `wifi` 或专门使用 `tcp` 连接使用 `adb`。 要通过 `wifi` 使用 `adb`，首先通过 `usb` 连接手机并启用 `usb` 调试。然后列出所有设备：

```bash
$ adb devices
# 这应该给出这样的输出：
# device_id    device
```

现在检查 `android` 设备的 `ip`：

```bash
$ adb shell ifconfig
# 输出:

wlan0  Link encap:UNSPEC    Driver icnss
       inet addr:XXX.XXX.X.XX  Bcast:XXX.XXX.X.XXX
```

记下 `inet addr` 后面的 `ip` 地址。我们稍后会需要它。现在在某个端口重新启动 `tcpip`：

```bash
$ adb tcpip $port
```

例如 5555：

```bash
$ adb tcpip 5555
```

您现在可以断开使用。 现在连接到设备只需给出以下命令：

```bash
$ adb connect $ip:$port
```

like:

```bash
$ adb connect 192.168.1.4:5555
```

### 从计算机上的 apk 文件安装应用程序

```bash
$ adb install /Users/dev/projects/myapp.apk
```

### 查找应用的 apk 路径

```bash
$ adb shell pm path com.example.myapp
```

将 `com.example.myapp` 替换为您自己的应用程序包名称

### 按名称查找应用的包名

```bash
$ adb shell pm list package | grep app_name
```

### 将 apk 从设备提取到您的计算机

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

点击又名点击屏幕：

```bash
$ adb shell input tap x y
```

### 查看包的日志

```bash
$ adb shell 'logcat --pid=$(pidof -s <package_name>)'
```

查看特定包的日志
