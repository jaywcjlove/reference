Glances 备忘清单
===

这是开始使用 [Glances](https://glances.readthedocs.io/en/latest/) 系统监控工具的快速参考备忘单，可以帮助用户监视系统的各种性能指标

入门
----

### 功能特点
<!--rehype:wrap-class=row-span-2-->

#### 跨平台支持

- `Glances` 支持多种操作系统，包括 Linux、Windows、macOS 和 FreeBSD。

#### 多种输出方式

- `命令行界面（CLI）`：通过终端查看系统监控数据。
- `Web 界面`：通过浏览器访问并查看系统性能指标。
- `API 输出`：可以将数据通过 REST API 或者 MQTT 传输到其他系统或服务。

#### 详细的系统监控

- `CPU`：实时显示 CPU 的使用率、每个核心的负载情况。
- `内存`：显示总内存、已用内存、缓存和交换分区的使用情况。
- `磁盘 I/O`：显示磁盘的读写速度和 I/O 操作数。
- `网络带宽`：显示网络接口的上传和下载速度。
- `文件系统`：显示各个挂载点的使用情况。
- `传感器`：显示系统温度、风扇速度等传感器数据（需要支持的硬件和驱动）。

#### 扩展功能

- `插件系统`：支持通过插件扩展功能，可以自定义监控指标。
- `导出数据`：支持将监控数据导出为 CSV、JSON 等格式。
- `报警系统`：可以设置报警，当某些指标超过设定阈值时触发通知。

### 安装

#### **通过 pip 安装**

```sh
pip install glances
```

#### **通过包管理器安装**

**Debian/Ubuntu**:

```sh
sudo apt-get install glances
```

**Fedora**:

```sh
sudo dnf install glances
```

**macOS (使用 Homebrew)**:

```sh
brew install glances
```

### 配置文件

Glances 的配置文件位于 `~/.config/glances/glances.conf`。通过编辑这个文件，可以自定义 Glances 的显示和行为。

#### 例子配置文件

```ini
[global]
refresh=2      # 设置刷新间隔（以秒为单位）
[cpu]
enable=true    # 显示 CPU 负载平均值
[mem]
enable=true    # 显示内存使用情况
[disk]
enable=true    # 显示磁盘 I/O 信息
[network]
enable=true    # 显示网络带宽使用情况
```

### Web 访问

```sh
# 使用 Glances 的 API：
glances -w
# 访问 API：
curl http://<your_ip>:61208/api/3/all
```

**使用 Docker 部署 Glances**：

```sh
docker run --rm \
   -v /var/run/docker.sock:/var/run/docker.sock:ro \
   -v /glances/conf:/glances/conf:ro \
   -v /glances/data:/glances/data:rw \
   -p 61208-61209:61208-61209 \
   --name glances nicolargo/glances
```

### 使用方法

#### **启动命令行界面**

```sh
glances
```

#### **启动 Web 界面**

```sh
glances -w
```

启动后，通过浏览器访问 `http://<your_ip>:61208` 查看系统监控数据。

#### **启动以特定模式输出**

```sh
glances --export json  # JSON 输出
glances --export csv   # CSV 输出
```

键盘快捷键
---

### 快捷键

| 快捷键 | 功能                        |
|--------|-----------------------------|
| `ENTER` | 设置进程过滤器 |
| `a` | 自动排序进程列表 |
| `A` |  启用/禁用应用程序监控进程 |
| `b` |  在网络I/O中切换比特/秒或字节/秒 |
| `B` |  查看每秒磁盘I/O计数器 |
| `c` |  按CPU使用率排序进程 |
| `C` |  启用/禁用云统计 |
| `d` |  显示/隐藏磁盘I/O统计 |
| `D` |  启用/禁用Docker统计 |
| `e` |  启用/禁用顶级扩展统计 |
| `E` |  清除当前进程过滤器 |
| `f` |  显示/隐藏文件系统和文件夹监控统计 |
| `F` |  在文件系统使用和可用空间之间切换 |
| `g` |  为当前历史生成图表 |
| `G` |  启用/禁用GPU统计 |
| `h` |  显示/隐藏帮助屏幕 |
| `i` |  按I/O速率排序进程 |
| `I` |  显示/隐藏IP模块 |
| `+`  | 增加选定进程的nice值/降低优先级(需要权限)- 仅在独立模式下 |
| `-`  | 减少选定进程的nice值/提高优先级(需要权限)- 仅在独立模式下 |
| `k` |  终止选定进程(需要权限)- 仅在独立模式下 |
<!--rehype:className=shortcuts left-align-->

### 快捷键

| 快捷键 | 功能                        |
|--------|-----------------------------|
| `K` |  显示/隐藏TCP连接 |
| `l` |  显示/隐藏日志消息 |
| `m` |  按内存使用率排序进程 |
| `M` |  重置进程摘要的最小/最大值 |
| `n` |  显示/隐藏网络统计 |
| `N` |  显示/隐藏当前时间 |
| `p` |  按名称排序进程 |
| `P` |  启用/禁用端口统计 |
| `q\|ESC\|CTRL-C` | 退出当前Glances会话 |
| `Q` |  显示/隐藏IRQ模块 |
| `r` |  重置历史记录 |
| `R` |  显示/隐藏RAID插件 |
| `s` |  显示/隐藏传感器统计 |
| `S` |  启用/禁用微小曲线图 |
| `t` |  按CPU时间排序进程（TIME+） |
| `T` |  以组合方式查看网络I/O |
| `u` |  按用户排序进程 |
| `U` |  查看累积网络I/O |
| `w` |  删除已完成的警告日志消息 |
| `W` |  显示/隐藏Wifi模块 |
| `x` |  删除已完成的警告和严重日志消息 |
| `z` |  显示/隐藏进程统计 |
<!--rehype:className=shortcuts left-align-->

### 快捷键

| 快捷键 | 功能                        |
|--------|-----------------------------|
| `0` |  启用/禁用Irix/Solaris模式。任务的CPU使用率将按CPU总数进行划分 |
| `1` |  在全局CPU和每个CPU统计之间切换 |
| `2` |  启用/禁用左侧边栏 |
| `3` |  启用/禁用快速查看模块 |
| `4` |  启用/禁用除快速查看和负载模块外的所有模块 |
| `5` |  启用/禁用顶部菜单（快速查看、CPU、内存、交换区和负载） |
| `6` |  启用/禁用平均GPU模式 |
| `9` |  在黑白主题之间切换UI主题 |
| `/`  | 在进程命令行或命令名称之间切换 |
| `F5` |  刷新curses用户界面的统计数据 |
| `LEFT` |  向左导航进程排序 |
| `RIGHT` |  向右导航进程排序 |
| `UP` |  在进程列表中向上 |
| `DOWN` |  在进程列表中向下。在Glances客户端浏览器中（通过`--browser`命令行参数访问）： |
| `ENTER` |  运行选定的服务器 |
| `UP` |  在服务器列表中向上 |
| `DOWN` |  在服务器列表中向下 |
| `q\|ESC` | 退出Glances |
<!--rehype:className=shortcuts left-align-->

另见
----

- [Glances 官方文档](https://nicolargo.github.io/glances/) _nicolargo.github.io_
