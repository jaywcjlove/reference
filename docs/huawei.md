Huawei 网络设备备忘清单
===

本清单提供了对 Huawei 网络设备的入门简要概述，以及 Huawei 网络设备常用命令示例

基本知识
---

### VRP

是华为数据通信产品的通用网络操作平台，可通过它对设备进行操作

可进行简化输入，输入命令时，若不记得，可通过命令行获取相关提示

例如 `undo in en` 取消系统信息显示，完整命令为 `undo info-center enable`

如果简写有歧义，那么需要输入更完整的部分。

### 视图
<!--rehype:wrap-class=col-span-3-->

视图（View）是指命令行界面（CLI）的操作层级，不同视图可执行不同范围的命令。

|    视图   | 进入方式                                                | 说明                                 |
| :-----: | :-------------------------------------------------- | :--------------------------------- |
|   用户视图  | 登录设备后默认进入                                           | 可执行监控、查看信息等命令（如 `display version`） |
|   系统视图  | `system-view`                                       | 可执行全局配置命令                          |
|   接口视图  | `interface 接口名`（如 `interface GigabitEthernet0/0/1`） | 用于配置接口相关参数（IP、速率、VLAN等）            |
|  ACL 视图 | `acl 编号`（如 `acl 3000`）                              | 用于定义访问控制规则                         |
| VLAN 视图 | `vlan VLAN_ID`（如 `vlan 10`）                         | 用于创建、修改或删除 VLAN                    |
| OSPF 视图 | `ospf 进程号`（如 `ospf 1`）                              | 用于配置 OSPF 动态路由                     |
|  AAA 视图 | `aaa`                                               | 用于配置认证、授权与计费                       |
<!--rehype:className=show-header-->

---

```txt
用户视图
  └── system-view （系统视图）
        ├── interface GigabitEthernet0/0/1 （接口视图）
        ├── vlan 10 （VLAN视图）
        ├── acl 3000 （ACL视图）
        ├── ospf 1 （OSPF视图）
        └── aaa （AAA视图）
```

基本操作
---

### 系统信息
<!--rehype:wrap-class=row-span-3-->

#### 查看信息

```shell
display version # 查看版本信息
display current-configuration # 查看当前配置
display mac-address # 查看 mac 地址
```

#### 重命名设备

在系统视图下：`sysname RENAME`

#### 切换语言

```sh
# 用户视图下
language-mode [English, Chinese]
```

#### 设置标题

```shell
header login information 信息 # 载入时信息
header shell information 信息 # 远程时信息
```

#### 取消调试信息

```shell
undo terminal monitor
```

&nbsp;

### 撤销操作
<!--rehype:wrap-class=row-span-2-->

- 可用于恢复默认配置
- 可用于禁用某些功能
- 可用于删除某些配置

```shell
# 恢复默认名称
undo sysname
# 禁用信息显示
undo in en
# 删除接口配置
undo ip address
```

#### 恢复出厂设置

`reset saved-configuration`

### 历史命令
<!--rehype:wrap-class=row-span-1-->

使用上箭头或 ctrl+p 可访问上一命令

使用下箭头或 ctrl+n 可访问下一命令

默认保存10条命令

#### 显示历史命令

`display history-command`

### 设置系统时钟

```shell
# 在用户视图下
# 为保证与其他设备协调工作需要配置系统时钟
clock datetime 12:00:00 2020-02-02 # 时间
clock timezone BJ add 08:00:00 # 时区
```

### mac 地址
<!--rehype:wrap-class=col-span-2-->

```shell
# 添加 mac 地址
# MAC-Address mac 地址
# e0/0/0 自定义接口
# VlanID 自定义 vlanid
mac-address static MAC-Address e0/0/0 vlan VlanID

# 清除
reset arp all
```

### 退出

`quit` 命令用于从任意视图退回上一个视图

`return` 这是立刻退回至用户视图

### 保存配置

`save`

### 重启

```shell
reboot
```

登录管理
---

### STelnet 方式
<!--rehype:wrap-class=col-span-2 row-span-3-->

```shell
# 开启 ssh 服务
stelnet server enable

# 配置远程管理ip
int vlanif 1
ip add 192.168.1.254 24

# 生成本地 rsa 秘钥对
rsa local-key-pair create

# ssh 首次认证
ssh cl fi en
# ssh 用户验证类型 password
ssh user admin authentication-type password
# ssh 用户服务类型 stelnet
ssh user admin service-type stelnet
```

#### AAA 登录

```shell
aaa
# 本地用户 admin 密码密文 123456 等级 2
local-user admin password cipher 123456 privilege level 2
# 本地用户 admin 登录方式 ssh
local-user admin service-type ssh
quit
user-interface vty 0 4
authentication-mode aaa # 认证模式 aaa
protocol inbound ssh # 仅支持 ssh 协议
quit

# ssh用户端首次认证
ssh client first-time enable
```

#### 命令级别

- 0 参观级 只能进行如诊断工具命令（ping，tracert），部分 display 命令
- 1 监控级 主要用于系统维护，业务故障诊断，包括部分display，debugging命令
- 2 配置级 主要用于业务配置，包括路由，各个网络层次命令，可向用户提供直接网络服务
- 3 - 15 为管理级，涉及系统基本运行，系统支撑模块等

### Console 接口登录

#### 永不超时

```shell
user-interface console 0 # 进入 console 接口
idle-timeout 0 # 超时时间为 0 即 永不超时
```

#### 密码认证

```shell
user-interface console 0
authentication-mode password # 验证模式 密码认证
set authentication password simple 123456 # 设置验证密码 简单密码 123456
```

#### AAA认证

```shell
user-interface console 0
authentication-mode aaa # 验证模式 AAA认证
quit
aaa # 进入 aaa 模式
local-user admin password simple 123456 # 本地用户 admin 密码 简单密码 123456
local-user admin password cipher 123456 # 本地用户 admin 密码 密文密码 123456
local-user admin service-type terminal # 本地用户 admin 服务类型 终端
```

### Telnet 方式

```shell
# 开启 Telnet
telnet server enable
```

#### password 登录

```shell
user-interface vty 0 4
authentication-mode password # 认证模式 password
set authentication password simple 123456 # 设置 认证 密码 简单密码 123456
user privilege level 2 # 用户等级 2
idle-timeout 15 # 断连时间 15 分
```

#### AAA 登录

```shell
aaa
# 本地用户 admin 密码密文 123456 等级 2
local-user admin password cipher 123456 privilege level 2
# 本地用户 admin 登录方式 telnet
local-user admin service-type telnet
quit
user-interface vty 0 4
authentication-mode aaa # 认证模式 aaa
quit
```

### 远程 IP

```shell
# 远程管理 ip
int vlanif 1
ip add 192.168.1.254 24
# pc
192.168.1.1 24
```

接口配置
---

### 接口组
<!--rehype:wrap-class=col-span-2-->

```sh
# 组内配置会自动为组成员配置
port-group 1 # 创建接口组 1
group-member e0/0/2 to e0/0/8 # 划分组成员为 e0/0/2 - e0/0/8 即 2,3,4,5,6,7,8 接口
```

#### 接口模式

```shell
# access 普通模式 只能在某个 vlan 中通信
# trunk 中继器模式 可在任意 vlan 中通信
int e0/0/1
port link-type access # 接口模式为 access
port link-type trunk # 接口模式为 trunk
```

#### 接口带宽

```shell
# 接口每秒传输数据量
int e0/0/1
# 10Mbit/s
# 100Mbit/s
# Auto 自协商
speed 10 | 100 | Auto
# 关闭自协商
# 先关闭自协商再手动指定接口速率
undo negotiation auto
```

#### 接口双工模式

```shell
# 接口协商模式不一致会导致异常
int e0/0/1
# full 全双工 同时收发数据
# half 半双工 同时只能接收或发送数据一个操作
duplex full | half
# 先关闭自协商再手动指定
```

#### 配置 trunk

```sh
interface g0/0/1 # 进入接口
port link-type trunk # 接口模式为 trunk
port trunk allow-pass vlan VlanId | all # all 为通过所有vlan, VlanId 为指定 vlan，多个vlan以空格隔开
```

### vlan 配置

#### 查看 vlan

`display vlan`

#### 创建 vlan

```sh
vlan VlanId # VlanId 自定义vlanid 1 ~ 4094
description VLANNAME # VLANNAME 自定义的 vlan 名称

undo vlan VlanId # 删除vlan

vlan batch 10 20 30 # 创建 10,20,30 vlan
vlan batch 10 to 30 # 创建 10 ~ 30 vlan
```

#### 分配 vlan

```sh
interface E0/0/1 # 进入接口
port link-type access # 接口模式设为 access
port default vlan 10 # 划分到 vlan 10 中

port-group 1 # 创建接口组 1
group-member e0/0/5 to e0/0/8 # 组成员为 e0/0/5 - e0/0/8 .... 5,6,7,8
port link-type access # 组成员接口模式设为 access
port default vlan 10 # 组成员划分到 vlan 10 中
```

交换机配置
---

### 链路聚合
<!--rehype:wrap-class=col-span-2-->

又称接口汇聚，指两台交换机之间物理上多个接口链接起来，将多条链路聚合为一条逻辑链路

从而增加链路宽带，使链路之间可以互相冗余备份

```shell
interface eth-trunk 1 # 创建 id 为 1 的 eth-trunk 聚合接口
quit
interface g0/0/1
eth-trunk 1 # 加入 g/0/01 到 eth-trunk 1 中
# 添加完毕成员后
# eth-trunk 接口下
port link-type trunk # 设置接口链路类型为 trunk

# 在聚合接口下添加成员
trunkport g0/0/1
trunkport g0/0/1 to g0/0/2
# 删除用 undo
```

### STP (Spanning Tree Protocol)
<!--rehype:wrap-class=col-span-2-->

即生成树协议

可将有环路的物理拓扑变为无环路的逻辑拓扑，从而为网络提供安全机制，使得冗余拓扑中不会产生交换环路问题

```shell
# 三层交换机
# 首先需要创建 vlan
# 划分接口给 vlan
# 所有与其他交换机相连接口需要做 trunk 放通划分 vlan

# 二层交换机
# 建立 vlan
# 客户机接口划分默认 vlan
# 与三层交换机相连接口做 trunk 放通 vlan

# 开启 STP
# 系统视图下
# 交换机都要配置
# stp 开启
stp enable
# stp 模式 stp
stp mode stp

# # 指定根交换机
# 配置优先级
# 系统视图下
# 优先级为 0
# 优先级值在 0 ~ 65535 默认 32768
# 要求设为 4096 倍数
stp priority 0

# 使用命令
# 系统视图下
# 需要先删除配置优先级
# 根交换机
stp root primary
# 备用根交换机
stp root secondary
# #
```

### RSTP（Rapid Spanning Tree Protocol）
<!--rehype:wrap-class=col-span-2-->

即快速生成树协议

发生网络故障时，STP 的网络拓扑结构会发生变化，网络收敛需要较长时间，RSTP 改进了 STP，收敛速度可缩短至一秒内

与 STP 配置基本相同

不同点：

```shell
# 系统视图下
stp enable
# stp mode stp 变更
stp mode rstp

# 配置边缘接口
# 接口视图下
# 将该接口设置为边缘接口
# 节省接口从初始启动到转发状态的时间间隔
# 默认不参与生成树计算
# 不经历转发延迟
# 关闭或激活不触发 RSTP 拓扑变更
# 通常将与终端设备连接的接口设置
stp edged-port enable
```

### DHCP（Dynamic Host Configuration Protocol）
<!--rehype:wrap-class=col-span-2-->

即动态主机配置协议

可有规划的划分 IP 地址，也可避免用户私设 IP 引起的地址冲突

三层交换机可充当 DHCP 服务器，能动态分配 IP 地址及 DNS 服务地址等网络参数

可以使得用户零配置上网

```sh
# 二层交换机
# 首先创建 vlan
# 一个 vlan 代表一个地址池范围
# 然后划分接口配置默认 vlan
# 进入与三层交换机相连的接口做 trunk 并放通 vlan

# # 三层交换机
# 创建 vlan
# 进入与二层交换机相连的接口做 trunk 并放通 vlan

# 开启 DHCP
# 系统视图下
dhcp enable

# 系统视图下
# 建立地址池 V10 V10 为自定义的合法地址池名称
ip pool V10
# 发布网段 10.10.10
# 掩码 255.0.0.0
network 10.10.10.0 mask 255.0.0.0
# 配置网关
gateway-list 10.10.10.254
# 设置租期为 8 天
lease 8
# dns 服务器 5.5.5.5
dns-list 5.5.5.5
# 进入 vlan 视图
# 为 vlan 配置对应的网关地址及掩码
# 配置设备指定接口采取全局地址
# vlan 视图下
# dhcp 配置选择 全局配置
dhcp select global
# dhcp 配置选择 接口配置
# 接口配置与全局配置基本相同
# 此 dhcp 配置在接口中
dhcp select interface
# #

# 保留地址
# 保留了 5 - 15 这个范围的 IP 地址
excluded-ip-address 10.10.10.5 10.10.10.15
```

路由配置
---

### 查看路由
<!--rehype:wrap-class=col-span-3-->

```sh
# 查看路由表
display ip routing-table
```

### VRRP (Virtual Router Redundancy Protocol)
<!--rehype:wrap-class=col-span-2 row-span-4-->

即虚拟路由器冗余协议

是一种选择协议，可将虚拟路由器责任动态分配至局域网内的一台 VRRP 路由器

控制虚拟路由器 IP 地址的 VRRP 路由器为 Master 路由器，负责将数据包进行分发

一旦 Master 不可用，可提供动态的故障转移机制

由 Backup 路由器代替 Master路由器故障时的工作

允许虚拟路由器的 IP 地址作为 终端主机的默认第一跳路由

优势为更高的默认路由的可用性，无须在终端主机上配置动态路由或路由发现协议

```sh
# 二层交换机
# 创建 vlan
# 划分接口默认 vlan
# 与 三层交换机 相连的接口配置 trunk 放通 vlan

# # 三层交换机
# 创建 vlan
# 与 二层交换机 相连的接口配置 trunk 放通 vlan
# 配置 vlan 的 IP 地址

# 配置 VRRP
# vlan 视图下
# 配置虚拟接口 IP
# 与当前 vlan ip 同段
# 一台虚拟路由器可拥有多个 IP 地址
# vrid 虚拟路由器的标识，相同的 vrid 的路由器组成一台虚拟 Master 路由器
vrrp vrid 1 virtual-ip 192.168.100.254
# 配置优先级
# 根据优先级确定虚拟路由器中每台路由器的地位
vrrp vrid 1 priority 150
# 配置抢占模式和延迟时间
# 非抢占模式
# Master 无故障， Backup 即使优先级比 Master 高也不会成为 Master
# 抢占模式
# Backup 优先级比 Master 高，则代替 Master
vrrp vrid 1 preempt-mode timer delay 5
# 将 g/0/23 配置为跟踪接口
vrrp vrid 1 track interface g0/0/23

# 查看 VRRP 服务
display vrrp brief
# 1 为 vrrp id
display vrrp 1
# #
```

### 单臂路由

划分 vlan 之后，vlan 是无法互通的，但是使用单臂路由可以解决此问题。

```sh
# 首先交换机划分 vlan
# 划分接口默认 vlan
# 与路由器相连接口进行 trunk 放通 vlan

# 假设路由器与交换机连接的接口是 g0/0/0
# 创建子接口
int g0/0/0.1
# 配置 ip 地址
# 封装 802.1Q 协议
# 假设当前接口对应的 vlan 是 vlan 10
dot1q termination vid 10
# 开启 arp 广播
# 不配置会导致子接口不主动发送 arp 报文
# 以及对外转发 ip 报文
arp broadcast enable
```

### 静态路由

适用于规模较小，不经常变动，简单的网络环境

```sh
# 首先配置交换机
# 创建 vlan 并划分接口默认 vlan
# 配置 vlan 的 ip 地址

# 路由器配置相连接口 ip
# 添加 静态路由
# 所有不能直达的网络都需要添加静态路由
ip route-static 目标网段 掩码 下一跳地址
```

### 默认路由

默认路由与静态路由配置基本相同。

唯一不同的就是路由的配置。

```bash
ip rou 0.0.0.0 0.0.0.0 下一跳地址
```

### 浮动路由

就是路由器之间多个接口相连，并配置接口优先级。

配置与静态，默认路由基本相同。

```bash
ip rou 目标网段 掩码 下一跳地址
ip rou 目标网段 掩码 下一跳地址 pr 权重
```

### OSPF
<!--rehype:wrap-class=row-span-2 col-span-2-->

首先配置完毕相关接口及IP。

#### 单域

```bash
# 系统视图下
# 1 是 ospf 进程号
ospf 1
# 0 是区域号 0 是骨干区域
area 0
# 发布网段
# 网段需要根据掩码
net x.x.x.x 反码
```

#### 多域

与单域配置基本相同，只是需要划分多个 OSPF 区域。

需要注意，路由器相连接口需要划分到一个区域。

```bash
# 系统视图下
ospf 1
area 0
# 发布当前区域的网段
net x.x.x.x 反码
# 切换区域
area 1
# 发布当前区域的网段
net x.x.x.x 反码
```

### 动态路由 RIP

配置基本相同。

```bash
# 系统视图下
# 进入 rip 视图
rip
# 切换版本 2
v 2
# 自动汇总
summary always
# 发布网段 (需要根据掩码)
# 如 掩码 255.0.0.0
# 则 发布 x.0.0.0
net x.x.x.x
```

### 路由重分发

大型网络中，有时有多种路由协议共存，此时需要进行路由重分发。

```bash
# 首先完成相关路由配置
# 假设 Router 左侧为 RIP 协议
# 右侧为 OSPF 协议
# 左右路由分别是 1.1.1.1 和 2.2.2.2
# 因为 左侧为 RIP 协议
# 因此需要先配置 RIP 发布 1.1.1.0 的网段
# 右侧 OSPF 协议相同

# Router 中
# 进入 rip 中
# 导入 ospf 1 的路由
import-route ospf 1
# 进入 ospf
# 导入 rip 1 的路由
import-route rip 1
```

网络安全
---

### 接口安全
<!--rehype:wrap-class=col-span-2-->

```shell
# 接口视图下
# 开启接口安全
port-security enable
# 设置当前接口只能由 MAC 地址 MAC-ADDRESS 的设备访问
port-security mac-address sticky MAC-ADDRESS
# 设置安全 MAC 地址最大数为 1
port-security max-mac-num 1
# 设置其他非安全 MAC 地址数据帧处理动作为 关闭接口
port-security protect-action shutdown
# 设置安全 MAC 地址老化时间为 300s
port-security aging-time 300
```

### 访问控制列表（Access Control List）
<!--rehype:wrap-class=col-span-3-->

由一系列规则组成的集合，通过规则对报文分类处理。

通常由若干条 deny（拒绝） | permit（允许） 语句组成。

### 基本访问控制列表

范围只能在 2000 - 2999。

```shell
# 系统视图下
acl 2000
# 规则 拒绝 源 IP地址 反码
# deny 拒绝 permit 允许
rule deny source IP-ADDRESS MASK
# 接口视图下
# 传输过滤 输出 规则 2000
# outbound 输出
# inbound 输入
traffic-filter outbound acl 2000
```

### 高级访问控制列表
<!--rehype:wrap-class=col-span-2-->

范围 3000 - 3999。

需要尽量应用在靠近源地址的接口，允许某个网段后需要拒绝其他网段。

对于 FTP 须指定 FTP（21）和 FTP-DATA（20）。

```shell
# 系统视图下
acl 3000
# 规则 id5 拒绝 tcp 源 IP-ADDRESS 反码 访问目标 IP-ADDRESS 反码 目标端口 范围 20 21
rule 5 deny tcp source IP-ADDRESS MASK destination IP-ADDRESS MASK destination-port range 20 21
#规则 id10 允许 tcp 源 IP-ADDRESS 反码 访问目标 IP-ADDRESS 反码 目标端口 等于 80
# gt 大于
# lt 小于
rule 10 permit tcp source IP-ADDRESS MASK destination IP-ADDRESS MASK destination-port eq 80
```
