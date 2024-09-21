PM2 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/pm2.svg?style=flat)](https://npmjs.org/package/pm2)
[![Downloads](https://img.shields.io/npm/dm/pm2.svg?style=flat)](https://www.npmjs.com/package/pm2)
[![Repo Dependents](https://badgen.net/github/dependents-repo/Unitech/pm2)](https://github.com/Unitech/pm2/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/Unitech/pm2)

[PM2](https://pm2.keymetrics.io/) 是一个守护进程管理器，它将帮助您管理和保持您的应用程序在线。PM2 入门非常简单，它以简单直观的 CLI 形式提供
<!--rehype:style=padding-top: 12px;-->

入门
-----

### 安装

最新的 PM2 版本可通过 NPM 或 Yarn 安装

```shell
$ npm install pm2@latest -g
```

或者

```shell
$ yarn global add pm2
```

### 启动应用程序

启动、守护进程和监视应用程序的最简单方法是使用此命令行

```shell
$ pm2 start app.js
```

或者轻松启动任何其他应用程序

```shell
$ pm2 start bashscript.sh
$ pm2 start python-app.py --watch
$ pm2 start binary-file -- --port 1520
```

### 您可以传递给 CLI 的一些选项
<!--rehype:wrap-class=row-span-3-->

指定应用名称

```shell
--name <app_name>
```

文件更改时监视并重新启动应用程序

```shell
--watch
```

设置应用重新加载的内存阈值

```shell
--max-memory-restart <200MB>
```

指定日志文件

```shell
--log <log_path>
```

将额外的参数传递给脚本

```shell
-- arg1 arg2 arg3
```

自动重启之间的延迟

```shell
--restart-delay <delay in ms>
```

带时间的前缀日志

```shell
--time
```

不要自动重启应用程序

```shell
--no-autorestart
```

指定 cron 强制重启

```shell
--cron <cron_pattern>
```

附加到应用程序日志

```shell
--no-daemon
```

### 管理流程

管理应用程序状态很简单，这里是命令

```shell
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```

#### 你可以传递而不是 app_name

- `all` 作用于所有进程
- `id` 作用于特定的进程 ID

### 检查状态、日志、指标
<!--rehype:wrap-class=row-span-2-->

现在您已经启动了这个应用程序，您可以检查它的状态、日志、指标，甚至可以使用 [pm2.io](https://pm2.io/) 获取在线仪表板

列出PM2管理的所有应用的状态

```shell
$ pm2 [list|ls|status]
```

实时显示日志

```shell
$ pm2 logs
```

挖掘旧日志

```shell
$ pm2 logs --lines 200
```

这是一个直接适合您的终端的实时仪表板

```shell
$ pm2 monit
```

基于 Web 的仪表板，具有诊断系统的跨服务器

```shell
$ pm2 plus
```

### 集群模式

对于 Node.js 应用程序，PM2 包括一个自动负载均衡器，它将在每个衍生进程之间共享所有 HTTP[s]/Websocket/TCP/UDP 连接

以集群模式启动应用程序

```shell
$ pm2 start app.js -i max
```

在 [此处](https://pm2.keymetrics.io/docs/usage/quick-start/) 阅读有关集群模式的更多信息

### 生态系统文件
<!--rehype:wrap-class=row-span-2-->

您还可以创建一个称为生态系统文件的配置文件来管理多个应用程序。生成生态系统文件

```shell
$ pm2 ecosystem
```

这将生成一个 `ecosystem.config.js` 文件

```js
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }, {
     name: 'worker',
     script: 'worker.js'
  }]
}
```

并轻松启动

```shell
$ pm2 start ecosystem.config.js
```

在 [此处](https://pm2.keymetrics.io/docs/usage/application-declaration/) 阅读有关应用程序声明的更多信息

### 设置启动脚本
<!--rehype:wrap-class=col-span-2-->

使用您在服务器启动/重新启动时管理的进程重新启动 PM2 至关重要。为了解决这个问题，只需运行这个命令来生成一个活动的启动脚本

```shell
$ pm2 save
```

在 [此处](https://pm2.keymetrics.io/docs/usage/startup/) 阅读有关启动脚本生成器的更多信息

### 重新启动应用程序更改
<!--rehype:wrap-class=col-span-2-->

使用 `--watch` 选项非常简单

```shell
$ cd /path/to/my/app
$ pm2 start env.js --watch --ignore-watch="node_modules"
```

这将在当前目录 `+` 所有子文件夹中的任何文件更改时监视并重新启动应用程序，并且它将忽略 `node_modules` 文件夹中的任何更改 `--ignore-watch="node_modules"`。

```bash
$ pm2 logs
```

然后，您可以使用上面命令来检查重新启动的应用程序日志。

PM2 CheatSheet
---
<!--rehype:body-class=cols-2-->

以下是一些值得了解的命令。 只需使用示例应用程序或开发机器上当前的 Web 应用程序来尝试它们

### PM2 分叉模式

```shell
$ pm2 start app.js --name my-api # 名称进程
```

### PM2 集群模式

```shell
$ pm2 start app.js -i 0     # 将根据可用的 CPU 使用 LB 启动最大进程
$ pm2 start app.js -i max   # 与上面相同，但已弃用。
$ pm2 scale app +3          # 将 `app` 增加 3 名工人
$ pm2 scale app 2           # 将 `app` 向上或向下扩展到总共 2 个工人
```

### PM2 清单

```shell
$ pm2 list        # 显示所有进程状态
$ pm2 jlist       # 以原始 JSON 格式打印进程列表
$ pm2 prettylist  # 以美化JSON打印进程列表
$ pm2 describe 0  # 显示有关特定进程的所有信息
$ pm2 monit       # 监控所有进程
```

### PM2 日志

```shell
$ pm2 logs [--raw]  # 在流中显示所有进程日志
$ pm2 flush         # 清空所有日志文件
$ pm2 reloadLogs    # 重新加载所有日志
```

### PM2 动作

```shell
$ pm2 stop all     # 停止所有进程
$ pm2 restart all  # 重启所有进程
$ pm2 reload all   # 将 0s 停机时间重新加载（对于 NETWORKED 应用程序）
$ pm2 stop 0       # 停止特定进程 ID
$ pm2 restart 0    # 重启特定进程id
$ pm2 delete 0     # 将从 pm2 列表中删除进程
$ pm2 delete all   # 将从 pm2 列表中删除所有进程
```

### PM2 杂项

```shell
$ pm2 reset <process>    # 重置元数据（重启时间...）
$ pm2 updatePM2          # 更新内存 pm2
$ pm2 ping               # 确保 pm2 守护进程已经启动
$ pm2 sendSignal SIGUSR2 my-app # 向脚本发送系统信号
$ pm2 start app.js --no-daemon
$ pm2 start app.js --no-vizion
$ pm2 start app.js --no-autorestart
```

### 更新 PM2

我们让它变得简单，版本之间没有重大变化，过程很简单

```shell
$ npm install pm2@latest -g
```

然后更新内存中的PM2

```shell
$ pm2 update
```

另见
--------

- [QUICK START](https://pm2.keymetrics.io/docs/usage/quick-start/) _(pm2.keymetrics.io)_
