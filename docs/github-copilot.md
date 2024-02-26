Github Copilot 备忘清单
===

这是开始使用 [Github Copilot](https://code.visualstudio.com/docs/editor/github-copilot) 的快速参考指南

一、准备工作
----

### 1、账号注册

> 需要先拥有一个Github账号，并订阅Copilot。

事项 | 说明
:-|-
Github 账号 | [注册地址](https://github.com/signup)
订阅 Github Copilot | [订阅地址](https://github.com/features/copilot)

### 2、安装Vscode插件
<!--rehype:wrap-class=col-span-1 row-span-1-->

> 在扩展商店中搜索安装下面插件

插件名称 | 功能
:-|-
`GitHub Copilot`|编辑器中进行代码补全提示
`GitHub Copilot Chat`|插件栏可以与copilot对话

### 3、Vscode 中登陆 Github 账号
<!--rehype:wrap-class=col-span-1 row-span-1-->

- 安装后，点击右下角的 `GitHub Copilot` 插件图标，然后点击 `Sign in to GitHub` 登陆。
- 或者，点击工具栏中的 `Accounts` 图标，然后点击 `使用 Github 登陆以使用Github Copilot` 进行登陆。

### 4、Copilot 订阅方案
<!--rehype:wrap-class=col-span-2 row-span-1-->
方案 | 价格 | 特性
:-|-|-
Copilot Individual | 10美元/人/月 <br> (学生, 教师, 开源项目贡献者 免费) | 代码补全, 聊天机器人
Copilot Business| 19美元/人/月 |代码补全, 聊天机器人, 命令行工具, 安全漏洞筛查, 代码参考, 公共代码筛查, 知识产权, 企业安全与隐私保障
Copilot Enterprise| 39美元/人/月 | Business 特性 + 私有代码库的个性化聊天 + 文档搜索总结 + Git Pull Request 摘要 + 代码审查 + 模型微调
<!--rehype:className=show-header left-align-->

### 5、Copilot 使用入口
<!--rehype:wrap-class=col-span-1 row-span-1-->
|名称 | 描述 |
|-|-|
Inline Suggestions| 在编辑器中紧邻光标所在位置显示建议
Completions Panel| 在编辑器中展示完整的建议列表
Inline Chat| 在编辑器中紧邻光标所在位置发起对话
Editor Chat| 在编辑器中打开完整的对话界面
Silde Chat| 在编辑器的侧边栏打开对话界面  
Quick Chat| 在顶部唤起对话界面

二、提示技巧
----

### 提示之禅
<!--rehype:wrap-class=col-span-1 row-span-1-->

> 你与 `copilot` 之间的关系，就是作家和插画师的关系。  
> 你只有尽可能的全面、干练、清晰的描述你的故事(即 `上下文`)。  
> `copilot` 才能根据你的故事画出精美的插画 (即 `代码` )。  

### 提示技巧
<!--rehype:wrap-class=col-span-1 row-span-1-->

- 1⃣️ 提供上下文信息
- 2⃣️ 上下文可被预测

### 实战教程

- [Youtube GitHub Copilot Series](https://www.youtube.com/playlist?list=PLj6YeMhvp2S5_hvBl2SE-7YCHYlLQ0bPt)
- [Pragmatic techniques to get the most out of GitHub Copilot](https://www.youtube.com/watch?v=CwAzIpc4AnA)
- [How I used GitHub Copilot to build a browser extension](https://github.blog/2023-05-12-how-i-used-github-copilot-to-build-a-browser-extension/)

### 上下文信息的种类
<!--rehype:wrap-class=col-span-2 row-span-1-->

类型|说明
-|-
文件|Copilot会查看编辑器中当前和紧邻打开的文件。
注释|Copilot会根据紧邻的注释，为你的代码提供帮助和建议。如 docstring, 块注释, 行注释之类。
命名|良好的命名能帮助Copilot更好地理解你的代码，如函数名, 变量名, 文件名等
代码|Copilot会查看你的代码和它附近的代码，以生成帮助你的建议。
<!--rehype:className=show-header left-align-->

### 上下文：文件

> Copilot会查看编辑器中当前和紧邻打开的文件，以分析上下文并提供适当的建议。

---

> - 1、避免打开过多的文件，以便Copilot能够更好地理解你的代码。
> - 2、打开的文件尽量相关且有共性。
> - 3、如果是新项目，可以打开一些模版代码、数据文件以及参考文档等相关示例文件。以便Copilot能够更好地理解你的期望。等已经开发了一些代码后，这些示例文件就可以删除了。

### 上下文: 注释: 顶部注释

创建一个新文件时，在文件顶部添加注释，描述你的需求。这对 Copilot 很有帮助。

\* 下面说明将使用`...`表示copilot开始生成的位置

```python
# Download file from an URL and analyze its content
# Details: 
# * Download the file from an URL
# * Save the downloaded files into `./download` folder
# * Use `filetype` of the file to specify how to parse
# * Filetype can be `.pdf`, `.html`, `.epub`, `.md` and `.txt`
# * Use NLP or OCR to get the file content
# * Tokenize the file content and get the statistics result

import  ...
```

### 上下文: 注释: 行内注释

在每个函数上面或重要代码块的上面添加注释，以帮助 Copilot 了解你代码中的一些意图或问题。

\* 下面说明将使用`...`表示copilot开始生成的位置

函数上方添加注释说明

```python
# parse the JSON string into User object
def ...
```

---

代码添加注释说明

```python
# ...
api_sever = FastApi(...)

# starting the API Sever, enable ssl, bind to 8443 port
...
```

### 上下文: 注释: Docstring
<!--rehype:wrap-class=col-span-1 row-span-2-->
有时候当你已经拥有详细设计文档，但未编写功能代码时，可以直接使用 docstring 中的描述来让 copilot 生成代码。

```python
def send_email(to_address: Email, subject: str, content: HTML): -> StatusCode:
    """
    Send email to specified address

    Parameters
    ----------
    to_address : Email
        The email address to send to
    subject : str
        The email subject
    content : HTML
        The email content

    Returns
    -------
    StatusCode
        The sending result
    """

    ...
```

### 上下文: 注释: 提问

> 如果你不想切换到 copilot chat 时，注释也可以用于提问。

```python
# Q: What is the difference between `os.path.join` and `pathlib.PurePath`?
# A: ...
```

### 上下文: 注释: Todo

> 你也可以让 copilot 为你生成 `todo` 列表来评估工作量。

```python
# Parse the json file into a Talks object
# TODO:
# -[ ] 1. ...
```

### 上下文: 命名

> 你的命名应该足够明确以便于 Copilot 理解你的意图

#### bad case

```python
a = 60

def send(dict):
    ...

class data:
    ...
```

#### good case

```python
timeout = 60

def send_email(to_address: Email, subject: str, content: HTML): -> StatusCode:
    ...

class Email:
    ...
```

### 上下文: 代码: 代码示例

> 提供片段代码示例，以帮助 Copilot 更好地开始新的开发任务。  
>
> - 使用的框架与库
> - 代码风格
> - 算法逻辑

```python
from typing import List
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy import String
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

class Base(DeclarativeBase):
    pass

class User(Base):
    __tablename__ = "user_account"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(30))
    fullname: Mapped[Optional[str]]
    addresses: Mapped[List["Address"]] = relationship(
        back_populates="user", cascade="all, delete-orphan"
    )
    def __repr__(self) -> str:
        return f"User(id={self.id!r}, name={self.name!r}, fullname={self.fullname!r})"

# Email Address
...
```

### 上下文: 代码: 数据示例

> 提供片段数据示例，以帮助 Copilot 更好地开始新的开发任务。  
>
> - 数据结构与类型
> - 命名
> - 值处理逻辑

```python

dailogs = [
    {
        "timestamp": "May 1, 2023 11:00:00",
        "text": "Hello, World!",
        "speaker": "Jack",
    },
    {
        "timestamp": "May 1, 2023 11:01:00",
        "text": "Hello, Copilot!",
        "speaker": "Copilot",
    },
]

# Parse the json object into `Dialog` object
...
```

三、快捷键
----
<!--rehype:body-class=cols-2-->

对于mac用户建议修改alt相关的快捷键，因为mac上的alt+字母键有可能被输入法使用了。若有自定义过输入法`keylayout`，则忽略这句话。

另外没有快捷键的命令，可以唤起`命令面板`后输入查询关键字筛选后执行。

### Github Copilot
<!--rehype:wrap-class=col-span-2 row-span-1-->

#### Copilot 中 Inline Suggestions 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`editor.action.inlineSuggest.trigger`| 触发内联建议 | `alt+\` | `alt+\`
`editor.action.inlineSuggest.showPrevious`| 显示上一个内联建议 | `alt+[`| `alt+[`
`editor.action.inlineSuggest.showNext`| 显示下一个内联建议 | `alt+]`| `alt+]`
`editor.action.inlineSuggest.acceptNextWord`| 接受内联建议的下一个字 | `ctl+right`| `cmd+right`
`editor.action.inlineSuggest.commit`| 接受内联建议 | `Tab`| `Tab`
`editor.action.inlineSuggest.hide`| 隐藏内联建议 | `Esc`| `Esc`
`editor.action.inlineSuggest.acceptNextLine`| 接受内联建议的下一行 | - | -
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot 中 Completions Panel 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`github.copilot.generate`| 打开 `Completions Panel`  | `ctrl+enter`| `ctrl+enter`
`github.copilot.acceptCursorPanelSolution`| 接受`Completions Panel`光标所在的建议  | `ctrl+/` | `ctrl+/`
`github.copilot.previousPanelSolution`| 查看上一个建议 | `alt+[`| `alt+[`
`github.copilot.nextPanelSolution`| 查看下一个建议 | `alt+]`| `alt+]`
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot 中 其他命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`github.copilot.toggleCopilot`| 启用/禁用 Copilot 补全提示 | -| -
`github.copilot.collectDiagnostics`| 收集诊断信息 | -| -
`github.copilot.openLogs`| 打开日志窗口 | -| -
`github.copilot.sendFeedback`| 打开社区网站 | -| -
`github.copilot.signIn`| 登陆 | -| -
<!--rehype:className=show-header wrap-text left-align-->

### Github Copilot Chat
<!--rehype:wrap-class=col-span-2 row-span-1-->

#### Copilot Chat 中 Chat 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`github.copilot.interactiveEditor.explain`|进行解释（选中内容或光标所在的文件)|-|-
`github.copilot.terminal.explainTerminalSelection`|对此进行解释(需要在终端中使用)|-|-
`github.copilot.terminal.explainTerminalSelectionContextMenu`|Copilot: 对此进行解释(需要在终端中使用)|鼠标右键菜单|鼠标右键菜单
`github.copilot.terminal.explainTerminalLastCommand`|对终端中最后一个命令进行解释(需要在终端中使用)|-|-
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot Chat 中 Inline Chat 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`inlineChat.start`|代码内聊天| - | -
`github.copilot.interactiveEditor.generate`|在此生成(在光标所在位置唤起inline chat的`/generate`功能)| - | -
`github.copilot.interactiveEditor.generateDocs`|生成文档| - | -
`github.copilot.interactiveEditor.generateTests`|生成测试| - | -
`github.copilot.interactiveEditor.fix`|修复此| - | -
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot Chat 中 Quick Chat 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`workbench.action.quickchat.toggle`|开启/关闭 Quick Chat|`shift+cmd+i`|`shift+cmd+i`
`github.copilot.terminal.suggestCommand`|建议终端命令|`ctrl+i`(仅在终端起作用)|`cmd+i`
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot Chat 中 Editor Chat 相关命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`workbench.action.openChat.copilot`|打开编辑器聊天|-|-
<!--rehype:className=show-header wrap-text left-align-->

#### Copilot Chat 其他命令

| 命令 |说明 | 快捷键 | Mac 快捷键 |
|-|:-|:-|:-|
`github.copilot.interactiveSession.feedback`|打开github Issues|-|-
`github.copilot.debug.workbenchState`|日志工作台状态|-|-
`github.copilot.ghpr.applySuggestion`|为Github Pull Request提供代码建议|-|-
<!--rehype:className=show-header wrap-text left-align-->

四、Copilot Chat 的 Slash Commands 使用技巧
----

> 在聊天对话框中可以通过`/`开头的命令来与Copilot Chat进行交互。

### Slash Commands 示例
<!--rehype:wrap-class=col-span-1 row-span-1-->

#### Slash Commands 由四部分构成

|元素|说明|
|-|-|
|- Agent |    指定Agent, 符号为 `@`, 可选
|- Commands | 指定命令, 符号为 `/`, 可选
|- 变量 |      引用内容, 符号为 `#`, 可选
|- 用户输入的指令 |     可选

#### 例子

```
/explain def helloworld():...

@vscode /api 请解释 inlineChat.start 的作用

@workspace /explain def helloworld():...

在每一行代码末尾添加注释进行解释
```

#### Agent

| Agent   |说明 |
|-        |:-|
@vscode   |vscode命令与插件的问题
@workspace|项目workspace相关的问题

### Inline Chat 的 Slash Commands
<!--rehype:wrap-class=col-span-1 row-span-1-->

---

> 通过命令 `inlineChat.start` 触发 `inline chat` 后使用

|命令         |说明 |
|-           |:-|
/doc         |在此添加文档注释
/explain     |对选中的代码进行解释
/fix         |修复此选中的代码
/tests       |为选中的代码生成单元测试

---

> 通过命令 `github.copilot.interactiveEditor.generate` 触发

|命令         |说明 |
|-           |:-|
/generate    |在此生成, 该命令无法由用户输入

---

> 当然也可以直接选中区域，然后在inline chat中输入指令执行 copilot会对选中区域进行指令操作  

|常用指令|
| - |
|在每一行代码末尾添加注释进行解释|
|使代码满足PEP484要求|
<!--rehype:className=show-header wrap-text left-align-->

### Silde Chat 的 Slash Commands
<!--rehype:wrap-class=col-span-1 row-span-2-->

> 通过命令 `workbench.action.chat.openInSidebar` 触发 `chat` 后使用  
> 或点击侧边栏上的Copilot聊天按钮  
> 在Chat输入框中还允许指定Agent(即环境)  

#### Slash Commands

|命令         |说明 |
|-           |:-|
/api         |回答vscode扩展插件开发的问题  
/explain     |对选中的代码进行解释
/fix         |修复此选中的代码
/new         |创建新项目workspace
/newNotebook |创建新的Jupyter Notebook  
/terminal    |解释命令行里的命令
/tests       |为选中的代码生成单元测试
/help        |帮助说明
/clear       |清除会话

### `/terminal`特有的变量, 以`#`号开头

> 仅在`/terminal`命令中可用

| 变量 |说明 |
|-|:-|
`#terminalLastCommand`|最后一次执行的终端命令
`#terminalSelection`|选中的终端命令

### 的 Slash Commands
<!--rehype:wrap-class=col-span-1 row-span-1-->

- Quick Chat 与 Chat 的 Slash Commands相同
- Editor Chat 与 Chat 的 Slash Commands相同

五、参数设置
----

打开vscode 命令面板, 输入`Preferences:Open Settings` 打开配置文件，在文件模式下配置相关参数.

完整参数说明可以查看 `copilot` 与 `copilot chat` 两个[插件目录](https://code.visualstudio.com/docs/editor/extension-marketplace#_where-are-extensions-installed)下的 `package.json` 文件获知。

### 完整配置参考

```json
// settings.json
{   
    // ...
    "github.copilot.chat.welcomeMessage": "always",
    "github.copilot.chat.localeOverride": "zh-CN",
    "github.copilot.editor.enableCodeActions": true,
    "github.copilot.editor.iterativeFixing": true,
    "github.copilot.editor.enableAutoCompletions": true,
    "github.copilot.enable": {
        "plaintext": false,
        "ini": false,
        "markdown": true,
        "*": true
    },
    "github.copilot.advanced": {
        "length": 4000,
        "inlineSuggestCount": 5,
        "top_p": 1,
        "temperature": "0.8",
        "listCount": 10,
        "stops": {
            "*": [
                "\n\n\n"
            ],
            "python": [
                "\ndef ",
                "\nclass ",
                "\nif ",
                "\n\n#"
            ]
        },
        "debug.showScores": true,
        "indentationMode": {
            "python": false,
            "javascript": false,
            "javascriptreact": false,
            "jsx": false,
            "typescript": false,
            "typescriptreact": false,
            "go": false,
            "ruby": false,
            "*": true
        }
    }
    // ...
}
```

### 参数说明
<!--rehype:wrap-class=col-span-2 row-span-1-->
#### 代理参数

|设置参数 |值类型|说明 |
|:--|:--|:--|
`"http.proxy"`| string |配置网络代理地址

#### Copilot Chat 参数

|设置参数 |值类型|说明 |
|:--|:--|:--|
`"github.copilot.chat.localeOverride"`| string | 设置Copilot本地语言
`"github.copilot.chat.welcomeMessage"`| string |Copilot Chat 是否显示欢迎语<br>`first`: 仅第一次启动时, `always`: 总是, `never`: 从不

#### Copilot 基本参数

|设置参数 |值类型|说明 |
|:--|:--|:--|
`"editor.inlineSuggest.enabled"`| boolean |启用内联建议
`"github.copilot.editor.iterativeFixing"`| boolean| 允许 Copilot 提供迭代修复建议
`"github.copilot.editor.enableAutoCompletions"`| boolean |允许 Copilot 提供自动补全
`"github.copilot.editor.enableCodeActions"`| boolean|允许 Copilot 代码操作建议,这些操作可能包括重构代码、优化代码结构、修复可错误等

#### 设置 Copilot 生效的文件类型

|设置参数 |值类型|说明 |
|:--|:--|:--|
`"github.copilot.enable"`| json |请将 `"*": true` 放到末尾 <br>[语言](https://code.visualstudio.com/docs/languages/identifiers)后设置 `false` 表示禁用copilot, 设置 `true` 表示启用

#### Copilot 高级参数

> github.copilot.advanced 可以控制模型参数，最终影响到代码生成. 其值为json

|设置参数 |值类型|说明 |
|:--|:--|:--|
`"length"`| integer | 生成的代码字数, 默认为 `500`
`"top_p"`| number | 控制模型候选范围，默认值为 `1`，值范围为`0.0~1.0`
`"temperature"`| string | 控制模型的创造性，默认值为 `""`，值越大越不可预测，值范围为`0.0~1.0`
`"inlineSuggestCount"`| integer | 内联提示的个数, 默认为`3`
`"listCount"`| integer | 控制`Completions Panel`中建议个数，默认为 `10`
`"stops"`| json | 控制模型代码生成时停止的标志，可以按[语言](https://code.visualstudio.com/docs/languages/identifiers)来控制
`"indentationMode"`| json | 指定[语言](https://code.visualstudio.com/docs/languages/identifiers)是否采用该语言的缩近模式，由此可能会与stops冲突，比如采用`\{\}`缩近时，设置该参数时需要综合考虑
`"debug.showScores"`| boolean | 在代码建议列表中显示每个建议的分数
<!--rehype:className=wrap-text -->

END... ENJOY YOURSELF
----

> 欢迎大家添加新内容，校对、错误请指正。📮邮箱: <a href="mailto:jussker@outlook.com">jussker@outlook.com</a>

参考来源
----

\[1\]: [GitHub Copilot in VS Code](https://code.visualstudio.com/docs/editor/github-copilot)  
\[2\]: [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)  
\[3\]: [GitHub Copilot Official Website](https://github.com/features/copilot)  
\[4\]: [GitHub Copilot Series (Youtube)](https://www.youtube.com/playlist?list=PLj6YeMhvp2S5_hvBl2SE-7YCHYlLQ0bPt)  
\[5\]: [Pragmatic techniques to get the most out of GitHub Copilot  (Youtube)](https://www.youtube.com/watch?v=CwAzIpc4AnA)  
\[6\]: [How I used GitHub Copilot to build a browser extension](https://github.blog/2023-05-12-how-i-used-github-copilot-to-build-a-browser-extension)  
\[7\]: [Visual Studio Code, Where are extensions installed?](https://code.visualstudio.com/docs/editor/extension-marketplace#_where-are-extensions-installed)  
\[8\]: [Visual Studio Code, Language Identifiers](https://code.visualstudio.com/docs/languages/identifiers)  
