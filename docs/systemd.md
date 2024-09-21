Systemd 备忘清单
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
`systemctl get-default` | 列出默认目标(如运行级别)
<!--rehype:className=style-list-->

### 改变系统状态

:- | -
:- | -
`systemctl reboot` | 重启系统(reboot.target)
`systemctl poweroff` | 关闭系统(poweroff.target)
`systemctl emergency` | 进入紧急模式(emergency.target)
`systemctl default` | 返回默认目标(multi-user.target)
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
`systemctl show service` | 显示服务(或其他单元)的属性
`systemctl edit service` | 创建片段以放入单元文件
`systemctl edit --full service` | 编辑整个单元文件以进行服务
`systemctl -H host status network` | 远程运行任何 systemctl 命令
<!--rehype:className=style-list-->

### 查看日志消息
<!--rehype:wrap-class=col-span-2-->

:- | -
:- | -
`journalctl` | 显示所有收集的日志消息
`journalctl -u network.service` | 查看网络服务消息
`journalctl -f` | 关注出现的消息
`journalctl -k` | 仅显示内核消息

### SysVinit 到 Systemd
<!--rehype:wrap-class=col-span-3-->

SysVinit | Systemd | 说明
:- | - | -
`service SERVICE_NAME start` | `systemctl start SERVICE_NAME` | 用于启动服务(不重启持久)
`service SERVICE_NAME stop` | `systemctl stop SERVICE_NAME` | 用于停止服务(不永久重启)
`service SERVICE_NAME restart` | `systemctl restart SERVICE_NAME` | 用于停止然后启动服务
`service SERVICE_NAME reload` | `systemctl reload SERVICE_NAME` | 重新加载配置文件而不中断挂起的操作
`service SERVICE_NAME condrestart` | `systemctl condrestart SERVICE_NAME` | 如果服务已在运行，则重新启动
`service SERVICE_NAME status` | `systemctl status SERVICE_NAME` | 判断服务当前是否正在运行
`chkconfig SERVICE_NAME on` | `systemctl enable SERVICE_NAME` | 打开服务，以便在下次启动时启动，或其他触发器
`chkconfig SERVICE_NAME off` | `systemctl disable SERVICE_NAME` | 为下次重新启动或任何其他触发器关闭服务
`chkconfig SERVICE_NAME` | `systemctl is-enabled SERVICE_NAME` | 用于检查服务是否配置为在当前环境中启动
`chkconfig –list` | `systemctl list-unit-files –type=service` (or) <br/>`ls /etc/systemd/system/*.wants/` | 打印一个服务表，列出每个配置的运行级别打开或关闭
`chkconfig –list \| grep 5:on` | `systemctl list-dependencies graphical.target` | 打印启动到图形模式时将启动的服务表
`chkconfig SERVICE_NAME –list` | `ls /etc/systemd/system/*.wants/SERVICE_NAME.service` | 用于列出此服务配置为打开或关闭的级别
`chkconfig SERVICE_NAME –add` | `systemctl daemon-reload` | 在创建新服务文件或修改任何配置时使用
<!--rehype:className=show-header-->

### 目标运行级别
<!--rehype:wrap-class=col-span-3-->

SysVinit | Systemd | 说明
:- | - | -
`0` | `runlevel0.target`, `poweroff.target` | 停止系统
`1`, `s`, `single` | `runlevel1.target`, `rescue.target` | 单用户模式
`2`, `4` | `runlevel2.target`, `runlevel4.target`, `multi-user.target` | 用户定义/站点特定的运行级别。 默认情况下，与 3 相同
`3` | `runlevel3.target`, `multi-user.target` | 多用户，非图形。 用户通常可以通过多个控制台或通过网络登录
`5` | `runlevel5.target`, `graphical.target` | 多用户，图形。 通常具有运行级别 3 的所有服务以及图形登录
`6` | `runlevel6.target`, `reboot.target` | 重启
`emergency` | `emergency.target` | 应急外壳
<!--rehype:className=show-header-->

### 更改运行级别
<!--rehype:wrap-class=col-span-3-->

SysVinit | Systemd | 说明
:- | - | -
`telinit 3` | `systemctl isolate multi-user.target` <br/>OR `systemctl isolate runlevel3.target`<br/>OR `telinit 3` | 更改为多用户运行级别
`sed s/^id:.*:initdefault:/id:3:initdefault:/` | `ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target` | 设置为在下次重新启动时使用多用户运行级别
<!--rehype:className=show-header-->

另见
---

- [Systemd 官网](https://systemd.io/) _(systemd.io)_
- [Systemd Cheat Sheet](https://access.redhat.com/sites/default/files/attachments/12052018_systemd_6.pdf) _(access.redhat.com)_
- [Systemd Cheat Sheet](https://www.linuxtrainingacademy.com/systemd-cheat-sheet/) _(linuxtrainingacademy.com)_
