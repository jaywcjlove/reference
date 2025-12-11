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

[alert]
enable = True

# 邮件告警配置（放在 alert 下）
mail = True
mail_from = 
mail_to = 
mail_server = 
mail_port = 465
mail_user = 
mail_password = 
mail_tls = True

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

命令行选项
---

### 命令行选项

:- | :-
:- | :-
`-h`, `--help` | 显示此帮助信息并退出
`-V`, `--version` | 显示程序版本号并退出
`-d`, `--debug` | 启用调试模式
`-C CONF_FILE`, `--config CONF_FILE` | 配置文件的路径
`--modules-list` | 显示模块（插件和导出）列表并退出
`--stdout PLUGINS_STATS` | 显示插件统计信息到标准输出（用逗号分隔的插件/插件属性列表）
<!--rehype:className=style-list-->

### 禁用启用选项
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`--disable-plugin PLUGIN` | 禁用插件（用逗号分隔的列表）
`--enable-plugin PLUGIN` | 启用插件（用逗号分隔的列表）
`--disable-process` | 禁用进程模块（减少Glances的CPU消耗）
`--disable-webui` | 禁用Web界面（仅响应RESTful API）
`--enable-history` | 启用历史模式
`--disable-bold` | 禁用终端中的粗体模式
`--disable-bg` | 禁用终端中的背景颜色
`--enable-process-extended` | 启用顶级进程的扩展统计
`--disable-check-update` | 禁用在线Glances版本检查
`--disable-autodiscover` | 禁用自动发现功能
`--light`, `--enable-light` | Curses UI的轻量模式（仅启用顶部菜单）
`-q`, `--quiet` | 不显示 curses 界面
<!--rehype:className=style-list-->

### SNMP

:- | :-
:- | :-
`--snmp-community SNMP_COMMUNITY` | SNMP社区
`--snmp-port SNMP_PORT` | SNMP端口
`--snmp-version SNMP_VERSION` | SNMP版本（1, 2c 或 3）
`--snmp-user SNMP_USER` | SNMP用户名（仅适用于SNMPv3）
`--snmp-auth SNMP_AUTH` | SNMP认证密钥（仅适用于SNMPv3）
`--snmp-force` | 强制SNMP模式
<!--rehype:className=style-list-->

### 命令行选项

:- | :-
:- | :-
`--export EXPORT`| 启用导出模块（用逗号分隔的列表）
`--export-csv-file EXPORT_CSV_FILE` | CSV导出文件路径
`--export-json-file EXPORT_JSON_FILE`| JSON导出文件路径
<!--rehype:className=style-list-->

### 命令行选项

:- | :-
:- | :-
`-0`, `--disable-irix` | 任务的CPU使用率将按CPU总数进行划分
`-1`, `--percpu` | 以每个CPU模式启动Glances
`-2`, `--disable-left-sidebar` | 禁用网络、磁盘I/O、文件系统和传感器模块
`-3`, `--disable-quicklook` | 禁用快速查看模块
`-4`, `--full-quicklook` | 仅启用快速查看和负载模块
`-5`, `--disable-top` | 禁用顶部菜单（快速查看、CPU、内存、交换区和负载）
`-6`, `--meangpu` | 以平均GPU模式启动Glances
<!--rehype:className=style-list-->

### 命令行选项

:- | :-
:- | :-
`-c CLIENT`, `--client CLIENT` | 通过IPv4/IPv6地址、主机名或主机名:端口连接到Glances服务器
`-s`, `--server` | 以服务器模式运行Glances
`--browser` | 启动客户端浏览器（服务器列表）
`-p PORT`, `--port PORT` | 定义客户端/服务器TCP端口 \[默认：61209]
`-B BIND_ADDRESS`, `--bind BIND_ADDRESS` | 将服务器绑定到给定的IPv4/IPv6地址或主机名
`--username` | 定义客户端/服务器用户名
`--password` | 定义客户端/服务器密码
<!--rehype:className=style-list-->

### 命令行选项

:- | :-
:- | :-
`-t TIME`, `--time TIME` | 设置刷新时间（秒）\[默认：3秒]
`-w`, `--webserver` |  以Web服务器模式运行Glances（需要bottle库）
`--cached-time CACHED_TIME` | 设置服务器缓存时间 \[默认：1秒]
`--open-web-browser` |  尝试在默认的 Web 浏览器中打开Web界面
`-f PROCESS_FILTER`, `--process-filter PROCESS_FILTER` | 设置进程过滤模式（正则表达式）
`--process-short-name` | 强制使用进程名称的短名称
`--hide-kernel-threads` |  在进程列表中隐藏内核线程（Windows不可用）
<!--rehype:className=style-list-->

### 命令行选项

:- | :-
:- | :-
`-b`, `--byte` | 以每秒字节数显示网络速率
`--diskio-show-ramfs` | 在 DiskIO 插件中显示RAM文件系统
`--diskio-iops` | 在 DiskIO 插件中显示每秒I/O操作数
`--fahrenheit` | 以华氏度显示温度（默认是摄氏度）
`--fs-free-space` | 显示文件系统的可用空间而非已用空间
`--theme-white` | 优化显示颜色以适应白色背景
<!--rehype:className=style-list-->

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

配置
---

### 位置
<!--rehype:wrap-class=col-span-2-->

您可以将自己的 `glances.conf` 文件放在以下位置：

:-- | -- | --
:-- | -- | --
`Linux`, `SunOS` | ~/.config/glances/, /etc/glances/, /usr/share/docs/glances/ |
`*BSD` |~/.config/glances/, /usr/local/etc/glances/, /usr/share/docs/glances/ |
`macOS` | ~/Library/Application Support/glances/, /usr/local/etc/glances/, /usr/share/docs/glances/ |
`Windows` | %APPDATA%\glances\glances.conf |

---

- 在 Windows XP 上，%APPDATA% 为：`C:\Documents and Settings\<USERNAME>\Application Data`
- 在 Windows Vista 及更高版本上：`C:\Users\<用户名>\AppData\Roaming`

### 语法

```ini
[global]
# 刷新率（默认为至少 2 秒）
# 可以通过 -t <sec> 选项覆盖
# 也可以在每个插件部分覆盖它
refresh=2
# Glances 是否应该检查 PyPI 上是否有更新的版本？
check_update=false
# 历史大小（最大值数）
# 默认值为28800：1天，每3秒1分
history_size=28800
```

### CPU 插件的示例

```ini
[cpu]
disable=False
refresh=3
user_careful=50
user_warning=70
user_critical=90
iowait_careful=50
iowait_warning=70
iowait_critical=90
system_careful=50
system_warning=70
system_critical=90
steal_careful=50
steal_warning=70
steal_critical=90
```

### InfluxDB 导出模块

```ini
[influxdb]
# 配置 --export influxdb 选项
# https://influxdb.com/
host=localhost
port=8086
user=root
password=root
db=glances
prefix=localhost
#tags=foo:bar,spam:eggs
```

### Nginx AMP

```ini
[amp_nginx]
# 应启用 Nginx 状态页面 
# https://easyengine.io/tutorials/nginx/status-page/

enable=true
regex=\/usr\/sbin\/nginx
refresh=60
one_line=false
status_url=http://localhost/nginx_status
```
<!--rehype:className=wrap-text-->

导出统计服务
---

### CSV

```sh
$ glances --export csv \
   --export-csv-file /tmp/glances.csv \
   --quiet
```

可以将统计数据导出到 CSV 文件

### JSON

```sh
$ glances --export json \
   --export-json-file /tmp/glances.json
```

可以将统计信息导出到 JSON 文件

### Cassandra
<!--rehype:wrap-class=row-span-2-->

您可以将统计数据导出到 Cassandra 或 Scylla 服务器

```ini
[cassandra]
host=localhost
port=9042
protocol_version=3
keyspace=glances
replication_factor=2
table=localhost
```

并运行 Glances：

```sh
$ glances --export cassandra
```

数据模型如下：

```sql
CREATE TABLE <table> (plugin text, time timeuuid, stat map<text,float>, PRIMARY KEY (plugin, time))
```

### Graph
<!--rehype:wrap-class=col-span-2-->

```ini
[graph]
# --export graph 选项的配置
# 设置创建图形（.svg 文件）的路径
# 可以通过 --graph-path 命令行选项覆盖
path=/tmp
# 可以通过设置自动生成图表
# generate_every 为一个非零值，对应于之间的秒数
# 两代。将其设置为 0 以禁用图形自动生成。
generate_every=60
# 请参阅 Pygal lib 文档中的以下配置键定义
# http://pygal.org/en/stable/documentation/index.html
width=800
height=600
style=DarkStyle
```

并运行 Glances：

```sh
$ glances --export graph \
      --export-graph-path /tmp
```

### CouchDB

您可以将统计数据导出到 CouchDB 服务器

```ini
[mongodb]
host=localhost
port=27017
db=glances
user=root
password=example
```

并运行 Glances：

```sh
$ glances --export mongodb
```

### InfluxDB
<!--rehype:wrap-class=col-span-2 row-span-4-->

您可以将统计数据导出到 InfluxDB 服务器（时间序列服务器）

测量 | 字段 | 标签
:-- | -- | --
cpu | user system iowait… |  hostname
network | read_bytes write_bytes time_since_update…  | hostname disk_name
diskio | rx tx time_since_update…  | hostname interface_name
docker | cpu_percent memory_usage…  | hostname name
gpu | proc mem temperature…  | hostname gpu_id
<!--rehype:className=show-header-->

#### InfluxDB （最高版本 1.7.x）

```ini
[influxdb]
host=localhost
port=8086
protocol=http
user=root
password=root
db=glances
# 所有测量名称都会添加前缀
# Ex: prefix=foo
#     => foo.cpu
#     => foo.mem
# 您还可以使用动态值
#prefix=foo
# 将为所有测量添加以下标签
# 您还可以使用动态值
# 注意：主机名始终作为标签添加
#tags=foo:bar,spam:eggs,domain:`domainname`
```

并运行 Glances：

```sh
$ glances --export influxdb
```

#### InfluxDB v2（来自 InfluxDB v1.8.x/Flux 和 InfluxDB v2.x）

```ini
[influxdb2]
host=localhost
port=8086
protocol=http
org=nicolargo
bucket=glances
token=EjFUTWe8U-MIseEAkaVIgVnej_TrUpDy==
# 设置两个导出之间的间隔（以秒为单位）
# 如果时间间隔设置为 0，
# 则使用 Glances 刷新时间（默认行为）
#interval=0
# 将为所有测量名称添加前缀
# Ex: prefix=foo
#     => foo.cpu
#     => foo.mem
# 您还可以使用动态值
#prefix=foo
# 将为所有测量添加以下标签
# 您还可以使用动态值.
# 注意：主机名始终作为标签添加
#tags=foo:bar,spam:eggs,domain:`domainname`
```

并运行 Glances：

```sh
$ glances --export influxdb2
```

### Elasticsearch

可以将统计数据导出到 Elasticsearch 服务器

```ini
[elasticsearch]
host=localhost
port=9200
index=glances
```

并运行 Glances：

```sh
$ glances --export elasticsearch
```

### MQTT

您可以将统计信息导出到 `MQTT` 服务器

```ini
[mqtt]
host=localhost
port=883
tls=true
user=glances
password=glances
topic=glances
topic_structure=per-metric
```

并运行 Glances：

```sh
$ glances --export mqtt
```

### MongoDB

```ini
[couchdb]
host=localhost
port=
user=root
password=example
db=glances
```

并运行 Glances：

```sh
$ glances --export couchdb
```

### OpenTSDB

```ini
[opentsdb]
host=localhost
port=4242
prefix=glances
tags=foo:bar,spam:eggs
```

并运行 Glances：

```sh
$ glances --export opentsdb
```

### Kafka
<!--rehype:wrap-class=col-span-2 row-span-3-->

您可以将统计信息导出到 Kafka 服务器

```ini
[kafka]
host=localhost
port=9092
topic=glances
#compression=gzip
# Tags will be added for all events
#tags=foo:bar,spam:eggs
# You can also use dynamic values
#tags=hostname:`hostname -f`
```

并运行 Glances：

```sh
$ glances --export kafka
```

内存插件的记录示例：

```py
ConsumerRecord(topic=u'glances', partition=0, offset=1305, timestamp=1490460592248, timestamp_type=0, key='mem', value=u'{"available": 2094710784, "used": 5777428480, "cached": 2513543168, "mem_careful": 50.0, "percent": 73.4, "free": 2094710784, "mem_critical": 90.0, "inactive": 2361626624, "shared": 475504640, "history_size": 28800.0, "mem_warning": 70.0, "total": 7872139264, "active": 4834361344, "buffers": 160112640}', checksum=214895201, serialized_key_size=3, serialized_value_size=303)
```
<!--rehype:className=wrap-text-->

使用 Kafka Glances 插件的 Python 代码示例：

```py
from kafka import KafkaConsumer
import json

consumer = KafkaConsumer('glances', value_deserializer=json.loads)
for s in consumer:
  print(s)
```

### Prometheus

```ini
[prometheus]
host=localhost
port=9091
prefix=glances
labels=src:glances
```

并运行 Glances：

```sh
$ glances --export prometheus
```

### RabbitMQ

```ini
[rabbitmq]
host=localhost
port=5672
user=glances
password=glances
queue=glances_queue
#protocol=amqps
```

并运行 Glances：

```sh
$ glances --export rabbitmq
```

### RESTful
<!--rehype:wrap-class=row-span-2-->

```ini
[restful]
# --export-restful 选项的配置
# 例如，导出到 http://localhost:6789/
host=localhost
port=6789
protocol=http
path=/
```

URL语法

```
http://localhost:6789/
|      |         |   |
|      |         |   path
|      |         port
|      host
protocol
```

并运行 Glances

```sh
$ glances --export restful
```

### ZeroMQ
<!--rehype:wrap-class=row-span-2-->

```ini
[zeromq]
host=127.0.0.1
port=5678
prefix=G
```

并运行 Glances

```sh
$ glances --export zeromq
```

以下是订阅 Glances 统计数据的简单 Python 客户端：

```py
import json
import zmq

context = zmq.Context()

subscriber = context.socket(zmq.SUB)
subscriber.setsockopt(zmq.SUBSCRIBE, 'G')
subscriber.connect("tcp://127.0.0.1:5678")

while True:
    _, plugin, data_raw = subscriber.recv_multipart()
    data = json.loads(data_raw)
    print('{} => {}'.format(plugin, data))

subscriber.close()
context.term()
```

### Riemann

```ini
[riemann]
host=localhost
port=5555
```

并运行 Glances

```sh
$ glances --export riemann
```

### StatsD

```ini
[statsd]
host=localhost
port=8125
prefix=glances
```

并运行 Glances

```sh
$ glances --export statsd
```

另见
----

- [Glances 官方文档](https://nicolargo.github.io/glances/) _nicolargo.github.io_
