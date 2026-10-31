agent-qa 备忘清单
===

[agent-qa](https://github.com/vostride/agent-qa) 是通过自然语言测试 Web、Android 和 iOS 界面的 CLI 与 MCP 工具，具备先进的 memidex 记忆引擎和自我改进能力。

快速开始
---

### 安装与初始化

```bash
npm install -D agent-qa@0.2.3
npx agent-qa init --platform web
```

需要 Node.js 24+；本文命令对应 `0.2.3`，后续命令在初始化后的项目根目录运行。

执行测试前，按[官方快速开始](https://vostride.com/docs/agent-qa/quickstart)连接模型并完成认证，模型服务可能计费；项目许可证为 `FSL-1.1-ALv2`。

### 浏览器与环境

```bash
npx agent-qa install-browsers --chromium
npx agent-qa doctor
```

`install-browsers` 安装浏览器支持，`doctor` 检查环境和依赖；Android 与 iOS 的驱动、设备配置见官方文档。

### 查看帮助

```bash
npx agent-qa --version
npx agent-qa --help
npx agent-qa run --help
```

测试与结果
---

### 验证与运行
<!--rehype:wrap-class=col-span-2-->

| 命令 | 用途 |
| --- | --- |
| `npx agent-qa validate` | 验证配置、测试文件和测试套件引用 |
| `npx agent-qa run --list-tests` | 列出发现的测试文件，不执行测试 |
| `npx agent-qa run --dry-run` | 解析并列出测试，不执行测试 |
| `npx agent-qa run` | 按项目配置运行测试 |
| `npx agent-qa run --platform web --headless` | 筛选 Web 测试并以无头模式运行 |
| `npx agent-qa run --junit-output results.xml` | 运行测试并输出 JUnit XML |
<!--rehype:className=left-align show-header-->

### 查看已有运行

```bash
npx agent-qa runs list
npx agent-qa runs list --verdict failed --limit 10
npx agent-qa runs overview RUN_ID
npx agent-qa runs knowledge RUN_ID
```

将 `RUN_ID` 替换为列表中的运行 ID；`overview` 查看测试与步骤，`knowledge` 查看该次运行使用和学到的知识。

记忆与 MCP
---

### 查看 memidex 记忆

```bash
npx agent-qa knowledge inspect
npx agent-qa knowledge inspect --kind caution --json
```

查看已提交的知识记录；`--kind` 可按 `fact`、`procedure`、`caution`、`unknown` 或 `policy` 筛选。

### 启动 MCP 服务

```bash
npx agent-qa mcp
```

默认通过 stdio 通信；MCP 客户端的启动目录需指向已初始化并配置模型的项目，配置方式见 [MCP 文档](https://vostride.com/docs/agent-qa/mcp)。

参考资料
---

- [项目仓库](https://github.com/vostride/agent-qa)
- [快速开始](https://vostride.com/docs/agent-qa/quickstart)
- [CLI 命令](https://vostride.com/docs/agent-qa/cli)
- [MCP 服务](https://vostride.com/docs/agent-qa/mcp)
