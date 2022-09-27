npm 备忘清单
===

这个 npm 快速参考备忘单显示了它的常用命令使用清单。

常用命令
----

### 包管理

| 命令                               | 描述                                     |
| ---                               | ---                                      |
| `npm i`                           | `npm install`的别名                      |
| `npm install`                     | 安装 package.json 中的所有内容              |
| `npm install --production`        | 安装 package.json 中的所有内容，除了 devDependecies   |
| `npm install lodash`              | 安装一个包                  |
| `npm install --save-dev lodash`   | 安装为 devDependency       |
| `npm install --save-exact lodash` | 准确安装                    |

`--save` 是 npm@5 的默认值。 以前，使用不带 `--save` 的 `npm install` 不会更新 package.json。

### 安装名称

| 命令                                  | 描述             |
| ---                                  | ---               |
| `npm i sax`                          | NPM 包             |
| `npm i sax@latest`                   | 指定标签“最新”       |
| `npm i sax@3.0.0`                    | 指定版本 `3.0.0`     |
| `npm i sax@">=1 <2.0"`               | 指定版本范围         |
| `npm i @org/sax`                     | 范围内的 NPM 包     |
| `npm i user/repo`                    | GitHub             |
| `npm i user/repo#master`             | GitHub             |
| `npm i github:user/repo`             | GitHub             |
| `npm i gitlab:user/repo`             | GitLab             |
| `npm i /path/to/repo`                | 绝对路径            |
| `npm i ./archive.tgz`                | 压缩包             |
| `npm i https://site.com/archive.tgz` | 通过 HTTP 压缩包    |

### 清单

| 命令                     | 描述               |
| ---                     | --- |
| `npm list`              | 列出此软件中所有依赖项的已安装版本 | 
| `npm list -g --depth 0` | 列出所有全局安装包的安装版本 | 
| `npm view`              | 列出此软件中所有依赖项的最新版本 | 
| `npm outdated`          | 仅列出此软件中已过时的依赖项  |

### 更新

| 命令                 | 描述     |
| ---                 | ---       |
| `npm update`        | 更新生产包 |
| `npm update --dev`  | 更新开发包 |
| `npm update -g`     | 更新全局包 |
| `npm update lodash` | 更新 lodash 包 |


### 杂项功能
<!--rehype:warp-class=col-span-2-->

将某人添加为所有者

```bash
npm owner add USERNAME PACKAGENAME
```

列出包

```bash
npm ls
```

向安装旧版本软件包的用户添加警告

```bash
npm deprecate PACKAGE@"< 0.2.0" "critical bug fixed in v0.2.0"
```

更新所有包或选定的包

```bash
npm update [-g] PACKAGE
```

检查过时的包

```bash
npm outdated [PACKAGE]
```