Github Actions 备忘清单
====

本备忘单总结了 [Github Actions](https://github.com/actions) 常用的配置说明，以供快速参考。

入门
---

### 介绍

GitHub [Actions](https://github.com/actions) 的仓库中自动化、自定义和执行软件开发工作流程，有四个基本的概念，如下：

:- | :-
:- | :-
`workflow` _(工作流程)_ | 持续集成一次运行的过程，就是一个 `workflow`
`job` _(任务)_ | 一个 `workflow` 由一个或多个 `jobs` 构成，含义是一次持续集成的运行，可以完成多个任务
`step` _(步骤)_ | 每个 `job` 由多个 `step` 构成，一步步完成
`action` _(动作)_ | 每个 `step` 可以依次执行一个或多个命令(`action`)
<!--rehype:className=style-list-arrow-->

---

- 采用 [YAML](./yaml.md) 格式定义配置文件
- 存放在代码仓库的 `.github/workflows` 目录中
- 后缀名统一为 `.yml`，比如 `ci.yml`
- 一个库可以有多个 `workflow` 文件
- 根据配置事件自动运行配置文件
<!--rehype:className=style-round-->

### 配置文件

```yaml {3,5,10}
name: GitHub Actions Demo
on:
  push:
    branches:
      - main

# 任务
jobs:
  build:
    runs-on: ubuntu-latest
    # 步骤 根据步骤执行任务
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - run: npm install
      - run: npm run build
```

存放到 `.github/workflows` 目录中，命名为 `ci.yml`，当 `push` 代码到仓库 `main` 分支中，该配置自动运行配置。

### 指定触发
<!--rehype:wrap-class=row-span-2-->

`push` 事件触发 `workflow`

```yaml
on: push
```

`push` 事件或 `pull_request` 事件都可以触发 `workflow`

```yaml
on: [push, pull_request]
```

只有在 `main` 分支 `push` 事件触发 `workflow`

```yaml {2}
on:
  push:
    branches:
      - main
```

`push` 事件触发 `workflow`，`docs` 目录下的更改 `push` 事件不触发 `workflow`

```yaml {2,4}
on:
  push:
    paths-ignore:
      - 'docs/**'
```

push 事件触发 workflow，包括 sub-project 目录或其子目录中的文件触发 workflow，除非该文件在 sub-project/docs 目录中，不触发 workflow

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

版本发布为 `published` 时运行工作流程。

```yml
on:
  release:
    types: [published]
```

### 多项任务

```yml
jobs:
  my_first_job:  # 第一个任务
    name: My first job

  my_second_job: # 第二个任务
    name: My second job
```

通过 jobs `(jobs.<job_id>.name)`字段，配置一项或多项需要执行的任务

### 多项任务依赖关系

通过 needs `(jobs.<job_id>.needs)`字段，指定当前任务的依赖关系

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

上面配置中，`job1` 必须先于 `job2` 完成，而 `job3` 等待 `job1` 和 `job2` 的完成才能运行。因此，这个 `workflow` 的运行顺序依次为：`job1`、`job2`、`job3`

### 多项任务传递参数
<!--rehype:wrap-class=col-span-2-->

```yml {2,5,9,11,15}
jobs:
  job1:
    runs-on: ubuntu-latest
    # 将步骤输出映射到作业输出
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```

### 定时触发

可以使用 cron 表达式配置周期性任务，定时执行

```yaml
name: schedule task

# 要注意时差，最好手动指定时区
env:
  TZ: Asia/Shanghai

on:
  # push 到 main 分支时执行任务
  push:
    branches:
      - main
  # 每隔两小时自动执行任务
  schedule:
   - cron: '0 0/2 * * *'
```

### 指定每项任务的虚拟机环境

```yml
runs-on: ubuntu-latest
```

指定运行所需要的虚拟机环境，⚠️ 它是必填字段

```yml {3}
jobs:
  build: # 任务名称
    runs-on: ubuntu-latest # 虚拟机环境配置
```

---

- `Windows Server 2022` _(windows-latest)_ 或 _(windows-2022)_
- `Ubuntu 20.04` _(ubuntu-latest)_ 或 _(ubuntu-20.04)_
- `macOS Monterey 12` _(macos-12)_
- `macOS Big Sur 11` _(macos-latest)_,_(macos-11)_
<!--rehype:className=style-arrow-->

另见: [选择 GitHub 托管的运行器](https://docs.github.com/cn/actions/using-workflows/workflow-syntax-for-github-actions#选择-github-托管的运行器)

### 指定每项任务的步骤

每个步骤都可以指定以下三个字段

```shell
jobs.<job_id>.steps.name # 步骤名称
# 该步骤运行的命令或者 action
jobs.<job_id>.steps.run
# 该步骤所需的环境变量
jobs.<job_id>.steps.env
```

`steps` 字段指定每个 `Job` 的运行步骤，可以包含一个或多个步骤(`steps`)

```yml {4}
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - run: npm install
      - run: npm run build
```

### 环境变量

```shell
jobs.<job_id>.environment
```

使用单一环境名称的示例

```yml
environment: staging_environment
```

使用环境名称和 URL 的示例

```yml
environment:
  name: production_environment
  url: https://github.com
```

#### 自定义环境变量

`GitHub` 会保留 `GITHUB_` 环境变量前缀供 `GitHub` 内部使用。设置有 `GITHUB_` 前缀的环境变量或密码将导致错误。

```yml
- name: 测试 nodejs 获取环境变量
  env:
    API_TOKEN: ${{ secrets.API_TOKEN }}
```

在 `https://github.com/<用户名>/<项目名称>/settings/secrets` 中添加 `secrets` `API_TOKEN`，在工作流中设置环境变量 [`API_TOKEN`](https://github.com/jaywcjlove/github-actions/blob/799b232fca3d9df0272eaa12610f9ebfca51b288/.github/workflows/ci.yml#L46)

### 表达式

在 `if` 条件下使用表达式时，可以省略表达式语法 (`${{ }}`)，因为 GitHub 会自动将 `if` 条件作为表达式求值

```yml {3}
steps:
  - uses: actions/hello-world-action@v1.1
    if: github.repository == 'uiw/uiw-repo'
    # if: ${{ <expression> }}
```

设置环境变量的示例

```yml
env:
  MY_ENV_VAR: ${{ <expression> }}
```

#### 操作符

- `( )` _(逻辑分组)_
- `[ ]` _(索引)_
- `.` _(属性解引用)_
- `!` _(非)_
- `<` _(小于)_
- `<=` _(小于或等于)_
- `>` _(大于)_
- `>=` _(大于或等于)_
- `==` _(相等)_
- `!=` _(不等)_
- `&&` _(和)_
- `||` _(或)_
<!--rehype:className=cols-2 style-none-->

### Github 上下文
<!--rehype:wrap-class=col-span-2 row-span-3-->

属性名称 | 类型 | 描述
---- | ---- | ----
`github` _(object)_ | 工作流程中任何作业或步骤期间可用的顶层上下文。
`github.event` _(object)_ | 完整事件 web 挂钩有效负载。 更多信息请参阅“触发工作流程的事件”。
`github.event_path` _(string)_ | 运行器上完整事件 web 挂钩有效负载的路径。
`github.workflow` _(string)_ | 工作流程的名称。 如果工作流程文件未指定 name，此属性的值将是仓库中工作流程文件的完整路径。
`github.job` _(string)_ | 当前作业的 job_id。
`github.run_id` _(string)_ | 仓库中每个运行的唯一编号。 如果您重新执行工作流程运行，此编号不变。
`github.run_number` _(string)_ | 仓库中特定工作流程每个运行的唯一编号。 此编号从 1（对应于工作流程的第一个运行）开始，然后随着每个新的运行而递增。 如果您重新执行工作流程运行，此编号不变。
`github.actor` _(string)_ | 发起工作流程运行的用户的登录名。
`github.repository` _(string)_ | 所有者和仓库名称。 例如 Codertocat/Hello-World。
`github.repository_owner` _(string)_ | 仓库所有者的名称。 例如 Codertocat。
`github.event_name` _(string)_ | 触发工作流程运行的事件的名称。
`github.sha` _(string)_ | 触发工作流程的提交 SHA。
`github.ref` _(string)_ | 触发工作流程的分支或标记参考。
`github.head_ref` _(string)_ | 工作流程运行中拉取请求的 head_ref 或来源分支。 此属性仅在触发工作流程运行的事件为 pull_request 时才可用。
`github.base_ref` _(string)_ | 工作流程运行中拉取请求的 base_ref 或目标分支。 此属性仅在触发工作流程运行的事件为 pull_request 时才可用。
`github.token` _(string)_ | 代表仓库上安装的 GitHub 应用程序进行身份验证的令牌。 这在功能上等同于 GITHUB_TOKEN 密码。 更多信息请参阅“使用 GITHUB_TOKEN 验证身份”。
`github.workspace` _(string)_ | 使用 checkout 操作时步骤的默认工作目录和仓库的默认位置。
`github.action` _(string)_ | 正在运行的操作的名称。 在当前步骤运行脚本时，GitHub 删除特殊字符或使用名称 run。 如果在同一作业中多次使用相同的操作，则名称将包括带有序列号的后缀。 例如，运行的第一个脚本名称为 run1，则第二个脚本将命名为 run2。 同样，actions/checkout 第二次调用时将变成 actionscheckout2。
<!--rehype:className=style-list-arrow-->

[Github 上下文](https://help.github.com/cn/actions/reference/context-and-expression-syntax-for-github-actions)是访问有关工作流运行、运行器环境、作业和步骤的信息的一种方式

### 直接常量

作为表达式的一部分，可以使用 `boolean`, `null`, `number` 或 `string`数据类型

```yml
env:
  myNull: ${{ null }}
  myBoolean: ${{ false }}
  myIntegerNumber: ${{ 711 }}
  myFloatNumber: ${{ -9.2 }}
  myHexNumber: ${{ 0xff }}
  myExponentialNumber: ${{ -2.99e-2 }}
  myString: Mona the Octocat
  myStringInBraces: ${{ 'It''s source!' }}
```

### 函数 contains

使用字符串的示例

```js
contains('Hello world', 'llo') // 返回 true
```

使用对象过滤器的示例返回 true

```js
contains(github.event.issue.labels.*.name, 'bug')
```
<!--rehype:className=wrap-text -->

另见: [函数 contains](https://docs.github.com/cn/actions/learn-github-actions/expressions#contains)

### 函数 startsWith

```js
startsWith('Hello world', 'He') // 返回 true
```

另见: [函数 startsWith](https://docs.github.com/cn/actions/learn-github-actions/expressions#startswith)，此函数不区分大小写

### 默认环境变量
<!--rehype:wrap-class=row-span-8 col-span-2-->

环境变量 | 描述
---- | ----
`CI` | 始终设置为 `true`
`HOME` | 用于存储用户数据的 GitHub 主目录路径。 例如 `/github/home`
`GITHUB_WORKFLOW` | 工作流程的名称。
`GITHUB_RUN_ID` | 仓库中每个运行的唯一编号。 如果您重新执行工作流程运行，此编号不变。
`GITHUB_RUN_NUMBER` | 仓库中特定工作流程每个运行的唯一编号。 此编号从 1（对应于工作流程的第一个运行）开始，然后随着每个新的运行而递增。 如果您重新执行工作流程运行，此编号不变。
`GITHUB_ACTION` | 操作唯一的标识符 (id)。
`GITHUB_ACTIONS` |  当 GitHub 操作 运行工作流程时，始终设置为 true。 您可以使用此变量来区分测试是在本地运行还是通过 GitHub 操作 运行。
`GITHUB_ACTION_PATH` | GitHub 操作所在的路径
`GITHUB_ACTOR` | 发起工作流程的个人或应用程序的名称。 例如 octocat
`GITHUB_API_URL` | 返回 `API URL`。例如：`https://api.github.com`
`GITHUB_REPOSITORY` | 所有者和仓库名称。 例如 octocat/Hello-World
`GITHUB_EVENT_NAME` | 触发工作流程的 web 挂钩事件的名称
`GITHUB_EVENT_PATH` | 具有完整 web 挂钩事件有效负载的文件路径。 例如 /github/workflow/event.json
`GITHUB_WORKSPACE` | GitHub 工作空间目录路径。 如果您的工作流程使用 [actions/checkout](https://github.com/actions/checkout) 操作，工作空间目录将包含存储仓库副本的子目录。 如果不使用 [actions/checkout](https://github.com/actions/checkout) 操作，该目录将为空。 例如 /home |/runner/work/my-repo-name/my-repo-name
`GITHUB_SHA` | 触发工作流程的提交 SHA。 例如 ffac537e6cbbf9
`GITHUB_REF` | 触发工作流程的分支或标记参考。 例如 refs/heads/feature-branch-1。 如果分支或标记都不适用于事件类型，则变量不会存在
`GITHUB_HEAD_REF` | 仅为复刻的仓库设置。头部仓库的分支
`GITHUB_BASE_REF` | 仅为复刻的仓库设置。基础仓库的分支
<!--rehype:className=style-list-arrow-->

另见: [默认环境变量](https://docs.github.com/cn/actions/learn-github-actions/environment-variables#default-environment-variables)

### 函数 format

```js
format('{{Hello {0} {1} {2}!}}', 'Mona', 'the', 'Octocat')
// 返回 '{Hello Mona the Octocat!}'.
```
<!--rehype:className=wrap-text -->

另见: [函数 format](https://docs.github.com/cn/actions/learn-github-actions/expressions#format)

### 函数 join

```js
join(github.event.issue.labels.*.name,', ')
// 也许返回 'bug, help wanted'.
```

另见: [函数 join](https://docs.github.com/cn/actions/learn-github-actions/expressions#join)

### 函数 toJSON

```js
toJSON(job)
// 也许返回 { "status": "Success" }.
```

另见: [函数 toJSON](https://docs.github.com/cn/actions/learn-github-actions/expressions#tojson)

### 函数
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
`fromJSON` | 返回 JSON 对象或 JSON 数据类型的值 [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#fromjson)
`hashFiles` | 返回与路径模式匹配的文件集的单个哈希 [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#hashfiles)
`success` | 当前面的步骤都没失败或被取消时返回 true [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#success)
`always` | 使步骤始终执行，返回 `true` 即使取消也是如此 [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#always)
`cancelled` | 如果工作流被取消，则返回 true [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#cancelled)
`failure` | 当作业的任何先前步骤失败时返回 true [#](https://docs.github.com/cn/actions/learn-github-actions/expressions#failure)

### 函数 success()

```yml
steps:
  ...
  - name: 作业已成功
    if: ${{ success() }}
```

### 函数 failure()

```yml
steps:
  ...
  - name: 作业失败
    if: ${{ failure() }}
```

常用实例
----

### 获取版本信息
<!--rehype:wrap-class=col-span-2-->

```yml
- name: Test
  run: |
    # Strip git ref prefix from version
    echo "${{ github.ref }}"
    # VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')

    # # Strip "v" prefix from tag name
    # [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
    echo "$VERSION"
```
<!--rehype:className=wrap-text -->

### 提交到 gh-pages 分支

```yml
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{secrets.GITHUB_TOKEN}}
    publish_dir: ./build
```

### 修改 package.json

```yml
- name: Modify Version
  shell: bash
  run: |
    node -e 'var pkg = require("./package.json"); pkg.version= (new Date().getFullYear().toString().substr(2)) + "." + (new Date().getMonth() + 1) + "." + (new Date().getDate()); require("fs").writeFileSync("./package.json", JSON.stringify(pkg, null, 2))'
```
<!--rehype:className=wrap-text -->

使用 [github-action-package](https://github.com/jaywcjlove/github-action-package) 修改 `name` 字段

```yml
- name: package.json info
  uses: jaywcjlove/github-action-package@main
  with:
    rename: '@wcj/github-package-test'
```

### 克隆带有 Submodule 的仓库

```yml
- name: Checkout
  uses: actions/checkout@v3
  with:
    path: main
    submodules: true
```

`submodules`：`true` 检出子模块或 `recursive` 递归检出子模块

```yml
- name: Clone sub repository
  shell: bash
  run: |
    auth_header="$(git config --local --get http.https://github.com/.extraheader)"
    # git submodule sync --recursive
    # git -c "http.extraheader=$auth_header" -c protocol.version=2 submodule update --init --remote --force --recursive --checkout ant.design
```

### 步骤依赖作业
<!--rehype:wrap-class=row-span-2-->

使用 `jobs.<job_id>.needs` 识别在此作业运行之前必须成功完成的任何作业。它可以是一个字符串，也可以是字符串数组。 如果某个作业失败，则所有需要它的作业都会被跳过，除非这些作业使用让该作业继续的条件表达式。

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

在此示例中，`job1` 必须在 `job2` 开始之前成功完成，而 `job3` 要等待 `job1` 和 `job2` 完成。此示例中的作业按顺序运行：

```
❶ job1
❷ job2
❸ job3
```

配置如下

```yml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```

在此示例中，`job3` 使用 `always()` 条件表达式，因此它始终在 `job1` 和 `job2` 完成后运行，不管它们是否成功。

### 同步 Gitee
<!--rehype:wrap-class=col-span-2-->

```yml
- name: Sync to Gitee
  run: |
    mirror() {
      git clone "https://github.com/$1/$2"
      cd "$2"
      git remote add gitee "https://jaywcjlove:${{ secrets.GITEE_TOKEN }}@gitee.com/uiw/$2"
      git remote set-head origin -d
      git push gitee --prune +refs/remotes/origin/*:refs/heads/* +refs/tags/*:refs/tags/*
      cd ..
    }
    mirror uiwjs uiw
```
<!--rehype:className=wrap-text -->

### 提交 NPM 包

```yml
- run: npm publish --access public
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

获取 `NPM_TOKEN`，可以通过 [npm](https://www.npmjs.com/settings/wcjiang/tokens) 账号创建 `token`

```shell
npm token list [--json|--parseable] # 查看
npm token create [--read-only] [--cidr=1.1.1.1/24,2.2.2.2/16] # 创建
npm token revoke <id|token> # 撤销
```
<!--rehype:className=wrap-text -->

可以使用 [JS-DevTools/npm-publish](https://github.com/JS-DevTools/npm-publish) 提交

```yml
- name:  📦 @province-city-china/data
  uses: JS-DevTools/npm-publish@v1
  with:
    token: ${{ secrets.NPM_TOKEN }}
    package: packages/data/package.json
```

它有个好处，检测 `package.json` 中版本号是否发生变更，来决定是否提交版本，不会引发流程错误。

### 步骤作业文件共享

Artifacts 是 GitHub Actions 为您提供持久文件并在运行完成后使用它们或在作业（文档）之间共享的一种方式。

- 要创建工件并使用它，您将需要不同的操作：上传和下载

要上传文件或目录，您只需像这样使用它：

```yml
steps:
  - uses: actions/checkout@v2
  - run: mkdir -p path/to/artifact
  - run: echo hello > path/to/file/a.txt
  - uses: actions/upload-artifact@v2
    with:
      name: my-artifact
      path: path/to/artifact/a.txt
```

然后下载 `artifact` 以使用它：

```yml
steps:
  - uses: actions/checkout@v2
  - uses: actions/download-artifact@v2
    with:
      name: my-artifact
```

### Node.js

```yml
- name: Setup Node
  uses: actions/setup-node@v2
  with:
    node-version: 14
```

使用[矩阵策略](https://docs.github.com/cn/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategy) 在 nodejs 不同版本中运行

```yml
strategy:
  matrix:
    node-version: [10.x, 12.x, 14.x]

steps:
  - uses: actions/checkout@v2
  - name: 使用 Node ${{ matrix.node-version }}
    uses: actions/setup-node@v1
    with:
      node-version: ${{ matrix.node-version }}
  - run: npm ci
  - run: npm run build --if-present
  - run: npm test
```

### 提交 docker 镜像
<!--rehype:wrap-class=col-span-2 row-span-2-->

```yml
# https://www.basefactor.com/github-actions-docker
- name: Docker login
  run: docker login -u ${{ secrets.DOCKER_USER }} -p ${{ secrets.DOCKER_PASSWORD }}

- name: Build ant.design image
  run: |
    cd ./ant\.design
    docker build -t ant.design .
- name: Tags & Push docs
  run: |
    # Strip git ref prefix from version
    VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')

    # Strip "v" prefix from tag name
    [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')

    docker tag ant.design ${{ secrets.DOCKER_USER }}/ant.design:$VERSION
    docker tag ant.design ${{ secrets.DOCKER_USER }}/ant.design:latest
    docker push ${{ secrets.DOCKER_USER }}/ant.design:$VERSION
    docker push ${{ secrets.DOCKER_USER }}/ant.design:latest
```

### 创建一个 tag

```yml
- name: Create Tag
  id: create_tag
  uses: jaywcjlove/create-tag-action@main
  with:
    package-path: ./package.json
```

根据 `package-path` 指定的 `package.json` 检测 `version` 是否发生变化来创建 `tag`

### 生成 git 提交日志

```yml
- name: Generate Changelog
  id: changelog
  uses: jaywcjlove/changelog-generator@main
  with:
    filter-author: (小弟调调™)

- name: Get the changelog
  run: echo "${{ steps.changelog.outputs.changelog }}"
```
<!--rehype:className=wrap-text -->

### 提交到 GitHub docker 镜像仓库
<!--rehype:wrap-class=col-span-3-->

```yml
- name: '登录到 GitHub 注册表'
  run: echo ${{ github.token }} | docker login ghcr.io -u ${{ github.actor }} --password-stdin

- name: '编译 docker image'
  run: docker build -t ghcr.io/jaywcjlove/reference:latest .

- name: '推送到 GitHub 注册表中'
  run: docker push ghcr.io/jaywcjlove/reference:latest

- name: '标记 docker 镜像并发布到 GitHub 注册表'
  if: steps.create_tag.outputs.successful
  run: |
    echo "version: v${{ steps.changelog.outputs.version }}"
    docker tag ghcr.io/jaywcjlove/reference:latest ghcr.io/jaywcjlove/reference:${{steps.changelog.outputs.version}}
    docker push ghcr.io/jaywcjlove/reference:${{steps.changelog.outputs.version}}
```

### 提交 commit 到 master 分支
<!--rehype:wrap-class=col-span-2-->

```yml
- name: 生成一个文件，并将它提交到 master 分支
  run: |
    # Strip git ref prefix from version
    VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
    COMMIT=released-${VERSION}
    # Strip "v" prefix from tag name
    [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
    echo "输出版本号：$VERSION"
    # 将版本输出到当前 VERSION 文件中
    echo "$VERSION" > VERSION
    echo "1. 输出Commit：$commit"
    echo "2. Released $VERSION"
    git fetch
    git config --local user.email "action@github.com"
    git config --local user.name "GitHub Action"
    git add .
    git commit -am $COMMIT
    git branch -av
    git pull origin master

- name: 将上面的提交 push 到 master 分支
  uses: ad-m/github-push-action@master
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
```

### 作业之间共享数据

创建一个文件，然后将其作为构件上传

```yml {11}
jobs:
  example-job:
    name: Save output
    steps:
      - shell: bash
        run: |
          expr 1 + 1 > output.log
      - name: Upload output file
        uses: actions/upload-artifact@v3
        with:
          name: output-log-file
          path: output.log
```

可以下载名为 `output-log-file` 的工件

```yml {7}
jobs:
  example-job:
    steps:
      - name: Download a single artifact
        uses: actions/download-artifact@v3
        with:
          name: output-log-file
```

### 指定运行命令的工作目录

```yml {3}
- name: Clean temp directory
  run: rm -rf *
  working-directory: ./temp
```

使用 `working-directory` 关键字，您可以指定运行命令的工作目录(`./temp`)

#### defaults.run

```yml {4,5,7}
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```

作业中的所有 `run` 步骤提供默认的 `shell` 和 `working-directory`

### jobs.<job_id>.steps[*].shell

使用 `bash` 运行脚本

```yml {4}
steps:
  - name: Display the path
    run: echo $PATH
    shell: bash
```

运行 `python` 脚本

```yml {6}
steps:
  - name: Display the path
    run: |
      import os
      print(os.environ['PATH'])
    shell: python
```

您可以使用 `shell` 关键字覆盖运行器操作系统中的默认 `shell` 设置

### 一些 actions 推荐
<!--rehype:wrap-class=row-span-2-->

:- | :-
:- | :-
[`create-tag-action`](https://github.com/jaywcjlove/create-tag-action) | 根据 package.json 创建 `Tag` / `Release`
[`changelog-generator`](https://github.com/jaywcjlove/changelog-generator) | 生成 `changelog` 日志
[`github-action-modify-file-content`](https://github.com/jaywcjlove/github-action-modify-file-content) | 修改仓库文件内容
[`github-action-contributors`](https://github.com/jaywcjlove/github-action-contributors) | 生成贡献(contributors.svg)图片
[`generated-badges`](https://github.com/jaywcjlove/generated-badges) | 生成徽章(Badges)图片
[`coverage-badges-cli`](https://github.com/jaywcjlove/coverage-badges-cli) | 生成覆盖率徽章(Badges)图片
[`action-ejs`](https://github.com/jaywcjlove/action-ejs) | 基于 ejs 生成 HTML
[`github-action-package`](https://github.com/jaywcjlove/github-action-package) | 修改 JSON 文件内容
[`github-action-read-file`](https://github.com/jaywcjlove/github-action-read-file) | 读取文件内容
[`markdown-to-html-cli`](https://github.com/jaywcjlove/markdown-to-html-cli) | Markdown 转换成 HTML
[`ncipollo/release-action`](https://github.com/ncipollo/release-action) | 创建 `Release`
[`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages) | 将文件或文件夹内容提交到 `gh-pages` 分支
<!--rehype:className=style-list-->

### 在 Github 中创建 Docker 镜像
<!--rehype:wrap-class=row-span-2 col-span-2-->

```yml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v2
- name: 登录 GitHub 容器注册表
  uses: docker/login-action@v2
  with:
    registry: ghcr.io
    username: ${{ github.actor }}
    password: ${{ secrets.GITHUB_TOKEN }}

- name: 构建并推送 image:latest
  uses: docker/build-push-action@v3
  with:
    push: true
    context: .
    platforms: linux/amd64,linux/arm64
    tags: ghcr.io/jaywcjlove/reference:latest

- name: 构建并推送 image:tags
  uses: docker/build-push-action@v3
  if: steps.create_tag.outputs.successful
  with:
    push: true
    context: .
    platforms: linux/amd64,linux/arm64
    tags: ghcr.io/jaywcjlove/reference:${{steps.changelog.outputs.version}}
```

### 生成贡献者头像列表

```yml
- name: Generate Contributors Images
  uses: jaywcjlove/github-action-contributors@main
  id: contributors
  with:
    output: dist/CONTRIBUTORS.svg
    avatarSize: 42
```

### 在 Docker Hub 中创建 Docker 镜像
<!--rehype:wrap-class=row-span-3 col-span-2-->

```yml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v2
- name: 登录到 Docker Hub
  uses: docker/login-action@v2
  with:
    username: ${{ secrets.DOCKER_USER }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: 构建并推送 image:latest
  uses: docker/build-push-action@v3
  with:
    push: true
    context: .
    platforms: linux/amd64,linux/arm64
    tags: ${{ secrets.DOCKER_USER }}/reference:latest

- name: 构建并推送 image:tags
  uses: docker/build-push-action@v3
  if: steps.create_tag.outputs.successful
  with:
    push: true
    context: .
    platforms: linux/amd64,linux/arm64
    tags: ${{ secrets.DOCKER_USER }}/reference:${{steps.changelog.outputs.version}}
```

### 检查签出仓库并安装 nodejs

```yml
- uses: actions/checkout@v3
- uses: actions/setup-node@v3
  with:
    node-version: 16
```

### 忽略失败

```yml
- run: npm publish
  continue-on-error: true
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

当 `npm` 推送包失败不影响整个流程，可用于自动发包

### 安装 yarn

```yml
- name: Setup Yarn
  uses: threeal/setup-yarn-action@v2.0.0
  with:
    cache: false
    version: 1.22.21
```

GitLab CI/CD 迁移到 GitHub Actions
---

### 语法示例

<yel>GitLab CI/CD</yel>

```yml
job1:
  variables:
    GIT_CHECKOUT: "true"
  script:
    - echo "Run your script here"
```

GitHub Actions

```yml
jobs:
  job1:
    steps:
      - uses: actions/checkout@v3
      - run: echo "Run your script here"
```

### 运行程序
<!--rehype:wrap-class=row-span-2-->

<yel>GitLab CI/CD</yel>

```yml
windows_job:
  tags:
    - windows
  script:
    - echo Hello, %USERNAME%!

linux_job: tags:
    - linux script:
    - echo "Hello, $USER!"
```

GitHub Actions

```yml
windows_job:
  runs-on: windows-latest
  steps:
    - run: echo Hello, %USERNAME%!

linux_job:
  runs-on: ubuntu-latest
  steps:
    - run: echo "Hello, $USER!"
```

在不同的平台上运行作业

### Docker 映像

<yel>GitLab CI/CD</yel>

```yml
my_job:
  image: node:10.16-jessie
```

GitHub Actions

```yml
jobs:
  my_job:
    container: node:10.16-jessie
```

### 条件和表达式语法

<yel>GitLab CI/CD</yel>

```yml
deploy_prod:
  stage: deploy
  script:
    - echo "部署到生产服务器"
  rules:
    - if: '$CI_COMMIT_BRANCH == "master"'
```

GitHub Actions

```yml
jobs:
  deploy_prod:
    if: contains( github.ref, 'master')
    runs-on: ubuntu-latest
    steps:
      - run: echo "部署到生产服务器"
```

### Artifacts

<yel>GitLab CI/CD</yel>

```yml
script:
artifacts:
  paths:
    - math-homework.txt
```

GitHub Actions

```yml
- name: Upload math result for job 1
  uses: actions/upload-artifact@v3
  with:
    name: homework
    path: math-homework.txt
```

### 作业之间的依赖关系

<yel>GitLab CI/CD</yel>

```yml
stages:
  - build
  - test
  - deploy

build_a: stage: build script:
    - echo "该作业将首先运行"

build_b: stage: build script:
    - echo "该作业将首先运行，与 build_a 并行"

test_ab: stage: test script:
    - echo "此作业将在 build_a 和 build_b 完成后运行"

deploy_ab: stage: deploy script:
    - echo "此作业将在 test_ab 完成后运行"
```

GitHub Actions

```yml
jobs:
  build_a:
    runs-on: ubuntu-latest
    steps:
      - run: echo "该作业将首先运行"

  build_b:
    runs-on: ubuntu-latest
    steps:
      - run: echo "该作业将首先运行，与 build_a 并行"

  test_ab:
    runs-on: ubuntu-latest
    needs: [build_a,build_b]
    steps:
      - run: echo "此作业将在 build_a 和 build_b 完成后运行"

  deploy_ab:
    runs-on: ubuntu-latest
    needs: [test_ab]
    steps:
      - run: echo "此作业将在 test_ab 完成后运行"
```

### 缓存

<yel>GitLab CI/CD</yel>

```yml
image: node:latest

cache: key: $CI_COMMIT_REF_SLUG paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

test_async: script:
    - node ./specs/start.js ./specs/async.spec.js
```

GitHub Actions

```yml
jobs:
  test_async:
    runs-on: ubuntu-latest
    steps:
    - name: Cache node modules
      uses: actions/cache@v3
      with:
        path: ~/.npm
        key: v1-npm-deps-${{ hashFiles('**/package-lock.json') }}
        restore-keys: v1-npm-deps-
```

### 数据库和服务容器

<yel>GitLab CI/CD</yel>

```yml
container-job:
  variables:
    POSTGRES_PASSWORD: postgres
    # PostgreSQL 服务容器通信的主机名
    POSTGRES_HOST: postgres
    # 默认的 PostgreSQL 端口
    POSTGRES_PORT: 5432
  image: node:10.18-jessie
  services:
    - postgres
  script:
    # 执行 package.json 文件中
    # 所有依赖项的全新安装
    - npm ci
    # 运行创建 PostgreSQL 客户端的脚本，
    # 用数据填充客户端，并检索数据
    - node client.js
  tags:
    - docker
```

GitHub Actions

```yml
jobs:
  container-job:
    runs-on: ubuntu-latest
    container: node:10.18-jessie

    services:
      postgres:
        image: postgres
        env:
          POSTGRES_PASSWORD: postgres

    steps:
      - name: Check out repository code
        uses: actions/checkout@v3

      # 执行 package.json 文件中
      # 所有依赖项的全新安装
      - name: Install dependencies
        run: npm ci

      - name: Connect to PostgreSQL
        # 运行创建 PostgreSQL 客户端的脚本，
        # 用数据填充客户端，并检索数据
        run: node client.js
        env:
          # PostgreSQL 服务容器通信的主机名
          POSTGRES_HOST: postgres
          # 默认的 PostgreSQL 端口
          POSTGRES_PORT: 5432
```

另见
---

- [Github Actions 学习笔记](https://jaywcjlove.github.io/github-actions) _(jaywcjlove.github.io)_
- [了解 GitHub Actions](https://docs.github.com/cn/actions/learn-github-actions) _(docs.github.com)_
- [从 GitLab CI/CD 迁移到 GitHub Actions](https://docs.github.com/cn/actions/migrating-to-github-actions/migrating-from-gitlab-cicd-to-github-actions) _(docs.github.com)_
