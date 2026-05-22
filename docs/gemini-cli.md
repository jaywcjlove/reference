Gemini CLI 备忘清单
===

[Gemini CLI](https://geminicli.com/docs/) 可将 Google Gemini 模型直接带入终端，用于代码理解、任务自动化与工作流构建。

快速开始
---

### 快速上手
<!--rehype:wrap-class=row-span-2-->

```bash
# 全局安装
$ npm install -g @google/gemini-cli

# 或通过 Homebrew 安装
$ brew install gemini-cli

# 或免安装直接运行
$ npx @google/gemini-cli

# 启动交互会话
$ gemini

# 非交互模式（无头模式）
$ gemini -p "summarize README.md"

# 将内容管道传给 Gemini
$ cat logs.txt | gemini -p "find errors"

# 先执行提示词，再继续交互
$ gemini -i "explain this project"

# 恢复最近一次会话
$ gemini -r latest

# 恢复后附加新提示词
$ gemini -r latest "check for type errors"
```

### 认证

| 方式            | 用法                                       |
| --------------- | ------------------------------------------ |
| Google 账号     | 运行 `gemini`，选择 “Sign in with Google”  |
| API Key         | 设置 `GEMINI_API_KEY` 环境变量             |
| Vertex AI (ADC) | `gcloud auth application-default login`    |
| Vertex AI (SA)  | 设置 `GOOGLE_APPLICATION_CREDENTIALS`      |
<!--rehype:className=left-align-->

Vertex AI 还需要 `GOOGLE_CLOUD_PROJECT` 与 `GOOGLE_CLOUD_LOCATION`。

### 安装方式

| 方式             | 命令                                |
| ---------------- | ----------------------------------- |
| npm              | `npm install -g @google/gemini-cli` |
| Homebrew         | `brew install gemini-cli`           |
| MacPorts         | `sudo port install gemini-cli`      |
| npx（免安装）    | `npx @google/gemini-cli`            |
<!--rehype:className=left-align-->

**系统要求：** Node.js 20+、macOS 15+、Windows 11 24H2+ 或 Ubuntu 20.04+

### 模型别名

| 别名         | 模型                          | 适用场景          |
| ------------ | ----------------------------- | ----------------- |
| `auto`       | gemini-2.5-pro / gemini-3-pro | 默认，平衡        |
| `pro`        | gemini-2.5-pro / gemini-3-pro | 复杂推理          |
| `flash`      | gemini-2.5-flash              | 快速，平衡        |
| `flash-lite` | gemini-2.5-flash-lite         | 简单场景，最快    |
<!--rehype:className=left-align show-header-->

可通过 `-m flash` 或 `GEMINI_MODEL` 环境变量设置。

### 核心概念

| 概念        | 说明                                            |
| ----------- | ----------------------------------------------- |
| `GEMINI.md` | 自动加载的项目上下文文件                        |
| Skills      | 通过 `activate_skill` 按需加载的专长能力        |
| Extensions  | 由提示词、MCP 服务器、工具组成的扩展包          |
| MCP Servers | 通过 Model Context Protocol 接入的外部工具      |
| Plan Mode   | 编码前用于规划的只读模式                        |
| Hooks       | 在 agent 生命周期关键节点运行的脚本             |
| Headless    | 通过 `-p` 参数启用的非交互模式                  |
| Sessions    | 可恢复的已保存会话历史                          |
<!--rehype:className=left-align-->

CLI 选项
---
<!--rehype:body-class=cols-4-->

### 核心选项
<!--rehype:wrap-class=col-span-2 row-span-2-->

| 选项                         | 别名  | 说明                                                      |
| ---------------------------- | ----- | --------------------------------------------------------- |
| `--prompt <text>`            | `-p`  | 非交互提示词                                              |
| `--prompt-interactive`       | `-i`  | 先发提示词，再继续交互                                    |
| `--model <name>`             | `-m`  | 指定模型                                                  |
| `--worktree [name]`          | `-w`  | 在新的 git worktree 中启动                                |
| `--sandbox`                  | `-s`  | 启用沙箱执行                                              |
| `--approval-mode <mode>`     |       | default / auto_edit / yolo / plan                         |
| `--yolo`                     | `-y`  | 自动批准全部操作（已弃用，请改用 `--approval-mode=yolo`） |
| `--resume <id>`              | `-r`  | 通过 ID 或 `latest` 恢复会话                              |
| `--list-sessions`            |       | 列出会话后退出                                            |
| `--delete-session <n>`       |       | 按索引删除会话                                            |
| `--output-format <fmt>`      | `-o`  | text / json / stream-json                                 |
| `--extensions <list>`        | `-e`  | 要加载的扩展                                              |
| `--list-extensions`          | `-l`  | 列出扩展后退出                                            |
| `--include-directories`      |       | 额外工作区目录                                            |
| `--allowed-mcp-server-names` |       | 限制可用 MCP 服务器名称                                   |
| `--screen-reader`            |       | 启用无障碍模式                                            |
| `--acp`                      |       | 以 ACP（Agent Code Pilot）模式启动                        |
| `--debug`                    | `-d`  | 输出详细调试日志                                          |
| `--version`                  | `-v`  | 显示版本                                                  |
| `--help`                     | `-h`  | 显示帮助                                                  |
<!--rehype:className=left-align-->

### 子命令
<!--rehype:wrap-class=col-span-2-->

MCP 服务器管理

```bash
$ gemini mcp add <name> <cmd-or-url>
$ gemini mcp remove <name>
$ gemini mcp list
$ gemini mcp enable <name>
$ gemini mcp disable <name>
```

扩展管理

```bash
$ gemini extensions install <source>
$ gemini extensions uninstall <name>
$ gemini extensions list
$ gemini extensions update [name] [--all]
$ gemini extensions enable/disable <name>
$ gemini extensions link <path>
$ gemini extensions new <path>
```

Skills 管理

```bash
$ gemini skills list [--all]
$ gemini skills install <source>
$ gemini skills link <path>
$ gemini skills uninstall <name>
$ gemini skills enable/disable <name>
```

Hooks

```bash
$ gemini hooks migrate
```

### 无头模式输出格式
<!--rehype:wrap-class=col-span-2-->

| 格式          | 说明                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| `text`        | 纯文本（默认）                                                              |
| `json`        | 单个 JSON 对象，包含 `response` 与 `stats`                                  |
| `stream-json` | JSONL: `init` · `message` · `tool_use` · `tool_result` · `error` · `result` |
<!--rehype:className=left-align-->

**退出码：** `0` 成功 · `1` 错误 · `42` 输入无效 · `53` 超出轮次限制

交互命令
---

### Slash 命令 `/`
<!--rehype:wrap-class=row-span-3-->

| 命令                 | 说明                            |
| -------------------- | ------------------------------- |
| `/help`              | 显示全部命令                    |
| `/quit` `/exit`      | 退出 Gemini CLI                 |
| `/clear`             | 清空终端屏幕                    |
| `/about`             | 显示版本信息                    |
| `/auth`              | 切换认证方式                    |
| `/model`             | 设置 / 管理模型                 |
| `/settings`          | 打开设置编辑器                  |
| `/theme`             | 切换视觉主题                    |
| `/vim`               | 切换 vim 模式                   |
| `/plan [goal]`       | 进入 Plan Mode                  |
| `/compress`          | 压缩聊天上下文                  |
| `/copy`              | 复制上一条输出到剪贴板          |
| `/init`              | 为项目生成 GEMINI.md            |
| `/docs`              | 打开文档                        |
| `/bug`               | 提交 GitHub issue               |
| `/stats`             | 会话 / 模型 / 工具统计          |
| `/tools`             | 列出可用工具                    |
| `/memory show`       | 显示全部上下文文件              |
| `/memory add <text>` | 写入全局 GEMINI.md              |
| `/memory reload`     | 重新加载上下文文件              |
| `/resume`            | 浏览并恢复会话                  |
| `/rewind`            | 回退会话历史                    |
| `/restore`           | 恢复工具执行前的文件状态        |
| `/hooks list`        | 列出已配置 hooks                |
| `/mcp list`          | 列出 MCP 服务器                 |
| `/mcp reload`        | 重启 MCP 服务器                 |
| `/skills list`       | 列出可用 skills                 |
| `/extensions list`   | 列出扩展                        |
| `/permissions trust` | 信任当前目录                    |
| `/policies list`     | 列出当前生效策略                |
| `/directory add`     | 添加工作区目录                  |
| `/ide status`        | IDE 集成状态                    |
| `/shells`            | 切换后台 shell                  |
| `/terminal-setup`    | 配置多行输入快捷键              |
| `/setup-github`      | 配置 GitHub Actions             |
<!--rehype:className=left-align-->

重载命令：`/skills reload`、`/agents reload`、`/commands reload`、`/memory reload`、`/mcp reload`、`/extensions reload`

### `@` 命令

可在提示词中包含文件或目录内容：

```bash
# 引入单个文件
@src/main.ts fix the bug on line 42

# 引入一个目录
@src/ what does this module do?

# 引入多个路径
@package.json @src/ audit dependencies
```

具备 Git 感知能力：目录引入时会遵守 `.gitignore`。

### Shell 模式 `!`

```bash
# 运行单条 shell 命令
!ls -la

# 切换持久 shell 模式
!

# 将 shell 输出注入上下文
!git diff HEAD~1
```

所有 shell 子进程都会自动设置 `GEMINI_CLI=1`。

键盘快捷键
---

### 光标与编辑

| 按键                  | 操作                    |
| --------------------- | ----------------------- |
| `Ctrl+A` / `Home`     | 移动到行首              |
| `Ctrl+E` / `End`      | 移动到行尾              |
| `Ctrl+←` / `Alt+B`    | 向左移动一个单词        |
| `Ctrl+→` / `Alt+F`    | 向右移动一个单词        |
| `Ctrl+K`              | 删除到行尾              |
| `Ctrl+U`              | 删除到行首              |
| `Ctrl+W` / `Alt+Bksp` | 删除左侧单词            |
| `Alt+D`               | 删除右侧单词            |
| `Backspace`           | 删除左侧字符            |
| `Delete` / `Ctrl+D`   | 删除右侧字符            |
| `Cmd+Z`               | 撤销                    |
| `Ctrl+Shift+Z`        | 重做                    |
<!--rehype:className=shortcuts left-align-->

### 文本输入

| 按键             | 操作                   |
| ---------------- | ---------------------- |
| `Enter`          | 提交消息               |
| `Ctrl/Cmd+Enter` | 插入换行               |
| `Tab`            | 排队发送消息           |
| `Ctrl+X`         | 打开外部编辑器         |
| `Ctrl+V`         | 粘贴                   |
| `Ctrl+R`         | 反向历史搜索           |
| `Ctrl+P`         | 上一条历史记录         |
| `Ctrl+N`         | 下一条历史记录         |
<!--rehype:className=shortcuts left-align-->

### 应用控制

| 按键        | 操作                      |
| ----------- | ------------------------- |
| `Shift+Tab` | 循环切换审批模式          |
| `Ctrl+T`    | 切换 todos 面板           |
| `Alt+M`     | 切换 markdown 渲染        |
| `Ctrl+Y`    | 切换 YOLO 模式            |
| `Ctrl+L`    | 清屏                      |
| `Ctrl+Z`    | 挂起进程                  |
| `F12`       | 显示错误详情              |
| `Esc` 连按两次 | 打开 rewind 对话框     |
| `Ctrl+C`    | 取消 / 退出               |
| `Ctrl+D`    | 退出                      |
<!--rehype:className=shortcuts left-align-->

会话与历史
---

### 会话管理

```bash
# 列出全部会话
$ gemini --list-sessions

# 恢复最近一次会话
$ gemini -r latest

# 恢复指定会话
$ gemini -r <session-id>

# 按索引删除
$ gemini --delete-session 3
```

**在 `/resume` 浏览器中：**

- `↑↓`：浏览会话
- `Enter`：恢复选中会话
- `x`：删除会话
- 直接输入可搜索

### Rewind 工作流

输入 `/rewind` 或连按两次 `Esc` 可打开 rewind 对话框：

| 选项            | 效果                                |
| --------------- | ----------------------------------- |
| Rewind + Revert | 重置聊天历史和文件变更              |
| Rewind only     | 重置聊天历史，保留文件              |
| Revert only     | 恢复文件，保留聊天历史              |
| Do nothing      | 取消（Esc）                         |

仅作用于 AI 造成的文件变更，不影响手动编辑或 `!` shell 命令。

### 分叉会话

通过保存和恢复命名检查点来探索多种方案：

```bash
# 1. 保存当前状态
/resume save my-decision-point

# 2. 尝试方案 A...

# 3. 恢复到保存状态
/resume resume my-decision-point

# 4. 尝试方案 B...
```

上下文与记忆
---

### GEMINI.md 层级

上下文文件按以下顺序加载（最终会合并）：

| 优先级             | 位置                           |
| ------------------ | ------------------------------ |
| 1. 全局            | `~/.gemini/GEMINI.md`          |
| 2. 父目录          | 从工作区向上扫描               |
| 3. 工作区          | `.gemini/GEMINI.md`            |
| 4. JIT（按需）     | 工具访问目录时即时扫描         |

```markdown
# 在 GEMINI.md 中导入其他文件

@./docs/architecture.md
@./docs/conventions.md
```

可通过 `settings.json` 中的 `context.fileName` 自定义文件名（也可设为数组：`["AGENTS.md", "GEMINI.md"]`）。

### 记忆命令

```bash
# 显示全部已加载上下文
/memory show

# 强制重载全部上下文文件
/memory reload

# 向全局 GEMINI.md 追加文本
/memory add "Always use TypeScript strict mode"

# 生成项目级 GEMINI.md
/init
```
<!--rehype:className=wrap-text-->

### 忽略文件

在项目根目录创建 `.geminiignore`（遵循 `.gitignore` 语法）：

```gitignore
# 排除一个目录
/packages/

# 排除指定文件
apikeys.txt
*.log

# 排除所有 .md，但保留 README
*.md
!README.md
```

这些文件会对 CLI 工具隐藏，但对 Git 和其他服务仍然可见。

MCP 服务器
---
<!--rehype:body-class=cols-2-->

### MCP 配置

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "my-mcp-package"],
      "env": { "API_KEY": "$MY_API_KEY" },
      "timeout": 30000,
      "trust": false,
      "includeTools": ["tool1", "tool2"],
      "excludeTools": ["dangerous-tool"]
    },
    "remote-server": {
      "url": "https://api.example.com/mcp",
      "headers": { "Authorization": "Bearer $TOKEN" }
    }
  }
}
```

环境变量支持 `$VAR`、`${VAR}` 和 `%VAR%`（Windows）展开。

工具 FQN 格式：`mcp_{serverName}_{toolName}`

### 管理服务器

```bash
# 添加 stdio 服务器
$ gemini mcp add myserver npx -y my-mcp-package

# 添加 HTTP 服务器
$ gemini mcp add myserver https://api.example.com/mcp

# 带参数添加
$ gemini mcp add myserver cmd --transport http --trust --timeout 30000

# 列出全部服务器
$ gemini mcp list

# 删除服务器
$ gemini mcp remove myserver

# 启用 / 禁用
$ gemini mcp enable myserver
$ gemini mcp disable myserver --session
```
<!--rehype:className=wrap-text-->

### MCP 服务器配置字段

| 字段           | 说明                                    |
| -------------- | --------------------------------------- |
| `command`      | stdio 传输使用的可执行命令              |
| `args`         | 参数数组                                |
| `url`          | SSE 传输的 URL                          |
| `httpUrl`      | Streamable HTTP 的 URL                  |
| `env`          | 环境变量                                |
| `cwd`          | 工作目录                                |
| `timeout`      | 连接超时（毫秒，默认 600000）          |
| `trust`        | 跳过所有工具确认                        |
| `includeTools` | 指定工具白名单                          |
| `excludeTools` | 指定工具黑名单                          |

### MCP 资源

可在提示词中引用 MCP 资源：

```bash
# 引用一个资源
@server://resource/path summarize this

# 调用 MCP prompt 提供的 slash 命令
/prompt-name --arg=value
```

扩展与 Skills
---

### 管理扩展

```bash
# 从 GitHub 安装
$ gemini extensions install https://github.com/org/ext

# 从本地路径安装
$ gemini extensions install ./my-extension

# 列出已安装扩展
$ gemini extensions list

# 更新全部扩展
$ gemini extensions update --all

# 更新指定扩展
$ gemini extensions update my-ext

# 启用 / 禁用
$ gemini extensions enable my-ext
$ gemini extensions disable my-ext --scope user

# 以链接方式用于开发
$ gemini extensions link ./dev-extension

# 创建新扩展
$ gemini extensions new ./my-new-ext

# 校验结构
$ gemini extensions validate ./my-ext
```
<!--rehype:className=wrap-text-->

扩展可打包：提示词、MCP 服务器、自定义命令、主题、hooks、子代理与 skills。

### Agent Skills

Skills 提供按需加载的专长能力，只有在调用 `activate_skill` 时才会加载。

**发现位置（按优先级）：**

| 层级      | 路径                                       |
| --------- | ------------------------------------------ |
| 工作区    | `.gemini/skills/` 或 `.agents/skills/`     |
| 用户      | `~/.gemini/skills/` 或 `~/.agents/skills/` |
| 扩展      | 扩展包内部自带                             |
<!--rehype:className=left-align-->

```bash
# 列出全部 skills
$ gemini skills list --all

# 从 Git 或本地安装
$ gemini skills install https://github.com/org/skill
$ gemini skills install ./local-skill

# 以链接方式用于开发
$ gemini skills link ./my-skill

# 启用 / 禁用
$ gemini skills enable my-skill
$ gemini skills disable my-skill
```
<!--rehype:className=wrap-text-->

### 自定义命令

可将可复用提示词保存为 slash 命令。

**文件位置：**

- 用户：`~/.gemini/commands/`
- 项目：`.gemini/commands/`

```toml
# .gemini/commands/git/commit.toml
description = "生成提交信息"
prompt = """
请为以下内容生成一条 conventional commit 提交信息：

!{git diff --staged}

{{args}}
"""
```

该命令会变成 `/git:commit`。子目录 `/` 会映射成 `:` 命名空间。

**占位符：**
| 占位符 | 含义 |
|---|---|
| `{{args}}` | 注入用户参数 |
| `!{cmd}` | 执行 shell 并注入输出 |
| `@{path}` | 嵌入文件内容 |
<!--rehype:className=left-align-->

Plan Mode
---

### 启用 Plan Mode

```bash
# 通过参数一次性启用
$ gemini --approval-mode=plan

# 自然语言触发
> let's plan the refactor first

# Slash 命令触发
/plan redesign the auth module

# 会话中可用 Shift+Tab 循环切换模式
```

可在 `settings.json` 中设为默认：

```json
{
  "general": {
    "defaultApprovalMode": "plan"
  }
}
```

### Plan Mode 工具

**只读工具（始终可用）：**

- `read_file`, `list_directory`, `glob`
- `grep_search`, `google_web_search`
- `web_fetch` (with confirmation)
- `codebase_investigator`, `cli_help`
- `ask_user`

**写入工具（受限）：**

- `write_file`, `replace` — only for `.md` files inside plans directory

**记忆相关：**

- `save_memory`, `activate_skill`

### Plan Mode 工作流

```
1. 设定目标
  └─ 使用自然语言或 /plan <goal>

2. 讨论策略
  └─ Gemini 可能会提出澄清问题

3. 审阅计划
  └─ Markdown 文件会写入 plans 目录
  └─ 可用 Ctrl+X 在外部编辑器中修改

4. 批准或继续迭代

5. 切换到 YOLO/auto_edit 执行实现
```

自动模型路由：规划阶段使用 Pro，实施阶段切换到 Flash。

配置
---

### 设置文件位置

| 作用域           | 路径                                      |
| ---------------- | ----------------------------------------- |
| 用户             | `~/.gemini/settings.json`                 |
| 项目             | `.gemini/settings.json`                   |
| 系统（Linux）    | `/etc/gemini-cli/settings.json`           |
| 系统（macOS）    | `/Library/Application Support/GeminiCli/` |
| 系统（Windows）  | `C:\ProgramData\gemini-cli\settings.json` |
<!--rehype:className=left-align-->

**优先级（越靠前越高）：**
CLI 参数 → 环境变量 → 系统设置 → 项目设置 → 用户设置 → 系统默认值

**常见设置：**

```json
{
  "general": {
    "defaultApprovalMode": "default",
    "checkpointing": { "enabled": true }
  },
  "ui": {
    "theme": "dark"
  },
  "model": {
    "name": "auto"
  },
  "tools": {
    "sandbox": "docker"
  }
}
```

可通过 `/settings` 打开可视化编辑器。

### 关键环境变量

| 变量                             | 用途                                              |
| -------------------------------- | ------------------------------------------------- |
| `GEMINI_API_KEY`                 | Gemini API 认证                                   |
| `GEMINI_MODEL`                   | 覆盖默认模型                                      |
| `GEMINI_CLI_HOME`                | 覆盖配置目录                                      |
| `GOOGLE_CLOUD_PROJECT`           | Vertex AI 项目                                    |
| `GOOGLE_CLOUD_LOCATION`          | Vertex AI 区域                                    |
| `GOOGLE_APPLICATION_CREDENTIALS` | 服务账号 JSON 路径                                |
| `GOOGLE_API_KEY`                 | Google Cloud API key                              |
| `GEMINI_SANDBOX`                 | Sandbox type: `true`, `docker`, `podman`, `runsc` |
| `GEMINI_SYSTEM_MD`               | system prompt 文件路径                            |
| `NO_COLOR`                       | 禁用彩色输出                                      |
| `CLI_TITLE`                      | 覆盖终端窗口标题                                  |
<!--rehype:className=style-list-arrow circle-->

可持久写入 `~/.bashrc`、`~/.zshrc` 或 `.gemini/.env`。

### 沙箱选项

| 方式            | 平台               | 启用方式                               |
| --------------- | ------------------ | -------------------------------------- |
| macOS Seatbelt  | 仅 macOS           | `GEMINI_SANDBOX=sandbox-exec`          |
| Docker/Podman   | 跨平台             | `--sandbox` 或 `GEMINI_SANDBOX=docker` |
| gVisor (runsc)  | 仅 Linux           | `GEMINI_SANDBOX=runsc`                 |
| LXC/LXD         | Linux 实验性       | `GEMINI_SANDBOX=lxc`                   |
| Windows Sandbox | 仅 Windows         | `GEMINI_SANDBOX=true`                  |
<!--rehype:className=style-list-arrow circle-->

Hooks
---
<!--rehype:body-class=cols-2-->

### Hook 事件

| 事件                  | 触发时机               | 可否阻断          |
| --------------------- | ---------------------- | ----------------- |
| `SessionStart`        | 会话开始时             | 否（提示性）      |
| `SessionEnd`          | 会话结束时             | 否（尽力执行）    |
| `BeforeAgent`         | 规划开始前             | 是（退出码 2）    |
| `AfterAgent`          | agent 循环结束后       | 是（强制重试）    |
| `BeforeModel`         | LLM 调用前             | 是（退出码 2）    |
| `AfterModel`          | 每个 LLM chunk 后      | 是（退出码 2）    |
| `BeforeToolSelection` | 工具选择前             | 可过滤工具        |
| `BeforeTool`          | 工具运行前             | 是（退出码 2）    |
| `AfterTool`           | 工具运行后             | 是（隐藏结果）    |
| `PreCompress`         | 压缩前                 | 否（提示性）      |
| `Notification`        | 系统通知               | 否                |
<!--rehype:className=left-align-->

**退出码：** `0` = 成功 · `2` = 阻断/严重问题 · 其他 = 警告

**`settings.json` 中的 Hook 配置：**

```json
{
  "hooks": {
    "BeforeTool": [
      {
        "type": "command",
        "command": "~/.gemini/hooks/validate-tool.sh",
        "matcher": "write_file",
        "timeout": 10000
      }
    ],
    "SessionStart": [
      {
        "type": "command",
        "command": "echo '{\"systemMessage\": \"Be concise.\"}'"
      }
    ]
  }
}
```

### Hook I/O 协议

所有 hooks 都会通过 **stdin** 接收 JSON：

```json
{
  "session_id": "...",
  "transcript_path": "/path/to/transcript",
  "cwd": "/project/dir",
  "hook_event_name": "BeforeTool",
  "timestamp": "2026-01-01T00:00:00Z"
}
```

并通过 **stdout** 返回 JSON：

| 字段             | 说明                    |
| ---------------- | ----------------------- |
| `decision`       | `"allow"` 或 `"deny"`  |
| `reason`         | 拒绝时展示给用户        |
| `systemMessage`  | 注入上下文              |
| `suppressOutput` | 隐藏 hook 输出          |
| `continue`       | `false` 表示中止 agent  |

**BeforeTool** 附加字段：`hookSpecificOutput.tool_input` 可覆盖参数。

**AfterTool** 附加字段：`hookSpecificOutput.additionalContext` 会追加到结果。

**BeforeAgent** 附加字段：`hookSpecificOutput.additionalContext` 会追加到提示词。

**可用环境变量：**
`GEMINI_PROJECT_DIR`, `GEMINI_SESSION_ID`, `GEMINI_CWD`

延伸阅读
---

- [官方文档](https://geminicli.com/docs/) _(geminicli.com)_
- [CLI 速查表](https://geminicli.com/docs/cli/cli-reference) _(geminicli.com)_
- [键盘快捷键参考](https://geminicli.com/docs/reference/keyboard-shortcuts) _(geminicli.com)_
- [配置参考](https://geminicli.com/docs/reference/configuration) _(geminicli.com)_
- [Hooks 参考](https://geminicli.com/docs/hooks/reference) _(geminicli.com)_
- [GitHub 仓库](https://github.com/google-gemini/gemini-cli) _(github.com)_
