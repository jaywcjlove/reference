Bun 备忘清单
===

这是一份 [`Bun`](https://bun.sh/) 软件包管理器备忘单，其中列出了 `Bun` 常用命令使用清单

入门
---

### 安装 Bun

```bash
curl -fsSL https://bun.sh/install | bash
```

### Bun 与 npm/Yarn 命令比较
<!--rehype:wrap-class=col-span-2 row-span-3-->

npm | Yarn | Bun | 说明
:- | :- | :- | :-
`npm install` | `yarn add` | `bun add` | 安装依赖
`npm init` | `yarn init` | `bun init` | 创建 `package.json` 文件
`npm install -g` | `yarn global add` | `bun global add` | 全局安装包
`npm run` | `yarn run` | `bun run` | 运行脚本
`npm uninstall` | `yarn remove` | `bun remove` | 移除包
`npm update` | `yarn upgrade` | `bun upgrade` | 更新包
`npm cache clean` | `yarn cache clean` | `bun cache clean` | 清理缓存目录
<!--rehype:className=left-align-->

参考备忘清单： [npm](./npm.md)、[yarn](./yaml.md)、[pnpm](./pnpm.md)

### 创建项目

```bash
bun create <template> <project-name>
```

示例:

```bash
bun create react my-react-app
```

### 查看已安装包

```bash
bun ls
```

### 安装依赖
<!--rehype:wrap-class=row-span-2-->

```bash
bun add <package>
```

选项:

```bash
--dev, -D    # 安装到 devDependencies
--global, -g # 全局安装包
--exact, -E  # 将包安装为精确版本
--tilde, -T  # 安装有相同次要版本的包的最新版本
```

### 运行脚本
<!--rehype:wrap-class=row-span-3-->

在 `package.json` 中定义脚本:

```json
"scripts": {
  "start": "node index.js",
  "test": "jest"
}
```

运行脚本:

```bash
bun run <script>
```

例如:

```bash
bun run start
```

### 移除依赖

```bash
bun remove <package>
```

### 更新依赖

```bash
bun upgrade
```

选项:

```bash
--latest # 更新到最新版本
```

### 清理缓存

```bash
bun cache clean
```

### 安装全局包

```bash
bun global add <package>
```

### 移除全局包

```bash
bun global remove <package>
```

### Bun 提供的其他命令

```bash
bun bunfile # 管理 Bunfile
bun dev # 运行开发服务器
bun test # 运行测试
bun completions # 生成 shell 补全脚本
```

包管理器
---

### bin 目录的路径

要打印本地项目的 `bin` 目录的路径

```bash
bun pm bin
# /path/to/current/pro/node_modules/.bin
```

全局 bin 目录

```bash
bun pm bin -g
# <$HOME>/.bun/bin
```

### 打印依赖项

```bash
bun pm ls --all
# /path/to/project node_modules (135)
# ├── @eslint-community/eslint-utils@4.4.0
# ├── @eslint-community/regexpp@4.5.0
# ├── @eslint/eslintrc@2.0.2
# ├── @eslint/js@8.38.0
# ├── ...
```

打印所有已安装的依赖项，包括 `n` 阶依赖项。

### 打印已安装及已解决依赖项

```bash
bun pm ls
# /path/to/project node_modules (135)
# ├── eslint@8.38.0
# ├── react@18.2.0
# ├── react-dom@18.2.0
# ├── typescript@5.0.4
# └── zod@3.21.4
```

打印当前项目中已安装依赖项及其已解决版本的列表，不包括其依赖项

### 全局模块缓存的路径

```bash
bun pm cache
```

要打印 Bun 的全局模块缓存的路径

### 清除全局模块缓存

```bash
bun pm cache rm
```

### 列出全局安装

列出所有全局安装的软件包：

```bash
bun pm ls -g
```

列出所有全局安装的软件包，包括 n 阶依赖项：

```bash
bun pm ls -g --all
```

示例
---

### 安装包
<!--rehype:wrap-class=row-span-2-->

```bash
# 将包添加到 dependencies
$ bun add <package>
# 将包添加到 devDependencies
$ bun add -D <package>
# 将包安装为精确版本
$ bun add -E <package>
# 全局安装包
$ bun global add <package>
```

### 移除包

```bash
$ bun remove <package>
```

从所有类型的依赖项中删除包

### 查看包

```bash
# 列出已安装的软件包
$ bun ls
```

### 清除缓存

```bash
$ bun cache clean
```

清理缓存目录

### 运行脚本

```bash
$ bun run <script>
```

在 `package.json` 中定义的脚本将被执行

另见
---

- [Bun 官方文档](https://bun.sh/docs)
- [Bun GitHub 仓库](https://github.com/oven-sh/bun)
- [Bun 快速上手](https://bun.sh/docs/quickstart)
