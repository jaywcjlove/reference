Cmd 备忘清单
===

cmd 快速参考备忘单含括了常用的 cmd 命令

常用操作
--------

### 磁盘操作

#### format 参数

参数 | action
:-- | :--
`/q`        | 快速格式化
`/u`        | 不可恢复
`/autotest` | 不提示
`/s`        | 创建 MS-DOS 引导盘

#### format 示例

```shell
format c: /q /u /autotest
```

### 目录操作(一)

#### dir 参数

参数 | action
:--- | :---
`/s`   | 查找子目录
`/w`   | 只显示文件名
`/p`   | 分页
`/a`   | 显示隐藏文件

#### dir 示例

```shell
dir format.exe /s
```
<!--rehype:className=wrap-text -->

查找该盘的 `format.exe` 文件并报告位置

### 目录操作(二)

#### cd 参数

可以使用相对目录或绝对目录

参数 | action
:--- | :--
`cd …`          | 进入上一个文件夹
`cd \`          | 返回根目录
`cd c:\windows` | 进入 `c:\windows` 文件夹

#### md(MKDIR) 参数

参数 | action
:--- | :--
`md HELLOWORLD` | 创建 `HELLOWORLD` 目录

#### rd (RMDIR) 参数

参数 | action
:--- | :--
`rd HELLOWORLD` | 删除 `HELLOWORLD` 目录

### 文件操作

#### rmdir 参数

参数 | action
:--- | :--
`rmdir c:\qqdownload/s` | 删除 `C` 盘的 `qqdownload` 目录

#### del 参数

参数 | action
:--- | :--
`/f`   | 删除只读文件
`/s`   | 删除该目录及其下的所有内容
`/q`   | 删除前不确认

#### del 示例

参数 | action
:--- | :--
`del c:\del /s /q` | 自动删除 c 盘的 del 目录
<!--rehype:className=style-list-->

#### copy 参数

参数 | action
:--- | :--
`copy d:\pwin98*.* c:\presetup` | 将d盘的pwin98的所有文件复制到 c 盘的 presetup 下
<!--rehype:className=style-list-->

#### attrib 参数

attrib命令可以列出或修改磁盘上文件的属性，
文件属性包括文档（A）、只读、隐藏(H)、系统(S)

#### attrib 示例

参数 | action
:--- | :--
`attrib -h -r -s io.sys`       | io.sys文件的只读、隐藏、系统属性去掉
`attrib +h +r +s autoexec.bat` | 为自动批处理文件增加以上属性
<!--rehype:className=style-list-->

### net 命令(一)

参数 | action
:--- | :--
`net use ipipc$ " " /user:" "`               |   建立IPC空链接
`net use ipipc$ " " /user:" "`               |   建立IPC空链接
`net use ipipc$ “密码” /user:"`             |    用户名" 建立IPC非空链接
`net use h: ipc$ “密码” /user:“用户名”`       |   直接登陆后映射对方C：到本地为H:
`net use h: ipc$`                            |   登陆后映射对方C：到本地为H:
`net use ipipc$ /del`                        |   删除IPC链接
`net use h: /del`                            |   删除映射对方到本地的为H:的映射
`net user 用户名　密码　/add`                |   建立用户
`net user guest /active:yes`                |   激活guest用户
`net user`                                   |   查看有哪些用户
`net user 帐户名`                            |   查看帐户的属性
`net localgroup administrators 用户名 /add`  |    把“用户”添加到管理员中使其具有管理员权限
<!--rehype:className=style-list-->

### net 命令(二)

参数 | action
:--- | :--
`net start`              | 查看开启了哪些服务
`net start 服务名`       | 开启服务；(如:net start telnet， net start schedule)
`net stop 服务名`        | 停止某服务
`net time 目标ip`        | 查看对方时间
`net view`               | 查看本地局域网内开启了哪些共享
`net view ip`            | 查看对方局域网内开启了哪些共享
`net config`             | 显示系统网络设置
`net pause 服务名`       | 暂停某服务
`net send ip “文本信息”` | 向对方发信息
`net ver`                | 局域网内正在使用的网络连接类型和信息
`net share`              | 查看本地开启的共享
`net share ipc$ /del`    | 删除ipc$共享
`net share c$ /del`      | 删除C：共享
`net user guest 12345`   | 用guest用户登陆后用将密码改为12345
`net password 密码`      | 更改系统登陆密码
<!--rehype:className=style-list-->

### ping 命令
<!--rehype:wrap-class=row-span-2 col-span-2-->

参数 | action
:--- | :--
`-d`             | 使用 Socket 的 SO_DEBUG 功能
`-c<完成次数>`   | 设置完成要求回应的次数
`-f`             | 极限检测
`-i<间隔秒数>`   | 指定收发信息的间隔时间
`-I<网络界面>`   | 使用指定的网络界面送出数据包
`-l<前置载入>`   | 设置在送出要求信息之前，先行发出的数据包
`-n`             | 只输出数值
`-p<范本样式>`   | 设置填满数据包的范本样式
`-q`             | 不显示指令执行过程，开头和结尾的相关信息除外
`-r`             | 忽略普通的Routing Table，直接将数据包送到远端主机上
`-R`             | 记录路由过程
`-s<数据包大小>` | 设置数据包的大小
`-t<存活数值>`   | 设置存活数值TTL的大小
`-v`             | 详细显示指令的执行过程

### tracert 命令

参数 | action
:--- | :--
`-d`              | 不将地址解析成主机名
`-h maximum_hops` | 搜索目标的最大跃点数，默认30
`-w timeout`      | 等待每个回复的超时时间(以毫秒为单位)
`-R`              | 跟踪往返行程路径(仅适用于 IPv6)
`-S srcaddr`      | 要使用的源地址(仅适用于 IPv6)
`-4`              | 强制使用 IPv4
`-6`              | 强制使用 IPv6

### netstat 命令

参数 | action
:--- | :--
`netstat -a`        | 查看开启了哪些端口,常用netstat -an
`netstat -n`        | 查看端口的网络连接情况，常用netstat -an
`netstat -v`        | 查看正在进行的工作
`netstat -p 协议名`  | 例：netstat -p tcq/ip 查看某协议使用情况
`netstat -s`        | 查看正在使用的所有协议使用情况
`nbtstat -A ip`     | 对方136到139其中一个端口开了的话，就可查看对方最近登陆的用户名

启动程序
--------

### 启动程序(一)
<!--rehype:wrap-class=row-span-3-->

参数 | action
:--- | :--
`appwiz.cpl`   | 程序和功能
`calc`         | 启动计算器
`certmgr.msc`  | 证书管理实用程序
`charmap`      | 启动字符映射表
`chkdsk.exe`   | Chkdsk磁盘检查（管理员身份运行命令提示符）
`cleanmgr`     | 打开磁盘清理工具
`cliconfg`     | SQL SERVER 客户端网络实用工具
`cmstp`        | 连接管理器配置文件安装程序
`compmgmt.msc` | 计算机管理
`comexp.msc`    | 打开系统组件服务
`control`      | 控制面版

### 启动程序(二)
<!--rehype:wrap-class=row-span-3-->

参数 | action
:--- | :--
`dcomcnfg`     | 打开系统组件服务
`devmgmt.msc`  | 设备管理器
`diskmgmt.msc` | 磁盘管理
`eventvwr`     | 事件查看器
`explorer`     | 打开资源管理器
`Firewall.cpl` | Windows防火墙
`fsmgmt.msc`   | 共享文件夹管理器
`hdwwiz.cpl`   | 设备管理器
`lusrmgr.msc`  | 本地用户和组
`Msra`         | 远程协助
`mstsc`        | 远程桌面连接
`notepad`      | 打开记事本
`shrpubw`      | 创建共享文件夹

### 自动关机

参数 | action
:--- | :--
`shutdown -s -t 600`                   | 表示600秒后自动关机
`shutdown -a`                          | 可取消定时关机
`shutdown -r -t 600`                   | 表示600秒后自动重启
`rundll32 user32.dll, LockWorkStation` | 表示锁定计算机
<!--rehype:className=style-list-->

其他
--------

### (一)

参数 | action
:--- | :--
`ipconfig (winipcfg)`          | 查看本地ip，可加/all
`kill -F 进程名`               | 加-F参数后强制结束某进程
`del -F 文件名`                | 加-F参数可删除只读文件
`move 源路径文件　目的路径`    | 移动文件，可修改文件名
`fc one.txt two.txt > 3st.txt` | 对比文件并输出到3st.txt
`finger username @host`        | 查看最近用户登陆
`telnet`                       | 进入本机的telnet
`telnet ip 端口`               | 远程登陆服务器,默认端口为23
<!--rehype:className=style-list-->

### （二）

参数 | action
:--- | :--
`copy c:srv.exe ipadmin$`     | 复制本地c:srv.exe到对方的admin下
`set`                         | 显示当前所有的环境变量
`set 环境变量名称=变量的字符`     | 添加环境变量
`set p(或其它字符)`             | 显示出当前以字符p(或其它字符)开头的所有环境变量
`pause`                       | 暂停批处理程序，并显示出：请按任意键继续…
`echo on/off`                 | 打开或关闭echo，仅用echo不加参数则显示当前echo设置
`echo 信息`                   | 在屏幕上显示出信息
<!--rehype:className=style-list-->

### （三）

参数 | action
:--- | :--
`echo 信息 >> pass.txt`  | 将"信息"保存到pass.txt文件中
`findstr “Hello” aa.txt` | 在aa.txt文件中寻找字符串hello
`find 文件名`            | 查找某文件
`regedit /s`             | 注册表文件名 导入注册表；参数/S指安静模式导入，无任何提示
`regedit /e`             | 注册表文件名 导出注册表
`cacls 文件名`           | 查看文件的访问用户权限列表
`REM 文本内容`           | 在批处理文件中添加注解
`netsh`                  | 查看或更改本地网络配置情况
<!--rehype:className=style-list-->
