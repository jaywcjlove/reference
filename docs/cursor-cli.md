Cursor CLI 备忘清单
===

[Cursor CLI](https://cursor.com/docs/cli/overview) (`agent`) 是 Cursor AI 编码代理的终端接口，可在命令行中运行代理任务、脚本和 CI 流水线。

快速开始
---

### Hello World

```bash
# 交互式代理会话
$ agent

# 单次提示（打印模式）
$ agent -p "List all TODO comments in this repo"

# 提问（只读）
$ agent --mode=ask "How does auth work here?"

# 仅规划（不改代码）
$ agent --plan "Refactor the payment module"
```
<!--rehype:className=wrap-text-->

### 安装

#### macOS / Linux / WSL

```bash
$ curl https://cursor.com/install -fsS | bash
```
<!--rehype:className=wrap-text-->

#### Windows (PowerShell)

```powershell
irm 'https://cursor.com/install?win32=true' | iex
```
<!--rehype:className=wrap-text-->

#### 安装后

```bash
# 如有需要，加入 PATH
export PATH="$HOME/.local/bin:$PATH"

# 验证
$ agent --version

# 更新
$ agent update
```

### 核心概念

| 概念        | 说明                                |
| ----------- | ----------------------------------- |
| Agent mode  | 完整权限：读、写、执行 shell        |
| Plan mode   | 只读分析，不进行编辑                |
| Ask mode    | 问答 / 解释，仅只读                 |
| Cloud agent | 委派到远端 Cursor 云端执行          |
| Session     | 带历史记录的已保存会话              |
| Worktree    | 隔离的 git 分支环境                 |
| ACP         | Agent Client Protocol（JSON-RPC）   |
| MCP         | 外部工具 / 数据集成                 |
<!--rehype:className=left-align-->

CLI 参数
---

### 会话与模式

| 参数                 | 说明                                  |
| -------------------- | ------------------------------------- |
| `--mode=plan`        | Plan 模式（只读，不编辑）             |
| `--mode=ask`         | Ask 模式（问答，只读）                |
| `--plan`             | `--mode=plan` 的简写                  |
| `-p, --print`        | 无头/打印模式（非交互）               |
| `-c, --cloud`        | 以云端代理模式启动                    |
| `--continue`         | 继续上一次会话                        |
| `--resume [chatId]`  | 恢复指定会话                          |
| `-n, --name`         | 设置会话名称                          |
| `--workspace <path>` | 设置工作区目录                        |
| `--model <model>`    | 指定模型（如 `sonnet-4`）             |
| `--list-models`      | 列出可用模型并退出                    |
<!--rehype:className=style-list-arrow-->

### Worktree 与沙箱

| 参数                    | 说明                                  |
| ----------------------- | ------------------------------------- |
| `-w, --worktree [name]` | 在隔离的 git worktree 中启动          |
| `--worktree-base <ref>` | 指定 worktree 基于的分支/引用         |
| `--skip-worktree-setup` | 跳过 `.cursor/worktrees.json` 脚本    |
| `--sandbox <mode>`      | `enabled` 或 `disabled`               |
| `--trust`               | 信任工作区且不再提示确认              |
| `--approve-mcps`        | 自动批准全部 MCP 服务器               |
<!--rehype:className=left-align style-list-arrow-->

### 输出与权限

| 参数                      | 说明                                    |
| ------------------------- | --------------------------------------- |
| `--output-format <fmt>`   | `text` \| `json` \| `stream-json`       |
| `--stream-partial-output` | 流式输出文本增量（仅 stream-json）      |
| `-f, --force`             | 除非明确拒绝，否则允许执行命令          |
| `--yolo`                  | `--force` 的别名                        |
| `--api-key <key>`         | 认证密钥（或 `CURSOR_API_KEY`）         |
| `-H, --header <h>`        | 自定义请求头（`Name: Value`）           |
<!--rehype:className=left-align style-list-arrow-->

命令
---
<!--rehype:body-class=cols-2-->

### 全部子命令
<!--rehype:wrap-class=row-span-2-->

| 命令                                | 说明                                    |
| ----------------------------------- | --------------------------------------- |
| `agent [prompt]`                    | 启动交互会话或打印会话                  |
| `agent ls`                          | 列出可恢复的会话                        |
| `agent resume`                      | 恢复最近一次聊天会话                    |
| `agent login`                       | 登录 Cursor                             |
| `agent logout`                      | 退出登录并清理认证信息                  |
| `agent status`                      | 查看认证状态 / whoami                   |
| `agent update`                      | 更新到最新版本                          |
| `agent about`                       | 显示版本、系统、账号信息                |
| `agent models`                      | 列出可用模型                            |
| `agent create-chat`                 | 创建新的空聊天并返回 ID                 |
| `agent rule`                        | 交互式生成新的 Cursor 规则              |
| `agent mcp`                         | 管理 MCP 服务器                         |
| `agent mcp list`                    | 列出已配置的 MCP 服务器                 |
| `agent mcp list-tools <id>`         | 列出指定 MCP 服务器的工具               |
| `agent mcp enable <id>`             | 将 MCP 服务器加入批准列表               |
| `agent mcp disable <id>`            | 禁用 MCP 服务器                         |
| `agent mcp login <id>`              | 对 MCP 服务器进行认证                   |
| `agent install-shell-integration`   | 安装 shell 集成到 `~/.zshrc`            |
| `agent uninstall-shell-integration` | 移除 shell 集成                         |
| `agent acp`                         | 启动 ACP 服务器（stdio 上的 JSON-RPC）  |

### 会话管理

```bash
# 列出可恢复会话
$ agent ls

# 继续上一次会话
$ agent --continue

# 按 ID 恢复指定会话
$ agent --resume abc123

# 恢复最近会话
$ agent resume
```

### 认证与账号

```bash
$ agent login
$ agent logout
$ agent status     # 或：agent whoami
$ agent about      # 版本 + 账号信息
$ agent models     # 列出可用模型
```

执行模式
---

### Agent 模式

具备完整代理权限，可读取文件、编写代码、执行 shell 命令，并使用全部工具。

```bash
$ agent
$ agent "Fix the bug in auth.ts"
```

未指定 `--mode` 时默认使用该模式。

### Plan Mode

只读分析。仅给出规划，不会对代码库做任何修改。

```bash
$ agent --plan
$ agent --mode=plan "Refactor auth"
```

不能修改文件，也不能执行命令。

### Ask Mode

问答模式。用于解释代码、回答问题，不编辑文件，也不执行 shell。

```bash
$ agent --mode=ask
$ agent --mode=ask "How does caching work?"
```

适合在零改动风险下理解代码。

无头模式与脚本化
---
<!--rehype:body-class=cols-2-->

### 管道与脚本用法

```bash
# 总结 diff
$ git diff | agent -p "Summarize these changes"

# 审查文件
$ cat src/auth.ts | agent -p "Find security issues"

# 处理日志
$ tail -200 app.log | agent -p "Identify errors"

# 在提示词中引用图片
$ agent -p "Describe this diagram: /path/to/image.png"
```

输出格式：

```bash
# 纯文本（默认）
$ agent -p "task" --output-format text

# 完整 JSON 响应
$ agent -p "task" --output-format json

# 流式 JSON 增量
$ agent -p "task" --output-format stream-json

# 按到达顺序流式输出文本片段
$ agent -p "task" --output-format stream-json \
    --stream-partial-output
```

### CI / CD 用法

```bash
# 允许所有文件修改
$ agent -p "Update changelog" --force

# 使用环境变量中的 API key 运行
$ CURSOR_API_KEY=xxx agent -p "Run tests"

# 信任工作区（跳过提示）
$ agent -p "Deploy" --trust

# 指定工作区目录
$ agent -p "Analyze" --workspace /repo
```

批处理：

```bash
for f in src/**/*.ts; do
  agent -p "Add JSDoc to $f" --force
done
```

Worktree
---
<!--rehype:body-class=cols-2-->

### 隔离环境

Worktree 会在 `~/.cursor/worktrees/<repo>/<name>` 创建隔离的 git 分支环境，从而保持主工作区干净。

```bash
# 自动命名 worktree
$ agent -w

# 指定名称的 worktree
$ agent -w feature-auth

# 从指定分支创建 worktree
$ agent -w fix --worktree-base main

# 跳过初始化脚本
$ agent -w feature --skip-worktree-setup
```

`.cursor/worktrees.json` 中的 worktree 配置：

```json
{
  "setup": ["npm install", "cp .env.example .env"]
}
```

### Worktree 文件

控制哪些文件会被复制到新 worktree：

```
# .worktreeinclude（glob 模式）
.env
.env.local
secrets/
node_modules/
```

创建新 worktree 时，匹配这些模式的文件会从主工作区复制过去。

Shell 模式
---
<!--rehype:body-class=cols-2-->

### Shell 执行

Shell 模式在 `$SHELL` 中执行。可通过 `cd` 与命令链式切换目录：

```bash
# 先切目录再执行
cd /my/project && agent "optimize this"

# 会话中的 shell 命令
$ ls -la              # 在 $SHELL 中运行
$ npm test            # 运行测试
$ git status          # git 操作
```

Shell 快捷键：

| 按键     | 操作                         |
| -------- | ---------------------------- |
| `Ctrl+C` | 取消当前 shell 命令          |
| `Ctrl+O` | 展开 / 查看完整输出          |
| `Tab`    | 将命令加入允许列表           |
<!--rehype:className=shortcuts-->

### Shell 说明

- 每条命令都在 `$SHELL`（zsh/bash/fish）中执行
- 每条命令默认 30 秒超时
- 对目录敏感的命令建议用 `cd dir && cmd`
- 安装 shell 集成可增强上下文感知：

```bash
$ agent install-shell-integration
# 会向 ~/.zshrc 写入 hooks
```

MCP 服务器
---
<!--rehype:body-class=cols-2-->

### 配置 MCP

用户级配置位于 `~/.cursor/mcp.json`，项目级配置位于 `.cursor/mcp.json`：

#### stdio 服务器（Node.js）

```json
{
  "mcpServers": {
    "my-tool": {
      "command": "npx",
      "args": ["-y", "my-mcp-server"],
      "env": { "API_KEY": "value" }
    }
  }
}
```

#### stdio 服务器（Python）

```json
{
  "mcpServers": {
    "my-tool": {
      "command": "python",
      "args": ["-m", "my_mcp_server"]
    }
  }
}
```

#### HTTP / SSE 服务器

```json
{
  "mcpServers": {
    "remote-tool": {
      "url": "https://my-server.com/mcp"
    }
  }
}
```

### MCP 命令

```bash
# 列出全部已配置服务器
$ agent mcp list

# 列出某个服务器的工具
$ agent mcp list-tools my-tool

# 批准一个服务器
$ agent mcp enable my-tool

# 禁用一个服务器
$ agent mcp disable my-tool

# 对服务器进行认证
$ agent mcp login my-tool

# 在当前会话中自动批准全部
$ agent --approve-mcps
```

ACP 协议
---
<!--rehype:body-class=cols-2-->

### ACP 概览

ACP（Agent Client Protocol）通过 **stdio** 将 Cursor 代理暴露为 JSON-RPC 2.0 服务，可用于构建自定义 IDE 集成或无头客户端。

```bash
# 启动 ACP 服务器
$ agent acp

# 使用 API key
$ agent --api-key "$CURSOR_API_KEY" acp
```

**请求流程：**

```
initialize
authenticate (cursor_login)
session/new  or  session/load
session/prompt
  → session/update（流式分片）
  → session/request_permission（工具审批）
session/cancel（可选）
```

权限返回结果：

| 响应           | 效果                     |
| -------------- | ------------------------ |
| `allow-once`   | 仅本次批准               |
| `allow-always` | 始终批准该工具           |
| `reject-once`  | 仅本次拒绝               |

### ACP 扩展方法

通过 ACP 发送的 Cursor 扩展方法：

| 方法                    | 类型     | 用途                   |
| ----------------------- | -------- | ---------------------- |
| `cursor/ask_question`   | Blocking | 多选提问               |
| `cursor/create_plan`    | Blocking | 请求计划审批           |
| `cursor/update_todos`   | Notify   | 更新待办列表状态       |
| `cursor/task`           | Notify   | 子代理任务状态         |
| `cursor/generate_image` | Notify   | 图片生成事件           |
<!--rehype:className=left-align show-header-->

最小 Node.js 客户端示例：

```js
const agent = spawn('agent', ['acp'], {
    stdio: ['pipe', 'pipe', 'inherit']
});
// 发送 initialize → authenticate → session/new → session/prompt
```
<!--rehype:className=wrap-text-->

**通过 ACP 可集成到以下 IDE：**

- JetBrains（IntelliJ、WebStorm、PyCharm）
- Neovim（通过 `avante.nvim` 插件）
- Zed 编辑器扩展
- 任何支持扩展机制的编辑器

云端代理
---
<!--rehype:body-class=cols-2-->

### 云端模式

云端代理会在 Cursor 基础设施上远程执行任务，适合长耗时或并行工作负载。

```bash
# 打开云端代理选择器
$ agent -c
$ agent --cloud

# 携带提示词启动云端代理
$ agent -c "Migrate all tests to Vitest"
```

云端代理支持：

- 远程执行（不占本地资源）
- 并行任务委派
- 更长时长的工作流

### 子代理类型

使用 ACP 或云端模式时，可指定子代理类型：

| 类型                 | 说明                    |
| -------------------- | ----------------------- |
| `explore`            | 代码库探索              |
| `browser_use`        | 网页浏览器自动化        |
| `computer_use`       | 桌面 GUI 操作           |
| `shell`              | Shell 命令执行          |
| `video_review`       | 视频内容分析            |
| `{ custom: "type" }` | 自定义子代理类型        |
<!--rehype:className=left-align-->

延伸阅读
---

- [Cursor CLI 文档](https://cursor.com/docs/cli/overview) _(cursor.com)_
- [ACP 协议文档](https://cursor.com/docs/cli/acp) _(cursor.com)_
- [Cursor Marketplace](https://cursor.com/marketplace) _(cursor.com)_
- [MCP 概览](https://cursor.com/docs/mcp) _(cursor.com)_
