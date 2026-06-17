AI 工具 备忘清单
===

这份清单按使用场景整理主流 AI 工具，优先给出官方入口、帮助中心或开发者文档。AI 产品的模型、价格、地区可用性和商用条款更新很快，落地前应以官方文档、定价页、服务条款和状态页为准。

选型路线
---

### 常见场景
<!--rehype:wrap-class=col-span-2-->

| 场景 | 优先查看 | 验证重点 |
| --- | --- | --- |
| 通用问答与写作 | ChatGPT、Claude、Gemini、Kimi、Qwen、Doubao | 上下文长度、文件能力、隐私设置、地区可用性 |
| 搜索与资料核查 | Perplexity、Gemini、Grok、You.com | 引用来源、网页检索、学术/新闻覆盖、可追溯性 |
| 编程与代码审查 | GitHub Copilot、Cursor、Claude Code、Codex、Gemini CLI | 仓库权限、终端权限、IDE 支持、审计日志 |
| 应用生成与原型 | Devin、Replit Agent、v0、Bolt、Lovable | 生成代码归属、部署路径、依赖安全、回滚能力 |
| 图像/视频/音频 | Midjourney、Adobe Firefly、Runway、Luma、Pika、ElevenLabs、Suno | 版权、素材来源、商用授权、水印、品牌安全 |
| 本地模型与私有化 | Ollama、LM Studio、Hugging Face、Model Studio | 硬件需求、离线能力、模型许可证、企业数据边界 |
| 办公知识库 | Microsoft 365 Copilot、NotebookLM、Notion AI、Canva AI | 数据隔离、连接器权限、企业管理、导出能力 |
<!--rehype:className=left-align show-header-->

### 验证顺序

- 先读官方 Docs / Help Center / Learn 文档，确认产品定位与能力边界。
- 查看 Pricing、Terms、Privacy、Security、Release notes 或 Status 页面。
- 用真实任务小样本验证：同一输入至少跑 3 次，记录输出质量、延迟与成本。
- 对接代码、文档或企业数据前，确认权限、日志、数据保留和训练开关。
- 上线前保留人工审核、回滚方案和替代模型路径。
<!--rehype:className=style-round-->

通用聊天与搜索
---

### 全球常用助手
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| ChatGPT | 通用问答、写作、文件分析、图像与语音交互 | [ChatGPT](https://chatgpt.com/)、[OpenAI Help Center](https://help.openai.com/) |
| Claude | 长文档理解、写作、代码解释、企业工作流 | [Claude Docs](https://platform.claude.com/docs/en/home)、[Claude](https://claude.ai/) |
| Gemini | Google 生态、搜索辅助、多模态、移动端助手 | [Gemini](https://gemini.google.com/)、[Gemini Apps Help](https://support.google.com/gemini/) |
| Microsoft Copilot | Microsoft 365、Windows、Edge 与企业办公 | [Microsoft 365 Copilot Docs](https://learn.microsoft.com/en-us/microsoft-365/copilot/) |
| Perplexity | 联网搜索、引用式回答、资料核查 | [Perplexity Help Center](https://www.perplexity.ai/help-center/en/index.html)、[API Platform](https://www.perplexity.ai/api-platform) |
| Grok | X 生态、实时信息、xAI API | [Grok](https://x.ai/grok)、[xAI Docs](https://docs.x.ai/) |
| Poe | 多模型聚合、Bot 分发、轻量试用 | [Poe Help Center](https://help.poe.com/hc/en-us) |
| You.com | AI 搜索、研究与生产力助手 | [You.com](https://you.com/)、[Support](https://support.you.com/) |
<!--rehype:className=left-align show-header-->

### 中文与开源生态
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| DeepSeek | 通用对话、推理、开发者 API | [DeepSeek Chat](https://chat.deepseek.com/)、[DeepSeek API Docs](https://api-docs.deepseek.com/) |
| Kimi | 长文本阅读、资料整理、中文写作 | [Kimi](https://kimi.moonshot.cn/)、[Kimi API Docs](https://platform.kimi.ai/docs/api/overview) |
| Qwen | 通义千问、阿里云百炼、模型调用 | [Qwen](https://qwen.ai/)、[Model Studio Docs](https://www.alibabacloud.com/help/en/model-studio/) |
| Doubao | 豆包助手、火山方舟模型服务 | [Doubao](https://www.doubao.com/)、[Volcengine Ark Docs](https://www.volcengine.com/docs/82379/1330310) |
| Mistral | Le Chat、开源/商业模型、开发者 API | [Mistral Docs](https://docs.mistral.ai/)、[Help Center](https://help.mistral.ai/en/) |
| Meta AI | Meta 生态助手、Llama 相关能力入口 | [Meta AI](https://www.meta.ai/) |
| HuggingChat | 开源模型聊天、社区模型体验 | [HuggingChat](https://huggingface.co/chat/)、[Hugging Face Docs](https://huggingface.co/docs) |
| Cohere | 企业检索、RAG、嵌入与重排 | [Cohere Docs](https://docs.cohere.com/docs/models) |
<!--rehype:className=left-align show-header-->

开发与代码
---

### 编码助手
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| GitHub Copilot | IDE 补全、代码生成、PR 与企业开发 | [GitHub Copilot Docs](https://docs.github.com/en/copilot) |
| Cursor | AI 原生编辑器、代码库问答、Agent 编码 | [Cursor Docs](https://cursor.com/docs) |
| Claude Code | 终端编码、代码库理解、自动化修改 | [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview) |
| Codex | 云端任务、IDE 协作、CLI、代码审查工作流 | [Codex Docs](https://developers.openai.com/codex/) |
| Gemini CLI | 终端问答、代码理解、自动化脚本 | [Gemini CLI Repository](https://github.com/google-gemini/gemini-cli) |
<!--rehype:className=left-align show-header-->

### 应用生成与自动开发
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| Devin | 软件工程 Agent、任务执行、代码库维护 | [Devin Docs](https://docs.devin.ai/get-started/devin-intro) |
| Devin Desktop / Windsurf | 本地开发环境、AI IDE、桌面编码助手 | [Desktop Docs](https://docs.devin.ai/desktop/getting-started) |
| Replit Agent | 浏览器内构建、部署、数据库与项目脚手架 | [Replit Agent Docs](https://docs.replit.com/references/agent/overview) |
| v0 | 生成 UI、React/Next.js 原型、Vercel 工作流 | [v0](https://v0.app/)、[Vercel Docs](https://vercel.com/docs) |
| Bolt | 浏览器内全栈原型、StackBlitz 工作流 | [Bolt](https://bolt.new/)、[Bolt.diy](https://github.com/stackblitz-labs/bolt.diy) |
| Lovable | 自然语言生成 Web App、数据库与集成 | [Lovable Docs](https://docs.lovable.dev/introduction/welcome) |
<!--rehype:className=left-align show-header-->

创意生成
---

### 图像与设计
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| Midjourney | 高质量图像生成、风格探索、Discord/Web 工作流 | [Midjourney Docs](https://docs.midjourney.com/hc/en-us) |
| DALL-E / OpenAI Images | 图像生成、编辑、ChatGPT 图像能力 | [OpenAI Images Guide](https://platform.openai.com/docs/guides/image-generation)、[OpenAI Help Center](https://help.openai.com/) |
| Adobe Firefly | 商业设计、Adobe 生态、Firefly API | [Firefly Help](https://helpx.adobe.com/firefly/web.html)、[Firefly API](https://developer.adobe.com/firefly-services/docs/firefly-api/) |
| Canva AI / Magic Studio | 模板设计、营销素材、团队协作 | [Canva AI](https://www.canva.com/canva-ai/)、[Magic Studio Help](https://www.canva.com/help/using-magic-studio-safely-and-legally/) |
<!--rehype:className=left-align show-header-->

### 视频、语音与音乐
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| Runway | 视频生成、视频编辑、创意工作流 | [Runway Help](https://help.runwayml.com/hc/en-us)、[Runway Academy](https://academy.runwayml.com/) |
| Luma Dream Machine | 视频生成、图像转视频、API 调用 | [Luma Docs](https://docs.lumalabs.ai/docs/welcome)、[Dream Machine](https://lumalabs.ai/app) |
| Pika | 视频生成、特效与短片创作 | [Pika](https://pika.art/) |
| ElevenLabs | 文本转语音、语音克隆、语音转文本 | [ElevenLabs Docs](https://elevenlabs.io/docs/overview/intro) |
| Suno | 音乐生成、歌曲创作、版权说明 | [Suno Help](https://help.suno.com/)、[Rights & Ownership](https://help.suno.com/en/categories/550145-rights-ownership) |
<!--rehype:className=left-align show-header-->

本地模型与私有化
---

### 本地运行
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| Ollama | 本地运行模型、命令行管理、兼容 API | [Ollama](https://ollama.com/)、[API Docs](https://docs.ollama.com/api/introduction) |
| LM Studio | 桌面本地模型、离线聊天、本地服务器 | [LM Studio Docs](https://lmstudio.ai/docs/app)、[Developer Docs](https://lmstudio.ai/docs/developer) |
| Hugging Face | 模型托管、数据集、Spaces、推理服务 | [Hugging Face Docs](https://huggingface.co/docs) |
| Alibaba Cloud Model Studio | 企业模型服务、Qwen、RAG 与推理 API | [Model Studio Docs](https://www.alibabacloud.com/help/en/model-studio/) |
| Volcengine Ark | 豆包模型、企业推理、模型服务 | [Ark Docs](https://www.volcengine.com/docs/82379/1330310) |
<!--rehype:className=left-align show-header-->

本地或私有化方案不能只看“能否跑起来”。还要确认模型许可证、商业用途、量化版本来源、硬件成本、日志留存、数据脱敏、更新节奏和漏洞响应。

办公知识库
---

### 文档与团队知识
<!--rehype:wrap-class=col-span-3-->

| 工具 | 适合 | 官方入口/文档 |
| --- | --- | --- |
| NotebookLM | 文档学习、资料问答、研究笔记 | [NotebookLM](https://notebooklm.google/)、[NotebookLM Help](https://support.google.com/notebooklm/) |
| Notion AI | 团队知识库、文档写作、数据库工作流 | [Notion AI](https://www.notion.com/product/ai)、[Notion AI Help](https://www.notion.com/help/category/notion-ai) |
| Microsoft 365 Copilot | Word、Excel、PowerPoint、Teams、企业数据 | [Microsoft 365 Copilot Docs](https://learn.microsoft.com/en-us/microsoft-365/copilot/) |
| Canva AI | 简报、营销素材、品牌模板、团队设计 | [Canva AI](https://www.canva.com/canva-ai/) |
<!--rehype:className=left-align show-header-->

选型检查清单
---

### 必查项
<!--rehype:wrap-class=col-span-2-->

| 检查项 | 要确认的问题 |
| --- | --- |
| 数据边界 | 输入是否会用于训练？是否支持关闭训练、企业隔离或私有部署？ |
| 权限范围 | Agent 是否能读写仓库、终端、浏览器、云资源或企业文档？ |
| 来源引用 | 搜索与研究型工具是否给出可追溯链接？引用是否能复核？ |
| 版权与商用 | 生成图片、视频、音频和代码是否允许商用？是否有素材来源限制？ |
| 审计与治理 | 是否支持日志、管理员控制、SSO、SCIM、DLP 或合规导出？ |
| 成本与限额 | API、席位、上下文、文件上传、并发和速率限制如何计算？ |
| 稳定性 | 是否有状态页、版本说明、模型弃用公告和 SLA？ |
| 可替换性 | 是否能切换模型、导出数据、迁移提示词和保留人工流程？ |
<!--rehype:className=left-align show-header-->

### 验证模板

```md
目标：
- 要完成的真实任务是什么？

输入：
- 使用真实但脱敏的数据样本。

约束：
- 明确不能泄露、不能联网、不能修改的边界。

输出：
- 指定格式、长度、引用要求和验收标准。

复核：
- 记录模型/工具版本、时间、成本、失败样例和人工修正点。
```
<!--rehype:className=wrap-text-->

参考资料
---

- OpenAI: [ChatGPT Help](https://help.openai.com/en/collections/3742473-chatgpt)、[Codex Docs](https://developers.openai.com/codex/)、[Images Guide](https://platform.openai.com/docs/guides/image-generation)
- Anthropic: [Claude Docs](https://platform.claude.com/docs/en/home)、[Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code/overview)
- Google: [Gemini Help](https://support.google.com/gemini/)、[NotebookLM Help](https://support.google.com/notebooklm/)
- Microsoft: [Microsoft 365 Copilot Docs](https://learn.microsoft.com/en-us/microsoft-365/copilot/)
- GitHub: [GitHub Copilot Docs](https://docs.github.com/en/copilot)
- Perplexity: [Help Center](https://www.perplexity.ai/help-center/en/index.html)、[API Platform](https://www.perplexity.ai/api-platform)
- xAI: [Grok](https://x.ai/grok)、[xAI Docs](https://docs.x.ai/)
- DeepSeek: [API Docs](https://api-docs.deepseek.com/)、[Chat](https://chat.deepseek.com/)
- Moonshot AI: [Kimi API Docs](https://platform.kimi.ai/docs/api/overview)
- Alibaba Cloud: [Model Studio Docs](https://www.alibabacloud.com/help/en/model-studio/)
- Volcengine: [Ark Docs](https://www.volcengine.com/docs/82379/1330310)
- Mistral: [Docs](https://docs.mistral.ai/)、[Help Center](https://help.mistral.ai/en/)
- Meta: [Meta AI](https://www.meta.ai/)
- Hugging Face: [Docs](https://huggingface.co/docs)、[HuggingChat](https://huggingface.co/chat/)
- Cohere: [Docs](https://docs.cohere.com/docs/models)
- Cursor: [Docs](https://cursor.com/docs)
- Devin: [Docs](https://docs.devin.ai/get-started/devin-intro)、[Desktop Docs](https://docs.devin.ai/desktop/getting-started)
- Replit: [Agent Docs](https://docs.replit.com/references/agent/overview)
- Google Gemini CLI: [GitHub Repository](https://github.com/google-gemini/gemini-cli)
- Vercel: [v0](https://v0.app/)、[Docs](https://vercel.com/docs)
- StackBlitz: [Bolt](https://bolt.new/)、[Bolt.diy](https://github.com/stackblitz-labs/bolt.diy)
- Lovable: [Docs](https://docs.lovable.dev/introduction/welcome)
- Midjourney: [Docs](https://docs.midjourney.com/hc/en-us)
- Adobe: [Firefly Help](https://helpx.adobe.com/firefly/web.html)、[Firefly API](https://developer.adobe.com/firefly-services/docs/firefly-api/)
- Runway: [Help Center](https://help.runwayml.com/hc/en-us)、[Academy](https://academy.runwayml.com/)
- Canva: [Canva AI](https://www.canva.com/canva-ai/)、[Magic Studio Safety](https://www.canva.com/help/using-magic-studio-safely-and-legally/)
- Luma: [Docs](https://docs.lumalabs.ai/docs/welcome)、[API](https://docs.lumalabs.ai/docs/api)
- Pika: [Pika](https://pika.art/)
- ElevenLabs: [Docs](https://elevenlabs.io/docs/overview/intro)
- Suno: [Help](https://help.suno.com/)、[Rights & Ownership](https://help.suno.com/en/categories/550145-rights-ownership)
- Ollama: [Docs](https://docs.ollama.com/api/introduction)
- LM Studio: [Docs](https://lmstudio.ai/docs/app)、[Developer Docs](https://lmstudio.ai/docs/developer)
- Notion: [Notion AI](https://www.notion.com/product/ai)、[Help](https://www.notion.com/help/category/notion-ai)
