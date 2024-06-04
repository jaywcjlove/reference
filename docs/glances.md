Glances 备忘清单
===

[Glances](https://glances.readthedocs.io/en/latest/) 是一个开源的系统监控工具，可以帮助用户监视系统的各种性能指标。它以终端界面的形式展示信息，包括CPU、内存、磁盘、网络等方面的数据。此 Glances 备忘清单包含 Glances 命令

入门
----

### 功能特点

1. **跨平台支持**：
   - Glances 支持多种操作系统，包括 Linux、Windows、macOS 和 FreeBSD。

2. **多种输出方式**：
   - 命令行界面（CLI）：通过终端查看系统监控数据。
   - Web 界面：通过浏览器访问并查看系统性能指标。
   - API 输出：可以将数据通过 REST API 或者 MQTT 传输到其他系统或服务。

3. **详细的系统监控**：
   - **CPU**：实时显示 CPU 的使用率、每个核心的负载情况。
   - **内存**：显示总内存、已用内存、缓存和交换分区的使用情况。
   - **磁盘 I/O**：显示磁盘的读写速度和 I/O 操作数。
   - **网络带宽**：显示网络接口的上传和下载速度。
   - **文件系统**：显示各个挂载点的使用情况。
   - **传感器**：显示系统温度、风扇速度等传感器数据（需要支持的硬件和驱动）。

4. **扩展功能**：
   - **插件系统**：支持通过插件扩展功能，可以自定义监控指标。
   - **导出数据**：支持将监控数据导出为 CSV、JSON 等格式。
   - **报警系统**：可以设置报警，当某些指标超过设定阈值时触发通知。

### 安装

1. **通过 pip 安装**：

   ```sh
   pip install glances
   ```

2. **通过包管理器安装**：
   - **Debian/Ubuntu**:

     ```sh
     sudo apt-get install glances
     ```

   - **Fedora**:

     ```sh
     sudo dnf install glances
     ```

   - **macOS (使用 Homebrew)**:

     ```sh
     brew install glances
     ```

### 使用方法

1. **启动命令行界面**：

   ```sh
   glances
   ```

2. **启动 Web 界面**：

   ```sh
   glances -w
   ```

   启动后，可以通过浏览器访问 `http://<your_ip>:61208` 查看系统监控数据。

3. **启动以特定模式输出**：
   - **JSON 输出**：

     ```sh
     glances --export json
     ```

   - **CSV 输出**：

     ```sh
     glances --export csv
     ```

### 键盘快捷键

| 快捷键 | 功能                        |
|--------|-----------------------------|
| a      | 切换自动刷新模式            |
| c      | 显示 CPU 相关信息           |
| m      | 显示内存使用情况            |
| d      | 显示磁盘 I/O 信息           |
| n      | 显示网络信息                |
| f      | 显示文件系统信息            |
| s      | 显示传感器信息（如系统温度）|
| q      | 退出 Glances                |

### 配置文件

Glances 的配置文件位于 `~/.config/glances/glances.conf`。通过编辑这个文件，可以自定义 Glances 的显示和行为。

#### 例子配置文件

```ini
[global]
# 设置刷新间隔（以秒为单位）
refresh=2

[cpu]
# 显示 CPU 负载平均值
enable=true

[mem]
# 显示内存使用情况
enable=true

[disk]
# 显示磁盘 I/O 信息
enable=true

[network]
# 显示网络带宽使用情况
enable=true
```

高级
----

### 高级用法

1. **使用 Glances 的 API**：

   ```sh
   glances -w
   ```

   访问 API：

   ```sh
   curl http://<your_ip>:61208/api/3/all
   ```

2. **使用 Docker 部署 Glances**：

   ```sh
   docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro -v /glances/conf:/glances/conf:ro -v /glances/data:/glances/data:rw -p 61208-61209:61208-61209 --name glances nicolargo/glances
   ```

另见
----

Glances 是一个功能强大且灵活的系统监控工具，可以满足不同场景下的系统监控需求。如果你有更多具体需求，可以参考 [Glances 官方文档](https://nicolargo.github.io/glances/)。
