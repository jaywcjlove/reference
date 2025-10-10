Cisco 网络设备备忘清单
===

本清单提供了 Cisco 网络设备常用命令示例

清单内容基于 [**Cisco Packet Tracer**](https://www.netacad.com/cisco-packet-tracer) 进行

模式
---

### 模式简介
<!--rehype:wrap-class=col-span-3-->

是指命令行界面的操作层级，不同模式可执行不同范围的命令

以下列出了一些基本的模式

| 模式 | 命令提示符 | 进入方式 |
| :-: | :-: | :-: |
| 用户模式 | `用户名称>` | 默认进入 |
| 特权模式 | `用户名称#` | 通过 enable 进入 |
| 全局配置模式 | `用户名称(config)#` | 通过 config terminal 进入 |
| VLAN 模式 | `用户名称(config-vlan)#` | 通过 vlan vlan-ID 进入 |
| 接口配置模式 | `用户名称(config-if)#` | 通过 interface 接口 进入 |
| Line 模式 | `用户名称(config-line)#` | 通过 line vty 端口 进入 |
<!--rehype:className=show-header-->

### 进入特权模式

```shell
enable # 进入到特权模式
```

### 进入全局模式

```shell
configure terminal # 进入到全局模式
```

### 进入 line 模式

```shell
line vty 0 # 进入 line 模式 的 0 端口
```

### 退回上级模式

退回到上一级模式， 如全局模式退到特权模式，特权模式退到普通模式

```shell
exit
```

### 强制执行

在任何模式下均可

```shell
do ~ # 强制执行 ~
```

### 取消命令

```shell
no ~ # 取消命令 ~
```

基本操作
---

### 修改主机名称

需要在全局模式下进行

```shell
hostname NAME # 修改名称为 NAME
```

### 查看设备配置

需要在特权模式下进行

```shell
show running-config # 查看设备配置
```

### 关闭端口

需要在接口配置模式下进行

```shell
shutdown ~ # 关闭端口 ~
```

### 设置进入特权模式密码
<!--rehype:wrap-class=col-span-2-->

需要在全局模式下进行

#### 明文密码

```shell
enable password PASSWORD # 设置进入 特权模式 的密码为 PASSWORD
```

#### 密文密码

```shell
enable secret PASSWORD # 设置进入 特权模式 的密码为 PASSWORD
```

vlan 配置
---

### 创建并进入 vlan

需要在全局模式下进行

vlan-ID 可以是任何符合 vlan 范围的数字，如果 vlan 存在，则直接进入

```shell
vlan vlan-ID
```

### 修改 vlan 名称

在进入 vlan 后，将当前 vlan 名称变更为 NAME

```shell
name NAME
```

### 取消 vlan

需要离开 vlan 后，在全局模式下才能取消 vlan

```shell
no vlan vlan-ID
```

### 配置 vlan trunk
<!--rehype:wrap-class=col-span-2-->

#### 首先创建需要配置的对应 vlan

```sh
vlan vlan-id
```

#### 添加端口到 vlan 当中

```sh
# 进入 范围在 1 - 10 的所有接口
interface range f0/1 - 10
# 进入 范围在 1 - 10 的所有接口 和 单独的 f0/12 接口
interface range f0/1 - 11, f0/12
# 进入 单个 接口 f0/1
interface f0/1
```

#### 进入接口后

```sh
# vlan-id 为 需要将 当前接口 添加到 的 vlan id，为数字
switchport access vlan vlan-id
```

#### 进入两个交换机相连接口

```sh
# 设置模式 trunk
switchport mode trunk
```

#### 在 trunk 中 添加或删除 vlan

```sh
# 首先需要进入 配置 trunk 的接口
switchport trunk allowed vlan add vlan-id
switchport trunk allowed vlan remove vlan-id
```

#### 查看 trunk 配置

```sh
# 特权模式下
# interface-id 为配置 trunk 的接口名称
show interfaces interface-id switchport
```

接口操作
---

### 进入接口

需要在全局模式下进行

#### 单个接口

```shell
# 进入单个接口
# 进入接口 f0/1
interface f0/1
```

#### 多个接口

```shell
# 进入接口 f0/1 直到 f0/8 和 f0/10
interface range f0/1 - 8, f0/10
```

### 添加接口到 vlan 中

将进入到的当前接口添加到对应 vlan-ID 的 vlan 中

```shell
switchport access vlan vlan-ID
```

### 将接口从 vlan 中移出

取消添加到对应 vlan-ID 的 vlan 的接口

```shell
no switchport access vlan vlan-ID
```

设备调试
---

### 配置 console 口令

设置进入终端的密码

```shell
# 配置端口
line console 0
# 设置密码为 123
password 123
# 载入
login
```

### 配置远程
<!--rehype:wrap-class=row-span-2 col-span-2-->

#### 配置远程用户

```shell
# 0 为一个用户
# 0 - 2 为 0， 1， 2 三个用户
# 0 - 15 为 16 个用户
line vty 0
line vty 0 - 2
line vty 0 - 15
# 配置密码为 123456
password 123456
# 载入设置
login
```

#### 配置接口

```shell
# 进入 vlan 1
interface vlan 1
# 配置 ip 地址
# 192.168.100.254 为需要配置的 ip 地址
# 255.255.255.0 为子网掩码
ip address 192.168.100.254 255.255.255.0
# 启动远程
# no 为取消 ~
# shutdown 为关闭
# no shutdown 就是取消关闭，即启动
no shutdown
```

#### 连接远程

```shell
# 需要先配置远程的电脑 ip 地址
# 需要与 配置的 远程 ip 地址频段一致
# 如 远程 ip 地址为 192.168.100.254
# 电脑 ip 地址需要与 远程 ip 地址在同一频段 即 192.168.100.~
# 然后通过在 电脑 的命令提示行使用 ping 命令查看是否连接成功
# 连接成功之后通过 telnet 访问远程
telnet 192.168.100.254
```

路由配置
---

### 静态路由
<!--rehype:wrap-class=col-span-2-->

```sh
# 首先需要配置 IP 地址
## 电脑配置
### IP地址配置 （假设为：192.168.1.1）
### 默认网关 （需与IP地址同段，假设为：192.168.1.254）
## 路由器配置
### 首先进入与电脑连接的接口 （假设为 f0/0）
### 需在 全局模式 下
interface f0/0
### 进入接口后
### 在 接口模式 下
ip address 192.168.1.254 255.255.255.0
### 192.168.1.254 为 在 电脑所配置的默认网关
### 255.255.255.0 为 子网掩码
### 然后启动接口 否则无法连接
no shutdown
### 进入两个路由器相连的接口 （假设为 s1/0）
interface s1/0
### 同样需要配置 IP地址
ip address 10.10.10.1 255.0.0.0
### 然后配置时钟
clock rate 64000
### 64000 为 时钟速率
### 同时也需要启动接口
no shutdown

# 配置跳转路由
## 在 全局模式 下
ip route 192.168.1.0 255.255.255.0 10.10.10.1
### 其中 192.168.1.0 为 需要到达的目标 IP地址
### 第四位 0 表示无指定值，即 1 - 254 的值都能匹配
### 255.255.255.0 为 子网掩码
### 目标地址有几位明确的，就需要几位255
### 10.10.10.1 为 下一跳地址
### 下一跳可以理解为 公交车的下一站
### 而目标 IP地址则为公交车的终点站
```

### 默认路由
<!--rehype:wrap-class=col-span-2-->

```sh
# 首先需要清空所有路由
## 然后重新配置
ip route 0.0.0.0 0.0.0.0 0.0.0.0

# 第一个 0.0.0.0 为 目标 IP地址 固定不变
## 0 表示无指定目标，因此匹配所有 IP地址

# 第二个 0.0.0.0 为 目标地址的子网掩码 固定不变
## 目标 IP地址 有几位不为 0 则有几位是 255
## 如：目标 IP地址 为：10.10.0.0
## 则 子网掩码为 255.255.0.0

# 第三个 0.0.0.0 为 下一跳的 IP地址 随下一跳地址变化
## 如：下一跳地址为 10.10.10.1 则 命令为
ip route 0.0.0.0 0.0.0.0 10.10.10.1
```

### 单臂路由
<!--rehype:wrap-class=col-span-2-->

```sh
# 首先需要在 PC 配置IP和网关 （假设分别为 192.168.1.1、192.168.1.254）
# 然后进入交换机创建 vlan （假设 vlan 为 1）
vlan 1
## 并将与PC相连的接口 添加到 vlan 当中 （假设接口为 f0/1）
interface f0/1
## 配置接口为access口
switchport mode access
switchport access vlan 1
## 然后在于路由器相连的接口中放通vlan （假设为 g0/0接口）
int g0/0
## 设置 trunk
switchport mode trunk
## 放通所有vlan
switchport trunk allowed vlan all
# 进入路由器
## 首先需要开启
### 需要进入与交换机相连的接口 （假设为 f0/1）
interface f0/1
### 开启接口
no sh
## 然后进入 f0/1.1 (f0/1.1 为 f0/1 的子接口)
int f0/1.1
## 配置封装 trunk 到 vlan 中 （假设 vlan 为 1）
encapsulation dot1Q 1
## 随后配置 IP 和 掩码
ip address 192.168.1.254 255.255.255.0
```

### 动态路由
<!--rehype:wrap-class=col-span-2-->

```sh
# 首先配置电脑IP及网关 （假设为 192.168.1.1、192.168.1.254）
# 然后配置路由器
## 进入与电脑相连的接口 （假设为 f0/1），开启，并配置IP地址
int f0/1
no sh
ip address 192.168.1.254 255.255.255.0
## 然后进入与其它路由器相连的接口 （假设为 f0/0），开启
## 并为接口配置IP （假设为 10.10.10.1）
int f0/0
ip address 10.10.10.1 255.0.0.0
## 然后回到全局模式开始RIP配置
route rip
network 192.168.1.0
## network 后面跟的IP地址为与当前路由器所相连的接口所配置的IP，0表示全网段
## 即 network 后，所有在 192.168.1.1 - 254 这个范围的IP都能联通
```

### OSPF 配置
<!--rehype:wrap-class=col-span-2-->

```sh
# 添加环回地址
## 进入环回接口
interface loopback 0
## 配置ip
ip address IP-Address subnet-mask
## 配置 ospf 点对点
ip ospf network point-to-point

# OSPF 路由进程
## 进程号可自定义
## 用于识别当前路由器上的多个进程
router ospf 进程号
## 发布网段在区域
### 网段 如：192.168.10.~
### 网段可以是与子网地址，网络地址，接口地址...
### 正向掩码若为 255.0.0.0 则反向掩码为 0.255.255.255
### 255.255.255.192 - 0.0.0.63
### 区域号可自定义
network 网段 反向掩码 area 区域号
## 设置 router ID
### ID 为 IP地址
### 是在 OSPF区域当中唯一标识路由器的IP地址
### 优先选取最大的环回接口IP
### 若没有则选取最大物理接口IP
router-id ID
## 修改 接口 cost值
### OSPF 使用 cost值来决定最佳路径
### cost值类似权重值
### 需要首先进入对应接口当中
ip ospf cost cost值
## 配置 OSPF计时器
### TIME 为 时间 单位为 s
ip ospf hello-interval TIME(s)
ip ospf dead-interval TIME(s)
```

交换机配置
---

### VTP协议
<!--rehype:wrap-class=col-span-2-->

```sh
# 可以通过 VTP协议 在一台交换机上集中进行配置变更
# 所做的变更会自动传播到当前网络中的所有交换机上

# VTP 域
## 域内的每台交换机必须使用相同 VTP域名
## 一台交换机只能加入一个 VTP域
## 交换机必须是相连的，且之间须启用 Trunk 中继

# VTP 模式
## 服务器模式
vtp mode server
### 充当VTP服务器，控制它所在域中的VLAN生成和修改，并向外发送VTP通告
## 客户机模式
vtp mode client
### 此模式的交换机不允许增删VLAN，监听其它交换机的VTP通告，并修改对应配置
## 透明模式
vtp mode transparent
### 不参与VTP，可增删本地VLAN，但不向外通告，也不接受VTP通告修改自身VLAN数据库，可转发VTP通告

# 流程
## 首先创建一个 VTP服务器
vtp mode server
### 配置 VTP域名 为 VTP
vtp domain VTP
## 然后创建 VTP客户端
vtp mode client
### 需要在创建 VTP客户端前 先配置 trunk
### 进入当前交换机与 VTP服务器交换机 相连的接口 （假设为 f0/24）
int f0/24
switchport mode trunk
### VTP服务器交换机 与 当前交换机相连接口 在 f0/24 设 trunk 时自动变为 trunk
### 不需要再手动配置 trunk
### 并将客户端配置到 VTP 这个 VTP域名 下
vtp domain VTP

# VTP 相关命令
## 查看配置
do sh vtp status
## VTP 版本
vtp version versions
### VTP 版本号大的 VLAN信息 将覆盖 VTP版本号低的
## 设置VTP口令 为 VTPPASSWORD
vtp password VTPPASSWORD
### 只有在 域名和口令 相同的情况下 才会同步 vlan

```

### STP 协议
<!--rehype:wrap-class=col-span-2-->

```shell
# 概念
## RB（Root Bridge） 根网桥
### 网络中倒数的根，整个网络中只存在一个根
## RP（Root Port）根端口
## DP（design Port）指定端口

# 命令
## 查看STP的配置
show spanning-tree
## 查看 f0/0 端口状态
show spanning-tree interface f0/0
## 查看某个 vlan 下的 stp 配置信息
show spanning-tree vlan vlan-id
## 配置生成树模式为 STP 或 RSTP
spanning-tree mode pvst
spanning-tree mode rapid-pvst
## 配置交换机在 VLAN1 中的优先级
spanning-tree vlan 1 priority <0-61440>
## 配置为 vlan1 的根网桥
spanning-tree vlan root primary
## 配置为 vlan1 的次根网桥
spanning-tree vlan 1 root secondary
## 将 f0/0 接口在 vlan1 生成树的路径开销变更为 18
interface f0/0
spanning-tree vlan 1 cost 18
## 将 f0/0 接口在 vlan1 生成树的端口优先级变更为 16
interface f0/0
spanning-tree vlan 1 port-priority 16
```

### 三层交换机
<!--rehype:wrap-class=col-span-2-->

```shell
# 首先在三层交换机上启动路由
ip routing
# 然后配置vlan的ip地址
int vlan vlan-id
## 添加IP地址
ip address ip-address subnet-mask
## 启动当前接口
no sh
# 然后进入交换机与添加到vlan中的ip地址一致的终端相连的接口
## 将当前接口添加到赋予当前接口连接的终端ip地址一致的vlan中
```

### 三层交换机DHCP配置
<!--rehype:wrap-class=col-span-2-->

```sh
# 首先创建与连接的电脑终端数量一致的vlan
# 然后进入到与中介交换机相连的接口
## 使用trunk 放通创建的vlan
switchport trunk allowed vlan vlan-id/all
# 进入创建的vlan当中
int vlan vlan-id
## 配置当前vlan的IP为对应当前vlan的终端IP
ip address IP-Address subnet-mask
## 开启当前vlan接口
no sh
# 对 DHCP 地址池地址进行排除
## 排除的为vlan的ip地址
ip dhcp exculded-address IP-Address
# 创建DHCP地址池
## DHCP_AddressName 为可自定义的地址名称
ip dhcp pool DHCP_AddressName
## 设置当前DHCP地址池网段
### ip-address 为可自定义的ip地址
### subnet-mask 为可自定义的子网掩码
### 需要注意，子网掩码需要与对应vlan的子网掩码一致
### 否则无法接通
network ip-address subnet-mask
## 设置DNS DNS-Address 为可自定义的 dns 地址
dns-server DNS-Address
## 设置默认网关 IP-Address 为可自定义的IP地址
default-route IP-Address

# 进入中介交换机
## 创建与三层交换机相同的vlan
## 进入与三层交换机相连的接口
### 将接口模式设为 trunk 并 放通创建的vlan
### 可使用 all 代替全部vlan
switchport mode trunk
switchport trunk allowed vlan vlan-id,vlan-id...
## 进入与电脑终端相连的接口
### 将接口分配到指定ip的vlan下
### 最后在电脑终端IP配置为DHCP即可
```
