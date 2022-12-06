Lerna 备忘清单
===

[![NPM version](https://img.shields.io/npm/v/lerna.svg?style=flat)](https://www.npmjs.com/package/lerna)
[![Downloads](https://img.shields.io/npm/dm/lerna.svg?style=flat)](https://www.npmjs.com/package/lerna)
[![Repo Dependents](https://badgen.net/github/dependents-repo/lerna/lerna/nest)](https://github.com/lerna/lerna/nest/network/dependents)
[![Github repo](https://badgen.net/badge/icon/Github?icon=github&label)](https://github.com/lerna/lerna/nest)

本备忘单旨在快速理解 [Lerna v6](https://github.com/lerna/lerna) 所涉及的主要概念，显示了它的常用命令使用清单
<!--rehype:style=padding-top: 12px;-->

入门
----

### 介绍
<!--rehype:wrap-class=row-span-2-->

现代构建系统，用于管理和发布来自同一存储库的多个 JavaScript/TypeScript 包。

```bash
$ npx lerna@latest init
```

下面是示例目录结构

```shell {15}
├── README.md
├── remixapp   # web 应用 (remixapp)
│   ├── src
│   └── package.json
│
├── packages
│   ├── footer # 组件(@remixapp/footer)
│   │   ├── src
│   │   └── package.json
│   │
│   └── header # 组件(@remixapp/header)
│       ├── src
│       └── package.json
│
├── lerna.json
└── package.json
```

### 引导程序 (Bootstrap)
<!--rehype:wrap-class=row-span-2-->

它在 `package.json` 中依赖于它们，如下所示：

```json {3,4}
"dependencies": {
  // ....
  "@remixapp/header": "*",
  "@remixapp/footer": "*"
}
```

`remixapp` 应用程序导入`页眉`和`页脚`库，如下所示：

```jsx
import { Header } from "header";
import { Footer } from "footer";

export default function Home() {
  return (
    <>
      <Header />
      <div>Content!</div>
      <Footer />
    </>
  );
}
```

### useWorkspaces

```json {3}
{
  "$schema": "node_modules/lerna/schemas/lerna-schema.json",
  "useWorkspaces": true,
  "version": "0.0.0"
}
```
<!--rehype:className=wrap-text -->

在 `lerna.json` 中配置 `useWorkspaces` 告诉 `Lerna` 将包链接过程委托给你的包管理器 (此功能由 npm、yarn 和 pnpm 支持)。

### 任务运行

```bash
npx lerna run test --scope=header # 单个
```

多个任务运行

```bash
npx lerna run test --scope=header,footer
```

忽略 `header`,`footer` 其它包中运行任务运行

```bash
npx lerna run build --ignore=header,footer
```

命令索引
---

### run/exec 运行命令

```bash
# 在所有包含它的包中运行 npm run my-script
$ lerna run <script> -- [..args]
$ lerna run test
$ lerna run build

# 观看所有包并在更改时转换，流式前缀输出
$ lerna run --parallel watch

# 在所有包中运行命令
$ lerna exec -- <command> [..args]
$ lerna exec -- rm -rf ./node_modules
$ lerna exec -- protractor conf.js
```

---

:- | :-
:- | :-
`--npm-client <client>` [#](https://github.com/lerna/lerna/tree/main/commands/run#--npm-client-client) | 必须是知道如何运行 npm 生命周期脚本的可执行文件，默认值是 `npm`
`--stream` [#](https://github.com/lerna/lerna/tree/main/commands/run#--stream) | 立即从子进程流式输出，以原始包名称为前缀
`--parallel` [#](https://github.com/lerna/lerna/tree/main/commands/run#--parallel) | 类似于 `--stream` 但完全忽略并发和拓扑排序，立即在所有匹配的包中运行给定的命令或脚本，并带有前缀流输出
`--no-bail` [#](https://github.com/lerna/lerna/tree/main/commands/run#--no-bail) | 默认情况下，如果任何脚本运行返回非零退出代码，`lerna run` 将退出并出现错误。传递 `--no-bail` 以禁用此行为
`--no-prefix` [#](https://github.com/lerna/lerna/tree/main/commands/run#--no-prefix) | 当输出为流式传输（`--stream` 或 `--parallel`）时禁用包名称前缀。当将结果传送到其他进程（例如编辑器插件）时，此选项很有用
`--profile` [#](https://github.com/lerna/lerna/tree/main/commands/run#--profile) | 分析脚本执行并生成性能配置文件
`--profile-location <location>` [#](https://github.com/lerna/lerna/tree/main/commands/run#--profile-location-location) | 您可以为性能配置文件输出提供自定义位置。提供的路径将相对于当前工作目录进行解析。
`useNx=false` [#](https://github.com/lerna/lerna/tree/main/commands/run#usenxfalse) | 通过将 `useNx` 设置为 `false`，您可以使用 `lerna` 中的遗留任务运行实现 (`p-map` 和 `p-queue`)，而不是使用由 [Nx](https://nx.dev) 提供支持的默认现代任务运行器实现。
<!--rehype:className=style-list-arrow-->

### publish 发布包
<!--rehype:wrap-class=row-span-3-->

```bash
# 发布自上次发布以来已更改的软件包
$ lerna publish              
# 显式发布在当前提交中标记的包
$ lerna publish from-git     
# 显式发布注册表中不存在最新版本的软件包
$ lerna publish from-package
# 使用下一个语义预发布版本，例如
$ lerna publish --canary
# 1.0.0 => 1.0.1-alpha.0+${SHA}
# 自上次提交以来更改的包
# 随后的金丝雀发布将产生1.0.1-alpha.1+${SHA}等

$ lerna publish --canary --preid beta
# 1.0.0 => 1.0.1-beta.0+${SHA}

# 以下是等价的：
$ lerna publish --canary minor
$ lerna publish --canary preminor
# 1.0.0 => 1.1.0-alpha.0+${SHA}
```

---

:- | :-
:- | :-
`--canary` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--canary) | 使用此标志运行时，以更精细的方式（每次提交）发布包
`--contents <dir>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--contents-dir) | 要发布的子目录。 必须适用于所有包，并且必须包含 `package.json` 文件
`--dist-tag <tag>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--dist-tag-tag) | 使用此标志运行时，将使用给定的 `npm dist-tag`（默认为 `latest`）发布到 `npm`
`--git-head <sha>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--git-head-sha) | 打包 `tarball` 时将显式 `SHA` 设置为清单上的 `gitHead`，仅允许使用 `from-package` 位置
`--graph-type <all\|dependencies>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--graph-type-alldependencies) | 设置在构建包图时使用哪种依赖项。默认值是依赖项，即仅包含包的 `package.json` 的依赖项部分中列出的包
`--ignore-scripts` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--ignore-scripts) | 传递时，此标志将在 `lerna` 发布期间禁用运行[生命周期脚本](https://github.com/lerna/lerna/tree/main/commands/publish#lifecycle-scripts)
`--ignore-prepublish` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--ignore-prepublish) | 传递时，此标志将禁用在 `lerna` 发布期间运行[已弃用](https://docs.npmjs.com/cli/v8/using-npm/scripts#prepare-and-prepublish)的[预发布脚本](https://github.com/lerna/lerna/tree/main/commands/publish#lifecycle-scripts)
`--legacy-auth` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--legacy-auth) | 发布需要身份验证的包时，您正在使用仅使用旧版 `Base64` `用户名:密码` 的内部托管 NPM 注册表。这与 NPM 发布 `_auth` 标志相同
`--no-git-reset` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--no-git-reset) | 默认情况下，`lerna publish` 确保对工作树的任何更改都已重置
`--no-granular-pathspec` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--no-granular-pathspec) | 默认情况下，`lerna publish` 将尝试（如果启用）`git checkout` 仅在发布过程中临时修改的叶包清单
`--verify-access` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--verify-access) | 从历史上看，`lerna` 试图通过使用给定令牌执行一些抢占式 `npm API` 请求来快速解决授权/身份验证问题
`--otp` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--otp) | 发布需要双重身份验证的包时，您可以使用 `--otp` 指定一次性密码
`--preid` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--preid) | 与同名的 `lerna` 版本选项不同，该选项只适用于 `--canary` 版本计算
`--pre-dist-tag <tag>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--pre-dist-tag-tag) | 与 `--dist-tag` 的工作方式相同，但仅适用于使用预发布版本发布的软件包
`--registry <url>` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--registry-url) | 使用此标志运行时，转发的 `npm` 命令将为您的包使用指定的注册表
`--tag-version-prefix` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--tag-version-prefix) | 此选项允许提供自定义前缀而不是默认前缀：`v`
`--temp-tag` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--temp-tag) | 传递时，此标志将更改默认发布过程，首先将所有更改的包发布到临时 `dist-tag(lerna-temp)`，然后将新版本移动到 `--dist-tag` 配置的 `dist-tag` (默认`latest`)
`--yes` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--yes) | 使用此标志运行时，`lerna publish` 将跳过所有确认提示
<!--rehype:className=style-list-arrow-->

#### 不推荐使用的选项

:- | :-
:- | :-
`--no-verify-access` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--no-verify-access) | 旧的抢先访问验证现在默认关闭，因此不需要 `--no-verify-access`
`--skip-npm` [#](https://github.com/lerna/lerna/tree/main/commands/publish#--skip-npm) | 直接调用 [lerna version](#version-修改版本号)
<!--rehype:className=style-list-arrow-->

#### 每个包中的配置

```json
"publishConfig": {
  "access": "public",
  "registry": "http://my-registry.com",
  "tag": "flippin-sweet",
  "directory": "dist"
}
```

---

:- | :-
:- | :-
`access` [#](https://github.com/lerna/lerna/tree/main/commands/publish#publishconfigaccess) | 要发布具有范围的包(例如，`@mycompany/rocks`)
`registry` [#](https://github.com/lerna/lerna/tree/main/commands/publish#publishconfigregistry) | 通过设置注册表来自定义每个包的注册表
`tag` [#](https://github.com/lerna/lerna/tree/main/commands/publish#publishconfigtag) | 您可以通过设置标签来自定义每个包的 `dist-tag`
`directory` [#](https://github.com/lerna/lerna/tree/main/commands/publish#publishconfigtag) | 这个 _非标准_ 字段允许您像 `--contents` 一样自定义发布的子目录，但基于每个包
<!--rehype:className=style-list-arrow-->

### version 修改版本号
<!--rehype:wrap-class=row-span-3-->

```bash
$ lerna version 1.0.1 # 明确的
$ lerna version patch # semver 关键字
$ lerna version       # 从提示中选择

$ lerna version [major | minor | ...]
# 使用下一个语义版本值
# 这会跳过“为...选择新版本”提示
# 强制所有包版本化
$ lerna version --force-publish
$ lerna version -m "chore(doc): publish %s"
# 提交消息 = "chore(doc): publish v1.0.0"
$ lerna version -m "chore(doc): publish %v"
# 提交消息 = "chore(doc): publish 1.0.0"
```

---

- `major` 重大的
- `minor` 次要的
- `patch` 修补
- `premajor` 主要的
- `preminor` 初级
- `prepatch` 预补丁
- `prerelease` 预发行
<!--rehype:className=cols-2-->

---

:- | :-
:- | :-
`--allow-branch <glob>` [#](https://github.com/lerna/lerna/tree/main/commands/version#--allow-branch-glob) | 与启用 `lerna version` 的 `git` 分支匹配的 `glob` 白名单
`--amend` [#](https://github.com/lerna/lerna/tree/main/commands/version#--amend) | 使用此标志运行时，`lerna version` 将在当前提交上执行所有更改，而不是添加新的
`--changelog-preset` [#](https://github.com/lerna/lerna/tree/main/commands/version#--changelog-preset) | 默认情况下，更改日志预设设置为 [angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular#angular-convention)
`--conventional-commits` [#](https://github.com/lerna/lerna/tree/main/commands/version#--conventional-commits) | 使用常规提交规范来确定[版本 bump](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-recommended-bump) 并生成 CHANGELOG.md 文件
`--conventional-graduate` [#](https://github.com/lerna/lerna/tree/main/commands/version#--conventional-graduate) | 将使用 `*` 对指定的包(逗号分隔)或所有包进行分级
`--conventional-prerelease` [#](https://github.com/lerna/lerna/tree/main/commands/version#--conventional-prerelease) | 预发布版本发布指定的包
`--create-release <type>` [#](https://github.com/lerna/lerna/tree/main/commands/version#--create-release-type) | 根据更改的包创建正式的 `GitHub` 或 `GitLab` 版本
`--exact` [#](https://github.com/lerna/lerna/tree/main/commands/version#--exact) | 在更新的包中精确指定更新的依赖项（没有标点符号），而不是与 [semver](./semver.md) 兼容（使用`^`）
`--force-publish` [#](https://github.com/lerna/lerna/tree/main/commands/version#--force-publish) | 强制发布指定的包
`--git-remote <name>` [#](https://github.com/lerna/lerna/tree/main/commands/version#--git-remote-name) | 把 `git` 更改推送到指定的远程位置，而不是`origin`
`--ignore-changes` [#](https://github.com/lerna/lerna/tree/main/commands/version#--ignore-changes) | 检测更改的包时忽略与 `glob` 匹配的文件中的更改
`--ignore-scripts` [#](https://github.com/lerna/lerna/tree/main/commands/version#--ignore-scripts) | 禁用在 `lerna version` 期间运行的生命周期脚本
`--include-merged-tags` [#](https://github.com/lerna/lerna/tree/main/commands/version#--include-merged-tags) | 在检测到更改的包时包括来自合并分支的标签
`--message <msg>` [#](https://github.com/lerna/lerna/tree/main/commands/version#--message-msg) | 此选项别名为 `-m` 以与 `git commit` 进行奇偶校验
`--no-changelog` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-changelog) | 使用常规提交时，不要生成任何 CHANGELOG.md 文件
`--no-commit-hooks` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-commit-hooks) | 允许 `git commit hooks` 在提交版本更改时运行。通过 `--no-commit-hooks` 禁用此行为
`--no-git-tag-version` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-git-tag-version) | 将提交对 `package.json` 文件的更改并标记发布。通过 `--no-git-tag-version` 禁用该行为
`--no-granular-pathspec` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-granular-pathspec) | 仅添加在版本控制过程中更改的叶包清单(可能还有变更日志)。这产生了 `git add --packages/*/package.json` 的等价物，但针对更改的内容量身定制
`--no-private` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-private) | 在选择版本、提交和标记版本时包含私有包。通过 `--no-private` 禁用此行为
`--no-push` [#](https://github.com/lerna/lerna/tree/main/commands/version#--no-push) | 将已提交和标记的更改推送到配置的 `git remote`。通过 `--no-push` 禁用此行为
`--preid` [#](https://github.com/lerna/lerna/tree/main/commands/version#--preid) | 使用此标志运行时，lerna 版本将使用指定的[预发布标识符](https://semver.org/#spec-item-9)增加 `premajor`、`preminor`、`prepatch` 或 `prerelease` [semver](./semver.md) bumps
`--sign-git-commit` [#](https://github.com/lerna/lerna/tree/main/commands/version#--sign-git-commit) | 此选项类似于同名的 npm 版本选项
`--sign-git-tag` [#](https://github.com/lerna/lerna/tree/main/commands/version#--sign-git-tag) | 此选项类似于同名的 `npm` 版本选项
`--force-git-tag` [#](https://github.com/lerna/lerna/tree/main/commands/version#--force-git-tag) | 此选项替换任何现有标记而不是失败
`--tag-version-prefix` [#](https://github.com/lerna/lerna/tree/main/commands/version#--tag-version-prefix) | 此选项允许提供自定义前缀而不是默认前缀：`v`
`--yes` [#](https://github.com/lerna/lerna/tree/main/commands/version#--yes) | 使用此标志运行时，`lerna` 版本将跳过所有确认提示
<!--rehype:className=style-list-arrow-->

#### 不推荐使用的选项

:- | :-
:- | :-
`--cd-version` [#](https://github.com/lerna/lerna/tree/main/commands/version#--cd-version) | 将 `semver` 关键字传递给 [bump](https://github.com/lerna/lerna/tree/main/commands/version#semver-bump) 位置
`--repo-version` [#](https://github.com/lerna/lerna/tree/main/commands/version#--repo-version) | 将明确的版本号传递给 [bump](https://github.com/lerna/lerna/tree/main/commands/version#semver-bump) 位置
`--skip-git` [#](https://github.com/lerna/lerna/tree/main/commands/version#--skip-git) | 请改用 `--no-git-tag-version` 和 `--no-push`
<!--rehype:className=style-list-arrow-->

### bootstrap

将本地包`链接`在一起，并`安装`其余的包依赖项

```bash
$ lerna bootstrap -- --production \
                     --no-optional
$ lerna bootstrap --hoist
```

:- | :-
:- | :-
`--hoist [glob]` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--strict) | 在 `repo` 根目录安装与 `glob` 匹配的外部依赖项，以便它们可用于所有包
`--strict` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--nohoist-glob) | 与提升 _(hoist)_ 一起使用时，会在发出版本警告后抛出错误并停止引导
`--nohoist [glob]` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--nohoist-glob) | 不要在 `repo` 根目录安装与 `glob` 匹配的外部依赖项。这可用于选择不提升某些依赖项
`--ignore` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--ignore) | 当与 `bootstrap` 命令一起使用时，还可以在 `lerna` 中设置 `--ignore` 标志
<!--rehype:className=style-list-arrow-->

#### 选项

:- | :-
:- | :-
`--ignore-prepublish` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--ignore-prepublish) | 跳过默认在引导程序包中运行的预发布生命周期脚本
`--ignore-scripts` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--ignore-scripts) | 跳过通常在引导程序包中运行（准备等）的任何生命周期脚本
`--registry <url>` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--registry-url) | 指定 npm 包的仓库地址
`--npm-client <client>` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--npm-client-client) | 必须是知道如何安装 `npm` 包依赖项的可执行文件
`--use-workspaces` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--use-workspaces) | 启用与 `Yarn Workspaces` 的集成(从 `yarn@0.27+` 开始可用)
`--no-ci` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--no-ci) | 在 `CI` 环境中调用 `npm ci` 而不是 `npm install`
`--force-local` [#](https://github.com/lerna/lerna/tree/main/commands/bootstrap#--force-local) | 此标志会导致引导命令始终对本地依赖项进行符号链接，而不管匹配的版本范围如何
<!--rehype:className=style-list-arrow-->

### info 本地环境信息

```bash
$ lerna info

lerna notice cli v6.0.0
 Environment info:

  System(系统):
    OS: macOS 12.2
    CPU: (8) x64 Apple M1
  Binaries(二进制文件):
    Node: 16.17.0 - /usr/local/bin/node
    Yarn: 1.22.10 - /usr/local/bin/yarn
    npm: 8.5.0 - /usr/local/bin/npm
  Utilities(实用程序):
    Git: 2.33.0 - /opt/homebrew/bin/git
  npmPackages:
    lerna: ^6.0.0 => 6.0.0
```

### 过滤选项
<!--rehype:wrap-class=col-span-2 row-span-2-->

```bash
$ lerna exec --scope my-component -- ls -la
$ lerna run --scope toolbar-* test
$ lerna run --scope package-1 --scope *-2 lint

$ lerna exec --ignore package-{1,2,5}  -- ls -la
$ lerna run --ignore package-1  test
$ lerna run --ignore package-@(1|2) --ignore package-3 lint

# 列出自最新标签以来已更改的包的内容
$ lerna exec --since -- ls -la
# 对自 main 以来发生更改的所有包运行测试
$ lerna run test --since main
# 列出自 some-branch 以来发生变化的所有包
$ lerna ls --since some-branch

# my-component 及其所有依赖项将被引导
$ lerna bootstrap --scope my-component --include-dependencies

$ lerna bootstrap --scope "package-*" --ignore "package-util-*" --include-dependencies
# 所有匹配 “package-util-*” 的包都将被忽略，除非它们是
# 依赖于名称与 “package-*” 匹配的包
```

#### 选项

:- | :-
:- | :-
`--scope <glob>` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--scope-glob) | 仅包括名称与给定 `glob` 匹配的包
`--ignore <glob>` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--ignore-glob) | 排除名称与给定 `glob` 匹配的包
`--no-private` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--no-private) | 排除私有包
`--since [ref]` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--since-ref) | 仅包括自指定 `ref` 以来已更改的包
`--exclude-dependents` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--exclude-dependents) | 使用 `--since` 运行命令时排除所有传递依赖项，覆盖默认的“changed”算法
`--include-dependents` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--include-dependents) | 无论 `--scope`、`--ignore` 或 `--since` 是什么，在运行命令时都包括所有传递依赖项
`--include-dependencies` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--include-dependencies) | 无论 `--scope`、`--ignore` 或 `--since` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--since-ref) 是什么，在运行命令时都包括所有传递依赖项
`--include-merged-tags` [#](https://github.com/lerna/lerna/tree/main/core/filter-options#--include-merged-tags) | 使用 `--since` 运行命令时包括来自合并分支的标签

### list

列出本地程序包，也尊重所有可用的[过滤选项](#过滤选项)

```bash
# 与 lerna list 相同，它本身类似于 ls 命令
lerna ls
# 相当于 lerna ls -l，显示长输出
lerna ll
# 相当于 lerna ls -la，显示所有包(包括私有包）
lerna la
```

#### 选项

:- | :-
:- | :-
`--json` | 显示为 JSON [#](https://github.com/lerna/lerna/tree/main/commands/publish#--json)
`--ndjson` | 换行符分隔 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--ndjson)
`-a,--all` | 所有包 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--all)
`-l,--long` | 显示扩展信息 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--long)
`-p,--parseable` | 显示可解析的输出 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--parseable)
`--toposort` | 按拓扑排序 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--toposort)
`--graph` | JSON 格式邻接依赖关系图 [#](https://github.com/lerna/lerna/tree/main/commands/publish#--graph)

### changed

列出自上次标记版本以来已更改的本地软件包

- `lerna changed` 支持 `lerna ls` 支持的所有[选项](#选项-1)
- 与 `lerna ls` 不同的是不支持过滤器选项
<!--rehype:className=style-round-->

`lerna changed` 支持 `lerna version` 的以下选项

:- | :-
:- | :-
`--conventional-graduate` | [#](https://github.com/lerna/lerna/tree/main/commands/publishhttps://github.com/lerna/lerna/tree/main/commands/version#--conventional-graduate)
`--force-publish` | [#](https://github.com/lerna/lerna/tree/main/commands/publishhttps://github.com/lerna/lerna/tree/main/commands/version#--force-publish)
`--ignore-changes` | [#](https://github.com/lerna/lerna/tree/main/commands/publishhttps://github.com/lerna/lerna/tree/main/commands/version#--ignore-changes)
`--include-merged-tags` | [#](https://github.com/lerna/lerna/tree/main/commands/publishhttps://github.com/lerna/lerna/tree/main/commands/version#--include-merged-tags)

### init

创建新的 Lerna 仓库或将现有仓库升级到当前版本 Lerna

- 如果 `lerna` 不存在，请将其添加到 `package.json` 中的 `devDependency`
- 创建一个 `lerna.json` 配置文件来存储版本号
- 如果不存在 `.gitignore`，则生成一个忽略文件
<!--rehype:className=style-timeline-->

---

```shell
$ lerna init --independent
```

---

:- | :-
:- | :-
`--independent` [#](https://github.com/lerna/lerna/tree/main/commands/init#--independent) | 使用独立版本控制模式 [#](https://github.com/lerna/lerna/tree/main/commands/init#--independent)
`--exact` [#](https://github.com/lerna/lerna/tree/main/commands/init#--exact) | 添加或更新 `lerna` 的本地版本时将使用插入符范围 [#](https://github.com/lerna/lerna/tree/main/commands/init#--exact)

它将配置 `lerna.json` 以强制所有后续执行完全匹配

```js
{
  "command": {
    "init": {
      "exact": true
    }
  },
  "version": "0.0.0"
}
```

### import

将一个包导入到带有提交历史的 `monorepo`

```bash
# 开始使用 Lerna
$ git init lerna-repo && cd lerna-repo
$ npx lerna init
$ npm install
# 添加提交
$ git add .
# 如果没有提交，导入命令将失败
$ git commit -m "Initial lerna commit"
# 导入其他存储库
$ npx lerna import <外部存储库的路径>
$ npx lerna import ~/Product --flatten
```

选项

:- | :-
:- | :-
`--flatten` [#](https://github.com/lerna/lerna/tree/main/commands/import#--flatten) | 当导入具有冲突的合并提交的存储库时，导入命令将无法尝试应用所有提交
`--dest` [#](https://github.com/lerna/lerna/tree/main/commands/import#--dest) | 导入仓库时，可以通过 `lerna.json` 中列出的目录来指定目标目录
`--preserve-commit` [#](https://github.com/lerna/lerna/tree/main/commands/import#--preserve-commit) | 每个 git 提交都有一个作者和一个提交者
<!--rehype:className=style-list-arrow-->

### add
<!--rehype:wrap-class=row-span-2-->

将依赖项添加到匹配的包

```shell
$ lerna add <package>[@version] \
        [--dev] [--exact] [--peer]
```

选项

:- | :-
:- | :-
`--dev` [#](https://github.com/lerna/lerna/tree/main/commands/add#--dev) | 将新包添加到 `devDependencies`
`--exact` [#](https://github.com/lerna/lerna/tree/main/commands/add#--exact) | 添加具有精确版本（例如 `1.0.1`）而不是默认 `^` semver 范围（例如 `^1.0.1`）的新包
`--peer` [#](https://github.com/lerna/lerna/tree/main/commands/add#--peer) | 将新包添加到 `peerDependencies`
`--registry <url>` [#](https://github.com/lerna/lerna/tree/main/commands/add#--registry-url) | 使用自定义注册表安装目标包
`--no-bootstrap` [#](https://github.com/lerna/lerna/tree/main/commands/add#--no-bootstrap) | 跳过链式 `lerna bootstrap`
<!--rehype:className=style-list-arrow-->

实例

```bash
# 将 mod-1 包添加到“prefix-”前缀文件夹中的包中
$ lerna add mod-1 packages/prefix-*
# 将 mod-1 安装到mod-2
$ lerna add mod-1 --scope=mod-2
# 在 devDependencies 中安装 mod-1 到 mod-2
$ lerna add mod-1 --scope=mod-2 --dev
# 在 peerDependencies 中安装 mod-1 到 mod-2
$ lerna add mod-1 --scope=mod-2 --peer
# 在除 mod-1 之外的所有模块中安装 mod-1
$ lerna add mod-1
# 在所有模块中安装 babel-core
$ lerna add babel-core
```

### diff

比较自上次发布以来的所有包或单个包

```bash
$ lerna diff [package]
$ lerna diff
$ lerna diff package-name # 区分一个特定的包
```

类似于 `lerna changed`，此命令运行 `git diff`

### clean

从所有包中删除 `node_modules` 目录

```bash
$ lerna clean
```

接受所有[过滤选项](#过滤选项)。`lerna clean` 不会从根 `node_modules` 目录中删除模块，即使您启用了 `--hoist` 选项

### add-caching

运行设置基本缓存选项的向导

```bash
$ lerna add-caching
```

### link

将所有相互依赖的包符号链接在一起

```bash
$ lerna link
```

[`--force-local`](https://github.com/lerna/lerna/tree/main/commands/link#--force-local) 设置会导致链接命令始终对本地依赖项进行符号链接

### repair

更新配置文件以匹配当前安装的 lerna 版本

```bash
$ npm i lerna@latest
$ lerna repair
```

[`lerna repair`](https://github.com/lerna/lerna/tree/main/core/lerna/commands/repair#usage) 在升级后最有用，可确保应用新版本 lerna 的任何配置文件更改
