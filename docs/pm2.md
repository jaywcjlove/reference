PM2 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/pm2.svg?style=flat)](https://npmjs.org/package/pm2)
[![Downloads](https://img.shields.io/npm/dm/pm2.svg?style=flat)](https://www.npmjs.com/package/pm2)

[PM2](https://pm2.keymetrics.io/) 是 Node.js / Bun 应用常用的生产进程管理器，提供守护进程、自动重启、日志、监控、集群模式、开机自启和配置文件管理能力。它也可以启动脚本、Python 程序或二进制文件。
<!--rehype:style=padding-top: 12px;-->

入门
----

### 安装与版本

:-- | --
:-- | --
`npm install pm2@latest -g` | 使用 npm 全局安装最新版
`yarn global add pm2` | 使用 Yarn 全局安装
`pm2 -v` | 查看 PM2 版本
`pm2 update` | 更新内存中的 PM2 daemon
`pm2 ping` | 检查 PM2 daemon 是否可用
`pm2 kill` | 停止 PM2 daemon 和所有受管进程
<!--rehype:className=left-align code-nowrap-->

升级全局包后执行 `pm2 update`，让正在运行的 daemon 使用新版本。

### 启动应用
<!--rehype:wrap-class=col-span-2 row-span-2-->

:-- | --
:-- | --
`pm2 start app.js` | 启动 Node.js 应用
`pm2 start app.js --name api` | 指定应用名称
`pm2 start app.js --watch` | 文件变化时自动重启
`pm2 start app.js --time` | 日志输出添加时间前缀
`pm2 start app.js --no-autorestart` | 禁用自动重启
`pm2 start app.js --max-memory-restart 300M` | 超过内存阈值后重启
`pm2 start script.sh` | 启动 Shell 脚本
`pm2 start worker.py --interpreter python3` | 指定解释器启动脚本
`pm2 start app.js -- --port 3000` | `--` 后参数传给应用
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ pm2 start app.js --name api --time
$ pm2 start server.js --watch --ignore-watch="node_modules logs"
$ pm2 start app.js -- --port 3000
```

### 进程操作

:-- | --
:-- | --
`pm2 list` \| `pm2 ls` \| `pm2 status` | 列出受管进程
`pm2 restart <name|id|all>` | 重启进程
`pm2 reload <name|id|all>` | 零停机 reload，适合网络服务
`pm2 stop <name|id|all>` | 停止进程
`pm2 delete <name|id|all>` | 从 PM2 列表删除进程
`pm2 describe <name|id>` | 查看进程详细信息
`pm2 reset <name|id|all>` | 重置重启次数等元数据
<!--rehype:className=left-align code-nowrap-->

`reload` 与 `restart` 不同：`reload` 会尝试平滑替换进程；若超时或不适用，PM2 会回退到普通重启。

日志与监控
----

### 日志
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`pm2 logs` | 实时查看所有进程日志
`pm2 logs api` | 查看指定应用日志
`pm2 logs --lines 200` | 输出最近 200 行后继续跟随
`pm2 logs --nostream` | 只打印日志，不持续跟随
`pm2 logs --json` | 以 JSON 格式输出日志
`pm2 logs --err` | 只显示错误输出
`pm2 logs --out` | 只显示标准输出
`pm2 flush` | 清空所有日志
`pm2 flush api` | 清空指定应用日志
`pm2 reloadLogs` | 重新打开日志文件，常用于 logrotate 后
<!--rehype:className=left-align code-nowrap-->

日志默认位于 `$HOME/.pm2/logs`。启动时可用 `--log`、`--output`、`--error`、`--time`、`--log-date-format`、`--merge-logs` 控制日志路径和格式。

### 监控

:-- | --
:-- | --
`pm2 monit` | 打开终端实时监控面板
`pm2 show api` | 查看指定应用状态、日志路径、环境等信息
`pm2 prettylist` | 以格式化 JSON 输出进程列表
`pm2 jlist` | 输出原始 JSON 进程列表
`pm2 report` | 生成诊断报告
`pm2 plus` | 连接 PM2 Plus / PM2.io 在线监控
<!--rehype:className=left-align code-nowrap-->

集群与扩缩容
----

### Cluster 模式
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`pm2 start app.js -i max` | 根据可用 CPU 数启动实例
`pm2 start app.js -i 0` | 与 `max` 类似，启动尽可能多实例
`pm2 start app.js -i 4` | 启动 4 个实例
`pm2 reload api` | 对应用做零停机 reload
`pm2 scale api +2` | 增加 2 个实例
`pm2 scale api 4` | 调整到总共 4 个实例
<!--rehype:className=left-align code-nowrap-->

Cluster 模式适合监听 HTTP、TCP、UDP 等网络端口的 Node.js 应用。配置文件中需要显式设置 `exec_mode: "cluster"`，否则默认不会启用负载均衡。

### Cluster 配置示例

```js
module.exports = {
  apps: [{
    name: "api",
    script: "./server.js",
    instances: "max",
    exec_mode: "cluster"
  }]
}
```

配置文件
----

### ecosystem.config.js

:-- | --
:-- | --
`pm2 init simple` | 生成基础 `ecosystem.config.js`
`pm2 start ecosystem.config.js` | 启动配置文件中的应用
`pm2 restart ecosystem.config.js` | 重启配置文件中的应用
`pm2 reload ecosystem.config.js` | reload 配置文件中的应用
`pm2 stop ecosystem.config.js` | 停止配置文件中的应用
`pm2 delete ecosystem.config.js` | 删除配置文件中的应用
`pm2 start ecosystem.config.js --only api` | 只操作指定应用
`pm2 start ecosystem.config.js --env production`<!--rehype:className=wrap-text--> | 使用 `env_production`
<!--rehype:className=left-align wrap-text code-nowrap style-list-->

配置文件建议以 `.config.js` 结尾，便于 PM2 识别。

### 配置示例

```js
module.exports = {
  apps: [{
    name: "api",
    script: "./server.js",
    instances: 2,
    exec_mode: "cluster",
    watch: false,
    max_memory_restart: "300M",
    env: {
      NODE_ENV: "development",
      PORT: 3000
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 8080
    }
  }, {
    name: "worker",
    script: "./worker.js",
    autorestart: true
  }]
}
```

### 环境变量

:-- | --
:-- | --
`env` | 默认环境变量
`env_production` | `--env production` 时注入
`env_staging` | `--env staging` 时注入
`NODE_APP_INSTANCE` | PM2 为每个实例注入的实例编号
`instance_var` | 重命名实例编号变量
`increment_var` | 为每个实例递增某个环境变量
`--update-env` | 重启时更新环境变量
<!--rehype:className=left-align code-nowrap-->

#### 示例

```bash
$ PORT=4000 pm2 restart api --update-env
$ pm2 start ecosystem.config.js --env production
```

重启策略
----

### 常见策略
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`pm2 start app.js --watch` | 文件变化时自动重启
`pm2 stop app --watch` | 停止并禁用 watch 重启
`pm2 restart app --watch` | 切换 watch 选项
`pm2 start app.js --restart-delay=3000` | 自动重启前等待 3000ms
`pm2 start app.js --cron-restart="0 0 * * *"` | 每天 0 点重启
`pm2 restart app --cron-restart 0` | 禁用 cron 重启
`pm2 start app.js --exp-backoff-restart-delay=100` | 使用指数退避重启
`pm2 start app.js --stop-exit-codes 0` | 退出码为 0 时不自动重启
<!--rehype:className=left-align code-nowrap-->

PM2 默认会在应用崩溃、退出或 Node.js 事件循环为空时尝试重启。重启策略可以在 CLI 中设置，也可以写入配置文件。

### 配置字段

:-- | --
:-- | --
`watch: true` | 启用文件监听
`ignore_watch: ["node_modules"]` | 忽略监听目录
`watch_delay: 1000` | 文件变化后延迟重启
`max_memory_restart: "300M"` | 达到内存阈值后重启
`restart_delay: 3000` | 重启延迟
`cron_restart: "0 0 * * *"` | cron 定时重启
`autorestart: false` | 禁用自动重启
`stop_exit_codes: [0]` | 指定退出码不触发重启
`exp_backoff_restart_delay: 100` | 指数退避重启初始延迟
<!--rehype:className=left-align code-nowrap-->

持久化与开机自启
----

### 启动脚本
<!--rehype:wrap-class=col-span-2-->

:-- | --
:-- | --
`pm2 startup` | 生成当前平台的开机启动命令
`pm2 startup systemd -u www --hp /home/www` | 指定 systemd 用户和家目录
`pm2 save` | 保存当前进程列表，用于重启后恢复
`pm2 resurrect` | 手动恢复上次保存的进程列表
`pm2 unstartup` | 删除当前开机启动配置
`systemctl status pm2-<user>` | 查看 systemd 服务状态
`journalctl -u pm2-<user>` | 查看 systemd 启动日志
<!--rehype:className=left-align code-nowrap-->

典型生产流程：

```bash
$ pm2 start ecosystem.config.js --env production
$ pm2 save
$ pm2 startup
# 复制并执行 pm2 startup 输出的 sudo 命令
```

升级 Node.js 后需要重新生成启动脚本，避免开机时仍使用旧 Node.js 路径。

常用流程
----

### 部署后平滑更新
<!--rehype:wrap-class=col-span-2-->

```bash
$ git pull
$ npm ci
$ npm run build
$ pm2 reload ecosystem.config.js --env production
$ pm2 save
```

### 单机快速启动 API

```bash
$ pm2 start server.js --name api --time --max-memory-restart 300M
$ pm2 logs api --lines 100
```
<!--rehype:className=wrap-text-->

### 清理不再需要的进程

```bash
$ pm2 stop old-api
$ pm2 delete old-api
$ pm2 save
```

### 常见排障
<!--rehype:wrap-class=col-span-2 row-span-2-->

:-- | --
:-- | --
重启后进程丢失 | 启动或删除进程后忘记执行 `pm2 save`
开机自启使用旧 Node.js | Node.js 升级后重新执行 `pm2 unstartup` 和 `pm2 startup`
环境变量不更新 | 使用 `pm2 restart <app> --update-env`
日志文件过大 | 使用 `pm2 flush`、`pm2 reloadLogs`，并配置外部 logrotate
watch 停止后仍会重启 | 使用 `pm2 stop app --watch` 彻底关闭 watch
Cluster 未负载均衡 | 配置文件里确认 `exec_mode: "cluster"`
reload 变成 restart | 应用未能及时优雅退出，检查连接关闭与超时
<!--rehype:className=left-align-->

### 查看异常原因

```bash
$ pm2 describe api
$ pm2 logs api --err --lines 200
$ pm2 report
```

参考资料
----

- [PM2 Quick Start](https://pm2.keymetrics.io/docs/usage/quick-start/)
- [PM2 Process Management](https://pm2.keymetrics.io/docs/usage/process-management/)
- [PM2 Ecosystem File](https://pm2.keymetrics.io/docs/usage/application-declaration/)
- [PM2 Cluster Mode](https://pm2.keymetrics.io/docs/usage/cluster-mode/)
- [PM2 Logs](https://pm2.keymetrics.io/docs/usage/log-management/)
- [PM2 Restart Strategies](https://pm2.keymetrics.io/docs/usage/restart-strategies/)
- [PM2 Startup Script](https://pm2.keymetrics.io/docs/usage/startup/)
- [PM2 Environment Variables](https://pm2.keymetrics.io/docs/usage/environment/)
