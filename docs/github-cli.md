Github CLI
===

GitHub CLI 的快速参考，这是一个开源命令行工具，可在终端上启用 GitHub 功能。

入门
---

### 安装
<!--rehype:wrap-class=col-span-2-->

#### Windows
<!--rehype:style=text-align: left;-->

| 工具   | 安装                          | 升级                          |
| :----- | :--------------------------- | :--------------------------- |
| WinGet | `winget install --id Github.cli` | `winget upgrade --id GitHub.cli` |
| Scoop  | `scoop install gh`             | `scoop update gh`            |
| Choco  | `choco install gh`             | `choco upgrade gh`           |
<!--rehype:className=show-header left-align-->

#### Mac OS
<!--rehype:style=text-align: left;-->

| 工具     | 安装                   | 升级                                        |
| :------- | :-------------------- | :------------------------------------------ |
| Brew     | `brew install gh`     | `brew upgrade gh`                           |
| MacPorts | `sudo port install gh`| `sudo port selfupdate && sudo port upgrade gh` |
<!--rehype:className=show-header left-align-->

#### Linux
<!--rehype:style=text-align: left;-->

请参见 [安装说明](https://github.com/cli/cli/blob/trunk/docs/install_linux.md) 以获取其他 Linux 发行版的信息。安装脚本：

```bash
type -p curl >/dev/null || (sudo apt update && sudo apt install curl -y)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg \
&& sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
```

### 基本用法

#### 帮助和文档
<!--rehype:style=text-align: left;-->

显示命令选项：

| 命令                 | 描述                                                                                                          |
| :-------------------- | :------------------------------------------------------------------------------------------------------------- |
| `gh help [command]`  | 帮助提供应用程序中任何命令的帮助。只需键入 `gh help [命令路径]` 以获取完整详细信息。                          |
<!--rehype:className=style-list-arrow-->

#### 认证
<!--rehype:style=text-align: left;-->

| 命令                 | 描述                                                       |
| :-------------------- | :-------------------------------------------------------- |
| `gh auth login`      | 默认通过基于网页的浏览器进行身份验证                     |
| `gh auth logout`     | 移除主机的身份验证配置                                   |
| `gh auth refresh`    | 扩展或修复存储凭据的权限范围                             |
| `gh auth setup-git`  | 配置 Git 使用 GitHub CLI 作为凭据助手                     |
| `gh auth status`     | 验证并显示有关您身份验证状态的信息                      |
| `gh auth token`      | 打印 `gh` 配置使用的身份验证令牌                        |
<!--rehype:className=style-list-arrow-->

使用 GitHub 令牌：

```shell
$ gh auth --with-token < token.txt
```

### 仓库管理
<!--rehype:wrap-class=col-span-2-->

#### 常规
<!--rehype:style=text-align: left;-->

| 命令                     | 描述                                         |
| :------------------------ | :------------------------------------------ |
| `gh repo create`         | 创建一个新的 GitHub 仓库                   |
| `gh repo list [target]`  | 列出某个用户或组织拥有的仓库               |
<!--rehype:className=code-nowrap left-align-->

#### 目标
<!--rehype:style=text-align: left;-->

| 命令                        | 描述                                                       |
| :--------------------------- | :-------------------------------------------------------- |
| `gh repo archive [repo]`    | 存档一个 GitHub 仓库                                      |
| `gh repo clone [dir]`       | 在本地克隆一个 GitHub 仓库                                |
| `gh repo delete [repo]`     | 删除一个 GitHub 仓库                                       |
| `gh repo deploy-key`        | 管理仓库中的部署密钥                                       |
| `gh repo edit [repo]`       | 编辑仓库设置                                             |
| `gh repo fork [repo]`       | 创建一个仓库的分叉                                        |
| `gh repo rename [name]`     | 重命名一个 GitHub 仓库                                     |
| `gh repo set-default [repo]` | 设置默认的远程仓库                                        |
| `gh repo sync [dest-repo]`  | 从源仓库同步到目标仓库                                    |
| `gh repo view [repo]`       | 显示一个 GitHub 仓库的描述和 README                      |
<!--rehype:className=code-nowrap left-align-->

### 问题

#### 搜索问题
<!--rehype:style=text-align: left;-->

| 命令                       | 描述                             |
| :------------------------- | :------------------------------- |
| `gh search issues [query]` | 在 GitHub 上搜索问题             |

#### 示例
<!--rehype:style=text-align: left;-->

搜索匹配关键词 "readme" 和 "typo" 的问题

```shell
$ gh search issues readme typo
```

搜索匹配短语 "broken feature" 的问题

```shell
$ gh search issues "broken feature"
```

搜索 cli 组织中的问题和拉取请求

```shell
$ gh search issues --include-prs --owner=cli
```

搜索分配给自己的开放问题

```shell
$ gh search issues --assignee=@me --state=open
```

搜索评论数超过 100 的问题

```shell
$ gh search issues --comments=">100"
```

搜索没有标签 "bug" 的问题

```shell
$ gh search issues -- -label:bug
```

### 拉取请求

**拉取请求操作**

| 命令              | 描述                                      |
| :---------------- | :----------------------------------------- |
| `gh pr create`    | 在 GitHub 上创建拉取请求                  |
| `gh pr list`      | 列出 GitHub 仓库中的拉取请求              |
| `gh pr status`    | 显示相关拉取请求的状态                    |

**示例**

```shell
$ gh pr status
```

示例输出：

```
Current branch
  #12 Remove the test feature [user:patch-2]
   - All checks failing - Review required

Created by you
  You have no open pull requests

Requesting a code review from you
  #13 Fix tests [branch]
  - 3/4 checks failing - Review required
  #15 New feature [branch]
   - Checks passing - Approved
```

### GitHub Actions
<!--rehype:wrap-class=col-span-2-->

**常规操作**

| 命令                    | 描述                                                                         |
| :----------------------- | :--------------------------------------------------------------------------- |
| `gh workflow disable`    | 禁用工作流，防止其运行或在列出工作流时显示                                   |
| `gh workflow enable`     | 启用工作流，允许其运行并在列出工作流时显示                                   |
| `gh workflow list`       | 列出工作流文件，默认隐藏禁用的工作流                                        |
| `gh workflow run`        | 为给定的工作流创建一个 `workflow_dispatch` 事件                            |
| `gh workflow view`       | 查看工作流的摘要                                                             |

**运行操作**

| 命令                    | 描述                                                          |
| :----------------------- | :----------------------------------------------------------- |
| `gh run cancel`          | 取消一个工作流运行                                            |
| `gh run delete`          | 删除一个工作流运行                                            |
| `gh run download`        | 下载由 GitHub Actions 工作流运行生成的工件                    |
| `gh run list`            | 列出最近的工作流运行                                          |
| `gh run rerun`           | 重新运行整个运行、仅失败的作业或运行中的特定作业              |
| `gh run view`            | 查看工作流运行的摘要                                          |
| `gh run watch`           | 观看一个运行直到其完成，显示其进度                            |

### 别名

**常规别名设置**

| 命令                    | 描述                                                      |
| :----------------------- | :--------------------------------------------------------- |
| `gh alias delete`        | 删除设置的别名                                           |
| `gh alias import`        | 从 YAML 文件的内容中导入别名                             |
| `gh alias list`          | 打印出所有已配置的别名                                   |
| `gh alias set`           | 定义一个单词，当调用时会展开为完整的 `gh` 命令          |
<!--rehype:className=style-list-->

### 发布

**常规操作**

| 命令                    | 描述                                       |
| :----------------------- | :----------------------------------------- |
| `gh release create`      | 为一个仓库创建新的 GitHub 发布             |
| `gh release list`        | 列出一个仓库中的发布                       |
<!--rehype:className=code-nowrap-->

**目标命令**

| 命令                      | 描述                                   |
| :------------------------ | :-------------------------------------- |
| `gh release delete`       | 删除一个发布                            |
| `gh release delete-asset` | 从一个发布中删除一个资产                |
| `gh release download`     | 从 GitHub 发布中下载资产                |
| `gh release edit`         | 编辑一个发布                            |
| `gh release upload`       | 上传资产文件到一个 GitHub 发布          |
| `gh release view`         | 查看有关一个 GitHub 发布的信息          |
<!--rehype:className=code-nowrap-->

### 配置

**目标设置**

| 命令                      | 描述                                          |
| :------------------------ | :--------------------------------------------- |
| `gh config clear-cache`   | 清除 CLI 缓存                                |
| `gh config get`           | 打印给定配置键的值                           |
| `gh config list`          | 打印配置键及其值的列表                       |
| `gh config set`           | 用给定键的值更新配置                         |
<!--rehype:className=style-list-->