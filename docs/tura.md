Tura 备忘清单
===

[Tura](https://turaai.net/) 是一个开源、本地优先的 AI 编程代理，提供交互式终端界面、可脚本化 CLI、多模型提供商路由和持久会话管理。本清单基于 Tura `v0.1.33` 的命令帮助整理。

快速开始
---
<!--rehype:body-class=cols-3-->

### 安装

```bash
# 从 npm 安装
$ npm install -g tura-ai

# 验证 CLI
$ tura --help
```

也可以从 [GitHub Releases](https://github.com/Tura-AI/tura/releases) 下载 Windows、macOS 和 Linux 构建。

### 配置提供商

```bash
# 查看可用提供商及认证状态
$ tura provider list

# 启动 Codex 登录流程
$ tura provider login codex

# 只打印 OpenAI 登录地址，不自动打开浏览器
$ tura provider login openai --no-open
```

Tura 不会随安装包附带模型凭据，第一次运行代理任务前需要配置至少一个模型提供商。

### 交互式终端

```bash
# 打开交互式 TUI
$ tura

# 在指定工作区打开
$ tura --cwd /path/to/project

# 使用中文界面文本
$ tura --lang zh-CN
```

运行代理任务
---
<!--rehype:body-class=cols-2-->

### 非交互式运行

```bash
# 发送一个提示并流式返回结果
$ tura run "检查工作区并总结架构"

# 为本次请求指定模型
$ tura run --model openai/gpt-5 "修复失败的测试"

# 为长任务设置超时时间（秒）
$ tura run --timeout 1200 "运行发布验证"
```

### Rust CLI 前端

```bash
# 在工作区内运行脚本友好的 CLI
$ tura exec --cwd . --model openai/gpt-5 "检查工作区"

# 隐藏写入 stderr 的进度信息
$ tura exec --quiet "只返回最终答案"

# 持续运行，直到目标完成或需要提问
$ tura exec --goal "修复并验证失败的测试"
```

### Shell 执行环境

```bash
# 强制命令工具使用 Bash
$ tura bash "检查 Shell 脚本"

# 强制命令工具使用 Zsh
$ tura zsh "检查启动文件"

# 使用系统 shell_command 接口
$ tura shel "检查当前工作区"
```

### 常用运行参数

| 参数                   | 说明                          |
| ---------------------- | ----------------------------- |
| `--session ID`         | 继续指定会话                  |
| `-m, --model MODEL`    | 临时覆盖模型                  |
| `-a, --agent-id ID`    | 选择代理配置                  |
| `-p, --priority`       | 启用优先模型路由              |
| `--output FORMAT`      | 输出 `text`、`json` 或 `ndjson` |
| `--stream`             | 流式输出网关事件              |
| `--no-stream`          | 轮询等待任务完成              |
| `--timeout SECONDS`    | 设置本次任务超时              |
| `-c, --config KEY=VALUE` | 添加运行时配置覆盖          |
<!--rehype:className=left-align style-list-arrow-->

输出与脚本
---
<!--rehype:body-class=cols-2-->

### 结构化输出

```bash
# 流式输出 NDJSON 事件
$ tura run --output ndjson "修复失败的测试"

# 从 stdin 读取提示并输出 JSONL 事件
$ echo "总结架构" | tura exec --json

# 将最终回复写入文件
$ tura exec --output-last-message result.md "审查仓库"
```

### 会话管理

```bash
# 以 JSON 列出会话
$ tura session list --json

# 查看指定会话
$ tura session show SESSION_ID --json

# 向最近会话追加提示
$ tura resume --last "继续并验证结果"

# 中止正在运行的会话
$ tura session abort SESSION_ID --json
```

代理与配置
---
<!--rehype:body-class=cols-2-->

### 代理配置

```bash
# 列出代理
$ tura agent list --json

# 查看代理配置
$ tura agent show AGENT_ID --json

# 设置代理使用的模型与推理等级
$ tura agent model AGENT_ID openai/gpt-5 --reasoning high

# 为单次请求选择代理
$ tura run --agent-id AGENT_ID "审查当前改动"
```

### 工作区配置

```bash
# 读取全部会话配置
$ tura config get

# 更新一个或多个配置值
$ tura config set model=openai/gpt-5 planning=on

# 查看默认模型层级
$ tura config model-tiers --json
```

Shell 补全
---
<!--rehype:body-class=cols-3-->

### Bash

```bash
$ tura completion bash > ~/.local/share/bash-completion/completions/tura
```

### Zsh

```bash
$ tura completion zsh > "${fpath[1]}/_tura"
```

### Fish

```bash
$ tura completion fish > ~/.config/fish/completions/tura.fish
```

延伸阅读
---

- [Tura 官方网站](https://turaai.net/) _(turaai.net)_
- [Tura GitHub 仓库](https://github.com/Tura-AI/tura) _(github.com)_
- [Tura 文档](https://github.com/Tura-AI/tura/tree/main/docs) _(github.com)_
- [Tura Releases](https://github.com/Tura-AI/tura/releases) _(github.com)_
