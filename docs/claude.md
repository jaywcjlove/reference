ClaudeCode 备忘清单
===

ClaudeCode 命令行开发工具快速参考备忘单。

CLI 参考
---

### 命令行
<!--rehype:wrap-class=col-span-2-->

| 命令  | 描述  | 示例  |
| --- | --- | --- |
| `claude` | 启动交互式 REPL | `claude` |
| `claude "query"` | 使用初始提示启动 REPL | `claude "explain this project"` |
| `claude -p "query"` | 通过 SDK 查询，然后退出 | `claude -p "explain this function"` |
| `cat file \| claude -p "query"` | 处理管道内容 | `cat logs.txt \| claude -p "explain"` |
| `claude -c` | 继续最近的对话 | `claude -c` |
| `claude -c -p "query"` | 通过 SDK 继续 | `claude -c -p "Check for type errors"` |
| `claude -r "<session-id>" "query"` | 通过 ID 恢复会话 | `claude -r "abc123" "Finish this PR"` |
| `claude update` | 更新到最新版本 | `claude update` |
| `claude mcp` | 配置模型上下文协议 (MCP) 服务器 | 请参阅 [Claude Code MCP 文档](https://docs.anthropic.com/zh-CN/docs/claude-code/mcp)。 |
<!--rehype:className=left-align-->

### CLI 标志
<!--rehype:wrap-class=row-span-2-->

使用这些命令行标志自定义 Claude Code 的行为：

| 标志  | 描述  | 示例  |
| --- | --- | --- |
| `--add-dir` | 添加额外的工作目录供 Claude 访问（验证每个路径是否作为目录存在） | `claude --add-dir ../apps ../lib` |
| `--allowedTools` | 除了 [settings.json 文件](https://docs.anthropic.com/zh-CN/docs/claude-code/settings) 之外，应该在不提示用户许可的情况下允许的工具列表 | `"Bash(git log:*)" "Bash(git diff:*)" "Read"` |
| `--disallowedTools` | 除了 [settings.json 文件](https://docs.anthropic.com/zh-CN/docs/claude-code/settings) 之外，应该在不提示用户许可的情况下禁止的工具列表 | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"` |
| `--print`, `-p` | 打印响应而不使用交互模式（有关编程使用详细信息，请参阅 [SDK 文档](https://docs.anthropic.com/zh-CN/docs/claude-code/sdk)） | `claude -p "query"` |
| `--append-system-prompt` | 附加到系统提示（仅与 `--print` 一起使用） | `claude --append-system-prompt "Custom instruction"` |
| `--output-format` | 为打印模式指定输出格式（选项：`text`、`json`、`stream-json`） | `claude -p "query" --output-format json` |
| `--input-format` | 为打印模式指定输入格式（选项：`text`、`stream-json`） | `claude -p --output-format json --input-format stream-json` |
| `--verbose` | 启用详细日志记录，显示完整的轮次输出（在打印和交互模式中都有助于调试） | `claude --verbose` |
| `--max-turns` | 在非交互模式下限制代理轮次数量 | `claude -p --max-turns 3 "query"` |
| `--model` | 使用最新模型的别名（`sonnet` 或 `opus`）或模型的全名为当前会话设置模型 | `claude --model claude-sonnet-4-20250514` |
| `--permission-mode` | 在指定的[权限模式](iam#permission-modes)下开始 | `claude --permission-mode plan` |
| `--permission-prompt-tool` | 指定一个 MCP 工具来处理非交互模式下的权限提示 | `claude -p --permission-prompt-tool mcp_auth_tool "query"` |
| `--resume` | 通过 ID 恢复特定会话，或在交互模式下选择 | `claude --resume abc123 "query"` |
| `--continue` | 在当前目录中加载最近的对话 | `claude --continue` |
| `--dangerously-skip-permissions` | 跳过权限提示（谨慎使用） | `claude --dangerously-skip-permissions` |
<!--rehype:className=style-list-arrow squarefill-->

### 内置斜杠命令
<!--rehype:wrap-class=col-span-2-->

| 命令  | 用途  |
| --- | --- |
| `/add-dir` | 添加额外的工作目录 |
| `/agents` | 管理用于专门任务的自定义AI子代理 |
| `/bug` | 报告错误（将对话发送给Anthropic） |
| `/clear` | 清除对话历史 |
| `/compact [instructions]` | 压缩对话，可选择性地提供重点指令 |
| `/config` | 查看/修改配置 |
| `/cost` | 显示令牌使用统计（请参阅[成本跟踪指南](https://docs.anthropic.com/zh-CN/docs/claude-code/costs#using-the-cost-command)了解订阅特定详情） |
| `/doctor` | 检查您的Claude Code安装的健康状况 |
| `/help` | 获取使用帮助 |
| `/init` | 使用CLAUDE.md指南初始化项目 |
| `/login` | 切换Anthropic账户 |
| `/logout` | 从您的Anthropic账户登出 |
| `/mcp` | 管理MCP服务器连接和OAuth身份验证 |
| `/memory` | 编辑CLAUDE.md内存文件 |
| `/model` | 选择或更改AI模型 |
| `/permissions` | 查看或更新[权限](https://docs.anthropic.com/zh-CN/docs/claude-code/iam#configuring-permissions) |
| `/pr_comments` | 查看拉取请求评论 |
| `/review` | 请求代码审查 |
| `/status` | 查看账户和系统状态 |
| `/terminal-setup` | 安装Shift+Enter键绑定用于换行（仅限iTerm2和VSCode） |
| `/vim` | 进入vim模式以在插入和命令模式之间切换 |
<!--rehype:className=left-align-->

键盘快捷键
---

### 通用控制

| 快捷键 | 描述  | 上下文 |
| --- | --- | --- |
| `Ctrl+C` | 取消当前输入或生成 | 标准中断 |
| `Ctrl+D` | 退出 Claude Code 会话 | EOF 信号 |
| `Ctrl+L` | 清除终端屏幕 | 保留对话历史 |
| `上/下箭头` | 导航命令历史 | 回调之前的输入 |
| `Esc` + `Esc` | 编辑上一条消息 | 双击 Esc 键修改 |
| `Shift+Tab` | 切换权限模式 | 在自动接受模式、计划模式和正常模式之间切换 |
<!--rehype:className=left-align shortcuts-->

### 多行输入

| 方法  | 快捷键 | 上下文 |
| --- | --- | --- |
| 快速转义 | `\` + `Enter` | 在所有终端中有效 |
| macOS 默认 | `Option+Enter` | macOS 上的默认设置 |
| 终端设置 | `Shift+Enter` | 在 `/terminal-setup` 之后 |
| 控制序列 | `Ctrl+J` | 多行换行符 |
| 粘贴模式 | 直接粘贴 | 用于代码块、日志 |
<!--rehype:className=left-align shortcuts-->

### 快速命令

| 快捷键 | 描述  | 注释  |
| --- | --- | --- |
| 开头的 `#` | 内存快捷键 - 添加到 CLAUDE.md | 提示文件选择 |
| 开头的 `/` | 斜杠命令 | 参见[斜杠命令](https://docs.anthropic.com/zh-CN/docs/claude-code/slash-commands) |
| 开头的 `!` | Bash 模式 | 直接运行命令并将执行输出添加到会话中 |
<!--rehype:className=left-align shortcuts-->

Vim 编辑器模式
---

### 模式切换

| 命令  | 操作  | 从模式 |
| --- | --- | --- |
| `Esc` | 进入 NORMAL 模式 | INSERT |
| `i` | 在光标前插入 | NORMAL |
| `I` | 在行首插入 | NORMAL |
| `a` | 在光标后插入 | NORMAL |
| `A` | 在行尾插入 | NORMAL |
| `o` | 在下方打开新行 | NORMAL |
| `O` | 在上方打开新行 | NORMAL |

### 导航（NORMAL 模式）

| 命令  | 操作  |
| --- | --- |
| `h`/`j`/`k`/`l` | 向左/下/上/右移动 |
| `w` | 下一个单词 |
| `e` | 单词末尾 |
| `b` | 上一个单词 |
| `0` | 行首  |
| `$` | 行尾  |
| `^` | 第一个非空白字符 |
| `gg` | 输入开头 |
| `G` | 输入末尾 |

### 编辑（NORMAL 模式）

| 命令  | 操作  |
| --- | --- |
| `x` | 删除字符 |
| `dd` | 删除行 |
| `D` | 删除到行尾 |
| `dw`/`de`/`db` | 删除单词/到末尾/向后 |
| `cc` | 更改行 |
| `C` | 更改到行尾 |
| `cw`/`ce`/`cb` | 更改单词/到末尾/向后 |
| `.` | 重复上次更改 |

Hooks 参考
---

### 配置

* `~/.claude/settings.json` 用户设置
* `.claude/settings.json` 项目设置
* `.claude/settings.local.json` 本地项目设置（不提交）
* 企业管理策略设置

### 结构
<!--rehype:wrap-class=col-span-2 row-span-2-->

```json
{
    "hooks": {
        "EventName": [
            {
                "matcher": "ToolPattern",
                "hooks": [
                    { "type": "command", "command": "your-command-here" }
                ]
            }
        ]
    }
}
```

#### <pur>matcher</pur> 匹配工具名称的模式，区分大小写（仅适用于 `PreToolUse` 和 `PostToolUse`）

* 简单字符串精确匹配：`Write` 仅匹配 Write 工具
* 支持正则表达式：`Edit|Write` 或 `Notebook.*`
* 使用 `*` 匹配所有工具。您也可以使用空字符串（`""`）或留空 `matcher`。

#### <pur>hooks</pur> 当模式匹配时要执行的命令数组

* `type`：目前仅支持 `"command"`
* `command`：要执行的 bash 命令（可以使用 `$CLAUDE_PROJECT_DIR` 环境变量）
* `timeout`：（可选）命令应该运行多长时间（以秒为单位），在取消该特定命令之前。

### 项目特定的 Hook 脚本

```json {9}
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
{
    "type": "command",
    "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/check-style.sh"
}
        ]
      }
    ]
  }
}
```

可通过环境变量 `CLAUDE_PROJECT_DIR` 引用项目中的脚本，确保无论 Claude 当前目录如何都能正常使用（仅在生成 hook 命令时可用）

Hook 事件
---

### PreToolUse

#### 常见匹配器

* `Task` - 子代理任务（参见[子代理文档](https://docs.anthropic.com/zh-CN/docs/claude-code/sub-agents)）
* `Bash` - Shell 命令
* `Glob` - 文件模式匹配
* `Grep` - 内容搜索
* `Read` - 文件读取
* `Edit`、`MultiEdit` - 文件编辑
* `Write` - 文件写入
* `WebFetch`、`WebSearch` - Web 操作

在 Claude 创建工具参数之后、处理工具调用之前运行。

### 其它 Hook

Hook | 描述
--- | ---
`PostToolUse` | 在工具成功完成后立即运行。
`UserPromptSubmit` | 当用户提交提示时、Claude 处理之前运行。这允许您根据提示/对话添加额外的上下文、验证提示或阻止某些类型的提示。
`Stop` | 当主 Claude Code 代理完成响应时运行。如果停止是由于用户中断而发生的，则不会运行。
`SubagentStop` | 当 Claude Code 子代理（Task 工具调用）完成响应时运行。
<!--rehype:className=style-list-arrow square-->

### Notification

当 Claude Code 发送通知时运行。通知在以下情况下发送：

Hook | 描述
--- | ---
Claude 需要您的权限来使用工具。 | 示例：“Claude needs your permission to use Bash”
提示输入已空闲至少 `60` 秒。 | “Claude is waiting for your input”
<!--rehype:className=style-list-arrow square-->

### ​PreCompact

在 Claude Code 即将运行压缩操作之前运行。

#### 匹配器
<!--rehype:style=text-align:left;-->

Hook | 描述
--- | ---
`manual` | 从 `/compact` 调用
`auto` | 从自动压缩调用（由于上下文窗口已满）
<!--rehype:className=style-list-arrow square-->

### SessionStart

当 Claude Code 启动新会话或恢复现有会话时运行（目前确实会在底层启动新会话）

#### 匹配器
<!--rehype:style=text-align:left;-->

* `startup` - 从启动调用
* `resume` - 从 `--resume`、`--continue` 或 `/resume` 调用
* `clear` - 从 `/clear` 调用
* `compact` - 从自动或手动压缩调用。

对于加载开发上下文（如现有问题或代码库的最近更改）很有用。

### SessionEnd

#### hook 输入中的 reason 字段将是以下之一
<!--rehype:style=text-align:left;-->

* `clear` - 使用 /clear 命令清除会话
* `logout` - 用户注销
* `prompt_input_exit` - 用户在提示输入可见时退出
* `other` - 其他退出原因

当 Claude Code 会话结束时运行。对于清理任务、记录会话统计信息或保存会话状态很有用。

Hook 输入
---

### 示例

Hooks 通过 `stdin` 接收包含会话信息和事件特定数据的 JSON 数据：

```json
{
  // 通用字段
  session_id: string
  // 对话 JSON 的路径
  transcript_path: string  
  // 调用 hook 时的当前工作目录
  cwd: string              

  // 事件特定字段
  hook_event_name: string
  ...
}
```

### PreToolUse 输入

`tool_input` 的确切模式取决于工具。

```json {5}
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "PreToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  }
}
```

### PostToolUse 输入

`tool_input` 和 `tool_response` 的确切模式取决于工具。

```json {5}
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "PostToolUse",
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.txt",
    "content": "file content"
  },
  "tool_response": {
    "filePath": "/path/to/file.txt",
    "success": true
  }
}
```

### Notification 输入

```json {5}
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "Notification",
  "message": "Task completed successfully"
}
```

### UserPromptSubmit 输入

```json {5}
{
  "session_id": "abc123",
  "transcript_path": "/Users/.../.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "UserPromptSubmit",
  "prompt": "Write a function to calculate the factorial of a number"
}
```

### Stop 和 SubagentStop 输入

```json {4}
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "Stop",
  "stop_hook_active": true
}
```

当 Claude Code 已经因为 `stop hook` 而继续时，`stop_hook_active` 为 `true`。检查此值或处理记录以防止 Claude Code 无限运行。

### PreCompact 输入

```json {4}
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "PreCompact",
  "trigger": "manual",
  "custom_instructions": ""
}
```

对于 `manual`，`custom_instructions` 来自用户传递给 `/compact` 的内容。对于 `auto`，`custom_instructions` 为空。

### SessionStart 输入

```json {4}
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "hook_event_name": "SessionStart",
  "source": "startup"
}
```

### SessionEnd 输入

```json {5}
{
  "session_id": "abc123",
  "transcript_path": "~/.claude/projects/.../00893aaf-19fa-41d2-8238-13269b9b3ca0.jsonl",
  "cwd": "/Users/...",
  "hook_event_name": "SessionEnd",
  "reason": "exit"
}
```

另见
----

* [Claude 代码参考](https://docs.anthropic.com/zh-CN/docs/claude-code/cli-reference) _(docs.anthropic.com)_
* [送你一张Claude Code速查表](https://mp.weixin.qq.com/s/LbQbzvXh49Qo22nArTv4Og) _(weixin.qq.com)_
