Systemd
===

最常用的 [Systemd](https://systemd.io/) 命令备忘单快速参考

命令
----

### 查看系统信息

:- | -
:- | -
`systemctl list-dependencies` | 显示单元的依赖关系
`systemctl list-sockets` | 列出套接字和激活的内容
`systemctl list-jobs` | 查看活动的 systemd 作业
`systemctl list-unit-files` | 查看单元文件及其状态
`systemctl list-units` | 显示单位是否已加载/活动
`systemctl get-default` | 列出默认目标（如运行级别）
<!--rehype:className=style-list-->

### 使用服务
<!--rehype:wrap-class=row-span-2-->

:- | -
:- | -
`systemctl stop service` | <red>停止</red>正在运行的服务
`systemctl start service` | 启动服务
`systemctl restart service` | 重新启动正在运行的服务
`systemctl reload service` | 重新加载服务中的所有配置文件
`systemctl daemon-reload` | 必须运行以重新加载更改的单元文件
`systemctl status` | service 查看服务是否正在运行/启用
`systemctl --failed` | 显示未能运行的服务
`systemctl reset-failed` | 将任何单位从失败状态重置
`systemctl enable service` | 使服务在启动时启动
`systemctl disable service` | 禁用服务 - 不会在启动时启动
`systemctl show service` | 显示服务（或其他单元）的属性
`systemctl edit service` | 创建片段以放入单元文件
`systemctl edit --full service` | 编辑整个单元文件以进行服务
`systemctl -H host status network` | 远程运行任何 systemctl 命令
<!--rehype:className=style-list-->

### 改变系统状态

:- | -
:- | -
`systemctl reboot` | 重启系统（reboot.target）
`systemctl poweroff` | 关闭系统（poweroff.target）
`systemctl emergency` | 进入紧急模式（emergency.target）
`systemctl default` | 返回默认目标（multi-user.target）
<!--rehype:className=style-list-->

### 查看日志消息

:- | -
:- | -
`journalctl` | 显示所有收集的日志消息
`journalctl -u network.service` | 查看网络服务消息
`journalctl -f` | 关注出现的消息
`journalctl -k` | 仅显示内核消息
<!--rehype:className=style-list-->

另见
---

- [Systemd 官网](https://systemd.io/) _(systemd.io)_
- [Systemd Cheat Sheet](https://access.redhat.com/sites/default/files/attachments/12052018_systemd_6.pdf) _(access.redhat.com)_