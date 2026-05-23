Grok CLI 备忘清单
===

[Grok CLI](https://www.grokcli.dev/docs/) 是一个由 X.AI 的 Grok 模型驱动的对话式 AI 终端工具，支持文件操作、代码分析、Plan Mode 与 MCP。

快速开始
---

### 快速上手
<!--rehype:wrap-class=row-span-2-->

```bash
# 立即运行（无需安装）
$ GROK_API_KEY=your_key npx -y grok-cli-hurry-mode@latest

# 全局安装
$ npm install -g grok-cli-hurry-mode@latest

# 启动交互会话
$ grok

# 发送初始消息
$ grok "Help me understand this project"

# 无头 / 非交互模式
$ grok -p "explain the auth module"

# 指定模型
$ grok -m grok-4-latest "refactor this file"

# 设置工作目录
$ grok -d /path/to/project

# 设置最大工具轮次
$ grok --max-tool-rounds 100 "rewrite the API"
```
<!--rehype:className=wrap-text-->

### 认证

| 方式          | 用法                                               |
| ------------- | ------------------------------------------------- |
| 环境变量      | `export GROK_API_KEY=your_key`                    |
| 内联（npx）   | `GROK_API_KEY=key npx grok-cli-hurry-mode@latest` |
| CLI 参数      | `grok --api-key your_key`                         |
| 配置文件      | 在 `~/.grok/user-settings.json` 设置 `apiKey`     |

从 [console.x.ai](https://console.x.ai) 获取 API key。

写入 shell 配置以持久生效：

```bash
echo 'export GROK_API_KEY=your_key' >> ~/.zshrc
source ~/.zshrc
```
<!--rehype:className=wrap-text-->

### 安装方式
<!--rehype:wrap-class=row-span-2-->

| 方式              | 命令                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| npm（推荐）       | `npm install -g grok-cli-hurry-mode@latest`                                                           |
| npx（免安装）     | `npx grok-cli-hurry-mode@latest`                                                                      |
| yarn              | `yarn global add grok-cli-hurry-mode@latest`                                                          |
| pnpm              | `pnpm add -g grok-cli-hurry-mode@latest`                                                              |
| bun               | `bun add -g grok-cli-hurry-mode@latest`                                                               |
| 自动脚本          | `curl -fsSL https://raw.githubusercontent.com/hinetapora/grok-cli-hurry-mode/main/install.sh \| bash` |
<!--rehype:className=style-list wrap-text-->

**要求：** Node.js（最新 LTS）、npm/yarn/pnpm、可用网络连接。

### AI 模型

| 模型               | 说明                          |
| ------------------ | ----------------------------- |
| `grok-code-fast-1` | 默认，针对代码任务优化        |
| `grok-4-latest`    | 最新版本，能力增强            |
| `grok-3-fast`      | 更快，通用场景               |

可通过 `-m`、`GROK_MODEL` 环境变量或 `~/.grok/user-settings.json` 覆盖默认模型。

自定义基础 URL：`-u https://api.x.ai/v1` 或 `GROK_BASE_URL`。

CLI 选项
---

### 全部选项
<!--rehype:wrap-class=col-span-2-->

| 选项                    | 别名  | 说明                           |
| ----------------------- | ----- | ------------------------------ |
| `--api-key <key>`       | `-k`  | Grok API key                   |
| `--base-url <url>`      | `-u`  | API 基础 URL                   |
| `--model <model>`       | `-m`  | 指定模型                       |
| `--prompt <text>`       | `-p`  | 无头模式提示词                 |
| `--directory <dir>`     | `-d`  | 设置工作目录                   |
| `--max-tool-rounds <n>` |       | 最大工具轮次（默认：400）      |
| `--version`             | `-V`  | 显示版本                       |
| `--help`                | `-h`  | 显示帮助                       |
<!--rehype:className=left-align-->

**环境变量：**

| 变量            | 用途                |
| --------------- | ------------------- |
| `GROK_API_KEY`  | API key（必需）     |
| `GROK_MODEL`    | 默认模型            |
| `GROK_BASE_URL` | 自定义 API 端点     |

### 子命令

```bash
# AI 生成提交并推送
$ grok git commit-and-push
$ grok git commit-and-push -d /path/to/repo
$ grok git commit-and-push -m grok-4-latest

# MCP 服务器管理
$ grok mcp add <name>
$ grok mcp add-json <name> <json>
$ grok mcp remove <name>
$ grok mcp list
$ grok mcp test <name>
```

`git commit-and-push` 支持与主命令相同的 `-d`、`-k`、`-u`、`-m`、`--max-tool-rounds` 参数。

交互模式
---

### 键盘快捷键

| 按键              | 操作                              |
| ----------------- | -------------------------------- |
| `Shift+Tab` 连按两次 | 进入 Plan Mode                |
| `Shift+Tab`       | 切换自动编辑模式                 |
| `Ctrl+I`          | 上下文提示（工作区信息）         |
| `Ctrl+C`          | 清空当前输入                     |
| `Esc`             | 中断当前操作                     |
| `↑` / `↓`         | 浏览输入历史                     |
<!--rehype:className=shortcuts-->

**自动编辑模式：** 免确认文件编辑，AI 会直接修改文件而不弹出确认提示。

**上下文提示（`Ctrl+I`）：** 显示项目统计、git 分支、内存压力与会话信息。

### Slash 命令

| 命令                 | 说明                          |
| -------------------- | ----------------------------- |
| `/help`              | 显示可用命令                  |
| `/clear`             | 清空终端屏幕                  |
| `/models`            | 列出可用模型                  |
| `/exit`              | 退出应用                      |
| `/compact`           | 压缩会话上下文                |
| `/commit-and-push`   | AI 生成提交信息并推送         |
| `/init-agent`        | 初始化 agent 文档             |
| `/docs`              | 打开文档                      |
| `/readme`            | 生成 README                   |
| `/api-docs`          | 生成 API 文档                 |
| `/changelog`         | 生成变更日志                  |
| `/comments`          | 添加代码注释                  |
| `/update-agent-docs` | 更新 agent 文档               |
| `/heal`              | 自愈系统检查                  |
| `/guardrails`        | 显示护栏状态                  |

### 配置文件

| 文件                         | 用途                   |
| ---------------------------- | ---------------------- |
| `~/.grok/user-settings.json` | 全局用户配置           |
| `.grok/settings.json`        | 项目级配置             |
| `.grok/GROK.md`              | 提供给 AI 的项目上下文 |

**user-settings.json 示例：**

```json
{
  "apiKey": "your_api_key",
  "model": "grok-code-fast-1",
  "baseURL": "https://api.x.ai/v1"
}
```

**创建项目上下文：**

```bash
# 为 Plan Mode 添加自定义上下文
$ mkdir -p .grok
$ echo "# Project Rules" > .grok/GROK.md
```

工具
---

### 核心工具

| 工具      | 用途                                       |
| --------- | ------------------------------------------ |
| **Read**  | 读取文件：文本、图片、PDF、notebook         |
| **Write** | 创建或覆盖文件                              |
| **Edit**  | 精确字符串查找替换                          |
| **Bash**  | 执行 shell 命令                             |
| **Grep**  | 通过 ripgrep 进行正则搜索                   |
| **Glob**  | 文件模式匹配                                |
| **LS**    | 目录列表                                    |

**Read** 支持大文件的行偏移/行数限制，并可直接显示图片。

**Edit** 支持：

- 精确字符串替换
- 正则模式
- 单次或全量替换

**Bash** 支持：

- stdout/stderr 捕获
- 后台进程
- 超时管理
- 环境变量处理

### 高级工具

| 工具          | 用途                                  |
| ------------- | ------------------------------------- |
| **MultiEdit** | 原子化多文件编辑（支持回滚）          |
| **WebFetch**  | 抓取并解析网页内容                     |
| **WebSearch** | 实时网页搜索                           |
| **Task**      | 委派给专用子代理                       |
| **TodoWrite** | 任务追踪与进度管理                     |

**MultiEdit** 操作包括：创建、编辑、删除、重命名、移动，均在一次原子事务中完成。

**Task**（子代理委派）：

- 面向 token 成本优化
- 复杂调研与分析
- 自动完成并输出报告

**WebFetch：** 支持 HTML 到 Markdown 转换，并带 AI 内容提取与缓存。

### IDE 工具

| 工具             | 用途                             |
| ---------------- | -------------------------------- |
| **NotebookEdit** | 编辑 Jupyter notebook 单元       |
| **BashOutput**   | 流式查看后台进程输出             |
| **KillBash**     | 终止后台进程                     |

AI 会为你的请求**自动选择**合适的工具组合，无需手动调用。

Plan Mode
---

### 启用 Plan Mode
<!--rehype:wrap-class=col-span-2 row-span-2-->

快速连续按下 **`Shift+Tab` 两次**：

```
🎯 Plan Mode: Analysis
📊 Exploring codebase and gathering insights...
```

**或使用无头模式：**

```bash
$ grok -p "analyze changes in this PR and create plan"
$ grok -p "check if changes follow architecture guidelines"
```

**Plan Mode 下会被阻止的操作：**

- 所有文件写入/编辑操作
- 破坏性 bash 命令
- 任何修改状态的操作

**Plan Mode 下允许的操作：**

- 读取文件（`ls`、`cat`、`grep`）
- Web 搜索与抓取
- 项目结构分析
- 生成计划（仅写入计划输出）

**退出 Plan Mode：**

- `Enter`：确认并执行计划
- `Esc`：不执行直接退出

### Plan Mode 阶段

| 阶段            | 时长            | 发生内容                         |
| --------------- | --------------- | -------------------------------- |
| 🔍 Analysis     | 1–5 秒          | 项目类型、结构、依赖分析         |
| 🧠 Strategy     | 5–15 秒         | AI 生成实施计划                  |
| 📋 Presentation | 1–2 秒          | 整理计划供审阅                   |
| ✅ Approval     | 用户控制         | 审阅、确认或细化                 |
<!--rehype:className=show-header left-align-->

Plan Mode 会分析：项目类型（Node/Python/React 等）、目录结构、关键组件、依赖、入口点、模块与架构模式。

### Plan Mode 建议

Plan Mode 适用于：

- 复杂的多文件功能开发
- 大规模重构
- 探索陌生代码库
- 变更前风险评估

**建议：**

- 明确描述你的目标
- 批准前先审阅计划
- 出问题时可使用 `/heal`
- 通过 `.grok/GROK.md` 提供自定义上下文

MCP 服务器
---
<!--rehype:body-class=cols-4-->

### 管理 MCP 服务器
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
# 添加 stdio 服务器
$ grok mcp add myserver \
  -t stdio \
  -c npx \
  -a -y my-mcp-package

# 添加 HTTP/SSE 服务器
$ grok mcp add myserver \
  -t http \
  -u https://api.example.com/mcp

# 携带环境变量和请求头添加
$ grok mcp add myserver \
  -t http \
  -u https://api.example.com/mcp \
  -e API_KEY=secret \
  -h Authorization="Bearer token"

# 从原始 JSON 添加
$ grok mcp add-json myserver \
  '{"transport":{"type":"stdio","command":"npx","args":["-y","pkg"]}}'

# 列出全部服务器
$ grok mcp list

# 测试连接
$ grok mcp test myserver

# 删除服务器
$ grok mcp remove myserver
```
<!--rehype:className=wrap-text-->

### MCP 配置结构
<!--rehype:wrap-class=col-span-2-->

**在 `.grok/settings.json` 中：**

```json
{
  "mcpServers": [
    {
      "name": "my-server",
      "transport": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "my-mcp-package"],
        "env": { "KEY": "value" }
      }
    },
    {
      "name": "remote-server",
      "transport": {
        "type": "http",
        "url": "https://api.example.com/mcp",
        "headers": { "Authorization": "Bearer $TOKEN" }
      }
    }
  ]
}
```

**传输类型：**

| 类型              | 适用场景                   |
| ----------------- | -------------------------- |
| `stdio`           | 本地子进程（默认）         |
| `http`            | 远程 HTTP 端点             |
| `sse`             | Server-Sent Events         |
| `streamable_http` | 流式 HTTP                  |

### 添加服务器参数
<!--rehype:wrap-class=col-span-2-->

| 选项                 | 别名  | 说明                                 |
| -------------------- | ----- | ------------------------------------ |
| `--transport <type>` | `-t`  | stdio / http / sse / streamable_http |
| `--command <cmd>`    | `-c`  | 可执行命令（仅 stdio）               |
| `--args [args...]`   | `-a`  | 命令参数（仅 stdio）                 |
| `--url <url>`        | `-u`  | 服务器 URL（http/sse）               |
| `--headers [kv...]`  | `-h`  | HTTP 请求头（`key=value`）           |
| `--env [kv...]`      | `-e`  | 环境变量（`key=value`）              |

故障排查
---

### 常见问题
<!--rehype:wrap-class=col-span-2 row-span-2-->

**找不到 API key：**

```bash
# 检查环境变量是否已设置
$ echo $GROK_API_KEY

# 或内联设置
$ GROK_API_KEY=key grok "hello"
```

**安装后命令找不到：**

```bash
# 将 npm 全局 bin 目录加入 PATH
$ echo 'export PATH="$(npm config get prefix)/bin:$PATH"' >> ~/.zshrc
$ source ~/.zshrc
$ which grok
```

**安装时报权限错误：**

```bash
# 使用 sudo（不推荐）或 Node 版本管理器
$ npm install -g grok-cli-hurry-mode --force

# 或使用 nvm/fnm（无 sudo）
$ nvm use --lts
$ npm install -g grok-cli-hurry-mode
```

**安装卡住 / 缓存问题：**

```bash
$ pkill -f grok
$ npm uninstall -g grok-cli-hurry-mode
$ npm cache clean --force
$ npm install -g grok-cli-hurry-mode@latest
```

### 常用环境变量

| 变量            | 说明                   |
| --------------- | ---------------------- |
| `GROK_API_KEY`  | API key（必需）        |
| `GROK_MODEL`    | 覆盖默认模型           |
| `GROK_BASE_URL` | 自定义 API 端点        |

**默认 API 端点：** `https://api.x.ai/v1`

### Git 智能推送

自动发布系统会创建版本号变更提交，因此请始终使用 smart push 以避免冲突：

```bash
# 正确：可处理自动版本变更
$ npm run smart-push
$ git pushup

# 错误：会触发 "fetch first" 报错
$ git push origin main
```

延伸阅读
---

- [官方文档](https://www.grokcli.dev/docs/) _(grokcli.dev)_
- [Plan Mode 指南](https://www.grokcli.dev/docs/guides/plan-mode) _(grokcli.dev)_
- [工具总览](https://www.grokcli.dev/docs/tools/overview) _(grokcli.dev)_
- [架构总览](https://www.grokcli.dev/docs/architecture/overview) _(grokcli.dev)_
- [GitHub 仓库](https://github.com/hinetapora/grok-cli-hurry-mode) _(github.com)_
- [xAI API Console](https://console.x.ai) _(console.x.ai)_
