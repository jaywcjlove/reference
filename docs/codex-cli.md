Codex CLI 备忘清单
===

OpenAI Codex CLI（v0.116+）是一个开源 AI 编程代理，可直接在终端中读取、修改并运行代码。参见[官方文档](https://developers.openai.com/codex/cli)。

快速开始
---
<!--rehype:body-class=cols-2-->

### 安装与运行
<!--rehype:wrap-class=row-span-2-->

#### npm（推荐）

```bash
$ npm install -g @openai/codex
$ npm install -g @openai/codex@latest   # 升级
```

#### Homebrew（macOS）

```bash
$ brew install codex
```

#### 首次运行

```bash
$ codex                          # 启动交互式 TUI
$ codex "Explain this codebase"  # 带初始提示
```

首次运行时会提示你通过 ChatGPT 账号或 API key 登录。

#### Shell 自动补全

```bash
# Zsh - 添加到 ~/.zshrc
$ eval "$(codex completion zsh)"

# Bash - 添加到 ~/.bashrc
$ eval "$(codex completion bash)"

# Fish
$ codex completion fish | source
```

### 平台支持

| 平台             | 状态         |
| ---------------- | ------------ |
| macOS            | 稳定         |
| Linux            | 稳定         |
| Windows (WSL)    | 推荐         |
| Windows（原生）  | 实验性       |
<!--rehype:className=show-header-->

### 身份认证

```bash
$ codex login                # ChatGPT OAuth
$ codex login --device-auth  # 设备码登录流程
```

从环境变量管道传入 API key

```bash
$ printenv OPENAI_API_KEY | codex login --with-api-key
$ codex login status         # 检查登录状态
$ codex logout               # 移除凭据
```

子命令
---
<!--rehype:body-class=cols-5-->

### 命令参考
<!--rehype:wrap-class=col-span-3-->

| 命令               | 别名      | 状态         | 说明                              |
| ------------------ | --------- | ------------ | --------------------------------- |
| `codex`            |           | 稳定         | 启动交互式 TUI                    |
| `codex exec`       | `codex e` | 稳定         | 以非交互模式运行（脚本化）        |
| `codex review`     |           | 稳定         | 非交互代码审查                    |
| `codex resume`     |           | 稳定         | 恢复历史会话                      |
| `codex fork`       |           | 稳定         | 分叉会话到新线程                  |
| `codex apply`      | `codex a` | 稳定         | 将 Cloud 任务 diff 应用到本地     |
| `codex login`      |           | 稳定         | 登录 Codex                        |
| `codex logout`     |           | 稳定         | 删除已保存凭据                    |
| `codex completion` |           | 稳定         | 生成 shell 自动补全               |
| `codex features`   |           | 稳定         | 管理特性开关                      |
| `codex app`        |           | 稳定         | 启动 Codex 桌面应用               |
| `codex mcp`        |           | 实验性       | 管理 MCP 服务器                   |
| `codex mcp-server` |           | 实验性       | 将 Codex 作为 MCP 服务器运行      |
| `codex cloud`      |           | 实验性       | 浏览并执行 Cloud 任务             |
| `codex sandbox`    |           | 实验性       | 在沙箱中运行命令                  |
| `codex debug`      |           | 实验性       | 调试工具                          |
<!--rehype:className=show-header-->

### Exec（非交互）
<!--rehype:wrap-class=col-span-2-->

```bash
# 基础非交互运行
$ codex exec "Fix the race condition"
$ codex e "Add unit tests for utils"
```

从 stdin 读取提示词

```bash
$ echo "Explain main.go" | codex exec -
```

Prompt-plus-stdin（0.118+）：既传入管道数据，也传入提示词

```bash
$ cat error.log | codex exec "Diagnose this log" -
```

输出选项

```bash
$ codex exec --json "Audit security"
$ codex exec -o last.txt "Summarize"
```

恢复之前的 exec 会话

```bash
$ codex exec resume --last "Fix the bugs"
$ codex exec resume <SESSION_ID> "Implement"
```

全局选项
---
<!--rehype:body-class=cols-2-->

### 全部参数

| 参数                      | 取值            | 说明                               |
| ------------------------- | --------------- | ---------------------------------- |
| `-m, --model`             | string          | 覆盖模型（例如 `gpt-5.4`）         |
| `-s, --sandbox`           | 见下文          | 沙箱策略                           |
| `-a, --ask-for-approval`  | 见下文          | 审批策略                           |
| `--full-auto`             | flag            | workspace-write + on-request       |
| `--yolo`                  | flag            | 跳过全部审批和沙箱                 |
| `-i, --image`             | path            | 给初始提示附加图片                 |
| `-c, --config`            | `key=val`       | 覆盖配置项                         |
| `-C, --cd`                | path            | Agent 工作目录                     |
| `-p, --profile`           | string          | 配置档名称                         |
| `--search`                | flag            | 启用实时网页搜索                   |
| `--add-dir`               | path            | 追加可写目录权限                   |
| `--oss`                   | flag            | 使用本地 OSS provider              |
| `--local-provider`        | lmstudio/ollama | 指定 OSS provider                  |
| `--enable`                | feature         | 启用特性开关                       |
| `--disable`               | feature         | 禁用特性开关                       |
| `--no-alt-screen`         | flag            | 内联 TUI 模式（禁用 alt screen）   |
| `--remote`                | ws://host:port  | 连接远程 app server                |
| `--remote-auth-token-env` | ENV_VAR         | 远程 WS 的 Bearer Token 环境变量   |
| `-V, --version`           |                 | 输出版本                           |
| `-h, --help`              |                 | 输出帮助                           |
<!--rehype:className=show-header-->

### 使用示例

```bash
# 指定模型
$ codex -m gpt-5.4 "Refactor the auth module"

# 自动模式（低摩擦）
$ codex --full-auto "Run tests and fix failures"

# 附加截图
$ codex -i mockup.png "Implement this UI"

# 命令行临时覆盖配置
$ codex -c model="gpt-5.4-mini" "Quick scan"

# 实时网页搜索
$ codex --search "Find the latest async syntax"

# 设置工作目录
$ codex -C ~/projects/api "Review this codebase"
```

沙箱与审批
---
<!--rehype:body-class=cols-3-->

### 沙箱模式

| 模式                 | 说明                                    |
| -------------------- | --------------------------------------- |
| `read-only`          | 仅查看，不经批准不修改                  |
| `workspace-write`    | 可改工作区并运行本地命令                |
| `danger-full-access` | 无限制（仅建议在强化隔离环境中使用）    |

### 审批策略

| 策略         | 说明                                      |
| ------------ | ----------------------------------------- |
| `untrusted`  | 所有非可信命令执行前都询问                |
| `on-request` | 超出沙箱边界时询问                        |
| `never`      | 从不询问；所有命令自动执行                |

### 预设

| 预设          | 等价设置                         |
| ------------- | -------------------------------- |
| `--full-auto` | `workspace-write` + `on-request` |
| `--yolo`      | 无沙箱 + 无审批                  |

可在 TUI 中使用 `/permissions` 在会话中途切换模式。

Slash 命令
---
<!--rehype:body-class=cols-3-->

### 会话控制
<!--rehype:wrap-class=row-span-2-->

| 命令              | 说明                            |
| ----------------- | ------------------------------- |
| `/model`          | 切换模型/推理强度               |
| `/fast`           | 切换 GPT-5.4 Fast 模式          |
| `/permissions`    | 调整审批模式                    |
| `/personality`    | 设置响应风格                    |
| `/plan`           | 进入计划模式                    |
| `/status`         | 显示模型、tokens、配置          |
| `/compact`        | 压缩总结以释放上下文            |
| `/clear`          | 清空聊天并重新开始              |
| `/new`            | 新建聊天，保留 CLI 会话         |
| `/fork`           | 分叉当前会话                    |
| `/resume`         | 恢复已保存会话                  |
| `/exit` / `/quit` | 退出 CLI                        |

### 审查与代码

| 命令       | 说明                        |
| ---------- | --------------------------- |
| `/review`  | 启动代码审查                |
| `/diff`    | 显示 Git diff               |
| `/copy`    | 复制最新 Codex 输出         |
| `/mention` | 向会话附加文件              |
| `/init`    | 生成 AGENTS.md 模板         |

### 工具与调试

| 命令                    | 说明                           |
| ----------------------- | ------------------------------ |
| `/agent`                | 切换当前 agent 线程            |
| `/mcp`                  | 列出 MCP 工具                  |
| `/apps`                 | 浏览连接器应用                 |
| `/experimental`         | 切换实验性特性                 |
| `/statusline`           | 配置 TUI 底栏                  |
| `/ps`                   | 显示后台终端                   |
| `/sandbox-add-read-dir` | 添加可读目录（Windows）        |
| `/feedback`             | 向维护者发送日志               |
| `/plugins`              | 浏览并管理插件                 |
| `/title`                | 为当前会话设置终端标题         |
| `/debug-config`         | 输出配置诊断信息               |
| `/logout`               | 退出 Codex 登录                |

模型
---

### 可用模型
<!--rehype:wrap-class=col-span-2-->

| 模型                  | 速度  | 适用场景                                 |
| --------------------- | ----- | ---------------------------------------- |
| `gpt-5.4`             | ★★★   | 默认：编码 + 推理 + 工作流               |
| `gpt-5.4-mini`        | ★★★★★ | 子代理、轻量任务、更高配额               |
| `gpt-5.3-codex`       | ★★★★  | 复杂软件工程任务                         |
| `gpt-5.3-codex-spark` | ★★★★★ | 近实时迭代（仅 Pro）                     |
<!--rehype:className=show-header-->

### 选择模型

```bash
$ codex -m gpt-5.4 "Your prompt"
$ codex -m gpt-5.4-mini "Quick task"
$ codex --oss    # local Ollama / LM Studio
# 会话中途可在 TUI 输入 /model
```

配置
---
<!--rehype:body-class=cols-2-->

### config.toml 关键项
<!--rehype:wrap-class=row-span-2-->

```toml
# ~/.codex/config.toml

# 模型设置
model = "gpt-5.4"
model_provider = "openai"
model_reasoning_effort = "medium"  # low | medium | high

# 沙箱与审批
sandbox_mode = "workspace-write"
approval_policy = "on-request"

# 网页搜索：cached | live | disabled
web_search = "cached"

# 审查模型覆盖
review_model = "gpt-5.4"

# TUI 外观
[tui]
theme = "dark"
alternate_screen = true

# 配置档示例
[profile.ci]
model = "gpt-5.4-mini"
approval_policy = "never"
sandbox_mode = "workspace-write"
```

使用 `-p ci` 启用该配置档。

### 特性开关

```bash
$ codex features list
$ codex features enable unified_exec
$ codex features disable shell_snapshot

# 仅当前会话生效（不持久化）
$ codex --enable unified_exec
$ codex --disable shell_snapshot
```

### 配置位置

| 文件                   | 用途                  |
| ---------------------- | --------------------- |
| `~/.codex/config.toml` | 全局默认配置          |
| `~/.codex/AGENTS.md`   | 个人指令              |
| `~/.agents/skills/`    | 个人技能              |
| `.agents/skills/`      | 仓库级技能            |
| `AGENTS.md`            | 仓库指令              |

自定义
---

### AGENTS.md

可随代码一同提交的仓库级持久指令：

```markdown
## 构建与测试命令

- 安装：`npm install`
- 测试：`npm test`
- Lint：`npm run lint`

## 约定

- TypeScript 严格模式
- 日志中不得包含 PII
- 所有路由都需鉴权中间件

## 审查准则

- 标记未处理的 Promise rejection
```

建议添加规则的场景：

- Agent 重复犯错
- PR 审查反馈反复出现
- 在 GitHub 使用 `@codex add to AGENTS.md` 标签

### Skills

可复用工作流可打包为 `SKILL.md`：

```
my-skill/
  SKILL.md      ← 元数据 + 指令
  scripts/      ← 可选辅助脚本
  references/   ← 可选文档
  assets/       ← 可选模板
```

`SKILL.md` 示例：

```markdown
---
name: commit
description: 按语义分组暂存并提交变更。
---

1. 按逻辑分组暂存文件。
2. 分组顺序：feat → test → docs → chore
3. 编写简洁的提交信息。
```

### MCP Servers

```bash
# 添加 stdio 服务器
$ codex mcp add myserver -- npx my-mcp-server

# 添加 HTTP 服务器
$ codex mcp add myserver \
    --url https://api.example.com/mcp

# 带认证 token
$ codex mcp add myserver \
    --url https://api.example.com/mcp \
    --bearer-token-env-var MY_TOKEN

# 列出 / 删除
$ codex mcp list
$ codex mcp remove myserver

# 将 Codex 自身作为 MCP 服务器运行
$ codex mcp-server
```

会话管理
---
<!--rehype:body-class=cols-3-->

### 恢复会话

```bash
$ codex resume        # 会话选择器
$ codex resume --last # 最近一次会话
$ codex resume --all  # 跨目录查找
$ codex resume <ID> "Continue fixing tests"
```
<!--rehype:className=wrap-text-->

会话保存在 `~/.codex/sessions/`

### 分叉会话

```bash
$ codex fork             # 从选择器分叉
$ codex fork --last      # 分叉最近一次
$ codex fork <SESSION_ID> "New direction"
```

分叉会保留原始会话记录，并开启一条新分支。

### 图片输入

```bash
# 单张图片
$ codex -i screenshot.png "Fix this error"

# 多张图片
$ codex --image img1.png,img2.jpg "Compare"

# 或将图片直接拖入 TUI 输入框
```

支持 PNG、JPEG 等常见格式。

Cloud 与 GitHub
---
<!--rehype:body-class=cols-3-->

### Cloud 任务
<!--rehype:wrap-class=col-span-2-->

```bash
# 浏览 Cloud 环境
$ codex cloud

# 提交 Cloud 任务
$ codex cloud exec --env <ENV_ID> "Fix bug"

# 多次尝试（best-of-N）
$ codex cloud exec --env <ENV_ID> \
    --attempts 3 "Write failing tests"

# 列出最近任务
$ codex cloud list

# 查看任务状态
$ codex cloud status <TASK_ID>

# 查看任务 diff
$ codex cloud diff <TASK_ID>

# 将 diff 应用到本地工作树
$ codex apply <TASK_ID>
```

### GitHub 集成

```bash
# 在 PR 评论中触发代码审查：
@codex review

# 自定义关注点：
@codex review for security regressions

# 基于 PR 上下文委派任意任务：
@codex fix the CI failures
@codex add tests for the new endpoint
```

在 Codex Settings → Code review → 你的仓库中启用；开启 Automatic reviews 后，可自动审查每个新 PR。

子代理工作流
---
<!--rehype:body-class=cols-2-->

### 子代理指南
<!--rehype:wrap-class=row-span-2-->

将噪声任务分发给并行代理，以避免**上下文污染**和**上下文老化**：

```
codex "Review this branch with parallel agents.
Spawn one for security risks, one for test gaps,
and one for maintainability. Wait for all three,
then summarize findings with file references."
```

- 适用于：探索、测试、分诊、日志分析
- 避免并行执行大量写入任务（易冲突）
- 每个子代理都会额外消耗 tokens

**子代理模型建议：**

| 角色                    | 模型           | 推理强度  |
| ----------------------- | -------------- | --------- |
| 主协调代理              | `gpt-5.4`      | medium    |
| 快速探索代理            | `gpt-5.4-mini` | low       |
| 安全/逻辑审查代理       | `gpt-5.4`      | high      |
<!--rehype:className=show-header-->

### 推理强度

| 等级     | 适用场景                       |
| -------- | ------------------------------ |
| `high`   | 复杂逻辑、安全审计             |
| `medium` | 通用任务（默认）               |
| `low`    | 简单任务或对速度敏感的任务     |

可在 `config.toml` 中设置：

```toml
model_reasoning_effort = "medium"
```

也可命令行临时指定：`-c model_reasoning_effort="high"`

延伸阅读
---

- [Codex 官方文档](https://developers.openai.com/codex/cli) _(developers.openai.com)_
- [Codex CLI GitHub](https://github.com/openai/codex) _(github.com)_
- [Codex 计费说明](https://developers.openai.com/codex/pricing) _(developers.openai.com)_
- [自定义指南](https://developers.openai.com/codex/concepts/customization) _(developers.openai.com)_
- [提示词最佳实践](https://developers.openai.com/codex/prompting) _(developers.openai.com)_
- [工作流与示例](https://developers.openai.com/codex/workflows) _(developers.openai.com)_
