Yarn 备忘清单
===

这是一份 [`Yarn`](https://yarnpkg.com/) 软件包管理器备忘单，其中列出了 `Yarn` 常用命令使用清单

入门
---

### Yarn 与 npm 命令比较
<!--rehype:wrap-class=col-span-2-->

npm(v5) | yarn | 说明
:- | :- | :-
`npm install`     | `yarn add`, `yarn`| 安装依赖
`npm init`        | `yarn init` | 创建 `package.json` 文件
`npm install gulp --save` | `yarn add gulp` | 安装 `gulp` 包
`npm install gulp --save-dev --save-exact` | `yarn add gulp --dev --exact`
`npm install -g gulp` | `yarn global add gulp`
`npm update` | `yarn upgrade`
`npm cache clean` | `yarn cache clean` | 清理缓存目录
`./node_modules/.bin/gulp` | `yarn run gulp`
<!--rehype:className=show-header left-align-->

npm _([备忘清单](./npm.md))_ 和 Yarn 有很多相似之处

### yarn install

```shell
--no-lockfile # 不要读取或生成 yarn.lock 锁定文件
--pure-lockfile
--frozen-lockfile
--silent
--offline
--update-checksums
--check-files
--flat
--force
--ignore-scripts
--modules-folder <path>
--production[=true|false]
```

这些选项可用于 `yarn install`

### yarn add
<!--rehype:wrap-class=row-span-2-->

在 [devDependencies](./package.json.md#devdependencies) 中安装一个或多个包

```shell
--dev, -D
```

在 [peerDependencies](./package.json.md#peerdependencies) 中安装一个或多个包

```shell
--peer, -P
```

在 [optionalDependencies](./package.json.md#optionaldependencies) 中安装一个或多个包

```shell
--optional, -O
```

更改包版本

```shell
--exact, -E # 将包安装为精确版本
--tilde, -T # 安装有相同次要版本的包的最新版本
```

这些选项可用于 `yarn add`.

### Workspaces
<!--rehype:wrap-class=row-span-2-->

在 `package.json` 中 [workspaces](./package.json.md#workspaces) 配置:

```json
"workspaces": [
  "packages/*"
]
```

----

```bash
jest/
├─ package.json
└─ packages/
   ├─ jest-matcher-utils/
   │  └─ package.json
   └─ jest-diff/
      └─ package.json
```

(1.0 新增)允许 monoreso 相互共享包。另见：[介绍工作空间](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

### 选择性版本解析

在 `package.json` 中 [`resolutions`](./package.json.md#resolutions) 配置:

```json
"resolutions": {
  "**/sass-brunch/node-sass": "4.5.2"
}
```

另见：[选择性版本解析](https://github.com/yarnpkg/yarn/pull/4105)。(1.0 新增)允许您指定子依赖项的版本

### Create

```bash
yarn create react-app hello
```

安装 `create react app` 并运行它 See: [yarn create](https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-yarn-create.md)

示例
---

### 安装包
<!--rehype:wrap-class=row-span-2-->

```bash
# 将包添加到“dependencies”
$ yarn add <package>
# 将包添加到“devDependencies”
$ yarn add -D <package>
# 将软件包添加为确切版本
$ yarn add -E <package>
# 在您的操作系统上全局安装软件包
$ yarn global add <package>
```

### 移除包

```bash
$ yarn remove <package>
```

从所有类型的依赖项中删除包

### 查看包
<!--rehype:wrap-class=row-span-2-->

```bash
# 列出已安装的软件包
$ yarn list
# 列出顶级安装包
$ yarn list --depth=0
# 列出已安装的顶级全局包
$ yarn global list --depth=0
# 列出带有过滤字符串和深度级别的包
$ yarn list --pattern "gulp|grunt" --depth=1
```

### 清除

```bash
# 从包依赖项中清理并删除不必要的文件
$ yarn autoclean
# 检查过时的包依赖项
$ yarn outdated
```

### 信息

```bash
$ yarn why <query>
$ yarn why jest
```

显示有关安装软件包的原因的信息

### 清理缓存

运行此命令将清除全局缓存。 下次运行 `yarn` 或 `yarn install` 时，它将再次填充

```bash
$ yarn cache clean
```

此外，您可以指定一个或多个要清理的包

另见
---

- [npm 备忘清单](./npm.md)
- [Yarn 官方文档网站](https://yarnpkg.com/)
- [Yarn 2 中文文档网站](https://www.yarnpkg.cn/)
- [Yarn 1 中文文档网站](https://yarn.bootcss.com/) _(bootcss.com)_
