pnpm 备忘清单
===

这是一份 [`pnpm`](https://pnpm.io/) 软件包管理器备忘单，其中列出了 `pnpm` 常用命令使用清单。

入门
---

### pnpm 与 npm 命令比较

npm | pnpm | 说明
:- | :- | :-
`npm install` | `pnpm install` | 安装依赖
`npm init` | `pnpm init` | 创建 `package.json` 文件
`npm install <package>` | `pnpm add <package>` | 安装包
`npm install -g <package>` | `pnpm add -g <package>` | 全局安装包
`npm update` | `pnpm update` | 更新包
`npm cache clean` | `pnpm cache clean` | 清理缓存

### pnpm install

```shell
--no-lockfile # 不生成 pnpm-lock.yaml 锁定文件
--force # 强制覆盖现有的 node_modules
--frozen-lockfile # 忽略 pnpm-lock.yaml 中的更改
--offline # 离线模式，不尝试从远程仓库安装包
--shamefully-hoist # 类似于 npm 的 hoist 行为
--strict-peer-dependencies # 严格检查 peer dependencies
```

这些选项可用于 `pnpm install`。

### pnpm add

```shell
--save # 将包添加到 dependencies
--save-dev # 将包添加到 devDependencies
--global # 全局安装包
--exact # 安装精确版本号的包
--shamefully-hoist # 类似于 npm 的 hoist 行为
--strict-peer-dependencies # 严格检查 peer dependencies
```

这些选项可用于 `pnpm add`。

### pnpm remove

```shell
# 从依赖中删除包
pnpm remove <package>
```

### pnpm update

```shell
# 更新所有包
pnpm update
# 更新特定包
pnpm update <package>
# 更新到最新版本（包括 major 版本）
pnpm update --latest
```

### pnpm list

```shell
# 列出所有已安装的包
pnpm list
# 列出全局安装的包
pnpm list -g
# 查找过时的包
pnpm outdated
```

### pnpm cache

```shell
# 清理 pnpm 缓存
pnpm cache clean
# 查看缓存中所有的包
pnpm cache list
```

### pnpm why

```shell
# 显示为什么安装了某个包
pnpm why <package>
```

示例
---

### 安装包

```bash
# 将包添加到“dependencies”
pnpm add <package>
# 将包添加到“devDependencies”
pnpm add -D <package>
# 将包作为精确版本添加
pnpm add --exact <package>
# 在全局范围内安装包
pnpm add -g <package>
# 安装特定版本的包
pnpm add <package>@<version>
```

### 移除包

```bash
pnpm remove <package>
```

### 查看包

```bash
# 列出已安装的包
pnpm list
# 列出顶级安装的包
pnpm list --depth 0
# 列出全局安装的包
pnpm list -g
# 根据模式和深度列出包
pnpm list --pattern "lodash" --depth 1
```

### 清除

```bash
# 清理 node_modules 并删除不必要的文件
pnpm prune
# 检查过时的包
pnpm outdated
```

### 信息

```bash
# 显示关于安装包的原因的信息
pnpm why <package>
```

### 清理缓存

```bash
# 清除 pnpm 的全局缓存
pnpm cache clean
```

此外，您可以指定一个或多个要清理的包。

Monorepo
---

### 创建 Monorepo 工作区

1. 创建一个新的 pnpm 工作区：

```bash
pnpm init -w
```

这将在项目的根目录中创建一个 `pnpm-workspace.yaml` 文件，内容如下：

```yaml
packages:
  - 'packages/**'
  - 'apps/**'
```

2. 在 `pnpm-workspace.yaml` 中定义您的工作区结构：

```yaml
packages:
  - 'packages/*'
  - 'apps/*'
```

### 添加包到 Monorepo 工作区

```bash
# 在工作区中添加包
pnpm add <package> -w
```

### 运行脚本

```bash
# 在所有包中运行脚本
pnpm -r run <script>
# 仅在某个包中运行脚本
pnpm --filter <package> run <script>
# 在某个包及其依赖中运行脚本
pnpm --filter <package>... run <script>
```

### 添加工作区范围的依赖

```bash
# 添加依赖到工作区根目录
pnpm add <package> -w
# 添加开发依赖到工作区根目录
pnpm add -D <package> -w
```

### 创建新的包

在 `packages` 目录中创建新的包，例如：

```bash
mkdir packages/new-package
cd packages/new-package
pnpm init
```

### 链接本地包

```bash
# 将本地包链接到当前工作区
pnpm link <local-package-path>
# 链接工作区中的包
pnpm add <local-package-name> --workspace
```

高级用法
---

### 工作区

```bash
# 创建工作区
pnpm init -w
# 在工作区中添加包
pnpm add <package> -w
```

### 链接

```bash
# 链接一个全局包到当前项目
pnpm link <package>
# 链接本地包到全局
pnpm link --global <package>
```

### 运行脚本

```bash
# 运行 package.json 中的脚本
pnpm run <script>
# 运行根目录中的包的脚本
pnpm run -w <script>
```

另见
---

- [pnpm 官方文档网站](https://pnpm.io/)
- [pnpm 常见问题解答](https://pnpm.io/motivation)
