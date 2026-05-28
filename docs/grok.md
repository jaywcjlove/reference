Grok CLI 备忘清单（官方）
===

这是一份基于官方文档的 Grok CLI 中文速查，覆盖安装认证、交互与无头模式、权限会话、自定义模型与 ACP 集成。

入门
---

### 安装
<!--rehype:wrap-class=col-span-2-->

```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```

### 交互模式

```bash
grok
```

### 单次执行（脚本）
<!--rehype:wrap-class=col-span-2-->

```bash
grok -p "Explain this repository"
grok -p "List TODO comments" --output-format json
```

### 会话续跑

```bash
grok -s my-session -p "Draft plan"
grok -s my-session -p "Implement step 1"
grok -c -p "Continue from latest"
```

### 模型与检查

```bash
grok inspect
grok -p "Hello" -m my-model
```

### ACP

```bash
grok agent stdio
```

快速开始
---
<!--rehype:body-class=cols-2-->

### 安装

```bash
# macOS / Linux / WSL
$ curl -fsSL https://x.ai/cli/install.sh | bash
# Windows PowerShell
> irm https://x.ai/cli/install.ps1 | iex
```

### 交互式会话
<!--rehype:wrap-class=row-span-2-->

```bash
$ cd your-project
$ grok
```

首次启动会打开浏览器做认证。无浏览器环境可直接使用 API Key：

```bash
$ export XAI_API_KEY="xai-..."
$ grok
```

常用首轮提示词：

```text
Explain this repo.
@src/main.rs Walk me through this file.
```

### 常见入口命令

```bash
$ grok                     # 进入 TUI
$ grok inspect             # 查看当前目录被发现的配置/技能/插件/MCP 等
$ grok -p "Explain this codebase"
$ grok -p "Explain architecture" --output-format streaming-json
```

无头模式（脚本/CI）
---
<!--rehype:body-class=cols-2-->

### 核心参数
<!--rehype:wrap-class=row-span-2-->

| 参数 | 说明 |
| --- | --- |
| `-p, --single <PROMPT>` | 发送单次提示并返回 |
| `-m, --model <MODEL>` | 指定模型 |
| `-s, --session-id <ID>` | 创建或复用一个命名会话 |
| `-r, --resume <ID>` | 恢复指定会话 |
| `-c, --continue` | 继续当前目录最近会话 |
| `--cwd <PATH>` | 指定工作目录 |
| `--output-format <FMT>` | 输出格式：`plain` / `json` / `streaming-json` |
| `--always-approve` | 自动批准工具执行 |
| `--no-alt-screen` | 内联运行（不接管全屏 TUI） |
| `--no-auto-update` | 禁用自动更新检查（脚本/CI 推荐） |
<!--rehype:className=left-align-->

### 输出格式

```bash
$ grok -p "List TODO comments" --output-format json
$ grok -p "Explain the architecture" --output-format streaming-json
```

- `plain`：人类可读文本
- `json`：末尾输出一个 JSON 对象
- `streaming-json`：按行输出增量 JSON 事件

### 脚本环境建议

在脚本、CI 或 ACP 场景可加上 `--no-auto-update`，避免后台更新检查影响稳定性：

```bash
$ grok --no-auto-update -p "Run static analysis summary"
```

也可在 `~/.grok/config.toml` 全局关闭：

```toml
[cli]
auto_update = false
```

### 会话续跑示例

```bash
# 用命名会话连续执行多轮任务
$ grok -s refactor-auth -p "Analyze auth module and list issues"
$ grok -s refactor-auth -p "Apply fix for issue 1"

# 指定恢复某个会话 ID
$ grok -r <SESSION_ID> -p "Continue and add tests"

# 继续当前目录最近会话
$ grok -c -p "Summarize what changed"
```

模式与权限
---
<!--rehype:body-class=cols-2-->

### 会话模式

| 模式 | 说明 |
| --- | --- |
| Plan | 先规划后执行；写工具被限制（除计划文件） |
| Always-approve | 跳过工具权限确认 |
<!--rehype:className=left-align-->

启动 Always-approve：

```bash
$ grok --always-approve
```

TUI 内可用 `/always-approve` 切换。`Shift+Tab` 可循环切换模式。

### 默认权限配置

在 `~/.grok/config.toml` 设置默认权限行为（官方建议放用户级配置，不放项目级）：

```toml
[ui]
permission_mode = "ask"
# 或 permission_mode = "always-approve"
```

说明：旧键 `approval_mode` 与 `yolo = true` 仍可识别，但以 `permission_mode` 为准。

Slash 命令（TUI）
---
<!--rehype:body-class=cols-2-->

### 核心命令
<!--rehype:wrap-class=row-span-2-->

| 命令 | 作用 |
| --- | --- |
| `/quit` / `/exit` | 退出 |
| `/home` | 返回欢迎页 |
| `/new` | 新建会话 |
| `/resume` | 恢复会话 |
| `/sessions` | 浏览历史会话 |
| `/fork` | 从当前会话分叉 |
| `/rename <title>` | 重命名会话 |
| `/share` | 分享当前会话链接 |
| `/session-info` | 查看会话信息 |
| `/context` | 查看上下文使用情况 |
| `/model <name>` | 切换模型 |
| `/always-approve` | 切换自动批准 |
| `/multiline` | 切换多行输入 |
| `/compact [context]` | 压缩会话历史 |
| `/compact-mode` | 切换紧凑 UI |
| `/theme [name]` | 切换主题 |
| `/feedback [text]` | 提交会话反馈 |
| `/plan` | 查看当前计划 |
| `/btw <question>` | 侧路提问，不打断主任务 |
| `/rewind` | 回退到更早对话点 |
| `/usage` | 查看 token/credits 使用 |
| `/logout` | 登出 |
<!--rehype:className=left-align-->

### 扩展入口与 shell 提供命令

| 命令 | 作用 |
| --- | --- |
| `/hooks` | 打开扩展面板 Hooks 页 |
| `/plugins` | 打开扩展面板 Plugins 页 |
| `/skills` | 打开扩展面板 Skills 页 |
| `/mcps` | 打开扩展面板 MCP 页 |
| `/flush` | 立即将会话内存落盘 |
| `/memory` | 搜索/编辑持久内存 |
| `/dream` | 触发离线内存整合 |
| `/imagine <prompt>` | 文生图 |
| `/imagine-video <prompt>` | 文生视频 |
<!--rehype:className=left-align-->

任意可调用 skill 也可作为 slash 命令（如 `/<skill-name>`）。重名时可用限定名（如 `/local:commit`）。

自定义模型
---

### 配置位置

自定义模型写在用户级配置文件中：

```text
~/.grok/config.toml
```

### 配置自定义

在配置中声明自定义模型并设为默认：

```toml
[model.my-model]
model = "model-id"
base_url = "https://api.example.com/v1"
name = "Display Name"
env_key = "API_KEY"

[models]
default = "my-model"
```

### 字段说明

| 字段 | 含义 |
| --- | --- |
| `[model.my-model]` | 本地别名（你在 CLI/TUI 里使用的名字） |
| `model` | 实际模型 ID |
| `base_url` | 该模型对应 API 基础地址 |
| `name` | 在 UI 中显示的名称 |
| `env_key` | 读取 API Key 的环境变量名 |
| `[models].default` | 默认使用的模型别名 |

### 多模型示例

```toml
[model.fast]
model = "grok-build-0.1"
base_url = "https://api.x.ai/v1"
name = "Fast Build"
env_key = "XAI_API_KEY"

[model.strict]
model = "my-strict-model"
base_url = "https://api.example.com/v1"
name = "Strict Review"
env_key = "EXAMPLE_API_KEY"

[models]
default = "fast"
```

### 使用与切换

检查生效并调用：

```bash
$ grok inspect
$ grok -p "Hello" -m my-model
```

也可以在 TUI 中用 `/model <name>` 切换。

---

常用方式：

```bash
# 使用默认模型
$ grok -p "Summarize this repo"

# 临时指定模型别名
$ grok -p "Review this patch" -m strict
```

### 快速排查

```bash
# 1) 检查当前目录发现到的模型/配置来源
$ grok inspect

# 2) 检查对应 key 是否存在
$ printenv XAI_API_KEY
```

若模型无法选择，优先检查：

- `env_key` 对应环境变量是否已导出。
- `base_url` 和 `model` 是否拼写正确。
- `default` 是否引用了已定义别名。

ACP（Agent Client Protocol）
---

### 是什么

ACP 适合把 Grok 接入 IDE、脚本平台或你自己的工具链。运行方式是 JSON-RPC over stdio。

### 启动 Agent

```bash
$ grok agent stdio
```

### 认证方式

- 已登录本机账号：可直接使用本地缓存凭据。
- 无本地登录态：设置环境变量 `XAI_API_KEY`。

```bash
$ export XAI_API_KEY="xai-..."
$ grok agent stdio
```

### 最小调用流程（官方思路）

1. `initialize`：声明客户端能力并读取可用认证方法。
2. `authenticate`：使用 `cached_token` 或 `xai.api_key`。
3. `session/new`：创建会话并指定 `cwd`。
4. `session/prompt`：发送提示。
5. 监听 `session/update`：增量接收 `agent_message_chunk` 文本。

### 精简 JS 示例（快速接入）

保存为 `acp-quick.mjs` 后可直接运行：

```bash
$ node acp-quick.mjs
```

```javascript
import { spawn } from "node:child_process";
import readline from "node:readline";

const p = spawn("grok", ["agent", "stdio"], { stdio: ["pipe", "pipe", "pipe"] });
const rl = readline.createInterface({ input: p.stdout });
let id = 1;
let text = "";

rl.on("line", line => {
  const m = JSON.parse(line);
  if (m.method === "session/update") {
    const u = m.params?.update;
    if (u?.sessionUpdate === "agent_message_chunk" && u.content?.text) text += u.content.text;
    if (u?.sessionUpdate === "done") console.log(text.trim());
  }
});

const send = (method, params) =>
  p.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id: id++, method, params })}\n`);

send("initialize", { protocolVersion: 1, clientCapabilities: { terminal: true } });
send("authenticate", { methodId: process.env.XAI_API_KEY ? "xai.api_key" : "cached_token" });
send("session/new", { cwd: process.cwd(), mcpServers: [] });
// 实际接入时，拿到 sessionId 后再发送 session/prompt
```

### 自动化场景建议

- 在 CI/脚本里配合 `--no-auto-update`，减少额外噪音和不确定性。
- 若只需要一次性结果，用 `grok -p` 更简单；需要双向协议集成时再用 ACP。

另见
---

- [Overview](https://docs.x.ai/build/overview)
- [Modes and Commands](https://docs.x.ai/build/modes-and-commands)
- [Headless & Scripting](https://docs.x.ai/build/cli/headless-scripting)
