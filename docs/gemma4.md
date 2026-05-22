Gemma 4 备忘清单
===

[Gemma 4](https://deepmind.google/models/gemma/gemma-4/) 是 Google DeepMind 基于 Apache 2.0 发布的开放权重多模态大语言模型家族，覆盖从移动端边缘部署到服务器级部署的四种规模，并具备前沿智能能力。

快速开始
---
<!--rehype:body-class=cols-7-->

### 快速上手
<!--rehype:wrap-class=row-span-2 col-span-3-->

```python
from transformers import AutoProcessor, AutoModelForCausalLM
import torch

MODEL_ID = "google/gemma-4-E4B-it"

processor = AutoProcessor.from_pretrained(MODEL_ID)
model = AutoModelForCausalLM.from_pretrained(
    MODEL_ID,
    dtype=torch.bfloat16,
    device_map="auto"
)

messages = [
    {"role": "system", "content": "You are helpful."},
    {"role": "user",   "content": "Explain MoE briefly."},
]

text = processor.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=False
)
inputs = processor(
    text=text, return_tensors="pt"
).to(model.device)
input_len = inputs["input_ids"].shape[-1]

outputs = model.generate(**inputs, max_new_tokens=512)
response = processor.decode(
    outputs[0][input_len:], skip_special_tokens=False
)
result = processor.parse_response(response)
# result["thinking"]  → 内部推理链
# result["response"] → 展示给用户的最终回答
```
<!--rehype:className=wrap-text-->

### 简介
<!--rehype:wrap-class=col-span-2-->

- [文档](https://ai.google.dev/gemma/docs/core) _(ai.google.dev)_
- [模型卡](https://ai.google.dev/gemma/docs/core/model_card_4) _(ai.google.dev)_
- [HuggingFace](https://huggingface.co/google) _(huggingface.co)_
- [实战手册](https://github.com/google-gemma/gemma-cookbook) _(github.com)_

发布于 2026-03-31 · Apache 2.0 · 基于 Gemini 3 研究构建 · 支持 140+ 语言

### 安装
<!--rehype:wrap-class=col-span-2-->

```bash
$ pip install -U transformers torch accelerate
```
<!--rehype:className=wrap-text-->

全部模型均可在 HuggingFace 通过 `google/<model-id>` 获取

| 规格    | Model ID             |
| ------- | -------------------- |
| E2B     | `gemma-4-E2B-it`     |
| E4B     | `gemma-4-E4B-it`     |
| 31B     | `gemma-4-31b-it`     |
| 26B A4B | `gemma-4-26b-a4b-it` |
<!--rehype:className=left-align-->

### 采样参数
<!--rehype:wrap-class=col-span-2-->

| 参数          | 值     |
| ------------- | ------ |
| `temperature` | `1.0`  |
| `top_p`       | `0.95` |
| `top_k`       | `64`   |

### 最佳实践
<!--rehype:wrap-class=col-span-2-->

- 任意提示中都应将图片/音频放在文本**之前**
- 多轮对话时：在历史中省略思考块（thought blocks）
- 训练数据中包含 75%+ 的 CoT 数据以保持推理能力
- 仅文本微调时冻结视觉层

模型家族
---

### 模型规格
<!--rehype:wrap-class=col-span-2-->

| 模型    | 架构      | 总参数          | 每 Token 激活 | 层数   | 上下文  | 模态             |
| ------- | --------- | --------------- | ------------ | ------ | ------- | ---------------- |
| E2B     | Dense+PLE | 5.1B (2.3B eff) | 2.3B         | 35     | 128K    | Text+Image+Audio |
| E4B     | Dense+PLE | 8B (4.5B eff)   | 4.5B         | 42     | 128K    | Text+Image+Audio |
| 31B     | Dense     | 30.7B           | 30.7B        | 60     | 256K    | Text+Image       |
| 26B A4B | MoE       | 25.2B           | 3.8B         | 30     | 256K    | Text+Image       |
<!--rehype:className=show-header-->

滑动窗口：512 tokens（E2B/E4B）· 1024 tokens（31B/26B）· 词表：262K（全模型一致）

### 架构特性
<!--rehype:wrap-class=row-span-2-->

#### 混合注意力

- **Local** 层：滑动窗口（512 或 1024 tokens）
- **Global** 层：全局上下文，与 local 层交错排列
- 最后一层始终是 global attention 层

#### PLE — 边缘模型（E2B/E4B）

- Per-Layer Embeddings：每个解码层都有自己的小型 embedding 表
- 大型静态表通过快速查表，不走稠密矩阵乘法
- 有效计算参数远小于加载总参数
- 可在 1.5 GB 以下 VRAM（4-bit 量化）进行推理

#### p-RoPE & Shared KV Cache

- 在 global 层使用 Proportional RoPE（p-RoPE）提升长程一致性
- global 层共享 KV Cache，降低峰值显存占用
- 在 256K 上下文下保持稳定性能

#### MoE — 26B A4B

- 128 个专家 + 1 个始终激活的共享专家
- 推理时每个 token 激活 8 个专家
- 速度接近 4B 稠密模型，质量接近 30B
- 视觉编码器约 5.5 亿参数（与 31B 相同）

### 显存需求

| 模型    | BF16（16-bit） | 8-bit   | 4-bit   |
| ------- | ------------- | ------- | ------- |
| E2B     | 9.6 GB        | 4.6 GB  | 3.2 GB  |
| E4B     | 15 GB         | 7.5 GB  | 5 GB    |
| 31B     | 58.3 GB       | 30.4 GB | 17.4 GB |
| 26B A4B | 48 GB         | 25 GB   | 15.6 GB |
<!--rehype:className=show-header-->

仅为基础权重显存，不含 KV cache 额外占用。

### 选型建议

| 可用 VRAM       | 推荐模型    |
| --------------- | ----------- |
| < 5 GB          | E2B (4-bit) |
| 5–8 GB          | E4B (4-bit) |
| 15–20 GB        | E4B (BF16)  |
| 24–32 GB        | 31B (4-bit) |
| 48–80 GB        | 31B (BF16)  |
| 高吞吐场景      | 26B A4B     |

基准测试
---
<!--rehype:body-class=cols-4-->

### 核心基准
<!--rehype:wrap-class=col-span-4-->

| 基准项              | 31B   | 26B A4B | E4B   | E2B   | Gemma 3 27B |
| -------------------- | ----- | ------- | ----- | ----- | ----------- |
| MMLU Pro             | 85.2% | 82.6%   | 69.4% | 60.0% | 67.6%       |
| MMMLU (multilingual) | 88.4% | 86.3%   | 76.6% | 67.4% | 70.7%       |
| AIME 2026 (math)     | 89.2% | 88.3%   | 42.5% | 37.5% | 20.8%       |
| GPQA Diamond         | 84.3% | 82.3%   | 58.6% | 43.4% | 42.4%       |
| LiveCodeBench v6     | 80.0% | 77.1%   | 52.0% | 44.0% | 29.1%       |
| Codeforces ELO       | 2150  | 1718    | 940   | 633   | 110         |
| BigBench Extra Hard  | 74.4% | 64.8%   | 33.1% | 21.9% | 19.3%       |
| Tau2 avg (agentic)   | 76.9% | 68.2%   | 42.2% | 24.5% | 16.2%       |
| HLE no tools         | 19.5% | 8.7%    | —     | —     | —           |
| HLE with search      | 26.5% | 17.2%   | —     | —     | —           |
<!--rehype:className=show-header-->

以上结果均基于启用 thinking 模式的指令微调模型。

### 视觉基准
<!--rehype:wrap-class=col-span-2-->

| 基准项        | 31B   | 26B A4B | E4B   | E2B   |
| ------------- | ----- | ------- | ----- | ----- |
| MMMU Pro      | 76.9% | 73.8%   | 52.6% | 44.2% |
| MATH-Vision   | 85.6% | 82.4%   | 59.5% | 52.4% |
| MedXPertQA MM | 61.3% | 58.1%   | 28.7% | 23.5% |
| OmniDocBench↓ | 0.131 | 0.149   | 0.181 | 0.290 |
<!--rehype:className=show-header-->

OmniDocBench = 文档编辑距离（越低越好）。

### 长上下文
<!--rehype:wrap-class=col-span-2-->

| 基准项       | 31B   | 26B A4B | E4B   | E2B   |
| ------------ | ----- | ------- | ----- | ----- |
| MRCR v2 128K | 66.4% | 44.1%   | 25.4% | 19.1% |
<!--rehype:className=show-header-->

#### Arena AI (LMSYS ELO)

| Model           | ELO  | Open Rank |
| --------------- | ---- | --------- |
| Gemma 4 31B     | 1452 | #3        |
| Gemma 4 26B A4B | 1441 | #6        |

Thinking 模式
---
<!--rehype:body-class=cols-4-->

### Thinking 控制
<!--rehype:wrap-class=col-span-2 row-span-2-->

在 system prompt **开头**加上 `<|think|>`：

```python
messages = [
    {
        "role": "system",
        "content": "<|think|>You are a math expert."
    },
    {"role": "user", "content": "Solve: 3x + 7 = 22"}
]

text = processor.apply_chat_template(
    messages,
    tokenize=False,
    add_generation_prompt=True,
    enable_thinking=True
)
outputs = model.generate(**inputs, max_new_tokens=2048)
response = processor.decode(
    outputs[0][input_len:], skip_special_tokens=False
)
result = processor.parse_response(response)
# result["thinking"]  → 分步推理
# result["response"] → 最终回答
```

#### Thinking 输出结构

```
<|channel>thought
[内部逐步推理 - 对用户隐藏]
<channel|>
[对用户可见的最终回答]
```

#### 关闭 thinking 时的行为

对 31B/26B A4B 来说，即使 `enable_thinking=False`，仍会输出空标签：

```
<|channel>thought
<channel|>
[最终回答]
```

E2B/E4B 在关闭时会完全跳过空标签。

### 控制 Token
<!--rehype:wrap-class=col-span-2-->

| Token                  | 作用                             |
| ---------------------- | -------------------------------- |
| `<\|think\|>`          | 在 system prompt 启用 thinking   |
| `<\|channel>thought\n` | 打开内部思考块                   |
| `<channel\|>`          | 关闭思考块                       |
| `<\|turn>`             | 打开一轮对话                     |
| `<turn\|>`             | 关闭一轮对话                     |

### 多轮对话规则
<!--rehype:wrap-class=col-span-2-->

- **不要**把 thought 内容写入会话历史
- 仅将 `result["response"]` 作为模型轮次内容传回
- 复杂推理任务建议提高 `max_new_tokens`
- AIME、证明题、调试等任务建议 `enable_thinking=True`

多模态
---

### 图片输入
<!--rehype:wrap-class=row-span-2-->

支持可变宽高比 + 可配置的**视觉 token 预算**：

| 预算   | 适用场景                          |
| ------ | --------------------------------- |
| 70     | 快速分类、视频帧                  |
| 140    | 图像描述、缩略图                  |
| 280    | 通用图像理解                      |
| 560    | 图表、示意图                      |
| 1120   | OCR、PDF 解析、细节识别           |

```python
# 图片必须在文本之前（硬性要求）
messages = [{"role": "user", "content": [
  {"type": "image", "image": image},
  {"type": "text",  "text": "Describe this chart."},
]}]
inputs = processor(
  text=text,
  images=image,
  return_tensors="pt"
).to(model.device)
```
<!--rehype:className=wrap-text-->

视觉编码器：约 1.5 亿参数（E2B/E4B）· 约 5.5 亿参数（31B/26B）

### 音频输入

**仅 E2B 与 E4B 支持**（约 3 亿参数音频编码器）

- 音频最长：**30 秒**
- 支持任务：ASR 与语音翻译

#### ASR 提示词

```
Transcribe the following speech in
{LANGUAGE} into {LANGUAGE} text.
```

#### 翻译提示词

```
Transcribe in {SRC_LANG}, then
translate to {TARGET_LANG}.
```

### 视频输入

按**连续图像帧**处理：

- 最大：**60 秒**，1 fps 即 60 帧
- 每帧建议使用**低 token 预算**（70-140）
- E2B/E4B 可同时处理音轨

```python
# 将帧作为图像列表传入
inputs = processor(
    text=text,
    images=[frame1, frame2, ..., frame60],
    return_tensors="pt"
)
```

### 模态顺序
<!--rehype:wrap-class=col-span-2-->

内容中始终将**图片/音频放在文本前面**：

```python
# ✅ 正确顺序
content = [
    {"type": "image", "image": img},
    {"type": "text",  "text": "Describe it."},
]

# ❌ 文本在前会导致对齐问题
content = [
    {"type": "text",  "text": "Describe it."},
    {"type": "image", "image": img},
]
```

部署
---

### HuggingFace
<!--rehype:wrap-class=row-span-2-->

```bash
$ pip install -U transformers accelerate
```

#### BF16（默认）

```python
from transformers import (
    AutoProcessor, AutoModelForCausalLM
)
import torch

mid = "google/gemma-4-31b-it"
processor = AutoProcessor.from_pretrained(mid)
model = AutoModelForCausalLM.from_pretrained(
    mid,
    torch_dtype=torch.bfloat16,
    device_map="auto"
)
```
<!--rehype:className=wrap-text-->

#### 4-bit 量化

```python
from transformers import BitsAndBytesConfig

bnb = BitsAndBytesConfig(load_in_4bit=True)
model = AutoModelForCausalLM.from_pretrained(
    mid,
    quantization_config=bnb,
    device_map="auto"
)
```
<!--rehype:className=wrap-text-->

### Ollama

```bash
$ ollama pull gemma4     # 31B（默认）
$ ollama pull gemma4:e4b # 边缘 4B 版本
$ ollama pull gemma4:e2b # 边缘 2B 版本
$ ollama run  gemma4     # 交互聊天
```

#### 自定义 GGUF（Modelfile）

```bash
FROM /path/to/fine-tuned.gguf
SYSTEM "You are a coding assistant."
```

```bash
$ ollama create mygemma -f Modelfile
$ ollama run mygemma
```

### vLLM Server

```bash
$ vllm serve google/gemma-4-31B-it \
  --max-model-len 8192 \
  --enable-auto-tool-choice \
  --tool-call-parser gemma4 \
  --reasoning-parser gemma4
```

OpenAI 兼容 API 地址：`http://localhost:8000/v1`

### Cloud & API

| 平台       | 说明               |
| ---------- | ------------------ |
| Gemini API | `gemma-4-31b-it`   |
| AI Studio  | 浏览器 Playground  |
| Vertex AI  | 自定义端点         |
| Cloud Run  | Serverless GPU     |
| GKE + vLLM | 自动伸缩           |
<!--rehype:className=left-align show-header-->

### 边缘与移动端

| 运行时           | 适用场景          |
| ---------------- | ----------------- |
| AICore (Android) | 系统级 API        |
| LiteRT-LM        | IoT、Raspberry Pi |
| AI Edge Gallery  | 端侧评测          |
| LM Studio        | 桌面图形界面      |
| llama.cpp        | CPU/GPU 混合      |
<!--rehype:className=left-align show-header-->

微调
---

### QLoRA 配置
<!--rehype:wrap-class=row-span-2-->

单张 **16 GB GPU**（T4 / 免费 Colab / Kaggle）即可：

```python
from unsloth import FastModel

model, tokenizer = FastModel.from_pretrained(
    "google/gemma-4-E4B-it",
    load_in_4bit=True,
    max_seq_length=4096
)

model = FastModel.get_peft_model(
    model,
    r=16,
    lora_alpha=16,
    lora_dropout=0,
    target_modules=[
        "q_proj", "k_proj",
        "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj"
    ],
)
```

#### 视觉微调（E2B / E4B）

```python
from unsloth import FastVisionModel

model, tokenizer = FastVisionModel.from_pretrained(
    "google/gemma-4-E4B-it",
    finetune_vision_layers=False,   # 冻结视觉编码器
    finetune_language_layers=True,
    load_in_4bit=True,
)
```

### MoE 微调

对于 **26B A4B**，全量微调会破坏专家路由：

- 仅使用 **LoRA bf16**（不要做 FFT）
- 建议从 `r=16`、`lora_alpha=16` 起步
- 在 loss 收敛后再逐步增大上下文长度
- 避免训练专家路由相关权重矩阵

### 数据要求

| 要求             | 建议值                        |
| ---------------- | ----------------------------- |
| CoT 数据占比     | ≥ 75% 的训练集                |
| Thinking 格式    | 包含 `<\|think\|>` 触发标记 |
| 多模态顺序       | 图片/音频在文本前             |
| Chat 模板        | ShareGPT 或 OpenAI 格式       |
| RL 奖励          | 可验证的最终答案              |
<!--rehype:className=left-align show-header-->

### 视觉微调建议

1. **先冻结视觉层** — `finetune_vision_layers=False`
2. 仅微调 LLM + attention + MLP projector
3. 解冻前先验证文本域质量
4. 仅在领域图像任务中解冻视觉层
5. 训练时使用较低 token 预算（70–280）可节省 VRAM

Gemmaverse
---

### 专项模型
<!--rehype:wrap-class=col-span-2-->

| 模型          | 领域            | 说明                                |
| ------------- | --------------- | ----------------------------------- |
| MedGemma 4B   | 医学影像        | 多模态 X-ray/MRI 分析               |
| MedGemma 27B  | 临床文本        | EHR + 医疗报告推理                  |
| CodeGemma     | 编程            | 代码补全与重构                      |
| PaliGemma 2   | 视觉语言        | 细粒度 VLM 与视觉推理               |
| ShieldGemma   | 安全            | LLM 输出安全分类器                  |
| DataGemma     | 事实数据        | 基于 Google Data Commons 对齐       |
| FunctionGemma | 工具调用        | 低资源函数调用解析                  |
<!--rehype:className=show-header-->

### 生态

**库与框架**

- ADK (Agent Development Kit)
- JAX Gemma Library (`google-deepmind/gemma`)
- Gemma Cookbook (`google-gemma/gemma-cookbook`)
- `google/adk-samples` starter agents

**社区变体**

- 100K+ 社区微调衍生模型
- RecurrentGemma (Griffin architecture)
- EmbeddingGemma, T5Gemma 2
- VaultGemma (differential privacy)

延伸阅读
---

- [官方文档](https://ai.google.dev/gemma/docs/core) _(ai.google.dev)_
- [模型卡](https://ai.google.dev/gemma/docs/core/model_card_4) _(ai.google.dev)_
- [DeepMind 模型页](https://deepmind.google/models/gemma/gemma-4/) _(deepmind.google)_
- [HuggingFace](https://huggingface.co/google) _(huggingface.co)_
- [Gemma 实战手册](https://github.com/google-gemma/gemma-cookbook) _(github.com)_
- [JAX Gemma 库](https://github.com/google-deepmind/gemma) _(github.com)_
- [vLLM 使用指南](https://docs.vllm.ai/projects/recipes/en/latest/Google/Gemma4.html) _(docs.vllm.ai)_
- [Ollama 模型库](https://ollama.com/library/gemma4) _(ollama.com)_
